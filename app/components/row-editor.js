
import Component from '@ember/component';

export default Component.extend({
  store: Ember.inject.service('store'),
  tagName: '',

  actions: {
    addRow() {
      let row = this.get('store').createRecord('row', {
        table: this.table
      });
      row.save();
    },
    deleteRow(id) {
      this.get('store').findRecord('row', id).then(function(record) {
        record.destroyRecord();
      });
    }
  }
});
