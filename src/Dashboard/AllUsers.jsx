import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";

import {FaTrashAlt,  FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";


const AllUsers = () => {
    const axiosSecure = UseAxiosSecure()
    const { data: users = [],refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('users')
            return res.data
        }
    })
    const handleMakeAdmin=user=>{
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res=>{
            console.log(res.data);
            if(res.data.modifiedCount>0){
                refetch()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name} is an Admin Now`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })

    }
    const handleDeleteUser=user=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            
                axiosSecure.delete(`users/${user._id}`)
                .then(res=>{
                    if(res.data.deletedCount>0){
                        refetch()
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                    }})
            }
          });
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
                               {
                                user.role==='admin'?'Admin': <button onClick={() => handleMakeAdmin(user)} className="btn btn-warning btn-md text-white" ><FaUsers></FaUsers></button>
                               }
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