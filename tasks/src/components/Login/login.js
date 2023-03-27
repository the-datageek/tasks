import './login.css'
import { useState } from 'react';


export function Login() {
  const [isChecked, setIsChecked] = useState(false);

  const handleLoginClick = () => {
    setIsChecked(!isChecked);
  };
  const handleSignUpClick = () => {
    setIsChecked(!isChecked);
  };

 
  
  return (
    <div className="container">
    <div className="main">
      <input 
            type="checkbox" 
            className="checkbox" 
            aria-hidden="true" 
            checked={isChecked} 
        />

      <div className="signup">
        <form action="">
          <label htmlFor="checkbox" aria-hidden="true" onClick={handleSignUpClick}>
            Sign Up
          </label>
          <input 
            type="text" 
            name="text" 
            placeholder="Username" 
            className="login_input"
            />
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            className="login_input"
                />
          <input 
            type="password" 
            name="password" 
            placeholder="Password" 
            className="login_input"
            />

          <button className="btn"  >Sign Up</button>
        
        </form>
      </div>

      <div className="login">
        <form action="">
          <label htmlFor="checkbox" aria-hidden="true" onClick={handleLoginClick}>
            Login
          </label>

          <input 
                type="email" 
                name="email" 
                placeholder="Email" 
                className="login_input"
                
                />
          <input 
                type="password" 
                name="password" 
                placeholder="Password" 
                className="login_input"
            />

          <button className="btn"  >Login</button>
        </form>
      </div>
    </div>     
    </div>
  );
};