import Ember from 'ember';

export default Ember.Component.extend({
  isSelectedAll: null,
  updateState: "updateState",
  deleteItem: "deleteItem",

  didReceiveAttrs: function(){
  },

  didInsertElement: function(){
  },
  
  watchIsSelectedAll: function(){
    console.info("is select all ... ", this.isSelectedAll)
  }.observes("isSelectedAll"),


  actions: {
    selectAll: function(){
      console.info("select all .... ", arguments)
    },

    updateState: function(id, state){
      this.sendAction("updateState", id, state)
    }

  }


});
