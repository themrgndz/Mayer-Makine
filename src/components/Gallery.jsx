import React, { useState, useRef } from 'react';
import { Card } from 'react-bootstrap';

const Gallery = () => {
  const images = [
    ...[...Array(20)].map((_, index) => ({ src: `./src/assets/img/galeri/${index + 1}.jpg` })),
  ];

  const videos = [
    { src: './src/assets/img/video/1.mp4' },
    { src: './src/assets/img/video/2.mp4' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    carouselRef.current.startX = touch.clientX;
  };

  const handleTouchMove = (e) => {
    if (!carouselRef.current.startX) return;
    const touch = e.touches[0];
    const diffX = touch.clientX - carouselRef.current.startX;

    if (diffX > 50) {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
      carouselRef.current.startX = null;
    } else if (diffX < -50) {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
      carouselRef.current.startX = null;
    }
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <section id="galeri" className="projects projects-grid projects-grid-layout2 section-custom-bg">
      <div className="row justify-content-md-center">
        <div className="col-12 text-center mb-5">
          <h2 className="text-uppercase">Fotoğraflar</h2>
        </div>
        <div className="col-12 text-center">
          <div
            id="carouselExampleFade"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
            ref={carouselRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            style={{
              maxWidth: '600px',
              margin: '0 auto',
              border: '2px solid #ddd',
              borderRadius: '10px',
              overflow: 'hidden',
              background: '#f8f9fa',
            }}
          >
            <div className="carousel-inner" style={{ height: '400px', display: 'flex', alignItems: 'center' }}>
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                    textAlign: 'center',
                    position: 'relative',
                    transition: 'opacity 1s ease',
                    opacity: index === currentIndex ? 1 : 0, // Active resim görünür
                  }}
                >
                  <img
                    src={image.src}
                    className="d-block"
                    alt={`Galeri Resim ${index + 1}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      margin: '0 auto',
                    }}
                  />
                </div>
              ))}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              onClick={handlePrev}
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              onClick={handleNext}
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>

      <div className="row justify-content-center mt-5">
        <div className="col-12 text-center mb-5">
          <h2 className="text-uppercase">Videolar</h2>
        </div>
        <div className="col-12">
          <div className="row justify-content-center">
            {videos.map((item, index) => (
              <div
                key={index}
                className="col-6 col-sm-6 col-md-4 col-lg-3 mb-3 d-flex justify-content-center"
              >
                <Card
                  style={{ width: '100%', margin: '5px', border: '1px solid #ddd' }}
                >
                  <video
                    controls
                    src={item.src}
                    style={{
                      objectFit: 'cover',
                      width: '100%',
                      height: '200px',
                      borderRadius: '5px',
                      maxWidth: '100%',
                    }}
                  />
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
