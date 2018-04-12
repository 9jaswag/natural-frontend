import ENV from "../config/environment";
import DS from 'ember-data';
import { pluralize } from 'ember-inflector';

export default DS.JSONAPIAdapter.extend({
  host: 'http://' + ENV.apiHost,

  pathForType: function(type) {
    return Ember.String.underscore(pluralize(type));
  }
});
