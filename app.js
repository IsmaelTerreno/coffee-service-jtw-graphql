const { ApolloServer } = require('apollo-server');
const { coffeeType } = require('./types/coffe');
const { coffeeResolvers } = require('./resolvers/coffe');

const server = new ApolloServer({
  typeDefs: [coffeeType],
  resolvers: [coffeeResolvers]
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
