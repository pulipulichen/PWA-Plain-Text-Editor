let OpenFile = {
  /** 
   * accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
   */
  props: ['accept', 'multiple'],
  data () {    
    return {
      loading: false,
      files: []
    }
  },
//  },
//  watch: {
//    
//  },
//  computed: {
//    
//  },
//  mounted() {
//    
//  },
  methods: {
    openFile: async function () {
      this.loading = true
      this.files = []
      //console.log(this.$refs.FileInput)
      this.$refs.FileInput.click()
      
      while (this.loading === true) {
        await this.sleep()
      }
      
      if (this.files.length === 0) {
        return undefined
      }
      else if (this.files.length === 1) {
        return this.files[0]
      }
      else {
        return this.files
      }
    },
    sleep (ms = 100) {
      return new Promise(resolve => setTimeout(resolve, ms));
    },
    onChange (event) {
      let files = this.$refs.FileInput.files
      //console.log(files.length)
      if (files.length === 0) {
        this.loading = false
        return false
      } 

      /* If any further modifications have to be made on the 
         Extracted text. The text can be accessed using the  
         file variable. But since this is const, it is a read  
         only variable, hence immutable. To make any changes,  
         changing const to var, here and In the reader.onload  
         function would be advisible */
      
      let loop = (i) => {
        if (i < files.length) {
          const file = files[i]

          let reader = new FileReader(); 

          reader.onload = (e) => { 
            const result = e.target.result; 

            // This is a regular expression to identify carriage  
            // Returns and line breaks 
            //const lines = file.split(/\r\n|\n/); 
            //textarea.value = lines.join('\n'); 

            this.files.push({
              filename: file.name,
              content: result
            })
            
            i++
            loop(i)
          }; 

          reader.onerror = (e) => console.error(e.target.error.name); 
          reader.readAsText(file); 
        }
        else {
          this.$refs.FileInput.value = ''
          this.loading = false
        }
      }
      
      loop(0)
    }
  }
}

export default OpenFile