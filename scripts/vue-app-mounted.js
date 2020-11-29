/* global postMessageAPI, GameMaster */

var appMount = async function () {
  this.restoreFromLocalStorage()
  this.updateDocumentTitle()
  this.inited = true
}