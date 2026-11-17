import React, { useEffect, useState } from 'react';
import { ArrowRight, Waves, ShieldCheck, CreditCard, CalendarDays, MapPin, Wind, Clock3, Menu, X, Star, Users, Globe2, Activity, Instagram, Linkedin, Youtube, ChevronDown, Check, Heart, Compass, Mail, Play } from 'lucide-react';
import Bracelet3D from './components/Bracelet3D.jsx';
import logoImage from '../logo.png';
import qrImage from '../qr_code.png';

const spots = [
  { name:'Taghazout', country:'Morocco', wave:'1.8 m', wind:'12 km/h NW', tide:'High tide · 16:20', temp:'24°', condition:'Good waves', image:'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=900&q=85' },
  { name:'Ericeira', country:'Portugal', wave:'1.4 m', wind:'9 km/h W', tide:'Rising · 14:45', temp:'21°', condition:'Clean sets', image:'https://images.unsplash.com/photo-1455729552865-3658a5d39692?auto=format&fit=crop&w=900&q=85' },
  { name:'Canggu', country:'Bali', wave:'1.2 m', wind:'7 km/h SE', tide:'Mid tide · 11:30', temp:'29°', condition:'Fun waves', image:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=85' }
];
const founders = [
  {name:'Saidi Bassem', role:'Co-Founder · Product & Technology', bio:'Passionate about building useful digital experiences and bringing the WaveBand idea to life.', initials:'SB'},
  {name:'Akkari Med Aziz', role:'Co-Founder · Strategy & Innovation', bio:'Focused on the product vision, user experience and the freedom of the surf-nomad lifestyle.', initials:'MA'},
  {name:'Salem Hafedh', role:'Co-Founder · Brand & Community', bio:'Bringing the community together through surf culture, storytelling and meaningful connections.', initials:'SH'}
];
const money = n => '€' + n;

function Logo({light=false}) { return <a className={`logo ${light?'logo-light':''}`} href="#home" aria-label="WaveBand home"><span className="logo-mark"><Waves size={27}/><i /></span><span>Wave<span>Band</span></span></a>; }

function Header() {
  const [open,setOpen]=useState(false);
  const [qrOpen,setQrOpen]=useState(false);
  const links=[['Home','#home'],['The bracelet','#bracelet'],['Features','#features'],['Surf forecast','#forecast'],['Pricing','#pricing'],['About us','#about']];
  return <>
    <header className="header"><div className="container nav-wrap"><a className="header-logo" href="#home" aria-label="WaveBand home"><img src={logoImage} alt="WaveBand" /></a><nav className={open?'nav nav-open':'nav'}>{links.map(([label,href])=><a key={href} href={href} onClick={()=>setOpen(false)}>{label}</a>)}</nav><div className="header-actions"><button type="button" className="qr-button" onClick={()=>setQrOpen(true)} aria-label="Open QR code"><img src={qrImage} alt="WaveBand QR code" /></button><a className="btn btn-small nav-cta" href="#pricing">Get WaveBand <ArrowRight size={15}/></a></div><button className="menu-btn" onClick={()=>setOpen(!open)} aria-label="Toggle navigation">{open?<X/>:<Menu/>}</button></div></header>
    {qrOpen && <div className="qr-modal" onClick={()=>setQrOpen(false)} role="dialog" aria-modal="true" aria-label="WaveBand QR code"><div className="qr-modal-card" onClick={e=>e.stopPropagation()}><button type="button" className="qr-close" onClick={()=>setQrOpen(false)} aria-label="Close QR code">×</button><img src={qrImage} alt="WaveBand QR code" /><p>Scan to discover WaveBand</p></div></div>}
  </>;
}

function Hero() {
 return <section className="hero" id="home"><div className="hero-photo"/><div className="hero-shade"/><div className="container hero-content">
  <div className="eyebrow"><span/> THE SMART BRACELET FOR SURF NOMADS</div>
  <h1>Ride confident.<br/>Work <em>anywhere.</em></h1>
  <p className="hero-copy">Your ocean companion, your safety net and your workday assistant — all on your wrist. Explore more, worry less and stay connected to what matters.</p>
  <div className="hero-actions"><a className="btn" href="#pricing">Discover WaveBand <ArrowRight size={17}/></a><a className="text-link" href="#bracelet"><span className="play"><Play size={13} fill="currentColor"/></span> Explore the bracelet</a></div>
  <div className="hero-proof"><div><Users/><strong>125K+</strong><small>Surf nomads</small></div><div><Globe2/><strong>67</strong><small>Countries explored</small></div><div><Star/><strong>4.8/5</strong><small>Community rating</small></div><div><Activity/><strong className="visitor-count">342,567</strong><small>Website visits*</small></div></div>
  <p className="demo-note">*Illustrative demo statistics for this startup concept.</p>
 </div><div className="hero-scroll">SCROLL TO EXPLORE <span/></div></section>;
}

function BraceletSection() {
 return <section className="section product-section" id="bracelet"><div className="container product-grid"><div className="product-copy"><div className="eyebrow dark">MEET YOUR NEW SURF COMPANION</div><h2>Small bracelet.<br/><em>Big freedom.</em></h2><p>WaveBand brings your surf life and your remote-work life together in one rugged, easy-to-wear device.</p><ul className="feature-list"><li><span><Waves/></span><div><b>Surf forecast</b><small>Wave height, wind and tide at a glance.</small></div></li><li><span><ShieldCheck/></span><div><b>One-press SOS</b><small>Share your GPS position when you need help.</small></div></li><li><span><CreditCard/></span><div><b>Contactless payments</b><small>Grab a coffee after a session, wallet-free.</small></div></li><li><span><CalendarDays/></span><div><b>Time-zone smart reminders</b><small>Never miss a client call across time zones.</small></div></li></ul><a href="#features" className="inline-link">Explore all features <ArrowRight size={16}/></a></div><div className="product-visual"><div className="product-glow"/><img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85" alt="Minimal black wearable watch concept" /><div className="floating-note"><span className="live-dot"/> BUILT FOR THE ELEMENTS</div></div></div></section>;
}

function FeatureCards() {
 const cards=[
  {icon:<Waves/>,tag:'01 / SURF SMART',title:'Know before you go.',desc:'Check wave height, wind direction and tide windows before you paddle out.',tone:'blue',img:'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=900&q=85'},
  {icon:<ShieldCheck/>,tag:'02 / STAY SAFE',title:'Confidence comes first.',desc:'Press SOS to share your location with your chosen emergency contacts.',tone:'orange',img:'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=85'},
  {icon:<CalendarDays/>,tag:'03 / WORK FREE',title:'Your time. Every time.',desc:'Meeting reminders adapt to your clients’ time zones wherever you roam.',tone:'sand',img:'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=85'}
 ];
 return <section className="section features-section" id="features"><div className="container"><div className="section-heading"><div><div className="eyebrow dark">MADE FOR YOUR KIND OF EVERYWHERE</div><h2>One wrist. <em>Four superpowers.</em></h2></div><p>Less screen time. More sea time. WaveBand keeps the essentials close without keeping you glued to your phone.</p></div><div className="feature-cards">{cards.map(c=><article className={`feature-card ${c.tone}`} key={c.tag}><div className="feature-card-image" style={{backgroundImage:`url(${c.img})`}}/><div className="feature-card-body"><div className="card-icon">{c.icon}</div><div className="eyebrow dark">{c.tag}</div><h3>{c.title}</h3><p>{c.desc}</p></div></article>)}</div></div></section>;
}

function Forecast() {
 const [active,setActive]=useState(0); const spot=spots[active];
 return <section className="section forecast-section" id="forecast"><div className="container forecast-grid"><div className="forecast-copy"><div className="eyebrow">THE OCEAN, AT A GLANCE</div><h2>Find your next<br/><em>perfect wave.</em></h2><p>From Morocco to Portugal to Bali, get a feel for the conditions before you leave your desk or your beach café.</p><div className="spot-tabs">{spots.map((s,i)=><button key={s.name} className={active===i?'spot-tab active':'spot-tab'} onClick={()=>setActive(i)}>{s.name}<small>{s.country}</small></button>)}</div><p className="forecast-disclaimer">Concept preview · Forecast figures are illustrative, not live marine data.</p></div><div className="forecast-card"><div className="forecast-top"><div><span className="mini-label">YOUR SPOT TODAY</span><h3><MapPin size={17}/>{spot.name}, {spot.country}</h3></div><span className="weather-pill">☀ {spot.temp}</span></div><div className="wave-metric"><div className="wave-symbol"><Waves size={58}/></div><div><strong>{spot.wave}</strong><span>{spot.condition}</span></div></div><div className="forecast-stats"><div><Wind/><b>{spot.wind}</b><small>Wind</small></div><div><Activity/><b>{spot.tide}</b><small>Tide</small></div><div><Clock3/><b>08:00–11:00</b><small>Suggested session</small></div></div><div className="chart-label"><span>WAVE OUTLOOK</span><span>NEXT 5 DAYS</span></div><div className="wave-chart"><svg viewBox="0 0 520 110" preserveAspectRatio="none"><path d="M0 70 C35 60 42 45 75 55 S125 90 160 67 S210 25 245 45 S295 82 330 60 S380 20 410 43 S470 76 520 28" fill="none" stroke="#f47b35" strokeWidth="3"/><path d="M0 70 C35 60 42 45 75 55 S125 90 160 67 S210 25 245 45 S295 82 330 60 S380 20 410 43 S470 76 520 28 L520 110 L0 110Z" fill="url(#wavefill)" opacity=".22"/><defs><linearGradient id="wavefill" x1="0" x2="0" y1="0" y2="1"><stop stopColor="#f47b35"/><stop offset="1" stopColor="#f47b35" stopOpacity="0"/></linearGradient></defs></svg></div><div className="chart-days"><span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span></div></div></div></section>;
}

function Community() {
 return <section className="community"><div className="community-bg"/><div className="container community-inner"><div className="eyebrow">GOOD WAVES ARE BETTER TOGETHER</div><h2>Your next surf buddy<br/>could be <em>one click away.</em></h2><p>Meet people heading to the same breaks, share a session plan and swap local tips. The WaveBand community is designed to bring surf nomads closer.</p><div className="community-stats"><div><strong>125K+</strong><span>Nomads in the concept community</span></div><div><strong>67</strong><span>Countries represented</span></div><div><strong>3,400+</strong><span>Potential surf meetups</span></div></div><a className="btn btn-light" href="#join">Join the community <ArrowRight size={16}/></a></div></section>;
}

function Pricing() {
 const [selected,setSelected]=useState('Nomad');
 const plans=[{name:'Explorer',price:99,desc:'For weekend wave chasers',items:['Surf forecast essentials','SOS location sharing','Basic meeting reminders']},{name:'Nomad',price:129,desc:'For life between breaks',items:['Everything in Explorer','Contactless payments','Smart time-zone reminders','Premium strap finish'],popular:true},{name:'Free Spirit',price:179,desc:'For the always-on-the-move',items:['Everything in Nomad','Extended warranty concept','Exclusive community perks','Priority product support']}];
 return <section className="section pricing-section" id="pricing"><div className="container"><div className="section-heading"><div><div className="eyebrow dark">YOUR NEXT CHAPTER STARTS HERE</div><h2>Choose your <em>wave.</em></h2></div><p>One-time concept pricing for the WaveBand bracelet. Pick the setup that fits your rhythm.</p></div><div className="pricing-grid">{plans.map(p=><article key={p.name} className={`price-card ${p.popular?'popular':''} ${selected===p.name?'selected':''}`}>{p.popular&&<div className="popular-label">MOST POPULAR</div>}<div className="price-top"><span className="plan-dot">{p.name==='Explorer'?'01':p.name==='Nomad'?'02':'03'}</span><h3>{p.name}</h3><p>{p.desc}</p></div><div className="price"><strong>{money(p.price)}</strong><span>one-time</span></div><ul>{p.items.map(item=><li key={item}><Check size={16}/>{item}</li>)}</ul><button className={p.popular?'btn price-btn':'btn btn-outline price-btn'} onClick={()=>setSelected(p.name)}>{selected===p.name?'Selected plan':'Choose '+p.name} <ArrowRight size={15}/></button></article>)}</div><p className="price-note">All prices are fictional estimates created for the WaveBand startup presentation. No real purchase is available.</p></div></section>;
}

function Founders() {
 return <section className="section about-section" id="about"><div className="container about-grid"><div className="about-intro"><div className="eyebrow">THREE FOUNDERS. ONE BIG HORIZON.</div><h2>Built by people<br/>who believe in <em>freedom.</em></h2><p>WaveBand is a student startup concept inspired by a simple idea: technology should make it easier to live the life you want — not pull you away from it.</p><a className="inline-link light-link" href="#join">Get in touch <ArrowRight size={16}/></a></div><div className="founder-cards">{founders.map((f,i)=><article className="founder-card" key={f.initials}><div className={`founder-avatar avatar-${i}`}>{f.initials}</div><div><h3>{f.name}</h3><span>{f.role}</span><p>{f.bio}</p></div><div className="founder-social"><a href="#join" aria-label={`${f.name} LinkedIn`}><Linkedin size={16}/></a><a href="#join" aria-label={`${f.name} Instagram`}><Instagram size={16}/></a></div></article>)}</div></div></section>;
}

function Reviews() {
 const reviews=[['“Finally, a concept that understands the balance between a remote-work life and the ocean.”','Maya R.','Lisbon, Portugal'],['“The SOS idea and surf forecast in one wearable? That is exactly the kind of freedom I want.”','Noah K.','Taghazout, Morocco'],['“A smart, clean idea for people who never stay in one place for too long.”','Lina S.','Canggu, Bali']];
 return <section className="section reviews-section"><div className="container"><div className="section-heading"><div><div className="eyebrow dark">WORDS FROM THE COMMUNITY</div><h2>Made for the <em>moving.</em></h2></div><div className="rating-summary"><div className="stars">★★★★★</div><b>4.8 / 5</b><span>Illustrative concept rating</span></div></div><div className="review-grid">{reviews.map(([quote,name,place])=><article className="review-card" key={name}><div className="stars">★★★★★</div><p>{quote}</p><div className="review-person"><span className="review-avatar">{name[0]}</span><div><b>{name}</b><small>{place}</small></div></div></article>)}</div><p className="price-note">Testimonials and ratings are fictional examples for this presentation concept.</p></div></section>;
}

function Join() {
 const [email,setEmail]=useState(''); const [done,setDone]=useState(false);
 return <section className="join-section" id="join"><div className="container join-inner"><div><div className="eyebrow">THE TIDE IS CALLING</div><h2>Make room for<br/><em>more ocean.</em></h2><p>Get product updates, surf inspiration and community news from WaveBand.</p></div><form className="join-form" onSubmit={e=>{e.preventDefault();if(email.includes('@'))setDone(true)}}><label htmlFor="email">Your email address</label><div className="email-field"><Mail size={18}/><input id="email" type="email" placeholder="you@example.com" value={email} onChange={e=>setEmail(e.target.value)} required/><button aria-label="Subscribe"><ArrowRight/></button></div><small>{done?'Thanks for joining the WaveBand concept list!':'No spam. Just good waves and good ideas.'}</small></form></div></section>;
}

function Footer() {
 return <footer className="footer"><div className="container"><div className="footer-main"><div><Logo light/><p>Ride confident. Work anywhere.</p></div><div className="footer-links"><a href="#home">Home</a><a href="#bracelet">The bracelet</a><a href="#features">Features</a><a href="#pricing">Pricing</a><a href="#about">About us</a></div><div className="footer-social"><a href="#join"><Instagram/></a><a href="#join"><Linkedin/></a><a href="#join"><Youtube/></a></div></div><div className="footer-bottom"><span>© 2026 WaveBand. A startup concept created for a class presentation.</span><span>Privacy · Terms · Contact</span><span className="online"><i/> Concept website</span></div></div></footer>;
}

export default function App(){
 useEffect(()=>{const els=document.querySelectorAll('.reveal');const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target)}}),{threshold:.12});els.forEach(el=>obs.observe(el));return()=>obs.disconnect()},[]);
 return <><Header/><main><Hero/><BraceletSection/><section className="section viewer-section"><div className="container"><div className="section-heading"><div><div className="eyebrow dark">MEET THE HARDWARE</div><h2>Take a closer <em>look.</em></h2></div><p>Rotate the WaveBand concept in 3D. Drag to explore the shape, screen and strap from every angle.</p></div><Bracelet3D/></div></section><FeatureCards/><Forecast/><Community/><Pricing/><Founders/><Reviews/><Join/></main><Footer/></>;
}