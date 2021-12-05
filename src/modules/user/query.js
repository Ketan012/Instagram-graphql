const Query = {
    getAllUser: (root, args, context, info) => {
        try {
            const { id } = args;

            if(!id){
            return {
                    data: null,
                    status: 'error',
                    error: 'Id is required.'
                }
            }
            
            let response = context.dataSources.userAPI.getAllUser(args);
            return response;
        } catch (error) {
            return {
                data: null,
                status: 'error',
                error: error
            }
        }
    },

    getUserData: (root, args, context, info) => {
        try {
            const { id } = args;

            if(!id){
            return {
                    data: null,
                    status: 'error',
                    error: 'Id is required.'
                }
            }

            let response = context.dataSources.userAPI.getUserData(args);
            return response;
        } catch (error) {
            return {
                data: null,
                status: 'error',
                error: error
            }
        }
    },
    getUserProfile: (root, args, context, info) => {
        try{
            const { id } = args;

            if(!id){
            return {
                    data: null,
                    status: 'error',
                    error: 'Id is required.'
                }
            }
            
            let response = context.dataSources.userAPI.getUserProfile(args);
            return response;
        }catch(error){
            return {
                data: null,
                status: 'error',
                error: error
            }
        }
    },

    getUserFollowers: (root, args, context, info) => {
        try {
            const { id } = args;

            if(!id){
                return {
                    data: null,
                    status: 'error',
                    error: 'Id is required.'
                } 
            }

            let response = context.dataSources.userAPI.getFollowers(args);
            return response;

        } catch (error) {
            return {
                data: null,
                status: 'error',
                error: error
            }
        }
    },

    getUserFollowings: (root, args, context, info) => {
        try {
            const { id } = args;

            if(!id){
                return {
                    data: null,
                    status: 'error',
                    error: 'Id is required.'
                } 
            }

            let response = context.dataSources.userAPI.getFollowings(args);
            return response;

        } catch (error) {
            return {
                data: null,
                status: 'error',
                error: error
            }
        }
    },

    searchUser: (root, args, context, info) => {
        try {
            const { userId } = args;

            if(!userId){
                return {
                    data: null,
                    status: 'error',
                    error: 'userId is required.'
                } 
            }

            let response = context.dataSources.userAPI.searchUser(args);
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

module.exports = Query;
