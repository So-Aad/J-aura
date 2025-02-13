import './Products_cards.css';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Products({ products }) {
    return (
        <>
            <div className="container product-container">
                <div className="row row-cols-2 row-cols-md-4 g-4">
                    {products.map((product, index) => (
                        <div className="col" key={index}>
                            <div className="card text-start">
                                {/* Wrap image with a Link */}
                                <Link to={`/detail/${index}`}>
                                    <img src={product.image} alt="product" className="card-img-top" />
                                </Link>
                                <div className="card-body">
                                    <p className="card-text">{product.description}</p>
                                    <p className="card-price">{product.price }</p>
                                    {/* Wrap button with Link */}
                                    <Link to={`/detail/${index}`} className="btn btn-primary">
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="BtnContainer">
                <Link to="/jewelry" className="MoreProductBtn">
                    More products
                </Link>
            </div>
        </>
    );
}

export default Products;
