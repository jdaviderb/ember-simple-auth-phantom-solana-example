import Component from '@glimmer/component';
import SolanaService from 'webapp/services/solana';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

interface SignInArgs {}

export default class SignIn extends Component<SignInArgs> {
  @service declare solana: SolanaService;

  @action 
  async connect() {
    return await this.solana.initializeSession();
  }
}
