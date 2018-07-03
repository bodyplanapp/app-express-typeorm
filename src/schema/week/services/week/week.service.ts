import { Week } from "../../../../models/week.model";
import { Workout } from "../../../../models/workout.model";
import { WorkoutService } from "../../../workout/services/workout/workout.service";

const workoutService = new WorkoutService();

export class WeekService {

    async createWeekWorkout(plan) {
        const workouts = new Week();
        // workouts.
        // plan.forEach(element => {
        //     const workout = workoutService.createWorkout(element.workout)
        //     const week = new Week();
        //     week.order = element.order;
        //     week.workout = workout;
        //     // workouts.workout =
        // });
        // workouts.

        return workouts;
    }
}