import React, { useState, useEffect } from 'react'; 
import { Card, Modal, Carousel, Button } from 'react-bootstrap';
import './gallery.css';

const Gallery = () => {
  const images = [...[...Array(20)].map((_, index) => ({ src: `/assets/img/galeri/${index + 1}.jpeg` }))];
  const videos = [
    { src: '/assets/img/video/1.mp4' },
    { src: '/assets/img/video/2.mp4' },
    { src: '/assets/img/video/3.mp4' },
    { src: '/assets/img/video/4.mp4' },
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

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!showModal) return;

      if (e.key === 'ArrowRight') {
        setModalIndex((prev) => (prev + 1) % images.length);
      } else if (e.key === 'ArrowLeft') {
        setModalIndex((prev) => (prev - 1 + images.length) % images.length);
      } else if (e.key === 'Escape') {
        handleCloseModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showModal]);

  return (
    <section className="projects projects-grid projects-grid-layout2 section-custom-bg">
      <div className="container">
        <h2 className='text-uppercase text-center'>- Our Machine Fleet -</h2>
        <Carousel prevLabel="Previous" nextLabel="Next" controls={true}>
          {[...Array(7)].map((_, i) => (
            <Carousel.Item key={i}>
              <img className="d-block w-100" src={`/assets/img/makine/${i + 1}.png`} alt={`Slide ${i + 1}`} />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <div id="catalog" className="container mb-4 d-flex justify-content-center">
        <Card className="text-center shadow-lg p-4 mb-5 bg-white rounded" style={{ maxWidth: '500px', border: '2px solid #121c45' }}>
          <Card.Body>
            <h3 className="mb-3" style={{ color: '#121c45' }}>Catalog</h3>
            <p className="text-muted" style={{ fontSize: '1.1rem', color: '#121c45' }}>
              You can view our catalog to explore our products and services.
            </p>
            <Button 
              href="/assets/Certificate/Katolog.pdf" 
              target="_blank" 
              className="px-4 w-100 text-nowrap text-center" 
              style={{ 
                backgroundColor: '#121c45', 
                borderColor: '#121c45', 
                fontSize: '1rem',
                whiteSpace: 'nowrap'
              }}
            >
              View
            </Button>
          </Card.Body>
        </Card>
      </div>


      <div id="gallery" className="row justify-content-md-center">
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
                      style={{ width: '150px', cursor: 'pointer', borderRadius: '10px', overflow: 'hidden' }}
                      onClick={() => handleImageClick(slideIndex * 8 + index)}
                    >
                      <img src={image.src} className="d-block w-100" alt={`Gallery Image ${slideIndex * 8 + index + 1}`} style={{ height: '150px', objectFit: 'cover' }} />
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
              <div key={index} className="col-6 col-sm-6 col-md-4 col-lg-3 mb-3 d-flex justify-content-center">
                <Card style={{ width: '100%', margin: '5px', border: '1px solid #ddd' }}>
                  <video controls src={item.src} style={{ objectFit: 'cover', width: '100%', height: '200px', borderRadius: '5px', maxWidth: '100%' }} />
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Modal show={showModal} onHide={handleCloseModal} centered size="lg">
        <Modal.Header closeButton />
        <Modal.Body>
          <Carousel activeIndex={modalIndex} onSelect={(selectedIndex) => setModalIndex(selectedIndex)}>
            {images.map((image, index) => (
              <Carousel.Item key={index}>
                <img src={image.src} alt={`Gallery Image ${index + 1}`} style={{ width: '100%', height: 'auto', objectFit: 'contain', maxWidth: '90vw', maxHeight: '90vh' }} />
              </Carousel.Item>
            ))}
          </Carousel>
        </Modal.Body>
      </Modal>
    </section>
  );
};

export default Gallery;
