

import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from '../mixins/authenticated-route-mixin';
import RSVP from 'rsvp';

export default Route.extend(AuthenticatedRouteMixin, {
  model(params) {
    return {
      functions: [
        {name: "Calculate percentiles", type: "post-process", id: 5}
      ]
    };
    // return this.get('store').findRecord('database', params.database_id)
    //   .then((database) => {
    //     return RSVP.hash({
    //       tables: database.get('tables'),
    //       database: database
    //     })
    //   });
  }
});
