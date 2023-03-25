import { useEffect, useState } from "react";
import Logo from "../assets/img/foodvilla.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const loggedInUser = () => {
  return true;
};

const Title = () => {
  return (
    <a href="">
      <img className="logo" src={Logo} alt="logo" />
    </a>
  );
};

const Header = () => {
  const [isloggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/about">Contact</Link>
          </li>

          <li>Cart</li>
        </ul>
      </div>
      {isloggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}> LogOut</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
