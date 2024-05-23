import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext(null)
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../firebase/firebase.config";
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)

    const createUser= (email,password)=>{
        createUserWithEmailAndPassword(auth,email,password)
        setLoading(true)
    
    }

    const signIn =(email,password)=>{
        signInWithEmailAndPassword(auth,email,password)
        setLoading(true)
    }

    const logOut =()=>{
        signOut(auth)
    }


    useEffect(()=>{
      const unsubscribe=onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser)
        console.log("currentUser", currentUser)
        setLoading(false)

        })
        return ()=>{
            return unsubscribe()
        }
    },[])

    const authInfo = ()=>{
        user,
        loading,
        createUser,
        signIn,
        logOut

    }
    return (
        
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;