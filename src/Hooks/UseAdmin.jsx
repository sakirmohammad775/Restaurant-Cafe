import { useQuery } from "@tanstack/react-query";
import UseAuth from "./UseAuth";
import UseAxiosSecure from "./UseAxiosSecure";


const UseAdmin = () => {
    const axiosSecure=UseAxiosSecure()
    const { user } = UseAuth()
    const { data:isAdmin } = useQuery(
        {
            queryKey: [user?.email, 'isAdmin'],
            queryFn: async()=>{
                const res=await axiosSecure.get(`/users/admin/${user.email}`)
                console.log(res.data);
                return res.data?.admin
            }
        })
        return [isAdmin]

};

export default UseAdmin;