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
exports.push([module.i, ".code-mirror-wrapper[data-v-6cc6c822] {\n  opacity: 0;\n  transition: opacity 0.5s;\n}\n.code-mirror-wrapper.inited[data-v-6cc6c822] {\n  opacity: 1;\n}\ntextarea.editor[data-v-6cc6c822] {\n  display: none;\n  height: 100vh !important;\n  width: 100% !important;\n  width: 100vw;\n  height: 100vh;\n  line-height: 2.3rem;\n  font-size: 1.5rem;\n  padding: 0.5rem;\n  border: none;\n  overflow: auto;\n  outline: none;\n  -webkit-box-shadow: none;\n  -moz-box-shadow: none;\n  box-shadow: none;\n  resize: none;\n  /*remove the resize handle on the bottom right*/\n}\ntextarea.editor.disable-wrap[data-v-6cc6c822] {\n  white-space: nowrap;\n}\n", "",{"version":3,"sources":["CodeMirrorEditor.less"],"names":[],"mappings":"AAAA;EACE,UAAU;EACV,wBAAwB;AAC1B;AACA;EACE,UAAU;AACZ;AACA;EACE,aAAa;EACb,wBAAwB;EACxB,sBAAsB;EACtB,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,iBAAiB;EACjB,eAAe;EACf,YAAY;EACZ,cAAc;EACd,aAAa;EACb,wBAAwB;EACxB,qBAAqB;EACrB,gBAAgB;EAChB,YAAY;EACZ,+CAA+C;AACjD;AACA;EACE,mBAAmB;AACrB","file":"CodeMirrorEditor.less","sourcesContent":[".code-mirror-wrapper[data-v-6cc6c822] {\n  opacity: 0;\n  transition: opacity 0.5s;\n}\n.code-mirror-wrapper.inited[data-v-6cc6c822] {\n  opacity: 1;\n}\ntextarea.editor[data-v-6cc6c822] {\n  display: none;\n  height: 100vh !important;\n  width: 100% !important;\n  width: 100vw;\n  height: 100vh;\n  line-height: 2.3rem;\n  font-size: 1.5rem;\n  padding: 0.5rem;\n  border: none;\n  overflow: auto;\n  outline: none;\n  -webkit-box-shadow: none;\n  -moz-box-shadow: none;\n  box-shadow: none;\n  resize: none;\n  /*remove the resize handle on the bottom right*/\n}\ntextarea.editor.disable-wrap[data-v-6cc6c822] {\n  white-space: nowrap;\n}\n"]}]);
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
exports.push([module.i, ".CodeMirror {\n  font-family: 'Roboto', sans-serif !important;\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\n.CodeMirror .highlight {\n  background-color: rgba(255, 255, 0, 0.5);\n}\n", "",{"version":3,"sources":["CodeMirrorEditorGlobal.less"],"names":[],"mappings":"AAAA;EACE,4CAA4C;EAC5C,iBAAiB;EACjB,iBAAiB;AACnB;AACA;EACE,wCAAwC;AAC1C","file":"CodeMirrorEditorGlobal.less","sourcesContent":[".CodeMirror {\n  font-family: 'Roboto', sans-serif !important;\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\n.CodeMirror .highlight {\n  background-color: rgba(255, 255, 0, 0.5);\n}\n"]}]);
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
    { staticClass: "code-mirror-wrapper", class: { inited: _vm.inited } },
    [
      _vm.simpleMode
        ? _c("textarea", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.localConfig.textContent,
                expression: "localConfig.textContent"
              }
            ],
            ref: "MainTextarea",
            staticClass: "editor",
            domProps: { value: _vm.localConfig.textContent },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.localConfig, "textContent", $event.target.value)
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
              viewportChange: _vm.onCodeMirrorCursorActivity
            },
            model: {
              value: _vm.code,
              callback: function($$v) {
                _vm.code = $$v
              },
              expression: "code"
            }
          })
        : _vm._e()
    ],
    1
  )
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
/* harmony import */ var _CodeMirrorEditorData_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CodeMirrorEditorData.js */ "./src/components/CodeMirrorEditor/CodeMirrorEditorData.js");
/* harmony import */ var _CodeMirrorEditorComputed_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CodeMirrorEditorComputed.js */ "./src/components/CodeMirrorEditor/CodeMirrorEditorComputed.js");
/* harmony import */ var _CodeMirrorEditorWatch_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CodeMirrorEditorWatch.js */ "./src/components/CodeMirrorEditor/CodeMirrorEditorWatch.js");
/* harmony import */ var _CodeMirrorEditorMethodsOption_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CodeMirrorEditorMethodsOption.js */ "./src/components/CodeMirrorEditor/CodeMirrorEditorMethodsOption.js");
/* harmony import */ var _CodeMirrorEditorMethodsChange_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CodeMirrorEditorMethodsChange.js */ "./src/components/CodeMirrorEditor/CodeMirrorEditorMethodsChange.js");
/* harmony import */ var _CodeMirrorEditorMethodsAutoFormat_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CodeMirrorEditorMethodsAutoFormat.js */ "./src/components/CodeMirrorEditor/CodeMirrorEditorMethodsAutoFormat.js");
/* harmony import */ var _CodeMirrorEditorMethodsCursor_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CodeMirrorEditorMethodsCursor.js */ "./src/components/CodeMirrorEditor/CodeMirrorEditorMethodsCursor.js");
/* harmony import */ var _CodeMirrorEditorMethodsFind_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CodeMirrorEditorMethodsFind.js */ "./src/components/CodeMirrorEditor/CodeMirrorEditorMethodsFind.js");
/* harmony import */ var _CodeMirrorEditorMethodsDisplay_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CodeMirrorEditorMethodsDisplay.js */ "./src/components/CodeMirrorEditor/CodeMirrorEditorMethodsDisplay.js");
/* global CodeMirror, PULI_UTILS */



