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
    },

    updateUserBio: (root, args, context, info) => {
        try {
            const { id } = args;

            if(!id){
                return {
                        data: null,
                        status: 'error',
                        error: 'Id is required.'
                    }
                }

            let response = context.dataSources.userAPI.updateUserBio(args);
            return response;
        } catch (error) {
            return {
                data: null,
                status: 'error',
                error: 'something went wrong.'
            }
        }
    },

    blockUser: (root, args, context, info) => {
        try {
            const { id } = args;

            if(!id){
                return {
                        data: null,
                        status: 'error',
                        error: 'Id is required.'
                    }
                }

            let response = context.dataSources.userAPI.blockUser(args);
            return response;
        } catch (error) {
            return {
                data: null,
                status: 'error',
                error: 'something went wrong.'
            }
        }
    },

    unblockUser: (root, args, context, info) => {
        try {
            const { id } = args;

            if(!id){
                return {
                        data: null,
                        status: 'error',
                        error: 'Id is required.'
                    }
                }

            let response = context.dataSources.userAPI.unblockUser(args);
            return response;
        } catch (error) {
            return {
                data: null,
                status: 'error',
                error: 'something went wrong.'
            }
        }
    },

    unFollowUser: (root, args, context, info) => {
        try {
            const { id } = args;

            if(!id){
                return {
                        data: null,
                        status: 'error',
                        error: 'Id is required.'
                    }
                }

            let response = context.dataSources.userAPI.unFollowUser(args);
            return response;
        } catch (error) {
            return {
                data: null,
                status: 'error',
                error: 'something went wrong.'
            }
        }
    },

    removeFollower: (root, args, context, info) => {
        try {
            const { id, followerId } = args;

            if(!id){
                return {
                        data: null,
                        status: 'error',
                        error: 'Id is required.'
                    }
                }

            if(!followerId){
                return {
                    data: null,
                    status: 'error',
                    error: 'Follower id is required.'
                }
            }

            let response = context.dataSources.userAPI.removeFollower(args);
            return response;
        } catch (error) {
            return {
                data: null,
                status: 'error',
                error: 'something went wrong.'
            }
        }
    },

    updateUserData: (root, args, context, info) => {
        try {
            const { userId } = args;

        if(!userId){
            return {
                data: null,
                status: "error",
                error: "User id is required."
            }
        }

        let response = context.dataSources.userAPI.updateUserdata(args);
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