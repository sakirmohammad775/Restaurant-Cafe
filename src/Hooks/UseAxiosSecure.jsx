import axios from "axios";

export const AxiosSecure = axios.create({
    baseURL:'http://localhost:5000'
})
const UseAxiosSecure = () => {
    return AxiosSecure
};

export default UseAxiosSecure;