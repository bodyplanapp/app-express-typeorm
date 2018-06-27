import TrainerType from './trainer.type';
import TrainerQuery from './trainer.query';
import TrainerMutation from './trainer.mutation';
import NewTrainer from './inputs/new-trainer.input';

export = TrainerType.concat(TrainerQuery).concat(TrainerMutation).concat(NewTrainer);