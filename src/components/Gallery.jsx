import React, { useState } from 'react';
import { Card, Modal } from 'react-bootstrap';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Gallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  // 20 görsel ve 3 video
  const mediaItems = [
    ...[...Array(20)].map((_, index) => ({ type: 'image', src: `./src/assets/img/galeri/${index + 1}.jpg` })),
    { type: 'video', src: 'https://www.youtube.com/embed/5d0X7mvttUw' },
    { type: 'video', src: 'https://www.youtube.com/embed/ftubz9HSTlw' },
    { type: 'video', src: 'https://www.youtube.com/embed/eCVLtowSwG4' }
  ];

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const handleArrowClick = (direction) => {
    setSelectedImageIndex((prevIndex) => {
      if (direction === 'next') {
        return (prevIndex + 1) % mediaItems.length;
      } else if (direction === 'prev') {
        return (prevIndex - 1 + mediaItems.length) % mediaItems.length;
      }
      return prevIndex;
    });
  };

  return (
    <section id="galeri" className="projects projects-grid projects-grid-layout2 section-custom-bg">
      <div className="row justify-content-md-center">
        <div className="col-12 text-center mb-5">
          <h2 className="text-uppercase">Galeri</h2>
        </div>
        <div className="col-12">
          <div className="row justify-content-center">
            {mediaItems.map((item, index) => (
              <div key={index} className="col-3 col-sm-6 col-md-3 col-lg-3 mb-3 d-flex justify-content-center">
                <Card style={{ width: '30rem', margin: '5px' }}>
                  {item.type === 'image' ? (
                    <img
                      className="card-img-top"
                      src={item.src}
                      alt={`Galeri ${index + 1}`}
                      onClick={() => handleImageClick(index)}
                    />
                  ) : (
                    <div style={{ position: 'relative', width: '100%', height: '0', paddingTop: '56.25%' }}>
                      <iframe
                        width="100%"
                        height="100%"
                        src={item.src}
                        frameBorder="0"
                        allowFullScreen
                        title={`Video ${index + 1}`}
                        style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}
                      />
                    </div>
                  )}
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
      {selectedImageIndex !== null && (
        <Modal
          show={selectedImageIndex !== null}
          onHide={() => setSelectedImageIndex(null)}
          size="lg"
          centered
          aria-labelledby="contained-modal-title-vcenter"
        >
          <Modal.Body className="d-flex justify-content-center align-items-center position-relative">
            <button
              onClick={() => handleArrowClick('prev')}
              className="btn btn-link position-absolute"
              style={{ left: '10px', zIndex: 10, fontSize: '2rem', color: 'black' }}
            >
              <FaChevronLeft />
            </button>

            {mediaItems[selectedImageIndex].type === 'image' ? (
              <img
                src={mediaItems[selectedImageIndex].src}
                alt={`Seçili Görsel ${selectedImageIndex + 1}`}
                className="img-fluid"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            ) : (
              <div style={{ position: 'relative', width: '100%', height: '0', paddingTop: '56.25%' }}>
                <iframe
                  width="100%"
                  height="100%"
                  src={mediaItems[selectedImageIndex].src}
                  frameBorder="0"
                  allowFullScreen
                  title={`Video ${selectedImageIndex + 1}`}
                  style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}
                />
              </div>
            )}

            <button
              onClick={() => handleArrowClick('next')}
              className="btn btn-link position-absolute"
              style={{ right: '10px', zIndex: 10, fontSize: '2rem', color: 'black' }}
            >
              <FaChevronRight />
            </button>
          </Modal.Body>
        </Modal>
      )}
    </section>
  );
};

export default Gallery;
