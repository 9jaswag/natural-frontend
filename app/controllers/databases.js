// Copyright (C) Manuel Arno Korfmann - All Rights Reserved
// Unauthorized copying of this file, or parts of this file, via any medium is strictly prohibited
// Proprietary and confidential
// Written by Manuel Arno Korfmann <manu@korfmann.info>, April 2018

import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    transitionBack() {
      this.transitionToRoute('projects');
    },
    addDatabase() {
      let database = this.get('store').createRecord('database', {
        name: window.prompt(),
        project: this.model.project
      });
      database.save();
    },
    deleteDatabase(id) {
      this.get('store').findRecord('database', id).then(function(record) {
        record.destroyRecord();
      });
    }
  }
});
