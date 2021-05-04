(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors/FloatActionButton"],{

/***/ "./node_modules/@kazupon/vue-i18n-loader/lib/index.js!./src/components/FloatActionButton/FloatActionButton.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=D%3A%5Cxampp%5Chtdocs%5Cprojects-html5%5CPWA-Plain-Text-Editor%5Csrc%5Ccomponents%5CFloatActionButton%5CFloatActionButton.vue&lang=yaml":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@kazupon/vue-i18n-loader/lib!./src/components/FloatActionButton/FloatActionButton.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=D%3A%5Cxampp%5Chtdocs%5Cprojects-html5%5CPWA-Plain-Text-Editor%5Csrc%5Ccomponents%5CFloatActionButton%5CFloatActionButton.vue&lang=yaml ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (Component) {
  Component.options.__i18n = Component.options.__i18n || []
  Component.options.__i18n.push('{"en":{"TEST_MESSAGE":"Test Message"},"zh-TW":{"The message is too long.":"文字字數過多。"}}')
  delete Component.options._Ctor
}


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./src/components/FloatActionButton/FloatActionButton.less?vue&type=style&index=0&id=0f8fb719&lang=less&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js??ref--1-2!./src/components/FloatActionButton/FloatActionButton.less?vue&type=style&index=0&id=0f8fb719&lang=less&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".float-action-button[data-v-0f8fb719] {\n  user-select: none;\n  /*\n  .zoom-btn-person { background-color: #F44336; }\n\n  .zoom-btn-person:hover { background-color: #e57373; }\n\n  .zoom-btn-doc { background-color: #ffeb3b; }\n\n  .zoom-btn-doc:hover { background-color: #fff176; }\n\n  .zoom-btn-tangram { background-color: #4CAF50; }\n\n  .zoom-btn-tangram:hover { background-color: #81c784; }\n\n  .zoom-btn-report { background-color: #2196F3; }\n\n  .zoom-btn-report:hover { background-color: #64b5f6; }\n\n  .zoom-btn-feedback { background-color: #9c27b0; }\n\n  .zoom-btn-feedback:hover { background-color: #ba68c8; }\n  */\n}\n.float-action-button .zoom-fab[data-v-0f8fb719] {\n  display: inline-block;\n  width: 40px;\n  height: 40px;\n  line-height: 40px;\n  border-radius: 50%;\n  background-color: #009688;\n  vertical-align: middle;\n  text-decoration: none;\n  text-align: center;\n  transition: 0.2s ease-out;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);\n  cursor: pointer;\n  color: #FFF;\n  use-select: none;\n}\n.float-action-button .zoom-fab[data-v-0f8fb719]:hover {\n  background-color: #4db6ac;\n  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 7px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -1px rgba(0, 0, 0, 0.2);\n}\n.float-action-button .zoom-btn-large[data-v-0f8fb719] {\n  width: 60px;\n  height: 60px;\n  line-height: 60px;\n  padding-right: 6px;\n}\n.float-action-button .zoom-btn-large i[data-v-0f8fb719]:before {\n  font-size: 1.75rem;\n}\n.float-action-button .zoom-menu[data-v-0f8fb719] {\n  position: absolute;\n  right: 60px;\n  left: auto;\n  top: 50%;\n  transform: translateY(-50%);\n  height: 100%;\n  width: 500px;\n  list-style: none;\n  text-align: right;\n  pointer-events: none;\n}\n.float-action-button .zoom-menu.show[data-v-0f8fb719] {\n  z-index: 1;\n  pointer-events: all;\n}\n.float-action-button .zoom-menu li[data-v-0f8fb719] {\n  display: inline-block;\n  margin-right: 10px;\n}\n.float-action-button .zoom-card[data-v-0f8fb719] {\n  position: absolute;\n  right: 150px;\n  bottom: 70px;\n  transition: box-shadow 0.25s;\n  padding: 24px;\n  border-radius: 2px;\n  background-color: #009688;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);\n  color: #FFF;\n}\n.float-action-button .zoom-card ul[data-v-0f8fb719] {\n  -webkit-padding-start: 0;\n  list-style: none;\n  text-align: left;\n}\n.float-action-button .scale-transition[data-v-0f8fb719] {\n  transition: transform 0.3s cubic-bezier(0.53, 0.01, 0.36, 1.63) !important;\n}\n.float-action-button .scale-transition.scale-out[data-v-0f8fb719] {\n  transform: scale(0);\n  transition: transform 0.2s !important;\n}\n.float-action-button .scale-transition.scale-in[data-v-0f8fb719] {\n  transform: scale(1);\n}\n.float-action-button .tooltip[data-v-0f8fb719] {\n  position: relative;\n}\n.float-action-button .tooltip .tooltiptext[data-v-0f8fb719] {\n  padding: 10px;\n  opacity: 0;\n  font-size: 0.8em;\n  border-radius: 3px;\n  text-align: center;\n  transition: ease-in-out 0.2s;\n  /* Position the tooltip */\n  position: absolute;\n  z-index: 1;\n  left: -10%;\n  top: -3rem;\n  background-color: #000;\n  color: #fff;\n  line-height: 0.8rem;\n  white-space: nowrap;\n}\n.float-action-button .tooltiptext[data-v-0f8fb719]::before {\n  content: \"\";\n  /*讓before顯示出來*/\n  position: absolute;\n  top: 15px;\n  /*調整位置*/\n  right: 50%;\n  /*調整位置*/\n  padding: 0.8em;\n  /*做出對話框的角*/\n  background-color: inherit;\n  border: inherit;\n  /*讓before繼承talkingFrame的CSS屬性*/\n  border-right: 0;\n  /*隱藏內邊的border*/\n  border-bottom: 0;\n  /*隱藏內邊的border*/\n  transform: rotate(45deg);\n  /*旋軟角度*/\n  z-index: -1;\n}\n.float-action-button .tooltip:hover .tooltiptext[data-v-0f8fb719] {\n  opacity: 1;\n}\n.float-action-button .tooltip .zoom-fab i.icon[data-v-0f8fb719] {\n  margin-left: 0.25rem;\n}\n", "",{"version":3,"sources":["D:/xampp/htdocs/projects-html5/PWA-Plain-Text-Editor/src/components/FloatActionButton/FloatActionButton.less?vue&type=style&index=0&id=0f8fb719&lang=less&scoped=true&","FloatActionButton.less"],"names":[],"mappings":"AAAA;EAEE,iBAAA;ECAA;;;;;;;;;;;;;;;;;;;;GAoBC;AACH;ADvBA;EAKI,qBAAA;EACA,WAAA;EACA,YAAA;EACA,iBAAA;EACA,kBAAA;EACA,yBAAA;EACA,sBAAA;EACA,qBAAA;EACA,kBAAA;EACA,yBAAA;EACA,+GAAA;EACA,eAAA;EACA,WAAA;EAEA,gBAAA;ACoBJ;ADvCA;EAuBI,yBAAA;EACA,+GAAA;ACmBJ;AD3CA;EA4BI,WAAA;EACA,YAAA;EACA,iBAAA;EACA,kBAAA;ACkBJ;ADjDA;EAkCM,kBAAA;ACkBN;ADpDA;EAuCI,kBAAA;EACA,WAAA;EACA,UAAA;EACA,QAAA;EACA,2BAAA;EACA,YAAA;EACA,YAAA;EACA,gBAAA;EACA,iBAAA;EAGA,oBAAA;ACcJ;ADXI;EAEE,UAAA;EACA,mBAAA;ACYN;ADpEA;EA6DI,qBAAA;EACA,kBAAA;ACUJ;ADxEA;EAkEI,kBAAA;EACA,YAAA;EACA,YAAA;EACA,4BAAA;EACA,aAAA;EACA,kBAAA;EACA,yBAAA;EACA,+GAAA;EACA,WAAA;ACSJ;ADnFA;EA8EI,wBAAA;EACA,gBAAA;EACA,gBAAA;ACQJ;ADxFA;EA6GI,0EAAA;AClBJ;AD3FA;EAiHI,mBAAA;EACA,qCAAA;ACnBJ;AD/FA;EAqH+B,mBAAA;ACnB/B;ADlGA;EA4HI,kBAAA;ACvBJ;ADrGA;EAgIM,aAAA;EACA,UAAA;EACA,gBAAA;EACA,kBAAA;EACA,kBAAA;EACA,4BAAA;ECxBJ,yBAAyB;ED0BrB,kBAAA;EACA,UAAA;EACA,UAAA;EACA,UAAA;EACA,sBAAA;EACA,WAAA;EACA,mBAAA;EACA,mBAAA;ACxBN;ADtHA;EAkJI,WAAA;ECzBF,cAAc;ED0BZ,kBAAA;EACA,SAAA;ECxBF,OAAO;EDyBL,UAAA;ECvBF,OAAO;EDwBL,cAAA;ECtBF,UAAU;EDuBR,yBAAA;EACA,eAAA;ECrBF,8BAA8B;EDsB5B,eAAA;ECpBF,cAAc;EDqBZ,gBAAA;ECnBF,cAAc;EDoBZ,wBAAA;EClBF,OAAO;EDmBL,WAAA;ACjBJ;AD3IA;EA+JI,UAAA;ACjBJ;AD9IA;EAoKM,oBAAA;ACnBN","file":"FloatActionButton.less","sourcesContent":[".float-action-button {\n\n  user-select: none;\n  \n  .zoom-fab {\n    display: inline-block;\n    width: 40px;\n    height: 40px;\n    line-height: 40px;\n    border-radius: 50%;\n    background-color: #009688;\n    vertical-align: middle;\n    text-decoration: none;\n    text-align: center;\n    transition: 0.2s ease-out;\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);\n    cursor: pointer;\n    color: #FFF;\n    \n    use-select: none;\n  }\n\n  .zoom-fab:hover {\n    background-color: #4db6ac;\n    box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 7px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -1px rgba(0, 0, 0, 0.2);\n  }\n\n  .zoom-btn-large {\n    width: 60px;\n    height: 60px;\n    line-height: 60px;\n    padding-right: 6px;\n    \n    i:before {\n      font-size: 1.75rem;\n    }\n  }\n\n  .zoom-menu {\n    position: absolute;\n    right: 60px;\n    left: auto;\n    top: 50%;\n    transform: translateY(-50%);\n    height: 100%;\n    width: 500px;\n    list-style: none;\n    text-align: right;\n    \n    //position: relative;\n    pointer-events: none;\n    \n    \n    &.show {\n      //position: absolute;\n      z-index: 1;\n      pointer-events: all;\n    }\n  }\n\n  .zoom-menu li {\n    display: inline-block;\n    margin-right: 10px;\n  }\n\n  .zoom-card {\n    position: absolute;\n    right: 150px;\n    bottom: 70px;\n    transition: box-shadow 0.25s;\n    padding: 24px;\n    border-radius: 2px;\n    background-color: #009688;\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);\n    color: #FFF;\n  }\n\n  .zoom-card ul {\n    -webkit-padding-start: 0;\n    list-style: none;\n    text-align: left;\n  }\n\n  // -----------------------\n\n  /*\n  .zoom-btn-person { background-color: #F44336; }\n\n  .zoom-btn-person:hover { background-color: #e57373; }\n\n  .zoom-btn-doc { background-color: #ffeb3b; }\n\n  .zoom-btn-doc:hover { background-color: #fff176; }\n\n  .zoom-btn-tangram { background-color: #4CAF50; }\n\n  .zoom-btn-tangram:hover { background-color: #81c784; }\n\n  .zoom-btn-report { background-color: #2196F3; }\n\n  .zoom-btn-report:hover { background-color: #64b5f6; }\n\n  .zoom-btn-feedback { background-color: #9c27b0; }\n\n  .zoom-btn-feedback:hover { background-color: #ba68c8; }\n  */\n  // -----------------------\n\n  .scale-transition { \n    transition: transform 0.3s cubic-bezier(0.53, 0.01, 0.36, 1.63) !important; \n  }\n\n  .scale-transition.scale-out {\n    transform: scale(0);\n    transition: transform 0.2s !important;\n  }\n\n  .scale-transition.scale-in { transform: scale(1); }\n\n\n   // ----------------------------------\n   // https://miahsuwork.medium.com/css-%E5%8F%AF%E9%BB%9E%E6%93%8A%E7%9A%84-tooltip-23f7fe8163e4\n   \n  .tooltip{\n    position: relative;\n  }\n  .tooltip .tooltiptext {\n      //width: 155%;\n      padding: 10px;\n      opacity: 0;\n      font-size: .8em;\n      border-radius: 3px;\n      text-align: center;\n      transition: ease-in-out .2s;\n      /* Position the tooltip */\n      position: absolute;\n      z-index: 1;\n      left: -10%;\n      top: -3rem;\n      background-color: #000;\n      color: #fff;\n      line-height: 0.8rem;\n      white-space: nowrap;\n      \n  }\n  .tooltiptext::before{\n    content: \"\";/*讓before顯示出來*/\n    position: absolute;\n    top: 15px; /*調整位置*/\n    right: 50%;/*調整位置*/\n    padding: .8em;/*做出對話框的角*/\n    background-color: inherit;\n    border: inherit;/*讓before繼承talkingFrame的CSS屬性*/\n    border-right: 0;/*隱藏內邊的border*/\n    border-bottom: 0;/*隱藏內邊的border*/\n    transform: rotate(45deg);/*旋軟角度*/\n    z-index: -1;\n  }\n  .tooltip:hover .tooltiptext {\n    opacity: 1;\n  }\n  \n  .tooltip .zoom-fab {\n    i.icon {\n      margin-left: 0.25rem;\n    }\n  }\n}",".float-action-button {\n  user-select: none;\n  /*\n  .zoom-btn-person { background-color: #F44336; }\n\n  .zoom-btn-person:hover { background-color: #e57373; }\n\n  .zoom-btn-doc { background-color: #ffeb3b; }\n\n  .zoom-btn-doc:hover { background-color: #fff176; }\n\n  .zoom-btn-tangram { background-color: #4CAF50; }\n\n  .zoom-btn-tangram:hover { background-color: #81c784; }\n\n  .zoom-btn-report { background-color: #2196F3; }\n\n  .zoom-btn-report:hover { background-color: #64b5f6; }\n\n  .zoom-btn-feedback { background-color: #9c27b0; }\n\n  .zoom-btn-feedback:hover { background-color: #ba68c8; }\n  */\n}\n.float-action-button .zoom-fab {\n  display: inline-block;\n  width: 40px;\n  height: 40px;\n  line-height: 40px;\n  border-radius: 50%;\n  background-color: #009688;\n  vertical-align: middle;\n  text-decoration: none;\n  text-align: center;\n  transition: 0.2s ease-out;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);\n  cursor: pointer;\n  color: #FFF;\n  use-select: none;\n}\n.float-action-button .zoom-fab:hover {\n  background-color: #4db6ac;\n  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 7px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -1px rgba(0, 0, 0, 0.2);\n}\n.float-action-button .zoom-btn-large {\n  width: 60px;\n  height: 60px;\n  line-height: 60px;\n  padding-right: 6px;\n}\n.float-action-button .zoom-btn-large i:before {\n  font-size: 1.75rem;\n}\n.float-action-button .zoom-menu {\n  position: absolute;\n  right: 60px;\n  left: auto;\n  top: 50%;\n  transform: translateY(-50%);\n  height: 100%;\n  width: 500px;\n  list-style: none;\n  text-align: right;\n  pointer-events: none;\n}\n.float-action-button .zoom-menu.show {\n  z-index: 1;\n  pointer-events: all;\n}\n.float-action-button .zoom-menu li {\n  display: inline-block;\n  margin-right: 10px;\n}\n.float-action-button .zoom-card {\n  position: absolute;\n  right: 150px;\n  bottom: 70px;\n  transition: box-shadow 0.25s;\n  padding: 24px;\n  border-radius: 2px;\n  background-color: #009688;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);\n  color: #FFF;\n}\n.float-action-button .zoom-card ul {\n  -webkit-padding-start: 0;\n  list-style: none;\n  text-align: left;\n}\n.float-action-button .scale-transition {\n  transition: transform 0.3s cubic-bezier(0.53, 0.01, 0.36, 1.63) !important;\n}\n.float-action-button .scale-transition.scale-out {\n  transform: scale(0);\n  transition: transform 0.2s !important;\n}\n.float-action-button .scale-transition.scale-in {\n  transform: scale(1);\n}\n.float-action-button .tooltip {\n  position: relative;\n}\n.float-action-button .tooltip .tooltiptext {\n  padding: 10px;\n  opacity: 0;\n  font-size: 0.8em;\n  border-radius: 3px;\n  text-align: center;\n  transition: ease-in-out 0.2s;\n  /* Position the tooltip */\n  position: absolute;\n  z-index: 1;\n  left: -10%;\n  top: -3rem;\n  background-color: #000;\n  color: #fff;\n  line-height: 0.8rem;\n  white-space: nowrap;\n}\n.float-action-button .tooltiptext::before {\n  content: \"\";\n  /*讓before顯示出來*/\n  position: absolute;\n  top: 15px;\n  /*調整位置*/\n  right: 50%;\n  /*調整位置*/\n  padding: 0.8em;\n  /*做出對話框的角*/\n  background-color: inherit;\n  border: inherit;\n  /*讓before繼承talkingFrame的CSS屬性*/\n  border-right: 0;\n  /*隱藏內邊的border*/\n  border-bottom: 0;\n  /*隱藏內邊的border*/\n  transform: rotate(45deg);\n  /*旋軟角度*/\n  z-index: -1;\n}\n.float-action-button .tooltip:hover .tooltiptext {\n  opacity: 1;\n}\n.float-action-button .tooltip .zoom-fab i.icon {\n  margin-left: 0.25rem;\n}\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./src/components/FloatActionButton/FloatActionButtonPosition.less?vue&type=style&index=1&lang=less%20scoped&":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js??ref--1-2!./src/components/FloatActionButton/FloatActionButtonPosition.less?vue&type=style&index=1&lang=less%20scoped& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".float-action-button {\n  position: fixed;\n  right: 3rem;\n  height: 70px;\n  z-index: 999;\n}\n.float-action-button.compact {\n  right: 0.5rem;\n}\n.float-action-button.top {\n  top: 2rem;\n}\n.float-action-button .i.cursor.icon {\n  margin-left: 0.5rem;\n}\n", "",{"version":3,"sources":["D:/xampp/htdocs/projects-html5/PWA-Plain-Text-Editor/src/components/FloatActionButton/FloatActionButtonPosition.less?vue&type=style&index=1&lang=less%20scoped&","FloatActionButtonPosition.less"],"names":[],"mappings":"AAAA;EACE,eAAA;EAEA,WAAA;EACA,YAAA;EACA,YAAA;ACAF;ADEE;EACE,aAAA;ACAJ;ADGE;EAEE,SAAA;ACFJ;ADXA;EAiBI,mBAAA;ACHJ","file":"FloatActionButtonPosition.less","sourcesContent":[".float-action-button {\n  position: fixed;\n  //bottom: 3rem;\n  right: 3rem;\n  height: 70px;\n  z-index: 999;\n\n  &.compact {\n    right: 0.5rem;\n  }\n  \n  &.top {\n    //bottom: initial;\n    top: 2rem;\n  }\n\n  .i.cursor.icon {\n    margin-left: 0.5rem;\n  }\n  \n  //.angle.down.icon {\n  //  margin-left: 0.5rem;\n  //  margin-top: 0.1rem;\n  //}\n  \n  //&:not(.top).display-replace-panel {\n  //  bottom: @ReplacePanelHeight + 1rem;\n  //}\n}",".float-action-button {\n  position: fixed;\n  right: 3rem;\n  height: 70px;\n  z-index: 999;\n}\n.float-action-button.compact {\n  right: 0.5rem;\n}\n.float-action-button.top {\n  top: 2rem;\n}\n.float-action-button .i.cursor.icon {\n  margin-left: 0.5rem;\n}\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./src/components/FloatActionButton/FloatActionButton.html?vue&type=template&id=0f8fb719&scoped=true&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./src/components/FloatActionButton/FloatActionButton.html?vue&type=template&id=0f8fb719&scoped=true& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.config.inited === true,
          expression: "config.inited === true"
        }
      ],
      staticClass: "float-action-button zoom",
      class: _vm.computedClassNameList,
      style: _vm.computedStyle,
      on: {
        mouseout: _vm.delayCloseMenu,
        mousein: _vm.clearDelayCloseMenu,
        mouseover: _vm.initPopup
      }
    },
    [
      _c(
        "a",
        {
          staticClass: "zoom-fab zoom-btn-large tooltip popup",
          attrs: {
            id: "zoomBtn",
            title: _vm.$t(_vm.computedMainIconText),
            "data-content": _vm.$t(_vm.computedMainIconText)
          },
          on: {
            mouseover: function($event) {
              _vm.showMenu = true
            },
            dblclick: function($event) {
              _vm.showMenu = true
            },
            click: _vm.onMainIconClick
          }
        },
        [_c("i", { class: _vm.computedMainIconClassNameList })]
      ),
      _vm._v(" "),
      _c("ul", { staticClass: "zoom-menu", class: { show: _vm.showMenu } }, [
        _c(
          "li",
          { staticClass: "tooltip", on: { click: _vm.openConfigModal } },
          [
            _c(
              "a",
              {
                staticClass:
                  "zoom-fab zoom-btn-sm zoom-btn-doc scale-transition popup",
                class: { "scale-out": !_vm.showMenu },
                attrs: { "data-content": _vm.$t("Configuration") }
              },
              [_c("i", { staticClass: "cogs icon" })]
            )
          ]
        ),
        _vm._v(" "),
        _c("li", { staticClass: "tooltip", on: { click: _vm.clear } }, [
          _c(
            "a",
            {
              staticClass:
                "zoom-fab zoom-btn-sm zoom-btn-person scale-transition popup",
              class: { "scale-out": !_vm.showMenu },
              attrs: { "data-content": _vm.$t("Clear") }
            },
            [_c("i", { staticClass: "eraser icon" })]
          )
        ]),
        _vm._v(" "),
        _c(
          "li",
          { staticClass: "tooltip", on: { click: _vm.toggleEditorMode } },
          [
            _c(
              "a",
              {
                staticClass:
                  "zoom-fab zoom-btn-sm zoom-btn-person scale-transition popup",
                class: { "scale-out": !_vm.showMenu },
                attrs: { "data-content": _vm.$t("Editor Mode (alt+m)") }
              },
              [_c("i", { staticClass: "pencil alternate icon" })]
            )
          ]
        ),
        _vm._v(" "),
        !_vm.isSpeaking && !_vm.isURLSelected
          ? _c("li", { staticClass: "tooltip", on: { click: _vm.speak } }, [
              _c(
                "a",
                {
                  staticClass:
                    "zoom-fab zoom-btn-sm zoom-btn-person scale-transition popup",
                  class: { "scale-out": !_vm.showMenu },
                  attrs: { "data-content": _vm.$t("Speak (alt+s)") }
                },
                [_c("i", { staticClass: "assistive listening systems icon" })]
              )
            ])
          : _vm._e(),
        _vm._v(" "),
        !_vm.localConfig.editorSimpleMode
          ? _c(
              "li",
              { staticClass: "tooltip", on: { click: _vm.toggleReplacePanel } },
              [
                _c(
                  "a",
                  {
                    staticClass:
                      "zoom-fab zoom-btn-sm zoom-btn-doc scale-transition popup",
                    class: { "scale-out": !_vm.showMenu },
                    attrs: { "data-content": _vm.$t("Toggle Replace Panel") }
                  },
                  [_c("i", { staticClass: "edit icon" })]
                )
              ]
            )
          : _vm._e(),
        _vm._v(" "),
        _c(
          "li",
          {
            staticClass: "tooltip",
            on: {
              click: function($event) {
                _vm.positionBottom = !_vm.positionBottom
              }
            }
          },
          [
            _c(
              "a",
              {
                staticClass:
                  "zoom-fab zoom-btn-sm zoom-btn-doc scale-transition popup",
                class: { "scale-out": !_vm.showMenu },
                attrs: { "data-content": _vm.$t("Change Button Position") }
              },
              [
                _vm.positionBottom
                  ? _c("i", { staticClass: "arrow up icon" })
                  : _vm._e(),
                _vm._v(" "),
                !_vm.positionBottom
                  ? _c("i", { staticClass: "arrow down icon" })
                  : _vm._e()
              ]
            )
          ]
        ),
        _vm._v(" "),
        _vm.isURLSelected &&
        !_vm.isShortenURLSelected &&
        !_vm.localConfig.editorSimpleMode
          ? _c(
              "li",
              { staticClass: "tooltip", on: { click: _vm.shortenURL } },
              [
                _c(
                  "a",
                  {
                    staticClass:
                      "zoom-fab zoom-btn-sm zoom-btn-person scale-transition popup",
                    class: { "scale-out": !_vm.showMenu },
                    attrs: { "data-content": _vm.$t("Get short url") }
                  },
                  [_c("i", { staticClass: "compress icon" })]
                )
              ]
            )
          : _vm._e()
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./src/components/FloatActionButton/FloatActionButton.less?vue&type=style&index=0&id=0f8fb719&lang=less&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js??ref--1-2!./src/components/FloatActionButton/FloatActionButton.less?vue&type=style&index=0&id=0f8fb719&lang=less&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js?sourceMap!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/less-loader/dist/cjs.js??ref--1-2!./FloatActionButton.less?vue&type=style&index=0&id=0f8fb719&lang=less&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./src/components/FloatActionButton/FloatActionButton.less?vue&type=style&index=0&id=0f8fb719&lang=less&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("76aee106", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./src/components/FloatActionButton/FloatActionButtonPosition.less?vue&type=style&index=1&lang=less%20scoped&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js??ref--1-2!./src/components/FloatActionButton/FloatActionButtonPosition.less?vue&type=style&index=1&lang=less%20scoped& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js?sourceMap!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/less-loader/dist/cjs.js??ref--1-2!./FloatActionButtonPosition.less?vue&type=style&index=1&lang=less%20scoped& */ "./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./src/components/FloatActionButton/FloatActionButtonPosition.less?vue&type=style&index=1&lang=less%20scoped&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("363ab1df", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/components/FloatActionButton/FloatActionButton.html?vue&type=template&id=0f8fb719&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./src/components/FloatActionButton/FloatActionButton.html?vue&type=template&id=0f8fb719&scoped=true& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_FloatActionButton_html_vue_type_template_id_0f8fb719_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./FloatActionButton.html?vue&type=template&id=0f8fb719&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./src/components/FloatActionButton/FloatActionButton.html?vue&type=template&id=0f8fb719&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_FloatActionButton_html_vue_type_template_id_0f8fb719_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_FloatActionButton_html_vue_type_template_id_0f8fb719_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/FloatActionButton/FloatActionButton.js?vue&type=script&lang=js&?0825":
/*!****************************************************************************************!*\
  !*** ./src/components/FloatActionButton/FloatActionButton.js?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FloatActionButton_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./FloatActionButton.js?vue&type=script&lang=js& */ "./src/components/FloatActionButton/FloatActionButton.js?vue&type=script&lang=js&?34c5");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_FloatActionButton_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/FloatActionButton/FloatActionButton.js?vue&type=script&lang=js&?34c5":
/*!****************************************************************************************!*\
  !*** ./src/components/FloatActionButton/FloatActionButton.js?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FloatActionButtonComputed_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FloatActionButtonComputed.js */ "./src/components/FloatActionButton/FloatActionButtonComputed.js");
/* harmony import */ var _FloatActionButtonMethods_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FloatActionButtonMethods.js */ "./src/components/FloatActionButton/FloatActionButtonMethods.js");
/* harmony import */ var _FloatActionButtonMethodsSpeak_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FloatActionButtonMethodsSpeak.js */ "./src/components/FloatActionButton/FloatActionButtonMethodsSpeak.js");


let FloatActionButton = {
  props: ['config', 'localConfig', 'utils'],
  data() {
    this.$i18n.locale = this.localConfig.locale
    return {
      showMenu: false,
      showMenuTimer: null,
      positionBottom: true,
      viewportHeightPositionThreshold: 300,
      viewportHeightMainButtonThreshold: 150,
      lastTextContent: '',
      lastFilename: null,
      isSpeaking: false,
      speechSynthesis: window.speechSynthesis
    }
  },
  watch: {
    'localConfig.locale'() {
      this.$i18n.locale = this.localConfig.locale;
    },
    'localConfig.textContent'(textContent) {
      if (this.lastTextContent !== '') {
        if (textContent !== '') {
          this.lastTextContent = ''
          this.lastFilename = null
        }
      }
    },
    showMenu() {
      if (this.showMenu === true) {
        this.clearDelayCloseMenu()
      } else {
        clearTimeout(this.showMenuTimer)
        this.showMenuTimer = null
      }
    },
    isSpeaking () {
      if (this.isSpeaking === false) {
        this.speechSynthesis.cancel()
      }
    },
    'config.textToSpeech': async function () {
      await this.speak(this.config.textToSpeech)
      this.config.textToSpeech = false
    },
  },
  computed: {}, // 移動到 FloatActionButtonComputed.js
  methods: {} // 移動到 FloatActionButtonMethods.js
}


Object(_FloatActionButtonComputed_js__WEBPACK_IMPORTED_MODULE_1__["default"])(FloatActionButton)


Object(_FloatActionButtonMethods_js__WEBPACK_IMPORTED_MODULE_2__["default"])(FloatActionButton)


Object(_FloatActionButtonMethodsSpeak_js__WEBPACK_IMPORTED_MODULE_3__["default"])(FloatActionButton)

/* harmony default export */ __webpack_exports__["default"] = (FloatActionButton);

/***/ }),

