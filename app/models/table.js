
import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  database: DS.belongsTo('database'),
  columns: DS.hasMany('column'),
  rows: DS.hasMany('row')
});
