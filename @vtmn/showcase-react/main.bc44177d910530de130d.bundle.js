(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1073:function(module,exports,__webpack_require__){"use strict";__webpack_require__(3),__webpack_require__(49),__webpack_require__(40),__webpack_require__(33),__webpack_require__(42),__webpack_require__(1074),__webpack_require__(1075),__webpack_require__(8),__webpack_require__(41);var _clientApi=__webpack_require__(58),_clientLogger=__webpack_require__(38),_configFilename=__webpack_require__(1076);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_configFilename.args||_configFilename.argTypes)&&_clientLogger.logger.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify({args:_configFilename.args,argTypes:_configFilename.argTypes})),_configFilename.decorators&&_configFilename.decorators.forEach((function(decorator){return(0,_clientApi.addDecorator)(decorator,!1)})),_configFilename.loaders&&_configFilename.loaders.forEach((function(loader){return(0,_clientApi.addLoader)(loader,!1)})),(_configFilename.parameters||_configFilename.globals||_configFilename.globalTypes)&&(0,_clientApi.addParameters)(_objectSpread(_objectSpread({},_configFilename.parameters),{},{globals:_configFilename.globals,globalTypes:_configFilename.globalTypes}),!1),_configFilename.argTypesEnhancers&&_configFilename.argTypesEnhancers.forEach((function(enhancer){return(0,_clientApi.addArgTypesEnhancer)(enhancer)}))},1076:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"parameters",(function(){return parameters}));var _addons_backgrounds_json__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(473),parameters={actions:{argTypesRegex:"^on[A-Z].*"},backgrounds:_addons_backgrounds_json__WEBPACK_IMPORTED_MODULE_0__}},1077:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(357).configure)([__webpack_require__(1078),__webpack_require__(1079)],module,!1)}).call(this,__webpack_require__(116)(module))},1078:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=1078},1079:function(module,exports,__webpack_require__){var map={"./VtmnButton.stories.js":1085};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1079},1085:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"Reversed",(function(){return Reversed}));__webpack_require__(250),__webpack_require__(4);var react=__webpack_require__(0),jsx_runtime=(__webpack_require__(3),__webpack_require__(15),__webpack_require__(206)),_assign=function __assign(){return(_assign=Object.assign||function __assign(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t}).apply(this,arguments)};!function styleInject(css,ref){void 0===ref&&(ref={});var insertAt=ref.insertAt;if(css&&"undefined"!=typeof document){var head=document.head||document.getElementsByTagName("head")[0],style=document.createElement("style");style.type="text/css","top"===insertAt&&head.firstChild?head.insertBefore(style,head.firstChild):head.appendChild(style),style.styleSheet?style.styleSheet.cssText=css:style.appendChild(document.createTextNode(css))}}(".vtmn-btn{\n  box-shadow:inset 0 0 0 0.125rem transparent;\n  min-width:calc(6 * 1rem);\n  letter-spacing:0.0375rem;\n  background-color:#007dbc;\n  border-radius:0.25rem;\n  border-width:0px;\n  box-sizing:border-box;\n  display:inline-flex;\n  align-items:center;\n  justify-content:center;\n  font-family:Roboto Condensed, system-ui, -apple-system;\n  font-weight:700;\n  height:3rem;\n  font-size:1rem;\n  line-height:1.5rem;\n  overflow:hidden;\n  padding-top:0;\n  padding-bottom:0;\n  padding-left:1.5rem;\n  padding-right:1.5rem;\n  position:relative;\n  text-align:center;\n  color:#fff;\n  text-decoration:none;\n}\n\n.vtmn-btn:hover{\n  background-color:#00689d;\n  cursor:pointer;\n}\n\n.vtmn-btn:active{\n  background-color:#00537d;\n}\n\n.vtmn-btn:disabled{\n  cursor:not-allowed;\n  opacity:0.25;\n}\n\n.vtmn-btn:not([disabled]):focus{\n  outline:none;\n  box-shadow:inset 0 0 0 0.125rem transparent,\n      0 0 0 0.125rem #7ebee0;\n}\n\n.vtmn-btn_variant--primary{\n  box-shadow:inset 0 0 0 0.125rem transparent;\n  background-color:#007dbc;\n  color:#fff;\n}\n\n.vtmn-btn_variant--primary:hover{\n  background-color:#00689d;\n}\n\n.vtmn-btn_variant--primary:active{\n  background-color:#00537d;\n}\n\n.vtmn-btn_variant--primary:not([disabled]):focus{\n  box-shadow:inset 0 0 0 0.125rem transparent,\n      0 0 0 0.125rem #7ebee0;\n}\n\n.vtmn-btn_variant--primary-reversed{\n  box-shadow:inset 0 0 0 0.125rem transparent;\n  background-color:#fff;\n  color:#001018;\n}\n\n.vtmn-btn_variant--primary-reversed:not([disabled]):hover{\n  background-color:rgba(255, 255, 255, 0.8);\n}\n\n.vtmn-btn_variant--primary-reversed:not([disabled]):active{\n  background-color:rgba(255, 255, 255, 0.6);\n}\n\n.vtmn-btn_variant--primary-reversed:not([disabled]):focus{\n  box-shadow:inset 0 0 0 0.125rem transparent,\n      0 0 0 0.125rem #7ebee0;\n}\n\n.vtmn-btn_variant--secondary{\n  background-color:transparent;\n  box-shadow:inset 0 0 0 0.125rem #001018;\n  color:#001018;\n}\n\n.vtmn-btn_variant--secondary:not([disabled]):hover{\n  background-color:rgba(52, 68, 80, 0.05);\n}\n\n.vtmn-btn_variant--secondary:not([disabled]):active{\n  background-color:rgba(52, 68, 80, 0.15);\n}\n\n.vtmn-btn_variant--secondary:not([disabled]):focus{\n  box-shadow:inset 0 0 0 0.125rem #001018,\n      0 0 0 0.125rem #7ebee0;\n}\n\n.vtmn-btn_variant--secondary-reversed{\n  background-color:transparent;\n  box-shadow:inset 0 0 0 0.125rem #fff;\n  color:#fff;\n}\n\n.vtmn-btn_variant--secondary-reversed:not([disabled]):hover{\n  background-color:rgba(255, 255, 255, 0.2);\n}\n\n.vtmn-btn_variant--secondary-reversed:not([disabled]):active{\n  background-color:rgba(255, 255, 255, 0.4);\n}\n\n.vtmn-btn_variant--secondary-reversed:not([disabled]):focus{\n  box-shadow:inset 0 0 0 0.125rem #fff,\n      0 0 0 0.125rem #7ebee0;\n}\n\n.vtmn-btn_variant--ghost{\n  background-color:transparent;\n  box-shadow:inset 0 0 0 0.125rem transparent;\n  color:#007dbc;\n}\n\n.vtmn-btn_variant--ghost:not([disabled]):hover{\n  background-color:rgba(0, 83, 125, 0.05);\n}\n\n.vtmn-btn_variant--ghost:not([disabled]):active{\n  background-color:rgba(0, 83, 125, 0.15);\n}\n\n.vtmn-btn_variant--ghost:not([disabled]):focus{\n  box-shadow:inset 0 0 0 0.125rem transparent,\n      0 0 0 0.125rem #7ebee0;\n}\n\n.vtmn-btn_variant--conversion{\n  box-shadow:inset 0 0 0 0.125rem transparent;\n  background-color:#ffea28;\n  color:#001018;\n}\n\n.vtmn-btn_variant--conversion:hover{\n  background-color:#fff58d;\n}\n\n.vtmn-btn_variant--conversion:active{\n  background-color:#fffbc7;\n}\n\n.vtmn-btn_variant--conversion:not([disabled]):focus{\n  box-shadow:inset 0 0 0 0.125rem transparent,\n      0 0 0 0.125rem #7ebee0;\n}\n\n.vtmn-btn_size--small{\n  height:2rem;\n  font-size:0.875rem;\n  line-height:1.25rem;\n  padding-left:1rem;\n  padding-right:1rem;\n}\n\n.vtmn-btn_size--medium{\n  height:3rem;\n  font-size:1rem;\n  line-height:1.5rem;\n  padding-left:1.5rem;\n  padding-right:1.5rem;\n}\n\n.vtmn-btn_size--stretched{\n  height:3rem;\n  font-size:1rem;\n  line-height:1.5rem;\n  padding-left:1.5rem;\n  padding-right:1.5rem;\n  width:100%;\n}\n\n.vtmn-btn_size--large{\n  height:4rem;\n  font-size:1.25rem;\n  line-height:1.75rem;\n  padding-left:2.5rem;\n  padding-right:2.5rem;\n}\n");var index_es_VtmnButton=function VtmnButton(_a){var _b=_a.variant,variant=void 0===_b?"primary":_b,_c=_a.size,size=void 0===_c?"medium":_c,children=_a.children,className=_a.className,props=function __rest(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t}(_a,["variant","size","children","className"]);return Object(jsx_runtime.jsx)("button",_assign({className:"vtmn-btn "+className+" vtmn-btn_variant--"+variant+" vtmn-btn_size--"+size},props,{children:children}),void 0)},VtmnButton$1=Object(react.memo)(index_es_VtmnButton),VtmnButton_stories_Template=(__webpack_exports__.default={title:"Components/VtmnButton",component:VtmnButton$1},function Template(args){return Object(jsx_runtime.jsx)(VtmnButton$1,Object.assign({},args,{children:"Button"}))});VtmnButton_stories_Template.displayName="Template";var Default=VtmnButton_stories_Template.bind({});Default.argTypes={variant:{control:{type:"select",options:["primary","secondary","ghost","conversion"]}},size:{control:{type:"select",options:["small","medium","large","stretched"]}}},Default.args={};var Reversed=VtmnButton_stories_Template.bind({});Reversed.parameters={backgrounds:{default:"blue"}},Reversed.argTypes={variant:{control:{type:"select",options:["primary-reversed","secondary-reversed"]}},size:{control:{type:"select",options:["small","medium","large","stretched"]}}},Reversed.args={variant:"primary-reversed"},Default.parameters=Object.assign({storySource:{source:"(args) => <VtmnButton {...args}>Button</VtmnButton>"}},Default.parameters),Reversed.parameters=Object.assign({storySource:{source:"(args) => <VtmnButton {...args}>Button</VtmnButton>"}},Reversed.parameters)},473:function(module){module.exports=JSON.parse('{"default":"light","values":[{"name":"light","value":"#ffffff"},{"name":"blue","value":"#007dbc"},{"name":"dark","value":"#1a2a34"}]}')},476:function(module,exports,__webpack_require__){__webpack_require__(477),__webpack_require__(640),__webpack_require__(641),__webpack_require__(799),__webpack_require__(1019),__webpack_require__(1052),__webpack_require__(1064),__webpack_require__(1066),__webpack_require__(1071),__webpack_require__(1073),module.exports=__webpack_require__(1077)},550:function(module,exports){},641:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(357)}},[[476,1,2]]]);
//# sourceMappingURL=main.bc44177d910530de130d.bundle.js.map