let config = {
  appName: 'vue-app',
  debug: {
    ErrorHandler: {
      verbose: true
    },
    enableRestore: true,
  },
  
  inited: false,
  
  panelHeight: '0rem',
  textContentHistory: [],
  textContentHistoryIndex: -1,
  textContentModified: true,
  searchPostion: -1,
  urlGithub: 'https://github.com/pulipulichen/PWA-Plain-Text-Editor/',
  urlIssue: 'https://github.com/pulipulichen/PWA-Plain-Text-Editor/issues/new',
  selectedText: null,
  viewportSize: {
    width: 0,
    height: 0,
    ratio: 1
  },
  loadingProgress: 1,
  textToSpeech: null,
}

import styleConfig from './styles/style.config.js'
config.styleConfig = styleConfig

//import readingConfig from './../config/reading.js'
//config.readingConfig = readingConfig

import productionConfig from './config.production.js'
if (process.env.NODE_ENV === 'production') {
  for (let name in productionConfig) {
    config[name] = productionConfig[name]
  }
}

export default config