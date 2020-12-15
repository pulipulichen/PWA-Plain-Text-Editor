/* global CodeMirror, PULI_UTILS */
import $ from 'jquery'
import CodeMirrorOptions from './vendors/codemirror.config.webpack.js'

export default {
  props: ['config', 'localConfig', 'utils'],
  data () {
    this.$i18n.locale = this.config.locale
    return {
      simpleMode: false,
      //editor: null,
      //editor$el: null,
      markers: [],
      highlightClassName: 'highlight',
      setValueLock: false,
      cursorPositionSaved: {
        from: {line: null, ch: null},
        to: {line: null, ch: null}
      }
    }
  },
  components: {
    codemirror: () => import(/* webpackChunkName: "vendors/CodeMirror" */ './vendors/codemirror.webpack.js')
  },
  mounted: async function () {
    //console.log(this.inited)
    //await this.initCodeMirror()
    //await this.onConfigInited()
    //console.log(this.inited)
    //this.testSearch1211()
    //this.testSetValue1211()
    //this.testSearch1213()
  },
  watch: {
    'config.inited': function () {
      this.onConfigInited()
    },
    'localConfig.textContent' () {
      if (this.simpleMode === true) {
        return false
      }
      
      if (this.setValueLock === true) {
        return false
      }
      this.setValueLock = true
      this.saveCursor()
      this.editor.getDoc().setValue(this.localConfig.textContent)
      this.restoreCursor()
      this.highlightText()
      this.setValueLock = false
    },
    'config.panelHeight' () {
      this.resizeHeight()
    },
    'localConfig.stringToSearch' () {
      this.highlightText()
    },
    
  },
  computed: {
    editor () {
      return this.$refs.cmEditor
    },
    computedCodeMirrorOptions () {
      
      let options = {
        ...CodeMirrorOptions
      }
      
      console.log(options)
      
      return options
    },
  },
  methods: {
    
    onConfigInited () {
      //console.log(this.config.inited)
      if (this.config.inited === false
              || this.simpleMode === true) {
        return false
      }
      
      
      //await PULI_UTILS.sleep(1000)
      //console.log('javascript')
      //this.editor.setOption("mode", 'html')
      
      //await PULI_UTILS.sleep(100)
      
      //console.log('go', this.localConfig.stringToSearch)
      this.highlightText(this.localConfig.stringToSearch)
      //console.log(this.markers.length)
      
      this.updateDocumentTitle()
    },
    setMode (mode) {
      if (this.simpleMode === true) {
        return false
      }
      
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
      console.error('highlightText')
      return false
      
      if (this.simpleMode === true) {
        return false
      }
      
      if (!text) {
        text = this.localConfig.stringToSearch
      }
      
      this.highlightClear()
      
      while (!this.editor.getSearchCursor) {
        await this.utils.AsyncUtils.sleep()
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
    onCodeMirrorKeyHandled (e, s) {
      //console.log(e, s)
      //this.$refs.cmEditor.codemirror.execCommand('autocomplete')
      this.$refs.cmEditor.codemirror.showHint()
      
    },
    jumpToLine (i, from = 0) { 
      if (this.simpleMode === true) {
        return false
      }
      
      
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
      if (this.simpleMode === true) {
        return false
      }
      
      
      this.editor.focus()
      let {fromLine, fromCh, toLine, toCh} = this.getMarkerPos(marker)
      this.editor.setSelection({line: fromLine - 1, ch: fromCh}, {line: toLine - 1, ch: toCh})
    },
    getCursor (position) {
      if (this.simpleMode === true) {
        return false
      }
      
      return this.editor.doc.getCursor(position)
    },
    saveCursor () {
      if (this.simpleMode === true) {
        return false
      }
      
      let fromCursor = this.getCursor(true)
      this.cursorPositionSaved.from.line = fromCursor.line
      this.cursorPositionSaved.from.ch = fromCursor.ch
      
      let toCursor = this.getCursor(false)
      this.cursorPositionSaved.to.line = toCursor.line
      this.cursorPositionSaved.to.ch = toCursor.ch
    },
    restoreCursor () {
      if (this.simpleMode === true) {
        return false
      }
      
      
      if (this.cursorPositionSaved.from.line === this.cursorPositionSaved.to.line
        && this.cursorPositionSaved.from.ch === this.cursorPositionSaved.to.ch) {
        this.jumpToLine(this.cursorPositionSaved.from.line + 1, this.cursorPositionSaved.from.ch) 
        
        //console.log('restoreCursor cursor')
      }
      else {
        this.editor.setSelection({
          line: this.cursorPositionSaved.from.line, 
          ch: this.cursorPositionSaved.from.ch
        }, 
        {
          line: this.cursorPositionSaved.to.line, 
          ch: this.cursorPositionSaved.to.ch
        })
        //console.log('restoreCursor selection')
      }
      
    },
    getSelectedText () {
      if (this.simpleMode === true) {
        return false
      }
      
      return this.editor.getSelection()
    },
    findNext (search) {
      if (this.simpleMode === true) {
        return false
      }
      
      if (!search) {
        search = this.localConfig.stringToSearch
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
      if (this.simpleMode === true) {
        return false
      }
      
      if (!search) {
        search = this.localConfig.stringToSearch
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
      if (this.localConfig.displayReplacePanel === true) {
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
      this.editor$el.css('height', `calc(100vh - ${this.config.panelHeight})`)
      this.editor$el.css('max-height', `calc(100vh - ${this.config.panelHeight})`)
      //console.log('設定好了', `calc(100vh - ${this.config.panelHeight})`)
    },
    getMarkerPos (marker) {
      if (this.simpleMode === true) {
        return false
      }
      
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
    onEditorChange: async function () {
      if (this.simpleMode === true) {
        return false
      }
      
      
      if (this.setValueLock === true) {
        return false
      }
      this.setValueLock = true
      this.localConfig.textContent = this.editor.getValue()
      await PULI_UTILS.sleep(0)
      this.highlightText()
      this.setValueLock = false
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
    
  }
}