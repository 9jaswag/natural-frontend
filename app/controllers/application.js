import Controller from '@ember/controller';

export default Controller.extend({
  authentication: Ember.inject.service(),
  actions: {
    logOut() {
      this.get('authentication').invalidate();
      this.transitionToRoute('index');
    }
  }
});
