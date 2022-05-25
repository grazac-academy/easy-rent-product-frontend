import Footer from 'components/PostaHouseFooter/footer';
import React from 'react';
import classes from './auth.module.css';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import Address from 'pages/PostaHouse/Address/Address';
import Description from 'pages/PostaHouse/Description/Description';
import Price from 'pages/PostaHouse/Price/Price';
import ProgressBar from 'components/ProgressBar/ProgressBar';
import { postHouseRegLinks } from '../../constants';
import Photo from 'pages/PostaHouse/Photo/Photo';
import Features from '../../pages/PostaHouse/Features/Features';
import { useEffect, useMemo } from 'react';

function Auth() {
  const location = useLocation();
  const currTab = location.search.substring(5);
  console.log(currTab === true);
  const navigate = useNavigate();
  useEffect(() => {
    console.log('no currTab');
    if (!currTab) {
      navigate('/new?tab=address');
    }
  }, []);

  const presentTab = useMemo(() => {
    return postHouseRegLinks.find((item) => item.tab === currTab);
  }, [currTab]);

  const nextTab = useMemo(() => {
    const presentTabIndex = postHouseRegLinks.findIndex(
      (item) => item.tab === currTab
    );
    if (presentTabIndex === 4) {
      return postHouseRegLinks[presentTabIndex];
    }
    return postHouseRegLinks[presentTabIndex + 1];
  }, [currTab]);

  return (
    <div>
      <div className={classes.main}>
        <div className={classes.upperDiv}>
          <ProgressBar
            currTab={currTab}
            presentTab={presentTab}
            nextTab={nextTab}
          />
        </div>
        <div className={classes.innerContainer}>
          <div className={classes.sidebar}>
            <ul>
              {postHouseRegLinks.map((item, index) => (
                <NavLink to={`?tab=${item.tab}`}>
                  <div className={classes.activeSidebar}>
                    <li>
                      {index + 1}. {item.name}
                    </li>
                  </div>
                </NavLink>
              ))}
            </ul>
            <div className={classes.SidebarBorder}></div>

            <div className={classes.children}>
              {currTab === 'desc' && <Description />}
              {currTab === 'address' && <Address />}
              {currTab === 'features' && <Features />}
              {currTab === 'photo' && <Photo />}
              {currTab === 'price' && <Price />}
              {/* {cutout == "desc" && <Description />}
              {cutout === "photo" && <Price />} */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Auth;
