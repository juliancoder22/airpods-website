function q0(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const a=Object.getOwnPropertyDescriptor(r,i);a&&Object.defineProperty(e,i,a.get?a:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();function zf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Lf={exports:{}},La={},Rf={exports:{}},R={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ri=Symbol.for("react.element"),ep=Symbol.for("react.portal"),tp=Symbol.for("react.fragment"),np=Symbol.for("react.strict_mode"),rp=Symbol.for("react.profiler"),ip=Symbol.for("react.provider"),ap=Symbol.for("react.context"),op=Symbol.for("react.forward_ref"),lp=Symbol.for("react.suspense"),sp=Symbol.for("react.memo"),up=Symbol.for("react.lazy"),Uu=Symbol.iterator;function cp(e){return e===null||typeof e!="object"?null:(e=Uu&&e[Uu]||e["@@iterator"],typeof e=="function"?e:null)}var Mf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$f=Object.assign,Ff={};function qn(e,t,n){this.props=e,this.context=t,this.refs=Ff,this.updater=n||Mf}qn.prototype.isReactComponent={};qn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};qn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Df(){}Df.prototype=qn.prototype;function ws(e,t,n){this.props=e,this.context=t,this.refs=Ff,this.updater=n||Mf}var ks=ws.prototype=new Df;ks.constructor=ws;$f(ks,qn.prototype);ks.isPureReactComponent=!0;var Vu=Array.isArray,Uf=Object.prototype.hasOwnProperty,Ss={current:null},Vf={key:!0,ref:!0,__self:!0,__source:!0};function Bf(e,t,n){var r,i={},a=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(a=""+t.key),t)Uf.call(t,r)&&!Vf.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:ri,type:e,key:a,ref:o,props:i,_owner:Ss.current}}function fp(e,t){return{$$typeof:ri,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Cs(e){return typeof e=="object"&&e!==null&&e.$$typeof===ri}function dp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Bu=/\/+/g;function Oo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?dp(""+e.key):t.toString(36)}function Bi(e,t,n,r,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case ri:case ep:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Oo(o,0):r,Vu(i)?(n="",e!=null&&(n=e.replace(Bu,"$&/")+"/"),Bi(i,t,n,"",function(u){return u})):i!=null&&(Cs(i)&&(i=fp(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Bu,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",Vu(e))for(var l=0;l<e.length;l++){a=e[l];var s=r+Oo(a,l);o+=Bi(a,t,n,s,i)}else if(s=cp(e),typeof s=="function")for(e=s.call(e),l=0;!(a=e.next()).done;)a=a.value,s=r+Oo(a,l++),o+=Bi(a,t,n,s,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function pi(e,t,n){if(e==null)return e;var r=[],i=0;return Bi(e,r,"","",function(a){return t.call(n,a,i++)}),r}function mp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ne={current:null},Wi={transition:null},pp={ReactCurrentDispatcher:Ne,ReactCurrentBatchConfig:Wi,ReactCurrentOwner:Ss};function Wf(){throw Error("act(...) is not supported in production builds of React.")}R.Children={map:pi,forEach:function(e,t,n){pi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return pi(e,function(){t++}),t},toArray:function(e){return pi(e,function(t){return t})||[]},only:function(e){if(!Cs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};R.Component=qn;R.Fragment=tp;R.Profiler=rp;R.PureComponent=ws;R.StrictMode=np;R.Suspense=lp;R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pp;R.act=Wf;R.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=$f({},e.props),i=e.key,a=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,o=Ss.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)Uf.call(t,s)&&!Vf.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:ri,type:e.type,key:i,ref:a,props:r,_owner:o}};R.createContext=function(e){return e={$$typeof:ap,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ip,_context:e},e.Consumer=e};R.createElement=Bf;R.createFactory=function(e){var t=Bf.bind(null,e);return t.type=e,t};R.createRef=function(){return{current:null}};R.forwardRef=function(e){return{$$typeof:op,render:e}};R.isValidElement=Cs;R.lazy=function(e){return{$$typeof:up,_payload:{_status:-1,_result:e},_init:mp}};R.memo=function(e,t){return{$$typeof:sp,type:e,compare:t===void 0?null:t}};R.startTransition=function(e){var t=Wi.transition;Wi.transition={};try{e()}finally{Wi.transition=t}};R.unstable_act=Wf;R.useCallback=function(e,t){return Ne.current.useCallback(e,t)};R.useContext=function(e){return Ne.current.useContext(e)};R.useDebugValue=function(){};R.useDeferredValue=function(e){return Ne.current.useDeferredValue(e)};R.useEffect=function(e,t){return Ne.current.useEffect(e,t)};R.useId=function(){return Ne.current.useId()};R.useImperativeHandle=function(e,t,n){return Ne.current.useImperativeHandle(e,t,n)};R.useInsertionEffect=function(e,t){return Ne.current.useInsertionEffect(e,t)};R.useLayoutEffect=function(e,t){return Ne.current.useLayoutEffect(e,t)};R.useMemo=function(e,t){return Ne.current.useMemo(e,t)};R.useReducer=function(e,t,n){return Ne.current.useReducer(e,t,n)};R.useRef=function(e){return Ne.current.useRef(e)};R.useState=function(e){return Ne.current.useState(e)};R.useSyncExternalStore=function(e,t,n){return Ne.current.useSyncExternalStore(e,t,n)};R.useTransition=function(){return Ne.current.useTransition()};R.version="18.3.1";Rf.exports=R;var U=Rf.exports;const Ra=zf(U),Wu=q0({__proto__:null,default:Ra},[U]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vp=U,hp=Symbol.for("react.element"),gp=Symbol.for("react.fragment"),yp=Object.prototype.hasOwnProperty,xp=vp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,wp={key:!0,ref:!0,__self:!0,__source:!0};function Yf(e,t,n){var r,i={},a=null,o=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)yp.call(t,r)&&!wp.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:hp,type:e,key:a,ref:o,props:i,_owner:xp.current}}La.Fragment=gp;La.jsx=Yf;La.jsxs=Yf;Lf.exports=La;var h=Lf.exports,sl={},Hf={exports:{}},Fe={},Qf={exports:{}},Xf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(O,A){var I=O.length;O.push(A);e:for(;0<I;){var ne=I-1>>>1,ue=O[ne];if(0<i(ue,A))O[ne]=A,O[I]=ue,I=ne;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var A=O[0],I=O.pop();if(I!==A){O[0]=I;e:for(var ne=0,ue=O.length,di=ue>>>1;ne<di;){var qt=2*(ne+1)-1,_o=O[qt],en=qt+1,mi=O[en];if(0>i(_o,I))en<ue&&0>i(mi,_o)?(O[ne]=mi,O[en]=I,ne=en):(O[ne]=_o,O[qt]=I,ne=qt);else if(en<ue&&0>i(mi,I))O[ne]=mi,O[en]=I,ne=en;else break e}}return A}function i(O,A){var I=O.sortIndex-A.sortIndex;return I!==0?I:O.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var s=[],u=[],f=1,m=null,v=3,y=!1,x=!1,g=!1,P=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(O){for(var A=n(u);A!==null;){if(A.callback===null)r(u);else if(A.startTime<=O)r(u),A.sortIndex=A.expirationTime,t(s,A);else break;A=n(u)}}function w(O){if(g=!1,p(O),!x)if(n(s)!==null)x=!0,No(k);else{var A=n(u);A!==null&&Po(w,A.startTime-O)}}function k(O,A){x=!1,g&&(g=!1,d(j),j=-1),y=!0;var I=v;try{for(p(A),m=n(s);m!==null&&(!(m.expirationTime>A)||O&&!Ke());){var ne=m.callback;if(typeof ne=="function"){m.callback=null,v=m.priorityLevel;var ue=ne(m.expirationTime<=A);A=e.unstable_now(),typeof ue=="function"?m.callback=ue:m===n(s)&&r(s),p(A)}else r(s);m=n(s)}if(m!==null)var di=!0;else{var qt=n(u);qt!==null&&Po(w,qt.startTime-A),di=!1}return di}finally{m=null,v=I,y=!1}}var b=!1,C=null,j=-1,D=5,z=-1;function Ke(){return!(e.unstable_now()-z<D)}function ir(){if(C!==null){var O=e.unstable_now();z=O;var A=!0;try{A=C(!0,O)}finally{A?ar():(b=!1,C=null)}}else b=!1}var ar;if(typeof c=="function")ar=function(){c(ir)};else if(typeof MessageChannel<"u"){var Du=new MessageChannel,J0=Du.port2;Du.port1.onmessage=ir,ar=function(){J0.postMessage(null)}}else ar=function(){P(ir,0)};function No(O){C=O,b||(b=!0,ar())}function Po(O,A){j=P(function(){O(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(O){O.callback=null},e.unstable_continueExecution=function(){x||y||(x=!0,No(k))},e.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<O?Math.floor(1e3/O):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(O){switch(v){case 1:case 2:case 3:var A=3;break;default:A=v}var I=v;v=A;try{return O()}finally{v=I}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(O,A){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var I=v;v=O;try{return A()}finally{v=I}},e.unstable_scheduleCallback=function(O,A,I){var ne=e.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?ne+I:ne):I=ne,O){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=I+ue,O={id:f++,callback:A,priorityLevel:O,startTime:I,expirationTime:ue,sortIndex:-1},I>ne?(O.sortIndex=I,t(u,O),n(s)===null&&O===n(u)&&(g?(d(j),j=-1):g=!0,Po(w,I-ne))):(O.sortIndex=ue,t(s,O),x||y||(x=!0,No(k))),O},e.unstable_shouldYield=Ke,e.unstable_wrapCallback=function(O){var A=v;return function(){var I=v;v=A;try{return O.apply(this,arguments)}finally{v=I}}}})(Xf);Qf.exports=Xf;var kp=Qf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sp=U,$e=kp;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Gf=new Set,jr={};function yn(e,t){Wn(e,t),Wn(e+"Capture",t)}function Wn(e,t){for(jr[e]=t,e=0;e<t.length;e++)Gf.add(t[e])}var wt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ul=Object.prototype.hasOwnProperty,Cp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Yu={},Hu={};function Ep(e){return ul.call(Hu,e)?!0:ul.call(Yu,e)?!1:Cp.test(e)?Hu[e]=!0:(Yu[e]=!0,!1)}function bp(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Np(e,t,n,r){if(t===null||typeof t>"u"||bp(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Pe(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var ye={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ye[e]=new Pe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ye[t]=new Pe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ye[e]=new Pe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ye[e]=new Pe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ye[e]=new Pe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ye[e]=new Pe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ye[e]=new Pe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ye[e]=new Pe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ye[e]=new Pe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Es=/[\-:]([a-z])/g;function bs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Es,bs);ye[t]=new Pe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Es,bs);ye[t]=new Pe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Es,bs);ye[t]=new Pe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ye[e]=new Pe(e,1,!1,e.toLowerCase(),null,!1,!1)});ye.xlinkHref=new Pe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ye[e]=new Pe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ns(e,t,n,r){var i=ye.hasOwnProperty(t)?ye[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Np(t,n,i,r)&&(n=null),r||i===null?Ep(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Pt=Sp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,vi=Symbol.for("react.element"),kn=Symbol.for("react.portal"),Sn=Symbol.for("react.fragment"),Ps=Symbol.for("react.strict_mode"),cl=Symbol.for("react.profiler"),Kf=Symbol.for("react.provider"),Zf=Symbol.for("react.context"),_s=Symbol.for("react.forward_ref"),fl=Symbol.for("react.suspense"),dl=Symbol.for("react.suspense_list"),Os=Symbol.for("react.memo"),jt=Symbol.for("react.lazy"),Jf=Symbol.for("react.offscreen"),Qu=Symbol.iterator;function or(e){return e===null||typeof e!="object"?null:(e=Qu&&e[Qu]||e["@@iterator"],typeof e=="function"?e:null)}var q=Object.assign,To;function vr(e){if(To===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);To=t&&t[1]||""}return`
`+To+e}var jo=!1;function Ao(e,t){if(!e||jo)return"";jo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,l=a.length-1;1<=o&&0<=l&&i[o]!==a[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==a[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==a[l]){var s=`
`+i[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=l);break}}}finally{jo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?vr(e):""}function Pp(e){switch(e.tag){case 5:return vr(e.type);case 16:return vr("Lazy");case 13:return vr("Suspense");case 19:return vr("SuspenseList");case 0:case 2:case 15:return e=Ao(e.type,!1),e;case 11:return e=Ao(e.type.render,!1),e;case 1:return e=Ao(e.type,!0),e;default:return""}}function ml(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Sn:return"Fragment";case kn:return"Portal";case cl:return"Profiler";case Ps:return"StrictMode";case fl:return"Suspense";case dl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Zf:return(e.displayName||"Context")+".Consumer";case Kf:return(e._context.displayName||"Context")+".Provider";case _s:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Os:return t=e.displayName||null,t!==null?t:ml(e.type)||"Memo";case jt:t=e._payload,e=e._init;try{return ml(e(t))}catch{}}return null}function _p(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ml(t);case 8:return t===Ps?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Yt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function qf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Op(e){var t=qf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function hi(e){e._valueTracker||(e._valueTracker=Op(e))}function ed(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=qf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function oa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function pl(e,t){var n=t.checked;return q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Xu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Yt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function td(e,t){t=t.checked,t!=null&&Ns(e,"checked",t,!1)}function vl(e,t){td(e,t);var n=Yt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?hl(e,t.type,n):t.hasOwnProperty("defaultValue")&&hl(e,t.type,Yt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Gu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function hl(e,t,n){(t!=="number"||oa(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var hr=Array.isArray;function Rn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Yt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function gl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ku(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(hr(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Yt(n)}}function nd(e,t){var n=Yt(t.value),r=Yt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Zu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function rd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function yl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?rd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var gi,id=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(gi=gi||document.createElement("div"),gi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=gi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ar(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var wr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Tp=["Webkit","ms","Moz","O"];Object.keys(wr).forEach(function(e){Tp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),wr[t]=wr[e]})});function ad(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||wr.hasOwnProperty(e)&&wr[e]?(""+t).trim():t+"px"}function od(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=ad(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var jp=q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xl(e,t){if(t){if(jp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function wl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var kl=null;function Ts(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Sl=null,Mn=null,$n=null;function Ju(e){if(e=oi(e)){if(typeof Sl!="function")throw Error(S(280));var t=e.stateNode;t&&(t=Ua(t),Sl(e.stateNode,e.type,t))}}function ld(e){Mn?$n?$n.push(e):$n=[e]:Mn=e}function sd(){if(Mn){var e=Mn,t=$n;if($n=Mn=null,Ju(e),t)for(e=0;e<t.length;e++)Ju(t[e])}}function ud(e,t){return e(t)}function cd(){}var Io=!1;function fd(e,t,n){if(Io)return e(t,n);Io=!0;try{return ud(e,t,n)}finally{Io=!1,(Mn!==null||$n!==null)&&(cd(),sd())}}function Ir(e,t){var n=e.stateNode;if(n===null)return null;var r=Ua(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var Cl=!1;if(wt)try{var lr={};Object.defineProperty(lr,"passive",{get:function(){Cl=!0}}),window.addEventListener("test",lr,lr),window.removeEventListener("test",lr,lr)}catch{Cl=!1}function Ap(e,t,n,r,i,a,o,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var kr=!1,la=null,sa=!1,El=null,Ip={onError:function(e){kr=!0,la=e}};function zp(e,t,n,r,i,a,o,l,s){kr=!1,la=null,Ap.apply(Ip,arguments)}function Lp(e,t,n,r,i,a,o,l,s){if(zp.apply(this,arguments),kr){if(kr){var u=la;kr=!1,la=null}else throw Error(S(198));sa||(sa=!0,El=u)}}function xn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function dd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function qu(e){if(xn(e)!==e)throw Error(S(188))}function Rp(e){var t=e.alternate;if(!t){if(t=xn(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return qu(i),e;if(a===r)return qu(i),t;a=a.sibling}throw Error(S(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=a;break}if(l===r){o=!0,r=i,n=a;break}l=l.sibling}if(!o){for(l=a.child;l;){if(l===n){o=!0,n=a,r=i;break}if(l===r){o=!0,r=a,n=i;break}l=l.sibling}if(!o)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function md(e){return e=Rp(e),e!==null?pd(e):null}function pd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=pd(e);if(t!==null)return t;e=e.sibling}return null}var vd=$e.unstable_scheduleCallback,ec=$e.unstable_cancelCallback,Mp=$e.unstable_shouldYield,$p=$e.unstable_requestPaint,re=$e.unstable_now,Fp=$e.unstable_getCurrentPriorityLevel,js=$e.unstable_ImmediatePriority,hd=$e.unstable_UserBlockingPriority,ua=$e.unstable_NormalPriority,Dp=$e.unstable_LowPriority,gd=$e.unstable_IdlePriority,Ma=null,dt=null;function Up(e){if(dt&&typeof dt.onCommitFiberRoot=="function")try{dt.onCommitFiberRoot(Ma,e,void 0,(e.current.flags&128)===128)}catch{}}var nt=Math.clz32?Math.clz32:Wp,Vp=Math.log,Bp=Math.LN2;function Wp(e){return e>>>=0,e===0?32:31-(Vp(e)/Bp|0)|0}var yi=64,xi=4194304;function gr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ca(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=gr(l):(a&=o,a!==0&&(r=gr(a)))}else o=n&~i,o!==0?r=gr(o):a!==0&&(r=gr(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-nt(t),i=1<<n,r|=e[n],t&=~i;return r}function Yp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Hp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-nt(a),l=1<<o,s=i[o];s===-1?(!(l&n)||l&r)&&(i[o]=Yp(l,t)):s<=t&&(e.expiredLanes|=l),a&=~l}}function bl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function yd(){var e=yi;return yi<<=1,!(yi&4194240)&&(yi=64),e}function zo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ii(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-nt(t),e[t]=n}function Qp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-nt(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function As(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-nt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var V=0;function xd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var wd,Is,kd,Sd,Cd,Nl=!1,wi=[],Mt=null,$t=null,Ft=null,zr=new Map,Lr=new Map,It=[],Xp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function tc(e,t){switch(e){case"focusin":case"focusout":Mt=null;break;case"dragenter":case"dragleave":$t=null;break;case"mouseover":case"mouseout":Ft=null;break;case"pointerover":case"pointerout":zr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Lr.delete(t.pointerId)}}function sr(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=oi(t),t!==null&&Is(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Gp(e,t,n,r,i){switch(t){case"focusin":return Mt=sr(Mt,e,t,n,r,i),!0;case"dragenter":return $t=sr($t,e,t,n,r,i),!0;case"mouseover":return Ft=sr(Ft,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return zr.set(a,sr(zr.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,Lr.set(a,sr(Lr.get(a)||null,e,t,n,r,i)),!0}return!1}function Ed(e){var t=rn(e.target);if(t!==null){var n=xn(t);if(n!==null){if(t=n.tag,t===13){if(t=dd(n),t!==null){e.blockedOn=t,Cd(e.priority,function(){kd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Yi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Pl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);kl=r,n.target.dispatchEvent(r),kl=null}else return t=oi(n),t!==null&&Is(t),e.blockedOn=n,!1;t.shift()}return!0}function nc(e,t,n){Yi(e)&&n.delete(t)}function Kp(){Nl=!1,Mt!==null&&Yi(Mt)&&(Mt=null),$t!==null&&Yi($t)&&($t=null),Ft!==null&&Yi(Ft)&&(Ft=null),zr.forEach(nc),Lr.forEach(nc)}function ur(e,t){e.blockedOn===t&&(e.blockedOn=null,Nl||(Nl=!0,$e.unstable_scheduleCallback($e.unstable_NormalPriority,Kp)))}function Rr(e){function t(i){return ur(i,e)}if(0<wi.length){ur(wi[0],e);for(var n=1;n<wi.length;n++){var r=wi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Mt!==null&&ur(Mt,e),$t!==null&&ur($t,e),Ft!==null&&ur(Ft,e),zr.forEach(t),Lr.forEach(t),n=0;n<It.length;n++)r=It[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<It.length&&(n=It[0],n.blockedOn===null);)Ed(n),n.blockedOn===null&&It.shift()}var Fn=Pt.ReactCurrentBatchConfig,fa=!0;function Zp(e,t,n,r){var i=V,a=Fn.transition;Fn.transition=null;try{V=1,zs(e,t,n,r)}finally{V=i,Fn.transition=a}}function Jp(e,t,n,r){var i=V,a=Fn.transition;Fn.transition=null;try{V=4,zs(e,t,n,r)}finally{V=i,Fn.transition=a}}function zs(e,t,n,r){if(fa){var i=Pl(e,t,n,r);if(i===null)Wo(e,t,r,da,n),tc(e,r);else if(Gp(i,e,t,n,r))r.stopPropagation();else if(tc(e,r),t&4&&-1<Xp.indexOf(e)){for(;i!==null;){var a=oi(i);if(a!==null&&wd(a),a=Pl(e,t,n,r),a===null&&Wo(e,t,r,da,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Wo(e,t,r,null,n)}}var da=null;function Pl(e,t,n,r){if(da=null,e=Ts(r),e=rn(e),e!==null)if(t=xn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=dd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return da=e,null}function bd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Fp()){case js:return 1;case hd:return 4;case ua:case Dp:return 16;case gd:return 536870912;default:return 16}default:return 16}}var Lt=null,Ls=null,Hi=null;function Nd(){if(Hi)return Hi;var e,t=Ls,n=t.length,r,i="value"in Lt?Lt.value:Lt.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Hi=i.slice(e,1<r?1-r:void 0)}function Qi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ki(){return!0}function rc(){return!1}function De(e){function t(n,r,i,a,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(a):a[l]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?ki:rc,this.isPropagationStopped=rc,this}return q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ki)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ki)},persist:function(){},isPersistent:ki}),t}var er={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rs=De(er),ai=q({},er,{view:0,detail:0}),qp=De(ai),Lo,Ro,cr,$a=q({},ai,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ms,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==cr&&(cr&&e.type==="mousemove"?(Lo=e.screenX-cr.screenX,Ro=e.screenY-cr.screenY):Ro=Lo=0,cr=e),Lo)},movementY:function(e){return"movementY"in e?e.movementY:Ro}}),ic=De($a),e1=q({},$a,{dataTransfer:0}),t1=De(e1),n1=q({},ai,{relatedTarget:0}),Mo=De(n1),r1=q({},er,{animationName:0,elapsedTime:0,pseudoElement:0}),i1=De(r1),a1=q({},er,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),o1=De(a1),l1=q({},er,{data:0}),ac=De(l1),s1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},u1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},c1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function f1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=c1[e])?!!t[e]:!1}function Ms(){return f1}var d1=q({},ai,{key:function(e){if(e.key){var t=s1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Qi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?u1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ms,charCode:function(e){return e.type==="keypress"?Qi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Qi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),m1=De(d1),p1=q({},$a,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),oc=De(p1),v1=q({},ai,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ms}),h1=De(v1),g1=q({},er,{propertyName:0,elapsedTime:0,pseudoElement:0}),y1=De(g1),x1=q({},$a,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),w1=De(x1),k1=[9,13,27,32],$s=wt&&"CompositionEvent"in window,Sr=null;wt&&"documentMode"in document&&(Sr=document.documentMode);var S1=wt&&"TextEvent"in window&&!Sr,Pd=wt&&(!$s||Sr&&8<Sr&&11>=Sr),lc=" ",sc=!1;function _d(e,t){switch(e){case"keyup":return k1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Od(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Cn=!1;function C1(e,t){switch(e){case"compositionend":return Od(t);case"keypress":return t.which!==32?null:(sc=!0,lc);case"textInput":return e=t.data,e===lc&&sc?null:e;default:return null}}function E1(e,t){if(Cn)return e==="compositionend"||!$s&&_d(e,t)?(e=Nd(),Hi=Ls=Lt=null,Cn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Pd&&t.locale!=="ko"?null:t.data;default:return null}}var b1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function uc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!b1[e.type]:t==="textarea"}function Td(e,t,n,r){ld(r),t=ma(t,"onChange"),0<t.length&&(n=new Rs("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Cr=null,Mr=null;function N1(e){Ud(e,0)}function Fa(e){var t=Nn(e);if(ed(t))return e}function P1(e,t){if(e==="change")return t}var jd=!1;if(wt){var $o;if(wt){var Fo="oninput"in document;if(!Fo){var cc=document.createElement("div");cc.setAttribute("oninput","return;"),Fo=typeof cc.oninput=="function"}$o=Fo}else $o=!1;jd=$o&&(!document.documentMode||9<document.documentMode)}function fc(){Cr&&(Cr.detachEvent("onpropertychange",Ad),Mr=Cr=null)}function Ad(e){if(e.propertyName==="value"&&Fa(Mr)){var t=[];Td(t,Mr,e,Ts(e)),fd(N1,t)}}function _1(e,t,n){e==="focusin"?(fc(),Cr=t,Mr=n,Cr.attachEvent("onpropertychange",Ad)):e==="focusout"&&fc()}function O1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Fa(Mr)}function T1(e,t){if(e==="click")return Fa(t)}function j1(e,t){if(e==="input"||e==="change")return Fa(t)}function A1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var it=typeof Object.is=="function"?Object.is:A1;function $r(e,t){if(it(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ul.call(t,i)||!it(e[i],t[i]))return!1}return!0}function dc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function mc(e,t){var n=dc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=dc(n)}}function Id(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Id(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function zd(){for(var e=window,t=oa();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=oa(e.document)}return t}function Fs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function I1(e){var t=zd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Id(n.ownerDocument.documentElement,n)){if(r!==null&&Fs(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=mc(n,a);var o=mc(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var z1=wt&&"documentMode"in document&&11>=document.documentMode,En=null,_l=null,Er=null,Ol=!1;function pc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ol||En==null||En!==oa(r)||(r=En,"selectionStart"in r&&Fs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Er&&$r(Er,r)||(Er=r,r=ma(_l,"onSelect"),0<r.length&&(t=new Rs("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=En)))}function Si(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var bn={animationend:Si("Animation","AnimationEnd"),animationiteration:Si("Animation","AnimationIteration"),animationstart:Si("Animation","AnimationStart"),transitionend:Si("Transition","TransitionEnd")},Do={},Ld={};wt&&(Ld=document.createElement("div").style,"AnimationEvent"in window||(delete bn.animationend.animation,delete bn.animationiteration.animation,delete bn.animationstart.animation),"TransitionEvent"in window||delete bn.transitionend.transition);function Da(e){if(Do[e])return Do[e];if(!bn[e])return e;var t=bn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ld)return Do[e]=t[n];return e}var Rd=Da("animationend"),Md=Da("animationiteration"),$d=Da("animationstart"),Fd=Da("transitionend"),Dd=new Map,vc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Kt(e,t){Dd.set(e,t),yn(t,[e])}for(var Uo=0;Uo<vc.length;Uo++){var Vo=vc[Uo],L1=Vo.toLowerCase(),R1=Vo[0].toUpperCase()+Vo.slice(1);Kt(L1,"on"+R1)}Kt(Rd,"onAnimationEnd");Kt(Md,"onAnimationIteration");Kt($d,"onAnimationStart");Kt("dblclick","onDoubleClick");Kt("focusin","onFocus");Kt("focusout","onBlur");Kt(Fd,"onTransitionEnd");Wn("onMouseEnter",["mouseout","mouseover"]);Wn("onMouseLeave",["mouseout","mouseover"]);Wn("onPointerEnter",["pointerout","pointerover"]);Wn("onPointerLeave",["pointerout","pointerover"]);yn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));yn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));yn("onBeforeInput",["compositionend","keypress","textInput","paste"]);yn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));yn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));yn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),M1=new Set("cancel close invalid load scroll toggle".split(" ").concat(yr));function hc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Lp(r,t,void 0,e),e.currentTarget=null}function Ud(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var l=r[o],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==a&&i.isPropagationStopped())break e;hc(i,l,u),a=s}else for(o=0;o<r.length;o++){if(l=r[o],s=l.instance,u=l.currentTarget,l=l.listener,s!==a&&i.isPropagationStopped())break e;hc(i,l,u),a=s}}}if(sa)throw e=El,sa=!1,El=null,e}function H(e,t){var n=t[zl];n===void 0&&(n=t[zl]=new Set);var r=e+"__bubble";n.has(r)||(Vd(t,e,2,!1),n.add(r))}function Bo(e,t,n){var r=0;t&&(r|=4),Vd(n,e,r,t)}var Ci="_reactListening"+Math.random().toString(36).slice(2);function Fr(e){if(!e[Ci]){e[Ci]=!0,Gf.forEach(function(n){n!=="selectionchange"&&(M1.has(n)||Bo(n,!1,e),Bo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ci]||(t[Ci]=!0,Bo("selectionchange",!1,t))}}function Vd(e,t,n,r){switch(bd(t)){case 1:var i=Zp;break;case 4:i=Jp;break;default:i=zs}n=i.bind(null,t,n,e),i=void 0,!Cl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Wo(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;o=o.return}for(;l!==null;){if(o=rn(l),o===null)return;if(s=o.tag,s===5||s===6){r=a=o;continue e}l=l.parentNode}}r=r.return}fd(function(){var u=a,f=Ts(n),m=[];e:{var v=Dd.get(e);if(v!==void 0){var y=Rs,x=e;switch(e){case"keypress":if(Qi(n)===0)break e;case"keydown":case"keyup":y=m1;break;case"focusin":x="focus",y=Mo;break;case"focusout":x="blur",y=Mo;break;case"beforeblur":case"afterblur":y=Mo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=ic;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=t1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=h1;break;case Rd:case Md:case $d:y=i1;break;case Fd:y=y1;break;case"scroll":y=qp;break;case"wheel":y=w1;break;case"copy":case"cut":case"paste":y=o1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=oc}var g=(t&4)!==0,P=!g&&e==="scroll",d=g?v!==null?v+"Capture":null:v;g=[];for(var c=u,p;c!==null;){p=c;var w=p.stateNode;if(p.tag===5&&w!==null&&(p=w,d!==null&&(w=Ir(c,d),w!=null&&g.push(Dr(c,w,p)))),P)break;c=c.return}0<g.length&&(v=new y(v,x,null,n,f),m.push({event:v,listeners:g}))}}if(!(t&7)){e:{if(v=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",v&&n!==kl&&(x=n.relatedTarget||n.fromElement)&&(rn(x)||x[kt]))break e;if((y||v)&&(v=f.window===f?f:(v=f.ownerDocument)?v.defaultView||v.parentWindow:window,y?(x=n.relatedTarget||n.toElement,y=u,x=x?rn(x):null,x!==null&&(P=xn(x),x!==P||x.tag!==5&&x.tag!==6)&&(x=null)):(y=null,x=u),y!==x)){if(g=ic,w="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(g=oc,w="onPointerLeave",d="onPointerEnter",c="pointer"),P=y==null?v:Nn(y),p=x==null?v:Nn(x),v=new g(w,c+"leave",y,n,f),v.target=P,v.relatedTarget=p,w=null,rn(f)===u&&(g=new g(d,c+"enter",x,n,f),g.target=p,g.relatedTarget=P,w=g),P=w,y&&x)t:{for(g=y,d=x,c=0,p=g;p;p=wn(p))c++;for(p=0,w=d;w;w=wn(w))p++;for(;0<c-p;)g=wn(g),c--;for(;0<p-c;)d=wn(d),p--;for(;c--;){if(g===d||d!==null&&g===d.alternate)break t;g=wn(g),d=wn(d)}g=null}else g=null;y!==null&&gc(m,v,y,g,!1),x!==null&&P!==null&&gc(m,P,x,g,!0)}}e:{if(v=u?Nn(u):window,y=v.nodeName&&v.nodeName.toLowerCase(),y==="select"||y==="input"&&v.type==="file")var k=P1;else if(uc(v))if(jd)k=j1;else{k=O1;var b=_1}else(y=v.nodeName)&&y.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(k=T1);if(k&&(k=k(e,u))){Td(m,k,n,f);break e}b&&b(e,v,u),e==="focusout"&&(b=v._wrapperState)&&b.controlled&&v.type==="number"&&hl(v,"number",v.value)}switch(b=u?Nn(u):window,e){case"focusin":(uc(b)||b.contentEditable==="true")&&(En=b,_l=u,Er=null);break;case"focusout":Er=_l=En=null;break;case"mousedown":Ol=!0;break;case"contextmenu":case"mouseup":case"dragend":Ol=!1,pc(m,n,f);break;case"selectionchange":if(z1)break;case"keydown":case"keyup":pc(m,n,f)}var C;if($s)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else Cn?_d(e,n)&&(j="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(j="onCompositionStart");j&&(Pd&&n.locale!=="ko"&&(Cn||j!=="onCompositionStart"?j==="onCompositionEnd"&&Cn&&(C=Nd()):(Lt=f,Ls="value"in Lt?Lt.value:Lt.textContent,Cn=!0)),b=ma(u,j),0<b.length&&(j=new ac(j,e,null,n,f),m.push({event:j,listeners:b}),C?j.data=C:(C=Od(n),C!==null&&(j.data=C)))),(C=S1?C1(e,n):E1(e,n))&&(u=ma(u,"onBeforeInput"),0<u.length&&(f=new ac("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:u}),f.data=C))}Ud(m,t)})}function Dr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ma(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=Ir(e,n),a!=null&&r.unshift(Dr(e,a,i)),a=Ir(e,t),a!=null&&r.push(Dr(e,a,i))),e=e.return}return r}function wn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function gc(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,i?(s=Ir(n,a),s!=null&&o.unshift(Dr(n,s,l))):i||(s=Ir(n,a),s!=null&&o.push(Dr(n,s,l)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var $1=/\r\n?/g,F1=/\u0000|\uFFFD/g;function yc(e){return(typeof e=="string"?e:""+e).replace($1,`
`).replace(F1,"")}function Ei(e,t,n){if(t=yc(t),yc(e)!==t&&n)throw Error(S(425))}function pa(){}var Tl=null,jl=null;function Al(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Il=typeof setTimeout=="function"?setTimeout:void 0,D1=typeof clearTimeout=="function"?clearTimeout:void 0,xc=typeof Promise=="function"?Promise:void 0,U1=typeof queueMicrotask=="function"?queueMicrotask:typeof xc<"u"?function(e){return xc.resolve(null).then(e).catch(V1)}:Il;function V1(e){setTimeout(function(){throw e})}function Yo(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Rr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Rr(t)}function Dt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function wc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var tr=Math.random().toString(36).slice(2),ct="__reactFiber$"+tr,Ur="__reactProps$"+tr,kt="__reactContainer$"+tr,zl="__reactEvents$"+tr,B1="__reactListeners$"+tr,W1="__reactHandles$"+tr;function rn(e){var t=e[ct];if(t)return t;for(var n=e.parentNode;n;){if(t=n[kt]||n[ct]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=wc(e);e!==null;){if(n=e[ct])return n;e=wc(e)}return t}e=n,n=e.parentNode}return null}function oi(e){return e=e[ct]||e[kt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Nn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function Ua(e){return e[Ur]||null}var Ll=[],Pn=-1;function Zt(e){return{current:e}}function X(e){0>Pn||(e.current=Ll[Pn],Ll[Pn]=null,Pn--)}function Y(e,t){Pn++,Ll[Pn]=e.current,e.current=t}var Ht={},Ce=Zt(Ht),Te=Zt(!1),fn=Ht;function Yn(e,t){var n=e.type.contextTypes;if(!n)return Ht;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function je(e){return e=e.childContextTypes,e!=null}function va(){X(Te),X(Ce)}function kc(e,t,n){if(Ce.current!==Ht)throw Error(S(168));Y(Ce,t),Y(Te,n)}function Bd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(S(108,_p(e)||"Unknown",i));return q({},n,r)}function ha(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ht,fn=Ce.current,Y(Ce,e),Y(Te,Te.current),!0}function Sc(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=Bd(e,t,fn),r.__reactInternalMemoizedMergedChildContext=e,X(Te),X(Ce),Y(Ce,e)):X(Te),Y(Te,n)}var ht=null,Va=!1,Ho=!1;function Wd(e){ht===null?ht=[e]:ht.push(e)}function Y1(e){Va=!0,Wd(e)}function Jt(){if(!Ho&&ht!==null){Ho=!0;var e=0,t=V;try{var n=ht;for(V=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ht=null,Va=!1}catch(i){throw ht!==null&&(ht=ht.slice(e+1)),vd(js,Jt),i}finally{V=t,Ho=!1}}return null}var _n=[],On=0,ga=null,ya=0,Be=[],We=0,dn=null,gt=1,yt="";function tn(e,t){_n[On++]=ya,_n[On++]=ga,ga=e,ya=t}function Yd(e,t,n){Be[We++]=gt,Be[We++]=yt,Be[We++]=dn,dn=e;var r=gt;e=yt;var i=32-nt(r)-1;r&=~(1<<i),n+=1;var a=32-nt(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,gt=1<<32-nt(t)+i|n<<i|r,yt=a+e}else gt=1<<a|n<<i|r,yt=e}function Ds(e){e.return!==null&&(tn(e,1),Yd(e,1,0))}function Us(e){for(;e===ga;)ga=_n[--On],_n[On]=null,ya=_n[--On],_n[On]=null;for(;e===dn;)dn=Be[--We],Be[We]=null,yt=Be[--We],Be[We]=null,gt=Be[--We],Be[We]=null}var Re=null,Le=null,K=!1,et=null;function Hd(e,t){var n=Ye(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Cc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Re=e,Le=Dt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Re=e,Le=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=dn!==null?{id:gt,overflow:yt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ye(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Re=e,Le=null,!0):!1;default:return!1}}function Rl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ml(e){if(K){var t=Le;if(t){var n=t;if(!Cc(e,t)){if(Rl(e))throw Error(S(418));t=Dt(n.nextSibling);var r=Re;t&&Cc(e,t)?Hd(r,n):(e.flags=e.flags&-4097|2,K=!1,Re=e)}}else{if(Rl(e))throw Error(S(418));e.flags=e.flags&-4097|2,K=!1,Re=e}}}function Ec(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Re=e}function bi(e){if(e!==Re)return!1;if(!K)return Ec(e),K=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Al(e.type,e.memoizedProps)),t&&(t=Le)){if(Rl(e))throw Qd(),Error(S(418));for(;t;)Hd(e,t),t=Dt(t.nextSibling)}if(Ec(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Le=Dt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Le=null}}else Le=Re?Dt(e.stateNode.nextSibling):null;return!0}function Qd(){for(var e=Le;e;)e=Dt(e.nextSibling)}function Hn(){Le=Re=null,K=!1}function Vs(e){et===null?et=[e]:et.push(e)}var H1=Pt.ReactCurrentBatchConfig;function fr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var i=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var l=i.refs;o===null?delete l[a]:l[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function Ni(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function bc(e){var t=e._init;return t(e._payload)}function Xd(e){function t(d,c){if(e){var p=d.deletions;p===null?(d.deletions=[c],d.flags|=16):p.push(c)}}function n(d,c){if(!e)return null;for(;c!==null;)t(d,c),c=c.sibling;return null}function r(d,c){for(d=new Map;c!==null;)c.key!==null?d.set(c.key,c):d.set(c.index,c),c=c.sibling;return d}function i(d,c){return d=Wt(d,c),d.index=0,d.sibling=null,d}function a(d,c,p){return d.index=p,e?(p=d.alternate,p!==null?(p=p.index,p<c?(d.flags|=2,c):p):(d.flags|=2,c)):(d.flags|=1048576,c)}function o(d){return e&&d.alternate===null&&(d.flags|=2),d}function l(d,c,p,w){return c===null||c.tag!==6?(c=qo(p,d.mode,w),c.return=d,c):(c=i(c,p),c.return=d,c)}function s(d,c,p,w){var k=p.type;return k===Sn?f(d,c,p.props.children,w,p.key):c!==null&&(c.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===jt&&bc(k)===c.type)?(w=i(c,p.props),w.ref=fr(d,c,p),w.return=d,w):(w=ea(p.type,p.key,p.props,null,d.mode,w),w.ref=fr(d,c,p),w.return=d,w)}function u(d,c,p,w){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=el(p,d.mode,w),c.return=d,c):(c=i(c,p.children||[]),c.return=d,c)}function f(d,c,p,w,k){return c===null||c.tag!==7?(c=cn(p,d.mode,w,k),c.return=d,c):(c=i(c,p),c.return=d,c)}function m(d,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=qo(""+c,d.mode,p),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case vi:return p=ea(c.type,c.key,c.props,null,d.mode,p),p.ref=fr(d,null,c),p.return=d,p;case kn:return c=el(c,d.mode,p),c.return=d,c;case jt:var w=c._init;return m(d,w(c._payload),p)}if(hr(c)||or(c))return c=cn(c,d.mode,p,null),c.return=d,c;Ni(d,c)}return null}function v(d,c,p,w){var k=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return k!==null?null:l(d,c,""+p,w);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case vi:return p.key===k?s(d,c,p,w):null;case kn:return p.key===k?u(d,c,p,w):null;case jt:return k=p._init,v(d,c,k(p._payload),w)}if(hr(p)||or(p))return k!==null?null:f(d,c,p,w,null);Ni(d,p)}return null}function y(d,c,p,w,k){if(typeof w=="string"&&w!==""||typeof w=="number")return d=d.get(p)||null,l(c,d,""+w,k);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case vi:return d=d.get(w.key===null?p:w.key)||null,s(c,d,w,k);case kn:return d=d.get(w.key===null?p:w.key)||null,u(c,d,w,k);case jt:var b=w._init;return y(d,c,p,b(w._payload),k)}if(hr(w)||or(w))return d=d.get(p)||null,f(c,d,w,k,null);Ni(c,w)}return null}function x(d,c,p,w){for(var k=null,b=null,C=c,j=c=0,D=null;C!==null&&j<p.length;j++){C.index>j?(D=C,C=null):D=C.sibling;var z=v(d,C,p[j],w);if(z===null){C===null&&(C=D);break}e&&C&&z.alternate===null&&t(d,C),c=a(z,c,j),b===null?k=z:b.sibling=z,b=z,C=D}if(j===p.length)return n(d,C),K&&tn(d,j),k;if(C===null){for(;j<p.length;j++)C=m(d,p[j],w),C!==null&&(c=a(C,c,j),b===null?k=C:b.sibling=C,b=C);return K&&tn(d,j),k}for(C=r(d,C);j<p.length;j++)D=y(C,d,j,p[j],w),D!==null&&(e&&D.alternate!==null&&C.delete(D.key===null?j:D.key),c=a(D,c,j),b===null?k=D:b.sibling=D,b=D);return e&&C.forEach(function(Ke){return t(d,Ke)}),K&&tn(d,j),k}function g(d,c,p,w){var k=or(p);if(typeof k!="function")throw Error(S(150));if(p=k.call(p),p==null)throw Error(S(151));for(var b=k=null,C=c,j=c=0,D=null,z=p.next();C!==null&&!z.done;j++,z=p.next()){C.index>j?(D=C,C=null):D=C.sibling;var Ke=v(d,C,z.value,w);if(Ke===null){C===null&&(C=D);break}e&&C&&Ke.alternate===null&&t(d,C),c=a(Ke,c,j),b===null?k=Ke:b.sibling=Ke,b=Ke,C=D}if(z.done)return n(d,C),K&&tn(d,j),k;if(C===null){for(;!z.done;j++,z=p.next())z=m(d,z.value,w),z!==null&&(c=a(z,c,j),b===null?k=z:b.sibling=z,b=z);return K&&tn(d,j),k}for(C=r(d,C);!z.done;j++,z=p.next())z=y(C,d,j,z.value,w),z!==null&&(e&&z.alternate!==null&&C.delete(z.key===null?j:z.key),c=a(z,c,j),b===null?k=z:b.sibling=z,b=z);return e&&C.forEach(function(ir){return t(d,ir)}),K&&tn(d,j),k}function P(d,c,p,w){if(typeof p=="object"&&p!==null&&p.type===Sn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case vi:e:{for(var k=p.key,b=c;b!==null;){if(b.key===k){if(k=p.type,k===Sn){if(b.tag===7){n(d,b.sibling),c=i(b,p.props.children),c.return=d,d=c;break e}}else if(b.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===jt&&bc(k)===b.type){n(d,b.sibling),c=i(b,p.props),c.ref=fr(d,b,p),c.return=d,d=c;break e}n(d,b);break}else t(d,b);b=b.sibling}p.type===Sn?(c=cn(p.props.children,d.mode,w,p.key),c.return=d,d=c):(w=ea(p.type,p.key,p.props,null,d.mode,w),w.ref=fr(d,c,p),w.return=d,d=w)}return o(d);case kn:e:{for(b=p.key;c!==null;){if(c.key===b)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(d,c.sibling),c=i(c,p.children||[]),c.return=d,d=c;break e}else{n(d,c);break}else t(d,c);c=c.sibling}c=el(p,d.mode,w),c.return=d,d=c}return o(d);case jt:return b=p._init,P(d,c,b(p._payload),w)}if(hr(p))return x(d,c,p,w);if(or(p))return g(d,c,p,w);Ni(d,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(d,c.sibling),c=i(c,p),c.return=d,d=c):(n(d,c),c=qo(p,d.mode,w),c.return=d,d=c),o(d)):n(d,c)}return P}var Qn=Xd(!0),Gd=Xd(!1),xa=Zt(null),wa=null,Tn=null,Bs=null;function Ws(){Bs=Tn=wa=null}function Ys(e){var t=xa.current;X(xa),e._currentValue=t}function $l(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Dn(e,t){wa=e,Bs=Tn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Oe=!0),e.firstContext=null)}function Qe(e){var t=e._currentValue;if(Bs!==e)if(e={context:e,memoizedValue:t,next:null},Tn===null){if(wa===null)throw Error(S(308));Tn=e,wa.dependencies={lanes:0,firstContext:e}}else Tn=Tn.next=e;return t}var an=null;function Hs(e){an===null?an=[e]:an.push(e)}function Kd(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Hs(t)):(n.next=i.next,i.next=n),t.interleaved=n,St(e,r)}function St(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var At=!1;function Qs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Zd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function xt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ut(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,St(e,n)}return i=r.interleaved,i===null?(t.next=t,Hs(r)):(t.next=i.next,i.next=t),r.interleaved=t,St(e,n)}function Xi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,As(e,n)}}function Nc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ka(e,t,n,r){var i=e.updateQueue;At=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var s=l,u=s.next;s.next=null,o===null?a=u:o.next=u,o=s;var f=e.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=u:l.next=u,f.lastBaseUpdate=s))}if(a!==null){var m=i.baseState;o=0,f=u=s=null,l=a;do{var v=l.lane,y=l.eventTime;if((r&v)===v){f!==null&&(f=f.next={eventTime:y,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var x=e,g=l;switch(v=t,y=n,g.tag){case 1:if(x=g.payload,typeof x=="function"){m=x.call(y,m,v);break e}m=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=g.payload,v=typeof x=="function"?x.call(y,m,v):x,v==null)break e;m=q({},m,v);break e;case 2:At=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,v=i.effects,v===null?i.effects=[l]:v.push(l))}else y={eventTime:y,lane:v,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(u=f=y,s=m):f=f.next=y,o|=v;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;v=l,l=v.next,v.next=null,i.lastBaseUpdate=v,i.shared.pending=null}}while(!0);if(f===null&&(s=m),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);pn|=o,e.lanes=o,e.memoizedState=m}}function Pc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var li={},mt=Zt(li),Vr=Zt(li),Br=Zt(li);function on(e){if(e===li)throw Error(S(174));return e}function Xs(e,t){switch(Y(Br,t),Y(Vr,e),Y(mt,li),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:yl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=yl(t,e)}X(mt),Y(mt,t)}function Xn(){X(mt),X(Vr),X(Br)}function Jd(e){on(Br.current);var t=on(mt.current),n=yl(t,e.type);t!==n&&(Y(Vr,e),Y(mt,n))}function Gs(e){Vr.current===e&&(X(mt),X(Vr))}var Z=Zt(0);function Sa(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Qo=[];function Ks(){for(var e=0;e<Qo.length;e++)Qo[e]._workInProgressVersionPrimary=null;Qo.length=0}var Gi=Pt.ReactCurrentDispatcher,Xo=Pt.ReactCurrentBatchConfig,mn=0,J=null,oe=null,fe=null,Ca=!1,br=!1,Wr=0,Q1=0;function xe(){throw Error(S(321))}function Zs(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!it(e[n],t[n]))return!1;return!0}function Js(e,t,n,r,i,a){if(mn=a,J=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Gi.current=e===null||e.memoizedState===null?Z1:J1,e=n(r,i),br){a=0;do{if(br=!1,Wr=0,25<=a)throw Error(S(301));a+=1,fe=oe=null,t.updateQueue=null,Gi.current=q1,e=n(r,i)}while(br)}if(Gi.current=Ea,t=oe!==null&&oe.next!==null,mn=0,fe=oe=J=null,Ca=!1,t)throw Error(S(300));return e}function qs(){var e=Wr!==0;return Wr=0,e}function ot(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fe===null?J.memoizedState=fe=e:fe=fe.next=e,fe}function Xe(){if(oe===null){var e=J.alternate;e=e!==null?e.memoizedState:null}else e=oe.next;var t=fe===null?J.memoizedState:fe.next;if(t!==null)fe=t,oe=e;else{if(e===null)throw Error(S(310));oe=e,e={memoizedState:oe.memoizedState,baseState:oe.baseState,baseQueue:oe.baseQueue,queue:oe.queue,next:null},fe===null?J.memoizedState=fe=e:fe=fe.next=e}return fe}function Yr(e,t){return typeof t=="function"?t(e):t}function Go(e){var t=Xe(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=oe,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var l=o=null,s=null,u=a;do{var f=u.lane;if((mn&f)===f)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var m={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=m,o=r):s=s.next=m,J.lanes|=f,pn|=f}u=u.next}while(u!==null&&u!==a);s===null?o=r:s.next=l,it(r,t.memoizedState)||(Oe=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do a=i.lane,J.lanes|=a,pn|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ko(e){var t=Xe(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);it(a,t.memoizedState)||(Oe=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function qd(){}function em(e,t){var n=J,r=Xe(),i=t(),a=!it(r.memoizedState,i);if(a&&(r.memoizedState=i,Oe=!0),r=r.queue,eu(rm.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||fe!==null&&fe.memoizedState.tag&1){if(n.flags|=2048,Hr(9,nm.bind(null,n,r,i,t),void 0,null),de===null)throw Error(S(349));mn&30||tm(n,t,i)}return i}function tm(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function nm(e,t,n,r){t.value=n,t.getSnapshot=r,im(t)&&am(e)}function rm(e,t,n){return n(function(){im(t)&&am(e)})}function im(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!it(e,n)}catch{return!0}}function am(e){var t=St(e,1);t!==null&&rt(t,e,1,-1)}function _c(e){var t=ot();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Yr,lastRenderedState:e},t.queue=e,e=e.dispatch=K1.bind(null,J,e),[t.memoizedState,e]}function Hr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function om(){return Xe().memoizedState}function Ki(e,t,n,r){var i=ot();J.flags|=e,i.memoizedState=Hr(1|t,n,void 0,r===void 0?null:r)}function Ba(e,t,n,r){var i=Xe();r=r===void 0?null:r;var a=void 0;if(oe!==null){var o=oe.memoizedState;if(a=o.destroy,r!==null&&Zs(r,o.deps)){i.memoizedState=Hr(t,n,a,r);return}}J.flags|=e,i.memoizedState=Hr(1|t,n,a,r)}function Oc(e,t){return Ki(8390656,8,e,t)}function eu(e,t){return Ba(2048,8,e,t)}function lm(e,t){return Ba(4,2,e,t)}function sm(e,t){return Ba(4,4,e,t)}function um(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function cm(e,t,n){return n=n!=null?n.concat([e]):null,Ba(4,4,um.bind(null,t,e),n)}function tu(){}function fm(e,t){var n=Xe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Zs(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function dm(e,t){var n=Xe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Zs(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function mm(e,t,n){return mn&21?(it(n,t)||(n=yd(),J.lanes|=n,pn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Oe=!0),e.memoizedState=n)}function X1(e,t){var n=V;V=n!==0&&4>n?n:4,e(!0);var r=Xo.transition;Xo.transition={};try{e(!1),t()}finally{V=n,Xo.transition=r}}function pm(){return Xe().memoizedState}function G1(e,t,n){var r=Bt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},vm(e))hm(t,n);else if(n=Kd(e,t,n,r),n!==null){var i=be();rt(n,e,r,i),gm(n,t,r)}}function K1(e,t,n){var r=Bt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(vm(e))hm(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,l=a(o,n);if(i.hasEagerState=!0,i.eagerState=l,it(l,o)){var s=t.interleaved;s===null?(i.next=i,Hs(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=Kd(e,t,i,r),n!==null&&(i=be(),rt(n,e,r,i),gm(n,t,r))}}function vm(e){var t=e.alternate;return e===J||t!==null&&t===J}function hm(e,t){br=Ca=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function gm(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,As(e,n)}}var Ea={readContext:Qe,useCallback:xe,useContext:xe,useEffect:xe,useImperativeHandle:xe,useInsertionEffect:xe,useLayoutEffect:xe,useMemo:xe,useReducer:xe,useRef:xe,useState:xe,useDebugValue:xe,useDeferredValue:xe,useTransition:xe,useMutableSource:xe,useSyncExternalStore:xe,useId:xe,unstable_isNewReconciler:!1},Z1={readContext:Qe,useCallback:function(e,t){return ot().memoizedState=[e,t===void 0?null:t],e},useContext:Qe,useEffect:Oc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ki(4194308,4,um.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ki(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ki(4,2,e,t)},useMemo:function(e,t){var n=ot();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ot();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=G1.bind(null,J,e),[r.memoizedState,e]},useRef:function(e){var t=ot();return e={current:e},t.memoizedState=e},useState:_c,useDebugValue:tu,useDeferredValue:function(e){return ot().memoizedState=e},useTransition:function(){var e=_c(!1),t=e[0];return e=X1.bind(null,e[1]),ot().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=J,i=ot();if(K){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),de===null)throw Error(S(349));mn&30||tm(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,Oc(rm.bind(null,r,a,e),[e]),r.flags|=2048,Hr(9,nm.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=ot(),t=de.identifierPrefix;if(K){var n=yt,r=gt;n=(r&~(1<<32-nt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Wr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Q1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},J1={readContext:Qe,useCallback:fm,useContext:Qe,useEffect:eu,useImperativeHandle:cm,useInsertionEffect:lm,useLayoutEffect:sm,useMemo:dm,useReducer:Go,useRef:om,useState:function(){return Go(Yr)},useDebugValue:tu,useDeferredValue:function(e){var t=Xe();return mm(t,oe.memoizedState,e)},useTransition:function(){var e=Go(Yr)[0],t=Xe().memoizedState;return[e,t]},useMutableSource:qd,useSyncExternalStore:em,useId:pm,unstable_isNewReconciler:!1},q1={readContext:Qe,useCallback:fm,useContext:Qe,useEffect:eu,useImperativeHandle:cm,useInsertionEffect:lm,useLayoutEffect:sm,useMemo:dm,useReducer:Ko,useRef:om,useState:function(){return Ko(Yr)},useDebugValue:tu,useDeferredValue:function(e){var t=Xe();return oe===null?t.memoizedState=e:mm(t,oe.memoizedState,e)},useTransition:function(){var e=Ko(Yr)[0],t=Xe().memoizedState;return[e,t]},useMutableSource:qd,useSyncExternalStore:em,useId:pm,unstable_isNewReconciler:!1};function Je(e,t){if(e&&e.defaultProps){t=q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Fl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Wa={isMounted:function(e){return(e=e._reactInternals)?xn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=be(),i=Bt(e),a=xt(r,i);a.payload=t,n!=null&&(a.callback=n),t=Ut(e,a,i),t!==null&&(rt(t,e,i,r),Xi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=be(),i=Bt(e),a=xt(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Ut(e,a,i),t!==null&&(rt(t,e,i,r),Xi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=be(),r=Bt(e),i=xt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Ut(e,i,r),t!==null&&(rt(t,e,r,n),Xi(t,e,r))}};function Tc(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!$r(n,r)||!$r(i,a):!0}function ym(e,t,n){var r=!1,i=Ht,a=t.contextType;return typeof a=="object"&&a!==null?a=Qe(a):(i=je(t)?fn:Ce.current,r=t.contextTypes,a=(r=r!=null)?Yn(e,i):Ht),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Wa,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function jc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Wa.enqueueReplaceState(t,t.state,null)}function Dl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Qs(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=Qe(a):(a=je(t)?fn:Ce.current,i.context=Yn(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Fl(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Wa.enqueueReplaceState(i,i.state,null),ka(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Gn(e,t){try{var n="",r=t;do n+=Pp(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function Zo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ul(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ev=typeof WeakMap=="function"?WeakMap:Map;function xm(e,t,n){n=xt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Na||(Na=!0,Zl=r),Ul(e,t)},n}function wm(e,t,n){n=xt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ul(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){Ul(e,t),typeof r!="function"&&(Vt===null?Vt=new Set([this]):Vt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Ac(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new ev;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=pv.bind(null,e,t,n),t.then(e,e))}function Ic(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function zc(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=xt(-1,1),t.tag=2,Ut(n,t,1))),n.lanes|=1),e)}var tv=Pt.ReactCurrentOwner,Oe=!1;function Ee(e,t,n,r){t.child=e===null?Gd(t,null,n,r):Qn(t,e.child,n,r)}function Lc(e,t,n,r,i){n=n.render;var a=t.ref;return Dn(t,i),r=Js(e,t,n,r,a,i),n=qs(),e!==null&&!Oe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ct(e,t,i)):(K&&n&&Ds(t),t.flags|=1,Ee(e,t,r,i),t.child)}function Rc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a=="function"&&!uu(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,km(e,t,a,r,i)):(e=ea(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:$r,n(o,r)&&e.ref===t.ref)return Ct(e,t,i)}return t.flags|=1,e=Wt(a,r),e.ref=t.ref,e.return=t,t.child=e}function km(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if($r(a,r)&&e.ref===t.ref)if(Oe=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(Oe=!0);else return t.lanes=e.lanes,Ct(e,t,i)}return Vl(e,t,n,r,i)}function Sm(e,t,n){var r=t.pendingProps,i=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Y(An,ze),ze|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Y(An,ze),ze|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,Y(An,ze),ze|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,Y(An,ze),ze|=r;return Ee(e,t,i,n),t.child}function Cm(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Vl(e,t,n,r,i){var a=je(n)?fn:Ce.current;return a=Yn(t,a),Dn(t,i),n=Js(e,t,n,r,a,i),r=qs(),e!==null&&!Oe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ct(e,t,i)):(K&&r&&Ds(t),t.flags|=1,Ee(e,t,n,i),t.child)}function Mc(e,t,n,r,i){if(je(n)){var a=!0;ha(t)}else a=!1;if(Dn(t,i),t.stateNode===null)Zi(e,t),ym(t,n,r),Dl(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var s=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Qe(u):(u=je(n)?fn:Ce.current,u=Yn(t,u));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||s!==u)&&jc(t,o,r,u),At=!1;var v=t.memoizedState;o.state=v,ka(t,r,o,i),s=t.memoizedState,l!==r||v!==s||Te.current||At?(typeof f=="function"&&(Fl(t,n,f,r),s=t.memoizedState),(l=At||Tc(t,n,l,r,v,s,u))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),o.props=r,o.state=s,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Zd(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Je(t.type,l),o.props=u,m=t.pendingProps,v=o.context,s=n.contextType,typeof s=="object"&&s!==null?s=Qe(s):(s=je(n)?fn:Ce.current,s=Yn(t,s));var y=n.getDerivedStateFromProps;(f=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||v!==s)&&jc(t,o,r,s),At=!1,v=t.memoizedState,o.state=v,ka(t,r,o,i);var x=t.memoizedState;l!==m||v!==x||Te.current||At?(typeof y=="function"&&(Fl(t,n,y,r),x=t.memoizedState),(u=At||Tc(t,n,u,r,v,x,s)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,x,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,x,s)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),o.props=r,o.state=x,o.context=s,r=u):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),r=!1)}return Bl(e,t,n,r,a,i)}function Bl(e,t,n,r,i,a){Cm(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&Sc(t,n,!1),Ct(e,t,a);r=t.stateNode,tv.current=t;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Qn(t,e.child,null,a),t.child=Qn(t,null,l,a)):Ee(e,t,l,a),t.memoizedState=r.state,i&&Sc(t,n,!0),t.child}function Em(e){var t=e.stateNode;t.pendingContext?kc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&kc(e,t.context,!1),Xs(e,t.containerInfo)}function $c(e,t,n,r,i){return Hn(),Vs(i),t.flags|=256,Ee(e,t,n,r),t.child}var Wl={dehydrated:null,treeContext:null,retryLane:0};function Yl(e){return{baseLanes:e,cachePool:null,transitions:null}}function bm(e,t,n){var r=t.pendingProps,i=Z.current,a=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Y(Z,i&1),e===null)return Ml(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:"hidden",children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=Qa(o,r,0,null),e=cn(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Yl(n),t.memoizedState=Wl,e):nu(t,o));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return nv(e,t,o,r,l,i,n);if(a){a=r.fallback,o=t.mode,i=e.child,l=i.sibling;var s={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Wt(i,s),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?a=Wt(l,a):(a=cn(a,o,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?Yl(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=Wl,r}return a=e.child,e=a.sibling,r=Wt(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function nu(e,t){return t=Qa({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Pi(e,t,n,r){return r!==null&&Vs(r),Qn(t,e.child,null,n),e=nu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function nv(e,t,n,r,i,a,o){if(n)return t.flags&256?(t.flags&=-257,r=Zo(Error(S(422))),Pi(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=Qa({mode:"visible",children:r.children},i,0,null),a=cn(a,i,o,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&Qn(t,e.child,null,o),t.child.memoizedState=Yl(o),t.memoizedState=Wl,a);if(!(t.mode&1))return Pi(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,a=Error(S(419)),r=Zo(a,r,void 0),Pi(e,t,o,r)}if(l=(o&e.childLanes)!==0,Oe||l){if(r=de,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,St(e,i),rt(r,e,i,-1))}return su(),r=Zo(Error(S(421))),Pi(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=vv.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,Le=Dt(i.nextSibling),Re=t,K=!0,et=null,e!==null&&(Be[We++]=gt,Be[We++]=yt,Be[We++]=dn,gt=e.id,yt=e.overflow,dn=t),t=nu(t,r.children),t.flags|=4096,t)}function Fc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),$l(e.return,t,n)}function Jo(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function Nm(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(Ee(e,t,r.children,n),r=Z.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Fc(e,n,t);else if(e.tag===19)Fc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Y(Z,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Sa(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Jo(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Sa(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Jo(t,!0,n,null,a);break;case"together":Jo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Zi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ct(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),pn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=Wt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Wt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function rv(e,t,n){switch(t.tag){case 3:Em(t),Hn();break;case 5:Jd(t);break;case 1:je(t.type)&&ha(t);break;case 4:Xs(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Y(xa,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Y(Z,Z.current&1),t.flags|=128,null):n&t.child.childLanes?bm(e,t,n):(Y(Z,Z.current&1),e=Ct(e,t,n),e!==null?e.sibling:null);Y(Z,Z.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Nm(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Y(Z,Z.current),r)break;return null;case 22:case 23:return t.lanes=0,Sm(e,t,n)}return Ct(e,t,n)}var Pm,Hl,_m,Om;Pm=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Hl=function(){};_m=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,on(mt.current);var a=null;switch(n){case"input":i=pl(e,i),r=pl(e,r),a=[];break;case"select":i=q({},i,{value:void 0}),r=q({},r,{value:void 0}),a=[];break;case"textarea":i=gl(e,i),r=gl(e,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=pa)}xl(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(jr.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var s=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in s)s.hasOwnProperty(o)&&l[o]!==s[o]&&(n||(n={}),n[o]=s[o])}else n||(a||(a=[]),a.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(a=a||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(a=a||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(jr.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&H("scroll",e),a||l===s||(a=[])):(a=a||[]).push(u,s))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}};Om=function(e,t,n,r){n!==r&&(t.flags|=4)};function dr(e,t){if(!K)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function we(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function iv(e,t,n){var r=t.pendingProps;switch(Us(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return we(t),null;case 1:return je(t.type)&&va(),we(t),null;case 3:return r=t.stateNode,Xn(),X(Te),X(Ce),Ks(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(bi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,et!==null&&(es(et),et=null))),Hl(e,t),we(t),null;case 5:Gs(t);var i=on(Br.current);if(n=t.type,e!==null&&t.stateNode!=null)_m(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return we(t),null}if(e=on(mt.current),bi(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[ct]=t,r[Ur]=a,e=(t.mode&1)!==0,n){case"dialog":H("cancel",r),H("close",r);break;case"iframe":case"object":case"embed":H("load",r);break;case"video":case"audio":for(i=0;i<yr.length;i++)H(yr[i],r);break;case"source":H("error",r);break;case"img":case"image":case"link":H("error",r),H("load",r);break;case"details":H("toggle",r);break;case"input":Xu(r,a),H("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},H("invalid",r);break;case"textarea":Ku(r,a),H("invalid",r)}xl(n,a),i=null;for(var o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="children"?typeof l=="string"?r.textContent!==l&&(a.suppressHydrationWarning!==!0&&Ei(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(a.suppressHydrationWarning!==!0&&Ei(r.textContent,l,e),i=["children",""+l]):jr.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&H("scroll",r)}switch(n){case"input":hi(r),Gu(r,a,!0);break;case"textarea":hi(r),Zu(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=pa)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=rd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[ct]=t,e[Ur]=r,Pm(e,t,!1,!1),t.stateNode=e;e:{switch(o=wl(n,r),n){case"dialog":H("cancel",e),H("close",e),i=r;break;case"iframe":case"object":case"embed":H("load",e),i=r;break;case"video":case"audio":for(i=0;i<yr.length;i++)H(yr[i],e);i=r;break;case"source":H("error",e),i=r;break;case"img":case"image":case"link":H("error",e),H("load",e),i=r;break;case"details":H("toggle",e),i=r;break;case"input":Xu(e,r),i=pl(e,r),H("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=q({},r,{value:void 0}),H("invalid",e);break;case"textarea":Ku(e,r),i=gl(e,r),H("invalid",e);break;default:i=r}xl(n,i),l=i;for(a in l)if(l.hasOwnProperty(a)){var s=l[a];a==="style"?od(e,s):a==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&id(e,s)):a==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Ar(e,s):typeof s=="number"&&Ar(e,""+s):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(jr.hasOwnProperty(a)?s!=null&&a==="onScroll"&&H("scroll",e):s!=null&&Ns(e,a,s,o))}switch(n){case"input":hi(e),Gu(e,r,!1);break;case"textarea":hi(e),Zu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Yt(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?Rn(e,!!r.multiple,a,!1):r.defaultValue!=null&&Rn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=pa)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return we(t),null;case 6:if(e&&t.stateNode!=null)Om(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=on(Br.current),on(mt.current),bi(t)){if(r=t.stateNode,n=t.memoizedProps,r[ct]=t,(a=r.nodeValue!==n)&&(e=Re,e!==null))switch(e.tag){case 3:Ei(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ei(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ct]=t,t.stateNode=r}return we(t),null;case 13:if(X(Z),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(K&&Le!==null&&t.mode&1&&!(t.flags&128))Qd(),Hn(),t.flags|=98560,a=!1;else if(a=bi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(S(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(S(317));a[ct]=t}else Hn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;we(t),a=!1}else et!==null&&(es(et),et=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Z.current&1?le===0&&(le=3):su())),t.updateQueue!==null&&(t.flags|=4),we(t),null);case 4:return Xn(),Hl(e,t),e===null&&Fr(t.stateNode.containerInfo),we(t),null;case 10:return Ys(t.type._context),we(t),null;case 17:return je(t.type)&&va(),we(t),null;case 19:if(X(Z),a=t.memoizedState,a===null)return we(t),null;if(r=(t.flags&128)!==0,o=a.rendering,o===null)if(r)dr(a,!1);else{if(le!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Sa(e),o!==null){for(t.flags|=128,dr(a,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Y(Z,Z.current&1|2),t.child}e=e.sibling}a.tail!==null&&re()>Kn&&(t.flags|=128,r=!0,dr(a,!1),t.lanes=4194304)}else{if(!r)if(e=Sa(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),dr(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!K)return we(t),null}else 2*re()-a.renderingStartTime>Kn&&n!==1073741824&&(t.flags|=128,r=!0,dr(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(n=a.last,n!==null?n.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=re(),t.sibling=null,n=Z.current,Y(Z,r?n&1|2:n&1),t):(we(t),null);case 22:case 23:return lu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ze&1073741824&&(we(t),t.subtreeFlags&6&&(t.flags|=8192)):we(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function av(e,t){switch(Us(t),t.tag){case 1:return je(t.type)&&va(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Xn(),X(Te),X(Ce),Ks(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Gs(t),null;case 13:if(X(Z),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));Hn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return X(Z),null;case 4:return Xn(),null;case 10:return Ys(t.type._context),null;case 22:case 23:return lu(),null;case 24:return null;default:return null}}var _i=!1,Se=!1,ov=typeof WeakSet=="function"?WeakSet:Set,_=null;function jn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ee(e,t,r)}else n.current=null}function Ql(e,t,n){try{n()}catch(r){ee(e,t,r)}}var Dc=!1;function lv(e,t){if(Tl=fa,e=zd(),Fs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,l=-1,s=-1,u=0,f=0,m=e,v=null;t:for(;;){for(var y;m!==n||i!==0&&m.nodeType!==3||(l=o+i),m!==a||r!==0&&m.nodeType!==3||(s=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(y=m.firstChild)!==null;)v=m,m=y;for(;;){if(m===e)break t;if(v===n&&++u===i&&(l=o),v===a&&++f===r&&(s=o),(y=m.nextSibling)!==null)break;m=v,v=m.parentNode}m=y}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(jl={focusedElem:e,selectionRange:n},fa=!1,_=t;_!==null;)if(t=_,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,_=e;else for(;_!==null;){t=_;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var g=x.memoizedProps,P=x.memoizedState,d=t.stateNode,c=d.getSnapshotBeforeUpdate(t.elementType===t.type?g:Je(t.type,g),P);d.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(w){ee(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,_=e;break}_=t.return}return x=Dc,Dc=!1,x}function Nr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&Ql(t,n,a)}i=i.next}while(i!==r)}}function Ya(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Xl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Tm(e){var t=e.alternate;t!==null&&(e.alternate=null,Tm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ct],delete t[Ur],delete t[zl],delete t[B1],delete t[W1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function jm(e){return e.tag===5||e.tag===3||e.tag===4}function Uc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||jm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Gl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=pa));else if(r!==4&&(e=e.child,e!==null))for(Gl(e,t,n),e=e.sibling;e!==null;)Gl(e,t,n),e=e.sibling}function Kl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Kl(e,t,n),e=e.sibling;e!==null;)Kl(e,t,n),e=e.sibling}var pe=null,qe=!1;function Ot(e,t,n){for(n=n.child;n!==null;)Am(e,t,n),n=n.sibling}function Am(e,t,n){if(dt&&typeof dt.onCommitFiberUnmount=="function")try{dt.onCommitFiberUnmount(Ma,n)}catch{}switch(n.tag){case 5:Se||jn(n,t);case 6:var r=pe,i=qe;pe=null,Ot(e,t,n),pe=r,qe=i,pe!==null&&(qe?(e=pe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):pe.removeChild(n.stateNode));break;case 18:pe!==null&&(qe?(e=pe,n=n.stateNode,e.nodeType===8?Yo(e.parentNode,n):e.nodeType===1&&Yo(e,n),Rr(e)):Yo(pe,n.stateNode));break;case 4:r=pe,i=qe,pe=n.stateNode.containerInfo,qe=!0,Ot(e,t,n),pe=r,qe=i;break;case 0:case 11:case 14:case 15:if(!Se&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&Ql(n,t,o),i=i.next}while(i!==r)}Ot(e,t,n);break;case 1:if(!Se&&(jn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ee(n,t,l)}Ot(e,t,n);break;case 21:Ot(e,t,n);break;case 22:n.mode&1?(Se=(r=Se)||n.memoizedState!==null,Ot(e,t,n),Se=r):Ot(e,t,n);break;default:Ot(e,t,n)}}function Vc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new ov),t.forEach(function(r){var i=hv.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ze(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:pe=l.stateNode,qe=!1;break e;case 3:pe=l.stateNode.containerInfo,qe=!0;break e;case 4:pe=l.stateNode.containerInfo,qe=!0;break e}l=l.return}if(pe===null)throw Error(S(160));Am(a,o,i),pe=null,qe=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){ee(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Im(t,e),t=t.sibling}function Im(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ze(t,e),at(e),r&4){try{Nr(3,e,e.return),Ya(3,e)}catch(g){ee(e,e.return,g)}try{Nr(5,e,e.return)}catch(g){ee(e,e.return,g)}}break;case 1:Ze(t,e),at(e),r&512&&n!==null&&jn(n,n.return);break;case 5:if(Ze(t,e),at(e),r&512&&n!==null&&jn(n,n.return),e.flags&32){var i=e.stateNode;try{Ar(i,"")}catch(g){ee(e,e.return,g)}}if(r&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,o=n!==null?n.memoizedProps:a,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&a.type==="radio"&&a.name!=null&&td(i,a),wl(l,o);var u=wl(l,a);for(o=0;o<s.length;o+=2){var f=s[o],m=s[o+1];f==="style"?od(i,m):f==="dangerouslySetInnerHTML"?id(i,m):f==="children"?Ar(i,m):Ns(i,f,m,u)}switch(l){case"input":vl(i,a);break;case"textarea":nd(i,a);break;case"select":var v=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var y=a.value;y!=null?Rn(i,!!a.multiple,y,!1):v!==!!a.multiple&&(a.defaultValue!=null?Rn(i,!!a.multiple,a.defaultValue,!0):Rn(i,!!a.multiple,a.multiple?[]:"",!1))}i[Ur]=a}catch(g){ee(e,e.return,g)}}break;case 6:if(Ze(t,e),at(e),r&4){if(e.stateNode===null)throw Error(S(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(g){ee(e,e.return,g)}}break;case 3:if(Ze(t,e),at(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Rr(t.containerInfo)}catch(g){ee(e,e.return,g)}break;case 4:Ze(t,e),at(e);break;case 13:Ze(t,e),at(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(au=re())),r&4&&Vc(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(Se=(u=Se)||f,Ze(t,e),Se=u):Ze(t,e),at(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(_=e,f=e.child;f!==null;){for(m=_=f;_!==null;){switch(v=_,y=v.child,v.tag){case 0:case 11:case 14:case 15:Nr(4,v,v.return);break;case 1:jn(v,v.return);var x=v.stateNode;if(typeof x.componentWillUnmount=="function"){r=v,n=v.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(g){ee(r,n,g)}}break;case 5:jn(v,v.return);break;case 22:if(v.memoizedState!==null){Wc(m);continue}}y!==null?(y.return=v,_=y):Wc(m)}f=f.sibling}e:for(f=null,m=e;;){if(m.tag===5){if(f===null){f=m;try{i=m.stateNode,u?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(l=m.stateNode,s=m.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=ad("display",o))}catch(g){ee(e,e.return,g)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(g){ee(e,e.return,g)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Ze(t,e),at(e),r&4&&Vc(e);break;case 21:break;default:Ze(t,e),at(e)}}function at(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(jm(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ar(i,""),r.flags&=-33);var a=Uc(e);Kl(e,a,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Uc(e);Gl(e,l,o);break;default:throw Error(S(161))}}catch(s){ee(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function sv(e,t,n){_=e,zm(e)}function zm(e,t,n){for(var r=(e.mode&1)!==0;_!==null;){var i=_,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||_i;if(!o){var l=i.alternate,s=l!==null&&l.memoizedState!==null||Se;l=_i;var u=Se;if(_i=o,(Se=s)&&!u)for(_=i;_!==null;)o=_,s=o.child,o.tag===22&&o.memoizedState!==null?Yc(i):s!==null?(s.return=o,_=s):Yc(i);for(;a!==null;)_=a,zm(a),a=a.sibling;_=i,_i=l,Se=u}Bc(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,_=a):Bc(e)}}function Bc(e){for(;_!==null;){var t=_;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Se||Ya(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Se)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Je(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Pc(t,a,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Pc(t,o,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&Rr(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}Se||t.flags&512&&Xl(t)}catch(v){ee(t,t.return,v)}}if(t===e){_=null;break}if(n=t.sibling,n!==null){n.return=t.return,_=n;break}_=t.return}}function Wc(e){for(;_!==null;){var t=_;if(t===e){_=null;break}var n=t.sibling;if(n!==null){n.return=t.return,_=n;break}_=t.return}}function Yc(e){for(;_!==null;){var t=_;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ya(4,t)}catch(s){ee(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){ee(t,i,s)}}var a=t.return;try{Xl(t)}catch(s){ee(t,a,s)}break;case 5:var o=t.return;try{Xl(t)}catch(s){ee(t,o,s)}}}catch(s){ee(t,t.return,s)}if(t===e){_=null;break}var l=t.sibling;if(l!==null){l.return=t.return,_=l;break}_=t.return}}var uv=Math.ceil,ba=Pt.ReactCurrentDispatcher,ru=Pt.ReactCurrentOwner,He=Pt.ReactCurrentBatchConfig,M=0,de=null,ae=null,ge=0,ze=0,An=Zt(0),le=0,Qr=null,pn=0,Ha=0,iu=0,Pr=null,_e=null,au=0,Kn=1/0,vt=null,Na=!1,Zl=null,Vt=null,Oi=!1,Rt=null,Pa=0,_r=0,Jl=null,Ji=-1,qi=0;function be(){return M&6?re():Ji!==-1?Ji:Ji=re()}function Bt(e){return e.mode&1?M&2&&ge!==0?ge&-ge:H1.transition!==null?(qi===0&&(qi=yd()),qi):(e=V,e!==0||(e=window.event,e=e===void 0?16:bd(e.type)),e):1}function rt(e,t,n,r){if(50<_r)throw _r=0,Jl=null,Error(S(185));ii(e,n,r),(!(M&2)||e!==de)&&(e===de&&(!(M&2)&&(Ha|=n),le===4&&zt(e,ge)),Ae(e,r),n===1&&M===0&&!(t.mode&1)&&(Kn=re()+500,Va&&Jt()))}function Ae(e,t){var n=e.callbackNode;Hp(e,t);var r=ca(e,e===de?ge:0);if(r===0)n!==null&&ec(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ec(n),t===1)e.tag===0?Y1(Hc.bind(null,e)):Wd(Hc.bind(null,e)),U1(function(){!(M&6)&&Jt()}),n=null;else{switch(xd(r)){case 1:n=js;break;case 4:n=hd;break;case 16:n=ua;break;case 536870912:n=gd;break;default:n=ua}n=Vm(n,Lm.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Lm(e,t){if(Ji=-1,qi=0,M&6)throw Error(S(327));var n=e.callbackNode;if(Un()&&e.callbackNode!==n)return null;var r=ca(e,e===de?ge:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=_a(e,r);else{t=r;var i=M;M|=2;var a=Mm();(de!==e||ge!==t)&&(vt=null,Kn=re()+500,un(e,t));do try{dv();break}catch(l){Rm(e,l)}while(!0);Ws(),ba.current=a,M=i,ae!==null?t=0:(de=null,ge=0,t=le)}if(t!==0){if(t===2&&(i=bl(e),i!==0&&(r=i,t=ql(e,i))),t===1)throw n=Qr,un(e,0),zt(e,r),Ae(e,re()),n;if(t===6)zt(e,r);else{if(i=e.current.alternate,!(r&30)&&!cv(i)&&(t=_a(e,r),t===2&&(a=bl(e),a!==0&&(r=a,t=ql(e,a))),t===1))throw n=Qr,un(e,0),zt(e,r),Ae(e,re()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:nn(e,_e,vt);break;case 3:if(zt(e,r),(r&130023424)===r&&(t=au+500-re(),10<t)){if(ca(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){be(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Il(nn.bind(null,e,_e,vt),t);break}nn(e,_e,vt);break;case 4:if(zt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-nt(r);a=1<<o,o=t[o],o>i&&(i=o),r&=~a}if(r=i,r=re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*uv(r/1960))-r,10<r){e.timeoutHandle=Il(nn.bind(null,e,_e,vt),r);break}nn(e,_e,vt);break;case 5:nn(e,_e,vt);break;default:throw Error(S(329))}}}return Ae(e,re()),e.callbackNode===n?Lm.bind(null,e):null}function ql(e,t){var n=Pr;return e.current.memoizedState.isDehydrated&&(un(e,t).flags|=256),e=_a(e,t),e!==2&&(t=_e,_e=n,t!==null&&es(t)),e}function es(e){_e===null?_e=e:_e.push.apply(_e,e)}function cv(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!it(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function zt(e,t){for(t&=~iu,t&=~Ha,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-nt(t),r=1<<n;e[n]=-1,t&=~r}}function Hc(e){if(M&6)throw Error(S(327));Un();var t=ca(e,0);if(!(t&1))return Ae(e,re()),null;var n=_a(e,t);if(e.tag!==0&&n===2){var r=bl(e);r!==0&&(t=r,n=ql(e,r))}if(n===1)throw n=Qr,un(e,0),zt(e,t),Ae(e,re()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,nn(e,_e,vt),Ae(e,re()),null}function ou(e,t){var n=M;M|=1;try{return e(t)}finally{M=n,M===0&&(Kn=re()+500,Va&&Jt())}}function vn(e){Rt!==null&&Rt.tag===0&&!(M&6)&&Un();var t=M;M|=1;var n=He.transition,r=V;try{if(He.transition=null,V=1,e)return e()}finally{V=r,He.transition=n,M=t,!(M&6)&&Jt()}}function lu(){ze=An.current,X(An)}function un(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,D1(n)),ae!==null)for(n=ae.return;n!==null;){var r=n;switch(Us(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&va();break;case 3:Xn(),X(Te),X(Ce),Ks();break;case 5:Gs(r);break;case 4:Xn();break;case 13:X(Z);break;case 19:X(Z);break;case 10:Ys(r.type._context);break;case 22:case 23:lu()}n=n.return}if(de=e,ae=e=Wt(e.current,null),ge=ze=t,le=0,Qr=null,iu=Ha=pn=0,_e=Pr=null,an!==null){for(t=0;t<an.length;t++)if(n=an[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}an=null}return e}function Rm(e,t){do{var n=ae;try{if(Ws(),Gi.current=Ea,Ca){for(var r=J.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ca=!1}if(mn=0,fe=oe=J=null,br=!1,Wr=0,ru.current=null,n===null||n.return===null){le=1,Qr=t,ae=null;break}e:{var a=e,o=n.return,l=n,s=t;if(t=ge,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,f=l,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var v=f.alternate;v?(f.updateQueue=v.updateQueue,f.memoizedState=v.memoizedState,f.lanes=v.lanes):(f.updateQueue=null,f.memoizedState=null)}var y=Ic(o);if(y!==null){y.flags&=-257,zc(y,o,l,a,t),y.mode&1&&Ac(a,u,t),t=y,s=u;var x=t.updateQueue;if(x===null){var g=new Set;g.add(s),t.updateQueue=g}else x.add(s);break e}else{if(!(t&1)){Ac(a,u,t),su();break e}s=Error(S(426))}}else if(K&&l.mode&1){var P=Ic(o);if(P!==null){!(P.flags&65536)&&(P.flags|=256),zc(P,o,l,a,t),Vs(Gn(s,l));break e}}a=s=Gn(s,l),le!==4&&(le=2),Pr===null?Pr=[a]:Pr.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var d=xm(a,s,t);Nc(a,d);break e;case 1:l=s;var c=a.type,p=a.stateNode;if(!(a.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Vt===null||!Vt.has(p)))){a.flags|=65536,t&=-t,a.lanes|=t;var w=wm(a,l,t);Nc(a,w);break e}}a=a.return}while(a!==null)}Fm(n)}catch(k){t=k,ae===n&&n!==null&&(ae=n=n.return);continue}break}while(!0)}function Mm(){var e=ba.current;return ba.current=Ea,e===null?Ea:e}function su(){(le===0||le===3||le===2)&&(le=4),de===null||!(pn&268435455)&&!(Ha&268435455)||zt(de,ge)}function _a(e,t){var n=M;M|=2;var r=Mm();(de!==e||ge!==t)&&(vt=null,un(e,t));do try{fv();break}catch(i){Rm(e,i)}while(!0);if(Ws(),M=n,ba.current=r,ae!==null)throw Error(S(261));return de=null,ge=0,le}function fv(){for(;ae!==null;)$m(ae)}function dv(){for(;ae!==null&&!Mp();)$m(ae)}function $m(e){var t=Um(e.alternate,e,ze);e.memoizedProps=e.pendingProps,t===null?Fm(e):ae=t,ru.current=null}function Fm(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=av(n,t),n!==null){n.flags&=32767,ae=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{le=6,ae=null;return}}else if(n=iv(n,t,ze),n!==null){ae=n;return}if(t=t.sibling,t!==null){ae=t;return}ae=t=e}while(t!==null);le===0&&(le=5)}function nn(e,t,n){var r=V,i=He.transition;try{He.transition=null,V=1,mv(e,t,n,r)}finally{He.transition=i,V=r}return null}function mv(e,t,n,r){do Un();while(Rt!==null);if(M&6)throw Error(S(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(Qp(e,a),e===de&&(ae=de=null,ge=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Oi||(Oi=!0,Vm(ua,function(){return Un(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=He.transition,He.transition=null;var o=V;V=1;var l=M;M|=4,ru.current=null,lv(e,n),Im(n,e),I1(jl),fa=!!Tl,jl=Tl=null,e.current=n,sv(n),$p(),M=l,V=o,He.transition=a}else e.current=n;if(Oi&&(Oi=!1,Rt=e,Pa=i),a=e.pendingLanes,a===0&&(Vt=null),Up(n.stateNode),Ae(e,re()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Na)throw Na=!1,e=Zl,Zl=null,e;return Pa&1&&e.tag!==0&&Un(),a=e.pendingLanes,a&1?e===Jl?_r++:(_r=0,Jl=e):_r=0,Jt(),null}function Un(){if(Rt!==null){var e=xd(Pa),t=He.transition,n=V;try{if(He.transition=null,V=16>e?16:e,Rt===null)var r=!1;else{if(e=Rt,Rt=null,Pa=0,M&6)throw Error(S(331));var i=M;for(M|=4,_=e.current;_!==null;){var a=_,o=a.child;if(_.flags&16){var l=a.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(_=u;_!==null;){var f=_;switch(f.tag){case 0:case 11:case 15:Nr(8,f,a)}var m=f.child;if(m!==null)m.return=f,_=m;else for(;_!==null;){f=_;var v=f.sibling,y=f.return;if(Tm(f),f===u){_=null;break}if(v!==null){v.return=y,_=v;break}_=y}}}var x=a.alternate;if(x!==null){var g=x.child;if(g!==null){x.child=null;do{var P=g.sibling;g.sibling=null,g=P}while(g!==null)}}_=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,_=o;else e:for(;_!==null;){if(a=_,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Nr(9,a,a.return)}var d=a.sibling;if(d!==null){d.return=a.return,_=d;break e}_=a.return}}var c=e.current;for(_=c;_!==null;){o=_;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,_=p;else e:for(o=c;_!==null;){if(l=_,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ya(9,l)}}catch(k){ee(l,l.return,k)}if(l===o){_=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,_=w;break e}_=l.return}}if(M=i,Jt(),dt&&typeof dt.onPostCommitFiberRoot=="function")try{dt.onPostCommitFiberRoot(Ma,e)}catch{}r=!0}return r}finally{V=n,He.transition=t}}return!1}function Qc(e,t,n){t=Gn(n,t),t=xm(e,t,1),e=Ut(e,t,1),t=be(),e!==null&&(ii(e,1,t),Ae(e,t))}function ee(e,t,n){if(e.tag===3)Qc(e,e,n);else for(;t!==null;){if(t.tag===3){Qc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Vt===null||!Vt.has(r))){e=Gn(n,e),e=wm(t,e,1),t=Ut(t,e,1),e=be(),t!==null&&(ii(t,1,e),Ae(t,e));break}}t=t.return}}function pv(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=be(),e.pingedLanes|=e.suspendedLanes&n,de===e&&(ge&n)===n&&(le===4||le===3&&(ge&130023424)===ge&&500>re()-au?un(e,0):iu|=n),Ae(e,t)}function Dm(e,t){t===0&&(e.mode&1?(t=xi,xi<<=1,!(xi&130023424)&&(xi=4194304)):t=1);var n=be();e=St(e,t),e!==null&&(ii(e,t,n),Ae(e,n))}function vv(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Dm(e,n)}function hv(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),Dm(e,n)}var Um;Um=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Te.current)Oe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Oe=!1,rv(e,t,n);Oe=!!(e.flags&131072)}else Oe=!1,K&&t.flags&1048576&&Yd(t,ya,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Zi(e,t),e=t.pendingProps;var i=Yn(t,Ce.current);Dn(t,n),i=Js(null,t,r,e,i,n);var a=qs();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,je(r)?(a=!0,ha(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Qs(t),i.updater=Wa,t.stateNode=i,i._reactInternals=t,Dl(t,r,e,n),t=Bl(null,t,r,!0,a,n)):(t.tag=0,K&&a&&Ds(t),Ee(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Zi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=yv(r),e=Je(r,e),i){case 0:t=Vl(null,t,r,e,n);break e;case 1:t=Mc(null,t,r,e,n);break e;case 11:t=Lc(null,t,r,e,n);break e;case 14:t=Rc(null,t,r,Je(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Je(r,i),Vl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Je(r,i),Mc(e,t,r,i,n);case 3:e:{if(Em(t),e===null)throw Error(S(387));r=t.pendingProps,a=t.memoizedState,i=a.element,Zd(e,t),ka(t,r,null,n);var o=t.memoizedState;if(r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=Gn(Error(S(423)),t),t=$c(e,t,r,n,i);break e}else if(r!==i){i=Gn(Error(S(424)),t),t=$c(e,t,r,n,i);break e}else for(Le=Dt(t.stateNode.containerInfo.firstChild),Re=t,K=!0,et=null,n=Gd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Hn(),r===i){t=Ct(e,t,n);break e}Ee(e,t,r,n)}t=t.child}return t;case 5:return Jd(t),e===null&&Ml(t),r=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,o=i.children,Al(r,i)?o=null:a!==null&&Al(r,a)&&(t.flags|=32),Cm(e,t),Ee(e,t,o,n),t.child;case 6:return e===null&&Ml(t),null;case 13:return bm(e,t,n);case 4:return Xs(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Qn(t,null,r,n):Ee(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Je(r,i),Lc(e,t,r,i,n);case 7:return Ee(e,t,t.pendingProps,n),t.child;case 8:return Ee(e,t,t.pendingProps.children,n),t.child;case 12:return Ee(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,o=i.value,Y(xa,r._currentValue),r._currentValue=o,a!==null)if(it(a.value,o)){if(a.children===i.children&&!Te.current){t=Ct(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var l=a.dependencies;if(l!==null){o=a.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(a.tag===1){s=xt(-1,n&-n),s.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?s.next=s:(s.next=f.next,f.next=s),u.pending=s}}a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),$l(a.return,n,t),l.lanes|=n;break}s=s.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(S(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),$l(o,n,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}Ee(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Dn(t,n),i=Qe(i),r=r(i),t.flags|=1,Ee(e,t,r,n),t.child;case 14:return r=t.type,i=Je(r,t.pendingProps),i=Je(r.type,i),Rc(e,t,r,i,n);case 15:return km(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Je(r,i),Zi(e,t),t.tag=1,je(r)?(e=!0,ha(t)):e=!1,Dn(t,n),ym(t,r,i),Dl(t,r,i,n),Bl(null,t,r,!0,e,n);case 19:return Nm(e,t,n);case 22:return Sm(e,t,n)}throw Error(S(156,t.tag))};function Vm(e,t){return vd(e,t)}function gv(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ye(e,t,n,r){return new gv(e,t,n,r)}function uu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function yv(e){if(typeof e=="function")return uu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===_s)return 11;if(e===Os)return 14}return 2}function Wt(e,t){var n=e.alternate;return n===null?(n=Ye(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ea(e,t,n,r,i,a){var o=2;if(r=e,typeof e=="function")uu(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Sn:return cn(n.children,i,a,t);case Ps:o=8,i|=8;break;case cl:return e=Ye(12,n,t,i|2),e.elementType=cl,e.lanes=a,e;case fl:return e=Ye(13,n,t,i),e.elementType=fl,e.lanes=a,e;case dl:return e=Ye(19,n,t,i),e.elementType=dl,e.lanes=a,e;case Jf:return Qa(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Kf:o=10;break e;case Zf:o=9;break e;case _s:o=11;break e;case Os:o=14;break e;case jt:o=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=Ye(o,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function cn(e,t,n,r){return e=Ye(7,e,r,t),e.lanes=n,e}function Qa(e,t,n,r){return e=Ye(22,e,r,t),e.elementType=Jf,e.lanes=n,e.stateNode={isHidden:!1},e}function qo(e,t,n){return e=Ye(6,e,null,t),e.lanes=n,e}function el(e,t,n){return t=Ye(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function xv(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zo(0),this.expirationTimes=zo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zo(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function cu(e,t,n,r,i,a,o,l,s){return e=new xv(e,t,n,l,s),t===1?(t=1,a===!0&&(t|=8)):t=0,a=Ye(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Qs(a),e}function wv(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:kn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Bm(e){if(!e)return Ht;e=e._reactInternals;e:{if(xn(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(je(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(je(n))return Bd(e,n,t)}return t}function Wm(e,t,n,r,i,a,o,l,s){return e=cu(n,r,!0,e,i,a,o,l,s),e.context=Bm(null),n=e.current,r=be(),i=Bt(n),a=xt(r,i),a.callback=t??null,Ut(n,a,i),e.current.lanes=i,ii(e,i,r),Ae(e,r),e}function Xa(e,t,n,r){var i=t.current,a=be(),o=Bt(i);return n=Bm(n),t.context===null?t.context=n:t.pendingContext=n,t=xt(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ut(i,t,o),e!==null&&(rt(e,i,o,a),Xi(e,i,o)),o}function Oa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Xc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function fu(e,t){Xc(e,t),(e=e.alternate)&&Xc(e,t)}function kv(){return null}var Ym=typeof reportError=="function"?reportError:function(e){console.error(e)};function du(e){this._internalRoot=e}Ga.prototype.render=du.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));Xa(e,t,null,null)};Ga.prototype.unmount=du.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;vn(function(){Xa(null,e,null,null)}),t[kt]=null}};function Ga(e){this._internalRoot=e}Ga.prototype.unstable_scheduleHydration=function(e){if(e){var t=Sd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<It.length&&t!==0&&t<It[n].priority;n++);It.splice(n,0,e),n===0&&Ed(e)}};function mu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ka(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Gc(){}function Sv(e,t,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var u=Oa(o);a.call(u)}}var o=Wm(t,r,e,0,null,!1,!1,"",Gc);return e._reactRootContainer=o,e[kt]=o.current,Fr(e.nodeType===8?e.parentNode:e),vn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Oa(s);l.call(u)}}var s=cu(e,0,!1,null,null,!1,!1,"",Gc);return e._reactRootContainer=s,e[kt]=s.current,Fr(e.nodeType===8?e.parentNode:e),vn(function(){Xa(t,s,n,r)}),s}function Za(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i=="function"){var l=i;i=function(){var s=Oa(o);l.call(s)}}Xa(t,o,e,i)}else o=Sv(n,t,e,i,r);return Oa(o)}wd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=gr(t.pendingLanes);n!==0&&(As(t,n|1),Ae(t,re()),!(M&6)&&(Kn=re()+500,Jt()))}break;case 13:vn(function(){var r=St(e,1);if(r!==null){var i=be();rt(r,e,1,i)}}),fu(e,1)}};Is=function(e){if(e.tag===13){var t=St(e,134217728);if(t!==null){var n=be();rt(t,e,134217728,n)}fu(e,134217728)}};kd=function(e){if(e.tag===13){var t=Bt(e),n=St(e,t);if(n!==null){var r=be();rt(n,e,t,r)}fu(e,t)}};Sd=function(){return V};Cd=function(e,t){var n=V;try{return V=e,t()}finally{V=n}};Sl=function(e,t,n){switch(t){case"input":if(vl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ua(r);if(!i)throw Error(S(90));ed(r),vl(r,i)}}}break;case"textarea":nd(e,n);break;case"select":t=n.value,t!=null&&Rn(e,!!n.multiple,t,!1)}};ud=ou;cd=vn;var Cv={usingClientEntryPoint:!1,Events:[oi,Nn,Ua,ld,sd,ou]},mr={findFiberByHostInstance:rn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ev={bundleType:mr.bundleType,version:mr.version,rendererPackageName:mr.rendererPackageName,rendererConfig:mr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Pt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=md(e),e===null?null:e.stateNode},findFiberByHostInstance:mr.findFiberByHostInstance||kv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ti=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ti.isDisabled&&Ti.supportsFiber)try{Ma=Ti.inject(Ev),dt=Ti}catch{}}Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cv;Fe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!mu(t))throw Error(S(200));return wv(e,t,null,n)};Fe.createRoot=function(e,t){if(!mu(e))throw Error(S(299));var n=!1,r="",i=Ym;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=cu(e,1,!1,null,null,n,!1,r,i),e[kt]=t.current,Fr(e.nodeType===8?e.parentNode:e),new du(t)};Fe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=md(t),e=e===null?null:e.stateNode,e};Fe.flushSync=function(e){return vn(e)};Fe.hydrate=function(e,t,n){if(!Ka(t))throw Error(S(200));return Za(null,e,t,!0,n)};Fe.hydrateRoot=function(e,t,n){if(!mu(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",o=Ym;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Wm(t,null,e,1,n??null,i,!1,a,o),e[kt]=t.current,Fr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ga(t)};Fe.render=function(e,t,n){if(!Ka(t))throw Error(S(200));return Za(null,e,t,!1,n)};Fe.unmountComponentAtNode=function(e){if(!Ka(e))throw Error(S(40));return e._reactRootContainer?(vn(function(){Za(null,null,e,!1,function(){e._reactRootContainer=null,e[kt]=null})}),!0):!1};Fe.unstable_batchedUpdates=ou;Fe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ka(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return Za(e,t,n,!1,r)};Fe.version="18.3.1-next-f1338f8080-20240426";function Hm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Hm)}catch(e){console.error(e)}}Hm(),Hf.exports=Fe;var bv=Hf.exports,Kc=bv;sl.createRoot=Kc.createRoot,sl.hydrateRoot=Kc.hydrateRoot;const Nv="/airpods-website/assets/airpods-info-CdOSZA_U.svg",Pv="data:image/svg+xml,%3csvg%20width='43'%20height='42'%20viewBox='0%200%2043%2042'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M30%201C36.627%201%2042%209.059%2042%2019V41H36V19C36%2018.121%2035.949%2017.26%2035.868%2016.414C34.3612%2018.0607%2032.2321%2018.999%2030%2019C26.6863%2019%2024%2016.3137%2024%2013V7C24%205.4087%2024.6321%203.88258%2025.7574%202.75736C26.8826%201.63214%2028.4087%201%2030%201Z'%20stroke='%23161C2D'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M12%201C5.373%201%200%209.059%200%2019V41H6V19C6%2018.121%206.051%2017.26%206.132%2016.414C7.63885%2018.0607%209.76792%2018.999%2012%2019C15.3137%2019%2018%2016.3137%2018%2013V7C18%203.68629%2015.3137%201%2012%201Z'%20stroke='%23161C2D'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M12%208V12'%20stroke='%23161C2D'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M30%208V12'%20stroke='%23161C2D'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",_v="data:image/svg+xml,%3csvg%20width='45'%20height='42'%20viewBox='0%200%2045%2042'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M18.5%201V39'%20stroke='%23161C2D'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M12.5%2011V32'%20stroke='%23161C2D'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M6.5%2017V25'%20stroke='%23161C2D'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M0.5%2019V23'%20stroke='%23161C2D'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M25.5%203V41'%20stroke='%23161C2D'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M31.5%2011V32'%20stroke='%23161C2D'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M37.5%2017V25'%20stroke='%23161C2D'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M43.5%2019V23'%20stroke='%23161C2D'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";function Ov(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function Tv(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var jv=function(){function e(n){var r=this;this._insertTag=function(i){var a;r.tags.length===0?r.insertionPoint?a=r.insertionPoint.nextSibling:r.prepend?a=r.container.firstChild:a=r.before:a=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,a),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Tv(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var a=Ov(i);try{a.insertRule(r,a.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),ke="-ms-",Ta="-moz-",$="-webkit-",Qm="comm",pu="rule",vu="decl",Av="@import",Xm="@keyframes",Iv="@layer",zv=Math.abs,Ja=String.fromCharCode,Lv=Object.assign;function Rv(e,t){return ve(e,0)^45?(((t<<2^ve(e,0))<<2^ve(e,1))<<2^ve(e,2))<<2^ve(e,3):0}function Gm(e){return e.trim()}function Mv(e,t){return(e=t.exec(e))?e[0]:e}function F(e,t,n){return e.replace(t,n)}function ts(e,t){return e.indexOf(t)}function ve(e,t){return e.charCodeAt(t)|0}function Xr(e,t,n){return e.slice(t,n)}function lt(e){return e.length}function hu(e){return e.length}function ji(e,t){return t.push(e),e}function $v(e,t){return e.map(t).join("")}var qa=1,Zn=1,Km=0,Ie=0,ie=0,nr="";function eo(e,t,n,r,i,a,o){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:qa,column:Zn,length:o,return:""}}function pr(e,t){return Lv(eo("",null,null,"",null,null,0),e,{length:-e.length},t)}function Fv(){return ie}function Dv(){return ie=Ie>0?ve(nr,--Ie):0,Zn--,ie===10&&(Zn=1,qa--),ie}function Me(){return ie=Ie<Km?ve(nr,Ie++):0,Zn++,ie===10&&(Zn=1,qa++),ie}function pt(){return ve(nr,Ie)}function ta(){return Ie}function si(e,t){return Xr(nr,e,t)}function Gr(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Zm(e){return qa=Zn=1,Km=lt(nr=e),Ie=0,[]}function Jm(e){return nr="",e}function na(e){return Gm(si(Ie-1,ns(e===91?e+2:e===40?e+1:e)))}function Uv(e){for(;(ie=pt())&&ie<33;)Me();return Gr(e)>2||Gr(ie)>3?"":" "}function Vv(e,t){for(;--t&&Me()&&!(ie<48||ie>102||ie>57&&ie<65||ie>70&&ie<97););return si(e,ta()+(t<6&&pt()==32&&Me()==32))}function ns(e){for(;Me();)switch(ie){case e:return Ie;case 34:case 39:e!==34&&e!==39&&ns(ie);break;case 40:e===41&&ns(e);break;case 92:Me();break}return Ie}function Bv(e,t){for(;Me()&&e+ie!==57;)if(e+ie===84&&pt()===47)break;return"/*"+si(t,Ie-1)+"*"+Ja(e===47?e:Me())}function Wv(e){for(;!Gr(pt());)Me();return si(e,Ie)}function Yv(e){return Jm(ra("",null,null,null,[""],e=Zm(e),0,[0],e))}function ra(e,t,n,r,i,a,o,l,s){for(var u=0,f=0,m=o,v=0,y=0,x=0,g=1,P=1,d=1,c=0,p="",w=i,k=a,b=r,C=p;P;)switch(x=c,c=Me()){case 40:if(x!=108&&ve(C,m-1)==58){ts(C+=F(na(c),"&","&\f"),"&\f")!=-1&&(d=-1);break}case 34:case 39:case 91:C+=na(c);break;case 9:case 10:case 13:case 32:C+=Uv(x);break;case 92:C+=Vv(ta()-1,7);continue;case 47:switch(pt()){case 42:case 47:ji(Hv(Bv(Me(),ta()),t,n),s);break;default:C+="/"}break;case 123*g:l[u++]=lt(C)*d;case 125*g:case 59:case 0:switch(c){case 0:case 125:P=0;case 59+f:d==-1&&(C=F(C,/\f/g,"")),y>0&&lt(C)-m&&ji(y>32?Jc(C+";",r,n,m-1):Jc(F(C," ","")+";",r,n,m-2),s);break;case 59:C+=";";default:if(ji(b=Zc(C,t,n,u,f,i,l,p,w=[],k=[],m),a),c===123)if(f===0)ra(C,t,b,b,w,a,m,l,k);else switch(v===99&&ve(C,3)===110?100:v){case 100:case 108:case 109:case 115:ra(e,b,b,r&&ji(Zc(e,b,b,0,0,i,l,p,i,w=[],m),k),i,k,m,l,r?w:k);break;default:ra(C,b,b,b,[""],k,0,l,k)}}u=f=y=0,g=d=1,p=C="",m=o;break;case 58:m=1+lt(C),y=x;default:if(g<1){if(c==123)--g;else if(c==125&&g++==0&&Dv()==125)continue}switch(C+=Ja(c),c*g){case 38:d=f>0?1:(C+="\f",-1);break;case 44:l[u++]=(lt(C)-1)*d,d=1;break;case 64:pt()===45&&(C+=na(Me())),v=pt(),f=m=lt(p=C+=Wv(ta())),c++;break;case 45:x===45&&lt(C)==2&&(g=0)}}return a}function Zc(e,t,n,r,i,a,o,l,s,u,f){for(var m=i-1,v=i===0?a:[""],y=hu(v),x=0,g=0,P=0;x<r;++x)for(var d=0,c=Xr(e,m+1,m=zv(g=o[x])),p=e;d<y;++d)(p=Gm(g>0?v[d]+" "+c:F(c,/&\f/g,v[d])))&&(s[P++]=p);return eo(e,t,n,i===0?pu:l,s,u,f)}function Hv(e,t,n){return eo(e,t,n,Qm,Ja(Fv()),Xr(e,2,-2),0)}function Jc(e,t,n,r){return eo(e,t,n,vu,Xr(e,0,r),Xr(e,r+1,-1),r)}function Vn(e,t){for(var n="",r=hu(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function Qv(e,t,n,r){switch(e.type){case Iv:if(e.children.length)break;case Av:case vu:return e.return=e.return||e.value;case Qm:return"";case Xm:return e.return=e.value+"{"+Vn(e.children,r)+"}";case pu:e.value=e.props.join(",")}return lt(n=Vn(e.children,r))?e.return=e.value+"{"+n+"}":""}function Xv(e){var t=hu(e);return function(n,r,i,a){for(var o="",l=0;l<t;l++)o+=e[l](n,r,i,a)||"";return o}}function Gv(e){return function(t){t.root||(t=t.return)&&e(t)}}function Kv(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Zv=function(t,n,r){for(var i=0,a=0;i=a,a=pt(),i===38&&a===12&&(n[r]=1),!Gr(a);)Me();return si(t,Ie)},Jv=function(t,n){var r=-1,i=44;do switch(Gr(i)){case 0:i===38&&pt()===12&&(n[r]=1),t[r]+=Zv(Ie-1,n,r);break;case 2:t[r]+=na(i);break;case 4:if(i===44){t[++r]=pt()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=Ja(i)}while(i=Me());return t},qv=function(t,n){return Jm(Jv(Zm(t),n))},qc=new WeakMap,eh=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!qc.get(r))&&!i){qc.set(t,!0);for(var a=[],o=qv(n,a),l=r.props,s=0,u=0;s<o.length;s++)for(var f=0;f<l.length;f++,u++)t.props[u]=a[s]?o[s].replace(/&\f/g,l[f]):l[f]+" "+o[s]}}},th=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function qm(e,t){switch(Rv(e,t)){case 5103:return $+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return $+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return $+e+Ta+e+ke+e+e;case 6828:case 4268:return $+e+ke+e+e;case 6165:return $+e+ke+"flex-"+e+e;case 5187:return $+e+F(e,/(\w+).+(:[^]+)/,$+"box-$1$2"+ke+"flex-$1$2")+e;case 5443:return $+e+ke+"flex-item-"+F(e,/flex-|-self/,"")+e;case 4675:return $+e+ke+"flex-line-pack"+F(e,/align-content|flex-|-self/,"")+e;case 5548:return $+e+ke+F(e,"shrink","negative")+e;case 5292:return $+e+ke+F(e,"basis","preferred-size")+e;case 6060:return $+"box-"+F(e,"-grow","")+$+e+ke+F(e,"grow","positive")+e;case 4554:return $+F(e,/([^-])(transform)/g,"$1"+$+"$2")+e;case 6187:return F(F(F(e,/(zoom-|grab)/,$+"$1"),/(image-set)/,$+"$1"),e,"")+e;case 5495:case 3959:return F(e,/(image-set\([^]*)/,$+"$1$`$1");case 4968:return F(F(e,/(.+:)(flex-)?(.*)/,$+"box-pack:$3"+ke+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+$+e+e;case 4095:case 3583:case 4068:case 2532:return F(e,/(.+)-inline(.+)/,$+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(lt(e)-1-t>6)switch(ve(e,t+1)){case 109:if(ve(e,t+4)!==45)break;case 102:return F(e,/(.+:)(.+)-([^]+)/,"$1"+$+"$2-$3$1"+Ta+(ve(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ts(e,"stretch")?qm(F(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(ve(e,t+1)!==115)break;case 6444:switch(ve(e,lt(e)-3-(~ts(e,"!important")&&10))){case 107:return F(e,":",":"+$)+e;case 101:return F(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+$+(ve(e,14)===45?"inline-":"")+"box$3$1"+$+"$2$3$1"+ke+"$2box$3")+e}break;case 5936:switch(ve(e,t+11)){case 114:return $+e+ke+F(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return $+e+ke+F(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return $+e+ke+F(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return $+e+ke+e+e}return e}var nh=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case vu:t.return=qm(t.value,t.length);break;case Xm:return Vn([pr(t,{value:F(t.value,"@","@"+$)})],i);case pu:if(t.length)return $v(t.props,function(a){switch(Mv(a,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Vn([pr(t,{props:[F(a,/:(read-\w+)/,":"+Ta+"$1")]})],i);case"::placeholder":return Vn([pr(t,{props:[F(a,/:(plac\w+)/,":"+$+"input-$1")]}),pr(t,{props:[F(a,/:(plac\w+)/,":"+Ta+"$1")]}),pr(t,{props:[F(a,/:(plac\w+)/,ke+"input-$1")]})],i)}return""})}},rh=[nh],ih=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(g){var P=g.getAttribute("data-emotion");P.indexOf(" ")!==-1&&(document.head.appendChild(g),g.setAttribute("data-s",""))})}var i=t.stylisPlugins||rh,a={},o,l=[];o=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(g){for(var P=g.getAttribute("data-emotion").split(" "),d=1;d<P.length;d++)a[P[d]]=!0;l.push(g)});var s,u=[eh,th];{var f,m=[Qv,Gv(function(g){f.insert(g)})],v=Xv(u.concat(i,m)),y=function(P){return Vn(Yv(P),v)};s=function(P,d,c,p){f=c,y(P?P+"{"+d.styles+"}":d.styles),p&&(x.inserted[d.name]=!0)}}var x={key:n,sheet:new jv({key:n,container:o,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:a,registered:{},insert:s};return x.sheet.hydrate(l),x},e0={exports:{}},B={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var me=typeof Symbol=="function"&&Symbol.for,gu=me?Symbol.for("react.element"):60103,yu=me?Symbol.for("react.portal"):60106,to=me?Symbol.for("react.fragment"):60107,no=me?Symbol.for("react.strict_mode"):60108,ro=me?Symbol.for("react.profiler"):60114,io=me?Symbol.for("react.provider"):60109,ao=me?Symbol.for("react.context"):60110,xu=me?Symbol.for("react.async_mode"):60111,oo=me?Symbol.for("react.concurrent_mode"):60111,lo=me?Symbol.for("react.forward_ref"):60112,so=me?Symbol.for("react.suspense"):60113,ah=me?Symbol.for("react.suspense_list"):60120,uo=me?Symbol.for("react.memo"):60115,co=me?Symbol.for("react.lazy"):60116,oh=me?Symbol.for("react.block"):60121,lh=me?Symbol.for("react.fundamental"):60117,sh=me?Symbol.for("react.responder"):60118,uh=me?Symbol.for("react.scope"):60119;function Ue(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case gu:switch(e=e.type,e){case xu:case oo:case to:case ro:case no:case so:return e;default:switch(e=e&&e.$$typeof,e){case ao:case lo:case co:case uo:case io:return e;default:return t}}case yu:return t}}}function t0(e){return Ue(e)===oo}B.AsyncMode=xu;B.ConcurrentMode=oo;B.ContextConsumer=ao;B.ContextProvider=io;B.Element=gu;B.ForwardRef=lo;B.Fragment=to;B.Lazy=co;B.Memo=uo;B.Portal=yu;B.Profiler=ro;B.StrictMode=no;B.Suspense=so;B.isAsyncMode=function(e){return t0(e)||Ue(e)===xu};B.isConcurrentMode=t0;B.isContextConsumer=function(e){return Ue(e)===ao};B.isContextProvider=function(e){return Ue(e)===io};B.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===gu};B.isForwardRef=function(e){return Ue(e)===lo};B.isFragment=function(e){return Ue(e)===to};B.isLazy=function(e){return Ue(e)===co};B.isMemo=function(e){return Ue(e)===uo};B.isPortal=function(e){return Ue(e)===yu};B.isProfiler=function(e){return Ue(e)===ro};B.isStrictMode=function(e){return Ue(e)===no};B.isSuspense=function(e){return Ue(e)===so};B.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===to||e===oo||e===ro||e===no||e===so||e===ah||typeof e=="object"&&e!==null&&(e.$$typeof===co||e.$$typeof===uo||e.$$typeof===io||e.$$typeof===ao||e.$$typeof===lo||e.$$typeof===lh||e.$$typeof===sh||e.$$typeof===uh||e.$$typeof===oh)};B.typeOf=Ue;e0.exports=B;var ch=e0.exports,n0=ch,fh={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},dh={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},r0={};r0[n0.ForwardRef]=fh;r0[n0.Memo]=dh;var mh=!0;function i0(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var wu=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||mh===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},a0=function(t,n,r){wu(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var a=n;do t.insert(n===a?"."+i:"",a,t.sheet,!0),a=a.next;while(a!==void 0)}};function ph(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var vh={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},hh=/[A-Z]|^ms/g,gh=/_EMO_([^_]+?)_([^]*?)_EMO_/g,o0=function(t){return t.charCodeAt(1)===45},ef=function(t){return t!=null&&typeof t!="boolean"},tl=Kv(function(e){return o0(e)?e:e.replace(hh,"-$&").toLowerCase()}),tf=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(gh,function(r,i,a){return st={name:i,styles:a,next:st},i})}return vh[t]!==1&&!o0(t)&&typeof n=="number"&&n!==0?n+"px":n};function Kr(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return st={name:n.name,styles:n.styles,next:st},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)st={name:r.name,styles:r.styles,next:st},r=r.next;var i=n.styles+";";return i}return yh(e,t,n)}case"function":{if(e!==void 0){var a=st,o=n(e);return st=a,Kr(e,t,o)}break}}if(t==null)return n;var l=t[n];return l!==void 0?l:n}function yh(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Kr(e,t,n[i])+";";else for(var a in n){var o=n[a];if(typeof o!="object")t!=null&&t[o]!==void 0?r+=a+"{"+t[o]+"}":ef(o)&&(r+=tl(a)+":"+tf(a,o)+";");else if(Array.isArray(o)&&typeof o[0]=="string"&&(t==null||t[o[0]]===void 0))for(var l=0;l<o.length;l++)ef(o[l])&&(r+=tl(a)+":"+tf(a,o[l])+";");else{var s=Kr(e,t,o);switch(a){case"animation":case"animationName":{r+=tl(a)+":"+s+";";break}default:r+=a+"{"+s+"}"}}}return r}var nf=/label:\s*([^\s;\n{]+)\s*(;|$)/g,st,ku=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,a="";st=void 0;var o=t[0];o==null||o.raw===void 0?(i=!1,a+=Kr(r,n,o)):a+=o[0];for(var l=1;l<t.length;l++)a+=Kr(r,n,t[l]),i&&(a+=o[l]);nf.lastIndex=0;for(var s="",u;(u=nf.exec(a))!==null;)s+="-"+u[1];var f=ph(a)+s;return{name:f,styles:a,next:st}},xh=function(t){return t()},wh=Wu.useInsertionEffect?Wu.useInsertionEffect:!1,l0=wh||xh,Su={}.hasOwnProperty,s0=U.createContext(typeof HTMLElement<"u"?ih({key:"css"}):null);s0.Provider;var u0=function(t){return U.forwardRef(function(n,r){var i=U.useContext(s0);return t(n,i,r)})},c0=U.createContext({}),rs="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",kh=function(t,n){var r={};for(var i in n)Su.call(n,i)&&(r[i]=n[i]);return r[rs]=t,r},Sh=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return wu(n,r,i),l0(function(){return a0(n,r,i)}),null},Ch=u0(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var i=e[rs],a=[r],o="";typeof e.className=="string"?o=i0(t.registered,a,e.className):e.className!=null&&(o=e.className+" ");var l=ku(a,void 0,U.useContext(c0));o+=t.key+"-"+l.name;var s={};for(var u in e)Su.call(e,u)&&u!=="css"&&u!==rs&&(s[u]=e[u]);return s.ref=n,s.className=o,U.createElement(U.Fragment,null,U.createElement(Sh,{cache:t,serialized:l,isStringTag:typeof i=="string"}),U.createElement(i,s))}),Eh=Ch,bh=h.Fragment;function ce(e,t,n){return Su.call(t,"css")?h.jsx(Eh,kh(e,t),n):h.jsx(e,t,n)}function f0(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return ku(t)}var E=function(){var t=f0.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},Nh=function e(t){for(var n=t.length,r=0,i="";r<n;r++){var a=t[r];if(a!=null){var o=void 0;switch(typeof a){case"boolean":break;case"object":{if(Array.isArray(a))o=e(a);else{o="";for(var l in a)a[l]&&l&&(o&&(o+=" "),o+=l)}break}default:o=a}o&&(i&&(i+=" "),i+=o)}}return i};function Ph(e,t,n){var r=[],i=i0(e,r,n);return r.length<2?n:i+t(r)}var _h=function(t){var n=t.cache,r=t.serializedArr;return l0(function(){for(var i=0;i<r.length;i++)a0(n,r[i],!1)}),null},nl=u0(function(e,t){var n=!1,r=[],i=function(){for(var u=arguments.length,f=new Array(u),m=0;m<u;m++)f[m]=arguments[m];var v=ku(f,t.registered);return r.push(v),wu(t,v,!1),t.key+"-"+v.name},a=function(){for(var u=arguments.length,f=new Array(u),m=0;m<u;m++)f[m]=arguments[m];return Ph(t.registered,i,Nh(f))},o={css:i,cx:a,theme:U.useContext(c0)},l=e.children(o);return n=!0,U.createElement(U.Fragment,null,U.createElement(_h,{cache:t,serializedArr:r}),l)}),Oh=Object.defineProperty,Th=(e,t,n)=>t in e?Oh(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ai=(e,t,n)=>(Th(e,typeof t!="symbol"?t+"":t,n),n),is=new Map,Ii=new WeakMap,rf=0,jh=void 0;function Ah(e){return e?(Ii.has(e)||(rf+=1,Ii.set(e,rf.toString())),Ii.get(e)):"0"}function Ih(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?Ah(e.root):e[t]}`).toString()}function zh(e){const t=Ih(e);let n=is.get(t);if(!n){const r=new Map;let i;const a=new IntersectionObserver(o=>{o.forEach(l=>{var s;const u=l.isIntersecting&&i.some(f=>l.intersectionRatio>=f);e.trackVisibility&&typeof l.isVisible>"u"&&(l.isVisible=u),(s=r.get(l.target))==null||s.forEach(f=>{f(u,l)})})},e);i=a.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:a,elements:r},is.set(t,n)}return n}function d0(e,t,n={},r=jh){if(typeof window.IntersectionObserver>"u"&&r!==void 0){const s=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:s,intersectionRect:s,rootBounds:s}),()=>{}}const{id:i,observer:a,elements:o}=zh(n),l=o.get(e)||[];return o.has(e)||o.set(e,l),l.push(t),a.observe(e),function(){l.splice(l.indexOf(t),1),l.length===0&&(o.delete(e),a.unobserve(e)),o.size===0&&(a.disconnect(),is.delete(i))}}function Lh(e){return typeof e.children!="function"}var af=class extends U.Component{constructor(e){super(e),Ai(this,"node",null),Ai(this,"_unobserveCb",null),Ai(this,"handleNode",t=>{this.node&&(this.unobserve(),!t&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=t||null,this.observeNode()}),Ai(this,"handleChange",(t,n)=>{t&&this.props.triggerOnce&&this.unobserve(),Lh(this.props)||this.setState({inView:t,entry:n}),this.props.onChange&&this.props.onChange(t,n)}),this.state={inView:!!e.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(e){(e.rootMargin!==this.props.rootMargin||e.root!==this.props.root||e.threshold!==this.props.threshold||e.skip!==this.props.skip||e.trackVisibility!==this.props.trackVisibility||e.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:i,fallbackInView:a}=this.props;this._unobserveCb=d0(this.node,this.handleChange,{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:i},a)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:e}=this.props;if(typeof e=="function"){const{inView:y,entry:x}=this.state;return e({inView:y,entry:x,ref:this.handleNode})}const{as:t,triggerOnce:n,threshold:r,root:i,rootMargin:a,onChange:o,skip:l,trackVisibility:s,delay:u,initialInView:f,fallbackInView:m,...v}=this.props;return U.createElement(t||"div",{ref:this.handleNode,...v},e)}};function m0({threshold:e,delay:t,trackVisibility:n,rootMargin:r,root:i,triggerOnce:a,skip:o,initialInView:l,fallbackInView:s,onChange:u}={}){var f;const[m,v]=U.useState(null),y=U.useRef(),[x,g]=U.useState({inView:!!l,entry:void 0});y.current=u,U.useEffect(()=>{if(o||!m)return;let p;return p=d0(m,(w,k)=>{g({inView:w,entry:k}),y.current&&y.current(w,k),k.isIntersecting&&a&&p&&(p(),p=void 0)},{root:i,rootMargin:r,threshold:e,trackVisibility:n,delay:t},s),()=>{p&&p()}},[Array.isArray(e)?e.toString():e,m,i,r,a,o,n,s,t]);const P=(f=x.entry)==null?void 0:f.target,d=U.useRef();!m&&P&&!a&&!o&&d.current!==P&&(d.current=P,g({inView:!!l,entry:void 0}));const c=[v,x.inView,x.entry];return c.ref=c[0],c.inView=c[1],c.entry=c[2],c}var p0={exports:{}},W={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cu=Symbol.for("react.element"),Eu=Symbol.for("react.portal"),fo=Symbol.for("react.fragment"),mo=Symbol.for("react.strict_mode"),po=Symbol.for("react.profiler"),vo=Symbol.for("react.provider"),ho=Symbol.for("react.context"),Rh=Symbol.for("react.server_context"),go=Symbol.for("react.forward_ref"),yo=Symbol.for("react.suspense"),xo=Symbol.for("react.suspense_list"),wo=Symbol.for("react.memo"),ko=Symbol.for("react.lazy"),Mh=Symbol.for("react.offscreen"),v0;v0=Symbol.for("react.module.reference");function Ge(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Cu:switch(e=e.type,e){case fo:case po:case mo:case yo:case xo:return e;default:switch(e=e&&e.$$typeof,e){case Rh:case ho:case go:case ko:case wo:case vo:return e;default:return t}}case Eu:return t}}}W.ContextConsumer=ho;W.ContextProvider=vo;W.Element=Cu;W.ForwardRef=go;W.Fragment=fo;W.Lazy=ko;W.Memo=wo;W.Portal=Eu;W.Profiler=po;W.StrictMode=mo;W.Suspense=yo;W.SuspenseList=xo;W.isAsyncMode=function(){return!1};W.isConcurrentMode=function(){return!1};W.isContextConsumer=function(e){return Ge(e)===ho};W.isContextProvider=function(e){return Ge(e)===vo};W.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Cu};W.isForwardRef=function(e){return Ge(e)===go};W.isFragment=function(e){return Ge(e)===fo};W.isLazy=function(e){return Ge(e)===ko};W.isMemo=function(e){return Ge(e)===wo};W.isPortal=function(e){return Ge(e)===Eu};W.isProfiler=function(e){return Ge(e)===po};W.isStrictMode=function(e){return Ge(e)===mo};W.isSuspense=function(e){return Ge(e)===yo};W.isSuspenseList=function(e){return Ge(e)===xo};W.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===fo||e===po||e===mo||e===yo||e===xo||e===Mh||typeof e=="object"&&e!==null&&(e.$$typeof===ko||e.$$typeof===wo||e.$$typeof===vo||e.$$typeof===ho||e.$$typeof===go||e.$$typeof===v0||e.getModuleId!==void 0)};W.typeOf=Ge;p0.exports=W;var $h=p0.exports;E`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`;E`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;E`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`;E`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`;E`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`;E`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;E`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;E`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;E`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;E`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`;E`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`;E`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;E`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;const Fh=E`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,Dh=E`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Uh=E`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Vh=E`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Bh=E`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,bu=E`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Wh=E`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Yh=E`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Hh=E`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Qh=E`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Xh=E`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Gh=E`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Kh=E`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function Zh({duration:e=1e3,delay:t=0,timingFunction:n="ease",keyframes:r=bu,iterationCount:i=1}){return f0`
    animation-duration: ${e}ms;
    animation-timing-function: ${n};
    animation-delay: ${t}ms;
    animation-name: ${r};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${i};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}function Jh(e){return e==null}function qh(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function h0(e,t){return n=>n?e():t()}function Zr(e){return h0(e,()=>null)}function as(e){return Zr(()=>({opacity:0}))(e)}const g0=e=>{const{cascade:t=!1,damping:n=.5,delay:r=0,duration:i=1e3,fraction:a=0,keyframes:o=bu,triggerOnce:l=!1,className:s,style:u,childClassName:f,childStyle:m,children:v,onVisibilityChange:y}=e,x=U.useMemo(()=>Zh({keyframes:o,duration:i}),[i,o]);return Jh(v)?null:qh(v)?ce(tg,{...e,animationStyles:x,children:String(v)}):$h.isFragment(v)?ce(y0,{...e,animationStyles:x}):ce(bh,{children:U.Children.map(v,(g,P)=>{if(!U.isValidElement(g))return null;const d=r+(t?P*i*n:0);switch(g.type){case"ol":case"ul":return ce(nl,{children:({cx:c})=>ce(g.type,{...g.props,className:c(s,g.props.className),style:Object.assign({},u,g.props.style),children:ce(g0,{...e,children:g.props.children})})});case"li":return ce(af,{threshold:a,triggerOnce:l,onChange:y,children:({inView:c,ref:p})=>ce(nl,{children:({cx:w})=>ce(g.type,{...g.props,ref:p,className:w(f,g.props.className),css:Zr(()=>x)(c),style:Object.assign({},m,g.props.style,as(!c),{animationDelay:d+"ms"})})})});default:return ce(af,{threshold:a,triggerOnce:l,onChange:y,children:({inView:c,ref:p})=>ce("div",{ref:p,className:s,css:Zr(()=>x)(c),style:Object.assign({},u,as(!c),{animationDelay:d+"ms"}),children:ce(nl,{children:({cx:w})=>ce(g.type,{...g.props,className:w(f,g.props.className),style:Object.assign({},m,g.props.style)})})})})}})})},eg={display:"inline-block",whiteSpace:"pre"},tg=e=>{const{animationStyles:t,cascade:n=!1,damping:r=.5,delay:i=0,duration:a=1e3,fraction:o=0,triggerOnce:l=!1,className:s,style:u,children:f,onVisibilityChange:m}=e,{ref:v,inView:y}=m0({triggerOnce:l,threshold:o,onChange:m});return h0(()=>ce("div",{ref:v,className:s,style:Object.assign({},u,eg),children:f.split("").map((x,g)=>ce("span",{css:Zr(()=>t)(y),style:{animationDelay:i+g*a*r+"ms"},children:x},g))}),()=>ce(y0,{...e,children:f}))(n)},y0=e=>{const{animationStyles:t,fraction:n=0,triggerOnce:r=!1,className:i,style:a,children:o,onVisibilityChange:l}=e,{ref:s,inView:u}=m0({triggerOnce:r,threshold:n,onChange:l});return ce("div",{ref:s,className:i,css:Zr(()=>t)(u),style:Object.assign({},a,as(!u)),children:o})};E`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;E`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;E`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;E`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;E`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;E`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`;E`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`;E`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;E`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;E`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;const ng=E`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,rg=E`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,ig=E`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,ag=E`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,og=E`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,lg=E`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,sg=E`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,ug=E`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,cg=E`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,fg=E`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,dg=E`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,mg=E`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,pg=E`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function vg(e,t,n){switch(n){case"bottom-left":return t?rg:Dh;case"bottom-right":return t?ig:Uh;case"down":return e?t?og:Bh:t?ag:Vh;case"left":return e?t?sg:Wh:t?lg:bu;case"right":return e?t?cg:Hh:t?ug:Yh;case"top-left":return t?fg:Qh;case"top-right":return t?dg:Xh;case"up":return e?t?pg:Kh:t?mg:Gh;default:return t?ng:Fh}}const he=e=>{const{big:t=!1,direction:n,reverse:r=!1,...i}=e,a=U.useMemo(()=>vg(t,r,n),[t,n,r]);return ce(g0,{keyframes:a,...i})};E`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`;E`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;E`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;E`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`;E`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;E`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`;E`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;E`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;E`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;E`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;E`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;E`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;E`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;E`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;E`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;E`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;E`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;E`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;E`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;E`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;E`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;E`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;E`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;E`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`;E`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`;E`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`;E`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;E`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`;E`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;E`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;E`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;E`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;E`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`;E`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;E`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`;E`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`;E`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;const hg=()=>h.jsxs("div",{className:"flex bg-slate-100 section min-h-screen md:min-h-min",children:[h.jsx("div",{className:"hidden md:block",children:h.jsx("img",{src:Nv,alt:""})}),h.jsx(he,{direction:"down",triggerOnce:!0,duration:2e3,children:h.jsxs("div",{className:"flex flex-col p-6 lg:ml-32",children:[h.jsxs("h2",{className:"text-center md:text-start text-5xl font-bold mt-40 ",children:["Listen music ",h.jsx("br",{})," anytime, anywhere."]}),h.jsxs("p",{className:"text-center md:text-start text-lg mt-10",children:["Explore the latest innovations and designs from"," ",h.jsx("br",{className:"hidden md:block"}),"the new AirPods."]}),h.jsxs("div",{className:"flex gap-20",children:[h.jsxs("div",{className:"flex flex-col mt-10 md:mt-40 md:flex-row w-1/2 text-center items-center",children:[h.jsx("div",{className:"flex md:mr-4 justify-start items-start",children:h.jsx("img",{src:Pv,alt:"airpods icon",className:"pt-2 pb-2 md:pb-0"})}),h.jsxs("div",{className:"flex flex-col",children:[h.jsx("h3",{className:"font-bold text-lg",children:"Comfortable Buds"}),h.jsxs("p",{className:"font-light pt-2 text-sm md:pt-6 md:text-lg",children:["Experience surround sound,",h.jsx("br",{})," designed to adapt to your daily life ",h.jsx("br",{})," without complications."]})]})]}),h.jsxs("div",{className:"flex flex-col mt-10 md:mt-40 md:flex-row w-1/2 text-center items-center",children:[h.jsx("div",{className:"flex md:mr-4 justify-start items-start",children:h.jsx("img",{src:_v,alt:"airpods icon",className:"pt-2 pb-2 md:pb-0"})}),h.jsxs("div",{className:"flex flex-col",children:[h.jsx("h3",{className:"font-bold text-lg",children:"Comfortable Buds"}),h.jsxs("p",{className:"font-light pt-2 text-sm md:pt-6 md:text-lg",children:["Enjoy wireless freedom,",h.jsx("br",{})," with an all-day battery ",h.jsx("br",{})," and fast charging."]})]})]})]})]})})]}),gg=()=>h.jsxs("footer",{className:"flex flex-col md:flex-row justify-between items-center py-10 px-10 md:px-60 gap-10 md:gap-0",children:[h.jsx(he,{direction:"up",triggerOnce:!0,duration:1500,children:h.jsx("span",{className:"font-semibold text-xl tracking-widest",children:"Airpods"})}),h.jsxs(he,{direction:"up",triggerOnce:!0,duration:1500,children:[h.jsxs("ul",{className:"flex justify-center items-center gap-5",children:[h.jsx("li",{className:"cursor-pointer font-semibold text-sm",children:"Privacy Policy"}),h.jsx("li",{className:"cursor-pointer font-semibold text-sm",children:"Terms & Conditions"}),h.jsx("li",{className:"cursor-pointer font-semibold text-sm",children:"Support"})]}),h.jsx("span",{children:"Copyright © 2024 | All Rights Reserved"})]})]}),yg="/airpods-website/assets/airpods-1-jLCSqGAi.svg",xg="/airpods-website/assets/airpods-2-xOo3yfbz.svg",wg="/airpods-website/assets/airpods-3-BxoVuf9r.svg",kg="/airpods-website/assets/BGbackground-BZR2Bmln.png",Sg=()=>h.jsxs("div",{className:"flex flex-col items-center justify-center pt-20 md:pt-0",children:[h.jsxs("div",{className:"min-h-screen pb-20 md:pb-0 flex flex-col items-center justify-center",children:[h.jsxs(he,{direction:"down",triggerOnce:!0,duration:2e3,children:[h.jsx("h1",{className:"text-4xl md:text-5xl font-bold text-center",children:"Get your airpod now."}),h.jsxs("p",{className:"text-center font-normal text-lg mt-10",children:["Discover the superior sound quality and ",h.jsx("br",{})," unbeatable comfort of the new AirPods."]})]}),h.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-center gap-20 mt-32",children:[h.jsx(he,{direction:"left",triggerOnce:!0,duration:2e3,children:h.jsxs("div",{className:"flex flex-col items-center gap-8",children:[h.jsx("img",{src:yg,alt:"airpods image"}),h.jsx("h2",{className:"font-bold text-lg",children:"Midnight Green"}),h.jsxs("p",{className:"text-center",children:["AirPods (2nd gen) iPhone Colors ",h.jsx("br",{})," with Wireless Charging Case"]}),h.jsx("button",{className:"bg-blue-700 hover:bg-blue-800 text-white font-semibold py-4 px-6 rounded-lg mb-4 text-sm",children:"Buy now - $99"})]})}),h.jsx(he,{direction:"up",triggerOnce:!0,duration:2e3,children:h.jsxs("div",{className:"flex flex-col items-center gap-8",children:[h.jsx("img",{src:xg,alt:"airpods image"}),h.jsx("h2",{className:"font-bold text-lg",children:"Silver"}),h.jsxs("p",{className:"text-center",children:["AirPods (2nd gen) iPhone Colors ",h.jsx("br",{})," with Wireless Charging Case"]}),h.jsx("button",{className:"bg-blue-700 hover:bg-blue-800 text-white font-semibold py-4 px-6 rounded-lg mb-4 text-sm",children:"Buy now - $99"})]})}),h.jsx(he,{direction:"right",triggerOnce:!0,duration:2e3,children:h.jsxs("div",{className:"flex flex-col items-center gap-8",children:[h.jsx("img",{src:wg,alt:"airpods image"}),h.jsx("h2",{className:"font-bold text-lg",children:"Gold"}),h.jsxs("p",{className:"text-center",children:["AirPods (2nd gen) iPhone Colors ",h.jsx("br",{})," with Wireless Charging Case"]}),h.jsx("button",{className:"bg-blue-700 hover:bg-blue-800 text-white font-semibold py-4 px-6 rounded-lg mb-4 text-sm ",children:"Buy now - $99"})]})})]})]}),h.jsx("img",{src:kg,alt:"",className:"w-full md:h-screen"})]});function of(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?of(Object(n),!0).forEach(function(r){se(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):of(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ja(e){"@babel/helpers - typeof";return ja=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ja(e)}function Cg(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Eg(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function bg(e,t,n){return t&&Eg(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function se(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Nu(e,t){return Pg(e)||Og(e,t)||x0(e,t)||jg()}function ui(e){return Ng(e)||_g(e)||x0(e)||Tg()}function Ng(e){if(Array.isArray(e))return os(e)}function Pg(e){if(Array.isArray(e))return e}function _g(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Og(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,a=!1,o,l;try{for(n=n.call(e);!(i=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));i=!0);}catch(s){a=!0,l=s}finally{try{!i&&n.return!=null&&n.return()}finally{if(a)throw l}}return r}}function x0(e,t){if(e){if(typeof e=="string")return os(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return os(e,t)}}function os(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Tg(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function jg(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var lf=function(){},Pu={},w0={},k0=null,S0={mark:lf,measure:lf};try{typeof window<"u"&&(Pu=window),typeof document<"u"&&(w0=document),typeof MutationObserver<"u"&&(k0=MutationObserver),typeof performance<"u"&&(S0=performance)}catch{}var Ag=Pu.navigator||{},sf=Ag.userAgent,uf=sf===void 0?"":sf,Qt=Pu,G=w0,cf=k0,zi=S0;Qt.document;var _t=!!G.documentElement&&!!G.head&&typeof G.addEventListener=="function"&&typeof G.createElement=="function",C0=~uf.indexOf("MSIE")||~uf.indexOf("Trident/"),Li,Ri,Mi,$i,Fi,Et="___FONT_AWESOME___",ls=16,E0="fa",b0="svg-inline--fa",hn="data-fa-i2svg",ss="data-fa-pseudo-element",Ig="data-fa-pseudo-element-pending",_u="data-prefix",Ou="data-icon",ff="fontawesome-i2svg",zg="async",Lg=["HTML","HEAD","STYLE","SCRIPT"],N0=function(){try{return!0}catch{return!1}}(),Q="classic",te="sharp",Tu=[Q,te];function ci(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[Q]}})}var Jr=ci((Li={},se(Li,Q,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),se(Li,te,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),Li)),qr=ci((Ri={},se(Ri,Q,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),se(Ri,te,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),Ri)),ei=ci((Mi={},se(Mi,Q,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),se(Mi,te,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Mi)),Rg=ci(($i={},se($i,Q,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),se($i,te,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),$i)),Mg=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,P0="fa-layers-text",$g=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Fg=ci((Fi={},se(Fi,Q,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),se(Fi,te,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Fi)),_0=[1,2,3,4,5,6,7,8,9,10],Dg=_0.concat([11,12,13,14,15,16,17,18,19,20]),Ug=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ln={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ti=new Set;Object.keys(qr[Q]).map(ti.add.bind(ti));Object.keys(qr[te]).map(ti.add.bind(ti));var Vg=[].concat(Tu,ui(ti),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ln.GROUP,ln.SWAP_OPACITY,ln.PRIMARY,ln.SECONDARY]).concat(_0.map(function(e){return"".concat(e,"x")})).concat(Dg.map(function(e){return"w-".concat(e)})),Or=Qt.FontAwesomeConfig||{};function Bg(e){var t=G.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Wg(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(G&&typeof G.querySelector=="function"){var Yg=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Yg.forEach(function(e){var t=Nu(e,2),n=t[0],r=t[1],i=Wg(Bg(n));i!=null&&(Or[r]=i)})}var O0={styleDefault:"solid",familyDefault:"classic",cssPrefix:E0,replacementClass:b0,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Or.familyPrefix&&(Or.cssPrefix=Or.familyPrefix);var Jn=N(N({},O0),Or);Jn.autoReplaceSvg||(Jn.observeMutations=!1);var T={};Object.keys(O0).forEach(function(e){Object.defineProperty(T,e,{enumerable:!0,set:function(n){Jn[e]=n,Tr.forEach(function(r){return r(T)})},get:function(){return Jn[e]}})});Object.defineProperty(T,"familyPrefix",{enumerable:!0,set:function(t){Jn.cssPrefix=t,Tr.forEach(function(n){return n(T)})},get:function(){return Jn.cssPrefix}});Qt.FontAwesomeConfig=T;var Tr=[];function Hg(e){return Tr.push(e),function(){Tr.splice(Tr.indexOf(e),1)}}var Tt=ls,ft={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Qg(e){if(!(!e||!_t)){var t=G.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=G.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=a)}return G.head.insertBefore(t,r),e}}var Xg="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ni(){for(var e=12,t="";e-- >0;)t+=Xg[Math.random()*62|0];return t}function rr(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function ju(e){return e.classList?rr(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function T0(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Gg(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(T0(e[n]),'" ')},"").trim()}function So(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Au(e){return e.size!==ft.size||e.x!==ft.x||e.y!==ft.y||e.rotate!==ft.rotate||e.flipX||e.flipY}function Kg(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)"),s={transform:"".concat(a," ").concat(o," ").concat(l)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:s,path:u}}function Zg(e){var t=e.transform,n=e.width,r=n===void 0?ls:n,i=e.height,a=i===void 0?ls:i,o=e.startCentered,l=o===void 0?!1:o,s="";return l&&C0?s+="translate(".concat(t.x/Tt-r/2,"em, ").concat(t.y/Tt-a/2,"em) "):l?s+="translate(calc(-50% + ".concat(t.x/Tt,"em), calc(-50% + ").concat(t.y/Tt,"em)) "):s+="translate(".concat(t.x/Tt,"em, ").concat(t.y/Tt,"em) "),s+="scale(".concat(t.size/Tt*(t.flipX?-1:1),", ").concat(t.size/Tt*(t.flipY?-1:1),") "),s+="rotate(".concat(t.rotate,"deg) "),s}var Jg=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function j0(){var e=E0,t=b0,n=T.cssPrefix,r=T.replacementClass,i=Jg;if(n!==e||r!==t){var a=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");i=i.replace(a,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(l,".".concat(r))}return i}var df=!1;function rl(){T.autoAddCss&&!df&&(Qg(j0()),df=!0)}var qg={mixout:function(){return{dom:{css:j0,insertCss:rl}}},hooks:function(){return{beforeDOMElementCreation:function(){rl()},beforeI2svg:function(){rl()}}}},bt=Qt||{};bt[Et]||(bt[Et]={});bt[Et].styles||(bt[Et].styles={});bt[Et].hooks||(bt[Et].hooks={});bt[Et].shims||(bt[Et].shims=[]);var tt=bt[Et],A0=[],ey=function e(){G.removeEventListener("DOMContentLoaded",e),Aa=1,A0.map(function(t){return t()})},Aa=!1;_t&&(Aa=(G.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(G.readyState),Aa||G.addEventListener("DOMContentLoaded",ey));function ty(e){_t&&(Aa?setTimeout(e,0):A0.push(e))}function fi(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e=="string"?T0(e):"<".concat(t," ").concat(Gg(r),">").concat(a.map(fi).join(""),"</").concat(t,">")}function mf(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var il=function(t,n,r,i){var a=Object.keys(t),o=a.length,l=n,s,u,f;for(r===void 0?(s=1,f=t[a[0]]):(s=0,f=r);s<o;s++)u=a[s],f=l(f,t[u],u,t);return f};function ny(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var a=e.charCodeAt(n++);(a&64512)==56320?t.push(((i&1023)<<10)+(a&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function us(e){var t=ny(e);return t.length===1?t[0].toString(16):null}function ry(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function pf(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function cs(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,a=pf(t);typeof tt.hooks.addPack=="function"&&!i?tt.hooks.addPack(e,pf(t)):tt.styles[e]=N(N({},tt.styles[e]||{}),a),e==="fas"&&cs("fa",t)}var Di,Ui,Vi,In=tt.styles,iy=tt.shims,ay=(Di={},se(Di,Q,Object.values(ei[Q])),se(Di,te,Object.values(ei[te])),Di),Iu=null,I0={},z0={},L0={},R0={},M0={},oy=(Ui={},se(Ui,Q,Object.keys(Jr[Q])),se(Ui,te,Object.keys(Jr[te])),Ui);function ly(e){return~Vg.indexOf(e)}function sy(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!ly(i)?i:null}var $0=function(){var t=function(a){return il(In,function(o,l,s){return o[s]=il(l,a,{}),o},{})};I0=t(function(i,a,o){if(a[3]&&(i[a[3]]=o),a[2]){var l=a[2].filter(function(s){return typeof s=="number"});l.forEach(function(s){i[s.toString(16)]=o})}return i}),z0=t(function(i,a,o){if(i[o]=o,a[2]){var l=a[2].filter(function(s){return typeof s=="string"});l.forEach(function(s){i[s]=o})}return i}),M0=t(function(i,a,o){var l=a[2];return i[o]=o,l.forEach(function(s){i[s]=o}),i});var n="far"in In||T.autoFetchSvg,r=il(iy,function(i,a){var o=a[0],l=a[1],s=a[2];return l==="far"&&!n&&(l="fas"),typeof o=="string"&&(i.names[o]={prefix:l,iconName:s}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:l,iconName:s}),i},{names:{},unicodes:{}});L0=r.names,R0=r.unicodes,Iu=Co(T.styleDefault,{family:T.familyDefault})};Hg(function(e){Iu=Co(e.styleDefault,{family:T.familyDefault})});$0();function zu(e,t){return(I0[e]||{})[t]}function uy(e,t){return(z0[e]||{})[t]}function sn(e,t){return(M0[e]||{})[t]}function F0(e){return L0[e]||{prefix:null,iconName:null}}function cy(e){var t=R0[e],n=zu("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Xt(){return Iu}var Lu=function(){return{prefix:null,iconName:null,rest:[]}};function Co(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?Q:n,i=Jr[r][e],a=qr[r][e]||qr[r][i],o=e in tt.styles?e:null;return a||o||null}var vf=(Vi={},se(Vi,Q,Object.keys(ei[Q])),se(Vi,te,Object.keys(ei[te])),Vi);function Eo(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,a=(t={},se(t,Q,"".concat(T.cssPrefix,"-").concat(Q)),se(t,te,"".concat(T.cssPrefix,"-").concat(te)),t),o=null,l=Q;(e.includes(a[Q])||e.some(function(u){return vf[Q].includes(u)}))&&(l=Q),(e.includes(a[te])||e.some(function(u){return vf[te].includes(u)}))&&(l=te);var s=e.reduce(function(u,f){var m=sy(T.cssPrefix,f);if(In[f]?(f=ay[l].includes(f)?Rg[l][f]:f,o=f,u.prefix=f):oy[l].indexOf(f)>-1?(o=f,u.prefix=Co(f,{family:l})):m?u.iconName=m:f!==T.replacementClass&&f!==a[Q]&&f!==a[te]&&u.rest.push(f),!i&&u.prefix&&u.iconName){var v=o==="fa"?F0(u.iconName):{},y=sn(u.prefix,u.iconName);v.prefix&&(o=null),u.iconName=v.iconName||y||u.iconName,u.prefix=v.prefix||u.prefix,u.prefix==="far"&&!In.far&&In.fas&&!T.autoFetchSvg&&(u.prefix="fas")}return u},Lu());return(e.includes("fa-brands")||e.includes("fab"))&&(s.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(s.prefix="fad"),!s.prefix&&l===te&&(In.fass||T.autoFetchSvg)&&(s.prefix="fass",s.iconName=sn(s.prefix,s.iconName)||s.iconName),(s.prefix==="fa"||o==="fa")&&(s.prefix=Xt()||"fas"),s}var fy=function(){function e(){Cg(this,e),this.definitions={}}return bg(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(l){n.definitions[l]=N(N({},n.definitions[l]||{}),o[l]),cs(l,o[l]);var s=ei[Q][l];s&&cs(s,o[l]),$0()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(a){var o=i[a],l=o.prefix,s=o.iconName,u=o.icon,f=u[2];n[l]||(n[l]={}),f.length>0&&f.forEach(function(m){typeof m=="string"&&(n[l][m]=u)}),n[l][s]=u}),n}}]),e}(),hf=[],zn={},Bn={},dy=Object.keys(Bn);function my(e,t){var n=t.mixoutsTo;return hf=e,zn={},Object.keys(Bn).forEach(function(r){dy.indexOf(r)===-1&&delete Bn[r]}),hf.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),ja(i[o])==="object"&&Object.keys(i[o]).forEach(function(l){n[o]||(n[o]={}),n[o][l]=i[o][l]})}),r.hooks){var a=r.hooks();Object.keys(a).forEach(function(o){zn[o]||(zn[o]=[]),zn[o].push(a[o])})}r.provides&&r.provides(Bn)}),n}function fs(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var a=zn[e]||[];return a.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function gn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=zn[e]||[];i.forEach(function(a){a.apply(null,n)})}function Nt(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Bn[e]?Bn[e].apply(null,t):void 0}function ds(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Xt();if(t)return t=sn(n,t)||t,mf(D0.definitions,n,t)||mf(tt.styles,n,t)}var D0=new fy,py=function(){T.autoReplaceSvg=!1,T.observeMutations=!1,gn("noAuto")},vy={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return _t?(gn("beforeI2svg",t),Nt("pseudoElements2svg",t),Nt("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;T.autoReplaceSvg===!1&&(T.autoReplaceSvg=!0),T.observeMutations=!0,ty(function(){gy({autoReplaceSvgRoot:n}),gn("watch",t)})}},hy={icon:function(t){if(t===null)return null;if(ja(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:sn(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Co(t[0]);return{prefix:r,iconName:sn(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(T.cssPrefix,"-"))>-1||t.match(Mg))){var i=Eo(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||Xt(),iconName:sn(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var a=Xt();return{prefix:a,iconName:sn(a,t)||t}}}},Ve={noAuto:py,config:T,dom:vy,parse:hy,library:D0,findIconDefinition:ds,toHtml:fi},gy=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?G:n;(Object.keys(tt.styles).length>0||T.autoFetchSvg)&&_t&&T.autoReplaceSvg&&Ve.dom.i2svg({node:r})};function bo(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return fi(r)})}}),Object.defineProperty(e,"node",{get:function(){if(_t){var r=G.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function yy(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(Au(o)&&n.found&&!r.found){var l=n.width,s=n.height,u={x:l/s/2,y:.5};i.style=So(N(N({},a),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function xy(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?"".concat(t,"-").concat(T.cssPrefix,"-").concat(n):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:N(N({},i),{},{id:o}),children:r}]}]}function Ru(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,l=e.symbol,s=e.title,u=e.maskId,f=e.titleId,m=e.extra,v=e.watchable,y=v===void 0?!1:v,x=r.found?r:n,g=x.width,P=x.height,d=i==="fak",c=[T.replacementClass,a?"".concat(T.cssPrefix,"-").concat(a):""].filter(function(D){return m.classes.indexOf(D)===-1}).filter(function(D){return D!==""||!!D}).concat(m.classes).join(" "),p={children:[],attributes:N(N({},m.attributes),{},{"data-prefix":i,"data-icon":a,class:c,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(g," ").concat(P)})},w=d&&!~m.classes.indexOf("fa-fw")?{width:"".concat(g/P*16*.0625,"em")}:{};y&&(p.attributes[hn]=""),s&&(p.children.push({tag:"title",attributes:{id:p.attributes["aria-labelledby"]||"title-".concat(f||ni())},children:[s]}),delete p.attributes.title);var k=N(N({},p),{},{prefix:i,iconName:a,main:n,mask:r,maskId:u,transform:o,symbol:l,styles:N(N({},w),m.styles)}),b=r.found&&n.found?Nt("generateAbstractMask",k)||{children:[],attributes:{}}:Nt("generateAbstractIcon",k)||{children:[],attributes:{}},C=b.children,j=b.attributes;return k.children=C,k.attributes=j,l?xy(k):yy(k)}function gf(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.title,o=e.extra,l=e.watchable,s=l===void 0?!1:l,u=N(N(N({},o.attributes),a?{title:a}:{}),{},{class:o.classes.join(" ")});s&&(u[hn]="");var f=N({},o.styles);Au(i)&&(f.transform=Zg({transform:i,startCentered:!0,width:n,height:r}),f["-webkit-transform"]=f.transform);var m=So(f);m.length>0&&(u.style=m);var v=[];return v.push({tag:"span",attributes:u,children:[t]}),a&&v.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),v}function wy(e){var t=e.content,n=e.title,r=e.extra,i=N(N(N({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),a=So(r.styles);a.length>0&&(i.style=a);var o=[];return o.push({tag:"span",attributes:i,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var al=tt.styles;function ms(e){var t=e[0],n=e[1],r=e.slice(4),i=Nu(r,1),a=i[0],o=null;return Array.isArray(a)?o={tag:"g",attributes:{class:"".concat(T.cssPrefix,"-").concat(ln.GROUP)},children:[{tag:"path",attributes:{class:"".concat(T.cssPrefix,"-").concat(ln.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(T.cssPrefix,"-").concat(ln.PRIMARY),fill:"currentColor",d:a[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:n,icon:o}}var ky={found:!1,width:512,height:512};function Sy(e,t){!N0&&!T.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function ps(e,t){var n=t;return t==="fa"&&T.styleDefault!==null&&(t=Xt()),new Promise(function(r,i){if(Nt("missingIconAbstract"),n==="fa"){var a=F0(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&al[t]&&al[t][e]){var o=al[t][e];return r(ms(o))}Sy(e,t),r(N(N({},ky),{},{icon:T.showMissingIcons&&e?Nt("missingIconAbstract")||{}:{}}))})}var yf=function(){},vs=T.measurePerformance&&zi&&zi.mark&&zi.measure?zi:{mark:yf,measure:yf},xr='FA "6.5.2"',Cy=function(t){return vs.mark("".concat(xr," ").concat(t," begins")),function(){return U0(t)}},U0=function(t){vs.mark("".concat(xr," ").concat(t," ends")),vs.measure("".concat(xr," ").concat(t),"".concat(xr," ").concat(t," begins"),"".concat(xr," ").concat(t," ends"))},Mu={begin:Cy,end:U0},ia=function(){};function xf(e){var t=e.getAttribute?e.getAttribute(hn):null;return typeof t=="string"}function Ey(e){var t=e.getAttribute?e.getAttribute(_u):null,n=e.getAttribute?e.getAttribute(Ou):null;return t&&n}function by(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(T.replacementClass)}function Ny(){if(T.autoReplaceSvg===!0)return aa.replace;var e=aa[T.autoReplaceSvg];return e||aa.replace}function Py(e){return G.createElementNS("http://www.w3.org/2000/svg",e)}function _y(e){return G.createElement(e)}function V0(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Py:_y:n;if(typeof e=="string")return G.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){i.setAttribute(o,e.attributes[o])});var a=e.children||[];return a.forEach(function(o){i.appendChild(V0(o,{ceFn:r}))}),i}function Oy(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var aa={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(V0(i),n)}),n.getAttribute(hn)===null&&T.keepOriginalSource){var r=G.createComment(Oy(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~ju(n).indexOf(T.replacementClass))return aa.replace(t);var i=new RegExp("".concat(T.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var a=r[0].attributes.class.split(" ").reduce(function(l,s){return s===T.replacementClass||s.match(i)?l.toSvg.push(s):l.toNode.push(s),l},{toNode:[],toSvg:[]});r[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",a.toNode.join(" "))}var o=r.map(function(l){return fi(l)}).join(`
`);n.setAttribute(hn,""),n.innerHTML=o}};function wf(e){e()}function B0(e,t){var n=typeof t=="function"?t:ia;if(e.length===0)n();else{var r=wf;T.mutateApproach===zg&&(r=Qt.requestAnimationFrame||wf),r(function(){var i=Ny(),a=Mu.begin("mutate");e.map(i),a(),n()})}}var $u=!1;function W0(){$u=!0}function hs(){$u=!1}var Ia=null;function kf(e){if(cf&&T.observeMutations){var t=e.treeCallback,n=t===void 0?ia:t,r=e.nodeCallback,i=r===void 0?ia:r,a=e.pseudoElementsCallback,o=a===void 0?ia:a,l=e.observeMutationsRoot,s=l===void 0?G:l;Ia=new cf(function(u){if(!$u){var f=Xt();rr(u).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!xf(m.addedNodes[0])&&(T.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&T.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&xf(m.target)&&~Ug.indexOf(m.attributeName))if(m.attributeName==="class"&&Ey(m.target)){var v=Eo(ju(m.target)),y=v.prefix,x=v.iconName;m.target.setAttribute(_u,y||f),x&&m.target.setAttribute(Ou,x)}else by(m.target)&&i(m.target)})}}),_t&&Ia.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Ty(){Ia&&Ia.disconnect()}function jy(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var a=i.split(":"),o=a[0],l=a.slice(1);return o&&l.length>0&&(r[o]=l.join(":").trim()),r},{})),n}function Ay(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=Eo(ju(e));return i.prefix||(i.prefix=Xt()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=uy(i.prefix,e.innerText)||zu(i.prefix,us(e.innerText))),!i.iconName&&T.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function Iy(e){var t=rr(e.attributes).reduce(function(i,a){return i.name!=="class"&&i.name!=="style"&&(i[a.name]=a.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return T.autoA11y&&(n?t["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(r||ni()):(t["aria-hidden"]="true",t.focusable="false")),t}function zy(){return{iconName:null,title:null,titleId:null,prefix:null,transform:ft,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Sf(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Ay(e),r=n.iconName,i=n.prefix,a=n.rest,o=Iy(e),l=fs("parseNodeAttributes",{},e),s=t.styleParser?jy(e):[];return N({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:ft,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:s,attributes:o}},l)}var Ly=tt.styles;function Y0(e){var t=T.autoReplaceSvg==="nest"?Sf(e,{styleParser:!1}):Sf(e);return~t.extra.classes.indexOf(P0)?Nt("generateLayersText",e,t):Nt("generateSvgReplacementMutation",e,t)}var Gt=new Set;Tu.map(function(e){Gt.add("fa-".concat(e))});Object.keys(Jr[Q]).map(Gt.add.bind(Gt));Object.keys(Jr[te]).map(Gt.add.bind(Gt));Gt=ui(Gt);function Cf(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!_t)return Promise.resolve();var n=G.documentElement.classList,r=function(m){return n.add("".concat(ff,"-").concat(m))},i=function(m){return n.remove("".concat(ff,"-").concat(m))},a=T.autoFetchSvg?Gt:Tu.map(function(f){return"fa-".concat(f)}).concat(Object.keys(Ly));a.includes("fa")||a.push("fa");var o=[".".concat(P0,":not([").concat(hn,"])")].concat(a.map(function(f){return".".concat(f,":not([").concat(hn,"])")})).join(", ");if(o.length===0)return Promise.resolve();var l=[];try{l=rr(e.querySelectorAll(o))}catch{}if(l.length>0)r("pending"),i("complete");else return Promise.resolve();var s=Mu.begin("onTree"),u=l.reduce(function(f,m){try{var v=Y0(m);v&&f.push(v)}catch(y){N0||y.name==="MissingIcon"&&console.error(y)}return f},[]);return new Promise(function(f,m){Promise.all(u).then(function(v){B0(v,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),s(),f()})}).catch(function(v){s(),m(v)})})}function Ry(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Y0(e).then(function(n){n&&B0([n],t)})}function My(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:ds(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:ds(i||{})),e(r,N(N({},n),{},{mask:i}))}}var $y=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?ft:r,a=n.symbol,o=a===void 0?!1:a,l=n.mask,s=l===void 0?null:l,u=n.maskId,f=u===void 0?null:u,m=n.title,v=m===void 0?null:m,y=n.titleId,x=y===void 0?null:y,g=n.classes,P=g===void 0?[]:g,d=n.attributes,c=d===void 0?{}:d,p=n.styles,w=p===void 0?{}:p;if(t){var k=t.prefix,b=t.iconName,C=t.icon;return bo(N({type:"icon"},t),function(){return gn("beforeDOMElementCreation",{iconDefinition:t,params:n}),T.autoA11y&&(v?c["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(x||ni()):(c["aria-hidden"]="true",c.focusable="false")),Ru({icons:{main:ms(C),mask:s?ms(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:k,iconName:b,transform:N(N({},ft),i),symbol:o,title:v,maskId:f,titleId:x,extra:{attributes:c,styles:w,classes:P}})})}},Fy={mixout:function(){return{icon:My($y)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Cf,n.nodeCallback=Ry,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?G:r,a=n.callback,o=a===void 0?function(){}:a;return Cf(i,o)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,a=r.title,o=r.titleId,l=r.prefix,s=r.transform,u=r.symbol,f=r.mask,m=r.maskId,v=r.extra;return new Promise(function(y,x){Promise.all([ps(i,l),f.iconName?ps(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(g){var P=Nu(g,2),d=P[0],c=P[1];y([n,Ru({icons:{main:d,mask:c},prefix:l,iconName:i,transform:s,symbol:u,maskId:m,title:a,titleId:o,extra:v,watchable:!0})])}).catch(x)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.transform,l=n.styles,s=So(l);s.length>0&&(i.style=s);var u;return Au(o)&&(u=Nt("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),r.push(u||a.icon),{children:r,attributes:i}}}},Dy={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,a=i===void 0?[]:i;return bo({type:"layer"},function(){gn("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(l){Array.isArray(l)?l.map(function(s){o=o.concat(s.abstract)}):o=o.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(T.cssPrefix,"-layers")].concat(ui(a)).join(" ")},children:o}]})}}}},Uy={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,a=i===void 0?null:i,o=r.classes,l=o===void 0?[]:o,s=r.attributes,u=s===void 0?{}:s,f=r.styles,m=f===void 0?{}:f;return bo({type:"counter",content:n},function(){return gn("beforeDOMElementCreation",{content:n,params:r}),wy({content:n.toString(),title:a,extra:{attributes:u,styles:m,classes:["".concat(T.cssPrefix,"-layers-counter")].concat(ui(l))}})})}}}},Vy={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,a=i===void 0?ft:i,o=r.title,l=o===void 0?null:o,s=r.classes,u=s===void 0?[]:s,f=r.attributes,m=f===void 0?{}:f,v=r.styles,y=v===void 0?{}:v;return bo({type:"text",content:n},function(){return gn("beforeDOMElementCreation",{content:n,params:r}),gf({content:n,transform:N(N({},ft),a),title:l,extra:{attributes:m,styles:y,classes:["".concat(T.cssPrefix,"-layers-text")].concat(ui(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,a=r.transform,o=r.extra,l=null,s=null;if(C0){var u=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();l=f.width/u,s=f.height/u}return T.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,gf({content:n.innerHTML,width:l,height:s,transform:a,title:i,extra:o,watchable:!0})])}}},By=new RegExp('"',"ug"),Ef=[1105920,1112319];function Wy(e){var t=e.replace(By,""),n=ry(t,0),r=n>=Ef[0]&&n<=Ef[1],i=t.length===2?t[0]===t[1]:!1;return{value:us(i?t[0]:t),isSecondary:r||i}}function bf(e,t){var n="".concat(Ig).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=rr(e.children),o=a.filter(function(C){return C.getAttribute(ss)===t})[0],l=Qt.getComputedStyle(e,t),s=l.getPropertyValue("font-family").match($g),u=l.getPropertyValue("font-weight"),f=l.getPropertyValue("content");if(o&&!s)return e.removeChild(o),r();if(s&&f!=="none"&&f!==""){var m=l.getPropertyValue("content"),v=~["Sharp"].indexOf(s[2])?te:Q,y=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(s[2])?qr[v][s[2].toLowerCase()]:Fg[v][u],x=Wy(m),g=x.value,P=x.isSecondary,d=s[0].startsWith("FontAwesome"),c=zu(y,g),p=c;if(d){var w=cy(g);w.iconName&&w.prefix&&(c=w.iconName,y=w.prefix)}if(c&&!P&&(!o||o.getAttribute(_u)!==y||o.getAttribute(Ou)!==p)){e.setAttribute(n,p),o&&e.removeChild(o);var k=zy(),b=k.extra;b.attributes[ss]=t,ps(c,y).then(function(C){var j=Ru(N(N({},k),{},{icons:{main:C,mask:Lu()},prefix:y,iconName:p,extra:b,watchable:!0})),D=G.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(D,e.firstChild):e.appendChild(D),D.outerHTML=j.map(function(z){return fi(z)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function Yy(e){return Promise.all([bf(e,"::before"),bf(e,"::after")])}function Hy(e){return e.parentNode!==document.head&&!~Lg.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(ss)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Nf(e){if(_t)return new Promise(function(t,n){var r=rr(e.querySelectorAll("*")).filter(Hy).map(Yy),i=Mu.begin("searchPseudoElements");W0(),Promise.all(r).then(function(){i(),hs(),t()}).catch(function(){i(),hs(),n()})})}var Qy={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Nf,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?G:r;T.searchPseudoElements&&Nf(i)}}},Pf=!1,Xy={mixout:function(){return{dom:{unwatch:function(){W0(),Pf=!0}}}},hooks:function(){return{bootstrap:function(){kf(fs("mutationObserverCallbacks",{}))},noAuto:function(){Ty()},watch:function(n){var r=n.observeMutationsRoot;Pf?hs():kf(fs("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},_f=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var a=i.toLowerCase().split("-"),o=a[0],l=a.slice(1).join("-");if(o&&l==="h")return r.flipX=!0,r;if(o&&l==="v")return r.flipY=!0,r;if(l=parseFloat(l),isNaN(l))return r;switch(o){case"grow":r.size=r.size+l;break;case"shrink":r.size=r.size-l;break;case"left":r.x=r.x-l;break;case"right":r.x=r.x+l;break;case"up":r.y=r.y-l;break;case"down":r.y=r.y+l;break;case"rotate":r.rotate=r.rotate+l;break}return r},n)},Gy={mixout:function(){return{parse:{transform:function(n){return _f(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=_f(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,a=n.containerWidth,o=n.iconWidth,l={transform:"translate(".concat(a/2," 256)")},s="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),f="rotate(".concat(i.rotate," 0 0)"),m={transform:"".concat(s," ").concat(u," ").concat(f)},v={transform:"translate(".concat(o/2*-1," -256)")},y={outer:l,inner:m,path:v};return{tag:"g",attributes:N({},y.outer),children:[{tag:"g",attributes:N({},y.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:N(N({},r.icon.attributes),y.path)}]}]}}}},ol={x:0,y:0,width:"100%",height:"100%"};function Of(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Ky(e){return e.tag==="g"?e.children:[e]}var Zy={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),a=i?Eo(i.split(" ").map(function(o){return o.trim()})):Lu();return a.prefix||(a.prefix=Xt()),n.mask=a,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.mask,l=n.maskId,s=n.transform,u=a.width,f=a.icon,m=o.width,v=o.icon,y=Kg({transform:s,containerWidth:m,iconWidth:u}),x={tag:"rect",attributes:N(N({},ol),{},{fill:"white"})},g=f.children?{children:f.children.map(Of)}:{},P={tag:"g",attributes:N({},y.inner),children:[Of(N({tag:f.tag,attributes:N(N({},f.attributes),y.path)},g))]},d={tag:"g",attributes:N({},y.outer),children:[P]},c="mask-".concat(l||ni()),p="clip-".concat(l||ni()),w={tag:"mask",attributes:N(N({},ol),{},{id:c,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[x,d]},k={tag:"defs",children:[{tag:"clipPath",attributes:{id:p},children:Ky(v)},w]};return r.push(k,{tag:"rect",attributes:N({fill:"currentColor","clip-path":"url(#".concat(p,")"),mask:"url(#".concat(c,")")},ol)}),{children:r,attributes:i}}}},Jy={provides:function(t){var n=!1;Qt.matchMedia&&(n=Qt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:N(N({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=N(N({},a),{},{attributeName:"opacity"}),l={tag:"circle",attributes:N(N({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||l.children.push({tag:"animate",attributes:N(N({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:N(N({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(l),r.push({tag:"path",attributes:N(N({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:N(N({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:N(N({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:N(N({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},qy={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),a=i===null?!1:i===""?!0:i;return n.symbol=a,n}}}},e2=[qg,Fy,Dy,Uy,Vy,Qy,Xy,Gy,Zy,Jy,qy];my(e2,{mixoutsTo:Ve});Ve.noAuto;Ve.config;Ve.library;Ve.dom;var gs=Ve.parse;Ve.findIconDefinition;Ve.toHtml;var t2=Ve.icon;Ve.layer;Ve.text;Ve.counter;var H0={exports:{}},n2="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",r2=n2,i2=r2;function Q0(){}function X0(){}X0.resetWarningCache=Q0;var a2=function(){function e(r,i,a,o,l,s){if(s!==i2){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:X0,resetWarningCache:Q0};return n.PropTypes=n,n};H0.exports=a2();var o2=H0.exports;const L=zf(o2);function Tf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function ut(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Tf(Object(n),!0).forEach(function(r){Ln(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Tf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function za(e){"@babel/helpers - typeof";return za=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},za(e)}function Ln(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l2(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function s2(e,t){if(e==null)return{};var n=l2(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function ys(e){return u2(e)||c2(e)||f2(e)||d2()}function u2(e){if(Array.isArray(e))return xs(e)}function c2(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function f2(e,t){if(e){if(typeof e=="string")return xs(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return xs(e,t)}}function xs(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function d2(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function m2(e){var t,n=e.beat,r=e.fade,i=e.beatFade,a=e.bounce,o=e.shake,l=e.flash,s=e.spin,u=e.spinPulse,f=e.spinReverse,m=e.pulse,v=e.fixedWidth,y=e.inverse,x=e.border,g=e.listItem,P=e.flip,d=e.size,c=e.rotation,p=e.pull,w=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":a,"fa-shake":o,"fa-flash":l,"fa-spin":s,"fa-spin-reverse":f,"fa-spin-pulse":u,"fa-pulse":m,"fa-fw":v,"fa-inverse":y,"fa-border":x,"fa-li":g,"fa-flip":P===!0,"fa-flip-horizontal":P==="horizontal"||P==="both","fa-flip-vertical":P==="vertical"||P==="both"},Ln(t,"fa-".concat(d),typeof d<"u"&&d!==null),Ln(t,"fa-rotate-".concat(c),typeof c<"u"&&c!==null&&c!==0),Ln(t,"fa-pull-".concat(p),typeof p<"u"&&p!==null),Ln(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(w).map(function(k){return w[k]?k:null}).filter(function(k){return k})}function p2(e){return e=e-0,e===e}function G0(e){return p2(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var v2=["style"];function h2(e){return e.charAt(0).toUpperCase()+e.slice(1)}function g2(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=G0(n.slice(0,r)),a=n.slice(r+1).trim();return i.startsWith("webkit")?t[h2(i)]=a:t[i]=a,t},{})}function K0(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(s){return K0(e,s)}),i=Object.keys(t.attributes||{}).reduce(function(s,u){var f=t.attributes[u];switch(u){case"class":s.attrs.className=f,delete t.attributes.class;break;case"style":s.attrs.style=g2(f);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?s.attrs[u.toLowerCase()]=f:s.attrs[G0(u)]=f}return s},{attrs:{}}),a=n.style,o=a===void 0?{}:a,l=s2(n,v2);return i.attrs.style=ut(ut({},i.attrs.style),o),e.apply(void 0,[t.tag,ut(ut({},i.attrs),l)].concat(ys(r)))}var Z0=!1;try{Z0=!0}catch{}function y2(){if(!Z0&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function jf(e){if(e&&za(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(gs.icon)return gs.icon(e);if(e===null)return null;if(e&&za(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function ll(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Ln({},e,t):{}}var Af={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},Fu=Ra.forwardRef(function(e,t){var n=ut(ut({},Af),e),r=n.icon,i=n.mask,a=n.symbol,o=n.className,l=n.title,s=n.titleId,u=n.maskId,f=jf(r),m=ll("classes",[].concat(ys(m2(n)),ys((o||"").split(" ")))),v=ll("transform",typeof n.transform=="string"?gs.transform(n.transform):n.transform),y=ll("mask",jf(i)),x=t2(f,ut(ut(ut(ut({},m),v),y),{},{symbol:a,title:l,titleId:s,maskId:u}));if(!x)return y2("Could not find icon",f),null;var g=x.abstract,P={ref:t};return Object.keys(n).forEach(function(d){Af.hasOwnProperty(d)||(P[d]=n[d])}),x2(g[0],P)});Fu.displayName="FontAwesomeIcon";Fu.propTypes={beat:L.bool,border:L.bool,beatFade:L.bool,bounce:L.bool,className:L.string,fade:L.bool,flash:L.bool,mask:L.oneOfType([L.object,L.array,L.string]),maskId:L.string,fixedWidth:L.bool,inverse:L.bool,flip:L.oneOf([!0,!1,"horizontal","vertical","both"]),icon:L.oneOfType([L.object,L.array,L.string]),listItem:L.bool,pull:L.oneOf(["right","left"]),pulse:L.bool,rotation:L.oneOf([0,90,180,270]),shake:L.bool,size:L.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:L.bool,spinPulse:L.bool,spinReverse:L.bool,symbol:L.oneOfType([L.bool,L.string]),title:L.string,titleId:L.string,transform:L.oneOfType([L.string,L.object]),swapOpacity:L.bool};var x2=K0.bind(null,Ra.createElement),w2={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]},k2={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},S2=k2;const C2=()=>{const[e,t]=U.useState(!1),n=()=>{t(!e)};return h.jsxs("header",{className:"flex justify-between items-center w-full p-4 bg-white shadow-md",children:[h.jsx("span",{className:"font-semibold text-xl tracking-widest",children:"Airpods"}),h.jsxs("nav",{className:`${e?"fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col justify-center items-center menu-enter":"hidden"} md:flex md:flex-row md:static md:gap-8 md:pl-12`,children:[h.jsx("a",{href:"#demos",className:"font-semibold text-stone-900 text-lg md:text-xl md:mt-0 mt-4",children:"Demos"}),h.jsx("a",{href:"#pages",className:"font-semibold text-stone-900 text-lg md:text-xl md:mt-0 mt-4",children:"Pages"}),h.jsx("a",{href:"#support",className:"font-semibold text-stone-900 text-lg md:text-xl md:mt-0 mt-4",children:"Support"}),h.jsx("a",{href:"#contact",className:"font-semibold text-stone-900 text-lg md:text-xl md:mt-0 mt-4",children:"Contact"}),h.jsx("a",{href:"#about",className:"font-semibold text-stone-900 text-lg md:text-xl md:mt-0 mt-4",children:"About"}),h.jsxs("div",{className:"mt-8 flex flex-col items-center md:hidden",children:[h.jsx("p",{className:"text-stone-900 text-center mb-4",children:"Explore AirPods and their amazing features."}),h.jsx("button",{className:"bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-lg mb-4",children:"Buy now - Starting at $99"}),h.jsx("a",{href:"#contact",className:"text-blue-700 font-semibold",children:"Contact Us"})]})]}),h.jsxs("div",{className:"flex items-center ",children:[h.jsx("button",{className:"bg-blue-700 hover:bg-blue-800 text-white font-semibold py-4 px-6 rounded-lg mb-4 text-sm hidden md:block",children:"Buy now - Starting at $99"}),h.jsx("button",{className:"text-black md:hidden z-50 ml-4",onClick:n,children:h.jsx(Fu,{icon:e?S2:w2,size:"lg"})})]})]})},E2="/airpods-website/assets/airpod-image-BZfr0B1S.svg",b2=()=>h.jsx("div",{className:"flex flex-col p-6 items-center justify-center h-screen mb-10 section",children:h.jsxs("div",{className:"flex flex-col items-center justify-center text-center max-w-full mx-auto mt-6",children:[h.jsx(he,{direction:"down",triggerOnce:!0,duration:1e3,children:h.jsx("img",{src:E2,alt:"airpods",className:"mx-auto mb-2 w-8/12 md:w-full"})}),h.jsx(he,{direction:"up",triggerOnce:!0,duration:1e3,children:h.jsxs("div",{className:"mt-5",children:[h.jsx("span",{className:"text-red-500 font-semibold mt-14 text-sm",children:"NON-STOP MUSIC FOR LONG TIME"}),h.jsx("h1",{className:"text-5xl lg:text-6xl font-bold my-8",children:"Sound, that sounds better!"}),h.jsxs("p",{className:"text-gray-700 mb-6 mt-4 font-normal text-normal lg:text-lg",children:["With lots of unique blocks, you can easily build a page without coding. ",h.jsx("br",{className:"hidden md:block"})," Build your next consultancy website within few minutes."]}),h.jsx("div",{className:"mb-4",children:h.jsx(he,{direction:"left",triggerOnce:!0,duration:1e3,children:h.jsx("button",{className:"bg-blue-700 hover:bg-blue-800 text-white font-semibold py-4 px-6 rounded-lg mb-4 text-sm lg:text-base",children:"Buy now - Starting at $99"})})}),h.jsx("div",{children:h.jsx(he,{direction:"right",triggerOnce:!0,duration:1e3,children:h.jsx("a",{href:"#",className:"font-semibold no-underline tracking-widest text-xs lg:text-base",children:"WATCH IN ACTION"})})})]})})]})}),N2="/airpods-website/assets/airpods-quality--OOT3cGo.png",P2="/airpods-website/assets/airpods-quality-background-oWtxc5wA.svg",_2=()=>h.jsxs("div",{className:"flex flex-col justify-center items-center h-screen bg-slate-900 section",children:[h.jsxs(he,{direction:"down",triggerOnce:!0,duration:1500,children:[h.jsxs("h1",{className:"text-slate-100 text-center text-4xl font-bold",children:["Trendy designs with ",h.jsx("br",{})," better sound quality."]}),h.jsxs("p",{className:"text-slate-300 text-lg text-center mt-8",children:["Discover the trends and technologies ",h.jsx("br",{})," that make AirPods unique."]})]}),h.jsx(he,{direction:"up",triggerOnce:!0,duration:1500,children:h.jsx("div",{className:"flex justify-center gap-10 mt-10",children:h.jsx("img",{src:N2,alt:"Airpod Back",className:"w-full"})})}),h.jsx("img",{src:P2,className:"absolute mt-80"})]}),O2="/airpods-website/assets/reviews-img-QnbV2kQT.png",If="/airpods-website/assets/review-BBmTyPLS.svg",T2=()=>h.jsxs("div",{className:"flex min-h-screen bg-indigo-600 justify-end md:h-screen",children:[h.jsx(he,{direction:"left",triggerOnce:!0,duration:2500,children:h.jsxs("div",{className:"flex flex-col p-20 md:p-60 justify-center items-center md:items-start",children:[h.jsx(he,{direction:"up",triggerOnce:!0,duration:1500,children:h.jsxs("h1",{className:"font-bold text-4xl text-slate-50 text-center md:text-left md:text-5xl",children:["Comfortable buds ",h.jsx("br",{className:"hidden md:block"}),"with better sound."]})}),h.jsx(he,{direction:"down",triggerOnce:!0,duration:1500,delay:500,children:h.jsx("p",{className:"mt-6 text-slate-200 text-center text-xl md:text-left font-thin",children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea pariatur quam magni! Rerum nesciunt magni delectus necessitatibus aspernatur similique deleniti sunt natus esse tempora."})}),h.jsx(he,{direction:"right",triggerOnce:!0,duration:1500,delay:1e3,children:h.jsxs("div",{className:"flex mt-20",children:[h.jsx("div",{className:"flex flex-col justify-start"}),h.jsxs("div",{className:"flex flex-col items-center justify-center md:items-start",children:[h.jsx("p",{className:"text-slate-100 text-center text-xl md:text-left",children:"“You made it so simple. My new site is so much faster and easier to work with than my old site.”"}),h.jsxs("div",{className:"flex flex-col md:flex-row justify-center items-center gap-10 mt-10",children:[h.jsx("img",{src:If,alt:"review image",className:"w-20 md:hidden"}),h.jsx("span",{className:"text-md text-center text-slate-100 font-semibold md:text-left",children:"Rhoda Brady"}),h.jsx("img",{src:If,alt:"review image",className:"w-16 hidden md:block"})]})]})]})})]})}),h.jsx("img",{src:O2,alt:"background",className:"hidden md:block"})]});function j2(){return h.jsxs(h.Fragment,{children:[h.jsx(C2,{}),h.jsx(b2,{}),h.jsx(hg,{}),h.jsx(T2,{}),h.jsx(_2,{}),h.jsx(Sg,{}),h.jsx(gg,{})]})}sl.createRoot(document.getElementById("root")).render(h.jsx(Ra.StrictMode,{children:h.jsx(j2,{})}));
