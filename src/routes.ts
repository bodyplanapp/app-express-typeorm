// import {UserController} from "./controller/UserController";

// export const Routes = [{
//     method: "get",
//     route: "/users",
//     controller: UserController,
//     action: "all"
// }, {
//     method: "get",
//     route: "/users/:id",
//     controller: UserController,
//     action: "one"
// }, {
//     method: "post",
//     route: "/users",
//     controller: UserController,
//     action: "save"
// }, {
//     method: "delete",
//     route: "/users",
//     controller: UserController,
//     action: "remove"
// }];
import * as errors from './api/errors';
import { Request, Response } from "express";
import * as  TrainerRouter from './api/trainer/trainer.router';

export default function routes(app) {

    // Insert routes below
    // app.use('/api/users', require('./api/user'));
    app.use('/api/trainer', TrainerRouter);
    // app.use('/api/customer', require('./api/customer'));

    // TrainerRouter.forEach(route => {

    //     (app as any)[route.method]('/api/trainer' + route.route, (req: Request, res: Response, next: Function) => {
    //         const result = (new (route.controller as any))[route.action](req, res, next);
    //         console.log('result', result);
    //         if (result instanceof Promise) {
    //             result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);

    //         } else if (result !== null && result !== undefined) {
    //             res.json(result);
    //         }
    //     });
    // });

    // app.use('/auth', require('./auth').default);

    // All undefined asset or api routes should return a 404
    app.route('/:url(api|auth|components|app|bower_components|assets)/*')
        .get(errors.pageNotFound);

    // All other routes should redirect to the app.html
    app.route('/*')
        .get((req, res) => {
            res.status(200).send({ menssage: 'Tienes acceso' })
            // res.sendFile(path.resolve(`${app.get('appPath')}/app.html`));
        });
}