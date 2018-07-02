import { Query } from './plan.query.resolver';
import { Mutation } from './plan.mutation.resolver';

export const resolvers = {
    Query: {
        ...Query
    },
    Mutation: {
        ...Mutation
    }
}
