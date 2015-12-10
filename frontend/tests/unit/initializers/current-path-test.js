import Ember from 'ember';
import CurrentPathInitializer from '../../../initializers/current-path';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | current path', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  CurrentPathInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
