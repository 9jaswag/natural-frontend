import DS from 'ember-data';

export default DS.Model.extend({
  table: DS.belongsTo('table'),
  rowValues: DS.hasMany('rowValue')
});