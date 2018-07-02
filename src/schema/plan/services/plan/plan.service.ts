import { Plan } from "../../../../models/plan.model";
import { TrainerRepository } from "../../../trainer/services/repository/trainer.repository";

export class PlanService {

    async createPlan(planDTO) {
        console.log('createPlan', planDTO)
        const trainerRepository = new TrainerRepository();
        const trainer = await trainerRepository.findOne(planDTO.trainer);
        console.log('trainer', trainer)
        const plan = new Plan();
        plan.name = planDTO.name;
        plan.description = planDTO.description;
        plan.type = planDTO.type;
        plan.trainer = trainer;
        return plan;
    }
}