import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: "hash"
});

Router.map(function(){
  this.route("todo", function () {
    this.route("active")
    this.route("completed")
  })


})



export default Router;
