export default function (CodeMirrorEditor) {
  CodeMirrorEditor.methods.getMarkerPos = function (marker) {
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
  }

  CodeMirrorEditor.methods.findNext = function (search) {
    if (this.simpleMode === true) {
      return false
    }

    if (!search) {
      search = this.localConfig.stringToSearch
    }

    if (!search || search.length === 0) {
      return false
    }

    var cursor = this.codemirror.getSearchCursor(search);

    let currentPosition = this.getCursor(true)
    //console.log(currentPosition)
    let currentLine = currentPosition.line
    let currentCh = currentPosition.ch
    //console.log('current', currentLine, currentCh)

    let firstMarker
    //let lastMarker

    while (cursor.findNext()) {
      let marker = this.codemirror.markText(
              cursor.from(),
              cursor.to()
              )

      if (!firstMarker) {
        firstMarker = marker
      }

      //console.log(marker)
      let {fromLine, fromCh, toLine, toCh} = this.getMarkerPos(marker)
      //MARKER = marker.lines[0]

      //console.log('marker', line, from, to)
      if (fromLine - 1 > currentLine) {
        // 對，就是要找這個
        this.jumpToMarker(marker)
        return true
      } else if (fromLine - 1 === currentLine) {
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
  }
  CodeMirrorEditor.methods.findPrev = function (search) {
    if (this.simpleMode === true) {
      return false
    }

    if (!search) {
      search = this.localConfig.stringToSearch
    }

    if (!search || search.length === 0) {
      return false
    }
    //this.codemirror.focus()
    //console.log('findPrev')
    //console.log(search)
    var cursor = this.codemirror.getSearchCursor(search);

    let currentPosition = this.getCursor(true)
    //console.log(currentPosition)
    let currentLine = currentPosition.line
    let currentCh = currentPosition.ch
    //console.log('current', currentLine, currentCh)

    let lastMarker
    let jumpToLast = false
    //let lastMarker

    while (cursor.findNext()) {
      let marker = this.codemirror.markText(
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
      } else if (currentLine === fromLine - 1) {
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
  }

  CodeMirrorEditor.methods.highlightClear = function () {
    //console.log(this.codemirror$el.find('.' + this.highlightClassName).length)
    //this.codemirror$el.find('.' + this.highlightClassName).removeClass(this.highlightClassName)
    this.markers = this.markers.filter(mark => {
      mark.clear()
      return false
    })
  }
  CodeMirrorEditor.methods.highlightText = async function (text) {
    console.error('highlightText')
    return false

    if (this.simpleMode === true) {
      return false
    }

    if (!text) {
      text = this.localConfig.stringToSearch
    }

    this.highlightClear()

    while (!this.codemirror.getSearchCursor) {
      await this.utils.AsyncUtils.sleep()
    }

    var cursor = this.codemirror.getSearchCursor(text)
    //console.log(cursor)
    while (cursor.findNext()) {
      //CURSOR = cursor

      let marker = this.codemirror.markText(
              cursor.from(),
              cursor.to(),
              {className: this.highlightClassName}
      )
      this.markers.push(marker)

      //MARKER = marker
    }
    //this.codemirror.setCursor({line: 1, ch: 0})
  }
}