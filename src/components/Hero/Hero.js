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
              </div>
              <div className={classes.Background2}>
              </div>
              <div className={classes.Background3}>
              </div>
            </Slider>
            <div className={classes.heroText}>
              <h4 data-aos="fade-down"
                data-aos-duration="3000">Find your perfect home Without an agent.</h4>
              <p data-aos="fade-up"
                data-aos-duration="3000">
                EasyRent is the best solution to finding an apartment in Nigeria without
                any middleman or agents involved. By totally removing the middle man
                from the cycle, the direct implication is a reduced cost in renting your new home. 
              </p>
            </div>
          </div>
          <Search />
        </div>
        <div className={classes.whitepart}></div>
        <Verified />
      </>
    );
  }
}
