import ActionType from "../ActionType"

export const UserAction = (response) => {
    return {
        type:ActionType.USER,
        payload:response
    }
}

export const UserCartAction = (response) => {
    return {
        type:ActionType.USERCART,
        payload:response
    }
}