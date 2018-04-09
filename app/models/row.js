import DS from 'ember-data';

export default DS.Model.extend({
  table: DS.belongsTo('table'),
  name: DS.attr('string'),
  type: DS.attr('string')
});
