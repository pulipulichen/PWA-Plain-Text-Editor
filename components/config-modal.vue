<template>
  <div class="ui modal config-modal" ref="Modal">
    <div class="header">Configuration</div>
    <div class="scrolling content">
      <div class="ui form">

        <div class="field">
          <div class="ui toggle checkbox">
            <input type="checkbox" tabindex="0" class="hidden"
                   id="EnableTextWrap"
                   v-model="$parent.config.enableTextWrap" />
            <label for="EnableTextWrap">Enable Text wrap</label>
          </div>
        </div>
        
        <div class="field">
          <label>Tab type</label>
          
        </div>

      </div>
      
    </div>
    <div class="actions">
      <div class="ui cancel button">Close</div>
    </div>
  </div>
</template>

<script>
  module.exports = {
    mounted () {
      $(this.$refs.Modal).modal('show')
      //console.log(this.$parent.config.enableTextWrap)
    },
    methods: {
      open () {
        //console.log('aaa')
        $(this.$refs.Modal).modal('show')
      }
    }
  }
</script>
