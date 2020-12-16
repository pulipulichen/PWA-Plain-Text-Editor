import $ from 'jquery'
import CodeMirrorOptions from './vendors/codemirror.config.webpack.js'

export default function (CodeMirrorEditor) {
  CodeMirrorEditor.computed = {
//    editor () {
//      return this.$refs.cmEditor
//    },
    computedCodeMirrorOptions() {

      let options = {
        ...CodeMirrorOptions
      }
      
      options.mode.name = this.localConfig.syntax

      options.extraKeys['Ctrl-Alt-F'] = (cm) => {
        this.autoFormat(cm)
      }
      
      options.extraKeys['Tab'] = (cm) => {
        this.inputTab(cm)
      }
      
      options.extraKeys['Ctrl-S'] = (cm) => {
        this.saveFile(cm)
      }
      
      options.lineWrapping = this.localConfig.lineWrapping

      //console.log(options)

      return options
    },
    editor$el() {
      //console.log(this.$refs.cmEditor.$el)
      if (!this.$refs.cmEditor) {
        return undefined
      }

      return $(this.$refs.cmEditor.$el).find('.CodeMirror:first')
    },
    editorScroll$el () {
      //console.log(this.$refs.cmEditor.$el)
      if (!this.$refs.cmEditor) {
        return undefined
      }

      return $(this.$refs.cmEditor.$el).find('.CodeMirror:first .CodeMirror-scroll:first')
    },
    codemirror() {
      if (!this.$refs.cmEditor) {
        return undefined
      }
      
      return this.$refs.cmEditor.codemirror
    },
    
    computedCodeMirrorWrapperClassNameList () {
      let list = []
      
      if (this.inited === true) {
        list.push('inited')
      }
      
      if (this.localConfig.lineWrapping === false) {
        list.push('text-wrap-disabled')
      }
      
      return list.join(' ')
    },
    computedIndentSpaces () {
      if (this.localConfig.indent.mode === 'tab') {
        return '\t'
      }
      
      let spaces = []
      for (let i = 0; i < this.localConfig.indent.size; i++) {
        spaces.push(' ')
      }
      return spaces.join('')
    }
  }
}