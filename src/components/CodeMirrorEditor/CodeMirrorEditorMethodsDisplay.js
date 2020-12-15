export default function (CodeMirrorEditor) {
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
}