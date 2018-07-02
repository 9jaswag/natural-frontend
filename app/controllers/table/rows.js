import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  store: service('store'),
  tagName: '',

  actions: {
    addRow() {
      let row = this.get('store').createRecord('row', {
        table: this.model
      });
      row.save();
    },
    deleteRow(id) {
      this.get('store').findRecord('row', id).then(function (record) {
        record.destroyRecord();
      });
    }
  }
});
