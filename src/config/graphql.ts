// Imports
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import * as bodyParser from 'body-parser'
import * as auth from '../auth/auth.service';
// App Imports
// import { config } from './environment'
import schema from '../schema'

// Setup GraphQL
export default function (server) {
  console.info('SETUP - GraphQL...')

  // The GraphQL endpoint
  //auth.isAuthenticated(), 
  server.use('/graphql', bodyParser.json(), graphqlExpress(req => ({
    schema
  })));

  // GraphiQL, a visual editor for queries
  server.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

  // API (GraphQL on route `/api`)
  // server.use(config.graphqlEndpoint, graphqlExpress({
  //   schema,
  //   graphiql: config.graphql.ide,
  //   pretty: config.graphql.pretty
  // }))

}