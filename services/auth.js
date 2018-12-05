const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const config = require('../utils/config');

const saltRounds = 10;

const register = async ({ firstname, lastname, email, password }) => {
    password = await bcrypt.hash(password, saltRounds);
    const newUser = await User.create({ firstname, lastname, email, password });
    const token = createToken(user.id, user.email);
    return { user: newUser, token };
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
    const token = createToken(user.id, user.email);
    return { user, token };
}

const createToken = (id, email) => {
    const token = jwt.sign({ id, email }, config.JWT_SECRET);
    return token;
}

const getUserFromAuthHeader = authHeader => {
    if(authHeader){
        const token = authHeader.replace('Bearer ', '');
        try{
            const user = jwt.verify(token, config.JWT_SECRET);
            return { user };
        }
        catch(e){}
    }
    return {};
}

module.exports = { register, login, getUserFromAuthHeader };