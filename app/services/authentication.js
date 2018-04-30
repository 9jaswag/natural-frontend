import ENV from "../config/environment";
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Ember.Service.extend({
  cookies: service(),

  authenticate(email, password) {
    return Ember.$.ajax({
      method: "POST",
      url: ENV.apiHost + "/token",
      data: { email: email, password: password }
    }).then((result) => {
      let cookieService = this.get('cookies');
      cookieService.write('accessToken', result.token);
    });
  },

  invalidate() {
    alert('test');
    let cookieService = this.get('cookies');
    cookieService.write('accessToken', null);
  },

  isAuthenticated: computed(function() {
    let cookieService = this.get('cookies');
    return !!cookieService.read('accessToken');
  })

});
