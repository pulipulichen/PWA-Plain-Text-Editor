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

import ReplacePanelData from './ReplacePanelData.js'
ReplacePanelData(ReplacePanel)


import ReplacePanelWatch from './ReplacePanelWatch.js'
ReplacePanelWatch(ReplacePanel)

// ------------------------

import ReplacePanelComputed from './ReplacePanelComputed.js'
ReplacePanelComputed(ReplacePanel)

import ReplacePanelComputedCalc from './ReplacePanelComputedCalc.js'
ReplacePanelComputedCalc(ReplacePanel)

import ReplacePanelComputedTrim from './ReplacePanelComputedTrim.js'
ReplacePanelComputedTrim(ReplacePanel)

import ReplacePanelComputedFormat from './ReplacePanelComputedFormat.js'
ReplacePanelComputedFormat(ReplacePanel)

// -----------------------------
import ReplacePanelMethodsInput from './ReplacePanelMethodsInput.js'
ReplacePanelMethodsInput(ReplacePanel)

import ReplacePanelMethodsReplace from './ReplacePanelMethodsReplace.js'
ReplacePanelMethodsReplace(ReplacePanel)

import ReplacePanelMethodsSearch from './ReplacePanelMethodsSearch.js'
ReplacePanelMethodsSearch(ReplacePanel)

import ReplacePanelMethodsTrim from './ReplacePanelMethodsTrim.js'
ReplacePanelMethodsTrim(ReplacePanel)

import ReplacePanelMethodsFormat from './ReplacePanelMethodsFormat.js'
ReplacePanelMethodsFormat(ReplacePanel)

import ReplacePanelMethodsCalc from './ReplacePanelMethodsCalc.js'
ReplacePanelMethodsCalc(ReplacePanel)

export default ReplacePanel