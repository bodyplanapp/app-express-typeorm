import DayType from './day.type';
import DayQuery from './day.query';
import DayMutation from './day.mutation';
import DayInputs from './day.input';

export = DayType.concat(DayQuery).concat(DayMutation).concat(DayInputs);