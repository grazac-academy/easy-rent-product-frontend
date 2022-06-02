import classes from "./Header.module.css";
// import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";
import Logo from "../Logo/Logo";
// import Hamburger from "assets/Images/Landing/Hamburger.svg";
// import Hex from "assets/Images/Landing/Hex.svg";
import { useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(true);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className={classes.main}>
      <header className={classes.header}>
        <Logo />
        <Nav toggle={toggle} handleToggle={handleToggle} />
        {toggle ? (
          <button onClick={handleToggle} className={classes.hamburger}>
            {/* <img src={Hamburger} alt="hamburger" /> */}
            <svg
              class=" w-8 h-6 gap-4 text-gray-500 hover:text-violent-500 "
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        ) : (
          <button onClick={handleToggle} className={classes.hamburger}>
              X
          </button>
        )}
      </header>
    </div>
  );
};

export default Header;
