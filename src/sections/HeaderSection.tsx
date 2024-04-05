import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import HeaderContents from "../components/HeaderContents";

const webObj = {
  heading: "Full-stack Web Development",
  phone: "(+63) 910 202 5612",
  email: "devfranclinjames@gmail.com",
};

export default function HeaderSection() {
  return (
    <>
      <Navbar></Navbar>
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
      <div className="container">
        <Slider></Slider>
      </div>
    </>
  );
}
