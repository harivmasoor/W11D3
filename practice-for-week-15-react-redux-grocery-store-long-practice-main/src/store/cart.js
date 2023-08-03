const ADD_TO_CART = "ADD_TO_CART"
const REMOVE_FROM_CART ="REMOVE_FROM_CART"

export const addToCart = (id) => {
    return {
      type: ADD_TO_CART,
      cart: id
    };
  };

export const removeFromCart = (id) => {
    return {
        type: REMOVE_FROM_CART,
        cart: id
    };
};

export default function cartReducer(state = {}, action){
    const newState = Object.assign({}, state);

    switch (action.type){
        case ADD_TO_CART:
            newState[action.cart] = {
                id: action.cart,
                count: 1
            }
            return newState
        case REMOVE_FROM_CART:
            delete newState[action.cart];
            return newState;
        default:
            return state;
    }
}