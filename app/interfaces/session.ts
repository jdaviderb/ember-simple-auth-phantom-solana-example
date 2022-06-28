import transition from '@ember/routing/-private/transition';


export interface SessionService {
  authenticate(connector: string, params: any): Promise<void>;
  prohibitAuthentication(route: string): void;
  requireAuthentication(transition: transition, route: string): void;
}
