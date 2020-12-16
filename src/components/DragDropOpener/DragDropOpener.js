import $ from 'jquery'

let DragDropOpener = {
  props: ['config', 'localConfig', 'utils'],
  data () {    
    this.$i18n.locale = this.localConfig.locale
    return {
      dragging: false
    }
  },
  watch: {
    'config.inited' () {
      if (this.config.inited === false) {
        return false
      }
      this.initDragEvent()
    }
  },
//  computed: {
//    
//  },
//  mounted() {
//    
//  },
  methods: {
    initDragEvent () {
      let triggers = [
        $('body'),
        $('.CodeMirror')
      ]
      //let $window = $(window)
      //console.log($body.length)
      triggers.forEach(trigger => {
        //console.log(trigger.length)
        
        trigger.on('dragenter', (event) => {
          //console.log('dragenter')
          event.stopPropagation()
          event.preventDefault()

          //this.dragging = true
          setTimeout(() => {
            this.dragging = false
          }, 3000)
        })
        
        trigger.on('drop', (event) => {
          this.onDrop(event)
        })

        /*
        trigger.on('mouseleave', (event) => {
          event.stopPropagation()
          event.preventDefault()

          this.dragging = false
        })
         */
      })
    },
    onDrop (event) {
      console.log(event)
      event.stopPropagation()
      event.preventDefault()
      
      console.log('onDrop')
      this.dragging = false
      
      return false
    }
  }
}

export default DragDropOpener