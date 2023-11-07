import ActionType from "../ActionType";

const ComponentState = {
    cart: false
}

const ComponentReducer = (state = ComponentState, { type, payload }) => {
    switch (type) {
        case ActionType.CART:
            return { ...state, cart: payload };

        default:
            return state;
    }
}

export default ComponentReducer;