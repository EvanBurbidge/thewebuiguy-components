/*! For license information please see components-Banner-Banner-stories.e59f113d.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_thewebuiguy_components=self.webpackChunk_thewebuiguy_components||[]).push([[5689],{"./node_modules/@heroicons/react/outline/esm/XIcon.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const ForwardRef=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function XIcon(props,svgRef){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:svgRef},props),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"}))}));__webpack_exports__.Z=ForwardRef},"./src/components/Banner/Banner.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:function(){return Primary},__namedExportsOrder:function(){return __namedExportsOrder}});var _Banner__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Banner/Banner.tsx");__webpack_exports__.default={title:"TheWebUiGuy/Banner",component:_Banner__WEBPACK_IMPORTED_MODULE_0__.j,argTypes:{bannerType:{control:{type:"radio",options:["floatingFooter","stickyFooter","stickyHeader"]}},type:{control:{type:"select",options:["primary","secondary","success","error"],defaultValue:"primary"}}}};const Primary={args:{type:"primary",bannerType:"stickyHeader",title:"We have some exciting news",longTitle:"We now have floating banners",closeText:"Dismiss",cta:"Learn about it",closeAction:()=>{console.log("noooope")},ctaAction:()=>{console.log("noooope")}}};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:'{\n  args: {\n    type: "primary",\n    bannerType: "stickyHeader",\n    title: "We have some exciting news",\n    longTitle: "We now have floating banners",\n    closeText: "Dismiss",\n    cta: "Learn about it",\n    closeAction: () => {\n      console.log("noooope");\n    },\n    ctaAction: () => {\n      console.log("noooope");\n    }\n  }\n}',...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]},"./src/components/Banner/Banner.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{j:function(){return Banner}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_BannerStickyFooter__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/BannerStickyFooter/index.ts"),_BannerStickyHeader__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/BannerStickyHeader/index.ts"),_BannerFloatingFooter__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/BannerFloatingFooter/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Banners={floatingFooter:_BannerFloatingFooter__WEBPACK_IMPORTED_MODULE_3__.O,stickyFooter:_BannerStickyFooter__WEBPACK_IMPORTED_MODULE_1__.R,stickyHeader:_BannerStickyHeader__WEBPACK_IMPORTED_MODULE_2__.q},Banner=props=>{const Banner=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>props.bannerType?Banners[props.bannerType]:Banners.floatingFooter),[props.bannerType]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Banner,{...props})};Banner.displayName="Banner";try{Banner.displayName="Banner",Banner.__docgenInfo={description:"",displayName:"Banner",props:{bannerType:{defaultValue:null,description:"",name:"bannerType",required:!0,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"string"}},cta:{defaultValue:null,description:"",name:"cta",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},longTitle:{defaultValue:null,description:"",name:"longTitle",required:!0,type:{name:"string"}},closeText:{defaultValue:null,description:"",name:"closeText",required:!0,type:{name:"string"}},closeAction:{defaultValue:null,description:"",name:"closeAction",required:!0,type:{name:"() => void"}},ctaAction:{defaultValue:null,description:"",name:"ctaAction",required:!0,type:{name:"() => void"}},Icon:{defaultValue:null,description:"",name:"Icon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},rounded:{defaultValue:null,description:"",name:"rounded",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Banner/Banner.tsx#Banner"]={docgenInfo:Banner.__docgenInfo,name:"Banner",path:"src/components/Banner/Banner.tsx#Banner"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/BannerBody/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{e:function(){return BannerBody}});__webpack_require__("./node_modules/react/index.js");var useType=__webpack_require__("./src/components/hooks/useType.ts"),XIcon=__webpack_require__("./node_modules/@heroicons/react/outline/esm/XIcon.js"),Button=__webpack_require__("./src/components/Button/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const BannerBody=({title:title,longTitle:longTitle,type:type,ctaAction:ctaAction,closeAction:closeAction,closeText:closeText,Icon:Icon,cta:cta,rounded:rounded=!0})=>{const{background:background}=(0,useType.o)(type);return(0,jsx_runtime.jsx)("div",{className:`p-2 ${background} ${rounded?"rounded-lg":""} shadow-lg sm:p-3`,children:(0,jsx_runtime.jsxs)("div",{className:"flex flex-wrap items-center justify-between",children:[(0,jsx_runtime.jsxs)("div",{className:"flex items-center flex-1 w-0",children:[Icon&&(0,jsx_runtime.jsx)("span",{className:"flex p-2 rounded-lg",children:Icon}),(0,jsx_runtime.jsxs)("p",{className:"ml-3 font-medium text-white truncate",children:[(0,jsx_runtime.jsx)("span",{className:"md:hidden",children:title}),(0,jsx_runtime.jsx)("span",{className:"hidden md:inline",children:longTitle})]})]}),(0,jsx_runtime.jsx)("div",{className:"flex-shrink-0 order-3 w-full mt-2 sm:order-2 sm:mt-0 sm:w-auto",children:(0,jsx_runtime.jsx)("span",{onClick:ctaAction,className:`flex items-center justify-center px-4 py-2 text-sm font-medium text-${type} bg-white border border-transparent rounded-md shadow-sm`,children:cta})}),(0,jsx_runtime.jsx)("div",{className:"flex-shrink-0 order-2 sm:order-3 sm:ml-2",children:(0,jsx_runtime.jsxs)(Button.z,{id:"dismiss-button",type:type,onClick:closeAction,children:[(0,jsx_runtime.jsx)("span",{className:"sr-only",children:closeText}),(0,jsx_runtime.jsx)(XIcon.Z,{className:"w-6 h-6 text-white","aria-hidden":"true"})]})})]})})};BannerBody.displayName="BannerBody";try{BannerBody.displayName="BannerBody",BannerBody.__docgenInfo={description:"",displayName:"BannerBody",props:{type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"string"}},cta:{defaultValue:null,description:"",name:"cta",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},longTitle:{defaultValue:null,description:"",name:"longTitle",required:!0,type:{name:"string"}},closeText:{defaultValue:null,description:"",name:"closeText",required:!0,type:{name:"string"}},closeAction:{defaultValue:null,description:"",name:"closeAction",required:!0,type:{name:"() => void"}},ctaAction:{defaultValue:null,description:"",name:"ctaAction",required:!0,type:{name:"() => void"}},Icon:{defaultValue:null,description:"",name:"Icon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},rounded:{defaultValue:{value:"true"},description:"",name:"rounded",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/BannerBody/BannerBody.tsx#BannerBody"]={docgenInfo:BannerBody.__docgenInfo,name:"BannerBody",path:"src/components/BannerBody/BannerBody.tsx#BannerBody"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/BannerFloatingFooter/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{O:function(){return BannerFloatingFooter}});__webpack_require__("./node_modules/react/index.js");var BannerBody=__webpack_require__("./src/components/BannerBody/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const BannerFloatingFooter=({type:type,...rest})=>(0,jsx_runtime.jsx)("div",{className:"fixed inset-x-0 bottom-0 pb-2 sm:pb-5",children:(0,jsx_runtime.jsx)("div",{className:"px-2 mx-auto max-w-7xl sm:px-6 lg:px-8",children:(0,jsx_runtime.jsx)(BannerBody.e,{type:type,rounded:!0,...rest})})});BannerFloatingFooter.displayName="BannerFloatingFooter";try{BannerFloatingFooter.displayName="BannerFloatingFooter",BannerFloatingFooter.__docgenInfo={description:"",displayName:"BannerFloatingFooter",props:{type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"string"}},cta:{defaultValue:null,description:"",name:"cta",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},longTitle:{defaultValue:null,description:"",name:"longTitle",required:!0,type:{name:"string"}},closeText:{defaultValue:null,description:"",name:"closeText",required:!0,type:{name:"string"}},closeAction:{defaultValue:null,description:"",name:"closeAction",required:!0,type:{name:"() => void"}},ctaAction:{defaultValue:null,description:"",name:"ctaAction",required:!0,type:{name:"() => void"}},Icon:{defaultValue:null,description:"",name:"Icon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},rounded:{defaultValue:null,description:"",name:"rounded",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/BannerFloatingFooter/BannerFloatingFooter.tsx#BannerFloatingFooter"]={docgenInfo:BannerFloatingFooter.__docgenInfo,name:"BannerFloatingFooter",path:"src/components/BannerFloatingFooter/BannerFloatingFooter.tsx#BannerFloatingFooter"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/BannerStickyFooter/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{R:function(){return BannerStickyFooter}});__webpack_require__("./node_modules/react/index.js");var BannerBody=__webpack_require__("./src/components/BannerBody/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const BannerStickyFooter=props=>(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)("div",{className:"fixed inset-x-0 bottom-0",children:(0,jsx_runtime.jsx)(BannerBody.e,{...props,rounded:!1})})});try{BannerStickyFooter.displayName="BannerStickyFooter",BannerStickyFooter.__docgenInfo={description:"",displayName:"BannerStickyFooter",props:{type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"string"}},cta:{defaultValue:null,description:"",name:"cta",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},longTitle:{defaultValue:null,description:"",name:"longTitle",required:!0,type:{name:"string"}},closeText:{defaultValue:null,description:"",name:"closeText",required:!0,type:{name:"string"}},closeAction:{defaultValue:null,description:"",name:"closeAction",required:!0,type:{name:"() => void"}},ctaAction:{defaultValue:null,description:"",name:"ctaAction",required:!0,type:{name:"() => void"}},Icon:{defaultValue:null,description:"",name:"Icon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},rounded:{defaultValue:null,description:"",name:"rounded",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/BannerStickyFooter/BannerStickyFooter.tsx#BannerStickyFooter"]={docgenInfo:BannerStickyFooter.__docgenInfo,name:"BannerStickyFooter",path:"src/components/BannerStickyFooter/BannerStickyFooter.tsx#BannerStickyFooter"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/BannerStickyHeader/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{q:function(){return BannerStickyHeader}});__webpack_require__("./node_modules/react/index.js");var BannerBody=__webpack_require__("./src/components/BannerBody/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const BannerStickyHeader=props=>(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)("div",{className:"fixed inset-x-0 top-0",children:(0,jsx_runtime.jsx)(BannerBody.e,{...props,rounded:!1})})});try{BannerStickyHeader.displayName="BannerStickyHeader",BannerStickyHeader.__docgenInfo={description:"",displayName:"BannerStickyHeader",props:{type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"string"}},cta:{defaultValue:null,description:"",name:"cta",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},longTitle:{defaultValue:null,description:"",name:"longTitle",required:!0,type:{name:"string"}},closeText:{defaultValue:null,description:"",name:"closeText",required:!0,type:{name:"string"}},closeAction:{defaultValue:null,description:"",name:"closeAction",required:!0,type:{name:"() => void"}},ctaAction:{defaultValue:null,description:"",name:"ctaAction",required:!0,type:{name:"() => void"}},Icon:{defaultValue:null,description:"",name:"Icon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},rounded:{defaultValue:null,description:"",name:"rounded",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/BannerStickyHeader/BannerStickyHeader.tsx#BannerStickyHeader"]={docgenInfo:BannerStickyHeader.__docgenInfo,name:"BannerStickyHeader",path:"src/components/BannerStickyHeader/BannerStickyHeader.tsx#BannerStickyHeader"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Button/Button.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{z:function(){return Button}});__webpack_require__("./node_modules/react/index.js");var classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Button=({id:id,onClick:onClick,type:type="primary",children:children,disabled:disabled,buttonType:buttonType,classNames:extraClasses})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{id:id,"data-testid":id,type:buttonType,onClick:()=>{disabled||onClick()},className:classnames__WEBPACK_IMPORTED_MODULE_1___default()(`inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded shadow-sm focus:outline-none ${extraClasses}`,{"bg-error hover:bg-errorHover text-white":"error"===type,"bg-success hover:bg-successHover text-white":"success"===type,"bg-secondary hover:bg-secondaryHover text-white":"secondary"===type,"bg-warning hover:bg-warningHover text-white":"warning"===type,"bg-primary hover:bg-primaryHover text-white":"primary"===type}),children:children});Button.displayName="Button";try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"any"}},type:{defaultValue:{value:"primary"},description:"",name:"type",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},buttonType:{defaultValue:null,description:"",name:"buttonType",required:!1,type:{name:"any"}},classNames:{defaultValue:null,description:"",name:"classNames",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Button/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{z:function(){return _Button__WEBPACK_IMPORTED_MODULE_0__.z}});var _Button__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Button/Button.tsx")},"./src/components/hooks/useType.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{o:function(){return useType}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const useType=type=>{const{background:background,text:text,border:border}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>{switch(type){case"secondary":return{background:"bg-secondary",border:"border-secondaryHover",text:"text-white"};case"success":return{background:"bg-success",border:"border-successHover",text:"text-white"};case"error":return{background:"bg-error",border:"border-errorHover",text:"text-white"};case"warning":return{background:"bg-warning",border:"border-warningHover",text:"text-white"};case"disabled":return{background:"bg-gray-500",border:"border-gray-300",text:"text-white"};default:return{background:"bg-primary",border:"border-primaryHover",text:"text-white"}}}),[type]);return{background:background,text:text,border:border}}},"./node_modules/classnames/index.js":function(module,exports){var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);