import Ember from 'ember';
  const {
    computed
  } = Ember

export default Ember.Component.extend({

  // currentRoute: computed("appRoute.controller.currentRouteName", function(){
  //   console.info("current router name ...", this.get('appRoute.controller.currentRouteName'))
  //   return this.get('appRoute.controller.currentRouteName')
  // }),
  // currentUrl: computed("appRoute.router.url", function(){
  //   console.info("current router url ...", this.get("appRoute.router.url"))
  //   return this.get("appRoute.router.url")
  // }),

  didInsertElement: function () {
    // this.$("li a").removeClass("selected")
    // let routerItem = currentRouter.split(".")
    // this.$("li a").each( (_, item) => {
    //   if ( `#/${routerItem.join("/")}` == $(item).attr("href") ){
    //     $(item).addClass("selected")
    //   }
    // })
    console.info("show board .... " )
  },

  // routerChanged: function(){
  //   console.info("current router change ...")
      
  // }.observes("currentRouter")



});
