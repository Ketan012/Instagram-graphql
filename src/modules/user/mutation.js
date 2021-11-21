const Mutation = {
    deleteUserProfile: (root, args, context, info) => {
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
    },

    userFollowing: (root, args, context, info) => {
        try {
            const { id } = args;

            if(!id){
                return {
                        data: null,
                        status: 'error',
                        error: 'Id is required.'
                    }
                }

            let response = context.dataSources.userAPI.userFollowing(args);
            return response;
        } catch (error) {
            return {
                data: null,
                status: 'error',
                error: 'something went wrong.'
            }
        }
    },

    userFollower: (root, args, context, info) => {
        try {
            const { id } = args;

            if(!id){
                return {
                        data: null,
                        status: 'error',
                        error: 'Id is required.'
                    }
                }

            let response = context.dataSources.userAPI.userFollower(args);
            return response;
        } catch (error) {
            return {
                data: null,
                status: 'error',
                error: 'something went wrong.'
            }
        }
    },

    manageAccountPrivacy: (root, args, context, info) => {
        try {
            const { id } = args;

            if(!id){
                return {
                        data: null,
                        status: 'error',
                        error: 'Id is required.'
                    }
                }

            let response = context.dataSources.userAPI.manageAccountPrivacy(args);
            return response;
        } catch (error) {
            return {
                data: null,
                status: 'error',
                error: 'something went wrong.'
            }
        }
    }
}

module.exports = Mutation;