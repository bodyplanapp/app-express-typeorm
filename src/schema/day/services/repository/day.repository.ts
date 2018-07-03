import { getManager } from "typeorm";
import { Day } from "../../../../models/day.model";

export class DayRepository {

    getRepository() {
        return getManager().getRepository(Day);
    }

}