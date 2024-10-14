
import { NavLink } from "react-router-dom";

function Navbar({ cartCounter }) {
    return (
        <nav className="navbar navbar-expand-sm bg-body-tertiary shadow-sm border-bottom" style={{ padding: '10px 20px' }}>
            <span className="navbar-brand mb-0 h1 text-primary">Navbar</span>
            <div className="d-flex flex-column flex-sm-row justify-content-start align-items-start align-items-sm-center w-100">
                <ul className="navbar-nav me-auto mb-2 mb-sm-0">
                    <li className="nav-item">
                        <NavLink
                            className={({ isActive }) => isActive ? 'nav-link active fw-bold text-primary' : 'nav-link'}
                            to="/menu"
                        >
                            Menu
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            className={({ isActive }) => isActive ? 'nav-link active fw-bold text-primary' : 'nav-link'}
                            to="/cart"
                        >
                            Shopping Cart
                        </NavLink>
                    </li>
                    {
                        (cartCounter > 0)
                        &&
                        <li className="nav-item">
                            <NavLink
                                className={({ isActive }) => isActive ? 'nav-link active fw-bold text-primary' : 'nav-link'}
                                to="/checkout"
                            >
                                Checkout
                            </NavLink>
                        </li>
                    }
                    <li className="nav-item">
                        <NavLink
                            className={({ isActive }) => isActive ? 'nav-link active fw-bold text-primary' : 'nav-link'}
                            to="/admin"
                        >
                            Admin
                        </NavLink>
                    </li>
                </ul>
                <span className="badge bg-primary p-2 ms-0 ms-sm-auto me-2">
                    <i className="fa-solid fa-cart-plus"></i>
                    <span className="ps-2">{cartCounter}</span>
                </span>
            </div>
        </nav>
    );
}

export default Navbar;

