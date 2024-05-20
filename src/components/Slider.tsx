import Pexbg1 from "../assets/imgs/pexbg1.jpg";
import Pexbg2 from "../assets/imgs/pexbg2.jpg";
import Pexbg3 from "../assets/imgs/pexbg3.jpg";

export default function Slider() {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active bg-info-subtle"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            className="bg-info-subtle"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
            className="bg-info-subtle"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Pexbg1} className="d-block w-100 opaek" alt="..." />

            <div className="carousel-caption d-none d-md-block">
              {/* <h5 className="text-body">Sample website project</h5>
              <p className="text-body">
                Some representative placeholder content for the first slide.
              </p> */}
            </div>
          </div>
          <div className="carousel-item">
            <img src={Pexbg2} className="d-block w-100 opaek" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              {/* <h5 className="text-body">Sample website project</h5>
              <p className="text-body">
                Some representative placeholder content for the second slide.
              </p> */}
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={Pexbg3}
              className="d-block w-100 bg-gradient-dark opaek"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              {/* <h5 className="text-body">Sample website project</h5>
              <p className="text-body">
                Some representative placeholder content for the third slide.
              </p> */}
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
            data-bs-theme="light"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
