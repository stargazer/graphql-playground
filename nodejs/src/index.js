var { buildSchema } = require('graphql');
var express = require('express');
var { graphqlHTTP } = require('express-graphql');
 
// GraphQL schema definition
var schema = buildSchema(`
  type Query {
    quoteOfTheDay: String
    random: Float!
    rollThreeDice: [Int]
  }
`);

// Define resolvers for every Query
var root = {
  quoteOfTheDay: () => {
    return Math.random() < 0.5 ? 'Take it easy' : 'Salvation lies within';
  },
  random: () => {
    return Math.random();
  },
  rollThreeDice: () => {
    return [1, 2, 3].map(_ => 1 + Math.floor(Math.random() * 6));
  },
};

// Run server
var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(3000);
console.log('Running a GraphQL API server at http://localhost:3000/graphql');

/*
 * From outside the container, the API can be access on port 8080.
 *
 * You can access GraphiQL on http://localhost:8080/graphql
 * 
 * Alternatively, the API can be queried directly by:
 * POST http://localhost:8080/graphql
 * {
 *   "query": "{ rollThreeDice }"
 * }
 * 
 */
