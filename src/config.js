let config = {
  appName: 'vue-app',
  debug: {
    ErrorHandler: {
      verbose: true
    },
    enableRestore: true,
  },
  locale: 'zh-TW',
  inited: false,
  
  panelHeight: '0rem',
  textContentHistory: [],
  textContentHistoryIndex: -1,
  textContentModified: true,
  searchPostion: -1,
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