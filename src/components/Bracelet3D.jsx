
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';

export default function Bracelet3D() {
  const mountRef = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const host = mountRef.current;
    if (!host) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#e9e2da');

    const camera = new THREE.PerspectiveCamera(
      35,
      host.clientWidth / host.clientHeight,
      0.1,
      100
    );
    camera.position.set(2.8, 2.0, 5.8);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: false
    });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(host.clientWidth, host.clientHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;

    host.appendChild(renderer.domElement);

    // --------------------------------
    // LIGHTING
    // --------------------------------

    scene.add(
      new THREE.HemisphereLight(0xffffff, 0x76675b, 2.1)
    );

    const keyLight = new THREE.DirectionalLight(0xffffff, 3);
    keyLight.position.set(3, 5, 5);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.set(2048, 2048);
    scene.add(keyLight);

    const warmLight = new THREE.DirectionalLight(0xffa45c, 2);
    warmLight.position.set(-4, 1, -3);
    scene.add(warmLight);

    const frontLight = new THREE.PointLight(0xffffff, 1.2);
    frontLight.position.set(0, 2, 4);
    scene.add(frontLight);

    // --------------------------------
    // MATERIALS
    // --------------------------------

    const silicone = new THREE.MeshStandardMaterial({
      color: '#17191d',
      roughness: 0.48,
      metalness: 0.05
    });

    const metal = new THREE.MeshStandardMaterial({
      color: '#343a40',
      roughness: 0.23,
      metalness: 0.88
    });

    const blackGlass = new THREE.MeshPhysicalMaterial({
      color: '#080b10',
      roughness: 0.12,
      metalness: 0.25,
      clearcoat: 1,
      clearcoatRoughness: 0.08
    });

    const product = new THREE.Group();
    scene.add(product);

    // --------------------------------
    // SILICONE STRAP
    // Custom wide 3D ribbon
    // --------------------------------

    function createStrap() {
      const segments = 180;
      const widthSegments = 12;

      const positions = [];
      const indices = [];
      const uvs = [];

      const rx = 0.83;
      const ry = 1.43;
      const thickness = 0.13;
      const width = 0.43;

      for (let i = 0; i <= segments; i++) {
        const t = (i / segments) * Math.PI * 2;

        const x = rx * Math.cos(t);
        const y = ry * Math.sin(t);

        const nx = Math.cos(t);
        const ny = Math.sin(t);

        for (let j = 0; j <= widthSegments; j++) {
          const u = (j / widthSegments) * 2 - 1;

          const px = x + nx * thickness * u;
          const py = y + ny * thickness * u;
          const pz = (width / 2) * (1 - 2 * j / widthSegments);

          positions.push(px, py, pz);
          uvs.push(i / segments, j / widthSegments);
        }
      }

      for (let i = 0; i < segments; i++) {
        for (let j = 0; j < widthSegments; j++) {
          const a = i * (widthSegments + 1) + j;
          const b = a + widthSegments + 1;

          indices.push(a, b, a + 1);
          indices.push(b, b + 1, a + 1);
        }
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute(
        'position',
        new THREE.Float32BufferAttribute(positions, 3)
      );
      geometry.setAttribute(
        'uv',
        new THREE.Float32BufferAttribute(uvs, 2)
      );
      geometry.setIndex(indices);
      geometry.computeVertexNormals();

      const strap = new THREE.Mesh(geometry, silicone);
      strap.castShadow = true;
      strap.receiveShadow = true;

      // Give the ribbon thickness with a second,
      // slightly offset surface.
      const back = strap.clone();
      back.material = silicone;
      back.scale.set(0.985, 0.985, 1);

      product.add(back);
      product.add(strap);
    }

    createStrap();

    // --------------------------------
    // STRAP ADJUSTMENT HOLES
    // --------------------------------

    const holeMaterial = new THREE.MeshStandardMaterial({
      color: '#08090b',
      roughness: 0.9
    });

    for (let i = 0; i < 7; i++) {
      const t = -0.95 + i * 0.19;

      const hole = new THREE.Mesh(
        new THREE.CapsuleGeometry(0.045, 0.085, 4, 8),
        holeMaterial
      );

      const x = 0.83 * Math.cos(t);
      const y = 1.43 * Math.sin(t);

      hole.position.set(x + 0.08, y, 0.225);
      hole.rotation.z = -0.1;

      product.add(hole);
    }

    // --------------------------------
    // WATCH BODY
    // --------------------------------

    const body = new THREE.Mesh(
      new RoundedBoxGeometry(1.08, 1.60, 0.34, 12, 0.19),
      metal
    );

    body.position.set(0, 0, 0.10);
    body.castShadow = true;
    body.receiveShadow = true;
    product.add(body);

    // Black internal casing
    const casing = new THREE.Mesh(
      new RoundedBoxGeometry(1.02, 1.54, 0.09, 12, 0.17),
      blackGlass
    );

    casing.position.set(0, 0, 0.29);
    product.add(casing);

    // Raised glass bezel
    const bezel = new THREE.Mesh(
      new RoundedBoxGeometry(0.94, 1.45, 0.045, 12, 0.15),
      metal
    );

    bezel.position.set(0, 0.015, 0.34);
    product.add(bezel);

    // --------------------------------
    // REALISTIC DISPLAY UI
    // Canvas texture
    // --------------------------------

    function createDisplayTexture() {
      const canvas = document.createElement('canvas');
      canvas.width = 512;
      canvas.height = 800;

      const ctx = canvas.getContext('2d');

      ctx.fillStyle = '#080d14';
      ctx.fillRect(0, 0, 512, 800);

      const cyan = '#20b9e0';
      const white = '#f5f4f1';
      const grey = '#aeb6c0';
      const orange = '#ff514b';

      // Top status bar
      ctx.fillStyle = white;
      ctx.font = 'italic 34px Arial';
      ctx.fillText('09:24', 48, 58);

      ctx.font = '27px Arial';
      ctx.fillText('▰ 87%', 355, 58);

      // Wave icon
      ctx.fillStyle = cyan;
      ctx.font = 'bold 88px Arial';
      ctx.fillText('◔', 45, 175);

      // Wave information
      ctx.fillStyle = white;
      ctx.font = 'italic 76px Arial';
      ctx.fillText('1.8', 230, 140);

      ctx.font = 'italic 38px Arial';
      ctx.fillText('m', 367, 140);

      ctx.fillStyle = grey;
      ctx.font = 'italic 29px Arial';
      ctx.fillText('Good waves', 230, 183);

      // Wind information
      ctx.fillStyle = cyan;
      ctx.font = 'bold 65px Arial';
      ctx.fillText('≋', 50, 292);

      ctx.fillStyle = white;
      ctx.font = 'italic 48px Arial';
      ctx.fillText('12 km/h', 230, 260);

      ctx.fillStyle = grey;
      ctx.font = 'italic 29px Arial';
      ctx.fillText('NW', 230, 302);

      // Tide information
      ctx.fillStyle = cyan;
      ctx.font = 'bold 65px Arial';
      ctx.fillText('≋', 55, 412);

      ctx.fillStyle = white;
      ctx.font = 'italic 38px Arial';
      ctx.fillText('High tide', 230, 380);

      ctx.fillStyle = grey;
      ctx.font = 'italic 32px Arial';
      ctx.fillText('16:20', 230, 425);

      // Divider
      ctx.strokeStyle = '#454d57';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(40, 475);
      ctx.lineTo(472, 475);
      ctx.stroke();

      // Calendar
      ctx.fillStyle = cyan;
      ctx.font = 'bold 65px Arial';
      ctx.fillText('▦', 48, 560);

      ctx.fillStyle = white;
      ctx.font = 'italic 37px Arial';
      ctx.fillText('Team Sync', 180, 535);

      ctx.fillStyle = grey;
      ctx.font = 'italic 26px Arial';
      ctx.fillText('10:00 AM (UTC+1)', 180, 580);

      // SOS button
      ctx.fillStyle = '#20242a';
      ctx.beginPath();
      ctx.roundRect(35, 625, 442, 115, 55);
      ctx.fill();

      ctx.fillStyle = orange;
      ctx.font = 'bold 47px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('◉ SOS', 256, 699);

      const texture = new THREE.CanvasTexture(canvas);
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.anisotropy = renderer.capabilities.getMaxAnisotropy();

      return texture;
    }

    const displayTexture = createDisplayTexture();

    const display = new THREE.Mesh(
      new THREE.PlaneGeometry(0.84, 1.31),
      new THREE.MeshBasicMaterial({
        map: displayTexture,
        toneMapped: false
      })
    );

    display.position.set(0, 0.015, 0.375);
    product.add(display);

    // --------------------------------
    // SIDE BUTTON
    // --------------------------------

    const sideButton = new THREE.Mesh(
      new RoundedBoxGeometry(0.13, 0.40, 0.16, 6, 0.06),
      metal
    );

    sideButton.position.set(0.57, 0.15, 0.08);
    product.add(sideButton);

    // Small button detail
    const buttonDetail = new THREE.Mesh(
      new THREE.CylinderGeometry(0.065, 0.065, 0.035, 32),
      blackGlass
    );

    buttonDetail.rotation.x = Math.PI / 2;
    buttonDetail.position.set(0.57, 0.15, 0.17);
    product.add(buttonDetail);

    // --------------------------------
    // BUCKLE
    // --------------------------------

    const buckleMaterial = new THREE.MeshStandardMaterial({
      color: '#969da5',
      metalness: 0.95,
      roughness: 0.2
    });

    const buckle = new THREE.Mesh(
      new THREE.TorusGeometry(0.19, 0.045, 12, 36),
      buckleMaterial
    );

    buckle.position.set(0.83, -0.15, 0);
    buckle.rotation.z = 0.2;
    product.add(buckle);

    // Strap keeper
    const keeper = new THREE.Mesh(
      new RoundedBoxGeometry(0.43, 0.24, 0.49, 8, 0.09),
      silicone
    );

    keeper.position.set(0.83, 0.35, 0);
    keeper.rotation.z = 0.15;
    product.add(keeper);

    // --------------------------------
    // GROUND
    // --------------------------------

    const floor = new THREE.Mesh(
      new THREE.CircleGeometry(5, 64),
      new THREE.MeshStandardMaterial({
        color: '#e7ded3',
        roughness: 0.9
      })
    );

    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -1.85;
    floor.receiveShadow = true;
    scene.add(floor);

    // --------------------------------
    // PRODUCT POSITION
    // --------------------------------

    product.rotation.x = -0.10;
    product.rotation.y = -0.10;
    product.rotation.z = -0.12;

    // --------------------------------
    // 360 DEGREE CONTROLS
    // --------------------------------

    const controls = new OrbitControls(
      camera,
      renderer.domElement
    );

    controls.enableDamping = true;
    controls.dampingFactor = 0.055;
    controls.enablePan = false;

    controls.minDistance = 3.2;
    controls.maxDistance = 8;

    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.65;

    controls.target.set(0, 0, 0);

    // --------------------------------
    // RESPONSIVE RESIZE
    // --------------------------------

    const resize = () => {
      if (!host) return;

      camera.aspect = host.clientWidth / host.clientHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(
        host.clientWidth,
        host.clientHeight
      );
    };

    const observer = new ResizeObserver(resize);
    observer.observe(host);

    // --------------------------------
    // ANIMATION
    // --------------------------------

    let frame;

    const animate = () => {
      frame = requestAnimationFrame(animate);

      controls.update();
      renderer.render(scene, camera);
    };

    animate();
    setReady(true);

    // --------------------------------
    // CLEANUP
    // --------------------------------

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      controls.dispose();

      scene.traverse((object) => {
        if (object.geometry) object.geometry.dispose();

        if (object.material) {
          const materials = Array.isArray(object.material)
            ? object.material
            : [object.material];

          materials.forEach((material) => {
            if (material.map) material.map.dispose();
            material.dispose();
          });
        }
      });

      renderer.dispose();

      if (host.contains(renderer.domElement)) {
        host.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="viewer-shell">
      <div className="viewer-canvas" ref={mountRef} />

      <div className="viewer-hint">
        <span className="drag-icon">↔</span>
        Drag to rotate · Scroll to zoom
      </div>

      {!ready && (
        <div className="viewer-loading">
          Preparing WaveBand 3D experience...
        </div>
      )}

      <div className="viewer-tag">
        360° PRODUCT VIEW
      </div>
    </div>
  );
}
