/* global CodeMirror */

module.exports = {
  data () {
    return {
      editor: null,
      editor$el: null,
      marks: [],
      highlightClassName: 'highlight'
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
      
      '/addon/search/searchcursor.js'
      
    ])
  },
  mounted: async function () {
    await this.initCodeMirror()
    
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
      this.marks.forEach(mark => {
        mark.clear()
      })
    },
    highlightText: async function (text) {
      
      this.highlightClear()
      
      var cursor = this.editor.getSearchCursor(text);
      while (cursor.findNext()) {
          let mark = this.editor.markText(
            cursor.from(),
            cursor.to(),
            { className: this.highlightClassName }
          )
          this.marks.push(mark)
      }
      //this.editor.setCursor({line: 1, ch: 0})
    },
    jumpToLine (i) { 
      var t = this.editor.charCoords({line: i, ch: 0}, "local").top; 
      var middleHeight = this.editor.getScrollerElement().offsetHeight / 2; 
      this.editor.scrollTo(null, t - middleHeight - 5); 
    },
    test1210 () {
       setTimeout(async () => {
          await this.highlightText('data')

          setTimeout(async () => {
            await this.highlightText('History')

            //console.log(this.marks)
            mark = this.marks[(this.marks.length - 1)]
            //console.log(mark.doc.scrollIntoView())

            this.setMode('xml')

            editor = this.editor
            //editor.scrollIntoView({from: 0, to: 0}, 100)

            this.jumpToLine(100)
          }, 1000)
        }, 1000)
    }
  }
}