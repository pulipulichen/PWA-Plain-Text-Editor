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
  clearHistory () {
    this.textContentHistory = []
    this.textContentHistoryIndex = -1
    this.textContentModified = true
  },
  doReplace () {
    let stringToSearch = this.config.stringToSearch
    let stringToReplaceWith = this.config.stringToReplaceWith
    
    if (this.textContentHistoryIndex > -1 
            && this.textContentHistoryIndex !== this.textContentHistory.length - 1) {
      this.textContentHistory = this.textContentHistory.slice(0, this.textContentHistoryIndex)
    }
    
    this.saveHistory()
    
    if (this.config.replaceMode === 'raw') {
      this.doReplaceRaw()
    }
    else if (this.config.replaceMode === 'regex') {
      this.doReplaceRegex()
    }
    else if (this.config.replaceMode === 'line') {
      let mode = this.config.replaceLineOptions.mode
      if (mode === 'prefix') {
        this.doReplaceLinePrefix()
      }
      else if (mode === 'suffix') {
        this.doReplaceLineSuffix()
      }
      else if (mode === 'first' || mode === 'last') {
        this.doReplaceLineIndex()
      }
    }
    
    this.textContentModified = false
  },
  saveHistory () {
    
    this.textContentHistory.push(this.config.textContent)
    this.textContentHistoryIndex = this.textContentHistory.length
    
  },
  doReplaceRaw () {
    let stringToSearch = this.config.stringToSearch
    let stringToReplaceWith = this.config.stringToReplaceWith
    stringToSearch = stringToSearch.replace(/\\/g, '\\\\')
    stringToReplaceWith = stringToReplaceWith.replace(/\\/g, '\\\\')

    this.config.textContent = this.config.textContent.split(this.config.stringToSearch)
            .join(this.config.stringToReplaceWith)
  },
  doReplaceRegex () {
    let stringToSearch = this.config.stringToSearch
    //let stringToReplaceWith = this.config.stringToReplaceWith
    let re = new RegExp(stringToSearch, "g")
    this.config.textContent = this.config.textContent.replace(re, this.config.stringToReplaceWith);
  },
  doReplaceLinePrefix () {
    this.config.textContent = this.textContentLines.map(line => {
      /*
      if (this.config.replaceLineOptions.lTrim === true) {
        if (line.trim() === '') {
          return ''
        }
        
        let firstChar = line.trim().slice(0, 1)
        let firstIndex = line.indexOf(firstChar)
        line = line.slice(firstIndex)
        
        if (line.startsWith(this.stringToSearchRaw)) {
          return this.stringToReplaceWithRaw + line.slice(this.stringToSearchRaw.length)
        }
      }
      else {
        if (line.trim() === '') {
          return line
        }
      }
      */
      
      let firstChar = line.trim().slice(0, 1)
      let firstIndex = line.indexOf(firstChar)
      
      let padding = line.slice(0, firstIndex)
      let trimLine = line.slice(firstIndex)
      
      if (trimLine.startsWith(this.stringToSearchRaw)) {
        return padding + this.stringToReplaceWithRaw + trimLine.slice(this.stringToSearchRaw.length)
      }
      else {
        return line
      }
    }).join('\n')
  },
  doReplaceLineSuffix () {
    this.config.textContent = this.textContentLines.map(line => {
      
      let lastChar = line.trim().slice(-1)
      //console.log(lastChar)
      let lastIndex = line.lastIndexOf(lastChar)
      
      let padding = line.slice(lastIndex + 1)
      let trimLine = line.slice(0, lastIndex + 1)
      
      if (trimLine.endsWith(this.stringToSearchRaw)) {
        return trimLine.slice(0, trimLine.length - this.stringToSearchRaw.length) + this.stringToReplaceWithRaw +  padding
      }
      else {
        return line
      }
    }).join('\n')
  },
  doReplaceLineIndex () {
    let mode = this.config.replaceLineOptions.mode
    
    this.config.textContent = this.textContentLines.map(line => {
      
      let index
      if (mode === 'first') {
        index = line.indexOf(this.stringToSearchRaw)
      }
      else {
        index = line.lastIndexOf(this.stringToSearchRaw)
      }
              
      if (index === -1) {
        return line
      }
      
      if (index === 0) {
        return this.stringToReplaceWithRaw + line.slice(this.stringToSearchRaw.length)
      }
      else if (index === line.length - this.stringToSearchRaw.length) {
        return line.slice(0, index) + this.stringToReplaceWithRaw
      }
      else {
        return line.slice(0, index) + this.stringToReplaceWithRaw + line.slice(index + this.stringToSearchRaw.length)
      }
    }).join('\n')
  },
  undo () {
    //console.log('undo', this.textContentHistoryIndex, this.textContentHistory.length, this.textContentHistory[(this.textContentHistoryIndex)])
    //console.log(this.textContentHistory)
    if ((this.textContentHistoryIndex) <= 0
            || !this.textContentHistory[(this.textContentHistoryIndex - 1)]) {
      return false
    }
    
    if (this.textContentHistoryIndex === this.textContentHistory.length) {
      this.textContentHistory.push(this.config.textContent)
    }
    
    this.textContentHistoryIndex--
    this.config.textContent = this.textContentHistory[this.textContentHistoryIndex]
  },
  redo () {
    //console.log('redo', this.textContentHistoryIndex, this.textContentHistory.length, this.textContentHistory[(this.textContentHistoryIndex + 1)])
    //console.log(this.textContentHistory)
    if ((this.textContentHistoryIndex + 1) > this.textContentHistory.length
            || !this.textContentHistory[(this.textContentHistoryIndex + 1)]) {
      return false
    }
    
    this.textContentHistoryIndex++
    this.config.textContent = this.textContentHistory[this.textContentHistoryIndex]
  },
  clearTextContentConfirm () {
    if (window.confirm('Are you sure?')) {
      this.config.textContent = ''
      this.clearHistory()
    }
  },
  trimTextContent () {
    this.saveHistory()
    
    this.config.textContent = this.textContentLines.map(line => line.trim()).join('\n')
  },
  ltrimTextContent () {
    this.saveHistory()
    
    this.config.textContent = this.textContentLines.map(line => {
      let char = line.trim().slice(0, 1)
      let index = line.indexOf(char)
      if (index === 0) {
        return line
      }
      else {
        return line.slice(index)
      }
    }).join('\n')
  },
  rtrimTextContent () {
    this.saveHistory()
    
    this.config.textContent = this.textContentLines.map(line => {
      let char = line.trim().slice(-1)
      let index = line.lastIndexOf(char)
      if (index === line.length - 1) {
        return line
      }
      else {
        return line.slice(0, index + 1)
      }
    }).join('\n')
  }
}