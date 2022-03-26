import React from 'react';

const Cart = ({ cart, chooseOne, choosenCart, clearCart }) => {
  return (
    <div className='border p-3'>
      <h3>Choose option</h3>
      <hr />
      {
        cart && cart.map(item => <p key={item.id}>{item.name}</p>)
      }
      {
        cart && cart.length > 0 && <><hr />
          <h3 style={{ fontSize: '20px' }}><span className='text-danger'>Random Choosen: </span>{choosenCart && choosenCart.name}</h3>
          <button onClick={chooseOne} type="button" className="btn btn-primary">CHOOSE 1 FOR ME</button> <br />
          <button onClick={clearCart} type="button" className="btn btn-danger mt-3">CHOOSE AGAIN</button></>
      }
    </div>
  );
};

export default Cart;