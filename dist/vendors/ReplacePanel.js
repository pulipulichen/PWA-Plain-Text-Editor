(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors/ReplacePanel"],{

/***/ "./node_modules/@kazupon/vue-i18n-loader/lib/index.js!./src/components/ReplacePanel/ReplacePanel.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=D%3A%5Cxampp%5Chtdocs%5Cprojects-html5%5CPWA-Plain-Text-Editor%5Csrc%5Ccomponents%5CReplacePanel%5CReplacePanel.vue&lang=yaml":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@kazupon/vue-i18n-loader/lib!./src/components/ReplacePanel/ReplacePanel.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=D%3A%5Cxampp%5Chtdocs%5Cprojects-html5%5CPWA-Plain-Text-Editor%5Csrc%5Ccomponents%5CReplacePanel%5CReplacePanel.vue&lang=yaml ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (Component) {
  Component.options.__i18n = Component.options.__i18n || []
  Component.options.__i18n.push('{"en":{"TEST_MESSAGE":"Test Message"},"zh-TW":{"TEST_MESSAGE":"測試訊息"}}')
  delete Component.options._Ctor
}


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./src/components/ReplacePanel/ReplacePanel.less?vue&type=style&index=0&id=8d37a762&lang=less&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js??ref--1-2!./src/components/ReplacePanel/ReplacePanel.less?vue&type=style&index=0&id=8d37a762&lang=less&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".replace-panel[data-v-8d37a762] {\n  background-color: #e1f7f7;\n  border-top: 1px solid #10a3a3;\n  padding-bottom: 0.5rem;\n  height: 10.5rem;\n  position: fixed !important;\n  bottom: 0;\n  width: 100vw;\n  left: 0;\n  z-index: 9;\n}\n.replace-panel .close-icon[data-v-8d37a762] {\n  float: right;\n  cursor: pointer;\n}\n.replace-panel .field[data-v-8d37a762] {\n  clear: none !important;\n}\n.replace-panel label[data-v-8d37a762] {\n  width: 6rem !important;\n  display: inline-block;\n  text-align: right;\n  user-select: none;\n  cursor: pointer !important;\n}\n.replace-panel .string-to-search-input[data-v-8d37a762] {\n  width: calc(100% - 6rem - 0rem - 1rem) !important;\n}\n.replace-panel .string-to-search-input-container[data-v-8d37a762] {\n  width: calc(100% - 6rem - 0rem - 2rem - 1px) !important;\n}\n.replace-panel .string-to-replace-with-input-container[data-v-8d37a762] {\n  width: calc(100% - 6rem - 0rem - 1rem - 1px) !important;\n}\n.replace-panel .string-to-replace-with-input-container .string-to-replace-with-input[data-v-8d37a762] {\n  width: calc(100% - 6rem - 0rem - 3rem - 9rem) !important;\n}\n.replace-panel .string-to-replace-with-input-container.has-replace-line-options-select .string-to-replace-with-input[data-v-8d37a762] {\n  width: calc(100% - 6rem - 0rem - 3rem - 9rem - 8rem) !important;\n}\n.replace-panel .string-to-replace-with-input-container.has-replace-line-options-select.has-undo-button .string-to-replace-with-input[data-v-8d37a762] {\n  width: calc(100% - 6rem - 0rem - 4rem - 2.5rem - 9rem - 8rem) !important;\n}\n.replace-panel .string-to-replace-with-input-container.has-undo-button .string-to-replace-with-input[data-v-8d37a762] {\n  width: calc(100% - 6rem - 0rem - 4rem - 2.5rem - 9rem) !important;\n}\n.replace-panel select[data-v-8d37a762] {\n  width: 8rem;\n  padding-top: 0 !important;\n  padding-bottom: 0 !important;\n  white-space: nowrap !important;\n}\n.replace-panel .ui.icon.input input[data-v-8d37a762] {\n  padding-right: 4.5rem !important;\n}\n.replace-panel .ui.icon.input i.icon[data-v-8d37a762] {\n  cursor: pointer;\n}\n.replace-panel .ui.icon.input i.icon[data-v-8d37a762]:not(:first-of-type) {\n  right: 2em !important;\n}\n.replace-panel .checkbox label[data-v-8d37a762] {\n  width: auto !important;\n}\n.replace-panel .replace-mode-select[data-v-8d37a762] {\n  width: 8rem !important;\n}\n.replace-panel .replace-line-options-select[data-v-8d37a762] {\n  width: 8rem !important;\n}\n.replace-panel .replace-count-button[data-v-8d37a762] {\n  width: 9rem;\n  max-width: 9rem;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  display: inline-block !important;\n  padding-left: 0.5rem !important;\n  padding-right: 0.5rem !important;\n}\n.inline.field[data-v-8d37a762] {\n  margin-top: 0.5rem !important;\n  margin-bottom: 0.5rem !important;\n}\n.format-tool-container .format-tool-select[data-v-8d37a762] {\n  width: 13rem;\n  border-bottom-right-radius: 0 !important;\n  border-top-right-radius: 0 !important;\n}\n.format-tool-container .button[data-v-8d37a762] {\n  border-bottom-left-radius: 0 !important;\n  border-top-left-radius: 0 !important;\n}\n", "",{"version":3,"sources":["D:/xampp/htdocs/projects-html5/PWA-Plain-Text-Editor/src/components/ReplacePanel/ReplacePanel.less?vue&type=style&index=0&id=8d37a762&lang=less&scoped=true&","ReplacePanel.less"],"names":[],"mappings":"AAAA;EAME,yBAAA;EACA,6BAAA;EAEA,sBAAA;EAEA,eAAA;EAEA,0BAAA;EACA,SAAA;EACA,YAAA;EACA,OAAA;EACA,UAAA;ACPF;ADVA;EAoBI,YAAA;EAEA,eAAA;ACRJ;ADdA;EA0BI,sBAAA;ACTJ;ADjBA;EA8BI,sBAAA;EACA,qBAAA;EACA,iBAAA;EACA,iBAAA;EACA,0BAAA;ACVJ;ADxBA;EAyCI,iDAAA;ACdJ;AD3BA;EA8CI,uDAAA;AChBJ;AD9BA;EAmDI,uDAAA;AClBJ;ADjCA;EAsDM,wDAAA;AClBN;ADqBI;EAII,+DAAA;ACtBR;ADyBM;EACE,wEAAA;ACvBR;AD2BI;EACE,iEAAA;ACzBN;AD7CA;EA2EI,WAAA;EACA,yBAAA;EACA,4BAAA;EACA,8BAAA;AC3BJ;ADnDA;EAmFM,gCAAA;AC7BN;ADtDA;EAuFM,eAAA;AC9BN;ADzDA;EA0FM,qBAAA;AC9BN;AD5DA;EA+FI,sBAAA;AChCJ;AD/DA;EAoGI,sBAAA;AClCJ;ADlEA;EAuGI,sBAAA;AClCJ;ADrEA;EA2GI,WAAA;EACA,eAAA;EACA,kBAAA;EACA,uBAAA;EACA,mBAAA;EACA,gCAAA;EAEA,+BAAA;EACA,gCAAA;ACpCJ;ADwCA;EACE,6BAAA;EACA,gCAAA;ACtCF;ADyCA;EAEI,YAAA;EACA,wCAAA;EACA,qCAAA;ACxCJ;ADoCA;EAQI,uCAAA;EACA,oCAAA;ACzCJ","file":"ReplacePanel.less","sourcesContent":[".replace-panel {\n  @labelWidth: 6rem;\n  @ReplaceModeSelectWidth: 8rem;\n  @ReplaceLineModeSelectWidth: 8rem;\n  @ReplaceButtonWidth: 9rem;\n  @UndoButtonWidth: 2.5rem;\n  background-color: #e1f7f7;\n  border-top: 1px solid #10a3a3;\n  //padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  \n  height: 10.5rem;\n  \n  position: fixed !important;\n  bottom: 0;\n  width: 100vw;\n  left: 0;\n  z-index: 9;\n  \n  .close-icon {\n    float: right;\n    //margin-top: 1rem;\n    cursor: pointer;\n  }\n  \n  .field {\n    clear: none !important; \n  }\n  \n  label {\n    width: @labelWidth !important;\n    display: inline-block;\n    text-align: right;\n    user-select: none;\n    cursor: pointer !important;\n  }\n  \n  //@closePanelIconWidth: 1rem;\n  @closePanelIconWidth: 0rem;\n  \n  .string-to-search-input {\n    width: calc(100% - @labelWidth - @closePanelIconWidth - 1rem) !important;\n    \n  }\n  \n  .string-to-search-input-container {\n    width: calc(100% - @labelWidth - @closePanelIconWidth - 2rem - 1px) !important;\n  }\n  \n  .string-to-replace-with-input-container {\n    \n    width: calc(100% - @labelWidth - @closePanelIconWidth - 1rem - 1px) !important;\n    \n    .string-to-replace-with-input {\n      width: calc(100% - @labelWidth - @closePanelIconWidth - 3rem - @ReplaceButtonWidth) !important;\n    }\n    \n    &.has-replace-line-options-select {\n      //width: calc(100% - @labelWidth - @closePanelIconWidth - 1rem - @ReplaceLineModeSelectWidth) !important;\n      \n      .string-to-replace-with-input {\n        width: calc(100% - @labelWidth - @closePanelIconWidth - 3rem - @ReplaceButtonWidth - @ReplaceLineModeSelectWidth) !important;\n      }\n      \n      &.has-undo-button .string-to-replace-with-input {\n        width: calc(100% - @labelWidth - @closePanelIconWidth - 4rem - @UndoButtonWidth - @ReplaceButtonWidth - @ReplaceLineModeSelectWidth) !important;\n      }\n    }\n    \n    &.has-undo-button .string-to-replace-with-input {\n      width: calc(100% - @labelWidth - @closePanelIconWidth - 4rem - @UndoButtonWidth - @ReplaceButtonWidth) !important;\n    }\n  } \n  \n  select {\n    width: 8rem;\n    padding-top: 0 !important;\n    padding-bottom: 0 !important;\n    white-space: nowrap !important;\n  }\n  \n  .ui.icon.input {\n    input {\n      padding-right: 4.5rem !important;\n    }\n    \n    i.icon {\n      cursor: pointer;\n    }\n    i.icon:not(:first-of-type) {\n      right: 2em !important;\n    }\n  }\n  \n  .checkbox label {\n    width: auto !important;\n    //padding-left: 0 !important;\n  }\n  \n  .replace-mode-select {\n    width: @ReplaceModeSelectWidth !important;\n  }\n  .replace-line-options-select {\n    width: @ReplaceLineModeSelectWidth !important;\n  }\n  \n  .replace-count-button {\n    width: @ReplaceButtonWidth;\n    max-width: @ReplaceButtonWidth;\n    overflow-x: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    display: inline-block !important;\n    \n    padding-left: 0.5rem !important;\n    padding-right: 0.5rem !important;\n  }\n}\n\n.inline.field {\n  margin-top: 0.5rem !important;\n  margin-bottom: 0.5rem !important;\n}\n\n.format-tool-container {\n  .format-tool-select {\n    width: 13rem;\n    border-bottom-right-radius: 0 !important;\n    border-top-right-radius: 0 !important;\n  }\n  \n  .button {\n    border-bottom-left-radius: 0 !important;\n    border-top-left-radius: 0 !important;\n  }\n}\n  ",".replace-panel {\n  background-color: #e1f7f7;\n  border-top: 1px solid #10a3a3;\n  padding-bottom: 0.5rem;\n  height: 10.5rem;\n  position: fixed !important;\n  bottom: 0;\n  width: 100vw;\n  left: 0;\n  z-index: 9;\n}\n.replace-panel .close-icon {\n  float: right;\n  cursor: pointer;\n}\n.replace-panel .field {\n  clear: none !important;\n}\n.replace-panel label {\n  width: 6rem !important;\n  display: inline-block;\n  text-align: right;\n  user-select: none;\n  cursor: pointer !important;\n}\n.replace-panel .string-to-search-input {\n  width: calc(100% - 6rem - 0rem - 1rem) !important;\n}\n.replace-panel .string-to-search-input-container {\n  width: calc(100% - 6rem - 0rem - 2rem - 1px) !important;\n}\n.replace-panel .string-to-replace-with-input-container {\n  width: calc(100% - 6rem - 0rem - 1rem - 1px) !important;\n}\n.replace-panel .string-to-replace-with-input-container .string-to-replace-with-input {\n  width: calc(100% - 6rem - 0rem - 3rem - 9rem) !important;\n}\n.replace-panel .string-to-replace-with-input-container.has-replace-line-options-select .string-to-replace-with-input {\n  width: calc(100% - 6rem - 0rem - 3rem - 9rem - 8rem) !important;\n}\n.replace-panel .string-to-replace-with-input-container.has-replace-line-options-select.has-undo-button .string-to-replace-with-input {\n  width: calc(100% - 6rem - 0rem - 4rem - 2.5rem - 9rem - 8rem) !important;\n}\n.replace-panel .string-to-replace-with-input-container.has-undo-button .string-to-replace-with-input {\n  width: calc(100% - 6rem - 0rem - 4rem - 2.5rem - 9rem) !important;\n}\n.replace-panel select {\n  width: 8rem;\n  padding-top: 0 !important;\n  padding-bottom: 0 !important;\n  white-space: nowrap !important;\n}\n.replace-panel .ui.icon.input input {\n  padding-right: 4.5rem !important;\n}\n.replace-panel .ui.icon.input i.icon {\n  cursor: pointer;\n}\n.replace-panel .ui.icon.input i.icon:not(:first-of-type) {\n  right: 2em !important;\n}\n.replace-panel .checkbox label {\n  width: auto !important;\n}\n.replace-panel .replace-mode-select {\n  width: 8rem !important;\n}\n.replace-panel .replace-line-options-select {\n  width: 8rem !important;\n}\n.replace-panel .replace-count-button {\n  width: 9rem;\n  max-width: 9rem;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  display: inline-block !important;\n  padding-left: 0.5rem !important;\n  padding-right: 0.5rem !important;\n}\n.inline.field {\n  margin-top: 0.5rem !important;\n  margin-bottom: 0.5rem !important;\n}\n.format-tool-container .format-tool-select {\n  width: 13rem;\n  border-bottom-right-radius: 0 !important;\n  border-top-right-radius: 0 !important;\n}\n.format-tool-container .button {\n  border-bottom-left-radius: 0 !important;\n  border-top-left-radius: 0 !important;\n}\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./src/components/ReplacePanel/ReplacePanel.html?vue&type=template&id=8d37a762&scoped=true&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./src/components/ReplacePanel/ReplacePanel.html?vue&type=template&id=8d37a762&scoped=true& ***!
  \******************************************************************************************************************************************************************************/
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
          value: _vm.localConfig.displayPanel === "replace",
          expression: "localConfig.displayPanel === 'replace'"
        }
      ],
      staticClass: "replace-panel ui form"
    },
    [
      _c("div", { staticClass: "inline field" }, [
        _c("label", { attrs: { for: "stringToSearch" } }, [_vm._v("Search")]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "ui action icon input string-to-search-input-container"
          },
          [
            _c(
              "div",
              { staticClass: "ui icon fluid input string-to-search-input" },
              [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.localConfig.stringToSearch,
                      expression: "localConfig.stringToSearch"
                    }
                  ],
                  ref: "SearchInput",
                  attrs: {
                    type: "text",
                    placeholder: "Search...",
                    id: "stringToSearch"
                  },
                  domProps: { value: _vm.localConfig.stringToSearch },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.localConfig,
                        "stringToSearch",
                        $event.target.value
                      )
                    }
                  }
                }),
                _vm._v(" "),
                _c("i", {
                  staticClass: "link paragraph icon",
                  attrs: { titl: "New line" },
                  on: {
                    click: function($event) {
                      _vm.localConfig.stringToSearch =
                        _vm.localConfig.stringToSearch + "\\n"
                    }
                  }
                }),
                _vm._v(" "),
                _vm.localConfig.stringToSearch
                  ? _c("i", {
                      staticClass: "link close icon",
                      attrs: { titl: "Clear" },
                      on: {
                        click: function($event) {
                          _vm.localConfig.stringToSearch = ""
                        }
                      }
                    })
                  : _vm._e()
              ]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "ui compact button",
                class: { disabled: !_vm.isSearchEnabled },
                attrs: { type: "button" },
                on: { click: _vm.findPrev }
              },
              [_c("i", { staticClass: "long arrow alternate left icon" })]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "ui compact button",
                class: { disabled: !_vm.isSearchEnabled },
                attrs: { type: "button" },
                on: { click: _vm.findNext }
              },
              [_c("i", { staticClass: "long arrow alternate right icon" })]
            )
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "inline field" }, [
        _c("label", { attrs: { for: "stringToReplaceWith" } }, [
          _vm._v("Replace with")
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "ui action icon input string-to-replace-with-input-container",
            class: _vm.computedReplaceInputClassName
          },
          [
            _c(
              "div",
              { staticClass: "ui icon input string-to-replace-with-input" },
              [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.localConfig.stringToReplaceWith,
                      expression: "localConfig.stringToReplaceWith"
                    }
                  ],
                  ref: "ReplaceInput",
                  attrs: {
                    type: "text",
                    placeholder: "Replace with...",
                    id: "stringToReplaceWith"
                  },
                  domProps: { value: _vm.localConfig.stringToReplaceWith },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.localConfig,
                        "stringToReplaceWith",
                        $event.target.value
                      )
                    }
                  }
                }),
                _vm._v(" "),
                _c("i", {
                  staticClass: "link paragraph icon",
                  attrs: { titl: "New line" },
                  on: {
                    click: function($event) {
                      _vm.localConfig.stringToReplaceWith =
                        _vm.localConfig.stringToReplaceWith + "\\n"
                    }
                  }
                }),
                _vm._v(" "),
                _vm.localConfig.stringToReplaceWith
                  ? _c("i", {
                      staticClass: "link close icon",
                      attrs: { titl: "Clear" },
                      on: {
                        click: function($event) {
                          _vm.localConfig.stringToReplaceWith = ""
                        }
                      }
                    })
                  : _vm._e()
              ]
            ),
            _vm._v(" "),
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.localConfig.replaceMode,
                    expression: "localConfig.replaceMode"
                  }
                ],
                staticClass:
                  "ui compact selection dropdown replace-mode-select",
                on: {
                  change: function($event) {
                    var $$selectedVal = Array.prototype.filter
                      .call($event.target.options, function(o) {
                        return o.selected
                      })
                      .map(function(o) {
                        var val = "_value" in o ? o._value : o.value
                        return val
                      })
                    _vm.$set(
                      _vm.localConfig,
                      "replaceMode",
                      $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                    )
                  }
                }
              },
              [
                _c("option", { attrs: { selected: "", value: "regex" } }, [
                  _vm._v("Regex")
                ]),
                _vm._v(" "),
                _c("option", { attrs: { value: "raw" } }, [_vm._v("Raw")]),
                _vm._v(" "),
                _c("option", { attrs: { value: "line" } }, [_vm._v("Line")])
              ]
            ),
            _vm._v(" "),
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.localConfig.replaceLineOptions.mode,
                    expression: "localConfig.replaceLineOptions.mode"
                  },
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.showReplaceLineOptionsSelect,
                    expression: "showReplaceLineOptionsSelect"
                  }
                ],
                staticClass:
                  "ui compact selection dropdown replace-line-options-select",
                on: {
                  change: function($event) {
                    var $$selectedVal = Array.prototype.filter
                      .call($event.target.options, function(o) {
                        return o.selected
                      })
                      .map(function(o) {
                        var val = "_value" in o ? o._value : o.value
                        return val
                      })
                    _vm.$set(
                      _vm.localConfig.replaceLineOptions,
                      "mode",
                      $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                    )
                  }
                }
              },
              [
                _c("option", { attrs: { value: "prefix" } }, [
                  _vm._v("Prefix")
                ]),
                _vm._v(" "),
                _c("option", { attrs: { value: "suffix" } }, [
                  _vm._v("Suffix")
                ]),
                _vm._v(" "),
                _c("option", { attrs: { value: "first" } }, [_vm._v("First")]),
                _vm._v(" "),
                _c("option", { attrs: { value: "last" } }, [_vm._v("Last")])
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "ui button replace-count-button",
                class: {
                  disabled: _vm.isReplaceDisabled,
                  positive: !_vm.isReplaceDisabled
                },
                attrs: { title: _vm.computedReplaceButtonTitle },
                on: { click: _vm.doReplace }
              },
              [
                _vm._v(
                  "\n        " +
                    _vm._s(_vm.computedReplaceButtonText) +
                    "\n      "
                )
              ]
            ),
            _vm._v(" "),
            !_vm.isUndoDisabled
              ? _c(
                  "div",
                  { staticClass: "ui mini button", on: { click: _vm.undo } },
                  [_c("i", { staticClass: "undo icon" })]
                )
              : _vm._e()
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "inline fields" }, [
        _c("div", { staticClass: "field" }, [
          _c("label", [_vm._v("Format")]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "ui action icon input format-tool-container" },
            [
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.localConfig.formatTool,
                      expression: "localConfig.formatTool"
                    }
                  ],
                  staticClass:
                    "ui compact selection dropdown format-tool-select",
                  on: {
                    change: function($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function(o) {
                          return o.selected
                        })
                        .map(function(o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.$set(
                        _vm.localConfig,
                        "formatTool",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    }
                  }
                },
                [
                  _c("optgroup", { attrs: { label: "Trim" } }, [
                    _c(
                      "option",
                      {
                        attrs: {
                          value: "lines-trim",
                          disabled: _vm.isTrimDisabled
                        }
                      },
                      [_vm._v("Lines Trim")]
                    ),
                    _vm._v(" "),
                    _c(
                      "option",
                      {
                        attrs: {
                          value: "lines-ltrim",
                          disabled: _vm.isLTrimDisabled
                        }
                      },
                      [_vm._v("Lines Left Trim")]
                    ),
                    _vm._v(" "),
                    _c(
                      "option",
                      {
                        attrs: {
                          value: "lines-rtrim",
                          disabled: _vm.isRTrimDisabled
                        }
                      },
                      [_vm._v("Lines Right Trim")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("optgroup", { attrs: { label: "Compress" } }, [
                    _c(
                      "option",
                      {
                        attrs: {
                          value: "code-minifiy",
                          disabled: _vm.isMinifyDisabled
                        }
                      },
                      [_vm._v("Minify")]
                    ),
                    _vm._v(" "),
                    _c(
                      "option",
                      {
                        attrs: {
                          value: "code-beautify",
                          disabled: _vm.isBeautifyDisabled
                        }
                      },
                      [_vm._v("Beautify")]
                    )
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "ui button",
                  class: _vm.computedFormatActionButtonClassNameList,
                  on: { click: _vm.doFormat }
                },
                [_vm._v("\n          Format\n        ")]
              )
            ]
          )
        ]),
        _vm._v(" "),
        _c("label", { attrs: { for: "calcCopyButton" } }, [
          _vm._v("\n      Calculator\n    ")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "field" }, [
          _c(
            "div",
            {
              staticClass: "ui button calc-button",
              class: _vm.computedCalcButtonClassName,
              attrs: { id: "calcCopyButton", title: "Copy" },
              on: { click: _vm.copyCalcResult }
            },
            [_c("span", [_vm._v(_vm._s(_vm.computedCalcButtonText))])]
          )
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./src/components/ReplacePanel/ReplacePanel.less?vue&type=style&index=0&id=8d37a762&lang=less&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js??ref--1-2!./src/components/ReplacePanel/ReplacePanel.less?vue&type=style&index=0&id=8d37a762&lang=less&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js?sourceMap!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/less-loader/dist/cjs.js??ref--1-2!./ReplacePanel.less?vue&type=style&index=0&id=8d37a762&lang=less&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./src/components/ReplacePanel/ReplacePanel.less?vue&type=style&index=0&id=8d37a762&lang=less&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("b313e334", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/components/ReplacePanel/ReplacePanel.html?vue&type=template&id=8d37a762&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./src/components/ReplacePanel/ReplacePanel.html?vue&type=template&id=8d37a762&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_ReplacePanel_html_vue_type_template_id_8d37a762_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./ReplacePanel.html?vue&type=template&id=8d37a762&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./src/components/ReplacePanel/ReplacePanel.html?vue&type=template&id=8d37a762&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_ReplacePanel_html_vue_type_template_id_8d37a762_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_ReplacePanel_html_vue_type_template_id_8d37a762_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/ReplacePanel/ReplacePanel.js?vue&type=script&lang=js&?5a53":
/*!******************************************************************************!*\
  !*** ./src/components/ReplacePanel/ReplacePanel.js?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ReplacePanel_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./ReplacePanel.js?vue&type=script&lang=js& */ "./src/components/ReplacePanel/ReplacePanel.js?vue&type=script&lang=js&?ad93");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_ReplacePanel_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/ReplacePanel/ReplacePanel.js?vue&type=script&lang=js&?ad93":
/*!******************************************************************************!*\
  !*** ./src/components/ReplacePanel/ReplacePanel.js?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ReplacePanelData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReplacePanelData.js */ "./src/components/ReplacePanel/ReplacePanelData.js");
/* harmony import */ var _ReplacePanelWatch_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReplacePanelWatch.js */ "./src/components/ReplacePanel/ReplacePanelWatch.js");
/* harmony import */ var _ReplacePanelComputed_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ReplacePanelComputed.js */ "./src/components/ReplacePanel/ReplacePanelComputed.js");
/* harmony import */ var _ReplacePanelComputedCalc_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ReplacePanelComputedCalc.js */ "./src/components/ReplacePanel/ReplacePanelComputedCalc.js");
/* harmony import */ var _ReplacePanelComputedTrim_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ReplacePanelComputedTrim.js */ "./src/components/ReplacePanel/ReplacePanelComputedTrim.js");
/* harmony import */ var _ReplacePanelComputedFormat_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ReplacePanelComputedFormat.js */ "./src/components/ReplacePanel/ReplacePanelComputedFormat.js");
/* harmony import */ var _ReplacePanelMethodsInput_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ReplacePanelMethodsInput.js */ "./src/components/ReplacePanel/ReplacePanelMethodsInput.js");
/* harmony import */ var _ReplacePanelMethodsReplace_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ReplacePanelMethodsReplace.js */ "./src/components/ReplacePanel/ReplacePanelMethodsReplace.js");
/* harmony import */ var _ReplacePanelMethodsSearch_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ReplacePanelMethodsSearch.js */ "./src/components/ReplacePanel/ReplacePanelMethodsSearch.js");
/* harmony import */ var _ReplacePanelMethodsTrim_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ReplacePanelMethodsTrim.js */ "./src/components/ReplacePanel/ReplacePanelMethodsTrim.js");
/* harmony import */ var _ReplacePanelMethodsFormat_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ReplacePanelMethodsFormat.js */ "./src/components/ReplacePanel/ReplacePanelMethodsFormat.js");
/* harmony import */ var _ReplacePanelMethodsCalc_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ReplacePanelMethodsCalc.js */ "./src/components/ReplacePanel/ReplacePanelMethodsCalc.js");
/* global PULI_UTILS, CodeMirror */

