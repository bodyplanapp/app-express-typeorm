import { getManager } from "typeorm";
import { Week } from "../../../../models/week.model";

export class WeekRepository {

    getRepository() {
        return getManager().getRepository(Week);
    }

}