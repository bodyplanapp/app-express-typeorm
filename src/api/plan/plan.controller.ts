import { getRepository, getConnection } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Plan } from "./plan.model";

import * as auth from '../../auth/auth.service';
import { User } from "../user/user.model";
import { Trainer } from "../trainer/trainer.model";
import { TrainerService } from "../trainer/trainer.service";
import { PlanService } from "./plan.service";
import { PlanRepository } from "./plan.repository";

export class PlanController {

    // planRepository: getRepository(Plan);

    async save(request: Request, response: Response, next: NextFunction) {
        console.log('PlanController --> save');
        const planService = new PlanService();
        const planRepository = new PlanRepository();
        const plan = await planService.createPlan(request.body);
        planRepository.save(plan)
            .then(plan => {
                response.status(200).json({ message: 'Plan created by: ' + plan.trainer.username });
            }).catch(error => {
                response.status(500).json({ message: 'Server error', error });
            });
    }

}