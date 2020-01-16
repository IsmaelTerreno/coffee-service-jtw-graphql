const { gql } = require('apollo-server');
const coffeeType = gql`
  type Coffee {
    name: String
    description: String
    price: Float
  }
  
  extend type Query {
    coffees: [Coffee]
  }
`;

module.exports = {
    coffeeType
};
