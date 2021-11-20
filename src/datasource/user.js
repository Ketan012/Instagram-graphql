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

    async getAllUser(args){
        let response = await this.get(`api/v1/user/users/${args.id}`);
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

    async userFollowing(args){
        let response = await this.post(`api/v1/user/userFollowings/${args.id}`, args);
        return response;
    }

    async userFollower(args){
        let response = await this.post(`api/v1/user/userFollowers/${args.id}`, args);
        return response;
    }

    async getFollowings(args){
        let response = await this.get(`api/v1/user/following/${args.id}/${args.userId}`);
        return response;
    }

    async getFollowers(args){
        let response = await this.get(`api/v1/user/follower/${args.id}/${args.userId}`);
        return response;
    }
}

module.exports = UserAPI;