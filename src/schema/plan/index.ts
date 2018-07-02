import PlanType from './plan.type';
import PlanQuery from './plan.query';
import PlanMutation from './plan.mutation';
import PlanInputs from './plan.input';

export = PlanType.concat(PlanQuery).concat(PlanMutation).concat(PlanInputs);