let CodeMirrorEditor = {
  props: ['config', 'localConfig', 'utils'],
  data: null,
  components: {
    codemirror: _vendors_codemirror_webpack_js__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
//  mounted: async function () {
//    //console.log(this.inited)
//    //await this.initCodeMirror()
//    //await this.onConfigInited()
//    //console.log(this.inited)
//    //this.testSearch1211()
//    //this.testSetValue1211()
//    //this.testSearch1213()
//  },
  watch: {}, // 移動到 CodeMirrorEditorWatch
  computed: {}, // 移動到 CodeMirrorEditorComputed.js
  methods: {
    
    onConfigInited: async function () {
      console.log('onConfigInited', 1)
      
      //console.log(this.config.inited)
      if (this.config.inited === false
              || this.simpleMode === true) {
        return false
      }
      
      console.log('onConfigInited', 2)
      //await this.utils.AsyncUtils.sleep(1000)
      //console.log('javascript')
      //this.codemirror.setOption("mode", 'html')
      
      //await this.utils.AsyncUtils.sleep(100)
      this.changeLock = true
      this.code = this.localConfig.textContent
      await this.utils.AsyncUtils.sleep(0)
      this.changeLock = false
      
      console.log('onConfigInited', 3)
      
      while (!this.$refs.cmEditor || !this.$refs.cmEditor.$el) {
        await this.utils.AsyncUtils.sleep()
      }
      
      console.log('onConfigInited', 4)
      
      //console.log('go', this.localConfig.stringToSearch)
      this.highlightText(this.localConfig.stringToSearch)
      this.resizeHeight()
      //console.log(this.markers.length)
      
      this.updateDocumentTitle()
      this.restoreCursorPosition()
      
      console.log('onConfigInited', 5)
      
      this.inited = true
    },
    
    onCodeMirrorKeyHandled (e, s) {
      //console.log(e, s)
      //this.$refs.cmEditor.codemirror.execCommand('autocomplete')
      this.$refs.cmEditor.codemirror.showHint()
      
    }
  }
}


Object(_CodeMirrorEditorData_js__WEBPACK_IMPORTED_MODULE_2__["default"])(CodeMirrorEditor)


Object(_CodeMirrorEditorComputed_js__WEBPACK_IMPORTED_MODULE_3__["default"])(CodeMirrorEditor)


Object(_CodeMirrorEditorWatch_js__WEBPACK_IMPORTED_MODULE_4__["default"])(CodeMirrorEditor)

// -------------------


Object(_CodeMirrorEditorMethodsOption_js__WEBPACK_IMPORTED_MODULE_5__["default"])(CodeMirrorEditor)


Object(_CodeMirrorEditorMethodsChange_js__WEBPACK_IMPORTED_MODULE_6__["default"])(CodeMirrorEditor)


Object(_CodeMirrorEditorMethodsAutoFormat_js__WEBPACK_IMPORTED_MODULE_7__["default"])(CodeMirrorEditor)


Object(_CodeMirrorEditorMethodsCursor_js__WEBPACK_IMPORTED_MODULE_8__["default"])(CodeMirrorEditor)


Object(_CodeMirrorEditorMethodsFind_js__WEBPACK_IMPORTED_MODULE_9__["default"])(CodeMirrorEditor)


Object(_CodeMirrorEditorMethodsDisplay_js__WEBPACK_IMPORTED_MODULE_10__["default"])(CodeMirrorEditor)

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
  CodeMirrorEditor.computed = {
//    editor () {
//      return this.$refs.cmEditor
//    },
    computedCodeMirrorOptions() {

      let options = {
        ..._vendors_codemirror_config_webpack_js__WEBPACK_IMPORTED_MODULE_1__["default"]
      }

      options.extraKeys['Ctrl-Alt-F'] = (cm) => {
        this.autoFormat(cm)
      }

      //console.log(options)

      return options
    },
    editor$el() {
      //console.log(this.$refs.cmEditor.$el)
      if (!this.$refs.cmEditor) {
        return undefined
      }

      return jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.$refs.cmEditor.$el).find('.CodeMirror:first')
    },
    editorScroll$el () {
      //console.log(this.$refs.cmEditor.$el)
      if (!this.$refs.cmEditor) {
        return undefined
      }

      return jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.$refs.cmEditor.$el).find('.CodeMirror:first .CodeMirror-scroll:first')
    },
    codemirror() {
      if (!this.$refs.cmEditor) {
        return undefined
      }
      return this.$refs.cmEditor.codemirror
    }
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
    this.$i18n.locale = this.config.locale
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