/***/ "./src/components/FloatActionButton/FloatActionButton.less?vue&type=style&index=0&id=0f8fb719&lang=less&scoped=true&":
/*!***************************************************************************************************************************!*\
  !*** ./src/components/FloatActionButton/FloatActionButton.less?vue&type=style&index=0&id=0f8fb719&lang=less&scoped=true& ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_FloatActionButton_less_vue_type_style_index_0_id_0f8fb719_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader!../../../node_modules/css-loader/dist/cjs.js?sourceMap!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/less-loader/dist/cjs.js??ref--1-2!./FloatActionButton.less?vue&type=style&index=0&id=0f8fb719&lang=less&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./src/components/FloatActionButton/FloatActionButton.less?vue&type=style&index=0&id=0f8fb719&lang=less&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_FloatActionButton_less_vue_type_style_index_0_id_0f8fb719_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_FloatActionButton_less_vue_type_style_index_0_id_0f8fb719_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_FloatActionButton_less_vue_type_style_index_0_id_0f8fb719_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_FloatActionButton_less_vue_type_style_index_0_id_0f8fb719_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/FloatActionButton/FloatActionButton.vue":
/*!****************************************************************!*\
  !*** ./src/components/FloatActionButton/FloatActionButton.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FloatActionButton_html_vue_type_template_id_0f8fb719_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FloatActionButton.html?vue&type=template&id=0f8fb719&scoped=true& */ "./src/components/FloatActionButton/FloatActionButton.html?vue&type=template&id=0f8fb719&scoped=true&");
