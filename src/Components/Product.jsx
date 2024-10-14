
function Product({name, count, price, incHandler, decHandler, deleteHandler}) {
    return (
        <div className="product row align-items-center w-100 mb-4">
          <div className="col-3">
            <span className="p-2 fs-5 fw-bold">{name}</span>
          </div>
          <div className="col d-flex justify-content-between align-items-center">
          <span className="p-2 fs-5 fw-bold">${price}</span>
            <span className={`badge ${count === 0 ? 'bg-warning text-dark' : 'bg-success'} mx-3 px-3 py-2`}>
              {count}
            </span>
            <button className="btn btn-outline-primary mx-2 btn-sm" onClick={incHandler}>+</button>
            <button className="btn btn-outline-danger mx-2 btn-sm" onClick={decHandler}>-</button>
            <button className="btn btn-outline-secondary btn-sm mx-2" onClick={deleteHandler}>
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>    
      );
}

export default Product
