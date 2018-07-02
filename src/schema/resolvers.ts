import * as _ from 'lodash';

import { resolvers as user } from './user/resolvers';
import { resolvers as trainer } from './trainer/resolvers';
import { resolvers as plan } from './plan/resolvers';

const resolvers = _.merge(user, trainer, plan);

export = resolvers;