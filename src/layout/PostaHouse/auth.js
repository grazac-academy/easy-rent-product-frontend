import Footer from 'components/PostaHouseFooter/footer';
import React from 'react';
import classes from './auth.module.css';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import Address from 'pages/PostaHouse/Address/Address';
import Description from 'pages/PostaHouse/Description/Description';
import Price from 'pages/PostaHouse/Price/Price';
import UploadPhoto from 'pages/PostaHouse/uploadPhoto/Upload';
import ProgressBar from 'components/ProgressBar/ProgressBar';
import { postHouseRegLinks } from 'constant';
import Photo from 'pages/PostaHouse/Photo/Photo';
import Features from '../../pages/PostaHouse/Features/Features';
import { useEffect, useMemo, useState } from 'react';

const PostAHouse = () => {
  const location = useLocation();
  const currTab = location.search.substring(5);
  const [disabled, setDisabled] = useState(true);
  const [buttonLinks, setButtonLinks] = useState(postHouseRegLinks);
  const navigate = useNavigate();
  const [postHouse, setPostHouse] = useState({
    street: '',
    city: '',
    state: '',
    desc: '',
    furnished: '',
    type: '',
    bedrooms: '',
    bathroom: '',
    toilet: '',
    amount: '',
    negotiable: '',
  });
  useEffect(() => {
    if (!currTab) {
      navigate('/new?tab=address');
    }
  }, [currTab]);

  const presentTab = useMemo(() => {
    return buttonLinks.find((item) => item.tab === currTab);
  }, [currTab]);

  const nextTab = useMemo(() => {
    const presentTabIndex = buttonLinks.findIndex(
      (item) => item.tab === currTab
    );
    if (presentTabIndex === 4) {
      return buttonLinks[presentTabIndex];
    }
    return buttonLinks[presentTabIndex + 1];
  }, [currTab]);

  console.log(nextTab);

  const gotToNextTab = () => {
    navigate(`/new?tab=${nextTab.tab}`);
    setButtonLinks(
      buttonLinks.map((item) => {
        if (item.tab === nextTab.tab) {
          item.disabled = false;
        }
        return item;
      })
    );
  };

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
            {buttonLinks.map((item, index) => (
              <button
                onClick={() => navigate(`/new?tab=${item.tab}`)}
                className={classes.activeSidebar}
                disabled={item.disabled}
              >
                {index + 1}. {item.name}
              </button>
            ))}
          </div>
          <div className={classes.SidebarBorder}></div>

          <div className={classes.children}>
            {currTab === 'address' && (
              <Address
                details={{
                  street: postHouse.street,
                  city: postHouse.city,
                  state: postHouse.state,
                }}
              />
            )}
            {currTab === 'desc' && <Description updateDisable={setDisabled} />}
            {currTab === 'features' && <Features updateDisable={setDisabled} />}
            {currTab === 'price' && <Price updateDisable={setDisabled} />}
            {currTab === 'photo' && <Photo />}
            {currTab === 'uploadPhoto' && <UploadPhoto />}
            {/* {cutout == "desc" && <Description />}
              {cutout === "photo" && <Price />} */}
          </div>
        </div>
      </div>
      <Footer
        disabled={disabled}
        button={currTab === 'photo' ? 'Ok, I understand' : 'continue'}
        onClick={gotToNextTab}
      />
    </div>
  );
};

export default PostAHouse;
