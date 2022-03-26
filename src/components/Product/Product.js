
const Product = ({ product, handelCart }) => {
  const { name, image, price } = product;
  // console.log(product);
  const addToCart = () => {
    handelCart(product);
  }
  return (
    <div className="col">
      <div className="card">
        <img src={image} className="car-imag-top" alt="..." />
        <div className="card-body">
          <h2 className="card-title" style={{ fontSize: '20px' }}>{name}</h2>
          <h4 style={{ fontSize: '16px' }}>Price: {price}</h4>
          <button onClick={addToCart} type="button" className="btn btn-primary">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;