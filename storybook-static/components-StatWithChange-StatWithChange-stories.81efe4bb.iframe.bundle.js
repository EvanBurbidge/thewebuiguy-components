/*! For license information please see components-StatWithChange-StatWithChange-stories.81efe4bb.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_thewebuiguy_components=self.webpackChunk_thewebuiguy_components||[]).push([[3163],{"./node_modules/@heroicons/react/solid/esm/ArrowSmDownIcon.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const ForwardRef=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function ArrowSmDownIcon(props,svgRef){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:svgRef},props),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fillRule:"evenodd",d:"M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z",clipRule:"evenodd"}))}));__webpack_exports__.Z=ForwardRef},"./node_modules/@heroicons/react/solid/esm/ArrowSmUpIcon.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const ForwardRef=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function ArrowSmUpIcon(props,svgRef){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:svgRef},props),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fillRule:"evenodd",d:"M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z",clipRule:"evenodd"}))}));__webpack_exports__.Z=ForwardRef},"./src/components/StatWithChange/StatWithChange.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:function(){return Primary},__namedExportsOrder:function(){return __namedExportsOrder}});var _StatWithChange__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/StatWithChange/StatWithChange.tsx");__webpack_exports__.default={title:"TheWebUiGuy/StatWithChange",component:_StatWithChange__WEBPACK_IMPORTED_MODULE_0__.o};const Primary={args:{stats:[{name:"Total Subscribers",stat:"71,897",previousStat:"70,946",change:"12%",changeType:"increase"},{name:"Avg. Open Rate",stat:"58.16%",previousStat:"56.14%",change:"2.02%",changeType:"increase"},{name:"Avg. Click Rate",stat:"24.57%",previousStat:"28.62%",change:"4.05%",changeType:"decrease"}]}};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {\n    stats\n  }\n}",...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]},"./src/components/StatWithChange/StatWithChange.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{o:function(){return StatWithChange}});__webpack_require__("./node_modules/react/index.js");var classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@heroicons/react/solid/esm/ArrowSmUpIcon.js"),_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@heroicons/react/solid/esm/ArrowSmDownIcon.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const StatWithChange=({stats:stats})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3",{className:"text-lg font-medium leading-6 text-gray-900",children:"Last 30 days"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("dl",{className:"grid grid-cols-1 mt-5 overflow-hidden bg-white divide-y divide-gray-200 rounded-lg shadow md:grid-cols-3 md:divide-y-0 md:divide-x",children:stats.map((item=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"px-4 py-5 sm:p-6",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("dt",{className:"text-base font-normal text-primary",children:item.name}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("dd",{className:"flex items-baseline justify-between mt-1 md:block lg:flex",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"flex items-baseline text-2xl font-semibold text-highlight",children:[item.stat,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span",{className:"ml-2 text-sm font-medium text-secondary",children:["from ",item.previousStat]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("increase"===item.changeType?"bg-green-100 text-success":"bg-red-100 text-error","inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium md:mt-2 lg:mt-0"),children:["increase"===item.changeType?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__.Z,{className:"-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-success","aria-hidden":"true"}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__.Z,{className:"-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-error","aria-hidden":"true"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span",{className:"sr-only",children:["increase"===item.changeType?"Increased":"Decreased"," by"]}),item.change]})]})]},item.name)))})]});StatWithChange.displayName="StatWithChange";try{StatWithChange.displayName="StatWithChange",StatWithChange.__docgenInfo={description:"",displayName:"StatWithChange",props:{stats:{defaultValue:null,description:"",name:"stats",required:!0,type:{name:"StatWithChangeItem[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/StatWithChange/StatWithChange.tsx#StatWithChange"]={docgenInfo:StatWithChange.__docgenInfo,name:"StatWithChange",path:"src/components/StatWithChange/StatWithChange.tsx#StatWithChange"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/classnames/index.js":function(module,exports){var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);