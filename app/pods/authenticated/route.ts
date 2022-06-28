import Route from '@ember/routing/route';
import { SessionService } from 'webapp/interfaces/session';
import { inject as service } from '@ember/service';
import transition from '@ember/routing/-private/transition';

export default class AuthenticatedRoute extends Route.extend({}) {
  @service declare session: SessionService;

  beforeModel(transition: transition<unknown>) {
    this.session.requireAuthentication(transition, 'sign-in');
  }
}