let ReplacePanel = {
  props: ['config', 'localConfig', 'utils'],
  data: null,
  watch: {}, // 轉移到 ReplacePanelWatch.js
  computed: {}, // 轉移到 ReplacePanelComputed.js
  mounted() {
    this.setPanelHeight()
  },
  methods: {
    setPanelHeight() {
      //console.log('setPanelHeight', this.localConfig.displayReplacePanel, this.localConfig.replaceMode)
      if (this.localConfig.displayPanel === 'replace') {
//        if (this.localConfig.replaceMode === 'line') {
//          this.config.panelHeight = '12rem'
//        }
//        else {
//          this.config.panelHeight = '8rem'
//        }
        this.config.panelHeight = this.panelHeight
      }
      //console.log(this.config.panelHeight)
    },
    
    /*
    clearTextContentConfirm() {
      if (window.confirm('Are you sure?')) {
        this.localConfig.textContent = ''
        this.clearHistory()
      }
    },
    */
    
    
  }
}

// -----------------------------


Object(_ReplacePanelData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ReplacePanel)



Object(_ReplacePanelWatch_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ReplacePanel)

// ------------------------


Object(_ReplacePanelComputed_js__WEBPACK_IMPORTED_MODULE_2__["default"])(ReplacePanel)


Object(_ReplacePanelComputedCalc_js__WEBPACK_IMPORTED_MODULE_3__["default"])(ReplacePanel)


