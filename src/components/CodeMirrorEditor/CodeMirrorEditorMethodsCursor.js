export default function (CodeMirrorEditor) {
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
  CodeMirrorEditor.methods.saveCursorPosition = function () {
    if (this.simpleMode === true
            || this.config.inited === false) {
      return false
    }

    let fromCursor = this.getCursor(true)
    this.cursorPositionSaved.from.line = fromCursor.line
    this.cursorPositionSaved.from.ch = fromCursor.ch

    let toCursor = this.getCursor(false)
    this.cursorPositionSaved.to.line = toCursor.line
    this.cursorPositionSaved.to.ch = toCursor.ch
  }
  CodeMirrorEditor.methods.restoreCursorPosition = function () {
    if (this.simpleMode === true
            || this.config.inited === false) {
      return false
    }


    if (this.cursorPositionSaved.from.line === this.cursorPositionSaved.to.line
            && this.cursorPositionSaved.from.ch === this.cursorPositionSaved.to.ch) {
      this.jumpToLine(this.cursorPositionSaved.from.line + 1, this.cursorPositionSaved.from.ch)

      //console.log('restoreCursor cursor')
    } else {
      this.codemirror.setSelection({
        line: this.cursorPositionSaved.from.line,
        ch: this.cursorPositionSaved.from.ch
      },
              {
                line: this.cursorPositionSaved.to.line,
                ch: this.cursorPositionSaved.to.ch
              })
      //console.log('restoreCursor selection')
    }

  }
  CodeMirrorEditor.methods.getSelectedText = function () {
    if (this.simpleMode === true) {
      return false
    }

    return this.codemirror.getSelection()
  }
}