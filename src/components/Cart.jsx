function Cart(props) {
  const { quantity = 0, handleVisibleBasket = Function.prototype } = props;
  return (
    <div className="cart orange" onClick={handleVisibleBasket}>
      <i className="material-icons">shopping_basket</i>
      {quantity ? <span className="cart-quantity">{quantity}</span> : null}
    </div>
  );
}

export { Cart };
