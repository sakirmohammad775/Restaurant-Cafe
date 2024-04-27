import { FaGoogle } from "react-icons/fa";
import UseAuth from "../../../Hooks/UseAuth";
import UseAxiosPublic from "../../../Hooks/UseAxiosPublic";

const SocialLogin = () => {
    const {googleSignIn}= UseAuth()
    const axiosPublic=UseAxiosPublic()
    const handleGoogleSignIn=()=>{
        googleSignIn()
        .then( result=>{
            console.log(result.user);
            const userInfo={
                email:result.user?.email,
                name:result.user?.displayName
            }
            axiosPublic.post('/users',userInfo)
            .then(res=>{
                console.log(res.);
            })
        })

    }
    return (
        <div className="p-8">
            <div className="divider"></div>
            <div>
                <button onClick={handleGoogleSignIn} className="btn">
                    <FaGoogle></FaGoogle>Google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;