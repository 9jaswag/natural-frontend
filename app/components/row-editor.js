// Copyright (C) Manuel Arno Korfmann - All Rights Reserved
// Unauthorized copying of this file, or parts of this file, via any medium is strictly prohibited
// Proprietary and confidential
// Written by Manuel Arno Korfmann <manu@korfmann.info>, April 2018

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
