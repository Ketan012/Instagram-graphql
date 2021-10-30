const Mutation = {
    deleteUserProfile: (root, args, context, _info) => {
        try {
            const { id } = args;

            if(!id){
            return {
                    data: null,
                    status: 'error',
                    error: 'Id is required.'
                }
            }

            let response = context.dataSources.userAPI.deleteUserProfile(args);
            return response;

        } catch (error) {
            return {
                data: null,
                status: 'error',
                error: error
            }
        }
    }
}

module.exports = Mutation;