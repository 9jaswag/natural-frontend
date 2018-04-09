import Component from '@ember/component';

export default Component.extend({
  store: Ember.inject.service('store'),
  tagName: '',

  actions: {
    addColumn() {
      this.get('store').createRecord('column', {
        table: this.table
      });
    }
  }
});
