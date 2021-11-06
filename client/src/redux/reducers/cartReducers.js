import * as actionTypes from '../constants/cartConstants'

export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            const item = action.payload;

            const existItem = state.cartItems.find((cartItem) => cartItem.product === item.product);

            if (existItem) {
              return {
                  ...state,
                  cartItems: state.cartItems.map((cartItem) => 
                  cartItem.product === existItem.product ? item : cartItem),
              }
            } else {
                return { ...state, cartItems: [...state.cartItems, item],};
            }
            case actionTypes.REMOVE_FROM_CART:
                return { ...state, cartItems: state.cartItems.filter((cartItem) => cartItem.product !== action.payload),};
    
        default: 
            return state;
    }
}