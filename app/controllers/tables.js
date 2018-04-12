// Copyright (C) Manuel Arno Korfmann - All Rights Reserved
// Unauthorized copying of this file, or parts of this file, via any medium is strictly prohibited
// Proprietary and confidential
// Written by Manuel Arno Korfmann <manu@korfmann.info>, April 2018

import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    transitionBack() {
      this.transitionToRoute('databases', this.get('model.database.project.id'));
    },
    addTable() {
      let table = this.get('store').createRecord('table', {
        name: window.prompt(),
        database: this.model.database
      });
      table.save();
    },
    deleteTable(id) {
      this.get('store').findRecord('table', id).then(function(record) {
        record.destroyRecord();
      });
    }
  }
});
