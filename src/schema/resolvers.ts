import * as _ from 'lodash';

import { resolvers as user } from './user/resolvers';
import { resolvers as trainer } from './trainer/resolvers';

const resolvers = _.merge(user, trainer);

export = resolvers;