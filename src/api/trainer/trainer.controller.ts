import { getRepository, getConnection, getManager } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Trainer } from "../../models/trainer.model";
import * as auth from '../../auth/auth.service';
import { File } from "../../models/file.model";
import { TrainerService } from "./trainer.service";
import { TrainerRepository } from "./trainer.repository";
import { UserRepository } from "../user/user.repository";

export class TrainerController {

    // private trainerRepository = getManager().getRepository(Trainer);

    async save(request: Request, response: Response, next: NextFunction) {
        console.log('TrainerController --> save');
        const userRepository = new UserRepository();

        if (await userRepository.findOneByEmail(request.body.email)) {
            response.status(401).json({ message: 'Email already in use' });
        } else if (await userRepository.findOneByUsername(request.body.username)) {
            response.status(401).json({ message: 'Username already in use' });
        } else {
            const trainerRepository = new TrainerRepository();
            const trainerService = new TrainerService();
            const trainer = trainerService.createTrainer(request.body);
            trainerRepository.save(trainer)
                .then(trainer => {
                    const token = auth.signToken(trainer.id);
                    response.status(200).json({ message: 'Trainer created', token });
                }).catch(error => {
                    response.status(500).json({ message: 'Server error', error });
                });
        }
    }

    async all(request: Request, response: Response, next: NextFunction) {
        console.log('TrainerController --> all');
        const trainerService = new TrainerService();
        trainerService.findAll()
            .then(trainer => {
                response.status(200).json({ message: 'All trainers', trainer });
            }).catch(error => {
                response.status(500).json({ message: 'Server error', error });
            });
    }

    async one(request: Request, response: Response, next: NextFunction) {
        console.log('TrainerController --> one');
        const trainerService = new TrainerService();
        trainerService.findOne(request.params.id)
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