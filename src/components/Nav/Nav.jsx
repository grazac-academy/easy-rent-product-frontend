import classes from './Nav.module.css';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useBookmarkState } from 'context/context';
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from 'react-icons/md';
import Profile from 'assets/profile.svg';
import { useState } from 'react';

const Nav = ({ toggle, handleToggle }) => {
  const { isLoggedIn, setIsLoggedIn } = useBookmarkState();
  const [close, setClose] = useState(false);
  const handleClose = () => {
    setClose(!close);
  };

  const navigate = useNavigate();

  const [click, setclick] = useState(true);
  const handleClick = () => {
    setclick(!click);
  };

  const handleLogout = () => {
    sessionStorage.setItem('userToken', '');
    sessionStorage.clear();
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <div className={toggle ? classes.navDesktop : classes.navMobile}>
      <nav className={classes.nav}>
        <NavLink to="/">Home</NavLink>
        <span className={classes.bt_border}></span>

        <NavLink to="/apartmentlist">Apartments</NavLink>
        <span className={classes.bt_border}></span>

        <NavLink to="/house">Post a House</NavLink>
        <span className={classes.bt_border}></span>

        <NavLink to="/profile" className={classes.logout}>
          Profile
        </NavLink>
        <span className={classes.bt_border}></span>

        <NavLink to="/dashboard" className={classes.logout}>
          Dashboard
        </NavLink>
        <span className={classes.bt_border}></span>

        <NavLink to="/bookmark" className={classes.logout}>
          Bookmark
        </NavLink>
        <span className={classes.bt_border}></span>

        {isLoggedIn && (
          <>
            <NavLink
              to="/about"
              className={classes.logout}
              onClick={handleLogout}
            >
              Logout
            </NavLink>
            <span className={classes.bt_border}></span>
          </>
        )}
      </nav>
      <div className={classes.buttonFlex}>
        {!isLoggedIn && (
          <>
            <Link to="/login">
              <button className={classes.loginBtn}>Login</button>
            </Link>
            <span className={classes.bt_border}></span>
            <Link to="/signup">
              <button className={`${classes.loginBtn} ${classes.loginBtn1}`}>Signup</button>
            </Link>
            <span className={classes.bt_border}></span>
          </>
        )}
        {isLoggedIn && (
          <>
            <div className={classes.user_div}>
              <h3 className={classes.user}>Olayinka Abiodun</h3>

              <div class={classes.profile_toggle}>
                <div className={classes.profile_div}>
                  <img src={Profile} alt="profile pic" />
                </div>
                <div className={classes.toggle_div}>
                  {click ? (
                    <MdOutlineKeyboardArrowDown
                      className={classes.icon}
                      onClick={handleClick}
                    />
                  ) : (
                    <MdOutlineKeyboardArrowUp
                      className={classes.icon}
                      onClick={handleClick}
                    />
                  )}
                </div>
              </div>
            </div>
            <span className={classes.bt_border}></span>
          </>
        )}
      </div>
      {!click ? (
        <nav className={classes.dropdownContainer} onClick={handleClick}>
          <div className={classes.dropdown}>
            <NavLink to="/" className={classes.a}>
              Profile
            </NavLink>
            <span className={classes.bt_border}></span>

            <NavLink to="/apartmentlist">Dashboard</NavLink>
            <span className={classes.bt_border}></span>

            <NavLink to="/house">Bookmark</NavLink>
            <span className={classes.bt_border}></span>

            <button className={classes.loginBtn} onClick={handleLogout}>
              Logout
            </button>
            <span className={classes.bt_border}></span>
          </div>
        </nav>
      ) : null}
    </div>
  );
};

export default Nav;
