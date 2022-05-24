import Footer from 'components/PostaHouseFooter/footer';
import React from 'react';
import classes from './auth.module.css';
import {
  NavLink,
  Outlet,
  useSearchParams,
  useLocation,
} from 'react-router-dom';
import Address from 'pages/PostaHouse/Address/Address';
import Description from 'pages/PostaHouse/Description/Description';
import Price from 'pages/PostaHouse/Price/Price';
import ProgressBar from 'components/ProgressBar/ProgressBar';

const arr = [
  {
    id: 1,
    name: 'Freatures',
    tab: 'features',
  },
  {
    id: 2,
    name: 'Description',
    tab: 'desc',
  },
  {
    id: 3,
    name: 'Photos',
    tab: 'photos',
  },
];

function Auth() {
  const [key, value] = useSearchParams();
  const location = useLocation();
  const cutout = location.search.substring(5);
  console.log(cutout);

  return (
    <div>
      <div className={classes.main}>
        <div className={classes.upperDiv}>
          <ProgressBar cutout={cutout} />
        </div>
        <div className={classes.innerContainer}>
          <div className={classes.sidebar}>
            <ul>
              {/* <NavLink to="?tab=address">
                <div className={classes.activeSidebar}>
                  <li>1. Address</li>
                </div>
              </NavLink>
              <NavLink to="?tab=desc">
                <div className={classes.activeSidebar}>
                  <li>2. Description</li>
                </div>
              </NavLink>
              <NavLink to="?tab=features">
                <div className={classes.activeSidebar}>
                  <li>3. Features</li>
                </div>
              </NavLink>
              <NavLink to="?tab=price">
                <div className={classes.activeSidebar}>
                  <li>4. Price</li>
                </div>
              </NavLink>
              <NavLink to="?tab=photo">
                <div className={classes.activeSidebar}>
                  <li>5. Photo</li>
                </div>
              </NavLink> */}
              {arr.map((item) => (
                <NavLink to={`?tab=${item.tab}`}>
                  <div className={classes.activeSidebar}>
                    <li>
                      {item.id}. {item.name}
                    </li>
                  </div>
                </NavLink>
              ))}
            </ul>
            <div className={classes.SidebarBorder}></div>

            <div className={classes.children}>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Auth;
