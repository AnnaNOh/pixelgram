
import React from 'react';
import { Link } from 'react-router-dom';


const sessionLinks = () => (
  <nav className="login-signup">
    <Link to={`/login`}> Login </Link>

    <Link to={`/signup`}> Sign Up!</Link>
  </nav>
);




const Greeting = () => (
  <div>
    <header>
      <h1>Instagram</h1>
        {sessionLinks()}
    </header>
  </div>
);

export default Greeting;
