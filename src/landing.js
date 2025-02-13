
import './Landing.css';
import photo1 from './assets/images/colle2.jpg';
import photo2 from './assets/images/ring.jpg';
import photo3 from './assets/images/ring-dream-natifi.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    return (
        <div>

            <div className="container-fluid cont">
                <div className="col-12 col-md-10 col-lg-8">
                    <div className="box1">
                        <h1 className="text-start">
                            Discover the Art of Timeless Elegance
                        </h1>
                        <h1 className="bi bi-arrow-right p-2"> It's All Yours!</h1>
                        <i className="text-start">A curated collection of luxury jewelry, crafted to make every moment sparkle.
                            Crafted with Precision, Worn with Love
                        </i>
                    </div>
                </div>
                <div className="boxes-wrapper">
                    <div className="box2" style={{ backgroundImage: `url(${photo1})`, }}>
                        <a href="/new-collection" className="title">#What's new</a>
                    </div>
                    <div className="box3" style={{ backgroundImage: `url(${photo2})`, }}>
                        <a href="/jewelry" className="title">#Shop Now</a>
                    </div>
                </div>
                <div className="col-12 col-md-10 col-lg-8">
                    <div className="box4" style={{ backgroundImage: `url(${photo3})`, }}>


                    </div>
                </div>
            </div>


        </div>
    );
}

export default App;
