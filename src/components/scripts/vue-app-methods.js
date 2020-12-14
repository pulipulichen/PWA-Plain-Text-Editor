/* global postMessageAPI, XLSX, GameMaster, appMethodsUI, appMethodsIV, appMethodsInit, appMethodsQuery, appMethodsUtils, appMethodsSearch, domtoimage, hotkeys */

var appMethods = {
  restoreFromLocalStorage () {
    if (this.debug.enableRestore === false) {
      return false
    } 
    
    let data = localStorage.getItem('pwa-plain-text-editor')
    //console.log(data)
    if (data === null || data.startsWith('{') === false || data.endsWith('}') === false) {
      return false
    }
    
    try {
      data = JSON.parse(data)
    } catch (e) {
      console.error(e)
    }
    
    //console.log(data)
    for (let key in data) {
      this.config[key] = data[key]
    }
    
    this.config.displayReplacePanel = true
  },
  saveToLocalStorage () {
    if (this.inited === false) {
      return false
    }
    
    let data = this.config
    //console.log(data)
    data = JSON.stringify(data)
    //console.log(data)
    localStorage.setItem('pwa-plain-text-editor', data)
  },
  
  /*
  updateDocumentTitle () {
    if (this.textContentTrim === '') {
      document.title = 'Plain Text Editor'
    }
    else {
      document.title = this.textContentTrim
    }
  },
   */
  getSelectedText () {
    let tarea = this.$refs.TextareaEditor.$el
    if (typeof(tarea.selectionStart) !== "undefined") {
        return this.config.textContent.slice(tarea.selectionStart, tarea.selectionEnd)
    }
    return undefined
  },
  initCheckbox () {
    if (!this.$refs.ConfigModal) {
      setTimeout(() => {
        this.initCheckbox ()
      }, 100)
      return false
    }
    
    $(this.$el).find('.ui.checkbox').checkbox()
    console.log($(this.$el).find('.ui.checkbox').length)
  },
}