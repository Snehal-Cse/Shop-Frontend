const { useReducer } = require("react");

export default function CartReducer(state, action){
    switch(action.type){
        case "Add_To_Cart":
        return { ...state, cart: [...state.cart, { ...action.payLoad,qty:1}] };
        case "Remove_From_Cart":
            return {...state, cart: state.cart.filter((c)=>c.id !== action.payLoad)};
            case "Change_Cart_QTY":
                return {
                    ...state,
                    cart: state.cart.map(item =>
                        item.id === action.payLoad.id ? { ...item, qty: action.payLoad.qty } : item
                    )
                };
            
        default:
           return state
    }
}
