const { gql } = require('apollo-server');
const coffeeType = gql`
  type Coffee {
    name: String
    description: String
    price: Float
  }
  
  type Query {
    coffees: [Coffee]
  }
`;

module.exports = {
    coffeeType
};
