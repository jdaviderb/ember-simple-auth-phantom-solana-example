// @ts-nocheck
import Base from 'ember-simple-auth/authenticators/base';

export default class CustomAuthenticator extends Base {
  async restore(data: any) {
    return data;
  }

  async authenticate(publicKey: string) {
    return { publicKey };
  }
}
