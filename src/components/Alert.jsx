import { useEffect, useContext } from 'react';
import { ShopContext } from '../context';


function Alert() {
  const { alertName = '', eraseAlertName = Function.prototype } =
    useContext(ShopContext);

  useEffect(() => {
    const closeTimer = setTimeout(eraseAlertName, 3000);
    return () => {
      clearTimeout(closeTimer);
    };
  }, [alertName, eraseAlertName]);
  return (
    <div id="toast-container">
      <div className="toast">{alertName} добавлен к заказу</div>
    </div>
  );
}

export { Alert };
