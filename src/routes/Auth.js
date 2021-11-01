import { authService } from "fbase";
import { useState } from "react";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  
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
      console.log(error);
    }
  };

  return (

    <div>
      <form onSubmit={onSubmit}>
        <input value={email} onChange={onChange} name="email" type="email" placeholder="Email" required />
        <input value={password} onChange={onChange} name="password" type="password" placeholder="Password" required />
        <input type="submit" value={newAccount? "Create Account" : "Log In"} />
      </form>
      <div>
        <button>Continue with Google</button>
        <button>Continue with Github</button>
      </div>
    </div>
  )
};

export default Auth;