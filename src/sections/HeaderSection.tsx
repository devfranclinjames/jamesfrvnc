import HeaderContents from "../components/HeaderContents";
import Navbar from "../components/Navbar";

const webObj = {
  heading: "Full-stack Web Development",
  phone: "(+63) 998 383 2238",
  email: "devfranclinjames@gmail.com",
};

const HeaderSection: React.FC = () => {
  return (
    <header>
      <Navbar />
      <div className="bg-body-tertiary"></div>
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
  );
};

export default HeaderSection;