Object(_ReplacePanelComputedTrim_js__WEBPACK_IMPORTED_MODULE_4__["default"])(ReplacePanel)


Object(_ReplacePanelComputedFormat_js__WEBPACK_IMPORTED_MODULE_5__["default"])(ReplacePanel)

// -----------------------------

Object(_ReplacePanelMethodsInput_js__WEBPACK_IMPORTED_MODULE_6__["default"])(ReplacePanel)


Object(_ReplacePanelMethodsReplace_js__WEBPACK_IMPORTED_MODULE_7__["default"])(ReplacePanel)


Object(_ReplacePanelMethodsSearch_js__WEBPACK_IMPORTED_MODULE_8__["default"])(ReplacePanel)


Object(_ReplacePanelMethodsTrim_js__WEBPACK_IMPORTED_MODULE_9__["default"])(ReplacePanel)


Object(_ReplacePanelMethodsFormat_js__WEBPACK_IMPORTED_MODULE_10__["default"])(ReplacePanel)


Object(_ReplacePanelMethodsCalc_js__WEBPACK_IMPORTED_MODULE_11__["default"])(ReplacePanel)

/* harmony default export */ __webpack_exports__["default"] = (ReplacePanel);

/***/ }),

/***/ "./src/components/ReplacePanel/ReplacePanel.less?vue&type=style&index=0&id=8d37a762&lang=less&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./src/components/ReplacePanel/ReplacePanel.less?vue&type=style&index=0&id=8d37a762&lang=less&scoped=true& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_ReplacePanel_less_vue_type_style_index_0_id_8d37a762_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader!../../../node_modules/css-loader/dist/cjs.js?sourceMap!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/less-loader/dist/cjs.js??ref--1-2!./ReplacePanel.less?vue&type=style&index=0&id=8d37a762&lang=less&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./src/components/ReplacePanel/ReplacePanel.less?vue&type=style&index=0&id=8d37a762&lang=less&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_ReplacePanel_less_vue_type_style_index_0_id_8d37a762_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_ReplacePanel_less_vue_type_style_index_0_id_8d37a762_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_ReplacePanel_less_vue_type_style_index_0_id_8d37a762_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_ReplacePanel_less_vue_type_style_index_0_id_8d37a762_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/ReplacePanel/ReplacePanel.vue":
/*!******************************************************!*\
  !*** ./src/components/ReplacePanel/ReplacePanel.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ReplacePanel_html_vue_type_template_id_8d37a762_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReplacePanel.html?vue&type=template&id=8d37a762&scoped=true& */ "./src/components/ReplacePanel/ReplacePanel.html?vue&type=template&id=8d37a762&scoped=true&");
