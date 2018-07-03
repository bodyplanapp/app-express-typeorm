import { Query } from './week.query.resolver';
import { Mutation } from './week.mutation.resolver';

export const resolvers = {
    Query: {
        ...Query
    },
    Mutation: {
        ...Mutation
    }
}
