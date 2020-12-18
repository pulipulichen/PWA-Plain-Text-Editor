(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors/CodeMirror"],{

/***/ "./node_modules/@kazupon/vue-i18n-loader/lib/index.js!./src/components/CodeMirrorEditor/CodeMirrorEditor.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=D%3A%5Cxampp%5Chtdocs%5Cprojects-html5%5CPWA-Plain-Text-Editor%5Csrc%5Ccomponents%5CCodeMirrorEditor%5CCodeMirrorEditor.vue&lang=yaml":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@kazupon/vue-i18n-loader/lib!./src/components/CodeMirrorEditor/CodeMirrorEditor.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=D%3A%5Cxampp%5Chtdocs%5Cprojects-html5%5CPWA-Plain-Text-Editor%5Csrc%5Ccomponents%5CCodeMirrorEditor%5CCodeMirrorEditor.vue&lang=yaml ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (Component) {
  Component.options.__i18n = Component.options.__i18n || []
  Component.options.__i18n.push('{"en":{"TEST_MESSAGE":"Test Message"},"zh-TW":{"TEST_MESSAGE":"測試訊息"}}')
  delete Component.options._Ctor
}


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./src/components/CodeMirrorEditor/CodeMirrorEditor.less?vue&type=style&index=1&id=6cc6c822&lang=less&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js??ref--1-2!./src/components/CodeMirrorEditor/CodeMirrorEditor.less?vue&type=style&index=1&id=6cc6c822&lang=less&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".code-mirror-wrapper[data-v-6cc6c822] {\n  opacity: 0;\n  transition: opacity 0.5s;\n}\n.code-mirror-wrapper.inited[data-v-6cc6c822] {\n  opacity: 1;\n}\n.code-mirror-wrapper.text-wrap-disabled[data-v-6cc6c822]  .CodeMirror-hscrollbar {\n  display: none;\n}\ntextarea.editor[data-v-6cc6c822] {\n  display: none;\n  height: 100vh !important;\n  width: 100% !important;\n  width: 100vw;\n  height: 100vh;\n  line-height: 2.3rem;\n  font-size: 1.5rem;\n  padding: 0.5rem;\n  border: none;\n  overflow: auto;\n  outline: none;\n  -webkit-box-shadow: none;\n  -moz-box-shadow: none;\n  box-shadow: none;\n  resize: none;\n  /*remove the resize handle on the bottom right*/\n}\ntextarea.editor.disable-wrap[data-v-6cc6c822] {\n  white-space: nowrap;\n}\n", "",{"version":3,"sources":["D:/xampp/htdocs/projects-html5/PWA-Plain-Text-Editor/src/components/CodeMirrorEditor/CodeMirrorEditor.less?vue&type=style&index=1&id=6cc6c822&lang=less&scoped=true&","CodeMirrorEditor.less"],"names":[],"mappings":"AAAA;EACE,UAAA;EACA,wBAAA;ACCF;ADCE;EACE,UAAA;ACCJ;ADEE;EACE,aAAA;ACAJ;ADIA;EACE,aAAA;EAEA,wBAAA;EACA,sBAAA;EAEA,YAAA;EACA,aAAA;EAEA,mBAAA;EACA,iBAAA;EACA,eAAA;EAEA,YAAA;EACA,cAAA;EACA,aAAA;EAEA,wBAAA;EACA,qBAAA;EACA,gBAAA;EAEA,YAAA;ECRA,+CAA+C;AACjD;ADSE;EACE,mBAAA;ACPJ","file":"CodeMirrorEditor.less","sourcesContent":[".code-mirror-wrapper {\n  opacity: 0;\n  transition: opacity 0.5s;\n  \n  &.inited {\n    opacity: 1;\n  }\n  \n  &.text-wrap-disabled ::v-deep .CodeMirror-hscrollbar {\n    display: none;\n  }\n}\n\ntextarea.editor {\n  display: none;\n  \n  height: 100vh !important;\n  width: 100% !important;\n  \n  width: 100vw;\n  height: 100vh;\n\n  line-height: 2.3rem;\n  font-size: 1.5rem;\n  padding: 0.5rem;\n\n  border: none;\n  overflow: auto;\n  outline: none;\n\n  -webkit-box-shadow: none;\n  -moz-box-shadow: none;\n  box-shadow: none;\n\n  resize: none; /*remove the resize handle on the bottom right*/\n\n  &.disable-wrap {\n    white-space: nowrap;\n  }\n}",".code-mirror-wrapper {\n  opacity: 0;\n  transition: opacity 0.5s;\n}\n.code-mirror-wrapper.inited {\n  opacity: 1;\n}\n.code-mirror-wrapper.text-wrap-disabled ::v-deep .CodeMirror-hscrollbar {\n  display: none;\n}\ntextarea.editor {\n  display: none;\n  height: 100vh !important;\n  width: 100% !important;\n  width: 100vw;\n  height: 100vh;\n  line-height: 2.3rem;\n  font-size: 1.5rem;\n  padding: 0.5rem;\n  border: none;\n  overflow: auto;\n  outline: none;\n  -webkit-box-shadow: none;\n  -moz-box-shadow: none;\n  box-shadow: none;\n  resize: none;\n  /*remove the resize handle on the bottom right*/\n}\ntextarea.editor.disable-wrap {\n  white-space: nowrap;\n}\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./src/components/CodeMirrorEditor/CodeMirrorEditorGlobal.less?vue&type=style&index=0&lang=less&":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js??ref--1-2!./src/components/CodeMirrorEditor/CodeMirrorEditorGlobal.less?vue&type=style&index=0&lang=less& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".CodeMirror {\n  font-family: 'Roboto', sans-serif !important;\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\n.CodeMirror .highlight {\n  background-color: rgba(255, 255, 0, 0.5);\n}\n", "",{"version":3,"sources":["D:/xampp/htdocs/projects-html5/PWA-Plain-Text-Editor/src/components/CodeMirrorEditor/CodeMirrorEditorGlobal.less?vue&type=style&index=0&lang=less&","CodeMirrorEditorGlobal.less"],"names":[],"mappings":"AAAA;EAEE,4CAAA;EAEA,iBAAA;EACA,iBAAA;ACDF;ADJA;EAiBI,wCAAA;ACVJ","file":"CodeMirrorEditorGlobal.less","sourcesContent":[".CodeMirror {\n  //font-family: Arial, monospace;\n  font-family: 'Roboto', sans-serif !important;\n  \n  font-size: 1.5rem;\n  line-height: 2rem;\n  \n  //height: 100vh !important;\n  \n  &.display-replace-panel {\n    //height: calc(100vh - @ReplacePanelHeight) !important;\n  }\n  \n  \n  .highlight {\n    //background-color: yellow;\n    //border: 1px solid yellow;\n    background-color: rgba(255,255,0, 0.5);\n  }\n}\n",".CodeMirror {\n  font-family: 'Roboto', sans-serif !important;\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\n.CodeMirror .highlight {\n  background-color: rgba(255, 255, 0, 0.5);\n}\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./src/components/CodeMirrorEditor/OpenFile/OpenFile.less?vue&type=style&index=0&id=164ef9a9&lang=less&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js??ref--1-2!./src/components/CodeMirrorEditor/OpenFile/OpenFile.less?vue&type=style&index=0&id=164ef9a9&lang=less&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".file-input[data-v-164ef9a9] {\n  display: none;\n}\n", "",{"version":3,"sources":["D:/xampp/htdocs/projects-html5/PWA-Plain-Text-Editor/src/components/CodeMirrorEditor/OpenFile/OpenFile.less?vue&type=style&index=0&id=164ef9a9&lang=less&scoped=true&","OpenFile.less"],"names":[],"mappings":"AAAA;EACE,aAAA;ACCF","file":"OpenFile.less","sourcesContent":[".file-input {\n  display: none;\n}",".file-input {\n  display: none;\n}\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./src/components/CodeMirrorEditor/CodeMirrorEditor.html?vue&type=template&id=6cc6c822&scoped=true&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./src/components/CodeMirrorEditor/CodeMirrorEditor.html?vue&type=template&id=6cc6c822&scoped=true& ***!
  \**************************************************************************************************************************************************************************************/
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
      staticClass: "code-mirror-wrapper",
      class: _vm.computedCodeMirrorWrapperClassNameList
    },
    [
      _vm.simpleMode
        ? _c("textarea", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.code,
                expression: "code"
              }
            ],
            ref: "MainTextarea",
            staticClass: "editor",
            domProps: { value: _vm.code },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.code = $event.target.value
              }
            }
          })
        : _vm._e(),
      _vm._v(" "),
      !_vm.simpleMode
        ? _c("codemirror", {
            ref: "cmEditor",
            attrs: { options: _vm.computedCodeMirrorOptions },
            on: {
              inputRead: _vm.onCodeMirrorKeyHandled,
              cursorActivity: _vm.onCodeMirrorCursorActivity,
              viewportChange: _vm.onCodeMirrorCursorActivity,
              drop: _vm.onCodeMirrorDrop
            },
            model: {
              value: _vm.code,
              callback: function($$v) {
                _vm.code = $$v
              },
              expression: "code"
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _c("OpenFile", { ref: "OpenFile" })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./src/components/CodeMirrorEditor/OpenFile/OpenFile.html?vue&type=template&id=164ef9a9&scoped=true&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./src/components/CodeMirrorEditor/OpenFile/OpenFile.html?vue&type=template&id=164ef9a9&scoped=true& ***!
  \***************************************************************************************************************************************************************************************/
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
  return _c("input", {
    ref: "FileInput",
    staticClass: "file-input",
    attrs: { type: "file", accept: _vm.accept, multiple: _vm.multiple },
    on: { change: _vm.onChange }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./src/components/CodeMirrorEditor/CodeMirrorEditor.less?vue&type=style&index=1&id=6cc6c822&lang=less&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js??ref--1-2!./src/components/CodeMirrorEditor/CodeMirrorEditor.less?vue&type=style&index=1&id=6cc6c822&lang=less&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js?sourceMap!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/less-loader/dist/cjs.js??ref--1-2!./CodeMirrorEditor.less?vue&type=style&index=1&id=6cc6c822&lang=less&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./src/components/CodeMirrorEditor/CodeMirrorEditor.less?vue&type=style&index=1&id=6cc6c822&lang=less&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("472ab2e9", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./src/components/CodeMirrorEditor/CodeMirrorEditorGlobal.less?vue&type=style&index=0&lang=less&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js??ref--1-2!./src/components/CodeMirrorEditor/CodeMirrorEditorGlobal.less?vue&type=style&index=0&lang=less& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js?sourceMap!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/less-loader/dist/cjs.js??ref--1-2!./CodeMirrorEditorGlobal.less?vue&type=style&index=0&lang=less& */ "./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./src/components/CodeMirrorEditor/CodeMirrorEditorGlobal.less?vue&type=style&index=0&lang=less&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("0608574a", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./src/components/CodeMirrorEditor/OpenFile/OpenFile.less?vue&type=style&index=0&id=164ef9a9&lang=less&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js??ref--1-2!./src/components/CodeMirrorEditor/OpenFile/OpenFile.less?vue&type=style&index=0&id=164ef9a9&lang=less&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js?sourceMap!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/less-loader/dist/cjs.js??ref--1-2!./OpenFile.less?vue&type=style&index=0&id=164ef9a9&lang=less&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./src/components/CodeMirrorEditor/OpenFile/OpenFile.less?vue&type=style&index=0&id=164ef9a9&lang=less&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("fe960e1c", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/components/CodeMirrorEditor/CodeMirrorEditor.html?vue&type=template&id=6cc6c822&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./src/components/CodeMirrorEditor/CodeMirrorEditor.html?vue&type=template&id=6cc6c822&scoped=true& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_CodeMirrorEditor_html_vue_type_template_id_6cc6c822_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./CodeMirrorEditor.html?vue&type=template&id=6cc6c822&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./src/components/CodeMirrorEditor/CodeMirrorEditor.html?vue&type=template&id=6cc6c822&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_CodeMirrorEditor_html_vue_type_template_id_6cc6c822_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_CodeMirrorEditor_html_vue_type_template_id_6cc6c822_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/CodeMirrorEditor/CodeMirrorEditor.js?vue&type=script&lang=js&?bb59":
/*!**************************************************************************************!*\
  !*** ./src/components/CodeMirrorEditor/CodeMirrorEditor.js?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vendors_codemirror_webpack_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vendors/codemirror.webpack.js */ "./src/components/CodeMirrorEditor/vendors/codemirror.webpack.js");
/* harmony import */ var _OpenFile_OpenFile_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OpenFile/OpenFile.vue */ "./src/components/CodeMirrorEditor/OpenFile/OpenFile.vue");
/* harmony import */ var _CodeMirrorEditorData_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CodeMirrorEditorData.js */ "./src/components/CodeMirrorEditor/CodeMirrorEditorData.js");
/* harmony import */ var _CodeMirrorEditorComputed_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CodeMirrorEditorComputed.js */ "./src/components/CodeMirrorEditor/CodeMirrorEditorComputed.js");
/* harmony import */ var _CodeMirrorEditorComputedOptions_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CodeMirrorEditorComputedOptions.js */ "./src/components/CodeMirrorEditor/CodeMirrorEditorComputedOptions.js");
/* harmony import */ var _CodeMirrorEditorWatch_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CodeMirrorEditorWatch.js */ "./src/components/CodeMirrorEditor/CodeMirrorEditorWatch.js");
/* harmony import */ var _CodeMirrorEditorMethodsOption_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CodeMirrorEditorMethodsOption.js */ "./src/components/CodeMirrorEditor/CodeMirrorEditorMethodsOption.js");
/* harmony import */ var _CodeMirrorEditorMethodsChange_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CodeMirrorEditorMethodsChange.js */ "./src/components/CodeMirrorEditor/CodeMirrorEditorMethodsChange.js");
/* harmony import */ var _CodeMirrorEditorMethodsFormat_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CodeMirrorEditorMethodsFormat.js */ "./src/components/CodeMirrorEditor/CodeMirrorEditorMethodsFormat.js");
/* harmony import */ var _CodeMirrorEditorMethodsCursor_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CodeMirrorEditorMethodsCursor.js */ "./src/components/CodeMirrorEditor/CodeMirrorEditorMethodsCursor.js");
/* harmony import */ var _CodeMirrorEditorMethodsFind_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./CodeMirrorEditorMethodsFind.js */ "./src/components/CodeMirrorEditor/CodeMirrorEditorMethodsFind.js");
/* harmony import */ var _CodeMirrorEditorMethodsDisplay_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./CodeMirrorEditorMethodsDisplay.js */ "./src/components/CodeMirrorEditor/CodeMirrorEditorMethodsDisplay.js");
/* harmony import */ var _CodeMirrorEditorMethodsFile_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./CodeMirrorEditorMethodsFile.js */ "./src/components/CodeMirrorEditor/CodeMirrorEditorMethodsFile.js");
/* harmony import */ var _CodeMirrorEditorMethodsHotKey_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./CodeMirrorEditorMethodsHotKey.js */ "./src/components/CodeMirrorEditor/CodeMirrorEditorMethodsHotKey.js");
/* global CodeMirror, PULI_UTILS */





