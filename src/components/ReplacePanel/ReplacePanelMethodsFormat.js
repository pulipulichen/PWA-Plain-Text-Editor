//import htmlMinifier from 'html-minifier-terser'
//import cssMinifier from 'css-minifiers'

 
export default function (ReplacePanel) {

  ReplacePanel.methods.doFormat = function () {
    let tool = this.localConfig.formatTool
    //console.log(tool)
    // console.log(this.$refs.GroupingTool.groupingByDifference)
    if (tool === 'lines-trim') {
      return this.trimTextContent()
    }
    else if (tool === 'lines-ltrim') {
      return this.ltrimTextContent()
    }
    else if (tool === 'lines-rtrim') {
      return this.rtrimTextContent()
    }
    else if (tool === 'remove-line-breaks') {
      return this.localConfig.textContent = this.localConfig.textContent.split('\n').join('')
    }
    else if (tool === 'code-minifiy') {
      return this.minifiyCode()
    }
    else if (tool === 'code-beautify') {
      return this.beautifyCode()
    }
    else if (tool === 'code-to-json') {
      return this.codeToJSON()
    }
    else if (tool === 'json-to-lines') {
      return this.JSONtoLines()
    }
    else if (tool === 'empty-lines-remove') {
      return this.removeEmptyLines()
    }
    else if (tool === 'duplicate-empty-lines-remove') {
      return this.removeDuplicateEmptyLines()
    }
    else if (tool === 'duplicate-lines-remove') {
      return this.removeDuplicateLines()
    }
    else if (tool === 'SheetTool.sort-lines') {
      return this.sortLines()
    }
    else if (tool === 'SheetTool.shuffle-lines') {
      return this.shuffleLines()
    }
    else if (tool === 'SheetTool.shuffle-columns') {
      return this.shuffleColumns()
    }
    else if (tool === 'SheetTool.transpose') {
      return this.transpose()
    }
    else if (tool === 'SheetTool.removeColumn') {
      return this.$refs.SheetTool.removeColumn(this.textContentLines)
    }
    else if (tool === 'GroupingTool.grouping-by-similarity') {
      return this.groupingBySimilarity()
    }
    else if (tool === 'GroupingTool.grouping-by-difference') {
      return this.groupingByDifference()
    }
  }
  
  ReplacePanel.methods.sortLines = function () {
    this.removeEmptyLines()
    this.$refs.SheetTool.sortLines(this.textContentLines)
  }
  
  ReplacePanel.methods.shuffleLines = function () {
    this.removeEmptyLines()
    this.$refs.SheetTool.shuffleLines(this.textContentLines)
  }

  ReplacePanel.methods.shuffleColumns = function () {
    this.removeEmptyLines()
    this.$refs.SheetTool.shuffleColumns(this.textContentLines)
  }

  ReplacePanel.methods.transpose = function () {
    this.$refs.SheetTool.transpose(this.textContentLines)
  }

  let doAutoFormatTimer
  ReplacePanel.methods.doAutoFormat = function () {
    if (this.localConfig.autoFormat === false || this.isAutoFormatEnable === false) {
      return false
    }

    if (this.localConfig.formatTool.indexOf('trim') === -1 && this.localConfig.formatTool.indexOf('remove') === -1) {
      return false
    }


    clearTimeout(doAutoFormatTimer)
    doAutoFormatTimer = setTimeout(() => {      
      this.doFormat()
      // doAutoFormatTimer = setTimeout(() => {      
      //   this.utils.ClipboardUtils.copyPlainString(this.localConfig.textContent.trim())
      // }, 1000)
    }, 1000)
  }

  ReplacePanel.methods.initAutoFormatEvent = function () {
    window.addEventListener('focus', async () => {
      if (this.localConfig.autoFormat === false) {
        return false
      }

      this.localConfig.textContent = await this.utils.ClipboardUtils.getTextFromClipboard()
    })
  }
}
    