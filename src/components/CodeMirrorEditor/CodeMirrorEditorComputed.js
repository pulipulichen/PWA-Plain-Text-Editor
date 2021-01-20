import $ from 'jquery'
import CodeMirrorOptions from './codemirror/codemirror.config.webpack.js'

export default function (CodeMirrorEditor) {
  CodeMirrorEditor.computed.editor$el = function () {
    //console.log(this.$refs.cmEditor.$el)
    if (!this.$refs.cmEditor) {
      return undefined
    }

    return $(this.$refs.cmEditor.$el).find('.CodeMirror:first')
  }
  CodeMirrorEditor.computed.editorScroll$el = function () {
    //console.log(this.$refs.cmEditor.$el)
    if (!this.$refs.cmEditor) {
      return undefined
    }

    return $(this.$refs.cmEditor.$el).find('.CodeMirror:first .CodeMirror-scroll:first')
  }
  CodeMirrorEditor.computed.codemirror = function () {
    if (!this.$refs.cmEditor) {
      return undefined
    }

    return this.$refs.cmEditor.codemirror
  }
  CodeMirrorEditor.computed.computedCodeMirrorWrapperClassNameList = function () {
    let list = []

    if (this.inited === true) {
      list.push('inited')
    }

    if (this.localConfig.lineWrapping === false) {
      list.push('text-wrap-disabled')
    }
    
    if (this.isCompact) {
      list.push('compact')
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
  
  CodeMirrorEditor.computed.isCompact = function () {
    return this.config.viewportSize.height < this.viewportHeightThreshold
  }
}