const Mutation = {
    signup: async (root, args, context, info) =>{
        try {
            let user = context.dataSources.authAPI.signUp(args);
            return user;
        } catch (error) {
            return {
                abc: error
            }
        }
    }
}

module.exports = Mutation;