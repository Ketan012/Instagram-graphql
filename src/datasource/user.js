const { RESTDataSource } = require('apollo-datasource-rest');
const { request } = require('http');

require('dotenv').config();

class UserAPI extends RESTDataSource{
    constructor(){
        super();
        this.baseURL = process.env.baseURL || 'http://localhost:8005/';
    }

    willSendRequest(request){
        request.headers.set('Authorization', this.context.user)
    }

    async getAllUser(){
        let response = await this.get(`api/v1/user`);
        return response;
    }

    async getUserProfile(args){
        let response = await this.get(`api/v1/user/userprofile/${args.id}`);
        return response;
    }

    async deleteUserProfile(args){
        let response = await this.delete(`api/v1/user/userprofile/${args.id}`);
        return response;
    }
}

module.exports = UserAPI;