import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import img from '../Register/login.svg'

const Register = () => {
  const {createUser} = useContext(AuthContext)
  const handleRegister = event =>{
    event.preventDefault()
    const form = event.target
    const name = form.name.value
    const email = form.email.value
    const password = form.password.value
    console.log(name, email, password);
    createUser(email , password)
    .then(result => {
      const user = result.user
      console.log(user)
    })
    .catch(error => {
      console.error(error)
    })
  }
    return (
        <div>
            <div className="hero my-20 w-full">
  <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lag:flex-row ">
    <div className="text-center lg:text-left">
      <img className='w-3/4' src={img} alt="" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-5 ">
    <h1 className="text-5xl font-bold text-center">SignUp now!</h1>
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="Your Name" className="input input-bordered"/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
          <label className="label">
            <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
          </label>
        </div>
        <div className="form-control mt-6">
            <input type="submit" className="btn btn-primary" value="Sign Up" /> 
        </div>
        <label className="label">
           <p className='text-center mt-5'>Already Have An Account - <Link className='text-orange-600 font-bold' to='/login'>Login</Link> </p>
          </label>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;