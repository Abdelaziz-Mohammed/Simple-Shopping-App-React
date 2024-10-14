
import { useNavigate } from "react-router-dom"
import axios from "axios";

function Admin({products}) {
    const navigate = useNavigate();
    function addProductHandler() {
        navigate(`/productEdit/new`, {state: 'add'});
    }
    function editProductHandler(id, idx) {
        navigate(`/productEdit/${id}`, {state: `edit ${idx}`});
    }
    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:3001/products/${id}`);
        window.location.reload();
    }
    return (
        <div className="admin container">
            <h1 style={{padding: '20px 0'}}>Admin</h1>
            <button className="btn btn-primary mb-4 ms-1" onClick={addProductHandler} >Add</button>
            <table className="table">
                <thead className="shadow-sm">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price ($) </th>
                        <th scope="col" style={{textAlign: 'center'}}>Edit</th>
                        <th scope="col" style={{textAlign: 'center'}}>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product, idx) =>
                            <tr key={product.id} >
                                <td>{product.name}</td>
                                <td>$ {product.price}</td>
                                <td style={{textAlign: 'center', cursor: 'pointer'}} onClick={() => editProductHandler(product.id, idx)} className="text-primary">
                                    <i className="fa-solid fa-pen-to-square"></i>
                                </td>
                                <td style={{textAlign: 'center', cursor: 'pointer'}} 
                                onClick={() => handleDelete(product.id)}
                                className="text-danger">
                                    <i className="fa-regular fa-trash-can"></i>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Admin
