import { useState, useEffect } from 'react';
import { API_URL, API_KEY } from '../config';
import { Preloader } from './Preloader';
import { ItemsList } from './ItemsList';
import { Cart } from './Cart';
import { OrderList } from './OrderList';

function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isVisibleBasket, setVisible] = useState(false);

  const addToBasket = (good) => {
    const goodIndex = order.findIndex((el) => el.id === good.id);

    if (goodIndex < 0) {
      const newGood = {
        ...good,
        quantity: 1,
      }
      setOrder([...order, newGood]);
    } else {
      const newOrder = order.map((el, index) => {
        if(index === goodIndex) {
          return {
            ...el,
            quantity: el.quantity + 1,
          }
        } else {
          return el;
        }
      });
      setOrder(newOrder);
    }
  };

  const removeFromBasket = (goodId) => {
    const filteredOrder = order.filter((el) => el.id !== goodId);
    setOrder(filteredOrder);
  }

  

  const handleVisibleBasket = () => {
    return setVisible(!isVisibleBasket);
  }

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        'Authorization': API_KEY,
      },
    }).then((response) => response.json()) 
    .then((data) => {
      data.featured  && setGoods(data.featured);
      setLoading(false);
    })
  }, []);

  return (
    <main className="container content">
      <Cart quantity={order.length} handleVisibleBasket={handleVisibleBasket}/>
      {loading ? <Preloader /> : <ItemsList goods={goods} addToBasket={addToBasket}/>}
      {isVisibleBasket && 
        <OrderList order={order} 
          handleVisibleBasket={handleVisibleBasket}
          removeFromBasket={removeFromBasket} /> }
    </main>
  );
}

export { Shop };
