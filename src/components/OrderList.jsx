import { useContext } from 'react';
import { ShopContext } from '../context';
import { OrderItem } from './OrderItem';

function OrderList() {
  const {
    order = [],
    handleVisibleBasket = Function.prototype,
  } = useContext(ShopContext);

  const totalValue = order.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0);
  return (
    <ul className="collection order-list z-depth-3">
      <li className="collection-item active orange darken-4">
        Корзина покупок
        <span className="secondary-content right">
          <i
            className="material-icons close-cart"
            onClick={handleVisibleBasket}
          >
            clear
          </i>
        </span>
      </li>
      {order.length ? (
        order.map((el) => (
          <OrderItem
            key={el.id}
            {...el}
          />
        ))
      ) : (
        <li className="collection-item active orange darken-4">пуста</li>
      )}

      <li className="collection-item active orange darken-4">
        Общая стоимость товаров: {totalValue} руб.
        <button className="secondary-content btn-small checkout-btn">
          Оформить
        </button>
      </li>
    </ul>
  );
}

export { OrderList };
