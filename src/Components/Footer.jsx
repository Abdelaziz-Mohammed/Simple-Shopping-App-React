
function Footer() {
    return (
        <footer className="bg-dark text-white text-center py-3 position-absolute w-100" style={{ bottom: '-100px' }}>
            <div className="container">
                <small className="mb-0">&copy; {new Date().getFullYear()} Abdelaziz Mohamed. All Rights Reserved.</small>
            </div>
        </footer>
    )
}

export default Footer
