
import Component from '@ember/component';

export default Component.extend({
  store: Ember.inject.service('store'),
  tagName: '',

  actions: {
    addColumn() {
      let rowName = window.prompt();
      let row = this.get('store').createRecord('column', {
        table: this.table,
        name: rowName
      });
      row.save();
    },
    deleteColumn(id) {
      this.get('store').findRecord('column', id).then(function(record) {
        record.destroyRecord();
      });
    }
  }
});
