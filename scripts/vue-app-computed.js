var appComputed = {
  classNameApp () {
    return {
      'show-replace-panel': this.config.displayReplacePanel, 
      'show-replace-panel-extended': (this.config.replaceMode === 'line')
    }
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
    let stringToSearch = this.config.stringToSearch
    if (this.config.replaceMode === 'raw') {
      stringToSearch = stringToSearch.replace(/\\/g, '\\\\')
      
      count = this.config.textContent.split(stringToSearch).length - 1
    }
    else if (this.config.replaceMode === 'regex') {
      let replace = this.config.stringToSearch
      let re = new RegExp(replace, "g");
      count = ((this.config.textContent || '').match(re) || []).length
    }
    
    //console.log(this.config.textContent, this.config.stringToSearch, count)
    
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
}