let CodeMirrorEditor = {
  props: ['config', 'localConfig', 'utils'],
  data: null,
  components: {
    codemirror: _vendors_codemirror_webpack_js__WEBPACK_IMPORTED_MODULE_1__["default"],
    OpenFile: _OpenFile_OpenFile_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  mounted: async function () {
//    //console.log(this.inited)
//    //await this.initCodeMirror()
//    //await this.onConfigInited()
//    //console.log(this.inited)
//    //this.testSearch1211()
//    //this.testSetValue1211()
//    //this.testSearch1213()
    if (this.config.inited === true) {
      this.onConfigInited()
    } 
  },
  watch: {}, // 移動到 CodeMirrorEditorWatch
  computed: {}, // 移動到 CodeMirrorEditorComputed.js
  methods: {
    
    onConfigInited: async function () {
      //console.log('onConfigInited', 1)
      
      //console.log(this.config.inited)
      if (this.config.inited === false
              || this.simpleMode === true) {
        return false
      }
      
      //console.log('onConfigInited', 2)
      //await this.utils.AsyncUtils.sleep(1000)
      //console.log('javascript')
      //this.codemirror.setOption("mode", 'html')
      
      //await this.utils.AsyncUtils.sleep(100)
      this.changeLock = true
      this.code = this.localConfig.textContent
      await this.utils.AsyncUtils.sleep(0)
      this.changeLock = false
      
      //console.log('onConfigInited', 3)
      
      while (!this.$refs.cmEditor || !this.$refs.cmEditor.$el) {
        await this.utils.AsyncUtils.sleep()
      }
      
      //console.log('onConfigInited', 4)
      
      //console.log('go', this.localConfig.stringToSearch)
      this.highlightText(this.localConfig.stringToSearch)
      this.resizeHeight()
      //console.log(this.markers.length)
      
      this.updateDocumentTitle()
      this.restoreCursorPosition()
      
      //console.log('onConfigInited', 5)
      this.setFontSize()
      
      this.codemirror.on('drop', this.onCodeMirrorDrop);
      
      this.initAnywordHint()
      this.inited = true
    },
  }
}


Object(_CodeMirrorEditorData_js__WEBPACK_IMPORTED_MODULE_3__["default"])(CodeMirrorEditor)


Object(_CodeMirrorEditorComputed_js__WEBPACK_IMPORTED_MODULE_4__["default"])(CodeMirrorEditor)


Object(_CodeMirrorEditorComputedOptions_js__WEBPACK_IMPORTED_MODULE_5__["default"])(CodeMirrorEditor)


Object(_CodeMirrorEditorWatch_js__WEBPACK_IMPORTED_MODULE_6__["default"])(CodeMirrorEditor)

// -------------------


Object(_CodeMirrorEditorMethodsOption_js__WEBPACK_IMPORTED_MODULE_7__["default"])(CodeMirrorEditor)


Object(_CodeMirrorEditorMethodsChange_js__WEBPACK_IMPORTED_MODULE_8__["default"])(CodeMirrorEditor)


Object(_CodeMirrorEditorMethodsFormat_js__WEBPACK_IMPORTED_MODULE_9__["default"])(CodeMirrorEditor)


Object(_CodeMirrorEditorMethodsCursor_js__WEBPACK_IMPORTED_MODULE_10__["default"])(CodeMirrorEditor)


Object(_CodeMirrorEditorMethodsFind_js__WEBPACK_IMPORTED_MODULE_11__["default"])(CodeMirrorEditor)


Object(_CodeMirrorEditorMethodsDisplay_js__WEBPACK_IMPORTED_MODULE_12__["default"])(CodeMirrorEditor)


Object(_CodeMirrorEditorMethodsFile_js__WEBPACK_IMPORTED_MODULE_13__["default"])(CodeMirrorEditor)


Object(_CodeMirrorEditorMethodsHotKey_js__WEBPACK_IMPORTED_MODULE_14__["default"])(CodeMirrorEditor)

/* harmony default export */ __webpack_exports__["default"] = (CodeMirrorEditor);

/***/ }),

/***/ "./src/components/CodeMirrorEditor/CodeMirrorEditor.js?vue&type=script&lang=js&?d1a8":
/*!**************************************************************************************!*\
  !*** ./src/components/CodeMirrorEditor/CodeMirrorEditor.js?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CodeMirrorEditor_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./CodeMirrorEditor.js?vue&type=script&lang=js& */ "./src/components/CodeMirrorEditor/CodeMirrorEditor.js?vue&type=script&lang=js&?bb59");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_CodeMirrorEditor_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/CodeMirrorEditor/CodeMirrorEditor.less?vue&type=style&index=1&id=6cc6c822&lang=less&scoped=true&":
/*!*************************************************************************************************************************!*\
  !*** ./src/components/CodeMirrorEditor/CodeMirrorEditor.less?vue&type=style&index=1&id=6cc6c822&lang=less&scoped=true& ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_CodeMirrorEditor_less_vue_type_style_index_1_id_6cc6c822_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader!../../../node_modules/css-loader/dist/cjs.js?sourceMap!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/less-loader/dist/cjs.js??ref--1-2!./CodeMirrorEditor.less?vue&type=style&index=1&id=6cc6c822&lang=less&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./src/components/CodeMirrorEditor/CodeMirrorEditor.less?vue&type=style&index=1&id=6cc6c822&lang=less&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_CodeMirrorEditor_less_vue_type_style_index_1_id_6cc6c822_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_CodeMirrorEditor_less_vue_type_style_index_1_id_6cc6c822_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_CodeMirrorEditor_less_vue_type_style_index_1_id_6cc6c822_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_CodeMirrorEditor_less_vue_type_style_index_1_id_6cc6c822_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/CodeMirrorEditor/CodeMirrorEditor.vue":
/*!**************************************************************!*\
  !*** ./src/components/CodeMirrorEditor/CodeMirrorEditor.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CodeMirrorEditor_html_vue_type_template_id_6cc6c822_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CodeMirrorEditor.html?vue&type=template&id=6cc6c822&scoped=true& */ "./src/components/CodeMirrorEditor/CodeMirrorEditor.html?vue&type=template&id=6cc6c822&scoped=true&");
