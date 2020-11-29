/* global postMessageAPI, XLSX, GameMaster, appMethodsUI, appMethodsIV, appMethodsInit, appMethodsQuery, appMethodsUtils, appMethodsSearch, domtoimage */

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
  doReplace () {
    let stringToSearch = this.config.stringToSearch
    let stringToReplaceWith = this.config.stringToReplaceWith
    
    if (this.config.replaceMode === 'raw') {
      stringToSearch = stringToSearch.replace(/\\/g, '\\\\')
      stringToReplaceWith = stringToReplaceWith.replace(/\\/g, '\\\\')
      
      this.config.textContent = this.config.textContent.split(this.config.stringToSearch)
              .join(this.config.stringToReplaceWith)
    }
    else if (this.config.replaceMode === 'regex') {
      let re = new RegExp(stringToSearch, "g")
      this.config.textContent = this.config.textContent.replace(re, this.config.stringToReplaceWith);
    }
  },
  undo () {
    
  },
  redo () {
    
  }
}