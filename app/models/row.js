
import DS from 'ember-data';

export default DS.Model.extend({
  dbId: DS.attr('string'),
  table: DS.belongsTo('table'),
  rowValues: DS.hasMany('rowValue')
});
