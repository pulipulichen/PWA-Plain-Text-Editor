var appWatch = {
  'config.textContent' () {
    this.saveToLocalStorage()
    this.updateDocumentTitle()
  },
  'config.stringToSearch' () {
    this.saveToLocalStorage()
  },
  'config.stringToReplaceWith' () {
    this.saveToLocalStorage()
  },
  'config.replaceMode' () {
    this.saveToLocalStorage()
  },
  'config.displayReplacePanel' () {
    this.saveToLocalStorage()
  },
  'config.replaceLineOptions.mode' () {
    this.saveToLocalStorage()
  },
  'config.enableTextWrap' () {
    this.saveToLocalStorage()
    this.initCheckbox()
  },
  'config.tab.mode' () {
    this.saveToLocalStorage()
  },
  'config.tab.spaceNumber' () {
    this.saveToLocalStorage()
  },
}