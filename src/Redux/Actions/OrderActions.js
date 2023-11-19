import ActionType from "../ActionType"

export const OrderConfirmationAction = (response) => {
    return {
        type:ActionType.ORDERCONFIRMATION,
        payload:response
    }
}