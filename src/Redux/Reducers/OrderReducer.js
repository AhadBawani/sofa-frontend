const { default: ActionType } = require('../ActionType');

const orderState = {
    order: null
}

const OrderReducer = (state = orderState, { type, payload }) => {
    switch (type) {
        case ActionType.ORDERCONFIRMATION:
            return { ...state, order: payload };

        default:
            return state;
    }
}

export default OrderReducer;