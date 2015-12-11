import Ember from 'ember';

export default Ember.Controller.extend({

  activeCount: Ember.computed('model.@each.state', function() {
    console.info("todo console state change ... ")
    return this.get('model').filter((item) => {
      return item.get("state") == 0
    }).length
  })
  
});