/* harmony import */ var _ReplacePanel_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReplacePanel.js?vue&type=script&lang=js& */ "./src/components/ReplacePanel/ReplacePanel.js?vue&type=script&lang=js&?5a53");
/* empty/unused harmony star reexport *//* harmony import */ var _ReplacePanel_less_vue_type_style_index_0_id_8d37a762_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ReplacePanel.less?vue&type=style&index=0&id=8d37a762&lang=less&scoped=true& */ "./src/components/ReplacePanel/ReplacePanel.less?vue&type=style&index=0&id=8d37a762&lang=less&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _ReplacePanel_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_D_3A_5Cxampp_5Chtdocs_5Cprojects_html5_5CPWA_Plain_Text_Editor_5Csrc_5Ccomponents_5CReplacePanel_5CReplacePanel_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ReplacePanel.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=D%3A%5Cxampp%5Chtdocs%5Cprojects-html5%5CPWA-Plain-Text-Editor%5Csrc%5Ccomponents%5CReplacePanel%5CReplacePanel.vue&lang=yaml */ "./src/components/ReplacePanel/ReplacePanel.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=D%3A%5Cxampp%5Chtdocs%5Cprojects-html5%5CPWA-Plain-Text-Editor%5Csrc%5Ccomponents%5CReplacePanel%5CReplacePanel.vue&lang=yaml");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ReplacePanel_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ReplacePanel_html_vue_type_template_id_8d37a762_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ReplacePanel_html_vue_type_template_id_8d37a762_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "8d37a762",
  null
  
)

