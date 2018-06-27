import { Query } from './user.query.resolver';
import { Mutation } from './user.mutation.resolver';

export const resolvers = {
    Query: {
        ...Query
    },
    Mutation: {
        ...Mutation
    }
}
