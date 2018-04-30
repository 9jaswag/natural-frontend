import Controller from '@ember/controller';

export default Controller.extend({
  authentication: Ember.inject.service(),

  actions: {
    logOut() {
      alert('Test');
      this.get('authentication').invalidate();
    }
  }
});
