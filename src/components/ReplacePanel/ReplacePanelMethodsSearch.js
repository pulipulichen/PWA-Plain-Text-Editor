export default function (ReplacePanel) {
//  ReplacePanel.methods.doSearchNext = function () {
//    let stringToSearch = this.stringToSearch
//
//    let startPos = this.localConfig.textContent.indexOf(stringToSearch, this.searchPostion)
//    if (startPos === -1) {
//      startPos = this.localConfig.textContent.indexOf(stringToSearch)
//
//      if (startPos === -1) {
//        return false
//      }
//    }
//
//    this.searchPostion = startPos + 1
//
//    // do selection
//    // Chrome / Firefox
//    let tarea = this.$refs.TextareaEditor.$el
//    if (typeof (tarea.selectionStart) !== "undefined") {
//      tarea.selectionStart = startPos;
//      tarea.selectionEnd = startPos;
//
//      tarea.blur();
//      tarea.focus();
//      tarea.selectionStart = startPos;
//      tarea.selectionEnd = startPos + this.localConfig.stringToSearch.length;
//
//      return true;
//    }
//    /*
//     // IE
//     if (document.selection && document.selection.createRange) {
//     tarea.focus();
//     tarea.select();
//     var range = document.selection.createRange();
//     range.collapse(true);
//     range.moveEnd("character", endPos);
//     range.moveStart("character", startPos);
//     range.select();
//     return true;
//     }
//     */
//    return false;
//  }
//  ReplacePanel.methods.doSearchPrev = function () {
//    let stringToSearch = this.stringToSearch
//
//    let startPos
//    if (this.searchPostion - this.stringToSearch.length - 1 < 0) {
//      startPos = this.localConfig.textContent.lastIndexOf(stringToSearch)
//    } else {
//      startPos = this.localConfig.textContent.lastIndexOf(stringToSearch, this.searchPostion - this.stringToSearch.length - 1)
//    }
//    if (startPos === -1) {
//      startPos = this.localConfig.textContent.lastIndexOf(stringToSearch)
//
//      if (startPos === -1) {
//        //console.log('not found')
//        return false
//      }
//    }
//
//    //console.log(startPos)
//
//    this.searchPostion = startPos + 1
//
//    // do selection
//    // Chrome / Firefox
//    let tarea = this.$refs.TextareaEditor.$el
//    if (typeof (tarea.selectionStart) !== "undefined") {
//      tarea.selectionStart = startPos;
//      tarea.selectionEnd = startPos;
//
//      tarea.blur();
//      tarea.focus();
//      tarea.selectionStart = startPos;
//      tarea.selectionEnd = startPos + this.localConfig.stringToSearch.length;
//
//
//      // collapse selection here
//      //tarea.blur()
//      //tarea.focus() // this scrolls the textarea
//      // expand selection here
//      return true;
//    }
//    /*
//     // IE
//     if (document.selection && document.selection.createRange) {
//     tarea.focus();
//     tarea.select();
//     var range = document.selection.createRange();
//     range.collapse(true);
//     range.moveEnd("character", endPos);
//     range.moveStart("character", startPos);
//     range.select();
//     return true;
//     }
//     */
//    return false;
//  }

  ReplacePanel.methods.findPrev = function () {
    let CodeMirror = this.$parent.$refs.CodeMirror
    return CodeMirror.findPrev()
  }
  ReplacePanel.methods.findNext = function () {
    let CodeMirror = this.$parent.$refs.CodeMirror
    return CodeMirror.findNext()
  }
}
    