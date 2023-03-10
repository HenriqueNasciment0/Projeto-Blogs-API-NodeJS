const { User } = require('../models');
const sendError = require('../middlewares/sendError');
const { createToken } = require('../middlewares/createToken');

const createT = async ({ email, password }) => {
    if (!email || !password) {
        return sendError(400, 'Some required fields are missing');
    }

    const user = await User.findOne({ where: { email } });

    if (!user || user.password !== password) {
        return sendError(400, 'Invalid fields');
    }

    return createToken(user.id);
  };

module.exports = {
    createT,
};
