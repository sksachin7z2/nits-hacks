import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import Cookies from 'js-cookie'
import {getAuth, GoogleAuthProvider,signInWithPopup,createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyD-DkNN73nonyr9vZ_nq1OoaKEA2ptdAOY",
    authDomain: "nits-hacks-f4d8a.firebaseapp.com",
    projectId: "nits-hacks-f4d8a",
    storageBucket: "nits-hacks-f4d8a.appspot.com",
    messagingSenderId: "1032373087900",
    appId: "1:1032373087900:web:f1b2fee722513923590759",
    measurementId: "G-BC2FN22ZVZ"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export let auth = getAuth(app);
export const provider=new GoogleAuthProvider();

export const signinwithgoogle=()=>{


signInWithPopup(auth,provider).then((result)=>{
  const email=result.user.email;
  const profilepic=result.user.photoURL;
  const token=result.user.uid;
  Cookies.set('token1', token)
  Cookies.set('dp', profilepic)
  Cookies.set('email', email)
  // localStorage.setItem('token1',token);
  // localStorage.setItem('dp',profilepic);
  // localStorage.setItem('email',email);
 
  window.location.reload();
}).catch((error)=>{
  alert(error)
})



}
export const signinwithpassword=(email,password)=>{
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  
}
export const signin=(email,password)=>{
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}