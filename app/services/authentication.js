import ENV from "../config/environment";

export default Ember.Service.extend({

  accessToken: null,

  authenticate(email, password) {
    return Ember.$.ajax({
      method: "POST",
      url: ENV.apiHost + "/token",
      data: { email: email, password: password }
    }).then((result) => {
      this.set('accessToken', result.token);
    });
  },

  invalidate() {
    this.set('accessToken', null);
  },

  isAuthenticated: Ember.computed.bool('accessToken')

});
