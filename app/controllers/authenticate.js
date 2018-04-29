import Controller from '@ember/controller';

export default Controller.extend({
  authentication: Ember.inject.service(),

  actions: {
    authenticate() {
      const { email, password } = this.getProperties('email', 'password');
      this.get('authentication').authenticate(email, password).then(() => {
        this.transitionToRoute('projects');
      }, (err) => {
        alert('Error obtaining token: ' + err.responseText);
      });
    }
  }
});
