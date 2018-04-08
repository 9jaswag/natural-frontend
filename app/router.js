import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('projects', function() {
    this.route('project', { path: ':project_id' }, function() {
      this.route('databases');
    })
  });

  this.route('databases', function() {
    this.route('database', { path: ':databse_id' }, function() {
      this.route('tables');
    })
  });
});

export default Router;
