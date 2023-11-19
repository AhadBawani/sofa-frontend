import ActionType from "../ActionType"

export const GetProductAction = (response) => {
    return {
        type:ActionType.PRODUCT,
        payload:response
    }
}