const { SchemaDirectiveVisitor, AuthenticationError } = require('apollo-server-express');

class RequireAuthDirective extends SchemaDirectiveVisitor {
    visitFieldDefinition(field) {
        const { resolve = defaultFieldResolver } = field;
        field.resolve = async (...args) => {
            const [, , ctx] = args;
            if(!ctx.user){
                throw new AuthenticationError('User must be logged in for this resource');
            }
            else {
                const result = await resolve.apply(this, args);
                return result;
            }
        }
    }
}

module.exports = { RequireAuthDirective };