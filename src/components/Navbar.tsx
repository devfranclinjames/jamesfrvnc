import Navlinks from "./Navlinks";
import MyLogo from "./MyLogo";
import MysrcLogo from "../assets/imgs/dfhtml.png";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import App from "../App";
import VideosResults from "./VideosResults";

const imgObj = {
  height: 50,
  width: "auto",
  alt: MysrcLogo,
  klass: "nav-logo",
};

function Navbar() {
  return (
    <>
      <BrowserRouter>
        <nav className="navbar navbar-expand-md navbar-dark sticky-top bg-dark">
          <div className="container-fluid">
            <Link to="/jamesfrvnc">
              <MyLogo
                klass={imgObj.klass}
                imgsrc={MysrcLogo}
                taas={imgObj.height}
                lapad={imgObj.width}
                unsani={imgObj.alt}
              />
            </Link>
            <Link to="/results">Videos from ResultsCX</Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <Navlinks></Navlinks>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/results" element={<VideosResults />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Navbar;
