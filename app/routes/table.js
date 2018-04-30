
import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from '../mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
  model(params) {
    return this.get('store').findRecord('table', params.table_id);
  },
  setupController: function(controller, model) {
   this._super(controller, model);
   this.controllerFor('application').set('fullscreen', true);
  },

  deactivate: function() {
   this.controllerFor('application').set('fullscreen', false);
  }
});
