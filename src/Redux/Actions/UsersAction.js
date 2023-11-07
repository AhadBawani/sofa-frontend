import ActionType from "../ActionType"

export const UserAction = (response) => {
    return {
        type:ActionType.USER,
        payload:response
    }
}

export const AddToCartAction = (response) => {
    return {
        type:ActionType.ADDTOCART,
        payload:response
    }
}