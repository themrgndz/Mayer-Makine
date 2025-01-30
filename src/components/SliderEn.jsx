import React from 'react';

const Slider = () => (
  <section id="slider2" className="slider slider-2">
    <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="slide-item align-v-h bg-overlay" style={{ backgroundImage: "url('./src/assets/img/sliders/1.jpg')", backgroundSize: "cover", backgroundPosition: "center center" }}>
            <div className="container">
              <div className="row">
                <div className="col-xl-10">
                  <div className="slide__content">
                    <h2 className="slide__title">CNC Vertical Milling</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="slide-item align-v-h bg-overlay" style={{ backgroundImage: "url('./src/assets/img/sliders/2.jpg')", backgroundSize: "cover", backgroundPosition: "center center" }}>
            <div className="container">
              <div className="row">
                <div className="col-xl-10">
                  <div className="slide__content">
                    <h2 className="slide__title">CNC Horizontal Lathe</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="slide-item align-v-h bg-overlay" style={{ backgroundImage: "url('./src/assets/img/sliders/3.jpg')", backgroundSize: "cover", backgroundPosition: "center center" }}>
            <div className="container">
              <div className="row">
                <div className="col-xl-10">
                  <div className="slide__content">
                    <h2 className="slide__title">Manual Lathe</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" style={{ filter: 'invert(0)' }}></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" style={{ filter: 'invert(0)' }}></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    <div id="hakkimizda"></div>
  </section>
);

export default Slider;
