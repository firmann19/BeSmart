import React, { Component } from 'react';
import Slider from 'react-slick';
import Porto1 from '../assets/images/uiux.png'
// import Porto2 from '../assets/images/web.png'
import Porto3 from '../assets/images/android.png'

export default class CenterMode extends Component {
    render() {
        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 3,
            speed: 500
        };
        return (
            <div>
                <Slider {...settings}>
                    <div>
                        <img src={Porto1} alt="" />
                    </div>
                    <div>
                        <img src={Porto3} alt="" />
                    </div>
                    <div>
                        <img src={Porto1} alt="" />
                    </div>
                    <div>
                        <img src={Porto3} alt="" />
                    </div>
                    <div>
                        <img src={Porto1} alt="" />
                    </div>
                    <div>
                        <img src={Porto3} alt="" />
                    </div>
                </Slider>
            </div>
        );
    }
}