/* harmony import */ var _CodeMirrorEditor_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CodeMirrorEditor.js?vue&type=script&lang=js& */ "./src/components/CodeMirrorEditor/CodeMirrorEditor.js?vue&type=script&lang=js&?d1a8");
/* empty/unused harmony star reexport *//* harmony import */ var _CodeMirrorEditorGlobal_less_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CodeMirrorEditorGlobal.less?vue&type=style&index=0&lang=less& */ "./src/components/CodeMirrorEditor/CodeMirrorEditorGlobal.less?vue&type=style&index=0&lang=less&");
/* harmony import */ var _CodeMirrorEditor_less_vue_type_style_index_1_id_6cc6c822_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CodeMirrorEditor.less?vue&type=style&index=1&id=6cc6c822&lang=less&scoped=true& */ "./src/components/CodeMirrorEditor/CodeMirrorEditor.less?vue&type=style&index=1&id=6cc6c822&lang=less&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _CodeMirrorEditor_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_D_3A_5Cxampp_5Chtdocs_5Cprojects_html5_5CPWA_Plain_Text_Editor_5Csrc_5Ccomponents_5CCodeMirrorEditor_5CCodeMirrorEditor_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CodeMirrorEditor.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=D%3A%5Cxampp%5Chtdocs%5Cprojects-html5%5CPWA-Plain-Text-Editor%5Csrc%5Ccomponents%5CCodeMirrorEditor%5CCodeMirrorEditor.vue&lang=yaml */ "./src/components/CodeMirrorEditor/CodeMirrorEditor.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=D%3A%5Cxampp%5Chtdocs%5Cprojects-html5%5CPWA-Plain-Text-Editor%5Csrc%5Ccomponents%5CCodeMirrorEditor%5CCodeMirrorEditor.vue&lang=yaml");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _CodeMirrorEditor_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CodeMirrorEditor_html_vue_type_template_id_6cc6c822_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CodeMirrorEditor_html_vue_type_template_id_6cc6c822_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6cc6c822",
  null
  
)

/* custom blocks */

if (typeof _CodeMirrorEditor_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_D_3A_5Cxampp_5Chtdocs_5Cprojects_html5_5CPWA_Plain_Text_Editor_5Csrc_5Ccomponents_5CCodeMirrorEditor_5CCodeMirrorEditor_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_5__["default"] === 'function') Object(_CodeMirrorEditor_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_D_3A_5Cxampp_5Chtdocs_5Cprojects_html5_5CPWA_Plain_Text_Editor_5Csrc_5Ccomponents_5CCodeMirrorEditor_5CCodeMirrorEditor_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_5__["default"])(component)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/CodeMirrorEditor/CodeMirrorEditor.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/CodeMirrorEditor/CodeMirrorEditor.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=D%3A%5Cxampp%5Chtdocs%5Cprojects-html5%5CPWA-Plain-Text-Editor%5Csrc%5Ccomponents%5CCodeMirrorEditor%5CCodeMirrorEditor.vue&lang=yaml":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./src/components/CodeMirrorEditor/CodeMirrorEditor.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=D%3A%5Cxampp%5Chtdocs%5Cprojects-html5%5CPWA-Plain-Text-Editor%5Csrc%5Ccomponents%5CCodeMirrorEditor%5CCodeMirrorEditor.vue&lang=yaml ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_kazupon_vue_i18n_loader_lib_index_js_CodeMirrorEditor_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_D_3A_5Cxampp_5Chtdocs_5Cprojects_html5_5CPWA_Plain_Text_Editor_5Csrc_5Ccomponents_5CCodeMirrorEditor_5CCodeMirrorEditor_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@kazupon/vue-i18n-loader/lib!./CodeMirrorEditor.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=D%3A%5Cxampp%5Chtdocs%5Cprojects-html5%5CPWA-Plain-Text-Editor%5Csrc%5Ccomponents%5CCodeMirrorEditor%5CCodeMirrorEditor.vue&lang=yaml */ "./node_modules/@kazupon/vue-i18n-loader/lib/index.js!./src/components/CodeMirrorEditor/CodeMirrorEditor.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=D%3A%5Cxampp%5Chtdocs%5Cprojects-html5%5CPWA-Plain-Text-Editor%5Csrc%5Ccomponents%5CCodeMirrorEditor%5CCodeMirrorEditor.vue&lang=yaml");
/* harmony import */ var _node_modules_kazupon_vue_i18n_loader_lib_index_js_CodeMirrorEditor_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_D_3A_5Cxampp_5Chtdocs_5Cprojects_html5_5CPWA_Plain_Text_Editor_5Csrc_5Ccomponents_5CCodeMirrorEditor_5CCodeMirrorEditor_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_kazupon_vue_i18n_loader_lib_index_js_CodeMirrorEditor_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_D_3A_5Cxampp_5Chtdocs_5Cprojects_html5_5CPWA_Plain_Text_Editor_5Csrc_5Ccomponents_5CCodeMirrorEditor_5CCodeMirrorEditor_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_kazupon_vue_i18n_loader_lib_index_js_CodeMirrorEditor_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_D_3A_5Cxampp_5Chtdocs_5Cprojects_html5_5CPWA_Plain_Text_Editor_5Csrc_5Ccomponents_5CCodeMirrorEditor_5CCodeMirrorEditor_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_kazupon_vue_i18n_loader_lib_index_js_CodeMirrorEditor_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_D_3A_5Cxampp_5Chtdocs_5Cprojects_html5_5CPWA_Plain_Text_Editor_5Csrc_5Ccomponents_5CCodeMirrorEditor_5CCodeMirrorEditor_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_kazupon_vue_i18n_loader_lib_index_js_CodeMirrorEditor_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_D_3A_5Cxampp_5Chtdocs_5Cprojects_html5_5CPWA_Plain_Text_Editor_5Csrc_5Ccomponents_5CCodeMirrorEditor_5CCodeMirrorEditor_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/CodeMirrorEditor/CodeMirrorEditorComputed.js":
/*!*********************************************************************!*\
  !*** ./src/components/CodeMirrorEditor/CodeMirrorEditorComputed.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vendors_codemirror_config_webpack_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vendors/codemirror.config.webpack.js */ "./src/components/CodeMirrorEditor/vendors/codemirror.config.webpack.js");



/* harmony default export */ __webpack_exports__["default"] = (function (CodeMirrorEditor) {
  CodeMirrorEditor.computed.editor$el = function () {
    //console.log(this.$refs.cmEditor.$el)
    if (!this.$refs.cmEditor) {
      return undefined
    }

    return jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.$refs.cmEditor.$el).find('.CodeMirror:first')
  }
  CodeMirrorEditor.computed.editorScroll$el = function () {
    //console.log(this.$refs.cmEditor.$el)
    if (!this.$refs.cmEditor) {
      return undefined
    }

    return jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.$refs.cmEditor.$el).find('.CodeMirror:first .CodeMirror-scroll:first')
  }
  CodeMirrorEditor.computed.codemirror = function () {
    if (!this.$refs.cmEditor) {
      return undefined
    }

    return this.$refs.cmEditor.codemirror
  },
          CodeMirrorEditor.computed.computedCodeMirrorWrapperClassNameList = function () {
            let list = []

            if (this.inited === true) {
              list.push('inited')
            }

            if (this.localConfig.lineWrapping === false) {
              list.push('text-wrap-disabled')
            }

            return list.join(' ')
          }
  CodeMirrorEditor.computed.computedIndentSpaces = function () {
    if (this.localConfig.indent.mode === 'tab') {
      return '\t'
    }

    let spaces = []
    for (let i = 0;
    i < this.localConfig.indent.size; i++) {
      spaces.push(' ')
    }
    return spaces.join('')
  }
});

/***/ }),

/***/ "./src/components/CodeMirrorEditor/CodeMirrorEditorComputedOptions.js":
/*!****************************************************************************!*\
  !*** ./src/components/CodeMirrorEditor/CodeMirrorEditorComputedOptions.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendors_codemirror_config_webpack_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendors/codemirror.config.webpack.js */ "./src/components/CodeMirrorEditor/vendors/codemirror.config.webpack.js");


/* harmony default export */ __webpack_exports__["default"] = (function (CodeMirrorEditor) {
  CodeMirrorEditor.computed.computedCodeMirrorOptions = function () {

    let options = {
      ..._vendors_codemirror_config_webpack_js__WEBPACK_IMPORTED_MODULE_0__["default"]
    }

    options.mode.name = this.localConfig.syntax

    options.extraKeys['Ctrl-Alt-F'] = (cm) => {
      this.autoFormat(cm)
    }

    options.extraKeys['Tab'] = (cm) => {
      this.inputTab(cm)
    }

    options.extraKeys['Ctrl-O'] = (cm) => {
      this.openFile()
    }

    options.extraKeys['Ctrl-S'] = (cm) => {
      this.saveFile(cm)
    }

    options.lineWrapping = this.localConfig.lineWrapping

    //console.log(options)

    return options
  }
});

/***/ }),

/***/ "./src/components/CodeMirrorEditor/CodeMirrorEditorData.js":
/*!*****************************************************************!*\
  !*** ./src/components/CodeMirrorEditor/CodeMirrorEditorData.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (CodeMirrorEditor) {
  CodeMirrorEditor.data = function () {
    this.$i18n.locale = this.localConfig.locale
    return {
      inited: false,
      simpleMode: false,
      //editor: null,
      //editor$el: null,
      markers: [],
      code: '',
      highlightClassName: 'highlight',
      changeLock: false,
      cursorPositionSaved: {
        from: {line: null, ch: null},
        to: {line: null, ch: null},
        scrollTop: null
      }
    }
  }
});

/***/ }),

