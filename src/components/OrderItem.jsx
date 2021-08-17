function OrderItem(props) {
  const {
    id,
    name,
    price,
    quantity,
    icon,
    removeFromBasket = Function.prototype,
  } = props;

  return (
    <li className="collection-item avatar basket-list">
      <img src={icon} alt={name} className="circle"></img>
      {name} x {quantity} = {price * quantity}
      <span className="secondary-content right">
        <i className="material-icons icon-dark-orange"
          onClick={() => removeFromBasket(id)}
        >clear</i>
      </span>
    </li>
  );
}

export { OrderItem };
