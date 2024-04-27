
import { Link, useNavigate } from 'react-router-dom';
import authImage from '../../assets/others/authentication2.png'
import { useForm } from "react-hook-form"
import { Helmet } from 'react-helmet-async';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import UseAxiosPublic from '../../Hooks/UseAxiosPublic';
import SocialLogin from '../../Components/SectionTitle/SocialLogin/SocialLogin';


const SignUp = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const navigate = useNavigate()
    const axiosPublic=UseAxiosPublic()

    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser);
                updateUserProfile(data.name,data.photoURL)
                const userInfo={
                    name:data.name,
                    email:data.email
                }
                axiosPublic.post('/users',userInfo)
                .then(res=>{
                    if(res.data.insertedId){
                        console.log('user added to the database');
                        reset()
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Successfully created",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate('/')
                    }
                })
                .then(()=>{
                        console.log('user profile info crete');
                        
                })
                .catch(error=>console.log(error))
            })
    }
    return (
        <>
            <Helmet>
                <title>Bistro Boss | SignUp</title>
            </Helmet>
            <h1 className='text-4xl text-center mt-10'>SignUp Now</h1>
            <div className='flex md:flex-row-reverse  max-w-screen-xl mx-auto my-auto min-h-screen '>
                <div className='w-1/2 mt-40'>
                    <img src={authImage} alt="" />
                </div>
                <div className="hero w-1/2 ">
                    <div className="hero-content">
                        <div className="card w-full max-w-md ">
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Name</span>
                                    </label>
                                    <input type="text" name='name' {...register("name", { required: true })} placeholder="Type Here" className="input input-bordered w-96" required />
                                    {errors.name && <span className='text-red-500'>Name is required</span>}


                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Email</span>
                                    </label>
                                    <input type="email" name='email' {...register("email",)} placeholder="Type Here" className="input input-bordered w-96" required />

                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Photo Url</span>
                                    </label>
                                    <input type="text" name='photoURL' {...register("photoURL",)} placeholder="Photo Url" className="input input-bordered w-96" required />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Password</span>
                                    </label>
                                    <input type="password" name='password' {...register("password", {
                                        minLength: 6,
                                        maxLength: 20,
                                        required: true
                                    })}
                                        placeholder="Enter your Password" className="input input-bordered" />

                                    {errors.password?.type === 'required' && <span className='text-red-500'>Password is required</span>}
                                    {errors.password?.type === 'minLength' && <span className='text-red-500'>minimum 6 character needed</span>}
                                    {errors.password?.type === 'maxLength' && <span className='text-red-500'>must me less than 20 character</span>}
                                </div>



                                <div className="form-control mt-6">
                                    <input className="btn btn-warning" type='submit' value='Submit'></input>
                                </div>
                            </form>
                            <Link to='/login'> <p className='text-orange-400'>Already registered ? Go to Login </p></Link>
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;