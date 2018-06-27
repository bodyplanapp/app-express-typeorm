// Imports
import { makeExecutableSchema } from 'graphql-tools';

const typeDefs = require('./types');
const resolvers = require('./resolvers');

export default makeExecutableSchema({
    typeDefs,
    resolvers
})

