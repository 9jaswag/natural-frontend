import Component from '@ember/component';

export default Component.extend({
  store: Ember.inject.service('store'),
  attributeBindings: ["value"],
  actions: {
    triggerCreateOrUpdate() {
      Ember.run.debounce(this, this.createOrUpdate, 1000);
    }
  },
  createOrUpdate() {
    this.create();
  },
  create() {
    this.rowValue = this.get('store').createRecord('rowValue', {
      column: this.column,
      row: this.row,
      value: this.get('value')
    });
    this.rowValue.save();
  }
});
