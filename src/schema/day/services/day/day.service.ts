import { Day } from "../../../../models/day.model";
import { DayRepository } from "../repository/day.repository";
import { ExerciseService } from "../../../exercise/services/exercise/exercise.service";

const dayRepository = new DayRepository();
const exerciseService = new ExerciseService();

export class DayService {

    async createDay(dayDTO) {
        const exercise = exerciseService.createExercise(dayDTO);
        const day = new Day();
        // day.exercise = exercise;
        // const result = exerciseRepository.save(day);
        return {};
    }
}