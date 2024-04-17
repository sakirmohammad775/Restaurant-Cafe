import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./UseAxiosSecure";


const UseCarts = () => {
    //tan stack query 
    const axiosSecure=UseAxiosSecure()
    const {data:cart=[]}=useQuery({
        queryKey:['cart'],
        queryFn:async()=>{
            const res=await axiosSecure.get('/carts')
            return res.data // return as a array
        }
    })
    return [cart]
};

export default UseCarts;