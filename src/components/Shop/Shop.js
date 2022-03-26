import { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [choosenCart, setChoosenCart] = useState({});
  useEffect(() => {
    fetch('products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, []);

  const handelCart = (product) => {
    if (cart.length <= 3) {
      let exist;
      if (cart.some(item => item.id === product.id)) {
        exist = true;
        alert("Item Already Added");
      } else {
        exist = false;
      }

      if (!exist) {
        const addedItem = [...cart, product];
        setCart(addedItem);
      }

    }
    else {
      alert("You can choose only 4");
    }
  }

  const chooseOne = () => {
    const randNo = Math.floor(Math.random() * cart.length - 1) + 1;
    const singleItem = cart[randNo];
    setChoosenCart(singleItem);
  }

  const clearCart = () => {
    setCart([]);
    setChoosenCart({})
  }
  return (
    <>
      <div className='row p-4'>
        <div className='col-lg-8'>
          <div className='row row-cols-1 row-cols-lg-3 row-cols-md-2 g-4 mb-3'>
            {
              products.map(product => <Product key={product.id} product={product} handelCart={handelCart}></Product>)
            }
          </div>
        </div>
        <div className='col-lg-4'>
          <Cart cart={cart} chooseOne={chooseOne} choosenCart={choosenCart} clearCart={clearCart}></Cart>
        </div>
      </div>

    </>

  );
};

export default Shop;