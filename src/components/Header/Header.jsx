import classes from "./Header.module.css";
import Nav from "../Nav/Nav";
import Logo from "../Logo/Logo";
import { useState } from "react";
import {FaTimes, FaBars} from 'react-icons/fa'

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
            <FaBars/>
          </button>
        ) : (
          <button onClick={handleToggle} className={classes.hamburger}>
            <FaTimes />
          </button>
        )}
      </header>
    </div>
  );
};

export default Header;
