import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    addProject() {
      let row = this.get('store').createRecord('project', {
        name: window.prompt()
      });
      row.save();
    },
    deleteProject(id) {
      this.get('store').findRecord('project', id).then(function(record) {
        record.destroyRecord();
      });
    }
  }
});
