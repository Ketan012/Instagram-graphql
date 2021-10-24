const Mutation = require('./mutation');
const Query = require('./query');

const authResolver = {
    Query,
    Mutation
}

module.exports = authResolver;