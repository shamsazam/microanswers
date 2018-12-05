const loggedIn = (args, context, next) => {
    if(!context.user)
        throw new Error('User must be logged in for this');
    return next(args);
}

module.exports = { loggedIn };