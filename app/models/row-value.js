
import DS from 'ember-data';

export default DS.Model.extend({
  value: DS.attr('string'),
  column: DS.belongsTo('column'),
  row: DS.belongsTo('row')
});
