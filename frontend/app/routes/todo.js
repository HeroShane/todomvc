import Ember from 'ember';
//import todoData from "../mixins/todo-data";

export default Ember.Route.extend({
    model: function(params){
      return this.store.findAll("todo")
    },

    actions: {
      clearCompleted: function(){
        let controller = this.controller;
        let records = this.store.peekAll("todo").filterBy("state", 1)
        records.forEach(function(item, index){
          item.destroyRecord().then(function(){
            controller.model.removeObject(item)
          })
        })
        console.info("controller clear clearCompleted ...")
      }

    }





});
