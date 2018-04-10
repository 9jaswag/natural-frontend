import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.get('store').findRecord('database', params.database_id)
      .then((database) => {
        return Ember.RSVP.hash({
          tables: database.get('tables'),
          database: database
        })
      });
  }
});
