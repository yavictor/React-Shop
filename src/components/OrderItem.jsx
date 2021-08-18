function OrderItem(props) {
  const {
    id,
    name,
    price,
    quantity,
    icon,
    removeFromBasket = Function.prototype,
    changeItemQuantity = Function.prototype,
  } = props;

  return (
    <li className="collection-item avatar order-item">
      <div className="left-block">
        <img src={icon} alt={name} className="circle"></img>
        <span className="title">{name}</span>
        <p>Цена: {price}</p>
      </div>

      <div className="center-block">
        <i onClick={() => changeItemQuantity(id, 'dec')} 
        className="tiny material-icons border-round">remove</i> 
        {quantity}
        <i onClick={() => changeItemQuantity(id, 'inc')} 
        className="tiny material-icons border-round">add</i> 

      </div>
      <div className="right-block">
      = {price * quantity} руб.
        <span className="secondary-content right">
          <i className="material-icons icon-dark-orange"
            onClick={() => removeFromBasket(id)}
          >clear</i>
        </span>
      </div>
    </li>

  );
}

export { OrderItem };
