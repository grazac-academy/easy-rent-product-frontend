import Footer from 'components/PostaHouseFooter/footer';
import React from 'react';
import classes from './auth.module.css';
import { useLocation, useNavigate } from 'react-router-dom';
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
import { toast } from 'react-toastify';

const PostAHouse = () => {
  const location = useLocation();
  const currTab = location.search.substring(5);
  const [disabled, setDisabled] = useState(true);
  const [buttonLinks, setButtonLinks] = useState(postHouseRegLinks);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [postHouse, setPostHouse] = useState({
    address: '',
    city: '',
    state: '',
    description: '',
    isItFurnished: '',
    propertyType: '',
    bedroom: '',
    bathroom: '',
    toilet: '',
    amenities: [],
    price: '',
    negotiable: '',
    photos: [],
  });

  useEffect(() => {
    if (!currTab) {
      navigate('/new?tab=address');
    }
  }, [currTab, navigate]);

  const presentTab = useMemo(() => {
    return buttonLinks.find((item) => item.tab === currTab);
  }, [currTab, buttonLinks]);

  const nextTab = useMemo(() => {
    const presentTabIndex = buttonLinks.findIndex(
      (item) => item.tab === currTab
    );
    if (presentTabIndex === 4) {
      return buttonLinks[presentTabIndex];
    }
    return buttonLinks[presentTabIndex + 1];
  }, [currTab, buttonLinks]);

  const getButtonText = useMemo(() => {
    if (presentTab.id < 4) {
      return 'Continue';
    } else if (presentTab.id === 4 && !show) {
      return 'Ok, I understand';
    } else {
      return 'Done';
    }
  }, [show, presentTab]);
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
    setPostHouse({
      ...postHouse,
      amenities: amenities.map((item) => item.value),
    });
  };

  const handleChange = (e, name) => {
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
      photos: postHouse.photos.concat(imagesArray),
    };
    setPostHouse(updatedHouse);
  };

  const deleteImage = (id) => {
    const updatedHouse = {
      ...postHouse,
      photos: postHouse.photos.filter((image, index) => index !== id),
    };
    setPostHouse(updatedHouse);
  };

  const handleSelect = (event, id) => {
    const updatedHouse = {
      ...postHouse,
      photos: postHouse.photos.map((image, index) => {
        if (index === id) image.description = event.target.value;
        return image;
      }),
    };
    setPostHouse(updatedHouse);
  };

  // handle images upload - END

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(postHouse);
    try {
      const formdata = new FormData();
      for (let key in postHouse) {
        formdata.append(key, postHouse[key]);
      }
      const response = await post_House(formdata);
      navigate('/uploadSuccess');
      toast.success('Apartment added successfully');
      console.log(response);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
      // toast.error(error.data.message);
    }

    // navigate('/uploadSuccess')
    // alert('API CALL') && navigate('/uploadSuccess')
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
                    address: postHouse.address,
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
                    description: postHouse.description,
                    isItFurnished: postHouse.isItFurnished,
                  }}
                  onchange={handleChange}
                  setDisabled={setDisabled}
                />
              )}
              {currTab === 'features' && (
                <Features
                  data={{
                    propertyType: postHouse.propertyType,
                    bedroom: postHouse.bedroom,
                    bathroom: postHouse.bathroom,
                    toilet: postHouse.toilet,
                    others: postHouse.amenities,
                  }}
                  onchange={handleChange}
                  handleAmenities={handleAmenities}
                  setDisabled={setDisabled}
                />
              )}
              {currTab === 'price' && (
                <Price
                  price={{
                    price: postHouse.price,
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
                  selectedImages={postHouse.photos}
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
            : presentTab.id === 4 && show
            ? handleSubmit
            : () => setShow(true)
        }
      />
    </div>
  );
};

export default PostAHouse;
