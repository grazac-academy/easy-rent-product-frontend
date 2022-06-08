import classes from "./Header.module.css";
import { Link } from "react-router-link";
import Nav from "../Nav/Nav";
import HeaderLogo from 'assets/headerLogo.svg';
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
        <Link to="/" className={classes.logoContainer}>
          <div className={classes.image}>
            <img src={HeaderLogo} alt="logo" />
          </div>
        </Link>
        <Nav toggle={toggle} handleToggle={handleToggle} />
        {toggle ? (
          <button onClick={handleToggle} className={classes.hamburger}>
            <FaBars />
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
