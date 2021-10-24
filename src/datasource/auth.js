const {RESTDataSource} =  require('apollo-datasource-rest');
require('dotenv').config();

class AuthAPI extends RESTDataSource{
    constructor(){
        super();
        this.baseURL = process.env.baseURL || 'http://localhost:8005/';
    }

    async signUp(args){
        let user = this.post('api/v1/auth/signup', args);
        return user;
    }
}

module.exports = AuthAPI;