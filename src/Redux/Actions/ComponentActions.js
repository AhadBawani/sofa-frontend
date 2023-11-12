import ActionType from "../ActionType"

export const CartAction = (response) => {    
    return {
        type:ActionType.CART,
        payload:response
    }
}