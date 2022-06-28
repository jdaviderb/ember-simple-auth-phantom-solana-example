import { PhantomWallet } from 'webapp/interfaces/phantom'

declare global {
  interface Window { solana: PhantomWallet }
}

export default function (): PhantomWallet {
  return window.solana;
}
