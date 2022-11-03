export default function (ReplacePanel) {
  ReplacePanel.watch = {
    'config.viewportSize.height' (height) {
      if (this.localConfig.displayPanel === 'replace') {
        //console.log(height, this.viewportHeightThreshold)
        if (height > this.viewportHeightThreshold) {
          this.config.panelHeight = this.panelHeight
        }
        else {
          this.config.panelHeight = '0rem'
        }
      }
    },
    'localConfig.textContent'() {
      if (this.replaceLock === true) {
        return false
      }
      this.clearHistory()
      this.isModifiedAfterBeautification = true
      this.doAutoFormat()
    },
    'localConfig.displayPanel'() {
      this.setPanelHeight()
    },
    'localConfig.replaceMode'() {
      this.setPanelHeight()
    },
    'localConfig.locale'() {
      this.$i18n.locale = this.localConfig.locale;
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
}