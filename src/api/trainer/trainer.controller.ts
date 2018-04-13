import { Trainer } from "./trainer.model";
import { getRepository, getConnection } from "typeorm";
import { NextFunction, Request, Response } from "express";
import * as jwt from 'jsonwebtoken';
import { config } from '../../config/environment';


export class TrainerController {

    trainerRepository: any;

    async initRepository() {
        this.trainerRepository = getConnection().getRepository(Trainer);
    }

    async all(request: Request, response: Response, next: NextFunction) {
        return getConnection().getRepository(Trainer).find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.trainerRepository.findOneById(request.params.id);
    }

    save(request: Request, response: Response, next: NextFunction) {
        console.log('TrainerController --> save');
        // console.log(this.mylar);
        const trainerRepository = getConnection().getRepository(Trainer);

        // console.log('this.trainerRepository', this.trainerRepository);
        // console.log('trainerRepository', trainerRepository);

        trainerRepository.save(request.body).then(res => {
            console.log('res', res);
            var token = jwt.sign({ _id: res.id }, config.secrets.session);
            response.json({ token });
        }).catch(err => {
            console.log('err', err);
        });

        // return trainerRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        await this.trainerRepository.removeById(request.params.id);
    }

}