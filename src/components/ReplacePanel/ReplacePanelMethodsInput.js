export default function (ReplacePanel) {
  ReplacePanel.methods.focus = async function () {
    await this.utils.AsyncUtils.sleep(0)
    this.$refs.SearchInput.focus()
  }
  
  ReplacePanel.methods.selectSearchInput = async function () {
    await this.utils.AsyncUtils.sleep(0)
    this.$refs.SearchInput.focus()
    this.$refs.SearchInput.select()
  }

  ReplacePanel.methods.selectReplaceInput = async function () {
    await this.utils.AsyncUtils.sleep(0)
    //console.log('selectReplaceInput', this.$refs.ReplaceInput)
    this.$refs.ReplaceInput.focus()
    this.$refs.ReplaceInput.select()
  }
}
    