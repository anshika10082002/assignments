import React from "react";


function Navbar(){
    return (
        <nav className="nav">

        <a href="/" className="home">Books</a>
        <ul>
        <li>
            <a  className="login"  href="/login">Login</a>
        </li>

        <li>
        <a  className="signUp" href="/signUp">SignUp</a>

        </li>
        </ul>
        
    </nav>

    )

}

 export default Navbar;