/* harmony import */ var _FloatActionButton_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FloatActionButton.js?vue&type=script&lang=js& */ "./src/components/FloatActionButton/FloatActionButton.js?vue&type=script&lang=js&?0825");
/* empty/unused harmony star reexport *//* harmony import */ var _FloatActionButton_less_vue_type_style_index_0_id_0f8fb719_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FloatActionButton.less?vue&type=style&index=0&id=0f8fb719&lang=less&scoped=true& */ "./src/components/FloatActionButton/FloatActionButton.less?vue&type=style&index=0&id=0f8fb719&lang=less&scoped=true&");
/* harmony import */ var _FloatActionButtonPosition_less_vue_type_style_index_1_lang_less_20scoped___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FloatActionButtonPosition.less?vue&type=style&index=1&lang=less%20scoped& */ "./src/components/FloatActionButton/FloatActionButtonPosition.less?vue&type=style&index=1&lang=less%20scoped&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _FloatActionButton_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_D_3A_5Cxampp_5Chtdocs_5Cprojects_html5_5CPWA_Plain_Text_Editor_5Csrc_5Ccomponents_5CFloatActionButton_5CFloatActionButton_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FloatActionButton.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=D%3A%5Cxampp%5Chtdocs%5Cprojects-html5%5CPWA-Plain-Text-Editor%5Csrc%5Ccomponents%5CFloatActionButton%5CFloatActionButton.vue&lang=yaml */ "./src/components/FloatActionButton/FloatActionButton.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=D%3A%5Cxampp%5Chtdocs%5Cprojects-html5%5CPWA-Plain-Text-Editor%5Csrc%5Ccomponents%5CFloatActionButton%5CFloatActionButton.vue&lang=yaml");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _FloatActionButton_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FloatActionButton_html_vue_type_template_id_0f8fb719_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FloatActionButton_html_vue_type_template_id_0f8fb719_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0f8fb719",
  null
  
)

