import { ItemCard } from './ItemCard';

function ItemsList(props) {
  const { goods = [] } = props;

  if (!goods.length) {
    return <h3>Sorry no items loaded</h3>
  }
  return <div className="items">
    {goods.map((good) => {
      return <ItemCard key={good.id} {...good}/>
    })}
  </div>
}

export { ItemsList };