/* custom blocks */

if (typeof _ReplacePanel_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_D_3A_5Cxampp_5Chtdocs_5Cprojects_html5_5CPWA_Plain_Text_Editor_5Csrc_5Ccomponents_5CReplacePanel_5CReplacePanel_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_4__["default"] === 'function') Object(_ReplacePanel_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_D_3A_5Cxampp_5Chtdocs_5Cprojects_html5_5CPWA_Plain_Text_Editor_5Csrc_5Ccomponents_5CReplacePanel_5CReplacePanel_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_4__["default"])(component)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/ReplacePanel/ReplacePanel.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/ReplacePanel/ReplacePanel.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=D%3A%5Cxampp%5Chtdocs%5Cprojects-html5%5CPWA-Plain-Text-Editor%5Csrc%5Ccomponents%5CReplacePanel%5CReplacePanel.vue&lang=yaml":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./src/components/ReplacePanel/ReplacePanel.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=D%3A%5Cxampp%5Chtdocs%5Cprojects-html5%5CPWA-Plain-Text-Editor%5Csrc%5Ccomponents%5CReplacePanel%5CReplacePanel.vue&lang=yaml ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_kazupon_vue_i18n_loader_lib_index_js_ReplacePanel_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_D_3A_5Cxampp_5Chtdocs_5Cprojects_html5_5CPWA_Plain_Text_Editor_5Csrc_5Ccomponents_5CReplacePanel_5CReplacePanel_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@kazupon/vue-i18n-loader/lib!./ReplacePanel.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=D%3A%5Cxampp%5Chtdocs%5Cprojects-html5%5CPWA-Plain-Text-Editor%5Csrc%5Ccomponents%5CReplacePanel%5CReplacePanel.vue&lang=yaml */ "./node_modules/@kazupon/vue-i18n-loader/lib/index.js!./src/components/ReplacePanel/ReplacePanel.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=D%3A%5Cxampp%5Chtdocs%5Cprojects-html5%5CPWA-Plain-Text-Editor%5Csrc%5Ccomponents%5CReplacePanel%5CReplacePanel.vue&lang=yaml");
/* harmony import */ var _node_modules_kazupon_vue_i18n_loader_lib_index_js_ReplacePanel_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_D_3A_5Cxampp_5Chtdocs_5Cprojects_html5_5CPWA_Plain_Text_Editor_5Csrc_5Ccomponents_5CReplacePanel_5CReplacePanel_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_kazupon_vue_i18n_loader_lib_index_js_ReplacePanel_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_D_3A_5Cxampp_5Chtdocs_5Cprojects_html5_5CPWA_Plain_Text_Editor_5Csrc_5Ccomponents_5CReplacePanel_5CReplacePanel_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_kazupon_vue_i18n_loader_lib_index_js_ReplacePanel_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_D_3A_5Cxampp_5Chtdocs_5Cprojects_html5_5CPWA_Plain_Text_Editor_5Csrc_5Ccomponents_5CReplacePanel_5CReplacePanel_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_kazupon_vue_i18n_loader_lib_index_js_ReplacePanel_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_D_3A_5Cxampp_5Chtdocs_5Cprojects_html5_5CPWA_Plain_Text_Editor_5Csrc_5Ccomponents_5CReplacePanel_5CReplacePanel_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_kazupon_vue_i18n_loader_lib_index_js_ReplacePanel_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_D_3A_5Cxampp_5Chtdocs_5Cprojects_html5_5CPWA_Plain_Text_Editor_5Csrc_5Ccomponents_5CReplacePanel_5CReplacePanel_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/ReplacePanel/ReplacePanelComputed.js":
/*!*************************************************************!*\
  !*** ./src/components/ReplacePanel/ReplacePanelComputed.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (ReplacePanel) {
    ReplacePanel.computed.CodeMirrorEditor = function () {
      return this.$parent.$refs.CodeMirrorEditor
    }
    
  ReplacePanel.computed.showReplaceLineOptionsSelect = function () {
    return (this.localConfig.replaceMode === 'line')
  }

  ReplacePanel.computed.computedReplaceInputClassName = function () {
    return {
      'has-replace-line-options-select': this.showReplaceLineOptionsSelect,
      'has-undo-button': !this.isUndoDisabled,
    }
  }

  ReplacePanel.computed.isReplaceDisabled = function () {
    if (this.localConfig.textContent === '') {
      return true
    }

    if (this.localConfig.replaceMode !== 'line'
            && this.localConfig.stringToSearch === '') {
      return true
    }

    if (this.replaceOccurCount === 0) {
      return true
    }

    return false
  }

  ReplacePanel.computed.replaceOccurCount = function () {
    if (this.localConfig.textContent === '') {
      return 0
    }

    if (this.localConfig.replaceMode !== 'line'
            && this.localConfig.stringToSearch === '') {
      return true
    }

    let count = 0
    //let stringToSearch = this.localConfig.stringToSearch
    if (this.localConfig.replaceMode === 'raw') {
      count = this.countOccurRaw
    } else if (this.localConfig.replaceMode === 'regex') {
      count = this.countOccurRegex
    } else if (this.localConfig.replaceMode === 'line') {
      count = this.countOccurLine
    }

    //console.log(this.localConfig.textContent, this.localConfig.stringToSearch, count)

    return count
  }

  // ----------------------------

  ReplacePanel.computed.countOccurRaw = function () {
    let stringToSearch = this.stringToSearchRaw

    return this.localConfig.textContent.split(stringToSearch).length - 1
  }

  ReplacePanel.computed.countOccurRegex = function () {
    let search = this.localConfig.stringToSearch
    if (search === '') {
      return 0
    }
    //return 0
    //console.log(`'${search}'`)
    //replace = replace.split('\\').join('\\\\')
    let re
    eval(`re = new RegExp("${search}", "g")`)
    //console.log(re)
    let count = 0
    count = ((this.localConfig.textContent || '').match(re) || []).length
    return count
  }
  ReplacePanel.computed.textContentTrim = function () {
    return this.localConfig.textContent.trim()
  }
  ReplacePanel.computed.textContentLines = function () {
    return this.localConfig.textContent.split('\n')
  }
  ReplacePanel.computed.textContentLinesTrim = function () {
    return this.textContentLines.map(line => line.trim())
  }
  ReplacePanel.computed.stringToSearchRaw = function () {
    return this.localConfig.stringToSearch.replace(/\\/g, '\\')
  }

  ReplacePanel.computed.stringToReplaceWithRaw = function () {
    return this.localConfig.stringToReplaceWith.replace(/\\/g, '\\')
  }

  ReplacePanel.computed.countOccurLine = function () {
    let stringToSearch = this.stringToSearchRaw
    //console.log(stringToSearch)
    if (stringToSearch === '') {
      return this.textContentLinesTrim.length
    }

    let count = 0

    let mode = this.localConfig.replaceLineOptions.mode
    if (mode === 'prefix') {
      this.textContentLinesTrim.forEach((line) => {
        if (line.startsWith(stringToSearch)) {
          count++
        }
      })
    } else if (mode === 'suffix') {
      this.textContentLinesTrim.forEach((line) => {
        if (line.endsWith(stringToSearch)) {
          count++
        }
      })
    } else {
      this.textContentLinesTrim.forEach((line) => {
        if (line.indexOf(stringToSearch) > -1) {
          count++
        }
      })
    }
    //console.log(count)
    return count
  }

  // ----------------------------

  ReplacePanel.computed.isUndoDisabled = function () {
    if (this.textContentHistory.length === 0) {
      return true
    }
    if (this.textContentHistoryIndex > 0) {
      return false
    }
    return true
  }

  ReplacePanel.computed.isRedoDisabled = function () {
    if (this.textContentHistory.length === 0) {
      return true
    }
    if (this.textContentHistoryIndex < this.textContentHistory.length - 1) {
      return false
    }
    return true
  }

  ReplacePanel.computed.stringToSearch = function () {
    let stringToSearch
    if (this.localConfig.replaceMode === 'regex') {
      stringToSearch = this.localConfig.stringToSearch
    } else {
      stringToSearch = this.stringToSearchRaw
    }
    return stringToSearch
  }
  ReplacePanel.computed.isSearchEnabled = function () {
    if (this.stringToSearch === '') {
      return false
    }

    return (this.localConfig.textContent.indexOf(this.stringToSearch) > -1)
  }

  // ----------------------------

  ReplacePanel.computed.computedReplaceButtonText = function () {
    if (this.isReplaceDisabled === true) {
      return 'Replace'
    }

    let replaceOccurCount = this.replaceOccurCount
    //replaceOccurCount = 121043

    let countLength = (replaceOccurCount + '').length
    //console.log(countLength)
    if (countLength <= 6) {
      return `Replace (${replaceOccurCount})`
    } else if (countLength <= 8) {
      let countK = Math.round(replaceOccurCount / 1000)
      return `Replace (${countK}K)`
    } else if (countLength <= 10) {
      let countK = Math.round(replaceOccurCount / 1000000)
      return `Replace (${countK}M)`
    } else if (countLength <= 13) {
      let countK = Math.round(replaceOccurCount / 1000000000)
      return `Replace (${countK}B)`
    } else {
      return 'Replace (...)'
    }
  }
  ReplacePanel.computed.computedReplaceButtonTitle = function () {
    if (this.isReplaceDisabled === true) {
      return 'Replace'
    }
    return `Replace (${this.replaceOccurCount})`
  }

});

/***/ }),

