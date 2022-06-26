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
import { post_House } from 'services/auth';
import { useContextState } from 'context/context';
import { toast } from 'react-toastify';



const PostAHouse = () => {
  const { user } = useContextState();

  const location = useLocation();
  const currTab = location.search.substring(5);
  const [disabled, setDisabled] = useState(true);
  const [buttonLinks, setButtonLinks] = useState(postHouseRegLinks);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
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
    others: [],
    amount: '',
    negotiable: '',
    images: [],
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

  const getButtonText = useMemo(() => {
    if (presentTab.id < 4) {
      return 'Continue';
    } else if (presentTab.id === 4 && !show) {
      return 'Ok, I understand';
    } else {
      return 'Done';
    }
  }, [currTab, show]);
  const gotToNextTab = () => {
    navigate(`/new?tab=${nextTab.tab}`);
    setButtonLinks(
      buttonLinks.map((item) => {
        if (item.tab === nextTab.tab) {
          item.disabled = false;
          item.isActive = true;
        } else item.isActive = false;
        return item;
      })
    );
    setDisabled(true);
  };

  const handleAmenities = (amenities) => {
    setPostHouse({ ...postHouse, others: amenities.map(item => item.value) });
  };

  const handleChange = (e, name) => {
    console.log(name);
    console.log(e.target.value);
    setPostHouse({
      ...postHouse,
      [name]: e.target.value,
    });
  };

  // handle images upload - BEGIN
  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);

    const imagesArray = selectedFilesArray.map((file) => {
      return { file: file, description: '' };
    });
    const updatedHouse = {
      ...postHouse,
      images: postHouse.images.concat(imagesArray),
    };
    setPostHouse(updatedHouse);
  };

  const deleteImage = (id) => {
    const updatedHouse = {
      ...postHouse,
      images: postHouse.images.filter((image, index) => index !== id),
    };
    setPostHouse(updatedHouse);
  };

  const handleSelect = (event, id) => {
    const updatedHouse = {
      ...postHouse,
      images: postHouse.images.map((image, index) => {
        if (index === id) image.description = event.target.value;
        return image;
      }),
    };
    setPostHouse(updatedHouse);
  };

  // handle images upload - END

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await post_House(postHouse, user._id);
      console.log(response);
      navigate('/uploadSuccess')
      toast.success('Apartment added successfully');
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }

    // navigate('/uploadSuccess')
    // alert('API CALL') && navigate('/uploadSuccess')
  };

  console.log(postHouse);
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
                className={[
                  classes.activeSidebar,
                  item.isActive ? classes.active : '',
                ].join(' ')}
                disabled={item.disabled}
              >
                {index + 1}. {item.name}
              </button>
            ))}
          </div>

          <div className={classes.children}>
            <div className={classes.children_container}>
              {currTab === 'address' && (
                <Address
                  details={{
                    street: postHouse.street,
                    city: postHouse.city,
                    state: postHouse.state,
                  }}
                  onchange={handleChange}
                  setDisabled={setDisabled}
                />
              )}
              {currTab === 'desc' && (
                <Description
                  info={{
                    desc: postHouse.desc,
                    furnished: postHouse.furnished,
                  }}
                  onchange={handleChange}
                  setDisabled={setDisabled}
                />
              )}
              {currTab === 'features' && (
                <Features
                  data={{
                    type: postHouse.type,
                    bedrooms: postHouse.bedrooms,
                    bathroom: postHouse.bathroom,
                    toilet: postHouse.toilet,
                    others: postHouse.others,
                  }}
                  onchange={handleChange}
                  handleAmenities={handleAmenities}
                  setDisabled={setDisabled}
                />
              )}
              {currTab === 'price' && (
                <Price
                  price={{
                    amount: postHouse.amount,
                    negotiable: postHouse.negotiable,
                  }}
                  onchange={handleChange}
                  setDisabled={setDisabled}
                />
              )}
              {currTab === 'photo' && !show && (
                <Photo setDisabled={setDisabled} />
              )}
              {currTab === 'photo' && show && (
                <UploadPhoto
                  selectedImages={postHouse.images}
                  handleUpload={onSelectFile}
                  deleteImage={deleteImage}
                  handleSelect={handleSelect}
                />
              )}
              {/* {cutout == "desc" && <Description />}
              {cutout === "photo" && <Price />} */}
            </div>
          </div>
        </div>
      </div>
      <Footer
        disabled={disabled}
        button={getButtonText}
        onClick={
          presentTab.id < 4
            ? gotToNextTab
            : presentTab.id == 4 && show
              ? handleSubmit
              : () => setShow(true)
        }
      />
    </div>
  );
};

export default PostAHouse;
