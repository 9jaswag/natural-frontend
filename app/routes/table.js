
import Route from '@ember/routing/route';

export default Route.extend({
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
