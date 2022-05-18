import Footer from "components/PostaHouseFooter/footer";
import React from "react";
import classes from "./auth.module.css";
import {NavLink} from 'react-router-dom'
import Address from "pages/PostaHouse/Address/Address";
function auth() {
  return (
    <div>
      <div className={classes.main}>
        <div className={classes.upperDiv}></div>
        <div className={classes.innerContainer}>
          <div className={classes.sidebar}>
            <ul>
              
 <NavLink to="/Address"> 
                <div className={classes.activeSidebar}>
                  <li>1. Address</li>
                </div>
              </NavLink>
              <NavLink to="/Description"> 
                <div className={classes.activeSidebar}>
                  <li>1. Description</li>
                </div>
              </NavLink>
              <NavLink to="/Features"> 
                <div className={classes.activeSidebar}>
                  <li>1. Features</li>
                </div>
              </NavLink>
              <NavLink to="/Price"> 
                <div className={classes.activeSidebar}>
                  <li>1. Price</li>
                </div>
              </NavLink>
              <NavLink to="/Photo"> 
                <div className={classes.activeSidebar}>
                  <li>1. Photo</li>
                </div>
              </NavLink>
            </ul>
            <div className={classes.SidebarBorder}></div>
            <div className={classes.children}>{}</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default auth;
