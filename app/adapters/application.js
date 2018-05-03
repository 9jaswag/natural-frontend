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

  handleResponse(status, headers, payload, requestData) {
    this.ensureResponseAuthenticated(status, headers, payload, requestData);
    return this._super(...arguments);
  },

  ensureResponseAuthenticated(status/* ,headers, payload, requestData */) {
    if (status === 403 && this.get('authentication.isAuthenticated')) {
      this.get('authentication').invalidate();
    }
  },


  headers: Ember.computed('authentication.accessToken', function() {
    return {
      "Authentication": `${this.get('cookies').read('accessToken')}`
    };
  })
});
