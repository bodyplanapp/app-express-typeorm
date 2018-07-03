import { getManager } from "typeorm";
import { Exercise } from "../../../../models/exercise.model";

export class ExerciseRepository {

    getRepository() {
        return getManager().getRepository(Exercise);
    }

    async save(exercise: Exercise): Promise<Exercise> {
        return await this.getRepository().save(exercise);
    }

}