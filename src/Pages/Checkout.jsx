
function Checkout({products}) {
    let totalPrice = 0;
    for (let i in products) {
        if(products[i].isInCart) totalPrice += products[i].price * products[i].count;
    }
    return (
        <div className="checkout container">
            <h1 style={{padding: '20px 0'}}>Checkout</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price ($) </th>
                        <th scope="col">Count</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product =>
                                (product.isInCart && product.count > 0)
                                &&
                                <tr key={product.id} >
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>{product.count}</td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
            {
                (totalPrice > 0)
                &&
                <div className="total-price bg-light border rounded p-4 shadow-sm text-center my-4">
                    <p className="h4 fw-bold mb-0">
                        Total Price
                        <span className="ms-3 text-primary">
                            ${totalPrice.toFixed(2)}
                        </span>
                    </p>
                </div>
            }
        </div>
    )
}

export default Checkout
