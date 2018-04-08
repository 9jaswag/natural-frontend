import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [{ name: 'Foo', id: 1 }, { name: 'Bar', id: 2 }, { name: 'Baz', id: 3 }];
  }
});
