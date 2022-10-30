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
    else if (tool === 'empty-lines-remove') {
      return this.removeEmptyLines()
    }
    else if (tool === 'duplicate-empty-lines-remove') {
      return this.removeDuplicateEmptyLines()
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
  
  ReplacePanel.methods.minifiyCode = async function () {
    this.$parent.$refs.CodeMirrorEditor.minify()
    //console.log(mode)
    
    
    //console.error('minifiyCode')
    //let result = await minify(this.localConfig.textContent)
    //console.log(result)
    //this.localConfig.textContent = result
  }
  
  ReplacePanel.methods.beautifyCode = function () {
    //console.error('beautifyCode')
    this.$parent.$refs.CodeMirrorEditor.autoFormat()
    //console.log()
    this.isModifiedAfterBeautification = false
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
}
    