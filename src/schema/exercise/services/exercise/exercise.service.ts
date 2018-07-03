import { Exercise } from "../../../../models/exercise.model";
import { ExerciseRepository } from "../repository/exercise.repository";

const exerciseRepository = new ExerciseRepository();

export class ExerciseService {

    createExercise(exerciseDTO) {
        const exercise = new Exercise();
        exercise.name = exerciseDTO.name;
        exerciseRepository.save(exercise);
        return exercise;
    }
}