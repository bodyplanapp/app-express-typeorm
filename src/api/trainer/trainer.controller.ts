import { Trainer } from "./trainer.model";
import { getRepository, getConnection } from "typeorm";
import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';
import { config } from '../../config/environment';


export class TrainerController {

    trainerRepository = getRepository(Trainer);

    constructor() { }

    async all(request: Request, response: Response, next: NextFunction) {
        return getConnection().getRepository(Trainer).find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.trainerRepository.findOneById(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        console.log('TrainerController --> save');

        const trainerRepository = getConnection().getRepository(Trainer);
        console.log('trainerRepository', trainerRepository);

        // this.trainerRepository.save(request.body).then(res => {
        //     console.log('res', res);
        //     var token = jwt.sign({ _id: res.id }, config.secrets.session);
        //     res.json({ token });
        // }).catch(err => {
        //     console.log('err', err);
        // });

        // return this.trainerRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        await this.trainerRepository.removeById(request.params.id);
    }

}