/***/ "./src/components/CodeMirrorEditor/CodeMirrorEditorGlobal.less?vue&type=style&index=0&lang=less&":
/*!*******************************************************************************************************!*\
  !*** ./src/components/CodeMirrorEditor/CodeMirrorEditorGlobal.less?vue&type=style&index=0&lang=less& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_CodeMirrorEditorGlobal_less_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader!../../../node_modules/css-loader/dist/cjs.js?sourceMap!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/less-loader/dist/cjs.js??ref--1-2!./CodeMirrorEditorGlobal.less?vue&type=style&index=0&lang=less& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./src/components/CodeMirrorEditor/CodeMirrorEditorGlobal.less?vue&type=style&index=0&lang=less&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_CodeMirrorEditorGlobal_less_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_CodeMirrorEditorGlobal_less_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_CodeMirrorEditorGlobal_less_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_CodeMirrorEditorGlobal_less_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/CodeMirrorEditor/CodeMirrorEditorMethodsChange.js":
/*!**************************************************************************!*\
  !*** ./src/components/CodeMirrorEditor/CodeMirrorEditorMethodsChange.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (CodeMirrorEditor) {
    
  CodeMirrorEditor.methods.onEditorChange = async function () {
    if (this.simpleMode === true) {
      return false
    }

    if (this.setValueLock === true) {
      return false
    }
    this.setValueLock = true
    this.localConfig.textContent = this.codemirror.getValue()
    await this.utils.AsyncUtils.sleep(0)
    this.highlightText()
    this.setValueLock = false
  }
  
  CodeMirrorEditor.methods.updateDocumentTitle = function () {
    //console.log(this.localConfig.filename)
    if (this.localConfig.filename) {
      document.title = this.localConfig.filename
      return true
    }
    
    let textContentTrim = this.$parent.textContentTrim
    if (textContentTrim === '') {
      document.title = 'Plain Text Editor'
    } else {
      document.title = textContentTrim
    }
  }
  
  CodeMirrorEditor.methods.onCodeMirrorDrop = function (codemirror, event) {
    //console.log(event)
    //console.log('onCodeMirrorDrop')
    event.preventDefault()
    event.stopPropagation()
    
    
    //console.log(event)
    let dt = event.dataTransfer
    let files = dt.files


    if (files.length === 0) {
      return false
    }
    //console.log(files.length)
    
    let file = files[0]
    
    let filename = file.name
    //console.log(file)
    let reader = new FileReader()
    
    reader.onloadend = () => {
      //this.imgSrc = reader.result
      this.code = reader.result
      this.localConfig.filename = filename
      //console.log(filename)
      this.setModeByFilename(filename)
    }
    reader.readAsText(file)
  }
});

/***/ }),

/***/ "./src/components/CodeMirrorEditor/CodeMirrorEditorMethodsCursor.js":
/*!**************************************************************************!*\
  !*** ./src/components/CodeMirrorEditor/CodeMirrorEditorMethodsCursor.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (CodeMirrorEditor) {
  CodeMirrorEditor.methods.onCodeMirrorCursorActivity = async function () {
    //console.log(1, this.getSelectedText())
    
    this.saveCursorPosition()
    
    //console.log(1, this.selectedText())
    this.config.selectedText = this.getSelectedText()
  }
    
  CodeMirrorEditor.methods.jumpToLine = function (i, from = 0) {
    if (this.simpleMode === true) {
      return false
    }


    this.codemirror.focus()
    var t = this.codemirror.charCoords({line: i, ch: 0}, "local").top;
    var middleHeight = this.codemirror.getScrollerElement().offsetHeight / 2;
    this.codemirror.scrollTo(null, t - middleHeight - 5)

    //if (!to) {
    this.codemirror.doc.setCursor(i - 1, from)
    //if (to) {
    //  this.codemirror.setSelection({line: 0, ch: 3}, {line: 0, ch: 9})
    //}
    //}
    //else {
    //  this.codemirror.doc.setSelection(i - 1, from)
    //}
  }
  CodeMirrorEditor.methods.jumpToMarker = function (marker) {
    if (this.simpleMode === true) {
      return false
    }


    this.codemirror.focus()
    let {fromLine, fromCh, toLine, toCh} = this.getMarkerPos(marker)
    this.codemirror.setSelection({line: fromLine - 1, ch: fromCh}, {line: toLine - 1, ch: toCh})
  }
  CodeMirrorEditor.methods.getCursor = function (position) {
    if (this.simpleMode === true
            || this.config.inited === false) {
      return false
    }

    return this.codemirror.getCursor(position)
  }
   
  let cursorPositionKey = 'codemirror.cursor.position'
  //let viewportKey = 'codemirror.viewport.position'
  CodeMirrorEditor.methods.saveCursorPosition = function () {
    if (this.simpleMode === true
            || this.config.inited === false
            || this.inited === false
            || this.changeLock === true) {
      return false
    }

    let fromCursor = this.getCursor(true)
    this.cursorPositionSaved.from.line = fromCursor.line
    this.cursorPositionSaved.from.ch = fromCursor.ch

    let toCursor = this.getCursor(false)
    this.cursorPositionSaved.to.line = toCursor.line
    this.cursorPositionSaved.to.ch = toCursor.ch
    
    this.cursorPositionSaved.scrollTop = this.editorScroll$el.scrollTop()
    
    //console.log(this.editor$el.scrollTop)
    
    let saved = JSON.stringify(this.cursorPositionSaved)
    localStorage.setItem(cursorPositionKey, saved)
    //console.log('saveCursorPosition')
  }
  CodeMirrorEditor.methods.restoreCursorPosition = function () {
    //console.log('restoreCursorPosition', this.config.inited, this.cursorPositionSaved.from)
    if (this.simpleMode === true
            || this.config.inited === false) {
      return false
    }

    
    if (this.cursorPositionSaved.from.line === null) {
      let saved = localStorage.getItem(cursorPositionKey)
      if (saved === null) {
        return false
      }
      this.cursorPositionSaved = JSON.parse(saved)
      //console.log(saved)
    }

    if (this.cursorPositionSaved.from.line === this.cursorPositionSaved.to.line
            && this.cursorPositionSaved.from.ch === this.cursorPositionSaved.to.ch) {
      this.jumpToLine(this.cursorPositionSaved.from.line + 1, this.cursorPositionSaved.from.ch)

      //console.log('restoreCursor cursor')
    } else {
      let from = {
        line: this.cursorPositionSaved.from.line,
        ch: this.cursorPositionSaved.from.ch
      }
      let to = {
                line: this.cursorPositionSaved.to.line,
                ch: this.cursorPositionSaved.to.ch
              }
      
      this.codemirror.setSelection(from, to)
      //console.log('restoreCursor selection')
    }

    if (this.editorScroll$el) {
      this.editorScroll$el.scrollTop(this.cursorPositionSaved.scrollTop)
    }
  }
  CodeMirrorEditor.methods.getSelectedText = function () {
    if (this.simpleMode === true) {
      return false
    }

    return this.codemirror.getSelection()
  }
  
  CodeMirrorEditor.methods.onCodeMirrorBeforeSelectionChange = function () {
    
    console.log(this.getSelectedText())
  }
});

/***/ }),

/***/ "./src/components/CodeMirrorEditor/CodeMirrorEditorMethodsDisplay.js":
/*!***************************************************************************!*\
  !*** ./src/components/CodeMirrorEditor/CodeMirrorEditorMethodsDisplay.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (CodeMirrorEditor) {
  CodeMirrorEditor.methods.resizeHeight = async function () {
    if (this.config.inited === false) {
      return false
    }

    /*
     let className = 'display-replace-panel'
     if (this.localConfig.displayReplacePanel === true) {
     this.codemirror$el.addClass(className)
     }
     else {
     this.codemirror$el.removeClass(className)
     }
     */

    //console.log(this.codemirror$el, this.codemirror$el.css)
    this.editor$el.css('height', `calc(100vh - ${this.config.panelHeight})`)
    this.editor$el.css('max-height', `calc(100vh - ${this.config.panelHeight})`)
    //console.log('設定好了', `calc(100vh - ${this.config.panelHeight})`)
  }
});

/***/ }),

/***/ "./src/components/CodeMirrorEditor/CodeMirrorEditorMethodsFile.js":
/*!************************************************************************!*\
  !*** ./src/components/CodeMirrorEditor/CodeMirrorEditorMethodsFile.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vendors_codemirror_mode_util_webpack_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vendors/codemirror.mode-util.webpack.js */ "./src/components/CodeMirrorEditor/vendors/codemirror.mode-util.webpack.js");



/* harmony default export */ __webpack_exports__["default"] = (function (CodeMirrorEditor) {
  CodeMirrorEditor.methods.openFile = async function () {
    //console.log('open file')
    let file = await this.$refs.OpenFile.openFile()
    //console.log(file)
    
    if (file) {
      this.localConfig.filename = file.filename
      this.code = file.content
    }
  }
    
  CodeMirrorEditor.methods.saveFile = function () {
    let filename = this.getFilename()
    
    this.utils.FileUtils.download(filename, this.code)
  }
  
  CodeMirrorEditor.methods.getFilename = function () {
    if (this.localConfig.filename) {
      return this.localConfig.filename
    }
    
    let mode = this.getMode(false)
    let ext = _vendors_codemirror_mode_util_webpack_js__WEBPACK_IMPORTED_MODULE_1__["default"].getExtFromMode(mode)
    
    return dayjs__WEBPACK_IMPORTED_MODULE_0___default()().format('MMDD-hhmmss') + '.' + ext
  }
  
});

/***/ }),

