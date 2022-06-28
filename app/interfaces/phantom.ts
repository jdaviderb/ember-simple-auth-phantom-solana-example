import { PublicKey, Transaction, TransactionSignature } from '@solana/web3.js';

export interface PhantomConnectionResponse {
  publicKey: PublicKey
}

export interface TransactionSigned {
  signature: TransactionSignature;
}

export interface PhantomWallet {
  connect(): Promise<PhantomConnectionResponse>
  signAndSendTransaction(transtion: Transaction): Promise<TransactionSigned>
}



