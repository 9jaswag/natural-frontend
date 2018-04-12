
import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.get('store').findRecord('project', params.project_id)
      .then((project) => {
        return Ember.RSVP.hash({
          databases: project.get('databases'),
          project: project
        })
      });
  }
});
