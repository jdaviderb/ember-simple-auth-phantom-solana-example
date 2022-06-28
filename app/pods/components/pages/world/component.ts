import Component from '@glimmer/component';
import SolanaService from 'webapp/services/solana';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

interface WorldArgs {}

export default class World extends Component<WorldArgs> {
  @service declare solana: SolanaService;
}
