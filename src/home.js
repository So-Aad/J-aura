
import './Landing.css';
import photo1 from './assets/images/blackB.jpg';
import photo2 from './assets/images/ring.jpg';
import photo3 from './assets/images/ring-dream-natifi.jpg';


function App() {
  return (
   <div>
     <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
            <a className="navbar-brand" href="/home"><span>J</span>-Aura</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/home">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/about">Our story</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/jewelry">Jewelry</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="contact">Contact</a>
                    </li>
                </ul>
                <div className="d-flex align-items-center">
                    <div className="search-input">
                        <i className="bi bi-search rech"></i>
                        <input type="text" placeholder="Search"/>
                    </div>
                    <button className="cart-icon">
                        <i className="bi bi-bag"></i>
                    </button>
                </div>
            </div>
        </div>
    </nav>
    <div className="container-fluid cont">
        <div className="col-12 col-md-10 col-lg-8">
            <div className="box1">
                <h1 className="text-start">
                    Discover the Art of Timeless Elegance
                </h1>
               <h1 className="bi bi-arrow-right p-2">Because you deserve it</h1>
                <i className="text-start">A curated collection of luxury jewelry, crafted to make every moment sparkle.
                    Crafted with Precision, Worn with Love
                </i>
            </div>
        </div>
        <div className="boxes-wrapper">
            <div className="box2" style={{backgroundImage: `url(${photo1})`,}}>
                <h6 className="title">#classic</h6>
            </div>
            <div className="box3" style={{backgroundImage: `url(${photo2})`,}}>
                <h6 className="title">#best seller</h6>
            </div>
        </div>
        <div className="col-12 col-md-10 col-lg-8">
            <div className="box4" style={{backgroundImage: `url(${photo3})`,}}>
                <button className="shop">Shop Now</button>

            </div>
        </div>
    </div>


   </div>
  );
}

export default App;