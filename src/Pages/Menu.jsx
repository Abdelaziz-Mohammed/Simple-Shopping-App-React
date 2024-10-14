
import Cart from '../Components/Cart.jsx';

function Menu({products, clickCartHandler}) {
    return (
        <div className="menu container">
            <h1 style={{padding: '20px 0'}}>Menu</h1>
            <table className="table">
                <thead className="shadow-sm">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price ($) </th>
                        <th scope="col">Cart</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product, index) =>
                            <tr key={product.id} >
                                <td>{product.name}</td>
                                <td>$ {product.price}</td>
                                <td><Cart isInCart={product.isInCart} clickCartHandler={() => clickCartHandler(index)} /></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Menu
