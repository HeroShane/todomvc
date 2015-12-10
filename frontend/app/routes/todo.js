import Ember from 'ember';
//import todoData from "../mixins/todo-data";

export default Ember.Route.extend({
    model: function(params){
      return this.store.findAll("todo")
    }



});
