import DS from 'ember-data';

export default DS.Model.extend({
  detail: DS.attr(),
  state: DS.attr()
});
