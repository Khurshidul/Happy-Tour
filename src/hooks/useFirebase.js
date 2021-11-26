import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setLogin] = useState(false);
    const [name, setName] = useState('');
  
    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
        .then(result => {
            setUser(result.user);
        })
    }
    useEffect(() =>{
        const unSubscribed = onAuthStateChanged(auth, user =>{
            if(user){
                setUser(user);
            }else{
                setUser({});
            }
        })
        return unSubscribed;
    },[]);
    const handleUserName = e => {
        setName(e.target.value);
      }
      const setUserName = () =>{
        updateProfile (auth.currentUser, {displayName: name})
        .then(result => { })
      }
      const toggleLogin = e => {
        setLogin(e.target.checked);
      }
      const handleEmailChange = e => {
        setEmail(e.target.value);
      };
      const handlePassword = e => {
        setPassword(e.target.value);
      };
      const handleSubmitbtn = e => {
        e.preventDefault();
        if (password.length < 6) {
          setError('Password must be at least 6 characters.');
          return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
          setError('Password must contain two upper case.');
        }
        { isLogin ? processLogin(email, password) : createNewUser(email, password) };
    
      };
      const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
          .then(result => {
            const user = result.user;
            console.log(user);
            setError('');
          })
          .catch(error => {
            setError(error.message);
          })
      }
      const createNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
          .then(result => {
            const user = result.user;
            console.log(user);
            setError('');
            verifyEmail();
            setUserName();
          })
          .catch(error => {
            setError(error.message);
          })
      }
      const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
          .then(result => {
    
            console.log(result);
          })
      }
      const handleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
          .then(result => { })
      }
    const logOut = () => {
        signOut(auth)
        .then(result => { })


    }
    return {
        user,
        name,
        signInUsingGoogle,
        handleUserName,
        toggleLogin,
        handleEmailChange,
        handlePassword,
        handleSubmitbtn,
        handleResetPassword,
        processLogin,
        createNewUser,
        setError,
        error,
        isLogin,
        logOut
    }


}
export default useFirebase;