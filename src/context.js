import { createContext, useReducer } from 'react';
import { reducer } from './reducer';

export const ShopContext = createContext();

const initialState = {
  goods: [],
  loading: true,
  order: [],
  isVisibleBasket: false,
  alertName: '',
};

export const ContextPrvider = ({
    children
  }) => {
    const [value, dispatch] = useReducer(reducer, initialState);

    value.eraseAlertName = () => {
      dispatch({
        type: 'ERASE_ALERT_NAME'
      })
    }

    value.removeFromBasket = (goodId) => {
      dispatch({
        type: 'REMOVE_FROM_BASKET',
        payload: {
          id: goodId
        }
      })
    }

    value.addToBasket = (good) => {
      dispatch({
        type: 'ADD_TO_BASKET',
        payload: good
      })
    }

    value.changeItemQuantity = (goodId, change) => {
      dispatch({
        type: 'CHANGE_ITEM_QUANTITY',
        payload: {
          id: goodId,
          change: change
        }
      })
    }

    value.handleVisibleBasket = () => {
      dispatch({
        type: 'HANDLE_VISIBLE_BASKET'
      })
    }

    value.setGoods = (goods) => {
      dispatch({
        type: 'SET_GOODS',
        payload: goods
      })
    }

  return (
  <ShopContext.Provider value={value}>
    {children}
  </ShopContext.Provider>
  );
};