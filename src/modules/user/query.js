const Query = {
    getAllUser: (root, args, context, info) => {
        try {
            // if(context.user.status === 'error'){
            //     return context.user;
            // }
            let response = context.dataSources.userAPI.getAllUser(args);
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