/* custom blocks */

if (typeof _FloatActionButton_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_D_3A_5Cxampp_5Chtdocs_5Cprojects_html5_5CPWA_Plain_Text_Editor_5Csrc_5Ccomponents_5CFloatActionButton_5CFloatActionButton_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_5__["default"] === 'function') Object(_FloatActionButton_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_D_3A_5Cxampp_5Chtdocs_5Cprojects_html5_5CPWA_Plain_Text_Editor_5Csrc_5Ccomponents_5CFloatActionButton_5CFloatActionButton_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_5__["default"])(component)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/FloatActionButton/FloatActionButton.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/FloatActionButton/FloatActionButton.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=D%3A%5Cxampp%5Chtdocs%5Cprojects-html5%5CPWA-Plain-Text-Editor%5Csrc%5Ccomponents%5CFloatActionButton%5CFloatActionButton.vue&lang=yaml":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./src/components/FloatActionButton/FloatActionButton.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=D%3A%5Cxampp%5Chtdocs%5Cprojects-html5%5CPWA-Plain-Text-Editor%5Csrc%5Ccomponents%5CFloatActionButton%5CFloatActionButton.vue&lang=yaml ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_kazupon_vue_i18n_loader_lib_index_js_FloatActionButton_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_D_3A_5Cxampp_5Chtdocs_5Cprojects_html5_5CPWA_Plain_Text_Editor_5Csrc_5Ccomponents_5CFloatActionButton_5CFloatActionButton_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@kazupon/vue-i18n-loader/lib!./FloatActionButton.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=D%3A%5Cxampp%5Chtdocs%5Cprojects-html5%5CPWA-Plain-Text-Editor%5Csrc%5Ccomponents%5CFloatActionButton%5CFloatActionButton.vue&lang=yaml */ "./node_modules/@kazupon/vue-i18n-loader/lib/index.js!./src/components/FloatActionButton/FloatActionButton.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=D%3A%5Cxampp%5Chtdocs%5Cprojects-html5%5CPWA-Plain-Text-Editor%5Csrc%5Ccomponents%5CFloatActionButton%5CFloatActionButton.vue&lang=yaml");
/* harmony import */ var _node_modules_kazupon_vue_i18n_loader_lib_index_js_FloatActionButton_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_D_3A_5Cxampp_5Chtdocs_5Cprojects_html5_5CPWA_Plain_Text_Editor_5Csrc_5Ccomponents_5CFloatActionButton_5CFloatActionButton_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_kazupon_vue_i18n_loader_lib_index_js_FloatActionButton_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_D_3A_5Cxampp_5Chtdocs_5Cprojects_html5_5CPWA_Plain_Text_Editor_5Csrc_5Ccomponents_5CFloatActionButton_5CFloatActionButton_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_kazupon_vue_i18n_loader_lib_index_js_FloatActionButton_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_D_3A_5Cxampp_5Chtdocs_5Cprojects_html5_5CPWA_Plain_Text_Editor_5Csrc_5Ccomponents_5CFloatActionButton_5CFloatActionButton_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_kazupon_vue_i18n_loader_lib_index_js_FloatActionButton_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_D_3A_5Cxampp_5Chtdocs_5Cprojects_html5_5CPWA_Plain_Text_Editor_5Csrc_5Ccomponents_5CFloatActionButton_5CFloatActionButton_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_kazupon_vue_i18n_loader_lib_index_js_FloatActionButton_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_D_3A_5Cxampp_5Chtdocs_5Cprojects_html5_5CPWA_Plain_Text_Editor_5Csrc_5Ccomponents_5CFloatActionButton_5CFloatActionButton_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/FloatActionButton/FloatActionButtonComputed.js":
/*!***********************************************************************!*\
  !*** ./src/components/FloatActionButton/FloatActionButtonComputed.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


/* harmony default export */ __webpack_exports__["default"] = (function (FloatActionButton) {
  FloatActionButton.computed.computedStyle = function () {
    //console.log()
    if (this.positionBottom === false) {
      return false
    }
    
    if (this.localConfig.editorSimpleMode) {
      return {
        'bottom': `1rem`
      }
    }

    let style = {
      'bottom': `calc(1rem + ${this.config.panelHeight})`
    }
    //console.log(style)
    return style
  }
  FloatActionButton.computed.computedClassNameList = function () {
    return {
      top: !this.positionBottom,
      compact: (this.config.viewportSize.height < this.viewportHeightPositionThreshold)
      //'display-replace-panel': (this.$parent.config.displayPanel === 'replace')
    }
  }
  
  FloatActionButton.computed.selectedTextTrim = function () {
    let text = this.config.selectedText
    if (typeof(text) !== 'string') {
      return ''
    }
    
    return text.trim()
  }
  
  FloatActionButton.computed.isURLSelected = function () {
    return this.utils.URLUtils.isURL(this.selectedTextTrim)
  }
  
  FloatActionButton.computed.isShortenURLSelected = function () {
    return (this.isURL && this.selectedTextTrim.startsWith('https://rebrand.ly/' ))
  }
  
  FloatActionButton.computed.isEmailSelected = function () {
    //console.log(this.config.selectedText, this.utils.URLUtils.isEmail(this.config.selectedText))
    return this.utils.URLUtils.isEmail(this.config.selectedText)
  }
  
  FloatActionButton.computed.isPuliWorkSelected = function () {
    //console.log(this.config.selectedText, this.utils.URLUtils.isEmail(this.config.selectedText))
    let text = this.config.selectedText
    if (!text) {
      text = this.localConfig.textContent
    }
    
    text = text.trim()
    
    return (text.startsWith('#PULI_WORK\n') || text.startsWith('#PULI_HOME\n'))
  }
  
  FloatActionButton.computed.computedMainIconClassNameList = function () {
    let list = []
    
//    if (this.config.viewportSize.height < this.viewportHeightMainButtonThreshold) {
//      list.push('angle down')
//    }
    if (this.isSpeaking) {
      list.push('assistive listening systems')
    }
    else if (this.isURLSelected) {
      list.push('linkify')
    }
    else if (this.isEmailSelected) {
      list.push('envelope outline')
    }
    else if (this.isPuliWorkSelected) {
      list.push('facebook')
    }
    else if (this.hasSelectedOneLineText) {
      list.push('search')
    }
    else {
      let mainButtonAction = this.localConfig.mainButtonAction
      
      if (this.lastTextContent !== '') {
        list.push('undo')
      }
      else if (mainButtonAction === 'copy') {
        list.push('copy')
      }
      else if (mainButtonAction === 'copy & clear') {
        list.push('copy outline')
      }
      else if (mainButtonAction === 'select all') {
        list.push('i cursor')
      }
    }
    list.push('icon')
    
    return list.join(' ')
  }
  
  FloatActionButton.computed.computedMainIconText = function () {
//    if (this.config.viewportSize.height < this.viewportHeightMainButtonThreshold) {
//      return undefined
//    }
    if (this.isSpeaking) {
      return 'Stop speaking (Alt+O)'
    }
    else if (this.isURLSelected) {
      return 'Open link (Alt+O)'
    }
    else if (this.isEmailSelected) {
      return 'Send e-mail (Alt+O)'
    }
    else if (this.isPuliWorkSelected) {
      return 'Open #PULI_WORK (Alt+O)'
    }
    else if (this.hasSelectedOneLineText) {
      return 'Search web (Alt+O)'
    }
    else {
      let mainButtonAction = this.localConfig.mainButtonAction
      
      if (this.lastTextContent !== '') {
        return 'Redo (Alt+O)'
      }
      else if (mainButtonAction === 'copy') {
        return 'Copy (Alt+O)'
      }
      else if (mainButtonAction === 'copy & clear') {
        return 'Copy & Clear (Alt+O)'
      }
      else if (mainButtonAction === 'select all') {
        return 'Select All (Ctrl+A)'
      }
    }
  }
  
  FloatActionButton.computed.hasSelectedText = function () {
    return (this.config.selectedText && this.config.selectedText !== '')
  }
  
  FloatActionButton.computed.hasSelectedOneLineText = function () {
    return (this.config.selectedText && this.config.selectedText !== '' && this.config.selectedText.indexOf('\n') === -1)
  }
});

