
import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from '../mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
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
