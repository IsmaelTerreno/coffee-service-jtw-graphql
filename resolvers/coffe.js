const {coffeesMock} = require("../mockData");

const coffeeResolvers = {
  Query: {
    coffees: () => coffeesMock,
  },
};

module.exports ={
  coffeeResolvers
};
