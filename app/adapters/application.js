import ENV from "../config/environment";
import DS from 'ember-data';
import { pluralize } from 'ember-inflector';
import { inject as service } from '@ember/service';


export default DS.JSONAPIAdapter.extend({
  host: ENV.apiHost,
  cookies: service(),
  authentication: service(),

  pathForType: function(type) {
    return Ember.String.underscore(pluralize(type));
  },

  headers: Ember.computed('authentication.accessToken', function() {
    return {
      "Authentication": `${this.get('cookies').read('accessToken')}`
    };
  })
});
