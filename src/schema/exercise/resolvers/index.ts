import { Query } from './exercise.query.resolver';
import { Mutation } from './exercise.mutation.resolver';

export const resolvers = {
    Query: {
        ...Query
    },
    Mutation: {
        ...Mutation
    }
}