/***/ "./src/components/ReplacePanel/ReplacePanelComputedCalc.js":
/*!*****************************************************************!*\
  !*** ./src/components/ReplacePanel/ReplacePanelComputedCalc.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (ReplacePanel) {
  ReplacePanel.computed.calcResult = function () {
    let textContent = this.localConfig.textContent.trim()
    this.calcResultCopied = false

    if (textContent.indexOf('\n') === -1) {
      // 表示只有一行
      try {
        let result
        eval(`result = (${textContent})`)
        return result
      } catch (e) {
      }
    } else {
      // 試著把最後一行加上return
      //let lastBreak = textContent.lastIndexOf('\n')
      //textContent = textContent.slice(0, lastBreak + 1) + 'return ' + textContent.slice(lastBreak + 1)
      let lines = textContent.split('\n')
      let lastLine = lines[(lines.length - 1)].trim()
      if (!lastLine.startsWith('return ')) {
        lines[(lines.length - 1)] = 'return ' + lastLine
      }
      
      textContent = lines.join('\n')
      //console.log(textContent)

      try {
        let result
        eval(`result = (function () {
  ${textContent}
  })()`)
        return result
      } catch (e) {
      }
    }
  }
  ReplacePanel.computed.computedCalcButtonClassName = function () {
    return {
      'disabled': !this.calcResult,
      'positive': (this.calcResult && this.calcResultCopied === false)
    }
  }
  ReplacePanel.computed.computedCalcButtonText = function () {
    let result = this.calcResult

    if (!result) {
      return '(NULL)'
    }

    let lengthLimit = 13

    result = String(result).trim()
    result = result.split('\n').join(' ')
    if (result.length > lengthLimit) {
      result = result.slice(0, lengthLimit)
    }
    return `Copy: ${result}`
  }
});

/***/ }),

/***/ "./src/components/ReplacePanel/ReplacePanelComputedFormat.js":
/*!*******************************************************************!*\
  !*** ./src/components/ReplacePanel/ReplacePanelComputedFormat.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (ReplacePanel) {
  
  ReplacePanel.computed.computedFormatActionButtonClassNameList = function () {
    let list = []
    
    let tool = this.localConfig.formatTool
    //console.log(tool, this.isTrimEnabled)
    
    if ((tool === 'lines-trim' && this.isTrimEnabled === false)
            || (tool === 'lines-ltrim' && this.isLTrimEnabled === false)
            || (tool === 'lines-rtrim' && this.isRTrimEnabled === false)) {
      list.push('disabled')
    }
    
    return list.join(' ')
  }
  
  ReplacePanel.computed.isMinifyDisabled = function () {
    if (this.config.inited === false) {
      return 'disabled'
    }
    
    let editor = this.$parent.$refs.CodeMirrorEditor
    if (!editor) {
      return 'disabled'
    }
    
    let mode = editor.getMode()
    //console.log(mode)
    
    if (mode !== 'javascript'
            && mode !== 'css'
            && mode !== 'html') {
      return 'disabled'
    }
    
    if (this.isTrimEnabled === true
            || this.textContentLines.length > 1) {
      return undefined
    }
    else {
      return 'disabled'
    }
  }
  
  ReplacePanel.computed.isBeautifyDisabled = function () {
    if (this.config.inited === false) {
      return 'disabled'
    }
    
    let editor = this.$parent.$refs.CodeMirrorEditor
    //console.log(editor)
    if (!editor) {
      return 'disabled'
    }
    
    let mode = editor.getMode()
    //console.log(mode)
    if (mode !== 'javascript'
            && mode !== 'css'
            && mode !== 'html') {
      return 'disabled'
    }
    
    if (this.isModifiedAfterBeautification === true) {
      return undefined
    }
    else {
      return 'disabled'
    }
  }
});

/***/ }),

/***/ "./src/components/ReplacePanel/ReplacePanelComputedTrim.js":
/*!*****************************************************************!*\
  !*** ./src/components/ReplacePanel/ReplacePanelComputedTrim.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (ReplacePanel) {
  
  ReplacePanel.computed.isTrimEnabled = function () {
    for (let i = 0; i < this.textContentLines.length; i++) {
      let line = this.textContentLines[i]
      if (line !== line.trim()) {
        return true
      }
    }
    return false
  }
  ReplacePanel.computed.isTrimDisabled = function () {
    if (this.isTrimEnabled === true) {
      return undefined
    }
    else {
      return 'disabled'
    }
  }
  
  ReplacePanel.computed.isLTrimEnabled = function () {
    for (let i = 0; i < this.textContentLines.length; i++) {
      let line = this.textContentLines[i]
      let char = line.trim().slice(0, 1)
      let index = line.indexOf(char)
      if (index > 0) {
        return true
      }
    }
    return false
  }
  
  ReplacePanel.computed.isLTrimDisabled = function () {
    if (this.isLTrimEnabled === true) {
      return undefined
    }
    else {
      return 'disabled'
    }
  }
  
  
  ReplacePanel.computed.isRTrimEnabled = function () {
    for (let i = 0; i < this.textContentLines.length; i++) {
      let line = this.textContentLines[i]
      let char = line.trim().slice(-1)
      let index = line.lastIndexOf(char)
      if (index < line.length - 1) {
        return true
      }
    }
    return false
  }
  
  
  ReplacePanel.computed.isRTrimDisabled = function () {
    if (this.isRTrimEnabled === true) {
      return undefined
    }
    else {
      return 'disabled'
    }
  }
  
});

/***/ }),

/***/ "./src/components/ReplacePanel/ReplacePanelData.js":
/*!*********************************************************!*\
  !*** ./src/components/ReplacePanel/ReplacePanelData.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (ReplacePanel) {
  ReplacePanel.data = function () {
    this.$i18n.locale = this.config.locale
    return {
      textContentHistory: [],
      replaceLock: false,
      textContentModified: false,
      isModifiedAfterBeautification: true,
      //panelHeight: '10.8rem'
      panelHeight: '10.5rem',
      calcResultCopied: false
    }
  }
});

/***/ }),

/***/ "./src/components/ReplacePanel/ReplacePanelMethodsCalc.js":
/*!****************************************************************!*\
  !*** ./src/components/ReplacePanel/ReplacePanelMethodsCalc.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (ReplacePanel) {
  ReplacePanel.methods.copyCalcResult = function () {
    this.utils.ClipboardUtils.copyPlainString(this.calcResult)
    this.calcResultCopied = true
  }
});
    

/***/ }),

