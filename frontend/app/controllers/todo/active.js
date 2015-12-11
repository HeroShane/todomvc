import Ember from 'ember';

export default Ember.Controller.extend({

    modelStateChanged: function(){
      // console.info(" active model  item state change ... ")
      let _record = this.get("model").filterBy("state", 0)
      this.set("records",_record)
    }.observes("model.@each.state"),


    modelCountChanged: function(){
      // console.info(" active model  item count change ... ")
      let _record =  this.get("model").filterBy("state", 0)
      this.set("records",_record)
    }.observes("model.[]")

});
