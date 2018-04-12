// Copyright (C) Manuel Arno Korfmann - All Rights Reserved
// Unauthorized copying of this file, or parts of this file, via any medium is strictly prohibited
// Proprietary and confidential
// Written by Manuel Arno Korfmann <manu@korfmann.info>, April 2018

import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | databases', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:databases');
    assert.ok(route);
  });
});
