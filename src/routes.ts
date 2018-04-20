import * as errors from './api/errors';
import * as  TrainerRouter from './api/trainer/trainer.router';
import * as  UserRouter from './api/user/user.router';
import * as  CustomerRouter from './api/customer/customer.router';
import * as  FileRouter from './api/file/file.router';
import * as  PlanRouter from './api/plan/plan.router';

export default function routes(app) {

    // Insert routes below
    app.use('/api/user', UserRouter);
    app.use('/api/trainer', TrainerRouter);
    app.use('/api/customer', CustomerRouter);
    app.use('/api/file', FileRouter);
    app.use('/api/plan', PlanRouter);

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