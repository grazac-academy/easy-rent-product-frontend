import classes from './Testimonials.module.css';
import ellipse from '../assets/Ellipse1.svg';
import ellipse2 from '../assets/Ellipse2.svg';
import vector from '../assets/Vector.svg';
import React, { Component } from "react";
import Slider from "react-slick";


export default class AutoPlay extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2  ,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",

        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };

    return (
        <div className={classes.main}>
                <div className={classes.upper}>
                    <h2>Testimonials</h2>
                    <p>Our clients have this to say about us</p>
                </div>
                <Slider {...settings} className={classes.inner}>
                <div className={classes.contain}>
                        <div className={classes.card}>
                            <div className={classes.innerCard}>
                                <img src={vector} alt=""/> 
                                <p>Using this platform has been absolute bliss. I've earned extra income by putting my place up each time I go on vacations or travel for work </p>
                            </div>
                            <div className={classes.image}>
                                <img src={ellipse} alt=""/> 
                            </div>
                            <div className={classes.text2}>
                                <h3>Kaitlyn Bowie</h3>
                            </div>
                        </div>
                    </div>

                    <div className={classes.contain}>
                        <div className={classes.card}>
                            <div className={classes.innerCard}>
                                <img src={vector} alt=""/> 
                                <p>Using this platform has been absolute bliss. I've earned extra income by putting my place up each time I go on vacations or travel for work </p>
                            </div>
                            <div className={classes.image}>
                                <img src={ellipse2} alt=""/> 
                            </div>
                            <div className={classes.text2}>
                                <h3>Joseph Davidson</h3>
                            </div>
                        </div>
                    </div>

                    <div className={classes.contain}>
                        <div className={classes.card}>
                            <div className={classes.innerCard}>
                                <img src={vector} alt=""/> 
                                <p>Using this platform has been absolute bliss. I've earned extra income by putting my place up each time I go on vacations or travel for work </p>
                            </div>
                            <div className={classes.image}>
                                <img src={ellipse} alt=""/> 
                            </div>
                            <div className={classes.text2}>
                                <h3>Kaitlyn Bowie</h3>
                            </div>
                        </div>
                    </div>

                    <div className={classes.contain}>
                        <div className={classes.card}>
                            <div className={classes.innerCard}>
                                <img src={vector} alt=""/> 
                                <p>Using this platform has been absolute bliss. I've earned extra income by putting my place up each time I go on vacations or travel for work </p>
                            </div>
                            <div className={classes.image}>
                                <img src={ellipse2} alt=""/> 
                            </div>
                            <div className={classes.text2}>
                                <h3>Joseph Davidson</h3>
                            </div>
                        </div>
                    </div>
             </Slider>
        </div>

            );
}
}