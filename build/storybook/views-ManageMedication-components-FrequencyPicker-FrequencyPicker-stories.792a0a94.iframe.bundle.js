"use strict";(self.webpackChunkh3_consumer_web=self.webpackChunkh3_consumer_web||[]).push([[6744],{"./src/views/ManageMedication/components/FrequencyPicker/FrequencyPicker.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},default:function(){return FrequencyPicker_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),Form=__webpack_require__("./src/components/Form/index.ts"),react=__webpack_require__("./node_modules/react/index.js"),useTranslation=__webpack_require__("./node_modules/react-i18next/dist/es/useTranslation.js"),uikit=__webpack_require__("./src/uikit/index.ts"),FrequencyPicker_module={root:"FrequencyPicker_root__UEUMY",day:"FrequencyPicker_day__i8bUe",dropdown:"FrequencyPicker_dropdown__2m8S1","is-checked":"FrequencyPicker_is-checked__aJvn8","is-error":"FrequencyPicker_is-error__zuUD8","input-error":"FrequencyPicker_input-error__kZz0C"},mock_data_namespaceObject=JSON.parse('{"placeHolder":"Select an option","options":[{"value":"daily","label":"daily"},{"value":"every other day","label":"every other day"},{"value":"weekly","label":"weekly"}]}'),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),FrequencyPicker=(0,react.forwardRef)((function(_ref,ref){var _frequency$frequency,_ref$onChange=_ref.onChange,onChange=void 0===_ref$onChange?function(){}:_ref$onChange,isInvalid=_ref.isInvalid,error=_ref.error,defaultValue=_ref.defaultValue,t=(0,useTranslation.$)().t,_useState=(0,react.useState)(defaultValue),_useState2=(0,slicedToArray.Z)(_useState,2),frequency=_useState2[0],setFrequency=_useState2[1],onChangeFrequency=function onChangeFrequency(value){setFrequency((function(freq){return(0,objectSpread2.Z)((0,objectSpread2.Z)({},freq),{},{frequency:value})}))},onChangeDays=function onChangeDays(event){setFrequency((function(freq){return(0,objectSpread2.Z)((0,objectSpread2.Z)({},freq),{},{days:(0,objectSpread2.Z)({},Object.entries(null==frequency?void 0:frequency.days).reduce((function(target,day){var _day=(0,slicedToArray.Z)(day,2),dayName=_day[0],flag=_day[1];return target[dayName]=event.target.id===dayName?!flag:flag,target}),{}))})}))};return(0,react.useEffect)((function(){null==onChange||onChange(frequency)}),[frequency,onChange]),(0,jsx_runtime.jsxs)("div",{ref:ref,className:FrequencyPicker_module.root,children:[(0,jsx_runtime.jsx)(uikit.gs,{className:FrequencyPicker_module.dropdown,id:"frequency-picker",label:t("views.MedicationManagement.frequencyPicker.label"),isRequired:!0,input:function input(inputProps){return(0,jsx_runtime.jsx)(uikit.P7,(0,objectSpread2.Z)((0,objectSpread2.Z)({},inputProps),{},{defaultValue:frequency.frequency,"aria-label":"Select frequency",ariaRequired:"true",ariaDescribedBy:"description-frequency-picker",ariaRole:"listbox",inputId:"frequency-picker",name:"f",onChange:onChangeFrequency,placeholder:t("views.MedicationManagement.editMedicationPlaceHolder"),options:null==mock_data_namespaceObject?void 0:mock_data_namespaceObject.options.map((function(option){return{value:option.value,label:t("views.MedicationManagement.frequencyPicker.options.".concat(option.label))}}))}))}}),"weekly"===(null===(_frequency$frequency=frequency.frequency)||void 0===_frequency$frequency?void 0:_frequency$frequency.value)&&(0,jsx_runtime.jsx)("fieldset",{"aria-label":t("views.MedicationManagement.SetSchedule.listCheckboxLabel"),"data-testid":"week-days",children:function renderDays(){return Object.entries(null==frequency?void 0:frequency.days).map((function(day,index){var dayOfWeek=t("views.MedicationManagement.frequencyPicker.days.label.".concat(day[0])),checkboxPosition="".concat(index+1," of 7"),ariaLabel="".concat(dayOfWeek," ").concat(checkboxPosition);return(0,jsx_runtime.jsx)(uikit.XZ,{"aria-label":ariaLabel,className:"".concat(FrequencyPicker_module.day," ").concat(FrequencyPicker_module[day[0]]," ").concat(FrequencyPicker_module[day[1]?"is-checked":""]," ").concat(FrequencyPicker_module[isInvalid?"is-error":""]),id:day[0],label:(0,jsx_runtime.jsx)("label",{"data-input-control-element":"label","aria-hidden":!0,htmlFor:day[0],id:"label-".concat(day[0]),children:t("views.MedicationManagement.frequencyPicker.days.checkboxes.".concat(day[0]))}),isChecked:day[1],onChange:onChangeDays,validity:isInvalid?"invalid":"initial",type:"checkbox"},"".concat(day[0]))}))}()}),isInvalid&&(0,jsx_runtime.jsx)(Form.p,{className:FrequencyPicker_module["input-error"],value:error})]})}));FrequencyPicker.displayName="FrequencyPicker";try{FrequencyPicker.displayName="FrequencyPicker",FrequencyPicker.__docgenInfo={description:"",displayName:"FrequencyPicker",props:{isInvalid:{defaultValue:null,description:"",name:"isInvalid",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string"}},onChange:{defaultValue:{value:"() => {}"},description:"",name:"onChange",required:!1,type:{name:"((data: FrequencyProps) => void)"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!0,type:{name:"FrequencyProps"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/views/ManageMedication/components/FrequencyPicker/FrequencyPicker.tsx#FrequencyPicker"]={docgenInfo:FrequencyPicker.__docgenInfo,name:"FrequencyPicker",path:"src/views/ManageMedication/components/FrequencyPicker/FrequencyPicker.tsx#FrequencyPicker"})}catch(__react_docgen_typescript_loader_error){}var FrequencyPicker_stories={title:"Consumer Web / Frequency Picker",component:FrequencyPicker},Default=function Template(args){return(0,jsx_runtime.jsx)(FrequencyPicker,(0,objectSpread2.Z)({},args))}.bind({});Default.args={},Default.parameters=(0,objectSpread2.Z)({storySource:{source:"(args) => (\n  <FrequencyPicker {...args} />\n)"}},Default.parameters)},"./src/components/Form/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{p:function(){return InputError}});var slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),useTranslation=__webpack_require__("./node_modules/react-i18next/dist/es/useTranslation.js"),InputError_module_root="InputError_root__CtIcv",jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),getInputErrors=function getInputErrors(fieldError){return fieldError?"string"==typeof fieldError?[fieldError]:fieldError.message?fieldError.types?Object.values(fieldError.types).filter((function(validateResult){return!!validateResult&&"string"==typeof validateResult})).map((function(message){return message})):[fieldError.message]:[]:[]},InputError=function InputError(_ref){var value=_ref.value,className=_ref.className,t=(0,useTranslation.$)().t;return(0,jsx_runtime.jsx)("span",{className:"".concat(className," ").concat(InputError_module_root),children:getInputErrors(value).map((function(message){var _message$split=message.split(":"),_message$split2=(0,slicedToArray.Z)(_message$split,2),error=_message$split2[0],_message$split2$=_message$split2[1],values=void 0===_message$split2$?"":_message$split2$,isI18nMessage=error.split(".").length>2;return(0,jsx_runtime.jsx)("span",{"data-input-message-element":"message",children:isI18nMessage?t(error,JSON.stringify(values)):error},error)}))})};try{InputError.displayName="InputError",InputError.__docgenInfo={description:"",displayName:"InputError",props:{renderMessage:{defaultValue:null,description:"",name:"renderMessage",required:!1,type:{name:"((message: string, messages: string[]) => ReactElement<any, string | JSXElementConstructor<any>>)"}},renderMessages:{defaultValue:null,description:"",name:"renderMessages",required:!1,type:{name:"((messages: string[], renderer: (message: string, messages: string[]) => ReactElement<any, string | JSXElementConstructor<any>>) => ReactElement<...>)"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string | FieldError | null | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Form/InputError/InputError.tsx#InputError"]={docgenInfo:InputError.__docgenInfo,name:"InputError",path:"src/components/Form/InputError/InputError.tsx#InputError"})}catch(__react_docgen_typescript_loader_error){}}}]);