/***/ }),

/***/ "./src/components/FloatActionButton/FloatActionButtonMethods.js":
/*!**********************************************************************!*\
  !*** ./src/components/FloatActionButton/FloatActionButtonMethods.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vendors_rebrandly_rebrandly_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vendors/rebrandly/rebrandly-api.js */ "./src/components/FloatActionButton/vendors/rebrandly/rebrandly-api.js");



/* harmony default export */ __webpack_exports__["default"] = (function (FloatActionButton) {
  FloatActionButton.methods.openConfigModal = function () {
    //console.log(this.$parent.$refs.ConfigModal)
    //console.log(this.$parent.$refs)
    this.$parent.$refs.ConfigModal.open()
  }
  
  FloatActionButton.methods.delayCloseMenu = function () {
    clearTimeout(this.showMenuTimer)
    this.showMenuTimer = setTimeout(() => {
      this.showMenu = false
    }, 3 * 1000)
  }
  
  FloatActionButton.methods.clearDelayCloseMenu = function () {
    clearTimeout(this.showMenuTimer)
    this.showMenuTimer = null
  }
  
  FloatActionButton.methods.onMainIconClick = function () {
//    if (this.config.viewportSize.height < this.viewportHeightThreshold) {
//      return undefined
//    }
    if (this.isSpeaking) {
      this.isSpeaking = false
    }
    else if (this.isURLSelected) {
      let url = this.config.selectedText
      window.open(url, '_blank')
      this.utils.ClipboardUtils.copyPlainString(url)
    }
    else if (this.isEmailSelected) {
      let email = this.config.selectedText
      let url = `mailto:${email}`
      window.open(url, '_blank')
      this.utils.ClipboardUtils.copyPlainString(email)
    }
    else if (this.isPuliWorkSelected) {
      let url = `https://www.facebook.com/pulipuli.chen`
      this.utils.ClipboardUtils.copyPlainString(this.config.selectedText)
      //console.log(url)
      window.open(url, '_blank') 
    }
    else if (this.hasSelectedOneLineText) {
      this.searchWeb()
    }
    else {
      let mainButtonAction = this.localConfig.mainButtonAction
      let text = this.localConfig.textContent
      
      if (this.lastTextContent !== '') {
        this.restore()
      }
      else if (mainButtonAction === 'copy') {
        this.utils.ClipboardUtils.copyPlainString(text)
      }
      else if (mainButtonAction === 'copy & clear') {
        this.utils.ClipboardUtils.copyPlainString(text)
        //this.localConfig.textContent = ''
        this.clear()
        this.$parent.$refs.CodeMirrorEditor.focus()
      }
      else if (mainButtonAction === 'select all') {
        this.$parent.$refs.CodeMirrorEditor.selectAll()
      }
      
    }

    this.showMenu = false
  }
  
  let $body
  FloatActionButton.methods.closeMenu = function () {
    this.showMenu = false
    
    if (!$body) {
      $body = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body')
    }
    $body.popup('hide all')
  }
  
  FloatActionButton.methods.toggleReplacePanel = function () {
    //this.$parent.config.displayReplacePanel = !this.$parent.config.displayReplacePanel
    //console.log(this.$parent.config.displayReplacePanel)
    if (this.localConfig.displayPanel !== 'replace') {
      this.localConfig.displayPanel = 'replace'
    } else {
      this.localConfig.displayPanel = null
    }

    this.closeMenu()
  }
  
  FloatActionButton.methods.toggleFormatPanel = function () {
    //this.$parent.config.displayReplacePanel = !this.$parent.config.displayReplacePanel
    //console.log(this.$parent.config.displayReplacePanel)
    if (this.localConfig.displayPanel !== 'format') {
      this.localConfig.displayPanel = 'format'
    } else {
      this.localConfig.displayPanel = null
    }
    //console.log(this.lcoalConfig.displayPanel)

    this.closeMenu()
  }
  
  FloatActionButton.methods.restore = function () {
    if (this.lastTextContent === '') {
      return false
    }
    
    this.localConfig.textContent = this.lastTextContent
    this.localConfig.filename = this.lastFilename
    
    this.lastTextContent = ''
    this.lastFilename = null
    
    this.closeMenu()
  }
  
  FloatActionButton.methods.clear = function () {
    this.lastTextContent = this.localConfig.textContent
    this.lastFilename = this.localConfig.filename
    
//    if (window.confirm('Are you sure?')) {
//      this.localConfig.textContent = ''
//      this.localConfig.filename = null
//      //this.clearHistory()
//    }
    
    this.localConfig.textContent = ''
    this.localConfig.filename = null
    
    this.closeMenu()
  }
  
  FloatActionButton.methods.searchWeb = function () {
    let text = this.config.selectedText
    
    if (!text || text === '') {
      this.closeMenu()
      return false
    }
    
    let url = `https://www.google.com/search?q=` + text
    window.open(url, '_blank')
    
    this.closeMenu()
  }
  /*
   formatCode () {
   this.$parent.formatCode()
   this.closeMenu()
   }
   */
  
   FloatActionButton.methods.shortenURL = async function () {
     this.closeMenu()
     
     let shortenedURL = await Object(_vendors_rebrandly_rebrandly_api_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this.config.selectedText)
     
     this.utils.ClipboardUtils.copyPlainString(shortenedURL)
     this.$parent.$refs.CodeMirrorEditor.replaceSelection(shortenedURL)
     
   }

   FloatActionButton.methods.initPopup = function () {
     //console.log('initPopup')
     let $el = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.$el)
     
     let options = {
       position: 'top center',
       boundary: 'body',
       exclusive: true,
     }
     
     if (this.positionBottom === false) {
       options.position = 'bottom center'
     }
     
     $el.find('.popup:not(.inited)').addClass('inited').popup(options)
             .click(function () {
               jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).popup('hide all')
              })
              
      if (!$body) {
        $body = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body')
      }
      $body.click(() => {
        $body.popup('hide all')
      })
   }
   
   FloatActionButton.methods.toggleEditorMode = function () {
     this.localConfig.editorSimpleMode = !this.localConfig.editorSimpleMode
   }
});

