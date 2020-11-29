/* global postMessageAPI, GameMaster */

var appMount = async function () {
  this.restoreFromLocalStorage()
  this.updateDocumentTitle()
  this.initHotKeys()
  this.inited = true
}