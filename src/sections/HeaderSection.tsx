import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import MainContent from "../components/MainContent";
import MysrcLogo2 from "../assets/imgs/teallogodevfranc.png";
import MyLogo from "../components/MyLogo";
import HeaderContents from "../components/HeaderContents";
const imgObj = {
  height: 50,
  width: "auto",
  alt: MysrcLogo2,
  klass: "sect-logo",
};
const webObj = {
  heading: "Full-stack Web Development",
  phone: "(+63) 910 202 5612",
  email: "devfranclinjames@gmail.com",
};

export default function HeaderSection() {
  return (
    <>
      <Navbar></Navbar>
      <div className="position-relative height-400 py-5 text-info-emphasis">
        <div className="position-relative text-center">
          <MyLogo
            klass={imgObj.klass}
            imgsrc={MysrcLogo2}
            taas={imgObj.height}
            lapad={imgObj.width}
            unsani={imgObj.alt}
          />
          <br />
          <HeaderContents
            heading={webObj.heading}
            phone={webObj.phone}
            email={webObj.email}
          />
        </div>
      </div>
      <Slider></Slider>
      <MainContent></MainContent>
    </>
  );
}
