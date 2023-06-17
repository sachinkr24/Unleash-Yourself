//AOI NOTIFICATION MESSAGES

export const API_NOTIFICATION_MESSAGES = {
    loading:{
        title:'loading..',
        message:'Data us being loaded,please wait'
    },

    success:{ 
        title:'success',
        message:'Data successfully loaded'
    },

    responseFailure:{
        title:'error',
        message: 'An error occures while fetching response from the server.Please try again'
    },

    requestFailure:{
        title:'error',
        message: 'An error occures while parsing request data'
    },

    networkError:{
        title:'error',
        message: 'Unable to connect with server,please check your internet connectivity'
    }

}
//api service call
//sample req
//need service call :{url:'/' , method:'pot/get/put/delete' params:true/false, query : true/false}
export const SERVICE_URLS = {
    userSignup:{ url: '/signup',method:'POST'},
    userLogin:{ url: '/login',method:'POST'}
}