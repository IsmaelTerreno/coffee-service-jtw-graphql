const jwt = require('jsonwebtoken');
const {secretJwt} = require("../config");
const { AuthenticationError } = require('apollo-server-errors');
const {findUserByName} = require("../mockData");
const {usersMock} = require("../mockData");

const userResolvers = {
  Mutation: {
    register: async (parent, { username, password }, ctx, info) => {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = {
        username,
        password: hashedPassword,
      };
      usersMock.push(user);
      return user
    },
    login: async (parent, { username, password }, ctx, info) => {
      const user = findUserByName(username);
      if (!user) { throw new AuthenticationError('Invalid Login'); }
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) { throw new AuthenticationError('Invalid Login'); }
      const token = jwt.sign( user, secretJwt,
        {
          expiresIn: '30d',
        },
      );
      return {
        token,
        user,
      }
    }
  },

};

module.exports ={
  userResolvers
};
