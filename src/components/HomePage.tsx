import Slider from "./Slider";
import VideosResults from "./VideosResults";
import MyCV from "../assets/resume_2024_lim.pdf";

const HomePage = () => {
  return (
    <div className="container py-5">
      <header className="py-5">
        <h1 className="display-5">Hi, Welcome to Portfolio</h1>
        <br />
        <a href={MyCV}>PDF Resume/CV</a>
        <p>
          <b>A little info about me:</b>
        </p>
        <p>
          My name is Franclin James Lim. I hold a Bachelor's degree in
          Information Technology from Colegio San Agustin-Bacolod , where I
          developed a robust understanding of design principles, fundamentals,
          and some of the broad spectrum of the world of Information technology.
        </p>

        <p>
          <b>Work Experience:</b>
          <br />
          During my tenure at EnfraUSA as a Web Graphics designer (Front-End), I
          was responsible for managing multiple websites and creating engaging
          visual content for both print and digital media including branding
          materials, managing secure forms, marketing campaigns, and social
          media graphics.
        </p>
      </header>
      <section>
        <h2>Services Offered</h2>
        <ul>
          <li>Custom Web Development</li>
          <li>Frontend & Backend Development</li>
          <li>Database Integration</li>
          <li>E-commerce Solutions</li>
          <li>Mobile Responsive Design</li>
          <li>SEO Optimization</li>
          <li>Maintenance and Support</li>
        </ul>
      </section>
      <section>
        <h2>Why Choose my Expertise</h2>
        <ul>
          <li>Expertise & Experience</li>
          <li>Custom Solutions Tailored to You</li>
          <li>Quality Assurance</li>
          <li>Client-Centric Approach</li>
        </ul>
      </section>

      <footer>
        <p>Ready to elevate your online presence?</p>
        <a
          href="https://www.onlinejobs.ph/jobseekers/info/2992796"
          target="_blank"
        >
          <button className="btn btn-primary">Hire Me @ Onlinejobs.ph</button>
        </a>
        <br />
        <br />
        <br />
        <div className="container">
          <Slider></Slider>
          <br />
          <br />
        </div>
        <h1>Videography/Video Editing @ ResultsCX</h1>
        <br />
        <br />
        <br />
        <VideosResults />
        <br />
        <br />
      </footer>
    </div>
  );
};

export default HomePage;
