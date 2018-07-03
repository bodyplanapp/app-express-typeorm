import ExerciseType from './exercise.type';
import ExerciseQuery from './exercise.query';
import ExerciseMutation from './exercise.mutation';
import ExerciseInputs from './exercise.input';

export = ExerciseType.concat(ExerciseQuery).concat(ExerciseMutation).concat(ExerciseInputs);