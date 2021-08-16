import { useState, useEffect } from 'react';
import { API_URL, API_KEY } from '../config';
import { Preloader } from './Preloader';
import { ItemsList } from './ItemsList';

function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        'Authorization': API_KEY,
      },
    }).then((response) => response.json())
    .then((data) => {
      console.log(data.featured );
      data.featured  && setGoods(data.featured );
      setLoading(false);
    })
  }, []);

  return <main className="container content">
    {
      loading ? <Preloader /> : <ItemsList goods={goods} />
    }
  </main>;
}

export { Shop };