/***/ "./src/components/CodeMirrorEditor/CodeMirrorEditorMethodsFind.js":
/*!************************************************************************!*\
  !*** ./src/components/CodeMirrorEditor/CodeMirrorEditorMethodsFind.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (CodeMirrorEditor) {
  CodeMirrorEditor.methods.getMarkerPos = function (marker) {
    if (this.simpleMode === true) {
      return false
    }

    let lines = marker.lines

    let firstLine = lines[0]
    let fromLine = firstLine.lineNo() + 1
    let fromCh = firstLine.markedSpans[0].from

    let lastLine = lines[(lines.length - 1)]
    let toLine = lastLine.lineNo() + 1
    let toCh = lastLine.markedSpans[0].to

    return {
      fromLine,
      fromCh,
      toLine,
      toCh
    }
  }

  CodeMirrorEditor.methods.findNext = function (search) {
    if (this.simpleMode === true) {
      return false
    }

    if (!search) {
      search = this.localConfig.stringToSearch
    }

    if (!search || search.length === 0) {
      return false
    }

    var cursor = this.codemirror.getSearchCursor(search);

    let currentPosition = this.getCursor(true)
    //console.log(currentPosition)
    let currentLine = currentPosition.line
    let currentCh = currentPosition.ch
    //console.log('current', currentLine, currentCh)

    let firstMarker
    //let lastMarker

    while (cursor.findNext()) {
      let marker = this.codemirror.markText(
              cursor.from(),
              cursor.to()
              )

      if (!firstMarker) {
        firstMarker = marker
      }

      //console.log(marker)
      let {fromLine, fromCh, toLine, toCh} = this.getMarkerPos(marker)
      //MARKER = marker.lines[0]

      //console.log('marker', line, from, to)
      if (fromLine - 1 > currentLine) {
        // 對，就是要找這個
        this.jumpToMarker(marker)
        return true
      } else if (fromLine - 1 === currentLine) {
        if (fromCh > currentCh) {
          // 對，就是要找這個
          this.jumpToMarker(marker)
          return true
        }
      }
    }

    if (firstMarker) {
      this.jumpToMarker(firstMarker)
      return true
    }

    return false  // 沒找到
  }
  CodeMirrorEditor.methods.findPrev = function (search) {
    if (this.simpleMode === true) {
      return false
    }

    if (!search) {
      search = this.localConfig.stringToSearch
    }

    if (!search || search.length === 0) {
      return false
    }
    //this.codemirror.focus()
    //console.log('findPrev')
    //console.log(search)
    var cursor = this.codemirror.getSearchCursor(search);

    let currentPosition = this.getCursor(true)
    //console.log(currentPosition)
    let currentLine = currentPosition.line
    let currentCh = currentPosition.ch
    //console.log('current', currentLine, currentCh)

    let lastMarker
    let jumpToLast = false
    //let lastMarker

    while (cursor.findNext()) {
      let marker = this.codemirror.markText(
              cursor.from(),
              cursor.to()
              )

      if (jumpToLast === true) {
        lastMarker = marker
        //console.log('jumpToLast true')
        continue
      }

      //if (!firstMarker) {

      //}

      //console.log(marker)
      let {fromLine, fromCh, toLine, toCh} = this.getMarkerPos(marker)
      //console.log(currentLine, currentCh, toLine, toCh, fromLine, fromCh)

      //console.log('marker', line, from, to)
      if (currentLine < fromLine - 1) {
        // 對，就是要找這個
        if (!lastMarker) {
          jumpToLast = true
          //console.log('jumpToLast')
          continue
        }
        this.jumpToMarker(lastMarker)
        return true
      } else if (currentLine === fromLine - 1) {
        //console.log(currentCh, fromCh)
        if (currentCh <= fromCh || currentCh <= toCh) {
          // 對，就是要找這個
          if (!lastMarker) {
            jumpToLast = true
            //console.log('jumpToLast ch')
            continue
          }
          this.jumpToMarker(lastMarker)
          return true
        }
      }

      lastMarker = marker
    }

    if (lastMarker) {
      this.jumpToMarker(lastMarker)
      return true
    }
    //console.log('沒找到')
    return false  // 沒找到
  }

  CodeMirrorEditor.methods.highlightClear = async function () {
    //console.log(this.codemirror$el.find('.' + this.highlightClassName).length)
    //this.codemirror$el.find('.' + this.highlightClassName).removeClass(this.highlightClassName)
    while (this.markers.length > 0) {
      let marker = this.markers.shift()
      marker.clear()
      await this.utils.AsyncUtils.sleep(0)
    }
  }
  
  let highlighTextTimer
  let highlighTextSearching
  CodeMirrorEditor.methods.highlightText = async function (text) {
    if (this.config.inited === false) {
      return false
    }
    
    if (this.simpleMode === true) {
      return false
    }

    clearTimeout(highlighTextTimer)
    highlighTextTimer = setTimeout(async () => {
      if (!text) {
        text = this.localConfig.stringToSearch
      }

      highlighTextSearching = text
      await this.highlightClear()

      if (text === '') {
        return false
      }

      while (!this.codemirror || !this.codemirror.getSearchCursor) {
        //console.log('sleep', this.codemirror)
        await this.utils.AsyncUtils.sleep()
      }

      var cursor = this.codemirror.getSearchCursor(text)
      //console.log(cursor)
      while (cursor.findNext()) {
        //CURSOR = cursor
        if (highlighTextSearching !== text) {
          // 條件變更了，取消
          return false
        }
        let marker = this.codemirror.markText(
                cursor.from(),
                cursor.to(),
                {className: this.highlightClassName}
        )
        this.markers.push(marker)
        await this.utils.AsyncUtils.sleep(0)
        //MARKER = marker
      }
    }, 100)
      
    //this.codemirror.setCursor({line: 1, ch: 0})
  }
});

/***/ }),

/***/ "./src/components/CodeMirrorEditor/CodeMirrorEditorMethodsFormat.js":
/*!**************************************************************************!*\
  !*** ./src/components/CodeMirrorEditor/CodeMirrorEditorMethodsFormat.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var js_beautify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-beautify */ "./node_modules/js-beautify/js/index.js");
/* harmony import */ var js_beautify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_beautify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jsmin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsmin */ "./node_modules/jsmin/jsmin.js");
/* harmony import */ var jsmin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsmin__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cssmin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cssmin */ "./node_modules/cssmin/cssmin.js");
/* harmony import */ var cssmin__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cssmin__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var minify_xml__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! minify-xml */ "./node_modules/minify-xml/index.js");
/* harmony import */ var minify_xml__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(minify_xml__WEBPACK_IMPORTED_MODULE_3__);






/* harmony default export */ __webpack_exports__["default"] = (function (CodeMirrorEditor) {
  CodeMirrorEditor.methods.autoFormat = function () {
    //console.log('autoFormat')
    let cm = this.codemirror
    let mode = this.getMode()
    
    let process
    if (mode === 'javascript') {
      process = js_beautify__WEBPACK_IMPORTED_MODULE_0___default.a.js_beautify
    }
    else if (mode === 'css') {
      process = js_beautify__WEBPACK_IMPORTED_MODULE_0___default.a.css_beautify
    }
    else if (mode === 'html') {
      process = js_beautify__WEBPACK_IMPORTED_MODULE_0___default.a.html_beautify
    }
    //console.log()
    
    let selection = cm.getSelection()
    if (selection === '') {
      cm.execCommand('selectAll')
      selection = cm.getSelection()
    }
    
    let options = {}
    if (this.localConfig.indent.mode === 'space') {
      options.indent_size = this.localConfig.indent.size
    }
    
    selection = process(selection, options)
    //selection = selection + 'AAA'
    cm.replaceSelection(selection);
    
    //console.log('aaa')
  }
  
  CodeMirrorEditor.methods.minify = function () {
    let cm = this.codemirror
    let mode = this.getMode()
    
    //console.log()
    
    cm.execCommand('selectAll')
    let selection = cm.getSelection()
    
    if (mode === 'css') {
      //this.localConfig.textContent = await cssMinifier.csso(this.localConfig.textContent)
      selection = cssmin__WEBPACK_IMPORTED_MODULE_2___default()(selection)
    }
    else if (mode === 'javascript') {
      //console.log(this.localConfig.textContent)
      selection = Object(jsmin__WEBPACK_IMPORTED_MODULE_1__["jsmin"])(selection)
    }
    else if (mode === 'html') {
      //console.log(this.localConfig.textContent)
      selection = minify_xml__WEBPACK_IMPORTED_MODULE_3___default()(selection)
    }
    else {
      // 刪掉多餘空白與換行
      selection = selection.split('\n').join('')
      selection = selection.split('\t').join(' ')
      while (selection.indexOf('  ') > -1) {
        selection = selection.split('  ').join(' ')
      }
    }
    //selection = selection + 'AAA'
    cm.replaceSelection(selection)
  }
  
  CodeMirrorEditor.methods.inputTab = function () {
    let cm = this.codemirror
    cm.replaceSelection(this.computedIndentSpaces, "end");
  }
  
  CodeMirrorEditor.methods.setFontSize = function () {
    let fontSize = this.localConfig.fontSize
    this.editor$el.css('font-size', fontSize + 'pt')
    this.editor$el.css('line-height', Math.round(fontSize * 1.5) + 'pt')
  }
});

/***/ }),

/***/ "./src/components/CodeMirrorEditor/CodeMirrorEditorMethodsHotKey.js":
/*!**************************************************************************!*\
  !*** ./src/components/CodeMirrorEditor/CodeMirrorEditorMethodsHotKey.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


/* harmony default export */ __webpack_exports__["default"] = (function (CodeMirrorEditor) {
  CodeMirrorEditor.methods.initAnywordHint = function () {
    //window.CME = this.$refs.cmEditor
    //console.log(this.$refs.cmEditor.CodeMirror.registerHelper)
  }
    
  let hintExcludeText = [
    ' ',
    '\t',
    '\n'
  ]
  
  let inputedText = ''
  CodeMirrorEditor.methods.onCodeMirrorKeyHandled = function (cm, input) {
    if (input.origin === 'paste') {
      return false
    }
    
    let t = input.text[0]
    if (hintExcludeText.indexOf(t) > -1) {
      inputedText = ''
      //console.log('no hint')
      return cm.closeHint()
    }
    
    let text = inputedText + t
    //console.log(text)
    
    
    //console.log(cm)
    //console.log(pos)
    //console.log(e, s)
    //this.$refs.cmEditor.codemirror.execCommand('autocomplete')
    cm.showHint()
    //window.CM = cm
    //console.log(cm.listSelections())
    
    //await this.utils.AsyncUtils.sleep(100)
    let hintsContainer = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.CodeMirror-hints.default:first')
    hintsContainer.hide()
    
    //console.log(hintsContainer.children().length)
    if (hintsContainer.children().length === 0) {
      inputedText = ''
      //console.log('closeHint 1', text)
      return cm.closeHint()
    }
    
    //hintsContainer.children(`:not(:container(${text}))`).remove()
    hintsContainer.children().each((i, li) => {
      //console.log(li)
      let hint = li.innerText.trim()
      //console.log(hint, text)
      if (hint.startsWith(text) === false) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(li).remove()
      }
    })
    
    //console.log(hintsContainer.children().length)
    if (hintsContainer.children().length === 0) {
      inputedText = ''
      //console.log('closeHint 2')
      return cm.closeHint()
    }
    
    //setTimeout(() => {
      //console.log(hintsContainer)
      hintsContainer.show()
      
      inputedText = text
    //}, 50)
  }

});

