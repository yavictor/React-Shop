import { useContext } from 'react';
import { ShopContext } from '../context';

function ItemCard(props) {
  const {
    id,
    name,
    description,
    price,
    full_background,
    icon,
    image,
  } = props;

  const { addToBasket } = useContext(ShopContext);

  return (
    <div className="card" id={id}>
      <div className="card-image">
        <img
          className="activator"
          src={full_background}
          alt={name + ' ' + description}
        />
      </div>
      <div className="card-content">
        <span className="card-title">{name}</span>
        <p>{description}</p>
      </div>
      <div className="card-action">
        <span className="item-price left">{price} руб.</span>
        <button
          type="button" 
          className="btn right orange darken-2" 
          onClick={() => addToBasket({id, name, price, full_background, icon, image})}>
          Купить
        </button>
      </div>
    </div>
  );
}

export { ItemCard };
