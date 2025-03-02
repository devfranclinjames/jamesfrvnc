import { Link } from "react-router-dom";
import HeaderContents from "../components/HeaderContents";

const webObj = {
  heading: "Full-stack Web Development",
  phone: "(+63) 998 383 2238",
  email: "devfranclinjames@gmail.com",
};

export default function HeaderSection() {
  return (
    <>
      <header>
        <Link to="/jamesfrvnc">Home</Link>
        <Link to="/jamesfrvnc/test">Test Page</Link>
        <div className=" bg-body-tertiary"></div>
        <div className="position-relative text-info-emphasis">
          <div className="position-relative text-center">
            <HeaderContents
              heading={webObj.heading}
              phone={webObj.phone}
              email={webObj.email}
            />
          </div>
        </div>
      </header>
    </>
  );
}
