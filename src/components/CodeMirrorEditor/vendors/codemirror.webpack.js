import { codemirror } from 'vue-codemirror'

// import base style
import 'codemirror/lib/codemirror.css'

// search
import 'codemirror/addon/search/matchesonscrollbar.js'
import 'codemirror/addon/search/searchcursor.js'

// fold
import 'codemirror/addon/fold/foldcode.js'
import 'codemirror/addon/fold/foldgutter.js'
import 'codemirror/addon/fold/foldgutter.css'
import 'codemirror/addon/fold/brace-fold.js'
import 'codemirror/addon/fold/xml-fold.js'
import 'codemirror/addon/fold/indent-fold.js'
import 'codemirror/addon/fold/markdown-fold.js'
import 'codemirror/addon/fold/comment-fold.js'

// match close
import 'codemirror/addon/edit/matchbrackets.js'
import 'codemirror/addon/edit/closebrackets.js'
import 'codemirror/addon/edit/matchtags.js'
import 'codemirror/addon/edit/closetag.js'

// hints
import 'codemirror/addon/hint/show-hint.js'
import 'codemirror/addon/hint/show-hint.css'

import 'codemirror/addon/hint/javascript-hint.js'
import 'codemirror/addon/hint/html-hint.js'
import 'codemirror/addon/hint/css-hint.js'
import 'codemirror/addon/hint/anyword-hint.js'
import 'codemirror/addon/hint/sql-hint.js'

// lint
import 'codemirror/addon/lint/lint.js'
import 'codemirror/addon/lint/lint.css'
import 'codemirror/addon/lint/javascript-lint.js'
import 'codemirror/addon/lint/yaml-lint.js'
import 'codemirror/addon/lint/html-lint.js'
import 'codemirror/addon/lint/json-lint.js'
import 'codemirror/addon/lint/css-lint.js'

import {JSHINT} from 'jshint'
window.JSHINT = JSHINT

import {CSSLint} from 'csslint'
window.CSSLint = CSSLint

import jsonlint from 'jsonlint-webpack'
window.jsonlint = jsonlint

// modes
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/mode/php/php.js'
import 'codemirror/mode/css/css.js'
import 'codemirror/mode/sql/sql.js'
import 'codemirror/mode/yaml/yaml.js'
import 'codemirror/mode/xml/xml.js'
import 'codemirror/mode/htmlembedded/htmlembedded.js'
import 'codemirror/mode/htmlmixed/htmlmixed.js'

export default codemirror