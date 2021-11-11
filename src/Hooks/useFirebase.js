import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/FirebaseInit";

initializeAuthentication();
// const googleProvider = new GoogleAuthProvider();
// signInWithPopup, GoogleAuthProvider, 

const useFirebase = () =>{
   const [user, setUser] = useState({});
   const [error, setError] = useState('');
   const [isLoading, setIsLoading] = useState(true);
   const [admin, setAdmin] = useState(false);

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
            //add to database-----
            addUser(email, name, img);
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
    //  const signInWithGoogle =(location, history)=>{
    //      setIsLoading(true)
    //      const redirect = location?.state?.from || '/'
    //      history.push(redirect)
    //      signInWithPopup(auth, googleProvider)
    //          .then((result) => {
    //              const user = result.user;
    //              addGoogle(user.email, user.displayName, user.photoURL);
    //              setError('');
    //          }).catch((error) => {
    //              setError(error.message)
    //          })
    //          .finally(() => setIsLoading(false))

    //  }

    useEffect(()=>{
        onAuthStateChanged(auth, user=>{
            if(user){
                setUser(user);
            }
            setIsLoading(false);
        })
    },[auth])

    useEffect(()=>{
        fetch(`http://localhost:5000/users/${user.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data.admin))
    }, [user.email])

    // logOut method ---------------------
    const logOut = () =>{
        signOut(auth)
        .then(() =>{
            setUser({});
        })
        .finally(()=>setIsLoading(false))
    
    
    }

  
    const addUser = (email, displayName, photoURL) =>{
        const user = {email, displayName, photoURL};
         fetch('http://localhost:5000/users',{
             method: 'POST',
             headers: {
                 'content-type' : 'application/json'
             },
             body: JSON.stringify(user)
         })
         .then()
    }

    // const addGoogle = (email, displayName, photoURL) =>{
    //     const user = {email, displayName, photoURL};
    //      fetch('http://localhost:5000/users',{
    //          method: 'PUT',
    //          headers: {
    //              'content-type' : 'application/json'
    //          },
    //          body: JSON.stringify(user)
    //      })
    //      .then()
    // }

   return{
       user,
       admin,
       isLoading,
       error,
       RegisterUserWithEmail,
       loginUser,
    //    signInWithGoogle,
       logOut
   }
}
export default useFirebase;