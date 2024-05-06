import React from 'react';
import LivePic1 from "../image/Live 1.jpg";
import LivePic2 from "../image/Live 2.jpg";
import LivePic3 from "../image/Live 3.JPG";


class PhotoGallery extends React.Component {
  render() {
    return (
      <div className="photo-gallery-container">
        <img src={LivePic1} alt="LivePic1" className="gallery-image" />
        <img src={LivePic2} alt="LivePic2" className="gallery-image" />
        <img src={LivePic3} alt="LivePic3" className="gallery-image" />
      </div>
    );
  }
}

export default PhotoGallery;
