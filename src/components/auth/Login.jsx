import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthProvider } from "../../context/AuthContext";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";


const Login = () => {

    const { signIn, signInWithGithub, signInWithGoogle } = useContext(AuthProvider)
    const notify = () => toast("Email Or Password does not Match");
    const location = useLocation()
    console.log('location in the login', location)
    const navigate = useNavigate()

    const handleLogin = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        signIn(email, password)
            .then(result => {
                console.log(result.user)
                navigate(location?.state ? location.state : "/")
            })
            .catch(error => {
                console.error(error);
                notify(error.message)
            })

        console.log(email, password)
    }

    const handleGoogle = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error);
            })
        console.log('google click')
    }
    const handleGithub = () => {
        signInWithGithub()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error);
            })
        console.log('github click')
    }
    return (

        <div className="hero bg-base-200 min-h-screen text-center">
            <div className="hero-content flex-col ">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Login now!</h1>

                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                            <ToastContainer />
                        </div>
                    </form>
                    <h2 className="text-xl mb-5">Register With Github Click Here</h2>
                    <div className="flex justify-center gap-5 mb-5">
                        <button onClick={handleGoogle}><FaGoogle></FaGoogle></button>
                        <button onClick={handleGithub}><FaGithub></FaGithub></button>
                    </div>
                    <p>New Here? Please here <Link className="text-green-950 font-bold" to="/register">Register</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Login;