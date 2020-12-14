/* global postMessageAPI, GameMaster */

var appMount = async function () {
  //console.log(1)
  this.restoreFromLocalStorage()
  //console.log(2)
  //this.updateDocumentTitle()
  //this.initHotKeys()
  //this.initCheckbox()
  this.inited = true
  //console.log(this.inited)
}