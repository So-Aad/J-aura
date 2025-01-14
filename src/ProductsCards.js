import './Products_cards.css';
import { Link } from "react-router-dom";

function Products({ products }) {
    return (
        <>
            <div className="container  product-container">
                <div className="row row-cols-2 row-cols-md-4 g-4">
                    {products.map((product, index) => (
                        <div className="col" key={index}>
                            <div className="card text-start ">
                                <img src={product.image} alt="products" className="card-img-top" />
                                <div className="card-body">
                                    <p className="card-text">{product.description}</p>
                                    <p className="card-price">{product.price}</p>
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
