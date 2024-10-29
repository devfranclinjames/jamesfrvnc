import MyLogo from "../components/MyLogo";
import MysrcLogosrc from "../assets/imgs/teallogodevfranc.png";

export default function FooterSection() {
  return (
    <>
      <footer className="bd-footer py-4 py-md-5 bg-body-tertiary">
        <div className="container py-4 py-md-5 px-4 px-md-3 text-body-secondary">
          <div className="row">
            <div className="col-lg-3 mb-3">
              <MyLogo
                imgsrc={MysrcLogosrc}
                klass={"logofooter"}
                taas={40}
                lapad={"auto"}
                unsani="footerlogo"
              />
              <ul className="list-unstyled small">
                <li className="mb-2">
                  Portoflio Designed and built with
                  <br />
                  <i>Vite, Typescript, and Reactjs.</i>
                </li>
                <li className="mb-2">
                  Code licensed{" "}
                  <a
                    href="https://github.com/twbs/bootstrap/blob/main/LICENSE"
                    target="_blank"
                    rel="license noopener"
                  >
                    MIT
                  </a>
                  , docs{" "}
                  <a
                    href="https://creativecommons.org/licenses/by/3.0/"
                    target="_blank"
                    rel="license noopener"
                  >
                    CC BY 3.0
                  </a>
                  .
                </li>
                <li className="mb-2">Currently v5.3.3.</li>
              </ul>
            </div>
            <div className="col-6 col-lg-2 offset-lg-1 mb-3">
              <h5>Over 5000+ theme Changed Websites</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="https://www.allsupchiropractic.com/" target="_blank">
                    allsupchiropractic.com
                  </a>
                </li>
                <li className="mb-2">
                  <a href="https://www.advantagevision.net" target="_blank">
                    advantagevision.net
                  </a>
                </li>
                <li className="mb-2">
                  <a href="https://www.skyechiropractic.net" target="_blank">
                    skyechiropractic.net
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="https://www.familyvisioncarelagrange.com"
                    target="_blank"
                  >
                    familyvisioncarelagrange.com
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="https://www.springmeadowvetclinic.com"
                    target="_blank"
                  >
                    springmeadowvetclinic.com
                  </a>
                </li>
                <li className="mb-2">
                  <a href="https://www.wardywellnesschiro.com/" target="_blank">
                    wardywellnesschiro.com
                  </a>
                </li>
                <li className="mb-2">
                  <a href="https://www.styleyesiowa.com" target="_blank">
                    styleyesiowa.com
                  </a>
                </li>
                <li>and more.. via OctoberCMS</li>
              </ul>
            </div>
            <div className="col-6 col-lg-2 mb-3">
              <h5>Side Projects</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="https://www.TrudeLizares.com">TrudeLizares.com</a>
                </li>
                <li className="mb-2">
                  <a href="https://www.cebuvic.jp">cebuvic.jp</a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-lg-2 mb-3">
              <h5>ResultsCX Projects</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="https://vimeo.com/user219916965" target="_blank">
                    Vimeo
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-lg-2 mb-3">
              <h5>Community</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a
                    href="https://github.com/twbs/bootstrap/issues"
                    target="_blank"
                    rel="noopener"
                  >
                    Issues
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="https://github.com/twbs/bootstrap/discussions"
                    target="_blank"
                    rel="noopener"
                  >
                    Discussions
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="https://github.com/sponsors/twbs"
                    target="_blank"
                    rel="noopener"
                  >
                    Corporate sponsors
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="https://opencollective.com/bootstrap"
                    target="_blank"
                    rel="noopener"
                  >
                    Open Collective
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="https://stackoverflow.com/questions/tagged/bootstrap-5"
                    target="_blank"
                    rel="noopener"
                  >
                    Stack Overflow
                  </a>
                </li>
              </ul>
            </div>
            <div className="container">
              <h6 className="display-6">Contact</h6>
              <p>
                Feel free to reach out to me via email at [
                <a href="mailto:devfranclinjames@gmail.com">
                  devfranclinjames@gmail.com
                </a>
                ] or connect with me on [
                <a
                  href="https://www.linkedin.com/in/franclinjameslim/"
                  target="_blank"
                >
                  LinkedIn
                </a>
                ] , [
                <a href="https://www.instagram.com/francvisuals/">Instagram</a>]
                , [<a href="https://www.facebook.com/francvisuals/">Facebook</a>
                ].
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
