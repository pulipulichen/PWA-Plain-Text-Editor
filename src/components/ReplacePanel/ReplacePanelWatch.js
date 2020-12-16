export default function (ReplacePanel) {
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