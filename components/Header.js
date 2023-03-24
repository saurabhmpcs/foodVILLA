import { useEffect, useState } from "react";
import Logo from "../assets/img/foodvilla.png";

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
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
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
