
import { useNavigate } from 'react-router-dom';
import Product from '../Components/Product.jsx';

function ShoppingCart({products, incHandler, decHandler, deleteHandler, cartCounter}) {
    const navigate = useNavigate();
    return (
        <div className="ShoppingCart container">
            <h1 style={{padding: '20px 0'}}>Shopping Cart</h1>
            {
                products.map((product, idx) =>
                    product.isInCart && <Product key={product.id} 
                    name={product.name} count={product.count} price={product.price} 
                    incHandler={() => incHandler(idx)} decHandler={() => decHandler(idx)} deleteHandler={() => deleteHandler(idx)} />
                )
            }
            {
                (cartCounter > 0)
                &&
                <button onClick={() => navigate('/checkout')} className="btn btn-primary btn-lr px-5 py-2 shadow-sm" 
                style={{display: 'block', margin: '0 auto'}}>
                    Checkout
                </button>
            }
        </div>
    )
}

export default ShoppingCart
