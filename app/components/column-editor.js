// Copyright (C) Manuel Arno Korfmann - All Rights Reserved
// Unauthorized copying of this file, or parts of this file, via any medium is strictly prohibited
// Proprietary and confidential
// Written by Manuel Arno Korfmann <manu@korfmann.info>, April 2018

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
