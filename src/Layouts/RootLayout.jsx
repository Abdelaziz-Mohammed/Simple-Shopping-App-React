
import { Outlet } from "react-router-dom";

import Navbar from '../Components/Navbar.jsx';
import Footer from '../Components/Footer.jsx';

function RootLayout({cartCounter}) {
    return (
        <div className="position-relative min-vh-100">
            <Navbar cartCounter={cartCounter} />
            <Outlet  />
            <Footer />
        </div>
    )
}

export default RootLayout
