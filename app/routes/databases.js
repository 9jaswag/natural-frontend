import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.get('store').findAll('database', {databaseId: params.project_id});
  }
});
