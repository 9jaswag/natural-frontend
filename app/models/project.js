
import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  apiToken: DS.attr('string'),
  databases: DS.hasMany('database')
});
