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
      let [self, controller] = [this, this.controller]
      let record = this.store.createRecord("todo", {detail: text, state: 0 })
      record.save().then( () => {
          if( Em.isEmpty( controller.model.findBy("id",record.id) ) ){
            controller.model.pushObject(record)
          }
      })
    },

    updateState: function(id){
      let record = this.store.peekRecord("todo", id)
      let state = record.get("state") == 1 ? 0 : 1
      record.set("state", state).save()
    },

    deleteItem: function(id) {
      let [self, controller] = [this, this.controller]
      let record = this.store.peekRecord("todo",id)
      record.destroyRecord().then(function(){
        // console.info(self, controller, record)
        controller.model.removeObject(record)
      })
    } ,

  } ,

});
