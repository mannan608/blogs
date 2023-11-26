import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Navbar
          </Link>
          <Link className="navbar-brand" to="/blog/:blogId">
            Blog
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
