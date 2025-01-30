import React, { useState } from 'react';
import { Card, Modal, Carousel, Button } from 'react-bootstrap';
import '../assets/css/Gallery.css';

const Gallery = () => {
  const images = [...[...Array(20)].map((_, index) => ({ src: `./src/assets/img/galeri/${index + 1}.jpeg` }))];
  const videos = [
    { src: './src/assets/img/video/1.mp4' },
    { src: './src/assets/img/video/2.mp4' },
  ];

  const [showModal, setShowModal] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  const handleImageClick = (index) => {
    setModalIndex(index);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <section className="projects projects-grid projects-grid-layout2 section-custom-bg">
      <div className="container">
        <Carousel prevLabel="Previous" nextLabel="Next" controls={true}>
          <Carousel.Item>
            <img className="d-block w-100" src="./src/assets/img/makine/1.png" alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="./src/assets/img/makine/2.png" alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="./src/assets/img/makine/3.png" alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="./src/assets/img/makine/4.png" alt="Fourth slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="./src/assets/img/makine/5.png" alt="Fifth slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="./src/assets/img/makine/6.png" alt="Sixth slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="./src/assets/img/makine/7.png" alt="Seventh slide" />
          </Carousel.Item>
        </Carousel>
      </div>

      <div id='Katalog' className="container mb-4 d-flex justify-content-center">
        <Card className="text-center shadow-lg p-4 mb-5 bg-white rounded" style={{ maxWidth: '500px', border: '2px solid #007bff' }}>
          <Card.Body>
            <h3 className="mb-3 text-primary">📘 Catalog</h3>
            <p className="text-muted" style={{ fontSize: '1.1rem' }}>
              You can view our catalog to explore our products and services.
            </p>
            <Button
              variant="primary"
              href="./src/assets/certificate/Katolog.pdf"
              target="_blank"
              className="px-4"
              style={{
                fontSize: '1rem',
                fontWeight: 'bold',
                borderRadius: '8px',
                transition: '0.3s',
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = '#0056b3')}
              onMouseLeave={(e) => (e.target.style.backgroundColor = '#007bff')}
            >
              View
            </Button>
          </Card.Body>
        </Card>
      </div>

      <div id="galeri" className="row justify-content-md-center">
        <div className="col-12 text-center mb-5">
          <h2 className="text-uppercase">Photos</h2>
        </div>
        <div className="col-12 text-center py-4">
          <Carousel interval={null} indicators={false} className="gallery-slider">
            {Array.from({ length: Math.ceil(images.length / 8) }, (_, slideIndex) => (
              <Carousel.Item key={slideIndex}>
                <div className="d-flex justify-content-center flex-wrap">
                  {images.slice(slideIndex * 8, slideIndex * 8 + 8).map((image, index) => (
                    <Card
                      key={index}
                      className="gallery-card mx-2"
                      style={{
                        width: '150px',
                        cursor: 'pointer',
                        borderRadius: '10px',
                        overflow: 'hidden',
                      }}
                      onClick={() => handleImageClick(slideIndex * 8 + index)}
                    >
                      <img
                        src={image.src}
                        className="d-block w-100"
                        alt={`Gallery Image ${slideIndex * 8 + index + 1}`}
                        style={{
                          height: '150px',
                          objectFit: 'cover',
                        }}
                      />
                    </Card>
                  ))}
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>

      <div className="row justify-content-md-center">
        <div className="col-12 text-center mb-5">
          <h2 className="text-uppercase">Videos</h2>
        </div>
        <div className="col-12">
          <div className="row justify-content-center">
            {videos.map((item, index) => (
              <div
                key={index}
                className="col-6 col-sm-6 col-md-4 col-lg-3 mb-3 d-flex justify-content-center"
              >
                <Card style={{ width: '100%', margin: '5px', border: '1px solid #ddd' }}>
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
