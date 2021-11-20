const Query = {
    getAllUser: (root, args, context, info) => {
        try {
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
    }
}

module.exports = Query;
