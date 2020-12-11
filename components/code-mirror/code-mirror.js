/* global CodeMirror */

module.exports = {
  data () {
    return {
      editor: null,
      editor$el: null,
      markers: [],
      highlightClassName: 'highlight',
      setValueLock: false
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
    await this.initCodeMirror()
    
    //this.testSearch1211()
    this.testSetValue1211()
  },
  watch: {
    '$parent.config.textContent' () {
      this.setValueLock = true
      this.editor.getDoc().setValue(this.$parent.config.textContent)
      this.setValueLock = false
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
            //extraKeys: {"Ctrl-F": "findPersistent"},
          })

          this.editor.on('change', () => {
            if (this.setValueLock === true) {
              return false
            }
            this.$parent.config.textContent = this.editor.getValue()
          })

          this.editor.setOption("mode", 'javascript')

          this.editor$el = $('.CodeMirror:first')
          
          resolve(true)
        })
      })
        
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
      
      var cursor = this.editor.getSearchCursor(text);
      while (cursor.findNext()) {
          //CURSOR = cursor

          let marker = this.editor.markText(
            cursor.from(),
            cursor.to(),
            { className: this.highlightClassName }
          )
          this.markers.push(marker)
      }
      //this.editor.setCursor({line: 1, ch: 0})
    },
    jumpToLine (i, from = 0) { 
      var t = this.editor.charCoords({line: i, ch: 0}, "local").top; 
      var middleHeight = this.editor.getScrollerElement().offsetHeight / 2; 
      this.editor.scrollTo(null, t - middleHeight - 5)
      this.editor.doc.setCursor(i - 1, from)
    },
    getCursor () {
      return this.editor.doc.getCursor()
    },
    findNext (search = 'data') {
      var cursor = this.editor.getSearchCursor(search);
      
      let currentPosition = this.getCursor()
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
        let line = marker.lines[0].lineNo() + 1
        let {from, to} = marker.lines[0].markedSpans[0]
        //MARKER = marker.lines[0]

        //console.log('marker', line, from, to)
        if (line - 1 > currentLine) {
          // 對，就是要找這個
          this.jumpToLine(line, from)
          return true
        }
        else if (line - 1 === currentLine) {
          if (from > currentCh) {
            // 對，就是要找這個
            this.jumpToLine(line, from)
            return true
          }
        }
      }
      
      if (firstMarker) {
        let line = firstMarker.lines[0].lineNo() + 1
        let {from, to} = firstMarker.lines[0].markedSpans[0]
        this.jumpToLine(line, from)
        return true
      }
      
      return false  // 沒找到
    },
    findPrev (search = 'data') {
      var cursor = this.editor.getSearchCursor(search);
      
      let currentPosition = this.getCursor()
      //console.log(currentPosition)
      let currentLine = currentPosition.line
      let currentCh = currentPosition.ch
      //console.log('current', currentLine, currentCh)
      
      let firstMarker
      //let lastMarker
      
      while (cursor.findPrev()) {
        let marker = this.editor.markText(
          cursor.from(),
          cursor.to()
        )

        if (!firstMarker) {
          firstMarker = marker
        }

        //console.log(marker)
        let line = marker.lines[0].lineNo() + 1
        let {from, to} = marker.lines[0].markedSpans[0]
        //MARKER = marker.lines[0]

        //console.log('marker', line, from, to)
        if (line - 1 < currentLine) {
          // 對，就是要找這個
          this.jumpToLine(line, from)
          return true
        }
        else if (line - 1 === currentLine) {
          if (from < currentCh) {
            // 對，就是要找這個
            this.jumpToLine(line, from)
            return true
          }
        }
      }
      
      if (firstMarker) {
        let line = firstMarker.lines[0].lineNo() + 1
        let {from, to} = firstMarker.lines[0].markedSpans[0]
        this.jumpToLine(line, from)
        return true
      }
      
      return false  // 沒找到
    },
    
    // --------------------------
    
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