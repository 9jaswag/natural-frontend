// Copyright (C) Manuel Arno Korfmann - All Rights Reserved
// Unauthorized copying of this file, or parts of this file, via any medium is strictly prohibited
// Proprietary and confidential
// Written by Manuel Arno Korfmann <manu@korfmann.info>, April 2018

import Component from '@ember/component';

export default Component.extend({
  didReceiveAttrs() {
    this._super(...arguments);

    //TODO: Needs refactoring and most probably sideloading of row-values

    if(this.get('row.id') === null) {
      this.set('rowValue', this.get('store').createRecord('rowValue', {
        column: this.get('column'),
        row: this.get('row')
      }));
      return;
    }

    this.get('store').findRecord('row', this.get('row.id')).then((row) => {
      row.get('rowValues').then((rowValues) => {
        let rowValue = rowValues.find((rowValue) => {
          return this.get('column.id') === rowValue.get('column.id');
        });

        if(rowValue) {
          this.set('rowValue', rowValue);
        } else {
          this.set('rowValue', this.get('store').createRecord('rowValue', {
            column: this.get('column'),
            row: this.get('row')
          }));
        }
      });
    });
  },

  store: Ember.inject.service('store'),
  actions: {
    triggerUpdate() {
      Ember.run.debounce(this, this.update, 1000);
    }
  },
  update() {
    this.get('rowValue').save().then(() => {
      Ember.run.later(() => {
        this.row.reload();
      }, 100);
    });
  }
});
