import DS from 'ember-data';
import { pluralize } from 'ember-inflector';

export default DS.JSONAPIAdapter.extend({
  host: 'http://localhost:3000',

  pathForType: function(type) {
    return Ember.String.underscore(pluralize(type));
  }
});
