import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../firebase/firebase.config';


export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({children}) => {
   const [ user, setUser ]= useState(null)
    const [ loading, setLoading ] = useState(true)


    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginWithEmailPAss = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const providerLogin = (provider) =>{
        return signInWithPopup(auth, provider)
     }
    const logOut = () =>{
        localStorage.removeItem('token')
        setLoading(true)
        return signOut(auth)
    }
    const updateUser = (userInfo) =>{
        setLoading(true)
        return updateProfile(auth.currentUser, userInfo )
    }
    useEffect(()=>{
     const unsubscribe =  onAuthStateChanged(auth, currentUser =>{
         setUser(currentUser)
         setLoading(false)
        } )
        return () => {
          return  unsubscribe()
        }
    }, [])
        

    const authInfo = {
        user,
        loading,
        createUser ,
        loginWithEmailPAss,
        logOut,
        updateUser,
        providerLogin
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo} >
                {children}
            </AuthContext.Provider>
        </div>
    );
};
export default AuthProvider;