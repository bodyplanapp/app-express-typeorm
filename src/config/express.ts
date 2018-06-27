/**
 * Express configuration
 */

'use strict';

import * as express from 'express';
import * as favicon from 'serve-favicon';
import * as morgan from 'morgan';
// import compression from 'compression';
import * as bodyParser from 'body-parser';
// import methodOverride from 'method-override';
import * as cookieParser from 'cookie-parser';
import * as errorHandler from 'errorhandler';
import * as path from 'path';
// import lusca from 'lusca';
import { config } from './environment';
import * as passport from 'passport';
import * as session from 'express-session';
// import sqldb from '../sqldb';
// let Store = require('connect-session-sequelize')(session.Store);

export default function(app) {
    var env = app.get('env');

    if(env === 'development' || env === 'test') {
        app.use(express.static(path.join(config.root, '.tmp')));
    }

    if(env === 'production') {
        app.use(favicon(path.join(config.root, 'client', 'favicon.ico')));
    }

    app.set('appPath', path.join(config.root, 'client'));
    app.use(express.static(app.get('appPath')));
    app.use(morgan('dev'));

    // app.set('views', `${config.root}/server/views`);
    // app.engine('html', require('ejs').renderFile);
    // app.set('view engine', 'html');
    // app.use(compression());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    // app.use(methodOverride());
    app.use(cookieParser());
    // app.use(passport.initialize());




    
    // Persist sessions with MongoStore / sequelizeStore
    // We need to enable sessions for passport-twitter because it's an
    // oauth 1.0 strategy, and Lusca depends on sessions
    // app.use(session({
    //     secret: config.secrets.session,
    //     saveUninitialized: true,
    //     resave: false,
    //     store: new Store(sqldb.sequelize)
    // }));

    // /**
    //  * Lusca - express server security
    //  * https://github.com/krakenjs/lusca
    //  */
    // if(env !== 'test' && env !== 'development' && !process.env.SAUCE_USERNAME) { // eslint-disable-line no-process-env
    //     app.use(lusca({
    //         csrf: true,
    //         xframe: 'SAMEORIGIN',
    //         hsts: {
    //             maxAge: 31536000, //1 year, in seconds
    //             includeSubDomains: true,
    //             preload: true
    //         },
    //         xssProtection: true
    //     }));
    // }

    // if(env === 'development' || env === 'test') {
    //     app.use(errorHandler()); // Error handler - has to be last
    // }
}
