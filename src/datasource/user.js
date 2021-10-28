const { RESTDataSource } = require('apollo-datasource-rest');
const { request } = require('http');

require('dotenv').config();

class UserAPI extends RESTDataSource{
    constructor(){
        super();
        this.baseURL = process.env.baseURL || 'http://localhost:8005/';
    }

    willSendRequest(request){
        request.headers.set('Authorization', `${this.context.user}`);
    }
    // TODO: add authorization header here 

    async getAllUser(args){
        let response = await this.get(`api/v1/user/users/${args.id}`);
        return response;
    }
}

module.exports = UserAPI;