var appData = {
  inited: false,
  config: {
    textContent: '',
    stringToSearch: '',
    stringToReplaceWith: '',
    replaceMode: 'regex',
    //replaceMode: 'raw',
    displayReplacePanel: true,
  },
  textContentHistory: [],
  textContentHistoryIndex: -1,
  debug: {
    enableRestore: true
  }
}