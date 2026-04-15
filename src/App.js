import {
  HashRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { scroller } from "react-scroll";

import Nav from "./Components/Nav";
import "./App.css";
import TechBridgePage from "./Sections/TechBridgePage";

const AppContent = () => {
  const location = useLocation();

  const scrollTo = (name) => {
    scroller.scrollTo(name, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuad",
    });
  };

  return (
    <>
      {location.pathname !== "/recipes" && <Nav />}

      <Routes>
        <Route path="/" element={<TechBridgePage />} />
        <Route path="/techbridge" element={<TechBridgePage />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;