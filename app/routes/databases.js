// Copyright (C) Manuel Arno Korfmann - All Rights Reserved
// Unauthorized copying of this file, or parts of this file, via any medium is strictly prohibited
// Proprietary and confidential
// Written by Manuel Arno Korfmann <manu@korfmann.info>, April 2018

import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.get('store').findRecord('project', params.project_id)
      .then((project) => {
        return Ember.RSVP.hash({
          databases: project.get('databases'),
          project: project
        })
      });
  }
});
