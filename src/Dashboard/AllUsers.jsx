import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";


const AllUsers = () => {
    const axiosSecure=UseAxiosSecure()
    const {data:users=[]}=useQuery({
    queryKey:['users'],
    queryFn:async()=>{
        const res=await axiosSecure.get('users')
        return res.data
    }
    })
    return (
        <div>
            <div className="">
                <h3 className="text-3xl">All Users</h3>
                <h3 className="text-3xl">Total Users:{users.length}</h3>
            </div>
        </div>
    );
};

export default AllUsers;