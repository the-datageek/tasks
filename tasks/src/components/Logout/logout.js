import React from "react";
import './logout.css'
import {Link} from 'react-router-dom'

function Logout({token, onLogout}) {

    function handleLogout() {
        fetch("/logout", {
          method: "DELETE",
        }).then(() => onLogout());
      }

    return (
        <div>
            {token ? (
                <div>
                    <button className="logout-btn" onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <Link to="/"><button id="login" >Login</button></Link>
            )}
        </div>
    )

}

export default Logout