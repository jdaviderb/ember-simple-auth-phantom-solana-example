import Service from '@ember/service';
import { SessionService } from 'webapp/interfaces/session';
import { inject as service } from '@ember/service';
import solana from 'webapp/utils/solana';
import { tracked } from '@glimmer/tracking';
import { Connection } from '@solana/web3.js';
import { PublicKey } from '@solana/web3.js';
import config from 'webapp/config/environment';

export default class Solana extends Service.extend({}) {
  @service declare session: SessionService;
  @tracked declare wallet: PublicKey;
  @tracked declare connection: Connection;

  async initializeSession(): Promise<void> {
    const result = await solana().connect();
    this.wallet = result.publicKey;
    this.connection = new Connection(
      config.solana.CLUSTER_URL, 
      'confirmed'
    );

    await this.session.authenticate(
      'authenticator:phantom', 
      result.publicKey.toString()
    );
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your services.
declare module '@ember/service' {
  interface Registry {
    'solana': Solana;
  }
}
