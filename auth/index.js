const jwt = require('jsonwebtoken');
const {secretJwt} = require("../config");

const getUser = token => {
  try {
    if (token) { return jwt.verify(token, secretJwt) }
    return null;
  } catch (err) {
    return null;
  }
};

const handleTokenAuthentication = ({ req }) => {
    const tokenBearer = req.headers.authorization || '' ;
    const token = tokenBearer.split(' ')[1];
    const user = getUser(token);
    return {
        user
    };
};

module.exports = {
    handleTokenAuthentication
};
