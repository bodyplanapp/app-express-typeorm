import * as auth from '../../auth/auth.service';
import { Router } from 'express';
import { TrainerController } from './trainer.controller';

// export const TrainerRouter = [{
//     method: "get",
//     route: "/",
//     controller: TrainerController,
//     action: "all"
// }, {
//     method: "get",
//     route: "/:id",
//     controller: TrainerController,
//     action: "one"
// }, {
//     method: "post",
//     route: "/save",
//     controller: TrainerController,
//     action: "save"
// }, {
//     method: "delete",
//     route: "/",
//     controller: TrainerController,
//     action: "remove"
// }];

var router = Router();
const trainer = new TrainerController();
console.log('trainer.trainerRepository after', trainer.trainerRepository);
trainer.initRepository();
console.log('trainer.trainerRepository before', trainer.trainerRepository);
// const trainerController = new TrainerController();
// console.log(trainerController);
// console.log('trainerRepository', trainerController.trainerRepository)
// router.get('/', auth.hasRole('admin'), TrainerController.prototype.all);
// trainer.save(null, null, null);
router.post('/', trainer.save);

export = router;

// export class TrainerRouter {

//     router = Router();

//     private trainerController = new TrainerController();

//     // constructor() {
//     //     this.initRouter();
//     // }

//     // initRouter() {
//     //     this.router.get('/', auth.hasRole('admin'), this.trainerController.all);
//     // }

//     // router.get('/', auth.hasRole('admin'), TrainerController.prototype.all);
// }