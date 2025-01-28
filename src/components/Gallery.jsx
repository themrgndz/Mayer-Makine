import React, { useState } from 'react';
import { Card, Modal, Button } from 'react-bootstrap';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Gallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;

  const mediaItems = [
    ...[...Array(20)].map((_, index) => ({ type: 'image', src: `./src/assets/img/galeri/${index + 1}.jpg` })),
    { type: 'video', src: './src/assets/img/video/1.mp4' },
    { type: 'video', src: './src/assets/img/video/2.mp4' }
  ];

  const totalPages = Math.ceil(mediaItems.length / itemsPerPage);

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

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const paginatedItems = mediaItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section id="galeri" className="projects projects-grid projects-grid-layout2 section-custom-bg">
      <div className="row justify-content-md-center">
        <div className="col-12 text-center mb-5">
          <h2 className="text-uppercase">Galeri</h2>
        </div>
        <div className="col-12">
          <div className="row justify-content-center">
            {paginatedItems.map((item, index) => (
              <div key={index} className="col-6 col-sm-6 col-md-4 col-lg-3 mb-3 d-flex justify-content-center">
                <Card style={{ width: '100%', margin: '5px', border: '1px solid #ddd' }}>
                  {item.type === 'image' ? (
                    <img
                      className="card-img-top"
                      src={item.src}
                      alt={`Galeri ${index + 1}`}
                      onClick={() => handleImageClick((currentPage - 1) * itemsPerPage + index)}
                      style={{ objectFit: 'cover', width: '100%', height: '200px', borderRadius: '5px', maxWidth: '100%' }}
                    />
                  ) : (
                    <div style={{ position: 'relative', width: '100%', height: '0', paddingTop: '56.25%' }}>
                      <video
                        width="100%"
                        height="100%"
                        src={item.src}
                        controls
                        title={`Video ${index + 1}`}
                        style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', borderRadius: '5px' }}
                      />
                    </div>
                  )}
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="row justify-content-center mt-4">
  <div className="col-auto">
    <Button
      variant="primary"
      disabled={currentPage === 1}
      onClick={() => handlePageChange(currentPage - 1)}
      className="pagination-button"
      onMouseEnter={(e) => e.target.style.backgroundColor = '#0056b3'}
      onMouseLeave={(e) => e.target.style.backgroundColor = '#007bff'}
    >
      Önceki
    </Button>
  </div>
  <div className="col-auto">
    <span>Sayfa {currentPage} / {totalPages}</span>
  </div>
  <div className="col-auto">
    <Button
      variant="primary"
      disabled={currentPage === totalPages}
      onClick={() => handlePageChange(currentPage + 1)}
      className="pagination-button"
      onMouseEnter={(e) => e.target.style.backgroundColor = '#0056b3'}
      onMouseLeave={(e) => e.target.style.backgroundColor = '#007bff'}
    >
      Sonraki
    </Button>
  </div>
</div>

<style jsx>{`
  .pagination-button {
    transition: background-color 0.3s ease;
    background-color: #007bff;
    border-color: #007bff;
    font-size: 14px;
  }

  @media (max-width: 768px) {
    .pagination-button {
      font-size: 12px;
      padding: 5px 15px;
    }
  }

  @media (max-width: 576px) {
    .pagination-button {
      font-size: 10px;
      padding: 3px 10px;
    }
  }
`}</style>


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
              style={{
                left: '10px',
                zIndex: 10,
                fontSize: '2rem',
                color: 'black',
                padding: '10px',
                backgroundColor: 'transparent',
              }}
            >
              <FaChevronLeft />
            </button>

            {mediaItems[selectedImageIndex].type === 'image' ? (
              <img
                src={mediaItems[selectedImageIndex].src}
                alt={`Seçili Görsel ${selectedImageIndex + 1}`}
                className="img-fluid"
                style={{ maxWidth: '100%', height: 'auto', borderRadius: '5px' }}
              />
            ) : (
              <div style={{ position: 'relative', width: '100%', height: '0', paddingTop: '56.25%' }}>
                <video
                  width="100%"
                  height="100%"
                  src={mediaItems[selectedImageIndex].src}
                  controls
                  title={`Video ${selectedImageIndex + 1}`}
                  style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', borderRadius: '5px' }}
                />
              </div>
            )}

            <button
              onClick={() => handleArrowClick('next')}
              className="btn btn-link position-absolute"
              style={{
                right: '10px',
                zIndex: 10,
                fontSize: '2rem',
                color: 'black',
                padding: '10px',
                backgroundColor: 'transparent',
              }}
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
