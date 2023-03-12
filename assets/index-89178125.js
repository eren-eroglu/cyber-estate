function X1(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Y1(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ls={},J1={get exports(){return ls},set exports(t){ls=t}},hl={},S={},Z1={get exports(){return S},set exports(t){S=t}},B={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zs=Symbol.for("react.element"),ew=Symbol.for("react.portal"),tw=Symbol.for("react.fragment"),nw=Symbol.for("react.strict_mode"),rw=Symbol.for("react.profiler"),iw=Symbol.for("react.provider"),sw=Symbol.for("react.context"),ow=Symbol.for("react.forward_ref"),aw=Symbol.for("react.suspense"),lw=Symbol.for("react.memo"),uw=Symbol.for("react.lazy"),Ef=Symbol.iterator;function cw(t){return t===null||typeof t!="object"?null:(t=Ef&&t[Ef]||t["@@iterator"],typeof t=="function"?t:null)}var Gm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},qm=Object.assign,Qm={};function gi(t,e,n){this.props=t,this.context=e,this.refs=Qm,this.updater=n||Gm}gi.prototype.isReactComponent={};gi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};gi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Xm(){}Xm.prototype=gi.prototype;function Th(t,e,n){this.props=t,this.context=e,this.refs=Qm,this.updater=n||Gm}var Ih=Th.prototype=new Xm;Ih.constructor=Th;qm(Ih,gi.prototype);Ih.isPureReactComponent=!0;var _f=Array.isArray,Ym=Object.prototype.hasOwnProperty,kh={current:null},Jm={key:!0,ref:!0,__self:!0,__source:!0};function Zm(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Ym.call(e,r)&&!Jm.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:zs,type:t,key:s,ref:o,props:i,_owner:kh.current}}function hw(t,e){return{$$typeof:zs,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ch(t){return typeof t=="object"&&t!==null&&t.$$typeof===zs}function dw(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Sf=/\/+/g;function ru(t,e){return typeof t=="object"&&t!==null&&t.key!=null?dw(""+t.key):e.toString(36)}function Xo(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case zs:case ew:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+ru(o,0):r,_f(i)?(n="",t!=null&&(n=t.replace(Sf,"$&/")+"/"),Xo(i,e,n,"",function(u){return u})):i!=null&&(Ch(i)&&(i=hw(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Sf,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",_f(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+ru(s,a);o+=Xo(s,e,n,l,i)}else if(l=cw(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+ru(s,a++),o+=Xo(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function To(t,e,n){if(t==null)return t;var r=[],i=0;return Xo(t,r,"","",function(s){return e.call(n,s,i++)}),r}function fw(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Xe={current:null},Yo={transition:null},pw={ReactCurrentDispatcher:Xe,ReactCurrentBatchConfig:Yo,ReactCurrentOwner:kh};B.Children={map:To,forEach:function(t,e,n){To(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return To(t,function(){e++}),e},toArray:function(t){return To(t,function(e){return e})||[]},only:function(t){if(!Ch(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};B.Component=gi;B.Fragment=tw;B.Profiler=rw;B.PureComponent=Th;B.StrictMode=nw;B.Suspense=aw;B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pw;B.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=qm({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=kh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Ym.call(e,l)&&!Jm.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:zs,type:t.type,key:i,ref:s,props:r,_owner:o}};B.createContext=function(t){return t={$$typeof:sw,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:iw,_context:t},t.Consumer=t};B.createElement=Zm;B.createFactory=function(t){var e=Zm.bind(null,t);return e.type=t,e};B.createRef=function(){return{current:null}};B.forwardRef=function(t){return{$$typeof:ow,render:t}};B.isValidElement=Ch;B.lazy=function(t){return{$$typeof:uw,_payload:{_status:-1,_result:t},_init:fw}};B.memo=function(t,e){return{$$typeof:lw,type:t,compare:e===void 0?null:e}};B.startTransition=function(t){var e=Yo.transition;Yo.transition={};try{t()}finally{Yo.transition=e}};B.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};B.useCallback=function(t,e){return Xe.current.useCallback(t,e)};B.useContext=function(t){return Xe.current.useContext(t)};B.useDebugValue=function(){};B.useDeferredValue=function(t){return Xe.current.useDeferredValue(t)};B.useEffect=function(t,e){return Xe.current.useEffect(t,e)};B.useId=function(){return Xe.current.useId()};B.useImperativeHandle=function(t,e,n){return Xe.current.useImperativeHandle(t,e,n)};B.useInsertionEffect=function(t,e){return Xe.current.useInsertionEffect(t,e)};B.useLayoutEffect=function(t,e){return Xe.current.useLayoutEffect(t,e)};B.useMemo=function(t,e){return Xe.current.useMemo(t,e)};B.useReducer=function(t,e,n){return Xe.current.useReducer(t,e,n)};B.useRef=function(t){return Xe.current.useRef(t)};B.useState=function(t){return Xe.current.useState(t)};B.useSyncExternalStore=function(t,e,n){return Xe.current.useSyncExternalStore(t,e,n)};B.useTransition=function(){return Xe.current.useTransition()};B.version="18.2.0";(function(t){t.exports=B})(Z1);const H=Y1(S),Xu=X1({__proto__:null,default:H},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mw=S,gw=Symbol.for("react.element"),yw=Symbol.for("react.fragment"),vw=Object.prototype.hasOwnProperty,ww=mw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ew={key:!0,ref:!0,__self:!0,__source:!0};function eg(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)vw.call(e,r)&&!Ew.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:gw,type:t,key:s,ref:o,props:i,_owner:ww.current}}hl.Fragment=yw;hl.jsx=eg;hl.jsxs=eg;(function(t){t.exports=hl})(J1);const Nh=ls.Fragment,O=ls.jsx,Pe=ls.jsxs;var Yu={},Ju={},_w={get exports(){return Ju},set exports(t){Ju=t}},ft={},Zu={},Sw={get exports(){return Zu},set exports(t){Zu=t}},tg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(A,M){var V=A.length;A.push(M);e:for(;0<V;){var ue=V-1>>>1,we=A[ue];if(0<i(we,M))A[ue]=M,A[V]=we,V=ue;else break e}}function n(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var M=A[0],V=A.pop();if(V!==M){A[0]=V;e:for(var ue=0,we=A.length,_o=we>>>1;ue<_o;){var Gn=2*(ue+1)-1,nu=A[Gn],qn=Gn+1,So=A[qn];if(0>i(nu,V))qn<we&&0>i(So,nu)?(A[ue]=So,A[qn]=V,ue=qn):(A[ue]=nu,A[Gn]=V,ue=Gn);else if(qn<we&&0>i(So,V))A[ue]=So,A[qn]=V,ue=qn;else break e}}return M}function i(A,M){var V=A.sortIndex-M.sortIndex;return V!==0?V:A.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,p=3,g=!1,y=!1,v=!1,E=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(A){for(var M=n(u);M!==null;){if(M.callback===null)r(u);else if(M.startTime<=A)r(u),M.sortIndex=M.expirationTime,e(l,M);else break;M=n(u)}}function w(A){if(v=!1,m(A),!y)if(n(l)!==null)y=!0,Ce(_);else{var M=n(u);M!==null&&at(w,M.startTime-A)}}function _(A,M){y=!1,v&&(v=!1,f(R),R=-1),g=!0;var V=p;try{for(m(M),h=n(l);h!==null&&(!(h.expirationTime>M)||A&&!pe());){var ue=h.callback;if(typeof ue=="function"){h.callback=null,p=h.priorityLevel;var we=ue(h.expirationTime<=M);M=t.unstable_now(),typeof we=="function"?h.callback=we:h===n(l)&&r(l),m(M)}else r(l);h=n(l)}if(h!==null)var _o=!0;else{var Gn=n(u);Gn!==null&&at(w,Gn.startTime-M),_o=!1}return _o}finally{h=null,p=V,g=!1}}var C=!1,N=null,R=-1,W=5,U=-1;function pe(){return!(t.unstable_now()-U<W)}function Me(){if(N!==null){var A=t.unstable_now();U=A;var M=!0;try{M=N(!0,A)}finally{M?Je():(C=!1,N=null)}}else C=!1}var Je;if(typeof d=="function")Je=function(){d(Me)};else if(typeof MessageChannel<"u"){var Ze=new MessageChannel,zt=Ze.port2;Ze.port1.onmessage=Me,Je=function(){zt.postMessage(null)}}else Je=function(){E(Me,0)};function Ce(A){N=A,C||(C=!0,Je())}function at(A,M){R=E(function(){A(t.unstable_now())},M)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(A){A.callback=null},t.unstable_continueExecution=function(){y||g||(y=!0,Ce(_))},t.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<A?Math.floor(1e3/A):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(A){switch(p){case 1:case 2:case 3:var M=3;break;default:M=p}var V=p;p=M;try{return A()}finally{p=V}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(A,M){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var V=p;p=A;try{return M()}finally{p=V}},t.unstable_scheduleCallback=function(A,M,V){var ue=t.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?ue+V:ue):V=ue,A){case 1:var we=-1;break;case 2:we=250;break;case 5:we=1073741823;break;case 4:we=1e4;break;default:we=5e3}return we=V+we,A={id:c++,callback:M,priorityLevel:A,startTime:V,expirationTime:we,sortIndex:-1},V>ue?(A.sortIndex=V,e(u,A),n(l)===null&&A===n(u)&&(v?(f(R),R=-1):v=!0,at(w,V-ue))):(A.sortIndex=we,e(l,A),y||g||(y=!0,Ce(_))),A},t.unstable_shouldYield=pe,t.unstable_wrapCallback=function(A){var M=p;return function(){var V=p;p=M;try{return A.apply(this,arguments)}finally{p=V}}}})(tg);(function(t){t.exports=tg})(Sw);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ng=S,ht=Zu;function T(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var rg=new Set,us={};function Ir(t,e){ei(t,e),ei(t+"Capture",e)}function ei(t,e){for(us[t]=e,t=0;t<e.length;t++)rg.add(e[t])}var en=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ec=Object.prototype.hasOwnProperty,Tw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Tf={},If={};function Iw(t){return ec.call(If,t)?!0:ec.call(Tf,t)?!1:Tw.test(t)?If[t]=!0:(Tf[t]=!0,!1)}function kw(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Cw(t,e,n,r){if(e===null||typeof e>"u"||kw(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ye(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var xe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){xe[t]=new Ye(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];xe[e]=new Ye(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){xe[t]=new Ye(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){xe[t]=new Ye(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){xe[t]=new Ye(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){xe[t]=new Ye(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){xe[t]=new Ye(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){xe[t]=new Ye(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){xe[t]=new Ye(t,5,!1,t.toLowerCase(),null,!1,!1)});var Rh=/[\-:]([a-z])/g;function Ah(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Rh,Ah);xe[e]=new Ye(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Rh,Ah);xe[e]=new Ye(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Rh,Ah);xe[e]=new Ye(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){xe[t]=new Ye(t,1,!1,t.toLowerCase(),null,!1,!1)});xe.xlinkHref=new Ye("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){xe[t]=new Ye(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ph(t,e,n,r){var i=xe.hasOwnProperty(e)?xe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Cw(e,n,i,r)&&(n=null),r||i===null?Iw(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var ln=ng.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Io=Symbol.for("react.element"),Pr=Symbol.for("react.portal"),Dr=Symbol.for("react.fragment"),Dh=Symbol.for("react.strict_mode"),tc=Symbol.for("react.profiler"),ig=Symbol.for("react.provider"),sg=Symbol.for("react.context"),Oh=Symbol.for("react.forward_ref"),nc=Symbol.for("react.suspense"),rc=Symbol.for("react.suspense_list"),xh=Symbol.for("react.memo"),dn=Symbol.for("react.lazy"),og=Symbol.for("react.offscreen"),kf=Symbol.iterator;function Ni(t){return t===null||typeof t!="object"?null:(t=kf&&t[kf]||t["@@iterator"],typeof t=="function"?t:null)}var oe=Object.assign,iu;function $i(t){if(iu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);iu=e&&e[1]||""}return`
`+iu+t}var su=!1;function ou(t,e){if(!t||su)return"";su=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{su=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?$i(t):""}function Nw(t){switch(t.tag){case 5:return $i(t.type);case 16:return $i("Lazy");case 13:return $i("Suspense");case 19:return $i("SuspenseList");case 0:case 2:case 15:return t=ou(t.type,!1),t;case 11:return t=ou(t.type.render,!1),t;case 1:return t=ou(t.type,!0),t;default:return""}}function ic(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Dr:return"Fragment";case Pr:return"Portal";case tc:return"Profiler";case Dh:return"StrictMode";case nc:return"Suspense";case rc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case sg:return(t.displayName||"Context")+".Consumer";case ig:return(t._context.displayName||"Context")+".Provider";case Oh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case xh:return e=t.displayName||null,e!==null?e:ic(t.type)||"Memo";case dn:e=t._payload,t=t._init;try{return ic(t(e))}catch{}}return null}function Rw(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ic(e);case 8:return e===Dh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Un(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ag(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Aw(t){var e=ag(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ko(t){t._valueTracker||(t._valueTracker=Aw(t))}function lg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=ag(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ma(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function sc(t,e){var n=e.checked;return oe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Cf(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Un(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ug(t,e){e=e.checked,e!=null&&Ph(t,"checked",e,!1)}function oc(t,e){ug(t,e);var n=Un(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ac(t,e.type,n):e.hasOwnProperty("defaultValue")&&ac(t,e.type,Un(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Nf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ac(t,e,n){(e!=="number"||ma(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ui=Array.isArray;function Hr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Un(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function lc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(T(91));return oe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Rf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(T(92));if(Ui(n)){if(1<n.length)throw Error(T(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Un(n)}}function cg(t,e){var n=Un(e.value),r=Un(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Af(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function hg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function uc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?hg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Co,dg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Co=Co||document.createElement("div"),Co.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Co.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function cs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Wi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Pw=["Webkit","ms","Moz","O"];Object.keys(Wi).forEach(function(t){Pw.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Wi[e]=Wi[t]})});function fg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Wi.hasOwnProperty(t)&&Wi[t]?(""+e).trim():e+"px"}function pg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=fg(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Dw=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function cc(t,e){if(e){if(Dw[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(T(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(T(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(T(61))}if(e.style!=null&&typeof e.style!="object")throw Error(T(62))}}function hc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dc=null;function Lh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var fc=null,Wr=null,Kr=null;function Pf(t){if(t=Ks(t)){if(typeof fc!="function")throw Error(T(280));var e=t.stateNode;e&&(e=gl(e),fc(t.stateNode,t.type,e))}}function mg(t){Wr?Kr?Kr.push(t):Kr=[t]:Wr=t}function gg(){if(Wr){var t=Wr,e=Kr;if(Kr=Wr=null,Pf(t),e)for(t=0;t<e.length;t++)Pf(e[t])}}function yg(t,e){return t(e)}function vg(){}var au=!1;function wg(t,e,n){if(au)return t(e,n);au=!0;try{return yg(t,e,n)}finally{au=!1,(Wr!==null||Kr!==null)&&(vg(),gg())}}function hs(t,e){var n=t.stateNode;if(n===null)return null;var r=gl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(T(231,e,typeof n));return n}var pc=!1;if(en)try{var Ri={};Object.defineProperty(Ri,"passive",{get:function(){pc=!0}}),window.addEventListener("test",Ri,Ri),window.removeEventListener("test",Ri,Ri)}catch{pc=!1}function Ow(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Ki=!1,ga=null,ya=!1,mc=null,xw={onError:function(t){Ki=!0,ga=t}};function Lw(t,e,n,r,i,s,o,a,l){Ki=!1,ga=null,Ow.apply(xw,arguments)}function Mw(t,e,n,r,i,s,o,a,l){if(Lw.apply(this,arguments),Ki){if(Ki){var u=ga;Ki=!1,ga=null}else throw Error(T(198));ya||(ya=!0,mc=u)}}function kr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Eg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Df(t){if(kr(t)!==t)throw Error(T(188))}function $w(t){var e=t.alternate;if(!e){if(e=kr(t),e===null)throw Error(T(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Df(i),t;if(s===r)return Df(i),e;s=s.sibling}throw Error(T(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(T(189))}}if(n.alternate!==r)throw Error(T(190))}if(n.tag!==3)throw Error(T(188));return n.stateNode.current===n?t:e}function _g(t){return t=$w(t),t!==null?Sg(t):null}function Sg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Sg(t);if(e!==null)return e;t=t.sibling}return null}var Tg=ht.unstable_scheduleCallback,Of=ht.unstable_cancelCallback,Uw=ht.unstable_shouldYield,Fw=ht.unstable_requestPaint,ce=ht.unstable_now,bw=ht.unstable_getCurrentPriorityLevel,Mh=ht.unstable_ImmediatePriority,Ig=ht.unstable_UserBlockingPriority,va=ht.unstable_NormalPriority,Vw=ht.unstable_LowPriority,kg=ht.unstable_IdlePriority,dl=null,Ft=null;function Bw(t){if(Ft&&typeof Ft.onCommitFiberRoot=="function")try{Ft.onCommitFiberRoot(dl,t,void 0,(t.current.flags&128)===128)}catch{}}var Pt=Math.clz32?Math.clz32:Hw,jw=Math.log,zw=Math.LN2;function Hw(t){return t>>>=0,t===0?32:31-(jw(t)/zw|0)|0}var No=64,Ro=4194304;function Fi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function wa(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Fi(a):(s&=o,s!==0&&(r=Fi(s)))}else o=n&~i,o!==0?r=Fi(o):s!==0&&(r=Fi(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Pt(e),i=1<<n,r|=t[n],e&=~i;return r}function Ww(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Kw(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Pt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=Ww(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function gc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Cg(){var t=No;return No<<=1,!(No&4194240)&&(No=64),t}function lu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Hs(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Pt(e),t[e]=n}function Gw(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Pt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function $h(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Pt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var q=0;function Ng(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Rg,Uh,Ag,Pg,Dg,yc=!1,Ao=[],In=null,kn=null,Cn=null,ds=new Map,fs=new Map,pn=[],qw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xf(t,e){switch(t){case"focusin":case"focusout":In=null;break;case"dragenter":case"dragleave":kn=null;break;case"mouseover":case"mouseout":Cn=null;break;case"pointerover":case"pointerout":ds.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":fs.delete(e.pointerId)}}function Ai(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ks(e),e!==null&&Uh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Qw(t,e,n,r,i){switch(e){case"focusin":return In=Ai(In,t,e,n,r,i),!0;case"dragenter":return kn=Ai(kn,t,e,n,r,i),!0;case"mouseover":return Cn=Ai(Cn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ds.set(s,Ai(ds.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,fs.set(s,Ai(fs.get(s)||null,t,e,n,r,i)),!0}return!1}function Og(t){var e=er(t.target);if(e!==null){var n=kr(e);if(n!==null){if(e=n.tag,e===13){if(e=Eg(n),e!==null){t.blockedOn=e,Dg(t.priority,function(){Ag(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Jo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=vc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);dc=r,n.target.dispatchEvent(r),dc=null}else return e=Ks(n),e!==null&&Uh(e),t.blockedOn=n,!1;e.shift()}return!0}function Lf(t,e,n){Jo(t)&&n.delete(e)}function Xw(){yc=!1,In!==null&&Jo(In)&&(In=null),kn!==null&&Jo(kn)&&(kn=null),Cn!==null&&Jo(Cn)&&(Cn=null),ds.forEach(Lf),fs.forEach(Lf)}function Pi(t,e){t.blockedOn===e&&(t.blockedOn=null,yc||(yc=!0,ht.unstable_scheduleCallback(ht.unstable_NormalPriority,Xw)))}function ps(t){function e(i){return Pi(i,t)}if(0<Ao.length){Pi(Ao[0],t);for(var n=1;n<Ao.length;n++){var r=Ao[n];r.blockedOn===t&&(r.blockedOn=null)}}for(In!==null&&Pi(In,t),kn!==null&&Pi(kn,t),Cn!==null&&Pi(Cn,t),ds.forEach(e),fs.forEach(e),n=0;n<pn.length;n++)r=pn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<pn.length&&(n=pn[0],n.blockedOn===null);)Og(n),n.blockedOn===null&&pn.shift()}var Gr=ln.ReactCurrentBatchConfig,Ea=!0;function Yw(t,e,n,r){var i=q,s=Gr.transition;Gr.transition=null;try{q=1,Fh(t,e,n,r)}finally{q=i,Gr.transition=s}}function Jw(t,e,n,r){var i=q,s=Gr.transition;Gr.transition=null;try{q=4,Fh(t,e,n,r)}finally{q=i,Gr.transition=s}}function Fh(t,e,n,r){if(Ea){var i=vc(t,e,n,r);if(i===null)vu(t,e,r,_a,n),xf(t,r);else if(Qw(i,t,e,n,r))r.stopPropagation();else if(xf(t,r),e&4&&-1<qw.indexOf(t)){for(;i!==null;){var s=Ks(i);if(s!==null&&Rg(s),s=vc(t,e,n,r),s===null&&vu(t,e,r,_a,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else vu(t,e,r,null,n)}}var _a=null;function vc(t,e,n,r){if(_a=null,t=Lh(r),t=er(t),t!==null)if(e=kr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Eg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return _a=t,null}function xg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(bw()){case Mh:return 1;case Ig:return 4;case va:case Vw:return 16;case kg:return 536870912;default:return 16}default:return 16}}var En=null,bh=null,Zo=null;function Lg(){if(Zo)return Zo;var t,e=bh,n=e.length,r,i="value"in En?En.value:En.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Zo=i.slice(t,1<r?1-r:void 0)}function ea(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Po(){return!0}function Mf(){return!1}function pt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Po:Mf,this.isPropagationStopped=Mf,this}return oe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Po)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Po)},persist:function(){},isPersistent:Po}),e}var yi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vh=pt(yi),Ws=oe({},yi,{view:0,detail:0}),Zw=pt(Ws),uu,cu,Di,fl=oe({},Ws,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Di&&(Di&&t.type==="mousemove"?(uu=t.screenX-Di.screenX,cu=t.screenY-Di.screenY):cu=uu=0,Di=t),uu)},movementY:function(t){return"movementY"in t?t.movementY:cu}}),$f=pt(fl),eE=oe({},fl,{dataTransfer:0}),tE=pt(eE),nE=oe({},Ws,{relatedTarget:0}),hu=pt(nE),rE=oe({},yi,{animationName:0,elapsedTime:0,pseudoElement:0}),iE=pt(rE),sE=oe({},yi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),oE=pt(sE),aE=oe({},yi,{data:0}),Uf=pt(aE),lE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},uE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=cE[t])?!!e[t]:!1}function Bh(){return hE}var dE=oe({},Ws,{key:function(t){if(t.key){var e=lE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ea(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?uE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bh,charCode:function(t){return t.type==="keypress"?ea(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ea(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),fE=pt(dE),pE=oe({},fl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ff=pt(pE),mE=oe({},Ws,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bh}),gE=pt(mE),yE=oe({},yi,{propertyName:0,elapsedTime:0,pseudoElement:0}),vE=pt(yE),wE=oe({},fl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),EE=pt(wE),_E=[9,13,27,32],jh=en&&"CompositionEvent"in window,Gi=null;en&&"documentMode"in document&&(Gi=document.documentMode);var SE=en&&"TextEvent"in window&&!Gi,Mg=en&&(!jh||Gi&&8<Gi&&11>=Gi),bf=String.fromCharCode(32),Vf=!1;function $g(t,e){switch(t){case"keyup":return _E.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ug(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Or=!1;function TE(t,e){switch(t){case"compositionend":return Ug(e);case"keypress":return e.which!==32?null:(Vf=!0,bf);case"textInput":return t=e.data,t===bf&&Vf?null:t;default:return null}}function IE(t,e){if(Or)return t==="compositionend"||!jh&&$g(t,e)?(t=Lg(),Zo=bh=En=null,Or=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Mg&&e.locale!=="ko"?null:e.data;default:return null}}var kE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!kE[t.type]:e==="textarea"}function Fg(t,e,n,r){mg(r),e=Sa(e,"onChange"),0<e.length&&(n=new Vh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var qi=null,ms=null;function CE(t){Qg(t,0)}function pl(t){var e=Mr(t);if(lg(e))return t}function NE(t,e){if(t==="change")return e}var bg=!1;if(en){var du;if(en){var fu="oninput"in document;if(!fu){var jf=document.createElement("div");jf.setAttribute("oninput","return;"),fu=typeof jf.oninput=="function"}du=fu}else du=!1;bg=du&&(!document.documentMode||9<document.documentMode)}function zf(){qi&&(qi.detachEvent("onpropertychange",Vg),ms=qi=null)}function Vg(t){if(t.propertyName==="value"&&pl(ms)){var e=[];Fg(e,ms,t,Lh(t)),wg(CE,e)}}function RE(t,e,n){t==="focusin"?(zf(),qi=e,ms=n,qi.attachEvent("onpropertychange",Vg)):t==="focusout"&&zf()}function AE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return pl(ms)}function PE(t,e){if(t==="click")return pl(e)}function DE(t,e){if(t==="input"||t==="change")return pl(e)}function OE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ot=typeof Object.is=="function"?Object.is:OE;function gs(t,e){if(Ot(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ec.call(e,i)||!Ot(t[i],e[i]))return!1}return!0}function Hf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Wf(t,e){var n=Hf(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Hf(n)}}function Bg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Bg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function jg(){for(var t=window,e=ma();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ma(t.document)}return e}function zh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function xE(t){var e=jg(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Bg(n.ownerDocument.documentElement,n)){if(r!==null&&zh(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Wf(n,s);var o=Wf(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var LE=en&&"documentMode"in document&&11>=document.documentMode,xr=null,wc=null,Qi=null,Ec=!1;function Kf(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ec||xr==null||xr!==ma(r)||(r=xr,"selectionStart"in r&&zh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Qi&&gs(Qi,r)||(Qi=r,r=Sa(wc,"onSelect"),0<r.length&&(e=new Vh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=xr)))}function Do(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Lr={animationend:Do("Animation","AnimationEnd"),animationiteration:Do("Animation","AnimationIteration"),animationstart:Do("Animation","AnimationStart"),transitionend:Do("Transition","TransitionEnd")},pu={},zg={};en&&(zg=document.createElement("div").style,"AnimationEvent"in window||(delete Lr.animationend.animation,delete Lr.animationiteration.animation,delete Lr.animationstart.animation),"TransitionEvent"in window||delete Lr.transitionend.transition);function ml(t){if(pu[t])return pu[t];if(!Lr[t])return t;var e=Lr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in zg)return pu[t]=e[n];return t}var Hg=ml("animationend"),Wg=ml("animationiteration"),Kg=ml("animationstart"),Gg=ml("transitionend"),qg=new Map,Gf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function jn(t,e){qg.set(t,e),Ir(e,[t])}for(var mu=0;mu<Gf.length;mu++){var gu=Gf[mu],ME=gu.toLowerCase(),$E=gu[0].toUpperCase()+gu.slice(1);jn(ME,"on"+$E)}jn(Hg,"onAnimationEnd");jn(Wg,"onAnimationIteration");jn(Kg,"onAnimationStart");jn("dblclick","onDoubleClick");jn("focusin","onFocus");jn("focusout","onBlur");jn(Gg,"onTransitionEnd");ei("onMouseEnter",["mouseout","mouseover"]);ei("onMouseLeave",["mouseout","mouseover"]);ei("onPointerEnter",["pointerout","pointerover"]);ei("onPointerLeave",["pointerout","pointerover"]);Ir("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ir("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ir("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ir("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ir("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ir("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),UE=new Set("cancel close invalid load scroll toggle".split(" ").concat(bi));function qf(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Mw(r,e,void 0,t),t.currentTarget=null}function Qg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;qf(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;qf(i,a,u),s=l}}}if(ya)throw t=mc,ya=!1,mc=null,t}function Y(t,e){var n=e[kc];n===void 0&&(n=e[kc]=new Set);var r=t+"__bubble";n.has(r)||(Xg(e,t,2,!1),n.add(r))}function yu(t,e,n){var r=0;e&&(r|=4),Xg(n,t,r,e)}var Oo="_reactListening"+Math.random().toString(36).slice(2);function ys(t){if(!t[Oo]){t[Oo]=!0,rg.forEach(function(n){n!=="selectionchange"&&(UE.has(n)||yu(n,!1,t),yu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Oo]||(e[Oo]=!0,yu("selectionchange",!1,e))}}function Xg(t,e,n,r){switch(xg(e)){case 1:var i=Yw;break;case 4:i=Jw;break;default:i=Fh}n=i.bind(null,e,n,t),i=void 0,!pc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function vu(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=er(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}wg(function(){var u=s,c=Lh(n),h=[];e:{var p=qg.get(t);if(p!==void 0){var g=Vh,y=t;switch(t){case"keypress":if(ea(n)===0)break e;case"keydown":case"keyup":g=fE;break;case"focusin":y="focus",g=hu;break;case"focusout":y="blur",g=hu;break;case"beforeblur":case"afterblur":g=hu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=$f;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=tE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=gE;break;case Hg:case Wg:case Kg:g=iE;break;case Gg:g=vE;break;case"scroll":g=Zw;break;case"wheel":g=EE;break;case"copy":case"cut":case"paste":g=oE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Ff}var v=(e&4)!==0,E=!v&&t==="scroll",f=v?p!==null?p+"Capture":null:p;v=[];for(var d=u,m;d!==null;){m=d;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,f!==null&&(w=hs(d,f),w!=null&&v.push(vs(d,w,m)))),E)break;d=d.return}0<v.length&&(p=new g(p,y,null,n,c),h.push({event:p,listeners:v}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",p&&n!==dc&&(y=n.relatedTarget||n.fromElement)&&(er(y)||y[tn]))break e;if((g||p)&&(p=c.window===c?c:(p=c.ownerDocument)?p.defaultView||p.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=u,y=y?er(y):null,y!==null&&(E=kr(y),y!==E||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=u),g!==y)){if(v=$f,w="onMouseLeave",f="onMouseEnter",d="mouse",(t==="pointerout"||t==="pointerover")&&(v=Ff,w="onPointerLeave",f="onPointerEnter",d="pointer"),E=g==null?p:Mr(g),m=y==null?p:Mr(y),p=new v(w,d+"leave",g,n,c),p.target=E,p.relatedTarget=m,w=null,er(c)===u&&(v=new v(f,d+"enter",y,n,c),v.target=m,v.relatedTarget=E,w=v),E=w,g&&y)t:{for(v=g,f=y,d=0,m=v;m;m=Rr(m))d++;for(m=0,w=f;w;w=Rr(w))m++;for(;0<d-m;)v=Rr(v),d--;for(;0<m-d;)f=Rr(f),m--;for(;d--;){if(v===f||f!==null&&v===f.alternate)break t;v=Rr(v),f=Rr(f)}v=null}else v=null;g!==null&&Qf(h,p,g,v,!1),y!==null&&E!==null&&Qf(h,E,y,v,!0)}}e:{if(p=u?Mr(u):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var _=NE;else if(Bf(p))if(bg)_=DE;else{_=AE;var C=RE}else(g=p.nodeName)&&g.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(_=PE);if(_&&(_=_(t,u))){Fg(h,_,n,c);break e}C&&C(t,p,u),t==="focusout"&&(C=p._wrapperState)&&C.controlled&&p.type==="number"&&ac(p,"number",p.value)}switch(C=u?Mr(u):window,t){case"focusin":(Bf(C)||C.contentEditable==="true")&&(xr=C,wc=u,Qi=null);break;case"focusout":Qi=wc=xr=null;break;case"mousedown":Ec=!0;break;case"contextmenu":case"mouseup":case"dragend":Ec=!1,Kf(h,n,c);break;case"selectionchange":if(LE)break;case"keydown":case"keyup":Kf(h,n,c)}var N;if(jh)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Or?$g(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(Mg&&n.locale!=="ko"&&(Or||R!=="onCompositionStart"?R==="onCompositionEnd"&&Or&&(N=Lg()):(En=c,bh="value"in En?En.value:En.textContent,Or=!0)),C=Sa(u,R),0<C.length&&(R=new Uf(R,t,null,n,c),h.push({event:R,listeners:C}),N?R.data=N:(N=Ug(n),N!==null&&(R.data=N)))),(N=SE?TE(t,n):IE(t,n))&&(u=Sa(u,"onBeforeInput"),0<u.length&&(c=new Uf("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=N))}Qg(h,e)})}function vs(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Sa(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=hs(t,n),s!=null&&r.unshift(vs(t,s,i)),s=hs(t,e),s!=null&&r.push(vs(t,s,i))),t=t.return}return r}function Rr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Qf(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=hs(n,s),l!=null&&o.unshift(vs(n,l,a))):i||(l=hs(n,s),l!=null&&o.push(vs(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var FE=/\r\n?/g,bE=/\u0000|\uFFFD/g;function Xf(t){return(typeof t=="string"?t:""+t).replace(FE,`
`).replace(bE,"")}function xo(t,e,n){if(e=Xf(e),Xf(t)!==e&&n)throw Error(T(425))}function Ta(){}var _c=null,Sc=null;function Tc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ic=typeof setTimeout=="function"?setTimeout:void 0,VE=typeof clearTimeout=="function"?clearTimeout:void 0,Yf=typeof Promise=="function"?Promise:void 0,BE=typeof queueMicrotask=="function"?queueMicrotask:typeof Yf<"u"?function(t){return Yf.resolve(null).then(t).catch(jE)}:Ic;function jE(t){setTimeout(function(){throw t})}function wu(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ps(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ps(e)}function Nn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Jf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var vi=Math.random().toString(36).slice(2),$t="__reactFiber$"+vi,ws="__reactProps$"+vi,tn="__reactContainer$"+vi,kc="__reactEvents$"+vi,zE="__reactListeners$"+vi,HE="__reactHandles$"+vi;function er(t){var e=t[$t];if(e)return e;for(var n=t.parentNode;n;){if(e=n[tn]||n[$t]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Jf(t);t!==null;){if(n=t[$t])return n;t=Jf(t)}return e}t=n,n=t.parentNode}return null}function Ks(t){return t=t[$t]||t[tn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Mr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(T(33))}function gl(t){return t[ws]||null}var Cc=[],$r=-1;function zn(t){return{current:t}}function Z(t){0>$r||(t.current=Cc[$r],Cc[$r]=null,$r--)}function X(t,e){$r++,Cc[$r]=t.current,t.current=e}var Fn={},He=zn(Fn),rt=zn(!1),hr=Fn;function ti(t,e){var n=t.type.contextTypes;if(!n)return Fn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function it(t){return t=t.childContextTypes,t!=null}function Ia(){Z(rt),Z(He)}function Zf(t,e,n){if(He.current!==Fn)throw Error(T(168));X(He,e),X(rt,n)}function Yg(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(T(108,Rw(t)||"Unknown",i));return oe({},n,r)}function ka(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Fn,hr=He.current,X(He,t),X(rt,rt.current),!0}function ep(t,e,n){var r=t.stateNode;if(!r)throw Error(T(169));n?(t=Yg(t,e,hr),r.__reactInternalMemoizedMergedChildContext=t,Z(rt),Z(He),X(He,t)):Z(rt),X(rt,n)}var Wt=null,yl=!1,Eu=!1;function Jg(t){Wt===null?Wt=[t]:Wt.push(t)}function WE(t){yl=!0,Jg(t)}function Hn(){if(!Eu&&Wt!==null){Eu=!0;var t=0,e=q;try{var n=Wt;for(q=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Wt=null,yl=!1}catch(i){throw Wt!==null&&(Wt=Wt.slice(t+1)),Tg(Mh,Hn),i}finally{q=e,Eu=!1}}return null}var Ur=[],Fr=0,Ca=null,Na=0,gt=[],yt=0,dr=null,Kt=1,Gt="";function Qn(t,e){Ur[Fr++]=Na,Ur[Fr++]=Ca,Ca=t,Na=e}function Zg(t,e,n){gt[yt++]=Kt,gt[yt++]=Gt,gt[yt++]=dr,dr=t;var r=Kt;t=Gt;var i=32-Pt(r)-1;r&=~(1<<i),n+=1;var s=32-Pt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Kt=1<<32-Pt(e)+i|n<<i|r,Gt=s+t}else Kt=1<<s|n<<i|r,Gt=t}function Hh(t){t.return!==null&&(Qn(t,1),Zg(t,1,0))}function Wh(t){for(;t===Ca;)Ca=Ur[--Fr],Ur[Fr]=null,Na=Ur[--Fr],Ur[Fr]=null;for(;t===dr;)dr=gt[--yt],gt[yt]=null,Gt=gt[--yt],gt[yt]=null,Kt=gt[--yt],gt[yt]=null}var ct=null,ut=null,te=!1,Ct=null;function ey(t,e){var n=vt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function tp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,ct=t,ut=Nn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,ct=t,ut=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=dr!==null?{id:Kt,overflow:Gt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=vt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,ct=t,ut=null,!0):!1;default:return!1}}function Nc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Rc(t){if(te){var e=ut;if(e){var n=e;if(!tp(t,e)){if(Nc(t))throw Error(T(418));e=Nn(n.nextSibling);var r=ct;e&&tp(t,e)?ey(r,n):(t.flags=t.flags&-4097|2,te=!1,ct=t)}}else{if(Nc(t))throw Error(T(418));t.flags=t.flags&-4097|2,te=!1,ct=t}}}function np(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;ct=t}function Lo(t){if(t!==ct)return!1;if(!te)return np(t),te=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Tc(t.type,t.memoizedProps)),e&&(e=ut)){if(Nc(t))throw ty(),Error(T(418));for(;e;)ey(t,e),e=Nn(e.nextSibling)}if(np(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(T(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){ut=Nn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}ut=null}}else ut=ct?Nn(t.stateNode.nextSibling):null;return!0}function ty(){for(var t=ut;t;)t=Nn(t.nextSibling)}function ni(){ut=ct=null,te=!1}function Kh(t){Ct===null?Ct=[t]:Ct.push(t)}var KE=ln.ReactCurrentBatchConfig;function It(t,e){if(t&&t.defaultProps){e=oe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Ra=zn(null),Aa=null,br=null,Gh=null;function qh(){Gh=br=Aa=null}function Qh(t){var e=Ra.current;Z(Ra),t._currentValue=e}function Ac(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function qr(t,e){Aa=t,Gh=br=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(tt=!0),t.firstContext=null)}function Et(t){var e=t._currentValue;if(Gh!==t)if(t={context:t,memoizedValue:e,next:null},br===null){if(Aa===null)throw Error(T(308));br=t,Aa.dependencies={lanes:0,firstContext:t}}else br=br.next=t;return e}var tr=null;function Xh(t){tr===null?tr=[t]:tr.push(t)}function ny(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Xh(e)):(n.next=i.next,i.next=n),e.interleaved=n,nn(t,r)}function nn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var fn=!1;function Yh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ry(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Yt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Rn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,nn(t,n)}return i=r.interleaved,i===null?(e.next=e,Xh(r)):(e.next=i.next,i.next=e),r.interleaved=e,nn(t,n)}function ta(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,$h(t,n)}}function rp(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Pa(t,e,n,r){var i=t.updateQueue;fn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var p=a.lane,g=a.eventTime;if((r&p)===p){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,v=a;switch(p=e,g=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){h=y.call(g,h,p);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,p=typeof y=="function"?y.call(g,h,p):y,p==null)break e;h=oe({},h,p);break e;case 2:fn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else g={eventTime:g,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=h):c=c.next=g,o|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);pr|=o,t.lanes=o,t.memoizedState=h}}function ip(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(T(191,i));i.call(r)}}}var iy=new ng.Component().refs;function Pc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:oe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var vl={isMounted:function(t){return(t=t._reactInternals)?kr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=qe(),i=Pn(t),s=Yt(r,i);s.payload=e,n!=null&&(s.callback=n),e=Rn(t,s,i),e!==null&&(Dt(e,t,i,r),ta(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=qe(),i=Pn(t),s=Yt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Rn(t,s,i),e!==null&&(Dt(e,t,i,r),ta(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=qe(),r=Pn(t),i=Yt(n,r);i.tag=2,e!=null&&(i.callback=e),e=Rn(t,i,r),e!==null&&(Dt(e,t,r,n),ta(e,t,r))}};function sp(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!gs(n,r)||!gs(i,s):!0}function sy(t,e,n){var r=!1,i=Fn,s=e.contextType;return typeof s=="object"&&s!==null?s=Et(s):(i=it(e)?hr:He.current,r=e.contextTypes,s=(r=r!=null)?ti(t,i):Fn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=vl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function op(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&vl.enqueueReplaceState(e,e.state,null)}function Dc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=iy,Yh(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Et(s):(s=it(e)?hr:He.current,i.context=ti(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Pc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&vl.enqueueReplaceState(i,i.state,null),Pa(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Oi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(T(309));var r=n.stateNode}if(!r)throw Error(T(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===iy&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(T(284));if(!n._owner)throw Error(T(290,t))}return t}function Mo(t,e){throw t=Object.prototype.toString.call(e),Error(T(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function ap(t){var e=t._init;return e(t._payload)}function oy(t){function e(f,d){if(t){var m=f.deletions;m===null?(f.deletions=[d],f.flags|=16):m.push(d)}}function n(f,d){if(!t)return null;for(;d!==null;)e(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function i(f,d){return f=Dn(f,d),f.index=0,f.sibling=null,f}function s(f,d,m){return f.index=m,t?(m=f.alternate,m!==null?(m=m.index,m<d?(f.flags|=2,d):m):(f.flags|=2,d)):(f.flags|=1048576,d)}function o(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,d,m,w){return d===null||d.tag!==6?(d=Nu(m,f.mode,w),d.return=f,d):(d=i(d,m),d.return=f,d)}function l(f,d,m,w){var _=m.type;return _===Dr?c(f,d,m.props.children,w,m.key):d!==null&&(d.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===dn&&ap(_)===d.type)?(w=i(d,m.props),w.ref=Oi(f,d,m),w.return=f,w):(w=aa(m.type,m.key,m.props,null,f.mode,w),w.ref=Oi(f,d,m),w.return=f,w)}function u(f,d,m,w){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=Ru(m,f.mode,w),d.return=f,d):(d=i(d,m.children||[]),d.return=f,d)}function c(f,d,m,w,_){return d===null||d.tag!==7?(d=ar(m,f.mode,w,_),d.return=f,d):(d=i(d,m),d.return=f,d)}function h(f,d,m){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Nu(""+d,f.mode,m),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Io:return m=aa(d.type,d.key,d.props,null,f.mode,m),m.ref=Oi(f,null,d),m.return=f,m;case Pr:return d=Ru(d,f.mode,m),d.return=f,d;case dn:var w=d._init;return h(f,w(d._payload),m)}if(Ui(d)||Ni(d))return d=ar(d,f.mode,m,null),d.return=f,d;Mo(f,d)}return null}function p(f,d,m,w){var _=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return _!==null?null:a(f,d,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Io:return m.key===_?l(f,d,m,w):null;case Pr:return m.key===_?u(f,d,m,w):null;case dn:return _=m._init,p(f,d,_(m._payload),w)}if(Ui(m)||Ni(m))return _!==null?null:c(f,d,m,w,null);Mo(f,m)}return null}function g(f,d,m,w,_){if(typeof w=="string"&&w!==""||typeof w=="number")return f=f.get(m)||null,a(d,f,""+w,_);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Io:return f=f.get(w.key===null?m:w.key)||null,l(d,f,w,_);case Pr:return f=f.get(w.key===null?m:w.key)||null,u(d,f,w,_);case dn:var C=w._init;return g(f,d,m,C(w._payload),_)}if(Ui(w)||Ni(w))return f=f.get(m)||null,c(d,f,w,_,null);Mo(d,w)}return null}function y(f,d,m,w){for(var _=null,C=null,N=d,R=d=0,W=null;N!==null&&R<m.length;R++){N.index>R?(W=N,N=null):W=N.sibling;var U=p(f,N,m[R],w);if(U===null){N===null&&(N=W);break}t&&N&&U.alternate===null&&e(f,N),d=s(U,d,R),C===null?_=U:C.sibling=U,C=U,N=W}if(R===m.length)return n(f,N),te&&Qn(f,R),_;if(N===null){for(;R<m.length;R++)N=h(f,m[R],w),N!==null&&(d=s(N,d,R),C===null?_=N:C.sibling=N,C=N);return te&&Qn(f,R),_}for(N=r(f,N);R<m.length;R++)W=g(N,f,R,m[R],w),W!==null&&(t&&W.alternate!==null&&N.delete(W.key===null?R:W.key),d=s(W,d,R),C===null?_=W:C.sibling=W,C=W);return t&&N.forEach(function(pe){return e(f,pe)}),te&&Qn(f,R),_}function v(f,d,m,w){var _=Ni(m);if(typeof _!="function")throw Error(T(150));if(m=_.call(m),m==null)throw Error(T(151));for(var C=_=null,N=d,R=d=0,W=null,U=m.next();N!==null&&!U.done;R++,U=m.next()){N.index>R?(W=N,N=null):W=N.sibling;var pe=p(f,N,U.value,w);if(pe===null){N===null&&(N=W);break}t&&N&&pe.alternate===null&&e(f,N),d=s(pe,d,R),C===null?_=pe:C.sibling=pe,C=pe,N=W}if(U.done)return n(f,N),te&&Qn(f,R),_;if(N===null){for(;!U.done;R++,U=m.next())U=h(f,U.value,w),U!==null&&(d=s(U,d,R),C===null?_=U:C.sibling=U,C=U);return te&&Qn(f,R),_}for(N=r(f,N);!U.done;R++,U=m.next())U=g(N,f,R,U.value,w),U!==null&&(t&&U.alternate!==null&&N.delete(U.key===null?R:U.key),d=s(U,d,R),C===null?_=U:C.sibling=U,C=U);return t&&N.forEach(function(Me){return e(f,Me)}),te&&Qn(f,R),_}function E(f,d,m,w){if(typeof m=="object"&&m!==null&&m.type===Dr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Io:e:{for(var _=m.key,C=d;C!==null;){if(C.key===_){if(_=m.type,_===Dr){if(C.tag===7){n(f,C.sibling),d=i(C,m.props.children),d.return=f,f=d;break e}}else if(C.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===dn&&ap(_)===C.type){n(f,C.sibling),d=i(C,m.props),d.ref=Oi(f,C,m),d.return=f,f=d;break e}n(f,C);break}else e(f,C);C=C.sibling}m.type===Dr?(d=ar(m.props.children,f.mode,w,m.key),d.return=f,f=d):(w=aa(m.type,m.key,m.props,null,f.mode,w),w.ref=Oi(f,d,m),w.return=f,f=w)}return o(f);case Pr:e:{for(C=m.key;d!==null;){if(d.key===C)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){n(f,d.sibling),d=i(d,m.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else e(f,d);d=d.sibling}d=Ru(m,f.mode,w),d.return=f,f=d}return o(f);case dn:return C=m._init,E(f,d,C(m._payload),w)}if(Ui(m))return y(f,d,m,w);if(Ni(m))return v(f,d,m,w);Mo(f,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&d.tag===6?(n(f,d.sibling),d=i(d,m),d.return=f,f=d):(n(f,d),d=Nu(m,f.mode,w),d.return=f,f=d),o(f)):n(f,d)}return E}var ri=oy(!0),ay=oy(!1),Gs={},bt=zn(Gs),Es=zn(Gs),_s=zn(Gs);function nr(t){if(t===Gs)throw Error(T(174));return t}function Jh(t,e){switch(X(_s,e),X(Es,t),X(bt,Gs),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:uc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=uc(e,t)}Z(bt),X(bt,e)}function ii(){Z(bt),Z(Es),Z(_s)}function ly(t){nr(_s.current);var e=nr(bt.current),n=uc(e,t.type);e!==n&&(X(Es,t),X(bt,n))}function Zh(t){Es.current===t&&(Z(bt),Z(Es))}var ie=zn(0);function Da(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var _u=[];function ed(){for(var t=0;t<_u.length;t++)_u[t]._workInProgressVersionPrimary=null;_u.length=0}var na=ln.ReactCurrentDispatcher,Su=ln.ReactCurrentBatchConfig,fr=0,se=null,me=null,_e=null,Oa=!1,Xi=!1,Ss=0,GE=0;function $e(){throw Error(T(321))}function td(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ot(t[n],e[n]))return!1;return!0}function nd(t,e,n,r,i,s){if(fr=s,se=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,na.current=t===null||t.memoizedState===null?YE:JE,t=n(r,i),Xi){s=0;do{if(Xi=!1,Ss=0,25<=s)throw Error(T(301));s+=1,_e=me=null,e.updateQueue=null,na.current=ZE,t=n(r,i)}while(Xi)}if(na.current=xa,e=me!==null&&me.next!==null,fr=0,_e=me=se=null,Oa=!1,e)throw Error(T(300));return t}function rd(){var t=Ss!==0;return Ss=0,t}function Mt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _e===null?se.memoizedState=_e=t:_e=_e.next=t,_e}function _t(){if(me===null){var t=se.alternate;t=t!==null?t.memoizedState:null}else t=me.next;var e=_e===null?se.memoizedState:_e.next;if(e!==null)_e=e,me=t;else{if(t===null)throw Error(T(310));me=t,t={memoizedState:me.memoizedState,baseState:me.baseState,baseQueue:me.baseQueue,queue:me.queue,next:null},_e===null?se.memoizedState=_e=t:_e=_e.next=t}return _e}function Ts(t,e){return typeof e=="function"?e(t):e}function Tu(t){var e=_t(),n=e.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=t;var r=me,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((fr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,se.lanes|=c,pr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Ot(r,e.memoizedState)||(tt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,se.lanes|=s,pr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Iu(t){var e=_t(),n=e.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Ot(s,e.memoizedState)||(tt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function uy(){}function cy(t,e){var n=se,r=_t(),i=e(),s=!Ot(r.memoizedState,i);if(s&&(r.memoizedState=i,tt=!0),r=r.queue,id(fy.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||_e!==null&&_e.memoizedState.tag&1){if(n.flags|=2048,Is(9,dy.bind(null,n,r,i,e),void 0,null),Te===null)throw Error(T(349));fr&30||hy(n,e,i)}return i}function hy(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=se.updateQueue,e===null?(e={lastEffect:null,stores:null},se.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function dy(t,e,n,r){e.value=n,e.getSnapshot=r,py(e)&&my(t)}function fy(t,e,n){return n(function(){py(e)&&my(t)})}function py(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ot(t,n)}catch{return!0}}function my(t){var e=nn(t,1);e!==null&&Dt(e,t,1,-1)}function lp(t){var e=Mt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ts,lastRenderedState:t},e.queue=t,t=t.dispatch=XE.bind(null,se,t),[e.memoizedState,t]}function Is(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=se.updateQueue,e===null?(e={lastEffect:null,stores:null},se.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function gy(){return _t().memoizedState}function ra(t,e,n,r){var i=Mt();se.flags|=t,i.memoizedState=Is(1|e,n,void 0,r===void 0?null:r)}function wl(t,e,n,r){var i=_t();r=r===void 0?null:r;var s=void 0;if(me!==null){var o=me.memoizedState;if(s=o.destroy,r!==null&&td(r,o.deps)){i.memoizedState=Is(e,n,s,r);return}}se.flags|=t,i.memoizedState=Is(1|e,n,s,r)}function up(t,e){return ra(8390656,8,t,e)}function id(t,e){return wl(2048,8,t,e)}function yy(t,e){return wl(4,2,t,e)}function vy(t,e){return wl(4,4,t,e)}function wy(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Ey(t,e,n){return n=n!=null?n.concat([t]):null,wl(4,4,wy.bind(null,e,t),n)}function sd(){}function _y(t,e){var n=_t();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&td(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Sy(t,e){var n=_t();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&td(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Ty(t,e,n){return fr&21?(Ot(n,e)||(n=Cg(),se.lanes|=n,pr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,tt=!0),t.memoizedState=n)}function qE(t,e){var n=q;q=n!==0&&4>n?n:4,t(!0);var r=Su.transition;Su.transition={};try{t(!1),e()}finally{q=n,Su.transition=r}}function Iy(){return _t().memoizedState}function QE(t,e,n){var r=Pn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ky(t))Cy(e,n);else if(n=ny(t,e,n,r),n!==null){var i=qe();Dt(n,t,r,i),Ny(n,e,r)}}function XE(t,e,n){var r=Pn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ky(t))Cy(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Ot(a,o)){var l=e.interleaved;l===null?(i.next=i,Xh(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=ny(t,e,i,r),n!==null&&(i=qe(),Dt(n,t,r,i),Ny(n,e,r))}}function ky(t){var e=t.alternate;return t===se||e!==null&&e===se}function Cy(t,e){Xi=Oa=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Ny(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,$h(t,n)}}var xa={readContext:Et,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useInsertionEffect:$e,useLayoutEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useMutableSource:$e,useSyncExternalStore:$e,useId:$e,unstable_isNewReconciler:!1},YE={readContext:Et,useCallback:function(t,e){return Mt().memoizedState=[t,e===void 0?null:e],t},useContext:Et,useEffect:up,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ra(4194308,4,wy.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ra(4194308,4,t,e)},useInsertionEffect:function(t,e){return ra(4,2,t,e)},useMemo:function(t,e){var n=Mt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Mt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=QE.bind(null,se,t),[r.memoizedState,t]},useRef:function(t){var e=Mt();return t={current:t},e.memoizedState=t},useState:lp,useDebugValue:sd,useDeferredValue:function(t){return Mt().memoizedState=t},useTransition:function(){var t=lp(!1),e=t[0];return t=qE.bind(null,t[1]),Mt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=se,i=Mt();if(te){if(n===void 0)throw Error(T(407));n=n()}else{if(n=e(),Te===null)throw Error(T(349));fr&30||hy(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,up(fy.bind(null,r,s,t),[t]),r.flags|=2048,Is(9,dy.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Mt(),e=Te.identifierPrefix;if(te){var n=Gt,r=Kt;n=(r&~(1<<32-Pt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ss++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=GE++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},JE={readContext:Et,useCallback:_y,useContext:Et,useEffect:id,useImperativeHandle:Ey,useInsertionEffect:yy,useLayoutEffect:vy,useMemo:Sy,useReducer:Tu,useRef:gy,useState:function(){return Tu(Ts)},useDebugValue:sd,useDeferredValue:function(t){var e=_t();return Ty(e,me.memoizedState,t)},useTransition:function(){var t=Tu(Ts)[0],e=_t().memoizedState;return[t,e]},useMutableSource:uy,useSyncExternalStore:cy,useId:Iy,unstable_isNewReconciler:!1},ZE={readContext:Et,useCallback:_y,useContext:Et,useEffect:id,useImperativeHandle:Ey,useInsertionEffect:yy,useLayoutEffect:vy,useMemo:Sy,useReducer:Iu,useRef:gy,useState:function(){return Iu(Ts)},useDebugValue:sd,useDeferredValue:function(t){var e=_t();return me===null?e.memoizedState=t:Ty(e,me.memoizedState,t)},useTransition:function(){var t=Iu(Ts)[0],e=_t().memoizedState;return[t,e]},useMutableSource:uy,useSyncExternalStore:cy,useId:Iy,unstable_isNewReconciler:!1};function si(t,e){try{var n="",r=e;do n+=Nw(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function ku(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Oc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var e_=typeof WeakMap=="function"?WeakMap:Map;function Ry(t,e,n){n=Yt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ma||(Ma=!0,jc=r),Oc(t,e)},n}function Ay(t,e,n){n=Yt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Oc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Oc(t,e),typeof r!="function"&&(An===null?An=new Set([this]):An.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function cp(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new e_;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=p_.bind(null,t,e,n),e.then(t,t))}function hp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function dp(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Yt(-1,1),e.tag=2,Rn(n,e,1))),n.lanes|=1),t)}var t_=ln.ReactCurrentOwner,tt=!1;function Ke(t,e,n,r){e.child=t===null?ay(e,null,n,r):ri(e,t.child,n,r)}function fp(t,e,n,r,i){n=n.render;var s=e.ref;return qr(e,i),r=nd(t,e,n,r,s,i),n=rd(),t!==null&&!tt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,rn(t,e,i)):(te&&n&&Hh(e),e.flags|=1,Ke(t,e,r,i),e.child)}function pp(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!fd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Py(t,e,s,r,i)):(t=aa(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:gs,n(o,r)&&t.ref===e.ref)return rn(t,e,i)}return e.flags|=1,t=Dn(s,r),t.ref=e.ref,t.return=e,e.child=t}function Py(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(gs(s,r)&&t.ref===e.ref)if(tt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(tt=!0);else return e.lanes=t.lanes,rn(t,e,i)}return xc(t,e,n,r,i)}function Dy(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},X(Br,lt),lt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,X(Br,lt),lt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,X(Br,lt),lt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,X(Br,lt),lt|=r;return Ke(t,e,i,n),e.child}function Oy(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function xc(t,e,n,r,i){var s=it(n)?hr:He.current;return s=ti(e,s),qr(e,i),n=nd(t,e,n,r,s,i),r=rd(),t!==null&&!tt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,rn(t,e,i)):(te&&r&&Hh(e),e.flags|=1,Ke(t,e,n,i),e.child)}function mp(t,e,n,r,i){if(it(n)){var s=!0;ka(e)}else s=!1;if(qr(e,i),e.stateNode===null)ia(t,e),sy(e,n,r),Dc(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Et(u):(u=it(n)?hr:He.current,u=ti(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&op(e,o,r,u),fn=!1;var p=e.memoizedState;o.state=p,Pa(e,r,o,i),l=e.memoizedState,a!==r||p!==l||rt.current||fn?(typeof c=="function"&&(Pc(e,n,c,r),l=e.memoizedState),(a=fn||sp(e,n,a,r,p,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,ry(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:It(e.type,a),o.props=u,h=e.pendingProps,p=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Et(l):(l=it(n)?hr:He.current,l=ti(e,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||p!==l)&&op(e,o,r,l),fn=!1,p=e.memoizedState,o.state=p,Pa(e,r,o,i);var y=e.memoizedState;a!==h||p!==y||rt.current||fn?(typeof g=="function"&&(Pc(e,n,g,r),y=e.memoizedState),(u=fn||sp(e,n,u,r,p,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),r=!1)}return Lc(t,e,n,r,s,i)}function Lc(t,e,n,r,i,s){Oy(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&ep(e,n,!1),rn(t,e,s);r=e.stateNode,t_.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ri(e,t.child,null,s),e.child=ri(e,null,a,s)):Ke(t,e,a,s),e.memoizedState=r.state,i&&ep(e,n,!0),e.child}function xy(t){var e=t.stateNode;e.pendingContext?Zf(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Zf(t,e.context,!1),Jh(t,e.containerInfo)}function gp(t,e,n,r,i){return ni(),Kh(i),e.flags|=256,Ke(t,e,n,r),e.child}var Mc={dehydrated:null,treeContext:null,retryLane:0};function $c(t){return{baseLanes:t,cachePool:null,transitions:null}}function Ly(t,e,n){var r=e.pendingProps,i=ie.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),X(ie,i&1),t===null)return Rc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Sl(o,r,0,null),t=ar(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=$c(n),e.memoizedState=Mc,t):od(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return n_(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Dn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Dn(a,s):(s=ar(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?$c(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Mc,r}return s=t.child,t=s.sibling,r=Dn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function od(t,e){return e=Sl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function $o(t,e,n,r){return r!==null&&Kh(r),ri(e,t.child,null,n),t=od(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function n_(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=ku(Error(T(422))),$o(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Sl({mode:"visible",children:r.children},i,0,null),s=ar(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ri(e,t.child,null,o),e.child.memoizedState=$c(o),e.memoizedState=Mc,s);if(!(e.mode&1))return $o(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(T(419)),r=ku(s,r,void 0),$o(t,e,o,r)}if(a=(o&t.childLanes)!==0,tt||a){if(r=Te,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,nn(t,i),Dt(r,t,i,-1))}return dd(),r=ku(Error(T(421))),$o(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=m_.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,ut=Nn(i.nextSibling),ct=e,te=!0,Ct=null,t!==null&&(gt[yt++]=Kt,gt[yt++]=Gt,gt[yt++]=dr,Kt=t.id,Gt=t.overflow,dr=e),e=od(e,r.children),e.flags|=4096,e)}function yp(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Ac(t.return,e,n)}function Cu(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function My(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ke(t,e,r.children,n),r=ie.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&yp(t,n,e);else if(t.tag===19)yp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(X(ie,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Da(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Cu(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Da(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Cu(e,!0,n,null,s);break;case"together":Cu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ia(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function rn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),pr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(T(153));if(e.child!==null){for(t=e.child,n=Dn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Dn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function r_(t,e,n){switch(e.tag){case 3:xy(e),ni();break;case 5:ly(e);break;case 1:it(e.type)&&ka(e);break;case 4:Jh(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;X(Ra,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(X(ie,ie.current&1),e.flags|=128,null):n&e.child.childLanes?Ly(t,e,n):(X(ie,ie.current&1),t=rn(t,e,n),t!==null?t.sibling:null);X(ie,ie.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return My(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),X(ie,ie.current),r)break;return null;case 22:case 23:return e.lanes=0,Dy(t,e,n)}return rn(t,e,n)}var $y,Uc,Uy,Fy;$y=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Uc=function(){};Uy=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,nr(bt.current);var s=null;switch(n){case"input":i=sc(t,i),r=sc(t,r),s=[];break;case"select":i=oe({},i,{value:void 0}),r=oe({},r,{value:void 0}),s=[];break;case"textarea":i=lc(t,i),r=lc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ta)}cc(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(us.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(us.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Y("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Fy=function(t,e,n,r){n!==r&&(e.flags|=4)};function xi(t,e){if(!te)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ue(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function i_(t,e,n){var r=e.pendingProps;switch(Wh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ue(e),null;case 1:return it(e.type)&&Ia(),Ue(e),null;case 3:return r=e.stateNode,ii(),Z(rt),Z(He),ed(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Lo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ct!==null&&(Wc(Ct),Ct=null))),Uc(t,e),Ue(e),null;case 5:Zh(e);var i=nr(_s.current);if(n=e.type,t!==null&&e.stateNode!=null)Uy(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(T(166));return Ue(e),null}if(t=nr(bt.current),Lo(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[$t]=e,r[ws]=s,t=(e.mode&1)!==0,n){case"dialog":Y("cancel",r),Y("close",r);break;case"iframe":case"object":case"embed":Y("load",r);break;case"video":case"audio":for(i=0;i<bi.length;i++)Y(bi[i],r);break;case"source":Y("error",r);break;case"img":case"image":case"link":Y("error",r),Y("load",r);break;case"details":Y("toggle",r);break;case"input":Cf(r,s),Y("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Y("invalid",r);break;case"textarea":Rf(r,s),Y("invalid",r)}cc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&xo(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&xo(r.textContent,a,t),i=["children",""+a]):us.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Y("scroll",r)}switch(n){case"input":ko(r),Nf(r,s,!0);break;case"textarea":ko(r),Af(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ta)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=hg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[$t]=e,t[ws]=r,$y(t,e,!1,!1),e.stateNode=t;e:{switch(o=hc(n,r),n){case"dialog":Y("cancel",t),Y("close",t),i=r;break;case"iframe":case"object":case"embed":Y("load",t),i=r;break;case"video":case"audio":for(i=0;i<bi.length;i++)Y(bi[i],t);i=r;break;case"source":Y("error",t),i=r;break;case"img":case"image":case"link":Y("error",t),Y("load",t),i=r;break;case"details":Y("toggle",t),i=r;break;case"input":Cf(t,r),i=sc(t,r),Y("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=oe({},r,{value:void 0}),Y("invalid",t);break;case"textarea":Rf(t,r),i=lc(t,r),Y("invalid",t);break;default:i=r}cc(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?pg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&dg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&cs(t,l):typeof l=="number"&&cs(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(us.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Y("scroll",t):l!=null&&Ph(t,s,l,o))}switch(n){case"input":ko(t),Nf(t,r,!1);break;case"textarea":ko(t),Af(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Un(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Hr(t,!!r.multiple,s,!1):r.defaultValue!=null&&Hr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ta)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ue(e),null;case 6:if(t&&e.stateNode!=null)Fy(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(T(166));if(n=nr(_s.current),nr(bt.current),Lo(e)){if(r=e.stateNode,n=e.memoizedProps,r[$t]=e,(s=r.nodeValue!==n)&&(t=ct,t!==null))switch(t.tag){case 3:xo(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&xo(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[$t]=e,e.stateNode=r}return Ue(e),null;case 13:if(Z(ie),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(te&&ut!==null&&e.mode&1&&!(e.flags&128))ty(),ni(),e.flags|=98560,s=!1;else if(s=Lo(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(T(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(T(317));s[$t]=e}else ni(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ue(e),s=!1}else Ct!==null&&(Wc(Ct),Ct=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ie.current&1?ge===0&&(ge=3):dd())),e.updateQueue!==null&&(e.flags|=4),Ue(e),null);case 4:return ii(),Uc(t,e),t===null&&ys(e.stateNode.containerInfo),Ue(e),null;case 10:return Qh(e.type._context),Ue(e),null;case 17:return it(e.type)&&Ia(),Ue(e),null;case 19:if(Z(ie),s=e.memoizedState,s===null)return Ue(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)xi(s,!1);else{if(ge!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Da(t),o!==null){for(e.flags|=128,xi(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return X(ie,ie.current&1|2),e.child}t=t.sibling}s.tail!==null&&ce()>oi&&(e.flags|=128,r=!0,xi(s,!1),e.lanes=4194304)}else{if(!r)if(t=Da(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),xi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!te)return Ue(e),null}else 2*ce()-s.renderingStartTime>oi&&n!==1073741824&&(e.flags|=128,r=!0,xi(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ce(),e.sibling=null,n=ie.current,X(ie,r?n&1|2:n&1),e):(Ue(e),null);case 22:case 23:return hd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?lt&1073741824&&(Ue(e),e.subtreeFlags&6&&(e.flags|=8192)):Ue(e),null;case 24:return null;case 25:return null}throw Error(T(156,e.tag))}function s_(t,e){switch(Wh(e),e.tag){case 1:return it(e.type)&&Ia(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ii(),Z(rt),Z(He),ed(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Zh(e),null;case 13:if(Z(ie),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(T(340));ni()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Z(ie),null;case 4:return ii(),null;case 10:return Qh(e.type._context),null;case 22:case 23:return hd(),null;case 24:return null;default:return null}}var Uo=!1,be=!1,o_=typeof WeakSet=="function"?WeakSet:Set,P=null;function Vr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ae(t,e,r)}else n.current=null}function Fc(t,e,n){try{n()}catch(r){ae(t,e,r)}}var vp=!1;function a_(t,e){if(_c=Ea,t=jg(),zh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,p=null;t:for(;;){for(var g;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(g=h.firstChild)!==null;)p=h,h=g;for(;;){if(h===t)break t;if(p===n&&++u===i&&(a=o),p===s&&++c===r&&(l=o),(g=h.nextSibling)!==null)break;h=p,p=h.parentNode}h=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Sc={focusedElem:t,selectionRange:n},Ea=!1,P=e;P!==null;)if(e=P,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,P=t;else for(;P!==null;){e=P;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,E=y.memoizedState,f=e.stateNode,d=f.getSnapshotBeforeUpdate(e.elementType===e.type?v:It(e.type,v),E);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(w){ae(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,P=t;break}P=e.return}return y=vp,vp=!1,y}function Yi(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Fc(e,n,s)}i=i.next}while(i!==r)}}function El(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function bc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function by(t){var e=t.alternate;e!==null&&(t.alternate=null,by(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[$t],delete e[ws],delete e[kc],delete e[zE],delete e[HE])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Vy(t){return t.tag===5||t.tag===3||t.tag===4}function wp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Vy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Vc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ta));else if(r!==4&&(t=t.child,t!==null))for(Vc(t,e,n),t=t.sibling;t!==null;)Vc(t,e,n),t=t.sibling}function Bc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Bc(t,e,n),t=t.sibling;t!==null;)Bc(t,e,n),t=t.sibling}var Ne=null,kt=!1;function cn(t,e,n){for(n=n.child;n!==null;)By(t,e,n),n=n.sibling}function By(t,e,n){if(Ft&&typeof Ft.onCommitFiberUnmount=="function")try{Ft.onCommitFiberUnmount(dl,n)}catch{}switch(n.tag){case 5:be||Vr(n,e);case 6:var r=Ne,i=kt;Ne=null,cn(t,e,n),Ne=r,kt=i,Ne!==null&&(kt?(t=Ne,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ne.removeChild(n.stateNode));break;case 18:Ne!==null&&(kt?(t=Ne,n=n.stateNode,t.nodeType===8?wu(t.parentNode,n):t.nodeType===1&&wu(t,n),ps(t)):wu(Ne,n.stateNode));break;case 4:r=Ne,i=kt,Ne=n.stateNode.containerInfo,kt=!0,cn(t,e,n),Ne=r,kt=i;break;case 0:case 11:case 14:case 15:if(!be&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Fc(n,e,o),i=i.next}while(i!==r)}cn(t,e,n);break;case 1:if(!be&&(Vr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ae(n,e,a)}cn(t,e,n);break;case 21:cn(t,e,n);break;case 22:n.mode&1?(be=(r=be)||n.memoizedState!==null,cn(t,e,n),be=r):cn(t,e,n);break;default:cn(t,e,n)}}function Ep(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new o_),e.forEach(function(r){var i=g_.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Tt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ne=a.stateNode,kt=!1;break e;case 3:Ne=a.stateNode.containerInfo,kt=!0;break e;case 4:Ne=a.stateNode.containerInfo,kt=!0;break e}a=a.return}if(Ne===null)throw Error(T(160));By(s,o,i),Ne=null,kt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ae(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)jy(e,t),e=e.sibling}function jy(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Tt(e,t),Lt(t),r&4){try{Yi(3,t,t.return),El(3,t)}catch(v){ae(t,t.return,v)}try{Yi(5,t,t.return)}catch(v){ae(t,t.return,v)}}break;case 1:Tt(e,t),Lt(t),r&512&&n!==null&&Vr(n,n.return);break;case 5:if(Tt(e,t),Lt(t),r&512&&n!==null&&Vr(n,n.return),t.flags&32){var i=t.stateNode;try{cs(i,"")}catch(v){ae(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&ug(i,s),hc(a,o);var u=hc(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?pg(i,h):c==="dangerouslySetInnerHTML"?dg(i,h):c==="children"?cs(i,h):Ph(i,c,h,u)}switch(a){case"input":oc(i,s);break;case"textarea":cg(i,s);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Hr(i,!!s.multiple,g,!1):p!==!!s.multiple&&(s.defaultValue!=null?Hr(i,!!s.multiple,s.defaultValue,!0):Hr(i,!!s.multiple,s.multiple?[]:"",!1))}i[ws]=s}catch(v){ae(t,t.return,v)}}break;case 6:if(Tt(e,t),Lt(t),r&4){if(t.stateNode===null)throw Error(T(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){ae(t,t.return,v)}}break;case 3:if(Tt(e,t),Lt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ps(e.containerInfo)}catch(v){ae(t,t.return,v)}break;case 4:Tt(e,t),Lt(t);break;case 13:Tt(e,t),Lt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(ud=ce())),r&4&&Ep(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(be=(u=be)||c,Tt(e,t),be=u):Tt(e,t),Lt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(P=t,c=t.child;c!==null;){for(h=P=c;P!==null;){switch(p=P,g=p.child,p.tag){case 0:case 11:case 14:case 15:Yi(4,p,p.return);break;case 1:Vr(p,p.return);var y=p.stateNode;if(typeof y.componentWillUnmount=="function"){r=p,n=p.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(v){ae(r,n,v)}}break;case 5:Vr(p,p.return);break;case 22:if(p.memoizedState!==null){Sp(h);continue}}g!==null?(g.return=p,P=g):Sp(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=fg("display",o))}catch(v){ae(t,t.return,v)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){ae(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Tt(e,t),Lt(t),r&4&&Ep(t);break;case 21:break;default:Tt(e,t),Lt(t)}}function Lt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Vy(n)){var r=n;break e}n=n.return}throw Error(T(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(cs(i,""),r.flags&=-33);var s=wp(t);Bc(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=wp(t);Vc(t,a,o);break;default:throw Error(T(161))}}catch(l){ae(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function l_(t,e,n){P=t,zy(t)}function zy(t,e,n){for(var r=(t.mode&1)!==0;P!==null;){var i=P,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Uo;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||be;a=Uo;var u=be;if(Uo=o,(be=l)&&!u)for(P=i;P!==null;)o=P,l=o.child,o.tag===22&&o.memoizedState!==null?Tp(i):l!==null?(l.return=o,P=l):Tp(i);for(;s!==null;)P=s,zy(s),s=s.sibling;P=i,Uo=a,be=u}_p(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,P=s):_p(t)}}function _p(t){for(;P!==null;){var e=P;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:be||El(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!be)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:It(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ip(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ip(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&ps(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}be||e.flags&512&&bc(e)}catch(p){ae(e,e.return,p)}}if(e===t){P=null;break}if(n=e.sibling,n!==null){n.return=e.return,P=n;break}P=e.return}}function Sp(t){for(;P!==null;){var e=P;if(e===t){P=null;break}var n=e.sibling;if(n!==null){n.return=e.return,P=n;break}P=e.return}}function Tp(t){for(;P!==null;){var e=P;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{El(4,e)}catch(l){ae(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){ae(e,i,l)}}var s=e.return;try{bc(e)}catch(l){ae(e,s,l)}break;case 5:var o=e.return;try{bc(e)}catch(l){ae(e,o,l)}}}catch(l){ae(e,e.return,l)}if(e===t){P=null;break}var a=e.sibling;if(a!==null){a.return=e.return,P=a;break}P=e.return}}var u_=Math.ceil,La=ln.ReactCurrentDispatcher,ad=ln.ReactCurrentOwner,wt=ln.ReactCurrentBatchConfig,K=0,Te=null,fe=null,De=0,lt=0,Br=zn(0),ge=0,ks=null,pr=0,_l=0,ld=0,Ji=null,et=null,ud=0,oi=1/0,Ht=null,Ma=!1,jc=null,An=null,Fo=!1,_n=null,$a=0,Zi=0,zc=null,sa=-1,oa=0;function qe(){return K&6?ce():sa!==-1?sa:sa=ce()}function Pn(t){return t.mode&1?K&2&&De!==0?De&-De:KE.transition!==null?(oa===0&&(oa=Cg()),oa):(t=q,t!==0||(t=window.event,t=t===void 0?16:xg(t.type)),t):1}function Dt(t,e,n,r){if(50<Zi)throw Zi=0,zc=null,Error(T(185));Hs(t,n,r),(!(K&2)||t!==Te)&&(t===Te&&(!(K&2)&&(_l|=n),ge===4&&mn(t,De)),st(t,r),n===1&&K===0&&!(e.mode&1)&&(oi=ce()+500,yl&&Hn()))}function st(t,e){var n=t.callbackNode;Kw(t,e);var r=wa(t,t===Te?De:0);if(r===0)n!==null&&Of(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Of(n),e===1)t.tag===0?WE(Ip.bind(null,t)):Jg(Ip.bind(null,t)),BE(function(){!(K&6)&&Hn()}),n=null;else{switch(Ng(r)){case 1:n=Mh;break;case 4:n=Ig;break;case 16:n=va;break;case 536870912:n=kg;break;default:n=va}n=Yy(n,Hy.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Hy(t,e){if(sa=-1,oa=0,K&6)throw Error(T(327));var n=t.callbackNode;if(Qr()&&t.callbackNode!==n)return null;var r=wa(t,t===Te?De:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Ua(t,r);else{e=r;var i=K;K|=2;var s=Ky();(Te!==t||De!==e)&&(Ht=null,oi=ce()+500,or(t,e));do try{d_();break}catch(a){Wy(t,a)}while(1);qh(),La.current=s,K=i,fe!==null?e=0:(Te=null,De=0,e=ge)}if(e!==0){if(e===2&&(i=gc(t),i!==0&&(r=i,e=Hc(t,i))),e===1)throw n=ks,or(t,0),mn(t,r),st(t,ce()),n;if(e===6)mn(t,r);else{if(i=t.current.alternate,!(r&30)&&!c_(i)&&(e=Ua(t,r),e===2&&(s=gc(t),s!==0&&(r=s,e=Hc(t,s))),e===1))throw n=ks,or(t,0),mn(t,r),st(t,ce()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(T(345));case 2:Xn(t,et,Ht);break;case 3:if(mn(t,r),(r&130023424)===r&&(e=ud+500-ce(),10<e)){if(wa(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){qe(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Ic(Xn.bind(null,t,et,Ht),e);break}Xn(t,et,Ht);break;case 4:if(mn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Pt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*u_(r/1960))-r,10<r){t.timeoutHandle=Ic(Xn.bind(null,t,et,Ht),r);break}Xn(t,et,Ht);break;case 5:Xn(t,et,Ht);break;default:throw Error(T(329))}}}return st(t,ce()),t.callbackNode===n?Hy.bind(null,t):null}function Hc(t,e){var n=Ji;return t.current.memoizedState.isDehydrated&&(or(t,e).flags|=256),t=Ua(t,e),t!==2&&(e=et,et=n,e!==null&&Wc(e)),t}function Wc(t){et===null?et=t:et.push.apply(et,t)}function c_(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Ot(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function mn(t,e){for(e&=~ld,e&=~_l,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Pt(e),r=1<<n;t[n]=-1,e&=~r}}function Ip(t){if(K&6)throw Error(T(327));Qr();var e=wa(t,0);if(!(e&1))return st(t,ce()),null;var n=Ua(t,e);if(t.tag!==0&&n===2){var r=gc(t);r!==0&&(e=r,n=Hc(t,r))}if(n===1)throw n=ks,or(t,0),mn(t,e),st(t,ce()),n;if(n===6)throw Error(T(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Xn(t,et,Ht),st(t,ce()),null}function cd(t,e){var n=K;K|=1;try{return t(e)}finally{K=n,K===0&&(oi=ce()+500,yl&&Hn())}}function mr(t){_n!==null&&_n.tag===0&&!(K&6)&&Qr();var e=K;K|=1;var n=wt.transition,r=q;try{if(wt.transition=null,q=1,t)return t()}finally{q=r,wt.transition=n,K=e,!(K&6)&&Hn()}}function hd(){lt=Br.current,Z(Br)}function or(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,VE(n)),fe!==null)for(n=fe.return;n!==null;){var r=n;switch(Wh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ia();break;case 3:ii(),Z(rt),Z(He),ed();break;case 5:Zh(r);break;case 4:ii();break;case 13:Z(ie);break;case 19:Z(ie);break;case 10:Qh(r.type._context);break;case 22:case 23:hd()}n=n.return}if(Te=t,fe=t=Dn(t.current,null),De=lt=e,ge=0,ks=null,ld=_l=pr=0,et=Ji=null,tr!==null){for(e=0;e<tr.length;e++)if(n=tr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}tr=null}return t}function Wy(t,e){do{var n=fe;try{if(qh(),na.current=xa,Oa){for(var r=se.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Oa=!1}if(fr=0,_e=me=se=null,Xi=!1,Ss=0,ad.current=null,n===null||n.return===null){ge=1,ks=e,fe=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=De,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var p=c.alternate;p?(c.updateQueue=p.updateQueue,c.memoizedState=p.memoizedState,c.lanes=p.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=hp(o);if(g!==null){g.flags&=-257,dp(g,o,a,s,e),g.mode&1&&cp(s,u,e),e=g,l=u;var y=e.updateQueue;if(y===null){var v=new Set;v.add(l),e.updateQueue=v}else y.add(l);break e}else{if(!(e&1)){cp(s,u,e),dd();break e}l=Error(T(426))}}else if(te&&a.mode&1){var E=hp(o);if(E!==null){!(E.flags&65536)&&(E.flags|=256),dp(E,o,a,s,e),Kh(si(l,a));break e}}s=l=si(l,a),ge!==4&&(ge=2),Ji===null?Ji=[s]:Ji.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=Ry(s,l,e);rp(s,f);break e;case 1:a=l;var d=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(An===null||!An.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=Ay(s,a,e);rp(s,w);break e}}s=s.return}while(s!==null)}qy(n)}catch(_){e=_,fe===n&&n!==null&&(fe=n=n.return);continue}break}while(1)}function Ky(){var t=La.current;return La.current=xa,t===null?xa:t}function dd(){(ge===0||ge===3||ge===2)&&(ge=4),Te===null||!(pr&268435455)&&!(_l&268435455)||mn(Te,De)}function Ua(t,e){var n=K;K|=2;var r=Ky();(Te!==t||De!==e)&&(Ht=null,or(t,e));do try{h_();break}catch(i){Wy(t,i)}while(1);if(qh(),K=n,La.current=r,fe!==null)throw Error(T(261));return Te=null,De=0,ge}function h_(){for(;fe!==null;)Gy(fe)}function d_(){for(;fe!==null&&!Uw();)Gy(fe)}function Gy(t){var e=Xy(t.alternate,t,lt);t.memoizedProps=t.pendingProps,e===null?qy(t):fe=e,ad.current=null}function qy(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=s_(n,e),n!==null){n.flags&=32767,fe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ge=6,fe=null;return}}else if(n=i_(n,e,lt),n!==null){fe=n;return}if(e=e.sibling,e!==null){fe=e;return}fe=e=t}while(e!==null);ge===0&&(ge=5)}function Xn(t,e,n){var r=q,i=wt.transition;try{wt.transition=null,q=1,f_(t,e,n,r)}finally{wt.transition=i,q=r}return null}function f_(t,e,n,r){do Qr();while(_n!==null);if(K&6)throw Error(T(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(T(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Gw(t,s),t===Te&&(fe=Te=null,De=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Fo||(Fo=!0,Yy(va,function(){return Qr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=wt.transition,wt.transition=null;var o=q;q=1;var a=K;K|=4,ad.current=null,a_(t,n),jy(n,t),xE(Sc),Ea=!!_c,Sc=_c=null,t.current=n,l_(n),Fw(),K=a,q=o,wt.transition=s}else t.current=n;if(Fo&&(Fo=!1,_n=t,$a=i),s=t.pendingLanes,s===0&&(An=null),Bw(n.stateNode),st(t,ce()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ma)throw Ma=!1,t=jc,jc=null,t;return $a&1&&t.tag!==0&&Qr(),s=t.pendingLanes,s&1?t===zc?Zi++:(Zi=0,zc=t):Zi=0,Hn(),null}function Qr(){if(_n!==null){var t=Ng($a),e=wt.transition,n=q;try{if(wt.transition=null,q=16>t?16:t,_n===null)var r=!1;else{if(t=_n,_n=null,$a=0,K&6)throw Error(T(331));var i=K;for(K|=4,P=t.current;P!==null;){var s=P,o=s.child;if(P.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(P=u;P!==null;){var c=P;switch(c.tag){case 0:case 11:case 15:Yi(8,c,s)}var h=c.child;if(h!==null)h.return=c,P=h;else for(;P!==null;){c=P;var p=c.sibling,g=c.return;if(by(c),c===u){P=null;break}if(p!==null){p.return=g,P=p;break}P=g}}}var y=s.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var E=v.sibling;v.sibling=null,v=E}while(v!==null)}}P=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,P=o;else e:for(;P!==null;){if(s=P,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Yi(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,P=f;break e}P=s.return}}var d=t.current;for(P=d;P!==null;){o=P;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,P=m;else e:for(o=d;P!==null;){if(a=P,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:El(9,a)}}catch(_){ae(a,a.return,_)}if(a===o){P=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,P=w;break e}P=a.return}}if(K=i,Hn(),Ft&&typeof Ft.onPostCommitFiberRoot=="function")try{Ft.onPostCommitFiberRoot(dl,t)}catch{}r=!0}return r}finally{q=n,wt.transition=e}}return!1}function kp(t,e,n){e=si(n,e),e=Ry(t,e,1),t=Rn(t,e,1),e=qe(),t!==null&&(Hs(t,1,e),st(t,e))}function ae(t,e,n){if(t.tag===3)kp(t,t,n);else for(;e!==null;){if(e.tag===3){kp(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(An===null||!An.has(r))){t=si(n,t),t=Ay(e,t,1),e=Rn(e,t,1),t=qe(),e!==null&&(Hs(e,1,t),st(e,t));break}}e=e.return}}function p_(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=qe(),t.pingedLanes|=t.suspendedLanes&n,Te===t&&(De&n)===n&&(ge===4||ge===3&&(De&130023424)===De&&500>ce()-ud?or(t,0):ld|=n),st(t,e)}function Qy(t,e){e===0&&(t.mode&1?(e=Ro,Ro<<=1,!(Ro&130023424)&&(Ro=4194304)):e=1);var n=qe();t=nn(t,e),t!==null&&(Hs(t,e,n),st(t,n))}function m_(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Qy(t,n)}function g_(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(T(314))}r!==null&&r.delete(e),Qy(t,n)}var Xy;Xy=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||rt.current)tt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return tt=!1,r_(t,e,n);tt=!!(t.flags&131072)}else tt=!1,te&&e.flags&1048576&&Zg(e,Na,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ia(t,e),t=e.pendingProps;var i=ti(e,He.current);qr(e,n),i=nd(null,e,r,t,i,n);var s=rd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,it(r)?(s=!0,ka(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Yh(e),i.updater=vl,e.stateNode=i,i._reactInternals=e,Dc(e,r,t,n),e=Lc(null,e,r,!0,s,n)):(e.tag=0,te&&s&&Hh(e),Ke(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ia(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=v_(r),t=It(r,t),i){case 0:e=xc(null,e,r,t,n);break e;case 1:e=mp(null,e,r,t,n);break e;case 11:e=fp(null,e,r,t,n);break e;case 14:e=pp(null,e,r,It(r.type,t),n);break e}throw Error(T(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:It(r,i),xc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:It(r,i),mp(t,e,r,i,n);case 3:e:{if(xy(e),t===null)throw Error(T(387));r=e.pendingProps,s=e.memoizedState,i=s.element,ry(t,e),Pa(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=si(Error(T(423)),e),e=gp(t,e,r,n,i);break e}else if(r!==i){i=si(Error(T(424)),e),e=gp(t,e,r,n,i);break e}else for(ut=Nn(e.stateNode.containerInfo.firstChild),ct=e,te=!0,Ct=null,n=ay(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ni(),r===i){e=rn(t,e,n);break e}Ke(t,e,r,n)}e=e.child}return e;case 5:return ly(e),t===null&&Rc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Tc(r,i)?o=null:s!==null&&Tc(r,s)&&(e.flags|=32),Oy(t,e),Ke(t,e,o,n),e.child;case 6:return t===null&&Rc(e),null;case 13:return Ly(t,e,n);case 4:return Jh(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ri(e,null,r,n):Ke(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:It(r,i),fp(t,e,r,i,n);case 7:return Ke(t,e,e.pendingProps,n),e.child;case 8:return Ke(t,e,e.pendingProps.children,n),e.child;case 12:return Ke(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,X(Ra,r._currentValue),r._currentValue=o,s!==null)if(Ot(s.value,o)){if(s.children===i.children&&!rt.current){e=rn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Yt(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ac(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(T(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ac(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ke(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,qr(e,n),i=Et(i),r=r(i),e.flags|=1,Ke(t,e,r,n),e.child;case 14:return r=e.type,i=It(r,e.pendingProps),i=It(r.type,i),pp(t,e,r,i,n);case 15:return Py(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:It(r,i),ia(t,e),e.tag=1,it(r)?(t=!0,ka(e)):t=!1,qr(e,n),sy(e,r,i),Dc(e,r,i,n),Lc(null,e,r,!0,t,n);case 19:return My(t,e,n);case 22:return Dy(t,e,n)}throw Error(T(156,e.tag))};function Yy(t,e){return Tg(t,e)}function y_(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vt(t,e,n,r){return new y_(t,e,n,r)}function fd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function v_(t){if(typeof t=="function")return fd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Oh)return 11;if(t===xh)return 14}return 2}function Dn(t,e){var n=t.alternate;return n===null?(n=vt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function aa(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")fd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Dr:return ar(n.children,i,s,e);case Dh:o=8,i|=8;break;case tc:return t=vt(12,n,e,i|2),t.elementType=tc,t.lanes=s,t;case nc:return t=vt(13,n,e,i),t.elementType=nc,t.lanes=s,t;case rc:return t=vt(19,n,e,i),t.elementType=rc,t.lanes=s,t;case og:return Sl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ig:o=10;break e;case sg:o=9;break e;case Oh:o=11;break e;case xh:o=14;break e;case dn:o=16,r=null;break e}throw Error(T(130,t==null?t:typeof t,""))}return e=vt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ar(t,e,n,r){return t=vt(7,t,r,e),t.lanes=n,t}function Sl(t,e,n,r){return t=vt(22,t,r,e),t.elementType=og,t.lanes=n,t.stateNode={isHidden:!1},t}function Nu(t,e,n){return t=vt(6,t,null,e),t.lanes=n,t}function Ru(t,e,n){return e=vt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function w_(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=lu(0),this.expirationTimes=lu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=lu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function pd(t,e,n,r,i,s,o,a,l){return t=new w_(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=vt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Yh(s),t}function E_(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Pr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Jy(t){if(!t)return Fn;t=t._reactInternals;e:{if(kr(t)!==t||t.tag!==1)throw Error(T(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(it(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(T(171))}if(t.tag===1){var n=t.type;if(it(n))return Yg(t,n,e)}return e}function Zy(t,e,n,r,i,s,o,a,l){return t=pd(n,r,!0,t,i,s,o,a,l),t.context=Jy(null),n=t.current,r=qe(),i=Pn(n),s=Yt(r,i),s.callback=e??null,Rn(n,s,i),t.current.lanes=i,Hs(t,i,r),st(t,r),t}function Tl(t,e,n,r){var i=e.current,s=qe(),o=Pn(i);return n=Jy(n),e.context===null?e.context=n:e.pendingContext=n,e=Yt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Rn(i,e,o),t!==null&&(Dt(t,i,o,s),ta(t,i,o)),o}function Fa(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Cp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function md(t,e){Cp(t,e),(t=t.alternate)&&Cp(t,e)}function __(){return null}var ev=typeof reportError=="function"?reportError:function(t){console.error(t)};function gd(t){this._internalRoot=t}Il.prototype.render=gd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(T(409));Tl(t,e,null,null)};Il.prototype.unmount=gd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;mr(function(){Tl(null,t,null,null)}),e[tn]=null}};function Il(t){this._internalRoot=t}Il.prototype.unstable_scheduleHydration=function(t){if(t){var e=Pg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<pn.length&&e!==0&&e<pn[n].priority;n++);pn.splice(n,0,t),n===0&&Og(t)}};function yd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function kl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Np(){}function S_(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Fa(o);s.call(u)}}var o=Zy(e,r,t,0,null,!1,!1,"",Np);return t._reactRootContainer=o,t[tn]=o.current,ys(t.nodeType===8?t.parentNode:t),mr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Fa(l);a.call(u)}}var l=pd(t,0,!1,null,null,!1,!1,"",Np);return t._reactRootContainer=l,t[tn]=l.current,ys(t.nodeType===8?t.parentNode:t),mr(function(){Tl(e,l,n,r)}),l}function Cl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Fa(o);a.call(l)}}Tl(e,o,t,i)}else o=S_(n,e,t,i,r);return Fa(o)}Rg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Fi(e.pendingLanes);n!==0&&($h(e,n|1),st(e,ce()),!(K&6)&&(oi=ce()+500,Hn()))}break;case 13:mr(function(){var r=nn(t,1);if(r!==null){var i=qe();Dt(r,t,1,i)}}),md(t,1)}};Uh=function(t){if(t.tag===13){var e=nn(t,134217728);if(e!==null){var n=qe();Dt(e,t,134217728,n)}md(t,134217728)}};Ag=function(t){if(t.tag===13){var e=Pn(t),n=nn(t,e);if(n!==null){var r=qe();Dt(n,t,e,r)}md(t,e)}};Pg=function(){return q};Dg=function(t,e){var n=q;try{return q=t,e()}finally{q=n}};fc=function(t,e,n){switch(e){case"input":if(oc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=gl(r);if(!i)throw Error(T(90));lg(r),oc(r,i)}}}break;case"textarea":cg(t,n);break;case"select":e=n.value,e!=null&&Hr(t,!!n.multiple,e,!1)}};yg=cd;vg=mr;var T_={usingClientEntryPoint:!1,Events:[Ks,Mr,gl,mg,gg,cd]},Li={findFiberByHostInstance:er,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},I_={bundleType:Li.bundleType,version:Li.version,rendererPackageName:Li.rendererPackageName,rendererConfig:Li.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ln.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=_g(t),t===null?null:t.stateNode},findFiberByHostInstance:Li.findFiberByHostInstance||__,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bo.isDisabled&&bo.supportsFiber)try{dl=bo.inject(I_),Ft=bo}catch{}}ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T_;ft.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!yd(e))throw Error(T(200));return E_(t,e,null,n)};ft.createRoot=function(t,e){if(!yd(t))throw Error(T(299));var n=!1,r="",i=ev;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=pd(t,1,!1,null,null,n,!1,r,i),t[tn]=e.current,ys(t.nodeType===8?t.parentNode:t),new gd(e)};ft.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(T(188)):(t=Object.keys(t).join(","),Error(T(268,t)));return t=_g(e),t=t===null?null:t.stateNode,t};ft.flushSync=function(t){return mr(t)};ft.hydrate=function(t,e,n){if(!kl(e))throw Error(T(200));return Cl(null,t,e,!0,n)};ft.hydrateRoot=function(t,e,n){if(!yd(t))throw Error(T(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=ev;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Zy(e,null,t,1,n??null,i,!1,s,o),t[tn]=e.current,ys(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Il(e)};ft.render=function(t,e,n){if(!kl(e))throw Error(T(200));return Cl(null,t,e,!1,n)};ft.unmountComponentAtNode=function(t){if(!kl(t))throw Error(T(40));return t._reactRootContainer?(mr(function(){Cl(null,null,t,!1,function(){t._reactRootContainer=null,t[tn]=null})}),!0):!1};ft.unstable_batchedUpdates=cd;ft.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!kl(n))throw Error(T(200));if(t==null||t._reactInternals===void 0)throw Error(T(38));return Cl(t,e,n,!1,r)};ft.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=ft})(_w);var Rp=Ju;Yu.createRoot=Rp.createRoot,Yu.hydrateRoot=Rp.hydrateRoot;/**
 * @remix-run/router v1.3.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Cs(){return Cs=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Cs.apply(this,arguments)}var Sn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Sn||(Sn={}));const Ap="popstate";function k_(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Kc("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:ba(i)}return N_(e,n,null,t)}function ye(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function C_(){return Math.random().toString(36).substr(2,8)}function Pp(t,e){return{usr:t.state,key:t.key,idx:e}}function Kc(t,e,n,r){return n===void 0&&(n=null),Cs({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?wi(e):e,{state:n,key:e&&e.key||r||C_()})}function ba(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function wi(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function N_(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Sn.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Cs({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=Sn.Pop;let E=c(),f=E==null?null:E-u;u=E,l&&l({action:a,location:v.location,delta:f})}function p(E,f){a=Sn.Push;let d=Kc(v.location,E,f);n&&n(d,E),u=c()+1;let m=Pp(d,u),w=v.createHref(d);try{o.pushState(m,"",w)}catch{i.location.assign(w)}s&&l&&l({action:a,location:v.location,delta:1})}function g(E,f){a=Sn.Replace;let d=Kc(v.location,E,f);n&&n(d,E),u=c();let m=Pp(d,u),w=v.createHref(d);o.replaceState(m,"",w),s&&l&&l({action:a,location:v.location,delta:0})}function y(E){let f=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof E=="string"?E:ba(E);return ye(f,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,f)}let v={get action(){return a},get location(){return t(i,o)},listen(E){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Ap,h),l=E,()=>{i.removeEventListener(Ap,h),l=null}},createHref(E){return e(i,E)},createURL:y,encodeLocation(E){let f=y(E);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:p,replace:g,go(E){return o.go(E)}};return v}var Dp;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Dp||(Dp={}));function R_(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?wi(e):e,i=vd(r.pathname||"/",n);if(i==null)return null;let s=tv(t);A_(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=F_(s[a],B_(i));return o}function tv(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(ye(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=On([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(ye(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),tv(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:$_(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of nv(s.path))i(s,o,l)}),e}function nv(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=nv(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function A_(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:U_(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const P_=/^:\w+$/,D_=3,O_=2,x_=1,L_=10,M_=-2,Op=t=>t==="*";function $_(t,e){let n=t.split("/"),r=n.length;return n.some(Op)&&(r+=M_),e&&(r+=O_),n.filter(i=>!Op(i)).reduce((i,s)=>i+(P_.test(s)?D_:s===""?x_:L_),r)}function U_(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function F_(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=b_({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:On([i,c.pathname]),pathnameBase:W_(On([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=On([i,c.pathnameBase]))}return s}function b_(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=V_(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let p=a[h]||"";o=s.slice(0,s.length-p.length).replace(/(.)\/+$/,"$1")}return u[c]=j_(a[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function V_(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),wd(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function B_(t){try{return decodeURI(t)}catch(e){return wd(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function j_(t,e){try{return decodeURIComponent(t)}catch(n){return wd(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function vd(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function wd(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function z_(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?wi(t):t;return{pathname:n?n.startsWith("/")?n:H_(n,e):e,search:K_(r),hash:G_(i)}}function H_(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Au(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function rv(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function iv(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=wi(t):(i=Cs({},t),ye(!i.pathname||!i.pathname.includes("?"),Au("?","pathname","search",i)),ye(!i.pathname||!i.pathname.includes("#"),Au("#","pathname","hash",i)),ye(!i.search||!i.search.includes("#"),Au("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),h-=1;i.pathname=p.join("/")}a=h>=0?e[h]:"/"}let l=z_(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const On=t=>t.join("/").replace(/\/\/+/g,"/"),W_=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),K_=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,G_=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function q_(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}/**
 * React Router v6.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Gc(){return Gc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Gc.apply(this,arguments)}function Q_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const X_=typeof Object.is=="function"?Object.is:Q_,{useState:Y_,useEffect:J_,useLayoutEffect:Z_,useDebugValue:eS}=Xu;function tS(t,e,n){const r=e(),[{inst:i},s]=Y_({inst:{value:r,getSnapshot:e}});return Z_(()=>{i.value=r,i.getSnapshot=e,Pu(i)&&s({inst:i})},[t,r,e]),J_(()=>(Pu(i)&&s({inst:i}),t(()=>{Pu(i)&&s({inst:i})})),[t]),eS(r),r}function Pu(t){const e=t.getSnapshot,n=t.value;try{const r=e();return!X_(n,r)}catch{return!0}}function nS(t,e,n){return e()}const rS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",iS=!rS,sS=iS?nS:tS;"useSyncExternalStore"in Xu&&(t=>t.useSyncExternalStore)(Xu);const sv=S.createContext(null),ov=S.createContext(null),qs=S.createContext(null),Nl=S.createContext(null),Ei=S.createContext({outlet:null,matches:[]}),av=S.createContext(null);function oS(t,e){let{relative:n}=e===void 0?{}:e;Qs()||ye(!1);let{basename:r,navigator:i}=S.useContext(qs),{hash:s,pathname:o,search:a}=lv(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:On([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Qs(){return S.useContext(Nl)!=null}function Xs(){return Qs()||ye(!1),S.useContext(Nl).location}function Ys(){Qs()||ye(!1);let{basename:t,navigator:e}=S.useContext(qs),{matches:n}=S.useContext(Ei),{pathname:r}=Xs(),i=JSON.stringify(rv(n).map(a=>a.pathnameBase)),s=S.useRef(!1);return S.useEffect(()=>{s.current=!0}),S.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let u=iv(a,JSON.parse(i),r,l.relative==="path");t!=="/"&&(u.pathname=u.pathname==="/"?t:On([t,u.pathname])),(l.replace?e.replace:e.push)(u,l.state,l)},[t,e,i,r])}function lv(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=S.useContext(Ei),{pathname:i}=Xs(),s=JSON.stringify(rv(r).map(o=>o.pathnameBase));return S.useMemo(()=>iv(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function aS(t,e){Qs()||ye(!1);let{navigator:n}=S.useContext(qs),r=S.useContext(ov),{matches:i}=S.useContext(Ei),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=Xs(),u;if(e){var c;let v=typeof e=="string"?wi(e):e;a==="/"||(c=v.pathname)!=null&&c.startsWith(a)||ye(!1),u=v}else u=l;let h=u.pathname||"/",p=a==="/"?h:h.slice(a.length)||"/",g=R_(t,{pathname:p}),y=hS(g&&g.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:On([a,n.encodeLocation?n.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?a:On([a,n.encodeLocation?n.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,r||void 0);return e&&y?S.createElement(Nl.Provider,{value:{location:Gc({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Sn.Pop}},y):y}function lS(){let t=mS(),e=q_(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},e),n?S.createElement("pre",{style:i},n):null,s)}class uS extends S.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location?{error:e.error,location:e.location}:{error:e.error||n.error,location:n.location}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?S.createElement(Ei.Provider,{value:this.props.routeContext},S.createElement(av.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function cS(t){let{routeContext:e,match:n,children:r}=t,i=S.useContext(sv);return i&&i.static&&i.staticContext&&n.route.errorElement&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(Ei.Provider,{value:e},r)}function hS(t,e,n){if(e===void 0&&(e=[]),t==null)if(n!=null&&n.errors)t=n.matches;else return null;let r=t,i=n==null?void 0:n.errors;if(i!=null){let s=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));s>=0||ye(!1),r=r.slice(0,Math.min(r.length,s+1))}return r.reduceRight((s,o,a)=>{let l=o.route.id?i==null?void 0:i[o.route.id]:null,u=n?o.route.errorElement||S.createElement(lS,null):null,c=e.concat(r.slice(0,a+1)),h=()=>S.createElement(cS,{match:o,routeContext:{outlet:s,matches:c}},l?u:o.route.element!==void 0?o.route.element:s);return n&&(o.route.errorElement||a===0)?S.createElement(uS,{location:n.location,component:u,error:l,children:h(),routeContext:{outlet:null,matches:c}}):h()},null)}var xp;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator"})(xp||(xp={}));var Va;(function(t){t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(Va||(Va={}));function dS(t){let e=S.useContext(ov);return e||ye(!1),e}function fS(t){let e=S.useContext(Ei);return e||ye(!1),e}function pS(t){let e=fS(),n=e.matches[e.matches.length-1];return n.route.id||ye(!1),n.route.id}function mS(){var t;let e=S.useContext(av),n=dS(Va.UseRouteError),r=pS(Va.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function Yn(t){ye(!1)}function gS(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Sn.Pop,navigator:s,static:o=!1}=t;Qs()&&ye(!1);let a=e.replace(/^\/*/,"/"),l=S.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=wi(r));let{pathname:u="/",search:c="",hash:h="",state:p=null,key:g="default"}=r,y=S.useMemo(()=>{let v=vd(u,a);return v==null?null:{pathname:v,search:c,hash:h,state:p,key:g}},[a,u,c,h,p,g]);return y==null?null:S.createElement(qs.Provider,{value:l},S.createElement(Nl.Provider,{children:n,value:{location:y,navigationType:i}}))}function yS(t){let{children:e,location:n}=t,r=S.useContext(sv),i=r&&!e?r.router.routes:qc(e);return aS(i,n)}var Lp;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(Lp||(Lp={}));new Promise(()=>{});function qc(t,e){e===void 0&&(e=[]);let n=[];return S.Children.forEach(t,(r,i)=>{if(!S.isValidElement(r))return;if(r.type===S.Fragment){n.push.apply(n,qc(r.props.children,e));return}r.type!==Yn&&ye(!1),!r.props.index||!r.props.children||ye(!1);let s=[...e,i],o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(o.children=qc(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qc(){return Qc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Qc.apply(this,arguments)}function vS(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function wS(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function ES(t,e){return t.button===0&&(!e||e==="_self")&&!wS(t)}const _S=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function SS(t){let{basename:e,children:n,window:r}=t,i=S.useRef();i.current==null&&(i.current=k_({window:r,v5Compat:!0}));let s=i.current,[o,a]=S.useState({action:s.action,location:s.location});return S.useLayoutEffect(()=>s.listen(a),[s]),S.createElement(gS,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}const TS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",IS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ba=S.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,h=vS(e,_S),{basename:p}=S.useContext(qs),g,y=!1;if(typeof u=="string"&&IS.test(u)&&(g=u,TS)){let d=new URL(window.location.href),m=u.startsWith("//")?new URL(d.protocol+u):new URL(u),w=vd(m.pathname,p);m.origin===d.origin&&w!=null?u=w+m.search+m.hash:y=!0}let v=oS(u,{relative:i}),E=kS(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function f(d){r&&r(d),d.defaultPrevented||E(d)}return S.createElement("a",Qc({},h,{href:g||v,onClick:y||s?r:f,ref:n,target:l}))});var Mp;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(Mp||(Mp={}));var $p;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})($p||($p={}));function kS(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=Ys(),l=Xs(),u=lv(t,{relative:o});return S.useCallback(c=>{if(ES(c,n)){c.preventDefault();let h=r!==void 0?r:ba(l)===ba(u);a(t,{replace:h,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}function uv(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=uv(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function Tn(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=uv(t))&&(r&&(r+=" "),r+=e);return r}const es=t=>typeof t=="number"&&!isNaN(t),gr=t=>typeof t=="string",nt=t=>typeof t=="function",la=t=>gr(t)||nt(t)?t:null,Du=t=>S.isValidElement(t)||gr(t)||nt(t)||es(t);function CS(t,e,n){n===void 0&&(n=300);const{scrollHeight:r,style:i}=t;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(e,n)})})}function Rl(t){let{enter:e,exit:n,appendPosition:r=!1,collapse:i=!0,collapseDuration:s=300}=t;return function(o){let{children:a,position:l,preventExitTransition:u,done:c,nodeRef:h,isIn:p}=o;const g=r?`${e}--${l}`:e,y=r?`${n}--${l}`:n,v=S.useRef(0);return S.useLayoutEffect(()=>{const E=h.current,f=g.split(" "),d=m=>{m.target===h.current&&(E.dispatchEvent(new Event("d")),E.removeEventListener("animationend",d),E.removeEventListener("animationcancel",d),v.current===0&&m.type!=="animationcancel"&&E.classList.remove(...f))};E.classList.add(...f),E.addEventListener("animationend",d),E.addEventListener("animationcancel",d)},[]),S.useEffect(()=>{const E=h.current,f=()=>{E.removeEventListener("animationend",f),i?CS(E,c,s):c()};p||(u?f():(v.current=1,E.className+=` ${y}`,E.addEventListener("animationend",f)))},[p]),H.createElement(H.Fragment,null,a)}}function Up(t,e){return{content:t.content,containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,status:e}}const mt={list:new Map,emitQueue:new Map,on(t,e){return this.list.has(t)||this.list.set(t,[]),this.list.get(t).push(e),this},off(t,e){if(e){const n=this.list.get(t).filter(r=>r!==e);return this.list.set(t,n),this}return this.list.delete(t),this},cancelEmit(t){const e=this.emitQueue.get(t);return e&&(e.forEach(clearTimeout),this.emitQueue.delete(t)),this},emit(t){this.list.has(t)&&this.list.get(t).forEach(e=>{const n=setTimeout(()=>{e(...[].slice.call(arguments,1))},0);this.emitQueue.has(t)||this.emitQueue.set(t,[]),this.emitQueue.get(t).push(n)})}},Vo=t=>{let{theme:e,type:n,...r}=t;return H.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...r})},Ou={info:function(t){return H.createElement(Vo,{...t},H.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return H.createElement(Vo,{...t},H.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return H.createElement(Vo,{...t},H.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return H.createElement(Vo,{...t},H.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return H.createElement("div",{className:"Toastify__spinner"})}};function NS(t){const[,e]=S.useReducer(g=>g+1,0),[n,r]=S.useState([]),i=S.useRef(null),s=S.useRef(new Map).current,o=g=>n.indexOf(g)!==-1,a=S.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:t,containerId:null,isToastActive:o,getToast:g=>s.get(g)}).current;function l(g){let{containerId:y}=g;const{limit:v}=a.props;!v||y&&a.containerId!==y||(a.count-=a.queue.length,a.queue=[])}function u(g){r(y=>g==null?[]:y.filter(v=>v!==g))}function c(){const{toastContent:g,toastProps:y,staleId:v}=a.queue.shift();p(g,y,v)}function h(g,y){let{delay:v,staleId:E,...f}=y;if(!Du(g)||function(Me){return!i.current||a.props.enableMultiContainer&&Me.containerId!==a.props.containerId||s.has(Me.toastId)&&Me.updateId==null}(f))return;const{toastId:d,updateId:m,data:w}=f,{props:_}=a,C=()=>u(d),N=m==null;N&&a.count++;const R={..._,style:_.toastStyle,key:a.toastKey++,...f,toastId:d,updateId:m,data:w,closeToast:C,isIn:!1,className:la(f.className||_.toastClassName),bodyClassName:la(f.bodyClassName||_.bodyClassName),progressClassName:la(f.progressClassName||_.progressClassName),autoClose:!f.isLoading&&(W=f.autoClose,U=_.autoClose,W===!1||es(W)&&W>0?W:U),deleteToast(){const Me=Up(s.get(d),"removed");s.delete(d),mt.emit(4,Me);const Je=a.queue.length;if(a.count=d==null?a.count-a.displayedToast:a.count-1,a.count<0&&(a.count=0),Je>0){const Ze=d==null?a.props.limit:1;if(Je===1||Ze===1)a.displayedToast++,c();else{const zt=Ze>Je?Je:Ze;a.displayedToast=zt;for(let Ce=0;Ce<zt;Ce++)c()}}else e()}};var W,U;R.iconOut=function(Me){let{theme:Je,type:Ze,isLoading:zt,icon:Ce}=Me,at=null;const A={theme:Je,type:Ze};return Ce===!1||(nt(Ce)?at=Ce(A):S.isValidElement(Ce)?at=S.cloneElement(Ce,A):gr(Ce)||es(Ce)?at=Ce:zt?at=Ou.spinner():(M=>M in Ou)(Ze)&&(at=Ou[Ze](A))),at}(R),nt(f.onOpen)&&(R.onOpen=f.onOpen),nt(f.onClose)&&(R.onClose=f.onClose),R.closeButton=_.closeButton,f.closeButton===!1||Du(f.closeButton)?R.closeButton=f.closeButton:f.closeButton===!0&&(R.closeButton=!Du(_.closeButton)||_.closeButton);let pe=g;S.isValidElement(g)&&!gr(g.type)?pe=S.cloneElement(g,{closeToast:C,toastProps:R,data:w}):nt(g)&&(pe=g({closeToast:C,toastProps:R,data:w})),_.limit&&_.limit>0&&a.count>_.limit&&N?a.queue.push({toastContent:pe,toastProps:R,staleId:E}):es(v)?setTimeout(()=>{p(pe,R,E)},v):p(pe,R,E)}function p(g,y,v){const{toastId:E}=y;v&&s.delete(v);const f={content:g,props:y};s.set(E,f),r(d=>[...d,E].filter(m=>m!==v)),mt.emit(4,Up(f,f.props.updateId==null?"added":"updated"))}return S.useEffect(()=>(a.containerId=t.containerId,mt.cancelEmit(3).on(0,h).on(1,g=>i.current&&u(g)).on(5,l).emit(2,a),()=>{s.clear(),mt.emit(3,a)}),[]),S.useEffect(()=>{a.props=t,a.isToastActive=o,a.displayedToast=n.length}),{getToastToRender:function(g){const y=new Map,v=Array.from(s.values());return t.newestOnTop&&v.reverse(),v.forEach(E=>{const{position:f}=E.props;y.has(f)||y.set(f,[]),y.get(f).push(E)}),Array.from(y,E=>g(E[0],E[1]))},containerRef:i,isToastActive:o}}function Fp(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}function bp(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientY:t.clientY}function RS(t){const[e,n]=S.useState(!1),[r,i]=S.useState(!1),s=S.useRef(null),o=S.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,a=S.useRef(t),{autoClose:l,pauseOnHover:u,closeToast:c,onClick:h,closeOnClick:p}=t;function g(w){if(t.draggable){w.nativeEvent.type==="touchstart"&&w.nativeEvent.preventDefault(),o.didMove=!1,document.addEventListener("mousemove",f),document.addEventListener("mouseup",d),document.addEventListener("touchmove",f),document.addEventListener("touchend",d);const _=s.current;o.canCloseOnClick=!0,o.canDrag=!0,o.boundingRect=_.getBoundingClientRect(),_.style.transition="",o.x=Fp(w.nativeEvent),o.y=bp(w.nativeEvent),t.draggableDirection==="x"?(o.start=o.x,o.removalDistance=_.offsetWidth*(t.draggablePercent/100)):(o.start=o.y,o.removalDistance=_.offsetHeight*(t.draggablePercent===80?1.5*t.draggablePercent:t.draggablePercent/100))}}function y(w){if(o.boundingRect){const{top:_,bottom:C,left:N,right:R}=o.boundingRect;w.nativeEvent.type!=="touchend"&&t.pauseOnHover&&o.x>=N&&o.x<=R&&o.y>=_&&o.y<=C?E():v()}}function v(){n(!0)}function E(){n(!1)}function f(w){const _=s.current;o.canDrag&&_&&(o.didMove=!0,e&&E(),o.x=Fp(w),o.y=bp(w),o.delta=t.draggableDirection==="x"?o.x-o.start:o.y-o.start,o.start!==o.x&&(o.canCloseOnClick=!1),_.style.transform=`translate${t.draggableDirection}(${o.delta}px)`,_.style.opacity=""+(1-Math.abs(o.delta/o.removalDistance)))}function d(){document.removeEventListener("mousemove",f),document.removeEventListener("mouseup",d),document.removeEventListener("touchmove",f),document.removeEventListener("touchend",d);const w=s.current;if(o.canDrag&&o.didMove&&w){if(o.canDrag=!1,Math.abs(o.delta)>o.removalDistance)return i(!0),void t.closeToast();w.style.transition="transform 0.2s, opacity 0.2s",w.style.transform=`translate${t.draggableDirection}(0)`,w.style.opacity="1"}}S.useEffect(()=>{a.current=t}),S.useEffect(()=>(s.current&&s.current.addEventListener("d",v,{once:!0}),nt(t.onOpen)&&t.onOpen(S.isValidElement(t.children)&&t.children.props),()=>{const w=a.current;nt(w.onClose)&&w.onClose(S.isValidElement(w.children)&&w.children.props)}),[]),S.useEffect(()=>(t.pauseOnFocusLoss&&(document.hasFocus()||E(),window.addEventListener("focus",v),window.addEventListener("blur",E)),()=>{t.pauseOnFocusLoss&&(window.removeEventListener("focus",v),window.removeEventListener("blur",E))}),[t.pauseOnFocusLoss]);const m={onMouseDown:g,onTouchStart:g,onMouseUp:y,onTouchEnd:y};return l&&u&&(m.onMouseEnter=E,m.onMouseLeave=v),p&&(m.onClick=w=>{h&&h(w),o.canCloseOnClick&&c()}),{playToast:v,pauseToast:E,isRunning:e,preventExitTransition:r,toastRef:s,eventHandlers:m}}function cv(t){let{closeToast:e,theme:n,ariaLabel:r="close"}=t;return H.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:i=>{i.stopPropagation(),e(i)},"aria-label":r},H.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},H.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function AS(t){let{delay:e,isRunning:n,closeToast:r,type:i="default",hide:s,className:o,style:a,controlledProgress:l,progress:u,rtl:c,isIn:h,theme:p}=t;const g=s||l&&u===0,y={...a,animationDuration:`${e}ms`,animationPlayState:n?"running":"paused",opacity:g?0:1};l&&(y.transform=`scaleX(${u})`);const v=Tn("Toastify__progress-bar",l?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${p}`,`Toastify__progress-bar--${i}`,{"Toastify__progress-bar--rtl":c}),E=nt(o)?o({rtl:c,type:i,defaultClassName:v}):Tn(v,o);return H.createElement("div",{role:"progressbar","aria-hidden":g?"true":"false","aria-label":"notification timer",className:E,style:y,[l&&u>=1?"onTransitionEnd":"onAnimationEnd"]:l&&u<1?null:()=>{h&&r()}})}const PS=t=>{const{isRunning:e,preventExitTransition:n,toastRef:r,eventHandlers:i}=RS(t),{closeButton:s,children:o,autoClose:a,onClick:l,type:u,hideProgressBar:c,closeToast:h,transition:p,position:g,className:y,style:v,bodyClassName:E,bodyStyle:f,progressClassName:d,progressStyle:m,updateId:w,role:_,progress:C,rtl:N,toastId:R,deleteToast:W,isIn:U,isLoading:pe,iconOut:Me,closeOnClick:Je,theme:Ze}=t,zt=Tn("Toastify__toast",`Toastify__toast-theme--${Ze}`,`Toastify__toast--${u}`,{"Toastify__toast--rtl":N},{"Toastify__toast--close-on-click":Je}),Ce=nt(y)?y({rtl:N,position:g,type:u,defaultClassName:zt}):Tn(zt,y),at=!!C||!a,A={closeToast:h,type:u,theme:Ze};let M=null;return s===!1||(M=nt(s)?s(A):S.isValidElement(s)?S.cloneElement(s,A):cv(A)),H.createElement(p,{isIn:U,done:W,position:g,preventExitTransition:n,nodeRef:r},H.createElement("div",{id:R,onClick:l,className:Ce,...i,style:v,ref:r},H.createElement("div",{...U&&{role:_},className:nt(E)?E({type:u}):Tn("Toastify__toast-body",E),style:f},Me!=null&&H.createElement("div",{className:Tn("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!pe})},Me),H.createElement("div",null,o)),M,H.createElement(AS,{...w&&!at?{key:`pb-${w}`}:{},rtl:N,theme:Ze,delay:a,isRunning:e,isIn:U,closeToast:h,hide:c,type:u,style:m,className:d,controlledProgress:at,progress:C||0})))},Al=function(t,e){return e===void 0&&(e=!1),{enter:`Toastify--animate Toastify__${t}-enter`,exit:`Toastify--animate Toastify__${t}-exit`,appendPosition:e}},DS=Rl(Al("bounce",!0));Rl(Al("slide",!0));Rl(Al("zoom"));Rl(Al("flip"));const Xc=S.forwardRef((t,e)=>{const{getToastToRender:n,containerRef:r,isToastActive:i}=NS(t),{className:s,style:o,rtl:a,containerId:l}=t;function u(c){const h=Tn("Toastify__toast-container",`Toastify__toast-container--${c}`,{"Toastify__toast-container--rtl":a});return nt(s)?s({position:c,rtl:a,defaultClassName:h}):Tn(h,la(s))}return S.useEffect(()=>{e&&(e.current=r.current)},[]),H.createElement("div",{ref:r,className:"Toastify",id:l},n((c,h)=>{const p=h.length?{...o}:{...o,pointerEvents:"none"};return H.createElement("div",{className:u(c),style:p,key:`container-${c}`},h.map((g,y)=>{let{content:v,props:E}=g;return H.createElement(PS,{...E,isIn:i(E.toastId),style:{...E.style,"--nth":y+1,"--len":h.length},key:`toast-${E.key}`},v)}))}))});Xc.displayName="ToastContainer",Xc.defaultProps={position:"top-right",transition:DS,autoClose:5e3,closeButton:cv,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let xu,Jn=new Map,Vi=[],OS=1;function hv(){return""+OS++}function xS(t){return t&&(gr(t.toastId)||es(t.toastId))?t.toastId:hv()}function ts(t,e){return Jn.size>0?mt.emit(0,t,e):Vi.push({content:t,options:e}),e.toastId}function ja(t,e){return{...e,type:e&&e.type||t,toastId:xS(e)}}function Bo(t){return(e,n)=>ts(e,ja(t,n))}function J(t,e){return ts(t,ja("default",e))}J.loading=(t,e)=>ts(t,ja("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e})),J.promise=function(t,e,n){let r,{pending:i,error:s,success:o}=e;i&&(r=gr(i)?J.loading(i,n):J.loading(i.render,{...n,...i}));const a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100},l=(c,h,p)=>{if(h==null)return void J.dismiss(r);const g={type:c,...a,...n,data:p},y=gr(h)?{render:h}:h;return r?J.update(r,{...g,...y}):J(y.render,{...g,...y}),p},u=nt(t)?t():t;return u.then(c=>l("success",o,c)).catch(c=>l("error",s,c)),u},J.success=Bo("success"),J.info=Bo("info"),J.error=Bo("error"),J.warning=Bo("warning"),J.warn=J.warning,J.dark=(t,e)=>ts(t,ja("default",{theme:"dark",...e})),J.dismiss=t=>{Jn.size>0?mt.emit(1,t):Vi=Vi.filter(e=>t!=null&&e.options.toastId!==t)},J.clearWaitingQueue=function(t){return t===void 0&&(t={}),mt.emit(5,t)},J.isActive=t=>{let e=!1;return Jn.forEach(n=>{n.isToastActive&&n.isToastActive(t)&&(e=!0)}),e},J.update=function(t,e){e===void 0&&(e={}),setTimeout(()=>{const n=function(r,i){let{containerId:s}=i;const o=Jn.get(s||xu);return o&&o.getToast(r)}(t,e);if(n){const{props:r,content:i}=n,s={...r,...e,toastId:e.toastId||t,updateId:hv()};s.toastId!==t&&(s.staleId=t);const o=s.render||i;delete s.render,ts(o,s)}},0)},J.done=t=>{J.update(t,{progress:1})},J.onChange=t=>(mt.on(4,t),()=>{mt.off(4,t)}),J.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},J.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},mt.on(2,t=>{xu=t.containerId||t,Jn.set(xu,t),Vi.forEach(e=>{mt.emit(0,e.content,e.options)}),Vi=[]}).on(3,t=>{Jn.delete(t.containerId||t),Jn.size===0&&mt.off(0).off(1).off(5)});function LS(){return O("div",{children:"Explore"})}function MS(){return O("div",{children:"Offer"})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},$S=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},fv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let p=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(p=64)),r.push(n[c],n[h],n[p],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(dv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):$S(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new US;const p=s<<2|a>>4;if(r.push(p),u!==64){const g=a<<4&240|u>>2;if(r.push(g),h!==64){const y=u<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class US extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const FS=function(t){const e=dv(t);return fv.encodeByteArray(e,!0)},za=function(t){return FS(t).replace(/\./g,"")},pv=function(t){try{return fv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VS=()=>bS().__FIREBASE_DEFAULTS__,BS=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},jS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&pv(t[1]);return e&&JSON.parse(e)},Ed=()=>{try{return VS()||BS()||jS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},mv=t=>{var e,n;return(n=(e=Ed())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},zS=t=>{const e=mv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},HS=()=>{var t;return(t=Ed())===null||t===void 0?void 0:t.config},gv=t=>{var e;return(e=Ed())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KS(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[za(JSON.stringify(n)),za(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function GS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(We())}function qS(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function QS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function XS(){const t=We();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function YS(){try{return typeof indexedDB=="object"}catch{return!1}}function JS(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZS="FirebaseError";class un extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ZS,Object.setPrototypeOf(this,un.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Js.prototype.create)}}class Js{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?eT(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new un(i,a,r)}}function eT(t,e){return t.replace(tT,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const tT=/\{\$([^}]+)}/g;function nT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ha(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Vp(s)&&Vp(o)){if(!Ha(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Vp(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zs(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Bi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ji(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function rT(t,e){const n=new iT(t,e);return n.subscribe.bind(n)}class iT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");sT(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Lu),i.error===void 0&&(i.error=Lu),i.complete===void 0&&(i.complete=Lu);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function sT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Lu(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(t){return t&&t._delegate?t._delegate:t}class yr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new WS;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(lT(e))try{this.getOrInitializeService({instanceIdentifier:Zn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Zn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Zn){return this.instances.has(e)}getOptions(e=Zn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:aT(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Zn){return this.component?this.component.multipleInstances?e:Zn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function aT(t){return t===Zn?void 0:t}function lT(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new oT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var G;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(G||(G={}));const cT={debug:G.DEBUG,verbose:G.VERBOSE,info:G.INFO,warn:G.WARN,error:G.ERROR,silent:G.SILENT},hT=G.INFO,dT={[G.DEBUG]:"log",[G.VERBOSE]:"log",[G.INFO]:"info",[G.WARN]:"warn",[G.ERROR]:"error"},fT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=dT[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class _d{constructor(e){this.name=e,this._logLevel=hT,this._logHandler=fT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in G))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?cT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,G.DEBUG,...e),this._logHandler(this,G.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,G.VERBOSE,...e),this._logHandler(this,G.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,G.INFO,...e),this._logHandler(this,G.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,G.WARN,...e),this._logHandler(this,G.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,G.ERROR,...e),this._logHandler(this,G.ERROR,...e)}}const pT=(t,e)=>e.some(n=>t instanceof n);let Bp,jp;function mT(){return Bp||(Bp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function gT(){return jp||(jp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const yv=new WeakMap,Yc=new WeakMap,vv=new WeakMap,Mu=new WeakMap,Sd=new WeakMap;function yT(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(xn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&yv.set(n,t)}).catch(()=>{}),Sd.set(e,t),e}function vT(t){if(Yc.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Yc.set(t,e)}let Jc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Yc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||vv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return xn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function wT(t){Jc=t(Jc)}function ET(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call($u(this),e,...n);return vv.set(r,e.sort?e.sort():[e]),xn(r)}:gT().includes(t)?function(...e){return t.apply($u(this),e),xn(yv.get(this))}:function(...e){return xn(t.apply($u(this),e))}}function _T(t){return typeof t=="function"?ET(t):(t instanceof IDBTransaction&&vT(t),pT(t,mT())?new Proxy(t,Jc):t)}function xn(t){if(t instanceof IDBRequest)return yT(t);if(Mu.has(t))return Mu.get(t);const e=_T(t);return e!==t&&(Mu.set(t,e),Sd.set(e,t)),e}const $u=t=>Sd.get(t);function ST(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=xn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(xn(o.result),l.oldVersion,l.newVersion,xn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const TT=["get","getKey","getAll","getAllKeys","count"],IT=["put","add","delete","clear"],Uu=new Map;function zp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Uu.get(e))return Uu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=IT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||TT.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Uu.set(e,s),s}wT(t=>({...t,get:(e,n,r)=>zp(e,n)||t.get(e,n,r),has:(e,n)=>!!zp(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(CT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function CT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Zc="@firebase/app",Hp="0.9.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr=new _d("@firebase/app"),NT="@firebase/app-compat",RT="@firebase/analytics-compat",AT="@firebase/analytics",PT="@firebase/app-check-compat",DT="@firebase/app-check",OT="@firebase/auth",xT="@firebase/auth-compat",LT="@firebase/database",MT="@firebase/database-compat",$T="@firebase/functions",UT="@firebase/functions-compat",FT="@firebase/installations",bT="@firebase/installations-compat",VT="@firebase/messaging",BT="@firebase/messaging-compat",jT="@firebase/performance",zT="@firebase/performance-compat",HT="@firebase/remote-config",WT="@firebase/remote-config-compat",KT="@firebase/storage",GT="@firebase/storage-compat",qT="@firebase/firestore",QT="@firebase/firestore-compat",XT="firebase",YT="9.17.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eh="[DEFAULT]",JT={[Zc]:"fire-core",[NT]:"fire-core-compat",[AT]:"fire-analytics",[RT]:"fire-analytics-compat",[DT]:"fire-app-check",[PT]:"fire-app-check-compat",[OT]:"fire-auth",[xT]:"fire-auth-compat",[LT]:"fire-rtdb",[MT]:"fire-rtdb-compat",[$T]:"fire-fn",[UT]:"fire-fn-compat",[FT]:"fire-iid",[bT]:"fire-iid-compat",[VT]:"fire-fcm",[BT]:"fire-fcm-compat",[jT]:"fire-perf",[zT]:"fire-perf-compat",[HT]:"fire-rc",[WT]:"fire-rc-compat",[KT]:"fire-gcs",[GT]:"fire-gcs-compat",[qT]:"fire-fst",[QT]:"fire-fst-compat","fire-js":"fire-js",[XT]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wa=new Map,th=new Map;function ZT(t,e){try{t.container.addComponent(e)}catch(n){vr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ai(t){const e=t.name;if(th.has(e))return vr.debug(`There were multiple attempts to register component ${e}.`),!1;th.set(e,t);for(const n of Wa.values())ZT(n,t);return!0}function Td(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eI={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ln=new Js("app","Firebase",eI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new yr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ln.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eo=YT;function wv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:eh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Ln.create("bad-app-name",{appName:String(i)});if(n||(n=HS()),!n)throw Ln.create("no-options");const s=Wa.get(i);if(s){if(Ha(n,s.options)&&Ha(r,s.config))return s;throw Ln.create("duplicate-app",{appName:i})}const o=new uT(i);for(const l of th.values())o.addComponent(l);const a=new tI(n,r,o);return Wa.set(i,a),a}function Ev(t=eh){const e=Wa.get(t);if(!e&&t===eh)return wv();if(!e)throw Ln.create("no-app",{appName:t});return e}function Mn(t,e,n){var r;let i=(r=JT[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),vr.warn(a.join(" "));return}ai(new yr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nI="firebase-heartbeat-database",rI=1,Ns="firebase-heartbeat-store";let Fu=null;function _v(){return Fu||(Fu=ST(nI,rI,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ns)}}}).catch(t=>{throw Ln.create("idb-open",{originalErrorMessage:t.message})})),Fu}async function iI(t){try{return(await _v()).transaction(Ns).objectStore(Ns).get(Sv(t))}catch(e){if(e instanceof un)vr.warn(e.message);else{const n=Ln.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});vr.warn(n.message)}}}async function Wp(t,e){try{const r=(await _v()).transaction(Ns,"readwrite");return await r.objectStore(Ns).put(e,Sv(t)),r.done}catch(n){if(n instanceof un)vr.warn(n.message);else{const r=Ln.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});vr.warn(r.message)}}}function Sv(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sI=1024,oI=30*24*60*60*1e3;class aI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new uI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Kp();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=oI}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Kp(),{heartbeatsToSend:n,unsentEntries:r}=lI(this._heartbeatsCache.heartbeats),i=za(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Kp(){return new Date().toISOString().substring(0,10)}function lI(t,e=sI){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Gp(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Gp(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class uI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return YS()?JS().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await iI(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Wp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Wp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Gp(t){return za(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cI(t){ai(new yr("platform-logger",e=>new kT(e),"PRIVATE")),ai(new yr("heartbeat",e=>new aI(e),"PRIVATE")),Mn(Zc,Hp,t),Mn(Zc,Hp,"esm2017"),Mn("fire-js","")}cI("");function Id(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Tv(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const hI=Tv,Iv=new Js("auth","Firebase",Tv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qp=new _d("@firebase/auth");function ua(t,...e){qp.logLevel<=G.ERROR&&qp.error(`Auth (${eo}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(t,...e){throw kd(t,...e)}function Vt(t,...e){return kd(t,...e)}function dI(t,e,n){const r=Object.assign(Object.assign({},hI()),{[e]:n});return new Js("auth","Firebase",r).create(e,{appName:t.name})}function kd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Iv.create(t,...e)}function L(t,e,...n){if(!t)throw kd(e,...n)}function qt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ua(e),new Error(e)}function sn(t,e){t||qt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qp=new Map;function Qt(t){sn(t instanceof Function,"Expected a class definition");let e=Qp.get(t);return e?(sn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Qp.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fI(t,e){const n=Td(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ha(s,e??{}))return i;xt(i,"already-initialized")}return n.initialize({options:e})}function pI(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Qt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function mI(){return Xp()==="http:"||Xp()==="https:"}function Xp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(mI()||qS()||"connection"in navigator)?navigator.onLine:!0}function yI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e,n){this.shortDelay=e,this.longDelay=n,sn(n>e,"Short delay should be less than long delay!"),this.isMobile=GS()||QS()}get(){return gI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cd(t,e){sn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kv{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;qt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;qt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;qt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wI=new to(3e4,6e4);function no(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function _i(t,e,n,r,i={}){return Cv(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Zs(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),kv.fetch()(Nv(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function Cv(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},vI),e);try{const i=new EI(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw jo(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw jo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw jo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw jo(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw dI(t,c,u);xt(t,c)}}catch(i){if(i instanceof un)throw i;xt(t,"internal-error",{message:String(i)})}}async function ro(t,e,n,r,i={}){const s=await _i(t,e,n,r,i);return"mfaPendingCredential"in s&&xt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Nv(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Cd(t.config,i):`${t.config.apiScheme}://${i}`}class EI{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Vt(this.auth,"network-request-failed")),wI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function jo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Vt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _I(t,e){return _i(t,"POST","/v1/accounts:delete",e)}async function SI(t,e){return _i(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ns(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function TI(t,e=!1){const n=St(t),r=await n.getIdToken(e),i=Nd(r);L(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ns(bu(i.auth_time)),issuedAtTime:ns(bu(i.iat)),expirationTime:ns(bu(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function bu(t){return Number(t)*1e3}function Nd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ua("JWT malformed, contained fewer than 3 sections"),null;try{const i=pv(n);return i?JSON.parse(i):(ua("Failed to decode base64 JWT payload"),null)}catch(i){return ua("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function II(t){const e=Nd(t);return L(e,"internal-error"),L(typeof e.exp<"u","internal-error"),L(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function li(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof un&&kI(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function kI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rv{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ns(this.lastLoginAt),this.creationTime=ns(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ka(t){var e;const n=t.auth,r=await t.getIdToken(),i=await li(t,SI(n,{idToken:r}));L(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?AI(s.providerUserInfo):[],a=RI(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Rv(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function NI(t){const e=St(t);await Ka(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function RI(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function AI(t){return t.map(e=>{var{providerId:n}=e,r=Id(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PI(t,e){const n=await Cv(t,{},async()=>{const r=Zs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Nv(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",kv.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){L(e.idToken,"internal-error"),L(typeof e.idToken<"u","internal-error"),L(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):II(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return L(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await PI(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Rs;return r&&(L(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(L(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(L(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Rs,this.toJSON())}_performRefresh(){return qt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hn(t,e){L(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class lr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Id(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new CI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Rv(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await li(this,this.stsTokenManager.getToken(this.auth,e));return L(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return TI(this,e)}reload(){return NI(this)}_assign(e){this!==e&&(L(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new lr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){L(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ka(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await li(this,_I(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,f=(u=n.createdAt)!==null&&u!==void 0?u:void 0,d=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:w,isAnonymous:_,providerData:C,stsTokenManager:N}=n;L(m&&N,e,"internal-error");const R=Rs.fromJSON(this.name,N);L(typeof m=="string",e,"internal-error"),hn(h,e.name),hn(p,e.name),L(typeof w=="boolean",e,"internal-error"),L(typeof _=="boolean",e,"internal-error"),hn(g,e.name),hn(y,e.name),hn(v,e.name),hn(E,e.name),hn(f,e.name),hn(d,e.name);const W=new lr({uid:m,auth:e,email:p,emailVerified:w,displayName:h,isAnonymous:_,photoURL:y,phoneNumber:g,tenantId:v,stsTokenManager:R,createdAt:f,lastLoginAt:d});return C&&Array.isArray(C)&&(W.providerData=C.map(U=>Object.assign({},U))),E&&(W._redirectEventId=E),W}static async _fromIdTokenResponse(e,n,r=!1){const i=new Rs;i.updateFromServerResponse(n);const s=new lr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ka(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Av{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Av.type="NONE";const Yp=Av;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ca(t,e,n){return`firebase:${t}:${e}:${n}`}class Xr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ca(this.userKey,i.apiKey,s),this.fullPersistenceKey=ca("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?lr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Xr(Qt(Yp),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Qt(Yp);const o=ca(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=lr._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Xr(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Xr(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ov(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Pv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Lv(e))return"Blackberry";if(Mv(e))return"Webos";if(Rd(e))return"Safari";if((e.includes("chrome/")||Dv(e))&&!e.includes("edge/"))return"Chrome";if(xv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Pv(t=We()){return/firefox\//i.test(t)}function Rd(t=We()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Dv(t=We()){return/crios\//i.test(t)}function Ov(t=We()){return/iemobile/i.test(t)}function xv(t=We()){return/android/i.test(t)}function Lv(t=We()){return/blackberry/i.test(t)}function Mv(t=We()){return/webos/i.test(t)}function Pl(t=We()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function DI(t=We()){var e;return Pl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function OI(){return XS()&&document.documentMode===10}function $v(t=We()){return Pl(t)||xv(t)||Mv(t)||Lv(t)||/windows phone/i.test(t)||Ov(t)}function xI(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uv(t,e=[]){let n;switch(t){case"Browser":n=Jp(We());break;case"Worker":n=`${Jp(We())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${eo}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MI{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Zp(this),this.idTokenSubscription=new Zp(this),this.beforeStateQueue=new LI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Iv,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Qt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Xr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return L(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ka(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=yI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?St(e):null;return n&&L(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&L(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Qt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Js("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Qt(e)||this._popupRedirectResolver;L(n,this,"argument-error"),this.redirectPersistenceManager=await Xr.create(this,[Qt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return L(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return L(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Uv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function io(t){return St(t)}class Zp{constructor(e){this.auth=e,this.observer=null,this.addObserver=rT(n=>this.observer=n)}get next(){return L(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function $I(t,e,n){const r=io(t);L(r._canInitEmulator,r,"emulator-config-failed"),L(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Fv(e),{host:o,port:a}=UI(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||FI()}function Fv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function UI(t){const e=Fv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:em(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:em(o)}}}function em(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function FI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return qt("not implemented")}_getIdTokenResponse(e){return qt("not implemented")}_linkToIdToken(e,n){return qt("not implemented")}_getReauthenticationResolver(e){return qt("not implemented")}}async function bI(t,e){return _i(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VI(t,e){return ro(t,"POST","/v1/accounts:signInWithPassword",no(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BI(t,e){return ro(t,"POST","/v1/accounts:signInWithEmailLink",no(t,e))}async function jI(t,e){return ro(t,"POST","/v1/accounts:signInWithEmailLink",no(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As extends Ad{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new As(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new As(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return VI(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return BI(e,{email:this._email,oobCode:this._password});default:xt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return bI(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return jI(e,{idToken:n,email:this._email,oobCode:this._password});default:xt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yr(t,e){return ro(t,"POST","/v1/accounts:signInWithIdp",no(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zI="http://localhost";class wr extends Ad{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new wr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):xt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Id(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new wr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Yr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Yr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Yr(e,n)}buildRequest(){const e={requestUri:zI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Zs(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HI(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function WI(t){const e=Bi(ji(t)).link,n=e?Bi(ji(e)).deep_link_id:null,r=Bi(ji(t)).deep_link_id;return(r?Bi(ji(r)).link:null)||r||n||e||t}class Pd{constructor(e){var n,r,i,s,o,a;const l=Bi(ji(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=HI((i=l.mode)!==null&&i!==void 0?i:null);L(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=WI(e);try{return new Pd(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(){this.providerId=Si.PROVIDER_ID}static credential(e,n){return As._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Pd.parseLink(n);return L(r,"argument-error"),As._fromEmailAndCode(e,r.code,r.tenantId)}}Si.PROVIDER_ID="password";Si.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Si.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so extends bv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn extends so{constructor(){super("facebook.com")}static credential(e){return wr._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gn.credential(e.oauthAccessToken)}catch{return null}}}gn.FACEBOOK_SIGN_IN_METHOD="facebook.com";gn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn extends so{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return wr._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return yn.credentialFromTaggedObject(e)}static credentialFromError(e){return yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return yn.credential(n,r)}catch{return null}}}yn.GOOGLE_SIGN_IN_METHOD="google.com";yn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn extends so{constructor(){super("github.com")}static credential(e){return wr._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vn.credentialFromTaggedObject(e)}static credentialFromError(e){return vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vn.credential(e.oauthAccessToken)}catch{return null}}}vn.GITHUB_SIGN_IN_METHOD="github.com";vn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn extends so{constructor(){super("twitter.com")}static credential(e,n){return wr._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return wn.credentialFromTaggedObject(e)}static credentialFromError(e){return wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return wn.credential(n,r)}catch{return null}}}wn.TWITTER_SIGN_IN_METHOD="twitter.com";wn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KI(t,e){return ro(t,"POST","/v1/accounts:signUp",no(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await lr._fromIdTokenResponse(e,r,i),o=tm(r);return new Er({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=tm(r);return new Er({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function tm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga extends un{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ga.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Ga(e,n,r,i)}}function Vv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ga._fromErrorAndOperation(t,s,e,r):s})}async function GI(t,e,n=!1){const r=await li(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Er._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qI(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await li(t,Vv(r,i,e,t),n);L(s.idToken,r,"internal-error");const o=Nd(s.idToken);L(o,r,"internal-error");const{sub:a}=o;return L(t.uid===a,r,"user-mismatch"),Er._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&xt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bv(t,e,n=!1){const r="signIn",i=await Vv(t,r,e),s=await Er._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function QI(t,e){return Bv(io(t),e)}async function XI(t,e,n){const r=io(t),i=await KI(r,{returnSecureToken:!0,email:e,password:n}),s=await Er._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function YI(t,e,n){return QI(St(t),Si.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JI(t,e){return _i(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZI(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=St(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await li(r,JI(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function ek(t,e,n,r){return St(t).onIdTokenChanged(e,n,r)}function tk(t,e,n){return St(t).beforeAuthStateChanged(e,n)}const qa="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(qa,"1"),this.storage.removeItem(qa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nk(){const t=We();return Rd(t)||Pl(t)}const rk=1e3,ik=10;class zv extends jv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=nk()&&xI(),this.fallbackToPolling=$v(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);OI()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,ik):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},rk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}zv.type="LOCAL";const sk=zv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hv extends jv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Hv.type="SESSION";const Wv=Hv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ok(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Dl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await ok(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Dl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ak{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Dd("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const p=h;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(p.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(){return window}function lk(t){Bt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kv(){return typeof Bt().WorkerGlobalScope<"u"&&typeof Bt().importScripts=="function"}async function uk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ck(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function hk(){return Kv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gv="firebaseLocalStorageDb",dk=1,Qa="firebaseLocalStorage",qv="fbase_key";class oo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ol(t,e){return t.transaction([Qa],e?"readwrite":"readonly").objectStore(Qa)}function fk(){const t=indexedDB.deleteDatabase(Gv);return new oo(t).toPromise()}function rh(){const t=indexedDB.open(Gv,dk);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Qa,{keyPath:qv})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Qa)?e(r):(r.close(),await fk(),e(await rh()))})})}async function nm(t,e,n){const r=Ol(t,!0).put({[qv]:e,value:n});return new oo(r).toPromise()}async function pk(t,e){const n=Ol(t,!1).get(e),r=await new oo(n).toPromise();return r===void 0?null:r.value}function rm(t,e){const n=Ol(t,!0).delete(e);return new oo(n).toPromise()}const mk=800,gk=3;class Qv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await rh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>gk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Kv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Dl._getInstance(hk()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await uk(),!this.activeServiceWorker)return;this.sender=new ak(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ck()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await rh();return await nm(e,qa,"1"),await rm(e,qa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>nm(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>pk(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>rm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ol(i,!1).getAll();return new oo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),mk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Qv.type="LOCAL";const yk=Qv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vk(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function wk(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Vt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",vk().appendChild(r)})}function Ek(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new to(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _k(t,e){return e?Qt(e):(L(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od extends Ad{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Yr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Yr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Yr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Sk(t){return Bv(t.auth,new Od(t),t.bypassAuthState)}function Tk(t){const{auth:e,user:n}=t;return L(n,e,"internal-error"),qI(n,new Od(t),t.bypassAuthState)}async function Ik(t){const{auth:e,user:n}=t;return L(n,e,"internal-error"),GI(n,new Od(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xv{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Sk;case"linkViaPopup":case"linkViaRedirect":return Ik;case"reauthViaPopup":case"reauthViaRedirect":return Tk;default:xt(this.auth,"internal-error")}}resolve(e){sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kk=new to(2e3,1e4);class jr extends Xv{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,jr.currentPopupAction&&jr.currentPopupAction.cancel(),jr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return L(e,this.auth,"internal-error"),e}async onExecution(){sn(this.filter.length===1,"Popup operations only handle one event");const e=Dd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Vt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Vt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,jr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Vt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,kk.get())};e()}}jr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ck="pendingRedirect",ha=new Map;class Nk extends Xv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ha.get(this.auth._key());if(!e){try{const r=await Rk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ha.set(this.auth._key(),e)}return this.bypassAuthState||ha.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Rk(t,e){const n=Dk(e),r=Pk(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Ak(t,e){ha.set(t._key(),e)}function Pk(t){return Qt(t._redirectPersistence)}function Dk(t){return ca(Ck,t.config.apiKey,t.name)}async function Ok(t,e,n=!1){const r=io(t),i=_k(r,e),o=await new Nk(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xk=10*60*1e3;class Lk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Mk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Yv(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Vt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=xk&&this.cachedEventUids.clear(),this.cachedEventUids.has(im(e))}saveEventToCache(e){this.cachedEventUids.add(im(e)),this.lastProcessedEventTime=Date.now()}}function im(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Yv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Mk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Yv(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $k(t,e={}){return _i(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Fk=/^https?/;async function bk(t){if(t.config.emulator)return;const{authorizedDomains:e}=await $k(t);for(const n of e)try{if(Vk(n))return}catch{}xt(t,"unauthorized-domain")}function Vk(t){const e=nh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Fk.test(n))return!1;if(Uk.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bk=new to(3e4,6e4);function sm(){const t=Bt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function jk(t){return new Promise((e,n)=>{var r,i,s;function o(){sm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{sm(),n(Vt(t,"network-request-failed"))},timeout:Bk.get()})}if(!((i=(r=Bt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Bt().gapi)===null||s===void 0)&&s.load)o();else{const a=Ek("iframefcb");return Bt()[a]=()=>{gapi.load?o():n(Vt(t,"network-request-failed"))},wk(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw da=null,e})}let da=null;function zk(t){return da=da||jk(t),da}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hk=new to(5e3,15e3),Wk="__/auth/iframe",Kk="emulator/auth/iframe",Gk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},qk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Qk(t){const e=t.config;L(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Cd(e,Kk):`https://${t.config.authDomain}/${Wk}`,r={apiKey:e.apiKey,appName:t.name,v:eo},i=qk.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Zs(r).slice(1)}`}async function Xk(t){const e=await zk(t),n=Bt().gapi;return L(n,t,"internal-error"),e.open({where:document.body,url:Qk(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Gk,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Vt(t,"network-request-failed"),a=Bt().setTimeout(()=>{s(o)},Hk.get());function l(){Bt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Jk=500,Zk=600,eC="_blank",tC="http://localhost";class om{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function nC(t,e,n,r=Jk,i=Zk){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Yk),{width:r.toString(),height:i.toString(),top:s,left:o}),u=We().toLowerCase();n&&(a=Dv(u)?eC:n),Pv(u)&&(e=e||tC,l.scrollbars="yes");const c=Object.entries(l).reduce((p,[g,y])=>`${p}${g}=${y},`,"");if(DI(u)&&a!=="_self")return rC(e||"",a),new om(null);const h=window.open(e||"",a,c);L(h,t,"popup-blocked");try{h.focus()}catch{}return new om(h)}function rC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iC="__/auth/handler",sC="emulator/auth/handler";function am(t,e,n,r,i,s){L(t.config.authDomain,t,"auth-domain-config-required"),L(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:eo,eventId:i};if(e instanceof bv){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",nT(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(s||{}))o[l]=u}if(e instanceof so){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${oC(t)}?${Zs(a).slice(1)}`}function oC({config:t}){return t.emulator?Cd(t,sC):`https://${t.authDomain}/${iC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vu="webStorageSupport";class aC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Wv,this._completeRedirectFn=Ok,this._overrideRedirectResult=Ak}async _openPopup(e,n,r,i){var s;sn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=am(e,n,r,nh(),i);return nC(e,o,Dd())}async _openRedirect(e,n,r,i){return await this._originValidation(e),lk(am(e,n,r,nh(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(sn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Xk(e),r=new Lk(e);return n.register("authEvent",i=>(L(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Vu,{type:Vu},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Vu];o!==void 0&&n(!!o),xt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=bk(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return $v()||Rd()||Pl()}}const lC=aC;var lm="@firebase/auth",um="0.21.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){L(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function hC(t){ai(new yr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{L(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),L(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Uv(t)},c=new MI(a,l,u);return pI(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ai(new yr("auth-internal",e=>{const n=io(e.getProvider("auth").getImmediate());return(r=>new uC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Mn(lm,um,cC(t)),Mn(lm,um,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dC=5*60,fC=gv("authIdTokenMaxAge")||dC;let cm=null;const pC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>fC)return;const i=n==null?void 0:n.token;cm!==i&&(cm=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function xd(t=Ev()){const e=Td(t,"auth");if(e.isInitialized())return e.getImmediate();const n=fI(t,{popupRedirectResolver:lC,persistence:[yk,sk,Wv]}),r=gv("authTokenSyncURL");if(r){const s=pC(r);tk(n,s,()=>s(n.currentUser)),ek(n,o=>s(o))}const i=mv("auth");return i&&$I(n,`http://${i}`),n}hC("Browser");function mC(){const t=xd(),[e,n]=S.useState({name:"",email:""});return S.useEffect(()=>{t.currentUser&&n({name:t.currentUser.displayName||"",email:t.currentUser.email||""})},[]),Ys(),O("div",{className:"profile",children:O("header",{className:"profileHeader",children:O("p",{className:"pageHeader",children:"My Profile"})})})}const Jv="/cyber-estate/assets/keyboardArrowRightIcon-186d23d5.svg",Zv="/cyber-estate/assets/visibilityIcon-95e415a2.svg";function gC(){const[t,e]=S.useState(!1),[n,r]=S.useState({email:"",password:""}),{email:i,password:s}=n,o=Ys(),a=u=>{r(c=>({...c,[u.target.id]:u.target.value}))};return O(Nh,{children:Pe("div",{className:"pageContainer",children:[O("header",{children:O("p",{className:"pageHeader",children:"Welcome Back!"})}),Pe("main",{children:[Pe("form",{onSubmit:async u=>{u.preventDefault();try{const c=xd();(await YI(c,i,s)).user&&o("/cyber-estate")}catch{J.error("Bad User Credentials")}},children:[O("input",{type:"email",placeholder:"Email",id:"email",value:i,onChange:a,className:"emailInput"}),Pe("div",{className:"passwordInputDiv",children:[O("input",{type:t?"text":"password",className:"passwordInput",placeholder:"Password",id:"password",value:s,onChange:a}),O("img",{src:Zv,alt:"show password",className:"showPassword",onClick:u=>e(!u)})]}),O(Ba,{to:"/forgot-password",className:"forgotPasswordLink",children:"Forgot Password"}),Pe("div",{className:"signInBar",children:[O("p",{className:"signInText",children:"Sign In"}),O("button",{className:"signInButton",children:O("img",{src:Jv,alt:"arrow",style:{fill:"white"}})})]})]}),O(Ba,{to:"/cyber-estate/sign-up",className:"registerLink",children:"Sign Up Instead"})]})]})})}var yC=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},D,Ld=Ld||{},$=yC||self;function Xa(){}function xl(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ao(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function vC(t){return Object.prototype.hasOwnProperty.call(t,Bu)&&t[Bu]||(t[Bu]=++wC)}var Bu="closure_uid_"+(1e9*Math.random()>>>0),wC=0;function EC(t,e,n){return t.call.apply(t.bind,arguments)}function _C(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function je(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?je=EC:je=_C,je.apply(null,arguments)}function zo(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Le(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Wn(){this.s=this.s,this.o=this.o}var SC=0;Wn.prototype.s=!1;Wn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),SC!=0)&&vC(this)};Wn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const e0=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Md(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function hm(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(xl(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function ze(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ze.prototype.h=function(){this.defaultPrevented=!0};var TC=function(){if(!$.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{$.addEventListener("test",Xa,e),$.removeEventListener("test",Xa,e)}catch{}return t}();function Ya(t){return/^[\s\xa0]*$/.test(t)}var dm=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function ju(t,e){return t<e?-1:t>e?1:0}function Ll(){var t=$.navigator;return t&&(t=t.userAgent)?t:""}function Ut(t){return Ll().indexOf(t)!=-1}function $d(t){return $d[" "](t),t}$d[" "]=Xa;function IC(t){var e=NC;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var kC=Ut("Opera"),ui=Ut("Trident")||Ut("MSIE"),t0=Ut("Edge"),ih=t0||ui,n0=Ut("Gecko")&&!(Ll().toLowerCase().indexOf("webkit")!=-1&&!Ut("Edge"))&&!(Ut("Trident")||Ut("MSIE"))&&!Ut("Edge"),CC=Ll().toLowerCase().indexOf("webkit")!=-1&&!Ut("Edge");function r0(){var t=$.document;return t?t.documentMode:void 0}var Ja;e:{var zu="",Hu=function(){var t=Ll();if(n0)return/rv:([^\);]+)(\)|;)/.exec(t);if(t0)return/Edge\/([\d\.]+)/.exec(t);if(ui)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(CC)return/WebKit\/(\S+)/.exec(t);if(kC)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Hu&&(zu=Hu?Hu[1]:""),ui){var Wu=r0();if(Wu!=null&&Wu>parseFloat(zu)){Ja=String(Wu);break e}}Ja=zu}var NC={};function RC(){return IC(function(){let t=0;const e=dm(String(Ja)).split("."),n=dm("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=ju(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||ju(i[2].length==0,s[2].length==0)||ju(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var sh;if($.document&&ui){var fm=r0();sh=fm||parseInt(Ja,10)||void 0}else sh=void 0;var AC=sh;function Ps(t,e){if(ze.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(n0){e:{try{$d(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:PC[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ps.X.h.call(this)}}Le(Ps,ze);var PC={2:"touch",3:"pen",4:"mouse"};Ps.prototype.h=function(){Ps.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var lo="closure_listenable_"+(1e6*Math.random()|0),DC=0;function OC(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++DC,this.ba=this.ea=!1}function Ml(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Ud(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function i0(t){const e={};for(const n in t)e[n]=t[n];return e}const pm="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function s0(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<pm.length;s++)n=pm[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function $l(t){this.src=t,this.g={},this.h=0}$l.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=ah(t,e,r,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new OC(e,this.src,s,!!r,i),e.ea=n,t.push(e)),e};function oh(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=e0(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Ml(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function ah(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}var Fd="closure_lm_"+(1e6*Math.random()|0),Ku={};function o0(t,e,n,r,i){if(r&&r.once)return l0(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)o0(t,e[s],n,r,i);return null}return n=Bd(n),t&&t[lo]?t.N(e,n,ao(r)?!!r.capture:!!r,i):a0(t,e,n,!1,r,i)}function a0(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=ao(i)?!!i.capture:!!i,a=Vd(t);if(a||(t[Fd]=a=new $l(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=xC(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)TC||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(c0(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function xC(){function t(n){return e.call(t.src,t.listener,n)}const e=LC;return t}function l0(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)l0(t,e[s],n,r,i);return null}return n=Bd(n),t&&t[lo]?t.O(e,n,ao(r)?!!r.capture:!!r,i):a0(t,e,n,!0,r,i)}function u0(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)u0(t,e[s],n,r,i);else r=ao(r)?!!r.capture:!!r,n=Bd(n),t&&t[lo]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=ah(s,n,r,i),-1<n&&(Ml(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Vd(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ah(e,n,r,i)),(n=-1<t?e[t]:null)&&bd(n))}function bd(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[lo])oh(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(c0(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Vd(e))?(oh(n,t),n.h==0&&(n.src=null,e[Fd]=null)):Ml(t)}}}function c0(t){return t in Ku?Ku[t]:Ku[t]="on"+t}function LC(t,e){if(t.ba)t=!0;else{e=new Ps(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&bd(t),t=n.call(r,e)}return t}function Vd(t){return t=t[Fd],t instanceof $l?t:null}var Gu="__closure_events_fn_"+(1e9*Math.random()>>>0);function Bd(t){return typeof t=="function"?t:(t[Gu]||(t[Gu]=function(e){return t.handleEvent(e)}),t[Gu])}function ke(){Wn.call(this),this.i=new $l(this),this.P=this,this.I=null}Le(ke,Wn);ke.prototype[lo]=!0;ke.prototype.removeEventListener=function(t,e,n,r){u0(this,t,e,n,r)};function Oe(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new ze(e,t);else if(e instanceof ze)e.target=e.target||t;else{var i=e;e=new ze(r,t),s0(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Ho(o,r,!0,e)&&i}if(o=e.g=t,i=Ho(o,r,!0,e)&&i,i=Ho(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Ho(o,r,!1,e)&&i}ke.prototype.M=function(){if(ke.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Ml(n[r]);delete t.g[e],t.h--}}this.I=null};ke.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};ke.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Ho(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&oh(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var jd=$.JSON.stringify;function MC(){var t=f0;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class $C{constructor(){this.h=this.g=null}add(e,n){const r=h0.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var h0=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new UC,t=>t.reset());class UC{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function FC(t){$.setTimeout(()=>{throw t},0)}function d0(t,e){lh||bC(),uh||(lh(),uh=!0),f0.add(t,e)}var lh;function bC(){var t=$.Promise.resolve(void 0);lh=function(){t.then(VC)}}var uh=!1,f0=new $C;function VC(){for(var t;t=MC();){try{t.h.call(t.g)}catch(n){FC(n)}var e=h0;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}uh=!1}function Ul(t,e){ke.call(this),this.h=t||1,this.g=e||$,this.j=je(this.lb,this),this.l=Date.now()}Le(Ul,ke);D=Ul.prototype;D.ca=!1;D.R=null;D.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Oe(this,"tick"),this.ca&&(zd(this),this.start()))}};D.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function zd(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}D.M=function(){Ul.X.M.call(this),zd(this),delete this.g};function Hd(t,e,n){if(typeof t=="function")n&&(t=je(t,n));else if(t&&typeof t.handleEvent=="function")t=je(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:$.setTimeout(t,e||0)}function p0(t){t.g=Hd(()=>{t.g=null,t.i&&(t.i=!1,p0(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class BC extends Wn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:p0(this)}M(){super.M(),this.g&&($.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ds(t){Wn.call(this),this.h=t,this.g={}}Le(Ds,Wn);var mm=[];function m0(t,e,n,r){Array.isArray(n)||(n&&(mm[0]=n.toString()),n=mm);for(var i=0;i<n.length;i++){var s=o0(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function g0(t){Ud(t.g,function(e,n){this.g.hasOwnProperty(n)&&bd(e)},t),t.g={}}Ds.prototype.M=function(){Ds.X.M.call(this),g0(this)};Ds.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Fl(){this.g=!0}Fl.prototype.Aa=function(){this.g=!1};function jC(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function zC(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function zr(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+WC(t,n)+(r?" "+r:"")})}function HC(t,e){t.info(function(){return"TIMEOUT: "+e})}Fl.prototype.info=function(){};function WC(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return jd(n)}catch{return e}}var Cr={},gm=null;function bl(){return gm=gm||new ke}Cr.Pa="serverreachability";function y0(t){ze.call(this,Cr.Pa,t)}Le(y0,ze);function Os(t){const e=bl();Oe(e,new y0(e))}Cr.STAT_EVENT="statevent";function v0(t,e){ze.call(this,Cr.STAT_EVENT,t),this.stat=e}Le(v0,ze);function Ge(t){const e=bl();Oe(e,new v0(e,t))}Cr.Qa="timingevent";function w0(t,e){ze.call(this,Cr.Qa,t),this.size=e}Le(w0,ze);function uo(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return $.setTimeout(function(){t()},e)}var Vl={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},E0={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Wd(){}Wd.prototype.h=null;function ym(t){return t.h||(t.h=t.i())}function _0(){}var co={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Kd(){ze.call(this,"d")}Le(Kd,ze);function Gd(){ze.call(this,"c")}Le(Gd,ze);var ch;function Bl(){}Le(Bl,Wd);Bl.prototype.g=function(){return new XMLHttpRequest};Bl.prototype.i=function(){return{}};ch=new Bl;function ho(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new Ds(this),this.O=KC,t=ih?125:void 0,this.T=new Ul(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new S0}function S0(){this.i=null,this.g="",this.h=!1}var KC=45e3,hh={},Za={};D=ho.prototype;D.setTimeout=function(t){this.O=t};function dh(t,e,n){t.K=1,t.v=zl(on(e)),t.s=n,t.P=!0,T0(t,null)}function T0(t,e){t.F=Date.now(),fo(t),t.A=on(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),D0(n.i,"t",r),t.C=0,n=t.l.H,t.h=new S0,t.g=J0(t.l,n?e:null,!t.s),0<t.N&&(t.L=new BC(je(t.La,t,t.g),t.N)),m0(t.S,t.g,"readystatechange",t.ib),e=t.H?i0(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Os(),jC(t.j,t.u,t.A,t.m,t.U,t.s)}D.ib=function(t){t=t.target;const e=this.L;e&&Xt(t)==3?e.l():this.La(t)};D.La=function(t){try{if(t==this.g)e:{const c=Xt(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>c)&&(c!=3||ih||this.g&&(this.h.h||this.g.fa()||_m(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?Os(3):Os(2)),jl(this);var n=this.g.aa();this.Y=n;t:if(I0(this)){var r=_m(this.g);t="";var i=r.length,s=Xt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){rr(this),rs(this);var o="";break t}this.h.i=new $.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,zC(this.j,this.u,this.A,this.m,this.U,c,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ya(a)){var u=a;break t}}u=null}if(n=u)zr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,fh(this,n);else{this.i=!1,this.o=3,Ge(12),rr(this),rs(this);break e}}this.P?(k0(this,c,o),ih&&this.i&&c==3&&(m0(this.S,this.T,"tick",this.hb),this.T.start())):(zr(this.j,this.m,o,null),fh(this,o)),c==4&&rr(this),this.i&&!this.I&&(c==4?q0(this.l,this):(this.i=!1,fo(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ge(12)):(this.o=0,Ge(13)),rr(this),rs(this)}}}catch{}finally{}};function I0(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function k0(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=GC(t,n),i==Za){e==4&&(t.o=4,Ge(14),r=!1),zr(t.j,t.m,null,"[Incomplete Response]");break}else if(i==hh){t.o=4,Ge(15),zr(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else zr(t.j,t.m,i,null),fh(t,i);I0(t)&&i!=Za&&i!=hh&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Ge(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),ef(e),e.K=!0,Ge(11))):(zr(t.j,t.m,n,"[Invalid Chunked Response]"),rr(t),rs(t))}D.hb=function(){if(this.g){var t=Xt(this.g),e=this.g.fa();this.C<e.length&&(jl(this),k0(this,t,e),this.i&&t!=4&&fo(this))}};function GC(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Za:(n=Number(e.substring(n,r)),isNaN(n)?hh:(r+=1,r+n>e.length?Za:(e=e.substr(r,n),t.C=r+n,e)))}D.cancel=function(){this.I=!0,rr(this)};function fo(t){t.V=Date.now()+t.O,C0(t,t.O)}function C0(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=uo(je(t.gb,t),e)}function jl(t){t.B&&($.clearTimeout(t.B),t.B=null)}D.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(HC(this.j,this.A),this.K!=2&&(Os(),Ge(17)),rr(this),this.o=2,rs(this)):C0(this,this.V-t)};function rs(t){t.l.G==0||t.I||q0(t.l,t)}function rr(t){jl(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,zd(t.T),g0(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function fh(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||ph(n.h,t))){if(!t.J&&ph(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)nl(n),Kl(n);else break e;Zd(n),Ge(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=uo(je(n.cb,n),6e3));if(1>=L0(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else ir(n,11)}else if((t.J||n.g==t)&&nl(n),!Ya(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const c=u[3];c!=null&&(n.ma=c,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const p=u[5];p!=null&&typeof p=="number"&&0<p&&(r=1.5*p,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const y=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.h;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(qd(s,s.h),s.h=null))}if(r.D){const v=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.za=v,ne(r.F,r.D,v))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=Y0(r,r.H?r.ka:null,r.V),o.J){M0(r.h,o);var a=o,l=r.J;l&&a.setTimeout(l),a.B&&(jl(a),fo(a)),r.g=o}else K0(r);0<n.i.length&&Gl(n)}else u[0]!="stop"&&u[0]!="close"||ir(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?ir(n,7):Jd(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}Os(4)}catch{}}function qC(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(xl(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function QC(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(xl(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function N0(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(xl(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=QC(t),r=qC(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var R0=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function XC(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ur(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ur){this.h=e!==void 0?e:t.h,el(this,t.j),this.s=t.s,this.g=t.g,tl(this,t.m),this.l=t.l,e=t.i;var n=new xs;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),vm(this,n),this.o=t.o}else t&&(n=String(t).match(R0))?(this.h=!!e,el(this,n[1]||"",!0),this.s=zi(n[2]||""),this.g=zi(n[3]||"",!0),tl(this,n[4]),this.l=zi(n[5]||"",!0),vm(this,n[6]||"",!0),this.o=zi(n[7]||"")):(this.h=!!e,this.i=new xs(null,this.h))}ur.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Hi(e,wm,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Hi(e,wm,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Hi(n,n.charAt(0)=="/"?ZC:JC,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Hi(n,tN)),t.join("")};function on(t){return new ur(t)}function el(t,e,n){t.j=n?zi(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function tl(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function vm(t,e,n){e instanceof xs?(t.i=e,nN(t.i,t.h)):(n||(e=Hi(e,eN)),t.i=new xs(e,t.h))}function ne(t,e,n){t.i.set(e,n)}function zl(t){return ne(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function zi(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Hi(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,YC),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function YC(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var wm=/[#\/\?@]/g,JC=/[#\?:]/g,ZC=/[#\?]/g,eN=/[#\?@]/g,tN=/#/g;function xs(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Kn(t){t.g||(t.g=new Map,t.h=0,t.i&&XC(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}D=xs.prototype;D.add=function(t,e){Kn(this),this.i=null,t=Ti(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function A0(t,e){Kn(t),e=Ti(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function P0(t,e){return Kn(t),e=Ti(t,e),t.g.has(e)}D.forEach=function(t,e){Kn(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};D.oa=function(){Kn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};D.W=function(t){Kn(this);let e=[];if(typeof t=="string")P0(this,t)&&(e=e.concat(this.g.get(Ti(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};D.set=function(t,e){return Kn(this),this.i=null,t=Ti(this,t),P0(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};D.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function D0(t,e,n){A0(t,e),0<n.length&&(t.i=null,t.g.set(Ti(t,e),Md(n)),t.h+=n.length)}D.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Ti(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function nN(t,e){e&&!t.j&&(Kn(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(A0(this,r),D0(this,i,n))},t)),t.j=e}var rN=class{constructor(e,n){this.h=e,this.g=n}};function O0(t){this.l=t||iN,$.PerformanceNavigationTiming?(t=$.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!($.g&&$.g.Ga&&$.g.Ga()&&$.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var iN=10;function x0(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function L0(t){return t.h?1:t.g?t.g.size:0}function ph(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function qd(t,e){t.g?t.g.add(e):t.h=e}function M0(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}O0.prototype.cancel=function(){if(this.i=$0(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function $0(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Md(t.i)}function Qd(){}Qd.prototype.stringify=function(t){return $.JSON.stringify(t,void 0)};Qd.prototype.parse=function(t){return $.JSON.parse(t,void 0)};function sN(){this.g=new Qd}function oN(t,e,n){const r=n||"";try{N0(t,function(i,s){let o=i;ao(i)&&(o=jd(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function aN(t,e){const n=new Fl;if($.Image){const r=new Image;r.onload=zo(Wo,n,r,"TestLoadImage: loaded",!0,e),r.onerror=zo(Wo,n,r,"TestLoadImage: error",!1,e),r.onabort=zo(Wo,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=zo(Wo,n,r,"TestLoadImage: timeout",!1,e),$.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Wo(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function po(t){this.l=t.ac||null,this.j=t.jb||!1}Le(po,Wd);po.prototype.g=function(){return new Hl(this.l,this.j)};po.prototype.i=function(t){return function(){return t}}({});function Hl(t,e){ke.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Xd,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Le(Hl,ke);var Xd=0;D=Hl.prototype;D.open=function(t,e){if(this.readyState!=Xd)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ls(this)};D.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||$).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};D.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,mo(this)),this.readyState=Xd};D.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ls(this)),this.g&&(this.readyState=3,Ls(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof $.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;U0(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function U0(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}D.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?mo(this):Ls(this),this.readyState==3&&U0(this)}};D.Va=function(t){this.g&&(this.response=this.responseText=t,mo(this))};D.Ua=function(t){this.g&&(this.response=t,mo(this))};D.ga=function(){this.g&&mo(this)};function mo(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ls(t)}D.setRequestHeader=function(t,e){this.v.append(t,e)};D.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};D.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ls(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Hl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var lN=$.JSON.parse;function le(t){ke.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=F0,this.K=this.L=!1}Le(le,ke);var F0="",uN=/^https?$/i,cN=["POST","PUT"];D=le.prototype;D.Ka=function(t){this.L=t};D.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ch.g(),this.C=this.u?ym(this.u):ym(ch),this.g.onreadystatechange=je(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){Em(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=$.FormData&&t instanceof $.FormData,!(0<=e0(cN,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{B0(this),0<this.B&&((this.K=hN(this.g))?(this.g.timeout=this.B,this.g.ontimeout=je(this.qa,this)):this.A=Hd(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Em(this,s)}};function hN(t){return ui&&RC()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}D.qa=function(){typeof Ld<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Oe(this,"timeout"),this.abort(8))};function Em(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,b0(t),Wl(t)}function b0(t){t.D||(t.D=!0,Oe(t,"complete"),Oe(t,"error"))}D.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Oe(this,"complete"),Oe(this,"abort"),Wl(this))};D.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Wl(this,!0)),le.X.M.call(this)};D.Ha=function(){this.s||(this.F||this.v||this.l?V0(this):this.fb())};D.fb=function(){V0(this)};function V0(t){if(t.h&&typeof Ld<"u"&&(!t.C[1]||Xt(t)!=4||t.aa()!=2)){if(t.v&&Xt(t)==4)Hd(t.Ha,0,t);else if(Oe(t,"readystatechange"),Xt(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(R0)[1]||null;if(!i&&$.self&&$.self.location){var s=$.self.location.protocol;i=s.substr(0,s.length-1)}r=!uN.test(i?i.toLowerCase():"")}n=r}if(n)Oe(t,"complete"),Oe(t,"success");else{t.m=6;try{var o=2<Xt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",b0(t)}}finally{Wl(t)}}}}function Wl(t,e){if(t.g){B0(t);const n=t.g,r=t.C[0]?Xa:null;t.g=null,t.C=null,e||Oe(t,"ready");try{n.onreadystatechange=r}catch{}}}function B0(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&($.clearTimeout(t.A),t.A=null)}function Xt(t){return t.g?t.g.readyState:0}D.aa=function(){try{return 2<Xt(this)?this.g.status:-1}catch{return-1}};D.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};D.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),lN(e)}};function _m(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case F0:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}D.Ea=function(){return this.m};D.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function j0(t){let e="";return Ud(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Yd(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=j0(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ne(t,e,n))}function Mi(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function z0(t){this.Ca=0,this.i=[],this.j=new Fl,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Mi("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Mi("baseRetryDelayMs",5e3,t),this.bb=Mi("retryDelaySeedMs",1e4,t),this.$a=Mi("forwardChannelMaxRetries",2,t),this.ta=Mi("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new O0(t&&t.concurrentRequestLimit),this.Fa=new sN,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}D=z0.prototype;D.ma=8;D.G=1;function Jd(t){if(H0(t),t.G==3){var e=t.U++,n=on(t.F);ne(n,"SID",t.I),ne(n,"RID",e),ne(n,"TYPE","terminate"),go(t,n),e=new ho(t,t.j,e,void 0),e.K=2,e.v=zl(on(n)),n=!1,$.navigator&&$.navigator.sendBeacon&&(n=$.navigator.sendBeacon(e.v.toString(),"")),!n&&$.Image&&(new Image().src=e.v,n=!0),n||(e.g=J0(e.l,null),e.g.da(e.v)),e.F=Date.now(),fo(e)}X0(t)}function Kl(t){t.g&&(ef(t),t.g.cancel(),t.g=null)}function H0(t){Kl(t),t.u&&($.clearTimeout(t.u),t.u=null),nl(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&$.clearTimeout(t.m),t.m=null)}function Gl(t){x0(t.h)||t.m||(t.m=!0,d0(t.Ja,t),t.C=0)}function dN(t,e){return L0(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=uo(je(t.Ja,t,e),Q0(t,t.C)),t.C++,!0)}D.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new ho(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=i0(s),s0(s,this.S)):s=this.S),this.o!==null||this.N||(i.H=s,s=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=W0(this,i,e),n=on(this.F),ne(n,"RID",t),ne(n,"CVER",22),this.D&&ne(n,"X-HTTP-Session-Id",this.D),go(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(j0(s)))+"&"+e:this.o&&Yd(n,this.o,s)),qd(this.h,i),this.Ya&&ne(n,"TYPE","init"),this.O?(ne(n,"$req",e),ne(n,"SID","null"),i.Z=!0,dh(i,n,null)):dh(i,n,e),this.G=2}}else this.G==3&&(t?Sm(this,t):this.i.length==0||x0(this.h)||Sm(this))};function Sm(t,e){var n;e?n=e.m:n=t.U++;const r=on(t.F);ne(r,"SID",t.I),ne(r,"RID",n),ne(r,"AID",t.T),go(t,r),t.o&&t.s&&Yd(r,t.o,t.s),n=new ho(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=W0(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),qd(t.h,n),dh(n,r,e)}function go(t,e){t.ia&&Ud(t.ia,function(n,r){ne(e,r,n)}),t.l&&N0({},function(n,r){ne(e,r,n)})}function W0(t,e,n){n=Math.min(t.i.length,n);var r=t.l?je(t.l.Ra,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{oN(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,r}function K0(t){t.g||t.u||(t.Z=1,d0(t.Ia,t),t.A=0)}function Zd(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=uo(je(t.Ia,t),Q0(t,t.A)),t.A++,!0)}D.Ia=function(){if(this.u=null,G0(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=uo(je(this.eb,this),t)}};D.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Ge(10),Kl(this),G0(this))};function ef(t){t.B!=null&&($.clearTimeout(t.B),t.B=null)}function G0(t){t.g=new ho(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=on(t.sa);ne(e,"RID","rpc"),ne(e,"SID",t.I),ne(e,"CI",t.L?"0":"1"),ne(e,"AID",t.T),ne(e,"TYPE","xmlhttp"),go(t,e),t.o&&t.s&&Yd(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=zl(on(e)),n.s=null,n.P=!0,T0(n,t)}D.cb=function(){this.v!=null&&(this.v=null,Kl(this),Zd(this),Ge(19))};function nl(t){t.v!=null&&($.clearTimeout(t.v),t.v=null)}function q0(t,e){var n=null;if(t.g==e){nl(t),ef(t),t.g=null;var r=2}else if(ph(t.h,e))n=e.D,M0(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=bl(),Oe(r,new w0(r,n)),Gl(t)}else K0(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(r==1&&dN(t,e)||r==2&&Zd(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:ir(t,5);break;case 4:ir(t,10);break;case 3:ir(t,6);break;default:ir(t,2)}}}function Q0(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function ir(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=je(t.kb,t);n||(n=new ur("//www.google.com/images/cleardot.gif"),$.location&&$.location.protocol=="http"||el(n,"https"),zl(n)),aN(n.toString(),r)}else Ge(2);t.G=0,t.l&&t.l.va(e),X0(t),H0(t)}D.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Ge(2)):(this.j.info("Failed to ping google.com"),Ge(1))};function X0(t){if(t.G=0,t.la=[],t.l){const e=$0(t.h);(e.length!=0||t.i.length!=0)&&(hm(t.la,e),hm(t.la,t.i),t.h.i.length=0,Md(t.i),t.i.length=0),t.l.ua()}}function Y0(t,e,n){var r=n instanceof ur?on(n):new ur(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),tl(r,r.m);else{var i=$.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new ur(null,void 0);r&&el(s,r),e&&(s.g=e),i&&tl(s,i),n&&(s.l=n),r=s}return n=t.D,e=t.za,n&&e&&ne(r,n,e),ne(r,"VER",t.ma),go(t,r),r}function J0(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new le(new po({jb:!0})):new le(t.ra),e.Ka(t.H),e}function Z0(){}D=Z0.prototype;D.xa=function(){};D.wa=function(){};D.va=function(){};D.ua=function(){};D.Ra=function(){};function rl(){if(ui&&!(10<=Number(AC)))throw Error("Environmental error: no available transport.")}rl.prototype.g=function(t,e){return new dt(t,e)};function dt(t,e){ke.call(this),this.g=new z0(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Ya(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ya(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ii(this)}Le(dt,ke);dt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Ge(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Y0(t,null,t.V),Gl(t)};dt.prototype.close=function(){Jd(this.g)};dt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=jd(t),t=n);e.i.push(new rN(e.ab++,t)),e.G==3&&Gl(e)};dt.prototype.M=function(){this.g.l=null,delete this.j,Jd(this.g),delete this.g,dt.X.M.call(this)};function e1(t){Kd.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Le(e1,Kd);function t1(){Gd.call(this),this.status=1}Le(t1,Gd);function Ii(t){this.g=t}Le(Ii,Z0);Ii.prototype.xa=function(){Oe(this.g,"a")};Ii.prototype.wa=function(t){Oe(this.g,new e1(t))};Ii.prototype.va=function(t){Oe(this.g,new t1)};Ii.prototype.ua=function(){Oe(this.g,"b")};rl.prototype.createWebChannel=rl.prototype.g;dt.prototype.send=dt.prototype.u;dt.prototype.open=dt.prototype.m;dt.prototype.close=dt.prototype.close;Vl.NO_ERROR=0;Vl.TIMEOUT=8;Vl.HTTP_ERROR=6;E0.COMPLETE="complete";_0.EventType=co;co.OPEN="a";co.CLOSE="b";co.ERROR="c";co.MESSAGE="d";ke.prototype.listen=ke.prototype.N;le.prototype.listenOnce=le.prototype.O;le.prototype.getLastError=le.prototype.Oa;le.prototype.getLastErrorCode=le.prototype.Ea;le.prototype.getStatus=le.prototype.aa;le.prototype.getResponseJson=le.prototype.Sa;le.prototype.getResponseText=le.prototype.fa;le.prototype.send=le.prototype.da;le.prototype.setWithCredentials=le.prototype.Ka;var fN=function(){return new rl},pN=function(){return bl()},qu=Vl,mN=E0,gN=Cr,Tm={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},yN=po,Ko=_0,vN=le;const Im="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Fe.UNAUTHENTICATED=new Fe(null),Fe.GOOGLE_CREDENTIALS=new Fe("google-credentials-uid"),Fe.FIRST_PARTY=new Fe("first-party-uid"),Fe.MOCK_USER=new Fe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ki="9.17.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _r=new _d("@firebase/firestore");function km(){return _r.logLevel}function x(t,...e){if(_r.logLevel<=G.DEBUG){const n=e.map(tf);_r.debug(`Firestore (${ki}): ${t}`,...n)}}function Sr(t,...e){if(_r.logLevel<=G.ERROR){const n=e.map(tf);_r.error(`Firestore (${ki}): ${t}`,...n)}}function mh(t,...e){if(_r.logLevel<=G.WARN){const n=e.map(tf);_r.warn(`Firestore (${ki}): ${t}`,...n)}}function tf(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(t="Unexpected state"){const e=`FIRESTORE (${ki}) INTERNAL ASSERTION FAILED: `+t;throw Sr(e),new Error(e)}function ve(t,e){t||j()}function ee(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class F extends un{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n1{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class wN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Fe.UNAUTHENTICATED))}shutdown(){}}class EN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class _N{constructor(e){this.t=e,this.currentUser=Fe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new cr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new cr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{x("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(x("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new cr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(x("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ve(typeof r.accessToken=="string"),new n1(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ve(e===null||typeof e=="string"),new Fe(e)}}class SN{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i,this.type="FirstParty",this.user=Fe.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(ve(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class TN{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i}getToken(){return Promise.resolve(new SN(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Fe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class IN{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class kN{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const r=s=>{s.error!=null&&x("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.A;return this.A=s.token,x("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{x("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.T.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.T.getImmediate({optional:!0});s?i(s):x("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ve(typeof n.token=="string"),this.A=n.token,new IN(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r1{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=CN(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Q(t,e){return t<e?-1:t>e?1:0}function ci(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new F(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new F(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new F(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new F(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ie.fromMillis(Date.now())}static fromDate(e){return Ie.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ie(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Q(this.nanoseconds,e.nanoseconds):Q(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e){this.timestamp=e}static fromTimestamp(e){return new re(e)}static min(){return new re(new Ie(0,0))}static max(){return new re(new Ie(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e,n,r){n===void 0?n=0:n>e.length&&j(),r===void 0?r=e.length-n:r>e.length-n&&j(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ms.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ms?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class de extends Ms{construct(e,n,r){return new de(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new F(k.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new de(n)}static emptyPath(){return new de([])}}const NN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Be extends Ms{construct(e,n,r){return new Be(e,n,r)}static isValidIdentifier(e){return NN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Be.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Be(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new F(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new F(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new F(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new F(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Be(n)}static emptyPath(){return new Be([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e){this.path=e}static fromPath(e){return new b(de.fromString(e))}static fromName(e){return new b(de.fromString(e).popFirst(5))}static empty(){return new b(de.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&de.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return de.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new b(new de(e.slice()))}}function RN(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=re.fromTimestamp(r===1e9?new Ie(n+1,0):new Ie(n,r));return new bn(i,b.empty(),e)}function AN(t){return new bn(t.readTime,t.key,-1)}class bn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new bn(re.min(),b.empty(),-1)}static max(){return new bn(re.max(),b.empty(),-1)}}function PN(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=b.comparator(t.documentKey,e.documentKey),n!==0?n:Q(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ON{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function i1(t){if(t.code!==k.FAILED_PRECONDITION||t.message!==DN)throw t;x("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&j(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new I((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof I?n:I.resolve(n)}catch(n){return I.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):I.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):I.reject(n)}static resolve(e){return new I((n,r)=>{n(e)})}static reject(e){return new I((n,r)=>{r(e)})}static waitFor(e){return new I((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=I.resolve(!1);for(const r of e)n=n.next(i=>i?I.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new I((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new I((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function ql(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s1{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ut(r),this.ct=r=>n.writeSequenceNumber(r))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}s1.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xN{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class il{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new il("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof il&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cm(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function yo(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function o1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nf(t){return t==null}function sl(t){return t===0&&1/t==-1/0}function LN(t){return typeof t=="number"&&Number.isInteger(t)&&!sl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MN extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw i instanceof DOMException?new MN("Invalid base64 string: "+i):i}}(e);return new an(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new an(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Q(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}an.EMPTY_BYTE_STRING=new an("");const $N=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Tr(t){if(ve(!!t),typeof t=="string"){let e=0;const n=$N.exec(t);if(ve(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Re(t.seconds),nanos:Re(t.nanos)}}function Re(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function $s(t){return typeof t=="string"?an.fromBase64String(t):an.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UN(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ol(t){const e=Tr(t.mapValue.fields.__local_write_time__.timestampValue);return new Ie(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Go={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function hi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?UN(t)?4:FN(t)?9007199254740991:10:j()}function jt(t,e){if(t===e)return!0;const n=hi(t);if(n!==hi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ol(t).isEqual(ol(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Tr(r.timestampValue),o=Tr(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return $s(r.bytesValue).isEqual($s(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Re(r.geoPointValue.latitude)===Re(i.geoPointValue.latitude)&&Re(r.geoPointValue.longitude)===Re(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Re(r.integerValue)===Re(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Re(r.doubleValue),o=Re(i.doubleValue);return s===o?sl(s)===sl(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return ci(t.arrayValue.values||[],e.arrayValue.values||[],jt);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Cm(s)!==Cm(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!jt(s[a],o[a])))return!1;return!0}(t,e);default:return j()}}function Us(t,e){return(t.values||[]).find(n=>jt(n,e))!==void 0}function di(t,e){if(t===e)return 0;const n=hi(t),r=hi(e);if(n!==r)return Q(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Q(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=Re(i.integerValue||i.doubleValue),a=Re(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Nm(t.timestampValue,e.timestampValue);case 4:return Nm(ol(t),ol(e));case 5:return Q(t.stringValue,e.stringValue);case 6:return function(i,s){const o=$s(i),a=$s(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=Q(o[l],a[l]);if(u!==0)return u}return Q(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=Q(Re(i.latitude),Re(s.latitude));return o!==0?o:Q(Re(i.longitude),Re(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=di(o[l],a[l]);if(u)return u}return Q(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===Go.mapValue&&s===Go.mapValue)return 0;if(i===Go.mapValue)return 1;if(s===Go.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=Q(a[c],u[c]);if(h!==0)return h;const p=di(o[a[c]],l[u[c]]);if(p!==0)return p}return Q(a.length,u.length)}(t.mapValue,e.mapValue);default:throw j()}}function Nm(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Q(t,e);const n=Tr(t),r=Tr(e),i=Q(n.seconds,r.seconds);return i!==0?i:Q(n.nanos,r.nanos)}function fi(t){return gh(t)}function gh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=Tr(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?$s(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,b.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=gh(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${gh(r.fields[a])}`;return s+"}"}(t.mapValue):j();var e,n}function yh(t){return!!t&&"integerValue"in t}function rf(t){return!!t&&"arrayValue"in t}function fa(t){return!!t&&"mapValue"in t}function is(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return yo(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=is(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=is(t.arrayValue.values[n]);return e}return Object.assign({},t)}function FN(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(e,n){this.position=e,this.inclusive=n}}function Rm(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=b.comparator(b.fromName(o.referenceValue),n.key):r=di(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Am(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!jt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a1{}class Se extends a1{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new VN(e,n,r):n==="array-contains"?new zN(e,r):n==="in"?new HN(e,r):n==="not-in"?new WN(e,r):n==="array-contains-any"?new KN(e,r):new Se(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new BN(e,r):new jN(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(di(n,this.value)):n!==null&&hi(this.value)===hi(n)&&this.matchesComparison(di(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return j()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Vn extends a1{constructor(e,n){super(),this.filters=e,this.op=n,this.ft=null}static create(e,n){return new Vn(e,n)}matches(e){return l1(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ft!==null||(this.ft=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ft}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.dt(n=>n.isInequality());return e!==null?e.field:null}dt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function l1(t){return t.op==="and"}function u1(t){return bN(t)&&l1(t)}function bN(t){for(const e of t.filters)if(e instanceof Vn)return!1;return!0}function vh(t){if(t instanceof Se)return t.field.canonicalString()+t.op.toString()+fi(t.value);if(u1(t))return t.filters.map(e=>vh(e)).join(",");{const e=t.filters.map(n=>vh(n)).join(",");return`${t.op}(${e})`}}function c1(t,e){return t instanceof Se?function(n,r){return r instanceof Se&&n.op===r.op&&n.field.isEqual(r.field)&&jt(n.value,r.value)}(t,e):t instanceof Vn?function(n,r){return r instanceof Vn&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&c1(s,r.filters[o]),!0):!1}(t,e):void j()}function h1(t){return t instanceof Se?function(e){return`${e.field.canonicalString()} ${e.op} ${fi(e.value)}`}(t):t instanceof Vn?function(e){return e.op.toString()+" {"+e.getFilters().map(h1).join(" ,")+"}"}(t):"Filter"}class VN extends Se{constructor(e,n,r){super(e,n,r),this.key=b.fromName(r.referenceValue)}matches(e){const n=b.comparator(e.key,this.key);return this.matchesComparison(n)}}class BN extends Se{constructor(e,n){super(e,"in",n),this.keys=d1("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class jN extends Se{constructor(e,n){super(e,"not-in",n),this.keys=d1("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function d1(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>b.fromName(r.referenceValue))}class zN extends Se{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return rf(n)&&Us(n.arrayValue,this.value)}}class HN extends Se{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Us(this.value.arrayValue,n)}}class WN extends Se{constructor(e,n){super(e,"not-in",n)}matches(e){if(Us(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Us(this.value.arrayValue,n)}}class KN extends Se{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!rf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Us(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e,n="asc"){this.field=e,this.dir=n}}function GN(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e,n){this.comparator=e,this.root=n||Ae.EMPTY}insert(e,n){return new ot(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ae.BLACK,null,null))}remove(e){return new ot(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ae.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new qo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new qo(this.root,e,this.comparator,!1)}getReverseIterator(){return new qo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new qo(this.root,e,this.comparator,!0)}}class qo{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ae{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ae.RED,this.left=i??Ae.EMPTY,this.right=s??Ae.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ae(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ae.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ae.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ae.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ae.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw j();const e=this.left.check();if(e!==this.right.check())throw j();return e+(this.isRed()?0:1)}}Ae.EMPTY=null,Ae.RED=!0,Ae.BLACK=!1;Ae.EMPTY=new class{constructor(){this.size=0}get key(){throw j()}get value(){throw j()}get color(){throw j()}get left(){throw j()}get right(){throw j()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Ae(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this.comparator=e,this.data=new ot(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Pm(this.data.getIterator())}getIteratorFrom(e){return new Pm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Qe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Qe(this.comparator);return n.data=e,n}}class Pm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this.fields=e,e.sort(Be.comparator)}static empty(){return new At([])}unionWith(e){let n=new Qe(Be.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new At(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ci(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this.value=e}static empty(){return new Rt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!fa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=is(n)}setAll(e){let n=Be.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=is(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());fa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return jt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];fa(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){yo(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Rt(is(this.value))}}function f1(t){const e=[];return yo(t.fields,(n,r)=>{const i=new Be([n]);if(fa(r)){const s=f1(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new At(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Nt(e,0,re.min(),re.min(),re.min(),Rt.empty(),0)}static newFoundDocument(e,n,r,i){return new Nt(e,1,n,re.min(),r,i,0)}static newNoDocument(e,n){return new Nt(e,2,n,re.min(),re.min(),Rt.empty(),0)}static newUnknownDocument(e,n){return new Nt(e,3,n,re.min(),re.min(),Rt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(re.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Rt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=re.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Nt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Nt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qN{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this._t=null}}function Dm(t,e=null,n=[],r=[],i=null,s=null,o=null){return new qN(t,e,n,r,i,s,o)}function sf(t){const e=ee(t);if(e._t===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>vh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),nf(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>fi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>fi(r)).join(",")),e._t=n}return e._t}function of(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!GN(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!c1(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Am(t.startAt,e.startAt)&&Am(t.endAt,e.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.wt=null,this.gt=null,this.startAt,this.endAt}}function QN(t,e,n,r,i,s,o,a){return new Ql(t,e,n,r,i,s,o,a)}function XN(t){return new Ql(t)}function Om(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function YN(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function JN(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function ZN(t){return t.collectionGroup!==null}function Jr(t){const e=ee(t);if(e.wt===null){e.wt=[];const n=JN(e),r=YN(e);if(n!==null&&r===null)n.isKeyField()||e.wt.push(new ss(n)),e.wt.push(new ss(Be.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.wt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new ss(Be.keyField(),s))}}}return e.wt}function pi(t){const e=ee(t);if(!e.gt)if(e.limitType==="F")e.gt=Dm(e.path,e.collectionGroup,Jr(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Jr(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new ss(s.field,o))}const r=e.endAt?new al(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new al(e.startAt.position,e.startAt.inclusive):null;e.gt=Dm(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.gt}function wh(t,e,n){return new Ql(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function p1(t,e){return of(pi(t),pi(e))&&t.limitType===e.limitType}function m1(t){return`${sf(pi(t))}|lt:${t.limitType}`}function xm(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>h1(r)).join(", ")}]`),nf(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>fi(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>fi(r)).join(",")),`Target(${n})`}(pi(t))}; limitType=${t.limitType})`}function af(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):b.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of Jr(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=Rm(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,Jr(n),r)||n.endAt&&!function(i,s,o){const a=Rm(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,Jr(n),r))}(t,e)}function eR(t){return(e,n)=>{let r=!1;for(const i of Jr(t)){const s=tR(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function tR(t,e,n){const r=t.field.isKeyField()?b.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?di(a,l):j()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return j()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g1(t,e){if(t.yt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:sl(e)?"-0":e}}function y1(t){return{integerValue:""+t}}function nR(t,e){return LN(e)?y1(e):g1(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(){this._=void 0}}function rR(t,e,n){return t instanceof Fs?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof bs?w1(t,e):t instanceof Vs?E1(t,e):function(r,i){const s=v1(r,i),o=Lm(s)+Lm(r.It);return yh(s)&&yh(r.It)?y1(o):g1(r.Tt,o)}(t,e)}function iR(t,e,n){return t instanceof bs?w1(t,e):t instanceof Vs?E1(t,e):n}function v1(t,e){return t instanceof ll?yh(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Fs extends Xl{}class bs extends Xl{constructor(e){super(),this.elements=e}}function w1(t,e){const n=_1(e);for(const r of t.elements)n.some(i=>jt(i,r))||n.push(r);return{arrayValue:{values:n}}}class Vs extends Xl{constructor(e){super(),this.elements=e}}function E1(t,e){let n=_1(e);for(const r of t.elements)n=n.filter(i=>!jt(i,r));return{arrayValue:{values:n}}}class ll extends Xl{constructor(e,n){super(),this.Tt=e,this.It=n}}function Lm(t){return Re(t.integerValue||t.doubleValue)}function _1(t){return rf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sR{constructor(e,n){this.field=e,this.transform=n}}function oR(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof bs&&r instanceof bs||n instanceof Vs&&r instanceof Vs?ci(n.elements,r.elements,jt):n instanceof ll&&r instanceof ll?jt(n.It,r.It):n instanceof Fs&&r instanceof Fs}(t.transform,e.transform)}class aR{constructor(e,n){this.version=e,this.transformResults=n}}class Jt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Jt}static exists(e){return new Jt(void 0,e)}static updateTime(e){return new Jt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function pa(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Yl{}function S1(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new I1(t.key,Jt.none()):new vo(t.key,t.data,Jt.none());{const n=t.data,r=Rt.empty();let i=new Qe(Be.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Nr(t.key,r,new At(i.toArray()),Jt.none())}}function lR(t,e,n){t instanceof vo?function(r,i,s){const o=r.value.clone(),a=$m(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Nr?function(r,i,s){if(!pa(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=$m(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(T1(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function os(t,e,n,r){return t instanceof vo?function(i,s,o,a){if(!pa(i.precondition,s))return o;const l=i.value.clone(),u=Um(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Nr?function(i,s,o,a){if(!pa(i.precondition,s))return o;const l=Um(i.fieldTransforms,a,s),u=s.data;return u.setAll(T1(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return pa(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function uR(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=v1(r.transform,i||null);s!=null&&(n===null&&(n=Rt.empty()),n.set(r.field,s))}return n||null}function Mm(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&ci(n,r,(i,s)=>oR(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class vo extends Yl{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Nr extends Yl{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function T1(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function $m(t,e,n){const r=new Map;ve(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,iR(o,a,n[i]))}return r}function Um(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,rR(s,o,e))}return r}class I1 extends Yl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class cR extends Yl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var he,z;function hR(t){switch(t){default:return j();case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0}}function dR(t){if(t===void 0)return Sr("GRPC error has no .code"),k.UNKNOWN;switch(t){case he.OK:return k.OK;case he.CANCELLED:return k.CANCELLED;case he.UNKNOWN:return k.UNKNOWN;case he.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case he.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case he.INTERNAL:return k.INTERNAL;case he.UNAVAILABLE:return k.UNAVAILABLE;case he.UNAUTHENTICATED:return k.UNAUTHENTICATED;case he.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case he.NOT_FOUND:return k.NOT_FOUND;case he.ALREADY_EXISTS:return k.ALREADY_EXISTS;case he.PERMISSION_DENIED:return k.PERMISSION_DENIED;case he.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case he.ABORTED:return k.ABORTED;case he.OUT_OF_RANGE:return k.OUT_OF_RANGE;case he.UNIMPLEMENTED:return k.UNIMPLEMENTED;case he.DATA_LOSS:return k.DATA_LOSS;default:return j()}}(z=he||(he={}))[z.OK=0]="OK",z[z.CANCELLED=1]="CANCELLED",z[z.UNKNOWN=2]="UNKNOWN",z[z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",z[z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",z[z.NOT_FOUND=5]="NOT_FOUND",z[z.ALREADY_EXISTS=6]="ALREADY_EXISTS",z[z.PERMISSION_DENIED=7]="PERMISSION_DENIED",z[z.UNAUTHENTICATED=16]="UNAUTHENTICATED",z[z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",z[z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",z[z.ABORTED=10]="ABORTED",z[z.OUT_OF_RANGE=11]="OUT_OF_RANGE",z[z.UNIMPLEMENTED=12]="UNIMPLEMENTED",z[z.INTERNAL=13]="INTERNAL",z[z.UNAVAILABLE=14]="UNAVAILABLE",z[z.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){yo(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return o1(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fR=new ot(b.comparator);function ul(){return fR}const k1=new ot(b.comparator);function Qo(...t){let e=k1;for(const n of t)e=e.insert(n.key,n);return e}function C1(t){let e=k1;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function sr(){return as()}function N1(){return as()}function as(){return new Ci(t=>t.toString(),(t,e)=>t.isEqual(e))}const pR=new ot(b.comparator),mR=new Qe(b.comparator);function Ve(...t){let e=mR;for(const n of t)e=e.add(n);return e}const gR=new Qe(Q);function yR(){return gR}class vR{constructor(e,n){this.databaseId=e,this.yt=n}}function Eh(t,e){return t.yt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function wR(t,e){return t.yt?e.toBase64():e.toUint8Array()}function ER(t,e){return Eh(t,e.toTimestamp())}function Zr(t){return ve(!!t),re.fromTimestamp(function(e){const n=Tr(e);return new Ie(n.seconds,n.nanos)}(t))}function R1(t,e){return function(n){return new de(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function _R(t){const e=de.fromString(t);return ve(AR(e)),e}function _h(t,e){return R1(t.databaseId,e.path)}function SR(t){const e=_R(t);return e.length===4?de.emptyPath():IR(e)}function TR(t){return new de(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function IR(t){return ve(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Fm(t,e,n){return{name:_h(t,e),fields:n.value.mapValue.fields}}function kR(t,e){let n;if(e instanceof vo)n={update:Fm(t,e.key,e.value)};else if(e instanceof I1)n={delete:_h(t,e.key)};else if(e instanceof Nr)n={update:Fm(t,e.key,e.data),updateMask:RR(e.fieldMask)};else{if(!(e instanceof cR))return j();n={verify:_h(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof Fs)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof bs)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Vs)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof ll)return{fieldPath:s.field.canonicalString(),increment:o.It};throw j()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:ER(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:j()}(t,e.precondition)),n}function CR(t,e){return t&&t.length>0?(ve(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?Zr(r.updateTime):Zr(i);return s.isEqual(re.min())&&(s=Zr(i)),new aR(s,r.transformResults||[])}(n,e))):[]}function NR(t){let e=SR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ve(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(c){const h=A1(c);return h instanceof Vn&&u1(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new ss(Ar(h.field),function(p){switch(p){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,nf(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,p=c.values||[];return new al(p,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,p=c.values||[];return new al(p,h)}(n.endAt)),QN(e,i,o,s,a,"F",l,u)}function A1(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Ar(e.unaryFilter.field);return Se.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=Ar(e.unaryFilter.field);return Se.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ar(e.unaryFilter.field);return Se.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Ar(e.unaryFilter.field);return Se.create(s,"!=",{nullValue:"NULL_VALUE"});default:return j()}}(t):t.fieldFilter!==void 0?function(e){return Se.create(Ar(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return j()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Vn.create(e.compositeFilter.filters.map(n=>A1(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return j()}}(e.compositeFilter.op))}(t):j()}function Ar(t){return Be.fromServerFormat(t.fieldPath)}function RR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function AR(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PR{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&lR(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=os(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=os(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=N1();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=S1(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(re.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ve())}isEqual(e){return this.batchId===e.batchId&&ci(this.mutations,e.mutations,(n,r)=>Mm(n,r))&&ci(this.baseMutations,e.baseMutations,(n,r)=>Mm(n,r))}}class lf{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ve(e.mutations.length===r.length);let i=pR;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new lf(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OR{constructor(e){this.oe=e}}function xR(t){const e=NR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?wh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LR{constructor(){this.Ze=new MR}addToCollectionParentIndex(e,n){return this.Ze.add(n),I.resolve()}getCollectionParents(e,n){return I.resolve(this.Ze.getEntries(n))}addFieldIndex(e,n){return I.resolve()}deleteFieldIndex(e,n){return I.resolve()}getDocumentsMatchingTarget(e,n){return I.resolve(null)}getIndexType(e,n){return I.resolve(0)}getFieldIndexes(e,n){return I.resolve([])}getNextCollectionGroupToUpdate(e){return I.resolve(null)}getMinOffset(e,n){return I.resolve(bn.min())}getMinOffsetFromCollectionGroup(e,n){return I.resolve(bn.min())}updateCollectionGroup(e,n,r){return I.resolve()}updateIndexEntries(e,n){return I.resolve()}}class MR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Qe(de.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Qe(de.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e){this.Pn=e}next(){return this.Pn+=2,this.Pn}static Vn(){return new mi(0)}static Sn(){return new mi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $R{constructor(){this.changes=new Ci(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Nt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?I.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&os(r.mutation,i,At.empty(),Ie.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Ve()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Ve()){const i=sr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Qo();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=sr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Ve()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=ul();const o=as(),a=as();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Nr)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),os(c.mutation,u,c.mutation.getFieldMask(),Ie.now())):o.set(u.key,At.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new UR(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=as();let i=new ot((o,a)=>o-a),s=Ve();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||At.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||Ve()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=N1();c.forEach(p=>{if(!s.has(p)){const g=S1(n.get(p),r.get(p));g!==null&&h.set(p,g),s=s.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return I.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return b.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):ZN(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):I.resolve(sr());let a=-1,l=s;return o.next(u=>I.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?I.resolve():this.remoteDocumentCache.getEntry(e,c).next(p=>{l=l.insert(c,p)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,Ve())).next(c=>({batchId:a,changes:C1(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new b(n)).next(r=>{let i=Qo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=Qo();return this.indexManager.getCollectionParents(e,i).next(o=>I.forEach(o,a=>{const l=function(u,c){return new Ql(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,Nt.newInvalidDocument(u)))});let o=Qo();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&os(u.mutation,l,At.empty(),Ie.now()),af(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bR{constructor(e){this.Tt=e,this.es=new Map,this.ns=new Map}getBundleMetadata(e,n){return I.resolve(this.es.get(n))}saveBundleMetadata(e,n){var r;return this.es.set(n.id,{id:(r=n).id,version:r.version,createTime:Zr(r.createTime)}),I.resolve()}getNamedQuery(e,n){return I.resolve(this.ns.get(n))}saveNamedQuery(e,n){return this.ns.set(n.name,function(r){return{name:r.name,query:xR(r.bundledQuery),readTime:Zr(r.readTime)}}(n)),I.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VR{constructor(){this.overlays=new ot(b.comparator),this.ss=new Map}getOverlay(e,n){return I.resolve(this.overlays.get(n))}getOverlays(e,n){const r=sr();return I.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ce(e,n,s)}),I.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.ss.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.ss.delete(r)),I.resolve()}getOverlaysForCollection(e,n,r){const i=sr(),s=n.length+1,o=new b(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return I.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ot((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=sr(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=sr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return I.resolve(a)}ce(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.ss.get(i.largestBatchId).delete(r.key);this.ss.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new DR(n,r));let s=this.ss.get(n);s===void 0&&(s=Ve(),this.ss.set(n,s)),this.ss.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(){this.rs=new Qe(Ee.os),this.us=new Qe(Ee.cs)}isEmpty(){return this.rs.isEmpty()}addReference(e,n){const r=new Ee(e,n);this.rs=this.rs.add(r),this.us=this.us.add(r)}hs(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.ls(new Ee(e,n))}fs(e,n){e.forEach(r=>this.removeReference(r,n))}ds(e){const n=new b(new de([])),r=new Ee(n,e),i=new Ee(n,e+1),s=[];return this.us.forEachInRange([r,i],o=>{this.ls(o),s.push(o.key)}),s}_s(){this.rs.forEach(e=>this.ls(e))}ls(e){this.rs=this.rs.delete(e),this.us=this.us.delete(e)}ws(e){const n=new b(new de([])),r=new Ee(n,e),i=new Ee(n,e+1);let s=Ve();return this.us.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ee(e,0),r=this.rs.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ee{constructor(e,n){this.key=e,this.gs=n}static os(e,n){return b.comparator(e.key,n.key)||Q(e.gs,n.gs)}static cs(e,n){return Q(e.gs,n.gs)||b.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ys=1,this.ps=new Qe(Ee.os)}checkEmpty(e){return I.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.ys;this.ys++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new PR(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.ps=this.ps.add(new Ee(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return I.resolve(o)}lookupMutationBatch(e,n){return I.resolve(this.Is(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Ts(r),s=i<0?0:i;return I.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return I.resolve(this.mutationQueue.length===0?-1:this.ys-1)}getAllMutationBatches(e){return I.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ee(n,0),i=new Ee(n,Number.POSITIVE_INFINITY),s=[];return this.ps.forEachInRange([r,i],o=>{const a=this.Is(o.gs);s.push(a)}),I.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Qe(Q);return n.forEach(i=>{const s=new Ee(i,0),o=new Ee(i,Number.POSITIVE_INFINITY);this.ps.forEachInRange([s,o],a=>{r=r.add(a.gs)})}),I.resolve(this.Es(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;b.isDocumentKey(s)||(s=s.child(""));const o=new Ee(new b(s),0);let a=new Qe(Q);return this.ps.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.gs)),!0)},o),I.resolve(this.Es(a))}Es(e){const n=[];return e.forEach(r=>{const i=this.Is(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ve(this.As(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.ps;return I.forEach(n.mutations,i=>{const s=new Ee(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.ps=r})}bn(e){}containsKey(e,n){const r=new Ee(n,0),i=this.ps.firstAfterOrEqual(r);return I.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,I.resolve()}As(e,n){return this.Ts(e)}Ts(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Is(e){const n=this.Ts(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jR{constructor(e){this.Rs=e,this.docs=new ot(b.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Rs(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return I.resolve(r?r.document.mutableCopy():Nt.newInvalidDocument(n))}getEntries(e,n){let r=ul();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Nt.newInvalidDocument(i))}),I.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=ul();const o=n.path,a=new b(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||PN(AN(c),r)<=0||(i.has(c.key)||af(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return I.resolve(s)}getAllFromCollectionGroup(e,n,r,i){j()}bs(e,n){return I.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new zR(this)}getSize(e){return I.resolve(this.size)}}class zR extends $R{constructor(e){super(),this.Xn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Xn.addEntry(e,i)):this.Xn.removeEntry(r)}),I.waitFor(n)}getFromCache(e,n){return this.Xn.getEntry(e,n)}getAllFromCache(e,n){return this.Xn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HR{constructor(e){this.persistence=e,this.vs=new Ci(n=>sf(n),of),this.lastRemoteSnapshotVersion=re.min(),this.highestTargetId=0,this.Ps=0,this.Vs=new uf,this.targetCount=0,this.Ss=mi.Vn()}forEachTarget(e,n){return this.vs.forEach((r,i)=>n(i)),I.resolve()}getLastRemoteSnapshotVersion(e){return I.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return I.resolve(this.Ps)}allocateTargetId(e){return this.highestTargetId=this.Ss.next(),I.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Ps&&(this.Ps=n),I.resolve()}xn(e){this.vs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ss=new mi(n),this.highestTargetId=n),e.sequenceNumber>this.Ps&&(this.Ps=e.sequenceNumber)}addTargetData(e,n){return this.xn(n),this.targetCount+=1,I.resolve()}updateTargetData(e,n){return this.xn(n),I.resolve()}removeTargetData(e,n){return this.vs.delete(n.target),this.Vs.ds(n.targetId),this.targetCount-=1,I.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.vs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.vs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),I.waitFor(s).next(()=>i)}getTargetCount(e){return I.resolve(this.targetCount)}getTargetData(e,n){const r=this.vs.get(n)||null;return I.resolve(r)}addMatchingKeys(e,n,r){return this.Vs.hs(n,r),I.resolve()}removeMatchingKeys(e,n,r){this.Vs.fs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),I.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Vs.ds(n),I.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Vs.ws(n);return I.resolve(r)}containsKey(e,n){return I.resolve(this.Vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WR{constructor(e,n){this.Ds={},this.overlays={},this.Cs=new s1(0),this.xs=!1,this.xs=!0,this.referenceDelegate=e(this),this.Ns=new HR(this),this.indexManager=new LR,this.remoteDocumentCache=function(r){return new jR(r)}(r=>this.referenceDelegate.ks(r)),this.Tt=new OR(n),this.Os=new bR(this.Tt)}start(){return Promise.resolve()}shutdown(){return this.xs=!1,Promise.resolve()}get started(){return this.xs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new VR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Ds[e.toKey()];return r||(r=new BR(n,this.referenceDelegate),this.Ds[e.toKey()]=r),r}getTargetCache(){return this.Ns}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Os}runTransaction(e,n,r){x("MemoryPersistence","Starting transaction:",e);const i=new KR(this.Cs.next());return this.referenceDelegate.Ms(),r(i).next(s=>this.referenceDelegate.Fs(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}$s(e,n){return I.or(Object.values(this.Ds).map(r=>()=>r.containsKey(e,n)))}}class KR extends ON{constructor(e){super(),this.currentSequenceNumber=e}}class cf{constructor(e){this.persistence=e,this.Bs=new uf,this.Ls=null}static qs(e){return new cf(e)}get Us(){if(this.Ls)return this.Ls;throw j()}addReference(e,n,r){return this.Bs.addReference(r,n),this.Us.delete(r.toString()),I.resolve()}removeReference(e,n,r){return this.Bs.removeReference(r,n),this.Us.add(r.toString()),I.resolve()}markPotentiallyOrphaned(e,n){return this.Us.add(n.toString()),I.resolve()}removeTarget(e,n){this.Bs.ds(n.targetId).forEach(i=>this.Us.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Us.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ms(){this.Ls=new Set}Fs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return I.forEach(this.Us,r=>{const i=b.fromPath(r);return this.Ks(e,i).next(s=>{s||n.removeEntry(i,re.min())})}).next(()=>(this.Ls=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ks(e,n).next(r=>{r?this.Us.delete(n.toString()):this.Us.add(n.toString())})}ks(e){return 0}Ks(e,n){return I.or([()=>I.resolve(this.Bs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.$s(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Ci=r,this.xi=i}static Ni(e,n){let r=Ve(),i=Ve();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new hf(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GR{constructor(){this.ki=!1}initialize(e,n){this.Oi=e,this.indexManager=n,this.ki=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Mi(e,n).next(s=>s||this.Fi(e,n,i,r)).next(s=>s||this.$i(e,n))}Mi(e,n){if(Om(n))return I.resolve(null);let r=pi(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=wh(n,null,"F"),r=pi(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=Ve(...s);return this.Oi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Bi(n,a);return this.Li(n,u,o,l.readTime)?this.Mi(e,wh(n,null,"F")):this.qi(e,u,n,l)}))})))}Fi(e,n,r,i){return Om(n)||i.isEqual(re.min())?this.$i(e,n):this.Oi.getDocuments(e,r).next(s=>{const o=this.Bi(n,s);return this.Li(n,o,r,i)?this.$i(e,n):(km()<=G.DEBUG&&x("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),xm(n)),this.qi(e,o,n,RN(i,-1)))})}Bi(e,n){let r=new Qe(eR(e));return n.forEach((i,s)=>{af(e,s)&&(r=r.add(s))}),r}Li(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}$i(e,n){return km()<=G.DEBUG&&x("QueryEngine","Using full collection scan to execute query:",xm(n)),this.Oi.getDocumentsMatchingQuery(e,n,bn.min())}qi(e,n,r,i){return this.Oi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qR{constructor(e,n,r,i){this.persistence=e,this.Ui=n,this.Tt=i,this.Ki=new ot(Q),this.Gi=new Ci(s=>sf(s),of),this.Qi=new Map,this.ji=e.getRemoteDocumentCache(),this.Ns=e.getTargetCache(),this.Os=e.getBundleCache(),this.zi(r)}zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new FR(this.ji,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ji.setIndexManager(this.indexManager),this.Ui.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ki))}}function QR(t,e,n,r){return new qR(t,e,n,r)}async function P1(t,e){const n=ee(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.zi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=Ve();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({Wi:u,removedBatchIds:o,addedBatchIds:a}))})})}function XR(t,e){const n=ee(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.ji.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,h=c.keys();let p=I.resolve();return h.forEach(g=>{p=p.next(()=>u.getEntry(a,g)).next(y=>{const v=l.docVersions.get(g);ve(v!==null),y.version.compareTo(v)<0&&(c.applyToRemoteDocument(y,l),y.isValidDocument()&&(y.setReadTime(l.commitVersion),u.addEntry(y)))})}),p.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=Ve();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function YR(t){const e=ee(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ns.getLastRemoteSnapshotVersion(n))}function JR(t,e){const n=ee(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}class bm{constructor(){this.activeTargetIds=yR()}sr(e){this.activeTargetIds=this.activeTargetIds.add(e)}ir(e){this.activeTargetIds=this.activeTargetIds.delete(e)}nr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ZR{constructor(){this.Ur=new bm,this.Kr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Ur.sr(e),this.Kr[e]||"not-current"}updateQueryState(e,n,r){this.Kr[e]=n}removeLocalQueryTarget(e){this.Ur.ir(e)}isLocalQueryTarget(e){return this.Ur.activeTargetIds.has(e)}clearQueryState(e){delete this.Kr[e]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(e){return this.Ur.activeTargetIds.has(e)}start(){return this.Ur=new bm,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eA{Gr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(){this.Qr=()=>this.jr(),this.zr=()=>this.Wr(),this.Hr=[],this.Jr()}Gr(e){this.Hr.push(e)}shutdown(){window.removeEventListener("online",this.Qr),window.removeEventListener("offline",this.zr)}Jr(){window.addEventListener("online",this.Qr),window.addEventListener("offline",this.zr)}jr(){x("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Hr)e(0)}Wr(){x("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Hr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA{constructor(e){this.Yr=e.Yr,this.Zr=e.Zr}Xr(e){this.eo=e}no(e){this.so=e}onMessage(e){this.io=e}close(){this.Zr()}send(e){this.Yr(e)}ro(){this.eo()}oo(e){this.so(e)}uo(e){this.io(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rA extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.co=n+"://"+e.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get ho(){return!1}lo(e,n,r,i,s){const o=this.fo(e,n);x("RestConnection","Sending: ",o,r);const a={};return this._o(a,i,s),this.wo(e,o,a,r).then(l=>(x("RestConnection","Received: ",l),l),l=>{throw mh("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",r),l})}mo(e,n,r,i,s,o){return this.lo(e,n,r,i,s)}_o(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+ki,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}fo(e,n){const r=tA[e];return`${this.co}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}wo(e,n,r,i){return new Promise((s,o)=>{const a=new vN;a.setWithCredentials(!0),a.listenOnce(mN.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case qu.NO_ERROR:const u=a.getResponseJson();x("Connection","XHR received:",JSON.stringify(u)),s(u);break;case qu.TIMEOUT:x("Connection",'RPC "'+e+'" timed out'),o(new F(k.DEADLINE_EXCEEDED,"Request time out"));break;case qu.HTTP_ERROR:const c=a.getStatus();if(x("Connection",'RPC "'+e+'" failed with status:',c,"response text:",a.getResponseText()),c>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const p=h==null?void 0:h.error;if(p&&p.status&&p.message){const g=function(y){const v=y.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(v)>=0?v:k.UNKNOWN}(p.status);o(new F(g,p.message))}else o(new F(k.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new F(k.UNAVAILABLE,"Connection failed."));break;default:j()}}finally{x("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,r,15)})}yo(e,n,r){const i=[this.co,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=fN(),o=pN(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new yN({})),this._o(a.initMessageHeaders,n,r),a.encodeInitMessageHeaders=!0;const l=i.join("");x("Connection","Creating WebChannel: "+l,a);const u=s.createWebChannel(l,a);let c=!1,h=!1;const p=new nA({Yr:y=>{h?x("Connection","Not sending because WebChannel is closed:",y):(c||(x("Connection","Opening WebChannel transport."),u.open(),c=!0),x("Connection","WebChannel sending:",y),u.send(y))},Zr:()=>u.close()}),g=(y,v,E)=>{y.listen(v,f=>{try{E(f)}catch(d){setTimeout(()=>{throw d},0)}})};return g(u,Ko.EventType.OPEN,()=>{h||x("Connection","WebChannel transport opened.")}),g(u,Ko.EventType.CLOSE,()=>{h||(h=!0,x("Connection","WebChannel transport closed"),p.oo())}),g(u,Ko.EventType.ERROR,y=>{h||(h=!0,mh("Connection","WebChannel transport errored:",y),p.oo(new F(k.UNAVAILABLE,"The operation could not be completed")))}),g(u,Ko.EventType.MESSAGE,y=>{var v;if(!h){const E=y.data[0];ve(!!E);const f=E,d=f.error||((v=f[0])===null||v===void 0?void 0:v.error);if(d){x("Connection","WebChannel received error:",d);const m=d.status;let w=function(C){const N=he[C];if(N!==void 0)return dR(N)}(m),_=d.message;w===void 0&&(w=k.INTERNAL,_="Unknown error status: "+m+" with message "+d.message),h=!0,p.oo(new F(w,_)),u.close()}else x("Connection","WebChannel received:",E),p.uo(E)}}),g(o,gN.STAT_EVENT,y=>{y.stat===Tm.PROXY?x("Connection","Detected buffering proxy"):y.stat===Tm.NOPROXY&&x("Connection","Detected no buffering proxy")}),setTimeout(()=>{p.ro()},0),p}}function Qu(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jl(t){return new vR(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D1{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Ys=e,this.timerId=n,this.po=r,this.Io=i,this.To=s,this.Eo=0,this.Ao=null,this.Ro=Date.now(),this.reset()}reset(){this.Eo=0}bo(){this.Eo=this.To}vo(e){this.cancel();const n=Math.floor(this.Eo+this.Po()),r=Math.max(0,Date.now()-this.Ro),i=Math.max(0,n-r);i>0&&x("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Eo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Ao=this.Ys.enqueueAfterDelay(this.timerId,i,()=>(this.Ro=Date.now(),e())),this.Eo*=this.Io,this.Eo<this.po&&(this.Eo=this.po),this.Eo>this.To&&(this.Eo=this.To)}Vo(){this.Ao!==null&&(this.Ao.skipDelay(),this.Ao=null)}cancel(){this.Ao!==null&&(this.Ao.cancel(),this.Ao=null)}Po(){return(Math.random()-.5)*this.Eo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iA{constructor(e,n,r,i,s,o,a,l){this.Ys=e,this.So=r,this.Do=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Co=0,this.xo=null,this.No=null,this.stream=null,this.ko=new D1(e,n)}Oo(){return this.state===1||this.state===5||this.Mo()}Mo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Fo()}async stop(){this.Oo()&&await this.close(0)}$o(){this.state=0,this.ko.reset()}Bo(){this.Mo()&&this.xo===null&&(this.xo=this.Ys.enqueueAfterDelay(this.So,6e4,()=>this.Lo()))}qo(e){this.Uo(),this.stream.send(e)}async Lo(){if(this.Mo())return this.close(0)}Uo(){this.xo&&(this.xo.cancel(),this.xo=null)}Ko(){this.No&&(this.No.cancel(),this.No=null)}async close(e,n){this.Uo(),this.Ko(),this.ko.cancel(),this.Co++,e!==4?this.ko.reset():n&&n.code===k.RESOURCE_EXHAUSTED?(Sr(n.toString()),Sr("Using maximum backoff delay to prevent overloading the backend."),this.ko.bo()):n&&n.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Go(),this.stream.close(),this.stream=null),this.state=e,await this.listener.no(n)}Go(){}auth(){this.state=1;const e=this.Qo(this.Co),n=this.Co;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Co===n&&this.jo(r,i)},r=>{e(()=>{const i=new F(k.UNKNOWN,"Fetching auth token failed: "+r.message);return this.zo(i)})})}jo(e,n){const r=this.Qo(this.Co);this.stream=this.Wo(e,n),this.stream.Xr(()=>{r(()=>(this.state=2,this.No=this.Ys.enqueueAfterDelay(this.Do,1e4,()=>(this.Mo()&&(this.state=3),Promise.resolve())),this.listener.Xr()))}),this.stream.no(i=>{r(()=>this.zo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Fo(){this.state=5,this.ko.vo(async()=>{this.state=0,this.start()})}zo(e){return x("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Qo(e){return n=>{this.Ys.enqueueAndForget(()=>this.Co===e?n():(x("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class sA extends iA{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.Tt=s,this.Zo=!1}get Xo(){return this.Zo}start(){this.Zo=!1,this.lastStreamToken=void 0,super.start()}Go(){this.Zo&&this.tu([])}Wo(e,n){return this.connection.yo("Write",e,n)}onMessage(e){if(ve(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Zo){this.ko.reset();const n=CR(e.writeResults,e.commitTime),r=Zr(e.commitTime);return this.listener.eu(r,n)}return ve(!e.writeResults||e.writeResults.length===0),this.Zo=!0,this.listener.nu()}su(){const e={};e.database=TR(this.Tt),this.qo(e)}tu(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>kR(this.Tt,r))};this.qo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.Tt=i,this.iu=!1}ru(){if(this.iu)throw new F(k.FAILED_PRECONDITION,"The client has already been terminated.")}lo(e,n,r){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.lo(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new F(k.UNKNOWN,i.toString())})}mo(e,n,r,i){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.mo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new F(k.UNKNOWN,s.toString())})}terminate(){this.iu=!0}}class aA{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ou=0,this.uu=null,this.cu=!0}au(){this.ou===0&&(this.hu("Unknown"),this.uu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.uu=null,this.lu("Backend didn't respond within 10 seconds."),this.hu("Offline"),Promise.resolve())))}fu(e){this.state==="Online"?this.hu("Unknown"):(this.ou++,this.ou>=1&&(this.du(),this.lu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.hu("Offline")))}set(e){this.du(),this.ou=0,e==="Online"&&(this.cu=!1),this.hu(e)}hu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}lu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.cu?(Sr(n),this.cu=!1):x("OnlineStateTracker",n)}du(){this.uu!==null&&(this.uu.cancel(),this.uu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lA{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this._u=[],this.wu=new Map,this.mu=new Set,this.gu=[],this.yu=s,this.yu.Gr(o=>{r.enqueueAndForget(async()=>{Eo(this)&&(x("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=ee(a);l.mu.add(4),await wo(l),l.pu.set("Unknown"),l.mu.delete(4),await Zl(l)}(this))})}),this.pu=new aA(r,i)}}async function Zl(t){if(Eo(t))for(const e of t.gu)await e(!0)}async function wo(t){for(const e of t.gu)await e(!1)}function Eo(t){return ee(t).mu.size===0}async function O1(t,e,n){if(!ql(e))throw e;t.mu.add(1),await wo(t),t.pu.set("Offline"),n||(n=()=>YR(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{x("RemoteStore","Retrying IndexedDB access"),await n(),t.mu.delete(1),await Zl(t)})}function x1(t,e){return e().catch(n=>O1(t,n,e))}async function eu(t){const e=ee(t),n=Bn(e);let r=e._u.length>0?e._u[e._u.length-1].batchId:-1;for(;uA(e);)try{const i=await JR(e.localStore,r);if(i===null){e._u.length===0&&n.Bo();break}r=i.batchId,cA(e,i)}catch(i){await O1(e,i)}L1(e)&&M1(e)}function uA(t){return Eo(t)&&t._u.length<10}function cA(t,e){t._u.push(e);const n=Bn(t);n.Mo()&&n.Xo&&n.tu(e.mutations)}function L1(t){return Eo(t)&&!Bn(t).Oo()&&t._u.length>0}function M1(t){Bn(t).start()}async function hA(t){Bn(t).su()}async function dA(t){const e=Bn(t);for(const n of t._u)e.tu(n.mutations)}async function fA(t,e,n){const r=t._u.shift(),i=lf.from(r,e,n);await x1(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await eu(t)}async function pA(t,e){e&&Bn(t).Xo&&await async function(n,r){if(i=r.code,hR(i)&&i!==k.ABORTED){const s=n._u.shift();Bn(n).$o(),await x1(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await eu(n)}var i}(t,e),L1(t)&&M1(t)}async function Bm(t,e){const n=ee(t);n.asyncQueue.verifyOperationInProgress(),x("RemoteStore","RemoteStore received new credentials");const r=Eo(n);n.mu.add(3),await wo(n),r&&n.pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.mu.delete(3),await Zl(n)}async function mA(t,e){const n=ee(t);e?(n.mu.delete(2),await Zl(n)):e||(n.mu.add(2),await wo(n),n.pu.set("Unknown"))}function Bn(t){return t.Eu||(t.Eu=function(e,n,r){const i=ee(e);return i.ru(),new sA(n,i.connection,i.authCredentials,i.appCheckCredentials,i.Tt,r)}(t.datastore,t.asyncQueue,{Xr:hA.bind(null,t),no:pA.bind(null,t),nu:dA.bind(null,t),eu:fA.bind(null,t)}),t.gu.push(async e=>{e?(t.Eu.$o(),await eu(t)):(await t.Eu.stop(),t._u.length>0&&(x("RemoteStore",`Stopping write stream with ${t._u.length} pending writes`),t._u=[]))})),t.Eu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new cr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new df(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new F(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function $1(t,e){if(Sr("AsyncQueue",`${e}: ${t}`),ql(t))return new F(k.UNAVAILABLE,`${e}: ${t}`);throw t}class gA{constructor(){this.queries=new Ci(e=>m1(e),p1),this.onlineState="Unknown",this.vu=new Set}}function yA(t){t.vu.forEach(e=>{e.next()})}class vA{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.rc={},this.oc=new Ci(a=>m1(a),p1),this.uc=new Map,this.cc=new Set,this.ac=new ot(b.comparator),this.hc=new Map,this.lc=new uf,this.fc={},this.dc=new Map,this._c=mi.Sn(),this.onlineState="Unknown",this.wc=void 0}get isPrimaryClient(){return this.wc===!0}}async function wA(t,e,n){const r=TA(t);try{const i=await function(s,o){const a=ee(s),l=Ie.now(),u=o.reduce((p,g)=>p.add(g.key),Ve());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",p=>{let g=ul(),y=Ve();return a.ji.getEntries(p,u).next(v=>{g=v,g.forEach((E,f)=>{f.isValidDocument()||(y=y.add(E))})}).next(()=>a.localDocuments.getOverlayedDocuments(p,g)).next(v=>{c=v;const E=[];for(const f of o){const d=uR(f,c.get(f.key).overlayedDocument);d!=null&&E.push(new Nr(f.key,d,f1(d.value.mapValue),Jt.exists(!0)))}return a.mutationQueue.addMutationBatch(p,l,E,o)}).next(v=>{h=v;const E=v.applyToLocalDocumentSet(c,y);return a.documentOverlayCache.saveOverlays(p,v.batchId,E)})}).then(()=>({batchId:h.batchId,changes:C1(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.fc[s.currentUser.toKey()];l||(l=new ot(Q)),l=l.insert(o,a),s.fc[s.currentUser.toKey()]=l}(r,i.batchId,n),await tu(r,i.changes),await eu(r.remoteStore)}catch(i){const s=$1(i,"Failed to persist write");n.reject(s)}}function jm(t,e,n){const r=ee(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.oc.forEach((s,o)=>{const a=o.view.Pu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=ee(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.Pu(o)&&(l=!0)}),l&&yA(a)}(r.eventManager,e),i.length&&r.rc.Ho(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function EA(t,e){const n=ee(t),r=e.batch.batchId;try{const i=await XR(n.localStore,e);F1(n,r,null),U1(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await tu(n,i)}catch(i){await i1(i)}}async function _A(t,e,n){const r=ee(t);try{const i=await function(s,o){const a=ee(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(ve(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);F1(r,e,n),U1(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await tu(r,i)}catch(i){await i1(i)}}function U1(t,e){(t.dc.get(e)||[]).forEach(n=>{n.resolve()}),t.dc.delete(e)}function F1(t,e,n){const r=ee(t);let i=r.fc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.fc[r.currentUser.toKey()]=i}}async function tu(t,e,n){const r=ee(t),i=[],s=[],o=[];r.oc.isEmpty()||(r.oc.forEach((a,l)=>{o.push(r.mc(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=hf.Ni(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.rc.Ho(i),await async function(a,l){const u=ee(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>I.forEach(l,h=>I.forEach(h.Ci,p=>u.persistence.referenceDelegate.addReference(c,h.targetId,p)).next(()=>I.forEach(h.xi,p=>u.persistence.referenceDelegate.removeReference(c,h.targetId,p)))))}catch(c){if(!ql(c))throw c;x("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const p=u.Ki.get(h),g=p.snapshotVersion,y=p.withLastLimboFreeSnapshotVersion(g);u.Ki=u.Ki.insert(h,y)}}}(r.localStore,s))}async function SA(t,e){const n=ee(t);if(!n.currentUser.isEqual(e)){x("SyncEngine","User change. New user:",e.toKey());const r=await P1(n.localStore,e);n.currentUser=e,function(i,s){i.dc.forEach(o=>{o.forEach(a=>{a.reject(new F(k.CANCELLED,s))})}),i.dc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await tu(n,r.Wi)}}function TA(t){const e=ee(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=EA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=_A.bind(null,e),e}class IA{constructor(){this.synchronizeTabs=!1}async initialize(e){this.Tt=Jl(e.databaseInfo.databaseId),this.sharedClientState=this.Ic(e),this.persistence=this.Tc(e),await this.persistence.start(),this.localStore=this.Ec(e),this.gcScheduler=this.Ac(e,this.localStore),this.indexBackfillerScheduler=this.Rc(e,this.localStore)}Ac(e,n){return null}Rc(e,n){return null}Ec(e){return QR(this.persistence,new GR,e.initialUser,this.Tt)}Tc(e){return new WR(cf.qs,this.Tt)}Ic(e){return new ZR}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class kA{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>jm(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=SA.bind(null,this.syncEngine),await mA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new gA}createDatastore(e){const n=Jl(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new rA(i));var i;return function(s,o,a,l){return new oA(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>jm(this.syncEngine,a,0),o=Vm.C()?new Vm:new eA,new lA(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new vA(r,i,s,o,a,l);return u&&(c.wc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=ee(e);x("RemoteStore","RemoteStore shutting down."),n.mu.add(5),await wo(n),n.yu.shutdown(),n.pu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CA{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Fe.UNAUTHENTICATED,this.clientId=r1.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{x("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(x("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new F(k.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new cr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=$1(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function NA(t,e){t.asyncQueue.verifyOperationInProgress(),x("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await P1(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function RA(t,e){t.asyncQueue.verifyOperationInProgress();const n=await AA(t);x("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>Bm(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>Bm(e.remoteStore,s)),t.onlineComponents=e}async function AA(t){return t.offlineComponents||(x("FirestoreClient","Using default OfflineComponentProvider"),await NA(t,new IA)),t.offlineComponents}async function PA(t){return t.onlineComponents||(x("FirestoreClient","Using default OnlineComponentProvider"),await RA(t,new kA)),t.onlineComponents}function DA(t){return PA(t).then(e=>e.syncEngine)}const zm=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OA(t,e,n){if(!n)throw new F(k.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function xA(t,e,n,r){if(e===!0&&r===!0)throw new F(k.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Hm(t){if(!b.isDocumentKey(t))throw new F(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ff(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":j()}function Sh(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new F(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ff(t);throw new F(k.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new F(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new F(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,xA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Wm({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new F(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new F(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Wm(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new wN;switch(n.type){case"gapi":const r=n.client;return new TN(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new F(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=zm.get(e);n&&(x("ComponentProvider","Removing Datastore"),zm.delete(e),n.terminate())}(this),Promise.resolve()}}function LA(t,e,n,r={}){var i;const s=(t=Sh(t,pf))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&mh("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=Fe.MOCK_USER;else{o=KS(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new F(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Fe(l)}t._authCredentials=new EN(new n1(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Bs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Zt(this.firestore,e,this._key)}}class mf{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new mf(this.firestore,e,this._query)}}class Bs extends mf{constructor(e,n,r){super(e,n,XN(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Zt(this.firestore,null,new b(e))}withConverter(e){return new Bs(this.firestore,e,this._path)}}function MA(t,e,...n){if(t=St(t),arguments.length===1&&(e=r1.R()),OA("doc","path",e),t instanceof pf){const r=de.fromString(e,...n);return Hm(r),new Zt(t,null,new b(r))}{if(!(t instanceof Zt||t instanceof Bs))throw new F(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(de.fromString(e,...n));return Hm(r),new Zt(t.firestore,t instanceof Bs?t.converter:null,new b(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $A{constructor(){this.qc=Promise.resolve(),this.Uc=[],this.Kc=!1,this.Gc=[],this.Qc=null,this.jc=!1,this.zc=!1,this.Wc=[],this.ko=new D1(this,"async_queue_retry"),this.Hc=()=>{const n=Qu();n&&x("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ko.Vo()};const e=Qu();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Jc(),this.Yc(e)}enterRestrictedMode(e){if(!this.Kc){this.Kc=!0,this.zc=e||!1;const n=Qu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Hc)}}enqueue(e){if(this.Jc(),this.Kc)return new Promise(()=>{});const n=new cr;return this.Yc(()=>this.Kc&&this.zc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Uc.push(e),this.Zc()))}async Zc(){if(this.Uc.length!==0){try{await this.Uc[0](),this.Uc.shift(),this.ko.reset()}catch(e){if(!ql(e))throw e;x("AsyncQueue","Operation failed with retryable error: "+e)}this.Uc.length>0&&this.ko.vo(()=>this.Zc())}}Yc(e){const n=this.qc.then(()=>(this.jc=!0,e().catch(r=>{this.Qc=r,this.jc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Sr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.jc=!1,r))));return this.qc=n,n}enqueueAfterDelay(e,n,r){this.Jc(),this.Wc.indexOf(e)>-1&&(n=0);const i=df.createAndSchedule(this,e,n,r,s=>this.Xc(s));return this.Gc.push(i),i}Jc(){this.Qc&&j()}verifyOperationInProgress(){}async ta(){let e;do e=this.qc,await e;while(e!==this.qc)}ea(e){for(const n of this.Gc)if(n.timerId===e)return!0;return!1}na(e){return this.ta().then(()=>{this.Gc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Gc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ta()})}sa(e){this.Wc.push(e)}Xc(e){const n=this.Gc.indexOf(e);this.Gc.splice(n,1)}}class b1 extends pf{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new $A,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||V1(this),this._firestoreClient.terminate()}}function UA(t,e){const n=typeof t=="object"?t:Ev(),r=typeof t=="string"?t:e||"(default)",i=Td(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=zS("firestore");s&&LA(i,...s)}return i}function FA(t){return t._firestoreClient||V1(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function V1(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new xN(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new CA(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e){this._byteString=e}static fromBase64String(e){try{return new js(an.fromBase64String(e))}catch(n){throw new F(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new js(an.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B1{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new F(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Be(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j1{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new F(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new F(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Q(this._lat,e._lat)||Q(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bA=/^__.*__$/;class VA{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Nr(e,this.data,this.fieldMask,n,this.fieldTransforms):new vo(e,this.data,n,this.fieldTransforms)}}function z1(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw j()}}class yf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.Tt=r,this.ignoreUndefinedProperties=i,s===void 0&&this.ia(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ra(){return this.settings.ra}oa(e){return new yf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.Tt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ua(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.oa({path:r,ca:!1});return i.aa(e),i}ha(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.oa({path:r,ca:!1});return i.ia(),i}la(e){return this.oa({path:void 0,ca:!0})}fa(e){return cl(e,this.settings.methodName,this.settings.da||!1,this.path,this.settings._a)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ia(){if(this.path)for(let e=0;e<this.path.length;e++)this.aa(this.path.get(e))}aa(e){if(e.length===0)throw this.fa("Document fields must not be empty");if(z1(this.ra)&&bA.test(e))throw this.fa('Document fields cannot begin and end with "__"')}}class BA{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.Tt=r||Jl(e)}wa(e,n,r,i=!1){return new yf({ra:e,methodName:n,_a:r,path:Be.emptyPath(),ca:!1,da:i},this.databaseId,this.Tt,this.ignoreUndefinedProperties)}}function jA(t){const e=t._freezeSettings(),n=Jl(t._databaseId);return new BA(t._databaseId,!!e.ignoreUndefinedProperties,n)}function zA(t,e,n,r,i,s={}){const o=t.wa(s.merge||s.mergeFields?2:0,e,n,i);G1("Data must be an object, but it was:",o,r);const a=W1(r,o);let l,u;if(s.merge)l=new At(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const p=HA(e,h,n);if(!o.contains(p))throw new F(k.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);GA(c,p)||c.push(p)}l=new At(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new VA(new Rt(a),l,u)}class vf extends gf{_toFieldTransform(e){return new sR(e.path,new Fs)}isEqual(e){return e instanceof vf}}function H1(t,e){if(K1(t=St(t)))return G1("Unsupported field value:",e,t),W1(t,e);if(t instanceof gf)return function(n,r){if(!z1(r.ra))throw r.fa(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.fa(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ca&&e.ra!==4)throw e.fa("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=H1(o,r.la(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=St(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return nR(r.Tt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Ie.fromDate(n);return{timestampValue:Eh(r.Tt,i)}}if(n instanceof Ie){const i=new Ie(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Eh(r.Tt,i)}}if(n instanceof j1)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof js)return{bytesValue:wR(r.Tt,n._byteString)};if(n instanceof Zt){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.fa(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:R1(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.fa(`Unsupported field value: ${ff(n)}`)}(t,e)}function W1(t,e){const n={};return o1(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):yo(t,(r,i)=>{const s=H1(i,e.ua(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function K1(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ie||t instanceof j1||t instanceof js||t instanceof Zt||t instanceof gf)}function G1(t,e,n){if(!K1(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=ff(n);throw r==="an object"?e.fa(t+" a custom object"):e.fa(t+" "+r)}}function HA(t,e,n){if((e=St(e))instanceof B1)return e._internalPath;if(typeof e=="string")return KA(t,e);throw cl("Field path arguments must be of type string or ",t,!1,void 0,n)}const WA=new RegExp("[~\\*/\\[\\]]");function KA(t,e,n){if(e.search(WA)>=0)throw cl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new B1(...e.split("."))._internalPath}catch{throw cl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function cl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new F(k.INVALID_ARGUMENT,a+t+l)}function GA(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qA(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}function QA(t,e,n){t=Sh(t,Zt);const r=Sh(t.firestore,b1),i=qA(t.converter,e,n);return XA(r,[zA(jA(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Jt.none())])}function XA(t,e){return function(n,r){const i=new cr;return n.asyncQueue.enqueueAndForget(async()=>wA(await DA(n),r,i)),i.promise}(FA(t),e)}function YA(){return new vf("serverTimestamp")}(function(t,e=!0){(function(n){ki=n})(eo),ai(new yr("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new b1(new _N(n.getProvider("auth-internal")),new kN(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new F(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new il(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Mn(Im,"3.8.4",t),Mn(Im,"3.8.4","esm2017")})();var JA="firebase",ZA="9.17.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Mn(JA,ZA,"app");const eP={apiKey:"AIzaSyBwR0n2oO7BEiKoaKlGg9uq2DdWlXTx3bs",authDomain:"cyber-estate.firebaseapp.com",projectId:"cyber-estate",storageBucket:"cyber-estate.appspot.com",messagingSenderId:"347787783667",appId:"1:347787783667:web:5056e0088f4aadf8e87686"};wv(eP);const tP=UA();function nP(){const[t,e]=S.useState(!1),[n,r]=S.useState({name:"",email:"",password:""}),{name:i,email:s,password:o}=n,a=Ys(),l=c=>{r(h=>({...h,[c.target.id]:c.target.value}))};return O(Nh,{children:Pe("div",{className:"pageContainer",children:[O("header",{children:O("p",{className:"pageHeader",children:"Welcome Back!"})}),Pe("main",{children:[Pe("form",{onSubmit:async c=>{c.preventDefault();try{const h=xd(),g=(await XI(h,s,o)).user;ZI(h.currentUser,{displayName:i});const y={...n};delete y.password,y.timestamp=YA(),await QA(MA(tP,"users",g.uid),y),a("/")}catch{J.error("Something went wrong")}},children:[O("input",{type:"text",className:"nameInput",placeholder:"Name",id:"name",value:i,onChange:l}),O("input",{type:"email",placeholder:"Email",id:"email",value:s,onChange:l,className:"emailInput"}),Pe("div",{className:"passwordInputDiv",children:[O("input",{type:t?"text":"password",className:"passwordInput",placeholder:"Password",id:"password",value:o,onChange:l}),O("img",{src:Zv,alt:"show password",className:"showPassword",onClick:c=>e(!c)})]}),O(Ba,{to:"/forgot-password",className:"forgotPasswordLink",children:"Forgot Password"}),Pe("div",{className:"signUpBar",children:[O("p",{className:"signUpText",children:"Sign Up"}),O("button",{className:"signUpButton",children:O("img",{src:Jv,alt:"arrow",style:{fill:"white"}})})]})]}),O(Ba,{to:"/cyber-estate/sign-in",className:"registerLink",children:"Sign In Instead"})]})]})})}function rP(){return O("div",{children:"ForgotPassword"})}var q1={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Km=H.createContext&&H.createContext(q1),$n=globalThis&&globalThis.__assign||function(){return $n=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},$n.apply(this,arguments)},iP=globalThis&&globalThis.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};function Q1(t){return t&&t.map(function(e,n){return H.createElement(e.tag,$n({key:n},e.attr),Q1(e.child))})}function wf(t){return function(e){return H.createElement(sP,$n({attr:$n({},t.attr)},e),Q1(t.child))}}function sP(t){var e=function(n){var r=t.attr,i=t.size,s=t.title,o=iP(t,["attr","size","title"]),a=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),H.createElement("svg",$n({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:$n($n({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&H.createElement("title",null,s),t.children)};return Km!==void 0?H.createElement(Km.Consumer,null,function(n){return e(n)}):e(q1)}function oP(t){return wf({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M938 458.8l-29.6-312.6c-1.5-16.2-14.4-29-30.6-30.6L565.2 86h-.4c-3.2 0-5.7 1-7.6 2.9L88.9 557.2a9.96 9.96 0 0 0 0 14.1l363.8 363.8c1.9 1.9 4.4 2.9 7.1 2.9s5.2-1 7.1-2.9l468.3-468.3c2-2.1 3-5 2.8-8zM459.7 834.7L189.3 564.3 589 164.6 836 188l23.4 247-399.7 399.7zM680 256c-48.5 0-88 39.5-88 88s39.5 88 88 88 88-39.5 88-88-39.5-88-88-88zm0 120c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"}}]})(t)}function aP(t){return wf({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"}}]})(t)}function lP(t){return wf({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"}}]})(t)}function uP(){const t=Ys(),e=Xs(),n=r=>{if(r===e.pathname)return!0};return O("footer",{className:"navbar",children:O("nav",{className:"navbarNav",children:Pe("ul",{className:"navbarListItems",children:[Pe("li",{className:"navbarListItem",children:[O(aP,{size:25,fill:n("/cyber-estate")?"#2c2c2c":"#8f8f8f",onClick:()=>t("/cyber-estate")}),O("p",{className:n("/cyber-estate")?"navbarListItemNameActive":"navbarListItemName",children:"Explore"})]}),Pe("li",{className:"navbarListItem",onClick:()=>t("/cyber-estate/offers"),children:[O(oP,{size:25,fill:n("/cyber-estate/offers")?"#2c2c2c":"#8f8f8f",width:"36px",height:"36px"}),O("p",{className:n("/cyber-estate/offers")?"navbarListItemNameActive":"navbarListItemName",children:"Offer"})]}),Pe("li",{className:"navbarListItem",onClick:()=>t("/cyber-estate/profile"),children:[O(lP,{size:25,fill:n("/cyber-estate/profile")?"#2c2c2c":"#8f8f8f",width:"36px",height:"36px"}),O("p",{className:n("/cyber-estate/profile")?"navbarListItemNameActive":"navbarListItemName",children:"Profile"})]})]})})})}function cP(){return Pe(Nh,{children:[Pe(SS,{children:[Pe(yS,{children:[O(Yn,{path:"/cyber-estate",element:O(LS,{})}),O(Yn,{path:"/cyber-estate/offers",element:O(MS,{})}),O(Yn,{path:"/cyber-estate/profile",element:O(mC,{})}),O(Yn,{path:"/cyber-estate/sign-in",element:O(gC,{})}),O(Yn,{path:"/cyber-estate/sign-up",element:O(nP,{})}),O(Yn,{path:"/cyber-estate/forgot-password",element:O(rP,{})})]}),O(uP,{})]}),O(Xc,{})]})}Yu.createRoot(document.getElementById("root")).render(O(H.StrictMode,{children:O(cP,{})}));
