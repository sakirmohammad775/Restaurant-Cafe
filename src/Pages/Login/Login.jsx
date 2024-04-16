import { useContext, useEffect, useState } from 'react';
import authImage from '../../assets/others/authentication2.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha'
import { AuthContext } from '../../Providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2'

const Login = () => {
    const [disabled, setDisabled] = useState(true)
    const { signIn } = useContext(AuthContext)
    const navigate=useNavigate()
    const location=useLocation()

    const from=location.state?.from?.pathname || "/"

    useEffect(() => {
        loadCaptchaEnginge(6)
    }, [])

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Successfully LogIn",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(from,{replace:true})
            })

    }

    const handleValidateCaptcha = (e) => {
        const userCaptchaValue = e.target.value
        if (validateCaptcha(userCaptchaValue)) {
            setDisabled(false)
        }
        else {
            setDisabled(true)
        }
    }

    return (
        <>
            <Helmet>
                <title>Bistro Boss | Login Now</title>
            </Helmet>
            <h1 className='text-4xl text-center mt-10'>Login Now</h1>
            <div className='flex max-w-screen-xl mx-auto my-auto min-h-screen'>
                <div className='w-1/2 mt-40'>
                    <img src={authImage} alt="" />
                </div>
                <div className="hero w-1/2 ">
                    <div className="hero-content">
                        <div className="card w-full max-w-md ">
                            <form onSubmit={handleLogin} className="card-body ">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="Type Here" className="input input-bordered w-96" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="Enter your Password" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <LoadCanvasTemplate></LoadCanvasTemplate>
                                    </label>

                                    <input onBlur={handleValidateCaptcha} type="text" name='captcha' placeholder="Type the captcha above" className="input input-bordered " />

                                    

                                </div>


                                <div className="form-control mt-6">
                                    <input disabled={disabled} className="btn btn-warning" type='submit' value='Submit'></input>
                                </div>

                            </form>
                            <Link to='/signUp'> <p className='text-orange-400'>New here ? Create a New Account</p></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;