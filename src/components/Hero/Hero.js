// import Background1 from '../../assets/bg1.svg'
// import Background2 from '../../assets/bg2.svg'
// import Background3 from '../../assets/bg3.svg'
import classes from './Hero.module.css';
import React, { Component } from 'react';
import Slider from 'react-slick';
import Search from 'components/Search/search';
import Verified from 'components/Verified/Verified';

export default class Hero extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      fade: true,
      autoplaySpeed: 3000,
      cssEase: 'linear',
    };
    return (
      <>
        <div className={classes.Hero}>
          <div className={classes.innerHero}>
            <Slider {...settings} className={classes.slider}>
              <div className={classes.Background1}>
                {/* <img src={Background1} alt="background1" /> */}
              </div>
              <div className={classes.Background2}>
                {/* <img src={Background2} alt="background2" /> */}
              </div>
              <div className={classes.Background3}>
                {/* <img src={Background3} alt="background3" /> */}
              </div>
            </Slider>
            <div className={classes.heroText}>
              <h4>Find your perfect home Without an agent.</h4>
            </div>
          </div>
          <Search />
        </div>
        <Verified />
      </>
    );
  }
}
