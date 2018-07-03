import { getManager } from "typeorm";
import { Workout } from "../../../../models/workout.model";

export class WorkoutRepository {

    getRepository() {
        return getManager().getRepository(Workout);
    }

    async save(workout: Workout) {
        return await this.getRepository().save(workout);
    }

}