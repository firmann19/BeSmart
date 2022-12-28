import { useState } from 'react';
import Slider from 'react-slick';

// import icons
import { BsArrowLeft, BsArrowRight, } from 'react-icons/bs';

// import images
import img1 from '../assets/images/uiux.png';
import img2 from '../assets/images/web.png';
import img3 from '../assets/images/android.png';
import img4 from '../assets/images/uiux.png';

const images = [img1, img2, img3, img4];

function SampleNextArrow({ onClick }) {
    return (
        <div className='arrow arrow-right' onClick={onClick}>
            <BsArrowRight />
        </div>
    );
}

function SamplePrevArrow({ onClick }) {
    return (
        <div className='arrow arrow-left' onClick={onClick}>
            <BsArrowLeft />
        </div>
    );
}
function EmptyArrow({ onClick }) {
    return (
        <div></div>
    );
}

function PortofolioItem() {

    const [slideIndex, setSlideIndex] = useState(0);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        beforeChange: (current, next) => setSlideIndex(next),
        centerMode: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        appendDots: (dots) => (
            <div>
                <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
        ),
        customPaging: (current, next) => (
            <div className={current === slideIndex ? 'dot dot-active' : 'dot'}>
            </div>
        ),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    nextArrow: <EmptyArrow />,
                    prevArrow: <EmptyArrow />,
                }
            }]
    };

    return (
        <div className="container">
            <div className="slider">
                <Slider {...settings}>
                    {
                        images.map((img, index) => (
                            <div className={index === slideIndex ? 'slide slide-active' : 'slide'} key={index}>
                                <img src={img} alt="" />
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    );
}

export default PortofolioItem;