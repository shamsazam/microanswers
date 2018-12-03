const bcrypt = require('bcrypt');
const User = require('../models/user');

const saltRounds = 10;

const register = async ({ firstname, lastname, email, password }) => {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newUser = await User.create({ firstname, lastname, email, password: hashedPassword });
    console.log('newUser',newUser);
    return newUser;
}

const login = async (email, passowrd) => {
    const passwordHash = await bcrypt.hash(password, saltRounds);
    const user = await User.findOne({ email, password: passwordHash });
    return user;
}

module.exports = { register, login };