/***/ }),

/***/ "./src/components/CodeMirrorEditor/CodeMirrorEditorMethodsOption.js":
/*!**************************************************************************!*\
  !*** ./src/components/CodeMirrorEditor/CodeMirrorEditorMethodsOption.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendors_codemirror_mode_util_webpack_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendors/codemirror.mode-util.webpack.js */ "./src/components/CodeMirrorEditor/vendors/codemirror.mode-util.webpack.js");


/* harmony default export */ __webpack_exports__["default"] = (function (CodeMirrorEditor) {
  CodeMirrorEditor.methods.getMode = function (useFilter = true) {
    let cm = this.codemirror
    let mode = cm.getOption('mode').name
    
    return _vendors_codemirror_mode_util_webpack_js__WEBPACK_IMPORTED_MODULE_0__["default"].getMode(mode, useFilter)
  }

  CodeMirrorEditor.methods.setMode = function (mode) {
    if (this.simpleMode === true) {
      return false
    }

    setTimeout(() => {
      this.codemirror.setOption("mode", mode)
    }, 100)

    //this.codemirror$el = $('.CodeMirror:first')

    //console.log(this.codemirror$el)
  }
  
  CodeMirrorEditor.methods.setModeByFilename = function (filename) {
    this.localConfig.syntax = _vendors_codemirror_mode_util_webpack_js__WEBPACK_IMPORTED_MODULE_0__["default"].getModeFromFilename(filename) 
  }
  
  CodeMirrorEditor.methods.setOption = function (key, value) {

    setTimeout(() => {
      this.codemirror.setOption(key, value)
    }, 100)

  }
});

/***/ }),

/***/ "./src/components/CodeMirrorEditor/CodeMirrorEditorWatch.js":
/*!******************************************************************!*\
  !*** ./src/components/CodeMirrorEditor/CodeMirrorEditorWatch.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

/* harmony default export */ __webpack_exports__["default"] = (function (CodeMirrorEditor) {
    
  CodeMirrorEditor.watch = {
    'config.inited': function () {
      //console.log(this.config.inited)
      this.onConfigInited()
    },
    'config.panelHeight'() {
      this.resizeHeight()
    },
    'localConfig.filename'() {
      this.updateDocumentTitle()
    },
    'localConfig.stringToSearch'() {
      this.highlightText()
    },
    'localConfig.syntax'() {
      this.setMode(this.localConfig.syntax)
    },
    'localConfig.lineWrapping'() {
      console.log(this.localConfig.lineWrapping)
      this.setOption('lineWrapping', this.localConfig.lineWrapping)
    },
    'localConfig.fontSize'() {
      this.setFontSize()
    },
    'localConfig.textContent': async function () {
      if (this.config.inited === false) {
        return false
      }
      
      //this.restoreCursorPosition()
      //console.log('changed', this.localConfig.textContent)
      if (this.changeLock === true) {
        return false
      }

      this.saveCursorPosition()
      this.changeLock = true
      this.code = this.localConfig.textContent
      await this.utils.AsyncUtils.sleep(0)
      this.restoreCursorPosition()
      this.updateDocumentTitle()
      this.changeLock = false

      //this.$refs.cmEditor.setValue(this.localConfig.textContent)
    },
    'code': async function () {
      if (this.config.inited === false) {
        return false
      }
      
      //console.log('code')
      if (this.changeLock === true) {
        return false
      }

      this.changeLock = true
      this.localConfig.textContent = this.code
      await this.utils.AsyncUtils.sleep(0)
      this.updateDocumentTitle()
      this.changeLock = false
    }
  }
});

/***/ }),

/***/ "./src/components/CodeMirrorEditor/OpenFile/OpenFile.html?vue&type=template&id=164ef9a9&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./src/components/CodeMirrorEditor/OpenFile/OpenFile.html?vue&type=template&id=164ef9a9&scoped=true& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_OpenFile_html_vue_type_template_id_164ef9a9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./OpenFile.html?vue&type=template&id=164ef9a9&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./src/components/CodeMirrorEditor/OpenFile/OpenFile.html?vue&type=template&id=164ef9a9&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_OpenFile_html_vue_type_template_id_164ef9a9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_OpenFile_html_vue_type_template_id_164ef9a9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/CodeMirrorEditor/OpenFile/OpenFile.js?vue&type=script&lang=js&?25ff":
/*!***************************************************************************************!*\
  !*** ./src/components/CodeMirrorEditor/OpenFile/OpenFile.js?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
let OpenFile = {
  /**
   * accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
   */
  props: ['accept', 'multiple'],
  data () {    
    return {
      loading: false,
      files: []
    }
  },
//  },
//  watch: {
//    
//  },
//  computed: {
//    
//  },
//  mounted() {
//    
//  },
  methods: {
    openFile: async function () {
      this.loading = true
      this.files = []
      //console.log(this.$refs.FileInput)
      this.$refs.FileInput.click()
      
      while (this.loading === true) {
        await this.sleep()
      }
      
      if (this.files.length === 0) {
        return undefined
      }
      else if (this.files.length === 1) {
        return this.files[0]
      }
      else {
        return this.files
      }
    },
    sleep (ms = 100) {
      return new Promise(resolve => setTimeout(resolve, ms));
    },
    onChange (event) {
      let files = this.$refs.FileInput.files
      //console.log(files.length)
      if (files.length === 0) {
        this.loading = false
        return false
      } 

      /* If any further modifications have to be made on the 
         Extracted text. The text can be accessed using the  
         file variable. But since this is const, it is a read  
         only variable, hence immutable. To make any changes,  
         changing const to var, here and In the reader.onload  
         function would be advisible */
      
      let loop = (i) => {
        if (i < files.length) {
          const file = files[i]

          let reader = new FileReader(); 

          reader.onload = (e) => { 
            const result = e.target.result; 

            // This is a regular expression to identify carriage  
            // Returns and line breaks 
            //const lines = file.split(/\r\n|\n/); 
            //textarea.value = lines.join('\n'); 

            this.files.push({
              filename: file.name,
              content: result
            })
            
            i++
            loop(i)
          }; 

          reader.onerror = (e) => console.error(e.target.error.name); 
          reader.readAsText(file); 
        }
        else {
          this.$refs.FileInput.value = ''
          this.loading = false
        }
      }
      
      loop(0)
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (OpenFile);

/***/ }),

/***/ "./src/components/CodeMirrorEditor/OpenFile/OpenFile.js?vue&type=script&lang=js&?67e8":
/*!***************************************************************************************!*\
  !*** ./src/components/CodeMirrorEditor/OpenFile/OpenFile.js?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OpenFile_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./OpenFile.js?vue&type=script&lang=js& */ "./src/components/CodeMirrorEditor/OpenFile/OpenFile.js?vue&type=script&lang=js&?25ff");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_OpenFile_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/CodeMirrorEditor/OpenFile/OpenFile.less?vue&type=style&index=0&id=164ef9a9&lang=less&scoped=true&":
/*!**************************************************************************************************************************!*\
  !*** ./src/components/CodeMirrorEditor/OpenFile/OpenFile.less?vue&type=style&index=0&id=164ef9a9&lang=less&scoped=true& ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_OpenFile_less_vue_type_style_index_0_id_164ef9a9_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader/dist/cjs.js?sourceMap!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/less-loader/dist/cjs.js??ref--1-2!./OpenFile.less?vue&type=style&index=0&id=164ef9a9&lang=less&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./src/components/CodeMirrorEditor/OpenFile/OpenFile.less?vue&type=style&index=0&id=164ef9a9&lang=less&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_OpenFile_less_vue_type_style_index_0_id_164ef9a9_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_OpenFile_less_vue_type_style_index_0_id_164ef9a9_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_OpenFile_less_vue_type_style_index_0_id_164ef9a9_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_OpenFile_less_vue_type_style_index_0_id_164ef9a9_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/CodeMirrorEditor/OpenFile/OpenFile.vue":
/*!***************************************************************!*\
  !*** ./src/components/CodeMirrorEditor/OpenFile/OpenFile.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OpenFile_html_vue_type_template_id_164ef9a9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OpenFile.html?vue&type=template&id=164ef9a9&scoped=true& */ "./src/components/CodeMirrorEditor/OpenFile/OpenFile.html?vue&type=template&id=164ef9a9&scoped=true&");
/* harmony import */ var _OpenFile_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OpenFile.js?vue&type=script&lang=js& */ "./src/components/CodeMirrorEditor/OpenFile/OpenFile.js?vue&type=script&lang=js&?67e8");
/* empty/unused harmony star reexport *//* harmony import */ var _OpenFile_less_vue_type_style_index_0_id_164ef9a9_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OpenFile.less?vue&type=style&index=0&id=164ef9a9&lang=less&scoped=true& */ "./src/components/CodeMirrorEditor/OpenFile/OpenFile.less?vue&type=style&index=0&id=164ef9a9&lang=less&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _OpenFile_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OpenFile_html_vue_type_template_id_164ef9a9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _OpenFile_html_vue_type_template_id_164ef9a9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "164ef9a9",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/CodeMirrorEditor/OpenFile/OpenFile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/CodeMirrorEditor/vendors/anyword-hint-chinese.js":
/*!*************************************************************************!*\
  !*** ./src/components/CodeMirrorEditor/vendors/anyword-hint-chinese.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* global CodeMirror */

// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE

