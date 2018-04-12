// Copyright (C) Manuel Arno Korfmann - All Rights Reserved
// Unauthorized copying of this file, or parts of this file, via any medium is strictly prohibited
// Proprietary and confidential
// Written by Manuel Arno Korfmann <manu@korfmann.info>, April 2018

import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.get('store').findAll('project');
  }
});
