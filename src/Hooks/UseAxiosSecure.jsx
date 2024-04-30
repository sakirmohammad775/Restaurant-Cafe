import axios from "axios";

export const AxiosSecure = axios.create({
    baseURL:'http://localhost:5000'
})
const UseAxiosSecure = () => {
    //request interceptor to add authorization header for every secure call to the api
    AxiosSecure.interceptors.request.use(function(config){
        const token=localStorage.getItem('access-token')
        console.log('request stopped by interceptors',token);
        config.headers.authorization=`Bearer ${token}`
        return config
    },function(error){
        //do something with request error
        return Promise.reject(error)
    })

    //intercepts 401 and 403 status
    AxiosSecure.interceptors.response.use(function(response){
        return response
    },(error)=>{
        const status =error.response.status;
        console.log('status error in the interceptor',status);
        if(status === 401 || status === 403){
            
        }
        return Promise.reject(error)
    })

    return AxiosSecure
};

export default UseAxiosSecure;