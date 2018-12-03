const bcrypt = require('bcrypt');
const User = require('../models/user');

const saltRounds = 10;

const register = async ({ firstname, lastname, email, password }) => {
    password = await bcrypt.hash(password, saltRounds);
    const newUser = await User.create({ firstname, lastname, email, password });
    return newUser;
}

const login = async (email, password) => {
    const user = await User.findOne({ email });
    if(!user){
        throw new Error('email not found');
    }
    const match = await bcrypt.compare(password, user.password);
    if(!match){
        throw new Error('password is not correct');
    }
    return user;
}

module.exports = { register, login };