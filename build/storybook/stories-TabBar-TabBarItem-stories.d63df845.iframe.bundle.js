"use strict";(self.webpackChunkh3_consumer_web=self.webpackChunkh3_consumer_web||[]).push([[3966],{"./src/stories/TabBar/TabBarItem.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{TabBarItem:function(){return TabBarItem}});var _Users_matveyprupas_Documents_projects_WALG_CORE_h3_consumer_web_h3_consumer_web_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_components_TabBar_index__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/TabBar/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.default={title:"Consumer Web/TabBar",component:_components_TabBar_index__WEBPACK_IMPORTED_MODULE_0__._};var TabBarItem=function Template(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_TabBar_index__WEBPACK_IMPORTED_MODULE_0__._,(0,_Users_matveyprupas_Documents_projects_WALG_CORE_h3_consumer_web_h3_consumer_web_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)({},args))}.bind({});TabBarItem.args={text:"horizontal",isVertical:!1,isButton:!1,isActive:!1},TabBarItem.parameters=(0,_Users_matveyprupas_Documents_projects_WALG_CORE_h3_consumer_web_h3_consumer_web_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)({storySource:{source:"(args) => (\n  <TabItem {...args} />\n)"}},TabBarItem.parameters)},"./src/components/TabBar/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{n:function(){return TabBar},_:function(){return TabBarItem}});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),TabBarItem_module={"tab-item":"TabBarItem_tab-item__hiAbm",active:"TabBarItem_active__8bI4-",button:"TabBarItem_button__JVV85",horizontal:"TabBarItem_horizontal__ogrSP",vertical:"TabBarItem_vertical__b12ZY"},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),TabBarItem=function TabBarItem(_ref){var _cn,id=_ref.id,ariaControls=_ref.ariaControls,text=_ref.text,isVertical=_ref.isVertical,isButton=_ref.isButton,isActive=_ref.isActive,onClickCallback=_ref.onClickCallback,buttonRef=(0,react.useRef)(null);return(0,jsx_runtime.jsx)("button",{id:id,"aria-controls":ariaControls,"aria-selected":isActive,type:"button",ref:buttonRef,role:"tab",tabIndex:isActive?0:-1,className:classnames_default()(TabBarItem_module["tab-item"],(_cn={},(0,defineProperty.Z)(_cn,TabBarItem_module[isVertical?"vertical":"horizontal"],!0),(0,defineProperty.Z)(_cn,isActive?TabBarItem_module.active:"",!0),(0,defineProperty.Z)(_cn,isButton?TabBarItem_module.button:"",!0),_cn)),onClick:function onClick(){return null==onClickCallback?void 0:onClickCallback(id)},onKeyDown:function onKeyDown(event){return function onKeyDownHandler(_ref2,_ref3){var code=_ref2.code,current=_ref3.current;switch(code){case"ArrowRight":var _current$parentElemen;null!==(null==current?void 0:current.nextElementSibling)?(null==current?void 0:current.nextElementSibling).focus():(null==current||null===(_current$parentElemen=current.parentElement)||void 0===_current$parentElemen?void 0:_current$parentElemen.childNodes[0]).focus();break;case"ArrowLeft":if(null!==(null==current?void 0:current.previousElementSibling))(null==current?void 0:current.previousElementSibling).focus();else{var _current$parentElemen2,childNodes=null==current||null===(_current$parentElemen2=current.parentElement)||void 0===_current$parentElemen2?void 0:_current$parentElemen2.childNodes;if(!childNodes)return;childNodes[childNodes.length-1].focus()}}}(event,buttonRef)},children:text})};TabBarItem.defaultProps={isVertical:!1,isButton:!1,isActive:!1};try{TabBarItem.displayName="TabBarItem",TabBarItem.__docgenInfo={description:"",displayName:"TabBarItem",props:{ariaControls:{defaultValue:null,description:"Sets the id of the tab panel on the aria-controls of the tab.",name:"ariaControls",required:!0,type:{name:"string"}},text:{defaultValue:null,description:"The text that is showed in the item.",name:"text",required:!0,type:{name:"string"}},id:{defaultValue:null,description:"The id that its going to be placed in the button",name:"id",required:!0,type:{name:"string"}},isVertical:{defaultValue:{value:"false"},description:"Determines if the TabBar is going to be horizontal or vertical (actually only supports horizontal)",name:"isVertical",required:!1,type:{name:"boolean"}},isButton:{defaultValue:{value:"false"},description:"Determines if the TabItem is going to be styled as button",name:"isButton",required:!1,type:{name:"boolean"}},isActive:{defaultValue:{value:"false"},description:"Determines if the tab have the active style",name:"isActive",required:!1,type:{name:"boolean"}},onClickCallback:{defaultValue:null,description:"The behaviour of the onClick callback",name:"onClickCallback",required:!1,type:{name:"((id: string) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TabBar/TabItem/TabBarItem.tsx#TabBarItem"]={docgenInfo:TabBarItem.__docgenInfo,name:"TabBarItem",path:"src/components/TabBar/TabItem/TabBarItem.tsx#TabBarItem"})}catch(__react_docgen_typescript_loader_error){}var objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),toConsumableArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),TabBar_module_tab_bar="TabBar_tab-bar__E3JLT",TabBar_module_buttons="TabBar_buttons__mQ3vw",_excluded=["id","text","isActive","ariaControls"],TabBar=function TabBar(_ref){var tabItems=_ref.tabItems,ariaLabel=_ref.ariaLabel,tabBarType=_ref.tabBarType,tabItemType=_ref.tabItemType,onTabItemClick=_ref.onTabItemClick,_useState=(0,react.useState)(tabItems),_useState2=(0,slicedToArray.Z)(_useState,2),tabItemsState=_useState2[0],setTabItems=_useState2[1];(0,react.useEffect)((function(){setTabItems((function(items){var defaultActiveItemFromProps=(0,toConsumableArray.Z)(items).find((function(item){return item.isActive}));return(0,toConsumableArray.Z)(items).map((function(item,index){var _item$id;return(0,objectSpread2.Z)((0,objectSpread2.Z)({},item),{},{id:null!==(_item$id=item.id)&&void 0!==_item$id?_item$id:[item.text,String(index)].join("-"),isActive:item.id===(null==defaultActiveItemFromProps?void 0:defaultActiveItemFromProps.id)||0===index&&!defaultActiveItemFromProps,isVertical:"vertical"===tabBarType,isButton:"button"===tabItemType})}))}))}),[tabBarType,tabItemType]);var onClickHandler=function onClickHandler(id){onTabItemClick&&onTabItemClick(id),setTabItems((function(items){return(0,toConsumableArray.Z)(items).map((function(item){return(0,objectSpread2.Z)((0,objectSpread2.Z)({},item),{},{isActive:item.id===id})}))}))};return(0,react.useEffect)((function(){setTabItems(tabItems)}),[tabItems]),(0,jsx_runtime.jsx)("div",{"aria-label":ariaLabel,role:"tablist",className:classnames_default()(TabBar_module_tab_bar,(0,defineProperty.Z)({},"button"===tabItemType?TabBar_module_buttons:"",!0)),children:function createTabItems(tabI){return tabI.map((function(_ref2,index){var id=_ref2.id,text=_ref2.text,isActive=_ref2.isActive,ariaControls=_ref2.ariaControls,restProps=(0,objectWithoutProperties.Z)(_ref2,_excluded);return(0,jsx_runtime.jsx)(TabBarItem,(0,objectSpread2.Z)({ariaControls:ariaControls,text:text,id:id,isActive:isActive,onClickCallback:onClickHandler},restProps),[index,text].join("-"))}))}(tabItemsState)})};TabBar.defaultProps={ariaLabel:""};try{TabBar.displayName="TabBar",TabBar.__docgenInfo={description:"",displayName:"TabBar",props:{ariaLabel:{defaultValue:{value:""},description:"Sets a label for the tablist",name:"ariaLabel",required:!1,type:{name:"string"}},tabBarType:{defaultValue:null,description:"Determines if the TabBar is going to be horizontal or vertical (actually only supports horizontal)",name:"tabBarType",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},tabItemType:{defaultValue:null,description:"Determines if the TabItem is going to be styled as button",name:"tabItemType",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"tab"'}]}},tabItems:{defaultValue:null,description:"Determines the quantity of tab items that is going to be displayed (needs to follow the TabBarItemsProps)",name:"tabItems",required:!0,type:{name:"TabBarItemProps[]"}},onTabItemClick:{defaultValue:null,description:"Optional onClick callback to pass down to TabItem component",name:"onTabItemClick",required:!1,type:{name:"((id: string) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TabBar/TabBar.tsx#TabBar"]={docgenInfo:TabBar.__docgenInfo,name:"TabBar",path:"src/components/TabBar/TabBar.tsx#TabBar"})}catch(__react_docgen_typescript_loader_error){}}}]);