import Slider from "./Slider";
import VideosResults from "./VideosResults";
import MyCV from "../assets/resume_2024_lim.pdf";

const HomePage = () => {
  return (
    <div className="container py-5">
      <header className="py-5">
        <h1 className="display-5">Hi, Welcome to Portfolio</h1>
        <br />
        <a href={MyCV} target="_blank">
          PDF Resume/CV
        </a>
        <p>
          <b>A little info about me:</b>
        </p>
        <p>
          My name is Franclin James Lim. I hold a Bachelor's degree in
          Information Technology from Colegio San Agustin-Bacolod , where I
          developed a robust understanding of design principles, fundamentals,
          and some of the broad spectrum of the world of Information technology.
        </p>
        <em>Here are my current sample Projects as of the moment.</em>
        <p>
          <li>
            <a href="https://www.maysbanksdds.com/" target="_blank">
              maysbanksdds.com
            </a>
          </li>
          <li>
            <a href="https://www.mercerdentalsociety.com/" target="_blank">
              mercerdentalsociety.com
            </a>
          </li>
          <li>
            <a href="https://www.drmariemoeckel.com/" target="_blank">
              drmariemoeckel.com
            </a>
          </li>
          <li>and many more..</li>
        </p>
        <p>
          <b>Work Experience:</b>
          <br />
          During my 6+ years of tenure at EnfraUSA as a Web Graphics designer
          (Front-End), I was responsible for managing thousands of websites
          under InternetBrands using SalesforceCRM, creating engaging visual
          content for both print and digital media including branding materials,
          managing secure forms, marketing campaigns, and social media graphics.
          <br />
          <br />I was responsible for Onboarding and Professional Services under
          Imatrix, Vetmatrix, and Chiromatrix brand, FED designer and Migration
          specialist at Baystone and Officite brands. A robust understanding
          with twig and JQuery as our main tool for managing the websites under
          OctoberCMS and Bootstrap, SASS, and plain CSS for our designs.
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
          <li>
            Proficient in React.js, including a deep understanding of React
            Hooks (useState, useEffect, useReducer, useContext) and their
            practical applications.
          </li>
          <li>
            Familiarity with React component lifecycle, including class-based
            components and functional components with hooks.
          </li>
          <li>
            Skilled in using React Router for client-side routing, with
            experience handling nested routes, redirects, and route protection.
          </li>
          <li>
            Strong command of JavaScript ES6+, including knowledge of async
            programming (Promises, async/await) and array methods (map, filter,
            reduce).
          </li>
          <li>
            Mastery of CSS (Flexbox, Grid), with a focus on responsive and
            cross-browser compatible designs.
          </li>
          <li>
            Understanding of frontend build tools like Webpack, Babel, and
            familiarity with npm/yarn package management.
          </li>
          <li>
            Experienced in managing complex state with Redux or React Context
            API. Ability to discuss scenarios where each approach is most
            suitable.
          </li>
          <li>
            Exposure to styling frameworks like Tailwind CSS or Styled
            Components, with the ability to write modular and scalable CSS-in-JS
            styles
          </li>
          <li>
            Knowledge of memorization and optimization techniques such as
            React.memo, useMemo, and useCallback to improve performance.
          </li>
          <li>
            Ability to debug and optimize React applications using Chrome
            DevTools and React DevTools.
          </li>
          <li>
            Familiarity with testing frameworks like Jest and Enzyme or React
            Testing Library. Capable of writing test cases for unit,
            integration, and snapshot testing.
          </li>
          <li>
            Understanding of Git version control and experience with CI/CD
            pipelines for deploying React applications.
          </li>
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
