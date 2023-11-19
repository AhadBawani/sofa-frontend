import ActionType from "../ActionType"

export const CartAction = (response) => {    
    return {
        type:ActionType.CART,
        payload:response
    }
}

export const AlertAction = (response) => {
    return {
        type:ActionType.ALERT,
        payload:response
    }
}

export const UserProfileAction = (response) => {
    return {
        type:ActionType.USERPROFILE,
        payload:response
    }
}