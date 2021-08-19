export function reducer(state, {type, payload}) {
  switch (type) {
    case 'SET_GOODS':
      return {
        ...state,
        goods: payload || [],
        loading: false,
      }
    case 'ERASE_ALERT_NAME':
      return {
        ...state,
        alertName: ''
      }
    case 'REMOVE_FROM_BASKET':
      return {
        ...state,
        order: state.order.filter((el) => el.id !== payload.id)
      }
    case 'ADD_TO_BASKET':
      {
        const goodIndex = state.order.findIndex((el) => el.id === payload.id);
        let newOrder = null;

        if (goodIndex < 0) {
          const newGood = {
            ...payload,
            quantity: 1,
          };
          newOrder = [...state.order, newGood];
        } else {
          newOrder = state.order.map((el, index) => {
            if (index === goodIndex) {
              return {
                ...el,
                quantity: el.quantity + 1,
              };
            } else {
              return el;
            }
          });
        }

        return {
          ...state,
          order: newOrder,
          alertName: payload.name,
        };
      }
    case 'CHANGE_ITEM_QUANTITY':
      return {
        ...state,
        order: state.order.map((el) => {
          if (el.id === payload.id) {
            if (payload.change === 'inc') {
              el.quantity += 1;
            } else if (payload.change === 'dec' && el.quantity > 1) {
              el.quantity -= 1;
            }
            return { ...el };
          } else {
            return el;
          }
        }),
      }
    case 'HANDLE_VISIBLE_BASKET':
      return { 
        ...state,
        isVisibleBasket: !state.isVisibleBasket,
      }
    default: 
      return state;
  }
}