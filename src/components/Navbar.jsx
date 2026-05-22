import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="custom-navbar">
      <Link to="/" className="nav-logo">Islamic Directory</Link>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/scholars">Scholars</Link></li>
        <li><Link to="/quotes">Quotes</Link></li>
         
        <li><Link to="/signup" className="nav-signup-btn">Sign Up</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;