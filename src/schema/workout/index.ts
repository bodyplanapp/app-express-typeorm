import WorkoutType from './workout.type';
import WorkoutQuery from './workout.query';
import WorkoutMutation from './workout.mutation';
import WorkoutInputs from './workout.input';

export = WorkoutType.concat(WorkoutQuery).concat(WorkoutMutation).concat(WorkoutInputs);