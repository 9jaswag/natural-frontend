
import Component from '@ember/component';

export default Component.extend({
  store: Ember.inject.service('store'),
  tagName: '',
  columnTypes: [
    { value: 'varchar_255', label: 'VarChar(255)' },
    { value: 'text', label: 'Text' },
    { value: 'integer', label: 'Integer' }
  ],
  columnType: null,

  actions: {
    addColumn() {
      let rowName = window.prompt();
      let row = this.get('store').createRecord('column', {
        table: this.table,
        name: rowName
      });
      row.save()
      .catch(()=>{
        row.destroyRecord();
      });
    },
    updateColumnType(column, event) {
      column.set('type', event.target.value);
      this.actions.update(column);
    },

    update(column) {
      column.save();
    },

    deleteColumn(id) {
      this.get('store').findRecord('column', id).then(function(record) {
        record.destroyRecord();
      });
    }
  }
});