/***/ "./src/components/ReplacePanel/ReplacePanelMethodsFormat.js":
/*!******************************************************************!*\
  !*** ./src/components/ReplacePanel/ReplacePanelMethodsFormat.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//import htmlMinifier from 'html-minifier-terser'
//import cssMinifier from 'css-minifiers'

 
/* harmony default export */ __webpack_exports__["default"] = (function (ReplacePanel) {

  ReplacePanel.methods.doFormat = function () {
    let tool = this.localConfig.formatTool
    //console.log(tool)
    if (tool === 'lines-trim') {
      return this.trimTextContent()
    }
    else if (tool === 'lines-ltrim') {
      return this.ltrimTextContent()
    }
    else if (tool === 'lines-rtrim') {
      return this.rtrimTextContent()
    }
    else if (tool === 'code-minifiy') {
      return this.minifiyCode()
    }
    else if (tool === 'code-beautify') {
      return this.beautifyCode()
    }
  }
  
  ReplacePanel.methods.minifiyCode = async function () {
    this.$parent.$refs.CodeMirrorEditor.minify()
    //console.log(mode)
    
    
    //console.error('minifiyCode')
    //let result = await minify(this.localConfig.textContent)
    //console.log(result)
    //this.localConfig.textContent = result
  }
  
  ReplacePanel.methods.beautifyCode = function () {
    //console.error('beautifyCode')
    this.$parent.$refs.CodeMirrorEditor.autoFormat()
    //console.log()
    this.isModifiedAfterBeautification = false
  }
});
    

/***/ }),

/***/ "./src/components/ReplacePanel/ReplacePanelMethodsInput.js":
/*!*****************************************************************!*\
  !*** ./src/components/ReplacePanel/ReplacePanelMethodsInput.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (ReplacePanel) {
  ReplacePanel.methods.focus = async function () {
    await this.utils.AsyncUtils.sleep(0)
    this.$refs.SearchInput.focus()
  }

  ReplacePanel.methods.selectReplaceInput = async function () {
    await this.utils.AsyncUtils.sleep(0)
    //console.log('selectReplaceInput', this.$refs.ReplaceInput)
    this.$refs.ReplaceInput.focus()
    this.$refs.ReplaceInput.select()
  }
});
    

/***/ }),

/***/ "./src/components/ReplacePanel/ReplacePanelMethodsReplace.js":
/*!*******************************************************************!*\
  !*** ./src/components/ReplacePanel/ReplacePanelMethodsReplace.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (ReplacePanel) {
  ReplacePanel.methods.clearHistory = function () {
    //console.log('clearHistory')
    this.textContentHistory = []
    this.textContentHistoryIndex = -1
    this.textContentModified = true
  }
  ReplacePanel.methods.doReplace = async function () {
    //let stringToSearch = this.localConfig.stringToSearch
    //let stringToReplaceWith = this.config.stringToReplaceWith

    this.replaceLock = true

    if (this.textContentHistoryIndex > -1
            && this.textContentHistoryIndex !== this.textContentHistory.length - 1) {
      this.textContentHistory = this.textContentHistory.slice(0, this.textContentHistoryIndex)
    }

    this.saveHistory()

    if (this.localConfig.replaceMode === 'raw') {
      this.doReplaceRaw()
    } else if (this.localConfig.replaceMode === 'regex') {
      this.doReplaceRegex()
    } else if (this.localConfig.replaceMode === 'line') {
      let mode = this.localConfig.replaceLineOptions.mode
      if (mode === 'prefix') {
        this.doReplaceLinePrefix()
      } else if (mode === 'suffix') {
        this.doReplaceLineSuffix()
      } else if (mode === 'first' || mode === 'last') {
        this.doReplaceLineIndex()
      }
    }

    this.textContentModified = false

    await this.utils.AsyncUtils.sleep(0)
    this.replaceLock = false
  }
  ReplacePanel.methods.saveHistory = function () {
    //this.clearHistory()
    this.textContentHistory.push(this.localConfig.textContent)
    this.textContentHistoryIndex = this.textContentHistory.length

  }
  ReplacePanel.methods.doReplaceRaw = function () {
    let stringToSearch = this.stringToSearchRaw
    let stringToReplaceWith = this.stringToReplaceWithRaw

    console.log(stringToSearch, stringToReplaceWith)

    this.localConfig.textContent = this.localConfig.textContent.split(stringToSearch)
            .join(stringToReplaceWith)

    console.log(this.localConfig.textContent)
  }
  ReplacePanel.methods.doReplaceRegex = function () {
    let stringToSearch = this.localConfig.stringToSearch
    let stringToReplaceWith = this.localConfig.stringToReplaceWith
    //console.log(stringToReplaceWith)
    stringToReplaceWith = stringToReplaceWith.split('\\n').join('\n')
    let re = new RegExp(stringToSearch, "g")

    this.localConfig.textContent = this.localConfig.textContent.replace(re, stringToReplaceWith);
  }
  ReplacePanel.methods.doReplaceLinePrefix = function () {
    this.localConfig.textContent = this.textContentLines.map(line => {
      /*
       if (this.localConfig.replaceLineOptions.lTrim === true) {
       if (line.trim() === '') {
       return ''
       }
       
       let firstChar = line.trim().slice(0, 1)
       let firstIndex = line.indexOf(firstChar)
       line = line.slice(firstIndex)
       
       if (line.startsWith(this.stringToSearchRaw)) {
       return this.stringToReplaceWithRaw + line.slice(this.stringToSearchRaw.length)
       }
       }
       else {
       if (line.trim() === '') {
       return line
       }
       }
       */

      let firstChar = line.trim().slice(0, 1)
      let firstIndex = line.indexOf(firstChar)

      let padding = line.slice(0, firstIndex)
      let trimLine = line.slice(firstIndex)

      if (trimLine.startsWith(this.stringToSearchRaw)) {
        return padding + this.stringToReplaceWithRaw + trimLine.slice(this.stringToSearchRaw.length)
      } else {
        return line
      }
    }).join('\n')
  }
  ReplacePanel.methods.doReplaceLineSuffix = function () {
    this.localConfig.textContent = this.textContentLines.map(line => {

      let lastChar = line.trim().slice(-1)
      //console.log(lastChar)
      let lastIndex = line.lastIndexOf(lastChar)

      let padding = line.slice(lastIndex + 1)
      let trimLine = line.slice(0, lastIndex + 1)

      if (trimLine.endsWith(this.stringToSearchRaw)) {
        return trimLine.slice(0, trimLine.length - this.stringToSearchRaw.length) + this.stringToReplaceWithRaw + padding
      } else {
        return line
      }
    }).join('\n')
  }
  ReplacePanel.methods.doReplaceLineIndex = function () {
    let mode = this.localConfig.replaceLineOptions.mode

    this.localConfig.textContent = this.textContentLines.map(line => {

      let index
      if (mode === 'first') {
        index = line.indexOf(this.stringToSearchRaw)
      } else {
        index = line.lastIndexOf(this.stringToSearchRaw)
      }

      if (index === -1) {
        return line
      }

      if (index === 0) {
        return this.stringToReplaceWithRaw + line.slice(this.stringToSearchRaw.length)
      } else if (index === line.length - this.stringToSearchRaw.length) {
        return line.slice(0, index) + this.stringToReplaceWithRaw
      } else {
        return line.slice(0, index) + this.stringToReplaceWithRaw + line.slice(index + this.stringToSearchRaw.length)
      }
    }).join('\n')
  }
  ReplacePanel.methods.undo = function () {
    //console.log('undo', this.textContentHistoryIndex, this.textContentHistory.length, this.textContentHistory[(this.textContentHistoryIndex)])
    //console.log(this.textContentHistory)
    if ((this.textContentHistoryIndex) <= 0
            || !this.textContentHistory[(this.textContentHistoryIndex - 1)]) {
      return false
    }

    if (this.textContentHistoryIndex === this.textContentHistory.length) {
      this.textContentHistory.push(this.localConfig.textContent)
    }

    this.textContentHistoryIndex--
    this.localConfig.textContent = this.textContentHistory[this.textContentHistoryIndex]
  }
  ReplacePanel.methods.redo = function () {
    //console.log('redo', this.textContentHistoryIndex, this.textContentHistory.length, this.textContentHistory[(this.textContentHistoryIndex + 1)])
    //console.log(this.textContentHistory)
    if ((this.textContentHistoryIndex + 1) > this.textContentHistory.length
            || !this.textContentHistory[(this.textContentHistoryIndex + 1)]) {
      return false
    }

    this.textContentHistoryIndex++
    this.localConfig.textContent = this.textContentHistory[this.textContentHistoryIndex]
  }
});
    

