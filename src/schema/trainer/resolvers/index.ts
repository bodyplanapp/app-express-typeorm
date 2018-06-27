import { Query } from './trainer.query.resolver';
import { Mutation } from './trainer.mutation.resolver';

export const resolvers = {
    Query: {
        ...Query
    },
    Mutation: {
        ...Mutation
    }
}
