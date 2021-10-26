const Query = {
    getAllUser: (root, agrs, context, info) => {
        try {
            if(context.user.status === 'error'){
                return context.user;
            }
            let response = context.dataSources.userAPI.getAllUser();
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
