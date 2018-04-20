import { getRepository, getConnection } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Trainer } from "./trainer.model";
import * as auth from '../../auth/auth.service';

export class TrainerController {

    // trainerRepository: getRepository(Trainer);

    async save(request: Request, response: Response, next: NextFunction) {
        console.log('TrainerController --> save');
        const trainerRepository = getConnection().getRepository(Trainer);
        trainerRepository.save(request.body)
            .then(trainer => {
                const token = auth.signToken(trainer.id);
                response.status(200).json({ message: 'Trainer created', token });
            }).catch(error => {
                response.status(500).json({ message: 'Server error', error });
            });
    }

    async all(request: Request, response: Response, next: NextFunction) {
        console.log('TrainerController --> all');
        const trainerRepository = getConnection().getRepository(Trainer);
        trainerRepository.find()
            .then(trainer => {
                response.status(200).json({ message: 'All trainers', trainer });
            }).catch(error => {
                response.status(500).json({ message: 'Server error', error });
            });
    }

    async one(request: Request, response: Response, next: NextFunction) {
        console.log('TrainerController --> one');
        const trainerRepository = getConnection().getRepository(Trainer);
        trainerRepository.findOneById(request.params.id)
            .then(trainer => {
                if (trainer) {
                    response.status(200).json({ message: 'Trainer', trainer });
                } else {
                    response.status(401).json({ message: 'Invalid trainer' });
                }

            }).catch(error => {
                response.status(500).json({ message: 'Server error', error });
            });
    }

    // async remove(request: Request, response: Response, next: NextFunction) {
    //     await this.trainerRepository.removeById(request.params.id);
    // }

}