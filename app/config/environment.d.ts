export default config;

/**
 * Type declarations for
 *    import config from 'my-app/config/environment'
 */
declare const config: {
  environment: string;
  modulePrefix: string;
  podModulePrefix: string;
  locationType: 'history' | 'hash' | 'none' | 'auto';
  rootURL: string;
  APP: Record<string, unknown>;

  solana: {
    PROGRAM_ID_PUBLIC_SEED: string;
    PROGRAM_ID: string;
    CLUSTER_URL: string;
    LAMPORTS_BASE: number;
    RANKING_ACCOUNT: string;
  }
};
