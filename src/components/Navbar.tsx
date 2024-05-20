import MyLogo from "./MyLogo";
import MysrcLogo from "../assets/imgs/dfhtml.png";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import App from "../App";

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
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Navbar;
