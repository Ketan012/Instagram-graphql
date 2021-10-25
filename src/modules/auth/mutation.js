const constants = require('./../../Utils/Constants');
const Mutation = {
  signup: (root, args, context, info) => {
    try {
      let user = context.dataSources.authAPI.signUp(args);
      return user;
    } catch (error) {
      return error;
    }
  },

  sendMail: async (root, args, context, info) => {
    try {
    if(!constants.isValidEmail.test(args.email)){
        return {
            data: null,
            status: 'error',
            error: 'Email is not valid.'
        }
    }
      args.isReset = args.isReset ? 1 : 0;
      let response = context.dataSources.authAPI.sendMail(args);
      return response;
    } catch (error) {
      return error;
    }
  },

  sendSMS: (root, args, context, info) => {
    try {
      if (args.countryCode.length !== 2) {
        return {
            data: null,
            status: "error",
            error: "Country code must be of 2 digit only.",
        };
      }
      if (args.phone.length !== 10) {
        return {
            data: null,
            status: "error",
            error: "Phone number must be of 10 digit only.",
        };
      }
      args.phone = args.countryCode + args.phone;
      let response = context.dataSources.authAPI.sendSMS(args);
      return response;
    } catch (error) {
      return error;
    }
  },

  login: (root, args, context, info) => {
    try {
        let response = context.dataSources.authAPI.login(args);
        return response;
    } catch (error) {
      return {
        data: null,
        status: "error",
        error: error,
      };
    }
  },

  verifyEmail: (root, args, context, info) => {
      try {
          let response = context.dataSources.authAPI.verifyEmail(args);
          return response;
      } catch (error) {
        return {
            data: null,
            status: "error",
            error: error,
          };
      }
  }
};

module.exports = Mutation;
