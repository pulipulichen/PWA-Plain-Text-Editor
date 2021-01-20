export default function (ReplacePanel) {
  ReplacePanel.data = function () {
    this.$i18n.locale = this.localConfig.locale
    return {
      textContentHistory: [],
      replaceLock: false,
      textContentModified: false,
      isModifiedAfterBeautification: true,
      //panelHeight: '10.8rem'
      panelHeight: '10.5rem',
      viewportHeightThreshold: 300,
      calcResultCopied: false,
    }
  }
}