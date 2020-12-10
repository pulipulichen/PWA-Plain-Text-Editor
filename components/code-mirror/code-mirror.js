/* global CodeMirror */

module.exports = {
  data () {
    return {
      editor: null,
      editor$el: null
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
    
    this.setMode('javascript')
    
    setTimeout(() => {
      this.highlightText('data')
      
      setTimeout(() => {
        this.highlightText('History')
      }, 1000)
    }, 1000)
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
      this.editor.setOption("mode", mode)
    },
    highlightText(text) {
      
      let className = 'highlight'
      
      this.editor$el.find('.' + className).removeClass(className)
      
      var cursor = this.editor.getSearchCursor(text);
      while (cursor.findNext()) {
          this.editor.markText(
            cursor.from(),
            cursor.to(),
            { className: className }
          );
      }
      //this.editor.setCursor({line: 1, ch: 0})
    }
  }
}