import Ember from 'ember';

export default Ember.Component.extend({
  createTodo: "createTodo",
  currentText: "",

  keyUp: function(e){
    if(e.keyCode == 13) {
      let text = this.$("input").val()
      if( Em.isPresent(text) ){
        this.set("currentText", text)
        this.send("saveTodo")
        this.$("input").val("")
      }
    }
  }, 

  actions: {
    saveTodo: function () {
      console.info("key down ....")      
      this.sendAction("createTodo", this.get("currentText"))
    }

  }

});
