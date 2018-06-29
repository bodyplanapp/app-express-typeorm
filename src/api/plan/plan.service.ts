import { PlanRepository } from "./plan.repository";
import { Trainer } from "../../models/trainer.model";
import { TrainerService } from "../trainer/trainer.service";
import { Plan } from "../../models/plan.model";
import { TrainerRepository } from "../trainer/trainer.repository";

export class PlanService {

    planRepository: PlanRepository = new PlanRepository;

    async createPlan(planDTO) {
        const trainerRepository = new TrainerRepository();
        const trainer = await trainerRepository.findOne(planDTO.id)
        const plan = new Plan();
        plan.name = planDTO.name;
        plan.description = planDTO.description;
        plan.type = planDTO.type;
        plan.trainer = trainer;
        return plan;
    }
}