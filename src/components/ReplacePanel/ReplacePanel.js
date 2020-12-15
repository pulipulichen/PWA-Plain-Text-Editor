/* global PULI_UTILS, CodeMirror */

let ReplacePanel = {
  props: ['config', 'localConfig', 'utils'],
  data: function () {
    this.$i18n.locale = this.config.locale
    return {
      textContentHistory: [],
      replaceLock: false,
      textContentModified: false,
      panelHeight: '10.5rem'
    }
  },
  watch: {
    'localConfig.textContent'() {
      if (this.replaceLock === true) {
        return false
      }
      this.clearHistory()
    },
    'localConfig.displayPanel'() {
      this.setPanelHeight()
    },
    'localConfig.replaceMode'() {
      this.setPanelHeight()
    },
    'config.inited'() {
      if (this.config.inited === false) {
        return false
      }
      this.setPanelHeight()
    }
  },
  computed: {}, // 轉移到 ReplacePanelComputed.js
  mounted() {
    this.setPanelHeight()
  },
  methods: {
    setPanelHeight() {
      //console.log('setPanelHeight', this.localConfig.displayReplacePanel, this.localConfig.replaceMode)
      if (this.localConfig.displayPanel === 'replace') {
//        if (this.localConfig.replaceMode === 'line') {
//          this.config.panelHeight = '12rem'
//        }
//        else {
//          this.config.panelHeight = '8rem'
//        }
        this.config.panelHeight = this.panelHeight
      }
      //console.log(this.config.panelHeight)
    },
    focus: async function () {
      await this.utils.AsyncUtils.sleep(0)
      this.$refs.SearchInput.focus()
    },
    findPrev() {
      let CodeMirror = this.$parent.$refs.CodeMirror
      return CodeMirror.findPrev()
    },
    findNext() {
      let CodeMirror = this.$parent.$refs.CodeMirror
      return CodeMirror.findNext()
    },
    selectReplaceInput: async function () {
      await this.utils.AsyncUtils.sleep(0)
      //console.log('selectReplaceInput', this.$refs.ReplaceInput)
      this.$refs.ReplaceInput.focus()
      this.$refs.ReplaceInput.select()
    },
    clearHistory() {
      //console.log('clearHistory')
      this.textContentHistory = []
      this.textContentHistoryIndex = -1
      this.textContentModified = true
    },
    doReplace: async function () {
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
    },
    saveHistory() {
      //this.clearHistory()
      this.textContentHistory.push(this.localConfig.textContent)
      this.textContentHistoryIndex = this.textContentHistory.length

    },
    doReplaceRaw() {
      let stringToSearch = this.stringToSearchRaw
      let stringToReplaceWith = this.stringToReplaceWithRaw

      console.log(stringToSearch, stringToReplaceWith)

      this.localConfig.textContent = this.localConfig.textContent.split(stringToSearch)
              .join(stringToReplaceWith)
      
      console.log(this.localConfig.textContent)
    },
    doReplaceRegex() {
      let stringToSearch = this.localConfig.stringToSearch
      let stringToReplaceWith = this.localConfig.stringToReplaceWith
      //console.log(stringToReplaceWith)
      stringToReplaceWith = stringToReplaceWith.split('\\n').join('\n')
      let re = new RegExp(stringToSearch, "g")

      this.localConfig.textContent = this.localConfig.textContent.replace(re, stringToReplaceWith);
    },
    doReplaceLinePrefix() {
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
    },
    doReplaceLineSuffix() {
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
    },
    doReplaceLineIndex() {
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
    },
    undo() {
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
    },
    redo() {
      //console.log('redo', this.textContentHistoryIndex, this.textContentHistory.length, this.textContentHistory[(this.textContentHistoryIndex + 1)])
      //console.log(this.textContentHistory)
      if ((this.textContentHistoryIndex + 1) > this.textContentHistory.length
              || !this.textContentHistory[(this.textContentHistoryIndex + 1)]) {
        return false
      }

      this.textContentHistoryIndex++
      this.localConfig.textContent = this.textContentHistory[this.textContentHistoryIndex]
    },
    /*
    clearTextContentConfirm() {
      if (window.confirm('Are you sure?')) {
        this.localConfig.textContent = ''
        this.clearHistory()
      }
    },
    */
    trimTextContent() {
      this.saveHistory()

      this.localConfig.textContent = this.textContentLines.map(line => line.trim()).join('\n')
    },
    ltrimTextContent() {
      this.saveHistory()

      this.localConfig.textContent = this.textContentLines.map(line => {
        let char = line.trim().slice(0, 1)
        let index = line.indexOf(char)
        if (index === 0) {
          return line
        } else {
          return line.slice(index)
        }
      }).join('\n')
    },
    rtrimTextContent() {
      this.saveHistory()

      this.localConfig.textContent = this.textContentLines.map(line => {
        let char = line.trim().slice(-1)
        let index = line.lastIndexOf(char)
        if (index === line.length - 1) {
          return line
        } else {
          return line.slice(0, index + 1)
        }
      }).join('\n')
    },
    /*
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
     this.localConfig.textContent = JSON.stringify(object, null, 2)
     }
     catch (e) {
     return false
     }
     }
     return false
     },
     formatXMLTextContent () {
     this.saveHistory()
     
     this.localConfig.textContent = this.prettifyXml(this.textContentTrim)
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
     */
    doSearchNext() {
      let stringToSearch = this.stringToSearch

      let startPos = this.localConfig.textContent.indexOf(stringToSearch, this.searchPostion)
      if (startPos === -1) {
        startPos = this.localConfig.textContent.indexOf(stringToSearch)

        if (startPos === -1) {
          return false
        }
      }

      this.searchPostion = startPos + 1

      // do selection
      // Chrome / Firefox
      let tarea = this.$refs.TextareaEditor.$el
      if (typeof (tarea.selectionStart) !== "undefined") {
        tarea.selectionStart = startPos;
        tarea.selectionEnd = startPos;

        tarea.blur();
        tarea.focus();
        tarea.selectionStart = startPos;
        tarea.selectionEnd = startPos + this.localConfig.stringToSearch.length;

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
    doSearchPrev() {
      let stringToSearch = this.stringToSearch

      let startPos
      if (this.searchPostion - this.stringToSearch.length - 1 < 0) {
        startPos = this.localConfig.textContent.lastIndexOf(stringToSearch)
      } else {
        startPos = this.localConfig.textContent.lastIndexOf(stringToSearch, this.searchPostion - this.stringToSearch.length - 1)
      }
      if (startPos === -1) {
        startPos = this.localConfig.textContent.lastIndexOf(stringToSearch)

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
      if (typeof (tarea.selectionStart) !== "undefined") {
        tarea.selectionStart = startPos;
        tarea.selectionEnd = startPos;

        tarea.blur();
        tarea.focus();
        tarea.selectionStart = startPos;
        tarea.selectionEnd = startPos + this.localConfig.stringToSearch.length;


        // collapse selection here
        //tarea.blur()
        //tarea.focus() // this scrolls the textarea
        // expand selection here
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
    
  }
}

import ReplacePanelComputed from './ReplacePanelComputed.js'
ReplacePanelComputed(ReplacePanel)

export default ReplacePanel