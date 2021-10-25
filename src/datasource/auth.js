const {RESTDataSource} =  require('apollo-datasource-rest');
require('dotenv').config();

class AuthAPI extends RESTDataSource{
    constructor(){
        super();
        this.baseURL = process.env.baseURL || 'http://localhost:8005/';
    }

    async signUp(args){
        let response = this.post(`api/v1/auth/signup`, args);
        return response;
    }

    async sendMail(args){
        let response = this.get(`api/v1/auth/sendmail/email/${args.isReset}/${args.email}`);
        return response;
    }

    async sendSMS(args){
        let response = this.get(`api/v1/auth/verificationcode/phone/${args.phone}`);
        return response;
    }

    async login(args){
        let response = this.post(`api/v1/auth/login`, args);
        return response;
    }

    async verifyEmail(args){
        let response = this.get(`api/v1/auth/verifyemail/${args.email}`);
        return response;
    }
}

module.exports = AuthAPI;