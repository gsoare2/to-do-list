new Vue({
  el: '#app',
  data: {
    id: 0,
    message: '',
    description: '',
    list: []
  },
  methods: {
    addItem() {
      if(this.message.length > 0 && this.description.length > 0) {
        this.list.push({id: this.id, message: this.message, description: this.description})
        this.message = ""
        this.description = ""
        this.id = this.id+1
      }
    },
    removeItem(index) {
      this.list.splice(index, 1)
    }
  }
})