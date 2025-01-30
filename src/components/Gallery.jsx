import React, { useState } from 'react';
import { Card, Modal, Carousel } from 'react-bootstrap';
import '../assets/css/Gallery.css';

const Gallery = () => {
  const images = [...[...Array(20)].map((_, index) => ({ src: `./src/assets/img/galeri/${index + 1}.jpg` }))];
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
    <section id="galeri" className="projects projects-grid projects-grid-layout2 section-custom-bg">
      <div className="row justify-content-md-center">
        <div className="col-12 text-center mb-5">
          <h2 className="text-uppercase">Fotoğraflar</h2>
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
                        alt={`Galeri Resim ${slideIndex * 8 + index + 1}`}
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
          <h2 className="text-uppercase">Videolar</h2>
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
      <Modal show={showModal} onHide={handleCloseModal} centered size="lg">
        <Modal.Body>
          <Carousel activeIndex={modalIndex} onSelect={(selectedIndex) => setModalIndex(selectedIndex)}>
            {images.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  src={image.src}
                  alt={`Galeri Resim ${index + 1}`}
                  style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'contain',
                    maxWidth: '90vw',
                    maxHeight: '90vh',
                  }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Modal.Body>
      </Modal>
      {showModal && (
        <div className="thumbnail-container fixed-bottom bg-light py-2 d-flex justify-content-center">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={`Thumbnail ${index + 1}`}
              className={`thumbnail-img ${index === modalIndex ? 'active' : ''}`}
              onClick={() => setModalIndex(index)}
              style={{
                width: '50px',
                height: '50px',
                margin: '5px',
                cursor: 'pointer',
                objectFit: 'cover',
                borderRadius: '5px',
                border: index === modalIndex ? '2px solid blue' : '1px solid gray',
              }}
            />
          ))}
        </div>
      )}
      <div className="container">
      <Carousel prevLabel="Previous" nextLabel="Next" controls={true}>
        <Carousel.Item>
          <img className="d-block w-100" src="./src/assets/img/makine/1.jpg" alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="./src/assets/img/makine/2.jpg" alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="./src/assets/img/makine/3.jpg" alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="./src/assets/img/makine/4.jpg" alt="Fourth slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="./src/assets/img/makine/5.jpg" alt="Fifth slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="./src/assets/img/makine/6.jpg" alt="Sixth slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="./src/assets/img/makine/7.jpg" alt="Seventh slide" />
        </Carousel.Item>
      </Carousel>
    </div>
    </section>
  );
};

export default Gallery;
