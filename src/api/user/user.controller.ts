import { getRepository, getConnection, DeepPartial } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { User } from "../../models/user.model";

import * as auth from '../../auth/auth.service';
import * as _ from 'lodash';
import { File } from "../../models/file.model";

export class UserController {

    // private userRepository = getRepository(User);
    
    async save(request: Request, response: Response, next: NextFunction) {
        console.log('UserController --> save');
        const user = new User();
        const file = new File();
        file.url = 'nada';
        user.firstName = request.body.firstName;
        user.lastName = request.body.lastName;
        user.username = request.body.username;
        user.email = request.body.email;
        user.password = request.body.password;
        user.lang = request.body.lang;
        user.file = file;
        console.log(user);
        const trainerRepository = getConnection().getRepository(User);
        trainerRepository.save(user)
            .then(trainer => {
                const token = auth.signToken(trainer.id);
                response.status(200).json({ message: 'Trainer created', token });
            }).catch(error => {
                response.status(500).json({ message: 'Server error', error });
            });
    }

    async signIn(request: Request, response: Response, next: NextFunction) {
        console.log('UserController --> signIn');
        const userRepository = getConnection().getRepository(User);
        userRepository.findOne(request.body)
            .then(user => {
                if (user) {
                    const token = auth.signToken(user.id);
                    response.status(200).json({ message: 'Valid signIn', token });
                } else {
                    response.status(401).json({ message: 'Invalid signIn' });
                }
            }).catch(error => {
                response.status(500).json({ message: 'Server error' });
            });
    }

    async update(request: Request, response: Response, next: NextFunction) {
        console.log('UserController --> update', request.params.id, request.body);
        const userRepository = getConnection().getRepository(User);
        userRepository.update(request.params.id, _.cloneDeep(request.body))
            .then(user => {
                response.status(200).json({ message: 'Update user' });
            }).catch(error => {
                response.status(500).json({ message: 'Server error', error });
            });
    }

}
