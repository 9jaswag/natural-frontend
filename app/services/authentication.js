import ENV from "../config/environment";
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';


// TODO: make cookie authentication work (computed property is shit, when used in combination with cookies)
export default Ember.Service.extend({
  cookies: service(),
  accessToken: null,

  authenticate(email, password) {
    return Ember.$.ajax({
      method: "POST",
      url: ENV.apiHost + "/token",
      data: { email: email, password: password }
    }).then((result) => {
      this.set('accessToken', result.token);

      let cookieService = this.get('cookies');
      cookieService.write('accessToken', result.token);
    });
  },

  loadFromCookie() {
    let cookieService = this.get('cookies');
    let token = cookieService.read('accessToken');
    this.set('accessToken', token);
  },

  invalidate() {
    this.set('accessToken', null);

    let cookieService = this.get('cookies');
    cookieService.write('accessToken', null);
  },

  isAuthenticated: Ember.computed.bool('accessToken')
});
