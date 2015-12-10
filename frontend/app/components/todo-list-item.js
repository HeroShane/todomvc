import Ember from 'ember';
const {
  computed
} = Ember

export default Ember.Component.extend({
  tagName: "li",
  targetItem: null,
  classNameBindings: ["isCompleted:completed"],
  updateState: "updateState",

  didInsertElement: function() {
    if(this.get("isCompleted")){
      this.$("input[type=checkbox]").prop("checked",true)
    }
  },

  isCompleted: computed("targetItem.state", function () {
    return this.targetItem.get("state") == 1
  }),

  checkedStyle: computed("targetItem.state", function () {
     if( this.targetItem.get("state") == 1 ){
      return "checked"
     }
  }),

  checkedChange: function(){
    this.send("convertToCompleted")
  }.observes("isChecked"),

  actions: {
    convertToCompleted: function(){
      console.info("checke change .... ", this.isChecked)
      this.sendAction("updateState", this.targetItem.id, this.isChecked )
    },

    deleteItem: function(){
      console.info("delete item", this.targetItem.id)
    }

  }



});
