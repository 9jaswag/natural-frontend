
import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('projects');
  this.route('databases', { path: 'projects/:project_id/databases' });
  this.route('tables', { path: 'databases/:database_id/tables' });
  this.route('table', { path: 'tables/:table_id' });
});

export default Router;
