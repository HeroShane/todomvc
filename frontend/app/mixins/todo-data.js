import Ember from 'ember';

export default Ember.Mixin.create({

  setupController: function(controller, model){
    controller.setProperties({
      model: model,
      records: model
    })
  },

  actions: {
    createTodo: function(text){
      let record = this.store.createRecord("todo", {content: text, state: 0 })
      let [self, controller] = [this, this.controller]
      record.save().then(function(){
        console.info(self, controller, record)
        debugger
        controller.records.pushObject(record)
      })

    },

    updateState: function(id){
      let record = this.store.peekRecord("todo", id)
      let state = record.get("state") == 1 ? 0 : 1
      record.set("state", state).save()
    }
  }  

});
