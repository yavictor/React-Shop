function ItemCard(props) {
  const { id, name, description, price, full_background } = props;
  return (
    <div className="card" id={id}>
      <div className="card-image">
        <img className="activator" src={full_background} alt={name + ' ' + description} />
      </div>
      <div className="card-content">
        <span className="card-title">{name}</span>
        <p>{description}</p>
      </div>
      <div className="card-action">
        <span className="left">{price}</span>
        <button type="button" className="btn right">Купить</button>
      </div>
    </div>
  );
}

export { ItemCard };
