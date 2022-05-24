import Footer from "components/PostaHouseFooter/footer";
import React from "react";
import classes from "./auth.module.css";
import {NavLink, Outlet} from 'react-router-dom'
import Address from "pages/PostaHouse/Address/Address";
import Description from "pages/PostaHouse/Description/Description";
import Price from "pages/PostaHouse/Price/Price";
import ProgressBar from 'components/ProgressBar/ProgressBar'

function auth() {
  return (
    <div>
      <div className={classes.main}>
        <div className={classes.upperDiv}><ProgressBar /></div>
        <div className={classes.innerContainer}>
          <div className={classes.sidebar}>
            <ul>
              <NavLink to="Address"> 
                <div className={classes.activeSidebar}>
                  <li>1. Address</li>
                </div>
              </NavLink>
              <NavLink to="Description"> 
                <div className={classes.activeSidebar}>
                  <li>2. Description</li>
                </div>
              </NavLink>
              <NavLink to="Features"> 
                <div className={classes.activeSidebar}>
                  <li>3. Features</li>
                </div>
              </NavLink>
              <NavLink to="Price"> 
                <div className={classes.activeSidebar}>
                  <li>4. Price</li>
                </div>
              </NavLink>
              <NavLink to="Photo"> 
                <div className={classes.activeSidebar}>
                  <li>5. Photo</li>
                </div>
              </NavLink>
            </ul>
            <div className={classes.SidebarBorder}></div>
           
            <div className={classes.children}><Outlet/></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default auth;
