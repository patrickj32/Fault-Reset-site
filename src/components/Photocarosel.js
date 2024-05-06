
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LivePic1 from "../image/Live 1.jpg";
import LivePic2 from "../image/Live 2.jpg";
// import LivePic3 from "../image/Live 3.JPG";

class PhotoCarousel extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    };

    return (
      <div className="carousel-container">
        <Slider {...settings}>
          <div>
            <img
              src={LivePic1}
              alt="LivePic1"
              style={{ width: "50%", height: "100%" }}
            />
          </div>
          <div>
            <img
              src={LivePic2}
              alt="LivePic2"
              style={{ width: "50%", height: "25%" }}
            />
          </div>

          {/* <div>
            <img src={LivePic3} alt="LivePic3" />
          </div> */}
        </Slider>
      </div>
    );
  }
}

export default PhotoCarousel;
