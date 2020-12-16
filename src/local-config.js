let localConfig = {
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
  lineWrapping: false,
  indent: {
    mode: 'tab',
    size: 2,
  },
  formatTool: 'lines-trim',
  syntax: 'text/javascript',
  fontSize: 16,
  filename: null,
}

export default localConfig