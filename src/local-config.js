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
  enableTextWrap: false,
  indent: {
    mode: 'tab',
    size: 2,
  },
  formatTool: 'lines-trim',
  syntax: 'javascript'
}

export default localConfig