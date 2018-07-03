import { Query } from './workout.query.resolver';
import { Mutation } from './workout.mutation.resolver';

export const resolvers = {
    Query: {
        ...Query
    },
    Mutation: {
        ...Mutation
    }
}
