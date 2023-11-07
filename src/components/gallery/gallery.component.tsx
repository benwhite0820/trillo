import './gallery.style.scss';
import HotelPhoto1 from '@assets/images/hotel-1.jpg';
import HotelPhoto2 from '@assets/images/hotel-2.jpg';
import HotelPhoto3 from '@assets/images/hotel-3.jpg';

const Gallery = () => {
  return (
    <div className="gallery">
      <figure className="gallery__item">
        <img
          src={HotelPhoto1}
          alt="Photo of hotel 1"
          className="gallery__photo"
        />
      </figure>
      <figure className="gallery__item">
        <img
          src={HotelPhoto2}
          alt="Photo of hotel 2"
          className="gallery__photo"
        />
      </figure>
      <figure className="gallery__item">
        <img
          src={HotelPhoto3}
          alt="Photo of hotel 3"
          className="gallery__photo"
        />
      </figure>
    </div>
  );
};

export default Gallery;
