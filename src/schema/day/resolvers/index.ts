import { Query } from './day.query.resolver';
import { Mutation } from './day.mutation.resolver';

export const resolvers = {
    Query: {
        ...Query
    },
    Mutation: {
        ...Mutation
    }
}
