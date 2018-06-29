import UserType from './user.type';
import UserQuery from './user.query';
import UserMutation from './user.mutation';
import UserInputs from './user.input';

export = UserType.concat(UserQuery).concat(UserMutation).concat(UserInputs);