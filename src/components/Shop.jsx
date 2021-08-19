import { useEffect, useContext } from 'react';
import { ShopContext } from '../context';
import { API_URL, API_KEY } from '../config';
import { Preloader } from './Preloader';
import { ItemsList } from './ItemsList';
import { Cart } from './Cart';
import { OrderList } from './OrderList';
import { Alert } from './Alert';

function Shop() {
  const { loading, order, isVisibleBasket, alertName, setGoods } =
    useContext(ShopContext);

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => setGoods(data.featured));
  }, [setGoods]);

  return (
    <main className="container content">
      <Cart quantity={order.length} />
      {loading ? <Preloader /> : <ItemsList />}
      {isVisibleBasket && <OrderList />}
      {alertName && <Alert />}
    </main>
  );
}

export { Shop };