/***/ }),

/***/ "./src/components/ReplacePanel/ReplacePanelMethodsSearch.js":
/*!******************************************************************!*\
  !*** ./src/components/ReplacePanel/ReplacePanelMethodsSearch.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (ReplacePanel) {
//  ReplacePanel.methods.doSearchNext = function () {
//    let stringToSearch = this.stringToSearch
//
//    let startPos = this.localConfig.textContent.indexOf(stringToSearch, this.searchPostion)
//    if (startPos === -1) {
//      startPos = this.localConfig.textContent.indexOf(stringToSearch)
//
//      if (startPos === -1) {
//        return false
//      }
//    }
//
//    this.searchPostion = startPos + 1
//
//    // do selection
//    // Chrome / Firefox
//    let tarea = this.$refs.TextareaEditor.$el
//    if (typeof (tarea.selectionStart) !== "undefined") {
//      tarea.selectionStart = startPos;
//      tarea.selectionEnd = startPos;
//
//      tarea.blur();
//      tarea.focus();
//      tarea.selectionStart = startPos;
//      tarea.selectionEnd = startPos + this.localConfig.stringToSearch.length;
//
//      return true;
//    }
//    /*
//     // IE
//     if (document.selection && document.selection.createRange) {
//     tarea.focus();
//     tarea.select();
//     var range = document.selection.createRange();
//     range.collapse(true);
//     range.moveEnd("character", endPos);
//     range.moveStart("character", startPos);
//     range.select();
//     return true;
//     }
//     */
//    return false;
//  }
//  ReplacePanel.methods.doSearchPrev = function () {
//    let stringToSearch = this.stringToSearch
//
//    let startPos
//    if (this.searchPostion - this.stringToSearch.length - 1 < 0) {
//      startPos = this.localConfig.textContent.lastIndexOf(stringToSearch)
//    } else {
//      startPos = this.localConfig.textContent.lastIndexOf(stringToSearch, this.searchPostion - this.stringToSearch.length - 1)
//    }
//    if (startPos === -1) {
//      startPos = this.localConfig.textContent.lastIndexOf(stringToSearch)
//
//      if (startPos === -1) {
//        //console.log('not found')
//        return false
//      }
//    }
//
//    //console.log(startPos)
//
//    this.searchPostion = startPos + 1
//
//    // do selection
//    // Chrome / Firefox
//    let tarea = this.$refs.TextareaEditor.$el
//    if (typeof (tarea.selectionStart) !== "undefined") {
//      tarea.selectionStart = startPos;
//      tarea.selectionEnd = startPos;
//
//      tarea.blur();
//      tarea.focus();
//      tarea.selectionStart = startPos;
//      tarea.selectionEnd = startPos + this.localConfig.stringToSearch.length;
//
//
//      // collapse selection here
//      //tarea.blur()
//      //tarea.focus() // this scrolls the textarea
//      // expand selection here
//      return true;
//    }
//    /*
//     // IE
//     if (document.selection && document.selection.createRange) {
//     tarea.focus();
//     tarea.select();
//     var range = document.selection.createRange();
//     range.collapse(true);
//     range.moveEnd("character", endPos);
//     range.moveStart("character", startPos);
//     range.select();
//     return true;
//     }
//     */
//    return false;
//  }

  ReplacePanel.methods.findPrev = function () {
    let CodeMirror = this.$parent.$refs.CodeMirrorEditor
    return CodeMirror.findPrev()
  }
  ReplacePanel.methods.findNext = function () {
    let CodeMirror = this.$parent.$refs.CodeMirrorEditor
    return CodeMirror.findNext()
  }
});
    

/***/ }),

/***/ "./src/components/ReplacePanel/ReplacePanelMethodsTrim.js":
/*!****************************************************************!*\
  !*** ./src/components/ReplacePanel/ReplacePanelMethodsTrim.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


/* harmony default export */ __webpack_exports__["default"] = (function (ReplacePanel) {
//  ReplacePanel.methods.initDropdown = function () {
//    console.log('222')
//    console.log($(this.$refs.FormatToolDropdown).length)
//    //console.log($(this.$el).find('.ui.selection.dropdown').length)
//    $(this.$refs.FormatToolDropdown).dropdown({
//      //clearable: true
//      // you can use any ui transition
//      action: 'combo'
//    })
//  }

  ReplacePanel.methods.trimTextContent = function () {
    this.saveHistory()

    this.localConfig.textContent = this.textContentLines.map(line => line.trim()).join('\n')
  }
  ReplacePanel.methods.ltrimTextContent = function () {
    this.saveHistory()

    this.localConfig.textContent = this.textContentLines.map(line => {
      let char = line.trim().slice(0, 1)
      let index = line.indexOf(char)
      if (index === 0) {
        return line
      } else {
        return line.slice(index)
      }
    }).join('\n')
  }
  ReplacePanel.methods.rtrimTextContent = function () {
    this.saveHistory()

    this.localConfig.textContent = this.textContentLines.map(line => {
      let char = line.trim().slice(-1)
      let index = line.lastIndexOf(char)
      if (index === line.length - 1) {
        return line
      } else {
        return line.slice(0, index + 1)
      }
    }).join('\n')
  }
  /*
   formatCode () {
   if (this.isFormatJSONEnabled) {
   return this.formatJSONTextContent()
   }
   else if (this.isFormatXMLEnabled) {
   return this.formatXMLTextContent()
   }
   },
   formatJSONTextContent () {
   this.saveHistory()
   
   if (this.textContentTrim.startsWith('{') 
   && this.textContentTrim.endsWith('}')) {
   try {
   //let object = JSON.parse(this.textContentTrim)
   let object
   eval('object = ' + this.textContentTrim)
   this.localConfig.textContent = JSON.stringify(object, null, 2)
   }
   catch (e) {
   return false
   }
   }
   return false
   },
   formatXMLTextContent () {
   this.saveHistory()
   
   this.localConfig.textContent = this.prettifyXml(this.textContentTrim)
   },
   prettifyXml (sourceXml) {
   var xmlDoc = new DOMParser().parseFromString(sourceXml, 'application/xml');
   var xsltDoc = new DOMParser().parseFromString([
   // describes how we want to modify the XML - indent everything
   '<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform">',
   '  <xsl:strip-space elements="*"/>',
   '  <xsl:template match="para[content-style][not(text())]">', // change to just text() to strip space in text nodes
   '    <xsl:value-of select="normalize-space(.)"/>',
   '  </xsl:template>',
   '  <xsl:template match="node()|@*">',
   '    <xsl:copy><xsl:apply-templates select="node()|@*"/></xsl:copy>',
   '  </xsl:template>',
   '  <xsl:output indent="yes"/>',
   '</xsl:stylesheet>',
   ].join('\n'), 'application/xml');
   
   var xsltProcessor = new XSLTProcessor();    
   xsltProcessor.importStylesheet(xsltDoc);
   var resultDoc = xsltProcessor.transformToDocument(xmlDoc);
   var resultXml = new XMLSerializer().serializeToString(resultDoc);
   return resultXml;
   },
   */
});
    

/***/ }),

/***/ "./src/components/ReplacePanel/ReplacePanelWatch.js":
/*!**********************************************************!*\
  !*** ./src/components/ReplacePanel/ReplacePanelWatch.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (ReplacePanel) {
  ReplacePanel.watch = {
    'localConfig.textContent'() {
      if (this.replaceLock === true) {
        return false
      }
      this.clearHistory()
      this.isModifiedAfterBeautification = true
    },
    'localConfig.displayPanel'() {
      this.setPanelHeight()
    },
    'localConfig.replaceMode'() {
      this.setPanelHeight()
    },
    'config.inited'() {
      if (this.config.inited === false) {
        return false
      }
      this.setPanelHeight()
      
      //console.log('111')
      this.initDropdown()
    }
  }
});

/***/ })

}]);
//# sourceMappingURL=ReplacePanel.js.map