export default function (ReplacePanel) {
  ReplacePanel.data = function () {
    this.$i18n.locale = this.config.locale
    return {
      textContentHistory: [],
      replaceLock: false,
      textContentModified: false,
      //panelHeight: '10.8rem'
      panelHeight: '12.5rem',
      calcResultCopied: false
    }
  }
}