(function(mod) {
  if (true) // CommonJS
    mod(__webpack_require__(/*! codemirror */ "./node_modules/codemirror/lib/codemirror.js"));
  else {}
})(function(CodeMirror) {
  "use strict";

  //var WORD = /[\w$]+/, RANGE = 500;
  var WORD = /[\w$]+|[\u4E00-\u9FFF$]+/, RANGE = 500;

  CodeMirror.registerHelper("hint", "anyword", function(editor, options) {
    var word = options && options.word || WORD;
    var range = options && options.range || RANGE;
    var cur = editor.getCursor(), curLine = editor.getLine(cur.line);
    var end = cur.ch, start = end;
    while (start && word.test(curLine.charAt(start - 1))) --start;
    var curWord = start != end && curLine.slice(start, end);

    var list = options && options.list || [], seen = {};
    var re = new RegExp(word.source, "g");
    for (var dir = -1; dir <= 1; dir += 2) {
      var line = cur.line, endLine = Math.min(Math.max(line + dir * range, editor.firstLine()), editor.lastLine()) + dir;
      for (; line != endLine; line += dir) {
        var text = editor.getLine(line), m;
        while (m = re.exec(text)) {
          if (line == cur.line && m[0] === curWord) continue;
          if ((!curWord || m[0].lastIndexOf(curWord, 0) == 0) && !Object.prototype.hasOwnProperty.call(seen, m[0])) {
            seen[m[0]] = true;
            list.push(m[0]);
          }
        }
      }
    }
    return {list: list, from: CodeMirror.Pos(cur.line, start), to: CodeMirror.Pos(cur.line, end)};
  });
});


/***/ }),

/***/ "./src/components/CodeMirrorEditor/vendors/codemirror.config.webpack.js":
/*!******************************************************************************!*\
  !*** ./src/components/CodeMirrorEditor/vendors/codemirror.config.webpack.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var js_beautify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-beautify */ "./node_modules/js-beautify/js/index.js");
/* harmony import */ var js_beautify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_beautify__WEBPACK_IMPORTED_MODULE_0__);


let extraKeys = {
  "Ctrl-F": 'none',
  "Ctrl-Shift-F": 'none',
  "Ctrl-H": 'none',
  "Ctrl-Shift-Q": 'none',
  "Ctrl-S": 'none',
  "Ctrl-Alt-F": function (cm) {
    let mode = cm.getOption('mode').name
    
    let process
    if (mode === 'javascript'
            || mode === 'text/javascript'
            || mode === 'application/json'
            || mode === 'application/ld+json'
            || mode === 'text/typescript'
            || mode === 'application/typescript') {
      process = js_beautify__WEBPACK_IMPORTED_MODULE_0___default.a.js_beautify
    }
    else if (mode === 'text/css'
            || mode === 'text/x-scss'
            || mode === 'text/x-less') {
      process = js_beautify__WEBPACK_IMPORTED_MODULE_0___default.a.css_beautify
    }
    else if (mode === 'text/html') {
      process = js_beautify__WEBPACK_IMPORTED_MODULE_0___default.a.html_beautify
    }
    //console.log()
    
    let selection = cm.getSelection()
    if (selection === '') {
      cm.execCommand('selectAll')
      selection = cm.getSelection()
    }
    selection = process(selection)
    //selection = selection + 'AAA'
    cm.replaceSelection(selection);
    
    //console.log('aaa')
  },
  "Ctrl-.": "autocomplete",
  "Tab": function (cm) {
    cm.replaceSelection("  ", "end");
  }
}

let options = {
  lineNumbers: true,
  lineWrapping: true,
  matchBrackets: true,
  autoCloseBrackets: true,
  matchTags: true,
  autoCloseTags: true,
  foldGutter: true,
  showMatchesOnScrollbar: true,
  lint: {
    esversion: 9,
    "asi": true,
  },
  gutters: ["CodeMirror-lint-markers", "CodeMirror-linenumbers", "CodeMirror-foldgutter"],
  mode: {name: "javascript", globalVars: true},
  //mode:  "javascript",
  extraKeys: extraKeys,
  styleActiveLine: true,
  continueComments: {
    continueLineComment: true
  },
  hintOptions: {
    alignWithWord: false,
    completeSingle: false,
  }
}

/* harmony default export */ __webpack_exports__["default"] = (options);

/***/ }),

/***/ "./src/components/CodeMirrorEditor/vendors/codemirror.mode-util.webpack.js":
/*!*********************************************************************************!*\
  !*** ./src/components/CodeMirrorEditor/vendors/codemirror.mode-util.webpack.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  getMode: function (mode, useFilter) {
    if (useFilter) {
      if (mode === 'javascript'
              || mode === 'text/javascript'
              || mode === 'application/json'
              || mode === 'application/ld+json'
              || mode === 'text/typescript'
              || mode === 'application/typescript') {
        mode = 'javascript'
      } else if (mode === 'text/css'
              || mode === 'text/x-scss'
              || mode === 'text/x-less') {
        mode = 'css'
      } else if (mode === 'text/html'
              || mode === 'application/xml') {
        mode = 'html'
      }
    }
    return mode
  },
  getModeFromFilename: function (filename) {
    let ext = filename.slice(filename.lastIndexOf('.') + 1).toLowerCase()

    if (ext === 'txt') {
      return 'text/plain'
    } else if (ext === 'js') {
      return 'text/javascript'
    } else if (ext === 'css' || ext === 'less') {
      return 'text/css'
    } else if (ext === 'html' || ext === 'htm' || ext === 'xml' || ext === 'svg') {
      return 'text/html'
    } else if (ext === 'c') {
      return 'text/x-c++src'
    } else if (ext === 'java') {
      return 'text/x-java'
    } else if (ext === 'perl') {
      return 'text/x-perl'
    } else if (ext === 'php') {
      return 'application/x-httpd-php'
    } else if (ext === 'py') {
      return 'text/x-python'
    } else if (ext === 'md') {
      return 'text/x-markdown'
    } else if (ext === 'r') {
      return 'text/x-rsrc'
    } else if (ext === 'sh') {
      return 'text/x-sh'
    } else if (ext === 'yaml') {
      return 'text/x-yaml'
    }
    return 'text/plain'
  },
  getModeSelectOptions: function () {
    return [
      {value: "text/plain", text: "Txt"},
      {value: "text/javascript", text: "JavaScript"},
      {value: "text/css", text: "CSS / LESS"},
      {value: "text/html", text: "HTML / XML / SVG"},
      {value: "text/x-markdown", text: "Markdown"},
      {value: "text/x-c++src", text: "C / C++"},
      {value: "text/x-csharp", text: "C#"},
      {value: "text/x-java", text: "Java"},
      {value: "text/x-perl", text: "Perl"},
      {value: "application/x-httpd-php", text: "PHP"},
      {value: "text/x-python", text: "Python"},
      {value: "text/x-rsrc", text: "R"},
      {value: "text/x-sh", text: "Linux Shell"},
      {value: "text/x-yaml", text: "YAML"},
    ]
  },
  getExtFromMode: function (mode) {
    
    let ext = 'txt'
    if (mode.indexOf('/') > -1) {
      ext = mode.slice(mode.lastIndexOf('/') + 1)
      
      if (ext.indexOf('-') > -1) {
        ext = ext.slice(ext.lastIndexOf('-') + 1)
      }
    }
    else {
      ext = mode
    }
    
    if (ext === 'javascript') {
      ext = 'js'
    }
    else if (ext === 'rsrc') {
      ext = 'R'
    }
    else if (ext === 'plain') {
      ext = 'txt'
    }
    else if (ext === 'markdown') {
      ext = 'md'
    }
    
    return ext
  }
});

/***/ }),

/***/ "./src/components/CodeMirrorEditor/vendors/codemirror.webpack.js":
/*!***********************************************************************!*\
  !*** ./src/components/CodeMirrorEditor/vendors/codemirror.webpack.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_codemirror__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-codemirror */ "./node_modules/vue-codemirror/dist/vue-codemirror.js");
