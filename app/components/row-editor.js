import Component from '@ember/component';

export default Component.extend({
  store: Ember.inject.service('store'),
  tagName: '',

  actions: {
    addRow() {
      let rowName = window.prompt();
      let row = this.get('store').createRecord('row', {
        table: this.table,
        name: rowName
      });
      row.save();
    },
    deleteRow(id) {
      this.get('store').findRecord('row', id).delete();
    }
  }
});
