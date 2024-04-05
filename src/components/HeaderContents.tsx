import MysrcLogosrc from "../assets/imgs/teallogodevfranc.png";
import MyLogo from "../components/MyLogo";
interface HeaderProps {
  heading: string;
  phone: string;
  email: string;
}
export default function HeaderContents({ heading, phone, email }: HeaderProps) {
  return (
    <>
      <div className="parallax-container">
        <div className="parallax-bg"></div>
        <div className="parallax-content">
          <MyLogo
            klass={"sect-logo"}
            imgsrc={MysrcLogosrc}
            taas={40}
            lapad={"auto"}
            unsani={"HeroLogo"}
          />
          <br />
          <h1>Welcome</h1>
          <div className="display-6">
            <div className="text-uppercase">{heading}</div>
          </div>
          <div className="display-1">
            <h1 className="text-uppercase">{phone}</h1>
          </div>
          <div className="display-3">
            <h3 className="text-lowercase">{email}</h3>
          </div>
        </div>
      </div>
    </>
  );
}
