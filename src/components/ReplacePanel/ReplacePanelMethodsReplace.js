export default function (ReplacePanel) {
  ReplacePanel.methods.clearHistory = function () {
    //console.log('clearHistory')
    this.textContentHistory = []
    this.textContentHistoryIndex = -1
    this.textContentModified = true
  }
  ReplacePanel.methods.doReplace = async function () {
    //let stringToSearch = this.localConfig.stringToSearch
    //let stringToReplaceWith = this.config.stringToReplaceWith

    this.replaceLock = true

    if (this.textContentHistoryIndex > -1
            && this.textContentHistoryIndex !== this.textContentHistory.length - 1) {
      this.textContentHistory = this.textContentHistory.slice(0, this.textContentHistoryIndex)
    }

    this.saveHistory()

    if (this.localConfig.replaceMode === 'raw') {
      this.doReplaceRaw()
    } else if (this.localConfig.replaceMode === 'regex') {
      this.doReplaceRegex()
    } else if (this.localConfig.replaceMode === 'line') {
      let mode = this.localConfig.replaceLineOptions.mode
      if (mode === 'prefix') {
        this.doReplaceLinePrefix()
      } else if (mode === 'suffix') {
        this.doReplaceLineSuffix()
      } else if (mode === 'first' || mode === 'last') {
        this.doReplaceLineIndex()
      }
    }

    this.textContentModified = false

    await this.utils.AsyncUtils.sleep(0)
    this.replaceLock = false
  }
  ReplacePanel.methods.saveHistory = function () {
    //this.clearHistory()
    this.textContentHistory.push(this.localConfig.textContent)
    this.textContentHistoryIndex = this.textContentHistory.length

  }
  ReplacePanel.methods.doReplaceRaw = function () {
    let stringToSearch = this.stringToSearchRaw
    let stringToReplaceWith = this.stringToReplaceWithRaw

    //console.log(stringToSearch, stringToReplaceWith)

    this.localConfig.textContent = this.localConfig.textContent.split(stringToSearch)
            .join(stringToReplaceWith)

    //console.log(this.localConfig.textContent)
  }
  ReplacePanel.methods.doReplaceRegex = function () {
    let stringToSearch = this.localConfig.stringToSearch
    let stringToReplaceWith = this.localConfig.stringToReplaceWith
    //console.log(stringToReplaceWith)
    stringToReplaceWith = stringToReplaceWith.split('\\n').join('\n')
    let re = new RegExp(stringToSearch, "g")

    this.localConfig.textContent = this.localConfig.textContent.replace(re, stringToReplaceWith);
  }
  ReplacePanel.methods.doReplaceLinePrefix = function () {
    this.localConfig.textContent = this.textContentLines.map(line => {
      /*
       if (this.localConfig.replaceLineOptions.lTrim === true) {
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
      } else {
        return line
      }
    }).join('\n')
  }
  ReplacePanel.methods.doReplaceLineSuffix = function () {
    this.localConfig.textContent = this.textContentLines.map(line => {

      let lastChar = line.trim().slice(-1)
      //console.log(lastChar)
      let lastIndex = line.lastIndexOf(lastChar)

      let padding = line.slice(lastIndex + 1)
      let trimLine = line.slice(0, lastIndex + 1)

      if (trimLine.endsWith(this.stringToSearchRaw)) {
        return trimLine.slice(0, trimLine.length - this.stringToSearchRaw.length) + this.stringToReplaceWithRaw + padding
      } else {
        return line
      }
    }).join('\n')
  }
  ReplacePanel.methods.doReplaceLineIndex = function () {
    let mode = this.localConfig.replaceLineOptions.mode

    this.localConfig.textContent = this.textContentLines.map(line => {

      let index
      if (mode === 'first') {
        index = line.indexOf(this.stringToSearchRaw)
      } else {
        index = line.lastIndexOf(this.stringToSearchRaw)
      }

      if (index === -1) {
        return line
      }

      if (index === 0) {
        return this.stringToReplaceWithRaw + line.slice(this.stringToSearchRaw.length)
      } else if (index === line.length - this.stringToSearchRaw.length) {
        return line.slice(0, index) + this.stringToReplaceWithRaw
      } else {
        return line.slice(0, index) + this.stringToReplaceWithRaw + line.slice(index + this.stringToSearchRaw.length)
      }
    }).join('\n')
  }
  ReplacePanel.methods.undo = function () {
    //console.log('undo', this.textContentHistoryIndex, this.textContentHistory.length, this.textContentHistory[(this.textContentHistoryIndex)])
    //console.log(this.textContentHistory)
    if ((this.textContentHistoryIndex) <= 0
            || !this.textContentHistory[(this.textContentHistoryIndex - 1)]) {
      return false
    }

    if (this.textContentHistoryIndex === this.textContentHistory.length) {
      this.textContentHistory.push(this.localConfig.textContent)
    }

    this.textContentHistoryIndex--
    this.localConfig.textContent = this.textContentHistory[this.textContentHistoryIndex]
  }
  ReplacePanel.methods.redo = function () {
    //console.log('redo', this.textContentHistoryIndex, this.textContentHistory.length, this.textContentHistory[(this.textContentHistoryIndex + 1)])
    //console.log(this.textContentHistory)
    if ((this.textContentHistoryIndex + 1) > this.textContentHistory.length
            || !this.textContentHistory[(this.textContentHistoryIndex + 1)]) {
      return false
    }

    this.textContentHistoryIndex++
    this.localConfig.textContent = this.textContentHistory[this.textContentHistoryIndex]
  }
}
    