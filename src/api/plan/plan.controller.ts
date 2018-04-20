import { getRepository, getConnection } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Plan } from "./plan.model";

import * as auth from '../../auth/auth.service';

export class PlanController {

    // planRepository: getRepository(Plan);

    async save(request: Request, response: Response, next: NextFunction) {
        console.log('PlanController --> save');
        const planRepository = getConnection().getRepository(Plan);
        planRepository.save(request.body)
            .then(plan => {
                response.status(200).json({ message: 'Plan created' });
            }).catch(error => {
                response.status(500).json({ message: 'Server error', error });
            });
    }

}