/***/ "./src/components/CodeMirrorEditor/CodeMirrorEditorMethodsAutoFormat.js":
/*!******************************************************************************!*\
  !*** ./src/components/CodeMirrorEditor/CodeMirrorEditorMethodsAutoFormat.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var js_beautify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-beautify */ "./node_modules/js-beautify/js/index.js");
/* harmony import */ var js_beautify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_beautify__WEBPACK_IMPORTED_MODULE_0__);


/* harmony default export */ __webpack_exports__["default"] = (function (CodeMirrorEditor) {
  CodeMirrorEditor.methods.autoFormat = function (cm) {
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
    selection = process(selection, {
      indent_size: this.localConfig.indent.size
    })
    //selection = selection + 'AAA'
    cm.replaceSelection(selection);
    
    //console.log('aaa')
  }
});

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
    let textContentTrim = this.$parent.textContentTrim
    if (textContentTrim === '') {
      document.title = 'Plain Text Editor'
    } else {
      document.title = textContentTrim
    }
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
  CodeMirrorEditor.methods.onCodeMirrorCursorActivity = function () {
    this.saveCursorPosition()
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
    console.log('saveCursorPosition')
  }
  CodeMirrorEditor.methods.restoreCursorPosition = function () {
    console.log('restoreCursorPosition', this.config.inited, this.cursorPositionSaved.from)
    if (this.simpleMode === true
            || this.config.inited === false) {
      return false
    }

    
    if (this.cursorPositionSaved.from.line === null) {
      let saved = localStorage.getItem(cursorPositionKey)
      this.cursorPositionSaved = JSON.parse(saved)
      //console.log(saved)
    }

    if (this.cursorPositionSaved.from.line === this.cursorPositionSaved.to.line
            && this.cursorPositionSaved.from.ch === this.cursorPositionSaved.to.ch) {
      this.jumpToLine(this.cursorPositionSaved.from.line + 1, this.cursorPositionSaved.from.ch)

      console.log('restoreCursor cursor')
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
      console.log('restoreCursor selection')
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

/***/ "./src/components/CodeMirrorEditor/CodeMirrorEditorMethodsOption.js":
/*!**************************************************************************!*\
  !*** ./src/components/CodeMirrorEditor/CodeMirrorEditorMethodsOption.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (CodeMirrorEditor) {
  CodeMirrorEditor.methods.getMode = function () {
    let cm = this.codemirror
    let mode = cm.getOption('mode').name
    
    if (mode === 'javascript'
            || mode === 'text/javascript'
            || mode === 'application/json'
            || mode === 'application/ld+json'
            || mode === 'text/typescript'
            || mode === 'application/typescript') {
      mode = 'javascript'
    }
    else if (mode === 'text/css'
            || mode === 'text/x-scss'
            || mode === 'text/x-less') {
      mode = 'css'
    }
    else if (mode === 'text/html') {
      mode = 'html'
    }
    return mode
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
      this.onConfigInited()
    },
    'config.panelHeight'() {
      this.resizeHeight()
    },
    'localConfig.stringToSearch'() {
      this.highlightText()
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
/* harmony import */ var codemirror_addon_hint_anyword_hint_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! codemirror/addon/hint/anyword-hint.js */ "./node_modules/codemirror/addon/hint/anyword-hint.js");
/* harmony import */ var codemirror_addon_hint_anyword_hint_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_hint_anyword_hint_js__WEBPACK_IMPORTED_MODULE_21__);
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
/* harmony import */ var codemirror_mode_javascript_javascript_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! codemirror/mode/javascript/javascript.js */ "./node_modules/codemirror/mode/javascript/javascript.js");
/* harmony import */ var codemirror_mode_javascript_javascript_js__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_javascript_javascript_js__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var codemirror_mode_php_php_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! codemirror/mode/php/php.js */ "./node_modules/codemirror/mode/php/php.js");
/* harmony import */ var codemirror_mode_php_php_js__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_php_php_js__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var codemirror_mode_css_css_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! codemirror/mode/css/css.js */ "./node_modules/codemirror/mode/css/css.js");
/* harmony import */ var codemirror_mode_css_css_js__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_css_css_js__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var codemirror_mode_sql_sql_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! codemirror/mode/sql/sql.js */ "./node_modules/codemirror/mode/sql/sql.js");
/* harmony import */ var codemirror_mode_sql_sql_js__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_sql_sql_js__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var codemirror_mode_yaml_yaml_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! codemirror/mode/yaml/yaml.js */ "./node_modules/codemirror/mode/yaml/yaml.js");
/* harmony import */ var codemirror_mode_yaml_yaml_js__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_yaml_yaml_js__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var codemirror_mode_xml_xml_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! codemirror/mode/xml/xml.js */ "./node_modules/codemirror/mode/xml/xml.js");
/* harmony import */ var codemirror_mode_xml_xml_js__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_xml_xml_js__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var codemirror_mode_htmlembedded_htmlembedded_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! codemirror/mode/htmlembedded/htmlembedded.js */ "./node_modules/codemirror/mode/htmlembedded/htmlembedded.js");
/* harmony import */ var codemirror_mode_htmlembedded_htmlembedded_js__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_htmlembedded_htmlembedded_js__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var codemirror_mode_htmlmixed_htmlmixed_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! codemirror/mode/htmlmixed/htmlmixed.js */ "./node_modules/codemirror/mode/htmlmixed/htmlmixed.js");
/* harmony import */ var codemirror_mode_htmlmixed_htmlmixed_js__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_htmlmixed_htmlmixed_js__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var codemirror_addon_selection_active_line_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! codemirror/addon/selection/active-line.js */ "./node_modules/codemirror/addon/selection/active-line.js");
/* harmony import */ var codemirror_addon_selection_active_line_js__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_selection_active_line_js__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var codemirror_addon_comment_continuecomment_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! codemirror/addon/comment/continuecomment.js */ "./node_modules/codemirror/addon/comment/continuecomment.js");
/* harmony import */ var codemirror_addon_comment_continuecomment_js__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_comment_continuecomment_js__WEBPACK_IMPORTED_MODULE_42__);


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

// modes









// edit



// autoformat


/* harmony default export */ __webpack_exports__["default"] = (vue_codemirror__WEBPACK_IMPORTED_MODULE_0__["codemirror"]);

/***/ })

}]);
//# sourceMappingURL=CodeMirror.js.map