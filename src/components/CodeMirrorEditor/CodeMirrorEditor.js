/* global CodeMirror, PULI_UTILS */
import $ from 'jquery'
import codemirror from './vendors/codemirror.webpack.js'

let CodeMirrorEditor = {
  props: ['config', 'localConfig', 'utils'],
  data: null,
  components: {
    codemirror
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
      
      this.inited = true
    },
    
    onCodeMirrorKeyHandled (e, s) {
      //console.log(e, s)
      //this.$refs.cmEditor.codemirror.execCommand('autocomplete')
      this.$refs.cmEditor.codemirror.showHint()
      
    }
  }
}

import CodeMirrorEditorData from './CodeMirrorEditorData.js'
CodeMirrorEditorData(CodeMirrorEditor)

import CodeMirrorEditorComputed from './CodeMirrorEditorComputed.js'
CodeMirrorEditorComputed(CodeMirrorEditor)

import CodeMirrorEditorWatch from './CodeMirrorEditorWatch.js'
CodeMirrorEditorWatch(CodeMirrorEditor)

// -------------------

import CodeMirrorEditorMethodsOption from './CodeMirrorEditorMethodsOption.js'
CodeMirrorEditorMethodsOption(CodeMirrorEditor)

import CodeMirrorEditorMethodsChange from './CodeMirrorEditorMethodsChange.js'
CodeMirrorEditorMethodsChange(CodeMirrorEditor)

import CodeMirrorEditorMethodsFormat from './CodeMirrorEditorMethodsFormat.js'
CodeMirrorEditorMethodsFormat(CodeMirrorEditor)

import CodeMirrorEditorMethodsCursor from './CodeMirrorEditorMethodsCursor.js'
CodeMirrorEditorMethodsCursor(CodeMirrorEditor)

import CodeMirrorEditorMethodsFind from './CodeMirrorEditorMethodsFind.js'
CodeMirrorEditorMethodsFind(CodeMirrorEditor)

import CodeMirrorEditorMethodsDisplay from './CodeMirrorEditorMethodsDisplay.js'
CodeMirrorEditorMethodsDisplay(CodeMirrorEditor)

import CodeMirrorEditorMethodsFile from './CodeMirrorEditorMethodsFile.js'
CodeMirrorEditorMethodsFile(CodeMirrorEditor)


export default CodeMirrorEditor