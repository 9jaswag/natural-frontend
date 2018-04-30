import { inject as service } from '@ember/service';

export default Ember.Mixin.create({
  authentication: service(),
  beforeModel(/* transition */) {
    this.get('authentication').loadFromCookie();
  }
});
