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
              <NavLink to="/Address."> 
                <div className={classes.activeSidebar}>
                  <li>1. Address</li>
                </div>
              </NavLink>
              <div className={classes.activeSidebar}>
                <li>2. Description</li>
              </div>
              <div className={classes.activeSidebar}>
                <li>3.Features</li>
              </div>
              <div className={classes.activeSidebar}>
                <li>4. Price</li>
              </div>
              <div className={classes.activeSidebar}>
                <li>5.Photo</li>
              </div>
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
