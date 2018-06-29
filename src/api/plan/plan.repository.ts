import { getManager, Transaction } from "typeorm";
import { Plan } from "../../models/plan.model";

export class PlanRepository {

    getRepository() {
        return getManager().getRepository(Plan);
    }

    save(plan: Plan) {
        return this.getRepository().save(plan);
    }
}