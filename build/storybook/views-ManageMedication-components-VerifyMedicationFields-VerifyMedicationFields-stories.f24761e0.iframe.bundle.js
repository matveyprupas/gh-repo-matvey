"use strict";(self.webpackChunkh3_consumer_web=self.webpackChunkh3_consumer_web||[]).push([[8551],{"./src/views/ManageMedication/components/VerifyMedicationFields/VerifyMedicationFields.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default}});var _Users_matveyprupas_Documents_projects_WALG_CORE_h3_consumer_web_h3_consumer_web_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),providers__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/providers/index.ts"),_VerifyMedicationFields__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/views/ManageMedication/components/VerifyMedicationFields/VerifyMedicationFields.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.default={title:"Consumer Web / VerifyMedicationFields",component:_VerifyMedicationFields__WEBPACK_IMPORTED_MODULE_1__.C};var Default=function Template(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(providers__WEBPACK_IMPORTED_MODULE_0__.gs,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_VerifyMedicationFields__WEBPACK_IMPORTED_MODULE_1__.C,{enable:!1,handleSave:function handleSave(){},placeHolder:"-"})})}.bind({});Default.parameters=(0,_Users_matveyprupas_Documents_projects_WALG_CORE_h3_consumer_web_h3_consumer_web_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({storySource:{source:"() => (\n  <ApiProvider>\n    <VerifyMedicationFields\n      enable={false}\n      handleSave={() => {}}\n      placeHolder='-'\n    />\n  </ApiProvider>\n)"}},Default.parameters)},"./src/components/Button/Button.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{z:function(){return Button}});var _Users_matveyprupas_Documents_projects_WALG_CORE_h3_consumer_web_h3_consumer_web_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_Users_matveyprupas_Documents_projects_WALG_CORE_h3_consumer_web_h3_consumer_web_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_Users_matveyprupas_Documents_projects_WALG_CORE_h3_consumer_web_h3_consumer_web_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),_Button_module_scss__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Button/Button.module.scss"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["text","title","btnStyle","onClickCallback","isDisabled","type","testId"],Button=function Button(_ref){var text=_ref.text,title=_ref.title,_ref$btnStyle=_ref.btnStyle,btnStyle=void 0===_ref$btnStyle?"primary":_ref$btnStyle,onClickCallback=_ref.onClickCallback,isDisabled=_ref.isDisabled,type=_ref.type,testId=_ref.testId,props=(0,_Users_matveyprupas_Documents_projects_WALG_CORE_h3_consumer_web_h3_consumer_web_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.Z)(_ref,_excluded);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",(0,_Users_matveyprupas_Documents_projects_WALG_CORE_h3_consumer_web_h3_consumer_web_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,_Users_matveyprupas_Documents_projects_WALG_CORE_h3_consumer_web_h3_consumer_web_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({title:title,type:type,className:classnames__WEBPACK_IMPORTED_MODULE_0___default()(_Button_module_scss__WEBPACK_IMPORTED_MODULE_1__.Z.button,(0,_Users_matveyprupas_Documents_projects_WALG_CORE_h3_consumer_web_h3_consumer_web_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__.Z)({},isDisabled?[_Button_module_scss__WEBPACK_IMPORTED_MODULE_1__.Z[btnStyle],_Button_module_scss__WEBPACK_IMPORTED_MODULE_1__.Z.disabled].join(" "):_Button_module_scss__WEBPACK_IMPORTED_MODULE_1__.Z[btnStyle],null!=btnStyle)),disabled:isDisabled,onClick:function onClick(event){return null==onClickCallback?void 0:onClickCallback(event)},"data-testid":testId},props),{},{children:text}))};Button.defaultProps={btnStyle:"primary",isDisabled:!1,type:"button"};try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{btnStyle:{defaultValue:{value:"primary"},description:"Attribute to set the style of the button, actually with four style types",name:"btnStyle",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"delete"'},{value:'"secondary"'},{value:'"tertiary"'}]}},text:{defaultValue:null,description:"Text that is showed inside the button",name:"text",required:!0,type:{name:"string"}},isDisabled:{defaultValue:{value:"false"},description:"To disable the button; adds the style disabled; setted as false by default",name:"isDisabled",required:!1,type:{name:"boolean"}},onClickCallback:{defaultValue:null,description:"Callback for the onClick event",name:"onClickCallback",required:!1,type:{name:"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},title:{defaultValue:null,description:"The title of the button for accessibility reasons",name:"title",required:!1,type:{name:"string"}},type:{defaultValue:{value:"button"},description:"Sets the button type; setted as default with 'button'",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"reset"'},{value:'"submit"'}]}},testId:{defaultValue:null,description:"Test Id",name:"testId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Button/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{z:function(){return Button.z},Z:function(){return ButtonLink}});var Button=__webpack_require__("./src/components/Button/Button.tsx"),objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react_router_dom=__webpack_require__("./node_modules/react-router-dom/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),Button_module=__webpack_require__("./src/components/Button/Button.module.scss"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),ButtonLink=function ButtonLink(_ref){var _linksProps,linkTo=_ref.linkTo,target=_ref.target,text=_ref.text,title=_ref.title,_ref$btnStyle=_ref.btnStyle,btnStyle=void 0===_ref$btnStyle?"primary":_ref$btnStyle,isDisabled=_ref.isDisabled,isReactLink=_ref.isReactLink,state=_ref.state,Tag=isReactLink?react_router_dom.rU:"a",linksProps=(_linksProps={className:classnames_default()(Button_module.Z.button,(0,defineProperty.Z)({},isDisabled?[Button_module.Z[btnStyle],Button_module.Z.disabled].join(" "):Button_module.Z[btnStyle],null!=btnStyle)),target:target,title:title},(0,defineProperty.Z)(_linksProps,isReactLink?"to":"href",isDisabled?null:linkTo),(0,defineProperty.Z)(_linksProps,"state",state),_linksProps);return(0,jsx_runtime.jsx)(Tag,(0,objectSpread2.Z)((0,objectSpread2.Z)({},linksProps),{},{children:text}))};ButtonLink.defaultProps={btnStyle:"primary",isDisabled:!1,isReactLink:!1};try{ButtonLink.displayName="ButtonLink",ButtonLink.__docgenInfo={description:"",displayName:"ButtonLink",props:{btnStyle:{defaultValue:{value:"primary"},description:"Attribute to set the style of the button, actually with four style types",name:"btnStyle",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"delete"'},{value:'"secondary"'},{value:'"tertiary"'}]}},linkTo:{defaultValue:null,description:"The link where the button will redirect us",name:"linkTo",required:!0,type:{name:"string"}},text:{defaultValue:null,description:"Text that is showed inside the button",name:"text",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"The title of the button for accessibility reasons",name:"title",required:!1,type:{name:"string"}},isDisabled:{defaultValue:{value:"false"},description:"To disable the button; adds the style disabled; setted as false by default",name:"isDisabled",required:!1,type:{name:"boolean"}},target:{defaultValue:null,description:"To control where is opened the content",name:"target",required:!1,type:{name:"string"}},isReactLink:{defaultValue:{value:"false"},description:"Button to set an Anchor Link or React Link",name:"isReactLink",required:!1,type:{name:"boolean"}},state:{defaultValue:null,description:"",name:"state",required:!1,type:{name:"object"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/ButtonLink.tsx#ButtonLink"]={docgenInfo:ButtonLink.__docgenInfo,name:"ButtonLink",path:"src/components/Button/ButtonLink.tsx#ButtonLink"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Form/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{p:function(){return InputError}});var slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),useTranslation=__webpack_require__("./node_modules/react-i18next/dist/es/useTranslation.js"),InputError_module_root="InputError_root__CtIcv",jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),getInputErrors=function getInputErrors(fieldError){return fieldError?"string"==typeof fieldError?[fieldError]:fieldError.message?fieldError.types?Object.values(fieldError.types).filter((function(validateResult){return!!validateResult&&"string"==typeof validateResult})).map((function(message){return message})):[fieldError.message]:[]:[]},InputError=function InputError(_ref){var value=_ref.value,className=_ref.className,t=(0,useTranslation.$)().t;return(0,jsx_runtime.jsx)("span",{className:"".concat(className," ").concat(InputError_module_root),children:getInputErrors(value).map((function(message){var _message$split=message.split(":"),_message$split2=(0,slicedToArray.Z)(_message$split,2),error=_message$split2[0],_message$split2$=_message$split2[1],values=void 0===_message$split2$?"":_message$split2$,isI18nMessage=error.split(".").length>2;return(0,jsx_runtime.jsx)("span",{"data-input-message-element":"message",children:isI18nMessage?t(error,JSON.stringify(values)):error},error)}))})};try{InputError.displayName="InputError",InputError.__docgenInfo={description:"",displayName:"InputError",props:{renderMessage:{defaultValue:null,description:"",name:"renderMessage",required:!1,type:{name:"((message: string, messages: string[]) => ReactElement<any, string | JSXElementConstructor<any>>)"}},renderMessages:{defaultValue:null,description:"",name:"renderMessages",required:!1,type:{name:"((messages: string[], renderer: (message: string, messages: string[]) => ReactElement<any, string | JSXElementConstructor<any>>) => ReactElement<...>)"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string | FieldError | null | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Form/InputError/InputError.tsx#InputError"]={docgenInfo:InputError.__docgenInfo,name:"InputError",path:"src/components/Form/InputError/InputError.tsx#InputError"})}catch(__react_docgen_typescript_loader_error){}},"./src/utils/dateUtils/dateUtils.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{jh:function(){return bffDateToDateFieldUS},P7:function(){return DateFieldToBFF},yu:function(){return regExValidDate}});var _Users_matveyprupas_Documents_projects_WALG_CORE_h3_consumer_web_h3_consumer_web_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),bffDateToDateFieldUS=function bffDateToDateFieldUS(dateString){var d=new Date(dateString);return["0".concat(d.getUTCMonth()+1).slice(-2),"0".concat(d.getUTCDate()).slice(-2),d.getUTCFullYear()].join(" / ")},DateFieldToBFF=function DateFieldToBFF(dateString){var _dateString$split=dateString.split(" / "),_dateString$split2=(0,_Users_matveyprupas_Documents_projects_WALG_CORE_h3_consumer_web_h3_consumer_web_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(_dateString$split,3),month=_dateString$split2[0],date=_dateString$split2[1];return[_dateString$split2[2],month,date].join("-")},regExValidDate=/((0[1-9]|1[0-2]) \/ (0[1-9]|[1-2][0-9]|3[0-1]) \/ ([0-9]{4}))/},"./src/utils/validations/fields/validateFields.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{n:function(){return regExFields}});var regExFields=/((\$\{)(.*)(\}))|((.{1,})=(.{1,}))|(OR|AND|DROP|SELECT|INSERT|DELETE)/},"./src/views/ManageMedication/components/VerifyMedicationFields/VerifyMedicationFields.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{C:function(){return VerifyMedicationFields}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),index_esm=__webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs"),Form=__webpack_require__("./src/components/Form/index.ts"),DateField=__webpack_require__("./src/components/DateField/index.ts"),useTranslation=__webpack_require__("./node_modules/react-i18next/dist/es/useTranslation.js"),uikit=__webpack_require__("./src/uikit/index.ts"),utils=__webpack_require__("./src/utils/index.ts"),dateUtils=__webpack_require__("./src/utils/dateUtils/dateUtils.ts"),validateFields=__webpack_require__("./src/utils/validations/fields/validateFields.ts"),VerifyMedicationFields_module={root:"VerifyMedicationFields_root__SD2c+",wraper:"VerifyMedicationFields_wraper__sggZc",input:"VerifyMedicationFields_input__Ma8C3"},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),VerifyMedicationFields=function VerifyMedicationFields(_ref){var placeHolder=_ref.placeHolder,medication=_ref.medication,enable=_ref.enable,handleSave=_ref.handleSave,t=(0,useTranslation.$)().t,formRef=(0,react.useRef)(null),validation={required:t("validations.required"),maxLengthPhone:{value:18,message:"form.fields.phoneNumber.errors.invalid",empty:9}},_useState=(0,react.useState)(!1),_useState2=(0,slicedToArray.Z)(_useState,2),hasExceedMaxLenghtQuantity=_useState2[0],setHasExceedMaxLenghtQuantity=_useState2[1],_useState3=(0,react.useState)(!1),_useState4=(0,slicedToArray.Z)(_useState3,2),hasExceedMaxLenghtPrescribed=_useState4[0],setHasExceedMaxLenghtPrescribed=_useState4[1],_useState5=(0,react.useState)(!1),_useState6=(0,slicedToArray.Z)(_useState5,2),hasExceedMaxLenghtPharmacy=_useState6[0],setHasExceedMaxLenghtPharmacy=_useState6[1],_useState7=(0,react.useState)(!0),_useState8=(0,slicedToArray.Z)(_useState7,2),errorDate=_useState8[0],setErrorDate=_useState8[1],_useForm=(0,index_esm.cI)({mode:"onSubmit",criteriaMode:"all"}),handleSubmit=_useForm.handleSubmit,register=_useForm.register,formState=_useForm.formState,control=_useForm.control,setValue=_useForm.setValue,watch=_useForm.watch,handleFormSubmit=handleSubmit(handleSave,(0,utils.fk)({control:control})),textRegister=register,errors=formState.errors,watchAll=watch(),description=function description(input,error,maxLength,state){return(null==input?void 0:input.length)===maxLength?state?(0,jsx_runtime.jsx)("div",{className:"a11y",id:"typeAnswerLenghtStatusExceed","aria-live":"assertive","aria-atomic":!0,children:t("views.MedicationManagement.exceedMaxLength")}):(0,jsx_runtime.jsx)("span",{className:"a11y",id:"typeAnswerLenghtStatusReached","aria-live":"assertive","aria-atomic":!0,children:t("views.MedicationManagement.reachedMaxLength")}):(0,jsx_runtime.jsx)(Form.p,{value:error})};(0,react.useEffect)((function(){"+1 - ___ - ___ - ____"===watchAll.prescriberPhone&&setValue("prescriberPhone","undefined"),"+1 - ___ - ___ - ____"===watchAll.pharmacyPhone&&setValue("pharmacyPhone","undefined")}),[watchAll.prescriberPhone,watchAll.pharmacyPhone,setValue]);var _onKeyDown=function onKeyDown(event,setMaxlength){return event.target.value.length===event.target.maxLength?setMaxlength(!0):setMaxlength(!1)},validPhone=function validPhone(currentLength){var PhoneLength=currentLength.replace(/-|_/g,"").length;return!(PhoneLength<validation.maxLengthPhone.value&&currentLength.length-1>=validation.maxLengthPhone.empty)||(PhoneLength===validation.maxLengthPhone.empty-1||validation.maxLengthPhone.message)};return(0,react.useEffect)((function(){setValue("quantity","".concat(medication&&(null==medication?void 0:medication.quantity)||"")),setValue("prescriberPhone","".concat(null==medication?void 0:medication.prescriberPhoneNumber)),setValue("pharmacyPhone","".concat(null==medication?void 0:medication.pharmacyPhoneNumber)),setValue("lastFill","".concat(null!=(null==medication?void 0:medication.lastRefillDate)?(0,dateUtils.jh)(null==medication?void 0:medication.lastRefillDate):""))}),[medication,setValue]),(0,jsx_runtime.jsxs)("div",{className:VerifyMedicationFields_module.root,children:[(0,jsx_runtime.jsxs)("p",{children:[t("views.MedicationManagement.VerifyYourMedication.description")," ",(0,jsx_runtime.jsx)("span",{children:"*"}),"."]}),(0,jsx_runtime.jsxs)("form",{onSubmit:handleFormSubmit,id:"form",ref:formRef,noValidate:!0,children:[(0,jsx_runtime.jsxs)("div",{className:VerifyMedicationFields_module.wraper,children:[(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(index_esm.Qr,{name:"quantity",control:control,rules:{required:validation.required},render:function render(_ref2){var field=_ref2.field;return(0,jsx_runtime.jsx)(uikit.gs,{className:VerifyMedicationFields_module.input,id:"quantity",label:t("views.MedicationManagement.VerifyYourMedication.quantityLabel"),isRequired:enable,validity:errors.quantity&&"invalid",description:description(watchAll.quantity,errors.quantity,7,hasExceedMaxLenghtQuantity),input:function input(inputProps){return(0,jsx_runtime.jsx)(uikit.Y2,(0,objectSpread2.Z)((0,objectSpread2.Z)({},register("quantity")),{},{id:"quantity","aria-invalid":inputProps["aria-invalid"],validity:errors.quantity&&"invalid",maxLength:7,minVal:0,isReadOnly:!enable,isRequired:enable,value:field.value,onChange:field.onChange,placeholder:placeHolder,onKeyDown:function onKeyDown(event){return _onKeyDown(event,setHasExceedMaxLenghtQuantity)}}))}})}}),(0,jsx_runtime.jsx)(uikit.nv,(0,objectSpread2.Z)((0,objectSpread2.Z)({className:VerifyMedicationFields_module.input,id:"prescribed",label:t("views.MedicationManagement.VerifyYourMedication.prescribedLabel"),placeholder:placeHolder,defaultValue:null==medication?void 0:medication.prescribedBy,onKeyDown:function onKeyDown(e){return _onKeyDown(e,setHasExceedMaxLenghtPrescribed)},description:description(watchAll.prescribed,errors.prescribed,60,hasExceedMaxLenghtPrescribed),validity:errors.prescribed&&"invalid"},textRegister("prescribed",{validate:function validate(value){return!(validateFields.n.test(value)||null!=value&&value.includes("&&")||null!=value&&value.includes("||"))||t("views.MedicationManagement.unexpectedCharacters")}})),{},{maxLength:60,isReadOnly:!enable,"aria-readonly":!enable})),(0,jsx_runtime.jsx)(index_esm.Qr,{name:"prescriberPhone",control:control,rules:{validate:function validate(value){return validPhone(value)}},render:function render(_ref3){var field=_ref3.field;return(0,jsx_runtime.jsx)(uikit.gs,{className:VerifyMedicationFields_module.input,id:"prescriberPhone",label:t("views.MedicationManagement.VerifyYourMedication.prescriberPhoneLabel"),validity:errors.prescriberPhone&&"invalid",description:(0,jsx_runtime.jsx)(Form.p,{value:errors.prescriberPhone}),input:function input(inputProps){return(0,jsx_runtime.jsx)(uikit.AJ,(0,objectSpread2.Z)((0,objectSpread2.Z)({},inputProps),{},{id:"prescriberPhone",validity:errors.quantity&&"invalid",value:field.value,onChange:field.onChange,isReadOnly:!enable,"aria-readonly":!enable}))}})}})]}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("div",{className:VerifyMedicationFields_module.input,children:(0,jsx_runtime.jsx)(index_esm.Qr,{name:"lastFill",control:control,rules:{validate:function validate(value){return function validDate(date){return""===date?(setErrorDate(!0),!0):(setErrorDate(dateUtils.yu.test(date)),dateUtils.yu.test(date))}(value)}},render:function render(_ref4){var field=_ref4.field;return(0,jsx_runtime.jsx)(DateField.Nn,(0,objectSpread2.Z)((0,objectSpread2.Z)({},field),{},{datePickerAlt:"lastFill","aria-autocomplete":"list",label:t("views.MedicationManagement.VerifyYourMedication.lastFillLabel"),isRequired:!1,isReadOnly:!enable,"aria-readonly":!enable,isInvalid:!errorDate,error:errorDate?"":"form.fields.LastFillDate.errors.invalid"}))}})}),(0,jsx_runtime.jsx)(uikit.nv,(0,objectSpread2.Z)((0,objectSpread2.Z)({className:VerifyMedicationFields_module.input,id:"pharmacy",label:t("views.MedicationManagement.VerifyYourMedication.pharmacyLabel"),placeholder:placeHolder,defaultValue:null==medication?void 0:medication.pharmacy,onKeyDown:function onKeyDown(e){return _onKeyDown(e,setHasExceedMaxLenghtPharmacy)},description:description(watchAll.pharmacy,errors.pharmacy,100,hasExceedMaxLenghtPharmacy),validity:errors.pharmacy&&"invalid"},textRegister("pharmacy",{validate:function validate(value){return!(validateFields.n.test(value)||null!=value&&value.includes("&&")||null!=value&&value.includes("||"))||t("views.MedicationManagement.unexpectedCharacters")}})),{},{maxLength:100,isReadOnly:!enable,"aria-readonly":!enable})),(0,jsx_runtime.jsx)(index_esm.Qr,{name:"pharmacyPhone",control:control,rules:{validate:function validate(value){return validPhone(value)}},render:function render(_ref5){var field=_ref5.field;return(0,jsx_runtime.jsx)(uikit.gs,{className:VerifyMedicationFields_module.input,id:"pharmacyPhone",label:t("views.MedicationManagement.VerifyYourMedication.pharmacyPhoneLabel"),validity:errors.pharmacyPhone&&"invalid",description:(0,jsx_runtime.jsx)(Form.p,{value:errors.pharmacyPhone}),input:function input(inputProps){return(0,jsx_runtime.jsx)(uikit.AJ,(0,objectSpread2.Z)((0,objectSpread2.Z)({},inputProps),{},{id:"pharmacyPhone",validity:errors.quantity&&"invalid",value:field.value,onChange:field.onChange,isReadOnly:!enable,"aria-readonly":!enable}))}})}})]})]}),(0,jsx_runtime.jsx)(uikit.zx,{variant:"primary",size:"small",type:"submit",className:VerifyMedicationFields_module.button,hidden:!0,"aria-hidden":!0,tabIndex:-1,children:t("views.VerifyMedications.doneButton")})]})]})};try{VerifyMedicationFields.displayName="VerifyMedicationFields",VerifyMedicationFields.__docgenInfo={description:"",displayName:"VerifyMedicationFields",props:{placeHolder:{defaultValue:null,description:"placeholder for the fields",name:"placeHolder",required:!1,type:{name:"string"}},medication:{defaultValue:null,description:"Medication Data",name:"medication",required:!1,type:{name:"Medications | null"}},enable:{defaultValue:null,description:"enables the fields",name:"enable",required:!0,type:{name:"boolean"}},handleSave:{defaultValue:null,description:"function to save the fields",name:"handleSave",required:!0,type:{name:"(data: FormValues) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/views/ManageMedication/components/VerifyMedicationFields/VerifyMedicationFields.tsx#VerifyMedicationFields"]={docgenInfo:VerifyMedicationFields.__docgenInfo,name:"VerifyMedicationFields",path:"src/views/ManageMedication/components/VerifyMedicationFields/VerifyMedicationFields.tsx#VerifyMedicationFields"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Button/Button.module.scss":function(__unused_webpack_module,__webpack_exports__){__webpack_exports__.Z={button:"Button_button__JBBzO",disabled:"Button_disabled__DkgJ+",primary:"Button_primary__9MLUH",secondary:"Button_secondary__sUGsj",tertiary:"Button_tertiary__ioTKC",delete:"Button_delete__kJUWQ"}}}]);