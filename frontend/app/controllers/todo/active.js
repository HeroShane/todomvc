import Ember from 'ember';

export default Ember.Controller.extend({

    modelStateChanged: function(){
      console.info(" active model  item state change ... ")
      let _record = this.get("model").filterBy("state", 0)
      this.set("model",_record)
    }.observes("records.@each.state"),


    modelCountChanged: function(){
      console.info(" active model  item count change ... ")
      return this.get("model").filterBy("state", 0)
    }.observes("records.[]")

});
