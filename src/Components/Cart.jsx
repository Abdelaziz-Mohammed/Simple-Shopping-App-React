
function Cart({isInCart, clickCartHandler}) {
    const isInCartStyle = {
        color: 'black',
        cursor: 'pointer',
        fontSize: '18px',
    }
    const isNotInCartStyle = {
        color: '#777',
        cursor: 'pointer',
        fontSize: '18px',
    }
    return (
        <i className="fa-solid fa-cart-plus" style={isInCart ? isInCartStyle : isNotInCartStyle} onClick={clickCartHandler} ></i>
    )
}

export default Cart


