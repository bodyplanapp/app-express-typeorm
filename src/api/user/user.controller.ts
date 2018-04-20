import { getRepository, getConnection, DeepPartial } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { User } from "./user.model";

import * as auth from '../../auth/auth.service';
import * as _ from 'lodash';

export class UserController {

    // private userRepository = getRepository(User);

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
