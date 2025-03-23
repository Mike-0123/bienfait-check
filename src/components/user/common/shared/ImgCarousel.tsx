import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface ImgCarouselProps {
  images: string[];
}

const ImgCarousel: React.FC<ImgCarouselProps> = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    fade: true,
    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
    beforeChange: (current: number, next: number) => {
    }
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="slide-container">
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-full h-96 object-cover"
            />
          </div>
        ))}
      </Slider>
      <style jsx>{`
        .carousel-container {
          width: 100%;
          overflow: hidden;
        }
        .slide-container {
          perspective: 1000px;
          transform-style: preserve-3d;
        }
        :global(.slick-slide) {
          opacity: 0;
          transition: transform 0.8s cubic-bezier(0.7, 0, 0.3, 1), opacity 0.8s ease-in-out;
          transform: scale(0.8) rotateY(30deg);
        }
        :global(.slick-current) {
          opacity: 1;
          transform: scale(1) rotateY(0);
          z-index: 1;
        }
      `}</style>
    </div>
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