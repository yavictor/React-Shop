import { useState, useEffect } from 'react';
import { API_URL, API_KEY } from '../config';
import { Preloader } from './Preloader';
import { ItemsList } from './ItemsList';
import { Cart } from './Cart';
import { OrderList } from './OrderList';
import { Alert } from './Alert';

function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isVisibleBasket, setVisible] = useState(false);
  const [alertName, setAlertName] = useState('');

  const addToBasket = (good) => {
    const goodIndex = order.findIndex((el) => el.id === good.id);

    if (goodIndex < 0) {
      const newGood = {
        ...good,
        quantity: 1,
      };
      setOrder([...order, newGood]);
    } else {
      const newOrder = order.map((el, index) => {
        if (index === goodIndex) {
          return {
            ...el,
            quantity: el.quantity + 1,
          };
        } else {
          return el;
        }
      });
      setOrder(newOrder);
    }
    setAlertName(good.name);
  };

  const removeFromBasket = (goodId) => {
    const filteredOrder = order.filter((el) => el.id !== goodId);
    setOrder(filteredOrder);
  };

  const changeItemQuantity = (goodId, change) => {
    const changedOrder = order.map((el) => {
      if (el.id === goodId) {
        if (change === 'inc') {
          el.quantity += 1;
        } else if (change === 'dec' && el.quantity > 1) {
          el.quantity -= 1;
        }
        return { ...el };
      } else {
        return el;
      }
    });
    setOrder(changedOrder);
  };

  const handleVisibleBasket = () => {
    return setVisible(!isVisibleBasket);
  };

  const eraseAlertName = () => setAlertName('');

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.featured && setGoods(data.featured);
        setLoading(false);
      });
  }, []);

  return (
    <main className="container content">
      <Cart quantity={order.length} handleVisibleBasket={handleVisibleBasket} />
      {loading ? (
        <Preloader />
      ) : (
        <ItemsList goods={goods} addToBasket={addToBasket} />
      )}
      {isVisibleBasket && (
        <OrderList
          order={order}
          handleVisibleBasket={handleVisibleBasket}
          removeFromBasket={removeFromBasket}
          changeItemQuantity={changeItemQuantity}
        />
      )}
      {alertName && <Alert name={alertName} eraseAlertName={eraseAlertName} />}
    </main>
  );
}

export { Shop };
