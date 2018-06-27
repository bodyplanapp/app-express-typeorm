/**
 * Main application file
 */
import * as express from 'express';
import expressConfig from './config/express';
import setupGraphQL from './config/graphql';

// import config from './config/environment';
// import initWebSocketServer from './config/websockets';
// import seedDatabaseIfNeeded from './config/seed';


// Setup server
var app = express();
// var server = http.createServer(app);
// const wsInitPromise = initWebSocketServer(server);
expressConfig(app);
setupGraphQL(app)
// registerRoutes(app);

// Expose app
export = app;
