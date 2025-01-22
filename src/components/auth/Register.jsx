import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthProvider } from "../../context/AuthContext";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";


const Register = () => {
    const { createUser, signInWithGithub, signInWithGoogle } = useContext(AuthProvider)
    const [registerError, setRegisterError] = useState('')
    const [show, setShow] = useState(false)

    const [success, setSuccess] = useState('')

    const notify = () => toast("Created account succesfully");
    const handleRegister = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        setRegisterError('')
        setSuccess('')

        if (password.length < 6) {
            setRegisterError("please provide at least 6 caracter")
            return
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError("please provide at least 1 uppercash")
            return;
        }
        else if (!/[a-z]/.test(password)) {
            setRegisterError("please provide at least 1 lowercash")
            return;
        }
        createUser(email, photo, name, password)
            .then(result => {
                console.log(result.user)
                notify()

            })
            .catch(error => {
                console.error(error);
                setRegisterError(error.message)
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
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Register Here!</h1>

                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl text-center">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="text" placeholder="photo url" name="photo" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={show ? "text" : "password"} placeholder="password" name="password" className="input input-bordered" required />
                            <button onClick={() => setShow(!show)}>
                                {
                                    show ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                }
                            </button>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                            <ToastContainer></ToastContainer>
                        </div>
                    </form>
                    <div>
                        {
                            registerError && <p>{registerError}</p>
                        }
                        {
                            success && <p>{success}</p>
                        }
                    </div>
                    <h2 className="text-xl mb-5">Register With Github Click Here</h2>
                    <div className="flex justify-center gap-5 mb-5">
                        <button onClick={handleGoogle}><FaGoogle></FaGoogle></button>
                        <button onClick={handleGithub}><FaGithub></FaGithub></button>
                    </div>
                    <p>Already Have Account ? Here <Link className="font-bold text-orange-800" to="/login">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;