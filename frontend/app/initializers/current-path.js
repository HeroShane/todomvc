export function initialize(container, application) {
    application.inject("component:show-board", "router", "router:main");
    application.inject("component:show-board", "applicationController", "controller:application");

      var router = container.lookup('router:main');
      router.on('didTransition', function() {
          console.log(" router is change .....");
     });

}

export default {
  name: 'current-path',
  initialize: initialize
};
