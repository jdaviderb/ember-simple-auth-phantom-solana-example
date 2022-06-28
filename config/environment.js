'use strict';

module.exports = function (environment) {
  let ENV = {
    modulePrefix: 'webapp',
    podModulePrefix: 'webapp/pods',
    environment,
    rootURL: '/',
    locationType: 'history',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false,
      },
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    ['ember-simple-auth']: {
      routeAfterAuthentication: 'authenticated.world',
    },

    solana: {
      CLUSTER_URL: 'http://127.0.0.1:8899',
      PROGRAM_ID_PUBLIC_SEED: 'ok2222xxx22xxxxxxx',
      PROGRAM_ID: 'JCKY6ahMj3aBkoht3WTPUEqZrLajvMkNW8uKRXqx2AG5',
      RANKING_ACCOUNT: 'Bdq3xqTMFuk5JVVLCXssKx8wnDzTd1pbXTigCTr8EfKi',
      LAMPORTS_BASE: 1000000000,
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
