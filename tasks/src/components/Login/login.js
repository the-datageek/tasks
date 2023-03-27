import './login.css'
import React, { useState } from 'react';
import {Navigate} from 'react-router-dom'

export function Login() {
  const [isChecked, setIsChecked] = useState(false);
  // set state
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

      const handleLoginClick = () => {
        setIsChecked(!isChecked);
      };
      const handleSignUpClick = () => {
        setIsChecked(!isChecked);
      };

      const[loggedIn, setLoggedIn] = useState(false);
      


      // added tokens
      let loginToken = {
        "email": email,
        "password": password
      }

      let registerToken = {
        "name": username,
        "email": email,
        "password": password
      }

      // function to navigate to home page after submission

      function showingonLog(){
        const token = {
          email,
          password
        }
        
      }

      function showingonReg(){
        const token= {
          username,
          email,
          password
        }
      }

      // handle input data
      function handleUser(e) {
        e.preventDefault()
        setUsername(e.target.value)
      }

      function handleEmail(e) {
        e.preventDefault()
        setEmail(e.target.value)
      }

      function handlePassword(e) {
        e.preventDefault()
        setPassword(e.target.value)
      }

      // handling onclick buttons
      function handleLoginBtn(e) {
        e.preventDefault()
        showingonLog()
        handleLogin()
      }

      function handleRegisterBtn(e) {
        e.preventDefault()
        showingonReg()
        handleRegister()
      }


      // handle form submission
      const handleSubmitOfLog = e => {
        e.preventDefault()
        const token = {
            email,
            password
        }
        // setToken(token)
    }

    const handleSubmitOfReg = e => {
        e.preventDefault()
        const token = {
            username,
            email,
            password
        }
        // setToken(token)
    }

    function handleRegister() {
      fetch('https://api.npoint.io/3adf31fa1a7fc2636aee',{
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(registerToken)
      })
  }

  function handleLogin(){
    fetch('https://api.npoint.io/03663f4f07e009dca0d5',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginToken)
        })
        .then(res => res.json())
        .then((data)=>{
        console.log(data)
        })
        setLoggedIn(true)
}
      
      return (
        <div className="container">
          {loggedIn && <Navigate to="/todos"/>}

        <div className="main">
          <input 
                type="checkbox" 
                className="checkbox" 
                aria-hidden="true" 
                checked={isChecked} 
            />

          <div className="signup">
            <form action="" onSubmit={handleSubmitOfReg}>
              <label htmlFor="checkbox" aria-hidden="true" onClick={handleSignUpClick}>
                Sign Up
              </label>
              <input 
                type="text" 
                value={username}
                placeholder="Username" 
                className="login_input"
                required
                onChange={handleUser}
                />
              <input 
                type="email" 
                name="email" 
                value={email}
                placeholder="Email" 
                className="login_input"
                required
                onChange={handleEmail}
                    />
              <input 
                type="password" 
                name="password" 
                placeholder="Password" 
                className="login_input"
                value={password}
                required
                onChange={handlePassword}
                />

              <button className="btn" onClick={handleRegisterBtn} >Sign Up</button>
            
            </form>
          </div>

          <div className="login">
            <form action="" onSubmit={handleSubmitOfLog}>
              <label htmlFor="checkbox" aria-hidden="true" onClick={handleLoginClick}>
                Login
              </label>

              <input 
                    type="text" 
                    name="text" 
                    placeholder="Username" 
                    className="login_input"
                    value={username}
                    required
                    onChange={handleUser}
                    
                    />
              <input 
                    type="password" 
                    name="password" 
                    placeholder="Password" 
                    className="login_input"
                    value={password}
                    required
                    onChange={handlePassword}
                />

              <button className="btn"  onClick={handleLoginBtn}>Login</button>
            </form>
          </div>
        </div>     
        </div>
      );
};