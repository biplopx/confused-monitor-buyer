import React from 'react';

const Cart = ({ cart, chooseOne, choosenCart }) => {
  return (
    <div className='border p-3'>
      <h3>Choose option</h3>
      <hr />
      {
        cart && cart.map(item => <p key={item.id}>{item.name}</p>)
      }
      <hr />
      <p>Random Choosen: {choosenCart && choosenCart.name}</p>
      <button onClick={chooseOne} type="button" className="btn btn-primary">CHOOSE 1 FOR ME</button> <br />
      <button type="button" className="btn btn-danger mt-3">CHOOSE AGAIN</button>
    </div>
  );
};

export default Cart;