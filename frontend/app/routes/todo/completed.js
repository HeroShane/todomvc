import Ember from 'ember';
import todoData from "../../mixins/todo-data";

export default Ember.Route.extend(todoData, {
  model: function (params) {
    return this.store.peekAll("todo").filterBy("state", 1)
  }

});