/***/ }),

/***/ "./src/components/FloatActionButton/FloatActionButtonMethodsSpeak.js":
/*!***************************************************************************!*\
  !*** ./src/components/FloatActionButton/FloatActionButtonMethodsSpeak.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


/* harmony default export */ __webpack_exports__["default"] = (function (FloatActionButton) {
  let msg = new SpeechSynthesisUtterance();

  FloatActionButton.methods.speak = function (text) {
    //console.log(text)
    if (text === false) {
      this.isSpeaking = false
      return false
    }
    return new Promise((resolve) => {

      this.isSpeaking = true
      //let text
      if (!text || typeof (text) === 'object') {
        if (this.hasSelectedText) {
          text = this.config.selectedText
        } else {
          text = this.localConfig.textContent
        }
      }

      // 需要分段
      let textParts = this.splitSpeechTextToParts(text)

      // -------------

      let tooLongMessage = this.$t('The message is too long.')
      for (let i = 0, max = textParts.length; i < max; i++) {
        let text = textParts[i]
        if (text.length > 100) {
          console.error(tooLongMessage, text)
          msg.text = tooLongMessage
          msg.rate = this.localConfig.speechSynthesisRate
          this.speechSynthesis.cancel()
          this.speechSynthesis.speak(msg)
          this.isSpeaking = false
          return false
        }
      }

      // ------------

      let loop = (i) => {
        if (this.isSpeaking === false) {
          return false
        }

        if (i < textParts.length) {
          msg.text = textParts[i]
          msg.rate = this.localConfig.speechSynthesisRate
          //console.log(this.localConfig.speechSynthesisRate)
          //          let isEnd = false
          msg.onend = () => {
            //            isEnd = true
            i++
            loop(i)
          }


          //console.log(msg)
          this.speechSynthesis.cancel()
          this.speechSynthesis.speak(msg)
        } else {
          this.isSpeaking = false
          resolve()
        }
      }

      loop(0)

      this.closeMenu()

    })  // return new Promise((resolve) => {
  }

  let splitMulti = function (str, tokens) {
    var tempChar = tokens[0]; // We can use the first token as a temporary join character
    for (var i = 1; i < tokens.length; i++) {
      str = str.split(tokens[i]).join(tempChar);
    }
    str = str.split(tempChar);
    return str;
  }

  let splitor1 = ['。', ':', '：', '；', '\n', '\t']
  let splitor2 = ['，', ',', '、']

  FloatActionButton.methods.splitSpeechTextToParts = function (text) {
    let p = text
    p = p.replace(/ *\([^)]*\) */g, "")
    p = p.replace(/ *\[[^)]*\] */g, "")
    p = p.replace(/ *\{[^)]*\} */g, "")
    p = p.split('ɑ').join('α')
    p = p.split('@').join(' at ')

    p = p.split('（').map((p2, i) => {
      if (i === 0) {
        return p2
      }

      let endPos = p2.indexOf('）')
      if (endPos === -1) {
        return ''
      }
      return p2.slice(endPos + 1)
    }).join('')
    //p = p.replace(/ *\（[^)]*\） */g, "")
    //p = p.replace(/ *（[^)]*） */g, "")
    //p = p.replace(/ *「[^)]*」 */g, "")
    text = p

    let parts = splitMulti(text, splitor1)
    parts = parts.filter(p => p.trim() !== '')

    // ----------------------------
    // 第二階段細分
    let tempParts = []
    let subSeperators = splitor2
    parts.forEach(text => {

      if (text.length < 100) {
        return tempParts.push(text)
      }

      let lastSeperator, lastSeperatorPos, lastSeperatorTempPos
      let tempText = []
      for (let i = 0, max = text.length; i < max; i++) {
        let t = text[i]
        tempText.push(t)

        if (tempText.length === 100) {
          if (!lastSeperatorPos) {
            tempParts.push(tempText.join(''))
            tempText = []
          } else {
            tempParts.push(tempText.slice(0, lastSeperatorTempPos - 1).join(''))
            i = lastSeperatorPos
            tempText = []
          }
        }

        if (subSeperators.indexOf(t) > -1) {
          lastSeperator = t
          lastSeperatorPos = i
          lastSeperatorTempPos = tempText.length
        }
      }

      if (tempText.length > 0) {
        tempParts.push(tempText.join(''))
      }
    })

    parts = tempParts
    // ----------------------------

    //console.log(parts)
    return parts
  }


  FloatActionButton.methods.speakOrStop = function () {
    if (this.isSpeaking) {
      return this.isSpeaking = false
    }
    else {
      this.speak()
    }
  }
});

