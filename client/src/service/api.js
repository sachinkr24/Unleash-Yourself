import axios from 'axios'; 
import{API_NOTIFICATION_MESSAGES} from '../constants/config.js' ;
import {SERVICE_URLS} from '../constants/config.js' ;
const API_URL = 'http://localhost:8000';

const axiosInstance = axios.create({
    baseURL: API_URL,
    timeout: 10000, // 10 sec
    headers:{
        "Content-Type" : "application/json"
    }
})
//will help in creating common api
axiosInstance.interceptors.request.use(
    function (config){
        return config;
    },
    function(error){
        return Promise.reject(error);
    }
)

axiosInstance.interceptors.response.use(
    function(response){
        //stop global loader here
        return processResponse(response);
    },
    function(error){
        return Promise.reject(processError(error));
    }
)


//if success ->return {isS uccess:true , data : object}
//if fail -> return{isFailure:true , status:string , msg:string , code : int}
const processResponse =(response)=>{
    if(response?.status === 200){
                return{isSuccess: true , data: response.data}
            
    } else{
        return{
            isFailure: true,
            status: response?.status,
            msg: response?.msg,
            code: response?.code
        }
    }
}

//error are of three types
// error ke andar response , request or none
const processError =(error)=>{
    if(error.response){
        //server responded with code other than 200
        console.log('error in response:' ,error.toJSON());
        return{
            isError:true,
            msg: API_NOTIFICATION_MESSAGES.responseFailure,
            code: error.reponse.status
        }

    }

    else if (error.request){
        //no response recieved 
        console.log('error in request:' ,error.toJSON());
        return{
            isError:true,
            msg: API_NOTIFICATION_MESSAGES.requestFailure,
            code:""
        }

    }

    else{
        // some mistake in frontend
        console.log('error in response:' ,error.toJSON());
        return{
            isError:true,
            msg: API_NOTIFICATION_MESSAGES.networkError,
            code: ""
        }

    }


}
// for of loop with objects
const API = {};
for(const [key,value] of Object.entries(SERVICE_URLS)){
    API[key] = (body, showUploadProgress, showDownloadProgress) =>
        axiosInstance({
            method: value.method,
            url: value.url,
            data:body,
            responseType:value.responseType,
            onUploadProgress: function(progressEvent){
                if(showUploadProgress){
                    let percentageCompleted =Math.round((progressEvent.loaded*100)/ProgressEvent.total)
                    showUploadProgress(percentageCompleted);
                }
            },

            onDownloadProgress: function(progressEvent){
                if(showDownloadProgress){
                    let percentageCompleted =Math.round((progressEvent.loaded*100)/ProgressEvent.total)
                    showDownloadProgress(percentageCompleted);
                }
            }


        })
 }

 export {API};