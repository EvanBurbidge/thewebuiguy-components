/*! For license information please see components-InputGroup-InputGroup-stories.bd4bdcfe.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_thewebuiguy_components=self.webpackChunk_thewebuiguy_components||[]).push([[1737],{"./src/components/InputGroup/InputGroup.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:function(){return Primary},__namedExportsOrder:function(){return __namedExportsOrder}});__webpack_require__("./node_modules/react/index.js");var _Input__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Input/index.ts"),_InputGroup__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/InputGroup/InputGroup.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.default={title:"TheWebUiGuy/InputGroup",component:_InputGroup__WEBPACK_IMPORTED_MODULE_2__.B};const Primary={args:{id:"input-group-id",label:"Input group",subtitle:"Input group subtitle",inputElement:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Input__WEBPACK_IMPORTED_MODULE_1__.I,{id:"input-id"}),required:!1,hasError:!1,errorMessage:"some error"}};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:'{\n  args: {\n    id: "input-group-id",\n    label: "Input group",\n    subtitle: "Input group subtitle",\n    inputElement: <Input id="input-id" />,\n    required: false,\n    hasError: false,\n    errorMessage: "some error"\n  }\n}',...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]},"./src/components/Input/Input.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{I:function(){return Input}});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Input=({id:id="",type:type="",defaultValue:defaultValue="",placeholder:placeholder="",classNames:classNames="",disabled:disabled=!1,onChange:onChange,...rest})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input",{id:id,...rest,type:type,"data-testid":id,onChange:onChange,disabled:disabled,placeholder:placeholder,defaultValue:defaultValue,"aria-describedby":`${id}-description`,className:`shadow-sm focus:ring-highlight focus:border-highlight block w-full sm:text-sm border border-gray-300 p-1 rounded-sm h-10 ${classNames}`});Input.displayName="Input";try{Input.displayName="Input",Input.__docgenInfo={description:"",displayName:"Input",props:{id:{defaultValue:{value:""},description:"",name:"id",required:!1,type:{name:"string"}},type:{defaultValue:{value:""},description:"",name:"type",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},defaultValue:{defaultValue:{value:""},description:"",name:"defaultValue",required:!1,type:{name:"string"}},placeholder:{defaultValue:{value:""},description:"",name:"placeholder",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"any"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"any"}},classNames:{defaultValue:{value:""},description:"",name:"classNames",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Input/Input.tsx#Input"]={docgenInfo:Input.__docgenInfo,name:"Input",path:"src/components/Input/Input.tsx#Input"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Input/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{I:function(){return _Input__WEBPACK_IMPORTED_MODULE_0__.I}});var _Input__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Input/Input.tsx")},"./src/components/InputGroup/InputGroup.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{B:function(){return InputGroup}});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const InputGroup=({id:id="",label:label="",colSpan:colSpan=4,subtitle:subtitle="",required:required=!1,inputElement:inputElement="",hasError:hasError=!1,errorMessage:errorMessage="",extraClasses:extraClasses="",labelClass:labelClass="font-medium text-primary capitalize",subtitleClass:subtitleClass="mt-1 text-sm text-primaryHover"})=>{const wrapperClassName=`sm:col-span-${colSpan} mb-4`;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:`${wrapperClassName} ${extraClasses}`,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("label",{htmlFor:id,className:labelClass,children:[label," ",required&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"mt-1",children:inputElement}),subtitle&&!hasError&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p",{className:`${subtitleClass} mt-0`,children:subtitle}),hasError&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p",{className:`${subtitleClass} mt-0 text-error`,children:errorMessage})]})};InputGroup.displayName="InputGroup";try{InputGroup.displayName="InputGroup",InputGroup.__docgenInfo={description:"",displayName:"InputGroup",props:{id:{defaultValue:{value:""},description:"",name:"id",required:!1,type:{name:"string"}},label:{defaultValue:{value:""},description:"",name:"label",required:!1,type:{name:"string"}},colSpan:{defaultValue:{value:"4"},description:"",name:"colSpan",required:!1,type:{name:"string | number"}},inputElement:{defaultValue:{value:""},description:"",name:"inputElement",required:!1,type:{name:"any"}},subtitle:{defaultValue:{value:""},description:"",name:"subtitle",required:!1,type:{name:"any"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},extraClasses:{defaultValue:{value:""},description:"",name:"extraClasses",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},hasError:{defaultValue:{value:"false"},description:"",name:"hasError",required:!1,type:{name:"boolean"}},errorMessage:{defaultValue:{value:""},description:"",name:"errorMessage",required:!1,type:{name:"string"}},labelClass:{defaultValue:{value:"font-medium text-primary capitalize"},description:"",name:"labelClass",required:!1,type:{name:"string"}},subtitleClass:{defaultValue:{value:"mt-1 text-sm text-primaryHover"},description:"",name:"subtitleClass",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/InputGroup/InputGroup.tsx#InputGroup"]={docgenInfo:InputGroup.__docgenInfo,name:"InputGroup",path:"src/components/InputGroup/InputGroup.tsx#InputGroup"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);