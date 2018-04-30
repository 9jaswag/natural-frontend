import Route from '@ember/routing/route';

export default Route.extend({
  authentication: Ember.inject.service(),

  model() {
    return this.get('authentication');
  }
});
