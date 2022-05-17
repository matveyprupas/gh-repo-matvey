"use strict";(self.webpackChunkh3_consumer_web=self.webpackChunkh3_consumer_web||[]).push([[9965],{"./src/views/ManageMedication/components/Modals/FinishModal/FinishModal.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{FinishModalFromVerifyMedications:function(){return FinishModalFromVerifyMedications},default:function(){return FinishModal_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),esm=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/index.js"),dist_esm=__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/index.js"),Button=__webpack_require__("./src/components/Button/index.ts"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/react/index.js"),Modal=__webpack_require__("./src/components/Modal/index.ts"),Heading=__webpack_require__("./src/components/Heading/index.ts"),useTranslation=__webpack_require__("./node_modules/react-i18next/dist/es/useTranslation.js"),useOnboardingUpdateMedsFinish=__webpack_require__("./src/graphql/useOnboardingUpdateMedsFinish.ts"),routes=__webpack_require__("./src/constants/routes.ts"),types=__webpack_require__("./src/types/index.ts"),hooks=__webpack_require__("./src/hooks/index.ts"),MedicationManagmentProvider=__webpack_require__("./src/views/ManageMedication/providers/MedicationManagmentProvider/index.ts"),niceWork=__webpack_require__("./src/assets/images/modals/niceWork.svg"),Home_types=__webpack_require__("./src/views/Opening/views/Home/types/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["isCompleted","onRequestClose"],FinishModal=function FinishModal(_ref){var isCompleted=_ref.isCompleted,onRequestClose=_ref.onRequestClose,props=(0,objectWithoutProperties.Z)(_ref,_excluded),t=(0,useTranslation.$)().t,_useOnboardingUpdateF=(0,useOnboardingUpdateMedsFinish.Q)(),updateVerifyStatus=(0,slicedToArray.Z)(_useOnboardingUpdateF,1)[0],onboardingStatus=(0,react.useContext)(MedicationManagmentProvider.c_).onboardingStatus,userId=(0,hooks.rf)().userId;return(0,react.useEffect)((function(){isCompleted&&(updateVerifyStatus({variables:{userId:userId,input:{type:onboardingStatus===types.JGc.AddMedications?types.JGc.AddMedications:types.JGc.VerifyMedications,status:Home_types.W.COMPLETED}}}),updateVerifyStatus({variables:{userId:userId,input:{type:types.JGc.SetMedicationSchedule,status:Home_types.W.ASSIGNED}}}))}),[isCompleted,onboardingStatus,updateVerifyStatus,userId]),(0,jsx_runtime.jsxs)(Modal.u,(0,objectSpread2.Z)((0,objectSpread2.Z)({contentLabel:t("modals:niceWork.heading"),onRequestClose:onRequestClose},props),{},{children:[(0,jsx_runtime.jsx)(Modal.u.Slot,{slotName:"image-top",children:(0,jsx_runtime.jsx)("img",{src:niceWork.Z,alt:"","aria-hidden":!0})}),(0,jsx_runtime.jsx)(Modal.u.Slot,{slotName:"heading",children:(0,jsx_runtime.jsx)(Heading.X,{className:"h3",children:t("modals:niceWork.heading")})}),(0,jsx_runtime.jsx)(Modal.u.Slot,{slotName:"content",isContained:!0,isCentered:!0,children:(0,jsx_runtime.jsx)("p",{className:"paragraph",children:t("modals:niceWork.description")})}),(0,jsx_runtime.jsxs)(Modal.u.Slot,{slotName:"button",children:[(0,jsx_runtime.jsx)(Button.Z,{text:t("modals:niceWork.goTo"),btnStyle:"tertiary",isReactLink:!0,linkTo:routes._.medicationManagement.index}),(0,jsx_runtime.jsx)(Button.Z,{text:t("modals:niceWork.return"),isReactLink:!0,linkTo:routes._.homepage})]})]}))};try{FinishModal.displayName="FinishModal",FinishModal.__docgenInfo={description:"",displayName:"FinishModal",props:{title:{defaultValue:null,description:"Title text",name:"title",required:!1,type:{name:"string"}},contentLabel:{defaultValue:null,description:"String indicating how the content container should be announced\nto screenreaders.",name:"contentLabel",required:!1,type:{name:"string"}},isOpen:{defaultValue:null,description:"Boolean describing if the modal should be shown or not.",name:"isOpen",required:!0,type:{name:"boolean"}},isMobileButtonsReverse:{defaultValue:null,description:"Boolean to reverse order of buttons on mobile",name:"isMobileButtonsReverse",required:!1,type:{name:"boolean"}},onRequestClose:{defaultValue:null,description:"Function that will be run when the modal is requested\nto be closed (either by clicking on overlay or pressing ESC).\nNote: It is not called if isOpen is changed by other means.",name:"onRequestClose",required:!0,type:{name:"() => void"}},onAfterOpen:{defaultValue:null,description:"Function that will be run after the modal has opened.",name:"onAfterOpen",required:!1,type:{name:"(() => void)"}},onAfterClose:{defaultValue:null,description:"Function that will be run after the modal has closed.",name:"onAfterClose",required:!1,type:{name:"(() => void)"}},closeTimeoutMS:{defaultValue:null,description:"Number indicating the milliseconds to wait before closing\nthe modal.",name:"closeTimeoutMS",required:!1,type:{name:"number"}},id:{defaultValue:null,description:"String id to be applied to the content div",name:"id",required:!1,type:{name:"string"}},testId:{defaultValue:null,description:"String testId that renders a data-testid attribute in the DOM,\nuseful for testing.",name:"testId",required:!1,type:{name:"string"}},ariaHideApp:{defaultValue:null,description:"Boolean to hide page content from assistive technologies when modal is open",name:"ariaHideApp",required:!1,type:{name:"boolean"}},isImageLayout:{defaultValue:null,description:"Force the modal layout when image is present even without image",name:"isImageLayout",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},isCompleted:{defaultValue:null,description:"",name:"isCompleted",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/views/ManageMedication/components/Modals/FinishModal/FinishModal.tsx#FinishModal"]={docgenInfo:FinishModal.__docgenInfo,name:"FinishModal",path:"src/views/ManageMedication/components/Modals/FinishModal/FinishModal.tsx#FinishModal"})}catch(__react_docgen_typescript_loader_error){}var FinishModal_stories={title:"Consumer Web/Modal",component:FinishModal},FinishModalFromVerifyMedications=function Template(args){var updateArgs=(0,esm.useArgs)()[1],toggleModal=function toggleModal(){var isOpen=args.isOpen;updateArgs((0,objectSpread2.Z)((0,objectSpread2.Z)({},args),{},{isOpen:!isOpen}))};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Button.z,{onClickCallback:function onClickCallback(){return toggleModal()},text:"Open Modal"}),(0,jsx_runtime.jsx)(FinishModal,(0,objectSpread2.Z)((0,objectSpread2.Z)({},args),{},{onRequestClose:function onRequestClose(){toggleModal()}}))]})}.bind({});FinishModalFromVerifyMedications.args={isOpen:!1,isMobileButtonsReverse:!0,onRequestClose:(0,dist_esm.action)("onRequestClose")},FinishModalFromVerifyMedications.parameters=(0,objectSpread2.Z)({storySource:{source:"(args) => {\n  const updateArgs = useArgs()[1];\n  const toggleModal = () => {\n    const { isOpen } = args;\n    updateArgs({ ...args, isOpen: !isOpen });\n  };\n  return (\n    <>\n      <Button onClickCallback={() => toggleModal()} text='Open Modal' />\n      <FinishModal\n        {...args}\n        onRequestClose={() => {\n          toggleModal();\n        }}\n      />\n    </>\n  );\n}"}},FinishModalFromVerifyMedications.parameters)},"./src/views/ManageMedication/providers/MedicationManagmentProvider/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{c_:function(){return MedicationManagmentContext}});var react=__webpack_require__("./node_modules/react/index.js"),routes=__webpack_require__("./src/constants/routes.ts"),redirectOnboarding=(__webpack_require__("./node_modules/react/jsx-runtime.js"),routes._.medicationManagement.verify),MedicationManagmentContext=(routes._.medicationManagement.index,(0,react.createContext)({redirectURL:"",hasError:!1,onboardingStatus:"",redirectSwitchHandler:function redirectSwitchHandler(){},errorSwitchHandler:function errorSwitchHandler(){},onboardingHandler:function onboardingHandler(){}})),MedicationManagmentProvider=function MedicationManagmentProvider(_ref){var children=_ref.children,_useState=useState(redirectOnboarding),_useState2=_slicedToArray(_useState,2),redirectURL=_useState2[0],setRedirectURL=_useState2[1],_useState3=useState(!1),_useState4=_slicedToArray(_useState3,2),hasError=_useState4[0],setHasError=_useState4[1],_useState5=useState(""),_useState6=_slicedToArray(_useState5,2),onboardingStatus=_useState6[0],setOnboardingStatus=_useState6[1],redirectSwitchHandler=useCallback((function(url){!function setRedirect(url){setRedirectURL(url)}(url)}),[]);useEffect((function(){redirectSwitchHandler(redirectURL)}),[redirectURL,redirectSwitchHandler]);var errorSwitchHandler=useCallback((function(error){!function setError(error){setHasError(error)}(error)}),[]);useEffect((function(){errorSwitchHandler(hasError)}),[errorSwitchHandler,hasError]);var onboardingHandler=useCallback((function(isMedication){""!==isMedication&&function setIsAddMedications(isMedication){setOnboardingStatus(isMedication)}(isMedication)}),[]);useEffect((function(){onboardingHandler(onboardingStatus)}),[onboardingHandler,onboardingStatus]);var contextValue=useMemo((function(){return{redirectURL:redirectURL,hasError:hasError,onboardingStatus:onboardingStatus,redirectSwitchHandler:redirectSwitchHandler,errorSwitchHandler:errorSwitchHandler,onboardingHandler:onboardingHandler}}),[redirectURL,hasError,onboardingStatus,redirectSwitchHandler,errorSwitchHandler,onboardingHandler]);return _jsx(MedicationManagmentContext.Provider,{value:contextValue,children:children})};try{MedicationManagmentProvider.displayName="MedicationManagmentProvider",MedicationManagmentProvider.__docgenInfo={description:"",displayName:"MedicationManagmentProvider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/views/ManageMedication/providers/MedicationManagmentProvider/MedicationManagmentProvider.tsx#MedicationManagmentProvider"]={docgenInfo:MedicationManagmentProvider.__docgenInfo,name:"MedicationManagmentProvider",path:"src/views/ManageMedication/providers/MedicationManagmentProvider/MedicationManagmentProvider.tsx#MedicationManagmentProvider"})}catch(__react_docgen_typescript_loader_error){}},"./src/views/Opening/views/Home/types/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var THomeFeedItemStatus;__webpack_require__.d(__webpack_exports__,{W:function(){return THomeFeedItemStatus}}),function(THomeFeedItemStatus){THomeFeedItemStatus.IN_PROGRESS="IN_PROGRESS",THomeFeedItemStatus.COMPLETED="COMPLETED",THomeFeedItemStatus.ASSIGNED="ASSIGNED",THomeFeedItemStatus.AUTOCOMPLETED="AUTOCOMPLETED"}(THomeFeedItemStatus||(THomeFeedItemStatus={}))}}]);