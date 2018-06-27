import UserType from './user.type';
import UserQuery from './user.query';
import UserMutation from './user.mutation';
import NewUser from './inputs/new-user.input';

export = UserType.concat(UserQuery).concat(UserMutation).concat(NewUser);