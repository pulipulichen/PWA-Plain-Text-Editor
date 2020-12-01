/* global postMessageAPI, XLSX, GameMaster, appMethodsUI, appMethodsIV, appMethodsInit, appMethodsQuery, appMethodsUtils, appMethodsSearch, domtoimage, hotkeys */

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
    //let stringToSearch = this.config.stringToSearch
    //let stringToReplaceWith = this.config.stringToReplaceWith
    
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
    //this.clearHistory()
    this.textContentHistory.push(this.config.textContent)
    this.textContentHistoryIndex = this.textContentHistory.length
    
  },
  doReplaceRaw () {
    let stringToSearch = this.stringToSearchRaw
    let stringToReplaceWith = this.stringToReplaceWithRaw

    console.log(stringToSearch, stringToReplaceWith)

    this.config.textContent = this.config.textContent.split(stringToSearch)
            .join(stringToReplaceWith)
  },
  doReplaceRegex () {
    let stringToSearch = this.config.stringToSearch
    let stringToReplaceWith = this.config.stringToReplaceWith
    //console.log(stringToReplaceWith)
    stringToReplaceWith = stringToReplaceWith.split('\\n').join('\n')
    let re = new RegExp(stringToSearch, "g")
    
    this.config.textContent = this.config.textContent.replace(re, stringToReplaceWith);
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
  },
  formatCode () {
    if (this.isFormatJSONEnabled) {
      return this.formatJSONTextContent()
    }
    else if (this.isFormatXMLEnabled) {
      return this.formatXMLTextContent()
    }
  },
  formatJSONTextContent () {
    this.saveHistory()
    
    if (this.textContentTrim.startsWith('{') 
            && this.textContentTrim.endsWith('}')) {
      try {
        //let object = JSON.parse(this.textContentTrim)
        let object
        eval('object = ' + this.textContentTrim)
        this.config.textContent = JSON.stringify(object, null, 2)
      }
      catch (e) {
        return false
      }
    }
    return false
  },
  formatXMLTextContent () {
    this.saveHistory()
    
    this.config.textContent = this.prettifyXml(this.textContentTrim)
  },
  prettifyXml (sourceXml) {
    var xmlDoc = new DOMParser().parseFromString(sourceXml, 'application/xml');
    var xsltDoc = new DOMParser().parseFromString([
        // describes how we want to modify the XML - indent everything
        '<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform">',
        '  <xsl:strip-space elements="*"/>',
        '  <xsl:template match="para[content-style][not(text())]">', // change to just text() to strip space in text nodes
        '    <xsl:value-of select="normalize-space(.)"/>',
        '  </xsl:template>',
        '  <xsl:template match="node()|@*">',
        '    <xsl:copy><xsl:apply-templates select="node()|@*"/></xsl:copy>',
        '  </xsl:template>',
        '  <xsl:output indent="yes"/>',
        '</xsl:stylesheet>',
    ].join('\n'), 'application/xml');

    var xsltProcessor = new XSLTProcessor();    
    xsltProcessor.importStylesheet(xsltDoc);
    var resultDoc = xsltProcessor.transformToDocument(xmlDoc);
    var resultXml = new XMLSerializer().serializeToString(resultDoc);
    return resultXml;
  },
  doSearchNext () {
    let stringToSearch = this.stringToSearch
    
    let startPos = this.config.textContent.indexOf(stringToSearch, this.searchPostion)
    if (startPos === -1) {
      startPos = this.config.textContent.indexOf(stringToSearch)
      
      if (startPos === -1) {
        return false
      }
    }

    this.searchPostion = startPos + 1

    // do selection
    // Chrome / Firefox
    let tarea = this.$refs.TextareaEditor.$el
    if (typeof(tarea.selectionStart) !== "undefined") {
        tarea.focus();
        tarea.selectionStart = startPos;
        tarea.selectionEnd = startPos + this.config.stringToSearch.length;
        return true;
    }
    /*
    // IE
    if (document.selection && document.selection.createRange) {
        tarea.focus();
        tarea.select();
        var range = document.selection.createRange();
        range.collapse(true);
        range.moveEnd("character", endPos);
        range.moveStart("character", startPos);
        range.select();
        return true;
    }
    */
    return false;
  },
  doSearchPrev () {
    let stringToSearch = this.stringToSearch
    
    let startPos
    if (this.searchPostion - this.stringToSearch.length - 1 < 0) {
      startPos = this.config.textContent.lastIndexOf(stringToSearch)
    }
    else {
      startPos = this.config.textContent.lastIndexOf(stringToSearch, this.searchPostion - this.stringToSearch.length - 1)
    }
    if (startPos === -1) {
      startPos = this.config.textContent.lastIndexOf(stringToSearch)
      
      if (startPos === -1) {
        //console.log('not found')
        return false
      }
    }
    
    //console.log(startPos)

    this.searchPostion = startPos + 1

    // do selection
    // Chrome / Firefox
    let tarea = this.$refs.TextareaEditor.$el
    if (typeof(tarea.selectionStart) !== "undefined") {
        tarea.focus();
        tarea.selectionStart = startPos;
        tarea.selectionEnd = startPos + this.config.stringToSearch.length;
        return true;
    }
    /*
    // IE
    if (document.selection && document.selection.createRange) {
        tarea.focus();
        tarea.select();
        var range = document.selection.createRange();
        range.collapse(true);
        range.moveEnd("character", endPos);
        range.moveStart("character", startPos);
        range.select();
        return true;
    }
    */
    return false;
  },
  updateDocumentTitle () {
    if (this.textContentTrim === '') {
      document.title = 'Plain Text Editor'
    }
    else {
      document.title = this.textContentTrim
    }
  },
  getSelectedText () {
    let tarea = this.$refs.TextareaEditor.$el
    if (typeof(tarea.selectionStart) !== "undefined") {
        return this.config.textContent.slice(tarea.selectionStart, tarea.selectionEnd)
    }
    return undefined
  },
  initHotKeys () {
    hotkeys.filter = function(event){
      var tagName = (event.target || event.srcElement).tagName;
      hotkeys.setScope(/^(INPUT|TEXTAREA|SELECT)$/.test(tagName) ? 'input' : 'other');
      return true;
    }
    
    hotkeys('ctrl+f,ctrl+h,alt+shift+f,ctrl+z', (event, handler) => {
      
      switch (handler.key) {
        case 'ctrl+f':
        case 'ctrl+h':
          this.config.displayReplacePanel = true
          if (this.config.displayReplacePanel) {
            let selected = this.getSelectedText()
            if (selected) {
              this.config.stringToSearch = selected
            }
            this.$refs.ReplacePanel.focus()
          }
          event.preventDefault()
          event.stopPropagation()
          break;
        case 'alt+shift+f': 
          this.formatCode()
          event.preventDefault()
          event.stopPropagation()
          break;
        case 'ctrl+z': 
          if (!this.isUndoDisabled) {
            event.preventDefault()
            event.stopPropagation()
            this.undo()
          }
          break;
      }
    });
  },
  initCheckbox () {
    if (!this.$refs.ConfigModal) {
      setTimeout(() => {
        this.initCheckbox ()
      }, 100)
      return false
    }
    
    $(this.$el).find('.ui.checkbox').checkbox()
    console.log($(this.$el).find('.ui.checkbox').length)
  },
}