
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom"
import axios from "axios";

function ProductEdit({products}) {

    const state = useLocation().state.split(' ');
    const {id} = useParams();
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        if (state[0] === 'edit' && products[state[1]]) {
            setProductName(products[state[1]].name);
            setProductPrice(products[state[1]].price);
        }
    }, [])

    const handleSubmit = async e => {
        e.preventDefault();
        if (id === "new") {
            // Add new product
            await axios.post('http://localhost:3001/products', {
                "name": productName, 
                "count": 1, 
                "isInCart": false, 
                "price": productPrice
            });
        }
        else {
            // Update existing product
            await axios.put(`http://localhost:3001/products/${id}`, {
                "id": id,
                "name": productName,
                "count": 1,
                "isInCart": false,
                "price": productPrice
            });
        }
        setProductName('');
        setProductPrice(0);
        navigate('/admin');
        window.location.reload(); // reload page to apply changes
    }

    return (
        <div className="edit-product container my-5">
            <h1 className="text-center mb-4">{state[0] === 'edit' ? 'Edit' : 'Add'} Product</h1>
            <form className="border p-4 rounded shadow-sm bg-light">
                <div className="form-group mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="productName" 
                        className="form-control mb-4"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                    />
                    <label htmlFor="price" className="form-label">Price</label>
                    <input 
                        type="text"
                        id="price"
                        name="productPrice" 
                        className="form-control mb-4" 
                        value={productPrice}
                        onChange={(e) => setProductPrice(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary" 
                    onClick={handleSubmit} 
                >
                    {state[0] === 'edit' ? 'Update' : 'Add'} Product
                </button>
            </form>
        </div>
    )
}

export default ProductEdit


