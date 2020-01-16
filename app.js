const { ApolloServer } = require('apollo-server');
const { typeDefs } = require('./types');
const { coffeeType } = require('./types/coffee');
const { userType } = require('./types/user');
const { coffeeResolvers } = require('./resolvers/coffee');
const { userResolvers } = require('./resolvers/user');
const { handleTokenAuthentication } = require("./auth");

const server = new ApolloServer({
  typeDefs: [typeDefs, coffeeType, userType],
  resolvers: [coffeeResolvers, userResolvers],
  context: handleTokenAuthentication,
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
