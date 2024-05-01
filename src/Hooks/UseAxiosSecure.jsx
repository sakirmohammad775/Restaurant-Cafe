import axios from "axios";
import { useNavigate } from "react-router-dom";
import UseAuth from "./UseAuth";

export const AxiosSecure = axios.create({
    baseURL:'http://localhost:5000'
})
const UseAxiosSecure = () => {
    const navigate =useNavigate()
    const {logOut}= UseAuth()
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
    },async (error)=>{
        const status = error.response.status;
        console.log('status error in the interceptor',status);
        //for 401 or 403 logout the user and move the user to the login
        if(status === 401 || status === 403){
            await logOut();
            navigate('/login')
        }
        return Promise.reject(error)
    })

    return AxiosSecure
};

export default UseAxiosSecure;