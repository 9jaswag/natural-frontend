
import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  type: DS.attr('string'),
  table: DS.belongsTo('table'),
  rowValues: DS.hasMany('rowValue')
});
