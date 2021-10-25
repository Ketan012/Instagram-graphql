const { RESTDataSource } = require('apollo-datasource-rest');

require('dotenv').config();

class UserAPI extends RESTDataSource{
    constructor(){
        super();
        this.baseURL = process.env.baseURL || 'http://localhost:8005/';
    }

    async getAllUser(){
        let response = await this.get(`api/v1/user`);
        return response;
    }
}

module.exports = UserAPI;