/***/ }),

/***/ "./src/components/FloatActionButton/FloatActionButtonPosition.less?vue&type=style&index=1&lang=less%20scoped&":
/*!********************************************************************************************************************!*\
  !*** ./src/components/FloatActionButton/FloatActionButtonPosition.less?vue&type=style&index=1&lang=less%20scoped& ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_FloatActionButtonPosition_less_vue_type_style_index_1_lang_less_20scoped___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader!../../../node_modules/css-loader/dist/cjs.js?sourceMap!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/less-loader/dist/cjs.js??ref--1-2!./FloatActionButtonPosition.less?vue&type=style&index=1&lang=less%20scoped& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./src/components/FloatActionButton/FloatActionButtonPosition.less?vue&type=style&index=1&lang=less%20scoped&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_FloatActionButtonPosition_less_vue_type_style_index_1_lang_less_20scoped___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_FloatActionButtonPosition_less_vue_type_style_index_1_lang_less_20scoped___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_FloatActionButtonPosition_less_vue_type_style_index_1_lang_less_20scoped___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_FloatActionButtonPosition_less_vue_type_style_index_1_lang_less_20scoped___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/FloatActionButton/vendors/rebrandly/rebrandly-api.js":
/*!*****************************************************************************!*\
  !*** ./src/components/FloatActionButton/vendors/rebrandly/rebrandly-api.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


let requestHeaders = {
  "Content-Type": "application/json",
  "apikey": "9b9210f35e9149a8ab698d3414824f8a",
  "workspace": "a558a5903496421999ab6005ca11f7d1"
}

/* harmony default export */ __webpack_exports__["default"] = (function (url) {
  return new Promise((resolve) => {
    let linkRequest = {
      destination: url.trim(),
      domain: { fullName: "rebrand.ly" }
      //, slashtag: "A_NEW_SLASHTAG"
      //, title: "Rebrandly YouTube channel"
    }

    jquery__WEBPACK_IMPORTED_MODULE_0___default.a.ajax({
      url: "https://api.rebrandly.com/v1/links",
      type: "post",
      data: JSON.stringify(linkRequest),
      headers: requestHeaders,
      dataType: "json",
      success: (link) => {
        link = `https://` + link.shortUrl
        resolve(link)
      }
    });
  })
    
});

/***/ })

}]);
//# sourceMappingURL=FloatActionButton.js.map