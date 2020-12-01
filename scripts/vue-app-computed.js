var appComputed = {
  classNameApp () {
    let className = []
    
    if (this.config.displayReplacePanel) {
      className.push('show-replace-panel')
    }
    
    if (this.config.replaceMode === 'line') {
      className.push('show-replace-panel-extended')
    }
    
    return className
  },
  isReplaceDisabled () {
    if (this.config.textContent === '') {
      return true
    }
    
    if (this.config.replaceMode !== 'line'
            && this.config.stringToSearch === '') {
      return true
    }
    
    if (this.replaceOccurCount === 0) {
      return true
    }
    
    return false
  },
  replaceOccurCount () {
    if (this.config.textContent === '') {
      return 0
    }
    
    if (this.config.replaceMode !== 'line'
            && this.config.stringToSearch === '') {
      return true
    }
     
    let count = 0
    //let stringToSearch = this.config.stringToSearch
    if (this.config.replaceMode === 'raw') {
      count = this.countOccurRaw
    }
    else if (this.config.replaceMode === 'regex') {
      count = this.countOccurRegex
    }
    else if (this.config.replaceMode === 'line') {
      count = this.countOccurLine
    }
    
    //console.log(this.config.textContent, this.config.stringToSearch, count)
    
    return count
  },
  countOccurRaw () {
    let stringToSearch = this.stringToSearchRaw
      
    return this.config.textContent.split(stringToSearch).length - 1
  },
  countOccurRegex () {
    let search = this.config.stringToSearch
    if (search === '') {
      return 0
    }
    //return 0
    //console.log(`'${search}'`)
    //replace = replace.split('\\').join('\\\\')
    let re
    eval(`re = new RegExp("${search}", "g")`)
    //console.log(re)
    let count = ((this.config.textContent || '').match(re) || []).length
    return count
  },
  textContentTrim () {
    return this.config.textContent.trim()
  },
  textContentLines () {
    return this.config.textContent.split('\n')
  },
  textContentLinesTrim () {
    return this.textContentLines.map(line => line.trim())
  },
  stringToSearchRaw () {
    return this.config.stringToSearch.replace(/\\/g, '\\')
  },
  stringToReplaceWithRaw () {
    return this.config.stringToReplaceWith.replace(/\\/g, '\\')
  },
  countOccurLine () {
    let stringToSearch = this.stringToSearchRaw
    console.log(stringToSearch)
    if (stringToSearch === '') {
      return this.textContentLinesTrim.length
    }
    
    let count = 0
    
    let mode = this.config.replaceLineOptions.mode
    if (mode === 'prefix') {
      this.textContentLinesTrim.forEach((line) => {
        if (line.startsWith(stringToSearch)) {
          count++
        }
      })
    }
    else if (mode === 'suffix') {
      this.textContentLinesTrim.forEach((line) => {
        if (line.endsWith(stringToSearch)) {
          count++
        }
      })
    }
    else {
      this.textContentLinesTrim.forEach((line) => {
        if (line.indexOf(stringToSearch) > -1) {
          count++
        }
      })
    }
    //console.log(count)
    return count
  },
  textReplaceButton () {
    if (this.isReplaceDisabled === true) {
      return 'Replace'
    }
    return `Replace ` + this.replaceOccurCount
  },
  isUndoDisabled () {
    if (this.textContentHistory.length === 0) {
      return true
    }
    if (this.textContentHistoryIndex > 0) {
      return false
    }
    return true
  },
  isRedoDisabled () {
    if (this.textContentHistory.length === 0) {
      return true
    }
    if (this.textContentHistoryIndex < this.textContentHistory.length - 1) {
      return false
    }
    return true
  },
  isTrimEnabled () {
    for (let i = 0; i < this.textContentLines.length; i++) {
      let line = this.textContentLines[i]
      if (line !== line.trim()) {
        return true
      }
    }
    return false
  },
  isLTrimEnabled () {
    for (let i = 0; i < this.textContentLines.length; i++) {
      let line = this.textContentLines[i]
      let char = line.trim().slice(0, 1)
      let index = line.indexOf(char)
      if (index > 0) {
        return true
      }
    }
    return false
  },
  isRTrimEnabled () {
    for (let i = 0; i < this.textContentLines.length; i++) {
      let line = this.textContentLines[i]
      let char = line.trim().slice(-1)
      let index = line.lastIndexOf(char)
      if (index < line.length - 1) {
        return true
      }
    }
    return false
  },
  isFormatCodeEnabled () {
    return (this.isFormatJSONEnabled || this.isFormatXMLEnabled)
  },
  isFormatJSONEnabled () {
    if (this.textContentTrim.startsWith('{') 
            && this.textContentTrim.endsWith('}')) {
      try {
        //console.log(this.textContentTrim)
        //JSON.parse(this.textContentTrim)
        eval('let test = ' + this.textContentTrim)
        return true
      }
      catch (e) {
        return false
      }
    }
    return false
  },
  isFormatXMLEnabled () {
    if (this.textContentTrim.startsWith('<') 
            && this.textContentTrim.endsWith('>')) {
      let rightIndex = this.textContentTrim.indexOf('>')
      //console.log(rightIndex)
      if (rightIndex === this.textContentTrim.length - 1) {
        return false
      }
      
      let leftIndex = this.textContentTrim.lastIndexOf('<')
      //console.log(leftIndex)
      if (leftIndex === 0) {
        return false
      }
      
      return true
    }
    return false
  },
  stringToSearch () {
    let stringToSearch
    if (this.config.replaceMode === 'regex') {
      stringToSearch = this.config.stringToSearch
    } 
    else {
      stringToSearch = this.stringToSearchRaw
    }
    return stringToSearch
  },
  isSearchEnabled () {
    if (this.stringToSearch === '') {
      return false
    }
    
    return (this.config.textContent.indexOf(this.stringToSearch) > -1)
  }
}
