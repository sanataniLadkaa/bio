import { useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="bottom-navbar">
      <button
        className={location.pathname === "/" ? "active" : ""}
        onClick={() => navigate("/")}
      >
        🏠 Home
      </button>

      <button
        className={location.pathname === "/contact" ? "active" : ""}
        onClick={() => navigate("/contact")}
      >
        💬 Contact
      </button>
    </div>
  );
}

export default Navbar;
