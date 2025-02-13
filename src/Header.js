import './Landing.css';
import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Header({ setSearchQuery, cartItems }) {
  const navigate = useNavigate();
  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.trim() !== "") {
      navigate("/jewelry", { state: { query } });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/"><span>J</span>-Aura</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
           
          <span className="navbar-toggler-icon"></span>
         
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><a className="nav-link" href="/our-story">Our story</a></li>
            <li className="nav-item"><Link className="nav-link" to="/jewelry">Jewelry</Link></li>
            <li className="nav-item"><a className="nav-link" href="/contact">Contact</a></li>
          </ul>
          <div className="d-flex align-items-center">
            <div className="search-input">
              <i className="bi bi-search rech"></i>
              <input type="text" placeholder="Search" id="searchInput" onChange={handleSearch} />
            </div>
            <Link to="/cart">
            <button className="cart-icon">
              <i className={`bi bi-bag ${cartItems.length > 0 ? "cart-red" : ""}`}></i>
            </button></Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
