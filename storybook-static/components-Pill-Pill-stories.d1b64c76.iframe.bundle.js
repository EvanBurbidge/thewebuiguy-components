/*! For license information please see components-Pill-Pill-stories.d1b64c76.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_thewebuiguy_components=self.webpackChunk_thewebuiguy_components||[]).push([[3828],{"./src/components/Pill/Pill.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:function(){return Primary},__namedExportsOrder:function(){return __namedExportsOrder}});var _Pill__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Pill/Pill.tsx");__webpack_exports__.default={title:"TheWebUiGuy/Pill",component:_Pill__WEBPACK_IMPORTED_MODULE_0__.D,argTypes:{bgColor:{control:{type:"select",options:["primary","secondary","success","error"],defaultValue:"primary"}}}};const Primary={args:{text:"string",color:"white",bgColor:"primary"}};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:'{\n  args: {\n    text: "string",\n    color: "white",\n    bgColor: "primary"\n  }\n}',...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]},"./src/components/Pill/Pill.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{D:function(){return Pill}});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Pill=({bgColor:bgColor,color:color,text:text})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{className:`bg-${bgColor} text-${color} text-center w-fit px-2 py-1 font-base text-sm rounded-2xl`,children:text});Pill.displayName="Pill";try{Pill.displayName="Pill",Pill.__docgenInfo={description:"",displayName:"Pill",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"string"}},bgColor:{defaultValue:null,description:"",name:"bgColor",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Pill/Pill.tsx#Pill"]={docgenInfo:Pill.__docgenInfo,name:"Pill",path:"src/components/Pill/Pill.tsx#Pill"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);