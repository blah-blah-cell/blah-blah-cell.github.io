(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))s(u);new MutationObserver(u=>{for(const f of u)if(f.type==="childList")for(const d of f.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function a(u){const f={};return u.integrity&&(f.integrity=u.integrity),u.referrerPolicy&&(f.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?f.credentials="include":u.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function s(u){if(u.ep)return;u.ep=!0;const f=a(u);fetch(u.href,f)}})();function px(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var ch={exports:{}},al={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sv;function Xy(){if(sv)return al;sv=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function a(s,u,f){var d=null;if(f!==void 0&&(d=""+f),u.key!==void 0&&(d=""+u.key),"key"in u){f={};for(var h in u)h!=="key"&&(f[h]=u[h])}else f=u;return u=f.ref,{$$typeof:o,type:s,key:d,ref:u!==void 0?u:null,props:f}}return al.Fragment=e,al.jsx=a,al.jsxs=a,al}var ov;function ky(){return ov||(ov=1,ch.exports=Xy()),ch.exports}var nt=ky(),fh={exports:{}},le={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lv;function Wy(){if(lv)return le;lv=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),_=Symbol.for("react.view_transition"),E=Symbol.iterator;function R(z){return z===null||typeof z!="object"?null:(z=E&&z[E]||z["@@iterator"],typeof z=="function"?z:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,S={};function O(z,mt,Tt){this.props=z,this.context=mt,this.refs=S,this.updater=Tt||w}O.prototype.isReactComponent={},O.prototype.setState=function(z,mt){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,mt,"setState")},O.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function X(){}X.prototype=O.prototype;function C(z,mt,Tt){this.props=z,this.context=mt,this.refs=S,this.updater=Tt||w}var N=C.prototype=new X;N.constructor=C,M(N,O.prototype),N.isPureReactComponent=!0;var U=Array.isArray;function P(){}var b={H:null,A:null,T:null,S:null},L=Object.prototype.hasOwnProperty;function H(z,mt,Tt){var Z=Tt.ref;return{$$typeof:o,type:z,key:mt,ref:Z!==void 0?Z:null,props:Tt}}function q(z,mt){return H(z.type,mt,z.props)}function tt(z){return typeof z=="object"&&z!==null&&z.$$typeof===o}function ut(z){var mt={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(Tt){return mt[Tt]})}var j=/\/+/g;function $(z,mt){return typeof z=="object"&&z!==null&&z.key!=null?ut(""+z.key):mt.toString(36)}function W(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(P,P):(z.status="pending",z.then(function(mt){z.status==="pending"&&(z.status="fulfilled",z.value=mt)},function(mt){z.status==="pending"&&(z.status="rejected",z.reason=mt)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function k(z,mt,Tt,Z,dt){var At=typeof z;(At==="undefined"||At==="boolean")&&(z=null);var wt=!1;if(z===null)wt=!0;else switch(At){case"bigint":case"string":case"number":wt=!0;break;case"object":switch(z.$$typeof){case o:case e:wt=!0;break;case x:return wt=z._init,k(wt(z._payload),mt,Tt,Z,dt)}}if(wt)return dt=dt(z),wt=Z===""?"."+$(z,0):Z,U(dt)?(Tt="",wt!=null&&(Tt=wt.replace(j,"$&/")+"/"),k(dt,mt,Tt,"",function(be){return be})):dt!=null&&(tt(dt)&&(dt=q(dt,Tt+(dt.key==null||z&&z.key===dt.key?"":(""+dt.key).replace(j,"$&/")+"/")+wt)),mt.push(dt)),1;wt=0;var gt=Z===""?".":Z+":";if(U(z))for(var Rt=0;Rt<z.length;Rt++)Z=z[Rt],At=gt+$(Z,Rt),wt+=k(Z,mt,Tt,At,dt);else if(Rt=R(z),typeof Rt=="function")for(z=Rt.call(z),Rt=0;!(Z=z.next()).done;)Z=Z.value,At=gt+$(Z,Rt++),wt+=k(Z,mt,Tt,At,dt);else if(At==="object"){if(typeof z.then=="function")return k(W(z),mt,Tt,Z,dt);throw mt=String(z),Error("Objects are not valid as a React child (found: "+(mt==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":mt)+"). If you meant to render a collection of children, use an array instead.")}return wt}function ft(z,mt,Tt){if(z==null)return z;var Z=[],dt=0;return k(z,Z,"","",function(At){return mt.call(Tt,At,dt++)}),Z}function ot(z){if(z._status===-1){var mt=z._result,Tt=mt();Tt.then(function(Z){(z._status===0||z._status===-1)&&(z._status=1,z._result=Z,Tt.status===void 0&&(Tt.status="fulfilled",Tt.value=Z))},function(Z){(z._status===0||z._status===-1)&&(z._status=2,z._result=Z,Tt.status===void 0&&(Tt.status="rejected",Tt.reason=Z))}),z._status===-1&&(z._status=0,z._result=Tt)}if(z._status===1)return z._result.default;throw z._result}var pt=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var mt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(mt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)};function _t(z){var mt=b.T,Tt={};Tt.types=mt!==null?mt.types:null,b.T=Tt;try{var Z=z(),dt=b.S;dt!==null&&dt(Tt,Z),typeof Z=="object"&&Z!==null&&typeof Z.then=="function"&&Z.then(P,pt)}catch(At){pt(At)}finally{mt!==null&&Tt.types!==null&&(mt.types=Tt.types),b.T=mt}}function Bt(z){var mt=b.T;if(mt!==null){var Tt=mt.types;Tt===null?mt.types=[z]:Tt.indexOf(z)===-1&&Tt.push(z)}else _t(Bt.bind(null,z))}var Nt={map:ft,forEach:function(z,mt,Tt){ft(z,function(){mt.apply(this,arguments)},Tt)},count:function(z){var mt=0;return ft(z,function(){mt++}),mt},toArray:function(z){return ft(z,function(mt){return mt})||[]},only:function(z){if(!tt(z))throw Error("React.Children.only expected to receive a single React element child.");return z}};return le.Activity=v,le.Children=Nt,le.Component=O,le.Fragment=a,le.Profiler=u,le.PureComponent=C,le.StrictMode=s,le.Suspense=m,le.ViewTransition=_,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=b,le.__COMPILER_RUNTIME={__proto__:null,c:function(z){return b.H.useMemoCache(z)}},le.addTransitionType=Bt,le.cache=function(z){return function(){return z.apply(null,arguments)}},le.cacheSignal=function(){return null},le.cloneElement=function(z,mt,Tt){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var Z=M({},z.props),dt=z.key;if(mt!=null)for(At in mt.key!==void 0&&(dt=""+mt.key),mt)!L.call(mt,At)||At==="key"||At==="__self"||At==="__source"||At==="ref"&&mt.ref===void 0||(Z[At]=mt[At]);var At=arguments.length-2;if(At===1)Z.children=Tt;else if(1<At){for(var wt=Array(At),gt=0;gt<At;gt++)wt[gt]=arguments[gt+2];Z.children=wt}return H(z.type,dt,Z)},le.createContext=function(z){return z={$$typeof:d,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:f,_context:z},z},le.createElement=function(z,mt,Tt){var Z,dt={},At=null;if(mt!=null)for(Z in mt.key!==void 0&&(At=""+mt.key),mt)L.call(mt,Z)&&Z!=="key"&&Z!=="__self"&&Z!=="__source"&&(dt[Z]=mt[Z]);var wt=arguments.length-2;if(wt===1)dt.children=Tt;else if(1<wt){for(var gt=Array(wt),Rt=0;Rt<wt;Rt++)gt[Rt]=arguments[Rt+2];dt.children=gt}if(z&&z.defaultProps)for(Z in wt=z.defaultProps,wt)dt[Z]===void 0&&(dt[Z]=wt[Z]);return H(z,At,dt)},le.createRef=function(){return{current:null}},le.forwardRef=function(z){return{$$typeof:h,render:z}},le.isValidElement=tt,le.lazy=function(z){return{$$typeof:x,_payload:{_status:-1,_result:z},_init:ot}},le.memo=function(z,mt){return{$$typeof:p,type:z,compare:mt===void 0?null:mt}},le.startTransition=_t,le.unstable_useCacheRefresh=function(){return b.H.useCacheRefresh()},le.use=function(z){return b.H.use(z)},le.useActionState=function(z,mt,Tt){return b.H.useActionState(z,mt,Tt)},le.useCallback=function(z,mt){return b.H.useCallback(z,mt)},le.useContext=function(z){return b.H.useContext(z)},le.useDebugValue=function(){},le.useDeferredValue=function(z,mt){return b.H.useDeferredValue(z,mt)},le.useEffect=function(z,mt){return b.H.useEffect(z,mt)},le.useEffectEvent=function(z){return b.H.useEffectEvent(z)},le.useId=function(){return b.H.useId()},le.useImperativeHandle=function(z,mt,Tt){return b.H.useImperativeHandle(z,mt,Tt)},le.useInsertionEffect=function(z,mt){return b.H.useInsertionEffect(z,mt)},le.useLayoutEffect=function(z,mt){return b.H.useLayoutEffect(z,mt)},le.useMemo=function(z,mt){return b.H.useMemo(z,mt)},le.useOptimistic=function(z,mt){return b.H.useOptimistic(z,mt)},le.useReducer=function(z,mt,Tt){return b.H.useReducer(z,mt,Tt)},le.useRef=function(z){return b.H.useRef(z)},le.useState=function(z){return b.H.useState(z)},le.useSyncExternalStore=function(z,mt,Tt){return b.H.useSyncExternalStore(z,mt,Tt)},le.useTransition=function(){return b.H.useTransition()},le.version="19.3.0",le}var uv;function Bp(){return uv||(uv=1,fh.exports=Wy()),fh.exports}var Tn=Bp();const qy=px(Tn);var dh={exports:{}},rl={},hh={exports:{}},ph={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cv;function Yy(){return cv||(cv=1,(function(o){function e(W,k){var ft=W.length;W.push(k);t:for(;0<ft;){var ot=ft-1>>>1,pt=W[ot];if(0<u(pt,k))W[ot]=k,W[ft]=pt,ft=ot;else break t}}function a(W){return W.length===0?null:W[0]}function s(W){if(W.length===0)return null;var k=W[0],ft=W.pop();if(ft!==k){W[0]=ft;t:for(var ot=0,pt=W.length,_t=pt>>>1;ot<_t;){var Bt=2*(ot+1)-1,Nt=W[Bt],z=Bt+1,mt=W[z];if(0>u(Nt,ft))z<pt&&0>u(mt,Nt)?(W[ot]=mt,W[z]=ft,ot=z):(W[ot]=Nt,W[Bt]=ft,ot=Bt);else if(z<pt&&0>u(mt,ft))W[ot]=mt,W[z]=ft,ot=z;else break t}}return k}function u(W,k){var ft=W.sortIndex-k.sortIndex;return ft!==0?ft:W.id-k.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var m=[],p=[],x=1,v=null,_=3,E=!1,R=!1,w=!1,M=!1,S=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,X=typeof setImmediate<"u"?setImmediate:null;function C(W){for(var k=a(p);k!==null;){if(k.callback===null)s(p);else if(k.startTime<=W)s(p),k.sortIndex=k.expirationTime,e(m,k);else break;k=a(p)}}function N(W){if(w=!1,C(W),!R)if(a(m)!==null)R=!0,U||(U=!0,tt());else{var k=a(p);k!==null&&$(N,k.startTime-W)}}var U=!1,P=-1,b=5,L=-1;function H(){return M?!0:!(o.unstable_now()-L<b)}function q(){if(M=!1,U){var W=o.unstable_now();L=W;var k=!0;try{t:{R=!1,w&&(w=!1,O(P),P=-1),E=!0;var ft=_;try{e:{for(C(W),v=a(m);v!==null&&!(v.expirationTime>W&&H());){var ot=v.callback;if(typeof ot=="function"){v.callback=null,_=v.priorityLevel;var pt=ot(v.expirationTime<=W);if(W=o.unstable_now(),typeof pt=="function"){v.callback=pt,C(W),k=!0;break e}v===a(m)&&s(m),C(W)}else s(m);v=a(m)}if(v!==null)k=!0;else{var _t=a(p);_t!==null&&$(N,_t.startTime-W),k=!1}}break t}finally{v=null,_=ft,E=!1}k=void 0}}finally{k?tt():U=!1}}}var tt;if(typeof X=="function")tt=function(){X(q)};else if(typeof MessageChannel<"u"){var ut=new MessageChannel,j=ut.port2;ut.port1.onmessage=q,tt=function(){j.postMessage(null)}}else tt=function(){S(q,0)};function $(W,k){P=S(function(){W(o.unstable_now())},k)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(W){W.callback=null},o.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<W?Math.floor(1e3/W):5},o.unstable_getCurrentPriorityLevel=function(){return _},o.unstable_next=function(W){switch(_){case 1:case 2:case 3:var k=3;break;default:k=_}var ft=_;_=k;try{return W()}finally{_=ft}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(W,k){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var ft=_;_=W;try{return k()}finally{_=ft}},o.unstable_scheduleCallback=function(W,k,ft){var ot=o.unstable_now();switch(typeof ft=="object"&&ft!==null?(ft=ft.delay,ft=typeof ft=="number"&&0<ft?ot+ft:ot):ft=ot,W){case 1:var pt=-1;break;case 2:pt=250;break;case 5:pt=1073741823;break;case 4:pt=1e4;break;default:pt=5e3}return pt=ft+pt,W={id:x++,callback:k,priorityLevel:W,startTime:ft,expirationTime:pt,sortIndex:-1},ft>ot?(W.sortIndex=ft,e(p,W),a(m)===null&&W===a(p)&&(w?(O(P),P=-1):w=!0,$(N,ft-ot))):(W.sortIndex=pt,e(m,W),R||E||(R=!0,U||(U=!0,tt()))),W},o.unstable_shouldYield=H,o.unstable_wrapCallback=function(W){var k=_;return function(){var ft=_;_=k;try{return W.apply(this,arguments)}finally{_=ft}}}})(ph)),ph}var fv;function Zy(){return fv||(fv=1,hh.exports=Yy()),hh.exports}var mh={exports:{}},Dn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dv;function Ky(){if(dv)return Dn;dv=1;var o=Bp();function e(x){var v="https://react.dev/errors/"+x;if(1<arguments.length){v+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)v+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+x+"; visit "+v+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(){}var s={d:{f:a,r:function(){throw Error(e(522))},D:a,C:a,L:a,m:a,X:a,S:a,M:a},p:0,findDOMNode:null},u=Symbol.for("react.portal"),f=Symbol.for("react.recoverable"),d=Symbol.for("react.optimistic_key");function h(x,v,_){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:E==null?null:E===d?d:""+E,children:x,containerInfo:v,implementation:_}}var m=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(x,v){if(x==="font")return"";if(typeof v=="string")return v==="use-credentials"?v:""}return Dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Dn.browser=function(x){return{$$typeof:f,_reason:x}},Dn.createPortal=function(x,v){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!v||v.nodeType!==1&&v.nodeType!==9&&v.nodeType!==11)throw Error(e(299));return h(x,v,null,_)},Dn.flushSync=function(x){var v=m.T,_=s.p;try{if(m.T=null,s.p=2,x)return x()}finally{m.T=v,s.p=_,s.d.f()}},Dn.preconnect=function(x,v){typeof x=="string"&&(v?(v=v.crossOrigin,v=typeof v=="string"?v==="use-credentials"?v:"":void 0):v=null,s.d.C(x,v))},Dn.prefetchDNS=function(x){typeof x=="string"&&s.d.D(x)},Dn.preinit=function(x,v){if(typeof x=="string"&&v&&typeof v.as=="string"){var _=v.as,E=p(_,v.crossOrigin),R=typeof v.integrity=="string"?v.integrity:void 0,w=typeof v.fetchPriority=="string"?v.fetchPriority:void 0;_==="style"?s.d.S(x,typeof v.precedence=="string"?v.precedence:void 0,{crossOrigin:E,integrity:R,fetchPriority:w}):_==="script"&&s.d.X(x,{crossOrigin:E,integrity:R,fetchPriority:w,nonce:typeof v.nonce=="string"?v.nonce:void 0})}},Dn.preinitModule=function(x,v){if(typeof x=="string")if(typeof v=="object"&&v!==null){if(v.as==null||v.as==="script"){var _=p(v.as,v.crossOrigin);s.d.M(x,{crossOrigin:_,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0})}}else v==null&&s.d.M(x)},Dn.preload=function(x,v){if(typeof x=="string"&&typeof v=="object"&&v!==null&&typeof v.as=="string"){var _=v.as,E=p(_,v.crossOrigin);s.d.L(x,_,{crossOrigin:E,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,type:typeof v.type=="string"?v.type:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0,referrerPolicy:typeof v.referrerPolicy=="string"?v.referrerPolicy:void 0,imageSrcSet:typeof v.imageSrcSet=="string"?v.imageSrcSet:void 0,imageSizes:typeof v.imageSizes=="string"?v.imageSizes:void 0,media:typeof v.media=="string"?v.media:void 0})}},Dn.preloadModule=function(x,v){if(typeof x=="string")if(v){var _=p(v.as,v.crossOrigin);s.d.m(x,{as:typeof v.as=="string"&&v.as!=="script"?v.as:void 0,crossOrigin:_,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0})}else s.d.m(x)},Dn.requestFormReset=function(x){s.d.r(x)},Dn.unstable_batchedUpdates=function(x,v){return x(v)},Dn.useFormState=function(x,v,_){return m.H.useFormState(x,v,_)},Dn.useFormStatus=function(){return m.H.useHostTransitionStatus()},Dn.version="19.3.0",Dn}var hv;function jy(){if(hv)return mh.exports;hv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),mh.exports=Ky(),mh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pv;function Qy(){if(pv)return rl;pv=1;var o=Zy(),e=Bp(),a=jy();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)n+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function f(t){for(var n=t,i=n;i&&!i.alternate;)n=i,(n.flags&4098)!==0&&(t=n.return),i=n.return;for(;n.return;)n=n.return;return n.tag===3?t:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(f(t)!==t)throw Error(s(188))}function p(t){var n=t.alternate;if(!n){if(n=f(t),n===null)throw Error(s(188));return n!==t?null:t}for(var i=t,r=n;;){var l=i.return;if(l===null)break;var c=l.alternate;if(c===null){if(r=l.return,r!==null){i=r;continue}break}if(l.child===c.child){for(c=l.child;c;){if(c===i)return m(l),t;if(c===r)return m(l),n;c=c.sibling}throw Error(s(188))}if(i.return!==r.return)i=l,r=c;else{for(var g=!1,A=l.child;A;){if(A===i){g=!0,i=l,r=c;break}if(A===r){g=!0,r=l,i=c;break}A=A.sibling}if(!g){for(A=c.child;A;){if(A===i){g=!0,i=c,r=l;break}if(A===r){g=!0,r=c,i=l;break}A=A.sibling}if(!g)throw Error(s(189))}}if(i.alternate!==r)throw Error(s(190))}if(i.tag!==3)throw Error(s(188));return i.stateNode.current===i?t:n}function x(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=x(t),n!==null)return n;t=t.sibling}return null}function v(t,n,i,r,l,c){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&i(t,r,l,c)||(t.tag!==22||t.memoizedState===null)&&(n||t.tag!==5&&t.tag!==27)&&v(t.child,n,i,r,l,c))return!0;t=t.sibling}return!1}function _(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function E(t){var n=!1;for(t=t.return;t!==null&&(t.tag===4&&(n=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return n}function R(t){var n=[null,null],i=_(t);return i===null||w(n,t,i.child,{foundSelf:!1}),n}function w(t,n,i,r){for(;i!==null;){if(i===n)r.foundSelf=!0;else if(i.tag===5||i.tag===27||i.tag===6){if(r.foundSelf)return t[1]=i,!0;t[0]=i}else if((i.tag!==22||i.memoizedState===null)&&w(t,n,i.child,r))return!0;i=i.sibling}return!1}function M(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(s(559))}}var S=null,O=null;function X(t,n,i){return t===i?!0:t===n?(S=t,!0):!1}function C(t,n,i){return t===i?(O=t,!1):t===n?(O!==null&&(S=t),!0):!1}function N(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function U(t,n,i){for(var r=0,l=t;l;l=i(l))r++;l=0;for(var c=n;c;c=i(c))l++;for(;0<r-l;)t=i(t),r--;for(;0<l-r;)n=i(n),l--;for(;r--;){if(t===n||n!==null&&t===n.alternate)return t;t=i(t),n=i(n)}return null}var P=Object.assign,b=Symbol.for("react.element"),L=Symbol.for("react.transitional.element"),H=Symbol.for("react.portal"),q=Symbol.for("react.fragment"),tt=Symbol.for("react.strict_mode"),ut=Symbol.for("react.profiler"),j=Symbol.for("react.consumer"),$=Symbol.for("react.context"),W=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),ft=Symbol.for("react.suspense_list"),ot=Symbol.for("react.memo"),pt=Symbol.for("react.lazy"),_t=Symbol.for("react.activity"),Bt=Symbol.for("react.legacy_hidden"),Nt=Symbol.for("react.memo_cache_sentinel"),z=Symbol.for("react.view_transition"),mt=Symbol.for("react.recoverable"),Tt=Symbol.iterator;function Z(t){return t===null||typeof t!="object"?null:(t=Tt&&t[Tt]||t["@@iterator"],typeof t=="function"?t:null)}var dt=Symbol.for("react.client.reference");function At(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===dt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case q:return"Fragment";case ut:return"Profiler";case tt:return"StrictMode";case k:return"Suspense";case ft:return"SuspenseList";case _t:return"Activity";case z:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case H:return"Portal";case $:return t.displayName||"Context";case j:return(t._context.displayName||"Context")+".Consumer";case W:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ot:return n=t.displayName||null,n!==null?n:At(t.type)||"Memo";case pt:n=t._payload,t=t._init;try{return At(t(n))}catch{}}return null}var wt=Array.isArray,gt=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Rt=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,be={pending:!1,data:null,method:null,action:null},se=[],me=-1;function _e(t){return{current:t}}function te(t){0>me||(t.current=se[me],se[me]=null,me--)}function ie(t,n){me++,se[me]=t.current,t.current=n}var Ve=_e(null),fn=_e(null),Oe=_e(null),$e=_e(null);function V(t,n){switch(ie(Oe,n),ie(fn,t),ie(Ve,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?m_(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=m_(n),t=g_(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}te(Ve),ie(Ve,t)}function en(){te(Ve),te(fn),te(Oe)}function Le(t){var n=t.memoizedState;n!==null&&(zs._currentValue=n.memoizedState,ie($e,t)),n=Ve.current;var i=g_(n,t.type);n!==i&&(ie(fn,t),ie(Ve,i))}function D(t){fn.current===t&&(te(Ve),te(fn)),$e.current===t&&(te($e),zs._currentValue=be)}var y,J;function st(t){if(y===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);y=n&&n[1]||"",J=-1<i.stack.indexOf(`
    at`)?" (<anonymous>)":-1<i.stack.indexOf("@")?"@unknown:0:0":""}return`
`+y+t+J}var vt=!1;function Ct(t,n){if(!t||vt)return"";vt=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var Mt=function(){throw Error()};if(Object.defineProperty(Mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Mt,[])}catch(It){var Y=It}Reflect.construct(t,[],Mt)}else{try{Mt.call()}catch(It){Y=It}Mt=!1;try{var rt=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),Mt=!0,new t}finally{Mt&&(rt!==void 0?Object.defineProperty(t.prototype,"props",rt):delete t.prototype.props)}}}else{try{throw Error()}catch(It){Y=It}(Mt=t())&&typeof Mt.catch=="function"&&Mt.catch(function(){})}}catch(It){if(It&&Y&&typeof It.stack=="string")return[It.stack,Y.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=r.DetermineComponentFrameRoot(),g=c[0],A=c[1];if(g&&A){var I=g.split(`
`),Q=A.split(`
`);for(l=r=0;r<I.length&&!I[r].includes("DetermineComponentFrameRoot");)r++;for(;l<Q.length&&!Q[l].includes("DetermineComponentFrameRoot");)l++;if(r===I.length||l===Q.length)for(r=I.length-1,l=Q.length-1;1<=r&&0<=l&&I[r]!==Q[l];)l--;for(;1<=r&&0<=l;r--,l--)if(I[r]!==Q[l]){if(r!==1||l!==1)do if(r--,l--,0>l||I[r]!==Q[l]){var lt=`
`+I[r].replace(" at new "," at ");return t.displayName&&lt.includes("<anonymous>")&&(lt=lt.replace("<anonymous>",t.displayName)),lt}while(1<=r&&0<=l);break}}}finally{vt=!1,Error.prepareStackTrace=i}return(i=t?t.displayName||t.name:"")?st(i):""}function Lt(t,n){switch(t.tag){case 26:case 27:case 5:return st(t.type);case 16:return st("Lazy");case 13:return t.child!==n&&n!==null?st("Suspense Fallback"):st("Suspense");case 19:return st("SuspenseList");case 0:case 15:return Ct(t.type,!1);case 11:return Ct(t.type.render,!1);case 1:return Ct(t.type,!0);case 31:return st("Activity");case 30:return st("ViewTransition");default:return""}}function xt(t){try{var n="",i=null;do n+=Lt(t,i),i=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Et=Object.prototype.hasOwnProperty,Ut=o.unstable_scheduleCallback,$t=o.unstable_cancelCallback,Ft=o.unstable_shouldYield,zt=o.unstable_requestPaint,Wt=o.unstable_now,ne=o.unstable_getCurrentPriorityLevel,ue=o.unstable_ImmediatePriority,G=o.unstable_UserBlockingPriority,Dt=o.unstable_NormalPriority,yt=o.unstable_LowPriority,Ot=o.unstable_IdlePriority,kt=o.log,bt=o.unstable_setDisableYieldValue,Jt=null,Xt=null;function we(t){if(typeof kt=="function"&&bt(t),Xt&&typeof Xt.setStrictMode=="function")try{Xt.setStrictMode(Jt,t)}catch{}}var ce=Math.clz32?Math.clz32:Bc,Jn=Math.log,ci=Math.LN2;function Bc(t){return t>>>=0,t===0?32:31-(Jn(t)/ci|0)|0}var $r=256,_r=262144,Ia=4194304;function ca(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function vr(t,n,i){var r=t.pendingLanes;if(r===0)return 0;var l=0,c=t.suspendedLanes,g=t.pingedLanes;t=t.warmLanes;var A=r&134217727;return A!==0?(r=A&~c,r!==0?l=ca(r):(g&=A,g!==0?l=ca(g):i||(i=A&~t,i!==0&&(l=ca(i))))):(A=r&~c,A!==0?l=ca(A):g!==0?l=ca(g):i||(i=r&~t,i!==0&&(l=ca(i)))),l===0?0:n!==0&&n!==l&&(n&c)===0&&(c=l&-l,i=n&-n,c>=i||c===32&&(i&4194048)!==0)?n:l}function za(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Hi(t,n){(n&8)!==0&&(n|=n&32);var i=t.entangledLanes;if(i!==0)for(t=t.entanglements,i&=n;0<i;){var r=31-ce(i),l=1<<r;n|=t[r],i&=~l}return n}function uo(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function co(){var t=Ia;return Ia<<=1,(Ia&62914560)===0&&(Ia=4194304),t}function ts(t){for(var n=[],i=0;31>i;i++)n.push(t);return n}function Gi(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Al(t,n,i,r,l,c){var g=t.pendingLanes;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=i,t.entangledLanes&=i,t.errorRecoveryDisabledLanes&=i,t.shellSuspendCounter=0;var A=t.entanglements,I=t.expirationTimes,Q=t.hiddenUpdates;for(i=g&~i;0<i;){var lt=31-ce(i),Mt=1<<lt;A[lt]=0,I[lt]=-1;var Y=Q[lt];if(Y!==null)for(Q[lt]=null,lt=0;lt<Y.length;lt++){var rt=Y[lt];rt!==null&&(rt.lane&=-536870913)}i&=~Mt}r!==0&&xr(t,r,0),c!==0&&l===0&&t.tag!==0&&(t.suspendedLanes|=c&~(g&~n))}function xr(t,n,i){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-ce(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|i&261930}function fo(t,n){var i=t.entangledLanes|=n;for(t=t.entanglements;i;){var r=31-ce(i),l=1<<r;l&n|t[r]&n&&(t[r]|=n),i&=~l}}function ho(t,n){var i=n&-n;return i=(i&42)!==0?1:po(i),(i&(t.suspendedLanes|n))!==0?0:i}function po(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function mo(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Rl(){var t=Rt.p;return t!==0?t:(t=window.event,t===void 0?32:$_(t.type))}function Cl(t,n){var i=Rt.p;try{return Rt.p=t,n()}finally{Rt.p=i}}var fi=Math.random().toString(36).slice(2),T="__reactFiber$"+fi,B="__reactProps$"+fi,ct="__reactContainer$"+fi,it="__reactEvents$"+fi,at="__reactListeners$"+fi,Ht="__reactHandles$"+fi,qt="__reactResources$"+fi,Pt="__reactMarker$"+fi,Kt="__reactLoad$"+fi;function jt(t){delete t[T],delete t[B],delete t[at],delete t[Ht]}function re(t){var n;if(n=t[T])return n;for(var i=t.parentNode;i;){if(n=i[ct]||i[T]){if(i=n.alternate,n.child!==null||i!==null&&i.child!==null)for(t=L_(t);t!==null;){if(i=t[T])return i;t=L_(t)}return n}t=i,i=t.parentNode}return null}function fe(t){if(t=t[T]||t[ct]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function Yt(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Me(t){var n=t[qt];return n||(n=t[qt]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function ve(t){t[Pt]=!0}function Ye(t){t[Kt]=void 0}var He=new Set,_n={};function Gt(t,n){an(t,n),an(t+"Capture",n)}function an(t,n){for(_n[t]=n,t=0;t<n.length;t++)He.add(n[t])}var Ne=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),zn={},$n={};function Vi(t){return Et.call($n,t)?!0:Et.call(zn,t)?!1:Ne.test(t)?$n[t]=!0:(zn[t]=!0,!1)}var xe=!1;function Ie(){var t=xe;return xe=!1,t}function je(t,n,i){if(Vi(n))if(i===null)t.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,i)}}function ti(t,n,i){if(i===null)t.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,i)}}function Te(t,n,i,r){if(r===null)t.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttributeNS(n,i,r)}}function rn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function fa(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function wl(t,n,i){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var l=r.get,c=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return l.call(this)},set:function(g){i=""+g,c.call(this,g)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return i},setValue:function(g){i=""+g},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Fc(t){if(!t._valueTracker){var n=fa(t)?"checked":"value";t._valueTracker=wl(t,n,""+t[n])}}function im(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var i=n.getValue(),r="";return t&&(r=fa(t)?t.checked?"true":"false":t.value),t=r,t!==i?(n.setValue(t),!0):!1}var cS=/[\n"\\]/g;function di(t){return t.replace(cS,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Hc(t,n,i,r,l,c,g,A){t.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?t.type=g:t.removeAttribute("type"),n!=null?g==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+rn(n)):t.value!==""+rn(n)&&(t.value=""+rn(n)):g!=="submit"&&g!=="reset"||t.removeAttribute("value"),n!=null?g==="number"&&t.value==n?Gc(t,rn(t.value)):Gc(t,rn(n)):i!=null?Gc(t,rn(i)):r!=null&&t.removeAttribute("value"),l==null&&c!=null&&(t.defaultChecked=!!c),l!=null&&(t.checked=l&&typeof l!="function"&&typeof l!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.name=""+rn(A):t.removeAttribute("name")}function am(t,n,i,r,l,c,g,A){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(t.type=c),n!=null||i!=null){if(!(c!=="submit"&&c!=="reset"||n!=null)){Fc(t);return}i=i!=null?""+rn(i):"",n=n!=null?""+rn(n):i,A||n===t.value||(t.value=n),t.defaultValue=n}r=r??l,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=A?t.checked:!!r,t.defaultChecked=!!r,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.name=g),Fc(t)}function Gc(t,n){t.defaultValue!==""+n&&(t.defaultValue=""+n)}function es(t,n,i,r){if(t=t.options,n){n={};for(var l=0;l<i.length;l++)n["$"+i[l]]=!0;for(i=0;i<t.length;i++)l=n.hasOwnProperty("$"+t[i].value),t[i].selected!==l&&(t[i].selected=l),l&&r&&(t[i].defaultSelected=!0)}else{for(i=""+rn(i),n=null,l=0;l<t.length;l++){if(t[l].value===i){t[l].selected=!0,r&&(t[l].defaultSelected=!0);return}n!==null||t[l].disabled||(n=t[l])}n!==null&&(n.selected=!0)}}function rm(t,n,i){if(n!=null&&(n=""+rn(n),n!==t.value&&(t.value=n),i==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=i!=null?""+rn(i):""}function sm(t,n,i,r){if(n==null){if(r!=null){if(i!=null)throw Error(s(92));if(wt(r)){if(1<r.length)throw Error(s(93));r=r[0]}i=r}i==null&&(i=""),n=i}i=rn(n),t.defaultValue=i,r=t.textContent,r===i&&r!==""&&r!==null&&(t.value=r),Fc(t)}function ns(t,n){if(n){var i=t.firstChild;if(i&&i===t.lastChild&&i.nodeType===3){i.nodeValue=n;return}}t.textContent=n}var fS=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function om(t,n,i){var r=n.indexOf("--")===0;i==null||typeof i=="boolean"||i===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,i):typeof i!="number"||i===0||fS.has(n)?n==="float"?t.cssFloat=i:t[n]=(""+i).trim():t[n]=i+"px"}function lm(t,n,i){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,i!=null){for(var r in i)!i.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="",xe=!0);for(var l in n)r=n[l],n.hasOwnProperty(l)&&i[l]!==r&&(om(t,l,r),xe=!0)}else for(var c in n)n.hasOwnProperty(c)&&om(t,c,n[c])}function Vc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),hS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Nl(t){return hS.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Xi(){}var Xc=null;function kc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var is=null,as=null;function um(t){var n=fe(t);if(n&&(t=n.stateNode)){var i=t[B]||null;t:switch(t=n.stateNode,n.type){case"input":if(Hc(t,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name),n=i.name,i.type==="radio"&&n!=null){for(i=t;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll('input[name="'+di(""+n)+'"][type="radio"]'),n=0;n<i.length;n++){var r=i[n];if(r!==t&&r.form===t.form){var l=r[B]||null;if(!l)throw Error(s(90));Hc(r,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(n=0;n<i.length;n++)r=i[n],r.form===t.form&&im(r)}break t;case"textarea":rm(t,i.value,i.defaultValue);break t;case"select":n=i.value,n!=null&&es(t,!!i.multiple,n,!1)}}}var Wc=!1;function cm(t,n,i){if(Wc)return t(n,i);Wc=!0;try{var r=t(n);return r}finally{if(Wc=!1,(is!==null||as!==null)&&(Nu(),is&&(n=is,t=as,as=is=null,um(n),t)))for(n=0;n<t.length;n++)um(t[n])}}function go(t,n){var i=t.stateNode;if(i===null)return null;var r=i[B]||null;if(r===null)return null;i=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(i&&typeof i!="function")throw Error(s(231,n,typeof i));return i}var da=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qc=!1;if(da)try{var _o={};Object.defineProperty(_o,"passive",{get:function(){qc=!0}}),window.addEventListener("test",_o,_o),window.removeEventListener("test",_o,_o)}catch{qc=!1}var Ba=null,Yc=null,Dl=null;function fm(){if(Dl)return Dl;var t,n=Yc,i=n.length,r,l="value"in Ba?Ba.value:Ba.textContent,c=l.length;for(t=0;t<i&&n[t]===l[t];t++);var g=i-t;for(r=1;r<=g&&n[i-r]===l[c-r];r++);return Dl=l.slice(t,1<r?1-r:void 0)}function Ul(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Ll(){return!0}function dm(){return!1}function Bn(t){function n(i,r,l,c,g){this._reactName=i,this._targetInst=l,this.type=r,this.nativeEvent=c,this.target=g,this.currentTarget=null;for(var A in t)t.hasOwnProperty(A)&&(i=t[A],this[A]=i?i(c):c[A]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Ll:dm,this.isPropagationStopped=dm,this}return P(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=Ll)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=Ll)},persist:function(){},isPersistent:Ll}),n}var Fa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ol=Bn(Fa),vo=P({},Fa,{view:0,detail:0}),pS=Bn(vo),Zc,Kc,xo,Pl=P({},vo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==xo&&(xo&&t.type==="mousemove"?(Zc=t.screenX-xo.screenX,Kc=t.screenY-xo.screenY):Kc=Zc=0,xo=t),Zc)},movementY:function(t){return"movementY"in t?t.movementY:Kc}}),hm=Bn(Pl),mS=P({},Pl,{dataTransfer:0}),gS=Bn(mS),_S=P({},vo,{relatedTarget:0}),jc=Bn(_S),vS=P({},Fa,{animationName:0,elapsedTime:0,pseudoElement:0}),xS=Bn(vS),SS=P({},Fa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),MS=Bn(SS),yS=P({},Fa,{data:0}),pm=Bn(yS),ES={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},TS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function AS(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=TS[t])?!!n[t]:!1}function Qc(){return AS}var RS=P({},vo,{key:function(t){if(t.key){var n=ES[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Ul(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?bS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qc,charCode:function(t){return t.type==="keypress"?Ul(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ul(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),CS=Bn(RS),wS=P({},Pl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mm=Bn(wS),NS=P({},Fa,{submitter:0}),DS=Bn(NS),US=P({},vo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qc}),LS=Bn(US),OS=P({},Fa,{propertyName:0,elapsedTime:0,pseudoElement:0}),PS=Bn(OS),IS=P({},Pl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),zS=Bn(IS),BS=P({},Fa,{newState:0,oldState:0,source:0}),FS=Bn(BS),HS=[9,13,27,32],Jc=da&&"CompositionEvent"in window,So=null;da&&"documentMode"in document&&(So=document.documentMode);var GS=da&&"TextEvent"in window&&!So,gm=da&&(!Jc||So&&8<So&&11>=So),_m=" ",vm=!1;function xm(t,n){switch(t){case"keyup":return HS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var rs=!1;function VS(t,n){switch(t){case"compositionend":return Sm(n);case"keypress":return n.which!==32?null:(vm=!0,_m);case"textInput":return t=n.data,t===_m&&vm?null:t;default:return null}}function XS(t,n){if(rs)return t==="compositionend"||!Jc&&xm(t,n)?(t=fm(),Dl=Yc=Ba=null,rs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return gm&&n.locale!=="ko"?null:n.data;default:return null}}var kS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mm(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!kS[t.type]:n==="textarea"}function ym(t,n,i,r){is?as?as.push(r):as=[r]:is=r,n=Iu(n,"onChange"),0<n.length&&(i=new Ol("onChange","change",null,i,r),t.push({event:i,listeners:n}))}var Mo=null,yo=null;function WS(t){u_(t,0)}function Il(t){var n=Yt(t);if(im(n))return t}function Em(t,n){if(t==="change")return n}var bm=!1;if(da){var $c;if(da){var tf="oninput"in document;if(!tf){var Tm=document.createElement("div");Tm.setAttribute("oninput","return;"),tf=typeof Tm.oninput=="function"}$c=tf}else $c=!1;bm=$c&&(!document.documentMode||9<document.documentMode)}function Am(){Mo&&(Mo.detachEvent("onpropertychange",Rm),yo=Mo=null)}function Rm(t){if(t.propertyName==="value"&&Il(yo)){var n=[];ym(n,yo,t,kc(t)),cm(WS,n)}}function qS(t,n,i){t==="focusin"?(Am(),Mo=n,yo=i,Mo.attachEvent("onpropertychange",Rm)):t==="focusout"&&Am()}function YS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Il(yo)}function ZS(t,n){if(t==="click")return Il(n)}function KS(t,n){if(t==="input"||t==="change")return Il(n)}function jS(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ei=typeof Object.is=="function"?Object.is:jS;function Eo(t,n){if(ei(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var i=Object.keys(t),r=Object.keys(n);if(i.length!==r.length)return!1;for(r=0;r<i.length;r++){var l=i[r];if(!Et.call(n,l)||!ei(t[l],n[l]))return!1}return!0}function ef(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Cm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function wm(t,n){var i=Cm(t);t=0;for(var r;i;){if(i.nodeType===3){if(r=t+i.textContent.length,t<=n&&r>=n)return{node:i,offset:n-t};t=r}t:{for(;i;){if(i.nextSibling){i=i.nextSibling;break t}i=i.parentNode}i=void 0}i=Cm(i)}}function Nm(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Nm(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Dm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=ef(t.document);n instanceof t.HTMLIFrameElement;){try{var i=typeof n.contentWindow.location.href=="string"}catch{i=!1}if(i)t=n.contentWindow;else break;n=ef(t.document)}return n}function nf(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var QS=da&&"documentMode"in document&&11>=document.documentMode,ss=null,af=null,bo=null,rf=!1;function Um(t,n,i){var r=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;rf||ss==null||ss!==ef(r)||(r=ss,"selectionStart"in r&&nf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),bo&&Eo(bo,r)||(bo=r,r=Iu(af,"onSelect"),0<r.length&&(n=new Ol("onSelect","select",null,n,i),t.push({event:n,listeners:r}),n.target=ss)))}function Sr(t,n){var i={};return i[t.toLowerCase()]=n.toLowerCase(),i["Webkit"+t]="webkit"+n,i["Moz"+t]="moz"+n,i}var os={animationend:Sr("Animation","AnimationEnd"),animationiteration:Sr("Animation","AnimationIteration"),animationstart:Sr("Animation","AnimationStart"),transitionrun:Sr("Transition","TransitionRun"),transitionstart:Sr("Transition","TransitionStart"),transitioncancel:Sr("Transition","TransitionCancel"),transitionend:Sr("Transition","TransitionEnd")},sf={},Lm={};da&&(Lm=document.createElement("div").style,"AnimationEvent"in window||(delete os.animationend.animation,delete os.animationiteration.animation,delete os.animationstart.animation),"TransitionEvent"in window||delete os.transitionend.transition);function Mr(t){if(sf[t])return sf[t];if(!os[t])return t;var n=os[t],i;for(i in n)if(n.hasOwnProperty(i)&&i in Lm)return sf[t]=n[i];return t}var Om=Mr("animationend"),Pm=Mr("animationiteration"),Im=Mr("animationstart"),JS=Mr("transitionrun"),$S=Mr("transitionstart"),tM=Mr("transitioncancel"),zm=Mr("transitionend"),Bm=new Map,of="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");of.push("scrollEnd");function Ri(t,n){Bm.set(t,n),Gt(n,[t])}var eM=0;function ha(t,n){if(t.name!=null&&t.name!=="auto")return t.name;if(n.autoName!==null)return n.autoName;t=Di.identifierPrefix;var i=eM++;return t="_"+t+"t_"+i.toString(32)+"_",n.autoName=t}function Fm(t){if(t==null||typeof t=="string")return t;var n=null,i=Rs;if(i!==null)for(var r=0;r<i.length;r++){var l=t[i[r]];if(l!=null){if(l==="none")return"none";n=n==null?l:n+(" "+l)}}return n??t.default}function pa(t,n){return t=Fm(t),n=Fm(n),n==null?t==="auto"?null:t:n==="auto"?null:n}var zl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},hi=[],ls=0,lf=0;function Bl(){for(var t=ls,n=lf=ls=0;n<t;){var i=hi[n];hi[n++]=null;var r=hi[n];hi[n++]=null;var l=hi[n];hi[n++]=null;var c=hi[n];if(hi[n++]=null,r!==null&&l!==null){var g=r.pending;g===null?l.next=l:(l.next=g.next,g.next=l),r.pending=l}c!==0&&Hm(i,l,c)}}function Fl(t,n,i,r){hi[ls++]=t,hi[ls++]=n,hi[ls++]=i,hi[ls++]=r,lf|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function uf(t,n,i,r){return Fl(t,n,i,r),Hl(t)}function yr(t,n){return Fl(t,null,null,n),Hl(t)}function Hm(t,n,i){t.lanes|=i;var r=t.alternate;r!==null&&(r.lanes|=i);for(var l=!1,c=t.return;c!==null;)c.childLanes|=i,r=c.alternate,r!==null&&(r.childLanes|=i),c.tag===22&&(t=c.stateNode,t===null||t._visibility&1||(l=!0)),t=c,c=c.return;return t.tag===3?(c=t.stateNode,l&&n!==null&&(l=31-ce(i),t=c.hiddenUpdates,r=t[l],r===null?t[l]=[n]:r.push(n),n.lane=i|536870912),c):null}function Hl(t){if(50<qo)throw qo=0,wu=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var us={};function nM(t,n,i,r){this.tag=t,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wn(t,n,i,r){return new nM(t,n,i,r)}function cf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ma(t,n){var i=t.alternate;return i===null?(i=Wn(t.tag,n,t.key,t.mode),i.elementType=t.elementType,i.type=t.type,i.stateNode=t.stateNode,i.alternate=t,t.alternate=i):(i.pendingProps=n,i.type=t.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=t.flags&1206910976,i.childLanes=t.childLanes,i.lanes=t.lanes,i.child=t.child,i.memoizedProps=t.memoizedProps,i.memoizedState=t.memoizedState,i.updateQueue=t.updateQueue,n=t.dependencies,i.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},i.sibling=t.sibling,i.index=t.index,i.ref=t.ref,i.refCleanup=t.refCleanup,i}function Gm(t,n){t.flags&=1206910978;var i=t.alternate;return i===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=i.childLanes,t.lanes=i.lanes,t.child=i.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=i.memoizedProps,t.memoizedState=i.memoizedState,t.updateQueue=i.updateQueue,t.type=i.type,n=i.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Gl(t,n,i,r,l,c){var g=0;if(r=t,typeof r=="function")cf(r)&&(g=1);else if(typeof r=="string")g=Ny(t,i,Ve.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(r){case _t:return t=Wn(31,i,n,l),t.elementType=_t,t.lanes=c,t;case q:return Er(i.children,l,c,n);case tt:g=8,l|=24;break;case ut:return t=Wn(12,i,n,l|2),t.elementType=ut,t.lanes=c,t;case k:return t=Wn(13,i,n,l),t.elementType=k,t.lanes=c,t;case ft:return t=Wn(19,i,n,l),t.elementType=ft,t.lanes=c,t;case Bt:case z:return t=l|32,t=Wn(30,i,n,t),t.elementType=z,t.lanes=c,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case $:g=10;break t;case j:g=9;break t;case W:g=11;break t;case ot:g=14;break t;case pt:g=16,r=null;break t}g=29,i=Error(s(130,t===null?"null":typeof t,"")),r=null}return n=Wn(g,i,n,l),n.elementType=t,n.type=r,n.lanes=c,n}function Er(t,n,i,r){return t=Wn(7,t,r,n),t.lanes=i,t}function ff(t,n,i){return t=Wn(6,t,null,n),t.lanes=i,t}function Vm(t){var n=Wn(18,null,null,0);return n.stateNode=t,n}function df(t,n,i){return n=Wn(4,t.children!==null?t.children:[],t.key,n),n.lanes=i,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Xm=new WeakMap;function pi(t,n){if(typeof t=="object"&&t!==null){var i=Xm.get(t);return i!==void 0?i:(n={value:t,source:n,stack:xt(n)},Xm.set(t,n),n)}return{value:t,source:n,stack:xt(n)}}var cs=[],fs=0,Vl=null,To=0,mi=[],gi=0,Ha=null,ki=1,Wi="";function ga(t,n){cs[fs++]=To,cs[fs++]=Vl,Vl=t,To=n}function km(t,n,i){mi[gi++]=ki,mi[gi++]=Wi,mi[gi++]=Ha,Ha=t;var r=ki;t=Wi;var l=32-ce(r)-1;r&=~(1<<l),i+=1;var c=32-ce(n)+l;if(30<c){var g=l-l%5;c=(r&(1<<g)-1).toString(32),r>>=g,l-=g,ki=1<<32-ce(n)+l|i<<l|r,Wi=c+t}else ki=1<<c|i<<l|r,Wi=t}function Xl(t){t.return!==null&&(ga(t,1),km(t,1,0))}function hf(t){for(;t===Vl;)Vl=cs[--fs],cs[fs]=null,To=cs[--fs],cs[fs]=null;for(;t===Ha;)Ha=mi[--gi],mi[gi]=null,Wi=mi[--gi],mi[gi]=null,ki=mi[--gi],mi[gi]=null}function Wm(t,n){mi[gi++]=ki,mi[gi++]=Wi,mi[gi++]=Ha,ki=n.id,Wi=n.overflow,Ha=t}var Mn=null,Qe=null,Se=!1,Ga=null,_i=!1,pf=Error(s(519));function Va(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ao(pi(n,t)),pf}function qm(t){var n=t.stateNode,i=t.type,r=t.memoizedProps;switch(n[T]=t,n[B]=r,i){case"dialog":Ee("cancel",n),Ee("close",n);break;case"iframe":case"object":case"embed":Ee("load",n);break;case"video":case"audio":for(i=0;i<Zo.length;i++)Ee(Zo[i],n);break;case"source":Ee("error",n);break;case"img":case"image":case"link":Ee("error",n),Ee("load",n);break;case"details":Ee("toggle",n);break;case"input":Ee("invalid",n),am(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Ee("invalid",n);break;case"textarea":Ee("invalid",n),sm(n,r.value,r.defaultValue,r.children)}i=r.children,typeof i!="string"&&typeof i!="number"&&typeof i!="bigint"||n.textContent===""+i||r.suppressHydrationWarning===!0||h_(n.textContent,i)?(r.popover!=null&&(Ee("beforetoggle",n),Ee("toggle",n)),r.onScroll!=null&&Ee("scroll",n),r.onScrollEnd!=null&&Ee("scrollend",n),r.onClick!=null&&(n.onclick=Xi),n=!0):n=!1,n||Va(t,!0)}function kl(t){for(Mn=t.return;Mn;)switch(Mn.tag){case 5:case 31:case 13:_i=!1;return;case 27:case 3:_i=!0;return;default:Mn=Mn.return}}function ds(t){if(t!==Mn)return!1;if(!Se)return kl(t),Se=!0,!1;var n=t.tag,i;if((i=n!==3&&n!==27)&&((i=n===5)&&(i=t.type,i=!(i!=="form"&&i!=="button")||kd(t.type,t.memoizedProps)),i=!i),i&&Qe&&Va(t),kl(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Qe=U_(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Qe=U_(t)}else n===27?(n=Qe,ar(t.type)?(t=$d,$d=null,Qe=t):Qe=n):Qe=Mn?xi(t.stateNode.nextSibling):null;return!0}function br(){Qe=Mn=null,Se=!1}function mf(){var t=Ga;return t!==null&&(Zn===null?Zn=t:Zn.push.apply(Zn,t),Ga=null),t}function Ao(t){Ga===null?Ga=[t]:Ga.push(t)}var gf=_e(null),Tr=null,_a=null;function Xa(t,n,i){ie(gf,n._currentValue),n._currentValue=i}function va(t){t._currentValue=gf.current,te(gf)}function Wl(t,n,i){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===i)break;t=t.return}}function _f(t,n,i,r){var l=t.child;for(l!==null&&(l.return=t);l!==null;){var c=l.dependencies;if(c!==null){var g=l.child;c=c.firstContext;t:for(;c!==null;){var A=c;c=l;for(var I=0;I<n.length;I++)if(A.context===n[I]){c.lanes|=i,A=c.alternate,A!==null&&(A.lanes|=i),Wl(c.return,i,t),r||(g=null);break t}c=A.next}}else if(l.tag===18){if(g=l.return,g===null)throw Error(s(341));g.lanes|=i,c=g.alternate,c!==null&&(c.lanes|=i),Wl(g,i,t),g=null}else l.tag===13&&l.memoizedState!==null&&l.memoizedState.dehydrated===null?(l.lanes|=i,g=l.alternate,g!==null&&(g.lanes|=i),Wl(l.return,i,t),g=l.child,g=g!==null?g.sibling:null):g=l.child;if(g!==null)g.return=l;else for(g=l;g!==null;){if(g===t){g=null;break}if(l=g.sibling,l!==null){l.return=g.return,g=l;break}g=g.return}l=g}}function Ar(t,n,i,r){t=null;for(var l=n,c=!1;l!==null;){if(!c){if((l.flags&524288)!==0)c=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var g=l.alternate;if(g===null)throw Error(s(387));if(g=g.memoizedProps,g!==null){var A=l.type;ei(l.pendingProps.value,g.value)||(t!==null?t.push(A):t=[A])}}else if(l===$e.current){if(g=l.alternate,g===null)throw Error(s(387));g.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(t!==null?t.push(zs):t=[zs])}l=l.return}return t!==null&&_f(n,t,i,r),n.flags|=262144,t!==null}function ql(t){for(t=t.firstContext;t!==null;){if(!ei(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Rr(t){Tr=t,_a=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function An(t){return Ym(Tr,t)}function Yl(t,n){return Tr===null&&Rr(t),Ym(t,n)}function Ym(t,n){var i=n._currentValue;if(n={context:n,memoizedValue:i,next:null},_a===null){if(t===null)throw Error(s(308));_a=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else _a=_a.next=n;return i}var iM=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(i,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(i){return i()})}},aM=o.unstable_scheduleCallback,rM=o.unstable_NormalPriority,dn={$$typeof:$,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function vf(){return{controller:new iM,data:new Map,refCount:0}}function Ro(t){t.refCount--,t.refCount===0&&aM(rM,function(){t.controller.abort()})}function Zm(t,n){if((t.pendingLanes&4194048)!==0){var i=t.transitionTypes;for(i===null&&(i=t.transitionTypes=[]),t=0;t<n.length;t++){var r=n[t];i.indexOf(r)===-1&&i.push(r)}}}var Co=null;function sM(t){var n=t.transitionTypes;return t.transitionTypes=null,n}var wo=null,xf=0,Cr=0,hs=null;function oM(t,n){if(wo===null){var i=wo=[];xf=0,Cr=Pd(),hs={status:"pending",value:void 0,then:function(r){i.push(r)}}}return xf++,n.then(Km,Km),n}function Km(){if(--xf===0&&(Co=null,wo!==null)){hs!==null&&(hs.status="fulfilled");var t=wo;wo=null,Cr=0,hs=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function lM(t,n){var i=[],r={status:"pending",value:null,reason:null,then:function(l){i.push(l)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var l=0;l<i.length;l++)(0,i[l])(n)},function(l){for(r.status="rejected",r.reason=l,l=0;l<i.length;l++)(0,i[l])(void 0)}),r}var jm=gt.S;gt.S=function(t,n){if(Vg=Wt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&oM(t,n),Co!==null)for(var i=Ds;i!==null;)Zm(i,Co),i=i.next;if(i=t.types,i!==null){for(var r=Ds;r!==null;)Zm(r,i),r=r.next;if(Cr!==0){r=Co,r===null&&(r=Co=[]);for(var l=0;l<i.length;l++){var c=i[l];r.indexOf(c)===-1&&r.push(c)}}}jm!==null&&jm(t,n)};var wr=_e(null);function Sf(){var t=wr.current;return t!==null?t:Ke.pooledCache}function Zl(t,n){n===null?ie(wr,wr.current):ie(wr,n.pool)}function Qm(){var t=Sf();return t===null?null:{parent:dn._currentValue,pool:t}}var ps=Error(s(460)),Mf=Error(s(474)),Kl=Error(s(542)),jl={then:function(){}};function Jm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function $m(t,n,i){switch(i=t[i],i===void 0?t.push(n):i!==n&&(n.then(Xi,Xi),n=i),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,e0(t),t===void 0&&!("reason"in n)?Error(s(600)):t;default:if(typeof n.status=="string")n.then(Xi,Xi);else{if(t=Ke,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var l=n;l.status="fulfilled",l.value=r}},function(r){if(n.status==="pending"){var l=n;l.status="rejected",l.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,e0(t),t}throw Dr=n,ps}}function Nr(t){try{var n=t._init;return n(t._payload)}catch(i){throw i!==null&&typeof i=="object"&&typeof i.then=="function"?(Dr=i,ps):i}}var Dr=null;function t0(){if(Dr===null)throw Error(s(459));var t=Dr;return Dr=null,t}function e0(t){if(t===ps||t===Kl)throw Error(s(483))}var ms=null,No=0;function Ql(t){var n=No;return No+=1,ms===null&&(ms=[]),$m(ms,t,n)}function ka(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Jl(t,n){throw n.$$typeof===b?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function n0(t){function n(K,F){if(t){var et=K.deletions;et===null?(K.deletions=[F],K.flags|=16):et.push(F)}}function i(K,F){if(!t)return null;for(;F!==null;)n(K,F),F=F.sibling;return null}function r(K){for(var F=new Map;K!==null;)K.key===null?F.set(K.index,K):F.set(K.key,K),K=K.sibling;return F}function l(K,F){return K=ma(K,F),K.index=0,K.sibling=null,K}function c(K,F,et){return K.index=et,t?(et=K.alternate,et!==null?(et=et.index,et<F?(K.flags|=2,F):et):(K.flags|=134217730,F)):(K.flags|=1048576,F)}function g(K){return t&&K.alternate===null&&(K.flags|=134217730),K}function A(K,F,et,St){return F===null||F.tag!==6?(F=ff(et,K.mode,St),F.return=K,F):(F=l(F,et),F.return=K,F)}function I(K,F,et,St){var Zt=et.type;return Zt===q?(K=lt(K,F,et.props.children,St,et.key),ka(K,et),K):F!==null&&(F.elementType===Zt||typeof Zt=="object"&&Zt!==null&&Zt.$$typeof===pt&&Nr(Zt)===F.type)?(F=l(F,et.props),ka(F,et),F.return=K,F):(F=Gl(et.type,et.key,et.props,null,K.mode,St),ka(F,et),F.return=K,F)}function Q(K,F,et,St){return F===null||F.tag!==4||F.stateNode.containerInfo!==et.containerInfo||F.stateNode.implementation!==et.implementation?(F=df(et,K.mode,St),F.return=K,F):(F=l(F,et.children||[]),F.return=K,F)}function lt(K,F,et,St,Zt){return F===null||F.tag!==7?(F=Er(et,K.mode,St,Zt),F.return=K,F):(F=l(F,et),F.return=K,F)}function Mt(K,F,et){if(typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint")return F=ff(""+F,K.mode,et),F.return=K,F;if(typeof F=="object"&&F!==null){switch(F.$$typeof){case L:return et=Gl(F.type,F.key,F.props,null,K.mode,et),ka(et,F),et.return=K,et;case H:return F=df(F,K.mode,et),F.return=K,F;case pt:return F=Nr(F),Mt(K,F,et)}if(wt(F)||Z(F))return F=Er(F,K.mode,et,null),F.return=K,F;if(typeof F.then=="function")return Mt(K,Ql(F),et);if(F.$$typeof===$)return Mt(K,Yl(K,F),et);Jl(K,F)}return null}function Y(K,F,et,St){var Zt=F!==null?F.key:null;if(typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint")return Zt!==null?null:A(K,F,""+et,St);if(typeof et=="object"&&et!==null){switch(et.$$typeof){case L:return et.key===Zt?I(K,F,et,St):null;case H:return et.key===Zt?Q(K,F,et,St):null;case pt:return et=Nr(et),Y(K,F,et,St)}if(wt(et)||Z(et))return Zt!==null?null:lt(K,F,et,St,null);if(typeof et.then=="function")return Y(K,F,Ql(et),St);if(et.$$typeof===$)return Y(K,F,Yl(K,et),St);Jl(K,et)}return null}function rt(K,F,et,St,Zt){if(typeof St=="string"&&St!==""||typeof St=="number"||typeof St=="bigint")return K=K.get(et)||null,A(F,K,""+St,Zt);if(typeof St=="object"&&St!==null){switch(St.$$typeof){case L:return K=K.get(St.key===null?et:St.key)||null,I(F,K,St,Zt);case H:return K=K.get(St.key===null?et:St.key)||null,Q(F,K,St,Zt);case pt:return St=Nr(St),rt(K,F,et,St,Zt)}if(wt(St)||Z(St))return K=K.get(et)||null,lt(F,K,St,Zt,null);if(typeof St.then=="function")return rt(K,F,et,Ql(St),Zt);if(St.$$typeof===$)return rt(K,F,et,Yl(F,St),Zt);Jl(F,St)}return null}function It(K,F,et,St){for(var Zt=null,Re=null,ee=F,ae=F=0,mn=null;ee!==null&&ae<et.length;ae++){ee.index>ae?(mn=ee,ee=null):mn=ee.sibling;var Ue=Y(K,ee,et[ae],St);if(Ue===null){ee===null&&(ee=mn);break}t&&ee&&Ue.alternate===null&&n(K,ee),F=c(Ue,F,ae),Re===null?Zt=Ue:Re.sibling=Ue,Re=Ue,ee=mn}if(ae===et.length)return i(K,ee),Se&&ga(K,ae),Zt;if(ee===null){for(;ae<et.length;ae++)ee=Mt(K,et[ae],St),ee!==null&&(F=c(ee,F,ae),Re===null?Zt=ee:Re.sibling=ee,Re=ee);return Se&&ga(K,ae),Zt}for(ee=r(ee);ae<et.length;ae++)mn=rt(ee,K,ae,et[ae],St),mn!==null&&(t&&(Ue=mn.alternate,Ue!==null&&ee.delete(Ue.key===null?ae:Ue.key)),F=c(mn,F,ae),Re===null?Zt=mn:Re.sibling=mn,Re=mn);return t&&ee.forEach(function(ur){return n(K,ur)}),Se&&ga(K,ae),Zt}function Qt(K,F,et,St){if(et==null)throw Error(s(151));for(var Zt=null,Re=null,ee=F,ae=F=0,mn=null,Ue=et.next();ee!==null&&!Ue.done;ae++,Ue=et.next()){ee.index>ae?(mn=ee,ee=null):mn=ee.sibling;var ur=Y(K,ee,Ue.value,St);if(ur===null){ee===null&&(ee=mn);break}t&&ee&&ur.alternate===null&&n(K,ee),F=c(ur,F,ae),Re===null?Zt=ur:Re.sibling=ur,Re=ur,ee=mn}if(Ue.done)return i(K,ee),Se&&ga(K,ae),Zt;if(ee===null){for(;!Ue.done;ae++,Ue=et.next())Ue=Mt(K,Ue.value,St),Ue!==null&&(F=c(Ue,F,ae),Re===null?Zt=Ue:Re.sibling=Ue,Re=Ue);return Se&&ga(K,ae),Zt}for(ee=r(ee);!Ue.done;ae++,Ue=et.next())Ue=rt(ee,K,ae,Ue.value,St),Ue!==null&&(t&&(mn=Ue.alternate,mn!==null&&ee.delete(mn.key===null?ae:mn.key)),F=c(Ue,F,ae),Re===null?Zt=Ue:Re.sibling=Ue,Re=Ue);return t&&ee.forEach(function(Vy){return n(K,Vy)}),Se&&ga(K,ae),Zt}function pe(K,F,et,St){if(typeof et=="object"&&et!==null&&et.type===q&&et.key===null&&et.props.ref===void 0&&(et=et.props.children),typeof et=="object"&&et!==null){switch(et.$$typeof){case L:t:{for(var Zt=et.key;F!==null;){if(F.key===Zt){if(Zt=et.type,Zt===q){if(F.tag===7){i(K,F.sibling),St=l(F,et.props.children),ka(St,et),St.return=K,K=St;break t}}else if(F.elementType===Zt||typeof Zt=="object"&&Zt!==null&&Zt.$$typeof===pt&&Nr(Zt)===F.type){i(K,F.sibling),St=l(F,et.props),ka(St,et),St.return=K,K=St;break t}i(K,F);break}else n(K,F);F=F.sibling}et.type===q?(St=Er(et.props.children,K.mode,St,et.key),ka(St,et),St.return=K,K=St):(St=Gl(et.type,et.key,et.props,null,K.mode,St),ka(St,et),St.return=K,K=St)}return g(K);case H:t:{for(Zt=et.key;F!==null;){if(F.key===Zt)if(F.tag===4&&F.stateNode.containerInfo===et.containerInfo&&F.stateNode.implementation===et.implementation){i(K,F.sibling),St=l(F,et.children||[]),St.return=K,K=St;break t}else{i(K,F);break}else n(K,F);F=F.sibling}St=df(et,K.mode,St),St.return=K,K=St}return g(K);case pt:return et=Nr(et),pe(K,F,et,St)}if(wt(et))return It(K,F,et,St);if(Z(et)){if(Zt=Z(et),typeof Zt!="function")throw Error(s(150));return et=Zt.call(et),Qt(K,F,et,St)}if(typeof et.then=="function")return pe(K,F,Ql(et),St);if(et.$$typeof===$)return pe(K,F,Yl(K,et),St);Jl(K,et)}return typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint"?(et=""+et,F!==null&&F.tag===6?(i(K,F.sibling),St=l(F,et),St.return=K,K=St):(i(K,F),St=ff(et,K.mode,St),St.return=K,K=St),g(K)):i(K,F)}return function(K,F,et,St){try{No=0;var Zt=pe(K,F,et,St);return ms=null,Zt}catch(ee){if(ee===ps||ee===Kl)throw ee;var Re=Wn(29,ee,null,K.mode);return Re.lanes=St,Re.return=K,Re}finally{}}}var Ur=n0(!0),i0=n0(!1),Wa=!1;function yf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ef(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function qa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ya(t,n,i){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(ze&2)!==0){var l=r.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),r.pending=n,n=Hl(t),Hm(t,null,i),n}return Fl(t,r,n,i),Hl(t)}function Do(t,n,i){if(n=n.updateQueue,n!==null&&(n=n.shared,(i&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,i|=r,n.lanes=i,fo(t,i)}}function bf(t,n){var i=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,i===r)){var l=null,c=null;if(i=i.firstBaseUpdate,i!==null){do{var g={lane:i.lane,tag:i.tag,payload:i.payload,callback:null,next:null};c===null?l=c=g:c=c.next=g,i=i.next}while(i!==null);c===null?l=c=n:c=c.next=n}else l=c=n;i={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:c,shared:r.shared,callbacks:r.callbacks},t.updateQueue=i;return}t=i.lastBaseUpdate,t===null?i.firstBaseUpdate=n:t.next=n,i.lastBaseUpdate=n}var Tf=!1;function Uo(){if(Tf){var t=hs;if(t!==null)throw t}}function Lo(t,n,i,r){Tf=!1;var l=t.updateQueue;Wa=!1;var c=l.firstBaseUpdate,g=l.lastBaseUpdate,A=l.shared.pending;if(A!==null){l.shared.pending=null;var I=A,Q=I.next;I.next=null,g===null?c=Q:g.next=Q,g=I;var lt=t.alternate;lt!==null&&(lt=lt.updateQueue,A=lt.lastBaseUpdate,A!==g&&(A===null?lt.firstBaseUpdate=Q:A.next=Q,lt.lastBaseUpdate=I))}if(c!==null){var Mt=l.baseState;g=0,lt=Q=I=null,A=c;do{var Y=A.lane&-536870913,rt=Y!==A.lane;if(rt?(Ae&Y)===Y:(r&Y)===Y){Y!==0&&Y===Cr&&(Tf=!0),lt!==null&&(lt=lt.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var It=t,Qt=A;Y=n;var pe=i;switch(Qt.tag){case 1:if(It=Qt.payload,typeof It=="function"){Mt=It.call(pe,Mt,Y);break t}Mt=It;break t;case 3:It.flags=It.flags&-65537|128;case 0:if(It=Qt.payload,Y=typeof It=="function"?It.call(pe,Mt,Y):It,Y==null)break t;Mt=P({},Mt,Y);break t;case 2:Wa=!0}}Y=A.callback,Y!==null&&(t.flags|=64,rt&&(t.flags|=8192),rt=l.callbacks,rt===null?l.callbacks=[Y]:rt.push(Y))}else rt={lane:Y,tag:A.tag,payload:A.payload,callback:A.callback,next:null},lt===null?(Q=lt=rt,I=Mt):lt=lt.next=rt,g|=Y;if(A=A.next,A===null){if(A=l.shared.pending,A===null)break;rt=A,A=rt.next,rt.next=null,l.lastBaseUpdate=rt,l.shared.pending=null}}while(!0);lt===null&&(I=Mt),l.baseState=I,l.firstBaseUpdate=Q,l.lastBaseUpdate=lt,c===null&&(l.shared.lanes=0),tr|=g,t.lanes=g,t.memoizedState=Mt}}function a0(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function r0(t,n){var i=t.callbacks;if(i!==null)for(t.callbacks=null,t=0;t<i.length;t++)a0(i[t],n)}var Za=_e(null),$l=_e(0);function s0(t,n){t=Ea,ie($l,t),ie(Za,n),Ea=t|n.baseLanes}function Af(){ie($l,Ea),ie(Za,Za.current)}function Rf(){Ea=$l.current,te(Za),te($l)}var Rn=_e(null),Ln=null;function Ka(t){var n=t.alternate;ie(Cn,Cn.current&1),ie(Rn,t),Ln===null&&(n===null||Za.current!==null||n.memoizedState!==null)&&(Ln=t)}function Cf(t){ie(Cn,Cn.current),ie(Rn,t),Ln===null&&(Ln=t)}function o0(t){t.tag===22?(ie(Cn,Cn.current),ie(Rn,t),Ln===null&&(Ln=t)):ja()}function ja(){ie(Cn,Cn.current),ie(Rn,Rn.current)}function ni(t){te(Rn),Ln===t&&(Ln=null),te(Cn)}var Cn=_e(0);function Oo(t,n){ie(Rn,Rn.current),ie(Cn,n)}function wf(t){te(Cn),te(Rn),Ln===t&&(Ln=null)}function tu(t){for(var n=t;n!==null;){if(n.tag===13){var i=n.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||Qd(i)||Jd(i)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var xa=0,he=null,Ze=null,hn=null,eu=!1,gs=!1,Lr=!1,nu=0,Po=0,_s=null,uM=0;function sn(){throw Error(s(321))}function Nf(t,n){if(n===null)return!1;for(var i=0;i<n.length&&i<t.length;i++)if(!ei(t[i],n[i]))return!1;return!0}function Df(t,n,i,r,l,c){return xa=c,he=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,gt.H=t===null||t.memoizedState===null?k0:W0,Lr=!1,c=i(r,l),Lr=!1,gs&&(c=u0(n,i,r,l)),l0(t),c}function l0(t){gt.H=uu;var n=Ze!==null&&Ze.next!==null;if(xa=0,hn=Ze=he=null,eu=!1,Po=0,_s=null,n)throw Error(s(300));t===null||pn||(t=t.dependencies,t!==null&&ql(t)&&(pn=!0))}function u0(t,n,i,r){he=t;var l=0;do{if(gs&&(_s=null),Po=0,gs=!1,25<=l)throw Error(s(301));if(l+=1,hn=Ze=null,t.updateQueue!=null){var c=t.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}gt.H=_M,c=n(i,r)}while(gs);return c}function cM(){var t=gt.H,n=t.useState()[0];return n=typeof n.then=="function"?Io(n):n,t=t.useState()[0],(Ze!==null?Ze.memoizedState:null)!==t&&(he.flags|=1024),n}function Uf(){var t=nu!==0;return nu=0,t}function Lf(t,n,i){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~i}function Of(t){if(eu){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}eu=!1}xa=0,hn=Ze=he=null,gs=!1,Po=nu=0,_s=null}function Fn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return hn===null?he.memoizedState=hn=t:hn=hn.next=t,hn}function un(){if(Ze===null){var t=he.alternate;t=t!==null?t.memoizedState:null}else t=Ze.next;var n=hn===null?he.memoizedState:hn.next;if(n!==null)hn=n,Ze=t;else{if(t===null)throw he.alternate===null?Error(s(467)):Error(s(310));Ze=t,t={memoizedState:Ze.memoizedState,baseState:Ze.baseState,baseQueue:Ze.baseQueue,queue:Ze.queue,next:null},hn===null?he.memoizedState=hn=t:hn=hn.next=t}return hn}function iu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Io(t){var n=Po;return Po+=1,_s===null&&(_s=[]),t=$m(_s,t,n),n=he,(hn===null?n.memoizedState:hn.next)===null&&(n=n.alternate,gt.H=n===null||n.memoizedState===null?k0:W0),t}function au(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Io(t);if(t.$$typeof===mt)return;if(t.$$typeof===$)return An(t)}throw Error(s(438,String(t)))}function Pf(t){var n=null,i=he.updateQueue;if(i!==null&&(n=i.memoCache),n==null){var r=he.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(l){return l.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),i===null&&(i=iu(),he.updateQueue=i),i.memoCache=n,i=n.data[n.index],i===void 0)for(i=n.data[n.index]=Array(t),r=0;r<t;r++)i[r]=Nt;return n.index++,i}function Sa(t,n){return typeof n=="function"?n(t):n}function ru(t){var n=un();return If(n,Ze,t)}function If(t,n,i){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=i;var l=t.baseQueue,c=r.pending;if(c!==null){if(l!==null){var g=l.next;l.next=c.next,c.next=g}n.baseQueue=l=c,r.pending=null}if(c=t.baseState,l===null)t.memoizedState=c;else{n=l.next;var A=g=null,I=null,Q=n,lt=!1;do{var Mt=Q.lane&-536870913;if(Mt!==Q.lane?(Ae&Mt)===Mt:(xa&Mt)===Mt){var Y=Q.revertLane;if(Y===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),Mt===Cr&&(lt=!0);else if((xa&Y)===Y){Q=Q.next,Y===Cr&&(lt=!0);continue}else Mt={lane:0,revertLane:Q.revertLane,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},I===null?(A=I=Mt,g=c):I=I.next=Mt,he.lanes|=Y,tr|=Y;Mt=Q.action,Lr&&i(c,Mt),c=Q.hasEagerState?Q.eagerState:i(c,Mt)}else Y={lane:Mt,revertLane:Q.revertLane,gesture:Q.gesture,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},I===null?(A=I=Y,g=c):I=I.next=Y,he.lanes|=Mt,tr|=Mt;Q=Q.next}while(Q!==null&&Q!==n);if(I===null?g=c:I.next=A,!ei(c,t.memoizedState)&&(pn=!0,lt&&(i=hs,i!==null)))throw i;t.memoizedState=c,t.baseState=g,t.baseQueue=I,r.lastRenderedState=c}return l===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function zf(t){var n=un(),i=n.queue;if(i===null)throw Error(s(311));i.lastRenderedReducer=t;var r=i.dispatch,l=i.pending,c=n.memoizedState;if(l!==null){i.pending=null;var g=l=l.next;do c=t(c,g.action),g=g.next;while(g!==l);ei(c,n.memoizedState)||(pn=!0),n.memoizedState=c,n.baseQueue===null&&(n.baseState=c),i.lastRenderedState=c}return[c,r]}function c0(t,n,i){var r=he,l=un(),c=Se;if(c){if(i===void 0)throw Error(s(407));i=i()}else i=n();var g=!ei((Ze||l).memoizedState,i);if(g&&(l.memoizedState=i,pn=!0),l=l.queue,Hf(h0.bind(null,r,l,t),[t]),t=l.getSnapshot!==n||g||hn!==null&&(hn.memoizedState.tag&1)!==0,vs(t?9:8,{destroy:void 0},d0.bind(null,r,l,i,n),null),t){if(r.flags|=2048,Ke===null)throw Error(s(349));c||(xa&127)!==0||f0(r,n,i)}return i}function f0(t,n,i){t.flags|=16384,t={getSnapshot:n,value:i},n=he.updateQueue,n===null?(n=iu(),he.updateQueue=n,n.stores=[t]):(i=n.stores,i===null?n.stores=[t]:i.push(t))}function d0(t,n,i,r){n.value=i,n.getSnapshot=r,p0(n)&&m0(t)}function h0(t,n,i){return i(function(){p0(n)&&m0(t)})}function p0(t){var n=t.getSnapshot;t=t.value;try{var i=n();return!ei(t,i)}catch{return!0}}function m0(t){var n=yr(t,2);n!==null&&Kn(n,t,2)}function Bf(t){var n=Fn();if(typeof t=="function"){var i=t;if(t=i(),Lr){we(!0);try{i()}finally{we(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:t},n}function g0(t,n,i,r){return t.baseState=i,If(t,Ze,typeof r=="function"?r:Sa)}function fM(t,n,i,r,l){if(lu(t))throw Error(s(485));if(t=n.action,t!==null){var c={payload:l,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){c.listeners.push(g)}};gt.T!==null?i(!0):c.isTransition=!1,r(c),i=n.pending,i===null?(c.next=n.pending=c,_0(n,c)):(c.next=i.next,n.pending=i.next=c)}}function _0(t,n){var i=n.action,r=n.payload,l=t.state;if(n.isTransition){var c=gt.T,g={};g.types=c!==null?c.types:null,gt.T=g;try{var A=i(l,r),I=gt.S;I!==null&&I(g,A),v0(t,n,A)}catch(Q){Ff(t,n,Q)}finally{c!==null&&g.types!==null&&(c.types=g.types),gt.T=c}}else try{c=i(l,r),v0(t,n,c)}catch(Q){Ff(t,n,Q)}}function v0(t,n,i){i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(function(r){x0(t,n,r)},function(r){return Ff(t,n,r)}):x0(t,n,i)}function x0(t,n,i){n.status="fulfilled",n.value=i,S0(n),t.state=i,n=t.pending,n!==null&&(i=n.next,i===n?t.pending=null:(i=i.next,n.next=i,_0(t,i)))}function Ff(t,n,i){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=i,S0(n),n=n.next;while(n!==r)}t.action=null}function S0(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function M0(t,n){return n}function y0(t,n){if(Se){var i=Ke.formState;if(i!==null){t:{var r=he;if(Se){if(Qe){e:{for(var l=Qe,c=_i;l.nodeType!==8;){if(!c){l=null;break e}if(l=xi(l.nextSibling),l===null){l=null;break e}}c=l.data,l=c==="F!"||c==="F"?l:null}if(l){Qe=xi(l.nextSibling),r=l.data==="F!";break t}}Va(r)}r=!1}r&&(n=i[0])}}return i=Fn(),i.memoizedState=i.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:M0,lastRenderedState:n},i.queue=r,i=G0.bind(null,he,r),r.dispatch=i,r=Bf(!1),c=Wf.bind(null,he,!1,r.queue),r=Fn(),l={state:n,dispatch:null,action:t,pending:null},r.queue=l,i=fM.bind(null,he,l,c,i),l.dispatch=i,r.memoizedState=t,[n,i,!1]}function E0(t){var n=un();return b0(n,Ze,t)}function b0(t,n,i){if(n=If(t,n,M0)[0],t=ru(Sa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=Io(n)}catch(g){throw g===ps?Kl:g}else r=n;n=un();var l=n.queue,c=l.dispatch;return i!==n.memoizedState&&(he.flags|=2048,vs(9,{destroy:void 0},dM.bind(null,l,i),null)),[r,c,t]}function dM(t,n){t.action=n}function T0(t){var n=un(),i=Ze;if(i!==null)return b0(n,i,t);un(),n=n.memoizedState,i=un();var r=i.queue.dispatch;return i.memoizedState=t,[n,r,!1]}function vs(t,n,i,r){return t={tag:t,create:i,deps:r,inst:n,next:null},n=he.updateQueue,n===null&&(n=iu(),he.updateQueue=n),i=n.lastEffect,i===null?n.lastEffect=t.next=t:(r=i.next,i.next=t,t.next=r,n.lastEffect=t),t}function A0(){return un().memoizedState}function su(t,n,i,r){var l=Fn();he.flags|=t,l.memoizedState=vs(1|n,{destroy:void 0},i,r===void 0?null:r)}function ou(t,n,i,r){var l=un();r=r===void 0?null:r;var c=l.memoizedState.inst;Ze!==null&&r!==null&&Nf(r,Ze.memoizedState.deps)?l.memoizedState=vs(n,c,i,r):(he.flags|=t,l.memoizedState=vs(1|n,c,i,r))}function R0(t,n){su(8390656,8,t,n)}function Hf(t,n){ou(2048,8,t,n)}function hM(t){he.flags|=4;var n=he.updateQueue;if(n===null)n=iu(),he.updateQueue=n,n.events=[t];else{var i=n.events;i===null?n.events=[t]:i.push(t)}}function C0(t){var n=un().memoizedState;return hM({ref:n,nextImpl:t}),function(){if((ze&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function w0(t,n){return ou(4,2,t,n)}function N0(t,n){return ou(4,4,t,n)}function D0(t,n){if(typeof n=="function"){t=t();var i=n(t);return function(){typeof i=="function"?i():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function U0(t,n,i){i=i!=null?i.concat([t]):null,ou(4,4,D0.bind(null,n,t),i)}function Gf(){}function L0(t,n){var i=un();n=n===void 0?null:n;var r=i.memoizedState;return n!==null&&Nf(n,r[1])?r[0]:(i.memoizedState=[t,n],t)}function O0(t,n){var i=un();n=n===void 0?null:n;var r=i.memoizedState;if(n!==null&&Nf(n,r[1]))return r[0];if(r=t(),Lr){we(!0);try{t()}finally{we(!1)}}return i.memoizedState=[r,n],r}function Vf(t,n,i){return i===void 0||(xa&1073741824)!==0&&(Ae&261930)===0?t.memoizedState=n:(t.memoizedState=i,t=kg(),he.lanes|=t,tr|=t,i)}function P0(t,n,i,r){return ei(i,n)?i:Za.current!==null?(t=Vf(t,i,r),ei(t,n)||(pn=!0),t):(xa&106)===0||(xa&1073741824)!==0&&(Ae&261930)===0?(pn=!0,t.memoizedState=i):(t=kg(),he.lanes|=t,tr|=t,n)}function I0(t,n,i,r,l){var c=Rt.p;Rt.p=c!==0&&8>c?c:8;var g=gt.T,A={};A.types=g!==null?g.types:null,gt.T=A,Wf(t,!1,n,i);try{var I=l(),Q=gt.S;if(Q!==null&&Q(A,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var lt=lM(I,r);zo(t,n,lt,si(t))}else zo(t,n,r,si(t))}catch(Mt){zo(t,n,{then:function(){},status:"rejected",reason:Mt},si())}finally{Rt.p=c,g!==null&&A.types!==null&&(g.types=A.types),gt.T=g}}function pM(){}function Xf(t,n,i,r){if(t.tag!==5)throw Error(s(476));var l=z0(t).queue;I0(t,l,n,be,i===null?pM:function(){return B0(t),i(r)})}function z0(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:be,baseState:be,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:be},next:null};var i={};return n.next={memoizedState:i,baseState:i,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:i},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function B0(t){var n=z0(t);n.next===null&&(n=t.alternate.memoizedState),zo(t,n.next.queue,{},si())}function kf(){return An(zs)}function F0(){return un().memoizedState}function H0(){return un().memoizedState}function mM(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var i=si();t=qa(i);var r=Ya(n,t,i);r!==null&&(Kn(r,n,i),Do(r,n,i)),n={cache:vf()},t.payload=n;return}n=n.return}}function gM(t,n,i){var r=si();i={lane:r,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},lu(t)?V0(n,i):(i=uf(t,n,i,r),i!==null&&(Kn(i,t,r),X0(i,n,r)))}function G0(t,n,i){var r=si();zo(t,n,i,r)}function zo(t,n,i,r){var l={lane:r,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null};if(lu(t))V0(n,l);else{var c=t.alternate;if(t.lanes===0&&(c===null||c.lanes===0)&&(c=n.lastRenderedReducer,c!==null))try{var g=n.lastRenderedState,A=c(g,i);if(l.hasEagerState=!0,l.eagerState=A,ei(A,g))return Fl(t,n,l,0),Ke===null&&Bl(),!1}catch{}finally{}if(i=uf(t,n,l,r),i!==null)return Kn(i,t,r),X0(i,n,r),!0}return!1}function Wf(t,n,i,r){if(r={lane:2,revertLane:Pd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},lu(t)){if(n)throw Error(s(479))}else n=uf(t,i,r,2),n!==null&&Kn(n,t,2)}function lu(t){var n=t.alternate;return t===he||n!==null&&n===he}function V0(t,n){gs=eu=!0;var i=t.pending;i===null?n.next=n:(n.next=i.next,i.next=n),t.pending=n}function X0(t,n,i){if((i&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,i|=r,n.lanes=i,fo(t,i)}}var uu={readContext:An,use:au,useCallback:sn,useContext:sn,useEffect:sn,useImperativeHandle:sn,useLayoutEffect:sn,useInsertionEffect:sn,useMemo:sn,useReducer:sn,useRef:sn,useState:sn,useDebugValue:sn,useDeferredValue:sn,useTransition:sn,useSyncExternalStore:sn,useId:sn,useHostTransitionStatus:sn,useFormState:sn,useActionState:sn,useOptimistic:sn,useMemoCache:sn,useCacheRefresh:sn,useEffectEvent:sn},k0={readContext:An,use:au,useCallback:function(t,n){return Fn().memoizedState=[t,n===void 0?null:n],t},useContext:An,useEffect:R0,useImperativeHandle:function(t,n,i){i=i!=null?i.concat([t]):null,su(4194308,4,D0.bind(null,n,t),i)},useLayoutEffect:function(t,n){return su(4194308,4,t,n)},useInsertionEffect:function(t,n){su(4,2,t,n)},useMemo:function(t,n){var i=Fn();n=n===void 0?null:n;var r=t();if(Lr){we(!0);try{t()}finally{we(!1)}}return i.memoizedState=[r,n],r},useReducer:function(t,n,i){var r=Fn();if(i!==void 0){var l=i(n);if(Lr){we(!0);try{i(n)}finally{we(!1)}}}else l=n;return r.memoizedState=r.baseState=l,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:l},r.queue=t,t=t.dispatch=gM.bind(null,he,t),[r.memoizedState,t]},useRef:function(t){var n=Fn();return t={current:t},n.memoizedState=t},useState:function(t){t=Bf(t);var n=t.queue,i=G0.bind(null,he,n);return n.dispatch=i,[t.memoizedState,i]},useDebugValue:Gf,useDeferredValue:function(t,n){var i=Fn();return Vf(i,t,n)},useTransition:function(){var t=Bf(!1);return t=I0.bind(null,he,t.queue,!0,!1),Fn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,i){var r=he,l=Fn();if(Se){if(i===void 0)throw Error(s(407));i=i()}else{if(i=n(),Ke===null)throw Error(s(349));(Ae&127)!==0||f0(r,n,i)}l.memoizedState=i;var c={value:i,getSnapshot:n};return l.queue=c,R0(h0.bind(null,r,c,t),[t]),r.flags|=2048,vs(9,{destroy:void 0},d0.bind(null,r,c,i,n),null),i},useId:function(){var t=Fn(),n=Ke.identifierPrefix;if(Se){var i=Wi,r=ki;i=(r&~(1<<32-ce(r)-1)).toString(32)+i,n="_"+n+"R_"+i,i=nu++,0<i&&(n+="H"+i.toString(32)),n+="_"}else i=uM++,n="_"+n+"r_"+i.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:kf,useFormState:y0,useActionState:y0,useOptimistic:function(t){var n=Fn();n.memoizedState=n.baseState=t;var i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=i,n=Wf.bind(null,he,!0,i),i.dispatch=n,[t,n]},useMemoCache:Pf,useCacheRefresh:function(){return Fn().memoizedState=mM.bind(null,he)},useEffectEvent:function(t){var n=Fn(),i={impl:t};return n.memoizedState=i,function(){if((ze&2)!==0)throw Error(s(440));return i.impl.apply(void 0,arguments)}}},W0={readContext:An,use:au,useCallback:L0,useContext:An,useEffect:Hf,useImperativeHandle:U0,useInsertionEffect:w0,useLayoutEffect:N0,useMemo:O0,useReducer:ru,useRef:A0,useState:function(){return ru(Sa)},useDebugValue:Gf,useDeferredValue:function(t,n){var i=un();return P0(i,Ze.memoizedState,t,n)},useTransition:function(){var t=ru(Sa)[0],n=un().memoizedState;return[typeof t=="boolean"?t:Io(t),n]},useSyncExternalStore:c0,useId:F0,useHostTransitionStatus:kf,useFormState:E0,useActionState:E0,useOptimistic:function(t,n){var i=un();return g0(i,Ze,t,n)},useMemoCache:Pf,useCacheRefresh:H0,useEffectEvent:C0},_M={readContext:An,use:au,useCallback:L0,useContext:An,useEffect:Hf,useImperativeHandle:U0,useInsertionEffect:w0,useLayoutEffect:N0,useMemo:O0,useReducer:zf,useRef:A0,useState:function(){return zf(Sa)},useDebugValue:Gf,useDeferredValue:function(t,n){var i=un();return Ze===null?Vf(i,t,n):P0(i,Ze.memoizedState,t,n)},useTransition:function(){var t=zf(Sa)[0],n=un().memoizedState;return[typeof t=="boolean"?t:Io(t),n]},useSyncExternalStore:c0,useId:F0,useHostTransitionStatus:kf,useFormState:T0,useActionState:T0,useOptimistic:function(t,n){var i=un();return Ze!==null?g0(i,Ze,t,n):(i.baseState=t,[t,i.queue.dispatch])},useMemoCache:Pf,useCacheRefresh:H0,useEffectEvent:C0};function qf(t,n,i,r){n=t.memoizedState,i=i(r,n),i=i==null?n:P({},n,i),t.memoizedState=i,t.lanes===0&&(t.updateQueue.baseState=i)}var Yf={enqueueSetState:function(t,n,i){t=t._reactInternals;var r=si(),l=qa(r);l.payload=n,i!=null&&(l.callback=i),n=Ya(t,l,r),n!==null&&(Kn(n,t,r),Do(n,t,r))},enqueueReplaceState:function(t,n,i){t=t._reactInternals;var r=si(),l=qa(r);l.tag=1,l.payload=n,i!=null&&(l.callback=i),n=Ya(t,l,r),n!==null&&(Kn(n,t,r),Do(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var i=si(),r=qa(i);r.tag=2,n!=null&&(r.callback=n),n=Ya(t,r,i),n!==null&&(Kn(n,t,i),Do(n,t,i))}};function q0(t,n,i,r,l,c,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,c,g):n.prototype&&n.prototype.isPureReactComponent?!Eo(i,r)||!Eo(l,c):!0}function Y0(t,n,i,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(i,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(i,r),n.state!==t&&Yf.enqueueReplaceState(n,n.state,null)}function Or(t,n){var i=n;if("ref"in n){i={};for(var r in n)r!=="ref"&&(i[r]=n[r])}if(t=t.defaultProps){i===n&&(i=P({},i));for(var l in t)i[l]===void 0&&(i[l]=t[l])}return i}function Z0(t){zl(t)}function K0(t){console.error(t)}function j0(t){zl(t)}function cu(t,n){try{var i=t.onUncaughtError;i(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function Q0(t,n,i){try{var r=t.onCaughtError;r(i.value,{componentStack:i.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Zf(t,n,i){return i=qa(i),i.tag=3,i.payload={element:null},i.callback=function(){cu(t,n)},i}function J0(t){return t=qa(t),t.tag=3,t}function $0(t,n,i,r){var l=i.type.getDerivedStateFromError;if(typeof l=="function"){var c=r.value;t.payload=function(){return l(c)},t.callback=function(){Q0(n,i,r)}}var g=i.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(t.callback=function(){Q0(n,i,r),typeof l!="function"&&(er===null?er=new Set([this]):er.add(this));var A=r.stack;this.componentDidCatch(r.value,{componentStack:A!==null?A:""})})}function vM(t,n,i,r,l){if(i.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=i.alternate,n!==null&&Ar(n,i,l,!0),i=Rn.current,i!==null){switch(i.tag){case 31:case 13:case 19:return Ln===null?Du():i.alternate===null&&on===0&&(on=3),i.flags&=-257,i.flags|=65536,i.lanes=l,r===jl?i.flags|=16384:(n=i.updateQueue,n===null?i.updateQueue=new Set([r]):n.add(r),Ud(t,r,l)),!1;case 22:return i.flags|=65536,r===jl?i.flags|=16384:(n=i.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},i.updateQueue=n):(i=n.retryQueue,i===null?n.retryQueue=new Set([r]):i.add(r)),Ud(t,r,l)),!1}throw Error(s(435,i.tag))}return Ud(t,r,l),Du(),!1}if(Se)return n=Rn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=l,r!==pf&&(t=Error(s(422),{cause:r}),Ao(pi(t,i)))):(r!==pf&&(n=Error(s(423),{cause:r}),Ao(pi(n,i))),t=t.current.alternate,t.flags|=65536,l&=-l,t.lanes|=l,r=pi(r,i),l=Zf(t.stateNode,r,l),bf(t,l),on!==4&&(on=2)),!1;var c=Error(s(520),{cause:r});if(c=pi(c,i),Wo===null?Wo=[c]:Wo.push(c),on!==4&&(on=2),n===null)return!0;r=pi(r,i),i=n;do{switch(i.tag){case 3:return i.flags|=65536,t=l&-l,i.lanes|=t,t=Zf(i.stateNode,r,t),bf(i,t),!1;case 1:if(n=i.type,c=i.stateNode,(i.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(er===null||!er.has(c))))return i.flags|=65536,l&=-l,i.lanes|=l,l=J0(l),$0(l,t,i,r),bf(i,l),!1;break;case 22:if(i.memoizedState!==null)return i.flags|=65536,!1}i=i.return}while(i!==null);return!1}var Kf=Error(s(461)),pn=!1;function vn(t,n,i,r){n.child=t===null?i0(n,null,i,r):Ur(n,t.child,i,r)}function tg(t,n,i,r,l){i=i.render;var c=n.ref;if("ref"in r){var g={};for(var A in r)A!=="ref"&&(g[A]=r[A])}else g=r;return Rr(n),r=Df(t,n,i,g,c,l),A=Uf(),t!==null&&!pn?(Lf(t,n,l),Ma(t,n,l)):(Se&&A&&Xl(n),n.flags|=1,vn(t,n,r,l),n.child)}function eg(t,n,i,r,l){if(t===null){var c=i.type;return typeof c=="function"&&!cf(c)&&c.defaultProps===void 0&&i.compare===null?(n.tag=15,n.type=c,ng(t,n,c,r,l)):(t=Gl(i.type,null,r,n,n.mode,l),t.ref=n.ref,t.return=n,n.child=t)}if(c=t.child,!id(t,l)){var g=c.memoizedProps;if(i=i.compare,i=i!==null?i:Eo,i(g,r)&&t.ref===n.ref)return Ma(t,n,l)}return n.flags|=1,t=ma(c,r),t.ref=n.ref,t.return=n,n.child=t}function ng(t,n,i,r,l){if(t!==null){var c=t.memoizedProps;if(Eo(c,r)&&t.ref===n.ref)if(pn=!1,n.pendingProps=r=c,id(t,l))(t.flags&131072)!==0&&(pn=!0);else return n.lanes=t.lanes,Ma(t,n,l)}return jf(t,n,i,r,l)}function ig(t,n,i,r){var l=r.children,c=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(c=c!==null?c.baseLanes|i:i,t!==null){for(r=n.child=t.child,l=0;r!==null;)l=l|r.lanes|r.childLanes,r=r.sibling;r=l&~c}else r=0,n.child=null;return ag(t,n,c,i,r)}if((i&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Zl(n,c!==null?c.cachePool:null),c!==null?s0(n,c):Af(),o0(n);else return r=n.lanes=536870912,ag(t,n,c!==null?c.baseLanes|i:i,i,r)}else c!==null?(Zl(n,c.cachePool),s0(n,c),ja(),n.memoizedState=null):(t!==null&&Zl(n,null),Af(),ja());return vn(t,n,l,i),n.child}function Bo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function ag(t,n,i,r,l){var c=Sf();return c=c===null?null:{parent:dn._currentValue,pool:c},n.memoizedState={baseLanes:i,cachePool:c},t!==null&&Zl(n,null),Af(),o0(n),t!==null&&Ar(t,n,r,!0),n.childLanes=l,null}function fu(t,n){return n=du({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function rg(t,n,i){return Ur(n,t.child,null,i),t=fu(n,n.pendingProps),t.flags|=2,ni(n),n.memoizedState=null,t}function xM(t,n,i){var r=n.pendingProps,l=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Se){if(r.mode==="hidden")return t=fu(n,r),n.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},Bo(null,t);if(Cf(n),(t=Qe)?(t=D_(t,_i),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ha!==null?{id:ki,overflow:Wi}:null,retryLane:536870912,hydrationErrors:null},i=Vm(t),i.return=n,n.child=i,Mn=n,Qe=null)):t=null,t===null)throw Va(n);return n.lanes=536870912,null}return fu(n,r)}var c=t.memoizedState;if(c!==null){var g=c.dehydrated;if(Cf(n),l)if(n.flags&256)n.flags&=-257,n=rg(t,n,i);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(pn||Ar(t,n,i,!1),l=(i&t.childLanes)!==0,pn||l){if(Za.current===null){if(r=Ke,r!==null&&(g=ho(r,i),g!==0&&g!==c.retryLane))throw c.retryLane=g,yr(t,g),Kn(r,t,g),Kf;Du()}n=rg(t,n,i)}else t=c.treeContext,Qe=xi(g.nextSibling),Mn=n,Se=!0,Ga=null,_i=!1,t!==null&&Wm(n,t),n=fu(n,r),n.flags|=134221824;return n}return t=ma(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function xs(t,n){var i=n.ref;if(i===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof i!="function"&&typeof i!="object")throw Error(s(284));(t===null||t.ref!==i)&&(n.flags|=4194816)}}function jf(t,n,i,r,l){return Rr(n),i=Df(t,n,i,r,void 0,l),r=Uf(),t!==null&&!pn?(Lf(t,n,l),Ma(t,n,l)):(Se&&r&&Xl(n),n.flags|=1,vn(t,n,i,l),n.child)}function sg(t,n,i,r,l,c){return Rr(n),n.updateQueue=null,i=u0(n,r,i,l),l0(t),r=Uf(),t!==null&&!pn?(Lf(t,n,c),Ma(t,n,c)):(Se&&r&&Xl(n),n.flags|=1,vn(t,n,i,c),n.child)}function og(t,n,i,r,l){if(Rr(n),n.stateNode===null){var c=us,g=i.contextType;typeof g=="object"&&g!==null&&(c=An(g)),c=new i(r,c),n.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=Yf,n.stateNode=c,c._reactInternals=n,c=n.stateNode,c.props=r,c.state=n.memoizedState,c.refs={},yf(n),g=i.contextType,c.context=typeof g=="object"&&g!==null?An(g):us,c.state=n.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(qf(n,i,g,r),c.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(g=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),g!==c.state&&Yf.enqueueReplaceState(c,c.state,null),Lo(n,r,c,l),Uo(),c.state=n.memoizedState),typeof c.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){c=n.stateNode;var A=n.memoizedProps,I=Or(i,A);c.props=I;var Q=c.context,lt=i.contextType;g=us,typeof lt=="object"&&lt!==null&&(g=An(lt));var Mt=i.getDerivedStateFromProps;lt=typeof Mt=="function"||typeof c.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,lt||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(A||Q!==g)&&Y0(n,c,r,g),Wa=!1;var Y=n.memoizedState;c.state=Y,Lo(n,r,c,l),Uo(),Q=n.memoizedState,A||Y!==Q||Wa?(typeof Mt=="function"&&(qf(n,i,Mt,r),Q=n.memoizedState),(I=Wa||q0(n,i,I,r,Y,Q,g))?(lt||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(n.flags|=4194308)):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=Q),c.props=r,c.state=Q,c.context=g,r=I):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{c=n.stateNode,Ef(t,n),g=n.memoizedProps,lt=Or(i,g),c.props=lt,Mt=n.pendingProps,Y=c.context,Q=i.contextType,I=us,typeof Q=="object"&&Q!==null&&(I=An(Q)),A=i.getDerivedStateFromProps,(Q=typeof A=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(g!==Mt||Y!==I)&&Y0(n,c,r,I),Wa=!1,Y=n.memoizedState,c.state=Y,Lo(n,r,c,l),Uo();var rt=n.memoizedState;g!==Mt||Y!==rt||Wa||t!==null&&t.dependencies!==null&&ql(t.dependencies)?(typeof A=="function"&&(qf(n,i,A,r),rt=n.memoizedState),(lt=Wa||q0(n,i,lt,r,Y,rt,I)||t!==null&&t.dependencies!==null&&ql(t.dependencies))?(Q||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(r,rt,I),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(r,rt,I)),typeof c.componentDidUpdate=="function"&&(n.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof c.componentDidUpdate!="function"||g===t.memoizedProps&&Y===t.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&Y===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=rt),c.props=r,c.state=rt,c.context=I,r=lt):(typeof c.componentDidUpdate!="function"||g===t.memoizedProps&&Y===t.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&Y===t.memoizedState||(n.flags|=1024),r=!1)}return c=r,xs(t,n),r=(n.flags&128)!==0,c||r?(c=n.stateNode,i=r&&typeof i.getDerivedStateFromError!="function"?null:c.render(),n.flags|=1,t!==null&&r?(n.child=Ur(n,t.child,null,l),n.child=Ur(n,null,i,l)):vn(t,n,i,l),n.memoizedState=c.state,t=n.child):t=Ma(t,n,l),t}function lg(t,n,i,r){return br(),n.flags|=256,vn(t,n,i,r),n.child}var Qf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Jf(t){return{baseLanes:t,cachePool:Qm()}}function $f(t,n,i){return t=t!==null?t.childLanes&~i:0,n&&(t|=ri),t}function ug(t,n,i){var r=n.pendingProps,l=!1,c=(n.flags&128)!==0,g;if((g=c)||(g=t!==null&&t.memoizedState===null?!1:(Cn.current&2)!==0),g&&(l=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,t===null){if(Se){if(l?Ka(n):ja(),(t=Qe)?(t=D_(t,_i),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ha!==null?{id:ki,overflow:Wi}:null,retryLane:536870912,hydrationErrors:null},i=Vm(t),i.return=n,n.child=i,Mn=n,Qe=null)):t=null,t===null)throw Va(n);return Jd(t)?n.lanes=32:n.lanes=536870912,null}return c=r.children,r=r.fallback,l?(ja(),l=n.mode,c=du({mode:"hidden",children:c},l),r=Er(r,l,i,null),c.return=n,r.return=n,c.sibling=r,n.child=c,r=n.child,r.memoizedState=Jf(i),r.childLanes=$f(t,g,i),n.memoizedState=Qf,Bo(null,r)):(Ka(n),td(n,c))}var A=t.memoizedState;if(A!==null){var I=A.dehydrated;if(I!==null)return SM(t,n,c,g,r,I,A,i)}return l?(ja(),l=r.fallback,c=n.mode,A=t.child,I=A.sibling,r=ma(A,{mode:"hidden",children:r.children}),r.subtreeFlags=A.subtreeFlags&1206910976,I!==null?l=ma(I,l):(l=Er(l,c,i,null),l.flags|=2),l.return=n,r.return=n,r.sibling=l,n.child=r,Bo(null,r),r=n.child,l=t.child.memoizedState,l===null?l=Jf(i):(c=l.cachePool,c!==null?(A=dn._currentValue,c=c.parent!==A?{parent:A,pool:A}:c):c=Qm(),l={baseLanes:l.baseLanes|i,cachePool:c}),r.memoizedState=l,r.childLanes=$f(t,g,i),n.memoizedState=Qf,Bo(t.child,r)):(Ka(n),i=t.child,t=i.sibling,i=ma(i,{mode:"visible",children:r.children}),i.return=n,i.sibling=null,t!==null&&(g=n.deletions,g===null?(n.deletions=[t],n.flags|=16):g.push(t)),n.child=i,n.memoizedState=null,i)}function td(t,n){return n=du({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function du(t,n){return t=Wn(22,t,null,n),t.lanes=0,t}function hu(t,n,i){return Ur(n,t.child,null,i),t=td(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function SM(t,n,i,r,l,c,g,A){if(i)return n.flags&256?(Ka(n),n.flags&=-257,hu(t,n,A)):n.memoizedState!==null?(ja(),n.child=t.child,n.flags|=128,null):(ja(),c=l.fallback,g=n.mode,l=du({mode:"visible",children:l.children},g),c=Er(c,g,A,null),c.flags|=2,l.return=n,c.return=n,l.sibling=c,n.child=l,Ur(n,t.child,null,A),l=n.child,l.memoizedState=Jf(A),l.childLanes=$f(t,r,A),n.memoizedState=Qf,Bo(null,l));if(Ka(n),Jd(c)){if(r=c.nextSibling&&c.nextSibling.dataset,r)var I=r.dgst;return r=I,r!==""&&(l=Error(s(419)),l.stack="",l.digest=r,Ao({value:l,source:null,stack:null})),hu(t,n,A)}if(pn||Ar(t,n,A,!1),r=(A&t.childLanes)!==0,pn||r){if(Za.current!==null)return hu(t,n,A);if(r=Ke,r!==null&&(l=ho(r,A),l!==0&&l!==g.retryLane))throw g.retryLane=l,yr(t,l),Kn(r,t,l),Kf;return Qd(c)||Du(),hu(t,n,A)}return Qd(c)?(n.flags|=192,n.child=t.child,null):(t=g.treeContext,Qe=xi(c.nextSibling),Mn=n,Se=!0,Ga=null,_i=!1,t!==null&&Wm(n,t),n=td(n,l.children),n.flags|=134221824,n)}function cg(t,n,i){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),Wl(t.return,n,i)}function fg(t){for(var n=null;t!==null;){var i=t.alternate;i!==null&&tu(i)===null&&(n=t),t=t.sibling}return n}function pu(t,n,i,r,l,c){var g=t.memoizedState;g===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:i,tailMode:l,treeForkCount:c}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=r,g.tail=i,g.tailMode=l,g.treeForkCount=c)}function ed(t){var n=t.child;for(t.child=null;n!==null;){var i=n.sibling;n.sibling=t.child,t.child=n,n=i}}function nd(t,n,i){var r=n.pendingProps,l=r.revealOrder,c=r.tail;r=r.children;var g=Cn.current;if(n.flags&128)return Oo(n,g),null;var A=(g&2)!==0;if(A?(g=g&1|2,n.flags|=128):g&=1,Oo(n,g),l==="backwards"&&t!==null?(ed(t),vn(t,n,r,i),ed(t)):vn(t,n,r,i),r=Se?To:0,!A&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&cg(t,i,n);else if(t.tag===19)cg(t,i,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(l){case"backwards":i=fg(n.child),i===null?(l=n.child,n.child=null):(l=i.sibling,i.sibling=null,ed(n)),pu(n,!0,l,null,c,r);break;case"unstable_legacy-backwards":for(i=null,l=n.child,n.child=null;l!==null;){if(t=l.alternate,t!==null&&tu(t)===null){n.child=l;break}t=l.sibling,l.sibling=i,i=l,l=t}pu(n,!0,i,null,c,r);break;case"together":pu(n,!1,null,null,void 0,r);break;case"independent":n.memoizedState=null;break;default:i=fg(n.child),i===null?(l=n.child,n.child=null):(l=i.sibling,i.sibling=null),pu(n,!1,l,i,c,r)}return n.child}function dg(t,n,i){var r=n.pendingProps;return Xa(n,n.type,r.value),vn(t,n,r.children,i),n.child}function Ma(t,n,i){if(t!==null&&(n.dependencies=t.dependencies),tr|=n.lanes,(i&n.childLanes)===0)if(t!==null){if(Ar(t,n,i,!1),(i&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,i=ma(t,t.pendingProps),n.child=i,i.return=n;t.sibling!==null;)t=t.sibling,i=i.sibling=ma(t,t.pendingProps),i.return=n;i.sibling=null}return n.child}function id(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&ql(t)))}function MM(t,n,i){switch(n.tag){case 3:V(n,n.stateNode.containerInfo),Xa(n,dn,t.memoizedState.cache),br();break;case 27:case 5:Le(n);break;case 4:V(n,n.stateNode.containerInfo);break;case 10:Xa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Cf(n),null;break;case 13:var r=n.memoizedState;if(r!==null){if(r.dehydrated!==null)return Ka(n),n.flags|=128,null;r=Ar(t,n,i,!1);var l=n.child.childLanes;return r||(i&l)!==0?ug(t,n,i):(Ka(n),t=Ma(t,n,i),t!==null?t.sibling:null)}Ka(n);break;case 19:if(n.flags&128)return nd(t,n,i);if(l=(t.flags&128)!==0,r=(i&n.childLanes)!==0,r||(Ar(t,n,i,!1),r=(i&n.childLanes)!==0),l){if(r)return nd(t,n,i);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Oo(n,Cn.current),r)break;return null;case 22:return n.lanes=0,ig(t,n,i,n.pendingProps);case 24:Xa(n,dn,t.memoizedState.cache)}return Ma(t,n,i)}function hg(t,n,i){if(t!==null)if(t.memoizedProps!==n.pendingProps)pn=!0;else{if(!id(t,i)&&(n.flags&128)===0)return pn=!1,MM(t,n,i);pn=(t.flags&131072)!==0}else pn=!1,Se&&(n.flags&1048576)!==0&&km(n,To,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(t=Nr(n.elementType),n.type=t,typeof t=="function")cf(t)?(r=Or(t,r),n.tag=1,n=og(null,n,t,r,i)):(n.tag=0,n=jf(null,n,t,r,i));else{if(t!=null){var l=t.$$typeof;if(l===W){n.tag=11,n=tg(null,n,t,r,i);break t}else if(l===ot){n.tag=14,n=eg(null,n,t,r,i);break t}else if(l===$){n.tag=10,n.type=t,n=dg(null,n,i);break t}}throw n=At(t)||t,Error(s(306,n,""))}}return n;case 0:return jf(t,n,n.type,n.pendingProps,i);case 1:return r=n.type,l=Or(r,n.pendingProps),og(t,n,r,l,i);case 3:t:{if(V(n,n.stateNode.containerInfo),t===null)throw Error(s(387));r=n.pendingProps;var c=n.memoizedState;l=c.element,Ef(t,n),Lo(n,r,null,i);var g=n.memoizedState;if(r=g.cache,Xa(n,dn,r),r!==c.cache&&_f(n,[dn],i,!0),Uo(),r=g.element,c.isDehydrated)if(c={element:r,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=lg(t,n,r,i);break t}else if(r!==l){l=pi(Error(s(424)),n),Ao(l),n=lg(t,n,r,i);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Qe=xi(t.firstChild),Mn=n,Se=!0,Ga=null,_i=!0,i=i0(n,null,r,i),n.child=i;i;)i.flags=i.flags&-3|134221824,i=i.sibling}else{if(br(),r===l){n=Ma(t,n,i);break t}vn(t,n,r,i)}n=n.child}return n;case 26:return xs(t,n),t===null?(i=B_(n.type,null,n.pendingProps,null))?n.memoizedState=i:Se||(n.stateNode=__(n.type,n.pendingProps,Oe.current,n)):n.memoizedState=B_(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Le(n),t===null&&Se&&(r=n.stateNode=O_(n.type,n.pendingProps,Oe.current),Mn=n,_i=!0,l=Qe,ar(n.type)?($d=l,Qe=xi(r.firstChild)):Qe=l),vn(t,n,n.pendingProps.children,i),xs(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Se&&((l=r=Qe)&&(r=my(r,n.type,n.pendingProps,_i),r!==null?(n.stateNode=r,Mn=n,Qe=xi(r.firstChild),_i=!1,l=!0):l=!1),l||Va(n)),Le(n),l=n.type,c=n.pendingProps,g=t!==null?t.memoizedProps:null,r=c.children,kd(l,c)?r=null:g!==null&&kd(l,g)&&(n.flags|=32),n.memoizedState!==null&&(l=Df(t,n,cM,null,null,i),zs._currentValue=l),xs(t,n),vn(t,n,r,i),n.child;case 6:return t===null&&Se&&((t=i=Qe)&&(i=gy(i,n.pendingProps,_i),i!==null?(n.stateNode=i,Mn=n,Qe=null,t=!0):t=!1),t||Va(n)),null;case 13:return ug(t,n,i);case 4:return V(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=Ur(n,null,r,i):vn(t,n,r,i),n.child;case 11:return tg(t,n,n.type,n.pendingProps,i);case 7:return r=n.pendingProps,xs(t,n),vn(t,n,r,i),n.child;case 8:return vn(t,n,n.pendingProps.children,i),n.child;case 12:return vn(t,n,n.pendingProps.children,i),n.child;case 10:return dg(t,n,i);case 9:return l=n.type._context,r=n.pendingProps.children,Rr(n),l=An(l),r=r(l),n.flags|=1,vn(t,n,r,i),n.child;case 14:return eg(t,n,n.type,n.pendingProps,i);case 15:return ng(t,n,n.type,n.pendingProps,i);case 19:return nd(t,n,i);case 31:return xM(t,n,i);case 22:return ig(t,n,i,n.pendingProps);case 24:return Rr(n),r=An(dn),t===null?(l=Sf(),l===null&&(l=Ke,c=vf(),l.pooledCache=c,c.refCount++,c!==null&&(l.pooledCacheLanes|=i),l=c),n.memoizedState={parent:r,cache:l},yf(n),Xa(n,dn,l)):((t.lanes&i)!==0&&(Ef(t,n),Lo(n,null,null,i),Uo()),l=t.memoizedState,c=n.memoizedState,l.parent!==r?(l={parent:r,cache:r},n.memoizedState=l,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=l),Xa(n,dn,r)):(r=c.cache,Xa(n,dn,r),r!==l.cache&&_f(n,[dn],i,!0))),vn(t,n,n.pendingProps.children,i),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=n.pendingProps,r.name!=null&&r.name!=="auto"?n.flags|=t===null?18882560:18874368:Se&&Xl(n),t!==null&&t.memoizedProps.name!==r.name?n.flags|=4194816:xs(t,n),vn(t,n,r.children,i),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ya(t){t.flags|=4}function ad(t,n,i,r,l){var c;if((c=(t.mode&32)!==0)&&(c=i===null?V_(n,r):V_(n,r)&&(r.src!==i.src||r.srcSet!==i.srcSet)),c){if(t.flags|=16777216,(l&335544128)===l)if(t.stateNode.complete)t.flags|=8192;else if(Zg())t.flags|=8192;else throw Dr=jl,Mf}else t.flags&=-16777217}function pg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!X_(n))if(Zg())t.flags|=8192;else throw Dr=jl,Mf}function mu(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?co():536870912,t.lanes|=n,bs|=n)}function Fo(t,n){if(!Se)switch(t.tailMode){case"visible":break;case"collapsed":for(var i=t.tail,r=null;i!==null;)i.alternate!==null&&(r=i),i=i.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null;break;default:for(n=t.tail,i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t.tail=null:i.sibling=null}}function Je(t){var n=t.alternate!==null&&t.alternate.child===t.child,i=0,r=0;if(n)for(var l=t.child;l!==null;)i|=l.lanes|l.childLanes,r|=l.subtreeFlags&1206910976,r|=l.flags&1206910976,l.return=t,l=l.sibling;else for(l=t.child;l!==null;)i|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=t,l=l.sibling;return t.subtreeFlags|=r,t.childLanes=i,n}function yM(t,n,i){var r=n.pendingProps;switch(hf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(n),null;case 1:return Je(n),null;case 3:return i=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),va(dn),en(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ds(n)?ya(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,mf())),Je(n),null;case 26:var l=n.type,c=n.memoizedState;return t===null?(ya(n),c!==null?(Je(n),pg(n,c)):(Je(n),ad(n,l,null,r,i))):c?c!==t.memoizedState?(ya(n),Je(n),pg(n,c)):(Je(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&ya(n),Je(n),ad(n,l,t,r,i)),null;case 27:if(D(n),i=Oe.current,l=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&ya(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Je(n),n.subtreeFlags&=-33554433,null}t=Ve.current,ds(n)?qm(n):(t=O_(l,r,i),n.stateNode=t,ya(n))}return Je(n),n.subtreeFlags&=-33554433,null;case 5:if(D(n),l=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&ya(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Je(n),n.subtreeFlags&=-33554433,null}if(c=Ve.current,ds(n))qm(n);else{var g=jo(Oe.current);switch(c){case 1:c=g.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:c=g.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":c=g.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":c=g.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":c=g.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof r.is=="string"?g.createElement("select",{is:r.is}):g.createElement("select"),r.multiple?c.multiple=!0:r.size&&(c.size=r.size);break;default:c=typeof r.is=="string"?g.createElement(l,{is:r.is}):g.createElement(l)}}c[T]=n,c[B]=r;t:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)c.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break t;for(;g.sibling===null;){if(g.return===null||g.return===n)break t;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=c;t:switch(Nn(c,l,r),l){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&ya(n)}}return Je(n),n.subtreeFlags&=-33554433,ad(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,i),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&ya(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=Oe.current,ds(n)){if(t=n.stateNode,i=n.memoizedProps,r=null,l=Mn,l!==null)switch(l.tag){case 27:case 5:r=l.memoizedProps}t[T]=n,t=!!(t.nodeValue===i||r!==null&&r.suppressHydrationWarning===!0||h_(t.nodeValue,i)),t||Va(n,!0)}else t=jo(t).createTextNode(r),t[T]=n,n.stateNode=t}return Je(n),null;case 31:if(i=n.memoizedState,t===null||t.memoizedState!==null){if(r=ds(n),i!==null){if(t===null){if(!r)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[T]=n}else br(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Je(n),t=!1}else i=mf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),t=!0;if(!t)return n.flags&256?(ni(n),n):(ni(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Je(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(l=ds(n),r!==null&&r.dehydrated!==null){if(t===null){if(!l)throw Error(s(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));l[T]=n}else br(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Je(n),l=!1}else l=mf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),l=!0;if(!l)return n.flags&256?(ni(n),n):(ni(n),null)}return ni(n),(n.flags&128)!==0?(n.lanes=i,n):(i=r!==null,t=t!==null&&t.memoizedState!==null,i&&(r=n.child,l=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(l=r.alternate.memoizedState.cachePool.pool),c=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(c=r.memoizedState.cachePool.pool),c!==l&&(r.flags|=2048)),i!==t&&i&&(n.child.flags|=8192),mu(n,n.updateQueue),Je(n),null);case 4:return en(),t===null&&Fd(n.stateNode.containerInfo),n.flags|=67108864,Je(n),null;case 10:return va(n.type),Je(n),null;case 19:if(wf(n),r=n.memoizedState,r===null)return Je(n),null;if(l=(n.flags&128)!==0,c=r.rendering,c===null)if(l)Fo(r,!1);else{if(on!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(c=tu(t),c!==null){for(n.flags|=128,Fo(r,!1),t=c.updateQueue,n.updateQueue=t,mu(n,t),n.subtreeFlags=0,t=i,i=n.child;i!==null;)Gm(i,t),i=i.sibling;return Oo(n,Cn.current&1|2),Se&&ga(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&Wt()>Ru&&(n.flags|=128,l=!0,Fo(r,!1),n.lanes=4194304)}else{if(!l)if(t=tu(c),t!==null){if(n.flags|=128,l=!0,t=t.updateQueue,n.updateQueue=t,mu(n,t),Fo(r,!0),r.tail===null&&r.tailMode!=="collapsed"&&r.tailMode!=="visible"&&!c.alternate&&!Se)return Je(n),null}else 2*Wt()-r.renderingStartTime>Ru&&i!==536870912&&(n.flags|=128,l=!0,Fo(r,!1),n.lanes=4194304);r.isBackwards?(c.sibling=n.child,n.child=c):(t=r.last,t!==null?t.sibling=c:n.child=c,r.last=c)}if(r.tail!==null){t=r.tail;t:{for(i=t;i!==null;){if(i.alternate!==null){i=!1;break t}i=i.sibling}i=!0}return r.rendering=t,r.tail=t.sibling,r.renderingStartTime=Wt(),t.sibling=null,c=Cn.current,c=l?c&1|2:c&1,r.tailMode==="visible"||r.tailMode==="collapsed"||!i||Se?Oo(n,c):(i=c,ie(Rn,n),ie(Cn,i),Ln===null&&(Ln=n)),Se&&ga(n,r.treeForkCount),t}return Je(n),null;case 22:case 23:return ni(n),Rf(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(i&536870912)!==0&&(n.flags&128)===0&&(Je(n),n.subtreeFlags&6&&(n.flags|=8192)):Je(n),i=n.updateQueue,i!==null&&mu(n,i.retryQueue),i=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==i&&(n.flags|=2048),t!==null&&te(wr),null;case 24:return i=null,t!==null&&(i=t.memoizedState.cache),n.memoizedState.cache!==i&&(n.flags|=2048),va(dn),Je(n),null;case 25:return null;case 30:return n.flags|=33554432,Je(n),null}throw Error(s(156,n.tag))}function EM(t,n){switch(hf(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return va(dn),en(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return D(n),null;case 31:if(n.memoizedState!==null){if(ni(n),n.alternate===null)throw Error(s(340));br()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ni(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));br()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return wf(n),t=n.flags,t&65536?(n.flags=t&-65537|128,t=n.memoizedState,t!==null&&(t.rendering=null,t.tail=null),n.flags|=4,n):null;case 4:return en(),null;case 10:return va(n.type),null;case 22:case 23:return ni(n),Rf(),t!==null&&te(wr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return va(dn),null;case 25:return null;default:return null}}function mg(t,n){switch(hf(n),n.tag){case 3:va(dn),en();break;case 26:case 27:case 5:D(n);break;case 4:en();break;case 31:n.memoizedState!==null&&ni(n);break;case 13:ni(n);break;case 19:wf(n);break;case 10:va(n.type);break;case 22:case 23:ni(n),Rf(),t!==null&&te(wr);break;case 24:va(dn)}}function Ho(t,n){try{var i=n.updateQueue,r=i!==null?i.lastEffect:null;if(r!==null){var l=r.next;i=l;do{if((i.tag&t)===t){r=void 0;var c=i.create,g=i.inst;r=c(),g.destroy=r}i=i.next}while(i!==l)}}catch(A){ke(n,n.return,A)}}function Qa(t,n,i){try{var r=n.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var c=l.next;r=c;do{if((r.tag&t)===t){var g=r.inst,A=g.destroy;if(A!==void 0){g.destroy=void 0,l=n;var I=i,Q=A;try{Q()}catch(lt){ke(l,I,lt)}}}r=r.next}while(r!==c)}}catch(lt){ke(n,n.return,lt)}}function gg(t){var n=t.updateQueue;if(n!==null){var i=t.stateNode;try{r0(n,i)}catch(r){ke(t,t.return,r)}}}function _g(t,n,i){i.props=Or(t.type,t.memoizedProps),i.state=t.memoizedState;try{i.componentWillUnmount()}catch(r){ke(t,n,r)}}function qi(t,n){try{var i=t.ref;if(i!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:var l=t.stateNode,c=ha(t.memoizedProps,l);(l.ref===null||l.ref.name!==c)&&(l.ref=b_(c)),r=l.ref;break;case 7:if(t.stateNode===null){var g=new oi(t);v(t.child,!1,hy,g,void 0,void 0),t.stateNode=g}r=t.stateNode;break;default:r=t.stateNode}typeof i=="function"?t.refCleanup=i(r):i.current=r}}catch(A){ke(t,n,A)}}function wn(t,n){var i=t.ref,r=t.refCleanup;if(i!==null)if(typeof r=="function")try{r()}catch(l){ke(t,n,l)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof i=="function")try{i(null)}catch(l){ke(t,n,l)}else i.current=null}function gu(t,n){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&n!==null)for(var i=0;i<n.length;i++)N_(t.stateNode,n[i])}function vg(t){for(var n=t.return;n!==null&&(sd(n)&&N_(t.stateNode,n.stateNode),!rd(n));)n=n.return}function Go(t){for(var n=t.return;n!==null&&(sd(n)&&py(t.stateNode,n.stateNode),!rd(n));)n=n.return}function rd(t){return t.tag===5||t.tag===3||t.tag===27}function sd(t){return t&&t.tag===7&&t.stateNode!==null}function od(t){var n=t.type,i=t.memoizedProps,r=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":i.autoFocus&&r.focus();break t;case"img":i.src?r.src=i.src:i.srcSet&&(r.srcset=i.srcSet)}}catch(l){ke(t,t.return,l)}}function ld(t,n,i){try{var r=t.stateNode;KM(r,t.type,i,n),r[B]=n}catch(l){ke(t,t.return,l)}}function xg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ar(t.type)||t.tag===4}function ud(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||xg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ar(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function cd(t,n,i,r){var l=t.tag;if(l===5||l===6)l=t.stateNode,n?(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i).insertBefore(l,n):(n=i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,n.appendChild(l),i=i._reactRootContainer,i!=null||n.onclick!==null||(n.onclick=Xi)),gu(t,r),xe=!0;else if(l!==4&&(l===27&&(gu(t,r),r=null,ar(t.type)&&(i=t.stateNode,n=null)),t=t.child,t!==null))for(cd(t,n,i,r),t=t.sibling;t!==null;)cd(t,n,i,r),t=t.sibling}function _u(t,n,i,r){var l=t.tag;if(l===5||l===6)l=t.stateNode,n?i.insertBefore(l,n):i.appendChild(l),gu(t,r),xe=!0;else if(l!==4&&(l===27&&(gu(t,r),r=null,ar(t.type)&&(i=t.stateNode)),t=t.child,t!==null))for(_u(t,n,i,r),t=t.sibling;t!==null;)_u(t,n,i,r),t=t.sibling}function Sg(t){var n=t.stateNode,i=t.memoizedProps;try{for(var r=t.type,l=n.attributes;l.length;)n.removeAttributeNode(l[0]);Nn(n,r,i),n[T]=t,n[B]=i}catch(c){ke(t,t.return,c)}}var vu=!1,ii=null;function Mg(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(vu=!0)}var Yi=null;function yg(){var t=Yi;return Yi=null,t}var qn=0;function Ss(t,n,i,r,l){return qn=0,Eg(t.child,n,i,r,l)}function Eg(t,n,i,r,l){for(var c=!1;t!==null;){if(t.tag===5){var g=t.stateNode;if(r!==null){var A=Yd(g);r.push(A),A.view&&(c=!0)}else c||Yd(g).view&&(c=!0);vu=!0,y_(g,qn===0?n:n+"_"+qn,i),qn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&l||Eg(t.child,n,i,r,l)&&(c=!0));t=t.sibling}return c}function Zi(t,n){for(;t!==null;)t.tag===5?E_(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||Zi(t.child,n)),t=t.sibling}function xu(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(xu(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var n=t.memoizedProps;if(n.name==null||n.name==="auto")throw Error(s(544));var i=n.name;n=pa(n.default,n.share),n!=="none"&&(Ss(t,i,n,null,!1)||Zi(t.child,!1))}t=t.sibling}}function fd(t,n){if(t.tag===30){var i=t.stateNode,r=t.memoizedProps,l=ha(r,i),c=pa(r.default,i.paired?r.share:r.enter);c!=="none"?Ss(t,l,c,null,!1)?(xu(t),i.paired||n||Cs(t,r.onEnter)):Zi(t.child,!1):xu(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)fd(t,n),t=t.sibling;else xu(t)}function dd(t){if(ii!==null&&ii.size!==0){var n=ii;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var i=t.memoizedProps,r=i.name;if(r!=null&&r!=="auto"){var l=n.get(r);if(l!==void 0){var c=pa(i.default,i.share);if(c!=="none"&&(Ss(t,r,c,null,!1)?(c=t.stateNode,l.paired=c,c.paired=l,Cs(t,i.onShare)):Zi(t.child,!1)),n.delete(r),n.size===0)break}}}dd(t)}t=t.sibling}}}function hd(t){if(t.tag===30){var n=t.memoizedProps,i=ha(n,t.stateNode),r=ii!==null?ii.get(i):void 0,l=pa(n.default,r!==void 0?n.share:n.exit);l!=="none"&&(Ss(t,i,l,null,!1)?r!==void 0?(l=t.stateNode,r.paired=l,l.paired=r,ii.delete(i),Cs(t,n.onShare)):Cs(t,n.onExit):Zi(t.child,!1)),ii!==null&&dd(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)hd(t),t=t.sibling;else ii!==null&&dd(t)}function bg(t){for(t=t.child;t!==null;){if(t.tag===30){var n=t.memoizedProps,i=ha(n,t.stateNode);n=pa(n.default,n.update),t.flags&=-5,n!=="none"&&Ss(t,i,n,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&bg(t);t=t.sibling}}function pd(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var n=t.stateNode;n.paired!==null&&(n.paired=null,Zi(t.child,!1))}pd(t)}t=t.sibling}}function Su(t){if(t.tag===30)t.stateNode.paired=null,Zi(t.child,!1),pd(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Su(t),t=t.sibling;else pd(t)}function Tg(t){for(t=t.child;t!==null;)t.tag===30?Zi(t.child,!1):(t.subtreeFlags&33554432)!==0&&Tg(t),t=t.sibling}function md(t,n,i,r,l,c,g){for(var A=!1;n!==null;){if(n.tag===5){var I=n.stateNode;if(c!==null&&qn<c.length){var Q=c[qn],lt=Yd(I);(Q.view||lt.view)&&(A=!0);var Mt;if(Mt=(t.flags&4)===0)if(lt.clip)Mt=!0;else{Mt=Q.rect;var Y=lt.rect;Mt=Mt.y!==Y.y||Mt.x!==Y.x||Mt.height!==Y.height||Mt.width!==Y.width}Mt&&(t.flags|=4),lt.abs?lt=!Q.abs:(Q=Q.rect,lt=lt.rect,lt=Q.height!==lt.height||Q.width!==lt.width),lt&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&y_(I,qn===0?i:i+"_"+qn,l),A&&(t.flags&4)!==0||(Yi===null&&(Yi=[]),Yi.push(I,qn===0?r:r+"_"+qn,n.memoizedProps)),qn++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&g?t.flags|=n.flags&32:md(t,n.child,i,r,l,c,g)&&(A=!0));n=n.sibling}return A}function Ag(t,n){for(t=t.child;t!==null;){if(t.tag===30){var i=t.memoizedProps,r=t.stateNode,l=ha(i,r),c=pa(i.default,i.update),g;g=t.memoizedState,t.memoizedState=null,r=t;var A=t.child;qn=0,l=md(r,A,l,l,c,g,!1),(t.flags&4)!==0&&l&&Cs(t,i.onUpdate)}else(t.subtreeFlags&33554432)!==0&&Ag(t);t=t.sibling}}var yn=!1,Ge=!1,Ki=!1,gd=!1,Rg=typeof WeakSet=="function"?WeakSet:Set,En=null,ji=!1,Vo=!1,Mu=!1,_d=!1;function bM(t,n,i){if(t=t.containerInfo,Vd=Bs,t=Dm(t),nf(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else t:{r=(r=t.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var c=l.anchorOffset,g=l.focusNode;l=l.focusOffset;try{r.nodeType,g.nodeType}catch{r=null;break t}var A=0,I=-1,Q=-1,lt=0,Mt=0,Y=t,rt=null;e:for(;;){for(var It;Y!==r||c!==0&&Y.nodeType!==3||(I=A+c),Y!==g||l!==0&&Y.nodeType!==3||(Q=A+l),Y.nodeType===3&&(A+=Y.nodeValue.length),(It=Y.firstChild)!==null;)rt=Y,Y=It;for(;;){if(Y===t)break e;if(rt===r&&++lt===c&&(I=A),rt===g&&++Mt===l&&(Q=A),(It=Y.nextSibling)!==null)break;Y=rt,rt=Y.parentNode}Y=It}r=I===-1||Q===-1?null:{start:I,end:Q}}else r=null}r=r||{start:0,end:0}}else r=null;for(Xd={focusedElem:t,selectionRange:r},Bs=!1,i=(i&335544064)===i,En=n,n=i?9270:1024;En!==null;){if(t=En,i&&(r=t.deletions,r!==null))for(c=0;c<r.length;c++)i&&hd(r[c]);if(t.alternate===null&&(t.flags&2)!==0)i&&Mg(t),yu(i);else{if(t.tag===22){if(r=t.alternate,t.memoizedState!==null){r!==null&&r.memoizedState===null&&i&&hd(r),yu(i);continue}else if(r!==null&&r.memoizedState!==null){i&&Mg(t),yu(i);continue}}r=t.child,(t.subtreeFlags&n)!==0&&r!==null?(r.return=t,En=r):(i&&bg(t),yu(i))}}ii=null}function yu(t){for(;En!==null;){var n=En,i=t,r=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((l&1024)!==0&&r!==null){i=void 0,l=r.memoizedProps,r=r.memoizedState;var c=n.stateNode;try{var g=Or(n.type,l);i=c.getSnapshotBeforeUpdate(g,r),c.__reactInternalSnapshotBeforeUpdate=i}catch(A){ke(n,n.return,A)}}break;case 3:if((l&1024)!==0){if(r=n.stateNode.containerInfo,i=r.nodeType,i===9)jd(r);else if(i===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":jd(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:i&&r!==null&&(i=ha(r.memoizedProps,r.stateNode),l=n.memoizedProps,l=pa(l.default,l.update),l!=="none"&&Ss(r,i,l,r.memoizedState=[],!0));break;default:if((l&1024)!==0)throw Error(s(163))}if(r=n.sibling,r!==null){r.return=n.return,En=r;break}En=n.return}}function Cg(t,n,i){var r=i.flags;switch(i.tag){case 0:case 11:case 15:Qi(t,i),r&4&&Ho(5,i);break;case 1:if(Qi(t,i),r&4)if(t=i.stateNode,n===null)try{t.componentDidMount()}catch(g){ke(i,i.return,g)}else{var l=Or(i.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(l,n,t.__reactInternalSnapshotBeforeUpdate)}catch(g){ke(i,i.return,g)}}r&64&&gg(i),r&512&&qi(i,i.return);break;case 3:if(Qi(t,i),r&64&&(t=i.updateQueue,t!==null)){if(n=null,i.child!==null)switch(i.child.tag){case 27:case 5:n=i.child.stateNode;break;case 1:n=i.child.stateNode}try{r0(t,n)}catch(g){ke(i,i.return,g)}}break;case 27:n===null&&r&4&&Sg(i);case 26:case 5:Qi(t,i),n===null&&r&4&&od(i),r&512&&qi(i,i.return);break;case 12:Qi(t,i);break;case 31:Qi(t,i),r&4&&Ug(t,i);break;case 13:Qi(t,i),r&4&&Lg(t,i),r&64&&(t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(i=IM.bind(null,i),_y(t,i))));break;case 22:if(r=i.memoizedState!==null||yn,!r){var c=n!==null&&n.memoizedState!==null||Ge;n=yn,l=Ge,yn=r,(Ge=c)&&!l?(r=2,(i.subtreeFlags&8772)!==0&&(r|=1),Ni(t,i,r)):Qi(t,i),yn=n,Ge=l}break;case 30:Qi(t,i),r&512&&qi(i,i.return);break;case 7:r&512&&qi(i,i.return);default:Qi(t,i)}}function vd(t,n){for(t=t.child;t!==null;)wg(t,n),t=t.sibling}function wg(t,n){switch(t.tag){case 5:case 26:try{var i=t.stateNode;if(n){var r=i.style;typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"}else{var l=t.stateNode,c=t.memoizedProps.style,g=c!=null&&c.hasOwnProperty("display")?c.display:null;l.style.display=g==null||typeof g=="boolean"?"":(""+g).trim()}}catch(I){ke(t,t.return,I)}xd(t,n);break;case 6:try{t.stateNode.nodeValue=n?"":t.memoizedProps,xe=!0}catch(I){ke(t,t.return,I)}break;case 18:try{var A=t.stateNode;n?M_(A,!0):M_(t.stateNode,!1)}catch(I){ke(t,t.return,I)}break;case 22:case 23:t.memoizedState===null&&vd(t,n);break;default:vd(t,n)}}function xd(t,n){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var i=t,r=n;switch(i.tag){case 4:wg(i,r);break t;case 22:i.memoizedState===null&&xd(i,r);break t;default:xd(i,r)}}t=t.sibling}}function Ng(t){var n=t.alternate;n!==null&&(t.alternate=null,Ng(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&jt(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var tn=null,Yn=!1;function Ci(t,n,i){for(i=i.child;i!==null;)Dg(t,n,i),i=i.sibling}function Dg(t,n,i){if(Xt&&typeof Xt.onCommitFiberUnmount=="function")try{Xt.onCommitFiberUnmount(Jt,i)}catch{}switch(i.tag){case 26:Ge||wn(i,n),Ci(t,n,i),i.memoizedState?i.memoizedState.count--:i.stateNode&&!Ge&&(i=i.stateNode,i.parentNode.removeChild(i));break;case 27:Ge||wn(i,n),Go(i);var r=tn,l=Yn;ar(i.type)&&(tn=i.stateNode,Yn=!1),Ci(t,n,i),P_(i.stateNode,i.type,i.memoizedProps),tn=r,Yn=l;break;case 5:Ge||wn(i,n),Go(i);case 6:if(i.tag===6&&Go(i),r=tn,l=Yn,tn=null,Ci(t,n,i),tn=r,Yn=l,tn!==null)if(Yn)try{(tn.nodeType===9?tn.body:tn.nodeName==="HTML"?tn.ownerDocument.body:tn).removeChild(i.stateNode),xe=!0}catch(c){ke(i,n,c)}else try{tn.removeChild(i.stateNode),xe=!0}catch(c){ke(i,n,c)}break;case 18:tn!==null&&(Yn?(t=tn,S_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,i.stateNode),Fs(t)):S_(tn,i.stateNode));break;case 4:r=tn,l=Yn,tn=i.stateNode.containerInfo,Yn=!0,Ci(t,n,i),tn=r,Yn=l;break;case 0:case 11:case 14:case 15:Qa(2,i,n),Ge||Qa(4,i,n),Ci(t,n,i);break;case 1:Ge||(wn(i,n),r=i.stateNode,typeof r.componentWillUnmount=="function"&&_g(i,n,r)),Ci(t,n,i);break;case 21:Ci(t,n,i);break;case 22:Ge=(r=Ge)||i.memoizedState!==null,Ci(t,n,i),Ge=r;break;case 30:wn(i,n),Ci(t,n,i);break;case 7:Ge||wn(i,n),Ci(t,n,i);break;default:Ci(t,n,i)}}function Ug(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Fs(t)}catch(i){ke(n,n.return,i)}}}function Lg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Fs(t)}catch(i){ke(n,n.return,i)}}function TM(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Rg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Rg),n;default:throw Error(s(435,t.tag))}}function Eu(t,n){var i=TM(t);n.forEach(function(r){if(!i.has(r)){i.add(r);var l=zM.bind(null,t,r);r.then(l,l)}})}function Hn(t,n,i){var r=n.deletions;if(r!==null)for(var l=0;l<r.length;l++){var c=r[l],g=t,A=n,I=A;t:for(;I!==null;){switch(I.tag){case 27:if(ar(I.type)){tn=I.stateNode,Yn=!1;break t}break;case 5:tn=I.stateNode,Yn=!1;break t;case 3:case 4:tn=I.stateNode.containerInfo,Yn=!0;break t}I=I.return}if(tn===null)throw Error(s(160));Dg(g,A,c),tn=null,Yn=!1,g=c.alternate,g!==null&&(g.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Og(n,t,i),n=n.sibling}var wi=null;function Og(t,n,i){var r=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(l&4&&(r=t.updateQueue,r=r!==null?r.events:null,r!==null))for(var c=0;c<r.length;c++){var g=r[c];g.ref.impl=g.nextImpl}Hn(n,t,i),Gn(t),l&4&&(Qa(3,t,t.return),Ho(3,t),Qa(5,t,t.return));break;case 1:Hn(n,t,i),Gn(t),l&512&&(Ge||r===null||wn(r,r.return)),l&64&&yn&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(i=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=i===null?n:i.concat(n))));break;case 26:if(c=wi,Hn(n,t,i),Gn(t),l&512&&(Ge||r===null||wn(r,r.return)),l&4)if(l=r!==null?r.memoizedState:null,i=t.memoizedState,r===null)if(i===null)if(t.stateNode===null)if(yn)t.stateNode=__(t.type,t.memoizedProps,n.containerInfo,t);else{t:{n=t.type,i=t.memoizedProps,l=c.ownerDocument||c;e:switch(n){case"title":r=l.getElementsByTagName("title")[0],(!r||r[Pt]||r[T]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=l.createElement(n),l.head.insertBefore(r,l.querySelector("head > title"))),Nn(r,n,i),r[T]=t,ve(r),n=r;break t;case"link":if(c=G_("link","href",l).get(n+(i.href||""))){for(g=0;g<c.length;g++)if(r=c[g],r.getAttribute("href")===(i.href==null||i.href===""?null:i.href)&&r.getAttribute("rel")===(i.rel==null?null:i.rel)&&r.getAttribute("title")===(i.title==null?null:i.title)&&r.getAttribute("crossorigin")===(i.crossOrigin==null?null:i.crossOrigin)){c.splice(g,1);break e}}r=l.createElement(n),Nn(r,n,i),l.head.appendChild(r);break;case"meta":if(c=G_("meta","content",l).get(n+(i.content||""))){for(g=0;g<c.length;g++)if(r=c[g],r.getAttribute("content")===(i.content==null?null:""+i.content)&&r.getAttribute("name")===(i.name==null?null:i.name)&&r.getAttribute("property")===(i.property==null?null:i.property)&&r.getAttribute("http-equiv")===(i.httpEquiv==null?null:i.httpEquiv)&&r.getAttribute("charset")===(i.charSet==null?null:i.charSet)){c.splice(g,1);break e}}r=l.createElement(n),Nn(r,n,i),l.head.appendChild(r);break;default:throw Error(s(468,n))}r[T]=t,ve(r),n=r}t.stateNode=n}else yn||ih(c,t.type,t.stateNode);else t.stateNode=H_(c,i,t.memoizedProps);else l!==i?(l===null?(n=r.stateNode,n===null||Ge||n.parentNode.removeChild(n)):l.count--,i===null?yn||ih(c,t.type,t.stateNode):H_(c,i,t.memoizedProps)):i===null&&t.stateNode!==null&&ld(t,t.memoizedProps,r.memoizedProps);break;case 27:Hn(n,t,i),Gn(t),l&512&&(Ge||r===null||wn(r,r.return)),r!==null&&l&4&&ld(t,t.memoizedProps,r.memoizedProps);break;case 5:if(c=Ki,Ki=!1,Hn(n,t,i),Ki=c,Gn(t),l&512&&(Ge||r===null||wn(r,r.return)),t.flags&32){n=t.stateNode;try{ns(n,""),xe=!0}catch(lt){ke(t,t.return,lt)}}l&4&&t.stateNode!=null&&(n=t.memoizedProps,ld(t,n,r!==null?r.memoizedProps:n)),l&1024&&(gd=!0);break;case 6:if(Hn(n,t,i),Gn(t),l&4){if(t.stateNode===null)throw Error(s(162));n=t.memoizedProps,i=t.stateNode;try{i.nodeValue=n,xe=!0}catch(lt){ke(t,t.return,lt)}}break;case 3:if(xe=!1,Bu=null,c=wi,wi=Qo(n.containerInfo),Hn(n,t,i),wi=c,Gn(t),l&4&&r!==null&&r.memoizedState.isDehydrated)try{Fs(n.containerInfo)}catch(lt){ke(t,t.return,lt)}gd&&(gd=!1,Pg(t)),xe=!1;break;case 4:l=Ki,Ki=yn,r=Ie(),c=wi,wi=Qo(t.stateNode.containerInfo),Hn(n,t,i),Gn(t),wi=c,xe&&Vo&&(Mu=!0),xe=r,Ki=l;break;case 12:Hn(n,t,i),Gn(t);break;case 31:Hn(n,t,i),Gn(t),l&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Eu(t,n)));break;case 13:Hn(n,t,i),Gn(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Au=Wt()),l&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Eu(t,n)));break;case 22:c=t.memoizedState!==null,g=r!==null&&r.memoizedState!==null;var A=yn,I=Ge,Q=Ki;yn=A||c,Ki=Q||c,Ge=I||g,Hn(n,t,i),Ge=I,Ki=Q,yn=A,Gn(t),l&8192&&(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,!c||r===null||g||yn||Ge||(n=g||Ge,i=yn,r=Ge,yn=c||yn,Ge=n,Ja(t,2),yn=i,Ge=r),!c&&Ki||vd(t,c)),l&4&&(n=t.updateQueue,n!==null&&(i=n.retryQueue,i!==null&&(n.retryQueue=null,Eu(t,i))));break;case 19:Hn(n,t,i),Gn(t),l&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Eu(t,n)));break;case 30:l&512&&(Ge||r===null||wn(r,r.return)),l=Ie(),c=Vo,g=(i&335544064)===i,A=t.memoizedProps,Vo=g&&pa(A.default,A.update)!=="none",Hn(n,t,i),Gn(t),g&&r!==null&&xe&&(t.flags|=4),Vo=c,xe=l;break;case 21:break;case 7:l&512&&(Ge||r===null||wn(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=t);default:Hn(n,t,i),Gn(t)}}function Gn(t){var n=t.flags;if(n&2){try{for(var i,r=t.return;r!==null;){if(xg(r)){i=r;break}r=r.return}r=null;for(var l=t.return;l!==null;){if(sd(l)){var c=l.stateNode;r===null?r=[c]:r.push(c)}if(rd(l))break;l=l.return}var g=r;if(i==null)throw Error(s(160));switch(i.tag){case 27:var A=i.stateNode,I=ud(t);_u(t,I,A,g);break;case 5:var Q=i.stateNode;i.flags&32&&(ns(Q,""),i.flags&=-33);var lt=ud(t);_u(t,lt,Q,g);break;case 3:case 4:var Mt=i.stateNode.containerInfo,Y=ud(t);cd(t,Y,Mt,g);break;default:throw Error(s(161))}}catch(rt){ke(t,t.return,rt)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Pg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Pg(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,Bs=!0,n.reset(),Bs=!1),t=t.sibling}}function Ms(t,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)Ig(n,t),n=n.sibling;else Ag(n)}function Ig(t,n){var i=t.alternate;if(i===null)fd(t,!1);else switch(t.tag){case 3:if(_d=ji=!1,yg(),Ms(n,t),!ji&&!Mu){if(t=Yi,t!==null)for(var r=0;r<t.length;r+=3){i=t[r];var l=t[r+1];E_(i,t[r+2]),i=i.ownerDocument.documentElement,i!==null&&i.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+l+")"})}t=n.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),_d=!0}Yi=null;break;case 5:Ms(n,t);break;case 4:r=ji,ji=!1,Ms(n,t),ji&&(Mu=!0),ji=r;break;case 22:t.memoizedState===null&&(i.memoizedState!==null?fd(t,!1):Ms(n,t));break;case 30:r=ji,l=yg(),ji=!1,Ms(n,t),ji&&(t.flags|=4);var c=t.memoizedProps,g=t.stateNode;n=ha(c,g),g=ha(i.memoizedProps,g);var A=pa(c.default,c.update);A==="none"?n=!1:(c=i.memoizedState,i.memoizedState=null,i=t.child,qn=0,n=md(t,i,n,g,A,c,!0),qn!==(c===null?0:c.length)&&(t.flags|=32)),(t.flags&4)!==0&&n?(Cs(t,t.memoizedProps.onUpdate),Yi=l):l!==null&&(l.push.apply(l,Yi),Yi=l),ji=(t.flags&32)!==0?!0:r;break;default:Ms(n,t)}}function Qi(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Cg(t,n.alternate,n),n=n.sibling}function Ja(t,n){for(t=t.child;t!==null;){var i=t,r=n;switch(i.tag){case 0:case 11:case 14:case 15:Qa(4,i,i.return),Ja(i,r);break;case 1:wn(i,i.return);var l=i.stateNode;typeof l.componentWillUnmount=="function"&&_g(i,i.return,l),Ja(i,r);break;case 27:(r&2)!==0&&P_(i.stateNode,i.type,i.memoizedProps);case 5:wn(i,i.return),i.tag!==5&&i.tag!==27||Go(i),Ja(i,r);break;case 6:Go(i);break;case 26:wn(i,i.return),l=i.stateNode,i.memoizedState!==null||l===null||Ge||l.parentNode.removeChild(l),Ja(i,r);break;case 22:i.memoizedState===null&&Ja(i,r);break;case 30:wn(i,i.return),Ja(i,r);break;case 7:wn(i,i.return);default:Ja(i,r)}t=t.sibling}}function Ni(t,n,i){for(i=(n.subtreeFlags&8772)!==0?i:i&-2,n=n.child;n!==null;){var r=n.alternate,l=t,c=n,g=c.flags,A=(i&1)!==0;switch(c.tag){case 0:case 11:case 15:Ni(l,c,i),Ho(4,c);break;case 1:if(Ni(l,c,i),r=c,l=r.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(lt){ke(r,r.return,lt)}if(r=c,l=r.updateQueue,l!==null){var I=r.stateNode;try{var Q=l.shared.hiddenCallbacks;if(Q!==null)for(l.shared.hiddenCallbacks=null,l=0;l<Q.length;l++)a0(Q[l],I)}catch(lt){ke(r,r.return,lt)}}A&&g&64&&gg(c),qi(c,c.return);break;case 27:(i&2)!==0&&Sg(c);case 5:c.tag!==5&&c.tag!==27||vg(c),Ni(l,c,i),A&&r===null&&g&4&&od(c),qi(c,c.return);break;case 6:vg(c);break;case 26:I=c.stateNode,c.memoizedState!==null||I===null||yn||ih(Qo(I.ownerDocument),c.type,I),Ni(l,c,i),A&&r===null&&g&4&&od(c),qi(c,c.return);break;case 12:Ni(l,c,i);break;case 31:Ni(l,c,i),A&&g&4&&Ug(l,c);break;case 13:Ni(l,c,i),A&&g&4&&Lg(l,c);break;case 22:c.memoizedState===null&&Ni(l,c,i),qi(c,c.return);break;case 30:Ni(l,c,i),qi(c,c.return);break;case 7:qi(c,c.return);default:Ni(l,c,i)}n=n.sibling}}function Sd(t,n){var i=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==i&&(t!=null&&t.refCount++,i!=null&&Ro(i))}function Md(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Ro(t))}function vi(t,n,i,r){var l=(i&335544064)===i;if(n.subtreeFlags&(l?10262:10256))for(n=n.child;n!==null;)zg(t,n,i,r),n=n.sibling;else l&&Tg(n)}function zg(t,n,i,r){var l=(i&335544064)===i;l&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&Su(n);var c=n.flags;switch(n.tag){case 0:case 11:case 15:vi(t,n,i,r),c&2048&&Ho(9,n);break;case 1:vi(t,n,i,r);break;case 3:vi(t,n,i,r),l&&_d&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),c&2048&&(c=null,n.alternate!==null&&(c=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==c&&(n.refCount++,c!=null&&Ro(c)));break;case 12:if(c&2048){vi(t,n,i,r),c=n.stateNode;try{var g=n.memoizedProps,A=g.id,I=g.onPostCommit;typeof I=="function"&&I(A,n.alternate===null?"mount":"update",c.passiveEffectDuration,-0)}catch(Q){ke(n,n.return,Q)}}else vi(t,n,i,r);break;case 31:vi(t,n,i,r);break;case 13:vi(t,n,i,r);break;case 23:break;case 22:g=n.stateNode,A=n.alternate,n.memoizedState!==null?(l&&A!==null&&A.memoizedState===null&&Su(A),g._visibility&2?vi(t,n,i,r):Xo(t,n)):(l&&A!==null&&A.memoizedState!==null&&Su(n),g._visibility&2?vi(t,n,i,r):(g._visibility|=2,ys(t,n,i,r,(n.subtreeFlags&10256)!==0||!1))),c&2048&&Sd(A,n);break;case 24:vi(t,n,i,r),c&2048&&Md(n.alternate,n);break;case 30:l&&(c=n.alternate,c!==null&&(Zi(c.child,!0),Zi(n.child,!0))),vi(t,n,i,r);break;default:vi(t,n,i,r)}}function ys(t,n,i,r,l){for(l=l&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var c=t,g=n,A=i,I=r,Q=g.flags;switch(g.tag){case 0:case 11:case 15:ys(c,g,A,I,l),Ho(8,g);break;case 23:break;case 22:var lt=g.stateNode;g.memoizedState!==null?lt._visibility&2?ys(c,g,A,I,l):Xo(c,g):(lt._visibility|=2,ys(c,g,A,I,l)),l&&Q&2048&&Sd(g.alternate,g);break;case 24:ys(c,g,A,I,l),l&&Q&2048&&Md(g.alternate,g);break;default:ys(c,g,A,I,l)}n=n.sibling}}function Xo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var i=t,r=n,l=r.flags;switch(r.tag){case 22:Xo(i,r),l&2048&&Sd(r.alternate,r);break;case 24:Xo(i,r),l&2048&&Md(r.alternate,r);break;default:Xo(i,r)}n=n.sibling}}var Pr=8192;function Ir(t,n,i){if(t.subtreeFlags&Pr)for(t=t.child;t!==null;)Bg(t,n,i),t=t.sibling}function Bg(t,n,i){switch(t.tag){case 26:Ir(t,n,i),t.flags&Pr&&(t.memoizedState!==null?Dy(i,wi,t.memoizedState,t.memoizedProps):(t=t.stateNode,(n&335544128)===n&&W_(i,t)));break;case 5:Ir(t,n,i),t.flags&Pr&&(t=t.stateNode,(n&335544128)===n&&W_(i,t));break;case 3:case 4:var r=wi;wi=Qo(t.stateNode.containerInfo),Ir(t,n,i),wi=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=Pr,Pr=16777216,Ir(t,n,i),Pr=r):Ir(t,n,i));break;case 30:if((t.flags&Pr)!==0&&(r=t.memoizedProps.name,r!=null&&r!=="auto")){var l=t.stateNode;l.paired=null,ii===null&&(ii=new Map),ii.set(r,l)}Ir(t,n,i);break;default:Ir(t,n,i)}}function Fg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function ko(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];En=r,Gg(r,t)}Fg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Hg(t),t=t.sibling}function Hg(t){switch(t.tag){case 0:case 11:case 15:ko(t),t.flags&2048&&Qa(9,t,t.return);break;case 3:ko(t);break;case 12:ko(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,bu(t)):ko(t);break;default:ko(t)}}function bu(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];En=r,Gg(r,t)}Fg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Qa(8,n,n.return),bu(n);break;case 22:i=n.stateNode,i._visibility&2&&(i._visibility&=-3,bu(n));break;default:bu(n)}t=t.sibling}}function Gg(t,n){for(;En!==null;){var i=En;switch(i.tag){case 0:case 11:case 15:Qa(8,i,n);break;case 23:case 22:if(i.memoizedState!==null&&i.memoizedState.cachePool!==null){var r=i.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Ro(i.memoizedState.cache)}if(r=i.child,r!==null)r.return=i,En=r;else t:for(i=t;En!==null;){r=En;var l=r.sibling,c=r.return;if(Ng(r),r===i){En=null;break t}if(l!==null){l.return=c,En=l;break t}En=c}}}var AM={getCacheForType:function(t){var n=An(dn),i=n.data.get(t);return i===void 0&&(i=t(),n.data.set(t,i)),i},cacheSignal:function(){return An(dn).controller.signal}},RM=typeof WeakMap=="function"?WeakMap:Map,ze=0,Ke=null,ye=null,Ae=0,Xe=0,ai=null,$a=!1,Es=!1,yd=!1,Ea=0,on=0,tr=0,zr=0,Tu=0,ri=0,bs=0,Wo=null,Zn=null,Ed=!1,Au=0,Vg=0,Ru=1/0,Cu=null,er=null,nn=0,Di=null,Br=null,Ji=0,bd=0,Td=null,Xg=null,Ts=null,As=null,Rs=null,qo=0,wu=null;function si(){return(ze&2)!==0&&Ae!==0?Ae&-Ae:gt.T!==null?Pd():Rl()}function kg(){if(ri===0)if((Ae&536870912)===0||Se){var t=_r;_r<<=1,(_r&3932160)===0&&(_r=262144),ri=t}else ri=536870912;return t=Rn.current,t!==null&&(t.flags|=32),ri}function Cs(t,n){if(n!=null){var i=t.stateNode,r=i.ref;r===null&&(r=i.ref=b_(ha(t.memoizedProps,i))),As===null&&(As=[]),As.push(n.bind(null,r))}}function Kn(t,n,i){(t===Ke&&(Xe===2||Xe===9)||t.cancelPendingCommit!==null)&&(ws(t,0),nr(t,Ae,ri,!1)),Gi(t,i),((ze&2)===0||t!==Ke)&&(t===Ke&&((ze&2)===0&&(zr|=i),on===4&&nr(t,Ae,ri,!1)),$i(t))}function Wg(t,n,i){if((ze&6)!==0)throw Error(s(327));var r=!i&&(n&127)===0&&(n&t.expiredLanes)===0||za(t,n),l=r?NM(t,n):Rd(t,n,!0),c=r;do{if(l===0){Es&&!r&&nr(t,n,0,!1);break}else{if(i=t.current.alternate,c&&!CM(i)){l=Rd(t,n,!1),c=!1;continue}if(l===2){if(c=n,t.errorRecoveryDisabledLanes&c)var g=0;else g=t.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;t:{var A=t;l=Wo;var I=A.current.memoizedState.isDehydrated;if(I&&(ws(A,g).flags|=256),g=Rd(A,g,!1),g!==2&&g!==6){if(yd&&!I){A.errorRecoveryDisabledLanes|=c,zr|=c,l=4;break t}c=Zn,Zn=l,c!==null&&(Zn===null?Zn=c:Zn.push.apply(Zn,c))}l=g}if(c=!1,l!==2)continue}}if(l===1){ws(t,0),nr(t,n,0,!0);break}t:{switch(r=t,c=l,c){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:nr(r,n,ri,!$a);break t;case 2:Zn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(l=Au+300-Wt(),10<l)){if(nr(r,n,ri,!$a),vr(r,0,!0)!==0)break t;Ji=n,r.timeoutHandle=qd(qg.bind(null,r,i,Zn,Cu,Ed,n,ri,zr,bs,$a,c,"Throttled",-0,0),l);break t}qg(r,i,Zn,Cu,Ed,n,ri,zr,bs,$a,c,null,-0,0)}}break}while(!0);$i(t)}function qg(t,n,i,r,l,c,g,A,I,Q,lt,Mt,Y,rt){t.timeoutHandle=-1;var It=n.subtreeFlags,Qt=(c&335544064)===c;if(Mt=null,(Qt||It&8192||(It&16785408)===16785408)&&(Mt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Xi},ii=null,Bg(n,c,Mt),Qt&&(It=Mt,Qt=t.containerInfo,Qt=(Qt.nodeType===9?Qt:Qt.ownerDocument).__reactViewTransition,Qt!=null&&(It.count++,It.waitingForViewTransition=!0,It=tl.bind(It),Qt.finished.then(It,It))),It=(c&62914560)===c?Au-Wt():(c&4194048)===c?Vg-Wt():0,It=Uy(Mt,It),It!==null)){Ji=c,t.cancelPendingCommit=It(t_.bind(null,t,n,c,i,r,l,g,A,I,Q,lt,Mt,null,Y,rt)),nr(t,c,g,!Q);return}t_(t,n,c,i,r,l,g,A,I,Q,lt,Mt)}function CM(t){for(var n=t;;){var i=n.tag;if((i===0||i===11||i===15)&&n.flags&16384&&(i=n.updateQueue,i!==null&&(i=i.stores,i!==null)))for(var r=0;r<i.length;r++){var l=i[r],c=l.getSnapshot;l=l.value;try{if(!ei(c(),l))return!1}catch{return!1}}if(i=n.child,n.subtreeFlags&16384&&i!==null)i.return=n,n=i;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function nr(t,n,i,r){n=Hi(t,n),n&=~Tu,n&=~zr,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var l=n;0<l;){var c=31-ce(l),g=1<<c;r[c]=-1,l&=~g}i!==0&&xr(t,i,n)}function Nu(){return(ze&6)===0?(Yo(0),!1):!0}function Ad(){if(ye!==null){if(Xe===0)var t=ye.return;else t=ye,_a=Tr=null,Of(t),ms=null,No=0,t=ye;for(;t!==null;)mg(t.alternate,t),t=t.return;ye=null}}function ws(t,n){var i=t.timeoutHandle;return i!==-1&&(t.timeoutHandle=-1,JM(i)),i=t.cancelPendingCommit,i!==null&&(t.cancelPendingCommit=null,i()),Ji=0,Ad(),Ke=t,ye=i=ma(t.current,null),Ae=n,Xe=0,ai=null,$a=!1,Es=za(t,n),yd=!1,bs=ri=Tu=zr=tr=on=0,Zn=Wo=null,Ed=!1,Ea=Hi(t,n),Bl(),i}function Yg(t,n){he=null,gt.H=uu,n===ps||n===Kl?(n=t0(),Xe=3):n===Mf?(n=t0(),Xe=4):Xe=n===Kf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ai=n,ye===null&&(on=1,cu(t,pi(n,t.current)))}function Zg(){var t=Rn.current;return t===null?!0:(Ae&4194048)===Ae?Ln===null:(Ae&62914560)===Ae||(Ae&536870912)!==0?t===Ln:!1}function Kg(){var t=gt.H;return gt.H=uu,t===null?uu:t}function jg(){var t=gt.A;return gt.A=AM,t}function Du(){on=4,$a||(Ae&4194048)!==Ae&&Rn.current!==null||(Es=!0),(tr&134217727)===0&&(zr&134217727)===0||Ke===null||nr(Ke,Ae,ri,!1)}function Rd(t,n,i){var r=ze;ze|=2;var l=Kg(),c=jg();(Ke!==t||Ae!==n)&&(Cu=null,ws(t,n)),n=!1;var g=on;t:do try{if(Xe!==0&&ye!==null){var A=ye,I=ai;switch(Xe){case 8:Ad(),g=6;break t;case 3:case 2:case 9:case 6:Rn.current===null&&(n=!0);var Q=Xe;if(Xe=0,ai=null,Ns(t,A,I,Q),i&&Es){g=0;break t}break;default:Q=Xe,Xe=0,ai=null,Ns(t,A,I,Q)}}wM(),g=on;break}catch(lt){Yg(t,lt)}while(!0);return n&&t.shellSuspendCounter++,_a=Tr=null,ze=r,gt.H=l,gt.A=c,ye===null&&(Ke=null,Ae=0,Bl()),g}function wM(){for(;ye!==null;)Qg(ye)}function NM(t,n){var i=ze;ze|=2;var r=Kg(),l=jg();Ke!==t||Ae!==n?(Cu=null,Ru=Wt()+500,ws(t,n)):Es=za(t,n);t:do try{if(Xe!==0&&ye!==null){n=ye;var c=ai;e:switch(Xe){case 1:Xe=0,ai=null,Ns(t,n,c,1);break;case 2:case 9:if(Jm(c)){Xe=0,ai=null,Jg(n);break}n=function(){Xe!==2&&Xe!==9||Ke!==t||(Xe=7),$i(t)},c.then(n,n);break t;case 3:Xe=7;break t;case 4:Xe=5;break t;case 7:Jm(c)?(Xe=0,ai=null,Jg(n)):(Xe=0,ai=null,Ns(t,n,c,7));break;case 5:var g=null;switch(ye.tag){case 26:g=ye.memoizedState;case 5:case 27:var A=ye;if(g?X_(g):A.stateNode.complete){Xe=0,ai=null;var I=A.sibling;if(I!==null)ye=I;else{var Q=A.return;Q!==null?(ye=Q,Uu(Q)):ye=null}break e}}Xe=0,ai=null,Ns(t,n,c,5);break;case 6:Xe=0,ai=null,Ns(t,n,c,6);break;case 8:Ad(),on=6;break t;default:throw Error(s(462))}}DM();break}catch(lt){Yg(t,lt)}while(!0);return _a=Tr=null,gt.H=r,gt.A=l,ze=i,ye!==null?0:(Ke=null,Ae=0,Bl(),on)}function DM(){for(;ye!==null&&!Ft();)Qg(ye)}function Qg(t){var n=hg(t.alternate,t,Ea);t.memoizedProps=t.pendingProps,n===null?Uu(t):ye=n}function Jg(t){var n=t,i=n.alternate;switch(n.tag){case 15:case 0:n=sg(i,n,n.pendingProps,n.type,void 0,Ae);break;case 11:n=sg(i,n,n.pendingProps,n.type.render,n.ref,Ae);break;case 5:Of(n);var r=n;r===Mn&&(Se?(kl(r),r.tag===5&&r.stateNode!=null&&(Qe=r.stateNode)):(kl(r),Se=!0));default:mg(i,n),n=ye=Gm(n,Ea),n=hg(i,n,Ea)}t.memoizedProps=t.pendingProps,n===null?Uu(t):ye=n}function Ns(t,n,i,r){_a=Tr=null,Of(n),ms=null,No=0;var l=n.return;try{if(vM(t,l,n,i,Ae)){on=1,cu(t,pi(i,t.current)),ye=null;return}}catch(c){if(l!==null)throw ye=l,c;on=1,cu(t,pi(i,t.current)),ye=null;return}n.flags&32768?(Se||r===1?t=!0:Es||(Ae&536870912)!==0?t=!1:($a=t=!0,(r===2||r===9||r===3||r===6)&&(r=Rn.current,r!==null&&r.tag===13&&(r.flags|=16384))),$g(n,t)):Uu(n)}function Uu(t){var n=t;do{if((n.flags&32768)!==0){$g(n,$a);return}t=n.return;var i=yM(n.alternate,n,Ea);if(i!==null){ye=i;return}if(n=n.sibling,n!==null){ye=n;return}ye=n=t}while(n!==null);on===0&&(on=5)}function $g(t,n){do{var i=EM(t.alternate,t);if(i!==null){i.flags&=32767,ye=i;return}if(i=t.return,i!==null&&(i.flags|=32768,i.subtreeFlags=0,i.deletions=null),!n&&(t=t.sibling,t!==null)){ye=t;return}ye=t=i}while(t!==null);on=6,ye=null}function t_(t,n,i,r,l,c,g,A,I,Q,lt,Mt){t.cancelPendingCommit=null;do Lu();while(nn!==0);if((ze&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));t===Ke&&(ye=Ke=null,Ae=0),Br=n,Di=t,Ji=i,Td=l,Xg=r,UM(t,n,i,g,A,I,Mt)}}function UM(t,n,i,r,l,c,g){var A=n.lanes|n.childLanes;if(bd=A,A|=lf,Al(t,i,A,r,l,c),As=null,(i&335544064)===i?(Rs=sM(t),r=10262):(Rs=null,r=10256),(n.subtreeFlags&r)!==0||(n.flags&r)!==0?(t.callbackNode=null,t.callbackPriority=0,BM(Dt,function(){return Dd(),null})):(t.callbackNode=null,t.callbackPriority=0),vu=!1,r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=gt.T,gt.T=null,l=Rt.p,Rt.p=2,c=ze,ze|=4;try{bM(t,n,i)}finally{ze=c,Rt.p=l,gt.T=r}}nn=1,vu?Ts=ay(g,t.containerInfo,Rs,Cd,wd,OM,Nd,Dd,LM):(Cd(),wd(),Nd())}function LM(t){if(nn!==0){var n=Di.onRecoverableError;n(t,{componentStack:null})}}function OM(){nn===3&&(nn=0,Ig(Br,Di),nn=4)}function Cd(){if(nn===1){nn=0;var t=Di,n=Br,i=Ji,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=gt.T,gt.T=null;var l=Rt.p;Rt.p=2;var c=ze;ze|=4;try{Vo=Mu=!1,Og(n,t,i),i=Xd;var g=Dm(t.containerInfo),A=i.focusedElem,I=i.selectionRange;if(g!==A&&A&&A.ownerDocument&&Nm(A.ownerDocument.documentElement,A)){if(I!==null&&nf(A)){var Q=I.start,lt=I.end;if(lt===void 0&&(lt=Q),"selectionStart"in A)A.selectionStart=Q,A.selectionEnd=Math.min(lt,A.value.length);else{var Mt=A.ownerDocument||document,Y=Mt&&Mt.defaultView||window;if(Y.getSelection){var rt=Y.getSelection(),It=A.textContent.length,Qt=Math.min(I.start,It),pe=I.end===void 0?Qt:Math.min(I.end,It);!rt.extend&&Qt>pe&&(g=pe,pe=Qt,Qt=g);var K=wm(A,Qt),F=wm(A,pe);if(K&&F&&(rt.rangeCount!==1||rt.anchorNode!==K.node||rt.anchorOffset!==K.offset||rt.focusNode!==F.node||rt.focusOffset!==F.offset)){var et=Mt.createRange();et.setStart(K.node,K.offset),rt.removeAllRanges(),Qt>pe?(rt.addRange(et),rt.extend(F.node,F.offset)):(et.setEnd(F.node,F.offset),rt.addRange(et))}}}}for(Mt=[],rt=A;rt=rt.parentNode;)rt.nodeType===1&&Mt.push({element:rt,left:rt.scrollLeft,top:rt.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<Mt.length;A++){var St=Mt[A];St.element.scrollLeft=St.left,St.element.scrollTop=St.top}}Bs=!!Vd,Xd=Vd=null}finally{ze=c,Rt.p=l,gt.T=r}}t.current=n,nn=2}}function wd(){if(nn===2){nn=0;var t=Di,n=Br,i=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||i){i=gt.T,gt.T=null;var r=Rt.p;Rt.p=2;var l=ze;ze|=4;try{Cg(t,n.alternate,n)}finally{ze=l,Rt.p=r,gt.T=i}}nn=3}}function Nd(){if(nn===4||nn===3){nn=0;var t=Ts;Ts=null,zt();var n=Di,i=Br,r=Ji,l=Xg,c=(r&335544064)===r?10262:10256;if((i.subtreeFlags&c)!==0||(i.flags&c)!==0?nn=5:(nn=0,Br=Di=null,e_(n,n.pendingLanes)),c=n.pendingLanes,c===0&&(er=null),mo(r),i=i.stateNode,Xt&&typeof Xt.onCommitFiberRoot=="function")try{Xt.onCommitFiberRoot(Jt,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=gt.T,c=Rt.p,Rt.p=2,gt.T=null;try{for(var g=n.onRecoverableError,A=0;A<l.length;A++){var I=l[A];g(I.value,{componentStack:I.stack})}}finally{gt.T=i,Rt.p=c}}if(l=As,g=Rs,Rs=null,l!==null&&(As=null,g===null&&(g=[]),t!==null))for(I=0;I<l.length;I++)i=(0,l[I])(g),i!==void 0&&t.finished.finally(i);(Ji&3)!==0&&Lu(),$i(n),c=n.pendingLanes,(r&261930)!==0&&(c&42)!==0?n===wu?qo++:(qo=0,wu=n):(qo=0,wu=null),Yo(0)}}function e_(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Ro(n)))}function Lu(){return Ts!==null&&(Ts.skipTransition(),Ts=null),Cd(),wd(),Nd(),Dd()}function Dd(){if(nn!==5)return!1;var t=Di,n=bd;bd=0;var i=mo(Ji),r=gt.T,l=Rt.p;try{Rt.p=32>i?32:i,gt.T=null,i=Td,Td=null;var c=Di,g=Ji;if(nn=0,Br=Di=null,Ji=0,(ze&6)!==0)throw Error(s(331));var A=ze;if(ze|=4,Hg(c.current),zg(c,c.current,g,i),ze=A,Yo(0,!1),Xt&&typeof Xt.onPostCommitFiberRoot=="function")try{Xt.onPostCommitFiberRoot(Jt,c)}catch{}return!0}finally{Rt.p=l,gt.T=r,e_(t,n)}}function n_(t,n,i){n=pi(i,n),n=Zf(t.stateNode,n,2),t=Ya(t,n,2),t!==null&&(Gi(t,2),$i(t))}function ke(t,n,i){if(t.tag===3)n_(t,t,i);else for(;n!==null;){if(n.tag===3){n_(n,t,i);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(er===null||!er.has(r))){t=pi(i,t),i=J0(2),r=Ya(n,i,2),r!==null&&($0(i,r,n,t),Gi(r,2),$i(r));break}}n=n.return}}function Ud(t,n,i){var r=t.pingCache;if(r===null){r=t.pingCache=new RM;var l=new Set;r.set(n,l)}else l=r.get(n),l===void 0&&(l=new Set,r.set(n,l));l.has(i)||(yd=!0,l.add(i),t=PM.bind(null,t,n,i),n.then(t,t))}function PM(t,n,i){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&i,t.warmLanes&=~i,Ke===t&&(Ae&i)===i&&((on===4||on===3&&(Ae&62914560)===Ae&&300>Wt()-Au)&&(ze&2)===0?ws(t,0):Tu|=i,bs===Ae&&(bs=0)),$i(t)}function i_(t,n){n===0&&(n=co()),t=yr(t,n),t!==null&&(Gi(t,n),$i(t))}function IM(t){var n=t.memoizedState,i=0;n!==null&&(i=n.retryLane),i_(t,i)}function zM(t,n){var i=0;switch(t.tag){case 31:case 13:var r=t.stateNode,l=t.memoizedState;l!==null&&(i=l.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),i_(t,i)}function BM(t,n){return Ut(t,n)}var Ds=null,Us=null,Ld=!1,Ou=!1,Od=!1,ir=0;function $i(t){t!==Us&&t.next===null&&(Us===null?Ds=Us=t:Us=Us.next=t),Ou=!0,Ld||(Ld=!0,HM())}function Yo(t,n){if(!Od&&Ou){Od=!0;do for(var i=!1,r=Ds;r!==null;){if(t!==0){var l=r.pendingLanes;if(l===0)var c=0;else{var g=r.suspendedLanes,A=r.pingedLanes;c=(1<<31-ce(42|t)+1)-1,c&=l&~(g&~A),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(i=!0,o_(r,c))}else c=Ae,c=vr(r,r===Ke?c:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(c&3)===0||za(r,c)||(i=!0,o_(r,c));r=r.next}while(i);Od=!1}}function FM(){a_()}function a_(){Ou=Ld=!1;var t=0;ir!==0&&QM()&&(t=ir);for(var n=Wt(),i=null,r=Ds;r!==null;){var l=r.next,c=r_(r,n);c===0?(r.next=null,i===null?Ds=l:i.next=l,l===null&&(Us=i)):(i=r,(t!==0||(c&3)!==0)&&(Ou=!0)),r=l}nn!==0&&nn!==5||Yo(t),ir!==0&&(ir=0)}function r_(t,n){for(var i=t.suspendedLanes,r=t.pingedLanes,l=t.expirationTimes,c=t.pendingLanes&-62914561;0<c;){var g=31-ce(c),A=1<<g,I=l[g];I===-1?((A&i)===0||(A&r)!==0)&&(l[g]=uo(A,n)):I<=n&&(t.expiredLanes|=A),c&=~A}if(n=Ke,i=Ae,i=vr(t,t===n?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,i===0||t===n&&(Xe===2||Xe===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&$t(r),t.callbackNode=null,t.callbackPriority=0;if((i&3)===0||za(t,i)){if(n=i&-i,n===t.callbackPriority)return n;switch(r!==null&&$t(r),mo(i)){case 2:case 8:i=G;break;case 32:i=Dt;break;case 268435456:i=Ot;break;default:i=Dt}return r=s_.bind(null,t),i=Ut(i,r),t.callbackPriority=n,t.callbackNode=i,n}return r!==null&&r!==null&&$t(r),t.callbackPriority=2,t.callbackNode=null,2}function s_(t,n){if(nn!==0&&nn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var i=t.callbackNode;if(Lu()&&t.callbackNode!==i)return null;var r=Ae;return r=vr(t,t===Ke?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(Wg(t,r,n),r_(t,Wt()),t.callbackNode!=null&&t.callbackNode===i?s_.bind(null,t):null)}function o_(t,n){if(Lu())return null;Wg(t,n,!0)}function HM(){$M(function(){(ze&6)!==0?Ut(ue,FM):a_()})}function Pd(){if(ir===0){var t=Cr;t===0&&(t=$r,$r<<=1,($r&261888)===0&&($r=256)),ir=t}return ir}function l_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Nl(t)}function GM(t,n,i,r,l){if(n==="submit"&&i&&i.stateNode===l){var c=l_((l[B]||null).action),g=r.submitter;g&&(n=(n=g[B]||null)?l_(n.formAction):g.getAttribute("formAction"),n!==null&&(c=n,g=null));var A=new Ol("action","action",null,r,l);t.push({event:A,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(ir!==0){var I=new FormData(l,g);Xf(i,{pending:!0,data:I,method:l.method,action:c},null,I)}}else typeof c=="function"&&(A.preventDefault(),I=new FormData(l,g),Xf(i,{pending:!0,data:I,method:l.method,action:c},c,I))},currentTarget:l}]})}}for(var Id=0;Id<of.length;Id++){var zd=of[Id],VM=zd.toLowerCase(),XM=zd[0].toUpperCase()+zd.slice(1);Ri(VM,"on"+XM)}Ri(Om,"onAnimationEnd"),Ri(Pm,"onAnimationIteration"),Ri(Im,"onAnimationStart"),Ri("dblclick","onDoubleClick"),Ri("focusin","onFocus"),Ri("focusout","onBlur"),Ri(JS,"onTransitionRun"),Ri($S,"onTransitionStart"),Ri(tM,"onTransitionCancel"),Ri(zm,"onTransitionEnd"),an("onMouseEnter",["mouseout","mouseover"]),an("onMouseLeave",["mouseout","mouseover"]),an("onPointerEnter",["pointerout","pointerover"]),an("onPointerLeave",["pointerout","pointerover"]),Gt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Gt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Gt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Gt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Gt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Gt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Zo));function u_(t,n){n=(n&4)!==0;for(var i=0;i<t.length;i++){var r=t[i],l=r.event;r=r.listeners;t:{var c=void 0;if(n)for(var g=r.length-1;0<=g;g--){var A=r[g],I=A.instance,Q=A.currentTarget;if(A=A.listener,I!==c&&l.isPropagationStopped())break t;c=A,l.currentTarget=Q;try{c(l)}catch(lt){zl(lt)}l.currentTarget=null,c=I}else for(g=0;g<r.length;g++){if(A=r[g],I=A.instance,Q=A.currentTarget,A=A.listener,I!==c&&l.isPropagationStopped())break t;c=A,l.currentTarget=Q;try{c(l)}catch(lt){zl(lt)}l.currentTarget=null,c=I}}}}function Ee(t,n){var i=n[it];i===void 0&&(i=n[it]=new Set);var r=t+"__bubble";i.has(r)||(c_(n,t,2,!1),i.add(r))}function Bd(t,n,i){var r=0;n&&(r|=4),c_(i,t,r,n)}var Pu="_reactListening"+Math.random().toString(36).slice(2);function Fd(t){if(!t[Pu]){t[Pu]=!0,He.forEach(function(i){i!=="selectionchange"&&(kM.has(i)||Bd(i,!1,t),Bd(i,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Pu]||(n[Pu]=!0,Bd("selectionchange",!1,n))}}function c_(t,n,i,r){switch($_(n)){case 2:var l=Iy;break;case 8:l=zy;break;default:l=rh}i=l.bind(null,n,i,t),l=void 0,!qc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),r?l!==void 0?t.addEventListener(n,i,{capture:!0,passive:l}):t.addEventListener(n,i,!0):l!==void 0?t.addEventListener(n,i,{passive:l}):t.addEventListener(n,i,!1)}function Hd(t,n,i,r,l){var c=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var g=r.tag;if(g===3||g===4){var A=r.stateNode.containerInfo;if(A===l)break;if(g===4)for(g=r.return;g!==null;){var I=g.tag;if((I===3||I===4)&&g.stateNode.containerInfo===l)return;g=g.return}for(;A!==null;){if(g=re(A),g===null)return;if(I=g.tag,I===5||I===6||I===26||I===27){r=c=g;continue t}A=A.parentNode}}r=r.return}cm(function(){var Q=c,lt=kc(i),Mt=[];t:{var Y=Bm.get(t);if(Y!==void 0){var rt=Ol,It=t;switch(t){case"keypress":if(Ul(i)===0)break t;case"keydown":case"keyup":rt=CS;break;case"focusin":It="focus",rt=jc;break;case"focusout":It="blur",rt=jc;break;case"beforeblur":case"afterblur":rt=jc;break;case"click":if(i.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":rt=hm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":rt=gS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":rt=LS;break;case Om:case Pm:case Im:rt=xS;break;case zm:rt=PS;break;case"scroll":case"scrollend":rt=pS;break;case"wheel":rt=zS;break;case"copy":case"cut":case"paste":rt=MS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":rt=mm;break;case"submit":rt=DS;break;case"toggle":case"beforetoggle":rt=FS}var Qt=(n&4)!==0,pe=!Qt&&(t==="scroll"||t==="scrollend"),K=Qt?Y!==null?Y+"Capture":null:Y;Qt=[];for(var F=Q,et;F!==null;){var St=F;if(et=St.stateNode,St=St.tag,St!==5&&St!==26&&St!==27||et===null||K===null||(St=go(F,K),St!=null&&Qt.push(Ko(F,St,et))),pe)break;F=F.return}0<Qt.length&&(Y=new rt(Y,It,null,i,lt),Mt.push({event:Y,listeners:Qt}))}}if((n&7)===0){t:{if(rt=t==="mouseover"||t==="pointerover",Y=t==="mouseout"||t==="pointerout",rt&&i!==Xc&&(It=i.relatedTarget||i.fromElement)&&(re(It)||It[ct]))break t;(Y||rt)&&(It=lt.window===lt?lt:(rt=lt.ownerDocument)?rt.defaultView||rt.parentWindow:window,Y?(rt=i.relatedTarget||i.toElement,Y=Q,rt=rt?re(rt):null,rt!==null&&(pe=f(rt),Qt=rt.tag,rt!==pe||Qt!==5&&Qt!==27&&Qt!==6)&&(rt=null)):(Y=null,rt=Q),Y!==rt&&(Qt=hm,St="onMouseLeave",K="onMouseEnter",F="mouse",(t==="pointerout"||t==="pointerover")&&(Qt=mm,St="onPointerLeave",K="onPointerEnter",F="pointer"),pe=Y==null?It:Yt(Y),et=rt==null?It:Yt(rt),It=new Qt(St,F+"leave",Y,i,lt),It.target=pe,It.relatedTarget=et,St=null,re(lt)===Q&&(Qt=new Qt(K,F+"enter",rt,i,lt),Qt.target=et,Qt.relatedTarget=pe,St=Qt),pe=St,Qt=Y&&rt?U(Y,rt,WM):null,Y!==null&&f_(Mt,It,Y,Qt,!1),rt!==null&&pe!==null&&f_(Mt,pe,rt,Qt,!0)))}t:{if(Y=Q?Yt(Q):window,rt=Y.nodeName&&Y.nodeName.toLowerCase(),rt==="select"||rt==="input"&&Y.type==="file")var Zt=Em;else if(Mm(Y))if(bm)Zt=KS;else{Zt=YS;var Re=qS}else rt=Y.nodeName,!rt||rt.toLowerCase()!=="input"||Y.type!=="checkbox"&&Y.type!=="radio"?Q&&Vc(Q.elementType)&&(Zt=Em):Zt=ZS;if(Zt&&(Zt=Zt(t,Q))){ym(Mt,Zt,i,lt);break t}Re&&Re(t,Y,Q)}switch(Re=Q?Yt(Q):window,t){case"focusin":(Mm(Re)||Re.contentEditable==="true")&&(ss=Re,af=Q,bo=null);break;case"focusout":bo=af=ss=null;break;case"mousedown":rf=!0;break;case"contextmenu":case"mouseup":case"dragend":rf=!1,Um(Mt,i,lt);break;case"selectionchange":if(QS)break;case"keydown":case"keyup":Um(Mt,i,lt)}var ee;if(Jc)t:{switch(t){case"compositionstart":var ae="onCompositionStart";break t;case"compositionend":ae="onCompositionEnd";break t;case"compositionupdate":ae="onCompositionUpdate";break t}ae=void 0}else rs?xm(t,i)&&(ae="onCompositionEnd"):t==="keydown"&&i.keyCode===229&&(ae="onCompositionStart");ae&&(gm&&i.locale!=="ko"&&(rs||ae!=="onCompositionStart"?ae==="onCompositionEnd"&&rs&&(ee=fm()):(Ba=lt,Yc="value"in Ba?Ba.value:Ba.textContent,rs=!0)),Re=Iu(Q,ae),0<Re.length&&(ae=new pm(ae,t,null,i,lt),Mt.push({event:ae,listeners:Re}),ee?ae.data=ee:(ee=Sm(i),ee!==null&&(ae.data=ee)))),(ee=GS?VS(t,i):XS(t,i))&&(ae=Iu(Q,"onBeforeInput"),0<ae.length&&(Re=new pm("onBeforeInput","beforeinput",null,i,lt),Mt.push({event:Re,listeners:ae}),Re.data=ee)),GM(Mt,t,Q,i,lt)}u_(Mt,n)})}function Ko(t,n,i){return{instance:t,listener:n,currentTarget:i}}function Iu(t,n){for(var i=n+"Capture",r=[];t!==null;){var l=t,c=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||c===null||(l=go(t,i),l!=null&&r.unshift(Ko(t,l,c)),l=go(t,n),l!=null&&r.push(Ko(t,l,c))),t.tag===3)return r;t=t.return}return[]}function WM(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function f_(t,n,i,r,l){for(var c=n._reactName,g=[];i!==null&&i!==r;){var A=i,I=A.alternate,Q=A.stateNode;if(A=A.tag,I!==null&&I===r)break;A!==5&&A!==26&&A!==27||Q===null||(I=Q,l?(Q=go(i,c),Q!=null&&g.unshift(Ko(i,Q,I))):l||(Q=go(i,c),Q!=null&&g.push(Ko(i,Q,I)))),i=i.return}g.length!==0&&t.push({event:n,listeners:g})}var qM=/\r\n?/g,YM=/\u0000|\uFFFD/g;function d_(t){return(typeof t=="string"?t:""+t).replace(qM,`
`).replace(YM,"")}function h_(t,n){return n=d_(n),d_(t)===n}function We(t,n,i,r,l,c){switch(i){case"children":if(typeof r=="string")n==="body"||n==="textarea"&&r===""||ns(t,r);else if(typeof r=="number"||typeof r=="bigint")n!=="body"&&ns(t,""+r);else return;break;case"className":ti(t,"class",r);break;case"tabIndex":ti(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":ti(t,i,r);break;case"style":lm(t,r,c);return;case"data":if(n!=="object"){ti(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||i!=="href")){t.removeAttribute(i);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(i);break}r=Nl(r),t.setAttribute(i,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(i,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(i==="formAction"?(n!=="input"&&We(t,n,"name",l.name,l,null),We(t,n,"formEncType",l.formEncType,l,null),We(t,n,"formMethod",l.formMethod,l,null),We(t,n,"formTarget",l.formTarget,l,null)):(We(t,n,"encType",l.encType,l,null),We(t,n,"method",l.method,l,null),We(t,n,"target",l.target,l,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(i);break}r=Nl(r),t.setAttribute(i,r);break;case"onClick":r!=null&&(t.onclick=Xi);return;case"onScroll":r!=null&&Ee("scroll",t);return;case"onScrollEnd":r!=null&&Ee("scrollend",t);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(i=r.__html,i!=null){if(l.children!=null)throw Error(s(60));(c!=null?c.__html:void 0)!==i&&(t.innerHTML=i)}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}i=Nl(r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",i);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(i,r):t.removeAttribute(i);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(i,""):t.removeAttribute(i);break;case"capture":case"download":r===!0?t.setAttribute(i,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(i,r):t.removeAttribute(i);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(i,r):t.removeAttribute(i);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(i):t.setAttribute(i,r);break;case"popover":Ee("beforetoggle",t),Ee("toggle",t),je(t,"popover",r);break;case"xlinkActuate":Te(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Te(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Te(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Te(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Te(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Te(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Te(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Te(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Te(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":je(t,"is",r);break;case"innerText":case"textContent":return;default:if(!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")i=dS.get(i)||i,je(t,i,r);else return}xe=!0}function Gd(t,n,i,r,l,c){switch(i){case"style":lm(t,r,c);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(i=r.__html,i!=null){if(l.children!=null)throw Error(s(60));(c!=null?c.__html:void 0)!==i&&(t.innerHTML=i)}}break;case"children":if(typeof r=="string")ns(t,r);else if(typeof r=="number"||typeof r=="bigint")ns(t,""+r);else return;break;case"onScroll":r!=null&&Ee("scroll",t);return;case"onScrollEnd":r!=null&&Ee("scrollend",t);return;case"onClick":r!=null&&(t.onclick=Xi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!_n.hasOwnProperty(i))t:{if(i[0]==="o"&&i[1]==="n"&&(l=i.endsWith("Capture"),c=i.slice(2,l?i.length-7:void 0),n=t[B]||null,n=n!=null?n[i]:null,typeof n=="function"&&t.removeEventListener(c,n,l),typeof r=="function")){typeof n!="function"&&n!==null&&(i in t?t[i]=null:t.hasAttribute(i)&&t.removeAttribute(i)),t.addEventListener(c,r,l);break t}xe=!0,i in t?t[i]=r:r===!0?t.setAttribute(i,""):je(t,i,r)}return}xe=!0}function Nn(t,n,i){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ee("error",t),Ee("load",t);var r=!1,l=!1,c;for(c in i)if(i.hasOwnProperty(c)){var g=i[c];if(g!=null)switch(c){case"src":r=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:We(t,n,c,g,i,null)}}l&&We(t,n,"srcSet",i.srcSet,i,null),r&&We(t,n,"src",i.src,i,null);return;case"input":Ee("invalid",t);var A=c=g=l=null,I=null,Q=null;for(r in i)if(i.hasOwnProperty(r)){var lt=i[r];if(lt!=null)switch(r){case"name":l=lt;break;case"type":g=lt;break;case"checked":I=lt;break;case"defaultChecked":Q=lt;break;case"value":c=lt;break;case"defaultValue":A=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(s(137,n));break;default:We(t,n,r,lt,i,null)}}am(t,c,A,I,Q,g,l,!1);return;case"select":Ee("invalid",t),r=g=c=null;for(l in i)if(i.hasOwnProperty(l)&&(A=i[l],A!=null))switch(l){case"value":c=A;break;case"defaultValue":g=A;break;case"multiple":r=A;default:We(t,n,l,A,i,null)}n=c,i=g,t.multiple=!!r,n!=null?es(t,!!r,n,!1):i!=null&&es(t,!!r,i,!0);return;case"textarea":Ee("invalid",t),c=l=r=null;for(g in i)if(i.hasOwnProperty(g)&&(A=i[g],A!=null))switch(g){case"value":r=A;break;case"defaultValue":l=A;break;case"children":c=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:We(t,n,g,A,i,null)}sm(t,r,l,c);return;case"option":for(I in i)if(i.hasOwnProperty(I)&&(r=i[I],r!=null))switch(I){case"selected":t.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:We(t,n,I,r,i,null)}return;case"dialog":Ee("beforetoggle",t),Ee("toggle",t),Ee("cancel",t),Ee("close",t);break;case"iframe":case"object":Ee("load",t);break;case"video":case"audio":for(r=0;r<Zo.length;r++)Ee(Zo[r],t);break;case"image":Ee("error",t),Ee("load",t);break;case"details":Ee("toggle",t);break;case"embed":case"source":case"link":Ee("error",t),Ee("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Q in i)if(i.hasOwnProperty(Q)&&(r=i[Q],r!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:We(t,n,Q,r,i,null)}return;default:if(Vc(n)){for(lt in i)i.hasOwnProperty(lt)&&(r=i[lt],r!==void 0&&Gd(t,n,lt,r,i,void 0));return}}for(A in i)i.hasOwnProperty(A)&&(r=i[A],r!=null&&We(t,n,A,r,i,null))}var ZM={};function KM(t,n,i,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,c=null,g=null,A=null,I=null,Q=null,lt=null;for(rt in i){var Mt=i[rt];if(i.hasOwnProperty(rt)&&Mt!=null)switch(rt){case"checked":break;case"value":break;case"defaultValue":I=Mt;default:r.hasOwnProperty(rt)||We(t,n,rt,null,r,Mt)}}for(var Y in r){var rt=r[Y];if(Mt=i[Y],r.hasOwnProperty(Y)&&(rt!=null||Mt!=null))switch(Y){case"type":rt!==Mt&&(xe=!0),c=rt;break;case"name":rt!==Mt&&(xe=!0),l=rt;break;case"checked":rt!==Mt&&(xe=!0),Q=rt;break;case"defaultChecked":rt!==Mt&&(xe=!0),lt=rt;break;case"value":rt!==Mt&&(xe=!0),g=rt;break;case"defaultValue":rt!==Mt&&(xe=!0),A=rt;break;case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(s(137,n));break;default:rt!==Mt&&We(t,n,Y,rt,r,Mt)}}Hc(t,g,A,I,Q,lt,c,l);return;case"select":rt=g=A=Y=null;for(c in i)if(I=i[c],i.hasOwnProperty(c)&&I!=null)switch(c){case"value":break;case"multiple":rt=I;default:r.hasOwnProperty(c)||We(t,n,c,null,r,I)}for(l in r)if(c=r[l],I=i[l],r.hasOwnProperty(l)&&(c!=null||I!=null))switch(l){case"value":c!==I&&(xe=!0),Y=c;break;case"defaultValue":c!==I&&(xe=!0),A=c;break;case"multiple":c!==I&&(xe=!0),g=c;default:c!==I&&We(t,n,l,c,r,I)}n=A,i=g,r=rt,Y!=null?es(t,!!i,Y,!1):!!r!=!!i&&(n!=null?es(t,!!i,n,!0):es(t,!!i,i?[]:"",!1));return;case"textarea":rt=Y=null;for(A in i)if(l=i[A],i.hasOwnProperty(A)&&l!=null&&!r.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:We(t,n,A,null,r,l)}for(g in r)if(l=r[g],c=i[g],r.hasOwnProperty(g)&&(l!=null||c!=null))switch(g){case"value":l!==c&&(xe=!0),Y=l;break;case"defaultValue":l!==c&&(xe=!0),rt=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(s(91));break;default:l!==c&&We(t,n,g,l,r,c)}rm(t,Y,rt);return;case"option":for(var It in i)if(Y=i[It],i.hasOwnProperty(It)&&Y!=null&&!r.hasOwnProperty(It))switch(It){case"selected":t.selected=!1;break;default:We(t,n,It,null,r,Y)}for(I in r)if(Y=r[I],rt=i[I],r.hasOwnProperty(I)&&Y!==rt&&(Y!=null||rt!=null))switch(I){case"selected":Y!==rt&&(xe=!0),t.selected=Y&&typeof Y!="function"&&typeof Y!="symbol";break;default:We(t,n,I,Y,r,rt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Qt in i)Y=i[Qt],i.hasOwnProperty(Qt)&&Y!=null&&!r.hasOwnProperty(Qt)&&We(t,n,Qt,null,r,Y);for(Q in r)if(Y=r[Q],rt=i[Q],r.hasOwnProperty(Q)&&Y!==rt&&(Y!=null||rt!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(s(137,n));break;default:We(t,n,Q,Y,r,rt)}return;default:if(Vc(n)){for(var pe in i)Y=i[pe],i.hasOwnProperty(pe)&&Y!==void 0&&!r.hasOwnProperty(pe)&&Gd(t,n,pe,void 0,r,Y);for(lt in r)Y=r[lt],rt=i[lt],!r.hasOwnProperty(lt)||Y===rt||Y===void 0&&rt===void 0||Gd(t,n,lt,Y,r,rt);return}}for(var K in i)Y=i[K],i.hasOwnProperty(K)&&Y!=null&&!r.hasOwnProperty(K)&&We(t,n,K,null,r,Y);for(Mt in r)Y=r[Mt],rt=i[Mt],!r.hasOwnProperty(Mt)||Y===rt||Y==null&&rt==null||We(t,n,Mt,Y,r,rt)}function p_(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function jM(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,i=performance.getEntriesByType("resource"),r=0;r<i.length;r++){var l=i[r],c=l.transferSize,g=l.initiatorType,A=l.duration;if(c&&A&&p_(g)){for(g=0,A=l.responseEnd,r+=1;r<i.length;r++){var I=i[r],Q=I.startTime;if(Q>A)break;var lt=I.transferSize,Mt=I.initiatorType;lt&&p_(Mt)&&(I=I.responseEnd,g+=lt*(I<A?1:(A-Q)/(I-Q)))}if(--r,n+=8*(c+g)/(l.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Vd=null,Xd=null;function jo(t){return t.nodeType===9?t:t.ownerDocument}function m_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function g_(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function __(t,n,i,r){return i=jo(i).createElement(t),i[T]=r,i[B]=n,Nn(i,t,n),ve(i),i}function kd(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Wd=null;function QM(){var t=window.event;return t&&t.type==="popstate"?t===Wd?!1:(Wd=t,!0):(Wd=null,!1)}var qd=typeof setTimeout=="function"?setTimeout:void 0,JM=typeof clearTimeout=="function"?clearTimeout:void 0,v_=typeof Promise=="function"?Promise:void 0,x_=typeof requestAnimationFrame=="function"?requestAnimationFrame:qd,$M=typeof queueMicrotask=="function"?queueMicrotask:typeof v_<"u"?function(t){return v_.resolve(null).then(t).catch(ty)}:qd;function ty(t){setTimeout(function(){throw t})}function ar(t){return t==="head"}function S_(t,n){var i=n,r=0;do{var l=i.nextSibling;if(t.removeChild(i),l&&l.nodeType===8)if(i=l.data,i==="/$"||i==="/&"){if(r===0){t.removeChild(l),Fs(n);return}r--}else if(i==="$"||i==="$?"||i==="$~"||i==="$!"||i==="&")r++;else if(i==="html")th(t.ownerDocument.documentElement);else if(i==="head"){i=t.ownerDocument.head,th(i);for(var c=i.firstChild;c;){var g=c.nextSibling,A=c.nodeName;c[Pt]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&c.rel.toLowerCase()==="stylesheet"||i.removeChild(c),c=g}}else i==="body"&&th(t.ownerDocument.body);i=l}while(i);Fs(n)}function M_(t,n){var i=t;t=0;do{var r=i.nextSibling;if(i.nodeType===1?n?(i._stashedDisplay=i.style.display,i.style.display="none"):(i.style.display=i._stashedDisplay||"",i.getAttribute("style")===""&&i.removeAttribute("style")):i.nodeType===3&&(n?(i._stashedText=i.nodeValue,i.nodeValue=""):i.nodeValue=i._stashedText||""),r&&r.nodeType===8)if(i=r.data,i==="/$"){if(t===0)break;t--}else i!=="$"&&i!=="$?"&&i!=="$~"&&i!=="$!"||t++;i=r}while(i)}function y_(t,n,i){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,t.style.viewTransitionName=n,i!=null&&(t.style.viewTransitionClass=i),i=getComputedStyle(t),i.display==="inline"){if(n=t.getClientRects(),n.length===1)var r=1;else for(var l=r=0;l<n.length;l++){var c=n[l];0<c.width&&0<c.height&&r++}r===1&&(t=t.style,t.display=n.length===1?"inline-block":"block",t.marginTop="-"+i.paddingTop,t.marginBottom="-"+i.paddingBottom)}}function E_(t,n){t=t.style,n=n.style;var i=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;t.viewTransitionName=i==null||typeof i=="boolean"?"":(""+i).trim(),i=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,t.viewTransitionClass=i==null||typeof i=="boolean"?"":(""+i).trim(),t.display==="inline-block"&&(n==null?t.display=t.margin="":(i=n.display,t.display=i==null||typeof i=="boolean"?"":i,i=n.margin,i!=null?t.margin=i:(i=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],t.marginTop=i==null||typeof i=="boolean"?"":i,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],t.marginBottom=n==null||typeof n=="boolean"?"":n)))}function ey(t,n,i){return i=i.ownerDocument.defaultView,{rect:t,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=i.innerHeight&&t.left<=i.innerWidth}}function Yd(t){var n=t.getBoundingClientRect(),i=getComputedStyle(t);return ey(n,i,t)}function ny(t){return t.documentElement.clientHeight}function iy(t){this.addEventListener("load",t),this.addEventListener("error",t)}function ay(t,n,i,r,l,c,g,A,I){var Q=n.nodeType===9?n:n.ownerDocument;try{var lt=Q.startViewTransition({update:function(){var Y=Q.defaultView,rt=Y.navigation&&Y.navigation.transition,It=Q.fonts.status;r();var Qt=[];if(It==="loaded"&&(ny(Q),Q.fonts.status==="loading"&&Qt.push(Q.fonts.ready)),It=Qt.length,t!==null)for(var pe=t.suspenseyImages,K=0,F=0;F<pe.length;F++){var et=pe[F];if(!et.complete){var St=et.getBoundingClientRect();if(0<St.bottom&&0<St.right&&St.top<Y.innerHeight&&St.left<Y.innerWidth){if(K+=k_(et),K>Fu){Qt.length=It;break}et=new Promise(iy.bind(et)),Qt.push(et)}}}if(0<Qt.length)return Y=Promise.race([Promise.all(Qt),new Promise(function(Zt){return setTimeout(Zt,500)})]).then(l,l),(rt?Promise.allSettled([rt.finished,Y]):Y).then(c,c);if(l(),rt)return rt.finished.then(c,c);c()},types:i});Q.__reactViewTransition=lt;var Mt=[];return lt.ready.then(function(){for(var Y=Q.documentElement.getAnimations({subtree:!0}),rt=0;rt<Y.length;rt++){var It=Y[rt],Qt=It.effect,pe=Qt.pseudoElement;if(pe!=null&&pe.startsWith("::view-transition")){Mt.push(It),It=Qt.getKeyframes();for(var K=pe=void 0,F=!0,et=0;et<It.length;et++){var St=It[et],Zt=St.width;if(pe===void 0)pe=Zt;else if(pe!==Zt){F=!1;break}if(Zt=St.height,K===void 0)K=Zt;else if(K!==Zt){F=!1;break}delete St.width,delete St.height,St.transform==="none"&&delete St.transform}F&&pe!==void 0&&K!==void 0&&(Qt.setKeyframes(It),F=getComputedStyle(Qt.target,Qt.pseudoElement),F.width!==pe||F.height!==K)&&(F=It[0],F.width=pe,F.height=K,F=It[It.length-1],F.width=pe,F.height=K,Qt.setKeyframes(It))}}g()},function(Y){Q.__reactViewTransition===lt&&(Q.__reactViewTransition=null);try{if(typeof Y=="object"&&Y!==null)switch(Y.name){case"InvalidStateError":(Y.message==="View transition was skipped because document visibility state is hidden."||Y.message==="Skipping view transition because document visibility state has become hidden."||Y.message==="Skipping view transition because viewport size changed."||Y.message==="Transition was aborted because of invalid state")&&(Y=null)}Y!==null&&I(Y)}finally{r(),l(),g()}}),lt.finished.finally(function(){for(var Y=0;Y<Mt.length;Y++)Mt[Y].cancel();Q.__reactViewTransition===lt&&(Q.__reactViewTransition=null),A()}),lt}catch{return r(),l(),g(),null}}function Fr(t,n){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+n+")"}Fr.prototype.animate=function(t,n){return n=typeof n=="number"?{duration:n}:P({},n),n.pseudoElement=this._selector,this._scope.animate(t,n)},Fr.prototype.getAnimations=function(){for(var t=this._scope,n=this._selector,i=t.getAnimations({subtree:!0}),r=[],l=0;l<i.length;l++){var c=i[l].effect;c!==null&&c.target===t&&c.pseudoElement===n&&r.push(i[l])}return r},Fr.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function b_(t){return{name:t,group:new Fr("group",t),imagePair:new Fr("image-pair",t),old:new Fr("old",t),new:new Fr("new",t)}}function oi(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}oi.prototype.addEventListener=function(t,n,i){var r=null,l=null;if(!(i!=null&&typeof i!="boolean"&&(r=i.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var c=this._eventListeners;if(A_(c,t,n,i)===-1){var g=this,A=n;i!=null&&typeof i!="boolean"&&i.once===!0&&(A=function(I){g.removeEventListener(t,n,i),typeof n=="function"?n.call(this,I):n.handleEvent(I)}),r!==null&&(l=g.removeEventListener.bind(g,t,n,i),r.addEventListener("abort",l,{once:!0}),l=r.removeEventListener.bind(r,"abort",l)),r=Ls(i),c.push({type:t,listener:n,optionsOrUseCapture:i,attachedListener:A,cleanup:l}),v(this._fragmentFiber.child,!1,ry,t,A,r)}this._eventListeners=c}};function ry(t,n,i,r){return M(t).addEventListener(n,i,r),!1}oi.prototype.removeEventListener=function(t,n,i){var r=this._eventListeners;if(r!==null&&(n=A_(r,t,n,i),n!==-1)){var l=r[n];i=l.attachedListener;var c=l.cleanup;l=Ls(l.optionsOrUseCapture),v(this._fragmentFiber.child,!1,sy,t,i,l),r.splice(n,1),c!==null&&c()}};function sy(t,n,i,r){return M(t).removeEventListener(n,i,r),!1}function Ls(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function T_(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function A_(t,n,i,r){if(t.length===0)return-1;r=T_(r);for(var l=0;l<t.length;l++){var c=t[l];if(c.type===n&&c.listener===i&&T_(c.optionsOrUseCapture)===r)return l}return-1}oi.prototype.dispatchEvent=function(t){var n=_(this._fragmentFiber);if(n===null)return!0;n=M(n);var i=this._eventListeners;if(i!==null&&0<i.length||!t.bubbles){var r=n.nodeType===9?n.createComment(""):document.createTextNode("");if(i)for(var l=0;l<i.length;l++){var c=i[l];r.addEventListener(c.type,c.attachedListener,Ls(c.optionsOrUseCapture))}if(n.appendChild(r),t=r.dispatchEvent(t),i)for(l=0;l<i.length;l++)c=i[l],r.removeEventListener(c.type,c.attachedListener,Ls(c.optionsOrUseCapture));return n.removeChild(r),t}return n.dispatchEvent(t)},oi.prototype.focus=function(t){v(this._fragmentFiber.child,!0,R_,t,void 0,void 0)};function R_(t,n){return t.tag===6?!1:(t=M(t),vy(t,n))}oi.prototype.focusLast=function(t){var n=[];v(this._fragmentFiber.child,!0,Zd,n,void 0,void 0);for(var i=n.length-1;0<=i&&!R_(n[i],t);i--);};function Zd(t,n){return n.push(t),!1}oi.prototype.blur=function(){var t=_(this._fragmentFiber);t!==null&&(t=M(t),t=jo(t).activeElement,t!==null&&v(this._fragmentFiber.child,!1,oy,t,void 0,void 0))};function oy(t,n){return t.tag===6?!1:(t=M(t),t===n||t.contains(n)?(n.blur(),!0):!1)}oi.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),v(this._fragmentFiber.child,!1,ly,t,void 0,void 0)};function ly(t,n){return t.tag===6||(t=M(t),n.observe(t)),!1}oi.prototype.unobserveUsing=function(t){var n=this._observers;if(n!==null&&n.has(t)){n.delete(t),v(this._fragmentFiber.child,!1,uy,t,void 0,void 0);for(var i=n=0;i<Ui.length;i++){var r=Ui[i];r.fragmentInstance===this&&r.observer===t?t.unobserve(r.instance):Ui[n++]=r}Ui.length=n}};function uy(t,n){return t.tag===6||(t=M(t),n.unobserve(t)),!1}var Ui=[],Kd=!1;function cy(t,n,i){Ui.push({fragmentInstance:t,observer:n,instance:i}),Kd||(Kd=!0,xy(function(){Kd=!1;var r=Ui;Ui=[];for(var l=0;l<r.length;l++){var c=r[l];c.observer.unobserve(c.instance)}}))}oi.prototype.getClientRects=function(){var t=[];return v(this._fragmentFiber.child,!1,fy,t,void 0,void 0),t};function fy(t,n){if(t.tag===6){t=t.stateNode;var i=t.ownerDocument.createRange();i.selectNodeContents(t),n.push.apply(n,i.getClientRects())}else t=M(t),n.push.apply(n,t.getClientRects());return!1}oi.prototype.getRootNode=function(t){var n=_(this._fragmentFiber);return n===null?this:M(n).getRootNode(t)},oi.prototype.compareDocumentPosition=function(t){var n=_(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var i=[];v(this._fragmentFiber.child,!1,Zd,i,void 0,void 0);var r=M(n);if(i.length===0){if(i=r,E(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(i=n)}n=this._fragmentFiber;var l=r=i.compareDocumentPosition(t);return i===t?l=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(i=R(n)[1],i===null?l=Node.DOCUMENT_POSITION_PRECEDING:(t=M(i).compareDocumentPosition(t),l=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),l|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=M(i[0]),l=M(i[i.length-1]);var c=E(this._fragmentFiber)?n.parentElement:r;if(c==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=c.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,c=c.compareDocumentPosition(l)&Node.DOCUMENT_POSITION_CONTAINED_BY;var g=n.compareDocumentPosition(t),A=l.compareDocumentPosition(t),I=g&Node.DOCUMENT_POSITION_CONTAINED_BY||A&Node.DOCUMENT_POSITION_CONTAINED_BY;return A=r&&c&&g&Node.DOCUMENT_POSITION_FOLLOWING&&A&Node.DOCUMENT_POSITION_PRECEDING,n=r&&n===t||c&&l===t||I||A?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&n===t||!c&&l===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:g,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||dy(n,this._fragmentFiber,i[0],i[i.length-1],t)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function dy(t,n,i,r,l){var c=re(l);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(i=!!c)t:{for(;c!==null;){if(c.tag===7&&(c===n||c.alternate===n)){i=!0;break t}c=c.return}i=!1}return i}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(c===null)return c=l.ownerDocument,l===c||l===c.documentElement||l===c.body;t:{for(c=n,n=_(n);c!==null;){if(!(c.tag!==5&&c.tag!==3&&c.tag!==27||c!==n&&c.alternate!==n)){c=!0;break t}c=c.return}c=!1}return c}return t&Node.DOCUMENT_POSITION_PRECEDING?((n=!!c)&&!(n=c===i)&&(n=U(i,c,N),n===null?n=!1:(v(n,!0,X,c,i),c=S,S=null,n=c!==null)),n):t&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!c)&&!(n=c===r)&&(n=U(r,c,N),n===null?n=!1:(v(n,!0,C,c,r),c=S,O=S=null,n=c!==null)),n):!1}function C_(t,n){var i=t.ownerDocument.createRange();i.selectNodeContents(t),t=i.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,n?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}oi.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(s(566));var n=[];v(this._fragmentFiber.child,!1,Zd,n,void 0,void 0);var i=t!==!1;if(n.length===0){var r=R(this._fragmentFiber);if(r=i?r[1]||r[0]||_(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){t=M(r),C_(t,i);return}if(r=M(r),r.nodeType!==9){if(r.nodeType===11){i="host"in r?r.host:null,i!==null&&i.scrollIntoView(t);return}r.scrollIntoView(t)}}for(r=i?n.length-1:0;r!==(i?-1:n.length);){var l=n[r];l.tag===6?(l=M(l),C_(l,i)):M(l).scrollIntoView(t),r+=i?-1:1}};function hy(t,n){return t=M(t),w_(t,n),!1}function w_(t,n){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(n)}function N_(t,n){var i=n._eventListeners;if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];t.addEventListener(l.type,l.attachedListener,Ls(l.optionsOrUseCapture))}t.nodeType!==3&&(i=n._observers,i!==null&&i.forEach(function(c){for(var g=0,A=0;A<Ui.length;A++){var I=Ui[A];(I.fragmentInstance!==n||I.observer!==c||I.instance!==t)&&(Ui[g++]=I)}Ui.length=g,c.observe(t)}),w_(t,n))}function py(t,n){var i=n._eventListeners;if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];t.removeEventListener(l.type,l.attachedListener,Ls(l.optionsOrUseCapture))}t.nodeType!==3&&(i=n._observers,i!==null&&i.forEach(function(c){typeof c.rootMargin=="string"?cy(n,c,t):c.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(n))}function jd(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var i=n;switch(n=n.nextSibling,i.nodeName){case"HTML":case"HEAD":case"BODY":jd(i),jt(i);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(i.rel.toLowerCase()==="stylesheet")continue}t.removeChild(i)}}function my(t,n,i,r){for(;t.nodeType===1;){var l=i;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[Pt])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(c=t.getAttribute("rel"),c==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(c!==l.rel||t.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||t.getAttribute("title")!==(l.title==null?null:l.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(c=t.getAttribute("src"),(c!==(l.src==null?null:l.src)||t.getAttribute("type")!==(l.type==null?null:l.type)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&c&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var c=l.name==null?null:""+l.name;if(l.type==="hidden"&&t.getAttribute("name")===c)return t}else return t;if(t=xi(t.nextSibling),t===null)break}return null}function gy(t,n,i){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=xi(t.nextSibling),t===null))return null;return t}function D_(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=xi(t.nextSibling),t===null))return null;return t}function Qd(t){return t.data==="$?"||t.data==="$~"}function Jd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function _y(t,n){var i=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||i.readyState!=="loading")n();else{var r=function(){n(),i.removeEventListener("DOMContentLoaded",r)};i.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function xi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var $d=null;function U_(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var i=t.data;if(i==="/$"||i==="/&"){if(n===0)return xi(t.nextSibling);n--}else i!=="$"&&i!=="$!"&&i!=="$?"&&i!=="$~"&&i!=="&"||n++}t=t.nextSibling}return null}function L_(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var i=t.data;if(i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"){if(n===0)return t;n--}else i!=="/$"&&i!=="/&"||n++}t=t.previousSibling}return null}function vy(t,n){function i(){r=!0}if(t.ownerDocument.activeElement===t)return!0;var r=!1;try{t.ownerDocument.addEventListener("focus",i,!0),(t.focus||HTMLElement.prototype.focus).call(t,n)}finally{t.ownerDocument.removeEventListener("focus",i,!0)}return r}function xy(t){x_(function(){x_(function(n){return t(n)})})}function O_(t,n,i){switch(n=jo(i),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function P_(t,n,i){for(var r in i){var l=i[r];i.hasOwnProperty(r)&&l!=null&&We(t,n,r,null,ZM,l)}i.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===Xi&&(t.onclick=null),jt(t)}function th(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);jt(t)}var Si=new Map,I_=new Set;function Qo(t){if(typeof t.getRootNode=="function"){var n=t.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return t.nodeType===9?t:t.ownerDocument}var ba=Rt.d;Rt.d={f:Sy,r:My,D:yy,C:Ey,L:by,m:Ty,X:Ry,S:Ay,M:Cy};function Sy(){var t=ba.f(),n=Nu();return t||n}function My(t){var n=fe(t);n!==null&&n.tag===5&&n.type==="form"?B0(n):ba.r(t)}var Os=typeof document>"u"?null:document;function z_(t,n,i){var r=Os;if(r&&typeof n=="string"&&n){var l=di(n);l='link[rel="'+t+'"][href="'+l+'"]',typeof i=="string"&&(l+='[crossorigin="'+i+'"]'),I_.has(l)||(I_.add(l),t={rel:t,crossOrigin:i,href:n},r.querySelector(l)===null&&(n=r.createElement("link"),Nn(n,"link",t),ve(n),r.head.appendChild(n)))}}function yy(t){ba.D(t),z_("dns-prefetch",t,null)}function Ey(t,n){ba.C(t,n),z_("preconnect",t,n)}function by(t,n,i){ba.L(t,n,i);var r=Os;if(r&&t&&n){var l='link[rel="preload"][as="'+di(n)+'"]';n==="image"&&i&&i.imageSrcSet?(l+='[imagesrcset="'+di(i.imageSrcSet)+'"]',typeof i.imageSizes=="string"&&(l+='[imagesizes="'+di(i.imageSizes)+'"]')):l+='[href="'+di(t)+'"]';var c=l;switch(n){case"style":c=Ps(t);break;case"script":c=Is(t)}if(!(Si.has(c)||(t=P({rel:"preload",href:n==="image"&&i&&i.imageSrcSet?void 0:t,as:n},i),Si.set(c,t),r.querySelector(l)!==null||n==="style"&&r.querySelector(Jo(c))||n==="script"&&r.querySelector($o(c))))){var g=r.createElement("link");Nn(g,"link",t),n==="style"&&(g[Kt]=!0,g.onload=g.onerror=function(){Ye(g)}),ve(g),r.head.appendChild(g)}}}function Ty(t,n){ba.m(t,n);var i=Os;if(i&&t){var r=n&&typeof n.as=="string"?n.as:"script",l='link[rel="modulepreload"][as="'+di(r)+'"][href="'+di(t)+'"]',c=l;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=Is(t)}if(!Si.has(c)&&(t=P({rel:"modulepreload",href:t},n),Si.set(c,t),i.querySelector(l)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(i.querySelector($o(c)))return}r=i.createElement("link"),Nn(r,"link",t),ve(r),i.head.appendChild(r)}}}function Ay(t,n,i){ba.S(t,n,i);var r=Os;if(r&&t){var l=Me(r).hoistableStyles,c=Ps(t);n=n||"default";var g=l.get(c);if(!g){var A={loading:0,preload:null};if(g=r.querySelector(Jo(c)))A.loading=5;else{t=P({rel:"stylesheet",href:t,"data-precedence":n},i),(i=Si.get(c))&&eh(t,i);var I=g=r.createElement("link");ve(I),Nn(I,"link",t),I._p=new Promise(function(Q,lt){I.onload=Q,I.onerror=lt}),I.addEventListener("load",function(){A.loading|=1}),I.addEventListener("error",function(){A.loading|=2}),A.loading|=4,zu(g,n,r)}g={type:"stylesheet",instance:g,count:1,state:A},l.set(c,g)}}}function Ry(t,n){ba.X(t,n);var i=Os;if(i&&t){var r=Me(i).hoistableScripts,l=Is(t),c=r.get(l);c||(c=i.querySelector($o(l)),c||(t=P({src:t,async:!0},n),(n=Si.get(l))&&nh(t,n),c=i.createElement("script"),ve(c),Nn(c,"link",t),i.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(l,c))}}function Cy(t,n){ba.M(t,n);var i=Os;if(i&&t){var r=Me(i).hoistableScripts,l=Is(t),c=r.get(l);c||(c=i.querySelector($o(l)),c||(t=P({src:t,async:!0,type:"module"},n),(n=Si.get(l))&&nh(t,n),c=i.createElement("script"),ve(c),Nn(c,"link",t),i.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(l,c))}}function B_(t,n,i,r){var l=(l=Oe.current)?Qo(l):null;if(!l)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof i.precedence=="string"&&typeof i.href=="string"?(i=Ps(i.href),n=Me(l).hoistableStyles,r=n.get(i),r||(r={type:"style",instance:null,count:0,state:null},n.set(i,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(i.rel==="stylesheet"&&typeof i.href=="string"&&typeof i.precedence=="string"){t=Ps(i.href);var c=Me(l).hoistableStyles,g=c.get(t);if(g||(l=l.ownerDocument||l,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(t,g),(c=l.querySelector(Jo(t)))?c._p||(g.instance=c,g.state.loading=5):(c=Si.get(t),c||(c={rel:"preload",as:"style",href:i.href,crossOrigin:i.crossOrigin,integrity:i.integrity,media:i.media,hrefLang:i.hrefLang,referrerPolicy:i.referrerPolicy},Si.set(t,c)),wy(l,t,c,g.state))),n&&r===null)throw Error(s(528,""));return g}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=i.async,i=i.src,typeof i=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(i=Is(i),n=Me(l).hoistableScripts,r=n.get(i),r||(r={type:"script",instance:null,count:0,state:null},n.set(i,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Ps(t){return'href="'+di(t)+'"'}function Jo(t){return'link[rel="stylesheet"]['+t+"]"}function F_(t){return P({},t,{"data-precedence":t.precedence,precedence:null})}function wy(t,n,i,r){if(n=t.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[Kt]!==!0){r.loading=1;return}}else n=t.createElement("link"),n[Kt]=!0,n.onload=n.onerror=Ye.bind(null,n),Nn(n,"link",i),ve(n),t.head.appendChild(n);r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2})}function Is(t){return'[src="'+di(t)+'"]'}function $o(t){return"script[async]"+t}function H_(t,n,i){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+di(i.href)+'"]');if(r)return n.instance=r,ve(r),r;var l=P({},i,{"data-href":i.href,"data-precedence":i.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),ve(r),Nn(r,"style",l),zu(r,i.precedence,t),n.instance=r;case"stylesheet":l=Ps(i.href);var c=t.querySelector(Jo(l));if(c)return n.state.loading|=4,n.instance=c,ve(c),c;r=F_(i),(l=Si.get(l))&&eh(r,l),c=(t.ownerDocument||t).createElement("link"),ve(c);var g=c;return g._p=new Promise(function(A,I){g.onload=A,g.onerror=I}),Nn(c,"link",r),n.state.loading|=4,zu(c,i.precedence,t),n.instance=c;case"script":return c=Is(i.src),(l=t.querySelector($o(c)))?(n.instance=l,ve(l),l):(r=i,(l=Si.get(c))&&(r=P({},i),nh(r,l)),t=t.ownerDocument||t,l=t.createElement("script"),ve(l),Nn(l,"link",r),t.head.appendChild(l),n.instance=l);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,zu(r,i.precedence,t));return n.instance}function zu(t,n,i){for(var r=i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=r.length?r[r.length-1]:null,c=l,g=0;g<r.length;g++){var A=r[g];if(A.dataset.precedence===n)c=A;else if(c!==l)break}c?c.parentNode.insertBefore(t,c.nextSibling):(n=i.nodeType===9?i.head:i,n.insertBefore(t,n.firstChild))}function eh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function nh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Bu=null;function G_(t,n,i){if(Bu===null){var r=new Map,l=Bu=new Map;l.set(i,r)}else l=Bu,r=l.get(i),r||(r=new Map,l.set(i,r));if(r.has(t))return r;for(r.set(t,null),i=i.getElementsByTagName(t),l=0;l<i.length;l++){var c=i[l];if(!(c[Pt]||c[T]||t==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var g=c.getAttribute(n)||"";g=t+g;var A=r.get(g);A?A.push(c):r.set(g,[c])}}return r}function ih(t,n,i){t=t.ownerDocument||t,t.head.insertBefore(i,n==="title"?t.querySelector("head > title"):null)}function Ny(t,n,i){if(i===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function V_(t,n){return t==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function X_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function k_(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function W_(t,n){typeof n.decode=="function"&&(t.imgCount++,n.complete||(t.imgBytes+=k_(n),t.suspenseyImages.push(n)),t=Ly.bind(t),n.decode().then(t,t))}function Dy(t,n,i,r){if(i.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var l=Ps(r.href),c=n.querySelector(Jo(l));if(c){n=c._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=tl.bind(t),n.then(t,t)),i.state.loading|=4,i.instance=c,ve(c);return}c=n.ownerDocument||n,r=F_(r),(l=Si.get(l))&&eh(r,l),c=c.createElement("link"),ve(c);var g=c;g._p=new Promise(function(A,I){g.onload=A,g.onerror=I}),Nn(c,"link",r),i.instance=c}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(i,n),(n=i.state.preload)&&(i.state.loading&3)===0&&(t.count++,i=tl.bind(t),n.addEventListener("load",i),n.addEventListener("error",i))}}var Fu=0;function Uy(t,n){return t.stylesheets&&t.count===0&&Gu(t,t.stylesheets),0<t.count||0<t.imgCount?function(i){var r=setTimeout(function(){if(t.stylesheets&&Gu(t,t.stylesheets),t.unsuspend){var c=t.unsuspend;t.unsuspend=null,c()}},6e4+n);0<t.imgBytes&&Fu===0&&(Fu=62500*jM());var l=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Gu(t,t.stylesheets),t.unsuspend)){var c=t.unsuspend;t.unsuspend=null,c()}},(t.imgBytes>Fu?50:800)+n);return t.unsuspend=i,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(l)}}:null}function q_(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)Gu(t,t.stylesheets);else if(t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}}}function tl(){this.count--,q_(this)}function Ly(){this.imgCount--,q_(this)}var Hu=null;function Gu(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Hu=new Map,n.forEach(Oy,t),Hu=null,tl.call(t))}function Oy(t,n){if(!(n.state.loading&4)){var i=Hu.get(t);if(i)var r=i.get(null);else{i=new Map,Hu.set(t,i);for(var l=t.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<l.length;c++){var g=l[c];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(i.set(g.dataset.precedence,g),r=g)}r&&i.set(null,r)}l=n.instance,g=l.getAttribute("data-precedence"),c=i.get(g)||r,c===r&&i.set(null,l),i.set(g,l),this.count++,r=tl.bind(this),l.addEventListener("load",r),l.addEventListener("error",r),c?c.parentNode.insertBefore(l,c.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(l,t.firstChild)),n.state.loading|=4}}var zs={$$typeof:$,Provider:null,Consumer:null,_currentValue:be,_currentValue2:be,_threadCount:0};function Py(t,n,i,r,l,c,g,A,I){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ts(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ts(0),this.hiddenUpdates=ts(null),this.identifierPrefix=r,this.onUncaughtError=l,this.onCaughtError=c,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.transitionTypes=null,this.incompleteTransitions=new Map}function Y_(t,n,i,r,l,c,g,A,I,Q,lt,Mt){return t=new Py(t,n,i,g,I,Q,lt,Mt,A),n=1,c===!0&&(n|=24),c=Wn(3,null,null,n),t.current=c,c.stateNode=t,n=vf(),n.refCount++,t.pooledCache=n,n.refCount++,c.memoizedState={element:r,isDehydrated:i,cache:n},yf(c),t}function Z_(t){return t?(t=us,t):us}function K_(t,n,i,r,l,c){l=Z_(l),r.context===null?r.context=l:r.pendingContext=l,r=qa(n),r.payload={element:i},c=c===void 0?null:c,c!==null&&(r.callback=c),i=Ya(t,r,n),i!==null&&(Kn(i,t,n),Do(i,t,n))}function j_(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var i=t.retryLane;t.retryLane=i!==0&&i<n?i:n}}function ah(t,n){j_(t,n),(t=t.alternate)&&j_(t,n)}function Q_(t){if(t.tag===13||t.tag===31){var n=yr(t,67108864);n!==null&&Kn(n,t,67108864),ah(t,67108864)}}function J_(t){if(t.tag===13||t.tag===31){var n=si();n=po(n);var i=yr(t,n);i!==null&&Kn(i,t,n),ah(t,n)}}var Bs=!0;function Iy(t,n,i,r){var l=gt.T;gt.T=null;var c=Rt.p;try{Rt.p=2,rh(t,n,i,r)}finally{Rt.p=c,gt.T=l}}function zy(t,n,i,r){var l=gt.T;gt.T=null;var c=Rt.p;try{Rt.p=8,rh(t,n,i,r)}finally{Rt.p=c,gt.T=l}}function rh(t,n,i,r){if(Bs){var l=sh(r);if(l===null)Hd(t,n,r,Vu,i),tv(t,r);else if(Fy(l,t,n,i,r))r.stopPropagation();else if(tv(t,r),n&4&&-1<By.indexOf(t)){for(;l!==null;){var c=fe(l);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var g=ca(c.pendingLanes);if(g!==0){var A=c;for(A.pendingLanes|=2,A.entangledLanes|=2;g;){var I=1<<31-ce(g);A.entanglements[1]|=I,g&=~I}$i(c),(ze&6)===0&&(Ru=Wt()+500,Yo(0))}}break;case 31:case 13:A=yr(c,2),A!==null&&Kn(A,c,2),Nu(),ah(c,2)}if(c=sh(r),c===null&&Hd(t,n,r,Vu,i),c===l)break;l=c}l!==null&&r.stopPropagation()}else Hd(t,n,r,null,i)}}function sh(t){return t=kc(t),oh(t)}var Vu=null;function oh(t){if(Vu=null,t=re(t),t!==null){var n=f(t);if(n===null)t=null;else{var i=n.tag;if(i===13){if(t=d(n),t!==null)return t;t=null}else if(i===31){if(t=h(n),t!==null)return t;t=null}else if(i===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Vu=t,null}function $_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ne()){case ue:return 2;case G:return 8;case Dt:case yt:return 32;case Ot:return 268435456;default:return 32}default:return 32}}var lh=!1,rr=null,sr=null,or=null,el=new Map,nl=new Map,lr=[],By="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function tv(t,n){switch(t){case"focusin":case"focusout":rr=null;break;case"dragenter":case"dragleave":sr=null;break;case"mouseover":case"mouseout":or=null;break;case"pointerover":case"pointerout":el.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":nl.delete(n.pointerId)}}function il(t,n,i,r,l,c){return t===null||t.nativeEvent!==c?(t={blockedOn:n,domEventName:i,eventSystemFlags:r,nativeEvent:c,targetContainers:[l]},n!==null&&(n=fe(n),n!==null&&Q_(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),t)}function Fy(t,n,i,r,l){switch(n){case"focusin":return rr=il(rr,t,n,i,r,l),!0;case"dragenter":return sr=il(sr,t,n,i,r,l),!0;case"mouseover":return or=il(or,t,n,i,r,l),!0;case"pointerover":var c=l.pointerId;return el.set(c,il(el.get(c)||null,t,n,i,r,l)),!0;case"gotpointercapture":return c=l.pointerId,nl.set(c,il(nl.get(c)||null,t,n,i,r,l)),!0}return!1}function ev(t){var n=re(t.target);if(n!==null){var i=f(n);if(i!==null){if(n=i.tag,n===13){if(n=d(i),n!==null){t.blockedOn=n,Cl(t.priority,function(){J_(i)});return}}else if(n===31){if(n=h(i),n!==null){t.blockedOn=n,Cl(t.priority,function(){J_(i)});return}}else if(n===3&&i.stateNode.current.memoizedState.isDehydrated){t.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Xu(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var i=sh(t.nativeEvent);if(i===null){i=t.nativeEvent;var r=new i.constructor(i.type,i);Xc=r,i.target.dispatchEvent(r),Xc=null}else return n=fe(i),n!==null&&Q_(n),t.blockedOn=i,!1;n.shift()}return!0}function nv(t,n,i){Xu(t)&&i.delete(n)}function Hy(){lh=!1,rr!==null&&Xu(rr)&&(rr=null),sr!==null&&Xu(sr)&&(sr=null),or!==null&&Xu(or)&&(or=null),el.forEach(nv),nl.forEach(nv)}function ku(t,n){t.blockedOn===n&&(t.blockedOn=null,lh||(lh=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Hy)))}var Wu=null;function iv(t){Wu!==t&&(Wu=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Wu===t&&(Wu=null);for(var n=0;n<t.length;n+=3){var i=t[n],r=t[n+1],l=t[n+2];if(typeof r!="function"){if(oh(r||i)===null)continue;break}var c=fe(i);c!==null&&(t.splice(n,3),n-=3,Xf(c,{pending:!0,data:l,method:i.method,action:r},r,l))}}))}function Fs(t){function n(I){return ku(I,t)}rr!==null&&ku(rr,t),sr!==null&&ku(sr,t),or!==null&&ku(or,t),el.forEach(n),nl.forEach(n);for(var i=0;i<lr.length;i++){var r=lr[i];r.blockedOn===t&&(r.blockedOn=null)}for(;0<lr.length&&(i=lr[0],i.blockedOn===null);)ev(i),i.blockedOn===null&&lr.shift();if(i=(t.ownerDocument||t).$$reactFormReplay,i!=null)for(r=0;r<i.length;r+=3){var l=i[r],c=i[r+1],g=l[B]||null;if(typeof c=="function")g||iv(i);else if(g){var A=null;if(c&&c.hasAttribute("formAction")){if(l=c,g=c[B]||null)A=g.formAction;else if(oh(l)!==null)continue}else A=g.action;typeof A=="function"?i[r+1]=A:(i.splice(r,3),r-=3),iv(i)}}}function av(){function t(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(g){return l=g})},focusReset:"manual",scroll:"manual"})}function n(){l!==null&&(l(),l=null),r||setTimeout(i,20)}function i(){if(!r&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,l=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(i,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),l!==null&&(l(),l=null)}}}function uh(t){this._internalRoot=t}qu.prototype.render=uh.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var i=n.current,r=si();K_(i,r,t,n,null,null)},qu.prototype.unmount=uh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;K_(t.current,2,null,t,null,null),Nu(),n[ct]=null}};function qu(t){this._internalRoot=t}qu.prototype.unstable_scheduleHydration=function(t){if(t){var n=Rl();t={blockedOn:null,target:t,priority:n};for(var i=0;i<lr.length&&n!==0&&n<lr[i].priority;i++);lr.splice(i,0,t),i===0&&ev(t)}};var rv=e.version;if(rv!=="19.3.0")throw Error(s(527,rv,"19.3.0"));Rt.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(n),t=t!==null?x(t):null,t=t===null?null:t.stateNode,t};var Gy={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:gt,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yu.isDisabled&&Yu.supportsFiber)try{Jt=Yu.inject(Gy),Xt=Yu}catch{}}return rl.createRoot=function(t,n){if(!u(t))throw Error(s(299));var i=!1,r="",l=Z0,c=K0,g=j0;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(c=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=Y_(t,1,!1,null,null,i,r,null,l,c,g,av),t[ct]=n.current,Fd(t),new uh(n)},rl.hydrateRoot=function(t,n,i){if(!u(t))throw Error(s(299));var r=!1,l="",c=Z0,g=K0,A=j0,I=null;return i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(c=i.onUncaughtError),i.onCaughtError!==void 0&&(g=i.onCaughtError),i.onRecoverableError!==void 0&&(A=i.onRecoverableError),i.formState!==void 0&&(I=i.formState)),n=Y_(t,1,!0,n,i??null,r,l,I,c,g,A,av),n.context=Z_(null),i=n.current,r=si(),r=po(r),l=qa(r),l.callback=null,Ya(i,l,r),i=r,n.current.lanes=i,Gi(n,i),$i(n),t[ct]=n.current,Fd(t),new qu(n)},rl.version="19.3.0",rl}var mv;function Jy(){if(mv)return dh.exports;mv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),dh.exports=Qy(),dh.exports}var $y=Jy();const tE=px($y);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fp="186",eE=0,gv=1,nE=2,Sc=1,iE=2,hl=3,Zr=0,jn=1,Na=2,Ua=0,ml=1,Zh=2,_v=3,vv=4,aE=5,$s=100,rE=101,sE=102,oE=103,lE=104,uE=200,cE=201,fE=202,dE=203,mx=204,gx=205,hE=206,pE=207,mE=208,gE=209,_E=210,vE=211,xE=212,SE=213,ME=214,Kh=0,jh=1,Qh=2,vl=3,Jh=4,$h=5,tp=6,ep=7,_x=0,yE=1,EE=2,ra=0,vx=1,xx=2,Sx=3,Mx=4,yx=5,Ex=6,bx=7,Tx=300,Kr=301,ao=302,gh=303,_h=304,Lc=306,np=1e3,Da=1001,ip=1002,Un=1003,bE=1004,Zu=1005,In=1006,vh=1007,qr=1008,bi=1009,Ax=1010,Rx=1011,xl=1012,Hp=1013,sa=1014,ia=1015,oa=1016,Gp=1017,Vp=1018,Sl=1020,Cx=35902,wx=35899,Nx=1021,Dx=1022,zi=1023,Oa=1026,Yr=1027,Ux=1028,Xp=1029,jr=1030,kp=1031,Wp=1033,Mc=33776,yc=33777,Ec=33778,bc=33779,ap=35840,rp=35841,sp=35842,op=35843,lp=36196,up=37492,cp=37496,fp=37488,dp=37489,Ac=37490,hp=37491,pp=37808,mp=37809,gp=37810,_p=37811,vp=37812,xp=37813,Sp=37814,Mp=37815,yp=37816,Ep=37817,bp=37818,Tp=37819,Ap=37820,Rp=37821,Cp=36492,wp=36494,Np=36495,Dp=36283,Up=36284,Rc=36285,Lp=36286,TE=3200,xv=0,AE=1,gr="",yi="srgb",Cc="srgb-linear",wc="linear",qe="srgb",xh=7680,RE=519,CE=512,wE=513,NE=514,qp=515,DE=516,UE=517,Yp=518,LE=519,OE=35044,Sv="300 es",aa=2e3,Nc=2001;function PE(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Dc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function IE(){const o=Dc("canvas");return o.style.display="block",o}const Mv={};function yv(...o){const e="THREE."+o.shift();console.log(e,...o)}function Lx(o){const e=o[0];if(typeof e=="string"&&e.startsWith("TSL:")){const a=o[1];a&&a.isStackTrace?o[0]+=" "+a.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function oe(...o){o=Lx(o);const e="THREE."+o.shift();{const a=o[0];a&&a.isStackTrace?console.warn(a.getError(e)):console.warn(e,...o)}}function Pe(...o){o=Lx(o);const e="THREE."+o.shift();{const a=o[0];a&&a.isStackTrace?console.error(a.getError(e)):console.error(e,...o)}}function no(...o){const e=o.join(" ");e in Mv||(Mv[e]=!0,oe(...o))}function zE(o,e,a){return new Promise(function(s,u){function f(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:u();break;case o.TIMEOUT_EXPIRED:setTimeout(f,a);break;default:s()}}setTimeout(f,a)})}const BE={[Kh]:jh,[Qh]:tp,[Jh]:ep,[vl]:$h,[jh]:Kh,[tp]:Qh,[ep]:Jh,[$h]:vl};class Jr{addEventListener(e,a){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(a)===-1&&s[e].push(a)}hasEventListener(e,a){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(a)!==-1}removeEventListener(e,a){const s=this._listeners;if(s===void 0)return;const u=s[e];if(u!==void 0){const f=u.indexOf(a);f!==-1&&u.splice(f,1)}}dispatchEvent(e){const a=this._listeners;if(a===void 0)return;const s=a[e.type];if(s!==void 0){e.target=this;const u=s.slice(0);for(let f=0,d=u.length;f<d;f++)u[f].call(this,e);e.target=null}}}const On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ev=1234567;const gl=Math.PI/180,Ml=180/Math.PI;function so(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,a=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(On[o&255]+On[o>>8&255]+On[o>>16&255]+On[o>>24&255]+"-"+On[e&255]+On[e>>8&255]+"-"+On[e>>16&15|64]+On[e>>24&255]+"-"+On[a&63|128]+On[a>>8&255]+"-"+On[a>>16&255]+On[a>>24&255]+On[s&255]+On[s>>8&255]+On[s>>16&255]+On[s>>24&255]).toLowerCase()}function Ce(o,e,a){return Math.max(e,Math.min(a,o))}function Zp(o,e){return(o%e+e)%e}function FE(o,e,a,s,u){return s+(o-e)*(u-s)/(a-e)}function HE(o,e,a){return o!==e?(a-o)/(e-o):0}function _l(o,e,a){return(1-a)*o+a*e}function GE(o,e,a,s){return _l(o,e,1-Math.exp(-a*s))}function VE(o,e=1){return e-Math.abs(Zp(o,e*2)-e)}function XE(o,e,a){return o<=e?0:o>=a?1:(o=(o-e)/(a-e),o*o*(3-2*o))}function kE(o,e,a){return o<=e?0:o>=a?1:(o=(o-e)/(a-e),o*o*o*(o*(o*6-15)+10))}function WE(o,e){return o+Math.floor(Math.random()*(e-o+1))}function qE(o,e){return o+Math.random()*(e-o)}function YE(o){return o*(.5-Math.random())}function ZE(o){o!==void 0&&(Ev=o);let e=Ev+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function KE(o){return o*gl}function jE(o){return o*Ml}function QE(o){return o>0&&Number.isInteger(o)&&2**Math.round(Math.log2(o))===o}function JE(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function $E(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function tb(o,e,a,s,u){const f=Math.cos,d=Math.sin,h=f(a/2),m=d(a/2),p=f((e+s)/2),x=d((e+s)/2),v=f((e-s)/2),_=d((e-s)/2),E=f((s-e)/2),R=d((s-e)/2);switch(u){case"XYX":o.set(h*x,m*v,m*_,h*p);break;case"YZY":o.set(m*_,h*x,m*v,h*p);break;case"ZXZ":o.set(m*v,m*_,h*x,h*p);break;case"XZX":o.set(h*x,m*R,m*E,h*p);break;case"YXY":o.set(m*E,h*x,m*R,h*p);break;case"ZYZ":o.set(m*R,m*E,h*x,h*p);break;default:oe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+u)}}function to(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:case Uint8ClampedArray:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Vn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Sh={DEG2RAD:gl,RAD2DEG:Ml,generateUUID:so,clamp:Ce,euclideanModulo:Zp,mapLinear:FE,inverseLerp:HE,lerp:_l,damp:GE,pingpong:VE,smoothstep:XE,smootherstep:kE,randInt:WE,randFloat:qE,randFloatSpread:YE,seededRandom:ZE,degToRad:KE,radToDeg:jE,isPowerOfTwo:QE,ceilPowerOfTwo:JE,floorPowerOfTwo:$E,setQuaternionFromProperEuler:tb,normalize:Vn,denormalize:to},Jp=class Jp{constructor(e=0,a=0){this.x=e,this.y=a}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,a){return this.x=e,this.y=a,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,a){switch(e){case 0:this.x=a;break;case 1:this.y=a;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,a){return this.x=e.x+a.x,this.y=e.y+a.y,this}addScaledVector(e,a){return this.x+=e.x*a,this.y+=e.y*a,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,a){return this.x=e.x-a.x,this.y=e.y-a.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const a=this.x,s=this.y,u=e.elements;return this.x=u[0]*a+u[3]*s+u[6],this.y=u[1]*a+u[4]*s+u[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,a){return this.x=Ce(this.x,e.x,a.x),this.y=Ce(this.y,e.y,a.y),this}clampScalar(e,a){return this.x=Ce(this.x,e,a),this.y=Ce(this.y,e,a),this}clampLength(e,a){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ce(s,e,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const a=Math.sqrt(this.lengthSq()*e.lengthSq());if(a===0)return Math.PI/2;const s=this.dot(e)/a;return Math.acos(Ce(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const a=this.x-e.x,s=this.y-e.y;return a*a+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,a){return this.x+=(e.x-this.x)*a,this.y+=(e.y-this.y)*a,this}lerpVectors(e,a,s){return this.x=e.x+(a.x-e.x)*s,this.y=e.y+(a.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,a=0){return this.x=e[a],this.y=e[a+1],this}toArray(e=[],a=0){return e[a]=this.x,e[a+1]=this.y,e}fromBufferAttribute(e,a){return this.x=e.getX(a),this.y=e.getY(a),this}rotateAround(e,a){const s=Math.cos(a),u=Math.sin(a),f=this.x-e.x,d=this.y-e.y;return this.x=f*s-d*u+e.x,this.y=f*u+d*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Jp.prototype.isVector2=!0;let Fe=Jp;class oo{constructor(e=0,a=0,s=0,u=1){this.isQuaternion=!0,this._x=e,this._y=a,this._z=s,this._w=u}static slerpFlat(e,a,s,u,f,d,h){let m=s[u+0],p=s[u+1],x=s[u+2],v=s[u+3],_=f[d+0],E=f[d+1],R=f[d+2],w=f[d+3];if(v!==w||m!==_||p!==E||x!==R){let M=m*_+p*E+x*R+v*w;M<0&&(_=-_,E=-E,R=-R,w=-w,M=-M);let S=1-h;if(M<.9995){const O=Math.acos(M),X=Math.sin(O);S=Math.sin(S*O)/X,h=Math.sin(h*O)/X,m=m*S+_*h,p=p*S+E*h,x=x*S+R*h,v=v*S+w*h}else{m=m*S+_*h,p=p*S+E*h,x=x*S+R*h,v=v*S+w*h;const O=1/Math.sqrt(m*m+p*p+x*x+v*v);m*=O,p*=O,x*=O,v*=O}}e[a]=m,e[a+1]=p,e[a+2]=x,e[a+3]=v}static multiplyQuaternionsFlat(e,a,s,u,f,d){const h=s[u],m=s[u+1],p=s[u+2],x=s[u+3],v=f[d],_=f[d+1],E=f[d+2],R=f[d+3];return e[a]=h*R+x*v+m*E-p*_,e[a+1]=m*R+x*_+p*v-h*E,e[a+2]=p*R+x*E+h*_-m*v,e[a+3]=x*R-h*v-m*_-p*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,a,s,u){return this._x=e,this._y=a,this._z=s,this._w=u,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,a=!0){const s=e._x,u=e._y,f=e._z,d=e._order,h=Math.cos,m=Math.sin,p=h(s/2),x=h(u/2),v=h(f/2),_=m(s/2),E=m(u/2),R=m(f/2);switch(d){case"XYZ":this._x=_*x*v+p*E*R,this._y=p*E*v-_*x*R,this._z=p*x*R+_*E*v,this._w=p*x*v-_*E*R;break;case"YXZ":this._x=_*x*v+p*E*R,this._y=p*E*v-_*x*R,this._z=p*x*R-_*E*v,this._w=p*x*v+_*E*R;break;case"ZXY":this._x=_*x*v-p*E*R,this._y=p*E*v+_*x*R,this._z=p*x*R+_*E*v,this._w=p*x*v-_*E*R;break;case"ZYX":this._x=_*x*v-p*E*R,this._y=p*E*v+_*x*R,this._z=p*x*R-_*E*v,this._w=p*x*v+_*E*R;break;case"YZX":this._x=_*x*v+p*E*R,this._y=p*E*v+_*x*R,this._z=p*x*R-_*E*v,this._w=p*x*v-_*E*R;break;case"XZY":this._x=_*x*v-p*E*R,this._y=p*E*v-_*x*R,this._z=p*x*R+_*E*v,this._w=p*x*v+_*E*R;break;default:oe("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return a===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,a){const s=a/2,u=Math.sin(s);return this._x=e.x*u,this._y=e.y*u,this._z=e.z*u,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const a=e.elements,s=a[0],u=a[4],f=a[8],d=a[1],h=a[5],m=a[9],p=a[2],x=a[6],v=a[10],_=s+h+v;if(_>0){const E=.5/Math.sqrt(_+1);this._w=.25/E,this._x=(x-m)*E,this._y=(f-p)*E,this._z=(d-u)*E}else if(s>h&&s>v){const E=2*Math.sqrt(1+s-h-v);this._w=(x-m)/E,this._x=.25*E,this._y=(u+d)/E,this._z=(f+p)/E}else if(h>v){const E=2*Math.sqrt(1+h-s-v);this._w=(f-p)/E,this._x=(u+d)/E,this._y=.25*E,this._z=(m+x)/E}else{const E=2*Math.sqrt(1+v-s-h);this._w=(d-u)/E,this._x=(f+p)/E,this._y=(m+x)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,a){let s=e.dot(a)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*a.z-e.z*a.y,this._y=e.z*a.x-e.x*a.z,this._z=e.x*a.y-e.y*a.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ce(this.dot(e),-1,1)))}rotateTowards(e,a){const s=this.angleTo(e);if(s===0)return this;const u=Math.min(1,a/s);return this.slerp(e,u),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,a){const s=e._x,u=e._y,f=e._z,d=e._w,h=a._x,m=a._y,p=a._z,x=a._w;return this._x=s*x+d*h+u*p-f*m,this._y=u*x+d*m+f*h-s*p,this._z=f*x+d*p+s*m-u*h,this._w=d*x-s*h-u*m-f*p,this._onChangeCallback(),this}slerp(e,a){let s=e._x,u=e._y,f=e._z,d=e._w,h=this.dot(e);h<0&&(s=-s,u=-u,f=-f,d=-d,h=-h);let m=1-a;if(h<.9995){const p=Math.acos(h),x=Math.sin(p);m=Math.sin(m*p)/x,a=Math.sin(a*p)/x,this._x=this._x*m+s*a,this._y=this._y*m+u*a,this._z=this._z*m+f*a,this._w=this._w*m+d*a,this._onChangeCallback()}else this._x=this._x*m+s*a,this._y=this._y*m+u*a,this._z=this._z*m+f*a,this._w=this._w*m+d*a,this.normalize();return this}slerpQuaternions(e,a,s){return this.copy(e).slerp(a,s)}random(){const e=2*Math.PI*Math.random(),a=2*Math.PI*Math.random(),s=Math.random(),u=Math.sqrt(1-s),f=Math.sqrt(s);return this.set(u*Math.sin(e),u*Math.cos(e),f*Math.sin(a),f*Math.cos(a))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,a=0){return this._x=e[a],this._y=e[a+1],this._z=e[a+2],this._w=e[a+3],this._onChangeCallback(),this}toArray(e=[],a=0){return e[a]=this._x,e[a+1]=this._y,e[a+2]=this._z,e[a+3]=this._w,e}fromBufferAttribute(e,a){return this._x=e.getX(a),this._y=e.getY(a),this._z=e.getZ(a),this._w=e.getW(a),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const $p=class $p{constructor(e=0,a=0,s=0){this.x=e,this.y=a,this.z=s}set(e,a,s){return s===void 0&&(s=this.z),this.x=e,this.y=a,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,a){switch(e){case 0:this.x=a;break;case 1:this.y=a;break;case 2:this.z=a;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,a){return this.x=e.x+a.x,this.y=e.y+a.y,this.z=e.z+a.z,this}addScaledVector(e,a){return this.x+=e.x*a,this.y+=e.y*a,this.z+=e.z*a,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,a){return this.x=e.x-a.x,this.y=e.y-a.y,this.z=e.z-a.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,a){return this.x=e.x*a.x,this.y=e.y*a.y,this.z=e.z*a.z,this}applyEuler(e){return this.applyQuaternion(bv.setFromEuler(e))}applyAxisAngle(e,a){return this.applyQuaternion(bv.setFromAxisAngle(e,a))}applyMatrix3(e){const a=this.x,s=this.y,u=this.z,f=e.elements;return this.x=f[0]*a+f[3]*s+f[6]*u,this.y=f[1]*a+f[4]*s+f[7]*u,this.z=f[2]*a+f[5]*s+f[8]*u,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const a=this.x,s=this.y,u=this.z,f=e.elements,d=1/(f[3]*a+f[7]*s+f[11]*u+f[15]);return this.x=(f[0]*a+f[4]*s+f[8]*u+f[12])*d,this.y=(f[1]*a+f[5]*s+f[9]*u+f[13])*d,this.z=(f[2]*a+f[6]*s+f[10]*u+f[14])*d,this}applyQuaternion(e){const a=this.x,s=this.y,u=this.z,f=e.x,d=e.y,h=e.z,m=e.w,p=2*(d*u-h*s),x=2*(h*a-f*u),v=2*(f*s-d*a);return this.x=a+m*p+d*v-h*x,this.y=s+m*x+h*p-f*v,this.z=u+m*v+f*x-d*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const a=this.x,s=this.y,u=this.z,f=e.elements;return this.x=f[0]*a+f[4]*s+f[8]*u,this.y=f[1]*a+f[5]*s+f[9]*u,this.z=f[2]*a+f[6]*s+f[10]*u,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,a){return this.x=Ce(this.x,e.x,a.x),this.y=Ce(this.y,e.y,a.y),this.z=Ce(this.z,e.z,a.z),this}clampScalar(e,a){return this.x=Ce(this.x,e,a),this.y=Ce(this.y,e,a),this.z=Ce(this.z,e,a),this}clampLength(e,a){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ce(s,e,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,a){return this.x+=(e.x-this.x)*a,this.y+=(e.y-this.y)*a,this.z+=(e.z-this.z)*a,this}lerpVectors(e,a,s){return this.x=e.x+(a.x-e.x)*s,this.y=e.y+(a.y-e.y)*s,this.z=e.z+(a.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,a){const s=e.x,u=e.y,f=e.z,d=a.x,h=a.y,m=a.z;return this.x=u*m-f*h,this.y=f*d-s*m,this.z=s*h-u*d,this}projectOnVector(e){const a=e.lengthSq();if(a===0)return this.set(0,0,0);const s=e.dot(this)/a;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Mh.copy(this).projectOnVector(e),this.sub(Mh)}reflect(e){return this.sub(Mh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const a=Math.sqrt(this.lengthSq()*e.lengthSq());if(a===0)return Math.PI/2;const s=this.dot(e)/a;return Math.acos(Ce(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const a=this.x-e.x,s=this.y-e.y,u=this.z-e.z;return a*a+s*s+u*u}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,a,s){const u=Math.sin(a)*e;return this.x=u*Math.sin(s),this.y=Math.cos(a)*e,this.z=u*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,a,s){return this.x=e*Math.sin(a),this.y=s,this.z=e*Math.cos(a),this}setFromMatrixPosition(e){const a=e.elements;return this.x=a[12],this.y=a[13],this.z=a[14],this}setFromMatrixScale(e){const a=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),u=this.setFromMatrixColumn(e,2).length();return this.x=a,this.y=s,this.z=u,this}setFromMatrixColumn(e,a){return this.fromArray(e.elements,a*4)}setFromMatrix3Column(e,a){return this.fromArray(e.elements,a*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,a=0){return this.x=e[a],this.y=e[a+1],this.z=e[a+2],this}toArray(e=[],a=0){return e[a]=this.x,e[a+1]=this.y,e[a+2]=this.z,e}fromBufferAttribute(e,a){return this.x=e.getX(a),this.y=e.getY(a),this.z=e.getZ(a),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,a=Math.random()*2-1,s=Math.sqrt(1-a*a);return this.x=s*Math.cos(e),this.y=a,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};$p.prototype.isVector3=!0;let ht=$p;const Mh=new ht,bv=new oo,tm=class tm{constructor(e,a,s,u,f,d,h,m,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,a,s,u,f,d,h,m,p)}set(e,a,s,u,f,d,h,m,p){const x=this.elements;return x[0]=e,x[1]=u,x[2]=h,x[3]=a,x[4]=f,x[5]=m,x[6]=s,x[7]=d,x[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const a=this.elements,s=e.elements;return a[0]=s[0],a[1]=s[1],a[2]=s[2],a[3]=s[3],a[4]=s[4],a[5]=s[5],a[6]=s[6],a[7]=s[7],a[8]=s[8],this}extractBasis(e,a,s){return e.setFromMatrix3Column(this,0),a.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const a=e.elements;return this.set(a[0],a[4],a[8],a[1],a[5],a[9],a[2],a[6],a[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,a){const s=e.elements,u=a.elements,f=this.elements,d=s[0],h=s[3],m=s[6],p=s[1],x=s[4],v=s[7],_=s[2],E=s[5],R=s[8],w=u[0],M=u[3],S=u[6],O=u[1],X=u[4],C=u[7],N=u[2],U=u[5],P=u[8];return f[0]=d*w+h*O+m*N,f[3]=d*M+h*X+m*U,f[6]=d*S+h*C+m*P,f[1]=p*w+x*O+v*N,f[4]=p*M+x*X+v*U,f[7]=p*S+x*C+v*P,f[2]=_*w+E*O+R*N,f[5]=_*M+E*X+R*U,f[8]=_*S+E*C+R*P,this}multiplyScalar(e){const a=this.elements;return a[0]*=e,a[3]*=e,a[6]*=e,a[1]*=e,a[4]*=e,a[7]*=e,a[2]*=e,a[5]*=e,a[8]*=e,this}determinant(){const e=this.elements,a=e[0],s=e[1],u=e[2],f=e[3],d=e[4],h=e[5],m=e[6],p=e[7],x=e[8];return a*d*x-a*h*p-s*f*x+s*h*m+u*f*p-u*d*m}invert(){const e=this.elements,a=e[0],s=e[1],u=e[2],f=e[3],d=e[4],h=e[5],m=e[6],p=e[7],x=e[8],v=x*d-h*p,_=h*m-x*f,E=p*f-d*m,R=a*v+s*_+u*E;if(R===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/R;return e[0]=v*w,e[1]=(u*p-x*s)*w,e[2]=(h*s-u*d)*w,e[3]=_*w,e[4]=(x*a-u*m)*w,e[5]=(u*f-h*a)*w,e[6]=E*w,e[7]=(s*m-p*a)*w,e[8]=(d*a-s*f)*w,this}transpose(){let e;const a=this.elements;return e=a[1],a[1]=a[3],a[3]=e,e=a[2],a[2]=a[6],a[6]=e,e=a[5],a[5]=a[7],a[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const a=this.elements;return e[0]=a[0],e[1]=a[3],e[2]=a[6],e[3]=a[1],e[4]=a[4],e[5]=a[7],e[6]=a[2],e[7]=a[5],e[8]=a[8],this}setUvTransform(e,a,s,u,f,d,h){const m=Math.cos(f),p=Math.sin(f);return this.set(s*m,s*p,-s*(m*d+p*h)+d+e,-u*p,u*m,-u*(-p*d+m*h)+h+a,0,0,1),this}scale(e,a){return no("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(yh.makeScale(e,a)),this}rotate(e){return no("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(yh.makeRotation(-e)),this}translate(e,a){return no("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(yh.makeTranslation(e,a)),this}makeTranslation(e,a){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,a,0,0,1),this}makeRotation(e){const a=Math.cos(e),s=Math.sin(e);return this.set(a,-s,0,s,a,0,0,0,1),this}makeScale(e,a){return this.set(e,0,0,0,a,0,0,0,1),this}equals(e){const a=this.elements,s=e.elements;for(let u=0;u<9;u++)if(a[u]!==s[u])return!1;return!0}fromArray(e,a=0){for(let s=0;s<9;s++)this.elements[s]=e[s+a];return this}toArray(e=[],a=0){const s=this.elements;return e[a]=s[0],e[a+1]=s[1],e[a+2]=s[2],e[a+3]=s[3],e[a+4]=s[4],e[a+5]=s[5],e[a+6]=s[6],e[a+7]=s[7],e[a+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}};tm.prototype.isMatrix3=!0;let de=tm;const yh=new de,Tv=new de().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Av=new de().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function eb(){const o={enabled:!0,workingColorSpace:Cc,spaces:{},convert:function(u,f,d){return this.enabled===!1||f===d||!f||!d||(this.spaces[f].transfer===qe&&(u.r=La(u.r),u.g=La(u.g),u.b=La(u.b)),this.spaces[f].primaries!==this.spaces[d].primaries&&(u.applyMatrix3(this.spaces[f].toXYZ),u.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===qe&&(u.r=io(u.r),u.g=io(u.g),u.b=io(u.b))),u},workingToColorSpace:function(u,f){return this.convert(u,this.workingColorSpace,f)},colorSpaceToWorking:function(u,f){return this.convert(u,f,this.workingColorSpace)},getPrimaries:function(u){return this.spaces[u].primaries},getTransfer:function(u){return u===gr?wc:this.spaces[u].transfer},getToneMappingMode:function(u){return this.spaces[u].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(u,f=this.workingColorSpace){return u.fromArray(this.spaces[f].luminanceCoefficients)},define:function(u){Object.assign(this.spaces,u)},_getMatrix:function(u,f,d){return u.copy(this.spaces[f].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(u){return this.spaces[u].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(u=this.workingColorSpace){return this.spaces[u].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(u,f){return no("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(u,f)},toWorkingColorSpace:function(u,f){return no("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(u,f)}},e=[.64,.33,.3,.6,.15,.06],a=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Cc]:{primaries:e,whitePoint:s,transfer:wc,toXYZ:Tv,fromXYZ:Av,luminanceCoefficients:a,workingColorSpaceConfig:{unpackColorSpace:yi},outputColorSpaceConfig:{drawingBufferColorSpace:yi}},[yi]:{primaries:e,whitePoint:s,transfer:qe,toXYZ:Tv,fromXYZ:Av,luminanceCoefficients:a,outputColorSpaceConfig:{drawingBufferColorSpace:yi}}}),o}const De=eb();function La(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function io(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Hs;class nb{static getDataURL(e,a="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Hs===void 0&&(Hs=Dc("canvas")),Hs.width=e.width,Hs.height=e.height;const u=Hs.getContext("2d");e instanceof ImageData?u.putImageData(e,0,0):u.drawImage(e,0,0,e.width,e.height),s=Hs}return s.toDataURL(a)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const a=Dc("canvas");a.width=e.width,a.height=e.height;const s=a.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const u=s.getImageData(0,0,e.width,e.height),f=u.data;for(let d=0;d<f.length;d++)f[d]=La(f[d]/255)*255;return s.putImageData(u,0,0),a}else if(e.data){const a=e.data.slice(0);for(let s=0;s<a.length;s++)a instanceof Uint8Array||a instanceof Uint8ClampedArray?a[s]=Math.floor(La(a[s]/255)*255):a[s]=La(a[s]);return{data:a,width:e.width,height:e.height}}else return oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ib=0;class Kp{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ib++}),this.uuid=so(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const a=this.data;return typeof HTMLVideoElement<"u"&&a instanceof HTMLVideoElement?e.set(a.videoWidth,a.videoHeight,0):typeof VideoFrame<"u"&&a instanceof VideoFrame?e.set(a.displayWidth,a.displayHeight,0):a!==null?e.set(a.width,a.height,a.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const a=e===void 0||typeof e=="string";if(!a&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},u=this.data;if(u!==null){let f;if(Array.isArray(u)){f=[];for(let d=0,h=u.length;d<h;d++)u[d].isDataTexture?f.push(Eh(u[d].image)):f.push(Eh(u[d]))}else f=Eh(u);s.url=f}return a||(e.images[this.uuid]=s),s}}function Eh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?nb.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(oe("Texture: Unable to serialize Texture."),{})}let ab=0;const bh=new ht;class kn extends Jr{constructor(e=kn.DEFAULT_IMAGE,a=kn.DEFAULT_MAPPING,s=Da,u=Da,f=In,d=qr,h=zi,m=bi,p=kn.DEFAULT_ANISOTROPY,x=gr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ab++}),this.uuid=so(),this.name="",this.source=new Kp(e),this.mipmaps=[],this.mapping=a,this.channel=0,this.wrapS=s,this.wrapT=u,this.magFilter=f,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new de,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(bh).x}get height(){return this.source.getSize(bh).y}get depth(){return this.source.getSize(bh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,a){this.updateRanges.push({start:e,count:a})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const a in e){const s=e[a];if(s===void 0){oe(`Texture.setValues(): parameter '${a}' has value of undefined.`);continue}const u=this[a];if(u===void 0){oe(`Texture.setValues(): property '${a}' does not exist.`);continue}u&&s&&u.isVector2&&s.isVector2||u&&s&&u.isVector3&&s.isVector3||u&&s&&u.isMatrix3&&s.isMatrix3?u.copy(s):this[a]=s}}toJSON(e){const a=e===void 0||typeof e=="string";if(!a&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),a||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Tx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case np:e.x=e.x-Math.floor(e.x);break;case Da:e.x=e.x<0?0:1;break;case ip:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case np:e.y=e.y-Math.floor(e.y);break;case Da:e.y=e.y<0?0:1;break;case ip:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}kn.DEFAULT_IMAGE=null;kn.DEFAULT_MAPPING=Tx;kn.DEFAULT_ANISOTROPY=1;const em=class em{constructor(e=0,a=0,s=0,u=1){this.x=e,this.y=a,this.z=s,this.w=u}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,a,s,u){return this.x=e,this.y=a,this.z=s,this.w=u,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,a){switch(e){case 0:this.x=a;break;case 1:this.y=a;break;case 2:this.z=a;break;case 3:this.w=a;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,a){return this.x=e.x+a.x,this.y=e.y+a.y,this.z=e.z+a.z,this.w=e.w+a.w,this}addScaledVector(e,a){return this.x+=e.x*a,this.y+=e.y*a,this.z+=e.z*a,this.w+=e.w*a,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,a){return this.x=e.x-a.x,this.y=e.y-a.y,this.z=e.z-a.z,this.w=e.w-a.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const a=this.x,s=this.y,u=this.z,f=this.w,d=e.elements;return this.x=d[0]*a+d[4]*s+d[8]*u+d[12]*f,this.y=d[1]*a+d[5]*s+d[9]*u+d[13]*f,this.z=d[2]*a+d[6]*s+d[10]*u+d[14]*f,this.w=d[3]*a+d[7]*s+d[11]*u+d[15]*f,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const a=Math.sqrt(1-e.w*e.w);return a<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/a,this.y=e.y/a,this.z=e.z/a),this}setAxisAngleFromRotationMatrix(e){let a,s,u,f;const m=e.elements,p=m[0],x=m[4],v=m[8],_=m[1],E=m[5],R=m[9],w=m[2],M=m[6],S=m[10];if(Math.abs(x-_)<.01&&Math.abs(v-w)<.01&&Math.abs(R-M)<.01){if(Math.abs(x+_)<.1&&Math.abs(v+w)<.1&&Math.abs(R+M)<.1&&Math.abs(p+E+S-3)<.1)return this.set(1,0,0,0),this;a=Math.PI;const X=(p+1)/2,C=(E+1)/2,N=(S+1)/2,U=(x+_)/4,P=(v+w)/4,b=(R+M)/4;return X>C&&X>N?X<.01?(s=0,u=.707106781,f=.707106781):(s=Math.sqrt(X),u=U/s,f=P/s):C>N?C<.01?(s=.707106781,u=0,f=.707106781):(u=Math.sqrt(C),s=U/u,f=b/u):N<.01?(s=.707106781,u=.707106781,f=0):(f=Math.sqrt(N),s=P/f,u=b/f),this.set(s,u,f,a),this}let O=Math.sqrt((M-R)*(M-R)+(v-w)*(v-w)+(_-x)*(_-x));return Math.abs(O)<.001&&(O=1),this.x=(M-R)/O,this.y=(v-w)/O,this.z=(_-x)/O,this.w=Math.acos((p+E+S-1)/2),this}setFromMatrixPosition(e){const a=e.elements;return this.x=a[12],this.y=a[13],this.z=a[14],this.w=a[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,a){return this.x=Ce(this.x,e.x,a.x),this.y=Ce(this.y,e.y,a.y),this.z=Ce(this.z,e.z,a.z),this.w=Ce(this.w,e.w,a.w),this}clampScalar(e,a){return this.x=Ce(this.x,e,a),this.y=Ce(this.y,e,a),this.z=Ce(this.z,e,a),this.w=Ce(this.w,e,a),this}clampLength(e,a){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ce(s,e,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,a){return this.x+=(e.x-this.x)*a,this.y+=(e.y-this.y)*a,this.z+=(e.z-this.z)*a,this.w+=(e.w-this.w)*a,this}lerpVectors(e,a,s){return this.x=e.x+(a.x-e.x)*s,this.y=e.y+(a.y-e.y)*s,this.z=e.z+(a.z-e.z)*s,this.w=e.w+(a.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,a=0){return this.x=e[a],this.y=e[a+1],this.z=e[a+2],this.w=e[a+3],this}toArray(e=[],a=0){return e[a]=this.x,e[a+1]=this.y,e[a+2]=this.z,e[a+3]=this.w,e}fromBufferAttribute(e,a){return this.x=e.getX(a),this.y=e.getY(a),this.z=e.getZ(a),this.w=e.getW(a),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};em.prototype.isVector4=!0;let ln=em;class rb extends Jr{constructor(e=1,a=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},s),this.isRenderTarget=!0,this.width=e,this.height=a,this.depth=s.depth,this.scissor=new ln(0,0,e,a),this.scissorTest=!1,this.viewport=new ln(0,0,e,a),this.textures=[];const u={width:e,height:a,depth:s.depth},f=new kn(u),d=s.count;for(let h=0;h<d;h++)this.textures[h]=f.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveColorBuffer=s.resolveColorBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.storeMultisampledColorBuffer=s.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=s.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=s.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview,this.useArrayDepthTexture=s.useArrayDepthTexture}_setTextureOptions(e={}){const a={minFilter:In,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(a.mapping=e.mapping),e.wrapS!==void 0&&(a.wrapS=e.wrapS),e.wrapT!==void 0&&(a.wrapT=e.wrapT),e.wrapR!==void 0&&(a.wrapR=e.wrapR),e.magFilter!==void 0&&(a.magFilter=e.magFilter),e.minFilter!==void 0&&(a.minFilter=e.minFilter),e.format!==void 0&&(a.format=e.format),e.type!==void 0&&(a.type=e.type),e.anisotropy!==void 0&&(a.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(a.colorSpace=e.colorSpace),e.flipY!==void 0&&(a.flipY=e.flipY),e.generateMipmaps!==void 0&&(a.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(a.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(a)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,a,s=1){if(this.width!==e||this.height!==a||this.depth!==s){this.width=e,this.height=a,this.depth=s;for(let u=0,f=this.textures.length;u<f;u++)this.textures[u].image.width=e,this.textures[u].image.height=a,this.textures[u].image.depth=s,this.textures[u].isData3DTexture!==!0&&(this.textures[u].isArrayTexture=this.textures[u].image.depth>1);this.dispose()}this.viewport.set(0,0,e,a),this.scissor.set(0,0,e,a)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let a=0,s=e.textures.length;a<s;a++){this.textures[a]=e.textures[a].clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;const u=Object.assign({},e.textures[a].image);this.textures[a].source=new Kp(u)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const a=e.depthTexture.clone();a.renderTarget=null,this.depthTexture=a}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bi extends rb{constructor(e=1,a=1,s={}){super(e,a,s),this.isWebGLRenderTarget=!0}}class Ox extends kn{constructor(e=null,a=1,s=1,u=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:a,height:s,depth:u},this.magFilter=Un,this.minFilter=Un,this.wrapR=Da,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class sb extends kn{constructor(e=null,a=1,s=1,u=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:a,height:s,depth:u},this.magFilter=Un,this.minFilter=Un,this.wrapR=Da,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Uc=class Uc{constructor(e,a,s,u,f,d,h,m,p,x,v,_,E,R,w,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,a,s,u,f,d,h,m,p,x,v,_,E,R,w,M)}set(e,a,s,u,f,d,h,m,p,x,v,_,E,R,w,M){const S=this.elements;return S[0]=e,S[4]=a,S[8]=s,S[12]=u,S[1]=f,S[5]=d,S[9]=h,S[13]=m,S[2]=p,S[6]=x,S[10]=v,S[14]=_,S[3]=E,S[7]=R,S[11]=w,S[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Uc().fromArray(this.elements)}copy(e){const a=this.elements,s=e.elements;return a[0]=s[0],a[1]=s[1],a[2]=s[2],a[3]=s[3],a[4]=s[4],a[5]=s[5],a[6]=s[6],a[7]=s[7],a[8]=s[8],a[9]=s[9],a[10]=s[10],a[11]=s[11],a[12]=s[12],a[13]=s[13],a[14]=s[14],a[15]=s[15],this}copyPosition(e){const a=this.elements,s=e.elements;return a[12]=s[12],a[13]=s[13],a[14]=s[14],this}setFromMatrix3(e){const a=e.elements;return this.set(a[0],a[3],a[6],0,a[1],a[4],a[7],0,a[2],a[5],a[8],0,0,0,0,1),this}extractBasis(e,a,s){return this.determinantAffine()===0?(e.set(1,0,0),a.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),a.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,a,s){return this.set(e.x,a.x,s.x,0,e.y,a.y,s.y,0,e.z,a.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const a=this.elements,s=e.elements,u=1/Gs.setFromMatrixColumn(e,0).length(),f=1/Gs.setFromMatrixColumn(e,1).length(),d=1/Gs.setFromMatrixColumn(e,2).length();return a[0]=s[0]*u,a[1]=s[1]*u,a[2]=s[2]*u,a[3]=0,a[4]=s[4]*f,a[5]=s[5]*f,a[6]=s[6]*f,a[7]=0,a[8]=s[8]*d,a[9]=s[9]*d,a[10]=s[10]*d,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,this}makeRotationFromEuler(e){const a=this.elements,s=e.x,u=e.y,f=e.z,d=Math.cos(s),h=Math.sin(s),m=Math.cos(u),p=Math.sin(u),x=Math.cos(f),v=Math.sin(f);if(e.order==="XYZ"){const _=d*x,E=d*v,R=h*x,w=h*v;a[0]=m*x,a[4]=-m*v,a[8]=p,a[1]=E+R*p,a[5]=_-w*p,a[9]=-h*m,a[2]=w-_*p,a[6]=R+E*p,a[10]=d*m}else if(e.order==="YXZ"){const _=m*x,E=m*v,R=p*x,w=p*v;a[0]=_+w*h,a[4]=R*h-E,a[8]=d*p,a[1]=d*v,a[5]=d*x,a[9]=-h,a[2]=E*h-R,a[6]=w+_*h,a[10]=d*m}else if(e.order==="ZXY"){const _=m*x,E=m*v,R=p*x,w=p*v;a[0]=_-w*h,a[4]=-d*v,a[8]=R+E*h,a[1]=E+R*h,a[5]=d*x,a[9]=w-_*h,a[2]=-d*p,a[6]=h,a[10]=d*m}else if(e.order==="ZYX"){const _=d*x,E=d*v,R=h*x,w=h*v;a[0]=m*x,a[4]=R*p-E,a[8]=_*p+w,a[1]=m*v,a[5]=w*p+_,a[9]=E*p-R,a[2]=-p,a[6]=h*m,a[10]=d*m}else if(e.order==="YZX"){const _=d*m,E=d*p,R=h*m,w=h*p;a[0]=m*x,a[4]=w-_*v,a[8]=R*v+E,a[1]=v,a[5]=d*x,a[9]=-h*x,a[2]=-p*x,a[6]=E*v+R,a[10]=_-w*v}else if(e.order==="XZY"){const _=d*m,E=d*p,R=h*m,w=h*p;a[0]=m*x,a[4]=-v,a[8]=p*x,a[1]=_*v+w,a[5]=d*x,a[9]=E*v-R,a[2]=R*v-E,a[6]=h*x,a[10]=w*v+_}return a[3]=0,a[7]=0,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ob,e,lb)}lookAt(e,a,s){const u=this.elements;return li.subVectors(e,a),li.lengthSq()===0&&(li.z=1),li.normalize(),cr.crossVectors(s,li),cr.lengthSq()===0&&(Math.abs(s.z)===1?li.x+=1e-4:li.z+=1e-4,li.normalize(),cr.crossVectors(s,li)),cr.normalize(),Ku.crossVectors(li,cr),u[0]=cr.x,u[4]=Ku.x,u[8]=li.x,u[1]=cr.y,u[5]=Ku.y,u[9]=li.y,u[2]=cr.z,u[6]=Ku.z,u[10]=li.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,a){const s=e.elements,u=a.elements,f=this.elements,d=s[0],h=s[4],m=s[8],p=s[12],x=s[1],v=s[5],_=s[9],E=s[13],R=s[2],w=s[6],M=s[10],S=s[14],O=s[3],X=s[7],C=s[11],N=s[15],U=u[0],P=u[4],b=u[8],L=u[12],H=u[1],q=u[5],tt=u[9],ut=u[13],j=u[2],$=u[6],W=u[10],k=u[14],ft=u[3],ot=u[7],pt=u[11],_t=u[15];return f[0]=d*U+h*H+m*j+p*ft,f[4]=d*P+h*q+m*$+p*ot,f[8]=d*b+h*tt+m*W+p*pt,f[12]=d*L+h*ut+m*k+p*_t,f[1]=x*U+v*H+_*j+E*ft,f[5]=x*P+v*q+_*$+E*ot,f[9]=x*b+v*tt+_*W+E*pt,f[13]=x*L+v*ut+_*k+E*_t,f[2]=R*U+w*H+M*j+S*ft,f[6]=R*P+w*q+M*$+S*ot,f[10]=R*b+w*tt+M*W+S*pt,f[14]=R*L+w*ut+M*k+S*_t,f[3]=O*U+X*H+C*j+N*ft,f[7]=O*P+X*q+C*$+N*ot,f[11]=O*b+X*tt+C*W+N*pt,f[15]=O*L+X*ut+C*k+N*_t,this}multiplyScalar(e){const a=this.elements;return a[0]*=e,a[4]*=e,a[8]*=e,a[12]*=e,a[1]*=e,a[5]*=e,a[9]*=e,a[13]*=e,a[2]*=e,a[6]*=e,a[10]*=e,a[14]*=e,a[3]*=e,a[7]*=e,a[11]*=e,a[15]*=e,this}determinant(){const e=this.elements,a=e[0],s=e[4],u=e[8],f=e[12],d=e[1],h=e[5],m=e[9],p=e[13],x=e[2],v=e[6],_=e[10],E=e[14],R=e[3],w=e[7],M=e[11],S=e[15],O=m*E-p*_,X=h*E-p*v,C=h*_-m*v,N=d*E-p*x,U=d*_-m*x,P=d*v-h*x;return a*(w*O-M*X+S*C)-s*(R*O-M*N+S*U)+u*(R*X-w*N+S*P)-f*(R*C-w*U+M*P)}determinantAffine(){const e=this.elements,a=e[0],s=e[4],u=e[8],f=e[1],d=e[5],h=e[9],m=e[2],p=e[6],x=e[10];return a*(d*x-h*p)-s*(f*x-h*m)+u*(f*p-d*m)}transpose(){const e=this.elements;let a;return a=e[1],e[1]=e[4],e[4]=a,a=e[2],e[2]=e[8],e[8]=a,a=e[6],e[6]=e[9],e[9]=a,a=e[3],e[3]=e[12],e[12]=a,a=e[7],e[7]=e[13],e[13]=a,a=e[11],e[11]=e[14],e[14]=a,this}setPosition(e,a,s){const u=this.elements;return e.isVector3?(u[12]=e.x,u[13]=e.y,u[14]=e.z):(u[12]=e,u[13]=a,u[14]=s),this}invert(){const e=this.elements,a=e[0],s=e[1],u=e[2],f=e[3],d=e[4],h=e[5],m=e[6],p=e[7],x=e[8],v=e[9],_=e[10],E=e[11],R=e[12],w=e[13],M=e[14],S=e[15],O=a*h-s*d,X=a*m-u*d,C=a*p-f*d,N=s*m-u*h,U=s*p-f*h,P=u*p-f*m,b=x*w-v*R,L=x*M-_*R,H=x*S-E*R,q=v*M-_*w,tt=v*S-E*w,ut=_*S-E*M,j=O*ut-X*tt+C*q+N*H-U*L+P*b;if(j===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const $=1/j;return e[0]=(h*ut-m*tt+p*q)*$,e[1]=(u*tt-s*ut-f*q)*$,e[2]=(w*P-M*U+S*N)*$,e[3]=(_*U-v*P-E*N)*$,e[4]=(m*H-d*ut-p*L)*$,e[5]=(a*ut-u*H+f*L)*$,e[6]=(M*C-R*P-S*X)*$,e[7]=(x*P-_*C+E*X)*$,e[8]=(d*tt-h*H+p*b)*$,e[9]=(s*H-a*tt-f*b)*$,e[10]=(R*U-w*C+S*O)*$,e[11]=(v*C-x*U-E*O)*$,e[12]=(h*L-d*q-m*b)*$,e[13]=(a*q-s*L+u*b)*$,e[14]=(w*X-R*N-M*O)*$,e[15]=(x*N-v*X+_*O)*$,this}scale(e){const a=this.elements,s=e.x,u=e.y,f=e.z;return a[0]*=s,a[4]*=u,a[8]*=f,a[1]*=s,a[5]*=u,a[9]*=f,a[2]*=s,a[6]*=u,a[10]*=f,a[3]*=s,a[7]*=u,a[11]*=f,this}getMaxScaleOnAxis(){const e=this.elements,a=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],u=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(a,s,u))}makeTranslation(e,a,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,a,0,0,1,s,0,0,0,1),this}makeRotationX(e){const a=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,a,-s,0,0,s,a,0,0,0,0,1),this}makeRotationY(e){const a=Math.cos(e),s=Math.sin(e);return this.set(a,0,s,0,0,1,0,0,-s,0,a,0,0,0,0,1),this}makeRotationZ(e){const a=Math.cos(e),s=Math.sin(e);return this.set(a,-s,0,0,s,a,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,a){const s=Math.cos(a),u=Math.sin(a),f=1-s,d=e.x,h=e.y,m=e.z,p=f*d,x=f*h;return this.set(p*d+s,p*h-u*m,p*m+u*h,0,p*h+u*m,x*h+s,x*m-u*d,0,p*m-u*h,x*m+u*d,f*m*m+s,0,0,0,0,1),this}makeScale(e,a,s){return this.set(e,0,0,0,0,a,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,a,s,u,f,d){return this.set(1,s,f,0,e,1,d,0,a,u,1,0,0,0,0,1),this}compose(e,a,s){const u=this.elements,f=a._x,d=a._y,h=a._z,m=a._w,p=f+f,x=d+d,v=h+h,_=f*p,E=f*x,R=f*v,w=d*x,M=d*v,S=h*v,O=m*p,X=m*x,C=m*v,N=s.x,U=s.y,P=s.z;return u[0]=(1-(w+S))*N,u[1]=(E+C)*N,u[2]=(R-X)*N,u[3]=0,u[4]=(E-C)*U,u[5]=(1-(_+S))*U,u[6]=(M+O)*U,u[7]=0,u[8]=(R+X)*P,u[9]=(M-O)*P,u[10]=(1-(_+w))*P,u[11]=0,u[12]=e.x,u[13]=e.y,u[14]=e.z,u[15]=1,this}decompose(e,a,s){const u=this.elements;e.x=u[12],e.y=u[13],e.z=u[14];const f=this.determinantAffine();if(f===0)return s.set(1,1,1),a.identity(),this;let d=Gs.set(u[0],u[1],u[2]).length();const h=Gs.set(u[4],u[5],u[6]).length(),m=Gs.set(u[8],u[9],u[10]).length();f<0&&(d=-d),Li.copy(this);const p=1/d,x=1/h,v=1/m;return Li.elements[0]*=p,Li.elements[1]*=p,Li.elements[2]*=p,Li.elements[4]*=x,Li.elements[5]*=x,Li.elements[6]*=x,Li.elements[8]*=v,Li.elements[9]*=v,Li.elements[10]*=v,a.setFromRotationMatrix(Li),s.x=d,s.y=h,s.z=m,this}makePerspective(e,a,s,u,f,d,h=aa,m=!1){const p=this.elements,x=2*f/(a-e),v=2*f/(s-u),_=(a+e)/(a-e),E=(s+u)/(s-u);let R,w;if(m)R=f/(d-f),w=d*f/(d-f);else if(h===aa)R=-(d+f)/(d-f),w=-2*d*f/(d-f);else if(h===Nc)R=-d/(d-f),w=-d*f/(d-f);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=x,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=v,p[9]=E,p[13]=0,p[2]=0,p[6]=0,p[10]=R,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,a,s,u,f,d,h=aa,m=!1){const p=this.elements,x=2/(a-e),v=2/(s-u),_=-(a+e)/(a-e),E=-(s+u)/(s-u);let R,w;if(m)R=1/(d-f),w=d/(d-f);else if(h===aa)R=-2/(d-f),w=-(d+f)/(d-f);else if(h===Nc)R=-1/(d-f),w=-f/(d-f);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=x,p[4]=0,p[8]=0,p[12]=_,p[1]=0,p[5]=v,p[9]=0,p[13]=E,p[2]=0,p[6]=0,p[10]=R,p[14]=w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const a=this.elements,s=e.elements;for(let u=0;u<16;u++)if(a[u]!==s[u])return!1;return!0}fromArray(e,a=0){for(let s=0;s<16;s++)this.elements[s]=e[s+a];return this}toArray(e=[],a=0){const s=this.elements;return e[a]=s[0],e[a+1]=s[1],e[a+2]=s[2],e[a+3]=s[3],e[a+4]=s[4],e[a+5]=s[5],e[a+6]=s[6],e[a+7]=s[7],e[a+8]=s[8],e[a+9]=s[9],e[a+10]=s[10],e[a+11]=s[11],e[a+12]=s[12],e[a+13]=s[13],e[a+14]=s[14],e[a+15]=s[15],e}};Uc.prototype.isMatrix4=!0;let cn=Uc;const Gs=new ht,Li=new cn,ob=new ht(0,0,0),lb=new ht(1,1,1),cr=new ht,Ku=new ht,li=new ht,Rv=new cn,Cv=new oo;class Qr{constructor(e=0,a=0,s=0,u=Qr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=a,this._z=s,this._order=u}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,a,s,u=this._order){return this._x=e,this._y=a,this._z=s,this._order=u,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,a=this._order,s=!0){const u=e.elements,f=u[0],d=u[4],h=u[8],m=u[1],p=u[5],x=u[9],v=u[2],_=u[6],E=u[10];switch(a){case"XYZ":this._y=Math.asin(Ce(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-x,E),this._z=Math.atan2(-d,f)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Ce(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(h,E),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,f),this._z=0);break;case"ZXY":this._x=Math.asin(Ce(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,E),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,f));break;case"ZYX":this._y=Math.asin(-Ce(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,E),this._z=Math.atan2(m,f)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(Ce(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,p),this._y=Math.atan2(-v,f)):(this._x=0,this._y=Math.atan2(h,E));break;case"XZY":this._z=Math.asin(-Ce(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(h,f)):(this._x=Math.atan2(-x,E),this._y=0);break;default:oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+a)}return this._order=a,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,a,s){return Rv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Rv,a,s)}setFromVector3(e,a=this._order){return this.set(e.x,e.y,e.z,a)}reorder(e){return Cv.setFromEuler(this),this.setFromQuaternion(Cv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],a=0){return e[a]=this._x,e[a+1]=this._y,e[a+2]=this._z,e[a+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qr.DEFAULT_ORDER="XYZ";class Px{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ub=0;const wv=new ht,Vs=new oo,Ta=new cn,ju=new ht,sl=new ht,cb=new ht,fb=new oo,Nv=new ht(1,0,0),Dv=new ht(0,1,0),Uv=new ht(0,0,1),Lv={type:"added"},db={type:"removed"},Xs={type:"childadded",child:null},Th={type:"childremoved",child:null};class Qn extends Jr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ub++}),this.uuid=so(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qn.DEFAULT_UP.clone();const e=new ht,a=new Qr,s=new oo,u=new ht(1,1,1);function f(){s.setFromEuler(a,!1)}function d(){a.setFromQuaternion(s,void 0,!1)}a._onChange(f),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:a},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:u},modelViewMatrix:{value:new cn},normalMatrix:{value:new de}}),this.matrix=new cn,this.matrixWorld=new cn,this.matrixAutoUpdate=Qn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Px,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,a){this.quaternion.setFromAxisAngle(e,a)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,a){return Vs.setFromAxisAngle(e,a),this.quaternion.multiply(Vs),this}rotateOnWorldAxis(e,a){return Vs.setFromAxisAngle(e,a),this.quaternion.premultiply(Vs),this}rotateX(e){return this.rotateOnAxis(Nv,e)}rotateY(e){return this.rotateOnAxis(Dv,e)}rotateZ(e){return this.rotateOnAxis(Uv,e)}translateOnAxis(e,a){return wv.copy(e).applyQuaternion(this.quaternion),this.position.add(wv.multiplyScalar(a)),this}translateX(e){return this.translateOnAxis(Nv,e)}translateY(e){return this.translateOnAxis(Dv,e)}translateZ(e){return this.translateOnAxis(Uv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ta.copy(this.matrixWorld).invert())}lookAt(e,a,s){e.isVector3?ju.copy(e):ju.set(e,a,s);const u=this.parent;this.updateWorldMatrix(!0,!1),sl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ta.lookAt(sl,ju,this.up):Ta.lookAt(ju,sl,this.up),this.quaternion.setFromRotationMatrix(Ta),u&&(Ta.extractRotation(u.matrixWorld),Vs.setFromRotationMatrix(Ta),this.quaternion.premultiply(Vs.invert()))}add(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.add(arguments[a]);return this}return e===this?(Pe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Lv),Xs.child=e,this.dispatchEvent(Xs),Xs.child=null):Pe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const a=this.children.indexOf(e);return a!==-1&&(e.parent=null,this.children.splice(a,1),e.dispatchEvent(db),Th.child=e,this.dispatchEvent(Th),Th.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ta.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ta.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ta),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Lv),Xs.child=e,this.dispatchEvent(Xs),Xs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,a){if(this[e]===a)return this;for(let s=0,u=this.children.length;s<u;s++){const d=this.children[s].getObjectByProperty(e,a);if(d!==void 0)return d}}getObjectsByProperty(e,a,s=[]){this[e]===a&&s.push(this);const u=this.children;for(let f=0,d=u.length;f<d;f++)u[f].getObjectsByProperty(e,a,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sl,e,cb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sl,fb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const a=this.matrixWorld.elements;return e.set(a[8],a[9],a[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const a=this.children;for(let s=0,u=a.length;s<u;s++)a[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const a=this.children;for(let s=0,u=a.length;s<u;s++)a[s].traverseVisible(e)}traverseAncestors(e){const a=this.parent;a!==null&&(e(a),a.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const a=e.x,s=e.y,u=e.z,f=this.matrix.elements;f[12]+=a-f[0]*a-f[4]*s-f[8]*u,f[13]+=s-f[1]*a-f[5]*s-f[9]*u,f[14]+=u-f[2]*a-f[6]*s-f[10]*u}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const a=this.children;for(let s=0,u=a.length;s<u;s++)a[s].updateMatrixWorld(e)}updateWorldMatrix(e,a,s=!1){const u=this.parent;if(e===!0&&u!==null&&u.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||s)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,s=!0),a===!0){const f=this.children;for(let d=0,h=f.length;d<h;d++)f[d].updateWorldMatrix(!1,!0,s)}}toJSON(e){const a=e===void 0||typeof e=="string",s={};a&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const u={};u.uuid=this.uuid,u.type=this.type,u.name=this.name,u.castShadow=this.castShadow,u.receiveShadow=this.receiveShadow,u.visible=this.visible,u.frustumCulled=this.frustumCulled,u.renderOrder=this.renderOrder,u.static=this.static,u.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(u.userData=this.userData),u.layers=this.layers.mask,u.matrix=this.matrix.toArray(),u.up=this.up.toArray(),this.pivot!==null&&(u.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(u.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(u.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(u.type="InstancedMesh",u.count=this.count,u.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(u.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(u.type="BatchedMesh",u.perObjectFrustumCulled=this.perObjectFrustumCulled,u.sortObjects=this.sortObjects,u.drawRanges=this._drawRanges,u.reservedRanges=this._reservedRanges,u.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),u.instanceInfo=this._instanceInfo.map(h=>({...h})),u.availableInstanceIds=this._availableInstanceIds.slice(),u.availableGeometryIds=this._availableGeometryIds.slice(),u.nextIndexStart=this._nextIndexStart,u.nextVertexStart=this._nextVertexStart,u.geometryCount=this._geometryCount,u.maxInstanceCount=this._maxInstanceCount,u.maxVertexCount=this._maxVertexCount,u.maxIndexCount=this._maxIndexCount,u.geometryInitialized=this._geometryInitialized,u.matricesTexture=this._matricesTexture.toJSON(e),u.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(u.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(u.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(u.boundingBox=this.boundingBox.toJSON()));function f(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?u.background=this.background.toJSON():this.background.isTexture&&(u.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(u.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){u.geometry=f(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,x=m.length;p<x;p++){const v=m[p];f(e.shapes,v)}else f(e.shapes,m)}}if(this.isSkinnedMesh&&(u.bindMode=this.bindMode,u.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(f(e.skeletons,this.skeleton),u.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(f(e.materials,this.material[m]));u.material=h}else u.material=f(e.materials,this.material);if(this.children.length>0){u.children=[];for(let h=0;h<this.children.length;h++)u.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){u.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];u.animations.push(f(e.animations,m))}}if(a){const h=d(e.geometries),m=d(e.materials),p=d(e.textures),x=d(e.images),v=d(e.shapes),_=d(e.skeletons),E=d(e.animations),R=d(e.nodes);h.length>0&&(s.geometries=h),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),x.length>0&&(s.images=x),v.length>0&&(s.shapes=v),_.length>0&&(s.skeletons=_),E.length>0&&(s.animations=E),R.length>0&&(s.nodes=R)}return s.object=u,s;function d(h){const m=[];for(const p in h){const x=h[p];delete x.metadata,m.push(x)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,a=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),a===!0)for(let s=0;s<e.children.length;s++){const u=e.children[s];this.add(u.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Qn.DEFAULT_UP=new ht(0,1,0);Qn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Qu extends Qn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hb={type:"move"};class Ah{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ht,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ht),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ht,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ht,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const a=this._hand;if(a)for(const s of e.hand.values())this._getHandJoint(a,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,a,s){let u=null,f=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&a.session.visibilityState!=="visible-blurred"){if(p&&e.hand){d=!0;for(const w of e.hand.values()){const M=a.getJointPose(w,s),S=this._getHandJoint(p,w);M!==null&&(S.matrix.fromArray(M.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=M.radius),S.visible=M!==null}const x=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],_=x.position.distanceTo(v.position),E=.02,R=.005;p.inputState.pinching&&_>E+R?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&_<=E-R&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(f=a.getPose(e.gripSpace,s),f!==null&&(m.matrix.fromArray(f.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,f.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(f.linearVelocity)):m.hasLinearVelocity=!1,f.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(f.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(u=a.getPose(e.targetRaySpace,s),u===null&&f!==null&&(u=f),u!==null&&(h.matrix.fromArray(u.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,u.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(u.linearVelocity)):h.hasLinearVelocity=!1,u.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(u.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(hb)))}return h!==null&&(h.visible=u!==null),m!==null&&(m.visible=f!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(e,a){if(e.joints[a.jointName]===void 0){const s=new Qu;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[a.jointName]=s,e.add(s)}return e.joints[a.jointName]}}const Ix={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fr={h:0,s:0,l:0},Ju={h:0,s:0,l:0};function Rh(o,e,a){return a<0&&(a+=1),a>1&&(a-=1),a<1/6?o+(e-o)*6*a:a<1/2?e:a<2/3?o+(e-o)*6*(2/3-a):o}class Be{constructor(e,a,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,a,s)}set(e,a,s){if(a===void 0&&s===void 0){const u=e;u&&u.isColor?this.copy(u):typeof u=="number"?this.setHex(u):typeof u=="string"&&this.setStyle(u)}else this.setRGB(e,a,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,a=yi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,De.colorSpaceToWorking(this,a),this}setRGB(e,a,s,u=De.workingColorSpace){return this.r=e,this.g=a,this.b=s,De.colorSpaceToWorking(this,u),this}setHSL(e,a,s,u=De.workingColorSpace){if(e=Zp(e,1),a=Ce(a,0,1),s=Ce(s,0,1),a===0)this.r=this.g=this.b=s;else{const f=s<=.5?s*(1+a):s+a-s*a,d=2*s-f;this.r=Rh(d,f,e+1/3),this.g=Rh(d,f,e),this.b=Rh(d,f,e-1/3)}return De.colorSpaceToWorking(this,u),this}setStyle(e,a=yi){function s(f){f!==void 0&&parseFloat(f)<1&&oe("Color: Alpha component of "+e+" will be ignored.")}let u;if(u=/^(\w+)\(([^\)]*)\)/.exec(e)){let f;const d=u[1],h=u[2];switch(d){case"rgb":case"rgba":if(f=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(f[4]),this.setRGB(Math.min(255,parseInt(f[1],10))/255,Math.min(255,parseInt(f[2],10))/255,Math.min(255,parseInt(f[3],10))/255,a);if(f=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(f[4]),this.setRGB(Math.min(100,parseInt(f[1],10))/100,Math.min(100,parseInt(f[2],10))/100,Math.min(100,parseInt(f[3],10))/100,a);break;case"hsl":case"hsla":if(f=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(f[4]),this.setHSL(parseFloat(f[1])/360,parseFloat(f[2])/100,parseFloat(f[3])/100,a);break;default:oe("Color: Unknown color model "+e)}}else if(u=/^\#([A-Fa-f\d]+)$/.exec(e)){const f=u[1],d=f.length;if(d===3)return this.setRGB(parseInt(f.charAt(0),16)/15,parseInt(f.charAt(1),16)/15,parseInt(f.charAt(2),16)/15,a);if(d===6)return this.setHex(parseInt(f,16),a);oe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,a);return this}setColorName(e,a=yi){const s=Ix[e.toLowerCase()];return s!==void 0?this.setHex(s,a):oe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=La(e.r),this.g=La(e.g),this.b=La(e.b),this}copyLinearToSRGB(e){return this.r=io(e.r),this.g=io(e.g),this.b=io(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yi){return De.workingToColorSpace(Pn.copy(this),e),Math.round(Ce(Pn.r*255,0,255))*65536+Math.round(Ce(Pn.g*255,0,255))*256+Math.round(Ce(Pn.b*255,0,255))}getHexString(e=yi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,a=De.workingColorSpace){De.workingToColorSpace(Pn.copy(this),a);const s=Pn.r,u=Pn.g,f=Pn.b,d=Math.max(s,u,f),h=Math.min(s,u,f);let m,p;const x=(h+d)/2;if(h===d)m=0,p=0;else{const v=d-h;switch(p=x<=.5?v/(d+h):v/(2-d-h),d){case s:m=(u-f)/v+(u<f?6:0);break;case u:m=(f-s)/v+2;break;case f:m=(s-u)/v+4;break}m/=6}return e.h=m,e.s=p,e.l=x,e}getRGB(e,a=De.workingColorSpace){return De.workingToColorSpace(Pn.copy(this),a),e.r=Pn.r,e.g=Pn.g,e.b=Pn.b,e}getStyle(e=yi){De.workingToColorSpace(Pn.copy(this),e);const a=Pn.r,s=Pn.g,u=Pn.b;return e!==yi?`color(${e} ${a.toFixed(3)} ${s.toFixed(3)} ${u.toFixed(3)})`:`rgb(${Math.round(a*255)},${Math.round(s*255)},${Math.round(u*255)})`}offsetHSL(e,a,s){return this.getHSL(fr),this.setHSL(fr.h+e,fr.s+a,fr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,a){return this.r=e.r+a.r,this.g=e.g+a.g,this.b=e.b+a.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,a){return this.r+=(e.r-this.r)*a,this.g+=(e.g-this.g)*a,this.b+=(e.b-this.b)*a,this}lerpColors(e,a,s){return this.r=e.r+(a.r-e.r)*s,this.g=e.g+(a.g-e.g)*s,this.b=e.b+(a.b-e.b)*s,this}lerpHSL(e,a){this.getHSL(fr),e.getHSL(Ju);const s=_l(fr.h,Ju.h,a),u=_l(fr.s,Ju.s,a),f=_l(fr.l,Ju.l,a);return this.setHSL(s,u,f),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const a=this.r,s=this.g,u=this.b,f=e.elements;return this.r=f[0]*a+f[3]*s+f[6]*u,this.g=f[1]*a+f[4]*s+f[7]*u,this.b=f[2]*a+f[5]*s+f[8]*u,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,a=0){return this.r=e[a],this.g=e[a+1],this.b=e[a+2],this}toArray(e=[],a=0){return e[a]=this.r,e[a+1]=this.g,e[a+2]=this.b,e}fromBufferAttribute(e,a){return this.r=e.getX(a),this.g=e.getY(a),this.b=e.getZ(a),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new Be;Be.NAMES=Ix;class pb extends Qn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qr,this.environmentIntensity=1,this.environmentRotation=new Qr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,a){return super.copy(e,a),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const a=super.toJSON(e);return this.fog!==null&&(a.object.fog=this.fog.toJSON()),a.object.backgroundBlurriness=this.backgroundBlurriness,a.object.backgroundIntensity=this.backgroundIntensity,a.object.backgroundRotation=this.backgroundRotation.toArray(),a.object.environmentIntensity=this.environmentIntensity,a.object.environmentRotation=this.environmentRotation.toArray(),a}}const Oi=new ht,Aa=new ht,Ch=new ht,Ra=new ht,ks=new ht,Ws=new ht,Ov=new ht,wh=new ht,Nh=new ht,Dh=new ht,Uh=new ln,Lh=new ln,Oh=new ln;class Ii{constructor(e=new ht,a=new ht,s=new ht){this.a=e,this.b=a,this.c=s}static getNormal(e,a,s,u){u.subVectors(s,a),Oi.subVectors(e,a),u.cross(Oi);const f=u.lengthSq();return f>0?u.multiplyScalar(1/Math.sqrt(f)):u.set(0,0,0)}static getBarycoord(e,a,s,u,f){Oi.subVectors(u,a),Aa.subVectors(s,a),Ch.subVectors(e,a);const d=Oi.dot(Oi),h=Oi.dot(Aa),m=Oi.dot(Ch),p=Aa.dot(Aa),x=Aa.dot(Ch),v=d*p-h*h;if(v===0)return f.set(0,0,0),null;const _=1/v,E=(p*m-h*x)*_,R=(d*x-h*m)*_;return f.set(1-E-R,R,E)}static containsPoint(e,a,s,u){return this.getBarycoord(e,a,s,u,Ra)===null?!1:Ra.x>=0&&Ra.y>=0&&Ra.x+Ra.y<=1}static getInterpolation(e,a,s,u,f,d,h,m){return this.getBarycoord(e,a,s,u,Ra)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(f,Ra.x),m.addScaledVector(d,Ra.y),m.addScaledVector(h,Ra.z),m)}static getInterpolatedAttribute(e,a,s,u,f,d){return Uh.setScalar(0),Lh.setScalar(0),Oh.setScalar(0),Uh.fromBufferAttribute(e,a),Lh.fromBufferAttribute(e,s),Oh.fromBufferAttribute(e,u),d.setScalar(0),d.addScaledVector(Uh,f.x),d.addScaledVector(Lh,f.y),d.addScaledVector(Oh,f.z),d}static isFrontFacing(e,a,s,u){return Oi.subVectors(s,a),Aa.subVectors(e,a),Oi.cross(Aa).dot(u)<0}set(e,a,s){return this.a.copy(e),this.b.copy(a),this.c.copy(s),this}setFromPointsAndIndices(e,a,s,u){return this.a.copy(e[a]),this.b.copy(e[s]),this.c.copy(e[u]),this}setFromAttributeAndIndices(e,a,s,u){return this.a.fromBufferAttribute(e,a),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,u),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Oi.subVectors(this.c,this.b),Aa.subVectors(this.a,this.b),Oi.cross(Aa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ii.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,a){return Ii.getBarycoord(e,this.a,this.b,this.c,a)}getInterpolation(e,a,s,u,f){return Ii.getInterpolation(e,this.a,this.b,this.c,a,s,u,f)}containsPoint(e){return Ii.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ii.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,a){const s=this.a,u=this.b,f=this.c;let d,h;ks.subVectors(u,s),Ws.subVectors(f,s),wh.subVectors(e,s);const m=ks.dot(wh),p=Ws.dot(wh);if(m<=0&&p<=0)return a.copy(s);Nh.subVectors(e,u);const x=ks.dot(Nh),v=Ws.dot(Nh);if(x>=0&&v<=x)return a.copy(u);const _=m*v-x*p;if(_<=0&&m>=0&&x<=0)return d=m/(m-x),a.copy(s).addScaledVector(ks,d);Dh.subVectors(e,f);const E=ks.dot(Dh),R=Ws.dot(Dh);if(R>=0&&E<=R)return a.copy(f);const w=E*p-m*R;if(w<=0&&p>=0&&R<=0)return h=p/(p-R),a.copy(s).addScaledVector(Ws,h);const M=x*R-E*v;if(M<=0&&v-x>=0&&E-R>=0)return Ov.subVectors(f,u),h=(v-x)/(v-x+(E-R)),a.copy(u).addScaledVector(Ov,h);const S=1/(M+w+_);return d=w*S,h=_*S,a.copy(s).addScaledVector(ks,d).addScaledVector(Ws,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class El{constructor(e=new ht(1/0,1/0,1/0),a=new ht(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=a}set(e,a){return this.min.copy(e),this.max.copy(a),this}setFromArray(e){this.makeEmpty();for(let a=0,s=e.length;a<s;a+=3)this.expandByPoint(Pi.fromArray(e,a));return this}setFromBufferAttribute(e){this.makeEmpty();for(let a=0,s=e.count;a<s;a++)this.expandByPoint(Pi.fromBufferAttribute(e,a));return this}setFromPoints(e){this.makeEmpty();for(let a=0,s=e.length;a<s;a++)this.expandByPoint(e[a]);return this}setFromCenterAndSize(e,a){const s=Pi.copy(a).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,a=!1){return this.makeEmpty(),this.expandByObject(e,a)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,a=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const f=s.getAttribute("position");if(a===!0&&f!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=f.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,Pi):Pi.fromBufferAttribute(f,d),Pi.applyMatrix4(e.matrixWorld),this.expandByPoint(Pi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$u.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),$u.copy(s.boundingBox)),$u.applyMatrix4(e.matrixWorld),this.union($u)}const u=e.children;for(let f=0,d=u.length;f<d;f++)this.expandByObject(u[f],a);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,a){return a.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Pi),Pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let a,s;return e.normal.x>0?(a=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(a=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(a+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(a+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(a+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(a+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),a<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ol),tc.subVectors(this.max,ol),qs.subVectors(e.a,ol),Ys.subVectors(e.b,ol),Zs.subVectors(e.c,ol),dr.subVectors(Ys,qs),hr.subVectors(Zs,Ys),Hr.subVectors(qs,Zs);let a=[0,-dr.z,dr.y,0,-hr.z,hr.y,0,-Hr.z,Hr.y,dr.z,0,-dr.x,hr.z,0,-hr.x,Hr.z,0,-Hr.x,-dr.y,dr.x,0,-hr.y,hr.x,0,-Hr.y,Hr.x,0];return!Ph(a,qs,Ys,Zs,tc)||(a=[1,0,0,0,1,0,0,0,1],!Ph(a,qs,Ys,Zs,tc))?!1:(ec.crossVectors(dr,hr),a=[ec.x,ec.y,ec.z],Ph(a,qs,Ys,Zs,tc))}clampPoint(e,a){return a.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ca[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ca[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ca[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ca[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ca[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ca[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ca[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ca[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ca),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ca=[new ht,new ht,new ht,new ht,new ht,new ht,new ht,new ht],Pi=new ht,$u=new El,qs=new ht,Ys=new ht,Zs=new ht,dr=new ht,hr=new ht,Hr=new ht,ol=new ht,tc=new ht,ec=new ht,Gr=new ht;function Ph(o,e,a,s,u){for(let f=0,d=o.length-3;f<=d;f+=3){Gr.fromArray(o,f);const h=u.x*Math.abs(Gr.x)+u.y*Math.abs(Gr.y)+u.z*Math.abs(Gr.z),m=e.dot(Gr),p=a.dot(Gr),x=s.dot(Gr);if(Math.max(-Math.max(m,p,x),Math.min(m,p,x))>h)return!1}return!0}const gn=new ht,nc=new Fe;let mb=0;class Fi extends Jr{constructor(e,a,s=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:mb++}),this.name="",this.array=e,this.itemSize=a,this.count=e!==void 0?e.length/a:0,this.normalized=s,this.usage=OE,this.updateRanges=[],this.gpuType=ia,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,a){this.updateRanges.push({start:e,count:a})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,a,s){e*=this.itemSize,s*=a.itemSize;for(let u=0,f=this.itemSize;u<f;u++)this.array[e+u]=a.array[s+u];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let a=0,s=this.count;a<s;a++)nc.fromBufferAttribute(this,a),nc.applyMatrix3(e),this.setXY(a,nc.x,nc.y);else if(this.itemSize===3)for(let a=0,s=this.count;a<s;a++)gn.fromBufferAttribute(this,a),gn.applyMatrix3(e),this.setXYZ(a,gn.x,gn.y,gn.z);return this}applyMatrix4(e){for(let a=0,s=this.count;a<s;a++)gn.fromBufferAttribute(this,a),gn.applyMatrix4(e),this.setXYZ(a,gn.x,gn.y,gn.z);return this}applyNormalMatrix(e){for(let a=0,s=this.count;a<s;a++)gn.fromBufferAttribute(this,a),gn.applyNormalMatrix(e),this.setXYZ(a,gn.x,gn.y,gn.z);return this}transformDirection(e){for(let a=0,s=this.count;a<s;a++)gn.fromBufferAttribute(this,a),gn.transformDirection(e),this.setXYZ(a,gn.x,gn.y,gn.z);return this}set(e,a=0){return this.array.set(e,a),this}getComponent(e,a){let s=this.array[e*this.itemSize+a];return this.normalized&&(s=to(s,this.array)),s}setComponent(e,a,s){return this.normalized&&(s=Vn(s,this.array)),this.array[e*this.itemSize+a]=s,this}getX(e){let a=this.array[e*this.itemSize];return this.normalized&&(a=to(a,this.array)),a}setX(e,a){return this.normalized&&(a=Vn(a,this.array)),this.array[e*this.itemSize]=a,this}getY(e){let a=this.array[e*this.itemSize+1];return this.normalized&&(a=to(a,this.array)),a}setY(e,a){return this.normalized&&(a=Vn(a,this.array)),this.array[e*this.itemSize+1]=a,this}getZ(e){let a=this.array[e*this.itemSize+2];return this.normalized&&(a=to(a,this.array)),a}setZ(e,a){return this.normalized&&(a=Vn(a,this.array)),this.array[e*this.itemSize+2]=a,this}getW(e){let a=this.array[e*this.itemSize+3];return this.normalized&&(a=to(a,this.array)),a}setW(e,a){return this.normalized&&(a=Vn(a,this.array)),this.array[e*this.itemSize+3]=a,this}setXY(e,a,s){return e*=this.itemSize,this.normalized&&(a=Vn(a,this.array),s=Vn(s,this.array)),this.array[e+0]=a,this.array[e+1]=s,this}setXYZ(e,a,s,u){return e*=this.itemSize,this.normalized&&(a=Vn(a,this.array),s=Vn(s,this.array),u=Vn(u,this.array)),this.array[e+0]=a,this.array[e+1]=s,this.array[e+2]=u,this}setXYZW(e,a,s,u,f){return e*=this.itemSize,this.normalized&&(a=Vn(a,this.array),s=Vn(s,this.array),u=Vn(u,this.array),f=Vn(f,this.array)),this.array[e+0]=a,this.array[e+1]=s,this.array[e+2]=u,this.array[e+3]=f,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class zx extends Fi{constructor(e,a,s){super(new Uint16Array(e),a,s)}}class Bx extends Fi{constructor(e,a,s){super(new Uint32Array(e),a,s)}}class Ti extends Fi{constructor(e,a,s){super(new Float32Array(e),a,s)}}const gb=new El,ll=new ht,Ih=new ht;class Oc{constructor(e=new ht,a=-1){this.isSphere=!0,this.center=e,this.radius=a}set(e,a){return this.center.copy(e),this.radius=a,this}setFromPoints(e,a){const s=this.center;a!==void 0?s.copy(a):gb.setFromPoints(e).getCenter(s);let u=0;for(let f=0,d=e.length;f<d;f++)u=Math.max(u,s.distanceToSquared(e[f]));return this.radius=Math.sqrt(u),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const a=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=a*a}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,a){const s=this.center.distanceToSquared(e);return a.copy(e),s>this.radius*this.radius&&(a.sub(this.center).normalize(),a.multiplyScalar(this.radius).add(this.center)),a}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ll.subVectors(e,this.center);const a=ll.lengthSq();if(a>this.radius*this.radius){const s=Math.sqrt(a),u=(s-this.radius)*.5;this.center.addScaledVector(ll,u/s),this.radius+=u}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ih.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ll.copy(e.center).add(Ih)),this.expandByPoint(ll.copy(e.center).sub(Ih))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let _b=0;const Mi=new cn,zh=new Qn,Ks=new ht,ui=new El,ul=new El,bn=new ht;class Ai extends Jr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_b++}),this.uuid=so(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(PE(e)?Bx:zx)(e,1):this.index=e,this}setIndirect(e,a=0){return this.indirect=e,this.indirectOffset=a,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,a){return this.attributes[e]=a,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,a,s=0){this.groups.push({start:e,count:a,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,a){this.drawRange.start=e,this.drawRange.count=a}applyMatrix4(e){const a=this.attributes.position;a!==void 0&&(a.applyMatrix4(e),a.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const f=new de().getNormalMatrix(e);s.applyNormalMatrix(f),s.needsUpdate=!0}const u=this.attributes.tangent;return u!==void 0&&(u.transformDirection(e),u.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Mi.makeRotationFromQuaternion(e),this.applyMatrix4(Mi),this}rotateX(e){return Mi.makeRotationX(e),this.applyMatrix4(Mi),this}rotateY(e){return Mi.makeRotationY(e),this.applyMatrix4(Mi),this}rotateZ(e){return Mi.makeRotationZ(e),this.applyMatrix4(Mi),this}translate(e,a,s){return Mi.makeTranslation(e,a,s),this.applyMatrix4(Mi),this}scale(e,a,s){return Mi.makeScale(e,a,s),this.applyMatrix4(Mi),this}lookAt(e){return zh.lookAt(e),zh.updateMatrix(),this.applyMatrix4(zh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ks).negate(),this.translate(Ks.x,Ks.y,Ks.z),this}setFromPoints(e){const a=this.getAttribute("position");if(a===void 0){const s=[];for(let u=0,f=e.length;u<f;u++){const d=e[u];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Ti(s,3))}else{const s=Math.min(e.length,a.count);for(let u=0;u<s;u++){const f=e[u];a.setXYZ(u,f.x,f.y,f.z||0)}e.length>a.count&&oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),a.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new El);const e=this.attributes.position,a=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ht(-1/0,-1/0,-1/0),new ht(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),a)for(let s=0,u=a.length;s<u;s++){const f=a[s];ui.setFromBufferAttribute(f),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,ui.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,ui.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(ui.min),this.boundingBox.expandByPoint(ui.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oc);const e=this.attributes.position,a=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ht,1/0);return}if(e){const s=this.boundingSphere.center;if(ui.setFromBufferAttribute(e),a)for(let f=0,d=a.length;f<d;f++){const h=a[f];ul.setFromBufferAttribute(h),this.morphTargetsRelative?(bn.addVectors(ui.min,ul.min),ui.expandByPoint(bn),bn.addVectors(ui.max,ul.max),ui.expandByPoint(bn)):(ui.expandByPoint(ul.min),ui.expandByPoint(ul.max))}ui.getCenter(s);let u=0;for(let f=0,d=e.count;f<d;f++)bn.fromBufferAttribute(e,f),u=Math.max(u,s.distanceToSquared(bn));if(a)for(let f=0,d=a.length;f<d;f++){const h=a[f],m=this.morphTargetsRelative;for(let p=0,x=h.count;p<x;p++)bn.fromBufferAttribute(h,p),m&&(Ks.fromBufferAttribute(e,p),bn.add(Ks)),u=Math.max(u,s.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(u),isNaN(this.boundingSphere.radius)&&Pe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,a=this.attributes;if(e===null||a.position===void 0||a.normal===void 0||a.uv===void 0){Pe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=a.position,u=a.normal,f=a.uv;let d=this.getAttribute("tangent");(d===void 0||d.count!==s.count)&&(d=new Fi(new Float32Array(4*s.count),4),this.setAttribute("tangent",d));const h=[],m=[];for(let b=0;b<s.count;b++)h[b]=new ht,m[b]=new ht;const p=new ht,x=new ht,v=new ht,_=new Fe,E=new Fe,R=new Fe,w=new ht,M=new ht;function S(b,L,H){p.fromBufferAttribute(s,b),x.fromBufferAttribute(s,L),v.fromBufferAttribute(s,H),_.fromBufferAttribute(f,b),E.fromBufferAttribute(f,L),R.fromBufferAttribute(f,H),x.sub(p),v.sub(p),E.sub(_),R.sub(_);const q=1/(E.x*R.y-R.x*E.y);isFinite(q)&&(w.copy(x).multiplyScalar(R.y).addScaledVector(v,-E.y).multiplyScalar(q),M.copy(v).multiplyScalar(E.x).addScaledVector(x,-R.x).multiplyScalar(q),h[b].add(w),h[L].add(w),h[H].add(w),m[b].add(M),m[L].add(M),m[H].add(M))}let O=this.groups;O.length===0&&(O=[{start:0,count:e.count}]);for(let b=0,L=O.length;b<L;++b){const H=O[b],q=H.start,tt=H.count;for(let ut=q,j=q+tt;ut<j;ut+=3)S(e.getX(ut+0),e.getX(ut+1),e.getX(ut+2))}const X=new ht,C=new ht,N=new ht,U=new ht;function P(b){N.fromBufferAttribute(u,b),U.copy(N);const L=h[b];X.copy(L),X.sub(N.multiplyScalar(N.dot(L))).normalize(),C.crossVectors(U,L);const q=C.dot(m[b])<0?-1:1;d.setXYZW(b,X.x,X.y,X.z,q)}for(let b=0,L=O.length;b<L;++b){const H=O[b],q=H.start,tt=H.count;for(let ut=q,j=q+tt;ut<j;ut+=3)P(e.getX(ut+0)),P(e.getX(ut+1)),P(e.getX(ut+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,a=this.getAttribute("position");if(a!==void 0){let s=this.getAttribute("normal");if(s===void 0||s.count!==a.count)s=new Fi(new Float32Array(a.count*3),3),this.setAttribute("normal",s);else for(let _=0,E=s.count;_<E;_++)s.setXYZ(_,0,0,0);const u=new ht,f=new ht,d=new ht,h=new ht,m=new ht,p=new ht,x=new ht,v=new ht;if(e)for(let _=0,E=e.count;_<E;_+=3){const R=e.getX(_+0),w=e.getX(_+1),M=e.getX(_+2);u.fromBufferAttribute(a,R),f.fromBufferAttribute(a,w),d.fromBufferAttribute(a,M),x.subVectors(d,f),v.subVectors(u,f),x.cross(v),h.fromBufferAttribute(s,R),m.fromBufferAttribute(s,w),p.fromBufferAttribute(s,M),h.add(x),m.add(x),p.add(x),s.setXYZ(R,h.x,h.y,h.z),s.setXYZ(w,m.x,m.y,m.z),s.setXYZ(M,p.x,p.y,p.z)}else for(let _=0,E=a.count;_<E;_+=3)u.fromBufferAttribute(a,_+0),f.fromBufferAttribute(a,_+1),d.fromBufferAttribute(a,_+2),x.subVectors(d,f),v.subVectors(u,f),x.cross(v),s.setXYZ(_+0,x.x,x.y,x.z),s.setXYZ(_+1,x.x,x.y,x.z),s.setXYZ(_+2,x.x,x.y,x.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let a=0,s=e.count;a<s;a++)bn.fromBufferAttribute(e,a),bn.normalize(),e.setXYZ(a,bn.x,bn.y,bn.z)}toNonIndexed(){function e(h,m){const p=h.array,x=h.itemSize,v=h.normalized,_=new p.constructor(m.length*x);let E=0,R=0;for(let w=0,M=m.length;w<M;w++){h.isInterleavedBufferAttribute?E=m[w]*h.data.stride+h.offset:E=m[w]*x;for(let S=0;S<x;S++)_[R++]=p[E++]}return new Fi(_,x,v)}if(this.index===null)return oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const a=new Ai,s=this.index.array,u=this.attributes;for(const h in u){const m=u[h],p=e(m,s);a.setAttribute(h,p)}const f=this.morphAttributes;for(const h in f){const m=[],p=f[h];for(let x=0,v=p.length;x<v;x++){const _=p[x],E=e(_,s);m.push(E)}a.morphAttributes[h]=m}a.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];a.addGroup(p.start,p.count,p.materialIndex)}return a}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const a=this.index;a!==null&&(e.data.index={type:a.array.constructor.name,array:Array.prototype.slice.call(a.array)});const s=this.attributes;for(const m in s){const p=s[m];e.data.attributes[m]=p.toJSON(e.data)}const u={};let f=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],x=[];for(let v=0,_=p.length;v<_;v++){const E=p[v];x.push(E.toJSON(e.data))}x.length>0&&(u[m]=x,f=!0)}f&&(e.data.morphAttributes=u,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const a={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const u=e.attributes;for(const p in u){const x=u[p];this.setAttribute(p,x.clone(a))}const f=e.morphAttributes;for(const p in f){const x=[],v=f[p];for(let _=0,E=v.length;_<E;_++)x.push(v[_].clone(a));this.morphAttributes[p]=x}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let p=0,x=d.length;p<x;p++){const v=d[p];this.addGroup(v.start,v.count,v.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bh=new ht,vb=new ht,xb=new de;class mr{constructor(e=new ht(1,0,0),a=0){this.isPlane=!0,this.normal=e,this.constant=a}set(e,a){return this.normal.copy(e),this.constant=a,this}setComponents(e,a,s,u){return this.normal.set(e,a,s),this.constant=u,this}setFromNormalAndCoplanarPoint(e,a){return this.normal.copy(e),this.constant=-a.dot(this.normal),this}setFromCoplanarPoints(e,a,s){const u=Bh.subVectors(s,a).cross(vb.subVectors(e,a)).normalize();return this.setFromNormalAndCoplanarPoint(u,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,a){return a.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,a,s=!0){const u=e.delta(Bh),f=this.normal.dot(u);if(f===0)return this.distanceToPoint(e.start)===0?a.copy(e.start):null;const d=-(e.start.dot(this.normal)+this.constant)/f;return s===!0&&(d<0||d>1)?null:a.copy(e.start).addScaledVector(u,d)}intersectsLine(e){const a=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return a<0&&s>0||s<0&&a>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,a){const s=a||xb.getNormalMatrix(e),u=this.coplanarPoint(Bh).applyMatrix4(e),f=this.normal.applyMatrix3(s).normalize();return this.constant=-u.dot(f),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Sb=0;class bl extends Jr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sb++}),this.uuid=so(),this.name="",this.type="Material",this.blending=ml,this.side=Zr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mx,this.blendDst=gx,this.blendEquation=$s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=vl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=RE,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xh,this.stencilZFail=xh,this.stencilZPass=xh,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const a in e){const s=e[a];if(s===void 0){oe(`Material: parameter '${a}' has value of undefined.`);continue}const u=this[a];if(u===void 0){oe(`Material: '${a}' is not a property of THREE.${this.type}.`);continue}u&&u.isColor?u.set(s):u&&u.isVector2&&s&&s.isVector2||u&&u.isEuler&&s&&s.isEuler||u&&u.isVector3&&s&&s.isVector3?u.copy(s):this[a]=s}}toJSON(e){const a=e===void 0||typeof e=="string";a&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,s.blending=this.blending,s.side=this.side,s.shadowSide=this.shadowSide,s.vertexColors=this.vertexColors,s.opacity=this.opacity,s.transparent=this.transparent,s.blendSrc=this.blendSrc,s.blendDst=this.blendDst,s.blendEquation=this.blendEquation,s.blendSrcAlpha=this.blendSrcAlpha,s.blendDstAlpha=this.blendDstAlpha,s.blendEquationAlpha=this.blendEquationAlpha,s.blendColor=this.blendColor.getHex(),s.blendAlpha=this.blendAlpha,s.depthFunc=this.depthFunc,s.depthTest=this.depthTest,s.depthWrite=this.depthWrite,s.colorWrite=this.colorWrite,s.clipIntersection=this.clipIntersection,s.clipShadows=this.clipShadows,s.stencilWriteMask=this.stencilWriteMask,s.stencilFunc=this.stencilFunc,s.stencilRef=this.stencilRef,s.stencilFuncMask=this.stencilFuncMask,s.stencilFail=this.stencilFail,s.stencilZFail=this.stencilZFail,s.stencilZPass=this.stencilZPass,s.stencilWrite=this.stencilWrite,s.polygonOffset=this.polygonOffset,s.polygonOffsetFactor=this.polygonOffsetFactor,s.polygonOffsetUnits=this.polygonOffsetUnits,s.dithering=this.dithering,s.alphaTest=this.alphaTest,s.alphaHash=this.alphaHash,s.alphaToCoverage=this.alphaToCoverage,s.premultipliedAlpha=this.premultipliedAlpha,s.forceSinglePass=this.forceSinglePass,s.allowOverride=this.allowOverride,s.visible=this.visible,s.toneMapped=this.toneMapped,s.name=this.name,this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(s.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(s.clippingPlanes=this.clippingPlanes.map(f=>f.toJSON())),this.rotation!==void 0&&(s.rotation=this.rotation),this.depthPacking!==void 0&&(s.depthPacking=this.depthPacking),this.linewidth!==void 0&&(s.linewidth=this.linewidth),this.linecap!==void 0&&(s.linecap=this.linecap),this.linejoin!==void 0&&(s.linejoin=this.linejoin),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.wireframe!==void 0&&(s.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(s.flatShading=this.flatShading),this.fog!==void 0&&(s.fog=this.fog),Object.keys(this.userData).length>0&&(s.userData=this.userData);function u(f){const d=[];for(const h in f){const m=f[h];delete m.metadata,d.push(m)}return d}if(a){const f=u(e.textures),d=u(e.images);f.length>0&&(s.textures=f),d.length>0&&(s.images=d)}return s}fromJSON(e,a){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Be().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(s=>new mr().fromJSON(s))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=a[e.map]||null),e.matcap!==void 0&&(this.matcap=a[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=a[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=a[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=a[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),this.normalScale=new Fe().fromArray(s)}return e.displacementMap!==void 0&&(this.displacementMap=a[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=a[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=a[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=a[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=a[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=a[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=a[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=a[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=a[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=a[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=a[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=a[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=a[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=a[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Fe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=a[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=a[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=a[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=a[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=a[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=a[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=a[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const a=e.clippingPlanes;let s=null;if(a!==null){const u=a.length;s=new Array(u);for(let f=0;f!==u;++f)s[f]=a[f].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const wa=new ht,Fh=new ht,ic=new ht,ac=new ht;class Fx{constructor(e=new ht,a=new ht(0,0,-1)){this.origin=e,this.direction=a}set(e,a){return this.origin.copy(e),this.direction.copy(a),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,a){return a.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wa)),this}closestPointToPoint(e,a){a.subVectors(e,this.origin);const s=a.dot(this.direction);return s<0?a.copy(this.origin):a.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const a=wa.subVectors(e,this.origin).dot(this.direction);return a<0?this.origin.distanceToSquared(e):(wa.copy(this.origin).addScaledVector(this.direction,a),wa.distanceToSquared(e))}distanceSqToSegment(e,a,s,u){Fh.copy(e).add(a).multiplyScalar(.5),ic.copy(a).sub(e).normalize(),ac.copy(this.origin).sub(Fh);const f=e.distanceTo(a)*.5,d=-this.direction.dot(ic),h=ac.dot(this.direction),m=-ac.dot(ic),p=ac.lengthSq(),x=Math.abs(1-d*d);let v,_,E,R;if(x>0)if(v=d*m-h,_=d*h-m,R=f*x,v>=0)if(_>=-R)if(_<=R){const w=1/x;v*=w,_*=w,E=v*(v+d*_+2*h)+_*(d*v+_+2*m)+p}else _=f,v=Math.max(0,-(d*_+h)),E=-v*v+_*(_+2*m)+p;else _=-f,v=Math.max(0,-(d*_+h)),E=-v*v+_*(_+2*m)+p;else _<=-R?(v=Math.max(0,-(-d*f+h)),_=v>0?-f:Math.min(Math.max(-f,-m),f),E=-v*v+_*(_+2*m)+p):_<=R?(v=0,_=Math.min(Math.max(-f,-m),f),E=_*(_+2*m)+p):(v=Math.max(0,-(d*f+h)),_=v>0?f:Math.min(Math.max(-f,-m),f),E=-v*v+_*(_+2*m)+p);else _=d>0?-f:f,v=Math.max(0,-(d*_+h)),E=-v*v+_*(_+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,v),u&&u.copy(Fh).addScaledVector(ic,_),E}intersectSphere(e,a){if(e.radius<0)return null;wa.subVectors(e.center,this.origin);const s=wa.dot(this.direction),u=wa.dot(wa)-s*s,f=e.radius*e.radius;if(u>f)return null;const d=Math.sqrt(f-u),h=s-d,m=s+d;return m<0?null:h<0?this.at(m,a):this.at(h,a)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const a=e.normal.dot(this.direction);if(a===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/a;return s>=0?s:null}intersectPlane(e,a){const s=this.distanceToPlane(e);return s===null?null:this.at(s,a)}intersectsPlane(e){const a=e.distanceToPoint(this.origin);return a===0||e.normal.dot(this.direction)*a<0}intersectBox(e,a){let s,u,f,d,h,m;const p=1/this.direction.x,x=1/this.direction.y,v=1/this.direction.z,_=this.origin;return p>=0?(s=(e.min.x-_.x)*p,u=(e.max.x-_.x)*p):(s=(e.max.x-_.x)*p,u=(e.min.x-_.x)*p),x>=0?(f=(e.min.y-_.y)*x,d=(e.max.y-_.y)*x):(f=(e.max.y-_.y)*x,d=(e.min.y-_.y)*x),s>d||f>u||((f>s||isNaN(s))&&(s=f),(d<u||isNaN(u))&&(u=d),v>=0?(h=(e.min.z-_.z)*v,m=(e.max.z-_.z)*v):(h=(e.max.z-_.z)*v,m=(e.min.z-_.z)*v),s>m||h>u)||((h>s||s!==s)&&(s=h),(m<u||u!==u)&&(u=m),u<0)?null:this.at(s>=0?s:u,a)}intersectsBox(e){return this.intersectBox(e,wa)!==null}intersectTriangle(e,a,s,u,f){const d=this.origin,h=this.direction,m=h.x,p=h.y,x=h.z,v=e.x-d.x,_=e.y-d.y,E=e.z-d.z,R=a.x-d.x,w=a.y-d.y,M=a.z-d.z,S=s.x-d.x,O=s.y-d.y,X=s.z-d.z,C=Math.abs(m),N=Math.abs(p),U=Math.abs(x);let P,b,L,H,q,tt,ut,j,$,W,k,ft;if(C>=N&&C>=U?(L=m,tt=v,$=R,ft=S,m>=0?(P=p,b=x,H=_,q=E,ut=w,j=M,W=O,k=X):(P=x,b=p,H=E,q=_,ut=M,j=w,W=X,k=O)):N>=U?(L=p,tt=_,$=w,ft=O,p>=0?(P=x,b=m,H=E,q=v,ut=M,j=R,W=X,k=S):(P=m,b=x,H=v,q=E,ut=R,j=M,W=S,k=X)):(L=x,tt=E,$=M,ft=X,x>=0?(P=m,b=p,H=v,q=_,ut=R,j=w,W=S,k=O):(P=p,b=m,H=_,q=v,ut=w,j=R,W=O,k=S)),L===0)return null;const ot=P/L,pt=b/L,_t=1/L,Bt=H-ot*tt,Nt=q-pt*tt,z=ut-ot*$,mt=j-pt*$,Tt=W-ot*ft,Z=k-pt*ft,dt=Tt*mt-Z*z,At=Bt*Z-Nt*Tt,wt=z*Nt-mt*Bt;if(u){if(dt<0||At<0||wt<0)return null}else if((dt<0||At<0||wt<0)&&(dt>0||At>0||wt>0))return null;const gt=dt+At+wt;if(gt===0)return null;const Rt=_t*(dt*tt+At*$+wt*ft);return(gt>0?Rt<0:Rt>0)?null:this.at(Rt/gt,f)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jp extends bl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qr,this.combine=_x,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Pv=new cn,Vr=new Fx,rc=new Oc,Iv=new ht,sc=new ht,oc=new ht,lc=new ht,Hh=new ht,uc=new ht,zv=new ht,cc=new ht;class la extends Qn{constructor(e=new Ai,a=new jp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=a,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,a){return super.copy(e,a),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const a=this.geometry.morphAttributes,s=Object.keys(a);if(s.length>0){const u=a[s[0]];if(u!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,d=u.length;f<d;f++){const h=u[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=f}}}}getVertexPosition(e,a){const s=this.geometry,u=s.attributes.position,f=s.morphAttributes.position,d=s.morphTargetsRelative;a.fromBufferAttribute(u,e);const h=this.morphTargetInfluences;if(f&&h){uc.set(0,0,0);for(let m=0,p=f.length;m<p;m++){const x=h[m],v=f[m];x!==0&&(Hh.fromBufferAttribute(v,e),d?uc.addScaledVector(Hh,x):uc.addScaledVector(Hh.sub(a),x))}a.add(uc)}return a}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,a){const s=this.geometry,u=this.material,f=this.matrixWorld;u!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),rc.copy(s.boundingSphere),rc.applyMatrix4(f),Vr.copy(e.ray).recast(e.near),!(rc.containsPoint(Vr.origin)===!1&&(Vr.intersectSphere(rc,Iv)===null||Vr.origin.distanceToSquared(Iv)>(e.far-e.near)**2))&&(Pv.copy(f).invert(),Vr.copy(e.ray).applyMatrix4(Pv),!(s.boundingBox!==null&&Vr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,a,Vr)))}_computeIntersections(e,a,s){let u;const f=this.geometry,d=this.material,h=f.index,m=f.attributes.position,p=f.attributes.uv,x=f.attributes.uv1,v=f.attributes.normal,_=f.groups,E=f.drawRange;if(h!==null)if(Array.isArray(d))for(let R=0,w=_.length;R<w;R++){const M=_[R],S=d[M.materialIndex],O=Math.max(M.start,E.start),X=Math.min(h.count,Math.min(M.start+M.count,E.start+E.count));for(let C=O,N=X;C<N;C+=3){const U=h.getX(C),P=h.getX(C+1),b=h.getX(C+2);u=fc(this,S,e,s,p,x,v,U,P,b),u&&(u.faceIndex=Math.floor(C/3),u.face.materialIndex=M.materialIndex,a.push(u))}}else{const R=Math.max(0,E.start),w=Math.min(h.count,E.start+E.count);for(let M=R,S=w;M<S;M+=3){const O=h.getX(M),X=h.getX(M+1),C=h.getX(M+2);u=fc(this,d,e,s,p,x,v,O,X,C),u&&(u.faceIndex=Math.floor(M/3),a.push(u))}}else if(m!==void 0)if(Array.isArray(d))for(let R=0,w=_.length;R<w;R++){const M=_[R],S=d[M.materialIndex],O=Math.max(M.start,E.start),X=Math.min(m.count,Math.min(M.start+M.count,E.start+E.count));for(let C=O,N=X;C<N;C+=3){const U=C,P=C+1,b=C+2;u=fc(this,S,e,s,p,x,v,U,P,b),u&&(u.faceIndex=Math.floor(C/3),u.face.materialIndex=M.materialIndex,a.push(u))}}else{const R=Math.max(0,E.start),w=Math.min(m.count,E.start+E.count);for(let M=R,S=w;M<S;M+=3){const O=M,X=M+1,C=M+2;u=fc(this,d,e,s,p,x,v,O,X,C),u&&(u.faceIndex=Math.floor(M/3),a.push(u))}}}}function Mb(o,e,a,s,u,f,d,h){let m;if(e.side===jn?m=s.intersectTriangle(d,f,u,!0,h):m=s.intersectTriangle(u,f,d,e.side===Zr,h),m===null)return null;cc.copy(h),cc.applyMatrix4(o.matrixWorld);const p=a.ray.origin.distanceTo(cc);return p<a.near||p>a.far?null:{distance:p,point:cc.clone(),object:o}}function fc(o,e,a,s,u,f,d,h,m,p){o.getVertexPosition(h,sc),o.getVertexPosition(m,oc),o.getVertexPosition(p,lc);const x=Mb(o,e,a,s,sc,oc,lc,zv);if(x){const v=new ht;Ii.getBarycoord(zv,sc,oc,lc,v),u&&(x.uv=Ii.getInterpolatedAttribute(u,h,m,p,v,new Fe)),f&&(x.uv1=Ii.getInterpolatedAttribute(f,h,m,p,v,new Fe)),d&&(x.normal=Ii.getInterpolatedAttribute(d,h,m,p,v,new ht),x.normal.dot(s.direction)>0&&x.normal.multiplyScalar(-1));const _={a:h,b:m,c:p,normal:new ht,materialIndex:0};Ii.getNormal(sc,oc,lc,_.normal),x.face=_,x.barycoord=v}return x}class yb extends kn{constructor(e=null,a=1,s=1,u,f,d,h,m,p=Un,x=Un,v,_){super(null,d,h,m,p,x,u,f,v,_),this.isDataTexture=!0,this.image={data:e,width:a,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Xr=new Oc,Eb=new Fe(.5,.5),dc=new ht;class Hx{constructor(e=new mr,a=new mr,s=new mr,u=new mr,f=new mr,d=new mr){this.planes=[e,a,s,u,f,d]}set(e,a,s,u,f,d){const h=this.planes;return h[0].copy(e),h[1].copy(a),h[2].copy(s),h[3].copy(u),h[4].copy(f),h[5].copy(d),this}copy(e){const a=this.planes;for(let s=0;s<6;s++)a[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,a=aa,s=!1){const u=this.planes,f=e.elements,d=f[0],h=f[1],m=f[2],p=f[3],x=f[4],v=f[5],_=f[6],E=f[7],R=f[8],w=f[9],M=f[10],S=f[11],O=f[12],X=f[13],C=f[14],N=f[15];if(u[0].setComponents(p-d,E-x,S-R,N-O).normalize(),u[1].setComponents(p+d,E+x,S+R,N+O).normalize(),u[2].setComponents(p+h,E+v,S+w,N+X).normalize(),u[3].setComponents(p-h,E-v,S-w,N-X).normalize(),s)u[4].setComponents(m,_,M,C).normalize(),u[5].setComponents(p-m,E-_,S-M,N-C).normalize();else if(u[4].setComponents(p-m,E-_,S-M,N-C).normalize(),a===aa)u[5].setComponents(p+m,E+_,S+M,N+C).normalize();else if(a===Nc)u[5].setComponents(m,_,M,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+a);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const a=e.geometry;a.boundingSphere===null&&a.computeBoundingSphere(),Xr.copy(a.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xr)}intersectsSprite(e){Xr.center.set(0,0,0);const a=Eb.distanceTo(e.center);return Xr.radius=.7071067811865476+a,Xr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xr)}intersectsSphere(e){const a=this.planes,s=e.center,u=-e.radius;for(let f=0;f<6;f++)if(a[f].distanceToPoint(s)<u)return!1;return!0}intersectsBox(e){const a=this.planes;for(let s=0;s<6;s++){const u=a[s];if(dc.x=u.normal.x>0?e.max.x:e.min.x,dc.y=u.normal.y>0?e.max.y:e.min.y,dc.z=u.normal.z>0?e.max.z:e.min.z,u.distanceToPoint(dc)<0)return!1}return!0}containsPoint(e){const a=this.planes;for(let s=0;s<6;s++)if(a[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Gx extends bl{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Bv=new cn,Op=new Fx,hc=new Oc,pc=new ht;class bb extends Qn{constructor(e=new Ai,a=new Gx){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=a,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,a){return super.copy(e,a),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,a){const s=this.geometry,u=this.matrixWorld,f=e.params.Points.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),hc.copy(s.boundingSphere),hc.applyMatrix4(u),hc.radius+=f,e.ray.intersectsSphere(hc)===!1)return;Bv.copy(u).invert(),Op.copy(e.ray).applyMatrix4(Bv);const h=f/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=s.index,v=s.attributes.position;if(p!==null){const _=Math.max(0,d.start),E=Math.min(p.count,d.start+d.count);for(let R=_,w=E;R<w;R++){const M=p.getX(R);pc.fromBufferAttribute(v,M),Fv(pc,M,m,u,e,a,this)}}else{const _=Math.max(0,d.start),E=Math.min(v.count,d.start+d.count);for(let R=_,w=E;R<w;R++)pc.fromBufferAttribute(v,R),Fv(pc,R,m,u,e,a,this)}}updateMorphTargets(){const a=this.geometry.morphAttributes,s=Object.keys(a);if(s.length>0){const u=a[s[0]];if(u!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,d=u.length;f<d;f++){const h=u[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=f}}}}}function Fv(o,e,a,s,u,f,d){const h=Op.distanceSqToPoint(o);if(h<a){const m=new ht;Op.closestPointToPoint(o,m),m.applyMatrix4(s);const p=u.ray.origin.distanceTo(m);if(p<u.near||p>u.far)return;f.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:d})}}class Vx extends kn{constructor(e=[],a=Kr,s,u,f,d,h,m,p,x){super(e,a,s,u,f,d,h,m,p,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class yl extends kn{constructor(e,a,s=sa,u,f,d,h=Un,m=Un,p,x=Oa,v=1){if(x!==Oa&&x!==Yr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:a,depth:v};super(_,u,f,d,h,m,x,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Kp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const a=super.toJSON(e);return a.compareFunction=this.compareFunction,a}}class Tb extends yl{constructor(e,a=sa,s=Kr,u,f,d=Un,h=Un,m,p=Oa){const x={width:e,height:e,depth:1},v=[x,x,x,x,x,x];super(e,e,a,s,u,f,d,h,m,p),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Xx extends kn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Tl extends Ai{constructor(e=1,a=1,s=1,u=1,f=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:a,depth:s,widthSegments:u,heightSegments:f,depthSegments:d};const h=this;u=Math.floor(u),f=Math.floor(f),d=Math.floor(d);const m=[],p=[],x=[],v=[];let _=0,E=0;R("z","y","x",-1,-1,s,a,e,d,f,0),R("z","y","x",1,-1,s,a,-e,d,f,1),R("x","z","y",1,1,e,s,a,u,d,2),R("x","z","y",1,-1,e,s,-a,u,d,3),R("x","y","z",1,-1,e,a,s,u,f,4),R("x","y","z",-1,-1,e,a,-s,u,f,5),this.setIndex(m),this.setAttribute("position",new Ti(p,3)),this.setAttribute("normal",new Ti(x,3)),this.setAttribute("uv",new Ti(v,2));function R(w,M,S,O,X,C,N,U,P,b,L){const H=C/P,q=N/b,tt=C/2,ut=N/2,j=U/2,$=P+1,W=b+1;let k=0,ft=0;const ot=new ht;for(let pt=0;pt<W;pt++){const _t=pt*q-ut;for(let Bt=0;Bt<$;Bt++){const Nt=Bt*H-tt;ot[w]=Nt*O,ot[M]=_t*X,ot[S]=j,p.push(ot.x,ot.y,ot.z),ot[w]=0,ot[M]=0,ot[S]=U>0?1:-1,x.push(ot.x,ot.y,ot.z),v.push(Bt/P),v.push(1-pt/b),k+=1}}for(let pt=0;pt<b;pt++)for(let _t=0;_t<P;_t++){const Bt=_+_t+$*pt,Nt=_+_t+$*(pt+1),z=_+(_t+1)+$*(pt+1),mt=_+(_t+1)+$*pt;m.push(Bt,Nt,mt),m.push(Nt,z,mt),ft+=6}h.addGroup(E,ft,L),E+=ft,_+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Pc extends Ai{constructor(e=1,a=1,s=1,u=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:a,widthSegments:s,heightSegments:u};const f=e/2,d=a/2,h=Math.floor(s),m=Math.floor(u),p=h+1,x=m+1,v=e/h,_=a/m,E=[],R=[],w=[],M=[];for(let S=0;S<x;S++){const O=S*_-d;for(let X=0;X<p;X++){const C=X*v-f;R.push(C,-O,0),w.push(0,0,1),M.push(X/h),M.push(1-S/m)}}for(let S=0;S<m;S++)for(let O=0;O<h;O++){const X=O+p*S,C=O+p*(S+1),N=O+1+p*(S+1),U=O+1+p*S;E.push(X,C,U),E.push(C,N,U)}this.setIndex(E),this.setAttribute("position",new Ti(R,3)),this.setAttribute("normal",new Ti(w,3)),this.setAttribute("uv",new Ti(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pc(e.width,e.height,e.widthSegments,e.heightSegments)}}class Qp extends Ai{constructor(e=1,a=32,s=16,u=0,f=Math.PI*2,d=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:a,heightSegments:s,phiStart:u,phiLength:f,thetaStart:d,thetaLength:h},a=Math.max(3,Math.floor(a)),s=Math.max(2,Math.floor(s));const m=Math.min(d+h,Math.PI);let p=0;const x=[],v=new ht,_=new ht,E=[],R=[],w=[],M=[];for(let S=0;S<=s;S++){const O=[],X=S/s,C=d+X*h,N=e*Math.cos(C),U=Math.sqrt(e*e-N*N);let P=0;S===0&&d===0?P=.5/a:S===s&&m===Math.PI&&(P=-.5/a);for(let b=0;b<=a;b++){const L=b/a,H=u+L*f;v.x=-U*Math.cos(H),v.y=N,v.z=U*Math.sin(H),R.push(v.x,v.y,v.z),_.copy(v).normalize(),w.push(_.x,_.y,_.z),M.push(L+P,1-X),O.push(p++)}x.push(O)}for(let S=0;S<s;S++)for(let O=0;O<a;O++){const X=x[S][O+1],C=x[S][O],N=x[S+1][O],U=x[S+1][O+1];(S!==0||d>0)&&E.push(X,C,U),(S!==s-1||m<Math.PI)&&E.push(C,N,U)}this.setIndex(E),this.setAttribute("position",new Ti(R,3)),this.setAttribute("normal",new Ti(w,3)),this.setAttribute("uv",new Ti(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qp(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function ro(o){const e={};for(const a in o){e[a]={};for(const s in o[a]){const u=o[a][s];if(Hv(u))u.isRenderTargetTexture?(oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[a][s]=null):e[a][s]=u.clone();else if(Array.isArray(u))if(Hv(u[0])){const f=[];for(let d=0,h=u.length;d<h;d++)f[d]=u[d].clone();e[a][s]=f}else e[a][s]=u.slice();else e[a][s]=u}}return e}function Xn(o){const e={};for(let a=0;a<o.length;a++){const s=ro(o[a]);for(const u in s)e[u]=s[u]}return e}function Hv(o){return o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)}function Ab(o){const e=[];for(let a=0;a<o.length;a++)e.push(o[a].clone());return e}function kx(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:De.workingColorSpace}const Rb={clone:ro,merge:Xn};var Cb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ua extends bl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cb,this.fragmentShader=wb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ro(e.uniforms),this.uniformsGroups=Ab(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const a=super.toJSON(e);a.glslVersion=this.glslVersion,a.uniforms={};for(const u in this.uniforms){const d=this.uniforms[u].value;d&&d.isTexture?a.uniforms[u]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?a.uniforms[u]={type:"c",value:d.getHex()}:d&&d.isVector2?a.uniforms[u]={type:"v2",value:d.toArray()}:d&&d.isVector3?a.uniforms[u]={type:"v3",value:d.toArray()}:d&&d.isVector4?a.uniforms[u]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?a.uniforms[u]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?a.uniforms[u]={type:"m4",value:d.toArray()}:a.uniforms[u]={value:d}}Object.keys(this.defines).length>0&&(a.defines=this.defines),a.vertexShader=this.vertexShader,a.fragmentShader=this.fragmentShader,a.lights=this.lights,a.clipping=this.clipping;const s={};for(const u in this.extensions)this.extensions[u]===!0&&(s[u]=!0);return Object.keys(s).length>0&&(a.extensions=s),a}fromJSON(e,a){if(super.fromJSON(e,a),e.uniforms!==void 0)for(const s in e.uniforms){const u=e.uniforms[s];switch(this.uniforms[s]={},u.type){case"t":this.uniforms[s].value=a[u.value]||null;break;case"c":this.uniforms[s].value=new Be().setHex(u.value);break;case"v2":this.uniforms[s].value=new Fe().fromArray(u.value);break;case"v3":this.uniforms[s].value=new ht().fromArray(u.value);break;case"v4":this.uniforms[s].value=new ln().fromArray(u.value);break;case"m3":this.uniforms[s].value=new de().fromArray(u.value);break;case"m4":this.uniforms[s].value=new cn().fromArray(u.value);break;default:this.uniforms[s].value=u.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)this.extensions[s]=e.extensions[s];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Nb extends ua{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Db extends bl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=TE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ub extends bl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const mc=new ht,gc=new oo,ta=new ht;class Wx extends Qn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new cn,this.projectionMatrix=new cn,this.projectionMatrixInverse=new cn,this.coordinateSystem=aa,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,a){return super.copy(e,a),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(mc,gc,ta),ta.x===1&&ta.y===1&&ta.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(mc,gc,ta.set(1,1,1)).invert()}updateWorldMatrix(e,a,s=!1){super.updateWorldMatrix(e,a,s),this.matrixWorld.decompose(mc,gc,ta),ta.x===1&&ta.y===1&&ta.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(mc,gc,ta.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const pr=new ht,Gv=new Fe,Vv=new Fe;class Ei extends Wx{constructor(e=50,a=1,s=.1,u=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=u,this.focus=10,this.aspect=a,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,a){return super.copy(e,a),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const a=.5*this.getFilmHeight()/e;this.fov=Ml*2*Math.atan(a),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(gl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ml*2*Math.atan(Math.tan(gl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,a,s){pr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(pr.x,pr.y).multiplyScalar(-e/pr.z),pr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(pr.x,pr.y).multiplyScalar(-e/pr.z)}getViewSize(e,a){return this.getViewBounds(e,Gv,Vv),a.subVectors(Vv,Gv)}setViewOffset(e,a,s,u,f,d){this.aspect=e/a,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=a,this.view.offsetX=s,this.view.offsetY=u,this.view.width=f,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let a=e*Math.tan(gl*.5*this.fov)/this.zoom,s=2*a,u=this.aspect*s,f=-.5*u;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;f+=d.offsetX*u/m,a-=d.offsetY*s/p,u*=d.width/m,s*=d.height/p}const h=this.filmOffset;h!==0&&(f+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(f,f+u,a,a-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const a=super.toJSON(e);return a.object.fov=this.fov,a.object.zoom=this.zoom,a.object.near=this.near,a.object.far=this.far,a.object.focus=this.focus,a.object.aspect=this.aspect,this.view!==null&&(a.object.view=Object.assign({},this.view)),a.object.filmGauge=this.filmGauge,a.object.filmOffset=this.filmOffset,a}}class qx extends Wx{constructor(e=-1,a=1,s=1,u=-1,f=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=a,this.top=s,this.bottom=u,this.near=f,this.far=d,this.updateProjectionMatrix()}copy(e,a){return super.copy(e,a),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,a,s,u,f,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=a,this.view.offsetX=s,this.view.offsetY=u,this.view.width=f,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),a=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,u=(this.top+this.bottom)/2;let f=s-e,d=s+e,h=u+a,m=u-a;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;f+=p*this.view.offsetX,d=f+p*this.view.width,h-=x*this.view.offsetY,m=h-x*this.view.height}this.projectionMatrix.makeOrthographic(f,d,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const a=super.toJSON(e);return a.object.zoom=this.zoom,a.object.left=this.left,a.object.right=this.right,a.object.top=this.top,a.object.bottom=this.bottom,a.object.near=this.near,a.object.far=this.far,this.view!==null&&(a.object.view=Object.assign({},this.view)),a}}const js=-90,Qs=1;class Lb extends Qn{constructor(e,a,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const u=new Ei(js,Qs,e,a);u.layers=this.layers,this.add(u);const f=new Ei(js,Qs,e,a);f.layers=this.layers,this.add(f);const d=new Ei(js,Qs,e,a);d.layers=this.layers,this.add(d);const h=new Ei(js,Qs,e,a);h.layers=this.layers,this.add(h);const m=new Ei(js,Qs,e,a);m.layers=this.layers,this.add(m);const p=new Ei(js,Qs,e,a);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,a=this.children.concat(),[s,u,f,d,h,m]=a;for(const p of a)this.remove(p);if(e===aa)s.up.set(0,1,0),s.lookAt(1,0,0),u.up.set(0,1,0),u.lookAt(-1,0,0),f.up.set(0,0,-1),f.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Nc)s.up.set(0,-1,0),s.lookAt(-1,0,0),u.up.set(0,-1,0),u.lookAt(1,0,0),f.up.set(0,0,1),f.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of a)this.add(p),p.updateMatrixWorld()}update(e,a){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:u}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[f,d,h,m,p,x]=this.children,v=e.getRenderTarget(),_=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),R=e.xr.enabled;e.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let M=!1;e.isWebGLRenderer===!0?M=e.state.buffers.depth.getReversed():M=e.reversedDepthBuffer,e.setRenderTarget(s,0,u),M&&e.autoClear===!1&&e.clearDepth(),e.render(a,f),e.setRenderTarget(s,1,u),M&&e.autoClear===!1&&e.clearDepth(),e.render(a,d),e.setRenderTarget(s,2,u),M&&e.autoClear===!1&&e.clearDepth(),e.render(a,h),e.setRenderTarget(s,3,u),M&&e.autoClear===!1&&e.clearDepth(),e.render(a,m),e.setRenderTarget(s,4,u),M&&e.autoClear===!1&&e.clearDepth(),e.render(a,p),s.texture.generateMipmaps=w,e.setRenderTarget(s,5,u),M&&e.autoClear===!1&&e.clearDepth(),e.render(a,x),e.setRenderTarget(v,_,E),e.xr.enabled=R,s.texture.needsPMREMUpdate=!0}}class Ob extends Ei{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const nm=class nm{constructor(e,a,s,u){this.elements=[1,0,0,1],e!==void 0&&this.set(e,a,s,u)}identity(){return this.set(1,0,0,1),this}fromArray(e,a=0){for(let s=0;s<4;s++)this.elements[s]=e[s+a];return this}set(e,a,s,u){const f=this.elements;return f[0]=e,f[2]=a,f[1]=s,f[3]=u,this}};nm.prototype.isMatrix2=!0;let Xv=nm;function kv(o,e,a,s){const u=Pb(s);switch(a){case Nx:return o*e;case Ux:return o*e/u.components*u.byteLength;case Xp:return o*e/u.components*u.byteLength;case jr:return o*e*2/u.components*u.byteLength;case kp:return o*e*2/u.components*u.byteLength;case Dx:return o*e*3/u.components*u.byteLength;case zi:return o*e*4/u.components*u.byteLength;case Wp:return o*e*4/u.components*u.byteLength;case Mc:case yc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Ec:case bc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case rp:case op:return Math.max(o,16)*Math.max(e,8)/4;case ap:case sp:return Math.max(o,8)*Math.max(e,8)/2;case lp:case up:case fp:case dp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case cp:case Ac:case hp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case pp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case mp:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case gp:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case _p:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case vp:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case xp:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Sp:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Mp:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case yp:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Ep:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case bp:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Tp:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Ap:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Rp:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Cp:case wp:case Np:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Dp:case Up:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Rc:case Lp:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${a} format.`)}function Pb(o){switch(o){case bi:case Ax:return{byteLength:1,components:1};case xl:case Rx:case oa:return{byteLength:2,components:1};case Gp:case Vp:return{byteLength:2,components:4};case sa:case Hp:case ia:return{byteLength:4,components:1};case Cx:case wx:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fp}}));typeof window<"u"&&(window.__THREE__?oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Yx(){let o=null,e=!1,a=null,s=null;function u(f,d){s=o.requestAnimationFrame(u),a(f,d)}return{start:function(){e!==!0&&a!==null&&o!==null&&(s=o.requestAnimationFrame(u),e=!0)},stop:function(){o!==null&&o.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(f){a=f},setContext:function(f){o=f}}}function Ib(o){const e=new WeakMap;function a(h,m){const p=h.array,x=h.usage,v=p.byteLength,_=o.createBuffer();o.bindBuffer(m,_),o.bufferData(m,p,x),h.onUploadCallback();let E;if(p instanceof Float32Array)E=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)E=o.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?E=o.HALF_FLOAT:E=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)E=o.SHORT;else if(p instanceof Uint32Array)E=o.UNSIGNED_INT;else if(p instanceof Int32Array)E=o.INT;else if(p instanceof Int8Array)E=o.BYTE;else if(p instanceof Uint8Array)E=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)E=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:E,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:v}}function s(h,m,p){const x=m.array,v=m.updateRanges;if(o.bindBuffer(p,h),v.length===0)o.bufferSubData(p,0,x);else{v.sort((E,R)=>E.start-R.start);let _=0;for(let E=1;E<v.length;E++){const R=v[_],w=v[E];w.start<=R.start+R.count+1?R.count=Math.max(R.count,w.start+w.count-R.start):(++_,v[_]=w)}v.length=_+1;for(let E=0,R=v.length;E<R;E++){const w=v[E];o.bufferSubData(p,w.start*x.BYTES_PER_ELEMENT,x,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function u(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function f(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(o.deleteBuffer(m.buffer),e.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const x=e.get(h);(!x||x.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,a(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,h,m),p.version=h.version}}return{get:u,remove:f,update:d}}var zb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bb=`#ifdef USE_ALPHAHASH
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
#endif`,Fb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xb=`#ifdef USE_AOMAP
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
#endif`,kb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wb=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,qb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Yb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,jb=`#ifdef USE_IRIDESCENCE
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
#endif`,Qb=`#ifdef USE_BUMPMAP
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
#endif`,Jb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$b=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,eT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,iT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,aT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,rT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,sT=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,oT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,lT=`vec3 transformedNormal = objectNormal;
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
#endif`,uT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hT="gl_FragColor = linearToOutputTexel( gl_FragColor );",pT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,gT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,_T=`#ifdef USE_ENVMAP
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
#endif`,vT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ST=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,MT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ET=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bT=`#ifdef USE_GRADIENTMAP
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
}`,TT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,AT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,RT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,CT=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,wT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,NT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,DT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,UT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,LT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,OT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,PT=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,IT=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,zT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,BT=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,FT=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,HT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,GT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,VT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,XT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,WT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,YT=`#if defined( USE_POINTS_UV )
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
#endif`,ZT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,KT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,QT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,JT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$T=`#ifdef USE_MORPHTARGETS
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
#endif`,t1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,e1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,n1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,i1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,a1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,r1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,s1=`#ifdef USE_NORMALMAP
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
#endif`,o1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,l1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,u1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,c1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,f1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,d1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,h1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,p1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,m1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,g1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,v1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,x1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,S1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,M1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,y1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,E1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,b1=`#ifdef USE_SKINNING
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
#endif`,T1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,A1=`#ifdef USE_SKINNING
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
#endif`,R1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,C1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,w1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,N1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,D1=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,U1=`#ifdef USE_TRANSMISSION
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
#endif`,L1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,O1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,P1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,I1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const z1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,B1=`uniform sampler2D t2D;
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
}`,F1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,H1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,V1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X1=`#include <common>
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
}`,k1=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,W1=`#define DISTANCE
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
}`,q1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Y1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Z1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K1=`uniform float scale;
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
}`,j1=`uniform vec3 diffuse;
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
}`,Q1=`#include <common>
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
}`,J1=`uniform vec3 diffuse;
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
}`,$1=`#define LAMBERT
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
}`,tA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,eA=`#define MATCAP
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
}`,nA=`#define MATCAP
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
}`,iA=`#define NORMAL
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
}`,aA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,rA=`#define PHONG
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
}`,sA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,oA=`#define STANDARD
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
}`,lA=`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,uA=`#define TOON
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
}`,cA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,fA=`uniform float size;
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
}`,dA=`uniform vec3 diffuse;
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
}`,hA=`#include <common>
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
}`,pA=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,mA=`uniform float rotation;
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
}`,gA=`uniform vec3 diffuse;
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
}`,ge={alphahash_fragment:zb,alphahash_pars_fragment:Bb,alphamap_fragment:Fb,alphamap_pars_fragment:Hb,alphatest_fragment:Gb,alphatest_pars_fragment:Vb,aomap_fragment:Xb,aomap_pars_fragment:kb,batching_pars_vertex:Wb,batching_vertex:qb,begin_vertex:Yb,beginnormal_vertex:Zb,bsdfs:Kb,iridescence_fragment:jb,bumpmap_pars_fragment:Qb,clipping_planes_fragment:Jb,clipping_planes_pars_fragment:$b,clipping_planes_pars_vertex:tT,clipping_planes_vertex:eT,color_fragment:nT,color_pars_fragment:iT,color_pars_vertex:aT,color_vertex:rT,common:sT,cube_uv_reflection_fragment:oT,defaultnormal_vertex:lT,displacementmap_pars_vertex:uT,displacementmap_vertex:cT,emissivemap_fragment:fT,emissivemap_pars_fragment:dT,colorspace_fragment:hT,colorspace_pars_fragment:pT,envmap_fragment:mT,envmap_common_pars_fragment:gT,envmap_pars_fragment:_T,envmap_pars_vertex:vT,envmap_physical_pars_fragment:wT,envmap_vertex:xT,fog_vertex:ST,fog_pars_vertex:MT,fog_fragment:yT,fog_pars_fragment:ET,gradientmap_pars_fragment:bT,lightmap_pars_fragment:TT,lights_lambert_fragment:AT,lights_lambert_pars_fragment:RT,lights_pars_begin:CT,lights_toon_fragment:NT,lights_toon_pars_fragment:DT,lights_phong_fragment:UT,lights_phong_pars_fragment:LT,lights_physical_fragment:OT,lights_physical_pars_fragment:PT,lights_fragment_begin:IT,lights_fragment_maps:zT,lights_fragment_end:BT,lightprobes_pars_fragment:FT,logdepthbuf_fragment:HT,logdepthbuf_pars_fragment:GT,logdepthbuf_pars_vertex:VT,logdepthbuf_vertex:XT,map_fragment:kT,map_pars_fragment:WT,map_particle_fragment:qT,map_particle_pars_fragment:YT,metalnessmap_fragment:ZT,metalnessmap_pars_fragment:KT,morphinstance_vertex:jT,morphcolor_vertex:QT,morphnormal_vertex:JT,morphtarget_pars_vertex:$T,morphtarget_vertex:t1,normal_fragment_begin:e1,normal_fragment_maps:n1,normal_pars_fragment:i1,normal_pars_vertex:a1,normal_vertex:r1,normalmap_pars_fragment:s1,clearcoat_normal_fragment_begin:o1,clearcoat_normal_fragment_maps:l1,clearcoat_pars_fragment:u1,iridescence_pars_fragment:c1,opaque_fragment:f1,packing:d1,premultiplied_alpha_fragment:h1,project_vertex:p1,dithering_fragment:m1,dithering_pars_fragment:g1,roughnessmap_fragment:_1,roughnessmap_pars_fragment:v1,shadowmap_pars_fragment:x1,shadowmap_pars_vertex:S1,shadowmap_vertex:M1,shadowmask_pars_fragment:y1,skinbase_vertex:E1,skinning_pars_vertex:b1,skinning_vertex:T1,skinnormal_vertex:A1,specularmap_fragment:R1,specularmap_pars_fragment:C1,tonemapping_fragment:w1,tonemapping_pars_fragment:N1,transmission_fragment:D1,transmission_pars_fragment:U1,uv_pars_fragment:L1,uv_pars_vertex:O1,uv_vertex:P1,worldpos_vertex:I1,background_vert:z1,background_frag:B1,backgroundCube_vert:F1,backgroundCube_frag:H1,cube_vert:G1,cube_frag:V1,depth_vert:X1,depth_frag:k1,distance_vert:W1,distance_frag:q1,equirect_vert:Y1,equirect_frag:Z1,linedashed_vert:K1,linedashed_frag:j1,meshbasic_vert:Q1,meshbasic_frag:J1,meshlambert_vert:$1,meshlambert_frag:tA,meshmatcap_vert:eA,meshmatcap_frag:nA,meshnormal_vert:iA,meshnormal_frag:aA,meshphong_vert:rA,meshphong_frag:sA,meshphysical_vert:oA,meshphysical_frag:lA,meshtoon_vert:uA,meshtoon_frag:cA,points_vert:fA,points_frag:dA,shadow_vert:hA,shadow_frag:pA,sprite_vert:mA,sprite_frag:gA},Vt={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new de}},envmap:{envMap:{value:null},envMapRotation:{value:new de},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new de}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new de}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new de},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new de},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new de},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new de}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new de}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new de}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ht},probesMax:{value:new ht},probesResolution:{value:new ht}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0},uvTransform:{value:new de}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}}},na={basic:{uniforms:Xn([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.fog]),vertexShader:ge.meshbasic_vert,fragmentShader:ge.meshbasic_frag},lambert:{uniforms:Xn([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,Vt.lights,{emissive:{value:new Be(0)},envMapIntensity:{value:1}}]),vertexShader:ge.meshlambert_vert,fragmentShader:ge.meshlambert_frag},phong:{uniforms:Xn([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,Vt.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ge.meshphong_vert,fragmentShader:ge.meshphong_frag},standard:{uniforms:Xn([Vt.common,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.roughnessmap,Vt.metalnessmap,Vt.fog,Vt.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag},toon:{uniforms:Xn([Vt.common,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.gradientmap,Vt.fog,Vt.lights,{emissive:{value:new Be(0)}}]),vertexShader:ge.meshtoon_vert,fragmentShader:ge.meshtoon_frag},matcap:{uniforms:Xn([Vt.common,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,{matcap:{value:null}}]),vertexShader:ge.meshmatcap_vert,fragmentShader:ge.meshmatcap_frag},points:{uniforms:Xn([Vt.points,Vt.fog]),vertexShader:ge.points_vert,fragmentShader:ge.points_frag},dashed:{uniforms:Xn([Vt.common,Vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ge.linedashed_vert,fragmentShader:ge.linedashed_frag},depth:{uniforms:Xn([Vt.common,Vt.displacementmap]),vertexShader:ge.depth_vert,fragmentShader:ge.depth_frag},normal:{uniforms:Xn([Vt.common,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,{opacity:{value:1}}]),vertexShader:ge.meshnormal_vert,fragmentShader:ge.meshnormal_frag},sprite:{uniforms:Xn([Vt.sprite,Vt.fog]),vertexShader:ge.sprite_vert,fragmentShader:ge.sprite_frag},background:{uniforms:{uvTransform:{value:new de},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ge.background_vert,fragmentShader:ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new de}},vertexShader:ge.backgroundCube_vert,fragmentShader:ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ge.cube_vert,fragmentShader:ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ge.equirect_vert,fragmentShader:ge.equirect_frag},distance:{uniforms:Xn([Vt.common,Vt.displacementmap,{referencePosition:{value:new ht},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ge.distance_vert,fragmentShader:ge.distance_frag},shadow:{uniforms:Xn([Vt.lights,Vt.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:ge.shadow_vert,fragmentShader:ge.shadow_frag}};na.physical={uniforms:Xn([na.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new de},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new de},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new de},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new de},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new de},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new de},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new de},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new de},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new de},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new de},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new de},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new de}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag};const _c={r:0,b:0,g:0},_A=new cn,Zx=new de;Zx.set(-1,0,0,0,1,0,0,0,1);function vA(o,e,a,s,u,f){const d=new Be(0);let h=u===!0?0:1,m,p,x=null,v=0,_=null;function E(O){let X=O.isScene===!0?O.background:null;if(X&&X.isTexture){const C=O.backgroundBlurriness>0;X=e.get(X,C)}return X}function R(O){let X=!1;const C=E(O);C===null?M(d,h):C&&C.isColor&&(M(C,1),X=!0);const N=o.xr.getEnvironmentBlendMode();N==="additive"?a.buffers.color.setClear(0,0,0,1,f):N==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,f),(o.autoClear||X)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function w(O,X){const C=E(X);C&&(C.isCubeTexture||C.mapping===Lc)?(p===void 0&&(p=new la(new Tl(1,1,1),new ua({name:"BackgroundCubeMaterial",uniforms:ro(na.backgroundCube.uniforms),vertexShader:na.backgroundCube.vertexShader,fragmentShader:na.backgroundCube.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(N,U,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),p.material.uniforms.envMap.value=C,p.material.uniforms.backgroundBlurriness.value=X.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=X.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(_A.makeRotationFromEuler(X.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(Zx),p.material.toneMapped=De.getTransfer(C.colorSpace)!==qe,(x!==C||v!==C.version||_!==o.toneMapping)&&(p.material.needsUpdate=!0,x=C,v=C.version,_=o.toneMapping),p.layers.enableAll(),O.unshift(p,p.geometry,p.material,0,0,null)):C&&C.isTexture&&(m===void 0&&(m=new la(new Pc(2,2),new ua({name:"BackgroundMaterial",uniforms:ro(na.background.uniforms),vertexShader:na.background.vertexShader,fragmentShader:na.background.fragmentShader,side:Zr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=C,m.material.uniforms.backgroundIntensity.value=X.backgroundIntensity,m.material.toneMapped=De.getTransfer(C.colorSpace)!==qe,C.matrixAutoUpdate===!0&&C.updateMatrix(),m.material.uniforms.uvTransform.value.copy(C.matrix),(x!==C||v!==C.version||_!==o.toneMapping)&&(m.material.needsUpdate=!0,x=C,v=C.version,_=o.toneMapping),m.layers.enableAll(),O.unshift(m,m.geometry,m.material,0,0,null))}function M(O,X){O.getRGB(_c,kx(o)),a.buffers.color.setClear(_c.r,_c.g,_c.b,X,f)}function S(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(O,X=1){d.set(O),h=X,M(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(O){h=O,M(d,h)},render:R,addToRenderList:w,dispose:S}}function xA(o,e){const a=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},u=_(null);let f=u,d=!1;function h(q,tt,ut,j,$){let W=!1;const k=v(q,j,ut,tt);f!==k&&(f=k,p(f.object)),W=E(q,j,ut,$),W&&R(q,j,ut,$),$!==null&&e.update($,o.ELEMENT_ARRAY_BUFFER),(W||d)&&(d=!1,C(q,tt,ut,j),$!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function m(){return o.createVertexArray()}function p(q){return o.bindVertexArray(q)}function x(q){return o.deleteVertexArray(q)}function v(q,tt,ut,j){const $=j.wireframe===!0;let W=s[tt.id];W===void 0&&(W={},s[tt.id]=W);const k=q.isInstancedMesh===!0?q.id:0;let ft=W[k];ft===void 0&&(ft={},W[k]=ft);let ot=ft[ut.id];ot===void 0&&(ot={},ft[ut.id]=ot);let pt=ot[$];return pt===void 0&&(pt=_(m()),ot[$]=pt),pt}function _(q){const tt=[],ut=[],j=[];for(let $=0;$<a;$++)tt[$]=0,ut[$]=0,j[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:tt,enabledAttributes:ut,attributeDivisors:j,object:q,attributes:{},index:null}}function E(q,tt,ut,j){const $=f.attributes,W=tt.attributes;let k=0;const ft=ut.getAttributes();for(const ot in ft)if(ft[ot].location>=0){const _t=$[ot];let Bt=W[ot];if(Bt===void 0&&(ot==="instanceMatrix"&&q.instanceMatrix&&(Bt=q.instanceMatrix),ot==="instanceColor"&&q.instanceColor&&(Bt=q.instanceColor)),_t===void 0||_t.attribute!==Bt||Bt&&_t.data!==Bt.data)return!0;k++}return f.attributesNum!==k||f.index!==j}function R(q,tt,ut,j){const $={},W=tt.attributes;let k=0;const ft=ut.getAttributes();for(const ot in ft)if(ft[ot].location>=0){let _t=W[ot];_t===void 0&&(ot==="instanceMatrix"&&q.instanceMatrix&&(_t=q.instanceMatrix),ot==="instanceColor"&&q.instanceColor&&(_t=q.instanceColor));const Bt={};Bt.attribute=_t,_t&&_t.data&&(Bt.data=_t.data),$[ot]=Bt,k++}f.attributes=$,f.attributesNum=k,f.index=j}function w(){const q=f.newAttributes;for(let tt=0,ut=q.length;tt<ut;tt++)q[tt]=0}function M(q){S(q,0)}function S(q,tt){const ut=f.newAttributes,j=f.enabledAttributes,$=f.attributeDivisors;ut[q]=1,j[q]===0&&(o.enableVertexAttribArray(q),j[q]=1),$[q]!==tt&&(o.vertexAttribDivisor(q,tt),$[q]=tt)}function O(){const q=f.newAttributes,tt=f.enabledAttributes;for(let ut=0,j=tt.length;ut<j;ut++)tt[ut]!==q[ut]&&(o.disableVertexAttribArray(ut),tt[ut]=0)}function X(q,tt,ut,j,$,W,k){k===!0?o.vertexAttribIPointer(q,tt,ut,$,W):o.vertexAttribPointer(q,tt,ut,j,$,W)}function C(q,tt,ut,j){w();const $=j.attributes,W=ut.getAttributes(),k=tt.defaultAttributeValues;for(const ft in W){const ot=W[ft];if(ot.location>=0){let pt=$[ft];if(pt===void 0&&(ft==="instanceMatrix"&&q.instanceMatrix&&(pt=q.instanceMatrix),ft==="instanceColor"&&q.instanceColor&&(pt=q.instanceColor)),pt!==void 0){const _t=pt.normalized,Bt=pt.itemSize,Nt=e.get(pt);if(Nt===void 0)continue;const z=Nt.buffer,mt=Nt.type,Tt=Nt.bytesPerElement,Z=mt===o.INT||mt===o.UNSIGNED_INT||pt.gpuType===Hp;if(pt.isInterleavedBufferAttribute){const dt=pt.data,At=dt.stride,wt=pt.offset;if(dt.isInstancedInterleavedBuffer){for(let gt=0;gt<ot.locationSize;gt++)S(ot.location+gt,dt.meshPerAttribute);q.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let gt=0;gt<ot.locationSize;gt++)M(ot.location+gt);o.bindBuffer(o.ARRAY_BUFFER,z);for(let gt=0;gt<ot.locationSize;gt++)X(ot.location+gt,Bt/ot.locationSize,mt,_t,At*Tt,(wt+Bt/ot.locationSize*gt)*Tt,Z)}else{if(pt.isInstancedBufferAttribute){for(let dt=0;dt<ot.locationSize;dt++)S(ot.location+dt,pt.meshPerAttribute);q.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let dt=0;dt<ot.locationSize;dt++)M(ot.location+dt);o.bindBuffer(o.ARRAY_BUFFER,z);for(let dt=0;dt<ot.locationSize;dt++)X(ot.location+dt,Bt/ot.locationSize,mt,_t,Bt*Tt,Bt/ot.locationSize*dt*Tt,Z)}}else if(k!==void 0){const _t=k[ft];if(_t!==void 0)switch(_t.length){case 2:o.vertexAttrib2fv(ot.location,_t);break;case 3:o.vertexAttrib3fv(ot.location,_t);break;case 4:o.vertexAttrib4fv(ot.location,_t);break;default:o.vertexAttrib1fv(ot.location,_t)}}}}O()}function N(){L();for(const q in s){const tt=s[q];for(const ut in tt){const j=tt[ut];for(const $ in j){const W=j[$];for(const k in W)x(W[k].object),delete W[k];delete j[$]}}delete s[q]}}function U(q){if(s[q.id]===void 0)return;const tt=s[q.id];for(const ut in tt){const j=tt[ut];for(const $ in j){const W=j[$];for(const k in W)x(W[k].object),delete W[k];delete j[$]}}delete s[q.id]}function P(q){for(const tt in s){const ut=s[tt];for(const j in ut){const $=ut[j];if($[q.id]===void 0)continue;const W=$[q.id];for(const k in W)x(W[k].object),delete W[k];delete $[q.id]}}}function b(q){for(const tt in s){const ut=s[tt],j=q.isInstancedMesh===!0?q.id:0,$=ut[j];if($!==void 0){for(const W in $){const k=$[W];for(const ft in k)x(k[ft].object),delete k[ft];delete $[W]}delete ut[j],Object.keys(ut).length===0&&delete s[tt]}}}function L(){H(),d=!0,f!==u&&(f=u,p(f.object))}function H(){u.geometry=null,u.program=null,u.wireframe=!1}return{setup:h,reset:L,resetDefaultState:H,dispose:N,releaseStatesOfGeometry:U,releaseStatesOfObject:b,releaseStatesOfProgram:P,initAttributes:w,enableAttribute:M,disableUnusedAttributes:O}}function SA(o,e,a){let s;function u(m){s=m}function f(m,p){o.drawArrays(s,m,p),a.update(p,s,1)}function d(m,p,x){x!==0&&(o.drawArraysInstanced(s,m,p,x),a.update(p,s,x))}function h(m,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,p,0,x);let _=0;for(let E=0;E<x;E++)_+=p[E];a.update(_,s,1)}this.setMode=u,this.render=f,this.renderInstances=d,this.renderMultiDraw=h}function MA(o,e,a,s){let u;function f(){if(u!==void 0)return u;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");u=o.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else u=0;return u}function d(P){return!(P!==zi&&s.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(P){const b=P===oa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==bi&&P!==ia&&!b&&s.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE))}function m(P){if(P==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=a.precision!==void 0?a.precision:"highp";const x=m(p);x!==p&&(oe("WebGLRenderer:",p,"not supported, using",x,"instead."),p=x);const v=a.logarithmicDepthBuffer===!0,_=a.reversedDepthBuffer===!0&&e.has("EXT_clip_control");a.reversedDepthBuffer===!0&&_===!1&&oe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const E=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),S=o.getParameter(o.MAX_VERTEX_ATTRIBS),O=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),X=o.getParameter(o.MAX_VARYING_VECTORS),C=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),N=o.getParameter(o.MAX_SAMPLES),U=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:f,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:_,maxTextures:E,maxVertexTextures:R,maxTextureSize:w,maxCubemapSize:M,maxAttributes:S,maxVertexUniforms:O,maxVaryings:X,maxFragmentUniforms:C,maxSamples:N,samples:U}}function yA(o){const e=this;let a=null,s=0,u=!1,f=!1;const d=new mr,h=new de,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const E=v.length!==0||_||s!==0||u;return u=_,s=v.length,E},this.beginShadows=function(){f=!0,x(null)},this.endShadows=function(){f=!1},this.setGlobalState=function(v,_){a=x(v,_,0)},this.setState=function(v,_,E){const R=v.clippingPlanes,w=v.clipIntersection,M=v.clipShadows,S=o.get(v);if(!u||R===null||R.length===0||f&&!M)f?x(null):p();else{const O=f?0:s,X=O*4;let C=S.clippingState||null;m.value=C,C=x(R,_,X,E);for(let N=0;N!==X;++N)C[N]=a[N];S.clippingState=C,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=O}};function p(){m.value!==a&&(m.value=a,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function x(v,_,E,R){const w=v!==null?v.length:0;let M=null;if(w!==0){if(M=m.value,R!==!0||M===null){const S=E+w*4,O=_.matrixWorldInverse;h.getNormalMatrix(O),(M===null||M.length<S)&&(M=new Float32Array(S));for(let X=0,C=E;X!==w;++X,C+=4)d.copy(v[X]).applyMatrix4(O,h),d.normal.toArray(M,C),M[C+3]=d.constant}m.value=M,m.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,M}}const eo=4,EA=6,bA=20,TA=256,cl=new qx,Wv=new Be;let Gh=null,Vh=0,Xh=0,kh=!1;const AA=new ht,kr=new ht;class qv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,a=0,s=.1,u=100,f={}){const{size:d=256,position:h=AA}=f;Gh=this._renderer.getRenderTarget(),Vh=this._renderer.getActiveCubeFace(),Xh=this._renderer.getActiveMipmapLevel(),kh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,u,m,h),a>0&&this._blur(m,0,0,a),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,a=null){return this._fromTexture(e,a)}fromCubemap(e,a=null){return this._fromTexture(e,a)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Gh,Vh,Xh),this._renderer.xr.enabled=kh,e.scissorTest=!1,Js(e,0,0,e.width,e.height)}_fromTexture(e,a){e.mapping===Kr||e.mapping===ao?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Gh=this._renderer.getRenderTarget(),Vh=this._renderer.getActiveCubeFace(),Xh=this._renderer.getActiveMipmapLevel(),kh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=a||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),a=4*this._cubeSize,s={magFilter:In,minFilter:In,generateMipmaps:!1,type:oa,format:zi,colorSpace:Cc,depthBuffer:!1},u=Yv(e,a,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==a){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yv(e,a,s);const{_lodMax:f}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=RA(f)),this._blurMaterial=wA(f,e,a),this._ggxMaterial=CA(f,e,a)}return u}_compileMaterial(e){const a=new la(new Ai,e);this._renderer.compile(a,cl)}_sceneToCubeUV(e,a,s,u,f){const m=new Ei(90,1,a,s),p=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,E=v.toneMapping;v.getClearColor(Wv),v.toneMapping=ra,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(u),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new la(new Tl,new jp({name:"PMREM.Background",side:jn,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,M=w.material;let S=!1;const O=e.background;O?O.isColor&&(M.color.copy(O),e.background=null,S=!0):(M.color.copy(Wv),S=!0);for(let X=0;X<6;X++){const C=X%3;C===0?(m.up.set(0,p[X],0),m.position.set(f.x,f.y,f.z),m.lookAt(f.x+x[X],f.y,f.z)):C===1?(m.up.set(0,0,p[X]),m.position.set(f.x,f.y,f.z),m.lookAt(f.x,f.y+x[X],f.z)):(m.up.set(0,p[X],0),m.position.set(f.x,f.y,f.z),m.lookAt(f.x,f.y,f.z+x[X]));const N=this._cubeSize;Js(u,C*N,X>2?N:0,N,N),v.setRenderTarget(u),S&&v.render(w,m),v.render(e,m)}v.toneMapping=E,v.autoClear=_,e.background=O}_textureToCubeUV(e,a){const s=this._renderer,u=e.mapping===Kr||e.mapping===ao;u?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zv());const f=u?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=f;const h=f.uniforms;h.envMap.value=e;const m=this._cubeSize;Js(a,0,0,3*m,2*m),s.setRenderTarget(a),s.render(d,cl)}_applyPMREM(e){const a=this._renderer,s=a.autoClear;a.autoClear=!1;const u=this._lodMeshes.length;for(let f=1;f<u;f++)this._applyGGXFilter(e,f-1,f);a.autoClear=s}_applyGGXFilter(e,a,s){const u=this._renderer,f=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[s];h.material=d;const m=d.uniforms,p=s/(this._lodMeshes.length-1),x=a/(this._lodMeshes.length-1),v=Math.sqrt(p*p-x*x),_=p*1.25,E=v*_,{_lodMax:R}=this,w=this._sizeLods[s],M=3*w*(s>R-eo?s-R+eo:0),S=4*(this._cubeSize-w);m.envMap.value=e.texture,m.roughness.value=E,m.mipInt.value=R-a,Js(f,M,S,3*w,2*w),u.setRenderTarget(f),u.render(h,cl),m.envMap.value=f.texture,m.roughness.value=0,m.mipInt.value=R-s,Js(e,M,S,3*w,2*w),u.setRenderTarget(e),u.render(h,cl)}_blur(e,a,s,u){const f=this._pingPongRenderTarget,d=Math.min(u,Math.PI)/Math.SQRT2;this._blurPass(e,f,a,s,d),this._blurPass(f,e,s,s,d)}_blurPass(e,a,s,u,f){const d=this._renderer,h=this._blurMaterial,m=this._lodMeshes[u];m.material=h;const p=h.uniforms;p.envMap.value=e.texture,p.sigma.value=f,p.mipInt.value=this._lodMax-s;const x=this._sizeLods[u],v=3*x*(u>this._lodMax-eo?u-this._lodMax+eo:0),_=4*(this._cubeSize-x);Js(a,v,_,3*x,2*x),d.setRenderTarget(a),d.render(m,cl)}}function RA(o){const e=[],a=[];let s=o;const u=o-eo+1+EA;for(let f=0;f<u;f++){const d=Math.pow(2,s);e.push(d);const h=1/(d-2),m=-h,p=1+h,x=[m,m,p,m,p,p,m,m,p,p,m,p],v=6,_=6,E=3,R=new Float32Array(E*_*v),w=new Float32Array(E*_*v);for(let S=0;S<v;S++){const O=S%3*2/3-1,X=S>2?0:-1,C=[O,X,0,O+2/3,X,0,O+2/3,X+1,0,O,X,0,O+2/3,X+1,0,O,X+1,0];R.set(C,E*_*S);for(let N=0;N<_;N++){const U=x[N*2]*2-1,P=x[N*2+1]*2-1;S===0?kr.set(1,P,U):S===1?kr.set(-U,1,-P):S===2?kr.set(-U,P,1):S===3?kr.set(-1,P,-U):S===4?kr.set(-U,-1,P):kr.set(U,P,-1),kr.toArray(w,(S*_+N)*E)}}const M=new Ai;M.setAttribute("position",new Fi(R,E)),M.setAttribute("outputDirection",new Fi(w,E)),a.push(new la(M,null)),s>eo&&s--}return{lodMeshes:a,sizeLods:e}}function Yv(o,e,a){const s=new Bi(o,e,a);return s.texture.mapping=Lc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Js(o,e,a,s,u){o.viewport.set(e,a,s,u),o.scissor.set(e,a,s,u)}function CA(o,e,a){return new ua({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:TA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/a,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ic(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function wA(o,e,a){return new ua({name:"SphericalGaussianBlur",defines:{SAMPLES:bA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/a,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ic(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function Zv(){return new ua({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ic(),fragmentShader:`

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
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function Kv(){return new ua({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function Ic(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Kx extends Bi{constructor(e=1,a={}){super(e,e,a),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},u=[s,s,s,s,s,s];this.texture=new Vx(u),this._setTextureOptions(a),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,a){this.texture.type=a.type,this.texture.colorSpace=a.colorSpace,this.texture.generateMipmaps=a.generateMipmaps,this.texture.minFilter=a.minFilter,this.texture.magFilter=a.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},u=new Tl(5,5,5),f=new ua({name:"CubemapFromEquirect",uniforms:ro(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:jn,blending:Ua});f.uniforms.tEquirect.value=a;const d=new la(u,f),h=a.minFilter;return a.minFilter===qr&&(a.minFilter=In),new Lb(1,10,this).update(e,d),a.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,a=!0,s=!0,u=!0){const f=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(a,s,u);e.setRenderTarget(f)}}function NA(o){let e=new WeakMap,a=new WeakMap,s=null;function u(_,E=!1){return _==null?null:E?d(_):f(_)}function f(_){if(_&&_.isTexture){const E=_.mapping;if(E===gh||E===_h)if(e.has(_)){const R=e.get(_).texture;return h(R,_.mapping)}else{const R=_.image;if(R&&R.height>0){const w=new Kx(R.height);return w.fromEquirectangularTexture(o,_),e.set(_,w),_.addEventListener("dispose",p),h(w.texture,_.mapping)}else return null}}return _}function d(_){if(_&&_.isTexture){const E=_.mapping,R=E===gh||E===_h,w=E===Kr||E===ao;if(R||w){let M=a.get(_);const S=M!==void 0?M.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==S)return s===null&&(s=new qv(o)),M=R?s.fromEquirectangular(_,M):s.fromCubemap(_,M),M.texture.pmremVersion=_.pmremVersion,a.set(_,M),M.texture;if(M!==void 0)return M.texture;{const O=_.image;return R&&O&&O.height>0||w&&O&&m(O)?(s===null&&(s=new qv(o)),M=R?s.fromEquirectangular(_):s.fromCubemap(_),M.texture.pmremVersion=_.pmremVersion,a.set(_,M),_.addEventListener("dispose",x),M.texture):null}}}return _}function h(_,E){return E===gh?_.mapping=Kr:E===_h&&(_.mapping=ao),_}function m(_){let E=0;const R=6;for(let w=0;w<R;w++)_[w]!==void 0&&E++;return E===R}function p(_){const E=_.target;E.removeEventListener("dispose",p);const R=e.get(E);R!==void 0&&(e.delete(E),R.dispose())}function x(_){const E=_.target;E.removeEventListener("dispose",x);const R=a.get(E);R!==void 0&&(a.delete(E),R.dispose())}function v(){e=new WeakMap,a=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:u,dispose:v}}function DA(o){const e={};function a(s){if(e[s]!==void 0)return e[s];const u=o.getExtension(s);return e[s]=u,u}return{has:function(s){return a(s)!==null},init:function(){a("EXT_color_buffer_float"),a("WEBGL_clip_cull_distance"),a("OES_texture_float_linear"),a("EXT_color_buffer_half_float"),a("WEBGL_multisampled_render_to_texture"),a("WEBGL_render_shared_exponent")},get:function(s){const u=a(s);return u===null&&no("WebGLRenderer: "+s+" extension not supported."),u}}}function UA(o,e,a,s){const u={},f=new WeakMap;function d(v){const _=v.target;_.index!==null&&e.remove(_.index);for(const R in _.attributes)e.remove(_.attributes[R]);_.removeEventListener("dispose",d),delete u[_.id];const E=f.get(_);E&&(e.remove(E),f.delete(_)),s.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,a.memory.geometries--}function h(v,_){return u[_.id]===!0||(_.addEventListener("dispose",d),u[_.id]=!0,a.memory.geometries++),_}function m(v){const _=v.attributes;for(const E in _)e.update(_[E],o.ARRAY_BUFFER)}function p(v){const _=[],E=v.index,R=v.attributes.position;let w=0;if(R===void 0)return;if(E!==null){const O=E.array;w=E.version;for(let X=0,C=O.length;X<C;X+=3){const N=O[X+0],U=O[X+1],P=O[X+2];_.push(N,U,U,P,P,N)}}else{const O=R.array;w=R.version;for(let X=0,C=O.length/3-1;X<C;X+=3){const N=X+0,U=X+1,P=X+2;_.push(N,U,U,P,P,N)}}const M=new(R.count>=65535?Bx:zx)(_,1);M.version=w;const S=f.get(v);S&&e.remove(S),f.set(v,M)}function x(v){const _=f.get(v);if(_){const E=v.index;E!==null&&_.version<E.version&&p(v)}else p(v);return f.get(v)}return{get:h,update:m,getWireframeAttribute:x}}function LA(o,e,a){let s;function u(v){s=v}let f,d;function h(v){f=v.type,d=v.bytesPerElement}function m(v,_){o.drawElements(s,_,f,v*d),a.update(_,s,1)}function p(v,_,E){E!==0&&(o.drawElementsInstanced(s,_,f,v*d,E),a.update(_,s,E))}function x(v,_,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,_,0,f,v,0,E);let w=0;for(let M=0;M<E;M++)w+=_[M];a.update(w,s,1)}this.setMode=u,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=x}function OA(o){const e={geometries:0,textures:0},a={frame:0,calls:0,triangles:0,points:0,lines:0};function s(f,d,h){switch(a.calls++,d){case o.TRIANGLES:a.triangles+=h*(f/3);break;case o.LINES:a.lines+=h*(f/2);break;case o.LINE_STRIP:a.lines+=h*(f-1);break;case o.LINE_LOOP:a.lines+=h*f;break;case o.POINTS:a.points+=h*f;break;default:Pe("WebGLInfo: Unknown draw mode:",d);break}}function u(){a.calls=0,a.triangles=0,a.points=0,a.lines=0}return{memory:e,render:a,programs:null,autoReset:!0,reset:u,update:s}}function PA(o,e,a){const s=new WeakMap,u=new ln;function f(d,h,m){const p=d.morphTargetInfluences,x=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=x!==void 0?x.length:0;let _=s.get(h);if(_===void 0||_.count!==v){let H=function(){b.dispose(),s.delete(h),h.removeEventListener("dispose",H)};var E=H;_!==void 0&&_.texture.dispose();const R=h.morphAttributes.position!==void 0,w=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,S=h.morphAttributes.position||[],O=h.morphAttributes.normal||[],X=h.morphAttributes.color||[];let C=0;R===!0&&(C=1),w===!0&&(C=2),M===!0&&(C=3);let N=h.attributes.position.count*C,U=1;N>e.maxTextureSize&&(U=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const P=new Float32Array(N*U*4*v),b=new Ox(P,N,U,v);b.type=ia,b.needsUpdate=!0;const L=C*4;for(let q=0;q<v;q++){const tt=S[q],ut=O[q],j=X[q],$=N*U*4*q;for(let W=0;W<tt.count;W++){const k=W*L;R===!0&&(u.fromBufferAttribute(tt,W),P[$+k+0]=u.x,P[$+k+1]=u.y,P[$+k+2]=u.z,P[$+k+3]=0),w===!0&&(u.fromBufferAttribute(ut,W),P[$+k+4]=u.x,P[$+k+5]=u.y,P[$+k+6]=u.z,P[$+k+7]=0),M===!0&&(u.fromBufferAttribute(j,W),P[$+k+8]=u.x,P[$+k+9]=u.y,P[$+k+10]=u.z,P[$+k+11]=j.itemSize===4?u.w:1)}}_={count:v,texture:b,size:new Fe(N,U)},s.set(h,_),h.addEventListener("dispose",H)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,a);else{let R=0;for(let M=0;M<p.length;M++)R+=p[M];const w=h.morphTargetsRelative?1:1-R;m.getUniforms().setValue(o,"morphTargetBaseInfluence",w),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",_.texture,a),m.getUniforms().setValue(o,"morphTargetsTextureSize",_.size)}return{update:f}}function IA(o,e,a,s,u){let f=new WeakMap;function d(p){const x=u.render.frame,v=p.geometry,_=e.get(p,v);if(f.get(_)!==x&&(e.update(_),f.set(_,x)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),f.get(p)!==x&&(a.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&a.update(p.instanceColor,o.ARRAY_BUFFER),f.set(p,x))),p.isSkinnedMesh){const E=p.skeleton;f.get(E)!==x&&(E.update(),f.set(E,x))}return _}function h(){f=new WeakMap}function m(p){const x=p.target;x.removeEventListener("dispose",m),s.releaseStatesOfObject(x),a.remove(x.instanceMatrix),x.instanceColor!==null&&a.remove(x.instanceColor)}return{update:d,dispose:h}}const zA={[vx]:"LINEAR_TONE_MAPPING",[xx]:"REINHARD_TONE_MAPPING",[Sx]:"CINEON_TONE_MAPPING",[Mx]:"ACES_FILMIC_TONE_MAPPING",[Ex]:"AGX_TONE_MAPPING",[bx]:"NEUTRAL_TONE_MAPPING",[yx]:"CUSTOM_TONE_MAPPING"};function BA(o,e,a,s,u,f){const d=new Bi(e,a,{type:o,depthBuffer:u,stencilBuffer:f,samples:s?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let h=null,m=null;const p=new Ai;p.setAttribute("position",new Ti([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new Ti([0,2,0,0,2,0],2));const x=new Nb({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),v=new la(p,x),_=new qx(-1,1,1,-1,0,1);let E=null,R=null,w=!1,M,S=null,O=[],X=!1;this.setSize=function(C,N){d.setSize(C,N),h!==null&&h.setSize(C,N),m!==null&&m.setSize(C,N);for(let U=0;U<O.length;U++){const P=O[U];P.setSize&&P.setSize(C,N)}},this.setEffects=function(C){O=C,X=O.length>0&&O[0].isRenderPass===!0;const N=d.width,U=d.height;O.length>0&&h===null&&(h=new Bi(N,U,{type:oa,depthBuffer:!1,stencilBuffer:!1}),m=new Bi(N,U,{type:oa,depthBuffer:!1,stencilBuffer:!1}));for(let P=0;P<O.length;P++){const b=O[P];b.setSize&&b.setSize(N,U)}},this.begin=function(C,N){if(w||C.toneMapping===ra&&O.length===0)return!1;if(S=N,N!==null){const U=N.width,P=N.height;(d.width!==U||d.height!==P)&&this.setSize(U,P)}return X===!1&&C.setRenderTarget(d),M=C.toneMapping,C.toneMapping=ra,!0},this.hasRenderPass=function(){return X},this.end=function(C,N){C.toneMapping=M,w=!0;let U=d,P=h;for(let b=0;b<O.length;b++){const L=O[b];L.enabled!==!1&&(L.render(C,P,U,N),L.needsSwap!==!1&&(U=P,P=P===h?m:h))}if(E!==C.outputColorSpace||R!==C.toneMapping){E=C.outputColorSpace,R=C.toneMapping,x.defines={},De.getTransfer(E)===qe&&(x.defines.SRGB_TRANSFER="");const b=zA[R];b&&(x.defines[b]=""),x.needsUpdate=!0}x.uniforms.tDiffuse.value=U.texture,C.setRenderTarget(S),C.render(v,_),S=null,w=!1},this.isCompositing=function(){return w},this.dispose=function(){d.dispose(),h!==null&&h.dispose(),m!==null&&m.dispose(),p.dispose(),x.dispose()}}const jx=new kn,Pp=new yl(1,1),Qx=new Ox,Jx=new sb,$x=new Vx,jv=[],Qv=[],Jv=new Float32Array(16),$v=new Float32Array(9),tx=new Float32Array(4);function lo(o,e,a){const s=o[0];if(s<=0||s>0)return o;const u=e*a;let f=jv[u];if(f===void 0&&(f=new Float32Array(u),jv[u]=f),e!==0){s.toArray(f,0);for(let d=1,h=0;d!==e;++d)h+=a,o[d].toArray(f,h)}return f}function xn(o,e){if(o.length!==e.length)return!1;for(let a=0,s=o.length;a<s;a++)if(o[a]!==e[a])return!1;return!0}function Sn(o,e){for(let a=0,s=e.length;a<s;a++)o[a]=e[a]}function zc(o,e){let a=Qv[e];a===void 0&&(a=new Int32Array(e),Qv[e]=a);for(let s=0;s!==e;++s)a[s]=o.allocateTextureUnit();return a}function FA(o,e){const a=this.cache;a[0]!==e&&(o.uniform1f(this.addr,e),a[0]=e)}function HA(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),a[0]=e.x,a[1]=e.y);else{if(xn(a,e))return;o.uniform2fv(this.addr,e),Sn(a,e)}}function GA(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),a[0]=e.x,a[1]=e.y,a[2]=e.z);else if(e.r!==void 0)(a[0]!==e.r||a[1]!==e.g||a[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),a[0]=e.r,a[1]=e.g,a[2]=e.b);else{if(xn(a,e))return;o.uniform3fv(this.addr,e),Sn(a,e)}}function VA(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z||a[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),a[0]=e.x,a[1]=e.y,a[2]=e.z,a[3]=e.w);else{if(xn(a,e))return;o.uniform4fv(this.addr,e),Sn(a,e)}}function XA(o,e){const a=this.cache,s=e.elements;if(s===void 0){if(xn(a,e))return;o.uniformMatrix2fv(this.addr,!1,e),Sn(a,e)}else{if(xn(a,s))return;tx.set(s),o.uniformMatrix2fv(this.addr,!1,tx),Sn(a,s)}}function kA(o,e){const a=this.cache,s=e.elements;if(s===void 0){if(xn(a,e))return;o.uniformMatrix3fv(this.addr,!1,e),Sn(a,e)}else{if(xn(a,s))return;$v.set(s),o.uniformMatrix3fv(this.addr,!1,$v),Sn(a,s)}}function WA(o,e){const a=this.cache,s=e.elements;if(s===void 0){if(xn(a,e))return;o.uniformMatrix4fv(this.addr,!1,e),Sn(a,e)}else{if(xn(a,s))return;Jv.set(s),o.uniformMatrix4fv(this.addr,!1,Jv),Sn(a,s)}}function qA(o,e){const a=this.cache;a[0]!==e&&(o.uniform1i(this.addr,e),a[0]=e)}function YA(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),a[0]=e.x,a[1]=e.y);else{if(xn(a,e))return;o.uniform2iv(this.addr,e),Sn(a,e)}}function ZA(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),a[0]=e.x,a[1]=e.y,a[2]=e.z);else{if(xn(a,e))return;o.uniform3iv(this.addr,e),Sn(a,e)}}function KA(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z||a[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),a[0]=e.x,a[1]=e.y,a[2]=e.z,a[3]=e.w);else{if(xn(a,e))return;o.uniform4iv(this.addr,e),Sn(a,e)}}function jA(o,e){const a=this.cache;a[0]!==e&&(o.uniform1ui(this.addr,e),a[0]=e)}function QA(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),a[0]=e.x,a[1]=e.y);else{if(xn(a,e))return;o.uniform2uiv(this.addr,e),Sn(a,e)}}function JA(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),a[0]=e.x,a[1]=e.y,a[2]=e.z);else{if(xn(a,e))return;o.uniform3uiv(this.addr,e),Sn(a,e)}}function $A(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z||a[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),a[0]=e.x,a[1]=e.y,a[2]=e.z,a[3]=e.w);else{if(xn(a,e))return;o.uniform4uiv(this.addr,e),Sn(a,e)}}function tR(o,e,a){const s=this.cache,u=a.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u);let f;this.type===o.SAMPLER_2D_SHADOW?(Pp.compareFunction=a.isReversedDepthBuffer()?Yp:qp,f=Pp):f=jx,a.setTexture2D(e||f,u)}function eR(o,e,a){const s=this.cache,u=a.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u),a.setTexture3D(e||Jx,u)}function nR(o,e,a){const s=this.cache,u=a.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u),a.setTextureCube(e||$x,u)}function iR(o,e,a){const s=this.cache,u=a.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u),a.setTexture2DArray(e||Qx,u)}function aR(o){switch(o){case 5126:return FA;case 35664:return HA;case 35665:return GA;case 35666:return VA;case 35674:return XA;case 35675:return kA;case 35676:return WA;case 5124:case 35670:return qA;case 35667:case 35671:return YA;case 35668:case 35672:return ZA;case 35669:case 35673:return KA;case 5125:return jA;case 36294:return QA;case 36295:return JA;case 36296:return $A;case 35678:case 36198:case 36298:case 36306:case 35682:return tR;case 35679:case 36299:case 36307:return eR;case 35680:case 36300:case 36308:case 36293:return nR;case 36289:case 36303:case 36311:case 36292:return iR}}function rR(o,e){o.uniform1fv(this.addr,e)}function sR(o,e){const a=lo(e,this.size,2);o.uniform2fv(this.addr,a)}function oR(o,e){const a=lo(e,this.size,3);o.uniform3fv(this.addr,a)}function lR(o,e){const a=lo(e,this.size,4);o.uniform4fv(this.addr,a)}function uR(o,e){const a=lo(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,a)}function cR(o,e){const a=lo(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,a)}function fR(o,e){const a=lo(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,a)}function dR(o,e){o.uniform1iv(this.addr,e)}function hR(o,e){o.uniform2iv(this.addr,e)}function pR(o,e){o.uniform3iv(this.addr,e)}function mR(o,e){o.uniform4iv(this.addr,e)}function gR(o,e){o.uniform1uiv(this.addr,e)}function _R(o,e){o.uniform2uiv(this.addr,e)}function vR(o,e){o.uniform3uiv(this.addr,e)}function xR(o,e){o.uniform4uiv(this.addr,e)}function SR(o,e,a){const s=this.cache,u=e.length,f=zc(a,u);xn(s,f)||(o.uniform1iv(this.addr,f),Sn(s,f));let d;this.type===o.SAMPLER_2D_SHADOW?d=Pp:d=jx;for(let h=0;h!==u;++h)a.setTexture2D(e[h]||d,f[h])}function MR(o,e,a){const s=this.cache,u=e.length,f=zc(a,u);xn(s,f)||(o.uniform1iv(this.addr,f),Sn(s,f));for(let d=0;d!==u;++d)a.setTexture3D(e[d]||Jx,f[d])}function yR(o,e,a){const s=this.cache,u=e.length,f=zc(a,u);xn(s,f)||(o.uniform1iv(this.addr,f),Sn(s,f));for(let d=0;d!==u;++d)a.setTextureCube(e[d]||$x,f[d])}function ER(o,e,a){const s=this.cache,u=e.length,f=zc(a,u);xn(s,f)||(o.uniform1iv(this.addr,f),Sn(s,f));for(let d=0;d!==u;++d)a.setTexture2DArray(e[d]||Qx,f[d])}function bR(o){switch(o){case 5126:return rR;case 35664:return sR;case 35665:return oR;case 35666:return lR;case 35674:return uR;case 35675:return cR;case 35676:return fR;case 5124:case 35670:return dR;case 35667:case 35671:return hR;case 35668:case 35672:return pR;case 35669:case 35673:return mR;case 5125:return gR;case 36294:return _R;case 36295:return vR;case 36296:return xR;case 35678:case 36198:case 36298:case 36306:case 35682:return SR;case 35679:case 36299:case 36307:return MR;case 35680:case 36300:case 36308:case 36293:return yR;case 36289:case 36303:case 36311:case 36292:return ER}}class TR{constructor(e,a,s){this.id=e,this.addr=s,this.cache=[],this.type=a.type,this.setValue=aR(a.type)}}class AR{constructor(e,a,s){this.id=e,this.addr=s,this.cache=[],this.type=a.type,this.size=a.size,this.setValue=bR(a.type)}}class RR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,a,s){const u=this.seq;for(let f=0,d=u.length;f!==d;++f){const h=u[f];h.setValue(e,a[h.id],s)}}}const Wh=/(\w+)(\])?(\[|\.)?/g;function ex(o,e){o.seq.push(e),o.map[e.id]=e}function CR(o,e,a){const s=o.name,u=s.length;for(Wh.lastIndex=0;;){const f=Wh.exec(s),d=Wh.lastIndex;let h=f[1];const m=f[2]==="]",p=f[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===u){ex(a,p===void 0?new TR(h,o,e):new AR(h,o,e));break}else{let v=a.map[h];v===void 0&&(v=new RR(h),ex(a,v)),a=v}}}class Tc{constructor(e,a){this.seq=[],this.map={};const s=e.getProgramParameter(a,e.ACTIVE_UNIFORMS);for(let d=0;d<s;++d){const h=e.getActiveUniform(a,d),m=e.getUniformLocation(a,h.name);CR(h,m,this)}const u=[],f=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?u.push(d):f.push(d);u.length>0&&(this.seq=u.concat(f))}setValue(e,a,s,u){const f=this.map[a];f!==void 0&&f.setValue(e,s,u)}setOptional(e,a,s){const u=a[s];u!==void 0&&this.setValue(e,s,u)}static upload(e,a,s,u){for(let f=0,d=a.length;f!==d;++f){const h=a[f],m=s[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,u)}}static seqWithValue(e,a){const s=[];for(let u=0,f=e.length;u!==f;++u){const d=e[u];d.id in a&&s.push(d)}return s}}function nx(o,e,a){const s=o.createShader(e);return o.shaderSource(s,a),o.compileShader(s),s}const wR=37297;let NR=0;function DR(o,e){const a=o.split(`
`),s=[],u=Math.max(e-6,0),f=Math.min(e+6,a.length);for(let d=u;d<f;d++){const h=d+1;s.push(`${h===e?">":" "} ${h}: ${a[d]}`)}return s.join(`
`)}const ix=new de;function UR(o){De._getMatrix(ix,De.workingColorSpace,o);const e=`mat3( ${ix.elements.map(a=>a.toFixed(4))} )`;switch(De.getTransfer(o)){case wc:return[e,"LinearTransferOETF"];case qe:return[e,"sRGBTransferOETF"];default:return oe("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function ax(o,e,a){const s=o.getShaderParameter(e,o.COMPILE_STATUS),f=(o.getShaderInfoLog(e)||"").trim();if(s&&f==="")return"";const d=/ERROR: 0:(\d+)/.exec(f);if(d){const h=parseInt(d[1]);return a.toUpperCase()+`

`+f+`

`+DR(o.getShaderSource(e),h)}else return f}function LR(o,e){const a=UR(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${a[1]}( vec4( value.rgb * ${a[0]}, value.a ) );`,"}"].join(`
`)}const OR={[vx]:"Linear",[xx]:"Reinhard",[Sx]:"Cineon",[Mx]:"ACESFilmic",[Ex]:"AgX",[bx]:"Neutral",[yx]:"Custom"};function PR(o,e){const a=OR[e];return a===void 0?(oe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+a+"ToneMapping( color ); }"}const vc=new ht;function IR(){De.getLuminanceCoefficients(vc);const o=vc.x.toFixed(4),e=vc.y.toFixed(4),a=vc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${a} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zR(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pl).join(`
`)}function BR(o){const e=[];for(const a in o){const s=o[a];s!==!1&&e.push("#define "+a+" "+s)}return e.join(`
`)}function FR(o,e){const a={},s=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let u=0;u<s;u++){const f=o.getActiveAttrib(e,u),d=f.name;let h=1;f.type===o.FLOAT_MAT2&&(h=2),f.type===o.FLOAT_MAT3&&(h=3),f.type===o.FLOAT_MAT4&&(h=4),a[d]={type:f.type,location:o.getAttribLocation(e,d),locationSize:h}}return a}function pl(o){return o!==""}function rx(o,e){const a=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,a).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function sx(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const HR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ip(o){return o.replace(HR,VR)}const GR=new Map;function VR(o,e){let a=ge[e];if(a===void 0){const s=GR.get(e);if(s!==void 0)a=ge[s],oe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Ip(a)}const XR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ox(o){return o.replace(XR,kR)}function kR(o,e,a,s){let u="";for(let f=parseInt(e);f<parseInt(a);f++)u+=s.replace(/\[\s*i\s*\]/g,"[ "+f+" ]").replace(/UNROLLED_LOOP_INDEX/g,f);return u}function lx(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const WR={[Sc]:"SHADOWMAP_TYPE_PCF",[hl]:"SHADOWMAP_TYPE_VSM"};function qR(o){return WR[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const YR={[Kr]:"ENVMAP_TYPE_CUBE",[ao]:"ENVMAP_TYPE_CUBE",[Lc]:"ENVMAP_TYPE_CUBE_UV"};function ZR(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":YR[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const KR={[ao]:"ENVMAP_MODE_REFRACTION"};function jR(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":KR[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const QR={[_x]:"ENVMAP_BLENDING_MULTIPLY",[yE]:"ENVMAP_BLENDING_MIX",[EE]:"ENVMAP_BLENDING_ADD"};function JR(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":QR[o.combine]||"ENVMAP_BLENDING_NONE"}function $R(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const a=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,a),112)),texelHeight:s,maxMip:a}}function t3(o,e,a,s){const u=o.getContext(),f=a.defines;let d=a.vertexShader,h=a.fragmentShader;const m=qR(a),p=ZR(a),x=jR(a),v=JR(a),_=$R(a),E=zR(a),R=BR(f),w=u.createProgram();let M,S,O=a.glslVersion?"#version "+a.glslVersion+`
`:"";a.isRawShaderMaterial?(M=["#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,R].filter(pl).join(`
`),M.length>0&&(M+=`
`),S=["#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,R].filter(pl).join(`
`),S.length>0&&(S+=`
`)):(M=[lx(a),"#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,R,a.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",a.batching?"#define USE_BATCHING":"",a.batchingColor?"#define USE_BATCHING_COLOR":"",a.instancing?"#define USE_INSTANCING":"",a.instancingColor?"#define USE_INSTANCING_COLOR":"",a.instancingMorph?"#define USE_INSTANCING_MORPH":"",a.useFog&&a.fog?"#define USE_FOG":"",a.useFog&&a.fogExp2?"#define FOG_EXP2":"",a.map?"#define USE_MAP":"",a.envMap?"#define USE_ENVMAP":"",a.envMap?"#define "+x:"",a.lightMap?"#define USE_LIGHTMAP":"",a.aoMap?"#define USE_AOMAP":"",a.bumpMap?"#define USE_BUMPMAP":"",a.normalMap?"#define USE_NORMALMAP":"",a.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",a.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",a.displacementMap?"#define USE_DISPLACEMENTMAP":"",a.emissiveMap?"#define USE_EMISSIVEMAP":"",a.anisotropy?"#define USE_ANISOTROPY":"",a.anisotropyMap?"#define USE_ANISOTROPYMAP":"",a.clearcoatMap?"#define USE_CLEARCOATMAP":"",a.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",a.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",a.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",a.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",a.specularMap?"#define USE_SPECULARMAP":"",a.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",a.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",a.roughnessMap?"#define USE_ROUGHNESSMAP":"",a.metalnessMap?"#define USE_METALNESSMAP":"",a.alphaMap?"#define USE_ALPHAMAP":"",a.alphaHash?"#define USE_ALPHAHASH":"",a.transmission?"#define USE_TRANSMISSION":"",a.transmissionMap?"#define USE_TRANSMISSIONMAP":"",a.thicknessMap?"#define USE_THICKNESSMAP":"",a.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",a.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",a.mapUv?"#define MAP_UV "+a.mapUv:"",a.alphaMapUv?"#define ALPHAMAP_UV "+a.alphaMapUv:"",a.lightMapUv?"#define LIGHTMAP_UV "+a.lightMapUv:"",a.aoMapUv?"#define AOMAP_UV "+a.aoMapUv:"",a.emissiveMapUv?"#define EMISSIVEMAP_UV "+a.emissiveMapUv:"",a.bumpMapUv?"#define BUMPMAP_UV "+a.bumpMapUv:"",a.normalMapUv?"#define NORMALMAP_UV "+a.normalMapUv:"",a.displacementMapUv?"#define DISPLACEMENTMAP_UV "+a.displacementMapUv:"",a.metalnessMapUv?"#define METALNESSMAP_UV "+a.metalnessMapUv:"",a.roughnessMapUv?"#define ROUGHNESSMAP_UV "+a.roughnessMapUv:"",a.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+a.anisotropyMapUv:"",a.clearcoatMapUv?"#define CLEARCOATMAP_UV "+a.clearcoatMapUv:"",a.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+a.clearcoatNormalMapUv:"",a.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+a.clearcoatRoughnessMapUv:"",a.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+a.iridescenceMapUv:"",a.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+a.iridescenceThicknessMapUv:"",a.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+a.sheenColorMapUv:"",a.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+a.sheenRoughnessMapUv:"",a.specularMapUv?"#define SPECULARMAP_UV "+a.specularMapUv:"",a.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+a.specularColorMapUv:"",a.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+a.specularIntensityMapUv:"",a.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+a.transmissionMapUv:"",a.thicknessMapUv?"#define THICKNESSMAP_UV "+a.thicknessMapUv:"",a.vertexTangents&&a.flatShading===!1?"#define USE_TANGENT":"",a.vertexNormals?"#define HAS_NORMAL":"",a.vertexColors?"#define USE_COLOR":"",a.vertexAlphas?"#define USE_COLOR_ALPHA":"",a.vertexUv1s?"#define USE_UV1":"",a.vertexUv2s?"#define USE_UV2":"",a.vertexUv3s?"#define USE_UV3":"",a.pointsUvs?"#define USE_POINTS_UV":"",a.flatShading?"#define FLAT_SHADED":"",a.skinning?"#define USE_SKINNING":"",a.morphTargets?"#define USE_MORPHTARGETS":"",a.morphNormals&&a.flatShading===!1?"#define USE_MORPHNORMALS":"",a.morphColors?"#define USE_MORPHCOLORS":"",a.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+a.morphTextureStride:"",a.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+a.morphTargetsCount:"",a.doubleSided?"#define DOUBLE_SIDED":"",a.flipSided?"#define FLIP_SIDED":"",a.shadowMapEnabled?"#define USE_SHADOWMAP":"",a.shadowMapEnabled?"#define "+m:"",a.sizeAttenuation?"#define USE_SIZEATTENUATION":"",a.numLightProbes>0?"#define USE_LIGHT_PROBES":"",a.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",a.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pl).join(`
`),S=[lx(a),"#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,R,a.useFog&&a.fog?"#define USE_FOG":"",a.useFog&&a.fogExp2?"#define FOG_EXP2":"",a.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",a.map?"#define USE_MAP":"",a.matcap?"#define USE_MATCAP":"",a.envMap?"#define USE_ENVMAP":"",a.envMap?"#define "+p:"",a.envMap?"#define "+x:"",a.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",a.lightMap?"#define USE_LIGHTMAP":"",a.aoMap?"#define USE_AOMAP":"",a.bumpMap?"#define USE_BUMPMAP":"",a.normalMap?"#define USE_NORMALMAP":"",a.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",a.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",a.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",a.emissiveMap?"#define USE_EMISSIVEMAP":"",a.anisotropy?"#define USE_ANISOTROPY":"",a.anisotropyMap?"#define USE_ANISOTROPYMAP":"",a.clearcoat?"#define USE_CLEARCOAT":"",a.clearcoatMap?"#define USE_CLEARCOATMAP":"",a.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",a.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",a.dispersion?"#define USE_DISPERSION":"",a.retroreflection?"#define USE_RETROREFLECTION":"",a.iridescence?"#define USE_IRIDESCENCE":"",a.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",a.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",a.specularMap?"#define USE_SPECULARMAP":"",a.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",a.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",a.roughnessMap?"#define USE_ROUGHNESSMAP":"",a.metalnessMap?"#define USE_METALNESSMAP":"",a.alphaMap?"#define USE_ALPHAMAP":"",a.alphaTest?"#define USE_ALPHATEST":"",a.alphaHash?"#define USE_ALPHAHASH":"",a.sheen?"#define USE_SHEEN":"",a.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",a.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",a.transmission?"#define USE_TRANSMISSION":"",a.transmissionMap?"#define USE_TRANSMISSIONMAP":"",a.thicknessMap?"#define USE_THICKNESSMAP":"",a.vertexTangents&&a.flatShading===!1?"#define USE_TANGENT":"",a.vertexColors||a.instancingColor?"#define USE_COLOR":"",a.vertexAlphas||a.batchingColor?"#define USE_COLOR_ALPHA":"",a.vertexUv1s?"#define USE_UV1":"",a.vertexUv2s?"#define USE_UV2":"",a.vertexUv3s?"#define USE_UV3":"",a.pointsUvs?"#define USE_POINTS_UV":"",a.gradientMap?"#define USE_GRADIENTMAP":"",a.flatShading?"#define FLAT_SHADED":"",a.doubleSided?"#define DOUBLE_SIDED":"",a.flipSided?"#define FLIP_SIDED":"",a.shadowMapEnabled?"#define USE_SHADOWMAP":"",a.shadowMapEnabled?"#define "+m:"",a.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",a.numLightProbes>0?"#define USE_LIGHT_PROBES":"",a.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",a.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",a.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",a.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",a.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",a.toneMapping!==ra?"#define TONE_MAPPING":"",a.toneMapping!==ra?ge.tonemapping_pars_fragment:"",a.toneMapping!==ra?PR("toneMapping",a.toneMapping):"",a.dithering?"#define DITHERING":"",a.opaque?"#define OPAQUE":"",ge.colorspace_pars_fragment,LR("linearToOutputTexel",a.outputColorSpace),IR(),a.useDepthPacking?"#define DEPTH_PACKING "+a.depthPacking:"",`
`].filter(pl).join(`
`)),d=Ip(d),d=rx(d,a),d=sx(d,a),h=Ip(h),h=rx(h,a),h=sx(h,a),d=ox(d),h=ox(h),a.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,M=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,S=["#define varying in",a.glslVersion===Sv?"":"layout(location = 0) out highp vec4 pc_fragColor;",a.glslVersion===Sv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const X=O+M+d,C=O+S+h,N=nx(u,u.VERTEX_SHADER,X),U=nx(u,u.FRAGMENT_SHADER,C);u.attachShader(w,N),u.attachShader(w,U),a.index0AttributeName!==void 0?u.bindAttribLocation(w,0,a.index0AttributeName):a.hasPositionAttribute===!0&&u.bindAttribLocation(w,0,"position"),u.linkProgram(w);function P(q){if(o.debug.checkShaderErrors){const tt=u.getProgramInfoLog(w)||"",ut=u.getShaderInfoLog(N)||"",j=u.getShaderInfoLog(U)||"",$=tt.trim(),W=ut.trim(),k=j.trim();let ft=!0,ot=!0;if(u.getProgramParameter(w,u.LINK_STATUS)===!1)if(ft=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(u,w,N,U);else{const pt=ax(u,N,"vertex"),_t=ax(u,U,"fragment");Pe("WebGLProgram: Shader Error "+u.getError()+" - VALIDATE_STATUS "+u.getProgramParameter(w,u.VALIDATE_STATUS)+`

Material Name: `+q.name+`
Material Type: `+q.type+`

Program Info Log: `+$+`
`+pt+`
`+_t)}else $!==""?oe("WebGLProgram: Program Info Log:",$):(W===""||k==="")&&(ot=!1);ot&&(q.diagnostics={runnable:ft,programLog:$,vertexShader:{log:W,prefix:M},fragmentShader:{log:k,prefix:S}})}u.deleteShader(N),u.deleteShader(U),b=new Tc(u,w),L=FR(u,w)}let b;this.getUniforms=function(){return b===void 0&&P(this),b};let L;this.getAttributes=function(){return L===void 0&&P(this),L};let H=a.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=u.getProgramParameter(w,wR)),H},this.destroy=function(){s.releaseStatesOfProgram(this),u.deleteProgram(w),this.program=void 0},this.type=a.shaderType,this.name=a.shaderName,this.id=NR++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=N,this.fragmentShader=U,this}let e3=0;class n3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,a,s){const u=this._getShaderCacheForMaterial(e);return u.has(a)===!1&&(u.add(a),a.usedTimes++),u.has(s)===!1&&(u.add(s),s.usedTimes++),this}remove(e){const a=this.materialCache.get(e);for(const s of a)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const a=this.materialCache;let s=a.get(e);return s===void 0&&(s=new Set,a.set(e,s)),s}_getShaderStage(e){const a=this.shaderCache;let s=a.get(e);return s===void 0&&(s=new i3(e),a.set(e,s)),s}}class i3{constructor(e){this.id=e3++,this.code=e,this.usedTimes=0}}function a3(o){return o===jr||o===Ac||o===Rc}function r3(o,e,a,s,u,f){const d=new Px,h=new n3,m=new Set,p=[],x=new Map,v=s.logarithmicDepthBuffer;let _=s.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(b){return m.add(b),b===0?"uv":`uv${b}`}function w(b,L,H,q,tt,ut){const j=q.fog,$=tt.geometry,W=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?q.environment:null,k=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,ft=e.get(b.envMap||W,k),ot=ft&&ft.mapping===Lc?ft.image.height:null,pt=E[b.type];b.precision!==null&&(_=s.getMaxPrecision(b.precision),_!==b.precision&&oe("WebGLProgram.getParameters:",b.precision,"not supported, using",_,"instead."));const _t=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Bt=_t!==void 0?_t.length:0;let Nt=0;$.morphAttributes.position!==void 0&&(Nt=1),$.morphAttributes.normal!==void 0&&(Nt=2),$.morphAttributes.color!==void 0&&(Nt=3);let z,mt,Tt,Z;if(pt){const we=na[pt];z=we.vertexShader,mt=we.fragmentShader}else{z=b.vertexShader,mt=b.fragmentShader;const we=h.getVertexShaderStage(b),ce=h.getFragmentShaderStage(b);h.update(b,we,ce),Tt=we.id,Z=ce.id}const dt=o.getRenderTarget(),At=o.state.buffers.depth.getReversed(),wt=tt.isInstancedMesh===!0,gt=tt.isBatchedMesh===!0,Rt=!!b.map,be=!!b.matcap,se=!!ft,me=!!b.aoMap,_e=!!b.lightMap,te=!!b.bumpMap&&b.wireframe===!1,ie=!!b.normalMap,Ve=!!b.displacementMap,fn=!!b.emissiveMap,Oe=!!b.metalnessMap,$e=!!b.roughnessMap,V=b.anisotropy>0,en=b.clearcoat>0,Le=b.dispersion>0,D=b.retroreflectivity>0,y=b.iridescence>0,J=b.sheen>0,st=b.transmission>0,vt=V&&!!b.anisotropyMap,Ct=en&&!!b.clearcoatMap,Lt=en&&!!b.clearcoatNormalMap,xt=en&&!!b.clearcoatRoughnessMap,Et=y&&!!b.iridescenceMap,Ut=y&&!!b.iridescenceThicknessMap,$t=J&&!!b.sheenColorMap,Ft=J&&!!b.sheenRoughnessMap,zt=!!b.specularMap,Wt=!!b.specularColorMap,ne=!!b.specularIntensityMap,ue=st&&!!b.transmissionMap,G=st&&!!b.thicknessMap,Dt=!!b.gradientMap,yt=!!b.alphaMap,Ot=b.alphaTest>0,kt=!!b.alphaHash,bt=!!b.extensions;let Jt=ra;b.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(Jt=o.toneMapping);const Xt={shaderID:pt,shaderType:b.type,shaderName:b.name,vertexShader:z,fragmentShader:mt,defines:b.defines,customVertexShaderID:Tt,customFragmentShaderID:Z,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:_,batching:gt,batchingColor:gt&&tt._colorsTexture!==null,instancing:wt,instancingColor:wt&&tt.instanceColor!==null,instancingMorph:wt&&tt.morphTexture!==null,outputColorSpace:dt===null?o.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:De.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:Rt,matcap:be,envMap:se,envMapMode:se&&ft.mapping,envMapCubeUVHeight:ot,aoMap:me,lightMap:_e,bumpMap:te,normalMap:ie,displacementMap:Ve,emissiveMap:fn,normalMapObjectSpace:ie&&b.normalMapType===AE,normalMapTangentSpace:ie&&b.normalMapType===xv,packedNormalMap:ie&&b.normalMapType===xv&&a3(b.normalMap.format),metalnessMap:Oe,roughnessMap:$e,anisotropy:V,anisotropyMap:vt,clearcoat:en,clearcoatMap:Ct,clearcoatNormalMap:Lt,clearcoatRoughnessMap:xt,dispersion:Le,retroreflection:D,iridescence:y,iridescenceMap:Et,iridescenceThicknessMap:Ut,sheen:J,sheenColorMap:$t,sheenRoughnessMap:Ft,specularMap:zt,specularColorMap:Wt,specularIntensityMap:ne,transmission:st,transmissionMap:ue,thicknessMap:G,gradientMap:Dt,opaque:b.transparent===!1&&b.blending===ml&&b.alphaToCoverage===!1,alphaMap:yt,alphaTest:Ot,alphaHash:kt,combine:b.combine,mapUv:Rt&&R(b.map.channel),aoMapUv:me&&R(b.aoMap.channel),lightMapUv:_e&&R(b.lightMap.channel),bumpMapUv:te&&R(b.bumpMap.channel),normalMapUv:ie&&R(b.normalMap.channel),displacementMapUv:Ve&&R(b.displacementMap.channel),emissiveMapUv:fn&&R(b.emissiveMap.channel),metalnessMapUv:Oe&&R(b.metalnessMap.channel),roughnessMapUv:$e&&R(b.roughnessMap.channel),anisotropyMapUv:vt&&R(b.anisotropyMap.channel),clearcoatMapUv:Ct&&R(b.clearcoatMap.channel),clearcoatNormalMapUv:Lt&&R(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xt&&R(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Et&&R(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ut&&R(b.iridescenceThicknessMap.channel),sheenColorMapUv:$t&&R(b.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&R(b.sheenRoughnessMap.channel),specularMapUv:zt&&R(b.specularMap.channel),specularColorMapUv:Wt&&R(b.specularColorMap.channel),specularIntensityMapUv:ne&&R(b.specularIntensityMap.channel),transmissionMapUv:ue&&R(b.transmissionMap.channel),thicknessMapUv:G&&R(b.thicknessMap.channel),alphaMapUv:yt&&R(b.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(ie||V),vertexNormals:!!$.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:tt.isPoints===!0&&!!$.attributes.uv&&(Rt||yt),fog:!!j,useFog:b.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||$.attributes.normal===void 0&&ie===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:At,skinning:tt.isSkinnedMesh===!0,hasPositionAttribute:$.attributes.position!==void 0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:Bt,morphTextureStride:Nt,numSunLights:L.sun.length,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numSunLightShadows:L.sunShadowMap.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:ut.length,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:b.dithering,shadowMapEnabled:o.shadowMap.enabled&&H.length>0,shadowMapType:o.shadowMap.type,toneMapping:Jt,decodeVideoTexture:Rt&&b.map.isVideoTexture===!0&&De.getTransfer(b.map.colorSpace)===qe,decodeVideoTextureEmissive:fn&&b.emissiveMap.isVideoTexture===!0&&De.getTransfer(b.emissiveMap.colorSpace)===qe,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Na,flipSided:b.side===jn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:bt&&b.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(bt&&b.extensions.multiDraw===!0||gt)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Xt.vertexUv1s=m.has(1),Xt.vertexUv2s=m.has(2),Xt.vertexUv3s=m.has(3),m.clear(),Xt}function M(b){const L=[];if(b.shaderID?L.push(b.shaderID):(L.push(b.customVertexShaderID),L.push(b.customFragmentShaderID)),b.defines!==void 0)for(const H in b.defines)L.push(H),L.push(b.defines[H]);return b.isRawShaderMaterial===!1&&(S(L,b),O(L,b),L.push(o.outputColorSpace)),L.push(b.customProgramCacheKey),L.join()}function S(b,L){b.push(L.precision),b.push(L.outputColorSpace),b.push(L.envMapMode),b.push(L.envMapCubeUVHeight),b.push(L.mapUv),b.push(L.alphaMapUv),b.push(L.lightMapUv),b.push(L.aoMapUv),b.push(L.bumpMapUv),b.push(L.normalMapUv),b.push(L.displacementMapUv),b.push(L.emissiveMapUv),b.push(L.metalnessMapUv),b.push(L.roughnessMapUv),b.push(L.anisotropyMapUv),b.push(L.clearcoatMapUv),b.push(L.clearcoatNormalMapUv),b.push(L.clearcoatRoughnessMapUv),b.push(L.iridescenceMapUv),b.push(L.iridescenceThicknessMapUv),b.push(L.sheenColorMapUv),b.push(L.sheenRoughnessMapUv),b.push(L.specularMapUv),b.push(L.specularColorMapUv),b.push(L.specularIntensityMapUv),b.push(L.transmissionMapUv),b.push(L.thicknessMapUv),b.push(L.combine),b.push(L.fogExp2),b.push(L.sizeAttenuation),b.push(L.morphTargetsCount),b.push(L.morphAttributeCount),b.push(L.numSunLights),b.push(L.numDirLights),b.push(L.numPointLights),b.push(L.numSpotLights),b.push(L.numSpotLightMaps),b.push(L.numHemiLights),b.push(L.numRectAreaLights),b.push(L.numSunLightShadows),b.push(L.numDirLightShadows),b.push(L.numPointLightShadows),b.push(L.numSpotLightShadows),b.push(L.numSpotLightShadowsWithMaps),b.push(L.numLightProbes),b.push(L.shadowMapType),b.push(L.toneMapping),b.push(L.numClippingPlanes),b.push(L.numClipIntersection),b.push(L.depthPacking)}function O(b,L){d.disableAll(),L.instancing&&d.enable(0),L.instancingColor&&d.enable(1),L.instancingMorph&&d.enable(2),L.matcap&&d.enable(3),L.envMap&&d.enable(4),L.normalMapObjectSpace&&d.enable(5),L.normalMapTangentSpace&&d.enable(6),L.clearcoat&&d.enable(7),L.iridescence&&d.enable(8),L.alphaTest&&d.enable(9),L.vertexColors&&d.enable(10),L.vertexAlphas&&d.enable(11),L.vertexUv1s&&d.enable(12),L.vertexUv2s&&d.enable(13),L.vertexUv3s&&d.enable(14),L.vertexTangents&&d.enable(15),L.anisotropy&&d.enable(16),L.alphaHash&&d.enable(17),L.batching&&d.enable(18),L.dispersion&&d.enable(19),L.retroreflection&&d.enable(24),L.batchingColor&&d.enable(20),L.gradientMap&&d.enable(21),L.packedNormalMap&&d.enable(22),L.vertexNormals&&d.enable(23),b.push(d.mask),d.disableAll(),L.fog&&d.enable(0),L.useFog&&d.enable(1),L.flatShading&&d.enable(2),L.logarithmicDepthBuffer&&d.enable(3),L.reversedDepthBuffer&&d.enable(4),L.skinning&&d.enable(5),L.morphTargets&&d.enable(6),L.morphNormals&&d.enable(7),L.morphColors&&d.enable(8),L.premultipliedAlpha&&d.enable(9),L.shadowMapEnabled&&d.enable(10),L.doubleSided&&d.enable(11),L.flipSided&&d.enable(12),L.useDepthPacking&&d.enable(13),L.dithering&&d.enable(14),L.transmission&&d.enable(15),L.sheen&&d.enable(16),L.opaque&&d.enable(17),L.pointsUvs&&d.enable(18),L.decodeVideoTexture&&d.enable(19),L.decodeVideoTextureEmissive&&d.enable(20),L.alphaToCoverage&&d.enable(21),L.numLightProbeGrids>0&&d.enable(22),L.hasPositionAttribute&&d.enable(23),b.push(d.mask)}function X(b){const L=E[b.type];let H;if(L){const q=na[L];H=Rb.clone(q.uniforms)}else H=b.uniforms;return H}function C(b,L){let H=x.get(L);return H!==void 0?++H.usedTimes:(H=new t3(o,L,b,u),p.push(H),x.set(L,H)),H}function N(b){if(--b.usedTimes===0){const L=p.indexOf(b);p[L]=p[p.length-1],p.pop(),x.delete(b.cacheKey),b.destroy()}}function U(b){h.remove(b)}function P(){h.dispose()}return{getParameters:w,getProgramCacheKey:M,getUniforms:X,acquireProgram:C,releaseProgram:N,releaseShaderCache:U,programs:p,dispose:P}}function s3(){let o=new WeakMap;function e(d){return o.has(d)}function a(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function s(d){o.delete(d)}function u(d,h,m){o.get(d)[h]=m}function f(){o=new WeakMap}return{has:e,get:a,remove:s,update:u,dispose:f}}function o3(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.materialVariant!==e.materialVariant?o.materialVariant-e.materialVariant:o.z!==e.z?o.z-e.z:o.id-e.id}function ux(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function cx(){const o=[];let e=0;const a=[],s=[],u=[];function f(){e=0,a.length=0,s.length=0,u.length=0}function d(_){let E=0;return _.isInstancedMesh&&(E+=2),_.isSkinnedMesh&&(E+=1),E}function h(_,E,R,w,M,S){let O=o[e];return O===void 0?(O={id:_.id,object:_,geometry:E,material:R,materialVariant:d(_),groupOrder:w,renderOrder:_.renderOrder,z:M,group:S},o[e]=O):(O.id=_.id,O.object=_,O.geometry=E,O.material=R,O.materialVariant=d(_),O.groupOrder=w,O.renderOrder=_.renderOrder,O.z=M,O.group=S),e++,O}function m(_,E,R,w,M,S,O){O.reversedDepth===!0&&(M=-M);const X=h(_,E,R,w,M,S);R.transmission>0?s.push(X):R.transparent===!0?u.push(X):a.push(X)}function p(_,E,R,w,M,S){const O=h(_,E,R,w,M,S);R.transmission>0?s.unshift(O):R.transparent===!0?u.unshift(O):a.unshift(O)}function x(_,E){a.length>1&&a.sort(_||o3),s.length>1&&s.sort(E||ux),u.length>1&&u.sort(E||ux)}function v(){for(let _=e,E=o.length;_<E;_++){const R=o[_];if(R.id===null)break;R.id=null,R.object=null,R.geometry=null,R.material=null,R.group=null}}return{opaque:a,transmissive:s,transparent:u,init:f,push:m,unshift:p,finish:v,sort:x}}function l3(){let o=new WeakMap;function e(s,u){const f=o.get(s);let d;return f===void 0?(d=new cx,o.set(s,[d])):u>=f.length?(d=new cx,f.push(d)):d=f[u],d}function a(){o=new WeakMap}return{get:e,dispose:a}}function u3(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let a;switch(e.type){case"SunLight":case"DirectionalLight":a={direction:new ht,color:new Be};break;case"SpotLight":a={position:new ht,direction:new ht,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":a={position:new ht,color:new Be,distance:0,decay:0};break;case"HemisphereLight":a={direction:new ht,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":a={color:new Be,position:new ht,halfWidth:new ht,halfHeight:new ht};break}return o[e.id]=a,a}}}function c3(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let a;switch(e.type){case"SunLight":case"DirectionalLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=a,a}}}let f3=0;function d3(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function h3(o){const e=new u3,a=c3(),s={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new ht);const u=new ht,f=new cn,d=new cn;function h(p){let x=0,v=0,_=0;for(let tt=0;tt<9;tt++)s.probe[tt].set(0,0,0);let E=0,R=0,w=0,M=0,S=0,O=0,X=0,C=0,N=0,U=0,P=0,b=0,L=0,H=0;p.sort(d3);for(let tt=0,ut=p.length;tt<ut;tt++){const j=p[tt],$=j.color,W=j.intensity,k=j.distance;let ft=null;if(j.shadow&&j.shadow.map&&(j.shadow.map.texture.format===jr?ft=j.shadow.map.texture:ft=j.shadow.map.depthTexture||j.shadow.map.texture),j.isAmbientLight)x+=$.r*W,v+=$.g*W,_+=$.b*W;else if(j.isLightProbe){for(let ot=0;ot<9;ot++)s.probe[ot].addScaledVector(j.sh.coefficients[ot],W);H++}else if(j.isSunLight){const ot=e.get(j);if(ot.color.copy(j.color).multiplyScalar(j.intensity),j.castShadow){const pt=j.shadow,_t=a.get(j);_t.shadowIntensity=pt.intensity,_t.shadowBias=pt.bias,_t.shadowNormalBias=pt.normalBias,_t.shadowRadius=pt.radius,_t.shadowMapSize.copy(pt.mapSize).multiply(pt.getFrameExtents()),s.sunShadow[R]=_t,s.sunShadowMap[R]=ft;const Bt=pt.getViewportCount();for(let Nt=0;Nt<Bt;Nt++)s.sunShadowMatrix[w+Nt]=pt.getMatrix(Nt),s.sunShadowCascade[w+Nt]=pt._cascadeData[Nt];w+=Bt,R++}s.sun[E]=ot,E++}else if(j.isDirectionalLight){const ot=e.get(j);if(ot.color.copy(j.color).multiplyScalar(j.intensity),j.castShadow){const pt=j.shadow,_t=a.get(j);_t.shadowIntensity=pt.intensity,_t.shadowBias=pt.bias,_t.shadowNormalBias=pt.normalBias,_t.shadowRadius=pt.radius,_t.shadowMapSize=pt.mapSize,s.directionalShadow[M]=_t,s.directionalShadowMap[M]=ft,s.directionalShadowMatrix[M]=j.shadow.matrix,N++}s.directional[M]=ot,M++}else if(j.isSpotLight){const ot=e.get(j);ot.position.setFromMatrixPosition(j.matrixWorld),ot.color.copy($).multiplyScalar(W),ot.distance=k,ot.coneCos=Math.cos(j.angle),ot.penumbraCos=Math.cos(j.angle*(1-j.penumbra)),ot.decay=j.decay,s.spot[O]=ot;const pt=j.shadow;if(j.map&&(s.spotLightMap[b]=j.map,b++,pt.updateMatrices(j),j.castShadow&&L++),s.spotLightMatrix[O]=pt.matrix,j.castShadow){const _t=a.get(j);_t.shadowIntensity=pt.intensity,_t.shadowBias=pt.bias,_t.shadowNormalBias=pt.normalBias,_t.shadowRadius=pt.radius,_t.shadowMapSize=pt.mapSize,s.spotShadow[O]=_t,s.spotShadowMap[O]=ft,P++}O++}else if(j.isRectAreaLight){const ot=e.get(j);ot.color.copy($).multiplyScalar(W),ot.halfWidth.set(j.width*.5,0,0),ot.halfHeight.set(0,j.height*.5,0),s.rectArea[X]=ot,X++}else if(j.isPointLight){const ot=e.get(j);if(ot.color.copy(j.color).multiplyScalar(j.intensity),ot.distance=j.distance,ot.decay=j.decay,j.castShadow){const pt=j.shadow,_t=a.get(j);_t.shadowIntensity=pt.intensity,_t.shadowBias=pt.bias,_t.shadowNormalBias=pt.normalBias,_t.shadowRadius=pt.radius,_t.shadowMapSize=pt.mapSize,_t.shadowCameraNear=pt.camera.near,_t.shadowCameraFar=pt.camera.far,s.pointShadow[S]=_t,s.pointShadowMap[S]=ft,s.pointShadowMatrix[S]=j.shadow.matrix,U++}s.point[S]=ot,S++}else if(j.isHemisphereLight){const ot=e.get(j);ot.skyColor.copy(j.color).multiplyScalar(W),ot.groundColor.copy(j.groundColor).multiplyScalar(W),s.hemi[C]=ot,C++}}X>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Vt.LTC_FLOAT_1,s.rectAreaLTC2=Vt.LTC_FLOAT_2):(s.rectAreaLTC1=Vt.LTC_HALF_1,s.rectAreaLTC2=Vt.LTC_HALF_2)),s.ambient[0]=x,s.ambient[1]=v,s.ambient[2]=_;const q=s.hash;(q.sunLength!==E||q.directionalLength!==M||q.pointLength!==S||q.spotLength!==O||q.rectAreaLength!==X||q.hemiLength!==C||q.numSunShadows!==R||q.numDirectionalShadows!==N||q.numPointShadows!==U||q.numSpotShadows!==P||q.numSpotMaps!==b||q.numLightProbes!==H)&&(s.sun.length=E,s.directional.length=M,s.spot.length=O,s.rectArea.length=X,s.point.length=S,s.hemi.length=C,s.sunShadow.length=R,s.sunShadowMap.length=R,s.sunShadowMatrix.length=w,s.sunShadowCascade.length=w,s.directionalShadow.length=N,s.directionalShadowMap.length=N,s.directionalShadowMatrix.length=N,s.pointShadow.length=U,s.pointShadowMap.length=U,s.pointShadowMatrix.length=U,s.spotShadow.length=P,s.spotShadowMap.length=P,s.spotLightMatrix.length=P+b-L,s.spotLightMap.length=b,s.numSpotLightShadowsWithMaps=L,s.numLightProbes=H,q.sunLength=E,q.directionalLength=M,q.pointLength=S,q.spotLength=O,q.rectAreaLength=X,q.hemiLength=C,q.numSunShadows=R,q.numDirectionalShadows=N,q.numPointShadows=U,q.numSpotShadows=P,q.numSpotMaps=b,q.numLightProbes=H,s.version=f3++)}function m(p,x){let v=0,_=0,E=0,R=0,w=0,M=0;const S=x.matrixWorldInverse;for(let O=0,X=p.length;O<X;O++){const C=p[O];if(C.isSunLight){const N=s.sun[v];N.direction.setFromMatrixPosition(C.matrixWorld),N.direction.transformDirection(S),v++}else if(C.isDirectionalLight){const N=s.directional[_];N.direction.setFromMatrixPosition(C.matrixWorld),u.setFromMatrixPosition(C.target.matrixWorld),N.direction.sub(u),N.direction.transformDirection(S),_++}else if(C.isSpotLight){const N=s.spot[R];N.position.setFromMatrixPosition(C.matrixWorld),N.position.applyMatrix4(S),N.direction.setFromMatrixPosition(C.matrixWorld),u.setFromMatrixPosition(C.target.matrixWorld),N.direction.sub(u),N.direction.transformDirection(S),R++}else if(C.isRectAreaLight){const N=s.rectArea[w];N.position.setFromMatrixPosition(C.matrixWorld),N.position.applyMatrix4(S),d.identity(),f.copy(C.matrixWorld),f.premultiply(S),d.extractRotation(f),N.halfWidth.set(C.width*.5,0,0),N.halfHeight.set(0,C.height*.5,0),N.halfWidth.applyMatrix4(d),N.halfHeight.applyMatrix4(d),w++}else if(C.isPointLight){const N=s.point[E];N.position.setFromMatrixPosition(C.matrixWorld),N.position.applyMatrix4(S),E++}else if(C.isHemisphereLight){const N=s.hemi[M];N.direction.setFromMatrixPosition(C.matrixWorld),N.direction.transformDirection(S),M++}}}return{setup:h,setupView:m,state:s}}function fx(o){const e=new h3(o),a=[],s=[],u=[];function f(_){v.camera=_,a.length=0,s.length=0,u.length=0}function d(_){a.push(_)}function h(_){s.push(_)}function m(_){u.push(_)}function p(){e.setup(a)}function x(_){e.setupView(a,_)}const v={lightsArray:a,shadowsArray:s,lightProbeGridArray:u,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:f,state:v,setupLights:p,setupLightsView:x,pushLight:d,pushShadow:h,pushLightProbeGrid:m}}function p3(o){let e=new WeakMap;function a(u,f=0){const d=e.get(u);let h;return d===void 0?(h=new fx(o),e.set(u,[h])):f>=d.length?(h=new fx(o),d.push(h)):h=d[f],h}function s(){e=new WeakMap}return{get:a,dispose:s}}const m3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,g3=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,_3=[new ht(1,0,0),new ht(-1,0,0),new ht(0,1,0),new ht(0,-1,0),new ht(0,0,1),new ht(0,0,-1)],v3=[new ht(0,-1,0),new ht(0,-1,0),new ht(0,0,1),new ht(0,0,-1),new ht(0,-1,0),new ht(0,-1,0)],dx=new cn,fl=new ht,qh=new ht;function x3(o,e,a){let s=new Hx;const u=new Fe,f=new Fe,d=new ln,h=new Db,m=new Ub,p={},x=a.maxTextureSize,v={[Zr]:jn,[jn]:Zr,[Na]:Na},_=new ua({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:m3,fragmentShader:g3}),E=_.clone();E.defines.HORIZONTAL_PASS=1;const R=new Ai;R.setAttribute("position",new Fi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new la(R,_),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sc;let S=this.type;this.render=function(U,P,b){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||U.length===0)return;this.type===iE&&(oe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Sc);const L=o.getRenderTarget(),H=o.getActiveCubeFace(),q=o.getActiveMipmapLevel(),tt=o.state;tt.setBlending(Ua),tt.buffers.depth.getReversed()===!0?tt.buffers.color.setClear(0,0,0,0):tt.buffers.color.setClear(1,1,1,1),tt.buffers.depth.setTest(!0),tt.setScissorTest(!1);const ut=S!==this.type;ut&&P.traverse(function(j){j.material&&(Array.isArray(j.material)?j.material.forEach($=>$.needsUpdate=!0):j.material.needsUpdate=!0)});for(let j=0,$=U.length;j<$;j++){const W=U[j],k=W.shadow;if(k===void 0){oe("WebGLShadowMap:",W,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;u.copy(k.mapSize);const ft=k.getFrameExtents();u.multiply(ft),f.copy(k.mapSize),(u.x>x||u.y>x)&&(u.x>x&&(f.x=Math.floor(x/ft.x),u.x=f.x*ft.x,k.mapSize.x=f.x),u.y>x&&(f.y=Math.floor(x/ft.y),u.y=f.y*ft.y,k.mapSize.y=f.y));const ot=o.state.buffers.depth.getReversed();if(k.camera._reversedDepth=ot,k.map===null||ut===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===hl){if(W.isPointLight){oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new Bi(u.x,u.y,{format:jr,type:oa,minFilter:In,magFilter:In,generateMipmaps:!1}),k.map.texture.name=W.name+".shadowMap",k.map.depthTexture=new yl(u.x,u.y,ia),k.map.depthTexture.name=W.name+".shadowMapDepth",k.map.depthTexture.format=Oa,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Un,k.map.depthTexture.magFilter=Un}else W.isPointLight?(k.map=new Kx(u.x),k.map.depthTexture=new Tb(u.x,sa)):(k.map=new Bi(u.x,u.y),k.map.depthTexture=new yl(u.x,u.y,sa)),k.map.depthTexture.name=W.name+".shadowMap",k.map.depthTexture.format=Oa,this.type===Sc?(k.map.depthTexture.compareFunction=ot?Yp:qp,k.map.depthTexture.minFilter=In,k.map.depthTexture.magFilter=In):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Un,k.map.depthTexture.magFilter=Un);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==u.x||k.map.height!==u.y)&&k.map.setSize(u.x,u.y);const pt=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();W.isPointLight!==!0&&k.updateMatrices(W,b);for(let _t=0;_t<pt;_t++){const Bt=k.getCamera(_t);if(W.isPointLight){const Nt=k.camera,z=k.matrix,mt=W.distance||Nt.far;mt!==Nt.far&&(Nt.far=mt,Nt.updateProjectionMatrix()),fl.setFromMatrixPosition(W.matrixWorld),Nt.position.copy(fl),qh.copy(Nt.position),qh.add(_3[_t]),Nt.up.copy(v3[_t]),Nt.lookAt(qh),Nt.updateMatrixWorld(),z.makeTranslation(-fl.x,-fl.y,-fl.z),dx.multiplyMatrices(Nt.projectionMatrix,Nt.matrixWorldInverse),k._frustum.setFromProjectionMatrix(dx,Nt.coordinateSystem,Nt.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)o.setRenderTarget(k.map,_t),o.clear();else{_t===0&&(o.setRenderTarget(k.map),o.clear());const Nt=k.getViewport(_t);d.set(f.x*Nt.x,f.y*Nt.y,f.x*Nt.z,f.y*Nt.w),tt.viewport(d)}s=k.getFrustum(_t),C(P,b,Bt,W,this.type)}k.isPointLightShadow!==!0&&this.type===hl&&O(k,b),k.needsUpdate=!1}S=this.type,M.needsUpdate=!1,o.setRenderTarget(L,H,q)};function O(U,P){const b=e.update(w);_.defines.VSM_SAMPLES!==U.blurSamples&&(_.defines.VSM_SAMPLES=U.blurSamples,E.defines.VSM_SAMPLES=U.blurSamples,_.needsUpdate=!0,E.needsUpdate=!0),U.mapPass===null?U.mapPass=new Bi(u.x,u.y,{format:jr,type:oa}):(U.mapPass.width!==U.map.width||U.mapPass.height!==U.map.height)&&U.mapPass.setSize(U.map.width,U.map.height),_.uniforms.shadow_pass.value=U.map.depthTexture,_.uniforms.resolution.value.set(U.map.width,U.map.height),_.uniforms.radius.value=U.radius,o.setRenderTarget(U.mapPass),o.clear(),o.renderBufferDirect(P,null,b,_,w,null),E.uniforms.shadow_pass.value=U.mapPass.texture,E.uniforms.resolution.value.set(U.map.width,U.map.height),E.uniforms.radius.value=U.radius,o.setRenderTarget(U.map),o.clear(),o.renderBufferDirect(P,null,b,E,w,null)}function X(U,P,b,L){let H=null;const q=b.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(q!==void 0)H=q;else if(H=b.isPointLight===!0?m:h,o.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const tt=H.uuid,ut=P.uuid;let j=p[tt];j===void 0&&(j={},p[tt]=j);let $=j[ut];$===void 0&&($=H.clone(),j[ut]=$,P.addEventListener("dispose",N)),H=$}if(H.visible=P.visible,H.wireframe=P.wireframe,L===hl?H.side=P.shadowSide!==null?P.shadowSide:P.side:H.side=P.shadowSide!==null?P.shadowSide:v[P.side],H.alphaMap=P.alphaMap,H.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,H.map=P.map,H.clipShadows=P.clipShadows,H.clippingPlanes=P.clippingPlanes,H.clipIntersection=P.clipIntersection,H.displacementMap=P.displacementMap,H.displacementScale=P.displacementScale,H.displacementBias=P.displacementBias,H.wireframeLinewidth=P.wireframeLinewidth,H.linewidth=P.linewidth,b.isPointLight===!0&&H.isMeshDistanceMaterial===!0){const tt=o.properties.get(H);tt.light=b}return H}function C(U,P,b,L,H){if(U.visible===!1)return;if(U.layers.test(P.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&H===hl)&&(!U.frustumCulled||U.intersectsFrustum(s))){U.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,U.matrixWorld);const ut=e.update(U),j=U.material;if(Array.isArray(j)){const $=ut.groups;for(let W=0,k=$.length;W<k;W++){const ft=$[W],ot=j[ft.materialIndex];if(ot&&ot.visible){const pt=X(U,ot,L,H);U.onBeforeShadow(o,U,P,b,ut,pt,ft),o.renderBufferDirect(b,null,ut,pt,U,ft),U.onAfterShadow(o,U,P,b,ut,pt,ft)}}}else if(j.visible){const $=X(U,j,L,H);U.onBeforeShadow(o,U,P,b,ut,$,null),o.renderBufferDirect(b,null,ut,$,U,null),U.onAfterShadow(o,U,P,b,ut,$,null)}}const tt=U.children;for(let ut=0,j=tt.length;ut<j;ut++)C(tt[ut],P,b,L,H)}function N(U){U.target.removeEventListener("dispose",N);for(const b in p){const L=p[b],H=U.target.uuid;H in L&&(L[H].dispose(),delete L[H])}}}function S3(o,e){function a(){let G=!1;const Dt=new ln;let yt=null;const Ot=new ln(0,0,0,0);return{setMask:function(kt){yt!==kt&&!G&&(o.colorMask(kt,kt,kt,kt),yt=kt)},setLocked:function(kt){G=kt},setClear:function(kt,bt,Jt,Xt,we){we===!0&&(kt*=Xt,bt*=Xt,Jt*=Xt),Dt.set(kt,bt,Jt,Xt),Ot.equals(Dt)===!1&&(o.clearColor(kt,bt,Jt,Xt),Ot.copy(Dt))},reset:function(){G=!1,yt=null,Ot.set(-1,0,0,0)}}}function s(){let G=!1,Dt=!1,yt=null,Ot=null,kt=null;return{setReversed:function(bt){if(Dt!==bt){const Jt=e.get("EXT_clip_control");bt?Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.ZERO_TO_ONE_EXT):Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.NEGATIVE_ONE_TO_ONE_EXT),Dt=bt;const Xt=kt;kt=null,this.setClear(Xt)}},getReversed:function(){return Dt},setTest:function(bt){bt?dt(o.DEPTH_TEST):At(o.DEPTH_TEST)},setMask:function(bt){yt!==bt&&!G&&(o.depthMask(bt),yt=bt)},setFunc:function(bt){if(Dt&&(bt=BE[bt]),Ot!==bt){switch(bt){case Kh:o.depthFunc(o.NEVER);break;case jh:o.depthFunc(o.ALWAYS);break;case Qh:o.depthFunc(o.LESS);break;case vl:o.depthFunc(o.LEQUAL);break;case Jh:o.depthFunc(o.EQUAL);break;case $h:o.depthFunc(o.GEQUAL);break;case tp:o.depthFunc(o.GREATER);break;case ep:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Ot=bt}},setLocked:function(bt){G=bt},setClear:function(bt){kt!==bt&&(kt=bt,Dt&&(bt=1-bt),o.clearDepth(bt))},reset:function(){G=!1,yt=null,Ot=null,kt=null,Dt=!1}}}function u(){let G=!1,Dt=null,yt=null,Ot=null,kt=null,bt=null,Jt=null,Xt=null,we=null;return{setTest:function(ce){G||(ce?dt(o.STENCIL_TEST):At(o.STENCIL_TEST))},setMask:function(ce){Dt!==ce&&!G&&(o.stencilMask(ce),Dt=ce)},setFunc:function(ce,Jn,ci){(yt!==ce||Ot!==Jn||kt!==ci)&&(o.stencilFunc(ce,Jn,ci),yt=ce,Ot=Jn,kt=ci)},setOp:function(ce,Jn,ci){(bt!==ce||Jt!==Jn||Xt!==ci)&&(o.stencilOp(ce,Jn,ci),bt=ce,Jt=Jn,Xt=ci)},setLocked:function(ce){G=ce},setClear:function(ce){we!==ce&&(o.clearStencil(ce),we=ce)},reset:function(){G=!1,Dt=null,yt=null,Ot=null,kt=null,bt=null,Jt=null,Xt=null,we=null}}}const f=new a,d=new s,h=new u,m=new WeakMap,p=new WeakMap;let x={},v={},_={},E=new WeakMap,R=[],w=null,M=!1,S=null,O=null,X=null,C=null,N=null,U=null,P=null,b=new Be(0,0,0),L=0,H=!1,q=null,tt=null,ut=null,j=null,$=null;const W=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,ft=0;const ot=o.getParameter(o.VERSION);ot.indexOf("WebGL")!==-1?(ft=parseFloat(/^WebGL (\d)/.exec(ot)[1]),k=ft>=1):ot.indexOf("OpenGL ES")!==-1&&(ft=parseFloat(/^OpenGL ES (\d)/.exec(ot)[1]),k=ft>=2);let pt=null,_t={};const Bt=o.getParameter(o.SCISSOR_BOX),Nt=o.getParameter(o.VIEWPORT),z=new ln().fromArray(Bt),mt=new ln().fromArray(Nt);function Tt(G,Dt,yt,Ot){const kt=new Uint8Array(4),bt=o.createTexture();o.bindTexture(G,bt),o.texParameteri(G,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(G,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Jt=0;Jt<yt;Jt++)G===o.TEXTURE_3D||G===o.TEXTURE_2D_ARRAY?o.texImage3D(Dt,0,o.RGBA,1,1,Ot,0,o.RGBA,o.UNSIGNED_BYTE,kt):o.texImage2D(Dt+Jt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,kt);return bt}const Z={};Z[o.TEXTURE_2D]=Tt(o.TEXTURE_2D,o.TEXTURE_2D,1),Z[o.TEXTURE_CUBE_MAP]=Tt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[o.TEXTURE_2D_ARRAY]=Tt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Z[o.TEXTURE_3D]=Tt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),f.setClear(0,0,0,1),d.setClear(1),h.setClear(0),dt(o.DEPTH_TEST),d.setFunc(vl),te(!1),ie(gv),dt(o.CULL_FACE),me(Ua);function dt(G){x[G]!==!0&&(o.enable(G),x[G]=!0)}function At(G){x[G]!==!1&&(o.disable(G),x[G]=!1)}function wt(G,Dt){return _[G]!==Dt?(o.bindFramebuffer(G,Dt),_[G]=Dt,G===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=Dt),G===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=Dt),!0):!1}function gt(G,Dt){let yt=R,Ot=!1;if(G){yt=E.get(Dt),yt===void 0&&(yt=[],E.set(Dt,yt));const kt=G.textures;if(yt.length!==kt.length||yt[0]!==o.COLOR_ATTACHMENT0){for(let bt=0,Jt=kt.length;bt<Jt;bt++)yt[bt]=o.COLOR_ATTACHMENT0+bt;yt.length=kt.length,Ot=!0}}else yt[0]!==o.BACK&&(yt[0]=o.BACK,Ot=!0);Ot&&o.drawBuffers(yt)}function Rt(G){return w!==G?(o.useProgram(G),w=G,!0):!1}const be={[$s]:o.FUNC_ADD,[rE]:o.FUNC_SUBTRACT,[sE]:o.FUNC_REVERSE_SUBTRACT};be[oE]=o.MIN,be[lE]=o.MAX;const se={[uE]:o.ZERO,[cE]:o.ONE,[fE]:o.SRC_COLOR,[mx]:o.SRC_ALPHA,[_E]:o.SRC_ALPHA_SATURATE,[mE]:o.DST_COLOR,[hE]:o.DST_ALPHA,[dE]:o.ONE_MINUS_SRC_COLOR,[gx]:o.ONE_MINUS_SRC_ALPHA,[gE]:o.ONE_MINUS_DST_COLOR,[pE]:o.ONE_MINUS_DST_ALPHA,[vE]:o.CONSTANT_COLOR,[xE]:o.ONE_MINUS_CONSTANT_COLOR,[SE]:o.CONSTANT_ALPHA,[ME]:o.ONE_MINUS_CONSTANT_ALPHA};function me(G,Dt,yt,Ot,kt,bt,Jt,Xt,we,ce){if(G===Ua){M===!0&&(At(o.BLEND),M=!1);return}if(M===!1&&(dt(o.BLEND),M=!0),G!==aE){if(G!==S||ce!==H){if((O!==$s||N!==$s)&&(o.blendEquation(o.FUNC_ADD),O=$s,N=$s),ce)switch(G){case ml:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Zh:o.blendFunc(o.ONE,o.ONE);break;case _v:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case vv:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Pe("WebGLState: Invalid blending: ",G);break}else switch(G){case ml:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Zh:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case _v:Pe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case vv:Pe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pe("WebGLState: Invalid blending: ",G);break}X=null,C=null,U=null,P=null,b.set(0,0,0),L=0,S=G,H=ce}return}kt=kt||Dt,bt=bt||yt,Jt=Jt||Ot,(Dt!==O||kt!==N)&&(o.blendEquationSeparate(be[Dt],be[kt]),O=Dt,N=kt),(yt!==X||Ot!==C||bt!==U||Jt!==P)&&(o.blendFuncSeparate(se[yt],se[Ot],se[bt],se[Jt]),X=yt,C=Ot,U=bt,P=Jt),(Xt.equals(b)===!1||we!==L)&&(o.blendColor(Xt.r,Xt.g,Xt.b,we),b.copy(Xt),L=we),S=G,H=!1}function _e(G,Dt){G.side===Na?At(o.CULL_FACE):dt(o.CULL_FACE);let yt=G.side===jn;Dt&&(yt=!yt),te(yt),G.blending===ml&&G.transparent===!1?me(Ua):me(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),d.setFunc(G.depthFunc),d.setTest(G.depthTest),d.setMask(G.depthWrite),f.setMask(G.colorWrite);const Ot=G.stencilWrite;h.setTest(Ot),Ot&&(h.setMask(G.stencilWriteMask),h.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),h.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),fn(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?dt(o.SAMPLE_ALPHA_TO_COVERAGE):At(o.SAMPLE_ALPHA_TO_COVERAGE)}function te(G){q!==G&&(G?o.frontFace(o.CW):o.frontFace(o.CCW),q=G)}function ie(G){G!==eE?(dt(o.CULL_FACE),G!==tt&&(G===gv?o.cullFace(o.BACK):G===nE?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):At(o.CULL_FACE),tt=G}function Ve(G){G!==ut&&(k&&o.lineWidth(G),ut=G)}function fn(G,Dt,yt){G?(dt(o.POLYGON_OFFSET_FILL),(j!==Dt||$!==yt)&&(j=Dt,$=yt,d.getReversed()&&(Dt=-Dt),o.polygonOffset(Dt,yt))):At(o.POLYGON_OFFSET_FILL)}function Oe(G){G?dt(o.SCISSOR_TEST):At(o.SCISSOR_TEST)}function $e(G){G===void 0&&(G=o.TEXTURE0+W-1),pt!==G&&(o.activeTexture(G),pt=G)}function V(G,Dt,yt){yt===void 0&&(pt===null?yt=o.TEXTURE0+W-1:yt=pt);let Ot=_t[yt];Ot===void 0&&(Ot={type:void 0,texture:void 0},_t[yt]=Ot),(Ot.type!==G||Ot.texture!==Dt)&&(pt!==yt&&(o.activeTexture(yt),pt=yt),o.bindTexture(G,Dt||Z[G]),Ot.type=G,Ot.texture=Dt)}function en(){const G=_t[pt];G!==void 0&&G.type!==void 0&&(o.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function Le(){try{o.compressedTexImage2D(...arguments)}catch(G){Pe("WebGLState:",G)}}function D(){try{o.compressedTexImage3D(...arguments)}catch(G){Pe("WebGLState:",G)}}function y(){try{o.texSubImage2D(...arguments)}catch(G){Pe("WebGLState:",G)}}function J(){try{o.texSubImage3D(...arguments)}catch(G){Pe("WebGLState:",G)}}function st(){try{o.compressedTexSubImage2D(...arguments)}catch(G){Pe("WebGLState:",G)}}function vt(){try{o.compressedTexSubImage3D(...arguments)}catch(G){Pe("WebGLState:",G)}}function Ct(){try{o.texStorage2D(...arguments)}catch(G){Pe("WebGLState:",G)}}function Lt(){try{o.texStorage3D(...arguments)}catch(G){Pe("WebGLState:",G)}}function xt(){try{o.texImage2D(...arguments)}catch(G){Pe("WebGLState:",G)}}function Et(){try{o.texImage3D(...arguments)}catch(G){Pe("WebGLState:",G)}}function Ut(G){return v[G]!==void 0?v[G]:o.getParameter(G)}function $t(G,Dt){v[G]!==Dt&&(o.pixelStorei(G,Dt),v[G]=Dt)}function Ft(G){z.equals(G)===!1&&(o.scissor(G.x,G.y,G.z,G.w),z.copy(G))}function zt(G){mt.equals(G)===!1&&(o.viewport(G.x,G.y,G.z,G.w),mt.copy(G))}function Wt(G,Dt){let yt=p.get(Dt);yt===void 0&&(yt=new WeakMap,p.set(Dt,yt));let Ot=yt.get(G);Ot===void 0&&(Ot=o.getUniformBlockIndex(Dt,G.name),yt.set(G,Ot))}function ne(G,Dt){const Ot=p.get(Dt).get(G);m.get(Dt)!==Ot&&(o.uniformBlockBinding(Dt,Ot,G.__bindingPointIndex),m.set(Dt,Ot))}function ue(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),o.pixelStorei(o.PACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!1),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.BROWSER_DEFAULT_WEBGL),o.pixelStorei(o.PACK_ROW_LENGTH,0),o.pixelStorei(o.PACK_SKIP_PIXELS,0),o.pixelStorei(o.PACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_ROW_LENGTH,0),o.pixelStorei(o.UNPACK_IMAGE_HEIGHT,0),o.pixelStorei(o.UNPACK_SKIP_PIXELS,0),o.pixelStorei(o.UNPACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_SKIP_IMAGES,0),x={},v={},pt=null,_t={},_={},E=new WeakMap,R=[],w=null,M=!1,S=null,O=null,X=null,C=null,N=null,U=null,P=null,b=new Be(0,0,0),L=0,H=!1,q=null,tt=null,ut=null,j=null,$=null,z.set(0,0,o.canvas.width,o.canvas.height),mt.set(0,0,o.canvas.width,o.canvas.height),f.reset(),d.reset(),h.reset()}return{buffers:{color:f,depth:d,stencil:h},enable:dt,disable:At,bindFramebuffer:wt,drawBuffers:gt,useProgram:Rt,setBlending:me,setMaterial:_e,setFlipSided:te,setCullFace:ie,setLineWidth:Ve,setPolygonOffset:fn,setScissorTest:Oe,activeTexture:$e,bindTexture:V,unbindTexture:en,compressedTexImage2D:Le,compressedTexImage3D:D,texImage2D:xt,texImage3D:Et,pixelStorei:$t,getParameter:Ut,updateUBOMapping:Wt,uniformBlockBinding:ne,texStorage2D:Ct,texStorage3D:Lt,texSubImage2D:y,texSubImage3D:J,compressedTexSubImage2D:st,compressedTexSubImage3D:vt,scissor:Ft,viewport:zt,reset:ue}}function M3(o,e,a,s,u,f,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Fe,x=new WeakMap,v=new Set;let _;const E=new WeakMap;let R=!1;try{R=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(D,y){return R?new OffscreenCanvas(D,y):Dc("canvas")}function M(D,y,J){let st=1;const vt=Le(D);if((vt.width>J||vt.height>J)&&(st=J/Math.max(vt.width,vt.height)),st<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const Ct=Math.floor(st*vt.width),Lt=Math.floor(st*vt.height);_===void 0&&(_=w(Ct,Lt));const xt=y?w(Ct,Lt):_;return xt.width=Ct,xt.height=Lt,xt.getContext("2d").drawImage(D,0,0,Ct,Lt),oe("WebGLRenderer: Texture has been resized from ("+vt.width+"x"+vt.height+") to ("+Ct+"x"+Lt+")."),xt}else return"data"in D&&oe("WebGLRenderer: Image in DataTexture is too big ("+vt.width+"x"+vt.height+")."),D;return D}function S(D){return D.generateMipmaps}function O(D){o.generateMipmap(D)}function X(D){return D.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?o.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function C(D,y,J,st,vt,Ct=!1){if(D!==null){if(o[D]!==void 0)return o[D];oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Lt;st&&(Lt=e.get("EXT_texture_norm16"),Lt||oe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let xt=y;if(y===o.RED&&(J===o.FLOAT&&(xt=o.R32F),J===o.HALF_FLOAT&&(xt=o.R16F),J===o.UNSIGNED_BYTE&&(xt=o.R8),J===o.UNSIGNED_SHORT&&Lt&&(xt=Lt.R16_EXT),J===o.SHORT&&Lt&&(xt=Lt.R16_SNORM_EXT)),y===o.RED_INTEGER&&(J===o.UNSIGNED_BYTE&&(xt=o.R8UI),J===o.UNSIGNED_SHORT&&(xt=o.R16UI),J===o.UNSIGNED_INT&&(xt=o.R32UI),J===o.BYTE&&(xt=o.R8I),J===o.SHORT&&(xt=o.R16I),J===o.INT&&(xt=o.R32I)),y===o.RG&&(J===o.FLOAT&&(xt=o.RG32F),J===o.HALF_FLOAT&&(xt=o.RG16F),J===o.UNSIGNED_BYTE&&(xt=o.RG8),J===o.UNSIGNED_SHORT&&Lt&&(xt=Lt.RG16_EXT),J===o.SHORT&&Lt&&(xt=Lt.RG16_SNORM_EXT)),y===o.RG_INTEGER&&(J===o.UNSIGNED_BYTE&&(xt=o.RG8UI),J===o.UNSIGNED_SHORT&&(xt=o.RG16UI),J===o.UNSIGNED_INT&&(xt=o.RG32UI),J===o.BYTE&&(xt=o.RG8I),J===o.SHORT&&(xt=o.RG16I),J===o.INT&&(xt=o.RG32I)),y===o.RGB_INTEGER&&(J===o.UNSIGNED_BYTE&&(xt=o.RGB8UI),J===o.UNSIGNED_SHORT&&(xt=o.RGB16UI),J===o.UNSIGNED_INT&&(xt=o.RGB32UI),J===o.BYTE&&(xt=o.RGB8I),J===o.SHORT&&(xt=o.RGB16I),J===o.INT&&(xt=o.RGB32I)),y===o.RGBA_INTEGER&&(J===o.UNSIGNED_BYTE&&(xt=o.RGBA8UI),J===o.UNSIGNED_SHORT&&(xt=o.RGBA16UI),J===o.UNSIGNED_INT&&(xt=o.RGBA32UI),J===o.BYTE&&(xt=o.RGBA8I),J===o.SHORT&&(xt=o.RGBA16I),J===o.INT&&(xt=o.RGBA32I)),y===o.RGB&&(J===o.UNSIGNED_SHORT&&Lt&&(xt=Lt.RGB16_EXT),J===o.SHORT&&Lt&&(xt=Lt.RGB16_SNORM_EXT),J===o.UNSIGNED_INT_5_9_9_9_REV&&(xt=o.RGB9_E5),J===o.UNSIGNED_INT_10F_11F_11F_REV&&(xt=o.R11F_G11F_B10F)),y===o.RGBA){const Et=Ct?wc:De.getTransfer(vt);J===o.FLOAT&&(xt=o.RGBA32F),J===o.HALF_FLOAT&&(xt=o.RGBA16F),J===o.UNSIGNED_BYTE&&(xt=Et===qe?o.SRGB8_ALPHA8:o.RGBA8),J===o.UNSIGNED_SHORT&&Lt&&(xt=Lt.RGBA16_EXT),J===o.SHORT&&Lt&&(xt=Lt.RGBA16_SNORM_EXT),J===o.UNSIGNED_SHORT_4_4_4_4&&(xt=o.RGBA4),J===o.UNSIGNED_SHORT_5_5_5_1&&(xt=o.RGB5_A1)}return(xt===o.R16F||xt===o.R32F||xt===o.RG16F||xt===o.RG32F||xt===o.RGBA16F||xt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),xt}function N(D,y){let J;return D?y===null||y===sa||y===Sl?J=o.DEPTH24_STENCIL8:y===ia?J=o.DEPTH32F_STENCIL8:y===xl&&(J=o.DEPTH24_STENCIL8,oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===sa||y===Sl?J=o.DEPTH_COMPONENT24:y===ia?J=o.DEPTH_COMPONENT32F:y===xl&&(J=o.DEPTH_COMPONENT16),J}function U(D,y){return S(D)===!0||D.isFramebufferTexture&&D.minFilter!==Un&&D.minFilter!==In?Math.log2(Math.max(y.width,y.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?y.mipmaps.length:1}function P(D){const y=D.target;y.removeEventListener("dispose",P),L(y),y.isVideoTexture&&x.delete(y),y.isHTMLTexture&&v.delete(y)}function b(D){const y=D.target;y.removeEventListener("dispose",b),q(y)}function L(D){const y=s.get(D);if(y.__webglInit===void 0)return;const J=D.source,st=E.get(J);if(st){const vt=st[y.__cacheKey];vt.usedTimes--,vt.usedTimes===0&&H(D),Object.keys(st).length===0&&E.delete(J)}s.remove(D)}function H(D){const y=s.get(D);o.deleteTexture(y.__webglTexture);const J=D.source,st=E.get(J);delete st[y.__cacheKey],d.memory.textures--}function q(D){const y=s.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),s.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let st=0;st<6;st++){if(Array.isArray(y.__webglFramebuffer[st]))for(let vt=0;vt<y.__webglFramebuffer[st].length;vt++)o.deleteFramebuffer(y.__webglFramebuffer[st][vt]);else o.deleteFramebuffer(y.__webglFramebuffer[st]);y.__webglDepthbuffer&&o.deleteRenderbuffer(y.__webglDepthbuffer[st])}else{if(Array.isArray(y.__webglFramebuffer))for(let st=0;st<y.__webglFramebuffer.length;st++)o.deleteFramebuffer(y.__webglFramebuffer[st]);else o.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&o.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&o.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let st=0;st<y.__webglColorRenderbuffer.length;st++)y.__webglColorRenderbuffer[st]&&o.deleteRenderbuffer(y.__webglColorRenderbuffer[st]);y.__webglDepthRenderbuffer&&o.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const J=D.textures;for(let st=0,vt=J.length;st<vt;st++){const Ct=s.get(J[st]);Ct.__webglTexture&&(o.deleteTexture(Ct.__webglTexture),d.memory.textures--),s.remove(J[st])}s.remove(D)}let tt=0;function ut(){tt=0}function j(){return tt}function $(D){tt=D}function W(){const D=tt;return D>=u.maxTextures&&oe("WebGLTextures: Trying to use "+(D+1)+" texture units while this GPU supports only "+u.maxTextures),tt+=1,D}function k(D){const y=[];return y.push(D.wrapS),y.push(D.wrapT),y.push(D.wrapR||0),y.push(D.magFilter),y.push(D.minFilter),y.push(D.anisotropy),y.push(D.internalFormat),y.push(D.format),y.push(D.type),y.push(D.generateMipmaps),y.push(D.premultiplyAlpha),y.push(D.flipY),y.push(D.unpackAlignment),y.push(D.colorSpace),y.join()}function ft(D,y){const J=s.get(D);if(D.isVideoTexture&&V(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&J.__version!==D.version){const st=D.image;if(st===null)oe("WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)oe("WebGLRenderer: Texture marked for update but image is incomplete");else{At(J,D,y);return}}else D.isExternalTexture&&(J.__webglTexture=D.sourceTexture?D.sourceTexture:null);a.bindTexture(o.TEXTURE_2D,J.__webglTexture,o.TEXTURE0+y)}function ot(D,y){const J=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&J.__version!==D.version){At(J,D,y);return}else D.isExternalTexture&&(J.__webglTexture=D.sourceTexture?D.sourceTexture:null);a.bindTexture(o.TEXTURE_2D_ARRAY,J.__webglTexture,o.TEXTURE0+y)}function pt(D,y){const J=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&J.__version!==D.version){At(J,D,y);return}a.bindTexture(o.TEXTURE_3D,J.__webglTexture,o.TEXTURE0+y)}function _t(D,y){const J=s.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&J.__version!==D.version){wt(J,D,y);return}a.bindTexture(o.TEXTURE_CUBE_MAP,J.__webglTexture,o.TEXTURE0+y)}const Bt={[np]:o.REPEAT,[Da]:o.CLAMP_TO_EDGE,[ip]:o.MIRRORED_REPEAT},Nt={[Un]:o.NEAREST,[bE]:o.NEAREST_MIPMAP_NEAREST,[Zu]:o.NEAREST_MIPMAP_LINEAR,[In]:o.LINEAR,[vh]:o.LINEAR_MIPMAP_NEAREST,[qr]:o.LINEAR_MIPMAP_LINEAR},z={[CE]:o.NEVER,[LE]:o.ALWAYS,[wE]:o.LESS,[qp]:o.LEQUAL,[NE]:o.EQUAL,[Yp]:o.GEQUAL,[DE]:o.GREATER,[UE]:o.NOTEQUAL};function mt(D,y){if(y.type===ia&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===In||y.magFilter===vh||y.magFilter===Zu||y.magFilter===qr||y.minFilter===In||y.minFilter===vh||y.minFilter===Zu||y.minFilter===qr)&&oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(D,o.TEXTURE_WRAP_S,Bt[y.wrapS]),o.texParameteri(D,o.TEXTURE_WRAP_T,Bt[y.wrapT]),(D===o.TEXTURE_3D||D===o.TEXTURE_2D_ARRAY)&&o.texParameteri(D,o.TEXTURE_WRAP_R,Bt[y.wrapR]),o.texParameteri(D,o.TEXTURE_MAG_FILTER,Nt[y.magFilter]),o.texParameteri(D,o.TEXTURE_MIN_FILTER,Nt[y.minFilter]),y.compareFunction&&(o.texParameteri(D,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(D,o.TEXTURE_COMPARE_FUNC,z[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Un||y.minFilter!==Zu&&y.minFilter!==qr||y.type===ia&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||s.get(y).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");o.texParameterf(D,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,u.getMaxAnisotropy())),s.get(y).__currentAnisotropy=y.anisotropy}}}function Tt(D,y){let J=!1;D.__webglInit===void 0&&(D.__webglInit=!0,y.addEventListener("dispose",P));const st=y.source;let vt=E.get(st);vt===void 0&&(vt={},E.set(st,vt));const Ct=k(y);if(Ct!==D.__cacheKey){vt[Ct]===void 0&&(vt[Ct]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,J=!0),vt[Ct].usedTimes++;const Lt=vt[D.__cacheKey];Lt!==void 0&&(vt[D.__cacheKey].usedTimes--,Lt.usedTimes===0&&H(y)),D.__cacheKey=Ct,D.__webglTexture=vt[Ct].texture}return J}function Z(D,y,J){return Math.floor(Math.floor(D/J)/y)}function dt(D,y,J,st){const Ct=D.updateRanges;if(Ct.length===0)a.texSubImage2D(o.TEXTURE_2D,0,0,0,y.width,y.height,J,st,y.data);else{Ct.sort(($t,Ft)=>$t.start-Ft.start);let Lt=0;for(let $t=1;$t<Ct.length;$t++){const Ft=Ct[Lt],zt=Ct[$t],Wt=Ft.start+Ft.count,ne=Z(zt.start,y.width,4),ue=Z(Ft.start,y.width,4);zt.start<=Wt+1&&ne===ue&&Z(zt.start+zt.count-1,y.width,4)===ne?Ft.count=Math.max(Ft.count,zt.start+zt.count-Ft.start):(++Lt,Ct[Lt]=zt)}Ct.length=Lt+1;const xt=a.getParameter(o.UNPACK_ROW_LENGTH),Et=a.getParameter(o.UNPACK_SKIP_PIXELS),Ut=a.getParameter(o.UNPACK_SKIP_ROWS);a.pixelStorei(o.UNPACK_ROW_LENGTH,y.width);for(let $t=0,Ft=Ct.length;$t<Ft;$t++){const zt=Ct[$t],Wt=Math.floor(zt.start/4),ne=Math.ceil(zt.count/4),ue=Wt%y.width,G=Math.floor(Wt/y.width),Dt=ne,yt=1;a.pixelStorei(o.UNPACK_SKIP_PIXELS,ue),a.pixelStorei(o.UNPACK_SKIP_ROWS,G),a.texSubImage2D(o.TEXTURE_2D,0,ue,G,Dt,yt,J,st,y.data)}D.clearUpdateRanges(),a.pixelStorei(o.UNPACK_ROW_LENGTH,xt),a.pixelStorei(o.UNPACK_SKIP_PIXELS,Et),a.pixelStorei(o.UNPACK_SKIP_ROWS,Ut)}}function At(D,y,J){let st=o.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(st=o.TEXTURE_2D_ARRAY),y.isData3DTexture&&(st=o.TEXTURE_3D);const vt=Tt(D,y),Ct=y.source;a.bindTexture(st,D.__webglTexture,o.TEXTURE0+J);const Lt=s.get(Ct);if(Ct.version!==Lt.__version||vt===!0){if(a.activeTexture(o.TEXTURE0+J),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const yt=De.getPrimaries(De.workingColorSpace),Ot=y.colorSpace===gr?null:De.getPrimaries(y.colorSpace),kt=y.colorSpace===gr||yt===Ot?o.NONE:o.BROWSER_DEFAULT_WEBGL;a.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,y.flipY),a.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),a.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt)}a.pixelStorei(o.UNPACK_ALIGNMENT,y.unpackAlignment);let Et=M(y.image,!1,u.maxTextureSize);Et=en(y,Et);const Ut=f.convert(y.format,y.colorSpace),$t=f.convert(y.type);let Ft=C(y.internalFormat,Ut,$t,y.normalized,y.colorSpace,y.isVideoTexture);mt(st,y);let zt;const Wt=y.mipmaps,ne=y.isVideoTexture!==!0,ue=Lt.__version===void 0||vt===!0,G=Ct.dataReady,Dt=U(y,Et);if(y.isDepthTexture)Ft=N(y.format===Yr,y.type),ue&&(ne?a.texStorage2D(o.TEXTURE_2D,1,Ft,Et.width,Et.height):a.texImage2D(o.TEXTURE_2D,0,Ft,Et.width,Et.height,0,Ut,$t,null));else if(y.isDataTexture)if(Wt.length>0){ne&&ue&&a.texStorage2D(o.TEXTURE_2D,Dt,Ft,Wt[0].width,Wt[0].height);for(let yt=0,Ot=Wt.length;yt<Ot;yt++)zt=Wt[yt],ne?G&&a.texSubImage2D(o.TEXTURE_2D,yt,0,0,zt.width,zt.height,Ut,$t,zt.data):a.texImage2D(o.TEXTURE_2D,yt,Ft,zt.width,zt.height,0,Ut,$t,zt.data);y.generateMipmaps=!1}else ne?(ue&&a.texStorage2D(o.TEXTURE_2D,Dt,Ft,Et.width,Et.height),G&&dt(y,Et,Ut,$t)):a.texImage2D(o.TEXTURE_2D,0,Ft,Et.width,Et.height,0,Ut,$t,Et.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){ne&&ue&&a.texStorage3D(o.TEXTURE_2D_ARRAY,Dt,Ft,Wt[0].width,Wt[0].height,Et.depth);for(let yt=0,Ot=Wt.length;yt<Ot;yt++)if(zt=Wt[yt],y.format!==zi)if(Ut!==null)if(ne){if(G)if(y.layerUpdates.size>0){const kt=kv(zt.width,zt.height,y.format,y.type);for(const bt of y.layerUpdates){const Jt=zt.data.subarray(bt*kt/zt.data.BYTES_PER_ELEMENT,(bt+1)*kt/zt.data.BYTES_PER_ELEMENT);a.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,bt,zt.width,zt.height,1,Ut,Jt)}}else a.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,0,zt.width,zt.height,Et.depth,Ut,zt.data)}else a.compressedTexImage3D(o.TEXTURE_2D_ARRAY,yt,Ft,zt.width,zt.height,Et.depth,0,zt.data,0,0);else oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ne?G&&a.texSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,0,zt.width,zt.height,Et.depth,Ut,$t,zt.data):a.texImage3D(o.TEXTURE_2D_ARRAY,yt,Ft,zt.width,zt.height,Et.depth,0,Ut,$t,zt.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{ne&&ue&&a.texStorage2D(o.TEXTURE_2D,Dt,Ft,Wt[0].width,Wt[0].height);for(let yt=0,Ot=Wt.length;yt<Ot;yt++)zt=Wt[yt],y.format!==zi?Ut!==null?ne?G&&a.compressedTexSubImage2D(o.TEXTURE_2D,yt,0,0,zt.width,zt.height,Ut,zt.data):a.compressedTexImage2D(o.TEXTURE_2D,yt,Ft,zt.width,zt.height,0,zt.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?G&&a.texSubImage2D(o.TEXTURE_2D,yt,0,0,zt.width,zt.height,Ut,$t,zt.data):a.texImage2D(o.TEXTURE_2D,yt,Ft,zt.width,zt.height,0,Ut,$t,zt.data)}else if(y.isDataArrayTexture)if(ne){if(ue&&a.texStorage3D(o.TEXTURE_2D_ARRAY,Dt,Ft,Et.width,Et.height,Et.depth),G)if(y.layerUpdates.size>0){const yt=kv(Et.width,Et.height,y.format,y.type);for(const Ot of y.layerUpdates){const kt=Et.data.subarray(Ot*yt/Et.data.BYTES_PER_ELEMENT,(Ot+1)*yt/Et.data.BYTES_PER_ELEMENT);a.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Ot,Et.width,Et.height,1,Ut,$t,kt)}y.clearLayerUpdates()}else a.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Et.width,Et.height,Et.depth,Ut,$t,Et.data)}else a.texImage3D(o.TEXTURE_2D_ARRAY,0,Ft,Et.width,Et.height,Et.depth,0,Ut,$t,Et.data);else if(y.isData3DTexture)ne?(ue&&a.texStorage3D(o.TEXTURE_3D,Dt,Ft,Et.width,Et.height,Et.depth),G&&a.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Et.width,Et.height,Et.depth,Ut,$t,Et.data)):a.texImage3D(o.TEXTURE_3D,0,Ft,Et.width,Et.height,Et.depth,0,Ut,$t,Et.data);else if(y.isFramebufferTexture){if(ue)if(ne)a.texStorage2D(o.TEXTURE_2D,Dt,Ft,Et.width,Et.height);else{let yt=Et.width,Ot=Et.height;for(let kt=0;kt<Dt;kt++)a.texImage2D(o.TEXTURE_2D,kt,Ft,yt,Ot,0,Ut,$t,null),yt>>=1,Ot>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in o){const yt=o.canvas;if(yt.hasAttribute("layoutsubtree")||yt.setAttribute("layoutsubtree","true"),Et.parentNode!==yt){yt.appendChild(Et),v.add(y),yt.onpaint=Ot=>{const kt=Ot.changedElements;for(const bt of v)kt.includes(bt.image)&&(bt.needsUpdate=!0)},yt.requestPaint();return}if(o.texElementImage2D.length===3)o.texElementImage2D(o.TEXTURE_2D,o.RGBA8,Et);else{const kt=o.RGBA,bt=o.RGBA,Jt=o.UNSIGNED_BYTE;o.texElementImage2D(o.TEXTURE_2D,0,kt,bt,Jt,Et)}o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE)}}else if(Wt.length>0){if(ne&&ue){const yt=Le(Wt[0]);a.texStorage2D(o.TEXTURE_2D,Dt,Ft,yt.width,yt.height)}for(let yt=0,Ot=Wt.length;yt<Ot;yt++)zt=Wt[yt],ne?G&&a.texSubImage2D(o.TEXTURE_2D,yt,0,0,Ut,$t,zt):a.texImage2D(o.TEXTURE_2D,yt,Ft,Ut,$t,zt);y.generateMipmaps=!1}else if(ne){if(ue){const yt=Le(Et);a.texStorage2D(o.TEXTURE_2D,Dt,Ft,yt.width,yt.height)}G&&a.texSubImage2D(o.TEXTURE_2D,0,0,0,Ut,$t,Et)}else a.texImage2D(o.TEXTURE_2D,0,Ft,Ut,$t,Et);S(y)&&O(st),Lt.__version=Ct.version,y.onUpdate&&y.onUpdate(y)}D.__version=y.version}function wt(D,y,J){if(y.image.length!==6)return;const st=Tt(D,y),vt=y.source;a.bindTexture(o.TEXTURE_CUBE_MAP,D.__webglTexture,o.TEXTURE0+J);const Ct=s.get(vt);if(vt.version!==Ct.__version||st===!0){a.activeTexture(o.TEXTURE0+J);const Lt=De.getPrimaries(De.workingColorSpace),xt=y.colorSpace===gr?null:De.getPrimaries(y.colorSpace),Et=y.colorSpace===gr||Lt===xt?o.NONE:o.BROWSER_DEFAULT_WEBGL;a.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,y.flipY),a.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),a.pixelStorei(o.UNPACK_ALIGNMENT,y.unpackAlignment),a.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);const Ut=y.isCompressedTexture||y.image[0].isCompressedTexture,$t=y.image[0]&&y.image[0].isDataTexture,Ft=[];for(let bt=0;bt<6;bt++)!Ut&&!$t?Ft[bt]=M(y.image[bt],!0,u.maxCubemapSize):Ft[bt]=$t?y.image[bt].image:y.image[bt],Ft[bt]=en(y,Ft[bt]);const zt=Ft[0],Wt=f.convert(y.format,y.colorSpace),ne=f.convert(y.type),ue=C(y.internalFormat,Wt,ne,y.normalized,y.colorSpace),G=y.isVideoTexture!==!0,Dt=Ct.__version===void 0||st===!0,yt=vt.dataReady;let Ot=U(y,zt);mt(o.TEXTURE_CUBE_MAP,y);let kt;if(Ut){G&&Dt&&a.texStorage2D(o.TEXTURE_CUBE_MAP,Ot,ue,zt.width,zt.height);for(let bt=0;bt<6;bt++){kt=Ft[bt].mipmaps;for(let Jt=0;Jt<kt.length;Jt++){const Xt=kt[Jt];y.format!==zi?Wt!==null?G?yt&&a.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Jt,0,0,Xt.width,Xt.height,Wt,Xt.data):a.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Jt,ue,Xt.width,Xt.height,0,Xt.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?yt&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Jt,0,0,Xt.width,Xt.height,Wt,ne,Xt.data):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Jt,ue,Xt.width,Xt.height,0,Wt,ne,Xt.data)}}}else{if(kt=y.mipmaps,G&&Dt){kt.length>0&&Ot++;const bt=Le(Ft[0]);a.texStorage2D(o.TEXTURE_CUBE_MAP,Ot,ue,bt.width,bt.height)}for(let bt=0;bt<6;bt++)if($t){G?yt&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,Ft[bt].width,Ft[bt].height,Wt,ne,Ft[bt].data):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,ue,Ft[bt].width,Ft[bt].height,0,Wt,ne,Ft[bt].data);for(let Jt=0;Jt<kt.length;Jt++){const we=kt[Jt].image[bt].image;G?yt&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Jt+1,0,0,we.width,we.height,Wt,ne,we.data):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Jt+1,ue,we.width,we.height,0,Wt,ne,we.data)}}else{G?yt&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,Wt,ne,Ft[bt]):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,ue,Wt,ne,Ft[bt]);for(let Jt=0;Jt<kt.length;Jt++){const Xt=kt[Jt];G?yt&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Jt+1,0,0,Wt,ne,Xt.image[bt]):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Jt+1,ue,Wt,ne,Xt.image[bt])}}}S(y)&&O(o.TEXTURE_CUBE_MAP),Ct.__version=vt.version,y.onUpdate&&y.onUpdate(y)}D.__version=y.version}function gt(D,y,J,st,vt,Ct){const Lt=f.convert(J.format,J.colorSpace),xt=f.convert(J.type),Et=C(J.internalFormat,Lt,xt,J.normalized,J.colorSpace),Ut=s.get(y),$t=s.get(J);if($t.__renderTarget=y,!Ut.__hasExternalTextures){const Ft=Math.max(1,y.width>>Ct),zt=Math.max(1,y.height>>Ct);vt===o.TEXTURE_3D||vt===o.TEXTURE_2D_ARRAY?a.texImage3D(vt,Ct,Et,Ft,zt,y.depth,0,Lt,xt,null):a.texImage2D(vt,Ct,Et,Ft,zt,0,Lt,xt,null)}a.bindFramebuffer(o.FRAMEBUFFER,D),$e(y)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,st,vt,$t.__webglTexture,0,Oe(y)):(vt===o.TEXTURE_2D||vt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&vt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,st,vt,$t.__webglTexture,Ct),a.bindFramebuffer(o.FRAMEBUFFER,null)}function Rt(D,y,J){if(o.bindRenderbuffer(o.RENDERBUFFER,D),y.depthBuffer){const st=y.depthTexture,vt=st&&st.isDepthTexture?st.type:null,Ct=N(y.stencilBuffer,vt),Lt=y.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;$e(y)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Oe(y),Ct,y.width,y.height):J?o.renderbufferStorageMultisample(o.RENDERBUFFER,Oe(y),Ct,y.width,y.height):o.renderbufferStorage(o.RENDERBUFFER,Ct,y.width,y.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Lt,o.RENDERBUFFER,D)}else{const st=y.textures;for(let vt=0;vt<st.length;vt++){const Ct=st[vt],Lt=f.convert(Ct.format,Ct.colorSpace),xt=f.convert(Ct.type),Et=C(Ct.internalFormat,Lt,xt,Ct.normalized,Ct.colorSpace);$e(y)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Oe(y),Et,y.width,y.height):J?o.renderbufferStorageMultisample(o.RENDERBUFFER,Oe(y),Et,y.width,y.height):o.renderbufferStorage(o.RENDERBUFFER,Et,y.width,y.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function be(D,y,J){const st=y.isWebGLCubeRenderTarget===!0;if(a.bindFramebuffer(o.FRAMEBUFFER,D),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const vt=s.get(y.depthTexture);if(vt.__renderTarget=y,(!vt.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),st){if(vt.__webglInit===void 0&&(vt.__webglInit=!0,y.depthTexture.addEventListener("dispose",P)),vt.__webglTexture===void 0){vt.__webglTexture=o.createTexture(),a.bindTexture(o.TEXTURE_CUBE_MAP,vt.__webglTexture),mt(o.TEXTURE_CUBE_MAP,y.depthTexture);const Ut=f.convert(y.depthTexture.format),$t=f.convert(y.depthTexture.type);let Ft;y.depthTexture.format===Oa?Ft=o.DEPTH_COMPONENT24:y.depthTexture.format===Yr&&(Ft=o.DEPTH24_STENCIL8);for(let zt=0;zt<6;zt++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+zt,0,Ft,y.width,y.height,0,Ut,$t,null)}}else ft(y.depthTexture,0);const Ct=vt.__webglTexture,Lt=Oe(y),xt=st?o.TEXTURE_CUBE_MAP_POSITIVE_X+J:o.TEXTURE_2D,Et=y.depthTexture.format===Yr?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(y.depthTexture.format===Oa)$e(y)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Et,xt,Ct,0,Lt):o.framebufferTexture2D(o.FRAMEBUFFER,Et,xt,Ct,0);else if(y.depthTexture.format===Yr)$e(y)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Et,xt,Ct,0,Lt):o.framebufferTexture2D(o.FRAMEBUFFER,Et,xt,Ct,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function se(D){const y=s.get(D),J=D.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==D.depthTexture){const st=D.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),st){const vt=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,st.removeEventListener("dispose",vt)};st.addEventListener("dispose",vt),y.__depthDisposeCallback=vt}y.__boundDepthTexture=st}if(D.depthTexture&&!y.__autoAllocateDepthBuffer)if(J)for(let st=0;st<6;st++)be(y.__webglFramebuffer[st],D,st);else{const st=D.texture.mipmaps;st&&st.length>0?be(y.__webglFramebuffer[0],D,0):be(y.__webglFramebuffer,D,0)}else if(J){y.__webglDepthbuffer=[];for(let st=0;st<6;st++)if(a.bindFramebuffer(o.FRAMEBUFFER,y.__webglFramebuffer[st]),y.__webglDepthbuffer[st]===void 0)y.__webglDepthbuffer[st]=o.createRenderbuffer(),Rt(y.__webglDepthbuffer[st],D,!1);else{const vt=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ct=y.__webglDepthbuffer[st];o.bindRenderbuffer(o.RENDERBUFFER,Ct),o.framebufferRenderbuffer(o.FRAMEBUFFER,vt,o.RENDERBUFFER,Ct)}}else{const st=D.texture.mipmaps;if(st&&st.length>0?a.bindFramebuffer(o.FRAMEBUFFER,y.__webglFramebuffer[0]):a.bindFramebuffer(o.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=o.createRenderbuffer(),Rt(y.__webglDepthbuffer,D,!1);else{const vt=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ct=y.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Ct),o.framebufferRenderbuffer(o.FRAMEBUFFER,vt,o.RENDERBUFFER,Ct)}}a.bindFramebuffer(o.FRAMEBUFFER,null)}function me(D,y,J){const st=s.get(D);y!==void 0&&gt(st.__webglFramebuffer,D,D.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),J!==void 0&&se(D)}function _e(D){const y=D.texture,J=s.get(D),st=s.get(y);D.addEventListener("dispose",b);const vt=D.textures,Ct=D.isWebGLCubeRenderTarget===!0,Lt=vt.length>1;if(Lt||(st.__webglTexture===void 0&&(st.__webglTexture=o.createTexture()),st.__version=y.version,d.memory.textures++),Ct){J.__webglFramebuffer=[];for(let xt=0;xt<6;xt++)if(y.mipmaps&&y.mipmaps.length>0){J.__webglFramebuffer[xt]=[];for(let Et=0;Et<y.mipmaps.length;Et++)J.__webglFramebuffer[xt][Et]=o.createFramebuffer()}else J.__webglFramebuffer[xt]=o.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){J.__webglFramebuffer=[];for(let xt=0;xt<y.mipmaps.length;xt++)J.__webglFramebuffer[xt]=o.createFramebuffer()}else J.__webglFramebuffer=o.createFramebuffer();if(Lt)for(let xt=0,Et=vt.length;xt<Et;xt++){const Ut=s.get(vt[xt]);Ut.__webglTexture===void 0&&(Ut.__webglTexture=o.createTexture(),d.memory.textures++)}if(D.samples>0&&$e(D)===!1){J.__webglMultisampledFramebuffer=o.createFramebuffer(),J.__webglColorRenderbuffer=[],a.bindFramebuffer(o.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let xt=0;xt<vt.length;xt++){const Et=vt[xt];J.__webglColorRenderbuffer[xt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,J.__webglColorRenderbuffer[xt]);const Ut=f.convert(Et.format,Et.colorSpace),$t=f.convert(Et.type),Ft=C(Et.internalFormat,Ut,$t,Et.normalized,Et.colorSpace,D.isXRRenderTarget===!0),zt=Oe(D);o.renderbufferStorageMultisample(o.RENDERBUFFER,zt,Ft,D.width,D.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+xt,o.RENDERBUFFER,J.__webglColorRenderbuffer[xt])}o.bindRenderbuffer(o.RENDERBUFFER,null),D.depthBuffer&&(J.__webglDepthRenderbuffer=o.createRenderbuffer(),Rt(J.__webglDepthRenderbuffer,D,!0)),a.bindFramebuffer(o.FRAMEBUFFER,null)}}if(Ct){a.bindTexture(o.TEXTURE_CUBE_MAP,st.__webglTexture),mt(o.TEXTURE_CUBE_MAP,y);for(let xt=0;xt<6;xt++)if(y.mipmaps&&y.mipmaps.length>0)for(let Et=0;Et<y.mipmaps.length;Et++)gt(J.__webglFramebuffer[xt][Et],D,y,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Et);else gt(J.__webglFramebuffer[xt],D,y,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0);S(y)&&O(o.TEXTURE_CUBE_MAP),a.unbindTexture()}else if(Lt){for(let xt=0,Et=vt.length;xt<Et;xt++){const Ut=vt[xt],$t=s.get(Ut);let Ft=o.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ft=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),a.bindTexture(Ft,$t.__webglTexture),mt(Ft,Ut),gt(J.__webglFramebuffer,D,Ut,o.COLOR_ATTACHMENT0+xt,Ft,0),S(Ut)&&O(Ft)}a.unbindTexture()}else{let xt=o.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(xt=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),a.bindTexture(xt,st.__webglTexture),mt(xt,y),y.mipmaps&&y.mipmaps.length>0)for(let Et=0;Et<y.mipmaps.length;Et++)gt(J.__webglFramebuffer[Et],D,y,o.COLOR_ATTACHMENT0,xt,Et);else gt(J.__webglFramebuffer,D,y,o.COLOR_ATTACHMENT0,xt,0);S(y)&&O(xt),a.unbindTexture()}D.depthBuffer&&se(D)}function te(D){const y=D.textures;for(let J=0,st=y.length;J<st;J++){const vt=y[J];if(S(vt)){const Ct=X(D),Lt=s.get(vt).__webglTexture;a.bindTexture(Ct,Lt),O(Ct),a.unbindTexture()}}}const ie=[],Ve=[];function fn(D){if(D.samples>0){if($e(D)===!1){const y=D.textures,J=D.width,st=D.height;let vt=o.COLOR_BUFFER_BIT;const Ct=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Lt=s.get(D),xt=y.length>1;if(xt)for(let Ut=0;Ut<y.length;Ut++)a.bindFramebuffer(o.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ut,o.RENDERBUFFER,null),a.bindFramebuffer(o.FRAMEBUFFER,Lt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ut,o.TEXTURE_2D,null,0);a.bindFramebuffer(o.READ_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer);const Et=D.texture.mipmaps;Et&&Et.length>0?a.bindFramebuffer(o.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer[0]):a.bindFramebuffer(o.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let Ut=0;Ut<y.length;Ut++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(vt|=o.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(vt|=o.STENCIL_BUFFER_BIT)),xt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Lt.__webglColorRenderbuffer[Ut]);const $t=s.get(y[Ut]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,$t,0)}o.blitFramebuffer(0,0,J,st,0,0,J,st,vt,o.NEAREST),m===!0&&(ie.length=0,Ve.length=0,ie.push(o.COLOR_ATTACHMENT0+Ut),D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&(ie.push(Ct),Ve.push(Ct),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Ve)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ie))}if(a.bindFramebuffer(o.READ_FRAMEBUFFER,null),a.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),xt)for(let Ut=0;Ut<y.length;Ut++){a.bindFramebuffer(o.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ut,o.RENDERBUFFER,Lt.__webglColorRenderbuffer[Ut]);const $t=s.get(y[Ut]).__webglTexture;a.bindFramebuffer(o.FRAMEBUFFER,Lt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ut,o.TEXTURE_2D,$t,0)}a.bindFramebuffer(o.DRAW_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&m){const y=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[y])}}}function Oe(D){return Math.min(u.maxSamples,D.samples)}function $e(D){const y=s.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function V(D){const y=d.render.frame;x.get(D)!==y&&(x.set(D,y),D.update())}function en(D,y){const J=D.colorSpace,st=D.format,vt=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||J!==Cc&&J!==gr&&(De.getTransfer(J)===qe?(st!==zi||vt!==bi)&&oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pe("WebGLTextures: Unsupported texture color space:",J)),y}function Le(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=W,this.resetTextureUnits=ut,this.getTextureUnits=j,this.setTextureUnits=$,this.setTexture2D=ft,this.setTexture2DArray=ot,this.setTexture3D=pt,this.setTextureCube=_t,this.rebindTextures=me,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=fn,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=$e,this.isReversedDepthBuffer=function(){return a.buffers.depth.getReversed()}}function y3(o,e){function a(s,u=gr){let f;const d=De.getTransfer(u);if(s===bi)return o.UNSIGNED_BYTE;if(s===Gp)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Vp)return o.UNSIGNED_SHORT_5_5_5_1;if(s===Cx)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===wx)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===Ax)return o.BYTE;if(s===Rx)return o.SHORT;if(s===xl)return o.UNSIGNED_SHORT;if(s===Hp)return o.INT;if(s===sa)return o.UNSIGNED_INT;if(s===ia)return o.FLOAT;if(s===oa)return o.HALF_FLOAT;if(s===Nx)return o.ALPHA;if(s===Dx)return o.RGB;if(s===zi)return o.RGBA;if(s===Oa)return o.DEPTH_COMPONENT;if(s===Yr)return o.DEPTH_STENCIL;if(s===Ux)return o.RED;if(s===Xp)return o.RED_INTEGER;if(s===jr)return o.RG;if(s===kp)return o.RG_INTEGER;if(s===Wp)return o.RGBA_INTEGER;if(s===Mc||s===yc||s===Ec||s===bc)if(d===qe)if(f=e.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(s===Mc)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===yc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ec)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===bc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=e.get("WEBGL_compressed_texture_s3tc"),f!==null){if(s===Mc)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===yc)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ec)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===bc)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ap||s===rp||s===sp||s===op)if(f=e.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(s===ap)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===rp)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===sp)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===op)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===lp||s===up||s===cp||s===fp||s===dp||s===Ac||s===hp)if(f=e.get("WEBGL_compressed_texture_etc"),f!==null){if(s===lp||s===up)return d===qe?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(s===cp)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC;if(s===fp)return f.COMPRESSED_R11_EAC;if(s===dp)return f.COMPRESSED_SIGNED_R11_EAC;if(s===Ac)return f.COMPRESSED_RG11_EAC;if(s===hp)return f.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===pp||s===mp||s===gp||s===_p||s===vp||s===xp||s===Sp||s===Mp||s===yp||s===Ep||s===bp||s===Tp||s===Ap||s===Rp)if(f=e.get("WEBGL_compressed_texture_astc"),f!==null){if(s===pp)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===mp)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===gp)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===_p)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===vp)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===xp)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Sp)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Mp)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===yp)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ep)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===bp)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Tp)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ap)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Rp)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Cp||s===wp||s===Np)if(f=e.get("EXT_texture_compression_bptc"),f!==null){if(s===Cp)return d===qe?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===wp)return f.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Np)return f.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Dp||s===Up||s===Rc||s===Lp)if(f=e.get("EXT_texture_compression_rgtc"),f!==null){if(s===Dp)return f.COMPRESSED_RED_RGTC1_EXT;if(s===Up)return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Rc)return f.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Lp)return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Sl?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:a}}const E3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,b3=`
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

}`;class T3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,a){if(this.texture===null){const s=new Xx(e.texture);(e.depthNear!==a.depthNear||e.depthFar!==a.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const a=e.cameras[0].viewport,s=new ua({vertexShader:E3,fragmentShader:b3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:a.z},depthHeight:{value:a.w}}});this.mesh=new la(new Pc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class A3 extends Jr{constructor(e,a){super();const s=this;let u=null,f=1,d=null,h="local-floor",m=1,p=null,x=null,v=null,_=null,E=null,R=null;const w=typeof XRWebGLBinding<"u",M=new T3,S={},O=a.getContextAttributes();let X=null,C=null;const N=[],U=[],P=new Fe;let b=null,L=null;const H=new Ei;H.viewport=new ln;const q=new Ei;q.viewport=new ln;const tt=[H,q],ut=new Ob;let j=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let dt=N[Z];return dt===void 0&&(dt=new Ah,N[Z]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(Z){let dt=N[Z];return dt===void 0&&(dt=new Ah,N[Z]=dt),dt.getGripSpace()},this.getHand=function(Z){let dt=N[Z];return dt===void 0&&(dt=new Ah,N[Z]=dt),dt.getHandSpace()};function W(Z){const dt=U.indexOf(Z.inputSource);if(dt===-1)return;const At=N[dt];At!==void 0&&(At.update(Z.inputSource,Z.frame,p||d),At.dispatchEvent({type:Z.type,data:Z.inputSource}))}function k(){u.removeEventListener("select",W),u.removeEventListener("selectstart",W),u.removeEventListener("selectend",W),u.removeEventListener("squeeze",W),u.removeEventListener("squeezestart",W),u.removeEventListener("squeezeend",W),u.removeEventListener("end",k),u.removeEventListener("inputsourceschange",ft);for(let Z=0;Z<N.length;Z++){const dt=U[Z];dt!==null&&(U[Z]=null,N[Z].disconnect(dt))}j=null,$=null,M.reset();for(const Z in S)delete S[Z];if(e.setRenderTarget(X),E=null,_=null,v=null,u=null,C=null,Tt.stop(),s.isPresenting=!1,e.setPixelRatio(b),e.setSize(P.width,P.height,!1),L!==null){const Z=L.camera;Z.fov=L.fov,Z.zoom=L.zoom,Z.updateProjectionMatrix(),L=null}s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){f=Z,s.isPresenting===!0&&oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){h=Z,s.isPresenting===!0&&oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(Z){p=Z},this.getBaseLayer=function(){return _!==null?_:E},this.getBinding=function(){return v===null&&w&&(v=new XRWebGLBinding(u,a)),v},this.getFrame=function(){return R},this.getSession=function(){return u},this.setSession=async function(Z){if(u=Z,u!==null){if(X=e.getRenderTarget(),u.addEventListener("select",W),u.addEventListener("selectstart",W),u.addEventListener("selectend",W),u.addEventListener("squeeze",W),u.addEventListener("squeezestart",W),u.addEventListener("squeezeend",W),u.addEventListener("end",k),u.addEventListener("inputsourceschange",ft),O.xrCompatible!==!0&&await a.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(P),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let At=null,wt=null,gt=null;O.depth&&(gt=O.stencil?a.DEPTH24_STENCIL8:a.DEPTH_COMPONENT24,At=O.stencil?Yr:Oa,wt=O.stencil?Sl:sa);const Rt={colorFormat:a.RGBA8,depthFormat:gt,scaleFactor:f};v=this.getBinding(),_=v.createProjectionLayer(Rt),u.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),C=new Bi(_.textureWidth,_.textureHeight,{format:zi,type:bi,depthTexture:new yl(_.textureWidth,_.textureHeight,wt,void 0,void 0,void 0,void 0,void 0,void 0,At),stencilBuffer:O.stencil,colorSpace:e.outputColorSpace,samples:O.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1,storeMultisampledDepthBuffer:_.ignoreDepthValues===!1,storeMultisampledStencilBuffer:_.ignoreDepthValues===!1})}else{const At={antialias:O.antialias,alpha:!0,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:f};E=new XRWebGLLayer(u,a,At),u.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),C=new Bi(E.framebufferWidth,E.framebufferHeight,{format:zi,type:bi,colorSpace:e.outputColorSpace,stencilBuffer:O.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1,storeMultisampledDepthBuffer:E.ignoreDepthValues===!1,storeMultisampledStencilBuffer:E.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await u.requestReferenceSpace(h),Tt.setContext(u),Tt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(u!==null)return u.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function ft(Z){for(let dt=0;dt<Z.removed.length;dt++){const At=Z.removed[dt],wt=U.indexOf(At);wt>=0&&(U[wt]=null,N[wt].disconnect(At))}for(let dt=0;dt<Z.added.length;dt++){const At=Z.added[dt];let wt=U.indexOf(At);if(wt===-1){for(let Rt=0;Rt<N.length;Rt++)if(Rt>=U.length){U.push(At),wt=Rt;break}else if(U[Rt]===null){U[Rt]=At,wt=Rt;break}if(wt===-1)break}const gt=N[wt];gt&&gt.connect(At)}}const ot=new ht,pt=new ht;function _t(Z,dt,At){ot.setFromMatrixPosition(dt.matrixWorld),pt.setFromMatrixPosition(At.matrixWorld);const wt=ot.distanceTo(pt),gt=dt.projectionMatrix.elements,Rt=At.projectionMatrix.elements,be=gt[14]/(gt[10]-1),se=gt[14]/(gt[10]+1),me=(gt[9]+1)/gt[5],_e=(gt[9]-1)/gt[5],te=(gt[8]-1)/gt[0],ie=(Rt[8]+1)/Rt[0],Ve=be*te,fn=be*ie,Oe=wt/(-te+ie),$e=Oe*-te;if(dt.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX($e),Z.translateZ(Oe),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),gt[10]===-1)Z.projectionMatrix.copy(dt.projectionMatrix),Z.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{const V=be+Oe,en=se+Oe,Le=Ve-$e,D=fn+(wt-$e),y=me*se/en*V,J=_e*se/en*V;Z.projectionMatrix.makePerspective(Le,D,y,J,V,en),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function Bt(Z,dt){dt===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(dt.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(u===null)return;let dt=Z.near,At=Z.far;M.texture!==null&&(M.depthNear>0&&(dt=M.depthNear),M.depthFar>0&&(At=M.depthFar)),ut.near=q.near=H.near=dt,ut.far=q.far=H.far=At,(j!==ut.near||$!==ut.far)&&(u.updateRenderState({depthNear:ut.near,depthFar:ut.far}),j=ut.near,$=ut.far),ut.layers.mask=Z.layers.mask|6,H.layers.mask=ut.layers.mask&-5,q.layers.mask=ut.layers.mask&-3;const wt=Z.parent,gt=ut.cameras;Bt(ut,wt);for(let Rt=0;Rt<gt.length;Rt++)Bt(gt[Rt],wt);gt.length===2?_t(ut,H,q):ut.projectionMatrix.copy(H.projectionMatrix),L===null&&Z.isPerspectiveCamera&&(L={camera:Z,fov:Z.fov,zoom:Z.zoom}),Nt(Z,ut,wt)};function Nt(Z,dt,At){At===null?Z.matrix.copy(dt.matrixWorld):(Z.matrix.copy(At.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(dt.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(dt.projectionMatrix),Z.projectionMatrixInverse.copy(dt.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Ml*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return ut},this.getFoveation=function(){if(!(_===null&&E===null))return m},this.setFoveation=function(Z){m=Z,_!==null&&(_.fixedFoveation=Z),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=Z)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(ut)},this.getCameraTexture=function(Z){return S[Z]};let z=null;function mt(Z,dt){if(x=dt.getViewerPose(p||d),R=dt,x!==null){const At=x.views;E!==null&&(e.setRenderTargetFramebuffer(C,E.framebuffer),e.setRenderTarget(C));let wt=!1;At.length!==ut.cameras.length&&(ut.cameras.length=0,wt=!0);for(let se=0;se<At.length;se++){const me=At[se];let _e=null;if(E!==null)_e=E.getViewport(me);else{const ie=v.getViewSubImage(_,me);_e=ie.viewport,se===0&&(e.setRenderTargetTextures(C,ie.colorTexture,ie.depthStencilTexture),e.setRenderTarget(C))}let te=tt[se];te===void 0&&(te=new Ei,te.layers.enable(se),te.viewport=new ln,tt[se]=te),te.matrix.fromArray(me.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(me.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(_e.x,_e.y,_e.width,_e.height),se===0&&(ut.matrix.copy(te.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale)),wt===!0&&ut.cameras.push(te)}const gt=u.enabledFeatures;if(gt&&gt.includes("depth-sensing")&&u.depthUsage=="gpu-optimized"&&w){v=s.getBinding();const se=v.getDepthInformation(At[0]);se&&se.isValid&&se.texture&&M.init(se,u.renderState)}if(gt&&gt.includes("camera-access")&&w){e.state.unbindTexture(),v=s.getBinding();for(let se=0;se<At.length;se++){const me=At[se].camera;if(me){let _e=S[me];_e||(_e=new Xx,S[me]=_e);const te=v.getCameraImage(me);_e.sourceTexture=te}}}}for(let At=0;At<N.length;At++){const wt=U[At],gt=N[At];wt!==null&&gt!==void 0&&gt.update(wt,dt,p||d)}z&&z(Z,dt),dt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:dt}),R=null}const Tt=new Yx;Tt.setAnimationLoop(mt),this.setAnimationLoop=function(Z){z=Z},this.dispose=function(){}}}const R3=new cn,tS=new de;tS.set(-1,0,0,0,1,0,0,0,1);function C3(o,e){function a(M,S){M.matrixAutoUpdate===!0&&M.updateMatrix(),S.value.copy(M.matrix)}function s(M,S){S.color.getRGB(M.fogColor.value,kx(o)),S.isFog?(M.fogNear.value=S.near,M.fogFar.value=S.far):S.isFogExp2&&(M.fogDensity.value=S.density)}function u(M,S,O,X,C){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?f(M,S):S.isMeshLambertMaterial?(f(M,S),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(f(M,S),v(M,S)):S.isMeshPhongMaterial?(f(M,S),x(M,S),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(f(M,S),_(M,S),S.isMeshPhysicalMaterial&&E(M,S,C)):S.isMeshMatcapMaterial?(f(M,S),R(M,S)):S.isMeshDepthMaterial?f(M,S):S.isMeshDistanceMaterial?(f(M,S),w(M,S)):S.isMeshNormalMaterial?f(M,S):S.isLineBasicMaterial?(d(M,S),S.isLineDashedMaterial&&h(M,S)):S.isPointsMaterial?m(M,S,O,X):S.isSpriteMaterial?p(M,S):S.isShadowMaterial?(M.color.value.copy(S.color),M.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function f(M,S){M.opacity.value=S.opacity,S.color&&M.diffuse.value.copy(S.color),S.emissive&&M.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(M.map.value=S.map,a(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,a(S.alphaMap,M.alphaMapTransform)),S.bumpMap&&(M.bumpMap.value=S.bumpMap,a(S.bumpMap,M.bumpMapTransform),M.bumpScale.value=S.bumpScale,S.side===jn&&(M.bumpScale.value*=-1)),S.normalMap&&(M.normalMap.value=S.normalMap,a(S.normalMap,M.normalMapTransform),M.normalScale.value.copy(S.normalScale),S.side===jn&&M.normalScale.value.negate()),S.displacementMap&&(M.displacementMap.value=S.displacementMap,a(S.displacementMap,M.displacementMapTransform),M.displacementScale.value=S.displacementScale,M.displacementBias.value=S.displacementBias),S.emissiveMap&&(M.emissiveMap.value=S.emissiveMap,a(S.emissiveMap,M.emissiveMapTransform)),S.specularMap&&(M.specularMap.value=S.specularMap,a(S.specularMap,M.specularMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest);const O=e.get(S),X=O.envMap,C=O.envMapRotation;X&&(M.envMap.value=X,M.envMapRotation.value.setFromMatrix4(R3.makeRotationFromEuler(C)).transpose(),X.isCubeTexture&&X.isRenderTargetTexture===!1&&M.envMapRotation.value.premultiply(tS),M.reflectivity.value=S.reflectivity,M.ior.value=S.ior,M.refractionRatio.value=S.refractionRatio),S.lightMap&&(M.lightMap.value=S.lightMap,M.lightMapIntensity.value=S.lightMapIntensity,a(S.lightMap,M.lightMapTransform)),S.aoMap&&(M.aoMap.value=S.aoMap,M.aoMapIntensity.value=S.aoMapIntensity,a(S.aoMap,M.aoMapTransform))}function d(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,S.map&&(M.map.value=S.map,a(S.map,M.mapTransform))}function h(M,S){M.dashSize.value=S.dashSize,M.totalSize.value=S.dashSize+S.gapSize,M.scale.value=S.scale}function m(M,S,O,X){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.size.value=S.size*O,M.scale.value=X*.5,S.map&&(M.map.value=S.map,a(S.map,M.uvTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,a(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function p(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.rotation.value=S.rotation,S.map&&(M.map.value=S.map,a(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,a(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function x(M,S){M.specular.value.copy(S.specular),M.shininess.value=Math.max(S.shininess,1e-4)}function v(M,S){S.gradientMap&&(M.gradientMap.value=S.gradientMap)}function _(M,S){M.metalness.value=S.metalness,S.metalnessMap&&(M.metalnessMap.value=S.metalnessMap,a(S.metalnessMap,M.metalnessMapTransform)),M.roughness.value=S.roughness,S.roughnessMap&&(M.roughnessMap.value=S.roughnessMap,a(S.roughnessMap,M.roughnessMapTransform)),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)}function E(M,S,O){M.ior.value=S.ior,S.sheen>0&&(M.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),M.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(M.sheenColorMap.value=S.sheenColorMap,a(S.sheenColorMap,M.sheenColorMapTransform)),S.sheenRoughnessMap&&(M.sheenRoughnessMap.value=S.sheenRoughnessMap,a(S.sheenRoughnessMap,M.sheenRoughnessMapTransform))),S.clearcoat>0&&(M.clearcoat.value=S.clearcoat,M.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(M.clearcoatMap.value=S.clearcoatMap,a(S.clearcoatMap,M.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,a(S.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(M.clearcoatNormalMap.value=S.clearcoatNormalMap,a(S.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===jn&&M.clearcoatNormalScale.value.negate())),S.dispersion>0&&(M.dispersion.value=S.dispersion),S.retroreflectivity>0&&(M.retroreflectivity.value=S.retroreflectivity),S.iridescence>0&&(M.iridescence.value=S.iridescence,M.iridescenceIOR.value=S.iridescenceIOR,M.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(M.iridescenceMap.value=S.iridescenceMap,a(S.iridescenceMap,M.iridescenceMapTransform)),S.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=S.iridescenceThicknessMap,a(S.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),S.transmission>0&&(M.transmission.value=S.transmission,M.transmissionSamplerMap.value=O.texture,M.transmissionSamplerSize.value.set(O.width,O.height),S.transmissionMap&&(M.transmissionMap.value=S.transmissionMap,a(S.transmissionMap,M.transmissionMapTransform)),M.thickness.value=S.thickness,S.thicknessMap&&(M.thicknessMap.value=S.thicknessMap,a(S.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=S.attenuationDistance,M.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(M.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(M.anisotropyMap.value=S.anisotropyMap,a(S.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=S.specularIntensity,M.specularColor.value.copy(S.specularColor),S.specularColorMap&&(M.specularColorMap.value=S.specularColorMap,a(S.specularColorMap,M.specularColorMapTransform)),S.specularIntensityMap&&(M.specularIntensityMap.value=S.specularIntensityMap,a(S.specularIntensityMap,M.specularIntensityMapTransform))}function R(M,S){S.matcap&&(M.matcap.value=S.matcap)}function w(M,S){const O=e.get(S).light;M.referencePosition.value.setFromMatrixPosition(O.matrixWorld),M.nearDistance.value=O.shadow.camera.near,M.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:u}}function w3(o,e,a,s){let u={},f={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(C,N){const U=N.program;s.uniformBlockBinding(C,U)}function p(C,N){let U=u[C.id];U===void 0&&(M(C),U=x(C),u[C.id]=U,C.addEventListener("dispose",O));const P=N.program;s.updateUBOMapping(C,P);const b=e.render.frame;f[C.id]!==b&&(_(C),f[C.id]=b)}function x(C){const N=v();C.__bindingPointIndex=N;const U=o.createBuffer(),P=C.__size,b=C.usage;return o.bindBuffer(o.UNIFORM_BUFFER,U),o.bufferData(o.UNIFORM_BUFFER,P,b),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,N,U),U}function v(){for(let C=0;C<h;C++)if(d.indexOf(C)===-1)return d.push(C),C;return Pe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(C){const N=u[C.id],U=C.uniforms,P=C.__cache;o.bindBuffer(o.UNIFORM_BUFFER,N);for(let b=0,L=U.length;b<L;b++){const H=U[b];if(Array.isArray(H))for(let q=0,tt=H.length;q<tt;q++)E(H[q],b,q,P);else E(H,b,0,P)}o.bindBuffer(o.UNIFORM_BUFFER,null)}function E(C,N,U,P){if(w(C,N,U,P)===!0){const b=C.__offset,L=C.value;if(Array.isArray(L)){let H=0;for(let q=0;q<L.length;q++){const tt=L[q],ut=S(tt);R(tt,C.__data,H),typeof tt!="number"&&typeof tt!="boolean"&&!tt.isMatrix3&&!ArrayBuffer.isView(tt)&&(H+=ut.storage/Float32Array.BYTES_PER_ELEMENT)}}else R(L,C.__data,0);o.bufferSubData(o.UNIFORM_BUFFER,b,C.__data)}}function R(C,N,U){typeof C=="number"||typeof C=="boolean"?N[0]=C:C.isMatrix3?(N[0]=C.elements[0],N[1]=C.elements[1],N[2]=C.elements[2],N[3]=0,N[4]=C.elements[3],N[5]=C.elements[4],N[6]=C.elements[5],N[7]=0,N[8]=C.elements[6],N[9]=C.elements[7],N[10]=C.elements[8],N[11]=0):ArrayBuffer.isView(C)?N.set(new C.constructor(C.buffer,C.byteOffset,N.length)):C.toArray(N,U)}function w(C,N,U,P){const b=C.value,L=N+"_"+U;if(P[L]===void 0)return typeof b=="number"||typeof b=="boolean"?P[L]=b:ArrayBuffer.isView(b)?P[L]=b.slice():P[L]=b.clone(),!0;{const H=P[L];if(typeof b=="number"||typeof b=="boolean"){if(H!==b)return P[L]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(H.equals(b)===!1)return H.copy(b),!0}}return!1}function M(C){const N=C.uniforms;let U=0;const P=16;for(let L=0,H=N.length;L<H;L++){const q=Array.isArray(N[L])?N[L]:[N[L]];for(let tt=0,ut=q.length;tt<ut;tt++){const j=q[tt],$=Array.isArray(j.value)?j.value:[j.value];for(let W=0,k=$.length;W<k;W++){const ft=$[W],ot=S(ft),pt=U%P,_t=pt%ot.boundary,Bt=pt+_t;U+=_t,Bt!==0&&P-Bt<ot.storage&&(U+=P-Bt),j.__data=new Float32Array(ot.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=U,U+=ot.storage}}}const b=U%P;return b>0&&(U+=P-b),C.__size=U,C.__cache={},this}function S(C){const N={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(N.boundary=4,N.storage=4):C.isVector2?(N.boundary=8,N.storage=8):C.isVector3||C.isColor?(N.boundary=16,N.storage=12):C.isVector4?(N.boundary=16,N.storage=16):C.isMatrix3?(N.boundary=48,N.storage=48):C.isMatrix4?(N.boundary=64,N.storage=64):C.isTexture?oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(N.boundary=16,N.storage=C.byteLength):oe("WebGLRenderer: Unsupported uniform value type.",C),N}function O(C){const N=C.target;N.removeEventListener("dispose",O);const U=d.indexOf(N.__bindingPointIndex);d.splice(U,1),o.deleteBuffer(u[N.id]),delete u[N.id],delete f[N.id]}function X(){for(const C in u)o.deleteBuffer(u[C]);d=[],u={},f={}}return{bind:m,update:p,dispose:X}}const N3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ea=null;function D3(){return ea===null&&(ea=new yb(N3,16,16,jr,oa),ea.name="DFG_LUT",ea.minFilter=In,ea.magFilter=In,ea.wrapS=Da,ea.wrapT=Da,ea.generateMipmaps=!1,ea.needsUpdate=!0),ea}class U3{constructor(e={}){const{canvas:a=IE(),context:s=null,depth:u=!0,stencil:f=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:_=!1,outputBufferType:E=bi}=e;this.isWebGLRenderer=!0;let R;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");R=s.getContextAttributes().alpha}else R=d;const w=E,M=new Set([Wp,kp,Xp]),S=new Set([bi,sa,xl,Sl,Gp,Vp]),O=new Uint32Array(4),X=new Int32Array(4),C=new ht;let N=null,U=null;const P=[],b=[];let L=null;this.domElement=a,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ra,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const H=this;let q=!1,tt=null,ut=null,j=null,$=null;this._outputColorSpace=yi;let W=0,k=0,ft=null,ot=-1,pt=null;const _t=new ln,Bt=new ln;let Nt=null;const z=new Be(0);let mt=0,Tt=a.width,Z=a.height,dt=1,At=null,wt=null;const gt=new ln(0,0,Tt,Z),Rt=new ln(0,0,Tt,Z);let be=!1;const se=new Hx;let me=!1,_e=!1;const te=new cn,ie=new ht,Ve=new ln,fn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Oe=!1;function $e(){return ft===null?dt:1}let V=s;function en(T,B){return a.getContext(T,B)}let Le,D,y,J,st,vt,Ct,Lt,xt,Et,Ut,$t,Ft,zt,Wt,ne,ue,G,Dt,yt,Ot,kt,bt;try{const T={alpha:!0,depth:u,stencil:f,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:x,failIfMajorPerformanceCaveat:v};if("setAttribute"in a&&a.setAttribute("data-engine",`three.js r${Fp}`),a.addEventListener("webglcontextlost",we,!1),a.addEventListener("webglcontextrestored",ce,!1),a.addEventListener("webglcontextcreationerror",Jn,!1),V===null){const B="webgl2";if(V=en(B,T),V===null)throw en(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Jt()}catch(T){throw a.removeEventListener("webglcontextlost",we,!1),a.removeEventListener("webglcontextrestored",ce,!1),a.removeEventListener("webglcontextcreationerror",Jn,!1),Pe("WebGLRenderer: "+T.message),T}function Jt(){Le=new DA(V),Le.init(),Ot=new y3(V,Le),D=new MA(V,Le,e,Ot),y=new S3(V,Le),D.reversedDepthBuffer&&_&&y.buffers.depth.setReversed(!0),ut=V.createFramebuffer(),j=V.createFramebuffer(),$=V.createFramebuffer(),J=new OA(V),st=new s3,vt=new M3(V,Le,y,st,D,Ot,J),Ct=new NA(H),Lt=new Ib(V),kt=new xA(V,Lt),xt=new UA(V,Lt,J,kt),Et=new IA(V,xt,Lt,kt,J),G=new PA(V,D,vt),Wt=new yA(st),Ut=new r3(H,Ct,Le,D,kt,Wt),$t=new C3(H,st),Ft=new l3,zt=new p3(Le),ue=new vA(H,Ct,y,Et,R,m),ne=new x3(H,Et,D),bt=new w3(V,J,D,y),Dt=new SA(V,Le,J),yt=new LA(V,Le,J),J.programs=Ut.programs,H.capabilities=D,H.extensions=Le,H.properties=st,H.renderLists=Ft,H.shadowMap=ne,H.state=y,H.info=J}w!==bi&&(L=new BA(w,a.width,a.height,h,u,f));const Xt=new A3(H,V);this.xr=Xt,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const T=Le.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Le.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return dt},this.setPixelRatio=function(T){T!==void 0&&(dt=T,this.setSize(Tt,Z,!1))},this.getSize=function(T){return T.set(Tt,Z)},this.setSize=function(T,B,ct=!0){if(Xt.isPresenting){oe("WebGLRenderer: Can't change size while VR device is presenting.");return}Tt=T,Z=B,a.width=Math.floor(T*dt),a.height=Math.floor(B*dt),ct===!0&&(a.style.width=T+"px",a.style.height=B+"px"),L!==null&&L.setSize(a.width,a.height),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(Tt*dt,Z*dt).floor()},this.setDrawingBufferSize=function(T,B,ct){Tt=T,Z=B,dt=ct,a.width=Math.floor(T*ct),a.height=Math.floor(B*ct),this.setViewport(0,0,T,B)},this.setEffects=function(T){if(w===bi){Pe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let B=0;B<T.length;B++)if(T[B].isOutputPass===!0){oe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(_t)},this.getViewport=function(T){return T.copy(gt)},this.setViewport=function(T,B,ct,it){T.isVector4?gt.set(T.x,T.y,T.z,T.w):gt.set(T,B,ct,it),y.viewport(_t.copy(gt).multiplyScalar(dt).round())},this.getScissor=function(T){return T.copy(Rt)},this.setScissor=function(T,B,ct,it){T.isVector4?Rt.set(T.x,T.y,T.z,T.w):Rt.set(T,B,ct,it),y.scissor(Bt.copy(Rt).multiplyScalar(dt).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(T){y.setScissorTest(be=T)},this.setOpaqueSort=function(T){At=T},this.setTransparentSort=function(T){wt=T},this.getClearColor=function(T){return T.copy(ue.getClearColor())},this.setClearColor=function(){ue.setClearColor(...arguments)},this.getClearAlpha=function(){return ue.getClearAlpha()},this.setClearAlpha=function(){ue.setClearAlpha(...arguments)},this.clear=function(T=!0,B=!0,ct=!0){let it=0;if(T){let at=!1;if(ft!==null){const Ht=ft.texture.format;at=M.has(Ht)}if(at){const Ht=ft.texture.type,qt=S.has(Ht),Pt=ue.getClearColor(),Kt=ue.getClearAlpha(),jt=Pt.r,re=Pt.g,fe=Pt.b;qt?(O[0]=jt,O[1]=re,O[2]=fe,O[3]=Kt,V.clearBufferuiv(V.COLOR,0,O)):(X[0]=jt,X[1]=re,X[2]=fe,X[3]=Kt,V.clearBufferiv(V.COLOR,0,X))}else it|=V.COLOR_BUFFER_BIT}B&&(it|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ct&&(it|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),it!==0&&V.clear(it)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),tt=T},this.dispose=function(){a.removeEventListener("webglcontextlost",we,!1),a.removeEventListener("webglcontextrestored",ce,!1),a.removeEventListener("webglcontextcreationerror",Jn,!1),ue.dispose(),Ft.dispose(),zt.dispose(),st.dispose(),Ct.dispose(),Et.dispose(),kt.dispose(),bt.dispose(),Ut.dispose(),Xt.dispose(),Xt.removeEventListener("sessionstart",vr),Xt.removeEventListener("sessionend",za),Hi.stop()};function we(T){T.preventDefault(),yv("WebGLRenderer: Context Lost."),q=!0}function ce(){yv("WebGLRenderer: Context Restored."),q=!1;const T=J.autoReset,B=ne.enabled,ct=ne.autoUpdate,it=ne.needsUpdate,at=ne.type;Jt(),J.autoReset=T,ne.enabled=B,ne.autoUpdate=ct,ne.needsUpdate=it,ne.type=at}function Jn(T){Pe("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ci(T){const B=T.target;B.removeEventListener("dispose",ci),Bc(B)}function Bc(T){$r(T),st.remove(T)}function $r(T){const B=st.get(T).programs;B!==void 0&&(B.forEach(function(ct){Ut.releaseProgram(ct)}),T.isShaderMaterial&&Ut.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,ct,it,at,Ht){B===null&&(B=fn);const qt=at.isMesh&&at.matrixWorld.determinantAffine()<0,Pt=mo(T,B,ct,it,at);y.setMaterial(it,qt);let Kt=ct.index,jt=1;if(it.wireframe===!0){if(Kt=xt.getWireframeAttribute(ct),Kt===void 0)return;jt=2}const re=ct.drawRange,fe=ct.attributes.position;let Yt=re.start*jt,Me=(re.start+re.count)*jt;Ht!==null&&(Yt=Math.max(Yt,Ht.start*jt),Me=Math.min(Me,(Ht.start+Ht.count)*jt)),Kt!==null?(Yt=Math.max(Yt,0),Me=Math.min(Me,Kt.count)):fe!=null&&(Yt=Math.max(Yt,0),Me=Math.min(Me,fe.count));const ve=Me-Yt;if(ve<0||ve===1/0)return;kt.setup(at,it,Pt,ct,Kt);let Ye,He=Dt;if(Kt!==null&&(Ye=Lt.get(Kt),He=yt,He.setIndex(Ye)),at.isMesh)it.wireframe===!0?(y.setLineWidth(it.wireframeLinewidth*$e()),He.setMode(V.LINES)):He.setMode(V.TRIANGLES);else if(at.isLine){let _n=it.linewidth;_n===void 0&&(_n=1),y.setLineWidth(_n*$e()),at.isLineSegments?He.setMode(V.LINES):at.isLineLoop?He.setMode(V.LINE_LOOP):He.setMode(V.LINE_STRIP)}else at.isPoints?He.setMode(V.POINTS):at.isSprite&&He.setMode(V.TRIANGLES);if(at.isBatchedMesh)if(Le.get("WEBGL_multi_draw"))He.renderMultiDraw(at._multiDrawStarts,at._multiDrawCounts,at._multiDrawCount);else{const _n=at._multiDrawStarts,Gt=at._multiDrawCounts,an=at._multiDrawCount,Ne=Kt?Lt.get(Kt).bytesPerElement:1,zn=st.get(it).currentProgram.getUniforms();for(let $n=0;$n<an;$n++)zn.setValue(V,"_gl_DrawID",$n),He.render(_n[$n]/Ne,Gt[$n])}else if(at.isInstancedMesh)He.renderInstances(Yt,ve,at.count);else if(ct.isInstancedBufferGeometry){const _n=ct._maxInstanceCount!==void 0?ct._maxInstanceCount:1/0,Gt=Math.min(ct.instanceCount,_n);He.renderInstances(Yt,ve,Gt)}else He.render(Yt,ve)};function _r(T,B,ct,it){tt!==null&&T.isNodeMaterial&&tt.setObject(it,T),me===!0&&Wt.setState(T,ct,!1),T.transparent===!0&&T.side===Na&&T.forceSinglePass===!1?(T.side=jn,T.needsUpdate=!0,xr(T,B,it),T.side=Zr,T.needsUpdate=!0,xr(T,B,it),T.side=Na):xr(T,B,it)}this.compile=function(T,B,ct=null){ct===null&&(ct=T),tt!==null&&tt.renderStart(T,B,ct),U=zt.get(ct),U.init(B),b.push(U),ct.traverseVisible(function(at){at.isLight&&at.layers.test(B.layers)&&(U.pushLight(at),at.castShadow&&U.pushShadow(at))}),T!==ct&&T.traverseVisible(function(at){at.isLight&&at.layers.test(B.layers)&&(U.pushLight(at),at.castShadow&&U.pushShadow(at))}),U.setupLights(),tt!==null&&tt.updateLights(U.state.lightsArray),_e=this.localClippingEnabled,me=Wt.init(this.clippingPlanes,_e),me===!0&&Wt.setGlobalState(this.clippingPlanes,B),tt!==null&&ne.render(U.state.shadowsArray,ct,B);const it=new Set;return T.traverse(function(at){if(!(at.isMesh||at.isPoints||at.isLine||at.isSprite))return;const Ht=at.material;if(Ht)if(Array.isArray(Ht))for(let qt=0;qt<Ht.length;qt++){const Pt=Ht[qt];_r(Pt,ct,B,at),it.add(Pt)}else _r(Ht,ct,B,at),it.add(Ht)}),U=b.pop(),tt!==null&&tt.renderEnd(),it},this.compileAsync=function(T,B,ct=null){const it=this.compile(T,B,ct);return new Promise(at=>{function Ht(){if(it.forEach(function(qt){const Kt=st.get(qt).currentProgram;(Kt===void 0||Kt.isReady())&&it.delete(qt)}),it.size===0){at(T);return}setTimeout(Ht,10)}Le.get("KHR_parallel_shader_compile")!==null?Ht():setTimeout(Ht,10)})};let Ia=null;function ca(T){Ia&&Ia(T)}function vr(){Hi.stop()}function za(){Hi.start()}const Hi=new Yx;Hi.setAnimationLoop(ca),typeof self<"u"&&Hi.setContext(self),this.setAnimationLoop=function(T){Ia=T,Xt.setAnimationLoop(T),T===null?Hi.stop():Hi.start()},Xt.addEventListener("sessionstart",vr),Xt.addEventListener("sessionend",za),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){Pe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(q===!0)return;tt!==null&&tt.renderStart(T,B);const ct=Xt.enabled===!0&&Xt.isPresenting===!0,it=L!==null&&(ft===null||ct)&&L.begin(H,ft);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Xt.enabled===!0&&Xt.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(Xt.cameraAutoUpdate===!0&&Xt.updateCamera(B),B=Xt.getCamera()),T.isScene===!0&&T.onBeforeRender(H,T,B,ft),U=zt.get(T,b.length),U.init(B),U.state.textureUnits=vt.getTextureUnits(),b.push(U),te.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),se.setFromProjectionMatrix(te,aa,B.reversedDepth),_e=this.localClippingEnabled,me=Wt.init(this.clippingPlanes,_e),N=Ft.get(T,P.length),N.init(),P.push(N),Xt.enabled===!0&&Xt.isPresenting===!0){const qt=H.xr.getDepthSensingMesh();qt!==null&&uo(qt,B,-1/0,H.sortObjects)}uo(T,B,0,H.sortObjects),N.finish(),tt!==null&&tt.updateLights(U.state.lightsArray),H.sortObjects===!0&&N.sort(At,wt),Oe=Xt.enabled===!1||Xt.isPresenting===!1||Xt.hasDepthSensing()===!1,Oe&&ue.addToRenderList(N,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),me===!0&&Wt.beginShadows();const at=U.state.shadowsArray;if(ne.render(at,T,B),me===!0&&Wt.endShadows(),(it&&L.hasRenderPass())===!1){const qt=N.opaque,Pt=N.transmissive;if(U.setupLights(),B.isArrayCamera){const Kt=B.cameras;if(Pt.length>0)for(let jt=0,re=Kt.length;jt<re;jt++){const fe=Kt[jt];ts(qt,Pt,T,fe)}Oe&&ue.render(T);for(let jt=0,re=Kt.length;jt<re;jt++){const fe=Kt[jt];co(N,T,fe,fe.viewport)}}else Pt.length>0&&ts(qt,Pt,T,B),Oe&&ue.render(T),co(N,T,B)}ft!==null&&k===0&&(vt.updateMultisampleRenderTarget(ft),vt.updateRenderTargetMipmap(ft)),it&&L.end(H),T.isScene===!0&&T.onAfterRender(H,T,B),kt.resetDefaultState(),ot=-1,pt=null,b.pop(),b.length>0?(U=b[b.length-1],vt.setTextureUnits(U.state.textureUnits),me===!0&&Wt.setGlobalState(H.clippingPlanes,U.state.camera)):U=null,P.pop(),P.length>0?N=P[P.length-1]:N=null,tt!==null&&tt.renderEnd()};function uo(T,B,ct,it){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)ct=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLightProbeGrid)U.pushLightProbeGrid(T);else if(T.isLight)U.pushLight(T),T.castShadow&&U.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||T.intersectsFrustum(se)){it&&Ve.setFromMatrixPosition(T.matrixWorld).applyMatrix4(te);const qt=Et.update(T),Pt=T.material;Pt.visible&&N.push(T,qt,Pt,ct,Ve.z,null,B)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||T.intersectsFrustum(se))){const qt=Et.update(T),Pt=T.material;if(it&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ve.copy(T.boundingSphere.center)):(qt.boundingSphere===null&&qt.computeBoundingSphere(),Ve.copy(qt.boundingSphere.center)),Ve.applyMatrix4(T.matrixWorld).applyMatrix4(te)),Array.isArray(Pt)){const Kt=qt.groups;for(let jt=0,re=Kt.length;jt<re;jt++){const fe=Kt[jt],Yt=Pt[fe.materialIndex];Yt&&Yt.visible&&N.push(T,qt,Yt,ct,Ve.z,fe,B)}}else Pt.visible&&N.push(T,qt,Pt,ct,Ve.z,null,B)}}const Ht=T.children;for(let qt=0,Pt=Ht.length;qt<Pt;qt++)uo(Ht[qt],B,ct,it)}function co(T,B,ct,it){const{opaque:at,transmissive:Ht,transparent:qt}=T;U.setupLightsView(ct),me===!0&&Wt.setGlobalState(H.clippingPlanes,ct),it&&y.viewport(_t.copy(it)),at.length>0&&Gi(at,B,ct),Ht.length>0&&Gi(Ht,B,ct),qt.length>0&&Gi(qt,B,ct),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function ts(T,B,ct,it){if((ct.isScene===!0?ct.overrideMaterial:null)!==null)return;if(U.state.transmissionRenderTarget[it.id]===void 0){const Yt=Le.has("EXT_color_buffer_half_float")||Le.has("EXT_color_buffer_float");U.state.transmissionRenderTarget[it.id]=new Bi(1,1,{generateMipmaps:!0,type:Yt?oa:bi,minFilter:qr,samples:Math.max(4,D.samples),stencilBuffer:f,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:De.workingColorSpace})}const Ht=U.state.transmissionRenderTarget[it.id],qt=it.viewport||_t;Ht.setSize(qt.z*H.transmissionResolutionScale,qt.w*H.transmissionResolutionScale);const Pt=H.getRenderTarget(),Kt=H.getActiveCubeFace(),jt=H.getActiveMipmapLevel();H.setRenderTarget(Ht),H.getClearColor(z),mt=H.getClearAlpha(),mt<1&&H.setClearColor(16777215,.5),H.clear(),Oe&&ue.render(ct);const re=H.toneMapping;H.toneMapping=ra;const fe=it.viewport;if(it.viewport!==void 0&&(it.viewport=void 0),U.setupLightsView(it),me===!0&&Wt.setGlobalState(H.clippingPlanes,it),Gi(T,ct,it),vt.updateMultisampleRenderTarget(Ht),vt.updateRenderTargetMipmap(Ht),Le.has("WEBGL_multisampled_render_to_texture")===!1){let Yt=!1;for(let Me=0,ve=B.length;Me<ve;Me++){const Ye=B[Me],{object:He,geometry:_n,material:Gt,group:an}=Ye;if(Gt.side===Na&&He.layers.test(it.layers)){const Ne=Gt.side;Gt.side=jn,Gt.needsUpdate=!0,Al(He,ct,it,_n,Gt,an),Gt.side=Ne,Gt.needsUpdate=!0,Yt=!0}}Yt===!0&&(vt.updateMultisampleRenderTarget(Ht),vt.updateRenderTargetMipmap(Ht))}H.setRenderTarget(Pt,Kt,jt),H.setClearColor(z,mt),fe!==void 0&&(it.viewport=fe),H.toneMapping=re}function Gi(T,B,ct){const it=B.isScene===!0?B.overrideMaterial:null;for(let at=0,Ht=T.length;at<Ht;at++){const qt=T[at],{object:Pt,geometry:Kt,group:jt}=qt;let re=qt.material;re.allowOverride===!0&&it!==null&&(re=it),Pt.layers.test(ct.layers)&&Al(Pt,B,ct,Kt,re,jt)}}function Al(T,B,ct,it,at,Ht){tt!==null&&at.isNodeMaterial&&tt.setObject(T,at),T.onBeforeRender(H,B,ct,it,at,Ht),T.modelViewMatrix.multiplyMatrices(ct.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),at.onBeforeRender(H,B,ct,it,T,Ht),at.transparent===!0&&at.side===Na&&at.forceSinglePass===!1?(at.side=jn,at.needsUpdate=!0,H.renderBufferDirect(ct,B,it,at,T,Ht),at.side=Zr,at.needsUpdate=!0,H.renderBufferDirect(ct,B,it,at,T,Ht),at.side=Na):H.renderBufferDirect(ct,B,it,at,T,Ht),T.onAfterRender(H,B,ct,it,at,Ht)}function xr(T,B,ct){B.isScene!==!0&&(B=fn);const it=st.get(T),at=U.state.lights,Ht=U.state.shadowsArray,qt=at.state.version,Pt=Ut.getParameters(T,at.state,Ht,B,ct,U.state.lightProbeGridArray),Kt=Ut.getProgramCacheKey(Pt);let jt=it.programs;it.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?B.environment:null,it.fog=B.fog;const re=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;it.envMap=Ct.get(T.envMap||it.environment,re),it.envMapRotation=it.environment!==null&&T.envMap===null?B.environmentRotation:T.envMapRotation,jt===void 0&&(T.addEventListener("dispose",ci),jt=new Map,it.programs=jt);let fe=jt.get(Kt);if(fe!==void 0){if(it.currentProgram===fe&&it.lightsStateVersion===qt)return ho(T,Pt),fe}else Pt.uniforms=Ut.getUniforms(T),tt!==null&&T.isNodeMaterial&&tt.build(T,ct,Pt),T.onBeforeCompile(Pt,H),fe=Ut.acquireProgram(Pt,Kt),jt.set(Kt,fe),it.uniforms=Pt.uniforms;const Yt=it.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Yt.clippingPlanes=Wt.uniform),ho(T,Pt),it.needsLights=Cl(T),it.lightsStateVersion=qt,it.needsLights&&(Yt.ambientLightColor.value=at.state.ambient,Yt.lightProbe.value=at.state.probe,Yt.sunLights.value=at.state.sun,Yt.sunLightShadows.value=at.state.sunShadow,Yt.directionalLights.value=at.state.directional,Yt.directionalLightShadows.value=at.state.directionalShadow,Yt.spotLights.value=at.state.spot,Yt.spotLightShadows.value=at.state.spotShadow,Yt.rectAreaLights.value=at.state.rectArea,Yt.ltc_1.value=at.state.rectAreaLTC1,Yt.ltc_2.value=at.state.rectAreaLTC2,Yt.pointLights.value=at.state.point,Yt.pointLightShadows.value=at.state.pointShadow,Yt.hemisphereLights.value=at.state.hemi,Yt.sunShadowMatrix.value=at.state.sunShadowMatrix,Yt.sunShadowCascade.value=at.state.sunShadowCascade,Yt.directionalShadowMatrix.value=at.state.directionalShadowMatrix,Yt.spotLightMatrix.value=at.state.spotLightMatrix,Yt.spotLightMap.value=at.state.spotLightMap,Yt.pointShadowMatrix.value=at.state.pointShadowMatrix),it.lightProbeGrid=U.state.lightProbeGridArray.length>0,it.currentProgram=fe,it.uniformsList=null,fe}function fo(T){if(T.uniformsList===null){const B=T.currentProgram.getUniforms();T.uniformsList=Tc.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function ho(T,B){const ct=st.get(T);ct.outputColorSpace=B.outputColorSpace,ct.batching=B.batching,ct.batchingColor=B.batchingColor,ct.instancing=B.instancing,ct.instancingColor=B.instancingColor,ct.instancingMorph=B.instancingMorph,ct.skinning=B.skinning,ct.morphTargets=B.morphTargets,ct.morphNormals=B.morphNormals,ct.morphColors=B.morphColors,ct.morphTargetsCount=B.morphTargetsCount,ct.numClippingPlanes=B.numClippingPlanes,ct.numIntersection=B.numClipIntersection,ct.vertexAlphas=B.vertexAlphas,ct.vertexTangents=B.vertexTangents,ct.toneMapping=B.toneMapping}function po(T,B){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;C.setFromMatrixPosition(B.matrixWorld);for(let ct=0,it=T.length;ct<it;ct++){const at=T[ct];if(at.texture!==null&&at.boundingBox.containsPoint(C))return at}return null}function mo(T,B,ct,it,at){B.isScene!==!0&&(B=fn),vt.resetTextureUnits();const Ht=B.fog,qt=it.isMeshStandardMaterial||it.isMeshLambertMaterial||it.isMeshPhongMaterial?B.environment:null,Pt=ft===null?H.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:De.workingColorSpace,Kt=it.isMeshStandardMaterial||it.isMeshLambertMaterial&&!it.envMap||it.isMeshPhongMaterial&&!it.envMap,jt=Ct.get(it.envMap||qt,Kt),re=it.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,fe=!!ct.attributes.tangent&&(!!it.normalMap||it.anisotropy>0),Yt=!!ct.morphAttributes.position,Me=!!ct.morphAttributes.normal,ve=!!ct.morphAttributes.color;let Ye=ra;it.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(Ye=H.toneMapping);const He=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,_n=He!==void 0?He.length:0,Gt=st.get(it),an=U.state.lights;if(me===!0&&(_e===!0||T!==pt)){const Te=T===pt&&it.id===ot;Wt.setState(it,T,Te)}let Ne=!1;it.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==an.state.version||Gt.outputColorSpace!==Pt||at.isBatchedMesh&&Gt.batching===!1||!at.isBatchedMesh&&Gt.batching===!0||at.isBatchedMesh&&Gt.batchingColor===!0&&at._colorsTexture===null||at.isBatchedMesh&&Gt.batchingColor===!1&&at._colorsTexture!==null||at.isInstancedMesh&&Gt.instancing===!1||!at.isInstancedMesh&&Gt.instancing===!0||at.isSkinnedMesh&&Gt.skinning===!1||!at.isSkinnedMesh&&Gt.skinning===!0||at.isInstancedMesh&&Gt.instancingColor===!0&&at.instanceColor===null||at.isInstancedMesh&&Gt.instancingColor===!1&&at.instanceColor!==null||at.isInstancedMesh&&Gt.instancingMorph===!0&&at.morphTexture===null||at.isInstancedMesh&&Gt.instancingMorph===!1&&at.morphTexture!==null||Gt.envMap!==jt||it.fog===!0&&Gt.fog!==Ht||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==Wt.numPlanes||Gt.numIntersection!==Wt.numIntersection)||Gt.vertexAlphas!==re||Gt.vertexTangents!==fe||Gt.morphTargets!==Yt||Gt.morphNormals!==Me||Gt.morphColors!==ve||Gt.toneMapping!==Ye||Gt.morphTargetsCount!==_n||!!Gt.lightProbeGrid!=U.state.lightProbeGridArray.length>0)&&(Ne=!0):(Ne=!0,Gt.__version=it.version);let zn=Gt.currentProgram;Ne===!0&&(zn=xr(it,B,at),tt&&it.isNodeMaterial&&tt.onUpdateProgram(it,zn,Gt));let $n=!1,Vi=!1,xe=!1;const Ie=zn.getUniforms(),je=Gt.uniforms;if(y.useProgram(zn.program)&&($n=!0,Vi=!0,xe=!0),it.id!==ot&&(ot=it.id,Vi=!0),Gt.needsLights){const Te=po(U.state.lightProbeGridArray,at);Gt.lightProbeGrid!==Te&&(Gt.lightProbeGrid=Te,Vi=!0)}if($n||pt!==T){y.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Ie.setValue(V,"projectionMatrix",T.projectionMatrix),Ie.setValue(V,"viewMatrix",T.matrixWorldInverse);const rn=Ie.map.cameraPosition;rn!==void 0&&rn.setValue(V,ie.setFromMatrixPosition(T.matrixWorld)),D.logarithmicDepthBuffer&&Ie.setValue(V,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(it.isMeshPhongMaterial||it.isMeshToonMaterial||it.isMeshLambertMaterial||it.isMeshBasicMaterial||it.isMeshStandardMaterial||it.isShaderMaterial)&&Ie.setValue(V,"isOrthographic",T.isOrthographicCamera===!0),pt!==T&&(pt=T,Vi=!0,xe=!0)}if(Gt.needsLights&&(an.state.sunShadowMap.length>0&&Ie.setValue(V,"sunShadowMap",an.state.sunShadowMap,vt),an.state.directionalShadowMap.length>0&&Ie.setValue(V,"directionalShadowMap",an.state.directionalShadowMap,vt),an.state.spotShadowMap.length>0&&Ie.setValue(V,"spotShadowMap",an.state.spotShadowMap,vt),an.state.pointShadowMap.length>0&&Ie.setValue(V,"pointShadowMap",an.state.pointShadowMap,vt)),at.isSkinnedMesh){Ie.setOptional(V,at,"bindMatrix"),Ie.setOptional(V,at,"bindMatrixInverse");const Te=at.skeleton;Te&&(Te.boneTexture===null&&Te.computeBoneTexture(),Ie.setValue(V,"boneTexture",Te.boneTexture,vt))}at.isBatchedMesh&&(Ie.setOptional(V,at,"batchingTexture"),Ie.setValue(V,"batchingTexture",at._matricesTexture,vt),Ie.setOptional(V,at,"batchingIdTexture"),Ie.setValue(V,"batchingIdTexture",at._indirectTexture,vt),Ie.setOptional(V,at,"batchingColorTexture"),at._colorsTexture!==null&&Ie.setValue(V,"batchingColorTexture",at._colorsTexture,vt));const ti=ct.morphAttributes;if((ti.position!==void 0||ti.normal!==void 0||ti.color!==void 0)&&G.update(at,ct,zn),(Vi||Gt.receiveShadow!==at.receiveShadow)&&(Gt.receiveShadow=at.receiveShadow,Ie.setValue(V,"receiveShadow",at.receiveShadow)),(it.isMeshStandardMaterial||it.isMeshLambertMaterial||it.isMeshPhongMaterial)&&it.envMap===null&&B.environment!==null&&(je.envMapIntensity.value=B.environmentIntensity),je.dfgLUT!==void 0&&(je.dfgLUT.value=D3()),Vi){if(Ie.setValue(V,"toneMappingExposure",H.toneMappingExposure),Gt.needsLights&&Rl(je,xe),Ht&&it.fog===!0&&$t.refreshFogUniforms(je,Ht),$t.refreshMaterialUniforms(je,it,dt,Z,U.state.transmissionRenderTarget[T.id]),Gt.needsLights&&Gt.lightProbeGrid){const Te=Gt.lightProbeGrid;je.probesSH.value=Te.texture,je.probesMin.value.copy(Te.boundingBox.min),je.probesMax.value.copy(Te.boundingBox.max),je.probesResolution.value.copy(Te.resolution)}Tc.upload(V,fo(Gt),je,vt)}if(it.isShaderMaterial&&it.uniformsNeedUpdate===!0&&(Tc.upload(V,fo(Gt),je,vt),it.uniformsNeedUpdate=!1),it.isSpriteMaterial&&Ie.setValue(V,"center",at.center),Ie.setValue(V,"modelViewMatrix",at.modelViewMatrix),Ie.setValue(V,"normalMatrix",at.normalMatrix),Ie.setValue(V,"modelMatrix",at.matrixWorld),it.uniformsGroups!==void 0){const Te=it.uniformsGroups;for(let rn=0,fa=Te.length;rn<fa;rn++){const wl=Te[rn];bt.update(wl,zn),bt.bind(wl,zn)}}return zn}function Rl(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.sunLights.needsUpdate=B,T.sunLightShadows.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function Cl(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return ft},this.setRenderTargetTextures=function(T,B,ct){const it=st.get(T);it.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,it.__autoAllocateDepthBuffer===!1&&(it.__useRenderToTexture=!1),st.get(T.texture).__webglTexture=B,st.get(T.depthTexture).__webglTexture=it.__autoAllocateDepthBuffer?void 0:ct,it.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,B){const ct=st.get(T);ct.__webglFramebuffer=B,ct.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(T,B=0,ct=0){ft=T,W=B,k=ct;let it=null,at=!1,Ht=!1;if(T){const Pt=st.get(T);if(Pt.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(V.FRAMEBUFFER,Pt.__webglFramebuffer),_t.copy(T.viewport),Bt.copy(T.scissor),Nt=T.scissorTest,y.viewport(_t),y.scissor(Bt),y.setScissorTest(Nt),ot=-1;return}else if(Pt.__webglFramebuffer===void 0)vt.setupRenderTarget(T);else if(Pt.__hasExternalTextures)vt.rebindTextures(T,st.get(T.texture).__webglTexture,st.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const re=T.depthTexture;if(Pt.__boundDepthTexture!==re){if(re!==null&&st.has(re)&&(T.width!==re.image.width||T.height!==re.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");vt.setupDepthRenderbuffer(T)}}const Kt=T.texture;(Kt.isData3DTexture||Kt.isDataArrayTexture||Kt.isCompressedArrayTexture)&&(Ht=!0);const jt=st.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(jt[B])?it=jt[B][ct]:it=jt[B],at=!0):T.samples>0&&vt.useMultisampledRTT(T)===!1?it=st.get(T).__webglMultisampledFramebuffer:Array.isArray(jt)?it=jt[ct]:it=jt,_t.copy(T.viewport),Bt.copy(T.scissor),Nt=T.scissorTest}else _t.copy(gt).multiplyScalar(dt).floor(),Bt.copy(Rt).multiplyScalar(dt).floor(),Nt=be;if(ct!==0&&(it=ut),y.bindFramebuffer(V.FRAMEBUFFER,it)&&y.drawBuffers(T,it),y.viewport(_t),y.scissor(Bt),y.setScissorTest(Nt),at){const Pt=st.get(T.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+B,Pt.__webglTexture,ct)}else if(Ht){const Pt=B;for(let Kt=0;Kt<T.textures.length;Kt++){const jt=st.get(T.textures[Kt]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Kt,jt.__webglTexture,ct,Pt)}}else if(T!==null&&ct!==0){const Pt=st.get(T.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Pt.__webglTexture,ct)}ot=-1};function fi(T){const B=st.get(T);return(B.__readFormat!==T.format||B.__readType!==T.type)&&(B.__readFormat=T.format,B.__readType=T.type,B.__formatReadable=D.textureFormatReadable(T.format),B.__typeReadable=D.textureTypeReadable(T.type)),B}this.readRenderTargetPixels=function(T,B,ct,it,at,Ht,qt,Pt=0){if(!(T&&T.isWebGLRenderTarget)){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Kt=st.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&qt!==void 0&&(Kt=Kt[qt]),Kt){y.bindFramebuffer(V.FRAMEBUFFER,Kt);try{const jt=T.textures[Pt],re=jt.format,fe=jt.type;T.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Pt);const Yt=fi(jt);if(Yt.__formatReadable===!1){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Yt.__typeReadable===!1){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-it&&ct>=0&&ct<=T.height-at&&V.readPixels(B,ct,it,at,Ot.convert(re),Ot.convert(fe),Ht)}finally{const jt=ft!==null?st.get(ft).__webglFramebuffer:null;y.bindFramebuffer(V.FRAMEBUFFER,jt)}}},this.readRenderTargetPixelsAsync=async function(T,B,ct,it,at,Ht,qt,Pt=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Kt=st.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&qt!==void 0&&(Kt=Kt[qt]),Kt)if(B>=0&&B<=T.width-it&&ct>=0&&ct<=T.height-at){y.bindFramebuffer(V.FRAMEBUFFER,Kt);const jt=T.textures[Pt],re=jt.format,fe=jt.type;T.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Pt);const Yt=fi(jt);if(Yt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Yt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Me=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Me),V.bufferData(V.PIXEL_PACK_BUFFER,Ht.byteLength,V.STREAM_READ),V.readPixels(B,ct,it,at,Ot.convert(re),Ot.convert(fe),0),V.bindBuffer(V.PIXEL_PACK_BUFFER,null);const ve=ft!==null?st.get(ft).__webglFramebuffer:null;y.bindFramebuffer(V.FRAMEBUFFER,ve);const Ye=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await zE(V,Ye,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Me),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Ht),V.bindBuffer(V.PIXEL_PACK_BUFFER,null),V.deleteBuffer(Me),V.deleteSync(Ye),Ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,B=null,ct=0){const it=Math.pow(2,-ct),at=Math.floor(T.image.width*it),Ht=Math.floor(T.image.height*it),qt=B!==null?B.x:0,Pt=B!==null?B.y:0;vt.setTexture2D(T,0),V.copyTexSubImage2D(V.TEXTURE_2D,ct,0,0,qt,Pt,at,Ht),y.unbindTexture()},this.copyTextureToTexture=function(T,B,ct=null,it=null,at=0,Ht=0){let qt,Pt,Kt,jt,re,fe,Yt,Me,ve;const Ye=T.isCompressedTexture?T.mipmaps[Ht]:T.image;if(ct!==null)qt=ct.max.x-ct.min.x,Pt=ct.max.y-ct.min.y,Kt=ct.isBox3?ct.max.z-ct.min.z:1,jt=ct.min.x,re=ct.min.y,fe=ct.isBox3?ct.min.z:0;else{const je=Math.pow(2,-at);qt=Math.floor(Ye.width*je),Pt=Math.floor(Ye.height*je),T.isDataArrayTexture?Kt=Ye.depth:T.isData3DTexture?Kt=Math.floor(Ye.depth*je):Kt=1,jt=0,re=0,fe=0}it!==null?(Yt=it.x,Me=it.y,ve=it.z):(Yt=0,Me=0,ve=0);const He=Ot.convert(B.format),_n=Ot.convert(B.type);let Gt;B.isData3DTexture?(vt.setTexture3D(B,0),Gt=V.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(vt.setTexture2DArray(B,0),Gt=V.TEXTURE_2D_ARRAY):(vt.setTexture2D(B,0),Gt=V.TEXTURE_2D),y.activeTexture(V.TEXTURE0),y.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,B.flipY),y.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),y.pixelStorei(V.UNPACK_ALIGNMENT,B.unpackAlignment);const an=y.getParameter(V.UNPACK_ROW_LENGTH),Ne=y.getParameter(V.UNPACK_IMAGE_HEIGHT),zn=y.getParameter(V.UNPACK_SKIP_PIXELS),$n=y.getParameter(V.UNPACK_SKIP_ROWS),Vi=y.getParameter(V.UNPACK_SKIP_IMAGES);y.pixelStorei(V.UNPACK_ROW_LENGTH,Ye.width),y.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Ye.height),y.pixelStorei(V.UNPACK_SKIP_PIXELS,jt),y.pixelStorei(V.UNPACK_SKIP_ROWS,re),y.pixelStorei(V.UNPACK_SKIP_IMAGES,fe);const xe=T.isDataArrayTexture||T.isData3DTexture,Ie=B.isDataArrayTexture||B.isData3DTexture;if(T.isDepthTexture){const je=st.get(T),ti=st.get(B),Te=st.get(je.__renderTarget),rn=st.get(ti.__renderTarget);y.bindFramebuffer(V.READ_FRAMEBUFFER,Te.__webglFramebuffer),y.bindFramebuffer(V.DRAW_FRAMEBUFFER,rn.__webglFramebuffer);for(let fa=0;fa<Kt;fa++)xe&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,st.get(T).__webglTexture,at,fe+fa),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,st.get(B).__webglTexture,Ht,ve+fa)),V.blitFramebuffer(jt,re,qt,Pt,Yt,Me,qt,Pt,V.DEPTH_BUFFER_BIT,V.NEAREST);y.bindFramebuffer(V.READ_FRAMEBUFFER,null),y.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(at!==0||T.isRenderTargetTexture||st.has(T)){const je=st.get(T),ti=st.get(B);y.bindFramebuffer(V.READ_FRAMEBUFFER,j),y.bindFramebuffer(V.DRAW_FRAMEBUFFER,$);for(let Te=0;Te<Kt;Te++)xe?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,je.__webglTexture,at,fe+Te):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,je.__webglTexture,at),Ie?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,ti.__webglTexture,Ht,ve+Te):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,ti.__webglTexture,Ht),at!==0?V.blitFramebuffer(jt,re,qt,Pt,Yt,Me,qt,Pt,V.COLOR_BUFFER_BIT,V.NEAREST):Ie?V.copyTexSubImage3D(Gt,Ht,Yt,Me,ve+Te,jt,re,qt,Pt):V.copyTexSubImage2D(Gt,Ht,Yt,Me,jt,re,qt,Pt);y.bindFramebuffer(V.READ_FRAMEBUFFER,null),y.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Ie?T.isDataTexture||T.isData3DTexture?V.texSubImage3D(Gt,Ht,Yt,Me,ve,qt,Pt,Kt,He,_n,Ye.data):B.isCompressedArrayTexture?V.compressedTexSubImage3D(Gt,Ht,Yt,Me,ve,qt,Pt,Kt,He,Ye.data):V.texSubImage3D(Gt,Ht,Yt,Me,ve,qt,Pt,Kt,He,_n,Ye):T.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Ht,Yt,Me,qt,Pt,He,_n,Ye.data):T.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Ht,Yt,Me,Ye.width,Ye.height,He,Ye.data):V.texSubImage2D(V.TEXTURE_2D,Ht,Yt,Me,qt,Pt,He,_n,Ye);y.pixelStorei(V.UNPACK_ROW_LENGTH,an),y.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Ne),y.pixelStorei(V.UNPACK_SKIP_PIXELS,zn),y.pixelStorei(V.UNPACK_SKIP_ROWS,$n),y.pixelStorei(V.UNPACK_SKIP_IMAGES,Vi),Ht===0&&B.generateMipmaps&&V.generateMipmap(Gt),y.unbindTexture()},this.initRenderTarget=function(T){st.get(T).__webglFramebuffer===void 0&&vt.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?vt.setTextureCube(T,0):T.isData3DTexture?vt.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?vt.setTexture2DArray(T,0):vt.setTexture2D(T,0),y.unbindTexture()},this.resetState=function(){W=0,k=0,ft=null,y.reset(),kt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return aa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const a=this.getContext();a.drawingBufferColorSpace=De._getDrawingBufferColorSpace(e),a.unpackColorSpace=De._getUnpackColorSpace()}}/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L3=o=>o==null?void 0:o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function O3(o,e,a=[]){if(e==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:L3(o),size:24,node:e,...a.length>0?{aliases:a}:{}}}/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P3=o=>{let e="",a=!1;for(const s of o){if(s==="-"||s==="_"||s<=" "){a=e.length>0;continue}e.length===0?e+=s.toLowerCase():e+=a?s.toUpperCase():s,a=!1}return e};/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I3=o=>{const e=P3(o);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zp=(...o)=>o.filter((e,a,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===a).join(" ").trim();/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wr={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Yh(o){return o!=null}function z3(o,e={}){var _,E;const a=e.attributeNames??{},s=R=>a[R]??R,u=o.size??o.width??Wr.width,f=o.size??o.height??Wr.height,d=((_=o.aliases)==null?void 0:_.filter(R=>typeof R=="string"&&R.trim()!=="").map(R=>`lucide-${R}`))??[],h=[...o.name?[`lucide-${o.name}`]:[],...d],m=((E=e.className)==null?void 0:E.split(" ").filter(Boolean))??[],p=e.includeDefaultClasses===!1?zp(...m):zp("lucide",...h,...m),x=e.absoluteStrokeWidth?Number(e.strokeWidth??Wr["stroke-width"])*Number(o.size??o.width??Wr.width)/Number(e.size??e.width??Wr.width):e.strokeWidth??Wr["stroke-width"];return["svg",{...Object.entries(Wr).reduce((R,[w,M])=>(R[s(w)]=M,R),{}),..."color"in e&&e.color&&{[s("stroke")]:e.color},..."size"in e&&Yh(e.size)&&{[s("width")]:e.size,[s("height")]:e.size},..."width"in e&&Yh(e.width)&&{[s("width")]:e.width},..."height"in e&&Yh(e.height)&&{[s("height")]:e.height},[s("stroke-width")]:x,...p&&{[s("class")]:p},[s("viewBox")]:`0 0 ${u} ${f}`,...e.hasA11yProp===!1?{[s("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},o.node.map(R=>{const[w,M,S]=R,O=e.nonScalingStroke?{[s("vector-effect")]:"non-scaling-stroke",...M}:M;return S?[w,O,S]:[w,O]})]}/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function B3(o,e={}){return z3(o,{...e,attributeNames:{...e.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F3=o=>{for(const e in o)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},H3=Tn.createContext({}),G3=()=>Tn.useContext(H3),V3=Tn.forwardRef(({color:o,size:e,width:a,height:s,strokeWidth:u,absoluteStrokeWidth:f,nonScalingStroke:d,className:h="",children:m,iconNode:p=[],icon:x={node:p,aliases:[],size:24},...v},_)=>{const{size:E=24,strokeWidth:R=2,absoluteStrokeWidth:w=!1,nonScalingStroke:M=!1,color:S="currentColor",className:O=""}=G3()??{},X=!!m||F3(v),[C,N,U=[]]=B3(x,{color:o??S,width:a??e??E,height:s??e??E,strokeWidth:u??R,absoluteStrokeWidth:f??w,nonScalingStroke:d??M,className:zp(O,h),hasA11yProp:X,attributes:v});return Tn.createElement(C,{ref:_,...N},[...U.map(([P,b])=>Tn.createElement(P,b)),...Array.isArray(m)?m:[m]])});/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Pa(o,e=[],a=[]){const s=typeof o=="string"?O3(o,e,a):o,u=Tn.forwardRef(({className:f,...d},h)=>Tn.createElement(V3,{ref:h,icon:s,className:f,...d}));return s.name&&(u.displayName=I3(s.name)),u}/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eS={name:"arrow-up-right",size:24,node:[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]};eS.node;const dl=Pa(eS);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nS={name:"bug",size:24,node:[["path",{d:"M12 20v-9",key:"1qisl0"}],["path",{d:"M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z",key:"uouzyp"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M21 21a4 4 0 0 0-3.81-4",key:"1b0z45"}],["path",{d:"M21 5a4 4 0 0 1-3.55 3.97",key:"5cxbf6"}],["path",{d:"M22 13h-4",key:"1jl80f"}],["path",{d:"M3 21a4 4 0 0 1 3.81-4",key:"1fjd4g"}],["path",{d:"M3 5a4 4 0 0 0 3.55 3.97",key:"1d7oge"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M9 7.13V6a3 3 0 1 1 6 0v1.13",key:"1vgav8"}]]};nS.node;const X3=Pa(nS);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iS={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]};iS.node;const k3=Pa(iS);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aS={name:"chevron-right",size:24,node:[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]};aS.node;const W3=Pa(aS);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rS={name:"copy",size:24,node:[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]};rS.node;const q3=Pa(rS);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sS={name:"orbit",size:24,node:[["path",{d:"M20.341 6.484A10 10 0 0 1 10.266 21.85",key:"1enhxb"}],["path",{d:"M3.659 17.516A10 10 0 0 1 13.74 2.152",key:"1crzgf"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["circle",{cx:"19",cy:"5",r:"2",key:"mhkx31"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}]]};sS.node;const Y3=Pa(sS);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oS={name:"pause",size:24,node:[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]]};oS.node;const Z3=Pa(oS);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lS={name:"play",size:24,node:[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]]};lS.node;const K3=Pa(lS);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uS={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]};uS.node;const j3=Pa(uS),hx=({className:o="w-4 h-4"})=>nt.jsxs("svg",{className:o,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[nt.jsx("path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}),nt.jsx("path",{d:"M9 18c-4.51 2-5-2-7-2"})]}),Q3=()=>{const o=Tn.useRef(null),[e,a]=Tn.useState("spiral"),[s,u]=Tn.useState(!1),[f,d]=Tn.useState(60);return Tn.useEffect(()=>{const h=o.current;if(!h)return;const m=h.clientWidth,p=h.clientHeight,x=new pb,v=new Ei(60,m/p,.1,1e3);v.position.set(0,35,75),v.lookAt(0,0,0);const _=new U3({antialias:!0,alpha:!0});_.setSize(m,p),_.setPixelRatio(Math.min(window.devicePixelRatio,2)),h.appendChild(_.domElement);const E=4500,R=new Float32Array(E*3),w=new Float32Array(E*3),M=new Float32Array(E*3),S=new Float32Array(E*3);(_t=>{for(let Bt=0;Bt<E;Bt++){const Nt=Bt*3;let z=0,mt=0,Tt=0,Z=0,dt=0,At=0;if(_t==="spiral"){const gt=Math.pow(Math.random(),1.6)*50+2,Rt=gt*.28,be=Bt%3*2*Math.PI/3,se=(Math.random()-.5)*(15/(gt*.1+1)),me=(Math.random()-.5)*4,_e=(Math.random()-.5)*(15/(gt*.1+1));z=Math.cos(be+Rt)*gt+se,mt=me,Tt=Math.sin(be+Rt)*gt+_e;const te=gt/50;Z=Sh.lerp(.2,.6,te),dt=Sh.lerp(.9,.2,te),At=Sh.lerp(.9,1,te)}else if(_t==="accretion"){const wt=Math.random()*45+8,gt=Math.random()*Math.PI*2,Rt=(Math.random()-.5)*2.5;z=Math.cos(gt)*wt,mt=Rt,Tt=Math.sin(gt)*wt,Z=wt<20?1:.1,dt=wt<20?.7:.8,At=wt<20?.2:.9}else{const wt=Math.random(),gt=Math.random(),Rt=wt*2*Math.PI,be=Math.acos(2*gt-1),se=Math.cbrt(Math.random())*38;z=se*Math.sin(be)*Math.cos(Rt),mt=se*Math.sin(be)*Math.sin(Rt),Tt=se*Math.cos(be),Z=.2+Math.random()*.4,dt=.8+Math.random()*.2,At=.7+Math.random()*.3}R[Nt]=z,R[Nt+1]=mt,R[Nt+2]=Tt,M[Nt]=z,M[Nt+1]=mt,M[Nt+2]=Tt,w[Nt]=Z,w[Nt+1]=dt,w[Nt+2]=At,S[Nt]=(Math.random()-.5)*.05,S[Nt+1]=(Math.random()-.5)*.05,S[Nt+2]=(Math.random()-.5)*.05}})(e);const X=new Ai;X.setAttribute("position",new Fi(R,3)),X.setAttribute("color",new Fi(w,3));const C=new Gx({size:1.4,vertexColors:!0,transparent:!0,opacity:.85,blending:Zh,depthWrite:!1}),N=new bb(X,C);x.add(N);const U=new Qp(2,32,32),P=new jp({color:3718648,transparent:!0,opacity:.8}),b=new la(U,P);x.add(b);let L=!1,H={x:0,y:0},q=.3,tt=0;const ut=_t=>{L=!0,H={x:_t.clientX,y:_t.clientY}},j=_t=>{if(!L){const z=h.getBoundingClientRect(),mt=((_t.clientX-z.left)/z.width-.5)*2,Tt=((_t.clientY-z.top)/z.height-.5)*2;tt=mt*.4,q=.3-Tt*.3;return}const Bt=_t.clientX-H.x,Nt=_t.clientY-H.y;tt+=Bt*.008,q+=Nt*.008,H={x:_t.clientX,y:_t.clientY}},$=()=>{L=!1};h.addEventListener("mousedown",ut),window.addEventListener("mousemove",j),window.addEventListener("mouseup",$);const W=()=>{if(!h)return;const _t=h.clientWidth,Bt=h.clientHeight;v.aspect=_t/Bt,v.updateProjectionMatrix(),_.setSize(_t,Bt)};window.addEventListener("resize",W);let k;performance.now();let ft=0,ot=performance.now();const pt=()=>{k=requestAnimationFrame(pt),ft++;const _t=performance.now();if(_t-ot>=1e3&&(d(ft),ft=0,ot=_t),!s){N.rotation.y+=.003,N.rotation.x+=(q-N.rotation.x)*.05,N.rotation.y+=(tt-N.rotation.y)*.05,b.rotation.y-=.01;const Bt=1.8+Math.sin(_t*.003)*.3;b.scale.set(Bt,Bt,Bt);const Nt=X.attributes.position,z=Nt.array;for(let mt=0;mt<E;mt++){const Tt=mt*3;z[Tt]+=S[Tt],z[Tt+1]+=S[Tt+1],z[Tt+2]+=S[Tt+2]}Nt.needsUpdate=!0}_.render(x,v)};return pt(),()=>{cancelAnimationFrame(k),h.removeEventListener("mousedown",ut),window.removeEventListener("mousemove",j),window.removeEventListener("mouseup",$),window.removeEventListener("resize",W),_.dispose(),h.contains(_.domElement)&&h.removeChild(_.domElement)}},[e,s]),nt.jsxs("div",{className:"relative w-full h-[420px] sm:h-[480px] rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-b from-[#080812] to-[#040407] shadow-2xl group",children:[nt.jsx("div",{ref:o,className:"w-full h-full cursor-grab active:cursor-grabbing"}),nt.jsxs("div",{className:"absolute top-4 left-4 flex items-center gap-2 pointer-events-none",children:[nt.jsxs("div",{className:"flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 border border-white/10 backdrop-blur-md text-xs font-mono",children:[nt.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400 animate-ping"}),nt.jsx("span",{className:"text-white font-semibold",children:"ASTRODYNE 3D SIMULATOR"})]}),nt.jsx("span",{className:"hidden sm:inline-block text-[11px] font-mono text-zinc-400 bg-black/40 px-2.5 py-1 rounded-full border border-white/5",children:"DRAG TO ROTATE IN 3D"})]}),nt.jsx("div",{className:"absolute top-4 right-4 flex items-center gap-2 pointer-events-none font-mono text-xs",children:nt.jsxs("div",{className:"px-3 py-1 rounded-full bg-black/60 border border-white/10 backdrop-blur-md text-zinc-300 flex items-center gap-2",children:[nt.jsxs("span",{className:"text-emerald-400 font-bold",children:[f," FPS"]}),nt.jsx("span",{className:"text-zinc-600",children:"|"}),nt.jsx("span",{className:"text-cyan-400",children:"4,500 BODIES"}),nt.jsx("span",{className:"text-zinc-600",children:"|"}),nt.jsx("span",{className:"text-zinc-400",children:"RK4 INTEGRATOR"})]})}),nt.jsxs("div",{className:"absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-auto",children:[nt.jsx("div",{className:"flex items-center gap-1.5 p-1 rounded-xl bg-black/80 border border-white/10 backdrop-blur-md",children:["spiral","accretion","quantum"].map(h=>nt.jsx("button",{onClick:()=>a(h),className:`px-3 py-1 rounded-lg text-xs font-mono uppercase tracking-wider transition-all ${e===h?"bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-bold shadow-lg shadow-cyan-500/10":"text-zinc-400 hover:text-white hover:bg-zinc-800/60"}`,children:h},h))}),nt.jsxs("button",{onClick:()=>u(!s),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/80 hover:bg-zinc-800 border border-white/10 backdrop-blur-md text-xs font-mono text-zinc-300 hover:text-white transition-all",children:[s?nt.jsx(K3,{className:"w-3.5 h-3.5 text-emerald-400"}):nt.jsx(Z3,{className:"w-3.5 h-3.5 text-amber-400"}),nt.jsx("span",{children:s?"Resume Orbit":"Pause"})]})]})]})},xc=({children:o,className:e=""})=>{const a=Tn.useRef(null),[s,u]=Tn.useState(""),[f,d]=Tn.useState({x:-1e3,y:-1e3}),h=p=>{if(!a.current)return;const x=a.current.getBoundingClientRect(),v=p.clientX-x.left,_=p.clientY-x.top,E=x.width/2,R=x.height/2,w=(_-R)/R*-10,M=(v-E)/E*10;u(`perspective(1000px) rotateX(${w}deg) rotateY(${M}deg) scale3d(1.015, 1.015, 1.015)`),d({x:v,y:_})},m=()=>{u("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"),d({x:-1e3,y:-1e3})};return nt.jsxs("div",{ref:a,onMouseMove:h,onMouseLeave:m,style:{transform:s},className:`card-3d relative rounded-2xl overflow-hidden ${e}`,children:[nt.jsx("div",{className:"pointer-events-none absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100",style:{background:`radial-gradient(400px circle at ${f.x}px ${f.y}px, rgba(255,255,255,0.08), transparent 70%)`}}),o]})},J3=[{id:"shareme",target:"Xiaomi ShareMe",reach:"500M+ Installs",title:"Unauthenticated IPC Broadcast Arbitrary File Overwrite",cwe:"CWE-862 / CWE-22",severity:"CVSS 8.8 HIGH",summary:"Exported broadcast receiver in com.xiaomi.midrop handled incoming LAN peer file transfers without validating caller origin or canonicalizing destination directory tokens, allowing malicious local apps to overwrite private shared preferences.",diff:`@@ -84,6 +84,8 @@ public class MiDropReceiver extends BroadcastReceiver {
     public void onReceive(Context context, Intent intent) {
-        String targetPath = intent.getStringExtra("dest_file");
-        FileOutputStream fos = new FileOutputStream(new File(targetPath));
+        String rawPath = intent.getStringExtra("dest_file");
+        String safePath = PathUtils.canonicalizeAndSandbox(rawPath, context.getFilesDir());
+        FileOutputStream fos = new FileOutputStream(new File(safePath));
     }`},{id:"elementor",target:"Elementor Website Builder",reach:"5M+ Installs",title:"Missing Authorization in AI Generation Handlers (Quota Drain)",cwe:"CWE-862",severity:"CVSS 6.3 MED",summary:"Core AI AJAX handlers (ai_get_custom_code, ai_get_history) lacked capability checks. Any authenticated Subscriber could trigger paid AI generation credits and extract private prompt histories.",diff:`@@ -142,5 +142,8 @@ public function ajax_ai_get_custom_code( $data ) {
+    if ( ! current_user_can( 'manage_options' ) ) {
+        throw new \\Exception( 'Unauthorized capability.' );
+    }
     return $this->connect->get_ai_code( $data['prompt'] );
 }`},{id:"redux",target:"Redux Framework",reach:"1M+ Installs",title:"Broken Access Control via Inverted Boolean Conjunction",cwe:"CWE-284",severity:"CVSS 5.3 MED",summary:"In class-redux-ajax-save.php, the guard used !is_user_logged_in() && !current_user_can(). Because of the '&&' conjunction, current_user_can() was completely dead code for any logged-in user with panel access.",diff:`@@ -210,4 +210,4 @@ public function ajax_save() {
-    if ( ! is_user_logged_in() && ! current_user_can( $this->args['page_permissions'] ) ) {
+    if ( ! is_user_logged_in() || ! current_user_can( $this->args['page_permissions'] ) ) {
         wp_die( -1 );
     }`}];function $3(){const[o,e]=Tn.useState(!1),[a,s]=Tn.useState(null),u=()=>{navigator.clipboard.writeText("kidakabadiop2010@gmail.com"),e(!0),setTimeout(()=>e(!1),2e3)};return nt.jsxs("div",{className:"min-h-screen bg-[#030305] text-[#ededed] font-sans antialiased relative selection:bg-cyan-500/20 selection:text-cyan-300",children:[nt.jsx("header",{className:"sticky top-4 z-50 max-w-5xl mx-auto px-4",children:nt.jsxs("nav",{className:"rounded-full bg-black/60 backdrop-blur-xl border border-white/10 px-5 py-3 flex items-center justify-between shadow-2xl",children:[nt.jsxs("div",{className:"flex items-center gap-3",children:[nt.jsx("div",{className:"w-7 h-7 rounded-lg bg-gradient-to-tr from-cyan-500 to-emerald-400 flex items-center justify-center font-mono font-bold text-black text-xs shadow-lg shadow-cyan-500/20",children:"OM"}),nt.jsxs("div",{className:"flex items-center gap-2 font-mono text-xs",children:[nt.jsx("span",{className:"font-semibold text-white",children:"Ojas Mehta"}),nt.jsx("span",{className:"text-zinc-500 hidden sm:inline",children:"// systems & offensive research"})]})]}),nt.jsxs("div",{className:"flex items-center gap-4 text-xs font-mono",children:[nt.jsxs("div",{className:"flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",children:[nt.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"}),nt.jsx("span",{children:"ACTIVE RESEARCH"})]}),nt.jsxs("a",{href:"https://github.com/blah-blah-cell",target:"_blank",rel:"noreferrer",className:"flex items-center gap-1 text-zinc-400 hover:text-white transition-colors",children:[nt.jsx(hx,{className:"w-3.5 h-3.5"}),nt.jsx("span",{className:"hidden sm:inline",children:"GitHub"}),nt.jsx(dl,{className:"w-3 h-3 text-zinc-500"})]})]})]})}),nt.jsxs("main",{className:"max-w-5xl mx-auto px-4 pt-8 pb-28 space-y-20",children:[nt.jsxs("section",{className:"space-y-6 pt-4",children:[nt.jsxs("div",{className:"space-y-3 max-w-3xl",children:[nt.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800 text-xs font-mono text-zinc-400",children:[nt.jsx(j3,{className:"w-3.5 h-3.5 text-cyan-400"}),nt.jsx("span",{children:"GRADE 11 RESEARCHER • SYSTEMS & OFFENSIVE SECURITY"})]}),nt.jsxs("h1",{className:"text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.1]",children:["Architecting ",nt.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400",children:"low-latency runtimes"})," & breaking critical infrastructure."]}),nt.jsx("p",{className:"text-base sm:text-lg text-zinc-400 leading-relaxed pt-1",children:"Building on-device neural intrusion defense engines, WebGPU particle physics workstations, and discovering confirmed vulnerabilities across 500M+ global users."})]}),nt.jsx(Q3,{})]}),nt.jsxs("section",{className:"space-y-6",children:[nt.jsxs("div",{className:"flex items-center justify-between font-mono",children:[nt.jsxs("div",{className:"text-xs uppercase tracking-widest text-zinc-400 font-bold flex items-center gap-2",children:[nt.jsx(Y3,{className:"w-4 h-4 text-cyan-400"}),nt.jsx("span",{children:"Systems Engineering"})]}),nt.jsx("span",{className:"text-xs text-zinc-500",children:"HOVER CARDS FOR 3D PERSPECTIVE"})]}),nt.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5",children:[nt.jsxs(xc,{className:"p-6 sm:p-8 flex flex-col justify-between group border-beam",children:[nt.jsxs("div",{className:"space-y-4",children:[nt.jsxs("div",{className:"flex items-center justify-between font-mono text-xs",children:[nt.jsxs("span",{className:"px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold flex items-center gap-1.5",children:[nt.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"}),"EDGE NIDS RUNTIME"]}),nt.jsx("span",{className:"text-zinc-500",children:"Rust / Python"})]}),nt.jsxs("div",{className:"space-y-2",children:[nt.jsx("h3",{className:"text-2xl font-bold text-white tracking-tight group-hover:text-emerald-300 transition-colors",children:"Senti_Argus — Autonomous Edge Intrusion Defense"}),nt.jsx("p",{className:"text-sm text-zinc-300 leading-relaxed",children:"Low-latency local intrusion detection runtime with 4-layer Mixture-of-Experts neural routing. Ingests raw packet streams via Windows Pktmon / Promiscuous TAP, extracting 48-dimensional flow entropy vectors in sub-3 milliseconds without external cloud dependency."})]}),nt.jsxs("div",{className:"rounded-xl bg-black/60 p-3 font-mono text-xs text-zinc-400 border border-zinc-800/80 space-y-1",children:[nt.jsx("div",{className:"text-emerald-400 font-semibold",children:"✓ Ingestion: Native Windows Pktmon Driver"}),nt.jsx("div",{children:"→ Extraction: 48-dim entropy, burst drift, TCP window velocity"}),nt.jsx("div",{className:"text-cyan-300",children:"⚡ Inference: 2.14ms (MoE gating network)"})]})]}),nt.jsxs("div",{className:"pt-6 flex items-center justify-between font-mono text-xs",children:[nt.jsx("span",{className:"text-zinc-500",children:"CIC-IDS Benchmark Verified"}),nt.jsxs("a",{href:"https://github.com/blah-blah-cell/argus-next",target:"_blank",rel:"noreferrer",className:"flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-bold transition-colors",children:[nt.jsx("span",{children:"Inspect Code"}),nt.jsx(dl,{className:"w-4 h-4"})]})]})]}),nt.jsxs(xc,{className:"p-6 sm:p-8 flex flex-col justify-between group",children:[nt.jsxs("div",{className:"space-y-4",children:[nt.jsxs("div",{className:"flex items-center justify-between font-mono text-xs",children:[nt.jsx("span",{className:"px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-bold",children:"WEBGPU ACCELERATOR"}),nt.jsx("span",{className:"text-zinc-500",children:"WGSL / TypeScript"})]}),nt.jsxs("div",{className:"space-y-2",children:[nt.jsx("h3",{className:"text-2xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors",children:"ASTRODYNE PRIME — N-Body Workstation"}),nt.jsx("p",{className:"text-sm text-zinc-300 leading-relaxed",children:"Browser-native Barnes-Hut Octree $O(N \\log N)$ compute engine simulating 500,000+ interacting celestial bodies at continuous 60 FPS with 4th-order symplectic Runge-Kutta numerical integration and relativistic accretion physics."})]}),nt.jsxs("div",{className:"rounded-xl bg-black/60 p-3 font-mono text-xs text-zinc-400 border border-zinc-800/80 space-y-1",children:[nt.jsxs("div",{className:"flex justify-between",children:[nt.jsx("span",{children:"Workgroup Size:"})," ",nt.jsx("span",{className:"text-white font-bold",children:"256 Threads"})]}),nt.jsxs("div",{className:"flex justify-between",children:[nt.jsx("span",{children:"Throughput:"})," ",nt.jsx("span",{className:"text-emerald-400 font-bold",children:"60 FPS @ 500k"})]}),nt.jsxs("div",{className:"flex justify-between",children:[nt.jsx("span",{children:"Integrator:"})," ",nt.jsx("span",{className:"text-cyan-300",children:"Symplectic RK4"})]})]})]}),nt.jsxs("div",{className:"pt-6 flex items-center justify-between font-mono text-xs",children:[nt.jsx("span",{className:"text-zinc-500",children:"Open-Source Engine"}),nt.jsxs("a",{href:"https://github.com/blah-blah-cell/astrodyne-prime",target:"_blank",rel:"noreferrer",className:"flex items-center gap-1 text-cyan-400 hover:text-cyan-300 font-bold transition-colors",children:[nt.jsx("span",{children:"Launch Simulator"}),nt.jsx(dl,{className:"w-4 h-4"})]})]})]}),nt.jsxs(xc,{className:"p-6 sm:p-8 flex flex-col justify-between group",children:[nt.jsxs("div",{className:"space-y-4",children:[nt.jsxs("div",{className:"flex items-center justify-between font-mono text-xs",children:[nt.jsx("span",{className:"px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-bold",children:"BINARY FORENSICS"}),nt.jsx("span",{className:"text-zinc-500",children:"Pure C"})]}),nt.jsxs("div",{className:"space-y-2",children:[nt.jsx("h3",{className:"text-xl font-bold text-white tracking-tight group-hover:text-indigo-300 transition-colors",children:"PE-Seal — Authenticode Signature Parser"}),nt.jsx("p",{className:"text-sm text-zinc-300 leading-relaxed",children:"Zero-dependency PE32 / PE32+ parser and digital signature extractor. Verifies PKCS#7 signed Authenticode binaries directly from raw byte streams without Win32 or OpenSSL runtime dependencies."})]})]}),nt.jsxs("div",{className:"pt-6 flex items-center justify-between font-mono text-xs",children:[nt.jsx("span",{className:"text-zinc-500",children:"Zero Dependencies"}),nt.jsxs("a",{href:"https://github.com/blah-blah-cell/pe-seal",target:"_blank",rel:"noreferrer",className:"flex items-center gap-1 text-indigo-400 hover:text-indigo-300 font-bold transition-colors",children:[nt.jsx("span",{children:"View Repository"}),nt.jsx(dl,{className:"w-4 h-4"})]})]})]}),nt.jsxs(xc,{className:"p-6 sm:p-8 flex flex-col justify-between group",children:[nt.jsxs("div",{className:"space-y-4",children:[nt.jsxs("div",{className:"flex items-center justify-between font-mono text-xs",children:[nt.jsx("span",{className:"px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 font-bold",children:"NATIVE SRE BRIDGE"}),nt.jsx("span",{className:"text-zinc-500",children:"Ghidra 12.1 + Frida"})]}),nt.jsxs("div",{className:"space-y-2",children:[nt.jsx("h3",{className:"text-xl font-bold text-white tracking-tight group-hover:text-amber-300 transition-colors",children:"Project Anvil — Android ARM64 SRE Engine"}),nt.jsx("p",{className:"text-sm text-zinc-300 leading-relaxed",children:"High-level automated reverse engineering bridge connecting Ghidra SRE, Android Virtual Device emulators, and Frida dynamic instrumentation over MCP for decompiling proprietary ARM64 native libraries."})]})]}),nt.jsxs("div",{className:"pt-6 flex items-center justify-between font-mono text-xs",children:[nt.jsx("span",{className:"text-zinc-500",children:"Dynamic MCP Instrumentation"}),nt.jsxs("a",{href:"https://github.com/blah-blah-cell/zomato-mcp-security-assessment",target:"_blank",rel:"noreferrer",className:"flex items-center gap-1 text-amber-400 hover:text-amber-300 font-bold transition-colors",children:[nt.jsx("span",{children:"Audit Framework"}),nt.jsx(dl,{className:"w-4 h-4"})]})]})]})]})]}),nt.jsxs("section",{className:"space-y-6",children:[nt.jsxs("div",{className:"flex items-center justify-between font-mono",children:[nt.jsxs("div",{className:"text-xs uppercase tracking-widest text-zinc-400 font-bold flex items-center gap-2",children:[nt.jsx(X3,{className:"w-4 h-4 text-rose-400"}),nt.jsx("span",{children:"Verified Vulnerability Disclosures"})]}),nt.jsx("span",{className:"text-xs text-zinc-500",children:"500M+ USER SURFACE AUDITED"})]}),nt.jsx("div",{className:"space-y-3",children:J3.map(f=>{const d=a===f.id;return nt.jsxs("div",{className:"rounded-2xl bg-[#09090e] border border-white/[0.08] hover:border-white/[0.18] transition-all overflow-hidden",children:[nt.jsxs("div",{onClick:()=>s(d?null:f.id),className:"p-5 flex items-center justify-between cursor-pointer group",children:[nt.jsxs("div",{className:"space-y-1 pr-4",children:[nt.jsxs("div",{className:"flex items-center gap-2",children:[nt.jsx("span",{className:"font-bold text-white group-hover:text-rose-300 transition-colors",children:f.target}),nt.jsxs("span",{className:"text-xs font-mono text-zinc-500",children:["(",f.reach,")"]})]}),nt.jsx("div",{className:"text-sm text-zinc-400",children:f.title})]}),nt.jsxs("div",{className:"flex items-center gap-3 shrink-0 font-mono text-xs",children:[nt.jsx("span",{className:"px-2.5 py-1 rounded-md bg-rose-500/10 text-rose-400 border border-rose-500/20 font-semibold",children:f.severity}),nt.jsx(W3,{className:`w-4 h-4 text-zinc-500 transition-transform duration-200 ${d?"rotate-90 text-white":"group-hover:text-zinc-300"}`})]})]}),d&&nt.jsxs("div",{className:"px-5 pb-5 pt-1 space-y-3 font-mono text-xs border-t border-white/[0.06]",children:[nt.jsx("p",{className:"text-zinc-300 font-sans text-sm leading-relaxed pt-2",children:f.summary}),nt.jsx("div",{className:"rounded-xl bg-black/80 border border-zinc-800 p-3 overflow-x-auto text-[11px] leading-relaxed",children:nt.jsx("pre",{children:f.diff.split(`
`).map((h,m)=>{let p="text-zinc-400";return h.startsWith("+")?p="text-emerald-400 bg-emerald-500/5":h.startsWith("-")?p="text-rose-400 bg-rose-500/5":h.startsWith("@@")&&(p="text-cyan-400 font-bold"),nt.jsx("div",{className:`px-1 ${p}`,children:h},m)})})}),nt.jsxs("div",{className:"flex justify-between text-zinc-500 text-[11px] pt-1",children:[nt.jsxs("span",{children:["Classification: ",f.cwe]}),nt.jsx("span",{children:"Coordinated Disclosure Protocol"})]})]})]},f.id)})})]}),nt.jsxs("footer",{className:"pt-12 border-t border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs text-zinc-500",children:[nt.jsxs("div",{className:"space-y-1",children:[nt.jsx("div",{className:"text-white font-semibold",children:"Ojas Mehta"}),nt.jsx("div",{children:"First-Principles Systems Engineering & Security"})]}),nt.jsxs("div",{className:"flex items-center gap-3",children:[nt.jsxs("button",{onClick:u,className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white transition-colors border border-white/10",children:[o?nt.jsx(k3,{className:"w-3.5 h-3.5 text-emerald-400"}):nt.jsx(q3,{className:"w-3.5 h-3.5"}),nt.jsx("span",{children:o?"Copied Email":"kidakabadiop2010@gmail.com"})]}),nt.jsxs("a",{href:"https://github.com/blah-blah-cell",target:"_blank",rel:"noreferrer",className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white transition-colors border border-white/10",children:[nt.jsx(hx,{className:"w-3.5 h-3.5"}),nt.jsx("span",{children:"@blah-blah-cell"})]})]})]})]})]})}tE.createRoot(document.getElementById("root")).render(nt.jsx(qy.StrictMode,{children:nt.jsx($3,{})}));
