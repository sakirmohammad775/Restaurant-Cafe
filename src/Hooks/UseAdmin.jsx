import { useQuery } from "@tanstack/react-query";
import UseAuth from "./UseAuth";


const UseAdmin = () => {
    const { user } = UseAuth()
    const { data } = useQuery(
        {
            queryKey: [user?.email, 'isAdmin'],
            queryFn: async
        }
    )

};

export default UseAdmin;