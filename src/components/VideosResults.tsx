function VideosResults() {
  return (
    <>
      <div
        id="carouselExampleCaptions2"
        className="carousel slide"
        data-ride="carousel"
        data-interval="false"
        data-pause="hover"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions2"
            data-bs-slide-to="0"
            className="active bg-info-subtle"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions2"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            className="bg-info-subtle"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions2"
            data-bs-slide-to="2"
            aria-label="Slide 3"
            className="bg-info-subtle"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions2"
            data-bs-slide-to="3"
            aria-label="Slide 4"
            className="bg-info-subtle"
          ></button>
        </div>
        <div className="carousel-inner">
          {/* New Video - First Slide */}
          <div className="carousel-item active">
            <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
              <iframe
                src="https://player.vimeo.com/video/1209256136?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
                title="GHL For Portfolio Edit"
              ></iframe>
            </div>
            <div className="carousel-caption d-none d-md-block"></div>
          </div>

          {/* Existing Videos */}
          <div className="carousel-item">
            <div>
              <iframe
                src="https://player.vimeo.com/video/948224968?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                title="The Results Newtown PhilFest 2019 Teaser"
                width={`100%`}
                height={`740px`}
              ></iframe>
            </div>
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
          <div className="carousel-item">
            <div>
              <iframe
                src="https://player.vimeo.com/video/948235103?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                title="MarchVid"
                width={`100%`}
                height={`740px`}
              ></iframe>
            </div>
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
          <div className="carousel-item">
            <div>
              <iframe
                src="https://player.vimeo.com/video/948237579?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                title="The Results Newtown Wellcare Leadership Summit Video January 2020"
                width={`100%`}
                height={`740px`}
              ></iframe>
            </div>
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions2"
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
          data-bs-target="#carouselExampleCaptions2"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <script src="https://player.vimeo.com/api/player.js"></script>
    </>
  );
}

export default VideosResults;
