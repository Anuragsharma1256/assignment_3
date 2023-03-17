import {useState} from 'react'
export function Component3(){
    const [isLogin, setIsLogin] = useState(true);
import { useState } from "react";
import {LogIn} from '../component/login'
import {SignUp} from '../component/signup'
import '../CSS/component3.css'

    const toggleForm = () => {
      setIsLogin(!isLogin);
    };

    return (
      <div>
        <h1>{isLogin ? "Log In" : "Sign Up"}</h1>
        <form>

          {isLogin ?(<>
              <label htmlFor="firstName">First Name</label>
              <input type="text" name="firstName" required />

              <label htmlFor="lastName">Last Name</label>
              <input type="text" name="lastName" required />
            </>):(<>
              <label htmlFor="firstName">First Name</label>
              <input type="text" name="firstName" required />

              <label htmlFor="lastName">Last Name</label>
              <input type="text" name="lastName" required />
              <label htmlFor="email">Email</label>
          <input type="email" name="email" required />

          <label htmlFor="password">Password</label>
          <input type="password" name="password" required />
            </>)}

          <button type="submit">{isLogin ? "Log In" : "Sign Up"}</button>
        </form>

        <span >
          {isLogin ? "Need an account?" : "Already have an account?"}
        </span><span onClick={toggleForm} style={{cursor:'pointer', textDecoration:'underline'}}>{isLogin?'Sign up' : 'Log in'}</span>
export function Component3() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div>
      <h1>Welcome!</h1>
      <span style={{color:'gray'}}>{isLogin ? "Log in your account" : "Sign Up to create a new account"}</span>
      <form className="formArea">
        <div className="inputArea">
          {isLogin ? (
            <LogIn/>
          ) : (
            <SignUp/>
          )}
        </div>

        <button className="btn2" type="submit">{isLogin ? "Login" : "SignUp"}</button>

      </form>
        <hr style={{width: '80%'}}/>
      <div className="toggleDiv">
      <span>{isLogin ? "Need an account?" : "Already have an account?"}</span>
      <span
        onClick={toggleForm}
        style={{ cursor: "pointer", color: 'blue', fontWeight: 'bold', marginLeft: 5 }}
      >
        {isLogin ? "Sign up" : "Log in"}
      </span>
      </div>
    );
  }
    </div>
  );
}