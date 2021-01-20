import TypewriterSoundEffect from './TypewriterSoundEffect/TypewriterSoundEffect.js'

export default function (CodeMirrorEditor) {
  CodeMirrorEditor.data = function () {
    this.$i18n.locale = this.localConfig.locale
    return {
      inited: false,
      simpleMode: false,
      //editor: null,
      //editor$el: null,
      markers: [],
      code: '',
      TypewriterSoundEffect,
      highlightClassName: 'highlight',
      changeLock: false,
      cursorPositionSaved: {
        from: {line: null, ch: null},
        to: {line: null, ch: null},
        scrollTop: null
      },
      viewportHeightThreshold: 300
    }
  }
}