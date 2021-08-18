import { useEffect } from 'react';

function Alert(props) {
  const { name = '', eraseAlertName = Function.prototype } = props;

  useEffect(() => {
    const closeTimer = setTimeout(eraseAlertName, 3000);
    return () => {
      clearTimeout(closeTimer);
    };
  }, [name, eraseAlertName]);
  return (
    <div id="toast-container">
      <div className="toast">{name} добавлен к заказу</div>
    </div>
  );
}

export { Alert };
