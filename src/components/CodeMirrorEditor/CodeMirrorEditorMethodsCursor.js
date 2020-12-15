export default function (CodeMirrorEditor) {
  CodeMirrorEditor.methods.onCodeMirrorCursorActivity = function () {
    this.saveCursorPosition()
  }
    
  CodeMirrorEditor.methods.jumpToLine = function (i, from = 0) {
    if (this.simpleMode === true) {
      return false
    }


    this.codemirror.focus()
    var t = this.codemirror.charCoords({line: i, ch: 0}, "local").top;
    var middleHeight = this.codemirror.getScrollerElement().offsetHeight / 2;
    this.codemirror.scrollTo(null, t - middleHeight - 5)

    //if (!to) {
    this.codemirror.doc.setCursor(i - 1, from)
    //if (to) {
    //  this.codemirror.setSelection({line: 0, ch: 3}, {line: 0, ch: 9})
    //}
    //}
    //else {
    //  this.codemirror.doc.setSelection(i - 1, from)
    //}
  }
  CodeMirrorEditor.methods.jumpToMarker = function (marker) {
    if (this.simpleMode === true) {
      return false
    }


    this.codemirror.focus()
    let {fromLine, fromCh, toLine, toCh} = this.getMarkerPos(marker)
    this.codemirror.setSelection({line: fromLine - 1, ch: fromCh}, {line: toLine - 1, ch: toCh})
  }
  CodeMirrorEditor.methods.getCursor = function (position) {
    if (this.simpleMode === true
            || this.config.inited === false) {
      return false
    }

    return this.codemirror.getCursor(position)
  }
   
  let cursorPositionKey = 'codemirror.cursor.position'
  //let viewportKey = 'codemirror.viewport.position'
  CodeMirrorEditor.methods.saveCursorPosition = function () {
    if (this.simpleMode === true
            || this.config.inited === false
            || this.inited === false
            || this.changeLock === true) {
      return false
    }

    let fromCursor = this.getCursor(true)
    this.cursorPositionSaved.from.line = fromCursor.line
    this.cursorPositionSaved.from.ch = fromCursor.ch

    let toCursor = this.getCursor(false)
    this.cursorPositionSaved.to.line = toCursor.line
    this.cursorPositionSaved.to.ch = toCursor.ch
    
    this.cursorPositionSaved.scrollTop = this.editorScroll$el.scrollTop()
    
    //console.log(this.editor$el.scrollTop)
    
    let saved = JSON.stringify(this.cursorPositionSaved)
    localStorage.setItem(cursorPositionKey, saved)
    //console.log('saveCursorPosition')
  }
  CodeMirrorEditor.methods.restoreCursorPosition = function () {
    //console.log('restoreCursorPosition', this.config.inited, this.cursorPositionSaved.from)
    if (this.simpleMode === true
            || this.config.inited === false) {
      return false
    }

    
    if (this.cursorPositionSaved.from.line === null) {
      let saved = localStorage.getItem(cursorPositionKey)
      this.cursorPositionSaved = JSON.parse(saved)
      //console.log(saved)
    }

    if (this.cursorPositionSaved.from.line === this.cursorPositionSaved.to.line
            && this.cursorPositionSaved.from.ch === this.cursorPositionSaved.to.ch) {
      this.jumpToLine(this.cursorPositionSaved.from.line + 1, this.cursorPositionSaved.from.ch)

      //console.log('restoreCursor cursor')
    } else {
      let from = {
        line: this.cursorPositionSaved.from.line,
        ch: this.cursorPositionSaved.from.ch
      }
      let to = {
                line: this.cursorPositionSaved.to.line,
                ch: this.cursorPositionSaved.to.ch
              }
      
      this.codemirror.setSelection(from, to)
      //console.log('restoreCursor selection')
    }

    if (this.editorScroll$el) {
      this.editorScroll$el.scrollTop(this.cursorPositionSaved.scrollTop)
    }
  }
  CodeMirrorEditor.methods.getSelectedText = function () {
    if (this.simpleMode === true) {
      return false
    }

    return this.codemirror.getSelection()
  }
}