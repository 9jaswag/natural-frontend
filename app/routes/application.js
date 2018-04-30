import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import ApplicationRouteAuthMixin from '../mixins/application-route-auth-mixin';

export default Route.extend(ApplicationRouteAuthMixin);
