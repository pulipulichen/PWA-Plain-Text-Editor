var appData = {
  inited: false,
  config: {
    textContent: '',
    stringToSearch: '',
    stringToReplaceWith: '',
    replaceMode: 'line',
    //replaceMode: 'raw',
    displayReplacePanel: true,
    replaceLineOptions: {
      mode: 'prefix',
      lTrim: false,
      rTrim: false
    },
  },
  textContentHistory: [],
  textContentHistoryIndex: -1,
  textContentModified: true,
  searchPostion: -1,
  debug: {
    enableRestore: true
  }
}