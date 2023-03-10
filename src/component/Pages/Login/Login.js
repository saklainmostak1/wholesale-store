import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useToken from '../../hooks/useToken';
import img from '../Login/login.svg'

const Login = () => {
  const {loginWithEmailPAss, providerLogin} = useContext(AuthContext)
  const googleProvider = new GoogleAuthProvider()
  const [loginUserEmail, setLoginUserEmail] = useState('')
  const [token] = useToken(loginUserEmail)

  const navigate = useNavigate()
  const location = useLocation()

  const from = location.state?.from?.pathname || '/'
  if(token){
    navigate(from, {replace: true})
    toast.success('Successfully Login!');
  }

  const handleLogin = event =>{
    event.preventDefault()
    const form = event.target
    const name = form.name.value
    const email = form.email.value
    const password = form.password.value
    console.log(name, email, password);
    loginWithEmailPAss(email , password)
    .then(result => {
      const user = result.user
      console.log(user)
      setLoginUserEmail(email)
      toast.success('Successfully Login!');
      

    })
    .catch(error => {
      console.error(error)
    })
  }
  const handleGoogleSignIn = () => {
    return providerLogin(googleProvider)
      .then(result => {
        const user = result.user
        console.log(user);
        toast.success('Successfully Login!');
        navigate(from, { replace: true })
      })
      .catch(error => console.error(error))
  }
    return (
        <div>
            <div className="hero my-20 w-full">
        <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lag:flex-row ">
          <div className="text-center lg:text-left">
            <img className='w-3/4' src={img} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-5 ">
            <h1 className="text-5xl font-bold text-center">Login now!</h1>
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                </label>

              </div>
              <div className="form-control mt-6">
                <input type="submit" className="btn btn-primary" value="login" />
              </div>
              <label className="label">
                <p className='text-center mt-5'>New To Here - <Link className='text-orange-600 font-bold' to='/register'>Sign Up</Link> </p>
              </label>
              
              <button onClick={handleGoogleSignIn} className="btn btn-outline btn-info"><FaGoogle></FaGoogle> google Login</button>
              
            </form>
          </div>
          
        </div>
      </div>
        </div>
    );
};

export default Login;