const { gql } = require('apollo-server');
const userType = gql`
    type User {
        username: String!
    }
    type LoginResponse {
        token: String
        user: User
    }
    
    extend type Query {
        currentUser: User!
    }
    
    extend type Mutation {
        register(username: String!, password: String!): User!
        login(username: String!, password: String!): LoginResponse!
    }
`;

module.exports = {
    userType
};
