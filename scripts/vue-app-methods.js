/* global postMessageAPI, XLSX, GameMaster, appMethodsUI, appMethodsIV, appMethodsInit, appMethodsQuery, appMethodsUtils, appMethodsSearch, domtoimage */

var appMethods = {
  restoreFromLocalStorage () {
    let data = localStorage.getItem('pwa-plain-text-editor')
    console.log(data)
    if (data === null || data.startsWith('{') === false || data.endsWith('}') === false) {
      return false
    }
    
    try {
      data = JSON.parse(data)
    } catch (e) {
      console.error(e)
    }
    
    console.log(data)
    for (let key in data) {
      this.config[key] = data[key]
    }
  },
  saveToLocalStorage () {
    let data = this.config
    console.log(data)
    data = JSON.stringify(data)
    console.log(data)
    localStorage.setItem('pwa-plain-text-editor', data)
  },
}