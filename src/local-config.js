let localConfig = {
  locale: 'zh-TW',
  
  textContent: '',
  stringToSearch: '',
  stringToReplaceWith: '',
  replaceMode: 'line',
  //replaceMode: 'raw',
  displayPanel: 'replace',
  //displayReplacePanel: true,
  replaceLineOptions: {
    mode: 'prefix',
    lTrim: false,
    rTrim: false
  },
  lineWrapping: true,
  indent: {
    mode: 'tab',
    size: 2,
  },
  formatTool: 'lines-trim',
  autoFormat: false,
  //syntax: 'text/javascript',
  syntax: 'text/plain',
  fontSize: 16,
  filename: null,
  enableTypewritterSound: true,
  mainButtonAction: 'copy & clear',
  speechSynthesisRate: 1.1,
  ocrLanguage: 'eng',
  editorSimpleMode: false, // textarea

  GroupingTool: {
    skipColumns: 0,
    skipRows: 0,
    groupType: 'member',
    groupLength: 3
  }
}

export default localConfig