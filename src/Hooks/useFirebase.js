import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/FirebaseInit";

initializeAuthentication();
// const GoogleProvider = new GoogleAuthProvider();
// signInWithPopup, GoogleAuthProvider,

const useFirebase = () =>{
   const [user, setUser] = useState({});
   const [error, setError] = useState('');
   const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

//    Ragisterd user with email and password ---------
    const RegisterUserWithEmail = (email, password, name, img, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
            const user = result.user;
            console.log(user)
            setError('');

            const newUser = {email, displayName: name, photoURL: img};
            setUser(newUser);
            
            //set name img to firebase.
            updateProfile(auth.currentUser, {
                displayName: name, photoURL: img
              }).then(() => {  
              }).catch((error) => {
              });  
            history.replace('/')
        })
        .catch((error) => {
            setError(error.message)
        })
        .finally(() => setIsLoading(false))
    }
   
    // signInUsing Email and Password ----------------------
    const loginUser = (email, password, location, history) =>{
        setIsLoading(true)
        const redirect = location?.state?.from || '/'
        history.replace(redirect)

        signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
          const user = result.user;
          console.log(user)
          setError('');
        })
        .catch((error) => {
            setError(error.message)
        })
        .finally(() => setIsLoading(false))

    }


    // GoogleSignIn method --------------------- 
    // const signInWithGoogle =()=>{
    //     setIsLoading(true)
    //     signInWithPopup(auth, GoogleProvider)
    //         .then((result) => {
    //             const user = result.user;
    //             console.log(user)
    //             setError('');
    //         }).catch((error) => {
    //             setError(error.message)
    //         })
    //         .finally(() => setIsLoading(false))

    // }

    useEffect(()=>{
        onAuthStateChanged(auth, user=>{
            if(user){
                setUser(user);
            }
            setIsLoading(false);
        })
    },[auth])

    // logOut method ---------------------
    const logOut = () =>{
        signOut(auth)
        .then(() =>{
            setUser({});
        })
        .finally(()=>setIsLoading(false))
    
    
    }

   return{
       user,
       isLoading,
       error,
       RegisterUserWithEmail,
       loginUser,
    //    signInWithGoogle,
       logOut
   }
}
export default useFirebase;