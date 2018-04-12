
import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model(params) {
    return this.get('store').findRecord('database', params.database_id)
      .then((database) => {
        return RSVP.hash({
          tables: database.get('tables'),
          database: database
        })
      });
  }
});
