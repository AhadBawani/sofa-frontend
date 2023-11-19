import ActionType from "../ActionType";

const ComponentState = {
    cart: false,
    alert: false,
    userprofile: false
}

const ComponentReducer = (state = ComponentState, { type, payload }) => {
    switch (type) {
        case ActionType.CART:
            return { ...state, cart: payload };

        case ActionType.ALERT:
            return { ...state, alert: payload };

        case ActionType.USERPROFILE:
            return { ...state, userprofile: payload };

        default:
            return state;
    }
}

export default ComponentReducer;