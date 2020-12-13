/* global CodeMirror, PULI_UTILS */

module.exports = {
  data () {
    return {
      editor: null,
      editor$el: null,
      markers: [],
      highlightClassName: 'highlight',
      setValueLock: false,
    }
  },
  beforeCreate: async function () {
    let vendorCodeMirror = './components/code-mirror/vendors/code-mirror'
    
    await $.require(vendorCodeMirror, [
      "/lib/codemirror.css",
      '/lib/codemirror.js',
      /*
      '/addon/search/search.js',
      
      '/addon/search/jump-to-line.js',
      
      '/addon/dialog/dialog.js',
      '/addon/dialog/dialog.css',
      */
      
      '/mode/javascript/javascript.js',
      '/mode/php/php.js',
      '/mode/css/css.js',
      '/mode/sql/sql.js',
      '/mode/yaml/yaml.js',
      '/mode/xml/xml.js',
      '/mode/htmlembedded/htmlembedded.js',
      '/mode/htmlmixed/htmlmixed.js',
      
      
      // ------------------
      // 請在mode之後載入
      
      //'/addon/search/search.js',
      '/addon/search/searchcursor.js'
      
    ])
  },
  mounted: async function () {
    //console.log(this.inited)
    await this.initCodeMirror()
    await this.onConfigInited()
    //console.log(this.inited)
    //this.testSearch1211()
    //this.testSetValue1211()
    //this.testSearch1213()
  },
  watch: {
    '$parent.inited': function () {
      this.onConfigInited()
    },
    '$parent.config.textContent' () {
      if (this.setValueLock === true) {
        return false
      }
      this.setValueLock = true
      this.editor.getDoc().setValue(this.$parent.config.textContent)
      this.setValueLock = false
    },
    '$parent.panelHeight' () {
      this.resizeHeight()
    },
    '$parent.config.stringToSearch' () {
      this.highlightText(this.$parent.config.stringToSearch)
    },
    
  },
  computed: {
    
    /**
     * 如果要阻止CodeMirror的熱鍵，就在這裡設定
     * @returns JSON
     */
    extraKeys () {
      return {
        "Ctrl-F": 'none',
        "Ctrl-Shift-F": 'none',
        "Ctrl-H": 'none',
      }
    }
  },
  methods: {
    initCodeMirror () {
      return new Promise((resolve) => {
        $(() => {
          if (typeof(CodeMirror) === 'undefined') {
            setTimeout(async () => {
              await this.initCodeMirror()
              resolve(true)
            }, 100)
            return false
          }

          this.editor = CodeMirror.fromTextArea(this.$refs.MainTextarea, {
            lineNumbers: true,
            lineWrapping: true,

            //mode:  "javascript",
            extraKeys: this.extraKeys,
          })

          this.editor.on('change', async () => {
            if (this.setValueLock === true) {
              return false
            }
            this.setValueLock = true
            this.$parent.config.textContent = this.editor.getValue()
            await PULI_UTILS.sleep(0)
            this.setValueLock = false
          })

          this.editor$el = $(this.$el).find('.CodeMirror:first')
          //setTimeout(() => {
          this.resizeHeight()
          
          resolve(true)
          
          //}, 100)
        })
      })
        
    },
    onConfigInited () {
      //console.log(this.$parent.inited)
      if (this.$parent.inited === false) {
        return false
      }
      
      //await PULI_UTILS.sleep(1000)
      //console.log('javascript')
      this.editor.setOption("mode", 'javascript')
      
      //await PULI_UTILS.sleep(100)
      
      //console.log('go', this.$parent.config.stringToSearch)
      this.highlightText(this.$parent.config.stringToSearch)
      //console.log(this.markers.length)
      
      this.updateDocumentTitle()
    },
    setMode (mode) {
      setTimeout(() => {
        this.editor.setOption("mode", mode)
      }, 100)
      
      //this.editor$el = $('.CodeMirror:first')
      
      //console.log(this.editor$el)
    },
    highlightClear () {
      //console.log(this.editor$el.find('.' + this.highlightClassName).length)
      //this.editor$el.find('.' + this.highlightClassName).removeClass(this.highlightClassName)
      this.markers = this.markers.filter(mark => {
        mark.clear()
        return false
      })
    },
    highlightText: async function (text) {
      
      this.highlightClear()
      
      while (!this.editor.getSearchCursor) {
        await PULI_UTILS.sleep()
      }
      
      var cursor = this.editor.getSearchCursor(text)
      //console.log(cursor)
      while (cursor.findNext()) {
          //CURSOR = cursor

        let marker = this.editor.markText(
                cursor.from(),
                cursor.to(),
                {className: this.highlightClassName}
        )
        this.markers.push(marker)
        
        //MARKER = marker
      }
      //this.editor.setCursor({line: 1, ch: 0})
    },
    jumpToLine (i, from = 0) { 
      this.editor.focus()
      var t = this.editor.charCoords({line: i, ch: 0}, "local").top; 
      var middleHeight = this.editor.getScrollerElement().offsetHeight / 2; 
      this.editor.scrollTo(null, t - middleHeight - 5)
      
      //if (!to) {
      this.editor.doc.setCursor(i - 1, from)
      //if (to) {
      //  this.editor.setSelection({line: 0, ch: 3}, {line: 0, ch: 9})
      //}
      //}
      //else {
      //  this.editor.doc.setSelection(i - 1, from)
      //}
    },
    jumpToMarker (marker) {
      this.editor.focus()
      let {fromLine, fromCh, toLine, toCh} = this.getMarkerPos(marker)
      this.editor.setSelection({line: fromLine - 1, ch: fromCh}, {line: toLine - 1, ch: toCh})
    },
    getCursor () {
      return this.editor.doc.getCursor()
    },
    getSelectedText () {
      return this.editor.getSelection()
    },
    findNext (search) {
      if (!search) {
        search = this.$parent.config.stringToSearch
      }
      
      if (!search || search.length === 0) {
        return false
      } 
      
      var cursor = this.editor.getSearchCursor(search);
      
      let currentPosition = this.getCursor(true)
      //console.log(currentPosition)
      let currentLine = currentPosition.line
      let currentCh = currentPosition.ch
      //console.log('current', currentLine, currentCh)
      
      let firstMarker
      //let lastMarker
      
      while (cursor.findNext()) {
        let marker = this.editor.markText(
          cursor.from(),
          cursor.to()
        )

        if (!firstMarker) {
          firstMarker = marker
        }

        //console.log(marker)
        let {fromLine, fromCh, toLine,toCh} = this.getMarkerPos(marker)
        //MARKER = marker.lines[0]

        //console.log('marker', line, from, to)
        if (fromLine - 1 > currentLine) {
          // 對，就是要找這個
          this.jumpToMarker(marker)
          return true
        }
        else if (fromLine - 1 === currentLine) {
          if (fromCh > currentCh) {
            // 對，就是要找這個
            this.jumpToMarker(marker)
            return true
          }
        }
      }
      
      if (firstMarker) {
        this.jumpToMarker(firstMarker)
        return true
      }
      
      return false  // 沒找到
    },
    findPrev (search) {
      if (!search) {
        search = this.$parent.config.stringToSearch
      }
      
      if (!search || search.length === 0) {
        return false
      } 
      //this.editor.focus()
      //console.log('findPrev')
      //console.log(search)
      var cursor = this.editor.getSearchCursor(search);
      
      let currentPosition = this.getCursor(true)
      //console.log(currentPosition)
      let currentLine = currentPosition.line
      let currentCh = currentPosition.ch
      //console.log('current', currentLine, currentCh)
      
      let lastMarker
      let jumpToLast = false
      //let lastMarker
      
      while (cursor.findNext()) {
        let marker = this.editor.markText(
          cursor.from(),
          cursor.to()
        )

        if (jumpToLast === true) {
          lastMarker = marker
          //console.log('jumpToLast true')
          continue
        }

        //if (!firstMarker) {
          
        //}

        //console.log(marker)
        let {fromLine, fromCh, toLine, toCh} = this.getMarkerPos(marker)
        //console.log(currentLine, currentCh, toLine, toCh, fromLine, fromCh)
        
        //console.log('marker', line, from, to)
        if (currentLine < fromLine - 1) {
          // 對，就是要找這個
          if (!lastMarker) {
            jumpToLast = true
            //console.log('jumpToLast')
            continue
          }
          this.jumpToMarker(lastMarker)
          return true
        }
        else if (currentLine === fromLine - 1) {
          //console.log(currentCh, fromCh)
          if (currentCh <= fromCh || currentCh <= toCh) {
            // 對，就是要找這個
            if (!lastMarker) {
              jumpToLast = true
              //console.log('jumpToLast ch')
              continue
            }
            this.jumpToMarker(lastMarker)
            return true
          }
        }
        
        lastMarker = marker
      }
      
      if (lastMarker) {
        this.jumpToMarker(lastMarker)
        return true
      }
      //console.log('沒找到')
      return false  // 沒找到
    },
    resizeHeight: async function () {
      /*
      let className = 'display-replace-panel'
      if (this.$parent.config.displayReplacePanel === true) {
        this.editor$el.addClass(className)
      }
      else {
        this.editor$el.removeClass(className)
      }
       */
      
      while (this.editor$el === null) {
        await PULI_UTILS.sleep()
      }
      //console.log(this.editor$el, this.editor$el.css)
      this.editor$el.css('height', `calc(100vh - ${this.$parent.panelHeight})`)
      //console.log('設定好了', `calc(100vh - ${this.$parent.panelHeight})`)
    },
    getMarkerPos (marker) {
      let lines = marker.lines

      let firstLine = lines[0]
      let fromLine = firstLine.lineNo() + 1
      let fromCh = firstLine.markedSpans[0].from

      let lastLine = lines[(lines.length - 1)]
      let toLine = lastLine.lineNo() + 1
      let toCh = lastLine.markedSpans[0].to
      
      return {
        fromLine,
        fromCh,
        toLine,
        toCh
      }
    },
    
    updateDocumentTitle () {
      let textContentTrim = this.$parent.textContentTrim
      if (textContentTrim === '') {
        document.title = 'Plain Text Editor'
      }
      else {
        document.title = textContentTrim
      }
    },
    
    
    // --------------------------
    testSearch1213 () {
      this.highlightText('d\n1')
    },
    
    testSetValue1211 () {
      setTimeout(() => {
        //this.setValue('Hello World')
      }, 3000)
    },
    
    testSearch1211 () {
      setTimeout(async () => {
          await this.highlightText('data')

          return
          setTimeout(async () => {
            await this.highlightText('History')

            setTimeout(() => {

              //console.log(this.markers)
              //mark = this.markers[(this.markers.length - 1)]
              //console.log(mark.doc.scrollIntoView())

              //editor = this.editor
              //editor.scrollIntoView({from: 0, to: 0}, 100)

              //console.log(mark.lines[0].lineNo())
             // this.jumpToLine(mark.lines[0].lineNo() + 1)
            }, 1000)
            
            
            //this.setMode('xml')

          }, 1000)
        }, 5000)
    },
    test1210 () {
       setTimeout(async () => {
          await this.highlightText('data')

          setTimeout(async () => {
            await this.highlightText('History')

            setTimeout(() => {

              //console.log(this.markers)
              mark = this.markers[(this.markers.length - 1)]
              //console.log(mark.doc.scrollIntoView())

              //editor = this.editor
              //editor.scrollIntoView({from: 0, to: 0}, 100)

              console.log(mark.lines[0].lineNo())
              this.jumpToLine(mark.lines[0].lineNo() + 1)
            }, 1000)
            
            
            //this.setMode('xml')

          }, 1000)
        }, 1000)
    }
  }
}