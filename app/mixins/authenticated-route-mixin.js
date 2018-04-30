import { inject as service } from '@ember/service';

export default Ember.Mixin.create({
  authentication: service(),
  beforeModel(/* transition */) {
    if (!this.get('authentication').isAuthenticated) {
      this.transitionTo('authenticate');
    }
  }
});
