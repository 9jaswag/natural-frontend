// Copyright (C) Manuel Arno Korfmann - All Rights Reserved
// Unauthorized copying of this file, or parts of this file, via any medium is strictly prohibited
// Proprietary and confidential
// Written by Manuel Arno Korfmann <manu@korfmann.info>, April 2018

import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { run } from '@ember/runloop';

module('Unit | Model | table', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let store = this.owner.lookup('service:store');
    let model = run(() => store.createRecord('table', {}));
    assert.ok(model);
  });
});
