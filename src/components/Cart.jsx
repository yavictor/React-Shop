import { useContext } from 'react';
import { ShopContext } from '../context';

function Cart() {
  const { order, handleVisibleBasket = Function.prototype } =
    useContext(ShopContext);
  const quantity = order.length;
  
  return (
    <div className="cart orange" onClick={handleVisibleBasket}>
      <i className="material-icons">shopping_basket</i>
      {quantity ? <span className="cart-quantity">{quantity}</span> : null}
    </div>
  );
}

export { Cart };
