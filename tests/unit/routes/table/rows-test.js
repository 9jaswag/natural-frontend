import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | table/rows', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:table/rows');
    assert.ok(route);
  });
});
