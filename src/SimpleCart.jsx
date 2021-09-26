import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from './store/actions';

export default function SimpleCart() {
  const cartItems = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch()
  if (!cartItems.length) return null;
  return (
    <div className="simpleCart">
      {cartItems.map((item, idx) => (
        <div key={idx} className="simpleCartItem">
          <p className="simpleCartItemName">
            {item.name} ({item.count})
          </p>
          <p onClick={() => dispatch(removeFromCart(item))} className="simpleCartDeleteItem">x</p>
        </div>
      ))}
    </div>
  );
}
