(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();function xv(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Eu={exports:{}},mt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fp;function Sv(){if(Fp)return mt;Fp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function y(F){return F===null||typeof F!="object"?null:(F=v&&F[v]||F["@@iterator"],typeof F=="function"?F:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,w={};function S(F,se,Ne){this.props=F,this.context=se,this.refs=w,this.updater=Ne||x}S.prototype.isReactComponent={},S.prototype.setState=function(F,se){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,se,"setState")},S.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function _(){}_.prototype=S.prototype;function I(F,se,Ne){this.props=F,this.context=se,this.refs=w,this.updater=Ne||x}var U=I.prototype=new _;U.constructor=I,M(U,S.prototype),U.isPureReactComponent=!0;var b=Array.isArray,X=Object.prototype.hasOwnProperty,k={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function W(F,se,Ne){var te,de={},xe=null,ge=null;if(se!=null)for(te in se.ref!==void 0&&(ge=se.ref),se.key!==void 0&&(xe=""+se.key),se)X.call(se,te)&&!O.hasOwnProperty(te)&&(de[te]=se[te]);var we=arguments.length-2;if(we===1)de.children=Ne;else if(1<we){for(var Ae=Array(we),Xe=0;Xe<we;Xe++)Ae[Xe]=arguments[Xe+2];de.children=Ae}if(F&&F.defaultProps)for(te in we=F.defaultProps,we)de[te]===void 0&&(de[te]=we[te]);return{$$typeof:s,type:F,key:xe,ref:ge,props:de,_owner:k.current}}function P(F,se){return{$$typeof:s,type:F.type,key:se,ref:F.ref,props:F.props,_owner:F._owner}}function R(F){return typeof F=="object"&&F!==null&&F.$$typeof===s}function B(F){var se={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(Ne){return se[Ne]})}var ee=/\/+/g;function J(F,se){return typeof F=="object"&&F!==null&&F.key!=null?B(""+F.key):se.toString(36)}function ue(F,se,Ne,te,de){var xe=typeof F;(xe==="undefined"||xe==="boolean")&&(F=null);var ge=!1;if(F===null)ge=!0;else switch(xe){case"string":case"number":ge=!0;break;case"object":switch(F.$$typeof){case s:case e:ge=!0}}if(ge)return ge=F,de=de(ge),F=te===""?"."+J(ge,0):te,b(de)?(Ne="",F!=null&&(Ne=F.replace(ee,"$&/")+"/"),ue(de,se,Ne,"",function(Xe){return Xe})):de!=null&&(R(de)&&(de=P(de,Ne+(!de.key||ge&&ge.key===de.key?"":(""+de.key).replace(ee,"$&/")+"/")+F)),se.push(de)),1;if(ge=0,te=te===""?".":te+":",b(F))for(var we=0;we<F.length;we++){xe=F[we];var Ae=te+J(xe,we);ge+=ue(xe,se,Ne,Ae,de)}else if(Ae=y(F),typeof Ae=="function")for(F=Ae.call(F),we=0;!(xe=F.next()).done;)xe=xe.value,Ae=te+J(xe,we++),ge+=ue(xe,se,Ne,Ae,de);else if(xe==="object")throw se=String(F),Error("Objects are not valid as a React child (found: "+(se==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":se)+"). If you meant to render a collection of children, use an array instead.");return ge}function he(F,se,Ne){if(F==null)return F;var te=[],de=0;return ue(F,te,"","",function(xe){return se.call(Ne,xe,de++)}),te}function ce(F){if(F._status===-1){var se=F._result;se=se(),se.then(function(Ne){(F._status===0||F._status===-1)&&(F._status=1,F._result=Ne)},function(Ne){(F._status===0||F._status===-1)&&(F._status=2,F._result=Ne)}),F._status===-1&&(F._status=0,F._result=se)}if(F._status===1)return F._result.default;throw F._result}var ae={current:null},D={transition:null},oe={ReactCurrentDispatcher:ae,ReactCurrentBatchConfig:D,ReactCurrentOwner:k};function re(){throw Error("act(...) is not supported in production builds of React.")}return mt.Children={map:he,forEach:function(F,se,Ne){he(F,function(){se.apply(this,arguments)},Ne)},count:function(F){var se=0;return he(F,function(){se++}),se},toArray:function(F){return he(F,function(se){return se})||[]},only:function(F){if(!R(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},mt.Component=S,mt.Fragment=t,mt.Profiler=a,mt.PureComponent=I,mt.StrictMode=r,mt.Suspense=d,mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oe,mt.act=re,mt.cloneElement=function(F,se,Ne){if(F==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+F+".");var te=M({},F.props),de=F.key,xe=F.ref,ge=F._owner;if(se!=null){if(se.ref!==void 0&&(xe=se.ref,ge=k.current),se.key!==void 0&&(de=""+se.key),F.type&&F.type.defaultProps)var we=F.type.defaultProps;for(Ae in se)X.call(se,Ae)&&!O.hasOwnProperty(Ae)&&(te[Ae]=se[Ae]===void 0&&we!==void 0?we[Ae]:se[Ae])}var Ae=arguments.length-2;if(Ae===1)te.children=Ne;else if(1<Ae){we=Array(Ae);for(var Xe=0;Xe<Ae;Xe++)we[Xe]=arguments[Xe+2];te.children=we}return{$$typeof:s,type:F.type,key:de,ref:xe,props:te,_owner:ge}},mt.createContext=function(F){return F={$$typeof:u,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},F.Provider={$$typeof:l,_context:F},F.Consumer=F},mt.createElement=W,mt.createFactory=function(F){var se=W.bind(null,F);return se.type=F,se},mt.createRef=function(){return{current:null}},mt.forwardRef=function(F){return{$$typeof:h,render:F}},mt.isValidElement=R,mt.lazy=function(F){return{$$typeof:g,_payload:{_status:-1,_result:F},_init:ce}},mt.memo=function(F,se){return{$$typeof:m,type:F,compare:se===void 0?null:se}},mt.startTransition=function(F){var se=D.transition;D.transition={};try{F()}finally{D.transition=se}},mt.unstable_act=re,mt.useCallback=function(F,se){return ae.current.useCallback(F,se)},mt.useContext=function(F){return ae.current.useContext(F)},mt.useDebugValue=function(){},mt.useDeferredValue=function(F){return ae.current.useDeferredValue(F)},mt.useEffect=function(F,se){return ae.current.useEffect(F,se)},mt.useId=function(){return ae.current.useId()},mt.useImperativeHandle=function(F,se,Ne){return ae.current.useImperativeHandle(F,se,Ne)},mt.useInsertionEffect=function(F,se){return ae.current.useInsertionEffect(F,se)},mt.useLayoutEffect=function(F,se){return ae.current.useLayoutEffect(F,se)},mt.useMemo=function(F,se){return ae.current.useMemo(F,se)},mt.useReducer=function(F,se,Ne){return ae.current.useReducer(F,se,Ne)},mt.useRef=function(F){return ae.current.useRef(F)},mt.useState=function(F){return ae.current.useState(F)},mt.useSyncExternalStore=function(F,se,Ne){return ae.current.useSyncExternalStore(F,se,Ne)},mt.useTransition=function(){return ae.current.useTransition()},mt.version="18.3.1",mt}var Op;function qm(){return Op||(Op=1,Eu.exports=Sv()),Eu.exports}var Rn=qm();const C=xv(Rn);var ll={},Mu={exports:{}},Fn={},Tu={exports:{}},wu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kp;function Ev(){return kp||(kp=1,(function(s){function e(D,oe){var re=D.length;D.push(oe);e:for(;0<re;){var F=re-1>>>1,se=D[F];if(0<a(se,oe))D[F]=oe,D[re]=se,re=F;else break e}}function t(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var oe=D[0],re=D.pop();if(re!==oe){D[0]=re;e:for(var F=0,se=D.length,Ne=se>>>1;F<Ne;){var te=2*(F+1)-1,de=D[te],xe=te+1,ge=D[xe];if(0>a(de,re))xe<se&&0>a(ge,de)?(D[F]=ge,D[xe]=re,F=xe):(D[F]=de,D[te]=re,F=te);else if(xe<se&&0>a(ge,re))D[F]=ge,D[xe]=re,F=xe;else break e}}return oe}function a(D,oe){var re=D.sortIndex-oe.sortIndex;return re!==0?re:D.id-oe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,h=u.now();s.unstable_now=function(){return u.now()-h}}var d=[],m=[],g=1,v=null,y=3,x=!1,M=!1,w=!1,S=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function U(D){for(var oe=t(m);oe!==null;){if(oe.callback===null)r(m);else if(oe.startTime<=D)r(m),oe.sortIndex=oe.expirationTime,e(d,oe);else break;oe=t(m)}}function b(D){if(w=!1,U(D),!M)if(t(d)!==null)M=!0,ce(X);else{var oe=t(m);oe!==null&&ae(b,oe.startTime-D)}}function X(D,oe){M=!1,w&&(w=!1,_(W),W=-1),x=!0;var re=y;try{for(U(oe),v=t(d);v!==null&&(!(v.expirationTime>oe)||D&&!B());){var F=v.callback;if(typeof F=="function"){v.callback=null,y=v.priorityLevel;var se=F(v.expirationTime<=oe);oe=s.unstable_now(),typeof se=="function"?v.callback=se:v===t(d)&&r(d),U(oe)}else r(d);v=t(d)}if(v!==null)var Ne=!0;else{var te=t(m);te!==null&&ae(b,te.startTime-oe),Ne=!1}return Ne}finally{v=null,y=re,x=!1}}var k=!1,O=null,W=-1,P=5,R=-1;function B(){return!(s.unstable_now()-R<P)}function ee(){if(O!==null){var D=s.unstable_now();R=D;var oe=!0;try{oe=O(!0,D)}finally{oe?J():(k=!1,O=null)}}else k=!1}var J;if(typeof I=="function")J=function(){I(ee)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,he=ue.port2;ue.port1.onmessage=ee,J=function(){he.postMessage(null)}}else J=function(){S(ee,0)};function ce(D){O=D,k||(k=!0,J())}function ae(D,oe){W=S(function(){D(s.unstable_now())},oe)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(D){D.callback=null},s.unstable_continueExecution=function(){M||x||(M=!0,ce(X))},s.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<D?Math.floor(1e3/D):5},s.unstable_getCurrentPriorityLevel=function(){return y},s.unstable_getFirstCallbackNode=function(){return t(d)},s.unstable_next=function(D){switch(y){case 1:case 2:case 3:var oe=3;break;default:oe=y}var re=y;y=oe;try{return D()}finally{y=re}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(D,oe){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var re=y;y=D;try{return oe()}finally{y=re}},s.unstable_scheduleCallback=function(D,oe,re){var F=s.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?F+re:F):re=F,D){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=re+se,D={id:g++,callback:oe,priorityLevel:D,startTime:re,expirationTime:se,sortIndex:-1},re>F?(D.sortIndex=re,e(m,D),t(d)===null&&D===t(m)&&(w?(_(W),W=-1):w=!0,ae(b,re-F))):(D.sortIndex=se,e(d,D),M||x||(M=!0,ce(X))),D},s.unstable_shouldYield=B,s.unstable_wrapCallback=function(D){var oe=y;return function(){var re=y;y=oe;try{return D.apply(this,arguments)}finally{y=re}}}})(wu)),wu}var zp;function Mv(){return zp||(zp=1,Tu.exports=Ev()),Tu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bp;function Tv(){if(Bp)return Fn;Bp=1;var s=qm(),e=Mv();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(a[n]=i,n=0;n<i.length;n++)r.add(i[n])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},v={};function y(n){return d.call(v,n)?!0:d.call(g,n)?!1:m.test(n)?v[n]=!0:(g[n]=!0,!1)}function x(n,i,o,c){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,i,o,c){if(i===null||typeof i>"u"||x(n,i,o,c))return!0;if(c)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function w(n,i,o,c,f,p,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=f,this.mustUseProperty=o,this.propertyName=n,this.type=i,this.sanitizeURL=p,this.removeEmptyString=E}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){S[n]=new w(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];S[i]=new w(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){S[n]=new w(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){S[n]=new w(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){S[n]=new w(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){S[n]=new w(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){S[n]=new w(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){S[n]=new w(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){S[n]=new w(n,5,!1,n.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function I(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(_,I);S[i]=new w(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(_,I);S[i]=new w(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(_,I);S[i]=new w(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){S[n]=new w(n,1,!1,n.toLowerCase(),null,!1,!1)}),S.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){S[n]=new w(n,1,!1,n.toLowerCase(),null,!0,!0)});function U(n,i,o,c){var f=S.hasOwnProperty(i)?S[i]:null;(f!==null?f.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(M(i,o,f,c)&&(o=null),c||f===null?y(i)&&(o===null?n.removeAttribute(i):n.setAttribute(i,""+o)):f.mustUseProperty?n[f.propertyName]=o===null?f.type===3?!1:"":o:(i=f.attributeName,c=f.attributeNamespace,o===null?n.removeAttribute(i):(f=f.type,o=f===3||f===4&&o===!0?"":""+o,c?n.setAttributeNS(c,i,o):n.setAttribute(i,o))))}var b=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,X=Symbol.for("react.element"),k=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),W=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),B=Symbol.for("react.context"),ee=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),ue=Symbol.for("react.suspense_list"),he=Symbol.for("react.memo"),ce=Symbol.for("react.lazy"),ae=Symbol.for("react.offscreen"),D=Symbol.iterator;function oe(n){return n===null||typeof n!="object"?null:(n=D&&n[D]||n["@@iterator"],typeof n=="function"?n:null)}var re=Object.assign,F;function se(n){if(F===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);F=i&&i[1]||""}return`
`+F+n}var Ne=!1;function te(n,i){if(!n||Ne)return"";Ne=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ie){var c=ie}Reflect.construct(n,[],i)}else{try{i.call()}catch(ie){c=ie}n.call(i.prototype)}else{try{throw Error()}catch(ie){c=ie}n()}}catch(ie){if(ie&&c&&typeof ie.stack=="string"){for(var f=ie.stack.split(`
`),p=c.stack.split(`
`),E=f.length-1,N=p.length-1;1<=E&&0<=N&&f[E]!==p[N];)N--;for(;1<=E&&0<=N;E--,N--)if(f[E]!==p[N]){if(E!==1||N!==1)do if(E--,N--,0>N||f[E]!==p[N]){var z=`
`+f[E].replace(" at new "," at ");return n.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",n.displayName)),z}while(1<=E&&0<=N);break}}}finally{Ne=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?se(n):""}function de(n){switch(n.tag){case 5:return se(n.type);case 16:return se("Lazy");case 13:return se("Suspense");case 19:return se("SuspenseList");case 0:case 2:case 15:return n=te(n.type,!1),n;case 11:return n=te(n.type.render,!1),n;case 1:return n=te(n.type,!0),n;default:return""}}function xe(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case O:return"Fragment";case k:return"Portal";case P:return"Profiler";case W:return"StrictMode";case J:return"Suspense";case ue:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case B:return(n.displayName||"Context")+".Consumer";case R:return(n._context.displayName||"Context")+".Provider";case ee:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case he:return i=n.displayName||null,i!==null?i:xe(n.type)||"Memo";case ce:i=n._payload,n=n._init;try{return xe(n(i))}catch{}}return null}function ge(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xe(i);case 8:return i===W?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function we(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ae(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Xe(n){var i=Ae(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,p=o.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return f.call(this)},set:function(E){c=""+E,p.call(this,E)}}),Object.defineProperty(n,i,{enumerable:o.enumerable}),{getValue:function(){return c},setValue:function(E){c=""+E},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function vt(n){n._valueTracker||(n._valueTracker=Xe(n))}function ot(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var o=i.getValue(),c="";return n&&(c=Ae(n)?n.checked?"true":"false":n.value),n=c,n!==o?(i.setValue(n),!0):!1}function Rt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function H(n,i){var o=i.checked;return re({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function Xt(n,i){var o=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;o=we(i.value!=null?i.value:o),n._wrapperState={initialChecked:c,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ut(n,i){i=i.checked,i!=null&&U(n,"checked",i,!1)}function ht(n,i){ut(n,i);var o=we(i.value),c=i.type;if(o!=null)c==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?At(n,i.type,o):i.hasOwnProperty("defaultValue")&&At(n,i.type,we(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Ke(n,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,o||i===n.value||(n.value=i),n.defaultValue=i}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function At(n,i,o){(i!=="number"||Rt(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var Ye=Array.isArray;function L(n,i,o,c){if(n=n.options,i){i={};for(var f=0;f<o.length;f++)i["$"+o[f]]=!0;for(o=0;o<n.length;o++)f=i.hasOwnProperty("$"+n[o].value),n[o].selected!==f&&(n[o].selected=f),f&&c&&(n[o].defaultSelected=!0)}else{for(o=""+we(o),i=null,f=0;f<n.length;f++){if(n[f].value===o){n[f].selected=!0,c&&(n[f].defaultSelected=!0);return}i!==null||n[f].disabled||(i=n[f])}i!==null&&(i.selected=!0)}}function T(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return re({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Q(n,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(t(92));if(Ye(o)){if(1<o.length)throw Error(t(93));o=o[0]}i=o}i==null&&(i=""),o=i}n._wrapperState={initialValue:we(o)}}function me(n,i){var o=we(i.value),c=we(i.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),i.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),c!=null&&(n.defaultValue=""+c)}function ve(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function fe(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function je(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?fe(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ce,Oe=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,c,f){MSApp.execUnsafeLocalFunction(function(){return n(i,o,c,f)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Ce=Ce||document.createElement("div"),Ce.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ce.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function dt(n,i){if(i){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=i;return}}n.textContent=i}var Me={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ze=["Webkit","ms","Moz","O"];Object.keys(Me).forEach(function(n){ze.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Me[i]=Me[n]})});function Ze(n,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Me.hasOwnProperty(n)&&Me[n]?(""+i).trim():i+"px"}function tt(n,i){n=n.style;for(var o in i)if(i.hasOwnProperty(o)){var c=o.indexOf("--")===0,f=Ze(o,i[o],c);o==="float"&&(o="cssFloat"),c?n.setProperty(o,f):n[o]=f}}var Be=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pt(n,i){if(i){if(Be[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function rt(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ct=null;function Y(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Re=null,le=null,pe=null;function Ue(n){if(n=Eo(n)){if(typeof Re!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Ma(i),Re(n.stateNode,n.type,i))}}function Le(n){le?pe?pe.push(n):pe=[n]:le=n}function st(){if(le){var n=le,i=pe;if(pe=le=null,Ue(n),i)for(n=0;n<i.length;n++)Ue(i[n])}}function Ut(n,i){return n(i)}function Jt(){}var St=!1;function bn(n,i,o){if(St)return n(i,o);St=!0;try{return Ut(n,i,o)}finally{St=!1,(le!==null||pe!==null)&&(Jt(),st())}}function Mn(n,i){var o=n.stateNode;if(o===null)return null;var c=Ma(o);if(c===null)return null;o=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,i,typeof o));return o}var rs=!1;if(h)try{var qi={};Object.defineProperty(qi,"passive",{get:function(){rs=!0}}),window.addEventListener("test",qi,qi),window.removeEventListener("test",qi,qi)}catch{rs=!1}function Ai(n,i,o,c,f,p,E,N,z){var ie=Array.prototype.slice.call(arguments,3);try{i.apply(o,ie)}catch(ye){this.onError(ye)}}var Ci=!1,Rr=null,Pr=!1,Ki=null,ta={onError:function(n){Ci=!0,Rr=n}};function ss(n,i,o,c,f,p,E,N,z){Ci=!1,Rr=null,Ai.apply(ta,arguments)}function na(n,i,o,c,f,p,E,N,z){if(ss.apply(this,arguments),Ci){if(Ci){var ie=Rr;Ci=!1,Rr=null}else throw Error(t(198));Pr||(Pr=!0,Ki=ie)}}function mi(n){var i=n,o=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(o=i.return),n=i.return;while(n)}return i.tag===3?o:null}function ia(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function ra(n){if(mi(n)!==n)throw Error(t(188))}function Xl(n){var i=n.alternate;if(!i){if(i=mi(n),i===null)throw Error(t(188));return i!==n?null:n}for(var o=n,c=i;;){var f=o.return;if(f===null)break;var p=f.alternate;if(p===null){if(c=f.return,c!==null){o=c;continue}break}if(f.child===p.child){for(p=f.child;p;){if(p===o)return ra(f),n;if(p===c)return ra(f),i;p=p.sibling}throw Error(t(188))}if(o.return!==c.return)o=f,c=p;else{for(var E=!1,N=f.child;N;){if(N===o){E=!0,o=f,c=p;break}if(N===c){E=!0,c=f,o=p;break}N=N.sibling}if(!E){for(N=p.child;N;){if(N===o){E=!0,o=p,c=f;break}if(N===c){E=!0,c=p,o=f;break}N=N.sibling}if(!E)throw Error(t(189))}}if(o.alternate!==c)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:i}function sa(n){return n=Xl(n),n!==null?oa(n):null}function oa(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=oa(n);if(i!==null)return i;n=n.sibling}return null}var aa=e.unstable_scheduleCallback,A=e.unstable_cancelCallback,j=e.unstable_shouldYield,ne=e.unstable_requestPaint,$=e.unstable_now,q=e.unstable_getCurrentPriorityLevel,Ee=e.unstable_ImmediatePriority,Pe=e.unstable_UserBlockingPriority,Ie=e.unstable_NormalPriority,He=e.unstable_LowPriority,nt=e.unstable_IdlePriority,et=null,Ge=null;function yt(n){if(Ge&&typeof Ge.onCommitFiberRoot=="function")try{Ge.onCommitFiberRoot(et,n,void 0,(n.current.flags&128)===128)}catch{}}var at=Math.clz32?Math.clz32:xt,Vt=Math.log,Ot=Math.LN2;function xt(n){return n>>>=0,n===0?32:31-(Vt(n)/Ot|0)|0}var $e=64,Gt=4194304;function gt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function mn(n,i){var o=n.pendingLanes;if(o===0)return 0;var c=0,f=n.suspendedLanes,p=n.pingedLanes,E=o&268435455;if(E!==0){var N=E&~f;N!==0?c=gt(N):(p&=E,p!==0&&(c=gt(p)))}else E=o&~f,E!==0?c=gt(E):p!==0&&(c=gt(p));if(c===0)return 0;if(i!==0&&i!==c&&(i&f)===0&&(f=c&-c,p=i&-i,f>=p||f===16&&(p&4194240)!==0))return i;if((c&4)!==0&&(c|=o&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)o=31-at(i),f=1<<o,c|=n[o],i&=~f;return c}function $i(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Tn(n,i){for(var o=n.suspendedLanes,c=n.pingedLanes,f=n.expirationTimes,p=n.pendingLanes;0<p;){var E=31-at(p),N=1<<E,z=f[E];z===-1?((N&o)===0||(N&c)!==0)&&(f[E]=$i(N,i)):z<=i&&(n.expiredLanes|=N),p&=~N}}function Ri(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Dt(){var n=$e;return $e<<=1,($e&4194240)===0&&($e=64),n}function gn(n){for(var i=[],o=0;31>o;o++)i.push(n);return i}function sn(n,i,o){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-at(i),n[i]=o}function hn(n,i){var o=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<o;){var f=31-at(o),p=1<<f;i[f]=0,c[f]=-1,n[f]=-1,o&=~p}}function on(n,i){var o=n.entangledLanes|=i;for(n=n.entanglements;o;){var c=31-at(o),f=1<<c;f&i|n[c]&i&&(n[c]|=i),o&=~f}}var Et=0;function gi(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var mf,Yl,gf,_f,vf,jl=!1,la=[],Zi=null,Ji=null,Qi=null,so=new Map,oo=new Map,er=[],Vg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function yf(n,i){switch(n){case"focusin":case"focusout":Zi=null;break;case"dragenter":case"dragleave":Ji=null;break;case"mouseover":case"mouseout":Qi=null;break;case"pointerover":case"pointerout":so.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":oo.delete(i.pointerId)}}function ao(n,i,o,c,f,p){return n===null||n.nativeEvent!==p?(n={blockedOn:i,domEventName:o,eventSystemFlags:c,nativeEvent:p,targetContainers:[f]},i!==null&&(i=Eo(i),i!==null&&Yl(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),n)}function Gg(n,i,o,c,f){switch(i){case"focusin":return Zi=ao(Zi,n,i,o,c,f),!0;case"dragenter":return Ji=ao(Ji,n,i,o,c,f),!0;case"mouseover":return Qi=ao(Qi,n,i,o,c,f),!0;case"pointerover":var p=f.pointerId;return so.set(p,ao(so.get(p)||null,n,i,o,c,f)),!0;case"gotpointercapture":return p=f.pointerId,oo.set(p,ao(oo.get(p)||null,n,i,o,c,f)),!0}return!1}function xf(n){var i=br(n.target);if(i!==null){var o=mi(i);if(o!==null){if(i=o.tag,i===13){if(i=ia(o),i!==null){n.blockedOn=i,vf(n.priority,function(){gf(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function ca(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var o=Kl(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var c=new o.constructor(o.type,o);Ct=c,o.target.dispatchEvent(c),Ct=null}else return i=Eo(o),i!==null&&Yl(i),n.blockedOn=o,!1;i.shift()}return!0}function Sf(n,i,o){ca(n)&&o.delete(i)}function Wg(){jl=!1,Zi!==null&&ca(Zi)&&(Zi=null),Ji!==null&&ca(Ji)&&(Ji=null),Qi!==null&&ca(Qi)&&(Qi=null),so.forEach(Sf),oo.forEach(Sf)}function lo(n,i){n.blockedOn===i&&(n.blockedOn=null,jl||(jl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Wg)))}function co(n){function i(f){return lo(f,n)}if(0<la.length){lo(la[0],n);for(var o=1;o<la.length;o++){var c=la[o];c.blockedOn===n&&(c.blockedOn=null)}}for(Zi!==null&&lo(Zi,n),Ji!==null&&lo(Ji,n),Qi!==null&&lo(Qi,n),so.forEach(i),oo.forEach(i),o=0;o<er.length;o++)c=er[o],c.blockedOn===n&&(c.blockedOn=null);for(;0<er.length&&(o=er[0],o.blockedOn===null);)xf(o),o.blockedOn===null&&er.shift()}var os=b.ReactCurrentBatchConfig,ua=!0;function Xg(n,i,o,c){var f=Et,p=os.transition;os.transition=null;try{Et=1,ql(n,i,o,c)}finally{Et=f,os.transition=p}}function Yg(n,i,o,c){var f=Et,p=os.transition;os.transition=null;try{Et=4,ql(n,i,o,c)}finally{Et=f,os.transition=p}}function ql(n,i,o,c){if(ua){var f=Kl(n,i,o,c);if(f===null)fc(n,i,c,ha,o),yf(n,c);else if(Gg(f,n,i,o,c))c.stopPropagation();else if(yf(n,c),i&4&&-1<Vg.indexOf(n)){for(;f!==null;){var p=Eo(f);if(p!==null&&mf(p),p=Kl(n,i,o,c),p===null&&fc(n,i,c,ha,o),p===f)break;f=p}f!==null&&c.stopPropagation()}else fc(n,i,c,null,o)}}var ha=null;function Kl(n,i,o,c){if(ha=null,n=Y(c),n=br(n),n!==null)if(i=mi(n),i===null)n=null;else if(o=i.tag,o===13){if(n=ia(i),n!==null)return n;n=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return ha=n,null}function Ef(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(q()){case Ee:return 1;case Pe:return 4;case Ie:case He:return 16;case nt:return 536870912;default:return 16}default:return 16}}var tr=null,$l=null,fa=null;function Mf(){if(fa)return fa;var n,i=$l,o=i.length,c,f="value"in tr?tr.value:tr.textContent,p=f.length;for(n=0;n<o&&i[n]===f[n];n++);var E=o-n;for(c=1;c<=E&&i[o-c]===f[p-c];c++);return fa=f.slice(n,1<c?1-c:void 0)}function da(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function pa(){return!0}function Tf(){return!1}function Hn(n){function i(o,c,f,p,E){this._reactName=o,this._targetInst=f,this.type=c,this.nativeEvent=p,this.target=E,this.currentTarget=null;for(var N in n)n.hasOwnProperty(N)&&(o=n[N],this[N]=o?o(p):p[N]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?pa:Tf,this.isPropagationStopped=Tf,this}return re(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=pa)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=pa)},persist:function(){},isPersistent:pa}),i}var as={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zl=Hn(as),uo=re({},as,{view:0,detail:0}),jg=Hn(uo),Jl,Ql,ho,ma=re({},uo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ho&&(ho&&n.type==="mousemove"?(Jl=n.screenX-ho.screenX,Ql=n.screenY-ho.screenY):Ql=Jl=0,ho=n),Jl)},movementY:function(n){return"movementY"in n?n.movementY:Ql}}),wf=Hn(ma),qg=re({},ma,{dataTransfer:0}),Kg=Hn(qg),$g=re({},uo,{relatedTarget:0}),ec=Hn($g),Zg=re({},as,{animationName:0,elapsedTime:0,pseudoElement:0}),Jg=Hn(Zg),Qg=re({},as,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),e_=Hn(Qg),t_=re({},as,{data:0}),Af=Hn(t_),n_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},i_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},r_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function s_(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=r_[n])?!!i[n]:!1}function tc(){return s_}var o_=re({},uo,{key:function(n){if(n.key){var i=n_[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=da(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?i_[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tc,charCode:function(n){return n.type==="keypress"?da(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?da(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),a_=Hn(o_),l_=re({},ma,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cf=Hn(l_),c_=re({},uo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tc}),u_=Hn(c_),h_=re({},as,{propertyName:0,elapsedTime:0,pseudoElement:0}),f_=Hn(h_),d_=re({},ma,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),p_=Hn(d_),m_=[9,13,27,32],nc=h&&"CompositionEvent"in window,fo=null;h&&"documentMode"in document&&(fo=document.documentMode);var g_=h&&"TextEvent"in window&&!fo,Rf=h&&(!nc||fo&&8<fo&&11>=fo),Pf=" ",bf=!1;function Lf(n,i){switch(n){case"keyup":return m_.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Df(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ls=!1;function __(n,i){switch(n){case"compositionend":return Df(i);case"keypress":return i.which!==32?null:(bf=!0,Pf);case"textInput":return n=i.data,n===Pf&&bf?null:n;default:return null}}function v_(n,i){if(ls)return n==="compositionend"||!nc&&Lf(n,i)?(n=Mf(),fa=$l=tr=null,ls=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Rf&&i.locale!=="ko"?null:i.data;default:return null}}var y_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nf(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!y_[n.type]:i==="textarea"}function Uf(n,i,o,c){Le(c),i=xa(i,"onChange"),0<i.length&&(o=new Zl("onChange","change",null,o,c),n.push({event:o,listeners:i}))}var po=null,mo=null;function x_(n){Jf(n,0)}function ga(n){var i=ds(n);if(ot(i))return n}function S_(n,i){if(n==="change")return i}var If=!1;if(h){var ic;if(h){var rc="oninput"in document;if(!rc){var Ff=document.createElement("div");Ff.setAttribute("oninput","return;"),rc=typeof Ff.oninput=="function"}ic=rc}else ic=!1;If=ic&&(!document.documentMode||9<document.documentMode)}function Of(){po&&(po.detachEvent("onpropertychange",kf),mo=po=null)}function kf(n){if(n.propertyName==="value"&&ga(mo)){var i=[];Uf(i,mo,n,Y(n)),bn(x_,i)}}function E_(n,i,o){n==="focusin"?(Of(),po=i,mo=o,po.attachEvent("onpropertychange",kf)):n==="focusout"&&Of()}function M_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return ga(mo)}function T_(n,i){if(n==="click")return ga(i)}function w_(n,i){if(n==="input"||n==="change")return ga(i)}function A_(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var ii=typeof Object.is=="function"?Object.is:A_;function go(n,i){if(ii(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var o=Object.keys(n),c=Object.keys(i);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var f=o[c];if(!d.call(i,f)||!ii(n[f],i[f]))return!1}return!0}function zf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Bf(n,i){var o=zf(n);n=0;for(var c;o;){if(o.nodeType===3){if(c=n+o.textContent.length,n<=i&&c>=i)return{node:o,offset:i-n};n=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=zf(o)}}function Hf(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Hf(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Vf(){for(var n=window,i=Rt();i instanceof n.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)n=i.contentWindow;else break;i=Rt(n.document)}return i}function sc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function C_(n){var i=Vf(),o=n.focusedElem,c=n.selectionRange;if(i!==o&&o&&o.ownerDocument&&Hf(o.ownerDocument.documentElement,o)){if(c!==null&&sc(o)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(n,o.value.length);else if(n=(i=o.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var f=o.textContent.length,p=Math.min(c.start,f);c=c.end===void 0?p:Math.min(c.end,f),!n.extend&&p>c&&(f=c,c=p,p=f),f=Bf(o,p);var E=Bf(o,c);f&&E&&(n.rangeCount!==1||n.anchorNode!==f.node||n.anchorOffset!==f.offset||n.focusNode!==E.node||n.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),n.removeAllRanges(),p>c?(n.addRange(i),n.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),n.addRange(i)))}}for(i=[],n=o;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)n=i[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var R_=h&&"documentMode"in document&&11>=document.documentMode,cs=null,oc=null,_o=null,ac=!1;function Gf(n,i,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;ac||cs==null||cs!==Rt(c)||(c=cs,"selectionStart"in c&&sc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),_o&&go(_o,c)||(_o=c,c=xa(oc,"onSelect"),0<c.length&&(i=new Zl("onSelect","select",null,i,o),n.push({event:i,listeners:c}),i.target=cs)))}function _a(n,i){var o={};return o[n.toLowerCase()]=i.toLowerCase(),o["Webkit"+n]="webkit"+i,o["Moz"+n]="moz"+i,o}var us={animationend:_a("Animation","AnimationEnd"),animationiteration:_a("Animation","AnimationIteration"),animationstart:_a("Animation","AnimationStart"),transitionend:_a("Transition","TransitionEnd")},lc={},Wf={};h&&(Wf=document.createElement("div").style,"AnimationEvent"in window||(delete us.animationend.animation,delete us.animationiteration.animation,delete us.animationstart.animation),"TransitionEvent"in window||delete us.transitionend.transition);function va(n){if(lc[n])return lc[n];if(!us[n])return n;var i=us[n],o;for(o in i)if(i.hasOwnProperty(o)&&o in Wf)return lc[n]=i[o];return n}var Xf=va("animationend"),Yf=va("animationiteration"),jf=va("animationstart"),qf=va("transitionend"),Kf=new Map,$f="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function nr(n,i){Kf.set(n,i),l(i,[n])}for(var cc=0;cc<$f.length;cc++){var uc=$f[cc],P_=uc.toLowerCase(),b_=uc[0].toUpperCase()+uc.slice(1);nr(P_,"on"+b_)}nr(Xf,"onAnimationEnd"),nr(Yf,"onAnimationIteration"),nr(jf,"onAnimationStart"),nr("dblclick","onDoubleClick"),nr("focusin","onFocus"),nr("focusout","onBlur"),nr(qf,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),L_=new Set("cancel close invalid load scroll toggle".split(" ").concat(vo));function Zf(n,i,o){var c=n.type||"unknown-event";n.currentTarget=o,na(c,i,void 0,n),n.currentTarget=null}function Jf(n,i){i=(i&4)!==0;for(var o=0;o<n.length;o++){var c=n[o],f=c.event;c=c.listeners;e:{var p=void 0;if(i)for(var E=c.length-1;0<=E;E--){var N=c[E],z=N.instance,ie=N.currentTarget;if(N=N.listener,z!==p&&f.isPropagationStopped())break e;Zf(f,N,ie),p=z}else for(E=0;E<c.length;E++){if(N=c[E],z=N.instance,ie=N.currentTarget,N=N.listener,z!==p&&f.isPropagationStopped())break e;Zf(f,N,ie),p=z}}}if(Pr)throw n=Ki,Pr=!1,Ki=null,n}function It(n,i){var o=i[vc];o===void 0&&(o=i[vc]=new Set);var c=n+"__bubble";o.has(c)||(Qf(i,n,2,!1),o.add(c))}function hc(n,i,o){var c=0;i&&(c|=4),Qf(o,n,c,i)}var ya="_reactListening"+Math.random().toString(36).slice(2);function yo(n){if(!n[ya]){n[ya]=!0,r.forEach(function(o){o!=="selectionchange"&&(L_.has(o)||hc(o,!1,n),hc(o,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[ya]||(i[ya]=!0,hc("selectionchange",!1,i))}}function Qf(n,i,o,c){switch(Ef(i)){case 1:var f=Xg;break;case 4:f=Yg;break;default:f=ql}o=f.bind(null,i,o,n),f=void 0,!rs||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),c?f!==void 0?n.addEventListener(i,o,{capture:!0,passive:f}):n.addEventListener(i,o,!0):f!==void 0?n.addEventListener(i,o,{passive:f}):n.addEventListener(i,o,!1)}function fc(n,i,o,c,f){var p=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var E=c.tag;if(E===3||E===4){var N=c.stateNode.containerInfo;if(N===f||N.nodeType===8&&N.parentNode===f)break;if(E===4)for(E=c.return;E!==null;){var z=E.tag;if((z===3||z===4)&&(z=E.stateNode.containerInfo,z===f||z.nodeType===8&&z.parentNode===f))return;E=E.return}for(;N!==null;){if(E=br(N),E===null)return;if(z=E.tag,z===5||z===6){c=p=E;continue e}N=N.parentNode}}c=c.return}bn(function(){var ie=p,ye=Y(o),Se=[];e:{var _e=Kf.get(n);if(_e!==void 0){var Fe=Zl,Ve=n;switch(n){case"keypress":if(da(o)===0)break e;case"keydown":case"keyup":Fe=a_;break;case"focusin":Ve="focus",Fe=ec;break;case"focusout":Ve="blur",Fe=ec;break;case"beforeblur":case"afterblur":Fe=ec;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Fe=wf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Fe=Kg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Fe=u_;break;case Xf:case Yf:case jf:Fe=Jg;break;case qf:Fe=f_;break;case"scroll":Fe=jg;break;case"wheel":Fe=p_;break;case"copy":case"cut":case"paste":Fe=e_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Fe=Cf}var We=(i&4)!==0,Yt=!We&&n==="scroll",K=We?_e!==null?_e+"Capture":null:_e;We=[];for(var G=ie,Z;G!==null;){Z=G;var Te=Z.stateNode;if(Z.tag===5&&Te!==null&&(Z=Te,K!==null&&(Te=Mn(G,K),Te!=null&&We.push(xo(G,Te,Z)))),Yt)break;G=G.return}0<We.length&&(_e=new Fe(_e,Ve,null,o,ye),Se.push({event:_e,listeners:We}))}}if((i&7)===0){e:{if(_e=n==="mouseover"||n==="pointerover",Fe=n==="mouseout"||n==="pointerout",_e&&o!==Ct&&(Ve=o.relatedTarget||o.fromElement)&&(br(Ve)||Ve[Pi]))break e;if((Fe||_e)&&(_e=ye.window===ye?ye:(_e=ye.ownerDocument)?_e.defaultView||_e.parentWindow:window,Fe?(Ve=o.relatedTarget||o.toElement,Fe=ie,Ve=Ve?br(Ve):null,Ve!==null&&(Yt=mi(Ve),Ve!==Yt||Ve.tag!==5&&Ve.tag!==6)&&(Ve=null)):(Fe=null,Ve=ie),Fe!==Ve)){if(We=wf,Te="onMouseLeave",K="onMouseEnter",G="mouse",(n==="pointerout"||n==="pointerover")&&(We=Cf,Te="onPointerLeave",K="onPointerEnter",G="pointer"),Yt=Fe==null?_e:ds(Fe),Z=Ve==null?_e:ds(Ve),_e=new We(Te,G+"leave",Fe,o,ye),_e.target=Yt,_e.relatedTarget=Z,Te=null,br(ye)===ie&&(We=new We(K,G+"enter",Ve,o,ye),We.target=Z,We.relatedTarget=Yt,Te=We),Yt=Te,Fe&&Ve)t:{for(We=Fe,K=Ve,G=0,Z=We;Z;Z=hs(Z))G++;for(Z=0,Te=K;Te;Te=hs(Te))Z++;for(;0<G-Z;)We=hs(We),G--;for(;0<Z-G;)K=hs(K),Z--;for(;G--;){if(We===K||K!==null&&We===K.alternate)break t;We=hs(We),K=hs(K)}We=null}else We=null;Fe!==null&&ed(Se,_e,Fe,We,!1),Ve!==null&&Yt!==null&&ed(Se,Yt,Ve,We,!0)}}e:{if(_e=ie?ds(ie):window,Fe=_e.nodeName&&_e.nodeName.toLowerCase(),Fe==="select"||Fe==="input"&&_e.type==="file")var qe=S_;else if(Nf(_e))if(If)qe=w_;else{qe=M_;var Je=E_}else(Fe=_e.nodeName)&&Fe.toLowerCase()==="input"&&(_e.type==="checkbox"||_e.type==="radio")&&(qe=T_);if(qe&&(qe=qe(n,ie))){Uf(Se,qe,o,ye);break e}Je&&Je(n,_e,ie),n==="focusout"&&(Je=_e._wrapperState)&&Je.controlled&&_e.type==="number"&&At(_e,"number",_e.value)}switch(Je=ie?ds(ie):window,n){case"focusin":(Nf(Je)||Je.contentEditable==="true")&&(cs=Je,oc=ie,_o=null);break;case"focusout":_o=oc=cs=null;break;case"mousedown":ac=!0;break;case"contextmenu":case"mouseup":case"dragend":ac=!1,Gf(Se,o,ye);break;case"selectionchange":if(R_)break;case"keydown":case"keyup":Gf(Se,o,ye)}var Qe;if(nc)e:{switch(n){case"compositionstart":var it="onCompositionStart";break e;case"compositionend":it="onCompositionEnd";break e;case"compositionupdate":it="onCompositionUpdate";break e}it=void 0}else ls?Lf(n,o)&&(it="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(it="onCompositionStart");it&&(Rf&&o.locale!=="ko"&&(ls||it!=="onCompositionStart"?it==="onCompositionEnd"&&ls&&(Qe=Mf()):(tr=ye,$l="value"in tr?tr.value:tr.textContent,ls=!0)),Je=xa(ie,it),0<Je.length&&(it=new Af(it,n,null,o,ye),Se.push({event:it,listeners:Je}),Qe?it.data=Qe:(Qe=Df(o),Qe!==null&&(it.data=Qe)))),(Qe=g_?__(n,o):v_(n,o))&&(ie=xa(ie,"onBeforeInput"),0<ie.length&&(ye=new Af("onBeforeInput","beforeinput",null,o,ye),Se.push({event:ye,listeners:ie}),ye.data=Qe))}Jf(Se,i)})}function xo(n,i,o){return{instance:n,listener:i,currentTarget:o}}function xa(n,i){for(var o=i+"Capture",c=[];n!==null;){var f=n,p=f.stateNode;f.tag===5&&p!==null&&(f=p,p=Mn(n,o),p!=null&&c.unshift(xo(n,p,f)),p=Mn(n,i),p!=null&&c.push(xo(n,p,f))),n=n.return}return c}function hs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function ed(n,i,o,c,f){for(var p=i._reactName,E=[];o!==null&&o!==c;){var N=o,z=N.alternate,ie=N.stateNode;if(z!==null&&z===c)break;N.tag===5&&ie!==null&&(N=ie,f?(z=Mn(o,p),z!=null&&E.unshift(xo(o,z,N))):f||(z=Mn(o,p),z!=null&&E.push(xo(o,z,N)))),o=o.return}E.length!==0&&n.push({event:i,listeners:E})}var D_=/\r\n?/g,N_=/\u0000|\uFFFD/g;function td(n){return(typeof n=="string"?n:""+n).replace(D_,`
`).replace(N_,"")}function Sa(n,i,o){if(i=td(i),td(n)!==i&&o)throw Error(t(425))}function Ea(){}var dc=null,pc=null;function mc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var gc=typeof setTimeout=="function"?setTimeout:void 0,U_=typeof clearTimeout=="function"?clearTimeout:void 0,nd=typeof Promise=="function"?Promise:void 0,I_=typeof queueMicrotask=="function"?queueMicrotask:typeof nd<"u"?function(n){return nd.resolve(null).then(n).catch(F_)}:gc;function F_(n){setTimeout(function(){throw n})}function _c(n,i){var o=i,c=0;do{var f=o.nextSibling;if(n.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"){if(c===0){n.removeChild(f),co(i);return}c--}else o!=="$"&&o!=="$?"&&o!=="$!"||c++;o=f}while(o);co(i)}function ir(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function id(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return n;i--}else o==="/$"&&i++}n=n.previousSibling}return null}var fs=Math.random().toString(36).slice(2),_i="__reactFiber$"+fs,So="__reactProps$"+fs,Pi="__reactContainer$"+fs,vc="__reactEvents$"+fs,O_="__reactListeners$"+fs,k_="__reactHandles$"+fs;function br(n){var i=n[_i];if(i)return i;for(var o=n.parentNode;o;){if(i=o[Pi]||o[_i]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(n=id(n);n!==null;){if(o=n[_i])return o;n=id(n)}return i}n=o,o=n.parentNode}return null}function Eo(n){return n=n[_i]||n[Pi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ds(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Ma(n){return n[So]||null}var yc=[],ps=-1;function rr(n){return{current:n}}function Ft(n){0>ps||(n.current=yc[ps],yc[ps]=null,ps--)}function Nt(n,i){ps++,yc[ps]=n.current,n.current=i}var sr={},_n=rr(sr),Ln=rr(!1),Lr=sr;function ms(n,i){var o=n.type.contextTypes;if(!o)return sr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var f={},p;for(p in o)f[p]=i[p];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=f),f}function Dn(n){return n=n.childContextTypes,n!=null}function Ta(){Ft(Ln),Ft(_n)}function rd(n,i,o){if(_n.current!==sr)throw Error(t(168));Nt(_n,i),Nt(Ln,o)}function sd(n,i,o){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return o;c=c.getChildContext();for(var f in c)if(!(f in i))throw Error(t(108,ge(n)||"Unknown",f));return re({},o,c)}function wa(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||sr,Lr=_n.current,Nt(_n,n),Nt(Ln,Ln.current),!0}function od(n,i,o){var c=n.stateNode;if(!c)throw Error(t(169));o?(n=sd(n,i,Lr),c.__reactInternalMemoizedMergedChildContext=n,Ft(Ln),Ft(_n),Nt(_n,n)):Ft(Ln),Nt(Ln,o)}var bi=null,Aa=!1,xc=!1;function ad(n){bi===null?bi=[n]:bi.push(n)}function z_(n){Aa=!0,ad(n)}function or(){if(!xc&&bi!==null){xc=!0;var n=0,i=Et;try{var o=bi;for(Et=1;n<o.length;n++){var c=o[n];do c=c(!0);while(c!==null)}bi=null,Aa=!1}catch(f){throw bi!==null&&(bi=bi.slice(n+1)),aa(Ee,or),f}finally{Et=i,xc=!1}}return null}var gs=[],_s=0,Ca=null,Ra=0,qn=[],Kn=0,Dr=null,Li=1,Di="";function Nr(n,i){gs[_s++]=Ra,gs[_s++]=Ca,Ca=n,Ra=i}function ld(n,i,o){qn[Kn++]=Li,qn[Kn++]=Di,qn[Kn++]=Dr,Dr=n;var c=Li;n=Di;var f=32-at(c)-1;c&=~(1<<f),o+=1;var p=32-at(i)+f;if(30<p){var E=f-f%5;p=(c&(1<<E)-1).toString(32),c>>=E,f-=E,Li=1<<32-at(i)+f|o<<f|c,Di=p+n}else Li=1<<p|o<<f|c,Di=n}function Sc(n){n.return!==null&&(Nr(n,1),ld(n,1,0))}function Ec(n){for(;n===Ca;)Ca=gs[--_s],gs[_s]=null,Ra=gs[--_s],gs[_s]=null;for(;n===Dr;)Dr=qn[--Kn],qn[Kn]=null,Di=qn[--Kn],qn[Kn]=null,Li=qn[--Kn],qn[Kn]=null}var Vn=null,Gn=null,kt=!1,ri=null;function cd(n,i){var o=Qn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=n,i=n.deletions,i===null?(n.deletions=[o],n.flags|=16):i.push(o)}function ud(n,i){switch(n.tag){case 5:var o=n.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Vn=n,Gn=ir(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Vn=n,Gn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Dr!==null?{id:Li,overflow:Di}:null,n.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Qn(18,null,null,0),o.stateNode=i,o.return=n,n.child=o,Vn=n,Gn=null,!0):!1;default:return!1}}function Mc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Tc(n){if(kt){var i=Gn;if(i){var o=i;if(!ud(n,i)){if(Mc(n))throw Error(t(418));i=ir(o.nextSibling);var c=Vn;i&&ud(n,i)?cd(c,o):(n.flags=n.flags&-4097|2,kt=!1,Vn=n)}}else{if(Mc(n))throw Error(t(418));n.flags=n.flags&-4097|2,kt=!1,Vn=n}}}function hd(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Vn=n}function Pa(n){if(n!==Vn)return!1;if(!kt)return hd(n),kt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!mc(n.type,n.memoizedProps)),i&&(i=Gn)){if(Mc(n))throw fd(),Error(t(418));for(;i;)cd(n,i),i=ir(i.nextSibling)}if(hd(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(i===0){Gn=ir(n.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}n=n.nextSibling}Gn=null}}else Gn=Vn?ir(n.stateNode.nextSibling):null;return!0}function fd(){for(var n=Gn;n;)n=ir(n.nextSibling)}function vs(){Gn=Vn=null,kt=!1}function wc(n){ri===null?ri=[n]:ri.push(n)}var B_=b.ReactCurrentBatchConfig;function Mo(n,i,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var c=o.stateNode}if(!c)throw Error(t(147,n));var f=c,p=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(E){var N=f.refs;E===null?delete N[p]:N[p]=E},i._stringRef=p,i)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function ba(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function dd(n){var i=n._init;return i(n._payload)}function pd(n){function i(K,G){if(n){var Z=K.deletions;Z===null?(K.deletions=[G],K.flags|=16):Z.push(G)}}function o(K,G){if(!n)return null;for(;G!==null;)i(K,G),G=G.sibling;return null}function c(K,G){for(K=new Map;G!==null;)G.key!==null?K.set(G.key,G):K.set(G.index,G),G=G.sibling;return K}function f(K,G){return K=pr(K,G),K.index=0,K.sibling=null,K}function p(K,G,Z){return K.index=Z,n?(Z=K.alternate,Z!==null?(Z=Z.index,Z<G?(K.flags|=2,G):Z):(K.flags|=2,G)):(K.flags|=1048576,G)}function E(K){return n&&K.alternate===null&&(K.flags|=2),K}function N(K,G,Z,Te){return G===null||G.tag!==6?(G=gu(Z,K.mode,Te),G.return=K,G):(G=f(G,Z),G.return=K,G)}function z(K,G,Z,Te){var qe=Z.type;return qe===O?ye(K,G,Z.props.children,Te,Z.key):G!==null&&(G.elementType===qe||typeof qe=="object"&&qe!==null&&qe.$$typeof===ce&&dd(qe)===G.type)?(Te=f(G,Z.props),Te.ref=Mo(K,G,Z),Te.return=K,Te):(Te=el(Z.type,Z.key,Z.props,null,K.mode,Te),Te.ref=Mo(K,G,Z),Te.return=K,Te)}function ie(K,G,Z,Te){return G===null||G.tag!==4||G.stateNode.containerInfo!==Z.containerInfo||G.stateNode.implementation!==Z.implementation?(G=_u(Z,K.mode,Te),G.return=K,G):(G=f(G,Z.children||[]),G.return=K,G)}function ye(K,G,Z,Te,qe){return G===null||G.tag!==7?(G=Hr(Z,K.mode,Te,qe),G.return=K,G):(G=f(G,Z),G.return=K,G)}function Se(K,G,Z){if(typeof G=="string"&&G!==""||typeof G=="number")return G=gu(""+G,K.mode,Z),G.return=K,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case X:return Z=el(G.type,G.key,G.props,null,K.mode,Z),Z.ref=Mo(K,null,G),Z.return=K,Z;case k:return G=_u(G,K.mode,Z),G.return=K,G;case ce:var Te=G._init;return Se(K,Te(G._payload),Z)}if(Ye(G)||oe(G))return G=Hr(G,K.mode,Z,null),G.return=K,G;ba(K,G)}return null}function _e(K,G,Z,Te){var qe=G!==null?G.key:null;if(typeof Z=="string"&&Z!==""||typeof Z=="number")return qe!==null?null:N(K,G,""+Z,Te);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case X:return Z.key===qe?z(K,G,Z,Te):null;case k:return Z.key===qe?ie(K,G,Z,Te):null;case ce:return qe=Z._init,_e(K,G,qe(Z._payload),Te)}if(Ye(Z)||oe(Z))return qe!==null?null:ye(K,G,Z,Te,null);ba(K,Z)}return null}function Fe(K,G,Z,Te,qe){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return K=K.get(Z)||null,N(G,K,""+Te,qe);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case X:return K=K.get(Te.key===null?Z:Te.key)||null,z(G,K,Te,qe);case k:return K=K.get(Te.key===null?Z:Te.key)||null,ie(G,K,Te,qe);case ce:var Je=Te._init;return Fe(K,G,Z,Je(Te._payload),qe)}if(Ye(Te)||oe(Te))return K=K.get(Z)||null,ye(G,K,Te,qe,null);ba(G,Te)}return null}function Ve(K,G,Z,Te){for(var qe=null,Je=null,Qe=G,it=G=0,cn=null;Qe!==null&&it<Z.length;it++){Qe.index>it?(cn=Qe,Qe=null):cn=Qe.sibling;var Tt=_e(K,Qe,Z[it],Te);if(Tt===null){Qe===null&&(Qe=cn);break}n&&Qe&&Tt.alternate===null&&i(K,Qe),G=p(Tt,G,it),Je===null?qe=Tt:Je.sibling=Tt,Je=Tt,Qe=cn}if(it===Z.length)return o(K,Qe),kt&&Nr(K,it),qe;if(Qe===null){for(;it<Z.length;it++)Qe=Se(K,Z[it],Te),Qe!==null&&(G=p(Qe,G,it),Je===null?qe=Qe:Je.sibling=Qe,Je=Qe);return kt&&Nr(K,it),qe}for(Qe=c(K,Qe);it<Z.length;it++)cn=Fe(Qe,K,it,Z[it],Te),cn!==null&&(n&&cn.alternate!==null&&Qe.delete(cn.key===null?it:cn.key),G=p(cn,G,it),Je===null?qe=cn:Je.sibling=cn,Je=cn);return n&&Qe.forEach(function(mr){return i(K,mr)}),kt&&Nr(K,it),qe}function We(K,G,Z,Te){var qe=oe(Z);if(typeof qe!="function")throw Error(t(150));if(Z=qe.call(Z),Z==null)throw Error(t(151));for(var Je=qe=null,Qe=G,it=G=0,cn=null,Tt=Z.next();Qe!==null&&!Tt.done;it++,Tt=Z.next()){Qe.index>it?(cn=Qe,Qe=null):cn=Qe.sibling;var mr=_e(K,Qe,Tt.value,Te);if(mr===null){Qe===null&&(Qe=cn);break}n&&Qe&&mr.alternate===null&&i(K,Qe),G=p(mr,G,it),Je===null?qe=mr:Je.sibling=mr,Je=mr,Qe=cn}if(Tt.done)return o(K,Qe),kt&&Nr(K,it),qe;if(Qe===null){for(;!Tt.done;it++,Tt=Z.next())Tt=Se(K,Tt.value,Te),Tt!==null&&(G=p(Tt,G,it),Je===null?qe=Tt:Je.sibling=Tt,Je=Tt);return kt&&Nr(K,it),qe}for(Qe=c(K,Qe);!Tt.done;it++,Tt=Z.next())Tt=Fe(Qe,K,it,Tt.value,Te),Tt!==null&&(n&&Tt.alternate!==null&&Qe.delete(Tt.key===null?it:Tt.key),G=p(Tt,G,it),Je===null?qe=Tt:Je.sibling=Tt,Je=Tt);return n&&Qe.forEach(function(yv){return i(K,yv)}),kt&&Nr(K,it),qe}function Yt(K,G,Z,Te){if(typeof Z=="object"&&Z!==null&&Z.type===O&&Z.key===null&&(Z=Z.props.children),typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case X:e:{for(var qe=Z.key,Je=G;Je!==null;){if(Je.key===qe){if(qe=Z.type,qe===O){if(Je.tag===7){o(K,Je.sibling),G=f(Je,Z.props.children),G.return=K,K=G;break e}}else if(Je.elementType===qe||typeof qe=="object"&&qe!==null&&qe.$$typeof===ce&&dd(qe)===Je.type){o(K,Je.sibling),G=f(Je,Z.props),G.ref=Mo(K,Je,Z),G.return=K,K=G;break e}o(K,Je);break}else i(K,Je);Je=Je.sibling}Z.type===O?(G=Hr(Z.props.children,K.mode,Te,Z.key),G.return=K,K=G):(Te=el(Z.type,Z.key,Z.props,null,K.mode,Te),Te.ref=Mo(K,G,Z),Te.return=K,K=Te)}return E(K);case k:e:{for(Je=Z.key;G!==null;){if(G.key===Je)if(G.tag===4&&G.stateNode.containerInfo===Z.containerInfo&&G.stateNode.implementation===Z.implementation){o(K,G.sibling),G=f(G,Z.children||[]),G.return=K,K=G;break e}else{o(K,G);break}else i(K,G);G=G.sibling}G=_u(Z,K.mode,Te),G.return=K,K=G}return E(K);case ce:return Je=Z._init,Yt(K,G,Je(Z._payload),Te)}if(Ye(Z))return Ve(K,G,Z,Te);if(oe(Z))return We(K,G,Z,Te);ba(K,Z)}return typeof Z=="string"&&Z!==""||typeof Z=="number"?(Z=""+Z,G!==null&&G.tag===6?(o(K,G.sibling),G=f(G,Z),G.return=K,K=G):(o(K,G),G=gu(Z,K.mode,Te),G.return=K,K=G),E(K)):o(K,G)}return Yt}var ys=pd(!0),md=pd(!1),La=rr(null),Da=null,xs=null,Ac=null;function Cc(){Ac=xs=Da=null}function Rc(n){var i=La.current;Ft(La),n._currentValue=i}function Pc(n,i,o){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===o)break;n=n.return}}function Ss(n,i){Da=n,Ac=xs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Nn=!0),n.firstContext=null)}function $n(n){var i=n._currentValue;if(Ac!==n)if(n={context:n,memoizedValue:i,next:null},xs===null){if(Da===null)throw Error(t(308));xs=n,Da.dependencies={lanes:0,firstContext:n}}else xs=xs.next=n;return i}var Ur=null;function bc(n){Ur===null?Ur=[n]:Ur.push(n)}function gd(n,i,o,c){var f=i.interleaved;return f===null?(o.next=o,bc(i)):(o.next=f.next,f.next=o),i.interleaved=o,Ni(n,c)}function Ni(n,i){n.lanes|=i;var o=n.alternate;for(o!==null&&(o.lanes|=i),o=n,n=n.return;n!==null;)n.childLanes|=i,o=n.alternate,o!==null&&(o.childLanes|=i),o=n,n=n.return;return o.tag===3?o.stateNode:null}var ar=!1;function Lc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _d(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ui(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function lr(n,i,o){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Mt&2)!==0){var f=c.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),c.pending=i,Ni(n,o)}return f=c.interleaved,f===null?(i.next=i,bc(c)):(i.next=f.next,f.next=i),c.interleaved=i,Ni(n,o)}function Na(n,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,o|=c,i.lanes=o,on(n,o)}}function vd(n,i){var o=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var f=null,p=null;if(o=o.firstBaseUpdate,o!==null){do{var E={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};p===null?f=p=E:p=p.next=E,o=o.next}while(o!==null);p===null?f=p=i:p=p.next=i}else f=p=i;o={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:p,shared:c.shared,effects:c.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=i:n.next=i,o.lastBaseUpdate=i}function Ua(n,i,o,c){var f=n.updateQueue;ar=!1;var p=f.firstBaseUpdate,E=f.lastBaseUpdate,N=f.shared.pending;if(N!==null){f.shared.pending=null;var z=N,ie=z.next;z.next=null,E===null?p=ie:E.next=ie,E=z;var ye=n.alternate;ye!==null&&(ye=ye.updateQueue,N=ye.lastBaseUpdate,N!==E&&(N===null?ye.firstBaseUpdate=ie:N.next=ie,ye.lastBaseUpdate=z))}if(p!==null){var Se=f.baseState;E=0,ye=ie=z=null,N=p;do{var _e=N.lane,Fe=N.eventTime;if((c&_e)===_e){ye!==null&&(ye=ye.next={eventTime:Fe,lane:0,tag:N.tag,payload:N.payload,callback:N.callback,next:null});e:{var Ve=n,We=N;switch(_e=i,Fe=o,We.tag){case 1:if(Ve=We.payload,typeof Ve=="function"){Se=Ve.call(Fe,Se,_e);break e}Se=Ve;break e;case 3:Ve.flags=Ve.flags&-65537|128;case 0:if(Ve=We.payload,_e=typeof Ve=="function"?Ve.call(Fe,Se,_e):Ve,_e==null)break e;Se=re({},Se,_e);break e;case 2:ar=!0}}N.callback!==null&&N.lane!==0&&(n.flags|=64,_e=f.effects,_e===null?f.effects=[N]:_e.push(N))}else Fe={eventTime:Fe,lane:_e,tag:N.tag,payload:N.payload,callback:N.callback,next:null},ye===null?(ie=ye=Fe,z=Se):ye=ye.next=Fe,E|=_e;if(N=N.next,N===null){if(N=f.shared.pending,N===null)break;_e=N,N=_e.next,_e.next=null,f.lastBaseUpdate=_e,f.shared.pending=null}}while(!0);if(ye===null&&(z=Se),f.baseState=z,f.firstBaseUpdate=ie,f.lastBaseUpdate=ye,i=f.shared.interleaved,i!==null){f=i;do E|=f.lane,f=f.next;while(f!==i)}else p===null&&(f.shared.lanes=0);Or|=E,n.lanes=E,n.memoizedState=Se}}function yd(n,i,o){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],f=c.callback;if(f!==null){if(c.callback=null,c=o,typeof f!="function")throw Error(t(191,f));f.call(c)}}}var To={},vi=rr(To),wo=rr(To),Ao=rr(To);function Ir(n){if(n===To)throw Error(t(174));return n}function Dc(n,i){switch(Nt(Ao,i),Nt(wo,n),Nt(vi,To),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:je(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=je(i,n)}Ft(vi),Nt(vi,i)}function Es(){Ft(vi),Ft(wo),Ft(Ao)}function xd(n){Ir(Ao.current);var i=Ir(vi.current),o=je(i,n.type);i!==o&&(Nt(wo,n),Nt(vi,o))}function Nc(n){wo.current===n&&(Ft(vi),Ft(wo))}var Bt=rr(0);function Ia(n){for(var i=n;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Uc=[];function Ic(){for(var n=0;n<Uc.length;n++)Uc[n]._workInProgressVersionPrimary=null;Uc.length=0}var Fa=b.ReactCurrentDispatcher,Fc=b.ReactCurrentBatchConfig,Fr=0,Ht=null,Qt=null,an=null,Oa=!1,Co=!1,Ro=0,H_=0;function vn(){throw Error(t(321))}function Oc(n,i){if(i===null)return!1;for(var o=0;o<i.length&&o<n.length;o++)if(!ii(n[o],i[o]))return!1;return!0}function kc(n,i,o,c,f,p){if(Fr=p,Ht=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Fa.current=n===null||n.memoizedState===null?X_:Y_,n=o(c,f),Co){p=0;do{if(Co=!1,Ro=0,25<=p)throw Error(t(301));p+=1,an=Qt=null,i.updateQueue=null,Fa.current=j_,n=o(c,f)}while(Co)}if(Fa.current=Ba,i=Qt!==null&&Qt.next!==null,Fr=0,an=Qt=Ht=null,Oa=!1,i)throw Error(t(300));return n}function zc(){var n=Ro!==0;return Ro=0,n}function yi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return an===null?Ht.memoizedState=an=n:an=an.next=n,an}function Zn(){if(Qt===null){var n=Ht.alternate;n=n!==null?n.memoizedState:null}else n=Qt.next;var i=an===null?Ht.memoizedState:an.next;if(i!==null)an=i,Qt=n;else{if(n===null)throw Error(t(310));Qt=n,n={memoizedState:Qt.memoizedState,baseState:Qt.baseState,baseQueue:Qt.baseQueue,queue:Qt.queue,next:null},an===null?Ht.memoizedState=an=n:an=an.next=n}return an}function Po(n,i){return typeof i=="function"?i(n):i}function Bc(n){var i=Zn(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var c=Qt,f=c.baseQueue,p=o.pending;if(p!==null){if(f!==null){var E=f.next;f.next=p.next,p.next=E}c.baseQueue=f=p,o.pending=null}if(f!==null){p=f.next,c=c.baseState;var N=E=null,z=null,ie=p;do{var ye=ie.lane;if((Fr&ye)===ye)z!==null&&(z=z.next={lane:0,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null}),c=ie.hasEagerState?ie.eagerState:n(c,ie.action);else{var Se={lane:ye,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null};z===null?(N=z=Se,E=c):z=z.next=Se,Ht.lanes|=ye,Or|=ye}ie=ie.next}while(ie!==null&&ie!==p);z===null?E=c:z.next=N,ii(c,i.memoizedState)||(Nn=!0),i.memoizedState=c,i.baseState=E,i.baseQueue=z,o.lastRenderedState=c}if(n=o.interleaved,n!==null){f=n;do p=f.lane,Ht.lanes|=p,Or|=p,f=f.next;while(f!==n)}else f===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Hc(n){var i=Zn(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var c=o.dispatch,f=o.pending,p=i.memoizedState;if(f!==null){o.pending=null;var E=f=f.next;do p=n(p,E.action),E=E.next;while(E!==f);ii(p,i.memoizedState)||(Nn=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),o.lastRenderedState=p}return[p,c]}function Sd(){}function Ed(n,i){var o=Ht,c=Zn(),f=i(),p=!ii(c.memoizedState,f);if(p&&(c.memoizedState=f,Nn=!0),c=c.queue,Vc(wd.bind(null,o,c,n),[n]),c.getSnapshot!==i||p||an!==null&&an.memoizedState.tag&1){if(o.flags|=2048,bo(9,Td.bind(null,o,c,f,i),void 0,null),ln===null)throw Error(t(349));(Fr&30)!==0||Md(o,i,f)}return f}function Md(n,i,o){n.flags|=16384,n={getSnapshot:i,value:o},i=Ht.updateQueue,i===null?(i={lastEffect:null,stores:null},Ht.updateQueue=i,i.stores=[n]):(o=i.stores,o===null?i.stores=[n]:o.push(n))}function Td(n,i,o,c){i.value=o,i.getSnapshot=c,Ad(i)&&Cd(n)}function wd(n,i,o){return o(function(){Ad(i)&&Cd(n)})}function Ad(n){var i=n.getSnapshot;n=n.value;try{var o=i();return!ii(n,o)}catch{return!0}}function Cd(n){var i=Ni(n,1);i!==null&&li(i,n,1,-1)}function Rd(n){var i=yi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Po,lastRenderedState:n},i.queue=n,n=n.dispatch=W_.bind(null,Ht,n),[i.memoizedState,n]}function bo(n,i,o,c){return n={tag:n,create:i,destroy:o,deps:c,next:null},i=Ht.updateQueue,i===null?(i={lastEffect:null,stores:null},Ht.updateQueue=i,i.lastEffect=n.next=n):(o=i.lastEffect,o===null?i.lastEffect=n.next=n:(c=o.next,o.next=n,n.next=c,i.lastEffect=n)),n}function Pd(){return Zn().memoizedState}function ka(n,i,o,c){var f=yi();Ht.flags|=n,f.memoizedState=bo(1|i,o,void 0,c===void 0?null:c)}function za(n,i,o,c){var f=Zn();c=c===void 0?null:c;var p=void 0;if(Qt!==null){var E=Qt.memoizedState;if(p=E.destroy,c!==null&&Oc(c,E.deps)){f.memoizedState=bo(i,o,p,c);return}}Ht.flags|=n,f.memoizedState=bo(1|i,o,p,c)}function bd(n,i){return ka(8390656,8,n,i)}function Vc(n,i){return za(2048,8,n,i)}function Ld(n,i){return za(4,2,n,i)}function Dd(n,i){return za(4,4,n,i)}function Nd(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Ud(n,i,o){return o=o!=null?o.concat([n]):null,za(4,4,Nd.bind(null,i,n),o)}function Gc(){}function Id(n,i){var o=Zn();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&Oc(i,c[1])?c[0]:(o.memoizedState=[n,i],n)}function Fd(n,i){var o=Zn();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&Oc(i,c[1])?c[0]:(n=n(),o.memoizedState=[n,i],n)}function Od(n,i,o){return(Fr&21)===0?(n.baseState&&(n.baseState=!1,Nn=!0),n.memoizedState=o):(ii(o,i)||(o=Dt(),Ht.lanes|=o,Or|=o,n.baseState=!0),i)}function V_(n,i){var o=Et;Et=o!==0&&4>o?o:4,n(!0);var c=Fc.transition;Fc.transition={};try{n(!1),i()}finally{Et=o,Fc.transition=c}}function kd(){return Zn().memoizedState}function G_(n,i,o){var c=fr(n);if(o={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null},zd(n))Bd(i,o);else if(o=gd(n,i,o,c),o!==null){var f=An();li(o,n,c,f),Hd(o,i,c)}}function W_(n,i,o){var c=fr(n),f={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null};if(zd(n))Bd(i,f);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var E=i.lastRenderedState,N=p(E,o);if(f.hasEagerState=!0,f.eagerState=N,ii(N,E)){var z=i.interleaved;z===null?(f.next=f,bc(i)):(f.next=z.next,z.next=f),i.interleaved=f;return}}catch{}finally{}o=gd(n,i,f,c),o!==null&&(f=An(),li(o,n,c,f),Hd(o,i,c))}}function zd(n){var i=n.alternate;return n===Ht||i!==null&&i===Ht}function Bd(n,i){Co=Oa=!0;var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}function Hd(n,i,o){if((o&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,o|=c,i.lanes=o,on(n,o)}}var Ba={readContext:$n,useCallback:vn,useContext:vn,useEffect:vn,useImperativeHandle:vn,useInsertionEffect:vn,useLayoutEffect:vn,useMemo:vn,useReducer:vn,useRef:vn,useState:vn,useDebugValue:vn,useDeferredValue:vn,useTransition:vn,useMutableSource:vn,useSyncExternalStore:vn,useId:vn,unstable_isNewReconciler:!1},X_={readContext:$n,useCallback:function(n,i){return yi().memoizedState=[n,i===void 0?null:i],n},useContext:$n,useEffect:bd,useImperativeHandle:function(n,i,o){return o=o!=null?o.concat([n]):null,ka(4194308,4,Nd.bind(null,i,n),o)},useLayoutEffect:function(n,i){return ka(4194308,4,n,i)},useInsertionEffect:function(n,i){return ka(4,2,n,i)},useMemo:function(n,i){var o=yi();return i=i===void 0?null:i,n=n(),o.memoizedState=[n,i],n},useReducer:function(n,i,o){var c=yi();return i=o!==void 0?o(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=G_.bind(null,Ht,n),[c.memoizedState,n]},useRef:function(n){var i=yi();return n={current:n},i.memoizedState=n},useState:Rd,useDebugValue:Gc,useDeferredValue:function(n){return yi().memoizedState=n},useTransition:function(){var n=Rd(!1),i=n[0];return n=V_.bind(null,n[1]),yi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,o){var c=Ht,f=yi();if(kt){if(o===void 0)throw Error(t(407));o=o()}else{if(o=i(),ln===null)throw Error(t(349));(Fr&30)!==0||Md(c,i,o)}f.memoizedState=o;var p={value:o,getSnapshot:i};return f.queue=p,bd(wd.bind(null,c,p,n),[n]),c.flags|=2048,bo(9,Td.bind(null,c,p,o,i),void 0,null),o},useId:function(){var n=yi(),i=ln.identifierPrefix;if(kt){var o=Di,c=Li;o=(c&~(1<<32-at(c)-1)).toString(32)+o,i=":"+i+"R"+o,o=Ro++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=H_++,i=":"+i+"r"+o.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Y_={readContext:$n,useCallback:Id,useContext:$n,useEffect:Vc,useImperativeHandle:Ud,useInsertionEffect:Ld,useLayoutEffect:Dd,useMemo:Fd,useReducer:Bc,useRef:Pd,useState:function(){return Bc(Po)},useDebugValue:Gc,useDeferredValue:function(n){var i=Zn();return Od(i,Qt.memoizedState,n)},useTransition:function(){var n=Bc(Po)[0],i=Zn().memoizedState;return[n,i]},useMutableSource:Sd,useSyncExternalStore:Ed,useId:kd,unstable_isNewReconciler:!1},j_={readContext:$n,useCallback:Id,useContext:$n,useEffect:Vc,useImperativeHandle:Ud,useInsertionEffect:Ld,useLayoutEffect:Dd,useMemo:Fd,useReducer:Hc,useRef:Pd,useState:function(){return Hc(Po)},useDebugValue:Gc,useDeferredValue:function(n){var i=Zn();return Qt===null?i.memoizedState=n:Od(i,Qt.memoizedState,n)},useTransition:function(){var n=Hc(Po)[0],i=Zn().memoizedState;return[n,i]},useMutableSource:Sd,useSyncExternalStore:Ed,useId:kd,unstable_isNewReconciler:!1};function si(n,i){if(n&&n.defaultProps){i=re({},i),n=n.defaultProps;for(var o in n)i[o]===void 0&&(i[o]=n[o]);return i}return i}function Wc(n,i,o,c){i=n.memoizedState,o=o(c,i),o=o==null?i:re({},i,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var Ha={isMounted:function(n){return(n=n._reactInternals)?mi(n)===n:!1},enqueueSetState:function(n,i,o){n=n._reactInternals;var c=An(),f=fr(n),p=Ui(c,f);p.payload=i,o!=null&&(p.callback=o),i=lr(n,p,f),i!==null&&(li(i,n,f,c),Na(i,n,f))},enqueueReplaceState:function(n,i,o){n=n._reactInternals;var c=An(),f=fr(n),p=Ui(c,f);p.tag=1,p.payload=i,o!=null&&(p.callback=o),i=lr(n,p,f),i!==null&&(li(i,n,f,c),Na(i,n,f))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var o=An(),c=fr(n),f=Ui(o,c);f.tag=2,i!=null&&(f.callback=i),i=lr(n,f,c),i!==null&&(li(i,n,c,o),Na(i,n,c))}};function Vd(n,i,o,c,f,p,E){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,p,E):i.prototype&&i.prototype.isPureReactComponent?!go(o,c)||!go(f,p):!0}function Gd(n,i,o){var c=!1,f=sr,p=i.contextType;return typeof p=="object"&&p!==null?p=$n(p):(f=Dn(i)?Lr:_n.current,c=i.contextTypes,p=(c=c!=null)?ms(n,f):sr),i=new i(o,p),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ha,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=f,n.__reactInternalMemoizedMaskedChildContext=p),i}function Wd(n,i,o,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,c),i.state!==n&&Ha.enqueueReplaceState(i,i.state,null)}function Xc(n,i,o,c){var f=n.stateNode;f.props=o,f.state=n.memoizedState,f.refs={},Lc(n);var p=i.contextType;typeof p=="object"&&p!==null?f.context=$n(p):(p=Dn(i)?Lr:_n.current,f.context=ms(n,p)),f.state=n.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(Wc(n,i,p,o),f.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&Ha.enqueueReplaceState(f,f.state,null),Ua(n,o,f,c),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308)}function Ms(n,i){try{var o="",c=i;do o+=de(c),c=c.return;while(c);var f=o}catch(p){f=`
Error generating stack: `+p.message+`
`+p.stack}return{value:n,source:i,stack:f,digest:null}}function Yc(n,i,o){return{value:n,source:null,stack:o??null,digest:i??null}}function jc(n,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var q_=typeof WeakMap=="function"?WeakMap:Map;function Xd(n,i,o){o=Ui(-1,o),o.tag=3,o.payload={element:null};var c=i.value;return o.callback=function(){qa||(qa=!0,lu=c),jc(n,i)},o}function Yd(n,i,o){o=Ui(-1,o),o.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var f=i.value;o.payload=function(){return c(f)},o.callback=function(){jc(n,i)}}var p=n.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(o.callback=function(){jc(n,i),typeof c!="function"&&(ur===null?ur=new Set([this]):ur.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),o}function jd(n,i,o){var c=n.pingCache;if(c===null){c=n.pingCache=new q_;var f=new Set;c.set(i,f)}else f=c.get(i),f===void 0&&(f=new Set,c.set(i,f));f.has(o)||(f.add(o),n=lv.bind(null,n,i,o),i.then(n,n))}function qd(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Kd(n,i,o,c,f){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Ui(-1,1),i.tag=2,lr(o,i,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=f,n)}var K_=b.ReactCurrentOwner,Nn=!1;function wn(n,i,o,c){i.child=n===null?md(i,null,o,c):ys(i,n.child,o,c)}function $d(n,i,o,c,f){o=o.render;var p=i.ref;return Ss(i,f),c=kc(n,i,o,c,p,f),o=zc(),n!==null&&!Nn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,Ii(n,i,f)):(kt&&o&&Sc(i),i.flags|=1,wn(n,i,c,f),i.child)}function Zd(n,i,o,c,f){if(n===null){var p=o.type;return typeof p=="function"&&!mu(p)&&p.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=p,Jd(n,i,p,c,f)):(n=el(o.type,null,c,i,i.mode,f),n.ref=i.ref,n.return=i,i.child=n)}if(p=n.child,(n.lanes&f)===0){var E=p.memoizedProps;if(o=o.compare,o=o!==null?o:go,o(E,c)&&n.ref===i.ref)return Ii(n,i,f)}return i.flags|=1,n=pr(p,c),n.ref=i.ref,n.return=i,i.child=n}function Jd(n,i,o,c,f){if(n!==null){var p=n.memoizedProps;if(go(p,c)&&n.ref===i.ref)if(Nn=!1,i.pendingProps=c=p,(n.lanes&f)!==0)(n.flags&131072)!==0&&(Nn=!0);else return i.lanes=n.lanes,Ii(n,i,f)}return qc(n,i,o,c,f)}function Qd(n,i,o){var c=i.pendingProps,f=c.children,p=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Nt(ws,Wn),Wn|=o;else{if((o&1073741824)===0)return n=p!==null?p.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Nt(ws,Wn),Wn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=p!==null?p.baseLanes:o,Nt(ws,Wn),Wn|=c}else p!==null?(c=p.baseLanes|o,i.memoizedState=null):c=o,Nt(ws,Wn),Wn|=c;return wn(n,i,f,o),i.child}function ep(n,i){var o=i.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function qc(n,i,o,c,f){var p=Dn(o)?Lr:_n.current;return p=ms(i,p),Ss(i,f),o=kc(n,i,o,c,p,f),c=zc(),n!==null&&!Nn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,Ii(n,i,f)):(kt&&c&&Sc(i),i.flags|=1,wn(n,i,o,f),i.child)}function tp(n,i,o,c,f){if(Dn(o)){var p=!0;wa(i)}else p=!1;if(Ss(i,f),i.stateNode===null)Ga(n,i),Gd(i,o,c),Xc(i,o,c,f),c=!0;else if(n===null){var E=i.stateNode,N=i.memoizedProps;E.props=N;var z=E.context,ie=o.contextType;typeof ie=="object"&&ie!==null?ie=$n(ie):(ie=Dn(o)?Lr:_n.current,ie=ms(i,ie));var ye=o.getDerivedStateFromProps,Se=typeof ye=="function"||typeof E.getSnapshotBeforeUpdate=="function";Se||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(N!==c||z!==ie)&&Wd(i,E,c,ie),ar=!1;var _e=i.memoizedState;E.state=_e,Ua(i,c,E,f),z=i.memoizedState,N!==c||_e!==z||Ln.current||ar?(typeof ye=="function"&&(Wc(i,o,ye,c),z=i.memoizedState),(N=ar||Vd(i,o,N,c,_e,z,ie))?(Se||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=z),E.props=c,E.state=z,E.context=ie,c=N):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{E=i.stateNode,_d(n,i),N=i.memoizedProps,ie=i.type===i.elementType?N:si(i.type,N),E.props=ie,Se=i.pendingProps,_e=E.context,z=o.contextType,typeof z=="object"&&z!==null?z=$n(z):(z=Dn(o)?Lr:_n.current,z=ms(i,z));var Fe=o.getDerivedStateFromProps;(ye=typeof Fe=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(N!==Se||_e!==z)&&Wd(i,E,c,z),ar=!1,_e=i.memoizedState,E.state=_e,Ua(i,c,E,f);var Ve=i.memoizedState;N!==Se||_e!==Ve||Ln.current||ar?(typeof Fe=="function"&&(Wc(i,o,Fe,c),Ve=i.memoizedState),(ie=ar||Vd(i,o,ie,c,_e,Ve,z)||!1)?(ye||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(c,Ve,z),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(c,Ve,z)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||N===n.memoizedProps&&_e===n.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||N===n.memoizedProps&&_e===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=Ve),E.props=c,E.state=Ve,E.context=z,c=ie):(typeof E.componentDidUpdate!="function"||N===n.memoizedProps&&_e===n.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||N===n.memoizedProps&&_e===n.memoizedState||(i.flags|=1024),c=!1)}return Kc(n,i,o,c,p,f)}function Kc(n,i,o,c,f,p){ep(n,i);var E=(i.flags&128)!==0;if(!c&&!E)return f&&od(i,o,!1),Ii(n,i,p);c=i.stateNode,K_.current=i;var N=E&&typeof o.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&E?(i.child=ys(i,n.child,null,p),i.child=ys(i,null,N,p)):wn(n,i,N,p),i.memoizedState=c.state,f&&od(i,o,!0),i.child}function np(n){var i=n.stateNode;i.pendingContext?rd(n,i.pendingContext,i.pendingContext!==i.context):i.context&&rd(n,i.context,!1),Dc(n,i.containerInfo)}function ip(n,i,o,c,f){return vs(),wc(f),i.flags|=256,wn(n,i,o,c),i.child}var $c={dehydrated:null,treeContext:null,retryLane:0};function Zc(n){return{baseLanes:n,cachePool:null,transitions:null}}function rp(n,i,o){var c=i.pendingProps,f=Bt.current,p=!1,E=(i.flags&128)!==0,N;if((N=E)||(N=n!==null&&n.memoizedState===null?!1:(f&2)!==0),N?(p=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(f|=1),Nt(Bt,f&1),n===null)return Tc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(E=c.children,n=c.fallback,p?(c=i.mode,p=i.child,E={mode:"hidden",children:E},(c&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=E):p=tl(E,c,0,null),n=Hr(n,c,o,null),p.return=i,n.return=i,p.sibling=n,i.child=p,i.child.memoizedState=Zc(o),i.memoizedState=$c,n):Jc(i,E));if(f=n.memoizedState,f!==null&&(N=f.dehydrated,N!==null))return $_(n,i,E,c,N,f,o);if(p){p=c.fallback,E=i.mode,f=n.child,N=f.sibling;var z={mode:"hidden",children:c.children};return(E&1)===0&&i.child!==f?(c=i.child,c.childLanes=0,c.pendingProps=z,i.deletions=null):(c=pr(f,z),c.subtreeFlags=f.subtreeFlags&14680064),N!==null?p=pr(N,p):(p=Hr(p,E,o,null),p.flags|=2),p.return=i,c.return=i,c.sibling=p,i.child=c,c=p,p=i.child,E=n.child.memoizedState,E=E===null?Zc(o):{baseLanes:E.baseLanes|o,cachePool:null,transitions:E.transitions},p.memoizedState=E,p.childLanes=n.childLanes&~o,i.memoizedState=$c,c}return p=n.child,n=p.sibling,c=pr(p,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=o),c.return=i,c.sibling=null,n!==null&&(o=i.deletions,o===null?(i.deletions=[n],i.flags|=16):o.push(n)),i.child=c,i.memoizedState=null,c}function Jc(n,i){return i=tl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Va(n,i,o,c){return c!==null&&wc(c),ys(i,n.child,null,o),n=Jc(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function $_(n,i,o,c,f,p,E){if(o)return i.flags&256?(i.flags&=-257,c=Yc(Error(t(422))),Va(n,i,E,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(p=c.fallback,f=i.mode,c=tl({mode:"visible",children:c.children},f,0,null),p=Hr(p,f,E,null),p.flags|=2,c.return=i,p.return=i,c.sibling=p,i.child=c,(i.mode&1)!==0&&ys(i,n.child,null,E),i.child.memoizedState=Zc(E),i.memoizedState=$c,p);if((i.mode&1)===0)return Va(n,i,E,null);if(f.data==="$!"){if(c=f.nextSibling&&f.nextSibling.dataset,c)var N=c.dgst;return c=N,p=Error(t(419)),c=Yc(p,c,void 0),Va(n,i,E,c)}if(N=(E&n.childLanes)!==0,Nn||N){if(c=ln,c!==null){switch(E&-E){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(c.suspendedLanes|E))!==0?0:f,f!==0&&f!==p.retryLane&&(p.retryLane=f,Ni(n,f),li(c,n,f,-1))}return pu(),c=Yc(Error(t(421))),Va(n,i,E,c)}return f.data==="$?"?(i.flags|=128,i.child=n.child,i=cv.bind(null,n),f._reactRetry=i,null):(n=p.treeContext,Gn=ir(f.nextSibling),Vn=i,kt=!0,ri=null,n!==null&&(qn[Kn++]=Li,qn[Kn++]=Di,qn[Kn++]=Dr,Li=n.id,Di=n.overflow,Dr=i),i=Jc(i,c.children),i.flags|=4096,i)}function sp(n,i,o){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Pc(n.return,i,o)}function Qc(n,i,o,c,f){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:f}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=c,p.tail=o,p.tailMode=f)}function op(n,i,o){var c=i.pendingProps,f=c.revealOrder,p=c.tail;if(wn(n,i,c.children,o),c=Bt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&sp(n,o,i);else if(n.tag===19)sp(n,o,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Nt(Bt,c),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(o=i.child,f=null;o!==null;)n=o.alternate,n!==null&&Ia(n)===null&&(f=o),o=o.sibling;o=f,o===null?(f=i.child,i.child=null):(f=o.sibling,o.sibling=null),Qc(i,!1,f,o,p);break;case"backwards":for(o=null,f=i.child,i.child=null;f!==null;){if(n=f.alternate,n!==null&&Ia(n)===null){i.child=f;break}n=f.sibling,f.sibling=o,o=f,f=n}Qc(i,!0,o,null,p);break;case"together":Qc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Ga(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Ii(n,i,o){if(n!==null&&(i.dependencies=n.dependencies),Or|=i.lanes,(o&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,o=pr(n,n.pendingProps),i.child=o,o.return=i;n.sibling!==null;)n=n.sibling,o=o.sibling=pr(n,n.pendingProps),o.return=i;o.sibling=null}return i.child}function Z_(n,i,o){switch(i.tag){case 3:np(i),vs();break;case 5:xd(i);break;case 1:Dn(i.type)&&wa(i);break;case 4:Dc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,f=i.memoizedProps.value;Nt(La,c._currentValue),c._currentValue=f;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Nt(Bt,Bt.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?rp(n,i,o):(Nt(Bt,Bt.current&1),n=Ii(n,i,o),n!==null?n.sibling:null);Nt(Bt,Bt.current&1);break;case 19:if(c=(o&i.childLanes)!==0,(n.flags&128)!==0){if(c)return op(n,i,o);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Nt(Bt,Bt.current),c)break;return null;case 22:case 23:return i.lanes=0,Qd(n,i,o)}return Ii(n,i,o)}var ap,eu,lp,cp;ap=function(n,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},eu=function(){},lp=function(n,i,o,c){var f=n.memoizedProps;if(f!==c){n=i.stateNode,Ir(vi.current);var p=null;switch(o){case"input":f=H(n,f),c=H(n,c),p=[];break;case"select":f=re({},f,{value:void 0}),c=re({},c,{value:void 0}),p=[];break;case"textarea":f=T(n,f),c=T(n,c),p=[];break;default:typeof f.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Ea)}pt(o,c);var E;o=null;for(ie in f)if(!c.hasOwnProperty(ie)&&f.hasOwnProperty(ie)&&f[ie]!=null)if(ie==="style"){var N=f[ie];for(E in N)N.hasOwnProperty(E)&&(o||(o={}),o[E]="")}else ie!=="dangerouslySetInnerHTML"&&ie!=="children"&&ie!=="suppressContentEditableWarning"&&ie!=="suppressHydrationWarning"&&ie!=="autoFocus"&&(a.hasOwnProperty(ie)?p||(p=[]):(p=p||[]).push(ie,null));for(ie in c){var z=c[ie];if(N=f!=null?f[ie]:void 0,c.hasOwnProperty(ie)&&z!==N&&(z!=null||N!=null))if(ie==="style")if(N){for(E in N)!N.hasOwnProperty(E)||z&&z.hasOwnProperty(E)||(o||(o={}),o[E]="");for(E in z)z.hasOwnProperty(E)&&N[E]!==z[E]&&(o||(o={}),o[E]=z[E])}else o||(p||(p=[]),p.push(ie,o)),o=z;else ie==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,N=N?N.__html:void 0,z!=null&&N!==z&&(p=p||[]).push(ie,z)):ie==="children"?typeof z!="string"&&typeof z!="number"||(p=p||[]).push(ie,""+z):ie!=="suppressContentEditableWarning"&&ie!=="suppressHydrationWarning"&&(a.hasOwnProperty(ie)?(z!=null&&ie==="onScroll"&&It("scroll",n),p||N===z||(p=[])):(p=p||[]).push(ie,z))}o&&(p=p||[]).push("style",o);var ie=p;(i.updateQueue=ie)&&(i.flags|=4)}},cp=function(n,i,o,c){o!==c&&(i.flags|=4)};function Lo(n,i){if(!kt)switch(n.tailMode){case"hidden":i=n.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function yn(n){var i=n.alternate!==null&&n.alternate.child===n.child,o=0,c=0;if(i)for(var f=n.child;f!==null;)o|=f.lanes|f.childLanes,c|=f.subtreeFlags&14680064,c|=f.flags&14680064,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)o|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=c,n.childLanes=o,i}function J_(n,i,o){var c=i.pendingProps;switch(Ec(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return yn(i),null;case 1:return Dn(i.type)&&Ta(),yn(i),null;case 3:return c=i.stateNode,Es(),Ft(Ln),Ft(_n),Ic(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Pa(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ri!==null&&(hu(ri),ri=null))),eu(n,i),yn(i),null;case 5:Nc(i);var f=Ir(Ao.current);if(o=i.type,n!==null&&i.stateNode!=null)lp(n,i,o,c,f),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return yn(i),null}if(n=Ir(vi.current),Pa(i)){c=i.stateNode,o=i.type;var p=i.memoizedProps;switch(c[_i]=i,c[So]=p,n=(i.mode&1)!==0,o){case"dialog":It("cancel",c),It("close",c);break;case"iframe":case"object":case"embed":It("load",c);break;case"video":case"audio":for(f=0;f<vo.length;f++)It(vo[f],c);break;case"source":It("error",c);break;case"img":case"image":case"link":It("error",c),It("load",c);break;case"details":It("toggle",c);break;case"input":Xt(c,p),It("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!p.multiple},It("invalid",c);break;case"textarea":Q(c,p),It("invalid",c)}pt(o,p),f=null;for(var E in p)if(p.hasOwnProperty(E)){var N=p[E];E==="children"?typeof N=="string"?c.textContent!==N&&(p.suppressHydrationWarning!==!0&&Sa(c.textContent,N,n),f=["children",N]):typeof N=="number"&&c.textContent!==""+N&&(p.suppressHydrationWarning!==!0&&Sa(c.textContent,N,n),f=["children",""+N]):a.hasOwnProperty(E)&&N!=null&&E==="onScroll"&&It("scroll",c)}switch(o){case"input":vt(c),Ke(c,p,!0);break;case"textarea":vt(c),ve(c);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(c.onclick=Ea)}c=f,i.updateQueue=c,c!==null&&(i.flags|=4)}else{E=f.nodeType===9?f:f.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=fe(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=E.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=E.createElement(o,{is:c.is}):(n=E.createElement(o),o==="select"&&(E=n,c.multiple?E.multiple=!0:c.size&&(E.size=c.size))):n=E.createElementNS(n,o),n[_i]=i,n[So]=c,ap(n,i,!1,!1),i.stateNode=n;e:{switch(E=rt(o,c),o){case"dialog":It("cancel",n),It("close",n),f=c;break;case"iframe":case"object":case"embed":It("load",n),f=c;break;case"video":case"audio":for(f=0;f<vo.length;f++)It(vo[f],n);f=c;break;case"source":It("error",n),f=c;break;case"img":case"image":case"link":It("error",n),It("load",n),f=c;break;case"details":It("toggle",n),f=c;break;case"input":Xt(n,c),f=H(n,c),It("invalid",n);break;case"option":f=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},f=re({},c,{value:void 0}),It("invalid",n);break;case"textarea":Q(n,c),f=T(n,c),It("invalid",n);break;default:f=c}pt(o,f),N=f;for(p in N)if(N.hasOwnProperty(p)){var z=N[p];p==="style"?tt(n,z):p==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,z!=null&&Oe(n,z)):p==="children"?typeof z=="string"?(o!=="textarea"||z!=="")&&dt(n,z):typeof z=="number"&&dt(n,""+z):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(a.hasOwnProperty(p)?z!=null&&p==="onScroll"&&It("scroll",n):z!=null&&U(n,p,z,E))}switch(o){case"input":vt(n),Ke(n,c,!1);break;case"textarea":vt(n),ve(n);break;case"option":c.value!=null&&n.setAttribute("value",""+we(c.value));break;case"select":n.multiple=!!c.multiple,p=c.value,p!=null?L(n,!!c.multiple,p,!1):c.defaultValue!=null&&L(n,!!c.multiple,c.defaultValue,!0);break;default:typeof f.onClick=="function"&&(n.onclick=Ea)}switch(o){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return yn(i),null;case 6:if(n&&i.stateNode!=null)cp(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(o=Ir(Ao.current),Ir(vi.current),Pa(i)){if(c=i.stateNode,o=i.memoizedProps,c[_i]=i,(p=c.nodeValue!==o)&&(n=Vn,n!==null))switch(n.tag){case 3:Sa(c.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Sa(c.nodeValue,o,(n.mode&1)!==0)}p&&(i.flags|=4)}else c=(o.nodeType===9?o:o.ownerDocument).createTextNode(c),c[_i]=i,i.stateNode=c}return yn(i),null;case 13:if(Ft(Bt),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(kt&&Gn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)fd(),vs(),i.flags|=98560,p=!1;else if(p=Pa(i),c!==null&&c.dehydrated!==null){if(n===null){if(!p)throw Error(t(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(t(317));p[_i]=i}else vs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;yn(i),p=!1}else ri!==null&&(hu(ri),ri=null),p=!0;if(!p)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Bt.current&1)!==0?en===0&&(en=3):pu())),i.updateQueue!==null&&(i.flags|=4),yn(i),null);case 4:return Es(),eu(n,i),n===null&&yo(i.stateNode.containerInfo),yn(i),null;case 10:return Rc(i.type._context),yn(i),null;case 17:return Dn(i.type)&&Ta(),yn(i),null;case 19:if(Ft(Bt),p=i.memoizedState,p===null)return yn(i),null;if(c=(i.flags&128)!==0,E=p.rendering,E===null)if(c)Lo(p,!1);else{if(en!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(E=Ia(n),E!==null){for(i.flags|=128,Lo(p,!1),c=E.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=o,o=i.child;o!==null;)p=o,n=c,p.flags&=14680066,E=p.alternate,E===null?(p.childLanes=0,p.lanes=n,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=E.childLanes,p.lanes=E.lanes,p.child=E.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=E.memoizedProps,p.memoizedState=E.memoizedState,p.updateQueue=E.updateQueue,p.type=E.type,n=E.dependencies,p.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return Nt(Bt,Bt.current&1|2),i.child}n=n.sibling}p.tail!==null&&$()>As&&(i.flags|=128,c=!0,Lo(p,!1),i.lanes=4194304)}else{if(!c)if(n=Ia(E),n!==null){if(i.flags|=128,c=!0,o=n.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Lo(p,!0),p.tail===null&&p.tailMode==="hidden"&&!E.alternate&&!kt)return yn(i),null}else 2*$()-p.renderingStartTime>As&&o!==1073741824&&(i.flags|=128,c=!0,Lo(p,!1),i.lanes=4194304);p.isBackwards?(E.sibling=i.child,i.child=E):(o=p.last,o!==null?o.sibling=E:i.child=E,p.last=E)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=$(),i.sibling=null,o=Bt.current,Nt(Bt,c?o&1|2:o&1),i):(yn(i),null);case 22:case 23:return du(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(Wn&1073741824)!==0&&(yn(i),i.subtreeFlags&6&&(i.flags|=8192)):yn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function Q_(n,i){switch(Ec(i),i.tag){case 1:return Dn(i.type)&&Ta(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Es(),Ft(Ln),Ft(_n),Ic(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Nc(i),null;case 13:if(Ft(Bt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));vs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Ft(Bt),null;case 4:return Es(),null;case 10:return Rc(i.type._context),null;case 22:case 23:return du(),null;case 24:return null;default:return null}}var Wa=!1,xn=!1,ev=typeof WeakSet=="function"?WeakSet:Set,ke=null;function Ts(n,i){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(c){Wt(n,i,c)}else o.current=null}function tu(n,i,o){try{o()}catch(c){Wt(n,i,c)}}var up=!1;function tv(n,i){if(dc=ua,n=Vf(),sc(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var f=c.anchorOffset,p=c.focusNode;c=c.focusOffset;try{o.nodeType,p.nodeType}catch{o=null;break e}var E=0,N=-1,z=-1,ie=0,ye=0,Se=n,_e=null;t:for(;;){for(var Fe;Se!==o||f!==0&&Se.nodeType!==3||(N=E+f),Se!==p||c!==0&&Se.nodeType!==3||(z=E+c),Se.nodeType===3&&(E+=Se.nodeValue.length),(Fe=Se.firstChild)!==null;)_e=Se,Se=Fe;for(;;){if(Se===n)break t;if(_e===o&&++ie===f&&(N=E),_e===p&&++ye===c&&(z=E),(Fe=Se.nextSibling)!==null)break;Se=_e,_e=Se.parentNode}Se=Fe}o=N===-1||z===-1?null:{start:N,end:z}}else o=null}o=o||{start:0,end:0}}else o=null;for(pc={focusedElem:n,selectionRange:o},ua=!1,ke=i;ke!==null;)if(i=ke,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,ke=n;else for(;ke!==null;){i=ke;try{var Ve=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ve!==null){var We=Ve.memoizedProps,Yt=Ve.memoizedState,K=i.stateNode,G=K.getSnapshotBeforeUpdate(i.elementType===i.type?We:si(i.type,We),Yt);K.__reactInternalSnapshotBeforeUpdate=G}break;case 3:var Z=i.stateNode.containerInfo;Z.nodeType===1?Z.textContent="":Z.nodeType===9&&Z.documentElement&&Z.removeChild(Z.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Te){Wt(i,i.return,Te)}if(n=i.sibling,n!==null){n.return=i.return,ke=n;break}ke=i.return}return Ve=up,up=!1,Ve}function Do(n,i,o){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var f=c=c.next;do{if((f.tag&n)===n){var p=f.destroy;f.destroy=void 0,p!==void 0&&tu(i,o,p)}f=f.next}while(f!==c)}}function Xa(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&n)===n){var c=o.create;o.destroy=c()}o=o.next}while(o!==i)}}function nu(n){var i=n.ref;if(i!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof i=="function"?i(n):i.current=n}}function hp(n){var i=n.alternate;i!==null&&(n.alternate=null,hp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[_i],delete i[So],delete i[vc],delete i[O_],delete i[k_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function fp(n){return n.tag===5||n.tag===3||n.tag===4}function dp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||fp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function iu(n,i,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(n,i):o.insertBefore(n,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(n,o)):(i=o,i.appendChild(n)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=Ea));else if(c!==4&&(n=n.child,n!==null))for(iu(n,i,o),n=n.sibling;n!==null;)iu(n,i,o),n=n.sibling}function ru(n,i,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?o.insertBefore(n,i):o.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(ru(n,i,o),n=n.sibling;n!==null;)ru(n,i,o),n=n.sibling}var fn=null,oi=!1;function cr(n,i,o){for(o=o.child;o!==null;)pp(n,i,o),o=o.sibling}function pp(n,i,o){if(Ge&&typeof Ge.onCommitFiberUnmount=="function")try{Ge.onCommitFiberUnmount(et,o)}catch{}switch(o.tag){case 5:xn||Ts(o,i);case 6:var c=fn,f=oi;fn=null,cr(n,i,o),fn=c,oi=f,fn!==null&&(oi?(n=fn,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):fn.removeChild(o.stateNode));break;case 18:fn!==null&&(oi?(n=fn,o=o.stateNode,n.nodeType===8?_c(n.parentNode,o):n.nodeType===1&&_c(n,o),co(n)):_c(fn,o.stateNode));break;case 4:c=fn,f=oi,fn=o.stateNode.containerInfo,oi=!0,cr(n,i,o),fn=c,oi=f;break;case 0:case 11:case 14:case 15:if(!xn&&(c=o.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){f=c=c.next;do{var p=f,E=p.destroy;p=p.tag,E!==void 0&&((p&2)!==0||(p&4)!==0)&&tu(o,i,E),f=f.next}while(f!==c)}cr(n,i,o);break;case 1:if(!xn&&(Ts(o,i),c=o.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=o.memoizedProps,c.state=o.memoizedState,c.componentWillUnmount()}catch(N){Wt(o,i,N)}cr(n,i,o);break;case 21:cr(n,i,o);break;case 22:o.mode&1?(xn=(c=xn)||o.memoizedState!==null,cr(n,i,o),xn=c):cr(n,i,o);break;default:cr(n,i,o)}}function mp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new ev),i.forEach(function(c){var f=uv.bind(null,n,c);o.has(c)||(o.add(c),c.then(f,f))})}}function ai(n,i){var o=i.deletions;if(o!==null)for(var c=0;c<o.length;c++){var f=o[c];try{var p=n,E=i,N=E;e:for(;N!==null;){switch(N.tag){case 5:fn=N.stateNode,oi=!1;break e;case 3:fn=N.stateNode.containerInfo,oi=!0;break e;case 4:fn=N.stateNode.containerInfo,oi=!0;break e}N=N.return}if(fn===null)throw Error(t(160));pp(p,E,f),fn=null,oi=!1;var z=f.alternate;z!==null&&(z.return=null),f.return=null}catch(ie){Wt(f,i,ie)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)gp(i,n),i=i.sibling}function gp(n,i){var o=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ai(i,n),xi(n),c&4){try{Do(3,n,n.return),Xa(3,n)}catch(We){Wt(n,n.return,We)}try{Do(5,n,n.return)}catch(We){Wt(n,n.return,We)}}break;case 1:ai(i,n),xi(n),c&512&&o!==null&&Ts(o,o.return);break;case 5:if(ai(i,n),xi(n),c&512&&o!==null&&Ts(o,o.return),n.flags&32){var f=n.stateNode;try{dt(f,"")}catch(We){Wt(n,n.return,We)}}if(c&4&&(f=n.stateNode,f!=null)){var p=n.memoizedProps,E=o!==null?o.memoizedProps:p,N=n.type,z=n.updateQueue;if(n.updateQueue=null,z!==null)try{N==="input"&&p.type==="radio"&&p.name!=null&&ut(f,p),rt(N,E);var ie=rt(N,p);for(E=0;E<z.length;E+=2){var ye=z[E],Se=z[E+1];ye==="style"?tt(f,Se):ye==="dangerouslySetInnerHTML"?Oe(f,Se):ye==="children"?dt(f,Se):U(f,ye,Se,ie)}switch(N){case"input":ht(f,p);break;case"textarea":me(f,p);break;case"select":var _e=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!p.multiple;var Fe=p.value;Fe!=null?L(f,!!p.multiple,Fe,!1):_e!==!!p.multiple&&(p.defaultValue!=null?L(f,!!p.multiple,p.defaultValue,!0):L(f,!!p.multiple,p.multiple?[]:"",!1))}f[So]=p}catch(We){Wt(n,n.return,We)}}break;case 6:if(ai(i,n),xi(n),c&4){if(n.stateNode===null)throw Error(t(162));f=n.stateNode,p=n.memoizedProps;try{f.nodeValue=p}catch(We){Wt(n,n.return,We)}}break;case 3:if(ai(i,n),xi(n),c&4&&o!==null&&o.memoizedState.isDehydrated)try{co(i.containerInfo)}catch(We){Wt(n,n.return,We)}break;case 4:ai(i,n),xi(n);break;case 13:ai(i,n),xi(n),f=n.child,f.flags&8192&&(p=f.memoizedState!==null,f.stateNode.isHidden=p,!p||f.alternate!==null&&f.alternate.memoizedState!==null||(au=$())),c&4&&mp(n);break;case 22:if(ye=o!==null&&o.memoizedState!==null,n.mode&1?(xn=(ie=xn)||ye,ai(i,n),xn=ie):ai(i,n),xi(n),c&8192){if(ie=n.memoizedState!==null,(n.stateNode.isHidden=ie)&&!ye&&(n.mode&1)!==0)for(ke=n,ye=n.child;ye!==null;){for(Se=ke=ye;ke!==null;){switch(_e=ke,Fe=_e.child,_e.tag){case 0:case 11:case 14:case 15:Do(4,_e,_e.return);break;case 1:Ts(_e,_e.return);var Ve=_e.stateNode;if(typeof Ve.componentWillUnmount=="function"){c=_e,o=_e.return;try{i=c,Ve.props=i.memoizedProps,Ve.state=i.memoizedState,Ve.componentWillUnmount()}catch(We){Wt(c,o,We)}}break;case 5:Ts(_e,_e.return);break;case 22:if(_e.memoizedState!==null){yp(Se);continue}}Fe!==null?(Fe.return=_e,ke=Fe):yp(Se)}ye=ye.sibling}e:for(ye=null,Se=n;;){if(Se.tag===5){if(ye===null){ye=Se;try{f=Se.stateNode,ie?(p=f.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(N=Se.stateNode,z=Se.memoizedProps.style,E=z!=null&&z.hasOwnProperty("display")?z.display:null,N.style.display=Ze("display",E))}catch(We){Wt(n,n.return,We)}}}else if(Se.tag===6){if(ye===null)try{Se.stateNode.nodeValue=ie?"":Se.memoizedProps}catch(We){Wt(n,n.return,We)}}else if((Se.tag!==22&&Se.tag!==23||Se.memoizedState===null||Se===n)&&Se.child!==null){Se.child.return=Se,Se=Se.child;continue}if(Se===n)break e;for(;Se.sibling===null;){if(Se.return===null||Se.return===n)break e;ye===Se&&(ye=null),Se=Se.return}ye===Se&&(ye=null),Se.sibling.return=Se.return,Se=Se.sibling}}break;case 19:ai(i,n),xi(n),c&4&&mp(n);break;case 21:break;default:ai(i,n),xi(n)}}function xi(n){var i=n.flags;if(i&2){try{e:{for(var o=n.return;o!==null;){if(fp(o)){var c=o;break e}o=o.return}throw Error(t(160))}switch(c.tag){case 5:var f=c.stateNode;c.flags&32&&(dt(f,""),c.flags&=-33);var p=dp(n);ru(n,p,f);break;case 3:case 4:var E=c.stateNode.containerInfo,N=dp(n);iu(n,N,E);break;default:throw Error(t(161))}}catch(z){Wt(n,n.return,z)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function nv(n,i,o){ke=n,_p(n)}function _p(n,i,o){for(var c=(n.mode&1)!==0;ke!==null;){var f=ke,p=f.child;if(f.tag===22&&c){var E=f.memoizedState!==null||Wa;if(!E){var N=f.alternate,z=N!==null&&N.memoizedState!==null||xn;N=Wa;var ie=xn;if(Wa=E,(xn=z)&&!ie)for(ke=f;ke!==null;)E=ke,z=E.child,E.tag===22&&E.memoizedState!==null?xp(f):z!==null?(z.return=E,ke=z):xp(f);for(;p!==null;)ke=p,_p(p),p=p.sibling;ke=f,Wa=N,xn=ie}vp(n)}else(f.subtreeFlags&8772)!==0&&p!==null?(p.return=f,ke=p):vp(n)}}function vp(n){for(;ke!==null;){var i=ke;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:xn||Xa(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!xn)if(o===null)c.componentDidMount();else{var f=i.elementType===i.type?o.memoizedProps:si(i.type,o.memoizedProps);c.componentDidUpdate(f,o.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&yd(i,p,c);break;case 3:var E=i.updateQueue;if(E!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}yd(i,E,o)}break;case 5:var N=i.stateNode;if(o===null&&i.flags&4){o=N;var z=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":z.autoFocus&&o.focus();break;case"img":z.src&&(o.src=z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ie=i.alternate;if(ie!==null){var ye=ie.memoizedState;if(ye!==null){var Se=ye.dehydrated;Se!==null&&co(Se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}xn||i.flags&512&&nu(i)}catch(_e){Wt(i,i.return,_e)}}if(i===n){ke=null;break}if(o=i.sibling,o!==null){o.return=i.return,ke=o;break}ke=i.return}}function yp(n){for(;ke!==null;){var i=ke;if(i===n){ke=null;break}var o=i.sibling;if(o!==null){o.return=i.return,ke=o;break}ke=i.return}}function xp(n){for(;ke!==null;){var i=ke;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Xa(4,i)}catch(z){Wt(i,o,z)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var f=i.return;try{c.componentDidMount()}catch(z){Wt(i,f,z)}}var p=i.return;try{nu(i)}catch(z){Wt(i,p,z)}break;case 5:var E=i.return;try{nu(i)}catch(z){Wt(i,E,z)}}}catch(z){Wt(i,i.return,z)}if(i===n){ke=null;break}var N=i.sibling;if(N!==null){N.return=i.return,ke=N;break}ke=i.return}}var iv=Math.ceil,Ya=b.ReactCurrentDispatcher,su=b.ReactCurrentOwner,Jn=b.ReactCurrentBatchConfig,Mt=0,ln=null,qt=null,dn=0,Wn=0,ws=rr(0),en=0,No=null,Or=0,ja=0,ou=0,Uo=null,Un=null,au=0,As=1/0,Fi=null,qa=!1,lu=null,ur=null,Ka=!1,hr=null,$a=0,Io=0,cu=null,Za=-1,Ja=0;function An(){return(Mt&6)!==0?$():Za!==-1?Za:Za=$()}function fr(n){return(n.mode&1)===0?1:(Mt&2)!==0&&dn!==0?dn&-dn:B_.transition!==null?(Ja===0&&(Ja=Dt()),Ja):(n=Et,n!==0||(n=window.event,n=n===void 0?16:Ef(n.type)),n)}function li(n,i,o,c){if(50<Io)throw Io=0,cu=null,Error(t(185));sn(n,o,c),((Mt&2)===0||n!==ln)&&(n===ln&&((Mt&2)===0&&(ja|=o),en===4&&dr(n,dn)),In(n,c),o===1&&Mt===0&&(i.mode&1)===0&&(As=$()+500,Aa&&or()))}function In(n,i){var o=n.callbackNode;Tn(n,i);var c=mn(n,n===ln?dn:0);if(c===0)o!==null&&A(o),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(o!=null&&A(o),i===1)n.tag===0?z_(Ep.bind(null,n)):ad(Ep.bind(null,n)),I_(function(){(Mt&6)===0&&or()}),o=null;else{switch(gi(c)){case 1:o=Ee;break;case 4:o=Pe;break;case 16:o=Ie;break;case 536870912:o=nt;break;default:o=Ie}o=bp(o,Sp.bind(null,n))}n.callbackPriority=i,n.callbackNode=o}}function Sp(n,i){if(Za=-1,Ja=0,(Mt&6)!==0)throw Error(t(327));var o=n.callbackNode;if(Cs()&&n.callbackNode!==o)return null;var c=mn(n,n===ln?dn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=Qa(n,c);else{i=c;var f=Mt;Mt|=2;var p=Tp();(ln!==n||dn!==i)&&(Fi=null,As=$()+500,zr(n,i));do try{ov();break}catch(N){Mp(n,N)}while(!0);Cc(),Ya.current=p,Mt=f,qt!==null?i=0:(ln=null,dn=0,i=en)}if(i!==0){if(i===2&&(f=Ri(n),f!==0&&(c=f,i=uu(n,f))),i===1)throw o=No,zr(n,0),dr(n,c),In(n,$()),o;if(i===6)dr(n,c);else{if(f=n.current.alternate,(c&30)===0&&!rv(f)&&(i=Qa(n,c),i===2&&(p=Ri(n),p!==0&&(c=p,i=uu(n,p))),i===1))throw o=No,zr(n,0),dr(n,c),In(n,$()),o;switch(n.finishedWork=f,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:Br(n,Un,Fi);break;case 3:if(dr(n,c),(c&130023424)===c&&(i=au+500-$(),10<i)){if(mn(n,0)!==0)break;if(f=n.suspendedLanes,(f&c)!==c){An(),n.pingedLanes|=n.suspendedLanes&f;break}n.timeoutHandle=gc(Br.bind(null,n,Un,Fi),i);break}Br(n,Un,Fi);break;case 4:if(dr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,f=-1;0<c;){var E=31-at(c);p=1<<E,E=i[E],E>f&&(f=E),c&=~p}if(c=f,c=$()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*iv(c/1960))-c,10<c){n.timeoutHandle=gc(Br.bind(null,n,Un,Fi),c);break}Br(n,Un,Fi);break;case 5:Br(n,Un,Fi);break;default:throw Error(t(329))}}}return In(n,$()),n.callbackNode===o?Sp.bind(null,n):null}function uu(n,i){var o=Uo;return n.current.memoizedState.isDehydrated&&(zr(n,i).flags|=256),n=Qa(n,i),n!==2&&(i=Un,Un=o,i!==null&&hu(i)),n}function hu(n){Un===null?Un=n:Un.push.apply(Un,n)}function rv(n){for(var i=n;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var c=0;c<o.length;c++){var f=o[c],p=f.getSnapshot;f=f.value;try{if(!ii(p(),f))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function dr(n,i){for(i&=~ou,i&=~ja,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var o=31-at(i),c=1<<o;n[o]=-1,i&=~c}}function Ep(n){if((Mt&6)!==0)throw Error(t(327));Cs();var i=mn(n,0);if((i&1)===0)return In(n,$()),null;var o=Qa(n,i);if(n.tag!==0&&o===2){var c=Ri(n);c!==0&&(i=c,o=uu(n,c))}if(o===1)throw o=No,zr(n,0),dr(n,i),In(n,$()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Br(n,Un,Fi),In(n,$()),null}function fu(n,i){var o=Mt;Mt|=1;try{return n(i)}finally{Mt=o,Mt===0&&(As=$()+500,Aa&&or())}}function kr(n){hr!==null&&hr.tag===0&&(Mt&6)===0&&Cs();var i=Mt;Mt|=1;var o=Jn.transition,c=Et;try{if(Jn.transition=null,Et=1,n)return n()}finally{Et=c,Jn.transition=o,Mt=i,(Mt&6)===0&&or()}}function du(){Wn=ws.current,Ft(ws)}function zr(n,i){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,U_(o)),qt!==null)for(o=qt.return;o!==null;){var c=o;switch(Ec(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Ta();break;case 3:Es(),Ft(Ln),Ft(_n),Ic();break;case 5:Nc(c);break;case 4:Es();break;case 13:Ft(Bt);break;case 19:Ft(Bt);break;case 10:Rc(c.type._context);break;case 22:case 23:du()}o=o.return}if(ln=n,qt=n=pr(n.current,null),dn=Wn=i,en=0,No=null,ou=ja=Or=0,Un=Uo=null,Ur!==null){for(i=0;i<Ur.length;i++)if(o=Ur[i],c=o.interleaved,c!==null){o.interleaved=null;var f=c.next,p=o.pending;if(p!==null){var E=p.next;p.next=f,c.next=E}o.pending=c}Ur=null}return n}function Mp(n,i){do{var o=qt;try{if(Cc(),Fa.current=Ba,Oa){for(var c=Ht.memoizedState;c!==null;){var f=c.queue;f!==null&&(f.pending=null),c=c.next}Oa=!1}if(Fr=0,an=Qt=Ht=null,Co=!1,Ro=0,su.current=null,o===null||o.return===null){en=1,No=i,qt=null;break}e:{var p=n,E=o.return,N=o,z=i;if(i=dn,N.flags|=32768,z!==null&&typeof z=="object"&&typeof z.then=="function"){var ie=z,ye=N,Se=ye.tag;if((ye.mode&1)===0&&(Se===0||Se===11||Se===15)){var _e=ye.alternate;_e?(ye.updateQueue=_e.updateQueue,ye.memoizedState=_e.memoizedState,ye.lanes=_e.lanes):(ye.updateQueue=null,ye.memoizedState=null)}var Fe=qd(E);if(Fe!==null){Fe.flags&=-257,Kd(Fe,E,N,p,i),Fe.mode&1&&jd(p,ie,i),i=Fe,z=ie;var Ve=i.updateQueue;if(Ve===null){var We=new Set;We.add(z),i.updateQueue=We}else Ve.add(z);break e}else{if((i&1)===0){jd(p,ie,i),pu();break e}z=Error(t(426))}}else if(kt&&N.mode&1){var Yt=qd(E);if(Yt!==null){(Yt.flags&65536)===0&&(Yt.flags|=256),Kd(Yt,E,N,p,i),wc(Ms(z,N));break e}}p=z=Ms(z,N),en!==4&&(en=2),Uo===null?Uo=[p]:Uo.push(p),p=E;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var K=Xd(p,z,i);vd(p,K);break e;case 1:N=z;var G=p.type,Z=p.stateNode;if((p.flags&128)===0&&(typeof G.getDerivedStateFromError=="function"||Z!==null&&typeof Z.componentDidCatch=="function"&&(ur===null||!ur.has(Z)))){p.flags|=65536,i&=-i,p.lanes|=i;var Te=Yd(p,N,i);vd(p,Te);break e}}p=p.return}while(p!==null)}Ap(o)}catch(qe){i=qe,qt===o&&o!==null&&(qt=o=o.return);continue}break}while(!0)}function Tp(){var n=Ya.current;return Ya.current=Ba,n===null?Ba:n}function pu(){(en===0||en===3||en===2)&&(en=4),ln===null||(Or&268435455)===0&&(ja&268435455)===0||dr(ln,dn)}function Qa(n,i){var o=Mt;Mt|=2;var c=Tp();(ln!==n||dn!==i)&&(Fi=null,zr(n,i));do try{sv();break}catch(f){Mp(n,f)}while(!0);if(Cc(),Mt=o,Ya.current=c,qt!==null)throw Error(t(261));return ln=null,dn=0,en}function sv(){for(;qt!==null;)wp(qt)}function ov(){for(;qt!==null&&!j();)wp(qt)}function wp(n){var i=Pp(n.alternate,n,Wn);n.memoizedProps=n.pendingProps,i===null?Ap(n):qt=i,su.current=null}function Ap(n){var i=n;do{var o=i.alternate;if(n=i.return,(i.flags&32768)===0){if(o=J_(o,i,Wn),o!==null){qt=o;return}}else{if(o=Q_(o,i),o!==null){o.flags&=32767,qt=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{en=6,qt=null;return}}if(i=i.sibling,i!==null){qt=i;return}qt=i=n}while(i!==null);en===0&&(en=5)}function Br(n,i,o){var c=Et,f=Jn.transition;try{Jn.transition=null,Et=1,av(n,i,o,c)}finally{Jn.transition=f,Et=c}return null}function av(n,i,o,c){do Cs();while(hr!==null);if((Mt&6)!==0)throw Error(t(327));o=n.finishedWork;var f=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var p=o.lanes|o.childLanes;if(hn(n,p),n===ln&&(qt=ln=null,dn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Ka||(Ka=!0,bp(Ie,function(){return Cs(),null})),p=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||p){p=Jn.transition,Jn.transition=null;var E=Et;Et=1;var N=Mt;Mt|=4,su.current=null,tv(n,o),gp(o,n),C_(pc),ua=!!dc,pc=dc=null,n.current=o,nv(o),ne(),Mt=N,Et=E,Jn.transition=p}else n.current=o;if(Ka&&(Ka=!1,hr=n,$a=f),p=n.pendingLanes,p===0&&(ur=null),yt(o.stateNode),In(n,$()),i!==null)for(c=n.onRecoverableError,o=0;o<i.length;o++)f=i[o],c(f.value,{componentStack:f.stack,digest:f.digest});if(qa)throw qa=!1,n=lu,lu=null,n;return($a&1)!==0&&n.tag!==0&&Cs(),p=n.pendingLanes,(p&1)!==0?n===cu?Io++:(Io=0,cu=n):Io=0,or(),null}function Cs(){if(hr!==null){var n=gi($a),i=Jn.transition,o=Et;try{if(Jn.transition=null,Et=16>n?16:n,hr===null)var c=!1;else{if(n=hr,hr=null,$a=0,(Mt&6)!==0)throw Error(t(331));var f=Mt;for(Mt|=4,ke=n.current;ke!==null;){var p=ke,E=p.child;if((ke.flags&16)!==0){var N=p.deletions;if(N!==null){for(var z=0;z<N.length;z++){var ie=N[z];for(ke=ie;ke!==null;){var ye=ke;switch(ye.tag){case 0:case 11:case 15:Do(8,ye,p)}var Se=ye.child;if(Se!==null)Se.return=ye,ke=Se;else for(;ke!==null;){ye=ke;var _e=ye.sibling,Fe=ye.return;if(hp(ye),ye===ie){ke=null;break}if(_e!==null){_e.return=Fe,ke=_e;break}ke=Fe}}}var Ve=p.alternate;if(Ve!==null){var We=Ve.child;if(We!==null){Ve.child=null;do{var Yt=We.sibling;We.sibling=null,We=Yt}while(We!==null)}}ke=p}}if((p.subtreeFlags&2064)!==0&&E!==null)E.return=p,ke=E;else e:for(;ke!==null;){if(p=ke,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:Do(9,p,p.return)}var K=p.sibling;if(K!==null){K.return=p.return,ke=K;break e}ke=p.return}}var G=n.current;for(ke=G;ke!==null;){E=ke;var Z=E.child;if((E.subtreeFlags&2064)!==0&&Z!==null)Z.return=E,ke=Z;else e:for(E=G;ke!==null;){if(N=ke,(N.flags&2048)!==0)try{switch(N.tag){case 0:case 11:case 15:Xa(9,N)}}catch(qe){Wt(N,N.return,qe)}if(N===E){ke=null;break e}var Te=N.sibling;if(Te!==null){Te.return=N.return,ke=Te;break e}ke=N.return}}if(Mt=f,or(),Ge&&typeof Ge.onPostCommitFiberRoot=="function")try{Ge.onPostCommitFiberRoot(et,n)}catch{}c=!0}return c}finally{Et=o,Jn.transition=i}}return!1}function Cp(n,i,o){i=Ms(o,i),i=Xd(n,i,1),n=lr(n,i,1),i=An(),n!==null&&(sn(n,1,i),In(n,i))}function Wt(n,i,o){if(n.tag===3)Cp(n,n,o);else for(;i!==null;){if(i.tag===3){Cp(i,n,o);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ur===null||!ur.has(c))){n=Ms(o,n),n=Yd(i,n,1),i=lr(i,n,1),n=An(),i!==null&&(sn(i,1,n),In(i,n));break}}i=i.return}}function lv(n,i,o){var c=n.pingCache;c!==null&&c.delete(i),i=An(),n.pingedLanes|=n.suspendedLanes&o,ln===n&&(dn&o)===o&&(en===4||en===3&&(dn&130023424)===dn&&500>$()-au?zr(n,0):ou|=o),In(n,i)}function Rp(n,i){i===0&&((n.mode&1)===0?i=1:(i=Gt,Gt<<=1,(Gt&130023424)===0&&(Gt=4194304)));var o=An();n=Ni(n,i),n!==null&&(sn(n,i,o),In(n,o))}function cv(n){var i=n.memoizedState,o=0;i!==null&&(o=i.retryLane),Rp(n,o)}function uv(n,i){var o=0;switch(n.tag){case 13:var c=n.stateNode,f=n.memoizedState;f!==null&&(o=f.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),Rp(n,o)}var Pp;Pp=function(n,i,o){if(n!==null)if(n.memoizedProps!==i.pendingProps||Ln.current)Nn=!0;else{if((n.lanes&o)===0&&(i.flags&128)===0)return Nn=!1,Z_(n,i,o);Nn=(n.flags&131072)!==0}else Nn=!1,kt&&(i.flags&1048576)!==0&&ld(i,Ra,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Ga(n,i),n=i.pendingProps;var f=ms(i,_n.current);Ss(i,o),f=kc(null,i,c,n,f,o);var p=zc();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Dn(c)?(p=!0,wa(i)):p=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Lc(i),f.updater=Ha,i.stateNode=f,f._reactInternals=i,Xc(i,c,n,o),i=Kc(null,i,c,!0,p,o)):(i.tag=0,kt&&p&&Sc(i),wn(null,i,f,o),i=i.child),i;case 16:c=i.elementType;e:{switch(Ga(n,i),n=i.pendingProps,f=c._init,c=f(c._payload),i.type=c,f=i.tag=fv(c),n=si(c,n),f){case 0:i=qc(null,i,c,n,o);break e;case 1:i=tp(null,i,c,n,o);break e;case 11:i=$d(null,i,c,n,o);break e;case 14:i=Zd(null,i,c,si(c.type,n),o);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:si(c,f),qc(n,i,c,f,o);case 1:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:si(c,f),tp(n,i,c,f,o);case 3:e:{if(np(i),n===null)throw Error(t(387));c=i.pendingProps,p=i.memoizedState,f=p.element,_d(n,i),Ua(i,c,null,o);var E=i.memoizedState;if(c=E.element,p.isDehydrated)if(p={element:c,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){f=Ms(Error(t(423)),i),i=ip(n,i,c,o,f);break e}else if(c!==f){f=Ms(Error(t(424)),i),i=ip(n,i,c,o,f);break e}else for(Gn=ir(i.stateNode.containerInfo.firstChild),Vn=i,kt=!0,ri=null,o=md(i,null,c,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(vs(),c===f){i=Ii(n,i,o);break e}wn(n,i,c,o)}i=i.child}return i;case 5:return xd(i),n===null&&Tc(i),c=i.type,f=i.pendingProps,p=n!==null?n.memoizedProps:null,E=f.children,mc(c,f)?E=null:p!==null&&mc(c,p)&&(i.flags|=32),ep(n,i),wn(n,i,E,o),i.child;case 6:return n===null&&Tc(i),null;case 13:return rp(n,i,o);case 4:return Dc(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=ys(i,null,c,o):wn(n,i,c,o),i.child;case 11:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:si(c,f),$d(n,i,c,f,o);case 7:return wn(n,i,i.pendingProps,o),i.child;case 8:return wn(n,i,i.pendingProps.children,o),i.child;case 12:return wn(n,i,i.pendingProps.children,o),i.child;case 10:e:{if(c=i.type._context,f=i.pendingProps,p=i.memoizedProps,E=f.value,Nt(La,c._currentValue),c._currentValue=E,p!==null)if(ii(p.value,E)){if(p.children===f.children&&!Ln.current){i=Ii(n,i,o);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var N=p.dependencies;if(N!==null){E=p.child;for(var z=N.firstContext;z!==null;){if(z.context===c){if(p.tag===1){z=Ui(-1,o&-o),z.tag=2;var ie=p.updateQueue;if(ie!==null){ie=ie.shared;var ye=ie.pending;ye===null?z.next=z:(z.next=ye.next,ye.next=z),ie.pending=z}}p.lanes|=o,z=p.alternate,z!==null&&(z.lanes|=o),Pc(p.return,o,i),N.lanes|=o;break}z=z.next}}else if(p.tag===10)E=p.type===i.type?null:p.child;else if(p.tag===18){if(E=p.return,E===null)throw Error(t(341));E.lanes|=o,N=E.alternate,N!==null&&(N.lanes|=o),Pc(E,o,i),E=p.sibling}else E=p.child;if(E!==null)E.return=p;else for(E=p;E!==null;){if(E===i){E=null;break}if(p=E.sibling,p!==null){p.return=E.return,E=p;break}E=E.return}p=E}wn(n,i,f.children,o),i=i.child}return i;case 9:return f=i.type,c=i.pendingProps.children,Ss(i,o),f=$n(f),c=c(f),i.flags|=1,wn(n,i,c,o),i.child;case 14:return c=i.type,f=si(c,i.pendingProps),f=si(c.type,f),Zd(n,i,c,f,o);case 15:return Jd(n,i,i.type,i.pendingProps,o);case 17:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:si(c,f),Ga(n,i),i.tag=1,Dn(c)?(n=!0,wa(i)):n=!1,Ss(i,o),Gd(i,c,f),Xc(i,c,f,o),Kc(null,i,c,!0,n,o);case 19:return op(n,i,o);case 22:return Qd(n,i,o)}throw Error(t(156,i.tag))};function bp(n,i){return aa(n,i)}function hv(n,i,o,c){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qn(n,i,o,c){return new hv(n,i,o,c)}function mu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function fv(n){if(typeof n=="function")return mu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ee)return 11;if(n===he)return 14}return 2}function pr(n,i){var o=n.alternate;return o===null?(o=Qn(n.tag,i,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=i,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,i=n.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function el(n,i,o,c,f,p){var E=2;if(c=n,typeof n=="function")mu(n)&&(E=1);else if(typeof n=="string")E=5;else e:switch(n){case O:return Hr(o.children,f,p,i);case W:E=8,f|=8;break;case P:return n=Qn(12,o,i,f|2),n.elementType=P,n.lanes=p,n;case J:return n=Qn(13,o,i,f),n.elementType=J,n.lanes=p,n;case ue:return n=Qn(19,o,i,f),n.elementType=ue,n.lanes=p,n;case ae:return tl(o,f,p,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case R:E=10;break e;case B:E=9;break e;case ee:E=11;break e;case he:E=14;break e;case ce:E=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Qn(E,o,i,f),i.elementType=n,i.type=c,i.lanes=p,i}function Hr(n,i,o,c){return n=Qn(7,n,c,i),n.lanes=o,n}function tl(n,i,o,c){return n=Qn(22,n,c,i),n.elementType=ae,n.lanes=o,n.stateNode={isHidden:!1},n}function gu(n,i,o){return n=Qn(6,n,null,i),n.lanes=o,n}function _u(n,i,o){return i=Qn(4,n.children!==null?n.children:[],n.key,i),i.lanes=o,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function dv(n,i,o,c,f){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gn(0),this.expirationTimes=gn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gn(0),this.identifierPrefix=c,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function vu(n,i,o,c,f,p,E,N,z){return n=new dv(n,i,o,N,z),i===1?(i=1,p===!0&&(i|=8)):i=0,p=Qn(3,null,null,i),n.current=p,p.stateNode=n,p.memoizedState={element:c,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Lc(p),n}function pv(n,i,o){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:k,key:c==null?null:""+c,children:n,containerInfo:i,implementation:o}}function Lp(n){if(!n)return sr;n=n._reactInternals;e:{if(mi(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Dn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(Dn(o))return sd(n,o,i)}return i}function Dp(n,i,o,c,f,p,E,N,z){return n=vu(o,c,!0,n,f,p,E,N,z),n.context=Lp(null),o=n.current,c=An(),f=fr(o),p=Ui(c,f),p.callback=i??null,lr(o,p,f),n.current.lanes=f,sn(n,f,c),In(n,c),n}function nl(n,i,o,c){var f=i.current,p=An(),E=fr(f);return o=Lp(o),i.context===null?i.context=o:i.pendingContext=o,i=Ui(p,E),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=lr(f,i,E),n!==null&&(li(n,f,E,p),Na(n,f,E)),E}function il(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Np(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<i?o:i}}function yu(n,i){Np(n,i),(n=n.alternate)&&Np(n,i)}function mv(){return null}var Up=typeof reportError=="function"?reportError:function(n){console.error(n)};function xu(n){this._internalRoot=n}rl.prototype.render=xu.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));nl(n,i,null,null)},rl.prototype.unmount=xu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;kr(function(){nl(null,n,null,null)}),i[Pi]=null}};function rl(n){this._internalRoot=n}rl.prototype.unstable_scheduleHydration=function(n){if(n){var i=_f();n={blockedOn:null,target:n,priority:i};for(var o=0;o<er.length&&i!==0&&i<er[o].priority;o++);er.splice(o,0,n),o===0&&xf(n)}};function Su(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function sl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Ip(){}function gv(n,i,o,c,f){if(f){if(typeof c=="function"){var p=c;c=function(){var ie=il(E);p.call(ie)}}var E=Dp(i,c,n,0,null,!1,!1,"",Ip);return n._reactRootContainer=E,n[Pi]=E.current,yo(n.nodeType===8?n.parentNode:n),kr(),E}for(;f=n.lastChild;)n.removeChild(f);if(typeof c=="function"){var N=c;c=function(){var ie=il(z);N.call(ie)}}var z=vu(n,0,!1,null,null,!1,!1,"",Ip);return n._reactRootContainer=z,n[Pi]=z.current,yo(n.nodeType===8?n.parentNode:n),kr(function(){nl(i,z,o,c)}),z}function ol(n,i,o,c,f){var p=o._reactRootContainer;if(p){var E=p;if(typeof f=="function"){var N=f;f=function(){var z=il(E);N.call(z)}}nl(i,E,n,f)}else E=gv(o,i,n,f,c);return il(E)}mf=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var o=gt(i.pendingLanes);o!==0&&(on(i,o|1),In(i,$()),(Mt&6)===0&&(As=$()+500,or()))}break;case 13:kr(function(){var c=Ni(n,1);if(c!==null){var f=An();li(c,n,1,f)}}),yu(n,1)}},Yl=function(n){if(n.tag===13){var i=Ni(n,134217728);if(i!==null){var o=An();li(i,n,134217728,o)}yu(n,134217728)}},gf=function(n){if(n.tag===13){var i=fr(n),o=Ni(n,i);if(o!==null){var c=An();li(o,n,i,c)}yu(n,i)}},_f=function(){return Et},vf=function(n,i){var o=Et;try{return Et=n,i()}finally{Et=o}},Re=function(n,i,o){switch(i){case"input":if(ht(n,o),i=o.name,o.type==="radio"&&i!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var c=o[i];if(c!==n&&c.form===n.form){var f=Ma(c);if(!f)throw Error(t(90));ot(c),ht(c,f)}}}break;case"textarea":me(n,o);break;case"select":i=o.value,i!=null&&L(n,!!o.multiple,i,!1)}},Ut=fu,Jt=kr;var _v={usingClientEntryPoint:!1,Events:[Eo,ds,Ma,Le,st,fu]},Fo={findFiberByHostInstance:br,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},vv={bundleType:Fo.bundleType,version:Fo.version,rendererPackageName:Fo.rendererPackageName,rendererConfig:Fo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=sa(n),n===null?null:n.stateNode},findFiberByHostInstance:Fo.findFiberByHostInstance||mv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var al=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!al.isDisabled&&al.supportsFiber)try{et=al.inject(vv),Ge=al}catch{}}return Fn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_v,Fn.createPortal=function(n,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Su(i))throw Error(t(200));return pv(n,i,null,o)},Fn.createRoot=function(n,i){if(!Su(n))throw Error(t(299));var o=!1,c="",f=Up;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=vu(n,1,!1,null,null,o,!1,c,f),n[Pi]=i.current,yo(n.nodeType===8?n.parentNode:n),new xu(i)},Fn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=sa(i),n=n===null?null:n.stateNode,n},Fn.flushSync=function(n){return kr(n)},Fn.hydrate=function(n,i,o){if(!sl(i))throw Error(t(200));return ol(null,n,i,!0,o)},Fn.hydrateRoot=function(n,i,o){if(!Su(n))throw Error(t(405));var c=o!=null&&o.hydratedSources||null,f=!1,p="",E=Up;if(o!=null&&(o.unstable_strictMode===!0&&(f=!0),o.identifierPrefix!==void 0&&(p=o.identifierPrefix),o.onRecoverableError!==void 0&&(E=o.onRecoverableError)),i=Dp(i,null,n,1,o??null,f,!1,p,E),n[Pi]=i.current,yo(n),c)for(n=0;n<c.length;n++)o=c[n],f=o._getVersion,f=f(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,f]:i.mutableSourceEagerHydrationData.push(o,f);return new rl(i)},Fn.render=function(n,i,o){if(!sl(i))throw Error(t(200));return ol(null,n,i,!1,o)},Fn.unmountComponentAtNode=function(n){if(!sl(n))throw Error(t(40));return n._reactRootContainer?(kr(function(){ol(null,null,n,!1,function(){n._reactRootContainer=null,n[Pi]=null})}),!0):!1},Fn.unstable_batchedUpdates=fu,Fn.unstable_renderSubtreeIntoContainer=function(n,i,o,c){if(!sl(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return ol(n,i,o,!1,c)},Fn.version="18.3.1-next-f1338f8080-20240426",Fn}var Hp;function wv(){if(Hp)return Mu.exports;Hp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Mu.exports=Tv(),Mu.exports}var Vp;function Av(){if(Vp)return ll;Vp=1;var s=wv();return ll.createRoot=s.createRoot,ll.hydrateRoot=s.hydrateRoot,ll}var Cv=Av();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Km=(...s)=>s.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Pv={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bv=Rn.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:a="",children:l,iconNode:u,...h},d)=>Rn.createElement("svg",{ref:d,...Pv,width:e,height:e,stroke:s,strokeWidth:r?Number(t)*24/Number(e):t,className:Km("lucide",a),...h},[...u.map(([m,g])=>Rn.createElement(m,g)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zt=(s,e)=>{const t=Rn.forwardRef(({className:r,...a},l)=>Rn.createElement(bv,{ref:l,iconNode:e,className:Km(`lucide-${Rv(s)}`,r),...a}));return t.displayName=`${s}`,t};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $m=Zt("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ns=Zt("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zm=Zt("CalendarDays",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lv=Zt("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dv=Zt("Clock3",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16.5 12",key:"1aq6pp"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nv=Zt("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uv=Zt("Earth",[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17",key:"1tzkfa"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"14pb5j"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jm=Zt("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qm=Zt("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iv=Zt("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fv=Zt("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ov=Zt("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv=Zt("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg=Zt("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zv=Zt("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bv=Zt("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vl=Zt("Waves",[["path",{d:"M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"knzxuh"}],["path",{d:"M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"2jd2cc"}],["path",{d:"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"rd2r6e"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hv=Zt("Wind",[["path",{d:"M12.8 19.6A2 2 0 1 0 14 16H2",key:"148xed"}],["path",{d:"M17.5 8a2.5 2.5 0 1 1 2 4H2",key:"1u4tom"}],["path",{d:"M9.8 4.4A2 2 0 1 1 11 8H2",key:"75valh"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vv=Zt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gv=Zt("Youtube",[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]]);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qh="172",Ys={ROTATE:0,DOLLY:1,PAN:2},Ws={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Wv=0,Gp=1,Xv=2,tg=1,ng=2,Vi=3,Ar=0,Bn=1,Gi=2,Tr=0,js=1,Wp=2,Xp=3,Yp=4,Yv=5,Kr=100,jv=101,qv=102,Kv=103,$v=104,Zv=200,Jv=201,Qv=202,e0=203,ah=204,lh=205,t0=206,n0=207,i0=208,r0=209,s0=210,o0=211,a0=212,l0=213,c0=214,ch=0,uh=1,hh=2,$s=3,fh=4,dh=5,ph=6,mh=7,ig=0,u0=1,h0=2,wr=0,f0=1,d0=2,p0=3,rg=4,m0=5,g0=6,_0=7,sg=300,Zs=301,Js=302,gh=303,_h=304,Gl=306,vh=1e3,Zr=1001,yh=1002,pi=1003,v0=1004,cl=1005,Ei=1006,Au=1007,Jr=1008,ji=1009,og=1010,ag=1011,Ko=1012,Kh=1013,Qr=1014,Wi=1015,$o=1016,$h=1017,Zh=1018,Qs=1020,lg=35902,cg=1021,ug=1022,di=1023,hg=1024,fg=1025,qs=1026,eo=1027,dg=1028,Jh=1029,pg=1030,Qh=1031,ef=1033,Dl=33776,Nl=33777,Ul=33778,Il=33779,xh=35840,Sh=35841,Eh=35842,Mh=35843,Th=36196,wh=37492,Ah=37496,Ch=37808,Rh=37809,Ph=37810,bh=37811,Lh=37812,Dh=37813,Nh=37814,Uh=37815,Ih=37816,Fh=37817,Oh=37818,kh=37819,zh=37820,Bh=37821,Fl=36492,Hh=36494,Vh=36495,mg=36283,Gh=36284,Wh=36285,Xh=36286,y0=3200,x0=3201,gg=0,S0=1,Mr="",zn="srgb",to="srgb-linear",zl="linear",Pt="srgb",Rs=7680,jp=519,E0=512,M0=513,T0=514,_g=515,w0=516,A0=517,C0=518,R0=519,qp=35044,Kp="300 es",Xi=2e3,Bl=2001;class is{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let l=0,u=a.length;l<u;l++)a[l].call(this,e);e.target=null}}}const Sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ol=Math.PI/180,Yh=180/Math.PI;function Zo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Sn[s&255]+Sn[s>>8&255]+Sn[s>>16&255]+Sn[s>>24&255]+"-"+Sn[e&255]+Sn[e>>8&255]+"-"+Sn[e>>16&15|64]+Sn[e>>24&255]+"-"+Sn[t&63|128]+Sn[t>>8&255]+"-"+Sn[t>>16&255]+Sn[t>>24&255]+Sn[r&255]+Sn[r>>8&255]+Sn[r>>16&255]+Sn[r>>24&255]).toLowerCase()}function ct(s,e,t){return Math.max(e,Math.min(t,s))}function P0(s,e){return(s%e+e)%e}function Cu(s,e,t){return(1-t)*s+t*e}function Oo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function On(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const b0={DEG2RAD:Ol};class De{constructor(e=0,t=0){De.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6],this.y=a[1]*t+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ct(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(ct(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),a=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*a+e.x,this.y=l*a+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class lt{constructor(e,t,r,a,l,u,h,d,m){lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,u,h,d,m)}set(e,t,r,a,l,u,h,d,m){const g=this.elements;return g[0]=e,g[1]=a,g[2]=h,g[3]=t,g[4]=l,g[5]=d,g[6]=r,g[7]=u,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,u=r[0],h=r[3],d=r[6],m=r[1],g=r[4],v=r[7],y=r[2],x=r[5],M=r[8],w=a[0],S=a[3],_=a[6],I=a[1],U=a[4],b=a[7],X=a[2],k=a[5],O=a[8];return l[0]=u*w+h*I+d*X,l[3]=u*S+h*U+d*k,l[6]=u*_+h*b+d*O,l[1]=m*w+g*I+v*X,l[4]=m*S+g*U+v*k,l[7]=m*_+g*b+v*O,l[2]=y*w+x*I+M*X,l[5]=y*S+x*U+M*k,l[8]=y*_+x*b+M*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],u=e[4],h=e[5],d=e[6],m=e[7],g=e[8];return t*u*g-t*h*m-r*l*g+r*h*d+a*l*m-a*u*d}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],u=e[4],h=e[5],d=e[6],m=e[7],g=e[8],v=g*u-h*m,y=h*d-g*l,x=m*l-u*d,M=t*v+r*y+a*x;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/M;return e[0]=v*w,e[1]=(a*m-g*r)*w,e[2]=(h*r-a*u)*w,e[3]=y*w,e[4]=(g*t-a*d)*w,e[5]=(a*l-h*t)*w,e[6]=x*w,e[7]=(r*d-m*t)*w,e[8]=(u*t-r*l)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,a,l,u,h){const d=Math.cos(l),m=Math.sin(l);return this.set(r*d,r*m,-r*(d*u+m*h)+u+e,-a*m,a*d,-a*(-m*u+d*h)+h+t,0,0,1),this}scale(e,t){return this.premultiply(Ru.makeScale(e,t)),this}rotate(e){return this.premultiply(Ru.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ru.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<9;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ru=new lt;function vg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Hl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function L0(){const s=Hl("canvas");return s.style.display="block",s}const $p={};function Vs(s){s in $p||($p[s]=!0,console.warn(s))}function D0(s,e,t){return new Promise(function(r,a){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}function N0(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function U0(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Zp=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jp=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function I0(){const s={enabled:!0,workingColorSpace:to,spaces:{},convert:function(a,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Pt&&(a.r=Yi(a.r),a.g=Yi(a.g),a.b=Yi(a.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Pt&&(a.r=Ks(a.r),a.g=Ks(a.g),a.b=Ks(a.b))),a},fromWorkingColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},toWorkingColorSpace:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Mr?zl:this.spaces[a].transfer},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,u){return a.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[to]:{primaries:e,whitePoint:r,transfer:zl,toXYZ:Zp,fromXYZ:Jp,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:zn},outputColorSpaceConfig:{drawingBufferColorSpace:zn}},[zn]:{primaries:e,whitePoint:r,transfer:Pt,toXYZ:Zp,fromXYZ:Jp,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:zn}}}),s}const wt=I0();function Yi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ks(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ps;class F0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ps===void 0&&(Ps=Hl("canvas")),Ps.width=e.width,Ps.height=e.height;const r=Ps.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=Ps}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Hl("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),l=a.data;for(let u=0;u<l.length;u++)l[u]=Yi(l[u]/255)*255;return r.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Yi(t[r]/255)*255):t[r]=Yi(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let O0=0;class yg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:O0++}),this.uuid=Zo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let u=0,h=a.length;u<h;u++)a[u].isDataTexture?l.push(Pu(a[u].image)):l.push(Pu(a[u]))}else l=Pu(a);r.url=l}return t||(e.images[this.uuid]=r),r}}function Pu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?F0.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let k0=0;class Pn extends is{constructor(e=Pn.DEFAULT_IMAGE,t=Pn.DEFAULT_MAPPING,r=Zr,a=Zr,l=Ei,u=Jr,h=di,d=ji,m=Pn.DEFAULT_ANISOTROPY,g=Mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:k0++}),this.uuid=Zo(),this.name="",this.source=new yg(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=l,this.minFilter=u,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=d,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==sg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vh:e.x=e.x-Math.floor(e.x);break;case Zr:e.x=e.x<0?0:1;break;case yh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vh:e.y=e.y-Math.floor(e.y);break;case Zr:e.y=e.y<0?0:1;break;case yh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=sg;Pn.DEFAULT_ANISOTROPY=1;class Lt{constructor(e=0,t=0,r=0,a=1){Lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,a){return this.x=e,this.y=t,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*a+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*a+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*a+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*a+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,a,l;const d=e.elements,m=d[0],g=d[4],v=d[8],y=d[1],x=d[5],M=d[9],w=d[2],S=d[6],_=d[10];if(Math.abs(g-y)<.01&&Math.abs(v-w)<.01&&Math.abs(M-S)<.01){if(Math.abs(g+y)<.1&&Math.abs(v+w)<.1&&Math.abs(M+S)<.1&&Math.abs(m+x+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const U=(m+1)/2,b=(x+1)/2,X=(_+1)/2,k=(g+y)/4,O=(v+w)/4,W=(M+S)/4;return U>b&&U>X?U<.01?(r=0,a=.707106781,l=.707106781):(r=Math.sqrt(U),a=k/r,l=O/r):b>X?b<.01?(r=.707106781,a=0,l=.707106781):(a=Math.sqrt(b),r=k/a,l=W/a):X<.01?(r=.707106781,a=.707106781,l=0):(l=Math.sqrt(X),r=O/l,a=W/l),this.set(r,a,l,t),this}let I=Math.sqrt((S-M)*(S-M)+(v-w)*(v-w)+(y-g)*(y-g));return Math.abs(I)<.001&&(I=1),this.x=(S-M)/I,this.y=(v-w)/I,this.z=(y-g)/I,this.w=Math.acos((m+x+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this.w=ct(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this.w=ct(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ct(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class z0 extends is{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Lt(0,0,e,t),this.scissorTest=!1,this.viewport=new Lt(0,0,e,t);const a={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ei,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const l=new Pn(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);l.flipY=!1,l.generateMipmaps=r.generateMipmaps,l.internalFormat=r.internalFormat,this.textures=[];const u=r.count;for(let h=0;h<u;h++)this.textures[h]=l.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new yg(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class es extends z0{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class xg extends Pn{constructor(e=null,t=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=pi,this.minFilter=pi,this.wrapR=Zr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class B0 extends Pn{constructor(e=null,t=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=pi,this.minFilter=pi,this.wrapR=Zr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ts{constructor(e=0,t=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=a}static slerpFlat(e,t,r,a,l,u,h){let d=r[a+0],m=r[a+1],g=r[a+2],v=r[a+3];const y=l[u+0],x=l[u+1],M=l[u+2],w=l[u+3];if(h===0){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=v;return}if(h===1){e[t+0]=y,e[t+1]=x,e[t+2]=M,e[t+3]=w;return}if(v!==w||d!==y||m!==x||g!==M){let S=1-h;const _=d*y+m*x+g*M+v*w,I=_>=0?1:-1,U=1-_*_;if(U>Number.EPSILON){const X=Math.sqrt(U),k=Math.atan2(X,_*I);S=Math.sin(S*k)/X,h=Math.sin(h*k)/X}const b=h*I;if(d=d*S+y*b,m=m*S+x*b,g=g*S+M*b,v=v*S+w*b,S===1-h){const X=1/Math.sqrt(d*d+m*m+g*g+v*v);d*=X,m*=X,g*=X,v*=X}}e[t]=d,e[t+1]=m,e[t+2]=g,e[t+3]=v}static multiplyQuaternionsFlat(e,t,r,a,l,u){const h=r[a],d=r[a+1],m=r[a+2],g=r[a+3],v=l[u],y=l[u+1],x=l[u+2],M=l[u+3];return e[t]=h*M+g*v+d*x-m*y,e[t+1]=d*M+g*y+m*v-h*x,e[t+2]=m*M+g*x+h*y-d*v,e[t+3]=g*M-h*v-d*y-m*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,a){return this._x=e,this._y=t,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,a=e._y,l=e._z,u=e._order,h=Math.cos,d=Math.sin,m=h(r/2),g=h(a/2),v=h(l/2),y=d(r/2),x=d(a/2),M=d(l/2);switch(u){case"XYZ":this._x=y*g*v+m*x*M,this._y=m*x*v-y*g*M,this._z=m*g*M+y*x*v,this._w=m*g*v-y*x*M;break;case"YXZ":this._x=y*g*v+m*x*M,this._y=m*x*v-y*g*M,this._z=m*g*M-y*x*v,this._w=m*g*v+y*x*M;break;case"ZXY":this._x=y*g*v-m*x*M,this._y=m*x*v+y*g*M,this._z=m*g*M+y*x*v,this._w=m*g*v-y*x*M;break;case"ZYX":this._x=y*g*v-m*x*M,this._y=m*x*v+y*g*M,this._z=m*g*M-y*x*v,this._w=m*g*v+y*x*M;break;case"YZX":this._x=y*g*v+m*x*M,this._y=m*x*v+y*g*M,this._z=m*g*M-y*x*v,this._w=m*g*v-y*x*M;break;case"XZY":this._x=y*g*v-m*x*M,this._y=m*x*v-y*g*M,this._z=m*g*M+y*x*v,this._w=m*g*v+y*x*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],a=t[4],l=t[8],u=t[1],h=t[5],d=t[9],m=t[2],g=t[6],v=t[10],y=r+h+v;if(y>0){const x=.5/Math.sqrt(y+1);this._w=.25/x,this._x=(g-d)*x,this._y=(l-m)*x,this._z=(u-a)*x}else if(r>h&&r>v){const x=2*Math.sqrt(1+r-h-v);this._w=(g-d)/x,this._x=.25*x,this._y=(a+u)/x,this._z=(l+m)/x}else if(h>v){const x=2*Math.sqrt(1+h-r-v);this._w=(l-m)/x,this._x=(a+u)/x,this._y=.25*x,this._z=(d+g)/x}else{const x=2*Math.sqrt(1+v-r-h);this._w=(u-a)/x,this._x=(l+m)/x,this._y=(d+g)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ct(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,t/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,a=e._y,l=e._z,u=e._w,h=t._x,d=t._y,m=t._z,g=t._w;return this._x=r*g+u*h+a*m-l*d,this._y=a*g+u*d+l*h-r*m,this._z=l*g+u*m+r*d-a*h,this._w=u*g-r*h-a*d-l*m,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,a=this._y,l=this._z,u=this._w;let h=u*e._w+r*e._x+a*e._y+l*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=u,this._x=r,this._y=a,this._z=l,this;const d=1-h*h;if(d<=Number.EPSILON){const x=1-t;return this._w=x*u+t*this._w,this._x=x*r+t*this._x,this._y=x*a+t*this._y,this._z=x*l+t*this._z,this.normalize(),this}const m=Math.sqrt(d),g=Math.atan2(m,h),v=Math.sin((1-t)*g)/m,y=Math.sin(t*g)/m;return this._w=u*v+this._w*y,this._x=r*v+this._x*y,this._y=a*v+this._y*y,this._z=l*v+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,t=0,r=0){V.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Qp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Qp.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*a,this.y=l[1]*t+l[4]*r+l[7]*a,this.z=l[2]*t+l[5]*r+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*a+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*a+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*a+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,a=this.z,l=e.x,u=e.y,h=e.z,d=e.w,m=2*(u*a-h*r),g=2*(h*t-l*a),v=2*(l*r-u*t);return this.x=t+d*m+u*v-h*g,this.y=r+d*g+h*m-l*v,this.z=a+d*v+l*g-u*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*a,this.y=l[1]*t+l[5]*r+l[9]*a,this.z=l[2]*t+l[6]*r+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ct(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,a=e.y,l=e.z,u=t.x,h=t.y,d=t.z;return this.x=a*d-l*h,this.y=l*u-r*d,this.z=r*h-a*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return bu.copy(this).projectOnVector(e),this.sub(bu)}reflect(e){return this.sub(bu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(ct(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return t*t+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const a=Math.sin(t)*e;return this.x=a*Math.sin(r),this.y=Math.cos(t)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const bu=new V,Qp=new ts;class Jo{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(ci.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(ci.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=ci.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,h=l.count;u<h;u++)e.isMesh===!0?e.getVertexPosition(u,ci):ci.fromBufferAttribute(l,u),ci.applyMatrix4(e.matrixWorld),this.expandByPoint(ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ul.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),ul.copy(r.boundingBox)),ul.applyMatrix4(e.matrixWorld),this.union(ul)}const a=e.children;for(let l=0,u=a.length;l<u;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ci),ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ko),hl.subVectors(this.max,ko),bs.subVectors(e.a,ko),Ls.subVectors(e.b,ko),Ds.subVectors(e.c,ko),gr.subVectors(Ls,bs),_r.subVectors(Ds,Ls),Vr.subVectors(bs,Ds);let t=[0,-gr.z,gr.y,0,-_r.z,_r.y,0,-Vr.z,Vr.y,gr.z,0,-gr.x,_r.z,0,-_r.x,Vr.z,0,-Vr.x,-gr.y,gr.x,0,-_r.y,_r.x,0,-Vr.y,Vr.x,0];return!Lu(t,bs,Ls,Ds,hl)||(t=[1,0,0,0,1,0,0,0,1],!Lu(t,bs,Ls,Ds,hl))?!1:(fl.crossVectors(gr,_r),t=[fl.x,fl.y,fl.z],Lu(t,bs,Ls,Ds,hl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Oi=[new V,new V,new V,new V,new V,new V,new V,new V],ci=new V,ul=new Jo,bs=new V,Ls=new V,Ds=new V,gr=new V,_r=new V,Vr=new V,ko=new V,hl=new V,fl=new V,Gr=new V;function Lu(s,e,t,r,a){for(let l=0,u=s.length-3;l<=u;l+=3){Gr.fromArray(s,l);const h=a.x*Math.abs(Gr.x)+a.y*Math.abs(Gr.y)+a.z*Math.abs(Gr.z),d=e.dot(Gr),m=t.dot(Gr),g=r.dot(Gr);if(Math.max(-Math.max(d,m,g),Math.min(d,m,g))>h)return!1}return!0}const H0=new Jo,zo=new V,Du=new V;class tf{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):H0.setFromPoints(e).getCenter(r);let a=0;for(let l=0,u=e.length;l<u;l++)a=Math.max(a,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zo.subVectors(e,this.center);const t=zo.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),a=(r-this.radius)*.5;this.center.addScaledVector(zo,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Du.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zo.copy(e.center).add(Du)),this.expandByPoint(zo.copy(e.center).sub(Du))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ki=new V,Nu=new V,dl=new V,vr=new V,Uu=new V,pl=new V,Iu=new V;class Sg{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ki)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ki.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ki.copy(this.origin).addScaledVector(this.direction,t),ki.distanceToSquared(e))}distanceSqToSegment(e,t,r,a){Nu.copy(e).add(t).multiplyScalar(.5),dl.copy(t).sub(e).normalize(),vr.copy(this.origin).sub(Nu);const l=e.distanceTo(t)*.5,u=-this.direction.dot(dl),h=vr.dot(this.direction),d=-vr.dot(dl),m=vr.lengthSq(),g=Math.abs(1-u*u);let v,y,x,M;if(g>0)if(v=u*d-h,y=u*h-d,M=l*g,v>=0)if(y>=-M)if(y<=M){const w=1/g;v*=w,y*=w,x=v*(v+u*y+2*h)+y*(u*v+y+2*d)+m}else y=l,v=Math.max(0,-(u*y+h)),x=-v*v+y*(y+2*d)+m;else y=-l,v=Math.max(0,-(u*y+h)),x=-v*v+y*(y+2*d)+m;else y<=-M?(v=Math.max(0,-(-u*l+h)),y=v>0?-l:Math.min(Math.max(-l,-d),l),x=-v*v+y*(y+2*d)+m):y<=M?(v=0,y=Math.min(Math.max(-l,-d),l),x=y*(y+2*d)+m):(v=Math.max(0,-(u*l+h)),y=v>0?l:Math.min(Math.max(-l,-d),l),x=-v*v+y*(y+2*d)+m);else y=u>0?-l:l,v=Math.max(0,-(u*y+h)),x=-v*v+y*(y+2*d)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,v),a&&a.copy(Nu).addScaledVector(dl,y),x}intersectSphere(e,t){ki.subVectors(e.center,this.origin);const r=ki.dot(this.direction),a=ki.dot(ki)-r*r,l=e.radius*e.radius;if(a>l)return null;const u=Math.sqrt(l-a),h=r-u,d=r+u;return d<0?null:h<0?this.at(d,t):this.at(h,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,a,l,u,h,d;const m=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,y=this.origin;return m>=0?(r=(e.min.x-y.x)*m,a=(e.max.x-y.x)*m):(r=(e.max.x-y.x)*m,a=(e.min.x-y.x)*m),g>=0?(l=(e.min.y-y.y)*g,u=(e.max.y-y.y)*g):(l=(e.max.y-y.y)*g,u=(e.min.y-y.y)*g),r>u||l>a||((l>r||isNaN(r))&&(r=l),(u<a||isNaN(a))&&(a=u),v>=0?(h=(e.min.z-y.z)*v,d=(e.max.z-y.z)*v):(h=(e.max.z-y.z)*v,d=(e.min.z-y.z)*v),r>d||h>a)||((h>r||r!==r)&&(r=h),(d<a||a!==a)&&(a=d),a<0)?null:this.at(r>=0?r:a,t)}intersectsBox(e){return this.intersectBox(e,ki)!==null}intersectTriangle(e,t,r,a,l){Uu.subVectors(t,e),pl.subVectors(r,e),Iu.crossVectors(Uu,pl);let u=this.direction.dot(Iu),h;if(u>0){if(a)return null;h=1}else if(u<0)h=-1,u=-u;else return null;vr.subVectors(this.origin,e);const d=h*this.direction.dot(pl.crossVectors(vr,pl));if(d<0)return null;const m=h*this.direction.dot(Uu.cross(vr));if(m<0||d+m>u)return null;const g=-h*vr.dot(Iu);return g<0?null:this.at(g/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class zt{constructor(e,t,r,a,l,u,h,d,m,g,v,y,x,M,w,S){zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,u,h,d,m,g,v,y,x,M,w,S)}set(e,t,r,a,l,u,h,d,m,g,v,y,x,M,w,S){const _=this.elements;return _[0]=e,_[4]=t,_[8]=r,_[12]=a,_[1]=l,_[5]=u,_[9]=h,_[13]=d,_[2]=m,_[6]=g,_[10]=v,_[14]=y,_[3]=x,_[7]=M,_[11]=w,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new zt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,a=1/Ns.setFromMatrixColumn(e,0).length(),l=1/Ns.setFromMatrixColumn(e,1).length(),u=1/Ns.setFromMatrixColumn(e,2).length();return t[0]=r[0]*a,t[1]=r[1]*a,t[2]=r[2]*a,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,a=e.y,l=e.z,u=Math.cos(r),h=Math.sin(r),d=Math.cos(a),m=Math.sin(a),g=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const y=u*g,x=u*v,M=h*g,w=h*v;t[0]=d*g,t[4]=-d*v,t[8]=m,t[1]=x+M*m,t[5]=y-w*m,t[9]=-h*d,t[2]=w-y*m,t[6]=M+x*m,t[10]=u*d}else if(e.order==="YXZ"){const y=d*g,x=d*v,M=m*g,w=m*v;t[0]=y+w*h,t[4]=M*h-x,t[8]=u*m,t[1]=u*v,t[5]=u*g,t[9]=-h,t[2]=x*h-M,t[6]=w+y*h,t[10]=u*d}else if(e.order==="ZXY"){const y=d*g,x=d*v,M=m*g,w=m*v;t[0]=y-w*h,t[4]=-u*v,t[8]=M+x*h,t[1]=x+M*h,t[5]=u*g,t[9]=w-y*h,t[2]=-u*m,t[6]=h,t[10]=u*d}else if(e.order==="ZYX"){const y=u*g,x=u*v,M=h*g,w=h*v;t[0]=d*g,t[4]=M*m-x,t[8]=y*m+w,t[1]=d*v,t[5]=w*m+y,t[9]=x*m-M,t[2]=-m,t[6]=h*d,t[10]=u*d}else if(e.order==="YZX"){const y=u*d,x=u*m,M=h*d,w=h*m;t[0]=d*g,t[4]=w-y*v,t[8]=M*v+x,t[1]=v,t[5]=u*g,t[9]=-h*g,t[2]=-m*g,t[6]=x*v+M,t[10]=y-w*v}else if(e.order==="XZY"){const y=u*d,x=u*m,M=h*d,w=h*m;t[0]=d*g,t[4]=-v,t[8]=m*g,t[1]=y*v+w,t[5]=u*g,t[9]=x*v-M,t[2]=M*v-x,t[6]=h*g,t[10]=w*v+y}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(V0,e,G0)}lookAt(e,t,r){const a=this.elements;return Xn.subVectors(e,t),Xn.lengthSq()===0&&(Xn.z=1),Xn.normalize(),yr.crossVectors(r,Xn),yr.lengthSq()===0&&(Math.abs(r.z)===1?Xn.x+=1e-4:Xn.z+=1e-4,Xn.normalize(),yr.crossVectors(r,Xn)),yr.normalize(),ml.crossVectors(Xn,yr),a[0]=yr.x,a[4]=ml.x,a[8]=Xn.x,a[1]=yr.y,a[5]=ml.y,a[9]=Xn.y,a[2]=yr.z,a[6]=ml.z,a[10]=Xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,u=r[0],h=r[4],d=r[8],m=r[12],g=r[1],v=r[5],y=r[9],x=r[13],M=r[2],w=r[6],S=r[10],_=r[14],I=r[3],U=r[7],b=r[11],X=r[15],k=a[0],O=a[4],W=a[8],P=a[12],R=a[1],B=a[5],ee=a[9],J=a[13],ue=a[2],he=a[6],ce=a[10],ae=a[14],D=a[3],oe=a[7],re=a[11],F=a[15];return l[0]=u*k+h*R+d*ue+m*D,l[4]=u*O+h*B+d*he+m*oe,l[8]=u*W+h*ee+d*ce+m*re,l[12]=u*P+h*J+d*ae+m*F,l[1]=g*k+v*R+y*ue+x*D,l[5]=g*O+v*B+y*he+x*oe,l[9]=g*W+v*ee+y*ce+x*re,l[13]=g*P+v*J+y*ae+x*F,l[2]=M*k+w*R+S*ue+_*D,l[6]=M*O+w*B+S*he+_*oe,l[10]=M*W+w*ee+S*ce+_*re,l[14]=M*P+w*J+S*ae+_*F,l[3]=I*k+U*R+b*ue+X*D,l[7]=I*O+U*B+b*he+X*oe,l[11]=I*W+U*ee+b*ce+X*re,l[15]=I*P+U*J+b*ae+X*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],a=e[8],l=e[12],u=e[1],h=e[5],d=e[9],m=e[13],g=e[2],v=e[6],y=e[10],x=e[14],M=e[3],w=e[7],S=e[11],_=e[15];return M*(+l*d*v-a*m*v-l*h*y+r*m*y+a*h*x-r*d*x)+w*(+t*d*x-t*m*y+l*u*y-a*u*x+a*m*g-l*d*g)+S*(+t*m*v-t*h*x-l*u*v+r*u*x+l*h*g-r*m*g)+_*(-a*h*g-t*d*v+t*h*y+a*u*v-r*u*y+r*d*g)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],u=e[4],h=e[5],d=e[6],m=e[7],g=e[8],v=e[9],y=e[10],x=e[11],M=e[12],w=e[13],S=e[14],_=e[15],I=v*S*m-w*y*m+w*d*x-h*S*x-v*d*_+h*y*_,U=M*y*m-g*S*m-M*d*x+u*S*x+g*d*_-u*y*_,b=g*w*m-M*v*m+M*h*x-u*w*x-g*h*_+u*v*_,X=M*v*d-g*w*d-M*h*y+u*w*y+g*h*S-u*v*S,k=t*I+r*U+a*b+l*X;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/k;return e[0]=I*O,e[1]=(w*y*l-v*S*l-w*a*x+r*S*x+v*a*_-r*y*_)*O,e[2]=(h*S*l-w*d*l+w*a*m-r*S*m-h*a*_+r*d*_)*O,e[3]=(v*d*l-h*y*l-v*a*m+r*y*m+h*a*x-r*d*x)*O,e[4]=U*O,e[5]=(g*S*l-M*y*l+M*a*x-t*S*x-g*a*_+t*y*_)*O,e[6]=(M*d*l-u*S*l-M*a*m+t*S*m+u*a*_-t*d*_)*O,e[7]=(u*y*l-g*d*l+g*a*m-t*y*m-u*a*x+t*d*x)*O,e[8]=b*O,e[9]=(M*v*l-g*w*l-M*r*x+t*w*x+g*r*_-t*v*_)*O,e[10]=(u*w*l-M*h*l+M*r*m-t*w*m-u*r*_+t*h*_)*O,e[11]=(g*h*l-u*v*l-g*r*m+t*v*m+u*r*x-t*h*x)*O,e[12]=X*O,e[13]=(g*w*a-M*v*a+M*r*y-t*w*y-g*r*S+t*v*S)*O,e[14]=(M*h*a-u*w*a-M*r*d+t*w*d+u*r*S-t*h*S)*O,e[15]=(u*v*a-g*h*a+g*r*d-t*v*d-u*r*y+t*h*y)*O,this}scale(e){const t=this.elements,r=e.x,a=e.y,l=e.z;return t[0]*=r,t[4]*=a,t[8]*=l,t[1]*=r,t[5]*=a,t[9]*=l,t[2]*=r,t[6]*=a,t[10]*=l,t[3]*=r,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,a))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),a=Math.sin(t),l=1-r,u=e.x,h=e.y,d=e.z,m=l*u,g=l*h;return this.set(m*u+r,m*h-a*d,m*d+a*h,0,m*h+a*d,g*h+r,g*d-a*u,0,m*d-a*h,g*d+a*u,l*d*d+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,a,l,u){return this.set(1,r,l,0,e,1,u,0,t,a,1,0,0,0,0,1),this}compose(e,t,r){const a=this.elements,l=t._x,u=t._y,h=t._z,d=t._w,m=l+l,g=u+u,v=h+h,y=l*m,x=l*g,M=l*v,w=u*g,S=u*v,_=h*v,I=d*m,U=d*g,b=d*v,X=r.x,k=r.y,O=r.z;return a[0]=(1-(w+_))*X,a[1]=(x+b)*X,a[2]=(M-U)*X,a[3]=0,a[4]=(x-b)*k,a[5]=(1-(y+_))*k,a[6]=(S+I)*k,a[7]=0,a[8]=(M+U)*O,a[9]=(S-I)*O,a[10]=(1-(y+w))*O,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,r){const a=this.elements;let l=Ns.set(a[0],a[1],a[2]).length();const u=Ns.set(a[4],a[5],a[6]).length(),h=Ns.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],ui.copy(this);const m=1/l,g=1/u,v=1/h;return ui.elements[0]*=m,ui.elements[1]*=m,ui.elements[2]*=m,ui.elements[4]*=g,ui.elements[5]*=g,ui.elements[6]*=g,ui.elements[8]*=v,ui.elements[9]*=v,ui.elements[10]*=v,t.setFromRotationMatrix(ui),r.x=l,r.y=u,r.z=h,this}makePerspective(e,t,r,a,l,u,h=Xi){const d=this.elements,m=2*l/(t-e),g=2*l/(r-a),v=(t+e)/(t-e),y=(r+a)/(r-a);let x,M;if(h===Xi)x=-(u+l)/(u-l),M=-2*u*l/(u-l);else if(h===Bl)x=-u/(u-l),M=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return d[0]=m,d[4]=0,d[8]=v,d[12]=0,d[1]=0,d[5]=g,d[9]=y,d[13]=0,d[2]=0,d[6]=0,d[10]=x,d[14]=M,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,r,a,l,u,h=Xi){const d=this.elements,m=1/(t-e),g=1/(r-a),v=1/(u-l),y=(t+e)*m,x=(r+a)*g;let M,w;if(h===Xi)M=(u+l)*v,w=-2*v;else if(h===Bl)M=l*v,w=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return d[0]=2*m,d[4]=0,d[8]=0,d[12]=-y,d[1]=0,d[5]=2*g,d[9]=0,d[13]=-x,d[2]=0,d[6]=0,d[10]=w,d[14]=-M,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<16;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Ns=new V,ui=new zt,V0=new V(0,0,0),G0=new V(1,1,1),yr=new V,ml=new V,Xn=new V,em=new zt,tm=new ts;class Ti{constructor(e=0,t=0,r=0,a=Ti.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,a=this._order){return this._x=e,this._y=t,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const a=e.elements,l=a[0],u=a[4],h=a[8],d=a[1],m=a[5],g=a[9],v=a[2],y=a[6],x=a[10];switch(t){case"XYZ":this._y=Math.asin(ct(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,x),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(y,m),this._z=0);break;case"YXZ":this._x=Math.asin(-ct(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,x),this._z=Math.atan2(d,m)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(ct(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-v,x),this._z=Math.atan2(-u,m)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-ct(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(y,x),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-u,m));break;case"YZX":this._z=Math.asin(ct(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(h,x));break;case"XZY":this._z=Math.asin(-ct(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(y,m),this._y=Math.atan2(h,l)):(this._x=Math.atan2(-g,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return em.makeRotationFromQuaternion(e),this.setFromRotationMatrix(em,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return tm.setFromEuler(this),this.setFromQuaternion(tm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ti.DEFAULT_ORDER="XYZ";class Eg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let W0=0;const nm=new V,Us=new ts,zi=new zt,gl=new V,Bo=new V,X0=new V,Y0=new ts,im=new V(1,0,0),rm=new V(0,1,0),sm=new V(0,0,1),om={type:"added"},j0={type:"removed"},Is={type:"childadded",child:null},Fu={type:"childremoved",child:null};class pn extends is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:W0++}),this.uuid=Zo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pn.DEFAULT_UP.clone();const e=new V,t=new Ti,r=new ts,a=new V(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new zt},normalMatrix:{value:new lt}}),this.matrix=new zt,this.matrixWorld=new zt,this.matrixAutoUpdate=pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Eg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Us.setFromAxisAngle(e,t),this.quaternion.multiply(Us),this}rotateOnWorldAxis(e,t){return Us.setFromAxisAngle(e,t),this.quaternion.premultiply(Us),this}rotateX(e){return this.rotateOnAxis(im,e)}rotateY(e){return this.rotateOnAxis(rm,e)}rotateZ(e){return this.rotateOnAxis(sm,e)}translateOnAxis(e,t){return nm.copy(e).applyQuaternion(this.quaternion),this.position.add(nm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(im,e)}translateY(e){return this.translateOnAxis(rm,e)}translateZ(e){return this.translateOnAxis(sm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zi.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?gl.copy(e):gl.set(e,t,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zi.lookAt(Bo,gl,this.up):zi.lookAt(gl,Bo,this.up),this.quaternion.setFromRotationMatrix(zi),a&&(zi.extractRotation(a.matrixWorld),Us.setFromRotationMatrix(zi),this.quaternion.premultiply(Us.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(om),Is.child=e,this.dispatchEvent(Is),Is.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(j0),Fu.child=e,this.dispatchEvent(Fu),Fu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),zi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zi.multiply(e.parent.matrixWorld)),e.applyMatrix4(zi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(om),Is.child=e,this.dispatchEvent(Is),Is.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,a=this.children.length;r<a;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const a=this.children;for(let l=0,u=a.length;l<u;l++)a[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,e,X0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,Y0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let l=0,u=a.length;l<u;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(h=>({boxInitialized:h.boxInitialized,boxMin:h.box.min.toArray(),boxMax:h.box.max.toArray(),sphereInitialized:h.sphereInitialized,sphereRadius:h.sphere.radius,sphereCenter:h.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function l(h,d){return h[d.uuid]===void 0&&(h[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const d=h.shapes;if(Array.isArray(d))for(let m=0,g=d.length;m<g;m++){const v=d[m];l(e.shapes,v)}else l(e.shapes,d)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let d=0,m=this.material.length;d<m;d++)h.push(l(e.materials,this.material[d]));a.material=h}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let h=0;h<this.children.length;h++)a.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let h=0;h<this.animations.length;h++){const d=this.animations[h];a.animations.push(l(e.animations,d))}}if(t){const h=u(e.geometries),d=u(e.materials),m=u(e.textures),g=u(e.images),v=u(e.shapes),y=u(e.skeletons),x=u(e.animations),M=u(e.nodes);h.length>0&&(r.geometries=h),d.length>0&&(r.materials=d),m.length>0&&(r.textures=m),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),y.length>0&&(r.skeletons=y),x.length>0&&(r.animations=x),M.length>0&&(r.nodes=M)}return r.object=a,r;function u(h){const d=[];for(const m in h){const g=h[m];delete g.metadata,d.push(g)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}pn.DEFAULT_UP=new V(0,1,0);pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hi=new V,Bi=new V,Ou=new V,Hi=new V,Fs=new V,Os=new V,am=new V,ku=new V,zu=new V,Bu=new V,Hu=new Lt,Vu=new Lt,Gu=new Lt;class fi{constructor(e=new V,t=new V,r=new V){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,a){a.subVectors(r,t),hi.subVectors(e,t),a.cross(hi);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,r,a,l){hi.subVectors(a,t),Bi.subVectors(r,t),Ou.subVectors(e,t);const u=hi.dot(hi),h=hi.dot(Bi),d=hi.dot(Ou),m=Bi.dot(Bi),g=Bi.dot(Ou),v=u*m-h*h;if(v===0)return l.set(0,0,0),null;const y=1/v,x=(m*d-h*g)*y,M=(u*g-h*d)*y;return l.set(1-x-M,M,x)}static containsPoint(e,t,r,a){return this.getBarycoord(e,t,r,a,Hi)===null?!1:Hi.x>=0&&Hi.y>=0&&Hi.x+Hi.y<=1}static getInterpolation(e,t,r,a,l,u,h,d){return this.getBarycoord(e,t,r,a,Hi)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,Hi.x),d.addScaledVector(u,Hi.y),d.addScaledVector(h,Hi.z),d)}static getInterpolatedAttribute(e,t,r,a,l,u){return Hu.setScalar(0),Vu.setScalar(0),Gu.setScalar(0),Hu.fromBufferAttribute(e,t),Vu.fromBufferAttribute(e,r),Gu.fromBufferAttribute(e,a),u.setScalar(0),u.addScaledVector(Hu,l.x),u.addScaledVector(Vu,l.y),u.addScaledVector(Gu,l.z),u}static isFrontFacing(e,t,r,a){return hi.subVectors(r,t),Bi.subVectors(e,t),hi.cross(Bi).dot(a)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,a){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,r,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hi.subVectors(this.c,this.b),Bi.subVectors(this.a,this.b),hi.cross(Bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return fi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,a,l){return fi.getInterpolation(e,this.a,this.b,this.c,t,r,a,l)}containsPoint(e){return fi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,a=this.b,l=this.c;let u,h;Fs.subVectors(a,r),Os.subVectors(l,r),ku.subVectors(e,r);const d=Fs.dot(ku),m=Os.dot(ku);if(d<=0&&m<=0)return t.copy(r);zu.subVectors(e,a);const g=Fs.dot(zu),v=Os.dot(zu);if(g>=0&&v<=g)return t.copy(a);const y=d*v-g*m;if(y<=0&&d>=0&&g<=0)return u=d/(d-g),t.copy(r).addScaledVector(Fs,u);Bu.subVectors(e,l);const x=Fs.dot(Bu),M=Os.dot(Bu);if(M>=0&&x<=M)return t.copy(l);const w=x*m-d*M;if(w<=0&&m>=0&&M<=0)return h=m/(m-M),t.copy(r).addScaledVector(Os,h);const S=g*M-x*v;if(S<=0&&v-g>=0&&x-M>=0)return am.subVectors(l,a),h=(v-g)/(v-g+(x-M)),t.copy(a).addScaledVector(am,h);const _=1/(S+w+y);return u=w*_,h=y*_,t.copy(r).addScaledVector(Fs,u).addScaledVector(Os,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Mg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xr={h:0,s:0,l:0},_l={h:0,s:0,l:0};function Wu(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class _t{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.toWorkingColorSpace(this,t),this}setRGB(e,t,r,a=wt.workingColorSpace){return this.r=e,this.g=t,this.b=r,wt.toWorkingColorSpace(this,a),this}setHSL(e,t,r,a=wt.workingColorSpace){if(e=P0(e,1),t=ct(t,0,1),r=ct(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=Wu(u,l,e+1/3),this.g=Wu(u,l,e),this.b=Wu(u,l,e-1/3)}return wt.toWorkingColorSpace(this,a),this}setStyle(e,t=zn){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=a[1],h=a[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=zn){const r=Mg[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yi(e.r),this.g=Yi(e.g),this.b=Yi(e.b),this}copyLinearToSRGB(e){return this.r=Ks(e.r),this.g=Ks(e.g),this.b=Ks(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zn){return wt.fromWorkingColorSpace(En.copy(this),e),Math.round(ct(En.r*255,0,255))*65536+Math.round(ct(En.g*255,0,255))*256+Math.round(ct(En.b*255,0,255))}getHexString(e=zn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=wt.workingColorSpace){wt.fromWorkingColorSpace(En.copy(this),t);const r=En.r,a=En.g,l=En.b,u=Math.max(r,a,l),h=Math.min(r,a,l);let d,m;const g=(h+u)/2;if(h===u)d=0,m=0;else{const v=u-h;switch(m=g<=.5?v/(u+h):v/(2-u-h),u){case r:d=(a-l)/v+(a<l?6:0);break;case a:d=(l-r)/v+2;break;case l:d=(r-a)/v+4;break}d/=6}return e.h=d,e.s=m,e.l=g,e}getRGB(e,t=wt.workingColorSpace){return wt.fromWorkingColorSpace(En.copy(this),t),e.r=En.r,e.g=En.g,e.b=En.b,e}getStyle(e=zn){wt.fromWorkingColorSpace(En.copy(this),e);const t=En.r,r=En.g,a=En.b;return e!==zn?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,t,r){return this.getHSL(xr),this.setHSL(xr.h+e,xr.s+t,xr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(xr),e.getHSL(_l);const r=Cu(xr.h,_l.h,t),a=Cu(xr.s,_l.s,t),l=Cu(xr.l,_l.l,t);return this.setHSL(r,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*a,this.g=l[1]*t+l[4]*r+l[7]*a,this.b=l[2]*t+l[5]*r+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const En=new _t;_t.NAMES=Mg;let q0=0;class Qo extends is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:q0++}),this.uuid=Zo(),this.name="",this.type="Material",this.blending=js,this.side=Ar,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ah,this.blendDst=lh,this.blendEquation=Kr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _t(0,0,0),this.blendAlpha=0,this.depthFunc=$s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rs,this.stencilZFail=Rs,this.stencilZPass=Rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==js&&(r.blending=this.blending),this.side!==Ar&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==ah&&(r.blendSrc=this.blendSrc),this.blendDst!==lh&&(r.blendDst=this.blendDst),this.blendEquation!==Kr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==$s&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Rs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Rs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Rs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(l){const u=[];for(const h in l){const d=l[h];delete d.metadata,u.push(d)}return u}if(t){const l=a(e.textures),u=a(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const a=t.length;r=new Array(a);for(let l=0;l!==a;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class nf extends Qo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.combine=ig,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Kt=new V,vl=new De;class Mi{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=qp,this.updateRanges=[],this.gpuType=Wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)vl.fromBufferAttribute(this,t),vl.applyMatrix3(e),this.setXY(t,vl.x,vl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix3(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Oo(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=On(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Oo(t,this.array)),t}setX(e,t){return this.normalized&&(t=On(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Oo(t,this.array)),t}setY(e,t){return this.normalized&&(t=On(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Oo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=On(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Oo(t,this.array)),t}setW(e,t){return this.normalized&&(t=On(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=On(t,this.array),r=On(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,a){return e*=this.itemSize,this.normalized&&(t=On(t,this.array),r=On(r,this.array),a=On(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,t,r,a,l){return e*=this.itemSize,this.normalized&&(t=On(t,this.array),r=On(r,this.array),a=On(a,this.array),l=On(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qp&&(e.usage=this.usage),e}}class Tg extends Mi{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class wg extends Mi{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class jt extends Mi{constructor(e,t,r){super(new Float32Array(e),t,r)}}let K0=0;const ei=new zt,Xu=new pn,ks=new V,Yn=new Jo,Ho=new Jo,un=new V;class ni extends is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:K0++}),this.uuid=Zo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vg(e)?wg:Tg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new lt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ei.makeRotationFromQuaternion(e),this.applyMatrix4(ei),this}rotateX(e){return ei.makeRotationX(e),this.applyMatrix4(ei),this}rotateY(e){return ei.makeRotationY(e),this.applyMatrix4(ei),this}rotateZ(e){return ei.makeRotationZ(e),this.applyMatrix4(ei),this}translate(e,t,r){return ei.makeTranslation(e,t,r),this.applyMatrix4(ei),this}scale(e,t,r){return ei.makeScale(e,t,r),this.applyMatrix4(ei),this}lookAt(e){return Xu.lookAt(e),Xu.updateMatrix(),this.applyMatrix4(Xu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ks).negate(),this.translate(ks.x,ks.y,ks.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let a=0,l=e.length;a<l;a++){const u=e[a];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new jt(r,3))}else{const r=Math.min(e.length,t.count);for(let a=0;a<r;a++){const l=e[a];t.setXYZ(a,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const l=t[r];Yn.setFromBufferAttribute(l),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,Yn.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,Yn.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(Yn.min),this.boundingBox.expandByPoint(Yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tf);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const r=this.boundingSphere.center;if(Yn.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const h=t[l];Ho.setFromBufferAttribute(h),this.morphTargetsRelative?(un.addVectors(Yn.min,Ho.min),Yn.expandByPoint(un),un.addVectors(Yn.max,Ho.max),Yn.expandByPoint(un)):(Yn.expandByPoint(Ho.min),Yn.expandByPoint(Ho.max))}Yn.getCenter(r);let a=0;for(let l=0,u=e.count;l<u;l++)un.fromBufferAttribute(e,l),a=Math.max(a,r.distanceToSquared(un));if(t)for(let l=0,u=t.length;l<u;l++){const h=t[l],d=this.morphTargetsRelative;for(let m=0,g=h.count;m<g;m++)un.fromBufferAttribute(h,m),d&&(ks.fromBufferAttribute(e,m),un.add(ks)),a=Math.max(a,r.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,a=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mi(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),h=[],d=[];for(let W=0;W<r.count;W++)h[W]=new V,d[W]=new V;const m=new V,g=new V,v=new V,y=new De,x=new De,M=new De,w=new V,S=new V;function _(W,P,R){m.fromBufferAttribute(r,W),g.fromBufferAttribute(r,P),v.fromBufferAttribute(r,R),y.fromBufferAttribute(l,W),x.fromBufferAttribute(l,P),M.fromBufferAttribute(l,R),g.sub(m),v.sub(m),x.sub(y),M.sub(y);const B=1/(x.x*M.y-M.x*x.y);isFinite(B)&&(w.copy(g).multiplyScalar(M.y).addScaledVector(v,-x.y).multiplyScalar(B),S.copy(v).multiplyScalar(x.x).addScaledVector(g,-M.x).multiplyScalar(B),h[W].add(w),h[P].add(w),h[R].add(w),d[W].add(S),d[P].add(S),d[R].add(S))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let W=0,P=I.length;W<P;++W){const R=I[W],B=R.start,ee=R.count;for(let J=B,ue=B+ee;J<ue;J+=3)_(e.getX(J+0),e.getX(J+1),e.getX(J+2))}const U=new V,b=new V,X=new V,k=new V;function O(W){X.fromBufferAttribute(a,W),k.copy(X);const P=h[W];U.copy(P),U.sub(X.multiplyScalar(X.dot(P))).normalize(),b.crossVectors(k,P);const B=b.dot(d[W])<0?-1:1;u.setXYZW(W,U.x,U.y,U.z,B)}for(let W=0,P=I.length;W<P;++W){const R=I[W],B=R.start,ee=R.count;for(let J=B,ue=B+ee;J<ue;J+=3)O(e.getX(J+0)),O(e.getX(J+1)),O(e.getX(J+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Mi(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let y=0,x=r.count;y<x;y++)r.setXYZ(y,0,0,0);const a=new V,l=new V,u=new V,h=new V,d=new V,m=new V,g=new V,v=new V;if(e)for(let y=0,x=e.count;y<x;y+=3){const M=e.getX(y+0),w=e.getX(y+1),S=e.getX(y+2);a.fromBufferAttribute(t,M),l.fromBufferAttribute(t,w),u.fromBufferAttribute(t,S),g.subVectors(u,l),v.subVectors(a,l),g.cross(v),h.fromBufferAttribute(r,M),d.fromBufferAttribute(r,w),m.fromBufferAttribute(r,S),h.add(g),d.add(g),m.add(g),r.setXYZ(M,h.x,h.y,h.z),r.setXYZ(w,d.x,d.y,d.z),r.setXYZ(S,m.x,m.y,m.z)}else for(let y=0,x=t.count;y<x;y+=3)a.fromBufferAttribute(t,y+0),l.fromBufferAttribute(t,y+1),u.fromBufferAttribute(t,y+2),g.subVectors(u,l),v.subVectors(a,l),g.cross(v),r.setXYZ(y+0,g.x,g.y,g.z),r.setXYZ(y+1,g.x,g.y,g.z),r.setXYZ(y+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)un.fromBufferAttribute(e,t),un.normalize(),e.setXYZ(t,un.x,un.y,un.z)}toNonIndexed(){function e(h,d){const m=h.array,g=h.itemSize,v=h.normalized,y=new m.constructor(d.length*g);let x=0,M=0;for(let w=0,S=d.length;w<S;w++){h.isInterleavedBufferAttribute?x=d[w]*h.data.stride+h.offset:x=d[w]*g;for(let _=0;_<g;_++)y[M++]=m[x++]}return new Mi(y,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ni,r=this.index.array,a=this.attributes;for(const h in a){const d=a[h],m=e(d,r);t.setAttribute(h,m)}const l=this.morphAttributes;for(const h in l){const d=[],m=l[h];for(let g=0,v=m.length;g<v;g++){const y=m[g],x=e(y,r);d.push(x)}t.morphAttributes[h]=d}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let h=0,d=u.length;h<d;h++){const m=u[h];t.addGroup(m.start,m.count,m.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const m in d)d[m]!==void 0&&(e[m]=d[m]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const d in r){const m=r[d];e.data.attributes[d]=m.toJSON(e.data)}const a={};let l=!1;for(const d in this.morphAttributes){const m=this.morphAttributes[d],g=[];for(let v=0,y=m.length;v<y;v++){const x=m[v];g.push(x.toJSON(e.data))}g.length>0&&(a[d]=g,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const a=e.attributes;for(const m in a){const g=a[m];this.setAttribute(m,g.clone(t))}const l=e.morphAttributes;for(const m in l){const g=[],v=l[m];for(let y=0,x=v.length;y<x;y++)g.push(v[y].clone(t));this.morphAttributes[m]=g}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let m=0,g=u.length;m<g;m++){const v=u[m];this.addGroup(v.start,v.count,v.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lm=new zt,Wr=new Sg,yl=new tf,cm=new V,xl=new V,Sl=new V,El=new V,Yu=new V,Ml=new V,um=new V,Tl=new V;class $t extends pn{constructor(e=new ni,t=new nf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=a.length;l<u;l++){const h=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=l}}}}getVertexPosition(e,t){const r=this.geometry,a=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(a,e);const h=this.morphTargetInfluences;if(l&&h){Ml.set(0,0,0);for(let d=0,m=l.length;d<m;d++){const g=h[d],v=l[d];g!==0&&(Yu.fromBufferAttribute(v,e),u?Ml.addScaledVector(Yu,g):Ml.addScaledVector(Yu.sub(t),g))}t.add(Ml)}return t}raycast(e,t){const r=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),yl.copy(r.boundingSphere),yl.applyMatrix4(l),Wr.copy(e.ray).recast(e.near),!(yl.containsPoint(Wr.origin)===!1&&(Wr.intersectSphere(yl,cm)===null||Wr.origin.distanceToSquared(cm)>(e.far-e.near)**2))&&(lm.copy(l).invert(),Wr.copy(e.ray).applyMatrix4(lm),!(r.boundingBox!==null&&Wr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Wr)))}_computeIntersections(e,t,r){let a;const l=this.geometry,u=this.material,h=l.index,d=l.attributes.position,m=l.attributes.uv,g=l.attributes.uv1,v=l.attributes.normal,y=l.groups,x=l.drawRange;if(h!==null)if(Array.isArray(u))for(let M=0,w=y.length;M<w;M++){const S=y[M],_=u[S.materialIndex],I=Math.max(S.start,x.start),U=Math.min(h.count,Math.min(S.start+S.count,x.start+x.count));for(let b=I,X=U;b<X;b+=3){const k=h.getX(b),O=h.getX(b+1),W=h.getX(b+2);a=wl(this,_,e,r,m,g,v,k,O,W),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=S.materialIndex,t.push(a))}}else{const M=Math.max(0,x.start),w=Math.min(h.count,x.start+x.count);for(let S=M,_=w;S<_;S+=3){const I=h.getX(S),U=h.getX(S+1),b=h.getX(S+2);a=wl(this,u,e,r,m,g,v,I,U,b),a&&(a.faceIndex=Math.floor(S/3),t.push(a))}}else if(d!==void 0)if(Array.isArray(u))for(let M=0,w=y.length;M<w;M++){const S=y[M],_=u[S.materialIndex],I=Math.max(S.start,x.start),U=Math.min(d.count,Math.min(S.start+S.count,x.start+x.count));for(let b=I,X=U;b<X;b+=3){const k=b,O=b+1,W=b+2;a=wl(this,_,e,r,m,g,v,k,O,W),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=S.materialIndex,t.push(a))}}else{const M=Math.max(0,x.start),w=Math.min(d.count,x.start+x.count);for(let S=M,_=w;S<_;S+=3){const I=S,U=S+1,b=S+2;a=wl(this,u,e,r,m,g,v,I,U,b),a&&(a.faceIndex=Math.floor(S/3),t.push(a))}}}}function $0(s,e,t,r,a,l,u,h){let d;if(e.side===Bn?d=r.intersectTriangle(u,l,a,!0,h):d=r.intersectTriangle(a,l,u,e.side===Ar,h),d===null)return null;Tl.copy(h),Tl.applyMatrix4(s.matrixWorld);const m=t.ray.origin.distanceTo(Tl);return m<t.near||m>t.far?null:{distance:m,point:Tl.clone(),object:s}}function wl(s,e,t,r,a,l,u,h,d,m){s.getVertexPosition(h,xl),s.getVertexPosition(d,Sl),s.getVertexPosition(m,El);const g=$0(s,e,t,r,xl,Sl,El,um);if(g){const v=new V;fi.getBarycoord(um,xl,Sl,El,v),a&&(g.uv=fi.getInterpolatedAttribute(a,h,d,m,v,new De)),l&&(g.uv1=fi.getInterpolatedAttribute(l,h,d,m,v,new De)),u&&(g.normal=fi.getInterpolatedAttribute(u,h,d,m,v,new V),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const y={a:h,b:d,c:m,normal:new V,materialIndex:0};fi.getNormal(xl,Sl,El,y.normal),g.face=y,g.barycoord=v}return g}class io extends ni{constructor(e=1,t=1,r=1,a=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:a,heightSegments:l,depthSegments:u};const h=this;a=Math.floor(a),l=Math.floor(l),u=Math.floor(u);const d=[],m=[],g=[],v=[];let y=0,x=0;M("z","y","x",-1,-1,r,t,e,u,l,0),M("z","y","x",1,-1,r,t,-e,u,l,1),M("x","z","y",1,1,e,r,t,a,u,2),M("x","z","y",1,-1,e,r,-t,a,u,3),M("x","y","z",1,-1,e,t,r,a,l,4),M("x","y","z",-1,-1,e,t,-r,a,l,5),this.setIndex(d),this.setAttribute("position",new jt(m,3)),this.setAttribute("normal",new jt(g,3)),this.setAttribute("uv",new jt(v,2));function M(w,S,_,I,U,b,X,k,O,W,P){const R=b/O,B=X/W,ee=b/2,J=X/2,ue=k/2,he=O+1,ce=W+1;let ae=0,D=0;const oe=new V;for(let re=0;re<ce;re++){const F=re*B-J;for(let se=0;se<he;se++){const Ne=se*R-ee;oe[w]=Ne*I,oe[S]=F*U,oe[_]=ue,m.push(oe.x,oe.y,oe.z),oe[w]=0,oe[S]=0,oe[_]=k>0?1:-1,g.push(oe.x,oe.y,oe.z),v.push(se/O),v.push(1-re/W),ae+=1}}for(let re=0;re<W;re++)for(let F=0;F<O;F++){const se=y+F+he*re,Ne=y+F+he*(re+1),te=y+(F+1)+he*(re+1),de=y+(F+1)+he*re;d.push(se,Ne,de),d.push(Ne,te,de),D+=6}h.addGroup(x,D,P),x+=D,y+=ae}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new io(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function no(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const a=s[t][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=a.clone():Array.isArray(a)?e[t][r]=a.slice():e[t][r]=a}}return e}function Cn(s){const e={};for(let t=0;t<s.length;t++){const r=no(s[t]);for(const a in r)e[a]=r[a]}return e}function Z0(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Ag(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}const J0={clone:no,merge:Cn};var Q0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ey=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cr extends Qo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Q0,this.fragmentShader=ey,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=no(e.uniforms),this.uniformsGroups=Z0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const u=this.uniforms[a].value;u&&u.isTexture?t.uniforms[a]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[a]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[a]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[a]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[a]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[a]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[a]={type:"m4",value:u.toArray()}:t.uniforms[a]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class Cg extends pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new zt,this.projectionMatrix=new zt,this.projectionMatrixInverse=new zt,this.coordinateSystem=Xi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Sr=new V,hm=new De,fm=new De;class jn extends Cg{constructor(e=50,t=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Yh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ol*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yh*2*Math.atan(Math.tan(Ol*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Sr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Sr.x,Sr.y).multiplyScalar(-e/Sr.z),Sr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Sr.x,Sr.y).multiplyScalar(-e/Sr.z)}getViewSize(e,t){return this.getViewBounds(e,hm,fm),t.subVectors(fm,hm)}setViewOffset(e,t,r,a,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ol*.5*this.fov)/this.zoom,r=2*t,a=this.aspect*r,l=-.5*a;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,m=u.fullHeight;l+=u.offsetX*a/d,t-=u.offsetY*r/m,a*=u.width/d,r*=u.height/m}const h=this.filmOffset;h!==0&&(l+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const zs=-90,Bs=1;class ty extends pn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new jn(zs,Bs,e,t);a.layers=this.layers,this.add(a);const l=new jn(zs,Bs,e,t);l.layers=this.layers,this.add(l);const u=new jn(zs,Bs,e,t);u.layers=this.layers,this.add(u);const h=new jn(zs,Bs,e,t);h.layers=this.layers,this.add(h);const d=new jn(zs,Bs,e,t);d.layers=this.layers,this.add(d);const m=new jn(zs,Bs,e,t);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,a,l,u,h,d]=t;for(const m of t)this.remove(m);if(e===Xi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===Bl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of t)this.add(m),m.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,h,d,m,g]=this.children,v=e.getRenderTarget(),y=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(t,l),e.setRenderTarget(r,1,a),e.render(t,u),e.setRenderTarget(r,2,a),e.render(t,h),e.setRenderTarget(r,3,a),e.render(t,d),e.setRenderTarget(r,4,a),e.render(t,m),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,a),e.render(t,g),e.setRenderTarget(v,y,x),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class Rg extends Pn{constructor(e,t,r,a,l,u,h,d,m,g){e=e!==void 0?e:[],t=t!==void 0?t:Zs,super(e,t,r,a,l,u,h,d,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ny extends es{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new Rg(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ei}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new io(5,5,5),l=new Cr({name:"CubemapFromEquirect",uniforms:no(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Bn,blending:Tr});l.uniforms.tEquirect.value=t;const u=new $t(a,l),h=t.minFilter;return t.minFilter===Jr&&(t.minFilter=Ei),new ty(1,10,this).update(e,u),t.minFilter=h,u.geometry.dispose(),u.material.dispose(),this}clear(e,t,r,a){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,a);e.setRenderTarget(l)}}class iy extends pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ti,this.environmentIntensity=1,this.environmentRotation=new Ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const ju=new V,ry=new V,sy=new lt;class Er{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,a){return this.normal.set(e,t,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const a=ju.subVectors(r,t).cross(ry.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(ju),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||sy.getNormalMatrix(e),a=this.coplanarPoint(ju).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xr=new tf,Al=new V;class rf{constructor(e=new Er,t=new Er,r=new Er,a=new Er,l=new Er,u=new Er){this.planes=[e,t,r,a,l,u]}set(e,t,r,a,l,u){const h=this.planes;return h[0].copy(e),h[1].copy(t),h[2].copy(r),h[3].copy(a),h[4].copy(l),h[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Xi){const r=this.planes,a=e.elements,l=a[0],u=a[1],h=a[2],d=a[3],m=a[4],g=a[5],v=a[6],y=a[7],x=a[8],M=a[9],w=a[10],S=a[11],_=a[12],I=a[13],U=a[14],b=a[15];if(r[0].setComponents(d-l,y-m,S-x,b-_).normalize(),r[1].setComponents(d+l,y+m,S+x,b+_).normalize(),r[2].setComponents(d+u,y+g,S+M,b+I).normalize(),r[3].setComponents(d-u,y-g,S-M,b-I).normalize(),r[4].setComponents(d-h,y-v,S-w,b-U).normalize(),t===Xi)r[5].setComponents(d+h,y+v,S+w,b+U).normalize();else if(t===Bl)r[5].setComponents(h,v,w,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Xr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xr)}intersectsSprite(e){return Xr.center.set(0,0,0),Xr.radius=.7071067811865476,Xr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xr)}intersectsSphere(e){const t=this.planes,r=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const a=t[r];if(Al.x=a.normal.x>0?e.max.x:e.min.x,Al.y=a.normal.y>0?e.max.y:e.min.y,Al.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Al)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Xo extends pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}class oy extends Pn{constructor(e,t,r,a,l,u,h,d,m){super(e,t,r,a,l,u,h,d,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Pg extends Pn{constructor(e,t,r,a,l,u,h,d,m,g=qs){if(g!==qs&&g!==eo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&g===qs&&(r=Qr),r===void 0&&g===eo&&(r=Qs),super(null,a,l,u,h,d,g,r,m),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=h!==void 0?h:pi,this.minFilter=d!==void 0?d:pi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class wi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,a=this.getPoint(0),l=0;t.push(0);for(let u=1;u<=e;u++)r=this.getPoint(u/e),l+=r.distanceTo(a),t.push(l),a=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const r=this.getLengths();let a=0;const l=r.length;let u;t?u=t:u=e*r[l-1];let h=0,d=l-1,m;for(;h<=d;)if(a=Math.floor(h+(d-h)/2),m=r[a]-u,m<0)h=a+1;else if(m>0)d=a-1;else{d=a;break}if(a=d,r[a]===u)return a/(l-1);const g=r[a],y=r[a+1]-g,x=(u-g)/y;return(a+x)/(l-1)}getTangent(e,t){let a=e-1e-4,l=e+1e-4;a<0&&(a=0),l>1&&(l=1);const u=this.getPoint(a),h=this.getPoint(l),d=t||(u.isVector2?new De:new V);return d.copy(h).sub(u).normalize(),d}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t){const r=new V,a=[],l=[],u=[],h=new V,d=new zt;for(let x=0;x<=e;x++){const M=x/e;a[x]=this.getTangentAt(M,new V)}l[0]=new V,u[0]=new V;let m=Number.MAX_VALUE;const g=Math.abs(a[0].x),v=Math.abs(a[0].y),y=Math.abs(a[0].z);g<=m&&(m=g,r.set(1,0,0)),v<=m&&(m=v,r.set(0,1,0)),y<=m&&r.set(0,0,1),h.crossVectors(a[0],r).normalize(),l[0].crossVectors(a[0],h),u[0].crossVectors(a[0],l[0]);for(let x=1;x<=e;x++){if(l[x]=l[x-1].clone(),u[x]=u[x-1].clone(),h.crossVectors(a[x-1],a[x]),h.length()>Number.EPSILON){h.normalize();const M=Math.acos(ct(a[x-1].dot(a[x]),-1,1));l[x].applyMatrix4(d.makeRotationAxis(h,M))}u[x].crossVectors(a[x],l[x])}if(t===!0){let x=Math.acos(ct(l[0].dot(l[e]),-1,1));x/=e,a[0].dot(h.crossVectors(l[0],l[e]))>0&&(x=-x);for(let M=1;M<=e;M++)l[M].applyMatrix4(d.makeRotationAxis(a[M],x*M)),u[M].crossVectors(a[M],l[M])}return{tangents:a,normals:l,binormals:u}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class sf extends wi{constructor(e=0,t=0,r=1,a=1,l=0,u=Math.PI*2,h=!1,d=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=r,this.yRadius=a,this.aStartAngle=l,this.aEndAngle=u,this.aClockwise=h,this.aRotation=d}getPoint(e,t=new De){const r=t,a=Math.PI*2;let l=this.aEndAngle-this.aStartAngle;const u=Math.abs(l)<Number.EPSILON;for(;l<0;)l+=a;for(;l>a;)l-=a;l<Number.EPSILON&&(u?l=0:l=a),this.aClockwise===!0&&!u&&(l===a?l=-a:l=l-a);const h=this.aStartAngle+e*l;let d=this.aX+this.xRadius*Math.cos(h),m=this.aY+this.yRadius*Math.sin(h);if(this.aRotation!==0){const g=Math.cos(this.aRotation),v=Math.sin(this.aRotation),y=d-this.aX,x=m-this.aY;d=y*g-x*v+this.aX,m=y*v+x*g+this.aY}return r.set(d,m)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class ay extends sf{constructor(e,t,r,a,l,u){super(e,t,r,r,a,l,u),this.isArcCurve=!0,this.type="ArcCurve"}}function of(){let s=0,e=0,t=0,r=0;function a(l,u,h,d){s=l,e=h,t=-3*l+3*u-2*h-d,r=2*l-2*u+h+d}return{initCatmullRom:function(l,u,h,d,m){a(u,h,m*(h-l),m*(d-u))},initNonuniformCatmullRom:function(l,u,h,d,m,g,v){let y=(u-l)/m-(h-l)/(m+g)+(h-u)/g,x=(h-u)/g-(d-u)/(g+v)+(d-h)/v;y*=g,x*=g,a(u,h,y,x)},calc:function(l){const u=l*l,h=u*l;return s+e*l+t*u+r*h}}}const Cl=new V,qu=new of,Ku=new of,$u=new of;class ly extends wi{constructor(e=[],t=!1,r="centripetal",a=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=a}getPoint(e,t=new V){const r=t,a=this.points,l=a.length,u=(l-(this.closed?0:1))*e;let h=Math.floor(u),d=u-h;this.closed?h+=h>0?0:(Math.floor(Math.abs(h)/l)+1)*l:d===0&&h===l-1&&(h=l-2,d=1);let m,g;this.closed||h>0?m=a[(h-1)%l]:(Cl.subVectors(a[0],a[1]).add(a[0]),m=Cl);const v=a[h%l],y=a[(h+1)%l];if(this.closed||h+2<l?g=a[(h+2)%l]:(Cl.subVectors(a[l-1],a[l-2]).add(a[l-1]),g=Cl),this.curveType==="centripetal"||this.curveType==="chordal"){const x=this.curveType==="chordal"?.5:.25;let M=Math.pow(m.distanceToSquared(v),x),w=Math.pow(v.distanceToSquared(y),x),S=Math.pow(y.distanceToSquared(g),x);w<1e-4&&(w=1),M<1e-4&&(M=w),S<1e-4&&(S=w),qu.initNonuniformCatmullRom(m.x,v.x,y.x,g.x,M,w,S),Ku.initNonuniformCatmullRom(m.y,v.y,y.y,g.y,M,w,S),$u.initNonuniformCatmullRom(m.z,v.z,y.z,g.z,M,w,S)}else this.curveType==="catmullrom"&&(qu.initCatmullRom(m.x,v.x,y.x,g.x,this.tension),Ku.initCatmullRom(m.y,v.y,y.y,g.y,this.tension),$u.initCatmullRom(m.z,v.z,y.z,g.z,this.tension));return r.set(qu.calc(d),Ku.calc(d),$u.calc(d)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const a=e.points[t];this.points.push(a.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const a=this.points[t];e.points.push(a.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const a=e.points[t];this.points.push(new V().fromArray(a))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function dm(s,e,t,r,a){const l=(r-e)*.5,u=(a-t)*.5,h=s*s,d=s*h;return(2*t-2*r+l+u)*d+(-3*t+3*r-2*l-u)*h+l*s+t}function cy(s,e){const t=1-s;return t*t*e}function uy(s,e){return 2*(1-s)*s*e}function hy(s,e){return s*s*e}function jo(s,e,t,r){return cy(s,e)+uy(s,t)+hy(s,r)}function fy(s,e){const t=1-s;return t*t*t*e}function dy(s,e){const t=1-s;return 3*t*t*s*e}function py(s,e){return 3*(1-s)*s*s*e}function my(s,e){return s*s*s*e}function qo(s,e,t,r,a){return fy(s,e)+dy(s,t)+py(s,r)+my(s,a)}class bg extends wi{constructor(e=new De,t=new De,r=new De,a=new De){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=r,this.v3=a}getPoint(e,t=new De){const r=t,a=this.v0,l=this.v1,u=this.v2,h=this.v3;return r.set(qo(e,a.x,l.x,u.x,h.x),qo(e,a.y,l.y,u.y,h.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class gy extends wi{constructor(e=new V,t=new V,r=new V,a=new V){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=r,this.v3=a}getPoint(e,t=new V){const r=t,a=this.v0,l=this.v1,u=this.v2,h=this.v3;return r.set(qo(e,a.x,l.x,u.x,h.x),qo(e,a.y,l.y,u.y,h.y),qo(e,a.z,l.z,u.z,h.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Lg extends wi{constructor(e=new De,t=new De){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new De){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new De){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class _y extends wi{constructor(e=new V,t=new V){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new V){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new V){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Dg extends wi{constructor(e=new De,t=new De,r=new De){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new De){const r=t,a=this.v0,l=this.v1,u=this.v2;return r.set(jo(e,a.x,l.x,u.x),jo(e,a.y,l.y,u.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class vy extends wi{constructor(e=new V,t=new V,r=new V){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new V){const r=t,a=this.v0,l=this.v1,u=this.v2;return r.set(jo(e,a.x,l.x,u.x),jo(e,a.y,l.y,u.y),jo(e,a.z,l.z,u.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ng extends wi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new De){const r=t,a=this.points,l=(a.length-1)*e,u=Math.floor(l),h=l-u,d=a[u===0?u:u-1],m=a[u],g=a[u>a.length-2?a.length-1:u+1],v=a[u>a.length-3?a.length-1:u+2];return r.set(dm(h,d.x,m.x,g.x,v.x),dm(h,d.y,m.y,g.y,v.y)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const a=e.points[t];this.points.push(a.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const a=this.points[t];e.points.push(a.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const a=e.points[t];this.points.push(new De().fromArray(a))}return this}}var pm=Object.freeze({__proto__:null,ArcCurve:ay,CatmullRomCurve3:ly,CubicBezierCurve:bg,CubicBezierCurve3:gy,EllipseCurve:sf,LineCurve:Lg,LineCurve3:_y,QuadraticBezierCurve:Dg,QuadraticBezierCurve3:vy,SplineCurve:Ng});class yy extends wi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const r=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new pm[r](t,e))}return this}getPoint(e,t){const r=e*this.getLength(),a=this.getCurveLengths();let l=0;for(;l<a.length;){if(a[l]>=r){const u=a[l]-r,h=this.curves[l],d=h.getLength(),m=d===0?0:1-u/d;return h.getPointAt(m,t)}l++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let r=0,a=this.curves.length;r<a;r++)t+=this.curves[r].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let r;for(let a=0,l=this.curves;a<l.length;a++){const u=l[a],h=u.isEllipseCurve?e*2:u.isLineCurve||u.isLineCurve3?1:u.isSplineCurve?e*u.points.length:e,d=u.getPoints(h);for(let m=0;m<d.length;m++){const g=d[m];r&&r.equals(g)||(t.push(g),r=g)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){const a=e.curves[t];this.curves.push(a.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,r=this.curves.length;t<r;t++){const a=this.curves[t];e.curves.push(a.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){const a=e.curves[t];this.curves.push(new pm[a.type]().fromJSON(a))}return this}}class xy extends yy{constructor(e){super(),this.type="Path",this.currentPoint=new De,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,r=e.length;t<r;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const r=new Lg(this.currentPoint.clone(),new De(e,t));return this.curves.push(r),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,r,a){const l=new Dg(this.currentPoint.clone(),new De(e,t),new De(r,a));return this.curves.push(l),this.currentPoint.set(r,a),this}bezierCurveTo(e,t,r,a,l,u){const h=new bg(this.currentPoint.clone(),new De(e,t),new De(r,a),new De(l,u));return this.curves.push(h),this.currentPoint.set(l,u),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),r=new Ng(t);return this.curves.push(r),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,r,a,l,u){const h=this.currentPoint.x,d=this.currentPoint.y;return this.absarc(e+h,t+d,r,a,l,u),this}absarc(e,t,r,a,l,u){return this.absellipse(e,t,r,r,a,l,u),this}ellipse(e,t,r,a,l,u,h,d){const m=this.currentPoint.x,g=this.currentPoint.y;return this.absellipse(e+m,t+g,r,a,l,u,h,d),this}absellipse(e,t,r,a,l,u,h,d){const m=new sf(e,t,r,a,l,u,h,d);if(this.curves.length>0){const v=m.getPoint(0);v.equals(this.currentPoint)||this.lineTo(v.x,v.y)}this.curves.push(m);const g=m.getPoint(1);return this.currentPoint.copy(g),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class af extends ni{constructor(e=[new De(0,-.5),new De(.5,0),new De(0,.5)],t=12,r=0,a=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:r,phiLength:a},t=Math.floor(t),a=ct(a,0,Math.PI*2);const l=[],u=[],h=[],d=[],m=[],g=1/t,v=new V,y=new De,x=new V,M=new V,w=new V;let S=0,_=0;for(let I=0;I<=e.length-1;I++)switch(I){case 0:S=e[I+1].x-e[I].x,_=e[I+1].y-e[I].y,x.x=_*1,x.y=-S,x.z=_*0,w.copy(x),x.normalize(),d.push(x.x,x.y,x.z);break;case e.length-1:d.push(w.x,w.y,w.z);break;default:S=e[I+1].x-e[I].x,_=e[I+1].y-e[I].y,x.x=_*1,x.y=-S,x.z=_*0,M.copy(x),x.x+=w.x,x.y+=w.y,x.z+=w.z,x.normalize(),d.push(x.x,x.y,x.z),w.copy(M)}for(let I=0;I<=t;I++){const U=r+I*g*a,b=Math.sin(U),X=Math.cos(U);for(let k=0;k<=e.length-1;k++){v.x=e[k].x*b,v.y=e[k].y,v.z=e[k].x*X,u.push(v.x,v.y,v.z),y.x=I/t,y.y=k/(e.length-1),h.push(y.x,y.y);const O=d[3*k+0]*b,W=d[3*k+1],P=d[3*k+0]*X;m.push(O,W,P)}}for(let I=0;I<t;I++)for(let U=0;U<e.length-1;U++){const b=U+I*e.length,X=b,k=b+e.length,O=b+e.length+1,W=b+1;l.push(X,k,W),l.push(O,W,k)}this.setIndex(l),this.setAttribute("position",new jt(u,3)),this.setAttribute("uv",new jt(h,2)),this.setAttribute("normal",new jt(m,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new af(e.points,e.segments,e.phiStart,e.phiLength)}}class lf extends af{constructor(e=1,t=1,r=4,a=8){const l=new xy;l.absarc(0,-t/2,e,Math.PI*1.5,0),l.absarc(0,t/2,e,0,Math.PI*.5),super(l.getPoints(r),a),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:r,radialSegments:a}}static fromJSON(e){return new lf(e.radius,e.length,e.capSegments,e.radialSegments)}}class cf extends ni{constructor(e=1,t=32,r=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:r,thetaLength:a},t=Math.max(3,t);const l=[],u=[],h=[],d=[],m=new V,g=new De;u.push(0,0,0),h.push(0,0,1),d.push(.5,.5);for(let v=0,y=3;v<=t;v++,y+=3){const x=r+v/t*a;m.x=e*Math.cos(x),m.y=e*Math.sin(x),u.push(m.x,m.y,m.z),h.push(0,0,1),g.x=(u[y]/e+1)/2,g.y=(u[y+1]/e+1)/2,d.push(g.x,g.y)}for(let v=1;v<=t;v++)l.push(v,v+1,0);this.setIndex(l),this.setAttribute("position",new jt(u,3)),this.setAttribute("normal",new jt(h,3)),this.setAttribute("uv",new jt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cf(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class uf extends ni{constructor(e=1,t=1,r=1,a=32,l=1,u=!1,h=0,d=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:a,heightSegments:l,openEnded:u,thetaStart:h,thetaLength:d};const m=this;a=Math.floor(a),l=Math.floor(l);const g=[],v=[],y=[],x=[];let M=0;const w=[],S=r/2;let _=0;I(),u===!1&&(e>0&&U(!0),t>0&&U(!1)),this.setIndex(g),this.setAttribute("position",new jt(v,3)),this.setAttribute("normal",new jt(y,3)),this.setAttribute("uv",new jt(x,2));function I(){const b=new V,X=new V;let k=0;const O=(t-e)/r;for(let W=0;W<=l;W++){const P=[],R=W/l,B=R*(t-e)+e;for(let ee=0;ee<=a;ee++){const J=ee/a,ue=J*d+h,he=Math.sin(ue),ce=Math.cos(ue);X.x=B*he,X.y=-R*r+S,X.z=B*ce,v.push(X.x,X.y,X.z),b.set(he,O,ce).normalize(),y.push(b.x,b.y,b.z),x.push(J,1-R),P.push(M++)}w.push(P)}for(let W=0;W<a;W++)for(let P=0;P<l;P++){const R=w[P][W],B=w[P+1][W],ee=w[P+1][W+1],J=w[P][W+1];(e>0||P!==0)&&(g.push(R,B,J),k+=3),(t>0||P!==l-1)&&(g.push(B,ee,J),k+=3)}m.addGroup(_,k,0),_+=k}function U(b){const X=M,k=new De,O=new V;let W=0;const P=b===!0?e:t,R=b===!0?1:-1;for(let ee=1;ee<=a;ee++)v.push(0,S*R,0),y.push(0,R,0),x.push(.5,.5),M++;const B=M;for(let ee=0;ee<=a;ee++){const ue=ee/a*d+h,he=Math.cos(ue),ce=Math.sin(ue);O.x=P*ce,O.y=S*R,O.z=P*he,v.push(O.x,O.y,O.z),y.push(0,R,0),k.x=he*.5+.5,k.y=ce*.5*R+.5,x.push(k.x,k.y),M++}for(let ee=0;ee<a;ee++){const J=X+ee,ue=B+ee;b===!0?g.push(ue,ue+1,J):g.push(ue+1,ue,J),W+=3}m.addGroup(_,W,b===!0?1:2),_+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uf(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ea extends ni{constructor(e=1,t=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:a};const l=e/2,u=t/2,h=Math.floor(r),d=Math.floor(a),m=h+1,g=d+1,v=e/h,y=t/d,x=[],M=[],w=[],S=[];for(let _=0;_<g;_++){const I=_*y-u;for(let U=0;U<m;U++){const b=U*v-l;M.push(b,-I,0),w.push(0,0,1),S.push(U/h),S.push(1-_/d)}}for(let _=0;_<d;_++)for(let I=0;I<h;I++){const U=I+m*_,b=I+m*(_+1),X=I+1+m*(_+1),k=I+1+m*_;x.push(U,b,k),x.push(b,X,k)}this.setIndex(x),this.setAttribute("position",new jt(M,3)),this.setAttribute("normal",new jt(w,3)),this.setAttribute("uv",new jt(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ea(e.width,e.height,e.widthSegments,e.heightSegments)}}class hf extends ni{constructor(e=1,t=.4,r=12,a=48,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:r,tubularSegments:a,arc:l},r=Math.floor(r),a=Math.floor(a);const u=[],h=[],d=[],m=[],g=new V,v=new V,y=new V;for(let x=0;x<=r;x++)for(let M=0;M<=a;M++){const w=M/a*l,S=x/r*Math.PI*2;v.x=(e+t*Math.cos(S))*Math.cos(w),v.y=(e+t*Math.cos(S))*Math.sin(w),v.z=t*Math.sin(S),h.push(v.x,v.y,v.z),g.x=e*Math.cos(w),g.y=e*Math.sin(w),y.subVectors(v,g).normalize(),d.push(y.x,y.y,y.z),m.push(M/a),m.push(x/r)}for(let x=1;x<=r;x++)for(let M=1;M<=a;M++){const w=(a+1)*x+M-1,S=(a+1)*(x-1)+M-1,_=(a+1)*(x-1)+M,I=(a+1)*x+M;u.push(w,S,I),u.push(S,_,I)}this.setIndex(u),this.setAttribute("position",new jt(h,3)),this.setAttribute("normal",new jt(d,3)),this.setAttribute("uv",new jt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hf(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Gs extends Qo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new _t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gg,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Sy extends Gs{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new De(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ct(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new _t(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new _t(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new _t(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Ey extends Qo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=y0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class My extends Qo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class ff extends pn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new _t(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Ty extends ff{constructor(e,t,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new _t(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Zu=new zt,mm=new V,gm=new V;class Ug{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new De(512,512),this.map=null,this.mapPass=null,this.matrix=new zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rf,this._frameExtents=new De(1,1),this._viewportCount=1,this._viewports=[new Lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;mm.setFromMatrixPosition(e.matrixWorld),t.position.copy(mm),gm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(gm),t.updateMatrixWorld(),Zu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zu),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Zu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const _m=new zt,Vo=new V,Ju=new V;class wy extends Ug{constructor(){super(new jn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new De(4,2),this._viewportCount=6,this._viewports=[new Lt(2,1,1,1),new Lt(0,1,1,1),new Lt(3,1,1,1),new Lt(1,1,1,1),new Lt(3,0,1,1),new Lt(1,0,1,1)],this._cubeDirections=[new V(1,0,0),new V(-1,0,0),new V(0,0,1),new V(0,0,-1),new V(0,1,0),new V(0,-1,0)],this._cubeUps=[new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,0,1),new V(0,0,-1)]}updateMatrices(e,t=0){const r=this.camera,a=this.matrix,l=e.distance||r.far;l!==r.far&&(r.far=l,r.updateProjectionMatrix()),Vo.setFromMatrixPosition(e.matrixWorld),r.position.copy(Vo),Ju.copy(r.position),Ju.add(this._cubeDirections[t]),r.up.copy(this._cubeUps[t]),r.lookAt(Ju),r.updateMatrixWorld(),a.makeTranslation(-Vo.x,-Vo.y,-Vo.z),_m.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_m)}}class Ay extends ff{constructor(e,t,r=0,a=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=a,this.shadow=new wy}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Ig extends Cg{constructor(e=-1,t=1,r=1,a=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=a,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,a,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=r-e,u=r+e,h=a+t,d=a-t;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,u=l+m*this.view.width,h-=g*this.view.offsetY,d=h-g*this.view.height}this.projectionMatrix.makeOrthographic(l,u,h,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Cy extends Ug{constructor(){super(new Ig(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class vm extends ff{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pn.DEFAULT_UP),this.updateMatrix(),this.target=new pn,this.shadow=new Cy}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ry extends jn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ym{constructor(e=1,t=0,r=0){return this.radius=e,this.phi=t,this.theta=r,this}set(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ct(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(ct(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Py extends is{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function xm(s,e,t,r){const a=by(r);switch(t){case cg:return s*e;case hg:return s*e;case fg:return s*e*2;case dg:return s*e/a.components*a.byteLength;case Jh:return s*e/a.components*a.byteLength;case pg:return s*e*2/a.components*a.byteLength;case Qh:return s*e*2/a.components*a.byteLength;case ug:return s*e*3/a.components*a.byteLength;case di:return s*e*4/a.components*a.byteLength;case ef:return s*e*4/a.components*a.byteLength;case Dl:case Nl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ul:case Il:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Sh:case Mh:return Math.max(s,16)*Math.max(e,8)/4;case xh:case Eh:return Math.max(s,8)*Math.max(e,8)/2;case Th:case wh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ah:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ch:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Rh:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Ph:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case bh:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Lh:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Dh:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Nh:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Uh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Ih:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Fh:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Oh:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case kh:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case zh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Bh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Fl:case Hh:case Vh:return Math.ceil(s/4)*Math.ceil(e/4)*16;case mg:case Gh:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Wh:case Xh:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function by(s){switch(s){case ji:case og:return{byteLength:1,components:1};case Ko:case ag:case $o:return{byteLength:2,components:1};case $h:case Zh:return{byteLength:2,components:4};case Qr:case Kh:case Wi:return{byteLength:4,components:1};case lg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qh);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Fg(){let s=null,e=!1,t=null,r=null;function a(l,u){t(l,u),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function Ly(s){const e=new WeakMap;function t(h,d){const m=h.array,g=h.usage,v=m.byteLength,y=s.createBuffer();s.bindBuffer(d,y),s.bufferData(d,m,g),h.onUploadCallback();let x;if(m instanceof Float32Array)x=s.FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?x=s.HALF_FLOAT:x=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)x=s.SHORT;else if(m instanceof Uint32Array)x=s.UNSIGNED_INT;else if(m instanceof Int32Array)x=s.INT;else if(m instanceof Int8Array)x=s.BYTE;else if(m instanceof Uint8Array)x=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)x=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:y,type:x,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:v}}function r(h,d,m){const g=d.array,v=d.updateRanges;if(s.bindBuffer(m,h),v.length===0)s.bufferSubData(m,0,g);else{v.sort((x,M)=>x.start-M.start);let y=0;for(let x=1;x<v.length;x++){const M=v[y],w=v[x];w.start<=M.start+M.count+1?M.count=Math.max(M.count,w.start+w.count-M.start):(++y,v[y]=w)}v.length=y+1;for(let x=0,M=v.length;x<M;x++){const w=v[x];s.bufferSubData(m,w.start*g.BYTES_PER_ELEMENT,g,w.start,w.count)}d.clearUpdateRanges()}d.onUploadCallback()}function a(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function l(h){h.isInterleavedBufferAttribute&&(h=h.data);const d=e.get(h);d&&(s.deleteBuffer(d.buffer),e.delete(h))}function u(h,d){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=e.get(h);(!g||g.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=e.get(h);if(m===void 0)e.set(h,t(h,d));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,h,d),m.version=h.version}}return{get:a,remove:l,update:u}}var Dy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ny=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Uy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Iy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Oy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ky=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,zy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,By=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Hy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Vy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Xy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Yy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,jy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,qy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ky=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$y=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Jy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Qy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ex=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,tx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,nx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ix=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,rx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ox=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ax=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lx="gl_FragColor = linearToOutputTexel( gl_FragColor );",cx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ux=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,hx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,dx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,px=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,mx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_x=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,xx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ex=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Mx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Tx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,wx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ax=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Rx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Px=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,bx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Lx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Dx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Nx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ux=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ix=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ox=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Hx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Xx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,qx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,$x=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Zx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,eS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,tS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,iS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,oS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,aS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,pS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,mS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,gS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,_S=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,yS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,SS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ES=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,MS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,TS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,wS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,AS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,CS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,RS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,PS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,bS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const LS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,DS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,US=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,kS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,zS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,BS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,HS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,VS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,WS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,XS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,YS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,$S=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,JS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,QS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,nE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,oE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,aE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,cE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,uE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ft={alphahash_fragment:Dy,alphahash_pars_fragment:Ny,alphamap_fragment:Uy,alphamap_pars_fragment:Iy,alphatest_fragment:Fy,alphatest_pars_fragment:Oy,aomap_fragment:ky,aomap_pars_fragment:zy,batching_pars_vertex:By,batching_vertex:Hy,begin_vertex:Vy,beginnormal_vertex:Gy,bsdfs:Wy,iridescence_fragment:Xy,bumpmap_pars_fragment:Yy,clipping_planes_fragment:jy,clipping_planes_pars_fragment:qy,clipping_planes_pars_vertex:Ky,clipping_planes_vertex:$y,color_fragment:Zy,color_pars_fragment:Jy,color_pars_vertex:Qy,color_vertex:ex,common:tx,cube_uv_reflection_fragment:nx,defaultnormal_vertex:ix,displacementmap_pars_vertex:rx,displacementmap_vertex:sx,emissivemap_fragment:ox,emissivemap_pars_fragment:ax,colorspace_fragment:lx,colorspace_pars_fragment:cx,envmap_fragment:ux,envmap_common_pars_fragment:hx,envmap_pars_fragment:fx,envmap_pars_vertex:dx,envmap_physical_pars_fragment:Tx,envmap_vertex:px,fog_vertex:mx,fog_pars_vertex:gx,fog_fragment:_x,fog_pars_fragment:vx,gradientmap_pars_fragment:yx,lightmap_pars_fragment:xx,lights_lambert_fragment:Sx,lights_lambert_pars_fragment:Ex,lights_pars_begin:Mx,lights_toon_fragment:wx,lights_toon_pars_fragment:Ax,lights_phong_fragment:Cx,lights_phong_pars_fragment:Rx,lights_physical_fragment:Px,lights_physical_pars_fragment:bx,lights_fragment_begin:Lx,lights_fragment_maps:Dx,lights_fragment_end:Nx,logdepthbuf_fragment:Ux,logdepthbuf_pars_fragment:Ix,logdepthbuf_pars_vertex:Fx,logdepthbuf_vertex:Ox,map_fragment:kx,map_pars_fragment:zx,map_particle_fragment:Bx,map_particle_pars_fragment:Hx,metalnessmap_fragment:Vx,metalnessmap_pars_fragment:Gx,morphinstance_vertex:Wx,morphcolor_vertex:Xx,morphnormal_vertex:Yx,morphtarget_pars_vertex:jx,morphtarget_vertex:qx,normal_fragment_begin:Kx,normal_fragment_maps:$x,normal_pars_fragment:Zx,normal_pars_vertex:Jx,normal_vertex:Qx,normalmap_pars_fragment:eS,clearcoat_normal_fragment_begin:tS,clearcoat_normal_fragment_maps:nS,clearcoat_pars_fragment:iS,iridescence_pars_fragment:rS,opaque_fragment:sS,packing:oS,premultiplied_alpha_fragment:aS,project_vertex:lS,dithering_fragment:cS,dithering_pars_fragment:uS,roughnessmap_fragment:hS,roughnessmap_pars_fragment:fS,shadowmap_pars_fragment:dS,shadowmap_pars_vertex:pS,shadowmap_vertex:mS,shadowmask_pars_fragment:gS,skinbase_vertex:_S,skinning_pars_vertex:vS,skinning_vertex:yS,skinnormal_vertex:xS,specularmap_fragment:SS,specularmap_pars_fragment:ES,tonemapping_fragment:MS,tonemapping_pars_fragment:TS,transmission_fragment:wS,transmission_pars_fragment:AS,uv_pars_fragment:CS,uv_pars_vertex:RS,uv_vertex:PS,worldpos_vertex:bS,background_vert:LS,background_frag:DS,backgroundCube_vert:NS,backgroundCube_frag:US,cube_vert:IS,cube_frag:FS,depth_vert:OS,depth_frag:kS,distanceRGBA_vert:zS,distanceRGBA_frag:BS,equirect_vert:HS,equirect_frag:VS,linedashed_vert:GS,linedashed_frag:WS,meshbasic_vert:XS,meshbasic_frag:YS,meshlambert_vert:jS,meshlambert_frag:qS,meshmatcap_vert:KS,meshmatcap_frag:$S,meshnormal_vert:ZS,meshnormal_frag:JS,meshphong_vert:QS,meshphong_frag:eE,meshphysical_vert:tE,meshphysical_frag:nE,meshtoon_vert:iE,meshtoon_frag:rE,points_vert:sE,points_frag:oE,shadow_vert:aE,shadow_frag:lE,sprite_vert:cE,sprite_frag:uE},be={common:{diffuse:{value:new _t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new _t(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},Si={basic:{uniforms:Cn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:Cn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new _t(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:Cn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new _t(0)},specular:{value:new _t(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:Cn([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new _t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:Cn([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new _t(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:Cn([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:Cn([be.points,be.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:Cn([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:Cn([be.common,be.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:Cn([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:Cn([be.sprite,be.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distanceRGBA:{uniforms:Cn([be.common,be.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distanceRGBA_vert,fragmentShader:ft.distanceRGBA_frag},shadow:{uniforms:Cn([be.lights,be.fog,{color:{value:new _t(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};Si.physical={uniforms:Cn([Si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new _t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new _t(0)},specularColor:{value:new _t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new De},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const Rl={r:0,b:0,g:0},Yr=new Ti,hE=new zt;function fE(s,e,t,r,a,l,u){const h=new _t(0);let d=l===!0?0:1,m,g,v=null,y=0,x=null;function M(U){let b=U.isScene===!0?U.background:null;return b&&b.isTexture&&(b=(U.backgroundBlurriness>0?t:e).get(b)),b}function w(U){let b=!1;const X=M(U);X===null?_(h,d):X&&X.isColor&&(_(X,1),b=!0);const k=s.xr.getEnvironmentBlendMode();k==="additive"?r.buffers.color.setClear(0,0,0,1,u):k==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(s.autoClear||b)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(U,b){const X=M(b);X&&(X.isCubeTexture||X.mapping===Gl)?(g===void 0&&(g=new $t(new io(1,1,1),new Cr({name:"BackgroundCubeMaterial",uniforms:no(Si.backgroundCube.uniforms),vertexShader:Si.backgroundCube.vertexShader,fragmentShader:Si.backgroundCube.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(k,O,W){this.matrixWorld.copyPosition(W.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(g)),Yr.copy(b.backgroundRotation),Yr.x*=-1,Yr.y*=-1,Yr.z*=-1,X.isCubeTexture&&X.isRenderTargetTexture===!1&&(Yr.y*=-1,Yr.z*=-1),g.material.uniforms.envMap.value=X,g.material.uniforms.flipEnvMap.value=X.isCubeTexture&&X.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(hE.makeRotationFromEuler(Yr)),g.material.toneMapped=wt.getTransfer(X.colorSpace)!==Pt,(v!==X||y!==X.version||x!==s.toneMapping)&&(g.material.needsUpdate=!0,v=X,y=X.version,x=s.toneMapping),g.layers.enableAll(),U.unshift(g,g.geometry,g.material,0,0,null)):X&&X.isTexture&&(m===void 0&&(m=new $t(new ea(2,2),new Cr({name:"BackgroundMaterial",uniforms:no(Si.background.uniforms),vertexShader:Si.background.vertexShader,fragmentShader:Si.background.fragmentShader,side:Ar,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=X,m.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,m.material.toneMapped=wt.getTransfer(X.colorSpace)!==Pt,X.matrixAutoUpdate===!0&&X.updateMatrix(),m.material.uniforms.uvTransform.value.copy(X.matrix),(v!==X||y!==X.version||x!==s.toneMapping)&&(m.material.needsUpdate=!0,v=X,y=X.version,x=s.toneMapping),m.layers.enableAll(),U.unshift(m,m.geometry,m.material,0,0,null))}function _(U,b){U.getRGB(Rl,Ag(s)),r.buffers.color.setClear(Rl.r,Rl.g,Rl.b,b,u)}function I(){g!==void 0&&(g.geometry.dispose(),g.material.dispose()),m!==void 0&&(m.geometry.dispose(),m.material.dispose())}return{getClearColor:function(){return h},setClearColor:function(U,b=1){h.set(U),d=b,_(h,d)},getClearAlpha:function(){return d},setClearAlpha:function(U){d=U,_(h,d)},render:w,addToRenderList:S,dispose:I}}function dE(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=y(null);let l=a,u=!1;function h(R,B,ee,J,ue){let he=!1;const ce=v(J,ee,B);l!==ce&&(l=ce,m(l.object)),he=x(R,J,ee,ue),he&&M(R,J,ee,ue),ue!==null&&e.update(ue,s.ELEMENT_ARRAY_BUFFER),(he||u)&&(u=!1,b(R,B,ee,J),ue!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ue).buffer))}function d(){return s.createVertexArray()}function m(R){return s.bindVertexArray(R)}function g(R){return s.deleteVertexArray(R)}function v(R,B,ee){const J=ee.wireframe===!0;let ue=r[R.id];ue===void 0&&(ue={},r[R.id]=ue);let he=ue[B.id];he===void 0&&(he={},ue[B.id]=he);let ce=he[J];return ce===void 0&&(ce=y(d()),he[J]=ce),ce}function y(R){const B=[],ee=[],J=[];for(let ue=0;ue<t;ue++)B[ue]=0,ee[ue]=0,J[ue]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:ee,attributeDivisors:J,object:R,attributes:{},index:null}}function x(R,B,ee,J){const ue=l.attributes,he=B.attributes;let ce=0;const ae=ee.getAttributes();for(const D in ae)if(ae[D].location>=0){const re=ue[D];let F=he[D];if(F===void 0&&(D==="instanceMatrix"&&R.instanceMatrix&&(F=R.instanceMatrix),D==="instanceColor"&&R.instanceColor&&(F=R.instanceColor)),re===void 0||re.attribute!==F||F&&re.data!==F.data)return!0;ce++}return l.attributesNum!==ce||l.index!==J}function M(R,B,ee,J){const ue={},he=B.attributes;let ce=0;const ae=ee.getAttributes();for(const D in ae)if(ae[D].location>=0){let re=he[D];re===void 0&&(D==="instanceMatrix"&&R.instanceMatrix&&(re=R.instanceMatrix),D==="instanceColor"&&R.instanceColor&&(re=R.instanceColor));const F={};F.attribute=re,re&&re.data&&(F.data=re.data),ue[D]=F,ce++}l.attributes=ue,l.attributesNum=ce,l.index=J}function w(){const R=l.newAttributes;for(let B=0,ee=R.length;B<ee;B++)R[B]=0}function S(R){_(R,0)}function _(R,B){const ee=l.newAttributes,J=l.enabledAttributes,ue=l.attributeDivisors;ee[R]=1,J[R]===0&&(s.enableVertexAttribArray(R),J[R]=1),ue[R]!==B&&(s.vertexAttribDivisor(R,B),ue[R]=B)}function I(){const R=l.newAttributes,B=l.enabledAttributes;for(let ee=0,J=B.length;ee<J;ee++)B[ee]!==R[ee]&&(s.disableVertexAttribArray(ee),B[ee]=0)}function U(R,B,ee,J,ue,he,ce){ce===!0?s.vertexAttribIPointer(R,B,ee,ue,he):s.vertexAttribPointer(R,B,ee,J,ue,he)}function b(R,B,ee,J){w();const ue=J.attributes,he=ee.getAttributes(),ce=B.defaultAttributeValues;for(const ae in he){const D=he[ae];if(D.location>=0){let oe=ue[ae];if(oe===void 0&&(ae==="instanceMatrix"&&R.instanceMatrix&&(oe=R.instanceMatrix),ae==="instanceColor"&&R.instanceColor&&(oe=R.instanceColor)),oe!==void 0){const re=oe.normalized,F=oe.itemSize,se=e.get(oe);if(se===void 0)continue;const Ne=se.buffer,te=se.type,de=se.bytesPerElement,xe=te===s.INT||te===s.UNSIGNED_INT||oe.gpuType===Kh;if(oe.isInterleavedBufferAttribute){const ge=oe.data,we=ge.stride,Ae=oe.offset;if(ge.isInstancedInterleavedBuffer){for(let Xe=0;Xe<D.locationSize;Xe++)_(D.location+Xe,ge.meshPerAttribute);R.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let Xe=0;Xe<D.locationSize;Xe++)S(D.location+Xe);s.bindBuffer(s.ARRAY_BUFFER,Ne);for(let Xe=0;Xe<D.locationSize;Xe++)U(D.location+Xe,F/D.locationSize,te,re,we*de,(Ae+F/D.locationSize*Xe)*de,xe)}else{if(oe.isInstancedBufferAttribute){for(let ge=0;ge<D.locationSize;ge++)_(D.location+ge,oe.meshPerAttribute);R.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ge=0;ge<D.locationSize;ge++)S(D.location+ge);s.bindBuffer(s.ARRAY_BUFFER,Ne);for(let ge=0;ge<D.locationSize;ge++)U(D.location+ge,F/D.locationSize,te,re,F*de,F/D.locationSize*ge*de,xe)}}else if(ce!==void 0){const re=ce[ae];if(re!==void 0)switch(re.length){case 2:s.vertexAttrib2fv(D.location,re);break;case 3:s.vertexAttrib3fv(D.location,re);break;case 4:s.vertexAttrib4fv(D.location,re);break;default:s.vertexAttrib1fv(D.location,re)}}}}I()}function X(){W();for(const R in r){const B=r[R];for(const ee in B){const J=B[ee];for(const ue in J)g(J[ue].object),delete J[ue];delete B[ee]}delete r[R]}}function k(R){if(r[R.id]===void 0)return;const B=r[R.id];for(const ee in B){const J=B[ee];for(const ue in J)g(J[ue].object),delete J[ue];delete B[ee]}delete r[R.id]}function O(R){for(const B in r){const ee=r[B];if(ee[R.id]===void 0)continue;const J=ee[R.id];for(const ue in J)g(J[ue].object),delete J[ue];delete ee[R.id]}}function W(){P(),u=!0,l!==a&&(l=a,m(l.object))}function P(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:h,reset:W,resetDefaultState:P,dispose:X,releaseStatesOfGeometry:k,releaseStatesOfProgram:O,initAttributes:w,enableAttribute:S,disableUnusedAttributes:I}}function pE(s,e,t){let r;function a(m){r=m}function l(m,g){s.drawArrays(r,m,g),t.update(g,r,1)}function u(m,g,v){v!==0&&(s.drawArraysInstanced(r,m,g,v),t.update(g,r,v))}function h(m,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,g,0,v);let x=0;for(let M=0;M<v;M++)x+=g[M];t.update(x,r,1)}function d(m,g,v,y){if(v===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let M=0;M<m.length;M++)u(m[M],g[M],y[M]);else{x.multiDrawArraysInstancedWEBGL(r,m,0,g,0,y,0,v);let M=0;for(let w=0;w<v;w++)M+=g[w]*y[w];t.update(M,r,1)}}this.setMode=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function mE(s,e,t,r){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function u(O){return!(O!==di&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(O){const W=O===$o&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==ji&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Wi&&!W)}function d(O){if(O==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=t.precision!==void 0?t.precision:"highp";const g=d(m);g!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const v=t.logarithmicDepthBuffer===!0,y=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),x=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),I=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),U=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),X=M>0,k=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:d,textureFormatReadable:u,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:v,reverseDepthBuffer:y,maxTextures:x,maxVertexTextures:M,maxTextureSize:w,maxCubemapSize:S,maxAttributes:_,maxVertexUniforms:I,maxVaryings:U,maxFragmentUniforms:b,vertexTextures:X,maxSamples:k}}function gE(s){const e=this;let t=null,r=0,a=!1,l=!1;const u=new Er,h=new lt,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(v,y){const x=v.length!==0||y||r!==0||a;return a=y,r=v.length,x},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,y){t=g(v,y,0)},this.setState=function(v,y,x){const M=v.clippingPlanes,w=v.clipIntersection,S=v.clipShadows,_=s.get(v);if(!a||M===null||M.length===0||l&&!S)l?g(null):m();else{const I=l?0:r,U=I*4;let b=_.clippingState||null;d.value=b,b=g(M,y,U,x);for(let X=0;X!==U;++X)b[X]=t[X];_.clippingState=b,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=I}};function m(){d.value!==t&&(d.value=t,d.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(v,y,x,M){const w=v!==null?v.length:0;let S=null;if(w!==0){if(S=d.value,M!==!0||S===null){const _=x+w*4,I=y.matrixWorldInverse;h.getNormalMatrix(I),(S===null||S.length<_)&&(S=new Float32Array(_));for(let U=0,b=x;U!==w;++U,b+=4)u.copy(v[U]).applyMatrix4(I,h),u.normal.toArray(S,b),S[b+3]=u.constant}d.value=S,d.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,S}}function _E(s){let e=new WeakMap;function t(u,h){return h===gh?u.mapping=Zs:h===_h&&(u.mapping=Js),u}function r(u){if(u&&u.isTexture){const h=u.mapping;if(h===gh||h===_h)if(e.has(u)){const d=e.get(u).texture;return t(d,u.mapping)}else{const d=u.image;if(d&&d.height>0){const m=new ny(d.height);return m.fromEquirectangularTexture(s,u),e.set(u,m),u.addEventListener("dispose",a),t(m.texture,u.mapping)}else return null}}return u}function a(u){const h=u.target;h.removeEventListener("dispose",a);const d=e.get(h);d!==void 0&&(e.delete(h),d.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}const Xs=4,Sm=[.125,.215,.35,.446,.526,.582],$r=20,Qu=new Ig,Em=new _t;let eh=null,th=0,nh=0,ih=!1;const qr=(1+Math.sqrt(5))/2,Hs=1/qr,Mm=[new V(-qr,Hs,0),new V(qr,Hs,0),new V(-Hs,0,qr),new V(Hs,0,qr),new V(0,qr,-Hs),new V(0,qr,Hs),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)];class Tm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,a=100){eh=this._renderer.getRenderTarget(),th=this._renderer.getActiveCubeFace(),nh=this._renderer.getActiveMipmapLevel(),ih=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,a,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Am(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(eh,th,nh),this._renderer.xr.enabled=ih,e.scissorTest=!1,Pl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zs||e.mapping===Js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),eh=this._renderer.getRenderTarget(),th=this._renderer.getActiveCubeFace(),nh=this._renderer.getActiveMipmapLevel(),ih=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Ei,minFilter:Ei,generateMipmaps:!1,type:$o,format:di,colorSpace:to,depthBuffer:!1},a=wm(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wm(e,t,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=vE(l)),this._blurMaterial=yE(l,e,t)}return a}_compileMaterial(e){const t=new $t(this._lodPlanes[0],e);this._renderer.compile(t,Qu)}_sceneToCubeUV(e,t,r,a){const h=new jn(90,1,t,r),d=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,y=g.toneMapping;g.getClearColor(Em),g.toneMapping=wr,g.autoClear=!1;const x=new nf({name:"PMREM.Background",side:Bn,depthWrite:!1,depthTest:!1}),M=new $t(new io,x);let w=!1;const S=e.background;S?S.isColor&&(x.color.copy(S),e.background=null,w=!0):(x.color.copy(Em),w=!0);for(let _=0;_<6;_++){const I=_%3;I===0?(h.up.set(0,d[_],0),h.lookAt(m[_],0,0)):I===1?(h.up.set(0,0,d[_]),h.lookAt(0,m[_],0)):(h.up.set(0,d[_],0),h.lookAt(0,0,m[_]));const U=this._cubeSize;Pl(a,I*U,_>2?U:0,U,U),g.setRenderTarget(a),w&&g.render(M,h),g.render(e,h)}M.geometry.dispose(),M.material.dispose(),g.toneMapping=y,g.autoClear=v,e.background=S}_textureToCubeUV(e,t){const r=this._renderer,a=e.mapping===Zs||e.mapping===Js;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Am());const l=a?this._cubemapMaterial:this._equirectMaterial,u=new $t(this._lodPlanes[0],l),h=l.uniforms;h.envMap.value=e;const d=this._cubeSize;Pl(t,0,0,3*d,2*d),r.setRenderTarget(t),r.render(u,Qu)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let l=1;l<a;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),h=Mm[(a-l-1)%Mm.length];this._blur(e,l-1,l,u,h)}t.autoClear=r}_blur(e,t,r,a,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,a,"latitudinal",l),this._halfBlur(u,e,r,r,a,"longitudinal",l)}_halfBlur(e,t,r,a,l,u,h){const d=this._renderer,m=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new $t(this._lodPlanes[a],m),y=m.uniforms,x=this._sizeLods[r]-1,M=isFinite(l)?Math.PI/(2*x):2*Math.PI/(2*$r-1),w=l/M,S=isFinite(l)?1+Math.floor(g*w):$r;S>$r&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${$r}`);const _=[];let I=0;for(let O=0;O<$r;++O){const W=O/w,P=Math.exp(-W*W/2);_.push(P),O===0?I+=P:O<S&&(I+=2*P)}for(let O=0;O<_.length;O++)_[O]=_[O]/I;y.envMap.value=e.texture,y.samples.value=S,y.weights.value=_,y.latitudinal.value=u==="latitudinal",h&&(y.poleAxis.value=h);const{_lodMax:U}=this;y.dTheta.value=M,y.mipInt.value=U-r;const b=this._sizeLods[a],X=3*b*(a>U-Xs?a-U+Xs:0),k=4*(this._cubeSize-b);Pl(t,X,k,3*b,2*b),d.setRenderTarget(t),d.render(v,Qu)}}function vE(s){const e=[],t=[],r=[];let a=s;const l=s-Xs+1+Sm.length;for(let u=0;u<l;u++){const h=Math.pow(2,a);t.push(h);let d=1/h;u>s-Xs?d=Sm[u-s+Xs-1]:u===0&&(d=0),r.push(d);const m=1/(h-2),g=-m,v=1+m,y=[g,g,v,g,v,v,g,g,v,v,g,v],x=6,M=6,w=3,S=2,_=1,I=new Float32Array(w*M*x),U=new Float32Array(S*M*x),b=new Float32Array(_*M*x);for(let k=0;k<x;k++){const O=k%3*2/3-1,W=k>2?0:-1,P=[O,W,0,O+2/3,W,0,O+2/3,W+1,0,O,W,0,O+2/3,W+1,0,O,W+1,0];I.set(P,w*M*k),U.set(y,S*M*k);const R=[k,k,k,k,k,k];b.set(R,_*M*k)}const X=new ni;X.setAttribute("position",new Mi(I,w)),X.setAttribute("uv",new Mi(U,S)),X.setAttribute("faceIndex",new Mi(b,_)),e.push(X),a>Xs&&a--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function wm(s,e,t){const r=new es(s,e,t);return r.texture.mapping=Gl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Pl(s,e,t,r,a){s.viewport.set(e,t,r,a),s.scissor.set(e,t,r,a)}function yE(s,e,t){const r=new Float32Array($r),a=new V(0,1,0);return new Cr({name:"SphericalGaussianBlur",defines:{n:$r,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:df(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Tr,depthTest:!1,depthWrite:!1})}function Am(){return new Cr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:df(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Tr,depthTest:!1,depthWrite:!1})}function Cm(){return new Cr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:df(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Tr,depthTest:!1,depthWrite:!1})}function df(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function xE(s){let e=new WeakMap,t=null;function r(h){if(h&&h.isTexture){const d=h.mapping,m=d===gh||d===_h,g=d===Zs||d===Js;if(m||g){let v=e.get(h);const y=v!==void 0?v.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==y)return t===null&&(t=new Tm(s)),v=m?t.fromEquirectangular(h,v):t.fromCubemap(h,v),v.texture.pmremVersion=h.pmremVersion,e.set(h,v),v.texture;if(v!==void 0)return v.texture;{const x=h.image;return m&&x&&x.height>0||g&&x&&a(x)?(t===null&&(t=new Tm(s)),v=m?t.fromEquirectangular(h):t.fromCubemap(h),v.texture.pmremVersion=h.pmremVersion,e.set(h,v),h.addEventListener("dispose",l),v.texture):null}}}return h}function a(h){let d=0;const m=6;for(let g=0;g<m;g++)h[g]!==void 0&&d++;return d===m}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:u}}function SE(s){const e={};function t(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const a=t(r);return a===null&&Vs("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function EE(s,e,t,r){const a={},l=new WeakMap;function u(v){const y=v.target;y.index!==null&&e.remove(y.index);for(const M in y.attributes)e.remove(y.attributes[M]);y.removeEventListener("dispose",u),delete a[y.id];const x=l.get(y);x&&(e.remove(x),l.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,t.memory.geometries--}function h(v,y){return a[y.id]===!0||(y.addEventListener("dispose",u),a[y.id]=!0,t.memory.geometries++),y}function d(v){const y=v.attributes;for(const x in y)e.update(y[x],s.ARRAY_BUFFER)}function m(v){const y=[],x=v.index,M=v.attributes.position;let w=0;if(x!==null){const I=x.array;w=x.version;for(let U=0,b=I.length;U<b;U+=3){const X=I[U+0],k=I[U+1],O=I[U+2];y.push(X,k,k,O,O,X)}}else if(M!==void 0){const I=M.array;w=M.version;for(let U=0,b=I.length/3-1;U<b;U+=3){const X=U+0,k=U+1,O=U+2;y.push(X,k,k,O,O,X)}}else return;const S=new(vg(y)?wg:Tg)(y,1);S.version=w;const _=l.get(v);_&&e.remove(_),l.set(v,S)}function g(v){const y=l.get(v);if(y){const x=v.index;x!==null&&y.version<x.version&&m(v)}else m(v);return l.get(v)}return{get:h,update:d,getWireframeAttribute:g}}function ME(s,e,t){let r;function a(y){r=y}let l,u;function h(y){l=y.type,u=y.bytesPerElement}function d(y,x){s.drawElements(r,x,l,y*u),t.update(x,r,1)}function m(y,x,M){M!==0&&(s.drawElementsInstanced(r,x,l,y*u,M),t.update(x,r,M))}function g(y,x,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,x,0,l,y,0,M);let S=0;for(let _=0;_<M;_++)S+=x[_];t.update(S,r,1)}function v(y,x,M,w){if(M===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let _=0;_<y.length;_++)m(y[_]/u,x[_],w[_]);else{S.multiDrawElementsInstancedWEBGL(r,x,0,l,y,0,w,0,M);let _=0;for(let I=0;I<M;I++)_+=x[I]*w[I];t.update(_,r,1)}}this.setMode=a,this.setIndex=h,this.render=d,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function TE(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,h){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=h*(l/3);break;case s.LINES:t.lines+=h*(l/2);break;case s.LINE_STRIP:t.lines+=h*(l-1);break;case s.LINE_LOOP:t.lines+=h*l;break;case s.POINTS:t.points+=h*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:r}}function wE(s,e,t){const r=new WeakMap,a=new Lt;function l(u,h,d){const m=u.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=g!==void 0?g.length:0;let y=r.get(h);if(y===void 0||y.count!==v){let R=function(){W.dispose(),r.delete(h),h.removeEventListener("dispose",R)};var x=R;y!==void 0&&y.texture.dispose();const M=h.morphAttributes.position!==void 0,w=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,_=h.morphAttributes.position||[],I=h.morphAttributes.normal||[],U=h.morphAttributes.color||[];let b=0;M===!0&&(b=1),w===!0&&(b=2),S===!0&&(b=3);let X=h.attributes.position.count*b,k=1;X>e.maxTextureSize&&(k=Math.ceil(X/e.maxTextureSize),X=e.maxTextureSize);const O=new Float32Array(X*k*4*v),W=new xg(O,X,k,v);W.type=Wi,W.needsUpdate=!0;const P=b*4;for(let B=0;B<v;B++){const ee=_[B],J=I[B],ue=U[B],he=X*k*4*B;for(let ce=0;ce<ee.count;ce++){const ae=ce*P;M===!0&&(a.fromBufferAttribute(ee,ce),O[he+ae+0]=a.x,O[he+ae+1]=a.y,O[he+ae+2]=a.z,O[he+ae+3]=0),w===!0&&(a.fromBufferAttribute(J,ce),O[he+ae+4]=a.x,O[he+ae+5]=a.y,O[he+ae+6]=a.z,O[he+ae+7]=0),S===!0&&(a.fromBufferAttribute(ue,ce),O[he+ae+8]=a.x,O[he+ae+9]=a.y,O[he+ae+10]=a.z,O[he+ae+11]=ue.itemSize===4?a.w:1)}}y={count:v,texture:W,size:new De(X,k)},r.set(h,y),h.addEventListener("dispose",R)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)d.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let M=0;for(let S=0;S<m.length;S++)M+=m[S];const w=h.morphTargetsRelative?1:1-M;d.getUniforms().setValue(s,"morphTargetBaseInfluence",w),d.getUniforms().setValue(s,"morphTargetInfluences",m)}d.getUniforms().setValue(s,"morphTargetsTexture",y.texture,t),d.getUniforms().setValue(s,"morphTargetsTextureSize",y.size)}return{update:l}}function AE(s,e,t,r){let a=new WeakMap;function l(d){const m=r.render.frame,g=d.geometry,v=e.get(d,g);if(a.get(v)!==m&&(e.update(v),a.set(v,m)),d.isInstancedMesh&&(d.hasEventListener("dispose",h)===!1&&d.addEventListener("dispose",h),a.get(d)!==m&&(t.update(d.instanceMatrix,s.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,s.ARRAY_BUFFER),a.set(d,m))),d.isSkinnedMesh){const y=d.skeleton;a.get(y)!==m&&(y.update(),a.set(y,m))}return v}function u(){a=new WeakMap}function h(d){const m=d.target;m.removeEventListener("dispose",h),t.remove(m.instanceMatrix),m.instanceColor!==null&&t.remove(m.instanceColor)}return{update:l,dispose:u}}const Og=new Pn,Rm=new Pg(1,1),kg=new xg,zg=new B0,Bg=new Rg,Pm=[],bm=[],Lm=new Float32Array(16),Dm=new Float32Array(9),Nm=new Float32Array(4);function ro(s,e,t){const r=s[0];if(r<=0||r>0)return s;const a=e*t;let l=Pm[a];if(l===void 0&&(l=new Float32Array(a),Pm[a]=l),e!==0){r.toArray(l,0);for(let u=1,h=0;u!==e;++u)h+=t,s[u].toArray(l,h)}return l}function nn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function rn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function Wl(s,e){let t=bm[e];t===void 0&&(t=new Int32Array(e),bm[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function CE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function RE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;s.uniform2fv(this.addr,e),rn(t,e)}}function PE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(nn(t,e))return;s.uniform3fv(this.addr,e),rn(t,e)}}function bE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;s.uniform4fv(this.addr,e),rn(t,e)}}function LE(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(nn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,r))return;Nm.set(r),s.uniformMatrix2fv(this.addr,!1,Nm),rn(t,r)}}function DE(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(nn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,r))return;Dm.set(r),s.uniformMatrix3fv(this.addr,!1,Dm),rn(t,r)}}function NE(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(nn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,r))return;Lm.set(r),s.uniformMatrix4fv(this.addr,!1,Lm),rn(t,r)}}function UE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function IE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;s.uniform2iv(this.addr,e),rn(t,e)}}function FE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;s.uniform3iv(this.addr,e),rn(t,e)}}function OE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;s.uniform4iv(this.addr,e),rn(t,e)}}function kE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function zE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;s.uniform2uiv(this.addr,e),rn(t,e)}}function BE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;s.uniform3uiv(this.addr,e),rn(t,e)}}function HE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;s.uniform4uiv(this.addr,e),rn(t,e)}}function VE(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let l;this.type===s.SAMPLER_2D_SHADOW?(Rm.compareFunction=_g,l=Rm):l=Og,t.setTexture2D(e||l,a)}function GE(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture3D(e||zg,a)}function WE(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTextureCube(e||Bg,a)}function XE(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture2DArray(e||kg,a)}function YE(s){switch(s){case 5126:return CE;case 35664:return RE;case 35665:return PE;case 35666:return bE;case 35674:return LE;case 35675:return DE;case 35676:return NE;case 5124:case 35670:return UE;case 35667:case 35671:return IE;case 35668:case 35672:return FE;case 35669:case 35673:return OE;case 5125:return kE;case 36294:return zE;case 36295:return BE;case 36296:return HE;case 35678:case 36198:case 36298:case 36306:case 35682:return VE;case 35679:case 36299:case 36307:return GE;case 35680:case 36300:case 36308:case 36293:return WE;case 36289:case 36303:case 36311:case 36292:return XE}}function jE(s,e){s.uniform1fv(this.addr,e)}function qE(s,e){const t=ro(e,this.size,2);s.uniform2fv(this.addr,t)}function KE(s,e){const t=ro(e,this.size,3);s.uniform3fv(this.addr,t)}function $E(s,e){const t=ro(e,this.size,4);s.uniform4fv(this.addr,t)}function ZE(s,e){const t=ro(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function JE(s,e){const t=ro(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function QE(s,e){const t=ro(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function eM(s,e){s.uniform1iv(this.addr,e)}function tM(s,e){s.uniform2iv(this.addr,e)}function nM(s,e){s.uniform3iv(this.addr,e)}function iM(s,e){s.uniform4iv(this.addr,e)}function rM(s,e){s.uniform1uiv(this.addr,e)}function sM(s,e){s.uniform2uiv(this.addr,e)}function oM(s,e){s.uniform3uiv(this.addr,e)}function aM(s,e){s.uniform4uiv(this.addr,e)}function lM(s,e,t){const r=this.cache,a=e.length,l=Wl(t,a);nn(r,l)||(s.uniform1iv(this.addr,l),rn(r,l));for(let u=0;u!==a;++u)t.setTexture2D(e[u]||Og,l[u])}function cM(s,e,t){const r=this.cache,a=e.length,l=Wl(t,a);nn(r,l)||(s.uniform1iv(this.addr,l),rn(r,l));for(let u=0;u!==a;++u)t.setTexture3D(e[u]||zg,l[u])}function uM(s,e,t){const r=this.cache,a=e.length,l=Wl(t,a);nn(r,l)||(s.uniform1iv(this.addr,l),rn(r,l));for(let u=0;u!==a;++u)t.setTextureCube(e[u]||Bg,l[u])}function hM(s,e,t){const r=this.cache,a=e.length,l=Wl(t,a);nn(r,l)||(s.uniform1iv(this.addr,l),rn(r,l));for(let u=0;u!==a;++u)t.setTexture2DArray(e[u]||kg,l[u])}function fM(s){switch(s){case 5126:return jE;case 35664:return qE;case 35665:return KE;case 35666:return $E;case 35674:return ZE;case 35675:return JE;case 35676:return QE;case 5124:case 35670:return eM;case 35667:case 35671:return tM;case 35668:case 35672:return nM;case 35669:case 35673:return iM;case 5125:return rM;case 36294:return sM;case 36295:return oM;case 36296:return aM;case 35678:case 36198:case 36298:case 36306:case 35682:return lM;case 35679:case 36299:case 36307:return cM;case 35680:case 36300:case 36308:case 36293:return uM;case 36289:case 36303:case 36311:case 36292:return hM}}class dM{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=YE(t.type)}}class pM{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=fM(t.type)}}class mM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const a=this.seq;for(let l=0,u=a.length;l!==u;++l){const h=a[l];h.setValue(e,t[h.id],r)}}}const rh=/(\w+)(\])?(\[|\.)?/g;function Um(s,e){s.seq.push(e),s.map[e.id]=e}function gM(s,e,t){const r=s.name,a=r.length;for(rh.lastIndex=0;;){const l=rh.exec(r),u=rh.lastIndex;let h=l[1];const d=l[2]==="]",m=l[3];if(d&&(h=h|0),m===void 0||m==="["&&u+2===a){Um(t,m===void 0?new dM(h,s,e):new pM(h,s,e));break}else{let v=t.map[h];v===void 0&&(v=new mM(h),Um(t,v)),t=v}}}class kl{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const l=e.getActiveUniform(t,a),u=e.getUniformLocation(t,l.name);gM(l,u,this)}}setValue(e,t,r,a){const l=this.map[t];l!==void 0&&l.setValue(e,r,a)}setOptional(e,t,r){const a=t[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,t,r,a){for(let l=0,u=t.length;l!==u;++l){const h=t[l],d=r[h.id];d.needsUpdate!==!1&&h.setValue(e,d.value,a)}}static seqWithValue(e,t){const r=[];for(let a=0,l=e.length;a!==l;++a){const u=e[a];u.id in t&&r.push(u)}return r}}function Im(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const _M=37297;let vM=0;function yM(s,e){const t=s.split(`
`),r=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=a;u<l;u++){const h=u+1;r.push(`${h===e?">":" "} ${h}: ${t[u]}`)}return r.join(`
`)}const Fm=new lt;function xM(s){wt._getMatrix(Fm,wt.workingColorSpace,s);const e=`mat3( ${Fm.elements.map(t=>t.toFixed(4))} )`;switch(wt.getTransfer(s)){case zl:return[e,"LinearTransferOETF"];case Pt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Om(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const u=parseInt(l[1]);return t.toUpperCase()+`

`+a+`

`+yM(s.getShaderSource(e),u)}else return a}function SM(s,e){const t=xM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function EM(s,e){let t;switch(e){case f0:t="Linear";break;case d0:t="Reinhard";break;case p0:t="Cineon";break;case rg:t="ACESFilmic";break;case g0:t="AgX";break;case _0:t="Neutral";break;case m0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const bl=new V;function MM(){wt.getLuminanceCoefficients(bl);const s=bl.x.toFixed(4),e=bl.y.toFixed(4),t=bl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function TM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yo).join(`
`)}function wM(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function AM(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const l=s.getActiveAttrib(e,a),u=l.name;let h=1;l.type===s.FLOAT_MAT2&&(h=2),l.type===s.FLOAT_MAT3&&(h=3),l.type===s.FLOAT_MAT4&&(h=4),t[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:h}}return t}function Yo(s){return s!==""}function km(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const CM=/^[ \t]*#include +<([\w\d./]+)>/gm;function jh(s){return s.replace(CM,PM)}const RM=new Map;function PM(s,e){let t=ft[e];if(t===void 0){const r=RM.get(e);if(r!==void 0)t=ft[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return jh(t)}const bM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bm(s){return s.replace(bM,LM)}function LM(s,e,t,r){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function Hm(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function DM(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===tg?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===ng?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Vi&&(e="SHADOWMAP_TYPE_VSM"),e}function NM(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Zs:case Js:e="ENVMAP_TYPE_CUBE";break;case Gl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function UM(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Js:e="ENVMAP_MODE_REFRACTION";break}return e}function IM(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ig:e="ENVMAP_BLENDING_MULTIPLY";break;case u0:e="ENVMAP_BLENDING_MIX";break;case h0:e="ENVMAP_BLENDING_ADD";break}return e}function FM(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function OM(s,e,t,r){const a=s.getContext(),l=t.defines;let u=t.vertexShader,h=t.fragmentShader;const d=DM(t),m=NM(t),g=UM(t),v=IM(t),y=FM(t),x=TM(t),M=wM(l),w=a.createProgram();let S,_,I=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Yo).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Yo).join(`
`),_.length>0&&(_+=`
`)):(S=[Hm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yo).join(`
`),_=[Hm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.envMap?"#define "+g:"",t.envMap?"#define "+v:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wr?"#define TONE_MAPPING":"",t.toneMapping!==wr?ft.tonemapping_pars_fragment:"",t.toneMapping!==wr?EM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,SM("linearToOutputTexel",t.outputColorSpace),MM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Yo).join(`
`)),u=jh(u),u=km(u,t),u=zm(u,t),h=jh(h),h=km(h,t),h=zm(h,t),u=Bm(u),h=Bm(h),t.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,S=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",t.glslVersion===Kp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Kp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const U=I+S+u,b=I+_+h,X=Im(a,a.VERTEX_SHADER,U),k=Im(a,a.FRAGMENT_SHADER,b);a.attachShader(w,X),a.attachShader(w,k),t.index0AttributeName!==void 0?a.bindAttribLocation(w,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(w,0,"position"),a.linkProgram(w);function O(B){if(s.debug.checkShaderErrors){const ee=a.getProgramInfoLog(w).trim(),J=a.getShaderInfoLog(X).trim(),ue=a.getShaderInfoLog(k).trim();let he=!0,ce=!0;if(a.getProgramParameter(w,a.LINK_STATUS)===!1)if(he=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,w,X,k);else{const ae=Om(a,X,"vertex"),D=Om(a,k,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(w,a.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+ee+`
`+ae+`
`+D)}else ee!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ee):(J===""||ue==="")&&(ce=!1);ce&&(B.diagnostics={runnable:he,programLog:ee,vertexShader:{log:J,prefix:S},fragmentShader:{log:ue,prefix:_}})}a.deleteShader(X),a.deleteShader(k),W=new kl(a,w),P=AM(a,w)}let W;this.getUniforms=function(){return W===void 0&&O(this),W};let P;this.getAttributes=function(){return P===void 0&&O(this),P};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=a.getProgramParameter(w,_M)),R},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=vM++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=X,this.fragmentShader=k,this}let kM=0;class zM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(t),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(a)===!1&&(u.add(a),a.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new BM(e),t.set(e,r)),r}}class BM{constructor(e){this.id=kM++,this.code=e,this.usedTimes=0}}function HM(s,e,t,r,a,l,u){const h=new Eg,d=new zM,m=new Set,g=[],v=a.logarithmicDepthBuffer,y=a.vertexTextures;let x=a.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(P){return m.add(P),P===0?"uv":`uv${P}`}function S(P,R,B,ee,J){const ue=ee.fog,he=J.geometry,ce=P.isMeshStandardMaterial?ee.environment:null,ae=(P.isMeshStandardMaterial?t:e).get(P.envMap||ce),D=ae&&ae.mapping===Gl?ae.image.height:null,oe=M[P.type];P.precision!==null&&(x=a.getMaxPrecision(P.precision),x!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",x,"instead."));const re=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,F=re!==void 0?re.length:0;let se=0;he.morphAttributes.position!==void 0&&(se=1),he.morphAttributes.normal!==void 0&&(se=2),he.morphAttributes.color!==void 0&&(se=3);let Ne,te,de,xe;if(oe){const St=Si[oe];Ne=St.vertexShader,te=St.fragmentShader}else Ne=P.vertexShader,te=P.fragmentShader,d.update(P),de=d.getVertexShaderID(P),xe=d.getFragmentShaderID(P);const ge=s.getRenderTarget(),we=s.state.buffers.depth.getReversed(),Ae=J.isInstancedMesh===!0,Xe=J.isBatchedMesh===!0,vt=!!P.map,ot=!!P.matcap,Rt=!!ae,H=!!P.aoMap,Xt=!!P.lightMap,ut=!!P.bumpMap,ht=!!P.normalMap,Ke=!!P.displacementMap,At=!!P.emissiveMap,Ye=!!P.metalnessMap,L=!!P.roughnessMap,T=P.anisotropy>0,Q=P.clearcoat>0,me=P.dispersion>0,ve=P.iridescence>0,fe=P.sheen>0,je=P.transmission>0,Ce=T&&!!P.anisotropyMap,Oe=Q&&!!P.clearcoatMap,dt=Q&&!!P.clearcoatNormalMap,Me=Q&&!!P.clearcoatRoughnessMap,ze=ve&&!!P.iridescenceMap,Ze=ve&&!!P.iridescenceThicknessMap,tt=fe&&!!P.sheenColorMap,Be=fe&&!!P.sheenRoughnessMap,pt=!!P.specularMap,rt=!!P.specularColorMap,Ct=!!P.specularIntensityMap,Y=je&&!!P.transmissionMap,Re=je&&!!P.thicknessMap,le=!!P.gradientMap,pe=!!P.alphaMap,Ue=P.alphaTest>0,Le=!!P.alphaHash,st=!!P.extensions;let Ut=wr;P.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(Ut=s.toneMapping);const Jt={shaderID:oe,shaderType:P.type,shaderName:P.name,vertexShader:Ne,fragmentShader:te,defines:P.defines,customVertexShaderID:de,customFragmentShaderID:xe,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:x,batching:Xe,batchingColor:Xe&&J._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&J.instanceColor!==null,instancingMorph:Ae&&J.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:ge===null?s.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:to,alphaToCoverage:!!P.alphaToCoverage,map:vt,matcap:ot,envMap:Rt,envMapMode:Rt&&ae.mapping,envMapCubeUVHeight:D,aoMap:H,lightMap:Xt,bumpMap:ut,normalMap:ht,displacementMap:y&&Ke,emissiveMap:At,normalMapObjectSpace:ht&&P.normalMapType===S0,normalMapTangentSpace:ht&&P.normalMapType===gg,metalnessMap:Ye,roughnessMap:L,anisotropy:T,anisotropyMap:Ce,clearcoat:Q,clearcoatMap:Oe,clearcoatNormalMap:dt,clearcoatRoughnessMap:Me,dispersion:me,iridescence:ve,iridescenceMap:ze,iridescenceThicknessMap:Ze,sheen:fe,sheenColorMap:tt,sheenRoughnessMap:Be,specularMap:pt,specularColorMap:rt,specularIntensityMap:Ct,transmission:je,transmissionMap:Y,thicknessMap:Re,gradientMap:le,opaque:P.transparent===!1&&P.blending===js&&P.alphaToCoverage===!1,alphaMap:pe,alphaTest:Ue,alphaHash:Le,combine:P.combine,mapUv:vt&&w(P.map.channel),aoMapUv:H&&w(P.aoMap.channel),lightMapUv:Xt&&w(P.lightMap.channel),bumpMapUv:ut&&w(P.bumpMap.channel),normalMapUv:ht&&w(P.normalMap.channel),displacementMapUv:Ke&&w(P.displacementMap.channel),emissiveMapUv:At&&w(P.emissiveMap.channel),metalnessMapUv:Ye&&w(P.metalnessMap.channel),roughnessMapUv:L&&w(P.roughnessMap.channel),anisotropyMapUv:Ce&&w(P.anisotropyMap.channel),clearcoatMapUv:Oe&&w(P.clearcoatMap.channel),clearcoatNormalMapUv:dt&&w(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&w(P.clearcoatRoughnessMap.channel),iridescenceMapUv:ze&&w(P.iridescenceMap.channel),iridescenceThicknessMapUv:Ze&&w(P.iridescenceThicknessMap.channel),sheenColorMapUv:tt&&w(P.sheenColorMap.channel),sheenRoughnessMapUv:Be&&w(P.sheenRoughnessMap.channel),specularMapUv:pt&&w(P.specularMap.channel),specularColorMapUv:rt&&w(P.specularColorMap.channel),specularIntensityMapUv:Ct&&w(P.specularIntensityMap.channel),transmissionMapUv:Y&&w(P.transmissionMap.channel),thicknessMapUv:Re&&w(P.thicknessMap.channel),alphaMapUv:pe&&w(P.alphaMap.channel),vertexTangents:!!he.attributes.tangent&&(ht||T),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!he.attributes.uv&&(vt||pe),fog:!!ue,useFog:P.fog===!0,fogExp2:!!ue&&ue.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:we,skinning:J.isSkinnedMesh===!0,morphTargets:he.morphAttributes.position!==void 0,morphNormals:he.morphAttributes.normal!==void 0,morphColors:he.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:se,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:P.dithering,shadowMapEnabled:s.shadowMap.enabled&&B.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ut,decodeVideoTexture:vt&&P.map.isVideoTexture===!0&&wt.getTransfer(P.map.colorSpace)===Pt,decodeVideoTextureEmissive:At&&P.emissiveMap.isVideoTexture===!0&&wt.getTransfer(P.emissiveMap.colorSpace)===Pt,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===Gi,flipSided:P.side===Bn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:st&&P.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&P.extensions.multiDraw===!0||Xe)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return Jt.vertexUv1s=m.has(1),Jt.vertexUv2s=m.has(2),Jt.vertexUv3s=m.has(3),m.clear(),Jt}function _(P){const R=[];if(P.shaderID?R.push(P.shaderID):(R.push(P.customVertexShaderID),R.push(P.customFragmentShaderID)),P.defines!==void 0)for(const B in P.defines)R.push(B),R.push(P.defines[B]);return P.isRawShaderMaterial===!1&&(I(R,P),U(R,P),R.push(s.outputColorSpace)),R.push(P.customProgramCacheKey),R.join()}function I(P,R){P.push(R.precision),P.push(R.outputColorSpace),P.push(R.envMapMode),P.push(R.envMapCubeUVHeight),P.push(R.mapUv),P.push(R.alphaMapUv),P.push(R.lightMapUv),P.push(R.aoMapUv),P.push(R.bumpMapUv),P.push(R.normalMapUv),P.push(R.displacementMapUv),P.push(R.emissiveMapUv),P.push(R.metalnessMapUv),P.push(R.roughnessMapUv),P.push(R.anisotropyMapUv),P.push(R.clearcoatMapUv),P.push(R.clearcoatNormalMapUv),P.push(R.clearcoatRoughnessMapUv),P.push(R.iridescenceMapUv),P.push(R.iridescenceThicknessMapUv),P.push(R.sheenColorMapUv),P.push(R.sheenRoughnessMapUv),P.push(R.specularMapUv),P.push(R.specularColorMapUv),P.push(R.specularIntensityMapUv),P.push(R.transmissionMapUv),P.push(R.thicknessMapUv),P.push(R.combine),P.push(R.fogExp2),P.push(R.sizeAttenuation),P.push(R.morphTargetsCount),P.push(R.morphAttributeCount),P.push(R.numDirLights),P.push(R.numPointLights),P.push(R.numSpotLights),P.push(R.numSpotLightMaps),P.push(R.numHemiLights),P.push(R.numRectAreaLights),P.push(R.numDirLightShadows),P.push(R.numPointLightShadows),P.push(R.numSpotLightShadows),P.push(R.numSpotLightShadowsWithMaps),P.push(R.numLightProbes),P.push(R.shadowMapType),P.push(R.toneMapping),P.push(R.numClippingPlanes),P.push(R.numClipIntersection),P.push(R.depthPacking)}function U(P,R){h.disableAll(),R.supportsVertexTextures&&h.enable(0),R.instancing&&h.enable(1),R.instancingColor&&h.enable(2),R.instancingMorph&&h.enable(3),R.matcap&&h.enable(4),R.envMap&&h.enable(5),R.normalMapObjectSpace&&h.enable(6),R.normalMapTangentSpace&&h.enable(7),R.clearcoat&&h.enable(8),R.iridescence&&h.enable(9),R.alphaTest&&h.enable(10),R.vertexColors&&h.enable(11),R.vertexAlphas&&h.enable(12),R.vertexUv1s&&h.enable(13),R.vertexUv2s&&h.enable(14),R.vertexUv3s&&h.enable(15),R.vertexTangents&&h.enable(16),R.anisotropy&&h.enable(17),R.alphaHash&&h.enable(18),R.batching&&h.enable(19),R.dispersion&&h.enable(20),R.batchingColor&&h.enable(21),P.push(h.mask),h.disableAll(),R.fog&&h.enable(0),R.useFog&&h.enable(1),R.flatShading&&h.enable(2),R.logarithmicDepthBuffer&&h.enable(3),R.reverseDepthBuffer&&h.enable(4),R.skinning&&h.enable(5),R.morphTargets&&h.enable(6),R.morphNormals&&h.enable(7),R.morphColors&&h.enable(8),R.premultipliedAlpha&&h.enable(9),R.shadowMapEnabled&&h.enable(10),R.doubleSided&&h.enable(11),R.flipSided&&h.enable(12),R.useDepthPacking&&h.enable(13),R.dithering&&h.enable(14),R.transmission&&h.enable(15),R.sheen&&h.enable(16),R.opaque&&h.enable(17),R.pointsUvs&&h.enable(18),R.decodeVideoTexture&&h.enable(19),R.decodeVideoTextureEmissive&&h.enable(20),R.alphaToCoverage&&h.enable(21),P.push(h.mask)}function b(P){const R=M[P.type];let B;if(R){const ee=Si[R];B=J0.clone(ee.uniforms)}else B=P.uniforms;return B}function X(P,R){let B;for(let ee=0,J=g.length;ee<J;ee++){const ue=g[ee];if(ue.cacheKey===R){B=ue,++B.usedTimes;break}}return B===void 0&&(B=new OM(s,R,P,l),g.push(B)),B}function k(P){if(--P.usedTimes===0){const R=g.indexOf(P);g[R]=g[g.length-1],g.pop(),P.destroy()}}function O(P){d.remove(P)}function W(){d.dispose()}return{getParameters:S,getProgramCacheKey:_,getUniforms:b,acquireProgram:X,releaseProgram:k,releaseShaderCache:O,programs:g,dispose:W}}function VM(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let h=s.get(u);return h===void 0&&(h={},s.set(u,h)),h}function r(u){s.delete(u)}function a(u,h,d){s.get(u)[h]=d}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:a,dispose:l}}function GM(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Vm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Gm(){const s=[];let e=0;const t=[],r=[],a=[];function l(){e=0,t.length=0,r.length=0,a.length=0}function u(v,y,x,M,w,S){let _=s[e];return _===void 0?(_={id:v.id,object:v,geometry:y,material:x,groupOrder:M,renderOrder:v.renderOrder,z:w,group:S},s[e]=_):(_.id=v.id,_.object=v,_.geometry=y,_.material=x,_.groupOrder=M,_.renderOrder=v.renderOrder,_.z=w,_.group=S),e++,_}function h(v,y,x,M,w,S){const _=u(v,y,x,M,w,S);x.transmission>0?r.push(_):x.transparent===!0?a.push(_):t.push(_)}function d(v,y,x,M,w,S){const _=u(v,y,x,M,w,S);x.transmission>0?r.unshift(_):x.transparent===!0?a.unshift(_):t.unshift(_)}function m(v,y){t.length>1&&t.sort(v||GM),r.length>1&&r.sort(y||Vm),a.length>1&&a.sort(y||Vm)}function g(){for(let v=e,y=s.length;v<y;v++){const x=s[v];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:r,transparent:a,init:l,push:h,unshift:d,finish:g,sort:m}}function WM(){let s=new WeakMap;function e(r,a){const l=s.get(r);let u;return l===void 0?(u=new Gm,s.set(r,[u])):a>=l.length?(u=new Gm,l.push(u)):u=l[a],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function XM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new _t};break;case"SpotLight":t={position:new V,direction:new V,color:new _t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new _t,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new _t,groundColor:new _t};break;case"RectAreaLight":t={color:new _t,position:new V,halfWidth:new V,halfHeight:new V};break}return s[e.id]=t,t}}}function YM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let jM=0;function qM(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function KM(s){const e=new XM,t=YM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new V);const a=new V,l=new zt,u=new zt;function h(m){let g=0,v=0,y=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let x=0,M=0,w=0,S=0,_=0,I=0,U=0,b=0,X=0,k=0,O=0;m.sort(qM);for(let P=0,R=m.length;P<R;P++){const B=m[P],ee=B.color,J=B.intensity,ue=B.distance,he=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)g+=ee.r*J,v+=ee.g*J,y+=ee.b*J;else if(B.isLightProbe){for(let ce=0;ce<9;ce++)r.probe[ce].addScaledVector(B.sh.coefficients[ce],J);O++}else if(B.isDirectionalLight){const ce=e.get(B);if(ce.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const ae=B.shadow,D=t.get(B);D.shadowIntensity=ae.intensity,D.shadowBias=ae.bias,D.shadowNormalBias=ae.normalBias,D.shadowRadius=ae.radius,D.shadowMapSize=ae.mapSize,r.directionalShadow[x]=D,r.directionalShadowMap[x]=he,r.directionalShadowMatrix[x]=B.shadow.matrix,I++}r.directional[x]=ce,x++}else if(B.isSpotLight){const ce=e.get(B);ce.position.setFromMatrixPosition(B.matrixWorld),ce.color.copy(ee).multiplyScalar(J),ce.distance=ue,ce.coneCos=Math.cos(B.angle),ce.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),ce.decay=B.decay,r.spot[w]=ce;const ae=B.shadow;if(B.map&&(r.spotLightMap[X]=B.map,X++,ae.updateMatrices(B),B.castShadow&&k++),r.spotLightMatrix[w]=ae.matrix,B.castShadow){const D=t.get(B);D.shadowIntensity=ae.intensity,D.shadowBias=ae.bias,D.shadowNormalBias=ae.normalBias,D.shadowRadius=ae.radius,D.shadowMapSize=ae.mapSize,r.spotShadow[w]=D,r.spotShadowMap[w]=he,b++}w++}else if(B.isRectAreaLight){const ce=e.get(B);ce.color.copy(ee).multiplyScalar(J),ce.halfWidth.set(B.width*.5,0,0),ce.halfHeight.set(0,B.height*.5,0),r.rectArea[S]=ce,S++}else if(B.isPointLight){const ce=e.get(B);if(ce.color.copy(B.color).multiplyScalar(B.intensity),ce.distance=B.distance,ce.decay=B.decay,B.castShadow){const ae=B.shadow,D=t.get(B);D.shadowIntensity=ae.intensity,D.shadowBias=ae.bias,D.shadowNormalBias=ae.normalBias,D.shadowRadius=ae.radius,D.shadowMapSize=ae.mapSize,D.shadowCameraNear=ae.camera.near,D.shadowCameraFar=ae.camera.far,r.pointShadow[M]=D,r.pointShadowMap[M]=he,r.pointShadowMatrix[M]=B.shadow.matrix,U++}r.point[M]=ce,M++}else if(B.isHemisphereLight){const ce=e.get(B);ce.skyColor.copy(B.color).multiplyScalar(J),ce.groundColor.copy(B.groundColor).multiplyScalar(J),r.hemi[_]=ce,_++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=be.LTC_FLOAT_1,r.rectAreaLTC2=be.LTC_FLOAT_2):(r.rectAreaLTC1=be.LTC_HALF_1,r.rectAreaLTC2=be.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=y;const W=r.hash;(W.directionalLength!==x||W.pointLength!==M||W.spotLength!==w||W.rectAreaLength!==S||W.hemiLength!==_||W.numDirectionalShadows!==I||W.numPointShadows!==U||W.numSpotShadows!==b||W.numSpotMaps!==X||W.numLightProbes!==O)&&(r.directional.length=x,r.spot.length=w,r.rectArea.length=S,r.point.length=M,r.hemi.length=_,r.directionalShadow.length=I,r.directionalShadowMap.length=I,r.pointShadow.length=U,r.pointShadowMap.length=U,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=I,r.pointShadowMatrix.length=U,r.spotLightMatrix.length=b+X-k,r.spotLightMap.length=X,r.numSpotLightShadowsWithMaps=k,r.numLightProbes=O,W.directionalLength=x,W.pointLength=M,W.spotLength=w,W.rectAreaLength=S,W.hemiLength=_,W.numDirectionalShadows=I,W.numPointShadows=U,W.numSpotShadows=b,W.numSpotMaps=X,W.numLightProbes=O,r.version=jM++)}function d(m,g){let v=0,y=0,x=0,M=0,w=0;const S=g.matrixWorldInverse;for(let _=0,I=m.length;_<I;_++){const U=m[_];if(U.isDirectionalLight){const b=r.directional[v];b.direction.setFromMatrixPosition(U.matrixWorld),a.setFromMatrixPosition(U.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(S),v++}else if(U.isSpotLight){const b=r.spot[x];b.position.setFromMatrixPosition(U.matrixWorld),b.position.applyMatrix4(S),b.direction.setFromMatrixPosition(U.matrixWorld),a.setFromMatrixPosition(U.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(S),x++}else if(U.isRectAreaLight){const b=r.rectArea[M];b.position.setFromMatrixPosition(U.matrixWorld),b.position.applyMatrix4(S),u.identity(),l.copy(U.matrixWorld),l.premultiply(S),u.extractRotation(l),b.halfWidth.set(U.width*.5,0,0),b.halfHeight.set(0,U.height*.5,0),b.halfWidth.applyMatrix4(u),b.halfHeight.applyMatrix4(u),M++}else if(U.isPointLight){const b=r.point[y];b.position.setFromMatrixPosition(U.matrixWorld),b.position.applyMatrix4(S),y++}else if(U.isHemisphereLight){const b=r.hemi[w];b.direction.setFromMatrixPosition(U.matrixWorld),b.direction.transformDirection(S),w++}}}return{setup:h,setupView:d,state:r}}function Wm(s){const e=new KM(s),t=[],r=[];function a(g){m.camera=g,t.length=0,r.length=0}function l(g){t.push(g)}function u(g){r.push(g)}function h(){e.setup(t)}function d(g){e.setupView(t,g)}const m={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:h,setupLightsView:d,pushLight:l,pushShadow:u}}function $M(s){let e=new WeakMap;function t(a,l=0){const u=e.get(a);let h;return u===void 0?(h=new Wm(s),e.set(a,[h])):l>=u.length?(h=new Wm(s),u.push(h)):h=u[l],h}function r(){e=new WeakMap}return{get:t,dispose:r}}const ZM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,JM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function QM(s,e,t){let r=new rf;const a=new De,l=new De,u=new Lt,h=new Ey({depthPacking:x0}),d=new My,m={},g=t.maxTextureSize,v={[Ar]:Bn,[Bn]:Ar,[Gi]:Gi},y=new Cr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:ZM,fragmentShader:JM}),x=y.clone();x.defines.HORIZONTAL_PASS=1;const M=new ni;M.setAttribute("position",new Mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new $t(M,y),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tg;let _=this.type;this.render=function(k,O,W){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||k.length===0)return;const P=s.getRenderTarget(),R=s.getActiveCubeFace(),B=s.getActiveMipmapLevel(),ee=s.state;ee.setBlending(Tr),ee.buffers.color.setClear(1,1,1,1),ee.buffers.depth.setTest(!0),ee.setScissorTest(!1);const J=_!==Vi&&this.type===Vi,ue=_===Vi&&this.type!==Vi;for(let he=0,ce=k.length;he<ce;he++){const ae=k[he],D=ae.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",ae,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;a.copy(D.mapSize);const oe=D.getFrameExtents();if(a.multiply(oe),l.copy(D.mapSize),(a.x>g||a.y>g)&&(a.x>g&&(l.x=Math.floor(g/oe.x),a.x=l.x*oe.x,D.mapSize.x=l.x),a.y>g&&(l.y=Math.floor(g/oe.y),a.y=l.y*oe.y,D.mapSize.y=l.y)),D.map===null||J===!0||ue===!0){const F=this.type!==Vi?{minFilter:pi,magFilter:pi}:{};D.map!==null&&D.map.dispose(),D.map=new es(a.x,a.y,F),D.map.texture.name=ae.name+".shadowMap",D.camera.updateProjectionMatrix()}s.setRenderTarget(D.map),s.clear();const re=D.getViewportCount();for(let F=0;F<re;F++){const se=D.getViewport(F);u.set(l.x*se.x,l.y*se.y,l.x*se.z,l.y*se.w),ee.viewport(u),D.updateMatrices(ae,F),r=D.getFrustum(),b(O,W,D.camera,ae,this.type)}D.isPointLightShadow!==!0&&this.type===Vi&&I(D,W),D.needsUpdate=!1}_=this.type,S.needsUpdate=!1,s.setRenderTarget(P,R,B)};function I(k,O){const W=e.update(w);y.defines.VSM_SAMPLES!==k.blurSamples&&(y.defines.VSM_SAMPLES=k.blurSamples,x.defines.VSM_SAMPLES=k.blurSamples,y.needsUpdate=!0,x.needsUpdate=!0),k.mapPass===null&&(k.mapPass=new es(a.x,a.y)),y.uniforms.shadow_pass.value=k.map.texture,y.uniforms.resolution.value=k.mapSize,y.uniforms.radius.value=k.radius,s.setRenderTarget(k.mapPass),s.clear(),s.renderBufferDirect(O,null,W,y,w,null),x.uniforms.shadow_pass.value=k.mapPass.texture,x.uniforms.resolution.value=k.mapSize,x.uniforms.radius.value=k.radius,s.setRenderTarget(k.map),s.clear(),s.renderBufferDirect(O,null,W,x,w,null)}function U(k,O,W,P){let R=null;const B=W.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(B!==void 0)R=B;else if(R=W.isPointLight===!0?d:h,s.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0){const ee=R.uuid,J=O.uuid;let ue=m[ee];ue===void 0&&(ue={},m[ee]=ue);let he=ue[J];he===void 0&&(he=R.clone(),ue[J]=he,O.addEventListener("dispose",X)),R=he}if(R.visible=O.visible,R.wireframe=O.wireframe,P===Vi?R.side=O.shadowSide!==null?O.shadowSide:O.side:R.side=O.shadowSide!==null?O.shadowSide:v[O.side],R.alphaMap=O.alphaMap,R.alphaTest=O.alphaTest,R.map=O.map,R.clipShadows=O.clipShadows,R.clippingPlanes=O.clippingPlanes,R.clipIntersection=O.clipIntersection,R.displacementMap=O.displacementMap,R.displacementScale=O.displacementScale,R.displacementBias=O.displacementBias,R.wireframeLinewidth=O.wireframeLinewidth,R.linewidth=O.linewidth,W.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const ee=s.properties.get(R);ee.light=W}return R}function b(k,O,W,P,R){if(k.visible===!1)return;if(k.layers.test(O.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&R===Vi)&&(!k.frustumCulled||r.intersectsObject(k))){k.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,k.matrixWorld);const J=e.update(k),ue=k.material;if(Array.isArray(ue)){const he=J.groups;for(let ce=0,ae=he.length;ce<ae;ce++){const D=he[ce],oe=ue[D.materialIndex];if(oe&&oe.visible){const re=U(k,oe,P,R);k.onBeforeShadow(s,k,O,W,J,re,D),s.renderBufferDirect(W,null,J,re,k,D),k.onAfterShadow(s,k,O,W,J,re,D)}}}else if(ue.visible){const he=U(k,ue,P,R);k.onBeforeShadow(s,k,O,W,J,he,null),s.renderBufferDirect(W,null,J,he,k,null),k.onAfterShadow(s,k,O,W,J,he,null)}}const ee=k.children;for(let J=0,ue=ee.length;J<ue;J++)b(ee[J],O,W,P,R)}function X(k){k.target.removeEventListener("dispose",X);for(const W in m){const P=m[W],R=k.target.uuid;R in P&&(P[R].dispose(),delete P[R])}}}const e1={[ch]:uh,[hh]:ph,[fh]:mh,[$s]:dh,[uh]:ch,[ph]:hh,[mh]:fh,[dh]:$s};function t1(s,e){function t(){let Y=!1;const Re=new Lt;let le=null;const pe=new Lt(0,0,0,0);return{setMask:function(Ue){le!==Ue&&!Y&&(s.colorMask(Ue,Ue,Ue,Ue),le=Ue)},setLocked:function(Ue){Y=Ue},setClear:function(Ue,Le,st,Ut,Jt){Jt===!0&&(Ue*=Ut,Le*=Ut,st*=Ut),Re.set(Ue,Le,st,Ut),pe.equals(Re)===!1&&(s.clearColor(Ue,Le,st,Ut),pe.copy(Re))},reset:function(){Y=!1,le=null,pe.set(-1,0,0,0)}}}function r(){let Y=!1,Re=!1,le=null,pe=null,Ue=null;return{setReversed:function(Le){if(Re!==Le){const st=e.get("EXT_clip_control");Re?st.clipControlEXT(st.LOWER_LEFT_EXT,st.ZERO_TO_ONE_EXT):st.clipControlEXT(st.LOWER_LEFT_EXT,st.NEGATIVE_ONE_TO_ONE_EXT);const Ut=Ue;Ue=null,this.setClear(Ut)}Re=Le},getReversed:function(){return Re},setTest:function(Le){Le?ge(s.DEPTH_TEST):we(s.DEPTH_TEST)},setMask:function(Le){le!==Le&&!Y&&(s.depthMask(Le),le=Le)},setFunc:function(Le){if(Re&&(Le=e1[Le]),pe!==Le){switch(Le){case ch:s.depthFunc(s.NEVER);break;case uh:s.depthFunc(s.ALWAYS);break;case hh:s.depthFunc(s.LESS);break;case $s:s.depthFunc(s.LEQUAL);break;case fh:s.depthFunc(s.EQUAL);break;case dh:s.depthFunc(s.GEQUAL);break;case ph:s.depthFunc(s.GREATER);break;case mh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}pe=Le}},setLocked:function(Le){Y=Le},setClear:function(Le){Ue!==Le&&(Re&&(Le=1-Le),s.clearDepth(Le),Ue=Le)},reset:function(){Y=!1,le=null,pe=null,Ue=null,Re=!1}}}function a(){let Y=!1,Re=null,le=null,pe=null,Ue=null,Le=null,st=null,Ut=null,Jt=null;return{setTest:function(St){Y||(St?ge(s.STENCIL_TEST):we(s.STENCIL_TEST))},setMask:function(St){Re!==St&&!Y&&(s.stencilMask(St),Re=St)},setFunc:function(St,bn,Mn){(le!==St||pe!==bn||Ue!==Mn)&&(s.stencilFunc(St,bn,Mn),le=St,pe=bn,Ue=Mn)},setOp:function(St,bn,Mn){(Le!==St||st!==bn||Ut!==Mn)&&(s.stencilOp(St,bn,Mn),Le=St,st=bn,Ut=Mn)},setLocked:function(St){Y=St},setClear:function(St){Jt!==St&&(s.clearStencil(St),Jt=St)},reset:function(){Y=!1,Re=null,le=null,pe=null,Ue=null,Le=null,st=null,Ut=null,Jt=null}}}const l=new t,u=new r,h=new a,d=new WeakMap,m=new WeakMap;let g={},v={},y=new WeakMap,x=[],M=null,w=!1,S=null,_=null,I=null,U=null,b=null,X=null,k=null,O=new _t(0,0,0),W=0,P=!1,R=null,B=null,ee=null,J=null,ue=null;const he=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ce=!1,ae=0;const D=s.getParameter(s.VERSION);D.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(D)[1]),ce=ae>=1):D.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),ce=ae>=2);let oe=null,re={};const F=s.getParameter(s.SCISSOR_BOX),se=s.getParameter(s.VIEWPORT),Ne=new Lt().fromArray(F),te=new Lt().fromArray(se);function de(Y,Re,le,pe){const Ue=new Uint8Array(4),Le=s.createTexture();s.bindTexture(Y,Le),s.texParameteri(Y,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(Y,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let st=0;st<le;st++)Y===s.TEXTURE_3D||Y===s.TEXTURE_2D_ARRAY?s.texImage3D(Re,0,s.RGBA,1,1,pe,0,s.RGBA,s.UNSIGNED_BYTE,Ue):s.texImage2D(Re+st,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ue);return Le}const xe={};xe[s.TEXTURE_2D]=de(s.TEXTURE_2D,s.TEXTURE_2D,1),xe[s.TEXTURE_CUBE_MAP]=de(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[s.TEXTURE_2D_ARRAY]=de(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),xe[s.TEXTURE_3D]=de(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),h.setClear(0),ge(s.DEPTH_TEST),u.setFunc($s),ut(!1),ht(Gp),ge(s.CULL_FACE),H(Tr);function ge(Y){g[Y]!==!0&&(s.enable(Y),g[Y]=!0)}function we(Y){g[Y]!==!1&&(s.disable(Y),g[Y]=!1)}function Ae(Y,Re){return v[Y]!==Re?(s.bindFramebuffer(Y,Re),v[Y]=Re,Y===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=Re),Y===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=Re),!0):!1}function Xe(Y,Re){let le=x,pe=!1;if(Y){le=y.get(Re),le===void 0&&(le=[],y.set(Re,le));const Ue=Y.textures;if(le.length!==Ue.length||le[0]!==s.COLOR_ATTACHMENT0){for(let Le=0,st=Ue.length;Le<st;Le++)le[Le]=s.COLOR_ATTACHMENT0+Le;le.length=Ue.length,pe=!0}}else le[0]!==s.BACK&&(le[0]=s.BACK,pe=!0);pe&&s.drawBuffers(le)}function vt(Y){return M!==Y?(s.useProgram(Y),M=Y,!0):!1}const ot={[Kr]:s.FUNC_ADD,[jv]:s.FUNC_SUBTRACT,[qv]:s.FUNC_REVERSE_SUBTRACT};ot[Kv]=s.MIN,ot[$v]=s.MAX;const Rt={[Zv]:s.ZERO,[Jv]:s.ONE,[Qv]:s.SRC_COLOR,[ah]:s.SRC_ALPHA,[s0]:s.SRC_ALPHA_SATURATE,[i0]:s.DST_COLOR,[t0]:s.DST_ALPHA,[e0]:s.ONE_MINUS_SRC_COLOR,[lh]:s.ONE_MINUS_SRC_ALPHA,[r0]:s.ONE_MINUS_DST_COLOR,[n0]:s.ONE_MINUS_DST_ALPHA,[o0]:s.CONSTANT_COLOR,[a0]:s.ONE_MINUS_CONSTANT_COLOR,[l0]:s.CONSTANT_ALPHA,[c0]:s.ONE_MINUS_CONSTANT_ALPHA};function H(Y,Re,le,pe,Ue,Le,st,Ut,Jt,St){if(Y===Tr){w===!0&&(we(s.BLEND),w=!1);return}if(w===!1&&(ge(s.BLEND),w=!0),Y!==Yv){if(Y!==S||St!==P){if((_!==Kr||b!==Kr)&&(s.blendEquation(s.FUNC_ADD),_=Kr,b=Kr),St)switch(Y){case js:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Wp:s.blendFunc(s.ONE,s.ONE);break;case Xp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Yp:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}else switch(Y){case js:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Wp:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Xp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Yp:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}I=null,U=null,X=null,k=null,O.set(0,0,0),W=0,S=Y,P=St}return}Ue=Ue||Re,Le=Le||le,st=st||pe,(Re!==_||Ue!==b)&&(s.blendEquationSeparate(ot[Re],ot[Ue]),_=Re,b=Ue),(le!==I||pe!==U||Le!==X||st!==k)&&(s.blendFuncSeparate(Rt[le],Rt[pe],Rt[Le],Rt[st]),I=le,U=pe,X=Le,k=st),(Ut.equals(O)===!1||Jt!==W)&&(s.blendColor(Ut.r,Ut.g,Ut.b,Jt),O.copy(Ut),W=Jt),S=Y,P=!1}function Xt(Y,Re){Y.side===Gi?we(s.CULL_FACE):ge(s.CULL_FACE);let le=Y.side===Bn;Re&&(le=!le),ut(le),Y.blending===js&&Y.transparent===!1?H(Tr):H(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),u.setFunc(Y.depthFunc),u.setTest(Y.depthTest),u.setMask(Y.depthWrite),l.setMask(Y.colorWrite);const pe=Y.stencilWrite;h.setTest(pe),pe&&(h.setMask(Y.stencilWriteMask),h.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),h.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),At(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?ge(s.SAMPLE_ALPHA_TO_COVERAGE):we(s.SAMPLE_ALPHA_TO_COVERAGE)}function ut(Y){R!==Y&&(Y?s.frontFace(s.CW):s.frontFace(s.CCW),R=Y)}function ht(Y){Y!==Wv?(ge(s.CULL_FACE),Y!==B&&(Y===Gp?s.cullFace(s.BACK):Y===Xv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):we(s.CULL_FACE),B=Y}function Ke(Y){Y!==ee&&(ce&&s.lineWidth(Y),ee=Y)}function At(Y,Re,le){Y?(ge(s.POLYGON_OFFSET_FILL),(J!==Re||ue!==le)&&(s.polygonOffset(Re,le),J=Re,ue=le)):we(s.POLYGON_OFFSET_FILL)}function Ye(Y){Y?ge(s.SCISSOR_TEST):we(s.SCISSOR_TEST)}function L(Y){Y===void 0&&(Y=s.TEXTURE0+he-1),oe!==Y&&(s.activeTexture(Y),oe=Y)}function T(Y,Re,le){le===void 0&&(oe===null?le=s.TEXTURE0+he-1:le=oe);let pe=re[le];pe===void 0&&(pe={type:void 0,texture:void 0},re[le]=pe),(pe.type!==Y||pe.texture!==Re)&&(oe!==le&&(s.activeTexture(le),oe=le),s.bindTexture(Y,Re||xe[Y]),pe.type=Y,pe.texture=Re)}function Q(){const Y=re[oe];Y!==void 0&&Y.type!==void 0&&(s.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function me(){try{s.compressedTexImage2D.apply(s,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ve(){try{s.compressedTexImage3D.apply(s,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function fe(){try{s.texSubImage2D.apply(s,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function je(){try{s.texSubImage3D.apply(s,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ce(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Oe(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function dt(){try{s.texStorage2D.apply(s,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Me(){try{s.texStorage3D.apply(s,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ze(){try{s.texImage2D.apply(s,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ze(){try{s.texImage3D.apply(s,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function tt(Y){Ne.equals(Y)===!1&&(s.scissor(Y.x,Y.y,Y.z,Y.w),Ne.copy(Y))}function Be(Y){te.equals(Y)===!1&&(s.viewport(Y.x,Y.y,Y.z,Y.w),te.copy(Y))}function pt(Y,Re){let le=m.get(Re);le===void 0&&(le=new WeakMap,m.set(Re,le));let pe=le.get(Y);pe===void 0&&(pe=s.getUniformBlockIndex(Re,Y.name),le.set(Y,pe))}function rt(Y,Re){const pe=m.get(Re).get(Y);d.get(Re)!==pe&&(s.uniformBlockBinding(Re,pe,Y.__bindingPointIndex),d.set(Re,pe))}function Ct(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},oe=null,re={},v={},y=new WeakMap,x=[],M=null,w=!1,S=null,_=null,I=null,U=null,b=null,X=null,k=null,O=new _t(0,0,0),W=0,P=!1,R=null,B=null,ee=null,J=null,ue=null,Ne.set(0,0,s.canvas.width,s.canvas.height),te.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),h.reset()}return{buffers:{color:l,depth:u,stencil:h},enable:ge,disable:we,bindFramebuffer:Ae,drawBuffers:Xe,useProgram:vt,setBlending:H,setMaterial:Xt,setFlipSided:ut,setCullFace:ht,setLineWidth:Ke,setPolygonOffset:At,setScissorTest:Ye,activeTexture:L,bindTexture:T,unbindTexture:Q,compressedTexImage2D:me,compressedTexImage3D:ve,texImage2D:ze,texImage3D:Ze,updateUBOMapping:pt,uniformBlockBinding:rt,texStorage2D:dt,texStorage3D:Me,texSubImage2D:fe,texSubImage3D:je,compressedTexSubImage2D:Ce,compressedTexSubImage3D:Oe,scissor:tt,viewport:Be,reset:Ct}}function n1(s,e,t,r,a,l,u){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new De,g=new WeakMap;let v;const y=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(L,T){return x?new OffscreenCanvas(L,T):Hl("canvas")}function w(L,T,Q){let me=1;const ve=Ye(L);if((ve.width>Q||ve.height>Q)&&(me=Q/Math.max(ve.width,ve.height)),me<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const fe=Math.floor(me*ve.width),je=Math.floor(me*ve.height);v===void 0&&(v=M(fe,je));const Ce=T?M(fe,je):v;return Ce.width=fe,Ce.height=je,Ce.getContext("2d").drawImage(L,0,0,fe,je),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+fe+"x"+je+")."),Ce}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),L;return L}function S(L){return L.generateMipmaps}function _(L){s.generateMipmap(L)}function I(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function U(L,T,Q,me,ve=!1){if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let fe=T;if(T===s.RED&&(Q===s.FLOAT&&(fe=s.R32F),Q===s.HALF_FLOAT&&(fe=s.R16F),Q===s.UNSIGNED_BYTE&&(fe=s.R8)),T===s.RED_INTEGER&&(Q===s.UNSIGNED_BYTE&&(fe=s.R8UI),Q===s.UNSIGNED_SHORT&&(fe=s.R16UI),Q===s.UNSIGNED_INT&&(fe=s.R32UI),Q===s.BYTE&&(fe=s.R8I),Q===s.SHORT&&(fe=s.R16I),Q===s.INT&&(fe=s.R32I)),T===s.RG&&(Q===s.FLOAT&&(fe=s.RG32F),Q===s.HALF_FLOAT&&(fe=s.RG16F),Q===s.UNSIGNED_BYTE&&(fe=s.RG8)),T===s.RG_INTEGER&&(Q===s.UNSIGNED_BYTE&&(fe=s.RG8UI),Q===s.UNSIGNED_SHORT&&(fe=s.RG16UI),Q===s.UNSIGNED_INT&&(fe=s.RG32UI),Q===s.BYTE&&(fe=s.RG8I),Q===s.SHORT&&(fe=s.RG16I),Q===s.INT&&(fe=s.RG32I)),T===s.RGB_INTEGER&&(Q===s.UNSIGNED_BYTE&&(fe=s.RGB8UI),Q===s.UNSIGNED_SHORT&&(fe=s.RGB16UI),Q===s.UNSIGNED_INT&&(fe=s.RGB32UI),Q===s.BYTE&&(fe=s.RGB8I),Q===s.SHORT&&(fe=s.RGB16I),Q===s.INT&&(fe=s.RGB32I)),T===s.RGBA_INTEGER&&(Q===s.UNSIGNED_BYTE&&(fe=s.RGBA8UI),Q===s.UNSIGNED_SHORT&&(fe=s.RGBA16UI),Q===s.UNSIGNED_INT&&(fe=s.RGBA32UI),Q===s.BYTE&&(fe=s.RGBA8I),Q===s.SHORT&&(fe=s.RGBA16I),Q===s.INT&&(fe=s.RGBA32I)),T===s.RGB&&Q===s.UNSIGNED_INT_5_9_9_9_REV&&(fe=s.RGB9_E5),T===s.RGBA){const je=ve?zl:wt.getTransfer(me);Q===s.FLOAT&&(fe=s.RGBA32F),Q===s.HALF_FLOAT&&(fe=s.RGBA16F),Q===s.UNSIGNED_BYTE&&(fe=je===Pt?s.SRGB8_ALPHA8:s.RGBA8),Q===s.UNSIGNED_SHORT_4_4_4_4&&(fe=s.RGBA4),Q===s.UNSIGNED_SHORT_5_5_5_1&&(fe=s.RGB5_A1)}return(fe===s.R16F||fe===s.R32F||fe===s.RG16F||fe===s.RG32F||fe===s.RGBA16F||fe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function b(L,T){let Q;return L?T===null||T===Qr||T===Qs?Q=s.DEPTH24_STENCIL8:T===Wi?Q=s.DEPTH32F_STENCIL8:T===Ko&&(Q=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Qr||T===Qs?Q=s.DEPTH_COMPONENT24:T===Wi?Q=s.DEPTH_COMPONENT32F:T===Ko&&(Q=s.DEPTH_COMPONENT16),Q}function X(L,T){return S(L)===!0||L.isFramebufferTexture&&L.minFilter!==pi&&L.minFilter!==Ei?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function k(L){const T=L.target;T.removeEventListener("dispose",k),W(T),T.isVideoTexture&&g.delete(T)}function O(L){const T=L.target;T.removeEventListener("dispose",O),R(T)}function W(L){const T=r.get(L);if(T.__webglInit===void 0)return;const Q=L.source,me=y.get(Q);if(me){const ve=me[T.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&P(L),Object.keys(me).length===0&&y.delete(Q)}r.remove(L)}function P(L){const T=r.get(L);s.deleteTexture(T.__webglTexture);const Q=L.source,me=y.get(Q);delete me[T.__cacheKey],u.memory.textures--}function R(L){const T=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(T.__webglFramebuffer[me]))for(let ve=0;ve<T.__webglFramebuffer[me].length;ve++)s.deleteFramebuffer(T.__webglFramebuffer[me][ve]);else s.deleteFramebuffer(T.__webglFramebuffer[me]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[me])}else{if(Array.isArray(T.__webglFramebuffer))for(let me=0;me<T.__webglFramebuffer.length;me++)s.deleteFramebuffer(T.__webglFramebuffer[me]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let me=0;me<T.__webglColorRenderbuffer.length;me++)T.__webglColorRenderbuffer[me]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[me]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const Q=L.textures;for(let me=0,ve=Q.length;me<ve;me++){const fe=r.get(Q[me]);fe.__webglTexture&&(s.deleteTexture(fe.__webglTexture),u.memory.textures--),r.remove(Q[me])}r.remove(L)}let B=0;function ee(){B=0}function J(){const L=B;return L>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+a.maxTextures),B+=1,L}function ue(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function he(L,T){const Q=r.get(L);if(L.isVideoTexture&&Ke(L),L.isRenderTargetTexture===!1&&L.version>0&&Q.__version!==L.version){const me=L.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{te(Q,L,T);return}}t.bindTexture(s.TEXTURE_2D,Q.__webglTexture,s.TEXTURE0+T)}function ce(L,T){const Q=r.get(L);if(L.version>0&&Q.__version!==L.version){te(Q,L,T);return}t.bindTexture(s.TEXTURE_2D_ARRAY,Q.__webglTexture,s.TEXTURE0+T)}function ae(L,T){const Q=r.get(L);if(L.version>0&&Q.__version!==L.version){te(Q,L,T);return}t.bindTexture(s.TEXTURE_3D,Q.__webglTexture,s.TEXTURE0+T)}function D(L,T){const Q=r.get(L);if(L.version>0&&Q.__version!==L.version){de(Q,L,T);return}t.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture,s.TEXTURE0+T)}const oe={[vh]:s.REPEAT,[Zr]:s.CLAMP_TO_EDGE,[yh]:s.MIRRORED_REPEAT},re={[pi]:s.NEAREST,[v0]:s.NEAREST_MIPMAP_NEAREST,[cl]:s.NEAREST_MIPMAP_LINEAR,[Ei]:s.LINEAR,[Au]:s.LINEAR_MIPMAP_NEAREST,[Jr]:s.LINEAR_MIPMAP_LINEAR},F={[E0]:s.NEVER,[R0]:s.ALWAYS,[M0]:s.LESS,[_g]:s.LEQUAL,[T0]:s.EQUAL,[C0]:s.GEQUAL,[w0]:s.GREATER,[A0]:s.NOTEQUAL};function se(L,T){if(T.type===Wi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Ei||T.magFilter===Au||T.magFilter===cl||T.magFilter===Jr||T.minFilter===Ei||T.minFilter===Au||T.minFilter===cl||T.minFilter===Jr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,oe[T.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,oe[T.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,oe[T.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,re[T.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,re[T.minFilter]),T.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,F[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===pi||T.minFilter!==cl&&T.minFilter!==Jr||T.type===Wi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,a.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function Ne(L,T){let Q=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",k));const me=T.source;let ve=y.get(me);ve===void 0&&(ve={},y.set(me,ve));const fe=ue(T);if(fe!==L.__cacheKey){ve[fe]===void 0&&(ve[fe]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,Q=!0),ve[fe].usedTimes++;const je=ve[L.__cacheKey];je!==void 0&&(ve[L.__cacheKey].usedTimes--,je.usedTimes===0&&P(T)),L.__cacheKey=fe,L.__webglTexture=ve[fe].texture}return Q}function te(L,T,Q){let me=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(me=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(me=s.TEXTURE_3D);const ve=Ne(L,T),fe=T.source;t.bindTexture(me,L.__webglTexture,s.TEXTURE0+Q);const je=r.get(fe);if(fe.version!==je.__version||ve===!0){t.activeTexture(s.TEXTURE0+Q);const Ce=wt.getPrimaries(wt.workingColorSpace),Oe=T.colorSpace===Mr?null:wt.getPrimaries(T.colorSpace),dt=T.colorSpace===Mr||Ce===Oe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);let Me=w(T.image,!1,a.maxTextureSize);Me=At(T,Me);const ze=l.convert(T.format,T.colorSpace),Ze=l.convert(T.type);let tt=U(T.internalFormat,ze,Ze,T.colorSpace,T.isVideoTexture);se(me,T);let Be;const pt=T.mipmaps,rt=T.isVideoTexture!==!0,Ct=je.__version===void 0||ve===!0,Y=fe.dataReady,Re=X(T,Me);if(T.isDepthTexture)tt=b(T.format===eo,T.type),Ct&&(rt?t.texStorage2D(s.TEXTURE_2D,1,tt,Me.width,Me.height):t.texImage2D(s.TEXTURE_2D,0,tt,Me.width,Me.height,0,ze,Ze,null));else if(T.isDataTexture)if(pt.length>0){rt&&Ct&&t.texStorage2D(s.TEXTURE_2D,Re,tt,pt[0].width,pt[0].height);for(let le=0,pe=pt.length;le<pe;le++)Be=pt[le],rt?Y&&t.texSubImage2D(s.TEXTURE_2D,le,0,0,Be.width,Be.height,ze,Ze,Be.data):t.texImage2D(s.TEXTURE_2D,le,tt,Be.width,Be.height,0,ze,Ze,Be.data);T.generateMipmaps=!1}else rt?(Ct&&t.texStorage2D(s.TEXTURE_2D,Re,tt,Me.width,Me.height),Y&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Me.width,Me.height,ze,Ze,Me.data)):t.texImage2D(s.TEXTURE_2D,0,tt,Me.width,Me.height,0,ze,Ze,Me.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){rt&&Ct&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Re,tt,pt[0].width,pt[0].height,Me.depth);for(let le=0,pe=pt.length;le<pe;le++)if(Be=pt[le],T.format!==di)if(ze!==null)if(rt){if(Y)if(T.layerUpdates.size>0){const Ue=xm(Be.width,Be.height,T.format,T.type);for(const Le of T.layerUpdates){const st=Be.data.subarray(Le*Ue/Be.data.BYTES_PER_ELEMENT,(Le+1)*Ue/Be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,le,0,0,Le,Be.width,Be.height,1,ze,st)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,le,0,0,0,Be.width,Be.height,Me.depth,ze,Be.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,le,tt,Be.width,Be.height,Me.depth,0,Be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?Y&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,le,0,0,0,Be.width,Be.height,Me.depth,ze,Ze,Be.data):t.texImage3D(s.TEXTURE_2D_ARRAY,le,tt,Be.width,Be.height,Me.depth,0,ze,Ze,Be.data)}else{rt&&Ct&&t.texStorage2D(s.TEXTURE_2D,Re,tt,pt[0].width,pt[0].height);for(let le=0,pe=pt.length;le<pe;le++)Be=pt[le],T.format!==di?ze!==null?rt?Y&&t.compressedTexSubImage2D(s.TEXTURE_2D,le,0,0,Be.width,Be.height,ze,Be.data):t.compressedTexImage2D(s.TEXTURE_2D,le,tt,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?Y&&t.texSubImage2D(s.TEXTURE_2D,le,0,0,Be.width,Be.height,ze,Ze,Be.data):t.texImage2D(s.TEXTURE_2D,le,tt,Be.width,Be.height,0,ze,Ze,Be.data)}else if(T.isDataArrayTexture)if(rt){if(Ct&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Re,tt,Me.width,Me.height,Me.depth),Y)if(T.layerUpdates.size>0){const le=xm(Me.width,Me.height,T.format,T.type);for(const pe of T.layerUpdates){const Ue=Me.data.subarray(pe*le/Me.data.BYTES_PER_ELEMENT,(pe+1)*le/Me.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,pe,Me.width,Me.height,1,ze,Ze,Ue)}T.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,ze,Ze,Me.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,tt,Me.width,Me.height,Me.depth,0,ze,Ze,Me.data);else if(T.isData3DTexture)rt?(Ct&&t.texStorage3D(s.TEXTURE_3D,Re,tt,Me.width,Me.height,Me.depth),Y&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,ze,Ze,Me.data)):t.texImage3D(s.TEXTURE_3D,0,tt,Me.width,Me.height,Me.depth,0,ze,Ze,Me.data);else if(T.isFramebufferTexture){if(Ct)if(rt)t.texStorage2D(s.TEXTURE_2D,Re,tt,Me.width,Me.height);else{let le=Me.width,pe=Me.height;for(let Ue=0;Ue<Re;Ue++)t.texImage2D(s.TEXTURE_2D,Ue,tt,le,pe,0,ze,Ze,null),le>>=1,pe>>=1}}else if(pt.length>0){if(rt&&Ct){const le=Ye(pt[0]);t.texStorage2D(s.TEXTURE_2D,Re,tt,le.width,le.height)}for(let le=0,pe=pt.length;le<pe;le++)Be=pt[le],rt?Y&&t.texSubImage2D(s.TEXTURE_2D,le,0,0,ze,Ze,Be):t.texImage2D(s.TEXTURE_2D,le,tt,ze,Ze,Be);T.generateMipmaps=!1}else if(rt){if(Ct){const le=Ye(Me);t.texStorage2D(s.TEXTURE_2D,Re,tt,le.width,le.height)}Y&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ze,Ze,Me)}else t.texImage2D(s.TEXTURE_2D,0,tt,ze,Ze,Me);S(T)&&_(me),je.__version=fe.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function de(L,T,Q){if(T.image.length!==6)return;const me=Ne(L,T),ve=T.source;t.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+Q);const fe=r.get(ve);if(ve.version!==fe.__version||me===!0){t.activeTexture(s.TEXTURE0+Q);const je=wt.getPrimaries(wt.workingColorSpace),Ce=T.colorSpace===Mr?null:wt.getPrimaries(T.colorSpace),Oe=T.colorSpace===Mr||je===Ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);const dt=T.isCompressedTexture||T.image[0].isCompressedTexture,Me=T.image[0]&&T.image[0].isDataTexture,ze=[];for(let pe=0;pe<6;pe++)!dt&&!Me?ze[pe]=w(T.image[pe],!0,a.maxCubemapSize):ze[pe]=Me?T.image[pe].image:T.image[pe],ze[pe]=At(T,ze[pe]);const Ze=ze[0],tt=l.convert(T.format,T.colorSpace),Be=l.convert(T.type),pt=U(T.internalFormat,tt,Be,T.colorSpace),rt=T.isVideoTexture!==!0,Ct=fe.__version===void 0||me===!0,Y=ve.dataReady;let Re=X(T,Ze);se(s.TEXTURE_CUBE_MAP,T);let le;if(dt){rt&&Ct&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Re,pt,Ze.width,Ze.height);for(let pe=0;pe<6;pe++){le=ze[pe].mipmaps;for(let Ue=0;Ue<le.length;Ue++){const Le=le[Ue];T.format!==di?tt!==null?rt?Y&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ue,0,0,Le.width,Le.height,tt,Le.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ue,pt,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):rt?Y&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ue,0,0,Le.width,Le.height,tt,Be,Le.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ue,pt,Le.width,Le.height,0,tt,Be,Le.data)}}}else{if(le=T.mipmaps,rt&&Ct){le.length>0&&Re++;const pe=Ye(ze[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Re,pt,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(Me){rt?Y&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,ze[pe].width,ze[pe].height,tt,Be,ze[pe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,pt,ze[pe].width,ze[pe].height,0,tt,Be,ze[pe].data);for(let Ue=0;Ue<le.length;Ue++){const st=le[Ue].image[pe].image;rt?Y&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ue+1,0,0,st.width,st.height,tt,Be,st.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ue+1,pt,st.width,st.height,0,tt,Be,st.data)}}else{rt?Y&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,tt,Be,ze[pe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,pt,tt,Be,ze[pe]);for(let Ue=0;Ue<le.length;Ue++){const Le=le[Ue];rt?Y&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ue+1,0,0,tt,Be,Le.image[pe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ue+1,pt,tt,Be,Le.image[pe])}}}S(T)&&_(s.TEXTURE_CUBE_MAP),fe.__version=ve.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function xe(L,T,Q,me,ve,fe){const je=l.convert(Q.format,Q.colorSpace),Ce=l.convert(Q.type),Oe=U(Q.internalFormat,je,Ce,Q.colorSpace),dt=r.get(T),Me=r.get(Q);if(Me.__renderTarget=T,!dt.__hasExternalTextures){const ze=Math.max(1,T.width>>fe),Ze=Math.max(1,T.height>>fe);ve===s.TEXTURE_3D||ve===s.TEXTURE_2D_ARRAY?t.texImage3D(ve,fe,Oe,ze,Ze,T.depth,0,je,Ce,null):t.texImage2D(ve,fe,Oe,ze,Ze,0,je,Ce,null)}t.bindFramebuffer(s.FRAMEBUFFER,L),ht(T)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,me,ve,Me.__webglTexture,0,ut(T)):(ve===s.TEXTURE_2D||ve>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,me,ve,Me.__webglTexture,fe),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ge(L,T,Q){if(s.bindRenderbuffer(s.RENDERBUFFER,L),T.depthBuffer){const me=T.depthTexture,ve=me&&me.isDepthTexture?me.type:null,fe=b(T.stencilBuffer,ve),je=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ce=ut(T);ht(T)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ce,fe,T.width,T.height):Q?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ce,fe,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,fe,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,je,s.RENDERBUFFER,L)}else{const me=T.textures;for(let ve=0;ve<me.length;ve++){const fe=me[ve],je=l.convert(fe.format,fe.colorSpace),Ce=l.convert(fe.type),Oe=U(fe.internalFormat,je,Ce,fe.colorSpace),dt=ut(T);Q&&ht(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,dt,Oe,T.width,T.height):ht(T)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,dt,Oe,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Oe,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function we(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=r.get(T.depthTexture);me.__renderTarget=T,(!me.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),he(T.depthTexture,0);const ve=me.__webglTexture,fe=ut(T);if(T.depthTexture.format===qs)ht(T)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ve,0,fe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ve,0);else if(T.depthTexture.format===eo)ht(T)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ve,0,fe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ve,0);else throw new Error("Unknown depthTexture format")}function Ae(L){const T=r.get(L),Q=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){const me=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),me){const ve=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,me.removeEventListener("dispose",ve)};me.addEventListener("dispose",ve),T.__depthDisposeCallback=ve}T.__boundDepthTexture=me}if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");we(T.__webglFramebuffer,L)}else if(Q){T.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[me]),T.__webglDepthbuffer[me]===void 0)T.__webglDepthbuffer[me]=s.createRenderbuffer(),ge(T.__webglDepthbuffer[me],L,!1);else{const ve=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=T.__webglDepthbuffer[me];s.bindRenderbuffer(s.RENDERBUFFER,fe),s.framebufferRenderbuffer(s.FRAMEBUFFER,ve,s.RENDERBUFFER,fe)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),ge(T.__webglDepthbuffer,L,!1);else{const me=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ve=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ve),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,ve)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Xe(L,T,Q){const me=r.get(L);T!==void 0&&xe(me.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Q!==void 0&&Ae(L)}function vt(L){const T=L.texture,Q=r.get(L),me=r.get(T);L.addEventListener("dispose",O);const ve=L.textures,fe=L.isWebGLCubeRenderTarget===!0,je=ve.length>1;if(je||(me.__webglTexture===void 0&&(me.__webglTexture=s.createTexture()),me.__version=T.version,u.memory.textures++),fe){Q.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(T.mipmaps&&T.mipmaps.length>0){Q.__webglFramebuffer[Ce]=[];for(let Oe=0;Oe<T.mipmaps.length;Oe++)Q.__webglFramebuffer[Ce][Oe]=s.createFramebuffer()}else Q.__webglFramebuffer[Ce]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){Q.__webglFramebuffer=[];for(let Ce=0;Ce<T.mipmaps.length;Ce++)Q.__webglFramebuffer[Ce]=s.createFramebuffer()}else Q.__webglFramebuffer=s.createFramebuffer();if(je)for(let Ce=0,Oe=ve.length;Ce<Oe;Ce++){const dt=r.get(ve[Ce]);dt.__webglTexture===void 0&&(dt.__webglTexture=s.createTexture(),u.memory.textures++)}if(L.samples>0&&ht(L)===!1){Q.__webglMultisampledFramebuffer=s.createFramebuffer(),Q.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let Ce=0;Ce<ve.length;Ce++){const Oe=ve[Ce];Q.__webglColorRenderbuffer[Ce]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Q.__webglColorRenderbuffer[Ce]);const dt=l.convert(Oe.format,Oe.colorSpace),Me=l.convert(Oe.type),ze=U(Oe.internalFormat,dt,Me,Oe.colorSpace,L.isXRRenderTarget===!0),Ze=ut(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ze,ze,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,Q.__webglColorRenderbuffer[Ce])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(Q.__webglDepthRenderbuffer=s.createRenderbuffer(),ge(Q.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(fe){t.bindTexture(s.TEXTURE_CUBE_MAP,me.__webglTexture),se(s.TEXTURE_CUBE_MAP,T);for(let Ce=0;Ce<6;Ce++)if(T.mipmaps&&T.mipmaps.length>0)for(let Oe=0;Oe<T.mipmaps.length;Oe++)xe(Q.__webglFramebuffer[Ce][Oe],L,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Oe);else xe(Q.__webglFramebuffer[Ce],L,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);S(T)&&_(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(je){for(let Ce=0,Oe=ve.length;Ce<Oe;Ce++){const dt=ve[Ce],Me=r.get(dt);t.bindTexture(s.TEXTURE_2D,Me.__webglTexture),se(s.TEXTURE_2D,dt),xe(Q.__webglFramebuffer,L,dt,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,0),S(dt)&&_(s.TEXTURE_2D)}t.unbindTexture()}else{let Ce=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ce=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ce,me.__webglTexture),se(Ce,T),T.mipmaps&&T.mipmaps.length>0)for(let Oe=0;Oe<T.mipmaps.length;Oe++)xe(Q.__webglFramebuffer[Oe],L,T,s.COLOR_ATTACHMENT0,Ce,Oe);else xe(Q.__webglFramebuffer,L,T,s.COLOR_ATTACHMENT0,Ce,0);S(T)&&_(Ce),t.unbindTexture()}L.depthBuffer&&Ae(L)}function ot(L){const T=L.textures;for(let Q=0,me=T.length;Q<me;Q++){const ve=T[Q];if(S(ve)){const fe=I(L),je=r.get(ve).__webglTexture;t.bindTexture(fe,je),_(fe),t.unbindTexture()}}}const Rt=[],H=[];function Xt(L){if(L.samples>0){if(ht(L)===!1){const T=L.textures,Q=L.width,me=L.height;let ve=s.COLOR_BUFFER_BIT;const fe=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,je=r.get(L),Ce=T.length>1;if(Ce)for(let Oe=0;Oe<T.length;Oe++)t.bindFramebuffer(s.FRAMEBUFFER,je.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,je.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,je.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,je.__webglFramebuffer);for(let Oe=0;Oe<T.length;Oe++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ve|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ve|=s.STENCIL_BUFFER_BIT)),Ce){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,je.__webglColorRenderbuffer[Oe]);const dt=r.get(T[Oe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,dt,0)}s.blitFramebuffer(0,0,Q,me,0,0,Q,me,ve,s.NEAREST),d===!0&&(Rt.length=0,H.length=0,Rt.push(s.COLOR_ATTACHMENT0+Oe),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Rt.push(fe),H.push(fe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,H)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Rt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ce)for(let Oe=0;Oe<T.length;Oe++){t.bindFramebuffer(s.FRAMEBUFFER,je.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.RENDERBUFFER,je.__webglColorRenderbuffer[Oe]);const dt=r.get(T[Oe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,je.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.TEXTURE_2D,dt,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,je.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&d){const T=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function ut(L){return Math.min(a.maxSamples,L.samples)}function ht(L){const T=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ke(L){const T=u.render.frame;g.get(L)!==T&&(g.set(L,T),L.update())}function At(L,T){const Q=L.colorSpace,me=L.format,ve=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||Q!==to&&Q!==Mr&&(wt.getTransfer(Q)===Pt?(me!==di||ve!==ji)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),T}function Ye(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(m.width=L.naturalWidth||L.width,m.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(m.width=L.displayWidth,m.height=L.displayHeight):(m.width=L.width,m.height=L.height),m}this.allocateTextureUnit=J,this.resetTextureUnits=ee,this.setTexture2D=he,this.setTexture2DArray=ce,this.setTexture3D=ae,this.setTextureCube=D,this.rebindTextures=Xe,this.setupRenderTarget=vt,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=Xt,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=ht}function i1(s,e){function t(r,a=Mr){let l;const u=wt.getTransfer(a);if(r===ji)return s.UNSIGNED_BYTE;if(r===$h)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Zh)return s.UNSIGNED_SHORT_5_5_5_1;if(r===lg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===og)return s.BYTE;if(r===ag)return s.SHORT;if(r===Ko)return s.UNSIGNED_SHORT;if(r===Kh)return s.INT;if(r===Qr)return s.UNSIGNED_INT;if(r===Wi)return s.FLOAT;if(r===$o)return s.HALF_FLOAT;if(r===cg)return s.ALPHA;if(r===ug)return s.RGB;if(r===di)return s.RGBA;if(r===hg)return s.LUMINANCE;if(r===fg)return s.LUMINANCE_ALPHA;if(r===qs)return s.DEPTH_COMPONENT;if(r===eo)return s.DEPTH_STENCIL;if(r===dg)return s.RED;if(r===Jh)return s.RED_INTEGER;if(r===pg)return s.RG;if(r===Qh)return s.RG_INTEGER;if(r===ef)return s.RGBA_INTEGER;if(r===Dl||r===Nl||r===Ul||r===Il)if(u===Pt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Dl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Nl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ul)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Il)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Dl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Nl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ul)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Il)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===xh||r===Sh||r===Eh||r===Mh)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===xh)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Sh)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Eh)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Mh)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Th||r===wh||r===Ah)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Th||r===wh)return u===Pt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Ah)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ch||r===Rh||r===Ph||r===bh||r===Lh||r===Dh||r===Nh||r===Uh||r===Ih||r===Fh||r===Oh||r===kh||r===zh||r===Bh)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Ch)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Rh)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ph)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===bh)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Lh)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Dh)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Nh)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Uh)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ih)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Fh)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Oh)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===kh)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===zh)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Bh)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Fl||r===Hh||r===Vh)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Fl)return u===Pt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Hh)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Vh)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===mg||r===Gh||r===Wh||r===Xh)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Fl)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Gh)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Wh)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Xh)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Qs?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const r1={type:"move"};class sh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let a=null,l=null,u=null;const h=this._targetRay,d=this._grip,m=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(m&&e.hand){u=!0;for(const w of e.hand.values()){const S=t.getJointPose(w,r),_=this._getHandJoint(m,w);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const g=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],y=g.position.distanceTo(v.position),x=.02,M=.005;m.inputState.pinching&&y>x+M?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&y<=x-M&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1));h!==null&&(a=t.getPose(e.targetRaySpace,r),a===null&&l!==null&&(a=l),a!==null&&(h.matrix.fromArray(a.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,a.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(a.linearVelocity)):h.hasLinearVelocity=!1,a.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(a.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(r1)))}return h!==null&&(h.visible=a!==null),d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Xo;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const s1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,o1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class a1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const a=new Pn,l=e.properties.get(a);l.__webglTexture=t.texture,(t.depthNear!==r.depthNear||t.depthFar!==r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Cr({vertexShader:s1,fragmentShader:o1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new $t(new ea(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class l1 extends is{constructor(e,t){super();const r=this;let a=null,l=1,u=null,h="local-floor",d=1,m=null,g=null,v=null,y=null,x=null,M=null;const w=new a1,S=t.getContextAttributes();let _=null,I=null;const U=[],b=[],X=new De;let k=null;const O=new jn;O.viewport=new Lt;const W=new jn;W.viewport=new Lt;const P=[O,W],R=new Ry;let B=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let de=U[te];return de===void 0&&(de=new sh,U[te]=de),de.getTargetRaySpace()},this.getControllerGrip=function(te){let de=U[te];return de===void 0&&(de=new sh,U[te]=de),de.getGripSpace()},this.getHand=function(te){let de=U[te];return de===void 0&&(de=new sh,U[te]=de),de.getHandSpace()};function J(te){const de=b.indexOf(te.inputSource);if(de===-1)return;const xe=U[de];xe!==void 0&&(xe.update(te.inputSource,te.frame,m||u),xe.dispatchEvent({type:te.type,data:te.inputSource}))}function ue(){a.removeEventListener("select",J),a.removeEventListener("selectstart",J),a.removeEventListener("selectend",J),a.removeEventListener("squeeze",J),a.removeEventListener("squeezestart",J),a.removeEventListener("squeezeend",J),a.removeEventListener("end",ue),a.removeEventListener("inputsourceschange",he);for(let te=0;te<U.length;te++){const de=b[te];de!==null&&(b[te]=null,U[te].disconnect(de))}B=null,ee=null,w.reset(),e.setRenderTarget(_),x=null,y=null,v=null,a=null,I=null,Ne.stop(),r.isPresenting=!1,e.setPixelRatio(k),e.setSize(X.width,X.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){l=te,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){h=te,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||u},this.setReferenceSpace=function(te){m=te},this.getBaseLayer=function(){return y!==null?y:x},this.getBinding=function(){return v},this.getFrame=function(){return M},this.getSession=function(){return a},this.setSession=async function(te){if(a=te,a!==null){if(_=e.getRenderTarget(),a.addEventListener("select",J),a.addEventListener("selectstart",J),a.addEventListener("selectend",J),a.addEventListener("squeeze",J),a.addEventListener("squeezestart",J),a.addEventListener("squeezeend",J),a.addEventListener("end",ue),a.addEventListener("inputsourceschange",he),S.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(X),a.enabledFeatures!==void 0&&a.enabledFeatures.includes("layers")){let xe=null,ge=null,we=null;S.depth&&(we=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=S.stencil?eo:qs,ge=S.stencil?Qs:Qr);const Ae={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:l};v=new XRWebGLBinding(a,t),y=v.createProjectionLayer(Ae),a.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),I=new es(y.textureWidth,y.textureHeight,{format:di,type:ji,depthTexture:new Pg(y.textureWidth,y.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1})}else{const xe={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:l};x=new XRWebGLLayer(a,t,xe),a.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),I=new es(x.framebufferWidth,x.framebufferHeight,{format:di,type:ji,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}I.isXRRenderTarget=!0,this.setFoveation(d),m=null,u=await a.requestReferenceSpace(h),Ne.setContext(a),Ne.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function he(te){for(let de=0;de<te.removed.length;de++){const xe=te.removed[de],ge=b.indexOf(xe);ge>=0&&(b[ge]=null,U[ge].disconnect(xe))}for(let de=0;de<te.added.length;de++){const xe=te.added[de];let ge=b.indexOf(xe);if(ge===-1){for(let Ae=0;Ae<U.length;Ae++)if(Ae>=b.length){b.push(xe),ge=Ae;break}else if(b[Ae]===null){b[Ae]=xe,ge=Ae;break}if(ge===-1)break}const we=U[ge];we&&we.connect(xe)}}const ce=new V,ae=new V;function D(te,de,xe){ce.setFromMatrixPosition(de.matrixWorld),ae.setFromMatrixPosition(xe.matrixWorld);const ge=ce.distanceTo(ae),we=de.projectionMatrix.elements,Ae=xe.projectionMatrix.elements,Xe=we[14]/(we[10]-1),vt=we[14]/(we[10]+1),ot=(we[9]+1)/we[5],Rt=(we[9]-1)/we[5],H=(we[8]-1)/we[0],Xt=(Ae[8]+1)/Ae[0],ut=Xe*H,ht=Xe*Xt,Ke=ge/(-H+Xt),At=Ke*-H;if(de.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(At),te.translateZ(Ke),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),we[10]===-1)te.projectionMatrix.copy(de.projectionMatrix),te.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const Ye=Xe+Ke,L=vt+Ke,T=ut-At,Q=ht+(ge-At),me=ot*vt/L*Ye,ve=Rt*vt/L*Ye;te.projectionMatrix.makePerspective(T,Q,me,ve,Ye,L),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function oe(te,de){de===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(de.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(a===null)return;let de=te.near,xe=te.far;w.texture!==null&&(w.depthNear>0&&(de=w.depthNear),w.depthFar>0&&(xe=w.depthFar)),R.near=W.near=O.near=de,R.far=W.far=O.far=xe,(B!==R.near||ee!==R.far)&&(a.updateRenderState({depthNear:R.near,depthFar:R.far}),B=R.near,ee=R.far),O.layers.mask=te.layers.mask|2,W.layers.mask=te.layers.mask|4,R.layers.mask=O.layers.mask|W.layers.mask;const ge=te.parent,we=R.cameras;oe(R,ge);for(let Ae=0;Ae<we.length;Ae++)oe(we[Ae],ge);we.length===2?D(R,O,W):R.projectionMatrix.copy(O.projectionMatrix),re(te,R,ge)};function re(te,de,xe){xe===null?te.matrix.copy(de.matrixWorld):(te.matrix.copy(xe.matrixWorld),te.matrix.invert(),te.matrix.multiply(de.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(de.projectionMatrix),te.projectionMatrixInverse.copy(de.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Yh*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(y===null&&x===null))return d},this.setFoveation=function(te){d=te,y!==null&&(y.fixedFoveation=te),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=te)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(R)};let F=null;function se(te,de){if(g=de.getViewerPose(m||u),M=de,g!==null){const xe=g.views;x!==null&&(e.setRenderTargetFramebuffer(I,x.framebuffer),e.setRenderTarget(I));let ge=!1;xe.length!==R.cameras.length&&(R.cameras.length=0,ge=!0);for(let Ae=0;Ae<xe.length;Ae++){const Xe=xe[Ae];let vt=null;if(x!==null)vt=x.getViewport(Xe);else{const Rt=v.getViewSubImage(y,Xe);vt=Rt.viewport,Ae===0&&(e.setRenderTargetTextures(I,Rt.colorTexture,y.ignoreDepthValues?void 0:Rt.depthStencilTexture),e.setRenderTarget(I))}let ot=P[Ae];ot===void 0&&(ot=new jn,ot.layers.enable(Ae),ot.viewport=new Lt,P[Ae]=ot),ot.matrix.fromArray(Xe.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.projectionMatrix.fromArray(Xe.projectionMatrix),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert(),ot.viewport.set(vt.x,vt.y,vt.width,vt.height),Ae===0&&(R.matrix.copy(ot.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),ge===!0&&R.cameras.push(ot)}const we=a.enabledFeatures;if(we&&we.includes("depth-sensing")){const Ae=v.getDepthInformation(xe[0]);Ae&&Ae.isValid&&Ae.texture&&w.init(e,Ae,a.renderState)}}for(let xe=0;xe<U.length;xe++){const ge=b[xe],we=U[xe];ge!==null&&we!==void 0&&we.update(ge,de,m||u)}F&&F(te,de),de.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:de}),M=null}const Ne=new Fg;Ne.setAnimationLoop(se),this.setAnimationLoop=function(te){F=te},this.dispose=function(){}}}const jr=new Ti,c1=new zt;function u1(s,e){function t(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function r(S,_){_.color.getRGB(S.fogColor.value,Ag(s)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function a(S,_,I,U,b){_.isMeshBasicMaterial||_.isMeshLambertMaterial?l(S,_):_.isMeshToonMaterial?(l(S,_),v(S,_)):_.isMeshPhongMaterial?(l(S,_),g(S,_)):_.isMeshStandardMaterial?(l(S,_),y(S,_),_.isMeshPhysicalMaterial&&x(S,_,b)):_.isMeshMatcapMaterial?(l(S,_),M(S,_)):_.isMeshDepthMaterial?l(S,_):_.isMeshDistanceMaterial?(l(S,_),w(S,_)):_.isMeshNormalMaterial?l(S,_):_.isLineBasicMaterial?(u(S,_),_.isLineDashedMaterial&&h(S,_)):_.isPointsMaterial?d(S,_,I,U):_.isSpriteMaterial?m(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function l(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,t(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,t(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,t(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===Bn&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,t(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===Bn&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,t(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,t(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const I=e.get(_),U=I.envMap,b=I.envMapRotation;U&&(S.envMap.value=U,jr.copy(b),jr.x*=-1,jr.y*=-1,jr.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(jr.y*=-1,jr.z*=-1),S.envMapRotation.value.setFromMatrix4(c1.makeRotationFromEuler(jr)),S.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,S.aoMapTransform))}function u(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,t(_.map,S.mapTransform))}function h(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function d(S,_,I,U){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*I,S.scale.value=U*.5,_.map&&(S.map.value=_.map,t(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,t(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function m(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,t(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,t(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function g(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function v(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function y(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function x(S,_,I){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Bn&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=I.texture,S.transmissionSamplerSize.value.set(I.width,I.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,_){_.matcap&&(S.matcap.value=_.matcap)}function w(S,_){const I=e.get(_).light;S.referencePosition.value.setFromMatrixPosition(I.matrixWorld),S.nearDistance.value=I.shadow.camera.near,S.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function h1(s,e,t,r){let a={},l={},u=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function d(I,U){const b=U.program;r.uniformBlockBinding(I,b)}function m(I,U){let b=a[I.id];b===void 0&&(M(I),b=g(I),a[I.id]=b,I.addEventListener("dispose",S));const X=U.program;r.updateUBOMapping(I,X);const k=e.render.frame;l[I.id]!==k&&(y(I),l[I.id]=k)}function g(I){const U=v();I.__bindingPointIndex=U;const b=s.createBuffer(),X=I.__size,k=I.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,X,k),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,U,b),b}function v(){for(let I=0;I<h;I++)if(u.indexOf(I)===-1)return u.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(I){const U=a[I.id],b=I.uniforms,X=I.__cache;s.bindBuffer(s.UNIFORM_BUFFER,U);for(let k=0,O=b.length;k<O;k++){const W=Array.isArray(b[k])?b[k]:[b[k]];for(let P=0,R=W.length;P<R;P++){const B=W[P];if(x(B,k,P,X)===!0){const ee=B.__offset,J=Array.isArray(B.value)?B.value:[B.value];let ue=0;for(let he=0;he<J.length;he++){const ce=J[he],ae=w(ce);typeof ce=="number"||typeof ce=="boolean"?(B.__data[0]=ce,s.bufferSubData(s.UNIFORM_BUFFER,ee+ue,B.__data)):ce.isMatrix3?(B.__data[0]=ce.elements[0],B.__data[1]=ce.elements[1],B.__data[2]=ce.elements[2],B.__data[3]=0,B.__data[4]=ce.elements[3],B.__data[5]=ce.elements[4],B.__data[6]=ce.elements[5],B.__data[7]=0,B.__data[8]=ce.elements[6],B.__data[9]=ce.elements[7],B.__data[10]=ce.elements[8],B.__data[11]=0):(ce.toArray(B.__data,ue),ue+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ee,B.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function x(I,U,b,X){const k=I.value,O=U+"_"+b;if(X[O]===void 0)return typeof k=="number"||typeof k=="boolean"?X[O]=k:X[O]=k.clone(),!0;{const W=X[O];if(typeof k=="number"||typeof k=="boolean"){if(W!==k)return X[O]=k,!0}else if(W.equals(k)===!1)return W.copy(k),!0}return!1}function M(I){const U=I.uniforms;let b=0;const X=16;for(let O=0,W=U.length;O<W;O++){const P=Array.isArray(U[O])?U[O]:[U[O]];for(let R=0,B=P.length;R<B;R++){const ee=P[R],J=Array.isArray(ee.value)?ee.value:[ee.value];for(let ue=0,he=J.length;ue<he;ue++){const ce=J[ue],ae=w(ce),D=b%X,oe=D%ae.boundary,re=D+oe;b+=oe,re!==0&&X-re<ae.storage&&(b+=X-re),ee.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),ee.__offset=b,b+=ae.storage}}}const k=b%X;return k>0&&(b+=X-k),I.__size=b,I.__cache={},this}function w(I){const U={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(U.boundary=4,U.storage=4):I.isVector2?(U.boundary=8,U.storage=8):I.isVector3||I.isColor?(U.boundary=16,U.storage=12):I.isVector4?(U.boundary=16,U.storage=16):I.isMatrix3?(U.boundary=48,U.storage=48):I.isMatrix4?(U.boundary=64,U.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),U}function S(I){const U=I.target;U.removeEventListener("dispose",S);const b=u.indexOf(U.__bindingPointIndex);u.splice(b,1),s.deleteBuffer(a[U.id]),delete a[U.id],delete l[U.id]}function _(){for(const I in a)s.deleteBuffer(a[I]);u=[],a={},l={}}return{bind:d,update:m,dispose:_}}class f1{constructor(e={}){const{canvas:t=L0(),context:r=null,depth:a=!0,stencil:l=!1,alpha:u=!1,antialias:h=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:y=!1}=e;this.isWebGLRenderer=!0;let x;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=r.getContextAttributes().alpha}else x=u;const M=new Uint32Array(4),w=new Int32Array(4);let S=null,_=null;const I=[],U=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=zn,this.toneMapping=wr,this.toneMappingExposure=1;const b=this;let X=!1,k=0,O=0,W=null,P=-1,R=null;const B=new Lt,ee=new Lt;let J=null;const ue=new _t(0);let he=0,ce=t.width,ae=t.height,D=1,oe=null,re=null;const F=new Lt(0,0,ce,ae),se=new Lt(0,0,ce,ae);let Ne=!1;const te=new rf;let de=!1,xe=!1;this.transmissionResolutionScale=1;const ge=new zt,we=new zt,Ae=new V,Xe=new Lt,vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ot=!1;function Rt(){return W===null?D:1}let H=r;function Xt(A,j){return t.getContext(A,j)}try{const A={alpha:!0,depth:a,stencil:l,antialias:h,premultipliedAlpha:d,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${qh}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",Ue,!1),t.addEventListener("webglcontextcreationerror",Le,!1),H===null){const j="webgl2";if(H=Xt(j,A),H===null)throw Xt(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ut,ht,Ke,At,Ye,L,T,Q,me,ve,fe,je,Ce,Oe,dt,Me,ze,Ze,tt,Be,pt,rt,Ct,Y;function Re(){ut=new SE(H),ut.init(),rt=new i1(H,ut),ht=new mE(H,ut,e,rt),Ke=new t1(H,ut),ht.reverseDepthBuffer&&y&&Ke.buffers.depth.setReversed(!0),At=new TE(H),Ye=new VM,L=new n1(H,ut,Ke,Ye,ht,rt,At),T=new _E(b),Q=new xE(b),me=new Ly(H),Ct=new dE(H,me),ve=new EE(H,me,At,Ct),fe=new AE(H,ve,me,At),tt=new wE(H,ht,L),Me=new gE(Ye),je=new HM(b,T,Q,ut,ht,Ct,Me),Ce=new u1(b,Ye),Oe=new WM,dt=new $M(ut),Ze=new fE(b,T,Q,Ke,fe,x,d),ze=new QM(b,fe,ht),Y=new h1(H,At,ht,Ke),Be=new pE(H,ut,At),pt=new ME(H,ut,At),At.programs=je.programs,b.capabilities=ht,b.extensions=ut,b.properties=Ye,b.renderLists=Oe,b.shadowMap=ze,b.state=Ke,b.info=At}Re();const le=new l1(b,H);this.xr=le,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const A=ut.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ut.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(A){A!==void 0&&(D=A,this.setSize(ce,ae,!1))},this.getSize=function(A){return A.set(ce,ae)},this.setSize=function(A,j,ne=!0){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ce=A,ae=j,t.width=Math.floor(A*D),t.height=Math.floor(j*D),ne===!0&&(t.style.width=A+"px",t.style.height=j+"px"),this.setViewport(0,0,A,j)},this.getDrawingBufferSize=function(A){return A.set(ce*D,ae*D).floor()},this.setDrawingBufferSize=function(A,j,ne){ce=A,ae=j,D=ne,t.width=Math.floor(A*ne),t.height=Math.floor(j*ne),this.setViewport(0,0,A,j)},this.getCurrentViewport=function(A){return A.copy(B)},this.getViewport=function(A){return A.copy(F)},this.setViewport=function(A,j,ne,$){A.isVector4?F.set(A.x,A.y,A.z,A.w):F.set(A,j,ne,$),Ke.viewport(B.copy(F).multiplyScalar(D).round())},this.getScissor=function(A){return A.copy(se)},this.setScissor=function(A,j,ne,$){A.isVector4?se.set(A.x,A.y,A.z,A.w):se.set(A,j,ne,$),Ke.scissor(ee.copy(se).multiplyScalar(D).round())},this.getScissorTest=function(){return Ne},this.setScissorTest=function(A){Ke.setScissorTest(Ne=A)},this.setOpaqueSort=function(A){oe=A},this.setTransparentSort=function(A){re=A},this.getClearColor=function(A){return A.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor.apply(Ze,arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha.apply(Ze,arguments)},this.clear=function(A=!0,j=!0,ne=!0){let $=0;if(A){let q=!1;if(W!==null){const Ee=W.texture.format;q=Ee===ef||Ee===Qh||Ee===Jh}if(q){const Ee=W.texture.type,Pe=Ee===ji||Ee===Qr||Ee===Ko||Ee===Qs||Ee===$h||Ee===Zh,Ie=Ze.getClearColor(),He=Ze.getClearAlpha(),nt=Ie.r,et=Ie.g,Ge=Ie.b;Pe?(M[0]=nt,M[1]=et,M[2]=Ge,M[3]=He,H.clearBufferuiv(H.COLOR,0,M)):(w[0]=nt,w[1]=et,w[2]=Ge,w[3]=He,H.clearBufferiv(H.COLOR,0,w))}else $|=H.COLOR_BUFFER_BIT}j&&($|=H.DEPTH_BUFFER_BIT),ne&&($|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",Ue,!1),t.removeEventListener("webglcontextcreationerror",Le,!1),Ze.dispose(),Oe.dispose(),dt.dispose(),Ye.dispose(),T.dispose(),Q.dispose(),fe.dispose(),Ct.dispose(),Y.dispose(),je.dispose(),le.dispose(),le.removeEventListener("sessionstart",rs),le.removeEventListener("sessionend",qi),Ai.stop()};function pe(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),X=!0}function Ue(){console.log("THREE.WebGLRenderer: Context Restored."),X=!1;const A=At.autoReset,j=ze.enabled,ne=ze.autoUpdate,$=ze.needsUpdate,q=ze.type;Re(),At.autoReset=A,ze.enabled=j,ze.autoUpdate=ne,ze.needsUpdate=$,ze.type=q}function Le(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function st(A){const j=A.target;j.removeEventListener("dispose",st),Ut(j)}function Ut(A){Jt(A),Ye.remove(A)}function Jt(A){const j=Ye.get(A).programs;j!==void 0&&(j.forEach(function(ne){je.releaseProgram(ne)}),A.isShaderMaterial&&je.releaseShaderCache(A))}this.renderBufferDirect=function(A,j,ne,$,q,Ee){j===null&&(j=vt);const Pe=q.isMesh&&q.matrixWorld.determinant()<0,Ie=ia(A,j,ne,$,q);Ke.setMaterial($,Pe);let He=ne.index,nt=1;if($.wireframe===!0){if(He=ve.getWireframeAttribute(ne),He===void 0)return;nt=2}const et=ne.drawRange,Ge=ne.attributes.position;let yt=et.start*nt,at=(et.start+et.count)*nt;Ee!==null&&(yt=Math.max(yt,Ee.start*nt),at=Math.min(at,(Ee.start+Ee.count)*nt)),He!==null?(yt=Math.max(yt,0),at=Math.min(at,He.count)):Ge!=null&&(yt=Math.max(yt,0),at=Math.min(at,Ge.count));const Vt=at-yt;if(Vt<0||Vt===1/0)return;Ct.setup(q,$,Ie,ne,He);let Ot,xt=Be;if(He!==null&&(Ot=me.get(He),xt=pt,xt.setIndex(Ot)),q.isMesh)$.wireframe===!0?(Ke.setLineWidth($.wireframeLinewidth*Rt()),xt.setMode(H.LINES)):xt.setMode(H.TRIANGLES);else if(q.isLine){let $e=$.linewidth;$e===void 0&&($e=1),Ke.setLineWidth($e*Rt()),q.isLineSegments?xt.setMode(H.LINES):q.isLineLoop?xt.setMode(H.LINE_LOOP):xt.setMode(H.LINE_STRIP)}else q.isPoints?xt.setMode(H.POINTS):q.isSprite&&xt.setMode(H.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)xt.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(ut.get("WEBGL_multi_draw"))xt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const $e=q._multiDrawStarts,Gt=q._multiDrawCounts,gt=q._multiDrawCount,mn=He?me.get(He).bytesPerElement:1,$i=Ye.get($).currentProgram.getUniforms();for(let Tn=0;Tn<gt;Tn++)$i.setValue(H,"_gl_DrawID",Tn),xt.render($e[Tn]/mn,Gt[Tn])}else if(q.isInstancedMesh)xt.renderInstances(yt,Vt,q.count);else if(ne.isInstancedBufferGeometry){const $e=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,Gt=Math.min(ne.instanceCount,$e);xt.renderInstances(yt,Vt,Gt)}else xt.render(yt,Vt)};function St(A,j,ne){A.transparent===!0&&A.side===Gi&&A.forceSinglePass===!1?(A.side=Bn,A.needsUpdate=!0,ss(A,j,ne),A.side=Ar,A.needsUpdate=!0,ss(A,j,ne),A.side=Gi):ss(A,j,ne)}this.compile=function(A,j,ne=null){ne===null&&(ne=A),_=dt.get(ne),_.init(j),U.push(_),ne.traverseVisible(function(q){q.isLight&&q.layers.test(j.layers)&&(_.pushLight(q),q.castShadow&&_.pushShadow(q))}),A!==ne&&A.traverseVisible(function(q){q.isLight&&q.layers.test(j.layers)&&(_.pushLight(q),q.castShadow&&_.pushShadow(q))}),_.setupLights();const $=new Set;return A.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const Ee=q.material;if(Ee)if(Array.isArray(Ee))for(let Pe=0;Pe<Ee.length;Pe++){const Ie=Ee[Pe];St(Ie,ne,q),$.add(Ie)}else St(Ee,ne,q),$.add(Ee)}),U.pop(),_=null,$},this.compileAsync=function(A,j,ne=null){const $=this.compile(A,j,ne);return new Promise(q=>{function Ee(){if($.forEach(function(Pe){Ye.get(Pe).currentProgram.isReady()&&$.delete(Pe)}),$.size===0){q(A);return}setTimeout(Ee,10)}ut.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let bn=null;function Mn(A){bn&&bn(A)}function rs(){Ai.stop()}function qi(){Ai.start()}const Ai=new Fg;Ai.setAnimationLoop(Mn),typeof self<"u"&&Ai.setContext(self),this.setAnimationLoop=function(A){bn=A,le.setAnimationLoop(A),A===null?Ai.stop():Ai.start()},le.addEventListener("sessionstart",rs),le.addEventListener("sessionend",qi),this.render=function(A,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(X===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(j),j=le.getCamera()),A.isScene===!0&&A.onBeforeRender(b,A,j,W),_=dt.get(A,U.length),_.init(j),U.push(_),we.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),te.setFromProjectionMatrix(we),xe=this.localClippingEnabled,de=Me.init(this.clippingPlanes,xe),S=Oe.get(A,I.length),S.init(),I.push(S),le.enabled===!0&&le.isPresenting===!0){const Ee=b.xr.getDepthSensingMesh();Ee!==null&&Ci(Ee,j,-1/0,b.sortObjects)}Ci(A,j,0,b.sortObjects),S.finish(),b.sortObjects===!0&&S.sort(oe,re),ot=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,ot&&Ze.addToRenderList(S,A),this.info.render.frame++,de===!0&&Me.beginShadows();const ne=_.state.shadowsArray;ze.render(ne,A,j),de===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=S.opaque,q=S.transmissive;if(_.setupLights(),j.isArrayCamera){const Ee=j.cameras;if(q.length>0)for(let Pe=0,Ie=Ee.length;Pe<Ie;Pe++){const He=Ee[Pe];Pr($,q,A,He)}ot&&Ze.render(A);for(let Pe=0,Ie=Ee.length;Pe<Ie;Pe++){const He=Ee[Pe];Rr(S,A,He,He.viewport)}}else q.length>0&&Pr($,q,A,j),ot&&Ze.render(A),Rr(S,A,j);W!==null&&O===0&&(L.updateMultisampleRenderTarget(W),L.updateRenderTargetMipmap(W)),A.isScene===!0&&A.onAfterRender(b,A,j),Ct.resetDefaultState(),P=-1,R=null,U.pop(),U.length>0?(_=U[U.length-1],de===!0&&Me.setGlobalState(b.clippingPlanes,_.state.camera)):_=null,I.pop(),I.length>0?S=I[I.length-1]:S=null};function Ci(A,j,ne,$){if(A.visible===!1)return;if(A.layers.test(j.layers)){if(A.isGroup)ne=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(j);else if(A.isLight)_.pushLight(A),A.castShadow&&_.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||te.intersectsSprite(A)){$&&Xe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(we);const Pe=fe.update(A),Ie=A.material;Ie.visible&&S.push(A,Pe,Ie,ne,Xe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||te.intersectsObject(A))){const Pe=fe.update(A),Ie=A.material;if($&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Xe.copy(A.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),Xe.copy(Pe.boundingSphere.center)),Xe.applyMatrix4(A.matrixWorld).applyMatrix4(we)),Array.isArray(Ie)){const He=Pe.groups;for(let nt=0,et=He.length;nt<et;nt++){const Ge=He[nt],yt=Ie[Ge.materialIndex];yt&&yt.visible&&S.push(A,Pe,yt,ne,Xe.z,Ge)}}else Ie.visible&&S.push(A,Pe,Ie,ne,Xe.z,null)}}const Ee=A.children;for(let Pe=0,Ie=Ee.length;Pe<Ie;Pe++)Ci(Ee[Pe],j,ne,$)}function Rr(A,j,ne,$){const q=A.opaque,Ee=A.transmissive,Pe=A.transparent;_.setupLightsView(ne),de===!0&&Me.setGlobalState(b.clippingPlanes,ne),$&&Ke.viewport(B.copy($)),q.length>0&&Ki(q,j,ne),Ee.length>0&&Ki(Ee,j,ne),Pe.length>0&&Ki(Pe,j,ne),Ke.buffers.depth.setTest(!0),Ke.buffers.depth.setMask(!0),Ke.buffers.color.setMask(!0),Ke.setPolygonOffset(!1)}function Pr(A,j,ne,$){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[$.id]===void 0&&(_.state.transmissionRenderTarget[$.id]=new es(1,1,{generateMipmaps:!0,type:ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float")?$o:ji,minFilter:Jr,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:wt.workingColorSpace}));const Ee=_.state.transmissionRenderTarget[$.id],Pe=$.viewport||B;Ee.setSize(Pe.z*b.transmissionResolutionScale,Pe.w*b.transmissionResolutionScale);const Ie=b.getRenderTarget();b.setRenderTarget(Ee),b.getClearColor(ue),he=b.getClearAlpha(),he<1&&b.setClearColor(16777215,.5),b.clear(),ot&&Ze.render(ne);const He=b.toneMapping;b.toneMapping=wr;const nt=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),_.setupLightsView($),de===!0&&Me.setGlobalState(b.clippingPlanes,$),Ki(A,ne,$),L.updateMultisampleRenderTarget(Ee),L.updateRenderTargetMipmap(Ee),ut.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let Ge=0,yt=j.length;Ge<yt;Ge++){const at=j[Ge],Vt=at.object,Ot=at.geometry,xt=at.material,$e=at.group;if(xt.side===Gi&&Vt.layers.test($.layers)){const Gt=xt.side;xt.side=Bn,xt.needsUpdate=!0,ta(Vt,ne,$,Ot,xt,$e),xt.side=Gt,xt.needsUpdate=!0,et=!0}}et===!0&&(L.updateMultisampleRenderTarget(Ee),L.updateRenderTargetMipmap(Ee))}b.setRenderTarget(Ie),b.setClearColor(ue,he),nt!==void 0&&($.viewport=nt),b.toneMapping=He}function Ki(A,j,ne){const $=j.isScene===!0?j.overrideMaterial:null;for(let q=0,Ee=A.length;q<Ee;q++){const Pe=A[q],Ie=Pe.object,He=Pe.geometry,nt=$===null?Pe.material:$,et=Pe.group;Ie.layers.test(ne.layers)&&ta(Ie,j,ne,He,nt,et)}}function ta(A,j,ne,$,q,Ee){A.onBeforeRender(b,j,ne,$,q,Ee),A.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),q.onBeforeRender(b,j,ne,$,A,Ee),q.transparent===!0&&q.side===Gi&&q.forceSinglePass===!1?(q.side=Bn,q.needsUpdate=!0,b.renderBufferDirect(ne,j,$,q,A,Ee),q.side=Ar,q.needsUpdate=!0,b.renderBufferDirect(ne,j,$,q,A,Ee),q.side=Gi):b.renderBufferDirect(ne,j,$,q,A,Ee),A.onAfterRender(b,j,ne,$,q,Ee)}function ss(A,j,ne){j.isScene!==!0&&(j=vt);const $=Ye.get(A),q=_.state.lights,Ee=_.state.shadowsArray,Pe=q.state.version,Ie=je.getParameters(A,q.state,Ee,j,ne),He=je.getProgramCacheKey(Ie);let nt=$.programs;$.environment=A.isMeshStandardMaterial?j.environment:null,$.fog=j.fog,$.envMap=(A.isMeshStandardMaterial?Q:T).get(A.envMap||$.environment),$.envMapRotation=$.environment!==null&&A.envMap===null?j.environmentRotation:A.envMapRotation,nt===void 0&&(A.addEventListener("dispose",st),nt=new Map,$.programs=nt);let et=nt.get(He);if(et!==void 0){if($.currentProgram===et&&$.lightsStateVersion===Pe)return mi(A,Ie),et}else Ie.uniforms=je.getUniforms(A),A.onBeforeCompile(Ie,b),et=je.acquireProgram(Ie,He),nt.set(He,et),$.uniforms=Ie.uniforms;const Ge=$.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ge.clippingPlanes=Me.uniform),mi(A,Ie),$.needsLights=Xl(A),$.lightsStateVersion=Pe,$.needsLights&&(Ge.ambientLightColor.value=q.state.ambient,Ge.lightProbe.value=q.state.probe,Ge.directionalLights.value=q.state.directional,Ge.directionalLightShadows.value=q.state.directionalShadow,Ge.spotLights.value=q.state.spot,Ge.spotLightShadows.value=q.state.spotShadow,Ge.rectAreaLights.value=q.state.rectArea,Ge.ltc_1.value=q.state.rectAreaLTC1,Ge.ltc_2.value=q.state.rectAreaLTC2,Ge.pointLights.value=q.state.point,Ge.pointLightShadows.value=q.state.pointShadow,Ge.hemisphereLights.value=q.state.hemi,Ge.directionalShadowMap.value=q.state.directionalShadowMap,Ge.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ge.spotShadowMap.value=q.state.spotShadowMap,Ge.spotLightMatrix.value=q.state.spotLightMatrix,Ge.spotLightMap.value=q.state.spotLightMap,Ge.pointShadowMap.value=q.state.pointShadowMap,Ge.pointShadowMatrix.value=q.state.pointShadowMatrix),$.currentProgram=et,$.uniformsList=null,et}function na(A){if(A.uniformsList===null){const j=A.currentProgram.getUniforms();A.uniformsList=kl.seqWithValue(j.seq,A.uniforms)}return A.uniformsList}function mi(A,j){const ne=Ye.get(A);ne.outputColorSpace=j.outputColorSpace,ne.batching=j.batching,ne.batchingColor=j.batchingColor,ne.instancing=j.instancing,ne.instancingColor=j.instancingColor,ne.instancingMorph=j.instancingMorph,ne.skinning=j.skinning,ne.morphTargets=j.morphTargets,ne.morphNormals=j.morphNormals,ne.morphColors=j.morphColors,ne.morphTargetsCount=j.morphTargetsCount,ne.numClippingPlanes=j.numClippingPlanes,ne.numIntersection=j.numClipIntersection,ne.vertexAlphas=j.vertexAlphas,ne.vertexTangents=j.vertexTangents,ne.toneMapping=j.toneMapping}function ia(A,j,ne,$,q){j.isScene!==!0&&(j=vt),L.resetTextureUnits();const Ee=j.fog,Pe=$.isMeshStandardMaterial?j.environment:null,Ie=W===null?b.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:to,He=($.isMeshStandardMaterial?Q:T).get($.envMap||Pe),nt=$.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,et=!!ne.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ge=!!ne.morphAttributes.position,yt=!!ne.morphAttributes.normal,at=!!ne.morphAttributes.color;let Vt=wr;$.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Vt=b.toneMapping);const Ot=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,xt=Ot!==void 0?Ot.length:0,$e=Ye.get($),Gt=_.state.lights;if(de===!0&&(xe===!0||A!==R)){const hn=A===R&&$.id===P;Me.setState($,A,hn)}let gt=!1;$.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==Gt.state.version||$e.outputColorSpace!==Ie||q.isBatchedMesh&&$e.batching===!1||!q.isBatchedMesh&&$e.batching===!0||q.isBatchedMesh&&$e.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&$e.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&$e.instancing===!1||!q.isInstancedMesh&&$e.instancing===!0||q.isSkinnedMesh&&$e.skinning===!1||!q.isSkinnedMesh&&$e.skinning===!0||q.isInstancedMesh&&$e.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&$e.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&$e.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&$e.instancingMorph===!1&&q.morphTexture!==null||$e.envMap!==He||$.fog===!0&&$e.fog!==Ee||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==Me.numPlanes||$e.numIntersection!==Me.numIntersection)||$e.vertexAlphas!==nt||$e.vertexTangents!==et||$e.morphTargets!==Ge||$e.morphNormals!==yt||$e.morphColors!==at||$e.toneMapping!==Vt||$e.morphTargetsCount!==xt)&&(gt=!0):(gt=!0,$e.__version=$.version);let mn=$e.currentProgram;gt===!0&&(mn=ss($,j,q));let $i=!1,Tn=!1,Ri=!1;const Dt=mn.getUniforms(),gn=$e.uniforms;if(Ke.useProgram(mn.program)&&($i=!0,Tn=!0,Ri=!0),$.id!==P&&(P=$.id,Tn=!0),$i||R!==A){Ke.buffers.depth.getReversed()?(ge.copy(A.projectionMatrix),N0(ge),U0(ge),Dt.setValue(H,"projectionMatrix",ge)):Dt.setValue(H,"projectionMatrix",A.projectionMatrix),Dt.setValue(H,"viewMatrix",A.matrixWorldInverse);const on=Dt.map.cameraPosition;on!==void 0&&on.setValue(H,Ae.setFromMatrixPosition(A.matrixWorld)),ht.logarithmicDepthBuffer&&Dt.setValue(H,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Dt.setValue(H,"isOrthographic",A.isOrthographicCamera===!0),R!==A&&(R=A,Tn=!0,Ri=!0)}if(q.isSkinnedMesh){Dt.setOptional(H,q,"bindMatrix"),Dt.setOptional(H,q,"bindMatrixInverse");const hn=q.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),Dt.setValue(H,"boneTexture",hn.boneTexture,L))}q.isBatchedMesh&&(Dt.setOptional(H,q,"batchingTexture"),Dt.setValue(H,"batchingTexture",q._matricesTexture,L),Dt.setOptional(H,q,"batchingIdTexture"),Dt.setValue(H,"batchingIdTexture",q._indirectTexture,L),Dt.setOptional(H,q,"batchingColorTexture"),q._colorsTexture!==null&&Dt.setValue(H,"batchingColorTexture",q._colorsTexture,L));const sn=ne.morphAttributes;if((sn.position!==void 0||sn.normal!==void 0||sn.color!==void 0)&&tt.update(q,ne,mn),(Tn||$e.receiveShadow!==q.receiveShadow)&&($e.receiveShadow=q.receiveShadow,Dt.setValue(H,"receiveShadow",q.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(gn.envMap.value=He,gn.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&j.environment!==null&&(gn.envMapIntensity.value=j.environmentIntensity),Tn&&(Dt.setValue(H,"toneMappingExposure",b.toneMappingExposure),$e.needsLights&&ra(gn,Ri),Ee&&$.fog===!0&&Ce.refreshFogUniforms(gn,Ee),Ce.refreshMaterialUniforms(gn,$,D,ae,_.state.transmissionRenderTarget[A.id]),kl.upload(H,na($e),gn,L)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(kl.upload(H,na($e),gn,L),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Dt.setValue(H,"center",q.center),Dt.setValue(H,"modelViewMatrix",q.modelViewMatrix),Dt.setValue(H,"normalMatrix",q.normalMatrix),Dt.setValue(H,"modelMatrix",q.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const hn=$.uniformsGroups;for(let on=0,Et=hn.length;on<Et;on++){const gi=hn[on];Y.update(gi,mn),Y.bind(gi,mn)}}return mn}function ra(A,j){A.ambientLightColor.needsUpdate=j,A.lightProbe.needsUpdate=j,A.directionalLights.needsUpdate=j,A.directionalLightShadows.needsUpdate=j,A.pointLights.needsUpdate=j,A.pointLightShadows.needsUpdate=j,A.spotLights.needsUpdate=j,A.spotLightShadows.needsUpdate=j,A.rectAreaLights.needsUpdate=j,A.hemisphereLights.needsUpdate=j}function Xl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(A,j,ne){Ye.get(A.texture).__webglTexture=j,Ye.get(A.depthTexture).__webglTexture=ne;const $=Ye.get(A);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=ne===void 0,$.__autoAllocateDepthBuffer||ut.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,j){const ne=Ye.get(A);ne.__webglFramebuffer=j,ne.__useDefaultFramebuffer=j===void 0};const sa=H.createFramebuffer();this.setRenderTarget=function(A,j=0,ne=0){W=A,k=j,O=ne;let $=!0,q=null,Ee=!1,Pe=!1;if(A){const He=Ye.get(A);if(He.__useDefaultFramebuffer!==void 0)Ke.bindFramebuffer(H.FRAMEBUFFER,null),$=!1;else if(He.__webglFramebuffer===void 0)L.setupRenderTarget(A);else if(He.__hasExternalTextures)L.rebindTextures(A,Ye.get(A.texture).__webglTexture,Ye.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ge=A.depthTexture;if(He.__boundDepthTexture!==Ge){if(Ge!==null&&Ye.has(Ge)&&(A.width!==Ge.image.width||A.height!==Ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(A)}}const nt=A.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(Pe=!0);const et=Ye.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(et[j])?q=et[j][ne]:q=et[j],Ee=!0):A.samples>0&&L.useMultisampledRTT(A)===!1?q=Ye.get(A).__webglMultisampledFramebuffer:Array.isArray(et)?q=et[ne]:q=et,B.copy(A.viewport),ee.copy(A.scissor),J=A.scissorTest}else B.copy(F).multiplyScalar(D).floor(),ee.copy(se).multiplyScalar(D).floor(),J=Ne;if(ne!==0&&(q=sa),Ke.bindFramebuffer(H.FRAMEBUFFER,q)&&$&&Ke.drawBuffers(A,q),Ke.viewport(B),Ke.scissor(ee),Ke.setScissorTest(J),Ee){const He=Ye.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+j,He.__webglTexture,ne)}else if(Pe){const He=Ye.get(A.texture),nt=j;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,He.__webglTexture,ne,nt)}else if(A!==null&&ne!==0){const He=Ye.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,He.__webglTexture,ne)}P=-1},this.readRenderTargetPixels=function(A,j,ne,$,q,Ee,Pe){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=Ye.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ie=Ie[Pe]),Ie){Ke.bindFramebuffer(H.FRAMEBUFFER,Ie);try{const He=A.texture,nt=He.format,et=He.type;if(!ht.textureFormatReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ht.textureTypeReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=A.width-$&&ne>=0&&ne<=A.height-q&&H.readPixels(j,ne,$,q,rt.convert(nt),rt.convert(et),Ee)}finally{const He=W!==null?Ye.get(W).__webglFramebuffer:null;Ke.bindFramebuffer(H.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(A,j,ne,$,q,Ee,Pe){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=Ye.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ie=Ie[Pe]),Ie){const He=A.texture,nt=He.format,et=He.type;if(!ht.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ht.textureTypeReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(j>=0&&j<=A.width-$&&ne>=0&&ne<=A.height-q){Ke.bindFramebuffer(H.FRAMEBUFFER,Ie);const Ge=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Ge),H.bufferData(H.PIXEL_PACK_BUFFER,Ee.byteLength,H.STREAM_READ),H.readPixels(j,ne,$,q,rt.convert(nt),rt.convert(et),0);const yt=W!==null?Ye.get(W).__webglFramebuffer:null;Ke.bindFramebuffer(H.FRAMEBUFFER,yt);const at=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await D0(H,at,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Ge),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Ee),H.deleteBuffer(Ge),H.deleteSync(at),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,j=null,ne=0){A.isTexture!==!0&&(Vs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),j=arguments[0]||null,A=arguments[1]);const $=Math.pow(2,-ne),q=Math.floor(A.image.width*$),Ee=Math.floor(A.image.height*$),Pe=j!==null?j.x:0,Ie=j!==null?j.y:0;L.setTexture2D(A,0),H.copyTexSubImage2D(H.TEXTURE_2D,ne,0,0,Pe,Ie,q,Ee),Ke.unbindTexture()};const oa=H.createFramebuffer(),aa=H.createFramebuffer();this.copyTextureToTexture=function(A,j,ne=null,$=null,q=0,Ee=null){A.isTexture!==!0&&(Vs("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,A=arguments[1],j=arguments[2],Ee=arguments[3]||0,ne=null),Ee===null&&(q!==0?(Vs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ee=q,q=0):Ee=0);let Pe,Ie,He,nt,et,Ge,yt,at,Vt;const Ot=A.isCompressedTexture?A.mipmaps[Ee]:A.image;if(ne!==null)Pe=ne.max.x-ne.min.x,Ie=ne.max.y-ne.min.y,He=ne.isBox3?ne.max.z-ne.min.z:1,nt=ne.min.x,et=ne.min.y,Ge=ne.isBox3?ne.min.z:0;else{const sn=Math.pow(2,-q);Pe=Math.floor(Ot.width*sn),Ie=Math.floor(Ot.height*sn),A.isDataArrayTexture?He=Ot.depth:A.isData3DTexture?He=Math.floor(Ot.depth*sn):He=1,nt=0,et=0,Ge=0}$!==null?(yt=$.x,at=$.y,Vt=$.z):(yt=0,at=0,Vt=0);const xt=rt.convert(j.format),$e=rt.convert(j.type);let Gt;j.isData3DTexture?(L.setTexture3D(j,0),Gt=H.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(L.setTexture2DArray(j,0),Gt=H.TEXTURE_2D_ARRAY):(L.setTexture2D(j,0),Gt=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,j.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,j.unpackAlignment);const gt=H.getParameter(H.UNPACK_ROW_LENGTH),mn=H.getParameter(H.UNPACK_IMAGE_HEIGHT),$i=H.getParameter(H.UNPACK_SKIP_PIXELS),Tn=H.getParameter(H.UNPACK_SKIP_ROWS),Ri=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Ot.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ot.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,nt),H.pixelStorei(H.UNPACK_SKIP_ROWS,et),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Ge);const Dt=A.isDataArrayTexture||A.isData3DTexture,gn=j.isDataArrayTexture||j.isData3DTexture;if(A.isDepthTexture){const sn=Ye.get(A),hn=Ye.get(j),on=Ye.get(sn.__renderTarget),Et=Ye.get(hn.__renderTarget);Ke.bindFramebuffer(H.READ_FRAMEBUFFER,on.__webglFramebuffer),Ke.bindFramebuffer(H.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let gi=0;gi<He;gi++)Dt&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ye.get(A).__webglTexture,q,Ge+gi),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ye.get(j).__webglTexture,Ee,Vt+gi)),H.blitFramebuffer(nt,et,Pe,Ie,yt,at,Pe,Ie,H.DEPTH_BUFFER_BIT,H.NEAREST);Ke.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ke.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(q!==0||A.isRenderTargetTexture||Ye.has(A)){const sn=Ye.get(A),hn=Ye.get(j);Ke.bindFramebuffer(H.READ_FRAMEBUFFER,oa),Ke.bindFramebuffer(H.DRAW_FRAMEBUFFER,aa);for(let on=0;on<He;on++)Dt?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,sn.__webglTexture,q,Ge+on):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,sn.__webglTexture,q),gn?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,hn.__webglTexture,Ee,Vt+on):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,hn.__webglTexture,Ee),q!==0?H.blitFramebuffer(nt,et,Pe,Ie,yt,at,Pe,Ie,H.COLOR_BUFFER_BIT,H.NEAREST):gn?H.copyTexSubImage3D(Gt,Ee,yt,at,Vt+on,nt,et,Pe,Ie):H.copyTexSubImage2D(Gt,Ee,yt,at,nt,et,Pe,Ie);Ke.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ke.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else gn?A.isDataTexture||A.isData3DTexture?H.texSubImage3D(Gt,Ee,yt,at,Vt,Pe,Ie,He,xt,$e,Ot.data):j.isCompressedArrayTexture?H.compressedTexSubImage3D(Gt,Ee,yt,at,Vt,Pe,Ie,He,xt,Ot.data):H.texSubImage3D(Gt,Ee,yt,at,Vt,Pe,Ie,He,xt,$e,Ot):A.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Ee,yt,at,Pe,Ie,xt,$e,Ot.data):A.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Ee,yt,at,Ot.width,Ot.height,xt,Ot.data):H.texSubImage2D(H.TEXTURE_2D,Ee,yt,at,Pe,Ie,xt,$e,Ot);H.pixelStorei(H.UNPACK_ROW_LENGTH,gt),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,mn),H.pixelStorei(H.UNPACK_SKIP_PIXELS,$i),H.pixelStorei(H.UNPACK_SKIP_ROWS,Tn),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Ri),Ee===0&&j.generateMipmaps&&H.generateMipmap(Gt),Ke.unbindTexture()},this.copyTextureToTexture3D=function(A,j,ne=null,$=null,q=0){return A.isTexture!==!0&&(Vs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ne=arguments[0]||null,$=arguments[1]||null,A=arguments[2],j=arguments[3],q=arguments[4]||0),Vs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,j,ne,$,q)},this.initRenderTarget=function(A){Ye.get(A).__webglFramebuffer===void 0&&L.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?L.setTextureCube(A,0):A.isData3DTexture?L.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?L.setTexture2DArray(A,0):L.setTexture2D(A,0),Ke.unbindTexture()},this.resetState=function(){k=0,O=0,W=null,Ke.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=wt._getDrawingBufferColorSpace(e),t.unpackColorSpace=wt._getUnpackColorSpace()}}const Xm={type:"change"},pf={type:"start"},Hg={type:"end"},Ll=new Sg,Ym=new Er,d1=Math.cos(70*b0.DEG2RAD),tn=new V,kn=2*Math.PI,bt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},oh=1e-6;class p1 extends Py{constructor(e,t=null){super(e,t),this.state=bt.NONE,this.enabled=!0,this.target=new V,this.cursor=new V,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ys.ROTATE,MIDDLE:Ys.DOLLY,RIGHT:Ys.PAN},this.touches={ONE:Ws.ROTATE,TWO:Ws.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new V,this._lastQuaternion=new ts,this._lastTargetPosition=new V,this._quat=new ts().setFromUnitVectors(e.up,new V(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ym,this._sphericalDelta=new ym,this._scale=1,this._panOffset=new V,this._rotateStart=new De,this._rotateEnd=new De,this._rotateDelta=new De,this._panStart=new De,this._panEnd=new De,this._panDelta=new De,this._dollyStart=new De,this._dollyEnd=new De,this._dollyDelta=new De,this._dollyDirection=new V,this._mouse=new De,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=g1.bind(this),this._onPointerDown=m1.bind(this),this._onPointerUp=_1.bind(this),this._onContextMenu=T1.bind(this),this._onMouseWheel=x1.bind(this),this._onKeyDown=S1.bind(this),this._onTouchStart=E1.bind(this),this._onTouchMove=M1.bind(this),this._onMouseDown=v1.bind(this),this._onMouseMove=y1.bind(this),this._interceptControlDown=w1.bind(this),this._interceptControlUp=A1.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Xm),this.update(),this.state=bt.NONE}update(e=null){const t=this.object.position;tn.copy(t).sub(this.target),tn.applyQuaternion(this._quat),this._spherical.setFromVector3(tn),this.autoRotate&&this.state===bt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,a=this.maxAzimuthAngle;isFinite(r)&&isFinite(a)&&(r<-Math.PI?r+=kn:r>Math.PI&&(r-=kn),a<-Math.PI?a+=kn:a>Math.PI&&(a-=kn),r<=a?this._spherical.theta=Math.max(r,Math.min(a,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+a)/2?Math.max(r,this._spherical.theta):Math.min(a,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let l=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const u=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),l=u!=this._spherical.radius}if(tn.setFromSpherical(this._spherical),tn.applyQuaternion(this._quatInverse),t.copy(this.target).add(tn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let u=null;if(this.object.isPerspectiveCamera){const h=tn.length();u=this._clampDistance(h*this._scale);const d=h-u;this.object.position.addScaledVector(this._dollyDirection,d),this.object.updateMatrixWorld(),l=!!d}else if(this.object.isOrthographicCamera){const h=new V(this._mouse.x,this._mouse.y,0);h.unproject(this.object);const d=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),l=d!==this.object.zoom;const m=new V(this._mouse.x,this._mouse.y,0);m.unproject(this.object),this.object.position.sub(m).add(h),this.object.updateMatrixWorld(),u=tn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;u!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(u).add(this.object.position):(Ll.origin.copy(this.object.position),Ll.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ll.direction))<d1?this.object.lookAt(this.target):(Ym.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ll.intersectPlane(Ym,this.target))))}else if(this.object.isOrthographicCamera){const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),u!==this.object.zoom&&(this.object.updateProjectionMatrix(),l=!0)}return this._scale=1,this._performCursorZoom=!1,l||this._lastPosition.distanceToSquared(this.object.position)>oh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>oh||this._lastTargetPosition.distanceToSquared(this.target)>oh?(this.dispatchEvent(Xm),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?kn/60*this.autoRotateSpeed*e:kn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){tn.setFromMatrixColumn(t,0),tn.multiplyScalar(-e),this._panOffset.add(tn)}_panUp(e,t){this.screenSpacePanning===!0?tn.setFromMatrixColumn(t,1):(tn.setFromMatrixColumn(t,0),tn.crossVectors(this.object.up,tn)),tn.multiplyScalar(e),this._panOffset.add(tn)}_pan(e,t){const r=this.domElement;if(this.object.isPerspectiveCamera){const a=this.object.position;tn.copy(a).sub(this.target);let l=tn.length();l*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*l/r.clientHeight,this.object.matrix),this._panUp(2*t*l/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),a=e-r.left,l=t-r.top,u=r.width,h=r.height;this._mouse.x=a/u*2-1,this._mouse.y=-(l/h)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(kn*this._rotateDelta.x/t.clientHeight),this._rotateUp(kn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._rotateStart.set(r,a)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panStart.set(r,a)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,a=e.pageY-t.y,l=Math.sqrt(r*r+a*a);this._dollyStart.set(0,l)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),a=.5*(e.pageX+r.x),l=.5*(e.pageY+r.y);this._rotateEnd.set(a,l)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(kn*this._rotateDelta.x/t.clientHeight),this._rotateUp(kn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panEnd.set(r,a)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,a=e.pageY-t.y,l=Math.sqrt(r*r+a*a);this._dollyEnd.set(0,l),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const u=(e.pageX+t.x)*.5,h=(e.pageY+t.y)*.5;this._updateZoomParameters(u,h)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new De,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function m1(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function g1(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function _1(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Hg),this.state=bt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function v1(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ys.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=bt.DOLLY;break;case Ys.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=bt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=bt.ROTATE}break;case Ys.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=bt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=bt.PAN}break;default:this.state=bt.NONE}this.state!==bt.NONE&&this.dispatchEvent(pf)}function y1(s){switch(this.state){case bt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case bt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case bt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function x1(s){this.enabled===!1||this.enableZoom===!1||this.state!==bt.NONE||(s.preventDefault(),this.dispatchEvent(pf),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Hg))}function S1(s){this.enabled!==!1&&this._handleKeyDown(s)}function E1(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Ws.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=bt.TOUCH_ROTATE;break;case Ws.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=bt.TOUCH_PAN;break;default:this.state=bt.NONE}break;case 2:switch(this.touches.TWO){case Ws.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=bt.TOUCH_DOLLY_PAN;break;case Ws.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=bt.TOUCH_DOLLY_ROTATE;break;default:this.state=bt.NONE}break;default:this.state=bt.NONE}this.state!==bt.NONE&&this.dispatchEvent(pf)}function M1(s){switch(this._trackPointer(s),this.state){case bt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case bt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case bt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case bt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=bt.NONE}}function T1(s){this.enabled!==!1&&s.preventDefault()}function w1(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function A1(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Go=new V;function ti(s,e,t,r,a,l){const u=2*Math.PI*a/4,h=Math.max(l-2*a,0),d=Math.PI/4;Go.copy(e),Go[r]=0,Go.normalize();const m=.5*u/(u+h),g=1-Go.angleTo(s)/d;return Math.sign(Go[t])===1?g*m:h/(u+h)+m+m*(1-g)}class Wo extends io{constructor(e=1,t=1,r=1,a=2,l=.1){if(a=a*2+1,l=Math.min(e/2,t/2,r/2,l),super(1,1,1,a,a,a),a===1)return;const u=this.toNonIndexed();this.index=null,this.attributes.position=u.attributes.position,this.attributes.normal=u.attributes.normal,this.attributes.uv=u.attributes.uv;const h=new V,d=new V,m=new V(e,t,r).divideScalar(2).subScalar(l),g=this.attributes.position.array,v=this.attributes.normal.array,y=this.attributes.uv.array,x=g.length/6,M=new V,w=.5/a;for(let S=0,_=0;S<g.length;S+=3,_+=2)switch(h.fromArray(g,S),d.copy(h),d.x-=Math.sign(d.x)*w,d.y-=Math.sign(d.y)*w,d.z-=Math.sign(d.z)*w,d.normalize(),g[S+0]=m.x*Math.sign(h.x)+d.x*l,g[S+1]=m.y*Math.sign(h.y)+d.y*l,g[S+2]=m.z*Math.sign(h.z)+d.z*l,v[S+0]=d.x,v[S+1]=d.y,v[S+2]=d.z,Math.floor(S/x)){case 0:M.set(1,0,0),y[_+0]=ti(M,d,"z","y",l,r),y[_+1]=1-ti(M,d,"y","z",l,t);break;case 1:M.set(-1,0,0),y[_+0]=1-ti(M,d,"z","y",l,r),y[_+1]=1-ti(M,d,"y","z",l,t);break;case 2:M.set(0,1,0),y[_+0]=1-ti(M,d,"x","z",l,e),y[_+1]=ti(M,d,"z","x",l,r);break;case 3:M.set(0,-1,0),y[_+0]=1-ti(M,d,"x","z",l,e),y[_+1]=1-ti(M,d,"z","x",l,r);break;case 4:M.set(0,0,1),y[_+0]=1-ti(M,d,"x","y",l,e),y[_+1]=1-ti(M,d,"y","x",l,t);break;case 5:M.set(0,0,-1),y[_+0]=ti(M,d,"x","y",l,e),y[_+1]=1-ti(M,d,"y","x",l,t);break}}}function C1(){const s=Rn.useRef(null),[e,t]=Rn.useState(!1);return Rn.useEffect(()=>{const r=s.current;if(!r)return;const a=new iy;a.background=new _t("#e9e2da");const l=new jn(35,r.clientWidth/r.clientHeight,.1,100);l.position.set(2.8,2,5.8);const u=new f1({antialias:!0,alpha:!1});u.setPixelRatio(Math.min(window.devicePixelRatio,2)),u.setSize(r.clientWidth,r.clientHeight),u.shadowMap.enabled=!0,u.shadowMap.type=ng,u.outputColorSpace=zn,u.toneMapping=rg,u.toneMappingExposure=1.15,r.appendChild(u.domElement),a.add(new Ty(16777215,7759707,2.1));const h=new vm(16777215,3);h.position.set(3,5,5),h.castShadow=!0,h.shadow.mapSize.set(2048,2048),a.add(h);const d=new vm(16753756,2);d.position.set(-4,1,-3),a.add(d);const m=new Ay(16777215,1.2);m.position.set(0,2,4),a.add(m);const g=new Gs({color:"#17191d",roughness:.48,metalness:.05}),v=new Gs({color:"#343a40",roughness:.23,metalness:.88}),y=new Sy({color:"#080b10",roughness:.12,metalness:.25,clearcoat:1,clearcoatRoughness:.08}),x=new Xo;a.add(x);function M(){const oe=[],re=[],F=[];for(let Ae=0;Ae<=180;Ae++){const Xe=Ae/180*Math.PI*2,vt=.83*Math.cos(Xe),ot=1.43*Math.sin(Xe),Rt=Math.cos(Xe),H=Math.sin(Xe);for(let Xt=0;Xt<=12;Xt++){const ut=Xt/12*2-1,ht=vt+Rt*.13*ut,Ke=ot+H*.13*ut,At=.43/2*(1-2*Xt/12);oe.push(ht,Ke,At),F.push(Ae/180,Xt/12)}}for(let Ae=0;Ae<180;Ae++)for(let Xe=0;Xe<12;Xe++){const vt=Ae*13+Xe,ot=vt+12+1;re.push(vt,ot,vt+1),re.push(ot,ot+1,vt+1)}const xe=new ni;xe.setAttribute("position",new jt(oe,3)),xe.setAttribute("uv",new jt(F,2)),xe.setIndex(re),xe.computeVertexNormals();const ge=new $t(xe,g);ge.castShadow=!0,ge.receiveShadow=!0;const we=ge.clone();we.material=g,we.scale.set(.985,.985,1),x.add(we),x.add(ge)}M();const w=new Gs({color:"#08090b",roughness:.9});for(let ae=0;ae<7;ae++){const D=-.95+ae*.19,oe=new $t(new lf(.045,.085,4,8),w),re=.83*Math.cos(D),F=1.43*Math.sin(D);oe.position.set(re+.08,F,.225),oe.rotation.z=-.1,x.add(oe)}const S=new $t(new Wo(1.08,1.6,.34,12,.19),v);S.position.set(0,0,.1),S.castShadow=!0,S.receiveShadow=!0,x.add(S);const _=new $t(new Wo(1.02,1.54,.09,12,.17),y);_.position.set(0,0,.29),x.add(_);const I=new $t(new Wo(.94,1.45,.045,12,.15),v);I.position.set(0,.015,.34),x.add(I);function U(){const ae=document.createElement("canvas");ae.width=512,ae.height=800;const D=ae.getContext("2d");D.fillStyle="#080d14",D.fillRect(0,0,512,800);const oe="#20b9e0",re="#f5f4f1",F="#aeb6c0",se="#ff514b";D.fillStyle=re,D.font="italic 34px Arial",D.fillText("09:24",48,58),D.font="27px Arial",D.fillText("▰ 87%",355,58),D.fillStyle=oe,D.font="bold 88px Arial",D.fillText("◔",45,175),D.fillStyle=re,D.font="italic 76px Arial",D.fillText("1.8",230,140),D.font="italic 38px Arial",D.fillText("m",367,140),D.fillStyle=F,D.font="italic 29px Arial",D.fillText("Good waves",230,183),D.fillStyle=oe,D.font="bold 65px Arial",D.fillText("≋",50,292),D.fillStyle=re,D.font="italic 48px Arial",D.fillText("12 km/h",230,260),D.fillStyle=F,D.font="italic 29px Arial",D.fillText("NW",230,302),D.fillStyle=oe,D.font="bold 65px Arial",D.fillText("≋",55,412),D.fillStyle=re,D.font="italic 38px Arial",D.fillText("High tide",230,380),D.fillStyle=F,D.font="italic 32px Arial",D.fillText("16:20",230,425),D.strokeStyle="#454d57",D.lineWidth=2,D.beginPath(),D.moveTo(40,475),D.lineTo(472,475),D.stroke(),D.fillStyle=oe,D.font="bold 65px Arial",D.fillText("▦",48,560),D.fillStyle=re,D.font="italic 37px Arial",D.fillText("Team Sync",180,535),D.fillStyle=F,D.font="italic 26px Arial",D.fillText("10:00 AM (UTC+1)",180,580),D.fillStyle="#20242a",D.beginPath(),D.roundRect(35,625,442,115,55),D.fill(),D.fillStyle=se,D.font="bold 47px Arial",D.textAlign="center",D.fillText("◉ SOS",256,699);const Ne=new oy(ae);return Ne.colorSpace=zn,Ne.anisotropy=u.capabilities.getMaxAnisotropy(),Ne}const b=U(),X=new $t(new ea(.84,1.31),new nf({map:b,toneMapped:!1}));X.position.set(0,.015,.375),x.add(X);const k=new $t(new Wo(.13,.4,.16,6,.06),v);k.position.set(.57,.15,.08),x.add(k);const O=new $t(new uf(.065,.065,.035,32),y);O.rotation.x=Math.PI/2,O.position.set(.57,.15,.17),x.add(O);const W=new Gs({color:"#969da5",metalness:.95,roughness:.2}),P=new $t(new hf(.19,.045,12,36),W);P.position.set(.83,-.15,0),P.rotation.z=.2,x.add(P);const R=new $t(new Wo(.43,.24,.49,8,.09),g);R.position.set(.83,.35,0),R.rotation.z=.15,x.add(R);const B=new $t(new cf(5,64),new Gs({color:"#e7ded3",roughness:.9}));B.rotation.x=-Math.PI/2,B.position.y=-1.85,B.receiveShadow=!0,a.add(B),x.rotation.x=-.1,x.rotation.y=-.1,x.rotation.z=-.12;const ee=new p1(l,u.domElement);ee.enableDamping=!0,ee.dampingFactor=.055,ee.enablePan=!1,ee.minDistance=3.2,ee.maxDistance=8,ee.autoRotate=!0,ee.autoRotateSpeed=.65,ee.target.set(0,0,0);const J=()=>{r&&(l.aspect=r.clientWidth/r.clientHeight,l.updateProjectionMatrix(),u.setSize(r.clientWidth,r.clientHeight))},ue=new ResizeObserver(J);ue.observe(r);let he;const ce=()=>{he=requestAnimationFrame(ce),ee.update(),u.render(a,l)};return ce(),t(!0),()=>{cancelAnimationFrame(he),ue.disconnect(),ee.dispose(),a.traverse(ae=>{ae.geometry&&ae.geometry.dispose(),ae.material&&(Array.isArray(ae.material)?ae.material:[ae.material]).forEach(oe=>{oe.map&&oe.map.dispose(),oe.dispose()})}),u.dispose(),r.contains(u.domElement)&&r.removeChild(u.domElement)}},[]),C.createElement("div",{className:"viewer-shell"},C.createElement("div",{className:"viewer-canvas",ref:s}),C.createElement("div",{className:"viewer-hint"},C.createElement("span",{className:"drag-icon"},"↔"),"Drag to rotate · Scroll to zoom"),!e&&C.createElement("div",{className:"viewer-loading"},"Preparing WaveBand 3D experience..."),C.createElement("div",{className:"viewer-tag"},"360° PRODUCT VIEW"))}const R1="/assets/logo-D6ZptHHi.png",jm=[{name:"Taghazout",country:"Morocco",wave:"1.8 m",wind:"12 km/h NW",tide:"High tide · 16:20",temp:"24°",condition:"Good waves",image:"https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=900&q=85"},{name:"Ericeira",country:"Portugal",wave:"1.4 m",wind:"9 km/h W",tide:"Rising · 14:45",temp:"21°",condition:"Clean sets",image:"https://images.unsplash.com/photo-1455729552865-3658a5d39692?auto=format&fit=crop&w=900&q=85"},{name:"Canggu",country:"Bali",wave:"1.2 m",wind:"7 km/h SE",tide:"Mid tide · 11:30",temp:"29°",condition:"Fun waves",image:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=85"}],P1=[{name:"Saidi Bassem",role:"Co-Founder · Product & Technology",bio:"Passionate about building useful digital experiences and bringing the WaveBand idea to life.",initials:"SB"},{name:"Akkari Med Aziz",role:"Co-Founder · Strategy & Innovation",bio:"Focused on the product vision, user experience and the freedom of the surf-nomad lifestyle.",initials:"MA"},{name:"Salem Hafedh",role:"Co-Founder · Brand & Community",bio:"Bringing the community together through surf culture, storytelling and meaningful connections.",initials:"SH"}],b1=s=>"€"+s;function L1({light:s=!1}){return C.createElement("a",{className:`logo ${s?"logo-light":""}`,href:"#home","aria-label":"WaveBand home"},C.createElement("span",{className:"logo-mark"},C.createElement(Vl,{size:27}),C.createElement("i",null)),C.createElement("span",null,"Wave",C.createElement("span",null,"Band")))}function D1(){const[s,e]=Rn.useState(!1),t=[["Home","#home"],["The bracelet","#bracelet"],["Features","#features"],["Surf forecast","#forecast"],["Pricing","#pricing"],["About us","#about"]];return C.createElement("header",{className:"header"},C.createElement("div",{className:"container nav-wrap"},C.createElement("a",{className:"header-logo",href:"#home","aria-label":"WaveBand home"},C.createElement("img",{src:R1,alt:"WaveBand"})),C.createElement("nav",{className:s?"nav nav-open":"nav"},t.map(([r,a])=>C.createElement("a",{key:a,href:a,onClick:()=>e(!1)},r))),C.createElement("a",{className:"btn btn-small nav-cta",href:"#pricing"},"Get WaveBand ",C.createElement(ns,{size:15})),C.createElement("button",{className:"menu-btn",onClick:()=>e(!s),"aria-label":"Toggle navigation"},s?C.createElement(Vv,null):C.createElement(Ov,null))))}function N1(){return C.createElement("section",{className:"hero",id:"home"},C.createElement("div",{className:"hero-photo"}),C.createElement("div",{className:"hero-shade"}),C.createElement("div",{className:"container hero-content"},C.createElement("div",{className:"eyebrow"},C.createElement("span",null)," THE SMART BRACELET FOR SURF NOMADS"),C.createElement("h1",null,"Ride confident.",C.createElement("br",null),"Work ",C.createElement("em",null,"anywhere.")),C.createElement("p",{className:"hero-copy"},"Your ocean companion, your safety net and your workday assistant — all on your wrist. Explore more, worry less and stay connected to what matters."),C.createElement("div",{className:"hero-actions"},C.createElement("a",{className:"btn",href:"#pricing"},"Discover WaveBand ",C.createElement(ns,{size:17})),C.createElement("a",{className:"text-link",href:"#bracelet"},C.createElement("span",{className:"play"},C.createElement(kv,{size:13,fill:"currentColor"}))," Explore the bracelet")),C.createElement("div",{className:"hero-proof"},C.createElement("div",null,C.createElement(Bv,null),C.createElement("strong",null,"125K+"),C.createElement("small",null,"Surf nomads")),C.createElement("div",null,C.createElement(Uv,null),C.createElement("strong",null,"67"),C.createElement("small",null,"Countries explored")),C.createElement("div",null,C.createElement(zv,null),C.createElement("strong",null,"4.8/5"),C.createElement("small",null,"Community rating")),C.createElement("div",null,C.createElement($m,null),C.createElement("strong",{className:"visitor-count"},"342,567"),C.createElement("small",null,"Website visits*"))),C.createElement("p",{className:"demo-note"},"*Illustrative demo statistics for this startup concept.")),C.createElement("div",{className:"hero-scroll"},"SCROLL TO EXPLORE ",C.createElement("span",null)))}function U1(){return C.createElement("section",{className:"section product-section",id:"bracelet"},C.createElement("div",{className:"container product-grid"},C.createElement("div",{className:"product-copy"},C.createElement("div",{className:"eyebrow dark"},"MEET YOUR NEW SURF COMPANION"),C.createElement("h2",null,"Small bracelet.",C.createElement("br",null),C.createElement("em",null,"Big freedom.")),C.createElement("p",null,"WaveBand brings your surf life and your remote-work life together in one rugged, easy-to-wear device."),C.createElement("ul",{className:"feature-list"},C.createElement("li",null,C.createElement("span",null,C.createElement(Vl,null)),C.createElement("div",null,C.createElement("b",null,"Surf forecast"),C.createElement("small",null,"Wave height, wind and tide at a glance."))),C.createElement("li",null,C.createElement("span",null,C.createElement(eg,null)),C.createElement("div",null,C.createElement("b",null,"One-press SOS"),C.createElement("small",null,"Share your GPS position when you need help."))),C.createElement("li",null,C.createElement("span",null,C.createElement(Nv,null)),C.createElement("div",null,C.createElement("b",null,"Contactless payments"),C.createElement("small",null,"Grab a coffee after a session, wallet-free."))),C.createElement("li",null,C.createElement("span",null,C.createElement(Zm,null)),C.createElement("div",null,C.createElement("b",null,"Time-zone smart reminders"),C.createElement("small",null,"Never miss a client call across time zones.")))),C.createElement("a",{href:"#features",className:"inline-link"},"Explore all features ",C.createElement(ns,{size:16}))),C.createElement("div",{className:"product-visual"},C.createElement("div",{className:"product-glow"}),C.createElement("img",{src:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85",alt:"Minimal black wearable watch concept"}),C.createElement("div",{className:"floating-note"},C.createElement("span",{className:"live-dot"})," BUILT FOR THE ELEMENTS"))))}function I1(){const s=[{icon:C.createElement(Vl,null),tag:"01 / SURF SMART",title:"Know before you go.",desc:"Check wave height, wind direction and tide windows before you paddle out.",tone:"blue",img:"https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=900&q=85"},{icon:C.createElement(eg,null),tag:"02 / STAY SAFE",title:"Confidence comes first.",desc:"Press SOS to share your location with your chosen emergency contacts.",tone:"orange",img:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=85"},{icon:C.createElement(Zm,null),tag:"03 / WORK FREE",title:"Your time. Every time.",desc:"Meeting reminders adapt to your clients’ time zones wherever you roam.",tone:"sand",img:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=85"}];return C.createElement("section",{className:"section features-section",id:"features"},C.createElement("div",{className:"container"},C.createElement("div",{className:"section-heading"},C.createElement("div",null,C.createElement("div",{className:"eyebrow dark"},"MADE FOR YOUR KIND OF EVERYWHERE"),C.createElement("h2",null,"One wrist. ",C.createElement("em",null,"Four superpowers."))),C.createElement("p",null,"Less screen time. More sea time. WaveBand keeps the essentials close without keeping you glued to your phone.")),C.createElement("div",{className:"feature-cards"},s.map(e=>C.createElement("article",{className:`feature-card ${e.tone}`,key:e.tag},C.createElement("div",{className:"feature-card-image",style:{backgroundImage:`url(${e.img})`}}),C.createElement("div",{className:"feature-card-body"},C.createElement("div",{className:"card-icon"},e.icon),C.createElement("div",{className:"eyebrow dark"},e.tag),C.createElement("h3",null,e.title),C.createElement("p",null,e.desc)))))))}function F1(){const[s,e]=Rn.useState(0),t=jm[s];return C.createElement("section",{className:"section forecast-section",id:"forecast"},C.createElement("div",{className:"container forecast-grid"},C.createElement("div",{className:"forecast-copy"},C.createElement("div",{className:"eyebrow"},"THE OCEAN, AT A GLANCE"),C.createElement("h2",null,"Find your next",C.createElement("br",null),C.createElement("em",null,"perfect wave.")),C.createElement("p",null,"From Morocco to Portugal to Bali, get a feel for the conditions before you leave your desk or your beach café."),C.createElement("div",{className:"spot-tabs"},jm.map((r,a)=>C.createElement("button",{key:r.name,className:s===a?"spot-tab active":"spot-tab",onClick:()=>e(a)},r.name,C.createElement("small",null,r.country)))),C.createElement("p",{className:"forecast-disclaimer"},"Concept preview · Forecast figures are illustrative, not live marine data.")),C.createElement("div",{className:"forecast-card"},C.createElement("div",{className:"forecast-top"},C.createElement("div",null,C.createElement("span",{className:"mini-label"},"YOUR SPOT TODAY"),C.createElement("h3",null,C.createElement(Fv,{size:17}),t.name,", ",t.country)),C.createElement("span",{className:"weather-pill"},"☀ ",t.temp)),C.createElement("div",{className:"wave-metric"},C.createElement("div",{className:"wave-symbol"},C.createElement(Vl,{size:58})),C.createElement("div",null,C.createElement("strong",null,t.wave),C.createElement("span",null,t.condition))),C.createElement("div",{className:"forecast-stats"},C.createElement("div",null,C.createElement(Hv,null),C.createElement("b",null,t.wind),C.createElement("small",null,"Wind")),C.createElement("div",null,C.createElement($m,null),C.createElement("b",null,t.tide),C.createElement("small",null,"Tide")),C.createElement("div",null,C.createElement(Dv,null),C.createElement("b",null,"08:00–11:00"),C.createElement("small",null,"Suggested session"))),C.createElement("div",{className:"chart-label"},C.createElement("span",null,"WAVE OUTLOOK"),C.createElement("span",null,"NEXT 5 DAYS")),C.createElement("div",{className:"wave-chart"},C.createElement("svg",{viewBox:"0 0 520 110",preserveAspectRatio:"none"},C.createElement("path",{d:"M0 70 C35 60 42 45 75 55 S125 90 160 67 S210 25 245 45 S295 82 330 60 S380 20 410 43 S470 76 520 28",fill:"none",stroke:"#f47b35",strokeWidth:"3"}),C.createElement("path",{d:"M0 70 C35 60 42 45 75 55 S125 90 160 67 S210 25 245 45 S295 82 330 60 S380 20 410 43 S470 76 520 28 L520 110 L0 110Z",fill:"url(#wavefill)",opacity:".22"}),C.createElement("defs",null,C.createElement("linearGradient",{id:"wavefill",x1:"0",x2:"0",y1:"0",y2:"1"},C.createElement("stop",{stopColor:"#f47b35"}),C.createElement("stop",{offset:"1",stopColor:"#f47b35",stopOpacity:"0"}))))),C.createElement("div",{className:"chart-days"},C.createElement("span",null,"MON"),C.createElement("span",null,"TUE"),C.createElement("span",null,"WED"),C.createElement("span",null,"THU"),C.createElement("span",null,"FRI")))))}function O1(){return C.createElement("section",{className:"community"},C.createElement("div",{className:"community-bg"}),C.createElement("div",{className:"container community-inner"},C.createElement("div",{className:"eyebrow"},"GOOD WAVES ARE BETTER TOGETHER"),C.createElement("h2",null,"Your next surf buddy",C.createElement("br",null),"could be ",C.createElement("em",null,"one click away.")),C.createElement("p",null,"Meet people heading to the same breaks, share a session plan and swap local tips. The WaveBand community is designed to bring surf nomads closer."),C.createElement("div",{className:"community-stats"},C.createElement("div",null,C.createElement("strong",null,"125K+"),C.createElement("span",null,"Nomads in the concept community")),C.createElement("div",null,C.createElement("strong",null,"67"),C.createElement("span",null,"Countries represented")),C.createElement("div",null,C.createElement("strong",null,"3,400+"),C.createElement("span",null,"Potential surf meetups"))),C.createElement("a",{className:"btn btn-light",href:"#join"},"Join the community ",C.createElement(ns,{size:16}))))}function k1(){const[s,e]=Rn.useState("Nomad"),t=[{name:"Explorer",price:99,desc:"For weekend wave chasers",items:["Surf forecast essentials","SOS location sharing","Basic meeting reminders"]},{name:"Nomad",price:129,desc:"For life between breaks",items:["Everything in Explorer","Contactless payments","Smart time-zone reminders","Premium strap finish"],popular:!0},{name:"Free Spirit",price:179,desc:"For the always-on-the-move",items:["Everything in Nomad","Extended warranty concept","Exclusive community perks","Priority product support"]}];return C.createElement("section",{className:"section pricing-section",id:"pricing"},C.createElement("div",{className:"container"},C.createElement("div",{className:"section-heading"},C.createElement("div",null,C.createElement("div",{className:"eyebrow dark"},"YOUR NEXT CHAPTER STARTS HERE"),C.createElement("h2",null,"Choose your ",C.createElement("em",null,"wave."))),C.createElement("p",null,"One-time concept pricing for the WaveBand bracelet. Pick the setup that fits your rhythm.")),C.createElement("div",{className:"pricing-grid"},t.map(r=>C.createElement("article",{key:r.name,className:`price-card ${r.popular?"popular":""} ${s===r.name?"selected":""}`},r.popular&&C.createElement("div",{className:"popular-label"},"MOST POPULAR"),C.createElement("div",{className:"price-top"},C.createElement("span",{className:"plan-dot"},r.name==="Explorer"?"01":r.name==="Nomad"?"02":"03"),C.createElement("h3",null,r.name),C.createElement("p",null,r.desc)),C.createElement("div",{className:"price"},C.createElement("strong",null,b1(r.price)),C.createElement("span",null,"one-time")),C.createElement("ul",null,r.items.map(a=>C.createElement("li",{key:a},C.createElement(Lv,{size:16}),a))),C.createElement("button",{className:r.popular?"btn price-btn":"btn btn-outline price-btn",onClick:()=>e(r.name)},s===r.name?"Selected plan":"Choose "+r.name," ",C.createElement(ns,{size:15}))))),C.createElement("p",{className:"price-note"},"All prices are fictional estimates created for the WaveBand startup presentation. No real purchase is available.")))}function z1(){return C.createElement("section",{className:"section about-section",id:"about"},C.createElement("div",{className:"container about-grid"},C.createElement("div",{className:"about-intro"},C.createElement("div",{className:"eyebrow"},"THREE FOUNDERS. ONE BIG HORIZON."),C.createElement("h2",null,"Built by people",C.createElement("br",null),"who believe in ",C.createElement("em",null,"freedom.")),C.createElement("p",null,"WaveBand is a student startup concept inspired by a simple idea: technology should make it easier to live the life you want — not pull you away from it."),C.createElement("a",{className:"inline-link light-link",href:"#join"},"Get in touch ",C.createElement(ns,{size:16}))),C.createElement("div",{className:"founder-cards"},P1.map((s,e)=>C.createElement("article",{className:"founder-card",key:s.initials},C.createElement("div",{className:`founder-avatar avatar-${e}`},s.initials),C.createElement("div",null,C.createElement("h3",null,s.name),C.createElement("span",null,s.role),C.createElement("p",null,s.bio)),C.createElement("div",{className:"founder-social"},C.createElement("a",{href:"#join","aria-label":`${s.name} LinkedIn`},C.createElement(Qm,{size:16})),C.createElement("a",{href:"#join","aria-label":`${s.name} Instagram`},C.createElement(Jm,{size:16}))))))))}function B1(){const s=[["“Finally, a concept that understands the balance between a remote-work life and the ocean.”","Maya R.","Lisbon, Portugal"],["“The SOS idea and surf forecast in one wearable? That is exactly the kind of freedom I want.”","Noah K.","Taghazout, Morocco"],["“A smart, clean idea for people who never stay in one place for too long.”","Lina S.","Canggu, Bali"]];return C.createElement("section",{className:"section reviews-section"},C.createElement("div",{className:"container"},C.createElement("div",{className:"section-heading"},C.createElement("div",null,C.createElement("div",{className:"eyebrow dark"},"WORDS FROM THE COMMUNITY"),C.createElement("h2",null,"Made for the ",C.createElement("em",null,"moving."))),C.createElement("div",{className:"rating-summary"},C.createElement("div",{className:"stars"},"★★★★★"),C.createElement("b",null,"4.8 / 5"),C.createElement("span",null,"Illustrative concept rating"))),C.createElement("div",{className:"review-grid"},s.map(([e,t,r])=>C.createElement("article",{className:"review-card",key:t},C.createElement("div",{className:"stars"},"★★★★★"),C.createElement("p",null,e),C.createElement("div",{className:"review-person"},C.createElement("span",{className:"review-avatar"},t[0]),C.createElement("div",null,C.createElement("b",null,t),C.createElement("small",null,r)))))),C.createElement("p",{className:"price-note"},"Testimonials and ratings are fictional examples for this presentation concept.")))}function H1(){const[s,e]=Rn.useState(""),[t,r]=Rn.useState(!1);return C.createElement("section",{className:"join-section",id:"join"},C.createElement("div",{className:"container join-inner"},C.createElement("div",null,C.createElement("div",{className:"eyebrow"},"THE TIDE IS CALLING"),C.createElement("h2",null,"Make room for",C.createElement("br",null),C.createElement("em",null,"more ocean.")),C.createElement("p",null,"Get product updates, surf inspiration and community news from WaveBand.")),C.createElement("form",{className:"join-form",onSubmit:a=>{a.preventDefault(),s.includes("@")&&r(!0)}},C.createElement("label",{htmlFor:"email"},"Your email address"),C.createElement("div",{className:"email-field"},C.createElement(Iv,{size:18}),C.createElement("input",{id:"email",type:"email",placeholder:"you@example.com",value:s,onChange:a=>e(a.target.value),required:!0}),C.createElement("button",{"aria-label":"Subscribe"},C.createElement(ns,null))),C.createElement("small",null,t?"Thanks for joining the WaveBand concept list!":"No spam. Just good waves and good ideas."))))}function V1(){return C.createElement("footer",{className:"footer"},C.createElement("div",{className:"container"},C.createElement("div",{className:"footer-main"},C.createElement("div",null,C.createElement(L1,{light:!0}),C.createElement("p",null,"Ride confident. Work anywhere.")),C.createElement("div",{className:"footer-links"},C.createElement("a",{href:"#home"},"Home"),C.createElement("a",{href:"#bracelet"},"The bracelet"),C.createElement("a",{href:"#features"},"Features"),C.createElement("a",{href:"#pricing"},"Pricing"),C.createElement("a",{href:"#about"},"About us")),C.createElement("div",{className:"footer-social"},C.createElement("a",{href:"#join"},C.createElement(Jm,null)),C.createElement("a",{href:"#join"},C.createElement(Qm,null)),C.createElement("a",{href:"#join"},C.createElement(Gv,null)))),C.createElement("div",{className:"footer-bottom"},C.createElement("span",null,"© 2026 WaveBand. A startup concept created for a class presentation."),C.createElement("span",null,"Privacy · Terms · Contact"),C.createElement("span",{className:"online"},C.createElement("i",null)," Concept website"))))}function G1(){return Rn.useEffect(()=>{const s=document.querySelectorAll(".reveal"),e=new IntersectionObserver(t=>t.forEach(r=>{r.isIntersecting&&(r.target.classList.add("visible"),e.unobserve(r.target))}),{threshold:.12});return s.forEach(t=>e.observe(t)),()=>e.disconnect()},[]),C.createElement(C.Fragment,null,C.createElement(D1,null),C.createElement("main",null,C.createElement(N1,null),C.createElement(U1,null),C.createElement("section",{className:"section viewer-section"},C.createElement("div",{className:"container"},C.createElement("div",{className:"section-heading"},C.createElement("div",null,C.createElement("div",{className:"eyebrow dark"},"MEET THE HARDWARE"),C.createElement("h2",null,"Take a closer ",C.createElement("em",null,"look."))),C.createElement("p",null,"Rotate the WaveBand concept in 3D. Drag to explore the shape, screen and strap from every angle.")),C.createElement(C1,null))),C.createElement(I1,null),C.createElement(F1,null),C.createElement(O1,null),C.createElement(k1,null),C.createElement(z1,null),C.createElement(B1,null),C.createElement(H1,null)),C.createElement(V1,null))}Cv.createRoot(document.getElementById("root")).render(C.createElement(C.StrictMode,null,C.createElement(G1,null)));
