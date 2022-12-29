import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useToken from '../../hooks/useToken';
import img from '../Register/login.svg'

const Register = () => {
  const {createUser, providerLogin, updateUser} = useContext(AuthContext)
  const [createdUserEmail, setCreatedUserEmail] = useState('')
  const googleProvider = new GoogleAuthProvider()
  const [token] = useToken(createdUserEmail)
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'
  if(token){
    navigate(from, {replace: true})
    toast.success('Successfully Register!');
  }

  const handleRegister = event =>{
    event.preventDefault()
    const form = event.target
    const name = form.name.value
    const email = form.email.value
    const photo = form.photo.value
    const user = form.user.value
    const password = form.password.value
    const users = {name, email, photo, role:user}
    console.log(name, email, photo, password);

    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(users)

    })
    .then(Response => Response.json())
    .then(data => {
      setCreatedUserEmail(email)
      console.log(data)
      if (data.acknowledged) {
        // navigate('/')
        toast.success('Register Sucessfully')
       
    }
    })
    .catch(error => console.error(error))
    form.reset('')
    createUser(email , password)
    .then(result => {
      const user = result.user
     
      console.log(user)
      handleUpdateProfile(name, photo)
    })
    .catch(error => {
      console.error(error)
    })
  }
  const handleUpdateProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL
    }


    updateUser(profile)
      .then(() => { })
      .catch(error => {
        console.error(error)
      })
  }
  const handleGoogleSignIn = () => {
    return providerLogin(googleProvider)
      .then(result => {
        const user = result.user
        console.log(user);
        toast.success('Successfully Register!');
        navigate(from, { replace: true })
      })
      .catch(error => console.error(error))
  }
  
  

  //  const getUserToken = email =>{
  //       fetch(`http://localhost:5000/jwt?email=${email}`)
  //       .then(Response => Response.json())
  //       .then(data => {
  //         if(data.accessToken){
  //           localStorage.setItem('accessToken', data.accessToken)
  //           navigate('/')
  //         }
  //       })
  //  }

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
            <span className="label-text">Photo</span>
          </label>
          <input type="text" name='photo' placeholder="Your Photo" className="input input-bordered"/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
        </div>
        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Type Of User</span>
                            </label>
                            <select name='user' className="select select-bordered w-full max-w-xs">
                                <option>buyers</option>
                            </select>
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
          <button onClick={handleGoogleSignIn} className="btn btn-outline btn-info"><FaGoogle></FaGoogle> google Login</button>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;