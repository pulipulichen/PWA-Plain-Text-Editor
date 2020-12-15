export default function (ReplacePanel) {
  ReplacePanel.computed.showReplaceLineOptionsSelect = function () {
    return (this.localConfig.replaceMode === 'line')
  }

  ReplacePanel.computed.computedReplaceInputClassName = function () {
    return {
      'has-replace-line-options-select': this.showReplaceLineOptionsSelect,
      'has-undo-button': !this.isUndoDisabled,
    }
  }

  ReplacePanel.computed.isReplaceDisabled = function () {
    if (this.localConfig.textContent === '') {
      return true
    }

    if (this.localConfig.replaceMode !== 'line'
            && this.localConfig.stringToSearch === '') {
      return true
    }

    if (this.replaceOccurCount === 0) {
      return true
    }

    return false
  }

  ReplacePanel.computed.replaceOccurCount = function () {
    if (this.localConfig.textContent === '') {
      return 0
    }

    if (this.localConfig.replaceMode !== 'line'
            && this.localConfig.stringToSearch === '') {
      return true
    }

    let count = 0
    //let stringToSearch = this.localConfig.stringToSearch
    if (this.localConfig.replaceMode === 'raw') {
      count = this.countOccurRaw
    } else if (this.localConfig.replaceMode === 'regex') {
      count = this.countOccurRegex
    } else if (this.localConfig.replaceMode === 'line') {
      count = this.countOccurLine
    }

    //console.log(this.localConfig.textContent, this.localConfig.stringToSearch, count)

    return count
  }

  // ----------------------------

  ReplacePanel.computed.countOccurRaw = function () {
    let stringToSearch = this.stringToSearchRaw

    return this.localConfig.textContent.split(stringToSearch).length - 1
  }

  ReplacePanel.computed.countOccurRegex = function () {
    let search = this.localConfig.stringToSearch
    if (search === '') {
      return 0
    }
    //return 0
    //console.log(`'${search}'`)
    //replace = replace.split('\\').join('\\\\')
    let re
    eval(`re = new RegExp("${search}", "g")`)
    //console.log(re)
    let count = 0
    count = ((this.localConfig.textContent || '').match(re) || []).length
    return count
  }
  ReplacePanel.computed.textContentTrim = function () {
    return this.localConfig.textContent.trim()
  }
  ReplacePanel.computed.textContentLines = function () {
    return this.localConfig.textContent.split('\n')
  }
  ReplacePanel.computed.textContentLinesTrim = function () {
    return this.textContentLines.map(line => line.trim())
  }
  ReplacePanel.computed.stringToSearchRaw = function () {
    return this.localConfig.stringToSearch.replace(/\\/g, '\\')
  }

  ReplacePanel.computed.stringToReplaceWithRaw = function () {
    return this.localConfig.stringToReplaceWith.replace(/\\/g, '\\')
  }

  ReplacePanel.computed.countOccurLine = function () {
    let stringToSearch = this.stringToSearchRaw
    //console.log(stringToSearch)
    if (stringToSearch === '') {
      return this.textContentLinesTrim.length
    }

    let count = 0

    let mode = this.localConfig.replaceLineOptions.mode
    if (mode === 'prefix') {
      this.textContentLinesTrim.forEach((line) => {
        if (line.startsWith(stringToSearch)) {
          count++
        }
      })
    } else if (mode === 'suffix') {
      this.textContentLinesTrim.forEach((line) => {
        if (line.endsWith(stringToSearch)) {
          count++
        }
      })
    } else {
      this.textContentLinesTrim.forEach((line) => {
        if (line.indexOf(stringToSearch) > -1) {
          count++
        }
      })
    }
    //console.log(count)
    return count
  }

  // ----------------------------

  ReplacePanel.computed.isUndoDisabled = function () {
    if (this.textContentHistory.length === 0) {
      return true
    }
    if (this.textContentHistoryIndex > 0) {
      return false
    }
    return true
  }

  ReplacePanel.computed.isRedoDisabled = function () {
    if (this.textContentHistory.length === 0) {
      return true
    }
    if (this.textContentHistoryIndex < this.textContentHistory.length - 1) {
      return false
    }
    return true
  }

  ReplacePanel.computed.stringToSearch = function () {
    let stringToSearch
    if (this.localConfig.replaceMode === 'regex') {
      stringToSearch = this.localConfig.stringToSearch
    } else {
      stringToSearch = this.stringToSearchRaw
    }
    return stringToSearch
  }
  ReplacePanel.computed.isSearchEnabled = function () {
    if (this.stringToSearch === '') {
      return false
    }

    return (this.localConfig.textContent.indexOf(this.stringToSearch) > -1)
  }

  // ----------------------------

  ReplacePanel.computed.computedReplaceButtonText = function () {
    if (this.isReplaceDisabled === true) {
      return 'Replace'
    }

    let replaceOccurCount = this.replaceOccurCount
    //replaceOccurCount = 121043

    let countLength = (replaceOccurCount + '').length
    //console.log(countLength)
    if (countLength <= 6) {
      return `Replace (${replaceOccurCount})`
    } else if (countLength <= 8) {
      let countK = Math.round(replaceOccurCount / 1000)
      return `Replace (${countK}K)`
    } else if (countLength <= 10) {
      let countK = Math.round(replaceOccurCount / 1000000)
      return `Replace (${countK}M)`
    } else if (countLength <= 13) {
      let countK = Math.round(replaceOccurCount / 1000000000)
      return `Replace (${countK}B)`
    } else {
      return 'Replace (...)'
    }
  }
  ReplacePanel.computed.computedReplaceButtonTitle = function () {
    if (this.isReplaceDisabled === true) {
      return 'Replace'
    }
    return `Replace (${this.replaceOccurCount})`
  }

  ReplacePanel.computed.isTrimEnabled = function () {
    for (let i = 0; i < this.textContentLines.length; i++) {
      let line = this.textContentLines[i]
      if (line !== line.trim()) {
        return true
      }
    }
    return false
  }
  ReplacePanel.computed.isLTrimEnabled = function () {
    for (let i = 0; i < this.textContentLines.length; i++) {
      let line = this.textContentLines[i]
      let char = line.trim().slice(0, 1)
      let index = line.indexOf(char)
      if (index > 0) {
        return true
      }
    }
    return false
  }
  ReplacePanel.computed.isRTrimEnabled = function () {
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