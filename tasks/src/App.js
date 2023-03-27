import {useState} from 'react';
import './App.css';
import { Login } from './components/Login/login';
import { TodoWrapper } from './components/TodoWrapper';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Logout from './components/Logout/logout';

function App() {
  const [token, setToken] = useState([])

 if (!token) {
  return <Login setToken ={setToken}/>
 } 
 console.log(">>>>> token")
 console.log(token)

 function handleLogout(){
  setToken(null)
 }

  return (
   
    <Router>
       <div className="App">
        <Logout token={token} onLogout={handleLogout}/>
      <main>
        <Routes>
          <Route exact path="/todos" element={<TodoWrapper/>} />
          <Route path="/" exact element={<Login/>}/>
        </Routes>
      </main>

    </div>

    </Router>
   
  
   
  );
}

export default App;
