import Ember from 'ember';
  const {
    computed
  } = Ember

export default Ember.Component.extend({
  router: null,
  applicationController: null,
  clearCompleted: "clearCompleted",

  handlerInfos: function() {
    //console.info("currentPath  change ...  " )
    this.changeMenuShow( this.get("applicationController.currentPath") )
  }.observes("applicationController.currentPath"),

  didInsertElement: function () {
  },

  changeMenuShow: function(path){
    let targetEles = this.$("li a");
    let pathNames = path.split(".")
    targetEles.removeClass("selected")
    $.each(targetEles, function( _, _item) {
      let href = $(_item).attr("href")
      let url = `#/${pathNames.join("/")}`;
      if (url === href || url == `${href}/index`) {
        $(_item).addClass("selected")
      }
    })
  },

  actions: {
    clearCompleted: function(){
      this.sendAction("clearCompleted")
    }
  }


});
