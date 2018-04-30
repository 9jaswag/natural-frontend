import { inject as service } from '@ember/service';

export default Ember.Mixin.create({
  authentication: service(),
  beforeModel(/* transition */) {
    console.log(this.get('authentication').isAuthenticated);
    if (!this.get('authentication').isAuthenticated) {
      this.transitionTo('authenticate');
    }
  }
});
