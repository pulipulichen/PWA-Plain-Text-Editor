/* global postMessageAPI, GameMaster */

var appMount = async function () {
  this.restoreFromLocalStorage()
  this.inited = true
}