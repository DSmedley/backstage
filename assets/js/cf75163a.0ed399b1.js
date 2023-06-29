/*! For license information please see cf75163a.0ed399b1.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[317182],{693122:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>a,default:()=>l,frontMatter:()=>c,metadata:()=>s,toc:()=>u});var t=n(824246),o=n(511151);const c={id:"backend-common.servertokenmanager",title:"ServerTokenManager",description:"API reference for ServerTokenManager"},a=void 0,s={unversionedId:"reference/backend-common.servertokenmanager",id:"reference/backend-common.servertokenmanager",title:"ServerTokenManager",description:"API reference for ServerTokenManager",source:"@site/../docs/reference/backend-common.servertokenmanager.md",sourceDirName:"reference",slug:"/reference/backend-common.servertokenmanager",permalink:"/docs/reference/backend-common.servertokenmanager",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/backend-common.servertokenmanager.md",tags:[],version:"current",frontMatter:{id:"backend-common.servertokenmanager",title:"ServerTokenManager",description:"API reference for ServerTokenManager"}},i={},u=[{value:"Methods",id:"methods",level:2}];function f(e){const r=Object.assign({p:"p",a:"a",code:"code",b:"b",pre:"pre",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,o.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/backend-common",children:(0,t.jsx)(r.code,{children:"@backstage/backend-common"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/backend-common.servertokenmanager",children:(0,t.jsx)(r.code,{children:"ServerTokenManager"})})]}),"\n",(0,t.jsx)(r.p,{children:"Creates and validates tokens for use during service-to-service authentication."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.b,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"class ServerTokenManager implements TokenManager \n"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.b,{children:"Implements:"})," ",(0,t.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.tokenmanagerservice",children:"TokenManager"})]}),"\n",(0,t.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Method"}),(0,t.jsx)(r.th,{children:"Modifiers"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/backend-common.servertokenmanager.authenticate",children:"authenticate(token)"})}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/backend-common.servertokenmanager.fromconfig",children:"fromConfig(config, options)"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"static"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/backend-common.servertokenmanager.gettoken",children:"getToken()"})}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/backend-common.servertokenmanager.noop",children:"noop()"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"static"})}),(0,t.jsx)(r.td,{children:"Creates a token manager that issues static fake tokens and never fails authentication. This can be useful for testing."})]})]})]})]})}const l=function(e={}){const{wrapper:r}=Object.assign({},(0,o.ah)(),e.components);return r?(0,t.jsx)(r,Object.assign({},e,{children:(0,t.jsx)(f,e)})):f(e)}},862525:e=>{var r=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},n=0;n<10;n++)r["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var t={};return"abcdefghijklmnopqrst".split("").forEach((function(e){t[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},t)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var c,a,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),i=1;i<arguments.length;i++){for(var u in c=Object(arguments[i]))n.call(c,u)&&(s[u]=c[u]);if(r){a=r(c);for(var f=0;f<a.length;f++)t.call(c,a[f])&&(s[a[f]]=c[a[f]])}}return s}},371426:(e,r,n)=>{n(862525);var t=n(827378),o=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var c=Symbol.for;o=c("react.element"),r.Fragment=c("react.fragment")}var a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,i={key:!0,ref:!0,__self:!0,__source:!0};function u(e,r,n){var t,c={},u=null,f=null;for(t in void 0!==n&&(u=""+n),void 0!==r.key&&(u=""+r.key),void 0!==r.ref&&(f=r.ref),r)s.call(r,t)&&!i.hasOwnProperty(t)&&(c[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===c[t]&&(c[t]=r[t]);return{$$typeof:o,type:e,key:u,ref:f,props:c,_owner:a.current}}r.jsx=u,r.jsxs=u},541535:(e,r,n)=>{var t=n(862525),o=60103,c=60106;r.Fragment=60107,r.StrictMode=60108,r.Profiler=60114;var a=60109,s=60110,i=60112;r.Suspense=60113;var u=60115,f=60116;if("function"==typeof Symbol&&Symbol.for){var l=Symbol.for;o=l("react.element"),c=l("react.portal"),r.Fragment=l("react.fragment"),r.StrictMode=l("react.strict_mode"),r.Profiler=l("react.profiler"),a=l("react.provider"),s=l("react.context"),i=l("react.forward_ref"),r.Suspense=l("react.suspense"),u=l("react.memo"),f=l("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function p(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function y(e,r,n){this.props=e,this.context=r,this.refs=m,this.updater=n||h}function v(){}function b(e,r,n){this.props=e,this.context=r,this.refs=m,this.updater=n||h}y.prototype.isReactComponent={},y.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(p(85));this.updater.enqueueSetState(this,e,r,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=y.prototype;var g=b.prototype=new v;g.constructor=b,t(g,y.prototype),g.isPureReactComponent=!0;var k={current:null},j=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function _(e,r,n){var t,c={},a=null,s=null;if(null!=r)for(t in void 0!==r.ref&&(s=r.ref),void 0!==r.key&&(a=""+r.key),r)j.call(r,t)&&!x.hasOwnProperty(t)&&(c[t]=r[t]);var i=arguments.length-2;if(1===i)c.children=n;else if(1<i){for(var u=Array(i),f=0;f<i;f++)u[f]=arguments[f+2];c.children=u}if(e&&e.defaultProps)for(t in i=e.defaultProps)void 0===c[t]&&(c[t]=i[t]);return{$$typeof:o,type:e,key:a,ref:s,props:c,_owner:k.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var O=/\/+/g;function w(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function C(e,r,n,t,a){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var i=!1;if(null===e)i=!0;else switch(s){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case o:case c:i=!0}}if(i)return a=a(i=e),e=""===t?"."+w(i,0):t,Array.isArray(a)?(n="",null!=e&&(n=e.replace(O,"$&/")+"/"),C(a,r,n,"",(function(e){return e}))):null!=a&&(S(a)&&(a=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(a,n+(!a.key||i&&i.key===a.key?"":(""+a.key).replace(O,"$&/")+"/")+e)),r.push(a)),1;if(i=0,t=""===t?".":t+":",Array.isArray(e))for(var u=0;u<e.length;u++){var f=t+w(s=e[u],u);i+=C(s,r,n,f,a)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),u=0;!(s=e.next()).done;)i+=C(s=s.value,r,n,f=t+w(s,u++),a);else if("object"===s)throw r=""+e,Error(p(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return i}function E(e,r,n){if(null==e)return e;var t=[],o=0;return C(e,t,"","",(function(e){return r.call(n,e,o++)})),t}function P(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var $={current:null};function R(){var e=$.current;if(null===e)throw Error(p(321));return e}var M={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:k,IsSomeRendererActing:{current:!1},assign:t};r.Children={map:E,forEach:function(e,r,n){E(e,(function(){r.apply(this,arguments)}),n)},count:function(e){var r=0;return E(e,(function(){r++})),r},toArray:function(e){return E(e,(function(e){return e}))||[]},only:function(e){if(!S(e))throw Error(p(143));return e}},r.Component=y,r.PureComponent=b,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=M,r.cloneElement=function(e,r,n){if(null==e)throw Error(p(267,e));var c=t({},e.props),a=e.key,s=e.ref,i=e._owner;if(null!=r){if(void 0!==r.ref&&(s=r.ref,i=k.current),void 0!==r.key&&(a=""+r.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(f in r)j.call(r,f)&&!x.hasOwnProperty(f)&&(c[f]=void 0===r[f]&&void 0!==u?u[f]:r[f])}var f=arguments.length-2;if(1===f)c.children=n;else if(1<f){u=Array(f);for(var l=0;l<f;l++)u[l]=arguments[l+2];c.children=u}return{$$typeof:o,type:e.type,key:a,ref:s,props:c,_owner:i}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:s,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},r.createElement=_,r.createFactory=function(e){var r=_.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:i,render:e}},r.isValidElement=S,r.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:P}},r.memo=function(e,r){return{$$typeof:u,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return R().useCallback(e,r)},r.useContext=function(e,r){return R().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return R().useEffect(e,r)},r.useImperativeHandle=function(e,r,n){return R().useImperativeHandle(e,r,n)},r.useLayoutEffect=function(e,r){return R().useLayoutEffect(e,r)},r.useMemo=function(e,r){return R().useMemo(e,r)},r.useReducer=function(e,r,n){return R().useReducer(e,r,n)},r.useRef=function(e){return R().useRef(e)},r.useState=function(e){return R().useState(e)},r.version="17.0.2"},827378:(e,r,n)=>{e.exports=n(541535)},824246:(e,r,n)=>{e.exports=n(371426)},511151:(e,r,n)=>{n.d(r,{Zo:()=>s,ah:()=>c});var t=n(667294);const o=t.createContext({});function c(e){const r=t.useContext(o);return t.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const a={};function s({components:e,children:r,disableParentContext:n}){let s;return s=n?"function"==typeof e?e({}):e||a:c(e),t.createElement(o.Provider,{value:s},r)}}}]);