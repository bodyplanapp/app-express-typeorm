import { getManager } from "typeorm";
import { Plan } from "../../../../models/plan.model";

export class PlanRepository {

    getRepository() {
        return getManager().getRepository(Plan);
    }

    async save(plan: Plan) {
        return await this.getRepository().save(plan);
    }

}