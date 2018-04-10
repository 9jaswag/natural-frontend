import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    transitionBack() {
      this.transitionToRoute('databases', this.get('model.database.project.id'));
    },
    addTable() {
      let table = this.get('store').createRecord('table', {
        name: window.prompt(),
        database: this.model.database
      });
      table.save();
    },
    deleteDatabase(id) {
      this.get('store').findRecord('table', id).then(function(record) {
        record.destroyRecord();
      });
    }
  }
});
