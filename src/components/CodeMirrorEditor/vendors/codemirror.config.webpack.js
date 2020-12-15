import beautify from 'js-beautify'

let extraKeys = {
  "Ctrl-F": 'none',
  "Ctrl-Shift-F": 'none',
  "Ctrl-H": 'none',
  "Ctrl-Shift-Q": 'none',
  "Ctrl-Alt-F": function (cm) {
    let mode = cm.getOption('mode').name
    
    let process
    if (mode === 'javascript'
            || mode === 'text/javascript'
            || mode === 'application/json'
            || mode === 'application/ld+json'
            || mode === 'text/typescript'
            || mode === 'application/typescript') {
      process = beautify.js_beautify
    }
    else if (mode === 'text/css'
            || mode === 'text/x-scss'
            || mode === 'text/x-less') {
      process = beautify.css_beautify
    }
    else if (mode === 'text/html') {
      process = beautify.html_beautify
    }
    //console.log()
    
    let selection = cm.getSelection()
    if (selection === '') {
      cm.execCommand('selectAll')
      selection = cm.getSelection()
    }
    selection = process(selection)
    //selection = selection + 'AAA'
    cm.replaceSelection(selection);
    
    //console.log('aaa')
  },
  "Ctrl-.": "autocomplete",
  "Tab": function (cm) {
    cm.replaceSelection("  ", "end");
  }
}

let options = {
  lineNumbers: true,
  lineWrapping: true,
  matchBrackets: true,
  autoCloseBrackets: true,
  matchTags: true,
  autoCloseTags: true,
  foldGutter: true,
  showMatchesOnScrollbar: true,
  lint: {
    esversion: 8,
    "asi": true,
  },
  gutters: ["CodeMirror-lint-markers", "CodeMirror-linenumbers", "CodeMirror-foldgutter"],
  mode: {name: "javascript", globalVars: true},
  //mode:  "javascript",
  extraKeys: extraKeys,
  styleActiveLine: true,
  continueComments: {
    continueLineComment: true
  },
  hintOptions: {
    alignWithWord: false,
    completeSingle: false,
  }
}

export default options