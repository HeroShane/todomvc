import Ember from 'ember';

export default Ember.Controller.extend({
    modelChanged: function(){
      let _record = this.get("model").filterBy("state", 1)
      this.set("records",_record)
    }.observes("model.@each.state")


});
