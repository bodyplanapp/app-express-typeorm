import { getRepository } from "typeorm";

import { PlanRepository } from "../services/repository/plan.repository";
import { PlanService } from "../services/plan/plan.service";

const planService = new PlanService();
const planRepository = new PlanRepository();

export const Mutation = {

    async createPlan(_, { plan: req }) {
        const plan = await planService.createPlan(req);
        console.log(plan)
        const result = await planRepository.save(plan);
        return result;
    }
};