import { useContext } from 'react';
import { ShopContext } from '../context';
import { ItemCard } from './ItemCard';

function ItemsList() {
  const { goods = [] } = useContext(ShopContext);

  if (!goods.length) {
    return (<h3>Sorry no items loaded</h3>);
  }
  return <div className="items">
    {goods.map((good) => {
      return <ItemCard key={good.id} {...good} />
    })}
  </div>
}

export { ItemsList };
