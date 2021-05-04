
export default function (CodeMirrorEditor) {
    
  CodeMirrorEditor.watch = {
    'config.inited': function () {
      //console.log(this.config.inited)
      this.onConfigInited()
    },
    'config.viewportSize.height' (height) {
      if (height < this.viewportHeightThreshold) {
        this.setOption('lineWrapping', true)
        
      }
      else {
        this.setOption('lineWrapping', this.localConfig.lineWrapping)
      }
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
      //console.log(this.localConfig.lineWrapping)
      this.setOption('lineWrapping', this.localConfig.lineWrapping)
    },
    'localConfig.fontSize'() {
      this.setFontSize()
    },
    'localConfig.enableTypewritterSound' () {
      this.TypewriterSoundEffect.setEnable(this.localConfig.enableTypewritterSound)
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

      //this.TypewriterSoundEffect.playKeysSound()
    
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
      
      //let lastTextContent = this.code
      this.playSoundOnCodeDifference()
      
      this.changeLock = true
      this.localConfig.textContent = this.code
      await this.utils.AsyncUtils.sleep(0)
      this.updateDocumentTitle()
      this.changeLock = false
    },
    'localConfig.editorSimpleMode': async function () {
      await this.utils.AsyncUtils.sleep(0)
      if (this.localConfig.editorSimpleMode === true) {
        this.$refs.MainTextarea.focus()
      }
      else {
        this.codemirror.focus()
      }
    }
  }
}