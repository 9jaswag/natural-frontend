// Copyright (C) Manuel Arno Korfmann - All Rights Reserved
// Unauthorized copying of this file, or parts of this file, via any medium is strictly prohibited
// Proprietary and confidential
// Written by Manuel Arno Korfmann <manu@korfmann.info>, April 2018

import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    addProject() {
      let row = this.get('store').createRecord('project', {
        name: window.prompt()
      });
      row.save();
    },
    deleteProject(id) {
      this.get('store').findRecord('project', id).then(function(record) {
        record.destroyRecord();
      });
    }
  }
});
