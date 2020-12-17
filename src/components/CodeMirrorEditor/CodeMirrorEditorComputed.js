import $ from 'jquery'
import CodeMirrorOptions from './vendors/codemirror.config.webpack.js'

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
}