/* harmony import */ var vue_codemirror__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_codemirror__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var codemirror_lib_codemirror_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! codemirror/lib/codemirror.css */ "./node_modules/codemirror/lib/codemirror.css");
/* harmony import */ var codemirror_lib_codemirror_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(codemirror_lib_codemirror_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var codemirror_addon_search_matchesonscrollbar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! codemirror/addon/search/matchesonscrollbar.js */ "./node_modules/codemirror/addon/search/matchesonscrollbar.js");
/* harmony import */ var codemirror_addon_search_matchesonscrollbar_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_search_matchesonscrollbar_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var codemirror_addon_search_searchcursor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! codemirror/addon/search/searchcursor.js */ "./node_modules/codemirror/addon/search/searchcursor.js");
/* harmony import */ var codemirror_addon_search_searchcursor_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_search_searchcursor_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var codemirror_addon_fold_foldcode_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! codemirror/addon/fold/foldcode.js */ "./node_modules/codemirror/addon/fold/foldcode.js");
/* harmony import */ var codemirror_addon_fold_foldcode_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_fold_foldcode_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var codemirror_addon_fold_foldgutter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! codemirror/addon/fold/foldgutter.js */ "./node_modules/codemirror/addon/fold/foldgutter.js");
/* harmony import */ var codemirror_addon_fold_foldgutter_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_fold_foldgutter_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var codemirror_addon_fold_foldgutter_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! codemirror/addon/fold/foldgutter.css */ "./node_modules/codemirror/addon/fold/foldgutter.css");
/* harmony import */ var codemirror_addon_fold_foldgutter_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_fold_foldgutter_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var codemirror_addon_fold_brace_fold_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! codemirror/addon/fold/brace-fold.js */ "./node_modules/codemirror/addon/fold/brace-fold.js");
/* harmony import */ var codemirror_addon_fold_brace_fold_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_fold_brace_fold_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var codemirror_addon_fold_xml_fold_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! codemirror/addon/fold/xml-fold.js */ "./node_modules/codemirror/addon/fold/xml-fold.js");
/* harmony import */ var codemirror_addon_fold_xml_fold_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_fold_xml_fold_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var codemirror_addon_fold_indent_fold_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! codemirror/addon/fold/indent-fold.js */ "./node_modules/codemirror/addon/fold/indent-fold.js");
/* harmony import */ var codemirror_addon_fold_indent_fold_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_fold_indent_fold_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var codemirror_addon_fold_markdown_fold_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! codemirror/addon/fold/markdown-fold.js */ "./node_modules/codemirror/addon/fold/markdown-fold.js");
/* harmony import */ var codemirror_addon_fold_markdown_fold_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_fold_markdown_fold_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var codemirror_addon_fold_comment_fold_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! codemirror/addon/fold/comment-fold.js */ "./node_modules/codemirror/addon/fold/comment-fold.js");
/* harmony import */ var codemirror_addon_fold_comment_fold_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_fold_comment_fold_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var codemirror_addon_edit_matchbrackets_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! codemirror/addon/edit/matchbrackets.js */ "./node_modules/codemirror/addon/edit/matchbrackets.js");
/* harmony import */ var codemirror_addon_edit_matchbrackets_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_edit_matchbrackets_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var codemirror_addon_edit_closebrackets_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! codemirror/addon/edit/closebrackets.js */ "./node_modules/codemirror/addon/edit/closebrackets.js");
/* harmony import */ var codemirror_addon_edit_closebrackets_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_edit_closebrackets_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var codemirror_addon_edit_matchtags_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! codemirror/addon/edit/matchtags.js */ "./node_modules/codemirror/addon/edit/matchtags.js");
/* harmony import */ var codemirror_addon_edit_matchtags_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_edit_matchtags_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var codemirror_addon_edit_closetag_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! codemirror/addon/edit/closetag.js */ "./node_modules/codemirror/addon/edit/closetag.js");
/* harmony import */ var codemirror_addon_edit_closetag_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_edit_closetag_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var codemirror_addon_hint_show_hint_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! codemirror/addon/hint/show-hint.js */ "./node_modules/codemirror/addon/hint/show-hint.js");
/* harmony import */ var codemirror_addon_hint_show_hint_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_hint_show_hint_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var codemirror_addon_hint_show_hint_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! codemirror/addon/hint/show-hint.css */ "./node_modules/codemirror/addon/hint/show-hint.css");
/* harmony import */ var codemirror_addon_hint_show_hint_css__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_hint_show_hint_css__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var codemirror_addon_hint_javascript_hint_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! codemirror/addon/hint/javascript-hint.js */ "./node_modules/codemirror/addon/hint/javascript-hint.js");
/* harmony import */ var codemirror_addon_hint_javascript_hint_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_hint_javascript_hint_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var codemirror_addon_hint_html_hint_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! codemirror/addon/hint/html-hint.js */ "./node_modules/codemirror/addon/hint/html-hint.js");
/* harmony import */ var codemirror_addon_hint_html_hint_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_hint_html_hint_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var codemirror_addon_hint_css_hint_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! codemirror/addon/hint/css-hint.js */ "./node_modules/codemirror/addon/hint/css-hint.js");
/* harmony import */ var codemirror_addon_hint_css_hint_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_hint_css_hint_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _anyword_hint_chinese_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./anyword-hint-chinese.js */ "./src/components/CodeMirrorEditor/vendors/anyword-hint-chinese.js");
/* harmony import */ var _anyword_hint_chinese_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_anyword_hint_chinese_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var codemirror_addon_hint_sql_hint_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! codemirror/addon/hint/sql-hint.js */ "./node_modules/codemirror/addon/hint/sql-hint.js");
/* harmony import */ var codemirror_addon_hint_sql_hint_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_hint_sql_hint_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var codemirror_addon_lint_lint_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! codemirror/addon/lint/lint.js */ "./node_modules/codemirror/addon/lint/lint.js");
/* harmony import */ var codemirror_addon_lint_lint_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_lint_lint_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var codemirror_addon_lint_lint_css__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! codemirror/addon/lint/lint.css */ "./node_modules/codemirror/addon/lint/lint.css");
/* harmony import */ var codemirror_addon_lint_lint_css__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_lint_lint_css__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var codemirror_addon_lint_javascript_lint_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! codemirror/addon/lint/javascript-lint.js */ "./node_modules/codemirror/addon/lint/javascript-lint.js");
/* harmony import */ var codemirror_addon_lint_javascript_lint_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_lint_javascript_lint_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var codemirror_addon_lint_yaml_lint_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! codemirror/addon/lint/yaml-lint.js */ "./node_modules/codemirror/addon/lint/yaml-lint.js");
/* harmony import */ var codemirror_addon_lint_yaml_lint_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_lint_yaml_lint_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var codemirror_addon_lint_html_lint_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! codemirror/addon/lint/html-lint.js */ "./node_modules/codemirror/addon/lint/html-lint.js");
/* harmony import */ var codemirror_addon_lint_html_lint_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_lint_html_lint_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var codemirror_addon_lint_json_lint_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! codemirror/addon/lint/json-lint.js */ "./node_modules/codemirror/addon/lint/json-lint.js");
/* harmony import */ var codemirror_addon_lint_json_lint_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_lint_json_lint_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var codemirror_addon_lint_css_lint_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! codemirror/addon/lint/css-lint.js */ "./node_modules/codemirror/addon/lint/css-lint.js");
/* harmony import */ var codemirror_addon_lint_css_lint_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_lint_css_lint_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var jshint__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! jshint */ "./node_modules/jshint/src/jshint.js");
/* harmony import */ var jshint__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(jshint__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var csslint__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! csslint */ "./node_modules/csslint/dist/csslint-node.js");
/* harmony import */ var csslint__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(csslint__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var jsonlint_webpack__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! jsonlint-webpack */ "./node_modules/jsonlint-webpack/lib/jsonlint.js");
/* harmony import */ var jsonlint_webpack__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(jsonlint_webpack__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! js-yaml */ "./node_modules/js-yaml/index.js");
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(js_yaml__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var codemirror_mode_javascript_javascript_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! codemirror/mode/javascript/javascript.js */ "./node_modules/codemirror/mode/javascript/javascript.js");
/* harmony import */ var codemirror_mode_javascript_javascript_js__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_javascript_javascript_js__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var codemirror_mode_php_php_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! codemirror/mode/php/php.js */ "./node_modules/codemirror/mode/php/php.js");
/* harmony import */ var codemirror_mode_php_php_js__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_php_php_js__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var codemirror_mode_css_css_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! codemirror/mode/css/css.js */ "./node_modules/codemirror/mode/css/css.js");
/* harmony import */ var codemirror_mode_css_css_js__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_css_css_js__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var codemirror_mode_sql_sql_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! codemirror/mode/sql/sql.js */ "./node_modules/codemirror/mode/sql/sql.js");
/* harmony import */ var codemirror_mode_sql_sql_js__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_sql_sql_js__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var codemirror_mode_perl_perl_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! codemirror/mode/perl/perl.js */ "./node_modules/codemirror/mode/perl/perl.js");
/* harmony import */ var codemirror_mode_perl_perl_js__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_perl_perl_js__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var codemirror_mode_clike_clike_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! codemirror/mode/clike/clike.js */ "./node_modules/codemirror/mode/clike/clike.js");
/* harmony import */ var codemirror_mode_clike_clike_js__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_clike_clike_js__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var codemirror_mode_python_python_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! codemirror/mode/python/python.js */ "./node_modules/codemirror/mode/python/python.js");
/* harmony import */ var codemirror_mode_python_python_js__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_python_python_js__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var codemirror_mode_markdown_markdown_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! codemirror/mode/markdown/markdown.js */ "./node_modules/codemirror/mode/markdown/markdown.js");
/* harmony import */ var codemirror_mode_markdown_markdown_js__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_markdown_markdown_js__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var codemirror_mode_yaml_yaml_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! codemirror/mode/yaml/yaml.js */ "./node_modules/codemirror/mode/yaml/yaml.js");
/* harmony import */ var codemirror_mode_yaml_yaml_js__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_yaml_yaml_js__WEBPACK_IMPORTED_MODULE_42__);
/* harmony import */ var codemirror_mode_xml_xml_js__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! codemirror/mode/xml/xml.js */ "./node_modules/codemirror/mode/xml/xml.js");
/* harmony import */ var codemirror_mode_xml_xml_js__WEBPACK_IMPORTED_MODULE_43___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_xml_xml_js__WEBPACK_IMPORTED_MODULE_43__);
/* harmony import */ var codemirror_mode_htmlembedded_htmlembedded_js__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! codemirror/mode/htmlembedded/htmlembedded.js */ "./node_modules/codemirror/mode/htmlembedded/htmlembedded.js");
/* harmony import */ var codemirror_mode_htmlembedded_htmlembedded_js__WEBPACK_IMPORTED_MODULE_44___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_htmlembedded_htmlembedded_js__WEBPACK_IMPORTED_MODULE_44__);
/* harmony import */ var codemirror_mode_htmlmixed_htmlmixed_js__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! codemirror/mode/htmlmixed/htmlmixed.js */ "./node_modules/codemirror/mode/htmlmixed/htmlmixed.js");
/* harmony import */ var codemirror_mode_htmlmixed_htmlmixed_js__WEBPACK_IMPORTED_MODULE_45___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_htmlmixed_htmlmixed_js__WEBPACK_IMPORTED_MODULE_45__);
/* harmony import */ var codemirror_addon_selection_active_line_js__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! codemirror/addon/selection/active-line.js */ "./node_modules/codemirror/addon/selection/active-line.js");
/* harmony import */ var codemirror_addon_selection_active_line_js__WEBPACK_IMPORTED_MODULE_46___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_selection_active_line_js__WEBPACK_IMPORTED_MODULE_46__);
/* harmony import */ var codemirror_addon_comment_continuecomment_js__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! codemirror/addon/comment/continuecomment.js */ "./node_modules/codemirror/addon/comment/continuecomment.js");
/* harmony import */ var codemirror_addon_comment_continuecomment_js__WEBPACK_IMPORTED_MODULE_47___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_comment_continuecomment_js__WEBPACK_IMPORTED_MODULE_47__);


// import base style


// search



// fold









// match close





// hints









// lint









if (!jshint__WEBPACK_IMPORTED_MODULE_30__["JSHINT"].options) {
  jshint__WEBPACK_IMPORTED_MODULE_30__["JSHINT"].options = {}
}

jshint__WEBPACK_IMPORTED_MODULE_30__["JSHINT"].options.esversion = 6

window.JSHINT = jshint__WEBPACK_IMPORTED_MODULE_30__["JSHINT"]



window.CSSLint = csslint__WEBPACK_IMPORTED_MODULE_31__["CSSLint"]


window.jsonlint = jsonlint_webpack__WEBPACK_IMPORTED_MODULE_32___default.a


window.jsyaml = js_yaml__WEBPACK_IMPORTED_MODULE_33___default.a

// modes














// edit



// autoformat


/* harmony default export */ __webpack_exports__["default"] = (vue_codemirror__WEBPACK_IMPORTED_MODULE_0__["codemirror"]);

/***/ })

}]);
//# sourceMappingURL=CodeMirror.js.map