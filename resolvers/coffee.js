const {coffeesMock} = require("../mockData");

const coffeeResolvers = {
  Query: {
    coffees: (parent, args, context) => {
      if (!context.user) return null;
      return coffeesMock;
    },
  },
};

module.exports ={
  coffeeResolvers
};
