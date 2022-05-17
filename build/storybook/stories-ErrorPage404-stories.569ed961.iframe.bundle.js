"use strict";(self.webpackChunkh3_consumer_web=self.webpackChunkh3_consumer_web||[]).push([[1713],{"./src/stories/ErrorPage404.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{NotFound:function(){return NotFound}});var _Users_matveyprupas_Documents_projects_WALG_CORE_h3_consumer_web_h3_consumer_web_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_components_ErrorPage__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/ErrorPage/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.default={title:"Consumer Web/Error page",component:_components_ErrorPage__WEBPACK_IMPORTED_MODULE_0__.m};var NotFound=function Template(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_ErrorPage__WEBPACK_IMPORTED_MODULE_0__.m,(0,_Users_matveyprupas_Documents_projects_WALG_CORE_h3_consumer_web_h3_consumer_web_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)({},args))}.bind({});NotFound.args={image:"Error404",title:"404: Page not found",description:"It looks like you’ve found a page that doesn’t exist. Try heading back Home to explore how Health Corner can support your health needs.",primaryButton:{text:"Go Home",isReactLink:!0,linkTo:""}},NotFound.parameters={layout:"fullscreen"},NotFound.parameters=(0,_Users_matveyprupas_Documents_projects_WALG_CORE_h3_consumer_web_h3_consumer_web_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)({storySource:{source:"(args) => (\n  <ErrorPage {...args} />\n)"}},NotFound.parameters)},"./src/components/Button/Button.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{z:function(){return Button}});var _Users_matveyprupas_Documents_projects_WALG_CORE_h3_consumer_web_h3_consumer_web_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_Users_matveyprupas_Documents_projects_WALG_CORE_h3_consumer_web_h3_consumer_web_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_Users_matveyprupas_Documents_projects_WALG_CORE_h3_consumer_web_h3_consumer_web_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),_Button_module_scss__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Button/Button.module.scss"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["text","title","btnStyle","onClickCallback","isDisabled","type","testId"],Button=function Button(_ref){var text=_ref.text,title=_ref.title,_ref$btnStyle=_ref.btnStyle,btnStyle=void 0===_ref$btnStyle?"primary":_ref$btnStyle,onClickCallback=_ref.onClickCallback,isDisabled=_ref.isDisabled,type=_ref.type,testId=_ref.testId,props=(0,_Users_matveyprupas_Documents_projects_WALG_CORE_h3_consumer_web_h3_consumer_web_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.Z)(_ref,_excluded);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",(0,_Users_matveyprupas_Documents_projects_WALG_CORE_h3_consumer_web_h3_consumer_web_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,_Users_matveyprupas_Documents_projects_WALG_CORE_h3_consumer_web_h3_consumer_web_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({title:title,type:type,className:classnames__WEBPACK_IMPORTED_MODULE_0___default()(_Button_module_scss__WEBPACK_IMPORTED_MODULE_1__.Z.button,(0,_Users_matveyprupas_Documents_projects_WALG_CORE_h3_consumer_web_h3_consumer_web_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__.Z)({},isDisabled?[_Button_module_scss__WEBPACK_IMPORTED_MODULE_1__.Z[btnStyle],_Button_module_scss__WEBPACK_IMPORTED_MODULE_1__.Z.disabled].join(" "):_Button_module_scss__WEBPACK_IMPORTED_MODULE_1__.Z[btnStyle],null!=btnStyle)),disabled:isDisabled,onClick:function onClick(event){return null==onClickCallback?void 0:onClickCallback(event)},"data-testid":testId},props),{},{children:text}))};Button.defaultProps={btnStyle:"primary",isDisabled:!1,type:"button"};try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{btnStyle:{defaultValue:{value:"primary"},description:"Attribute to set the style of the button, actually with four style types",name:"btnStyle",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"delete"'},{value:'"secondary"'},{value:'"tertiary"'}]}},text:{defaultValue:null,description:"Text that is showed inside the button",name:"text",required:!0,type:{name:"string"}},isDisabled:{defaultValue:{value:"false"},description:"To disable the button; adds the style disabled; setted as false by default",name:"isDisabled",required:!1,type:{name:"boolean"}},onClickCallback:{defaultValue:null,description:"Callback for the onClick event",name:"onClickCallback",required:!1,type:{name:"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},title:{defaultValue:null,description:"The title of the button for accessibility reasons",name:"title",required:!1,type:{name:"string"}},type:{defaultValue:{value:"button"},description:"Sets the button type; setted as default with 'button'",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"reset"'},{value:'"submit"'}]}},testId:{defaultValue:null,description:"Test Id",name:"testId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Button/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{z:function(){return Button.z},Z:function(){return ButtonLink}});var Button=__webpack_require__("./src/components/Button/Button.tsx"),objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react_router_dom=__webpack_require__("./node_modules/react-router-dom/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),Button_module=__webpack_require__("./src/components/Button/Button.module.scss"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),ButtonLink=function ButtonLink(_ref){var _linksProps,linkTo=_ref.linkTo,target=_ref.target,text=_ref.text,title=_ref.title,_ref$btnStyle=_ref.btnStyle,btnStyle=void 0===_ref$btnStyle?"primary":_ref$btnStyle,isDisabled=_ref.isDisabled,isReactLink=_ref.isReactLink,state=_ref.state,Tag=isReactLink?react_router_dom.rU:"a",linksProps=(_linksProps={className:classnames_default()(Button_module.Z.button,(0,defineProperty.Z)({},isDisabled?[Button_module.Z[btnStyle],Button_module.Z.disabled].join(" "):Button_module.Z[btnStyle],null!=btnStyle)),target:target,title:title},(0,defineProperty.Z)(_linksProps,isReactLink?"to":"href",isDisabled?null:linkTo),(0,defineProperty.Z)(_linksProps,"state",state),_linksProps);return(0,jsx_runtime.jsx)(Tag,(0,objectSpread2.Z)((0,objectSpread2.Z)({},linksProps),{},{children:text}))};ButtonLink.defaultProps={btnStyle:"primary",isDisabled:!1,isReactLink:!1};try{ButtonLink.displayName="ButtonLink",ButtonLink.__docgenInfo={description:"",displayName:"ButtonLink",props:{btnStyle:{defaultValue:{value:"primary"},description:"Attribute to set the style of the button, actually with four style types",name:"btnStyle",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"delete"'},{value:'"secondary"'},{value:'"tertiary"'}]}},linkTo:{defaultValue:null,description:"The link where the button will redirect us",name:"linkTo",required:!0,type:{name:"string"}},text:{defaultValue:null,description:"Text that is showed inside the button",name:"text",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"The title of the button for accessibility reasons",name:"title",required:!1,type:{name:"string"}},isDisabled:{defaultValue:{value:"false"},description:"To disable the button; adds the style disabled; setted as false by default",name:"isDisabled",required:!1,type:{name:"boolean"}},target:{defaultValue:null,description:"To control where is opened the content",name:"target",required:!1,type:{name:"string"}},isReactLink:{defaultValue:{value:"false"},description:"Button to set an Anchor Link or React Link",name:"isReactLink",required:!1,type:{name:"boolean"}},state:{defaultValue:null,description:"",name:"state",required:!1,type:{name:"object"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/ButtonLink.tsx#ButtonLink"]={docgenInfo:ButtonLink.__docgenInfo,name:"ButtonLink",path:"src/components/Button/ButtonLink.tsx#ButtonLink"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ErrorPage/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{m:function(){return ErrorPage}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),Button=__webpack_require__("./src/components/Button/index.ts"),Illustration=__webpack_require__("./src/components/Illustration/index.tsx"),ErrorPage_module_error_page="ErrorPage_error-page__1V5N+",ErrorPage_module_error_page_wraper="ErrorPage_error-page-wraper__-5QOP",ErrorPage_module_heading="ErrorPage_heading__JoBpU",ErrorPage_module_text="ErrorPage_text__QR2-P",ErrorPage_module_image="ErrorPage_image__8+xd5",ErrorPage_module_buttons="ErrorPage_buttons__etzXX",jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),ErrorPage=function ErrorPage(_ref){var image=_ref.image,title=_ref.title,description=_ref.description,primaryButton=_ref.primaryButton,secondaryButton=_ref.secondaryButton;return(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)("div",{className:ErrorPage_module_error_page,children:(0,jsx_runtime.jsx)("div",{className:ErrorPage_module_error_page_wraper,children:(0,jsx_runtime.jsxs)("div",{className:ErrorPage_module_text,children:[(0,jsx_runtime.jsx)("div",{className:ErrorPage_module_image,children:(0,jsx_runtime.jsx)(Illustration.Q,{name:image,"aria-hidden":!0})}),(0,jsx_runtime.jsx)("h2",{id:"error-page-title",className:ErrorPage_module_heading,children:title}),(0,jsx_runtime.jsx)("p",{className:"text",children:description}),(0,jsx_runtime.jsxs)("div",{className:ErrorPage_module_buttons,children:[primaryButton&&(0,jsx_runtime.jsx)(Button.Z,(0,objectSpread2.Z)({},primaryButton)),secondaryButton&&(0,jsx_runtime.jsx)(Button.Z,(0,objectSpread2.Z)({},secondaryButton))]})]})})})})};try{ErrorPage.displayName="ErrorPage",ErrorPage.__docgenInfo={description:"",displayName:"ErrorPage",props:{image:{defaultValue:null,description:"Banner image",name:"image",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"Banner tile",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"Banner description",name:"description",required:!0,type:{name:"string"}},primaryButton:{defaultValue:null,description:"Button Props same as ButtonLinkProps\nbtnStyle?: 'primary' | 'secondary' | 'tertiary' | 'delete';\nlinkTo: string;\ntext: string;\ntitle?: string;\nisDisabled?: boolean;\ntarget?: string;\nisReactLink?: boolean;",name:"primaryButton",required:!0,type:{name:"ButtonLinkProps"}},secondaryButton:{defaultValue:null,description:"",name:"secondaryButton",required:!1,type:{name:"ButtonLinkProps"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ErrorPage/ErrorPage.tsx#ErrorPage"]={docgenInfo:ErrorPage.__docgenInfo,name:"ErrorPage",path:"src/components/ErrorPage/ErrorPage.tsx#ErrorPage"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Illustration/index.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Q:function(){return Illustration_Illustration}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),Theme=__webpack_require__("./src/providers/Theme/index.ts"),react_svg_esm=__webpack_require__("./node_modules/react-svg/dist/react-svg.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Illustration_Illustration=function Illustration(_ref){var name=_ref.name,svgProps=_ref.svgProps,type=_ref.type,imageProps=_ref.imageProps,theme=(0,Theme.Fg)().theme;return"image"===type?(0,jsx_runtime.jsx)("img",(0,objectSpread2.Z)((0,objectSpread2.Z)({},imageProps||{}),{},{alt:null==imageProps?void 0:imageProps.alt,src:"".concat(".","/images/illustrations/").concat(theme,"/").concat(name,".svg"),"data-testid":"image"})):(0,jsx_runtime.jsx)(react_svg_esm.Q,(0,objectSpread2.Z)((0,objectSpread2.Z)({},(0,objectSpread2.Z)({},svgProps||{})),{},{src:"".concat(".","/images/illustrations/").concat(theme,"/").concat(name,".svg"),"data-testid":"image"}))};try{Illustration_Illustration.displayName="Illustration",Illustration_Illustration.__docgenInfo={description:"",displayName:"Illustration",props:{name:{defaultValue:null,description:"name of the illustration file (without extension)",name:"name",required:!0,type:{name:"string"}},type:{defaultValue:null,description:"type of rendere approach, (use or not to use ReactSVG)",name:"type",required:!1,type:{name:"enum",value:[{value:'"image"'},{value:'"svg"'}]}},svgProps:{defaultValue:null,description:"props for ReactSVG Component",name:"svgProps",required:!1,type:{name:'Omit<Props, "src">'}},imageProps:{defaultValue:null,description:"props for <img />>",name:"imageProps",required:!1,type:{name:'Omit<DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, "src">'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Illustration/Illustration.tsx#Illustration"]={docgenInfo:Illustration_Illustration.__docgenInfo,name:"Illustration",path:"src/components/Illustration/Illustration.tsx#Illustration"})}catch(__react_docgen_typescript_loader_error){}try{Illustration.displayName="Illustration",Illustration.__docgenInfo={description:"",displayName:"Illustration",props:{name:{defaultValue:null,description:"name of the illustration file (without extension)",name:"name",required:!0,type:{name:"string"}},type:{defaultValue:null,description:"type of rendere approach, (use or not to use ReactSVG)",name:"type",required:!1,type:{name:"enum",value:[{value:'"image"'},{value:'"svg"'}]}},svgProps:{defaultValue:null,description:"props for ReactSVG Component",name:"svgProps",required:!1,type:{name:'Omit<Props, "src">'}},imageProps:{defaultValue:null,description:"props for <img />>",name:"imageProps",required:!1,type:{name:'Omit<DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, "src">'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Illustration/index.tsx#Illustration"]={docgenInfo:Illustration.__docgenInfo,name:"Illustration",path:"src/components/Illustration/index.tsx#Illustration"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Button/Button.module.scss":function(__unused_webpack_module,__webpack_exports__){__webpack_exports__.Z={button:"Button_button__JBBzO",disabled:"Button_disabled__DkgJ+",primary:"Button_primary__9MLUH",secondary:"Button_secondary__sUGsj",tertiary:"Button_tertiary__ioTKC",delete:"Button_delete__kJUWQ"}}}]);