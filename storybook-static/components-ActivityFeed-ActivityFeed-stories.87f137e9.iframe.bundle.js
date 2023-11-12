/*! For license information please see components-ActivityFeed-ActivityFeed-stories.87f137e9.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_thewebuiguy_components=self.webpackChunk_thewebuiguy_components||[]).push([[4836],{"./src/components/ActivityFeed/ActivityFeed.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:function(){return Primary},__namedExportsOrder:function(){return __namedExportsOrder}});var _ActivityFeed__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/ActivityFeed/ActivityFeed.tsx");const people=[{id:0,name:"Lindsay Walton",imageUrl:"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"}],activities=[{id:1,person:people[0],project:"Workcation",commit:"2d89f0c8",branch:"master",time:"1h"},{id:2,person:people[0],project:"Workcation",commit:"2d89f0c8",branch:"master",time:"2h"},{id:3,person:people[0],project:"Workcation",commit:"2d89f0c8",branch:"master",time:"3h"}];__webpack_exports__.default={title:"TheWebUiGuy/ActivityFeed",component:_ActivityFeed__WEBPACK_IMPORTED_MODULE_0__.j};const Primary={args:{activities:activities}};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {\n    activities\n  }\n}",...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]},"./src/components/ActivityFeed/ActivityFeed.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{j:function(){return ActivityFeed}});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const ActivityFeed=({activities:activities})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("ul",{className:"divide-y divide-gray-200",children:activities.map((activityItem=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li",{className:"py-4",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"flex space-x-3",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img",{className:"w-6 h-6 rounded-full",src:activityItem.person.imageUrl,alt:""}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"flex-1 space-y-1",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"flex items-center justify-between",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3",{className:"text-sm font-medium",children:activityItem.person.name}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p",{className:"text-sm text-gray-500",children:activityItem.time})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p",{className:"text-sm text-gray-500",children:["Deployed ",activityItem.project," (",activityItem.commit," in ",activityItem.branch,")"]})]})]})},activityItem.id)))});ActivityFeed.displayName="ActivityFeed";try{ActivityFeed.displayName="ActivityFeed",ActivityFeed.__docgenInfo={description:"",displayName:"ActivityFeed",props:{activities:{defaultValue:null,description:"",name:"activities",required:!0,type:{name:"ActivityFeedItem[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ActivityFeed/ActivityFeed.tsx#ActivityFeed"]={docgenInfo:ActivityFeed.__docgenInfo,name:"ActivityFeed",path:"src/components/ActivityFeed/ActivityFeed.tsx#ActivityFeed"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);