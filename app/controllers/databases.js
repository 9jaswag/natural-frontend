
import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    transitionBack() {
      this.transitionToRoute('projects');
    },
    addDatabase() {
      let database = this.get('store').createRecord('database', {
        name: window.prompt(),
        project: this.model.project
      });
      database.save();
    },
    deleteDatabase(id) {
      this.get('store').findRecord('database', id).then(function(record) {
        record.destroyRecord();
      });
    }
  }
});
