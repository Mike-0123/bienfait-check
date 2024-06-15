import React from 'react';
import Slider from 'react-slick';

interface ImgCarouselProps {
  images: string[];
}

const ImgCarousel: React.FC<ImgCarouselProps> = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index} style={{ position: 'relative' }}>
          <img
            src={image}
            alt={`Slide ${index}`}
            style={{ width: '100%', height: '400px', objectFit: 'cover' }}
            className='object-scale-down'
          />
        </div>
      ))}
    </Slider>
  );
};

const NextArrow: React.FC<any> = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: 'rgba(0, 0, 0, 0.5)',
        padding: '30px',
        borderRadius: '50%',
        right: '8px',
        zIndex: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
      }}
      onClick={onClick}
    />
  );
};

const PrevArrow: React.FC<any> = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: 'rgba(0, 0, 0, 0.5)',
        padding: '30px',
        borderRadius: '50%',
        left: '8px',
        zIndex: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
      }}
      onClick={onClick}
    />
  );
};

export default ImgCarousel;
