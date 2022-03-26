import { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [choosenCart, setChoosenCart] = useState(null);
  useEffect(() => {
    fetch('products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, []);

  const handelCart = (product) => {
    if (cart.length <= 3) {
      const addedItem = [...cart, product];
      setCart(addedItem);
    }
    else {
      alert("You can choose only 4");
    }
  }

  const chooseOne = () => {
    if (cart) {
      const randNo = Math.floor(Math.random() * 4) + 1
      const singleCart = cart.find((item) => item.id === randNo);
      setChoosenCart(singleCart);
    }
  }


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
          <Cart cart={cart} chooseOne={chooseOne} choosenCart={choosenCart}></Cart>
        </div>
      </div>

    </>

  );
};

export default Shop;