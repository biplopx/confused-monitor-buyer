import { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch('products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, []);
  // console.log(cart);
  const handelCart = (product) => {
    const addedItem = [...cart, product];
    if (addedItem.length === 4) {
      alert("You can choose only 4");
    }
    setCart(addedItem);
  }
  console.log(cart);
  return (
    <>
      <div className='row p-4'>
        <div className='col-8'>
          <div className='row row-cols-1 row-cols-md-3 g-4'>
            {
              products.map(product => <Product key={product.id} product={product} handelCart={handelCart}></Product>)
            }
          </div>
        </div>
        <div className='col-4'>
          <div className='border p-3'>
            <h3>Choose option</h3>
            {
              cart.map(item => <p key={item.id}>{item.name}</p>)
            }
            <button type="button" class="btn btn-primary">CHOOSE 1 FOR ME</button> <br />
            <button type="button" class="btn btn-danger mt-3">CHOOSE AGAIN</button>
          </div>
        </div>
      </div>

    </>

  );
};

export default Shop;