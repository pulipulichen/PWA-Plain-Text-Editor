
let extraKeys = {
  "Ctrl-F": 'none',
  "Ctrl-Shift-F": 'none',
  "Ctrl-H": 'none',
  "Ctrl-Shift-Q": 'none',
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