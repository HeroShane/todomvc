import Ember from 'ember';

export default Ember.Controller.extend({

  activeCount: Ember.computed('model.length', function() {
    return this.get('model').filter((item) => {
      return item.get("state") == 0
    }).length
  }),
  
  // modelChanged: function(){
  //   console.info("model  item change ... ")
  // }.observes("model.@each.state")

});
