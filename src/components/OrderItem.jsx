function OrderItem(props) {
  const {
    id, name, price, quantity, image, full_background, icon,
  } = props;

  return (
    <li className="collection-item avatar basket-list">
      <img src={icon} alt={name} className="circle"></img>
      {name} x {quantity} = {price}
      <span className="secondary-content right">
        <i className="material-icons icon-dark-orange">clear</i>        
      </span>
    </li>
  );
}

export {OrderItem}