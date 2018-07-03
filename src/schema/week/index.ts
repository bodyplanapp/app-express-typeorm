import WeekType from './week.type';
import WeekQuery from './week.query';
import WeekMutation from './week.mutation';
import WeekInputs from './week.input';

export = WeekType.concat(WeekQuery).concat(WeekMutation).concat(WeekInputs);