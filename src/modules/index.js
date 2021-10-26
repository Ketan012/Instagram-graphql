const authAPI = require('../datasource/auth');
const userAPI = require('../datasource/user');

const { fileLoader, mergeTypes} = require('merge-graphql-schemas');
const authResolver = require('./auth');
const userResolver = require('./user');
const path = require('path');
const { merge } = require('lodash');
const jwt = require('jsonwebtoken');

const typesArray = fileLoader(path.join(__dirname, './**/*.graphql'));
const typeDefs = mergeTypes(typesArray, {all : true});

const options = {
    typeDefs,
    resolvers: merge(authResolver, userResolver),
    dataSources: ()=>{
        return{
            authAPI : new authAPI,
            userAPI : new userAPI
        }
    },

    context: ({req})=>{
        const token = req.headers.authorization || '';
        const SECRET = 'SECRET';

        if(token){
            const user = jwt.verify(token.split(' ')[1], SECRET)
            if (user) {
              return {
                user: {
                  data: user,
                  status: "success",
                  error: null,
                },
              };
            } else {
              return {
                user: {
                  data: null,
                  status: "error",
                  error: "token is not valid.",
                },
              };
            }
          }
            else{
            return {
              user: {
                data: null,
                status: "error",
                error: "authorization token is not provided.",
              },
            };
          }
    }
}

module.exports = options;


