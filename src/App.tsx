import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderSection from "./sections/HeaderSection";
import MainSection from "./sections/MainSection";
import FooterSection from "./sections/FooterSection";
import Test from "./pages/test"; // Import the new Test component

function App() {
  return (
    <Router>
      <Routes>
        {/* Main page route */}
        <Route
          path="/"
          element={
            <>
              <HeaderSection />
              <MainSection />
              <FooterSection />
            </>
          }
        />

        {/* Test page route */}
        <Route path="/test" element={<Test />} />
      </Routes>
    </Router>
  );
}

export default App;
