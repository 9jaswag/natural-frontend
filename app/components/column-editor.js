import Component from '@ember/component';

export default Component.extend({
  store: Ember.inject.service('store'),
  tagName: '',

  actions: {
    addColumn() {
      let column = this.get('store').createRecord('column', {
        table: this.table
      });
      column.save();
    }
  }
});
