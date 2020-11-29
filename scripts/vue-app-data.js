var appData = {
  inited: false,
  config: {
    textContent: '',
    stringToSearch: '',
    stringToReplaceWith: '',
    replaceMode: 'line',
    //replaceMode: 'raw',
    displayReplacePanel: true,
    replaceLineMode: 'prefix',
  },
  textContentHistory: [],
  textContentHistoryIndex: -1,
  textContentModified: true,
  debug: {
    enableRestore: true
  }
}