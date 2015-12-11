import Ember from 'ember';

export default Ember.Controller.extend({
    modelChanged: function(){
      // console.info(" computed model  item state change ... ")
      let _record = this.get("model").filterBy("state", 1)
      this.set("records",_record)
    }.observes("model.@each.state"),

    modelCountChanged: function(){
      // console.info(" computed model  item count change ... ")
      return this.get("model").filterBy("state", 1)
    }.observes("model.[]")

});
