
import { createConnection } from "typeorm";
import { config } from "./config/environment"
import * as app from './app';
import * as http from 'http';


createConnection(config.database).then(async connection => {

    var server = http.createServer(app);

    server.listen(config.port, config.ip, () => {
        console.log('a Express server listening on %d, in %s mode', config.port, app.get('env'));
        // console.log('connection', connection);
    });

    // process.on('unhandledRejection', (reason, p) => {
    //     console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
    //   });

}).catch(error => console.log(error));
