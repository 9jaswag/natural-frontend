import ENV from "../config/environment";
import DS from 'ember-data';
import { pluralize } from 'ember-inflector';

export default DS.JSONAPIAdapter.extend({
  host: ENV.apiHost,

  pathForType: function(type) {
    return Ember.String.underscore(pluralize(type));
  },

  authentication: Ember.inject.service(),

  headers: Ember.computed('authManager.accessToken', function() {
    return {
      "Authentication": `${this.get("authentication.accessToken")}`
    };
  })
});
