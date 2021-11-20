import { authService, firebaseInstance } from "fbase";
import { useState } from "react";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState("");
  
  const onChange = (event) => {
    const {
      target : {name, value},
    } = event;

    if (name === "email"){
      setEmail(value);
    } else if (name === "password"){
      setPassword(value);
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try{
      let data;
      if (newAccount){
        // create new Account
        data = await authService.createUserWithEmailAndPassword(email, password);
      } else{
        // log in
        data = await authService.signInWithEmailAndPassword(email, password);
      }
      console.log(data);
    } catch (error) {
      setError(error.message);
    }
  };

  // every useState func remember previous state
  // if useState func has call function as parameter, then first arg of callback is previous state
  // so we can make toggle button with below codes.
  const toggleAccount = () => setNewAccount((prev)=>!prev);

  const onSocialClick = async (event) => {
    const {
      target : { name },
    } = event;
    let provider;
    if (name === 'google'){
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    } else if (name === 'github'){
      provider = new firebaseInstance.auth.GithubAuthProvider();
    }

    const data = await authService.signInWithPopup(provider);
    console.log(data);
  };

  return (

    <div>
      <form onSubmit={onSubmit}>
        <input value={email} onChange={onChange} name="email" type="email" placeholder="Email" required />
        <input value={password} onChange={onChange} name="password" type="password" placeholder="Password" required />
        <input type="submit" value={newAccount? "Create Account" : "Log In"} />
        {error}
      </form>
      <span onClick={toggleAccount}>{newAccount? 'Sign In':'Create Account'}</span>
      <div>
        <button onClick={onSocialClick} name="google">Continue with Google</button>
        <button onClick={onSocialClick} name="github">Continue with Github</button>
      </div>
    </div>
  )
};

export default Auth;