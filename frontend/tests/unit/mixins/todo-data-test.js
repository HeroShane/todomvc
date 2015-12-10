import Ember from 'ember';
import TodoDataMixin from '../../../mixins/todo-data';
import { module, test } from 'qunit';

module('Unit | Mixin | todo data');

// Replace this with your real tests.
test('it works', function(assert) {
  let TodoDataObject = Ember.Object.extend(TodoDataMixin);
  let subject = TodoDataObject.create();
  assert.ok(subject);
});
