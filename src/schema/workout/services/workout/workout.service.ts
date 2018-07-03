import { Workout } from "../../../../models/workout.model";
import { DayService } from "../../../day/services/day/day.service";
import { ExerciseService } from "../../../exercise/services/exercise/exercise.service";
import { WorkoutRepository } from "../repository/workout.repository";

const dayService = new DayService();
const exerciseService = new ExerciseService();
const workoutRepository = new WorkoutRepository();

export class WorkoutService {

    createWorkout(workoutsDTO) {
        type Workouts = Array<Workout>
        let workouts: Workouts = [];
        console.log('workoutsDTO', workoutsDTO)
        workoutsDTO.forEach(element => {
            const workout = new Workout();
            workout.name = element.name;
            workout.exercises = [];
            element.exercises.forEach(element => {
                const exercise = exerciseService.createExercise(element);
                workout.exercises = [...workout.exercises, exercise]
            });
            workoutRepository.save(workout);
            workouts.push(workout);
        });
        return workouts;
    }
}