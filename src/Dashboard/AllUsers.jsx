import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";
import { FaDeleteLeft } from "react-icons/fa6";
import { FaTrash, FaTrashAlt, FaUser, FaUsers } from "react-icons/fa";


const AllUsers = () => {
    const axiosSecure = UseAxiosSecure()
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('users')
            return res.data
        }
    })
    const handleDeleteUser=(user)=>{

    }
    return (
        <div>
            <div className="flex justify-evenly mt-10">
                <h3 className="text-3xl">All Users</h3>
                <h3 className="text-3xl">Total Users:{users.length}</h3>
            </div>
            <div className="overflow-x-auto mt-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="bg-yellow-500">
                            <th>INDEX</th>
                            <th>ITEM NAME</th>
                            <th>EMAIL</th>
                            <th>ROLE</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                <button onClick={() => handleDeleteUser(user)} className="btn btn-warning btn-md text-white" ><FaUsers></FaUsers></button>
                                </td>
                                <td>
                                    <button onClick={() => handleDeleteUser(user)} className="btn btn-ghost btn-xs"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                            </tr>)
                        }
                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default AllUsers;