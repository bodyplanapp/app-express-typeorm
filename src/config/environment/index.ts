'use strict';
/*eslint no-process-env:0*/

import * as path from 'path'
// import * as _ from 'lodash';

/*function requiredProcessEnv(name) {
  if(!process.env[name]) {
    throw new Error('You must set the ' + name + ' environment variable');
  }
  return process.env[name];
}*/

// All configurations will extend these options
// ============================================
export let config = {
    env: process.env.NODE_ENV,

    userRoles: ['guest', 'user', 'admin'],

    // Root path of server
    root: path.normalize(`${__dirname}/../../..`),

    // dev client port
    clientPort: process.env.CLIENT_PORT || 3000,

    // Server port
    port: +process.env.PORT || 9000,

    // Server IP
    ip: process.env.IP || '127.0.0.1',

    // Should we populate the DB with sample data?
    seedDB: false,

    // Secret for session, you will want to change this and make it an environment variable
    secrets: {
        session: 'app-express-generator-custom-secret'
    },

    database: require(`./${process.env.NODE_ENV}.json`),

    facebook: {
        clientID: process.env.FACEBOOK_ID || 'id',
        clientSecret: process.env.FACEBOOK_SECRET || 'secret',
        callbackURL: `${process.env.DOMAIN || ''}/auth/facebook/callback`
    },

    google: {
        clientID: process.env.GOOGLE_ID || 'id',
        clientSecret: process.env.GOOGLE_SECRET || 'secret',
        callbackURL: `${process.env.DOMAIN || ''}/auth/google/callback`
    }
};


// Export the config object based on the NODE_ENV
// ==============================================
// module.exports = _.merge(
//     all,
//     require('./shared').default,
//     require(`./${process.env.NODE_ENV}.js`) || {});
