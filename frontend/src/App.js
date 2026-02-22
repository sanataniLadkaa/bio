import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* Pages */
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import ProjectsPage from "./pages/ProjectsPage";
import Contact from "./pages/Contact";

/* If HackerHome exists inside pages */
import HackerHome from "./pages/HackerHome";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/hacker" element={<HackerHome />} />
      </Routes>
    </Router>
  );
}

export default App;