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
    if (this.config.textContent === ''
            || this.config.stringToSearch === '') {
      return true
    }
    
    if (this.replaceOccurCount === 0) {
      return true
    }
    
    return false
  },
  replaceOccurCount () {
    if (this.config.textContent === ''
            || this.config.stringToSearch === '') {
      return 0
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
    let stringToSearch = this.config.stringToSearch
    stringToSearch = stringToSearch.replace(/\\/g, '\\\\')
      
    return this.config.textContent.split(stringToSearch).length - 1
  },
  countOccurRegex () {
    let replace = this.config.stringToSearch
    let re = new RegExp(replace, "g");
    return ((this.config.textContent || '').match(re) || []).length
  },
  textContentLines () {
    return this.config.textContent.split('\n')
  },
  textContentLinesTrim () {
    return this.textContentLines.map(line => line.trim())
  },
  stringToSearchRaw () {
    return this.config.stringToSearch.replace(/\\/g, '\\\\')
  },
  stringToReplaceWithRaw () {
    return this.config.stringToReplaceWith.replace(/\\/g, '\\\\')
  },
  countOccurLine () {
    let stringToSearch = this.config.stringToSearch
    stringToSearch = stringToSearch.replace(/\\/g, '\\\\')
    
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
  }
}
