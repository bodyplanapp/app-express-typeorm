import "reflect-metadata";
import { createConnection } from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import { Request, Response } from "express";
import Routes from "./routes";
import { config } from "./config/environment"
import * as app from './app';
import * as http from 'http';


createConnection(config.database).then(async connection => {

    var server = http.createServer(app);


    server.listen(config.port, config.ip, () => {
        console.log('a Express server listening on %d, in %s mode', config.port, app.get('env'));
    });

    // process.on('unhandledRejection', (reason, p) => {
    //     console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
    //   });
    
    // // start express server
    // server.listen(config.port, config.ip);

    // create express app
    // const app = express();
    // app.use(bodyParser.json());

    // register express routes from defined application routes
    // Routes.forEach(route => {
    //     (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
    //         const result = (new (route.controller as any))[route.action](req, res, next);
    //         if (result instanceof Promise) {
    //             result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);

    //         } else if (result !== null && result !== undefined) {
    //             res.json(result);
    //         }
    //     });
    // });

    // setup express app here
    // ...
    // console.log(app.get('env'));



    // console.log("Express server has started on port 3000. Open http://localhost:3000/users to see results");

}).catch(error => console.log(error));
