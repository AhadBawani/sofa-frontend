const { default: ActionType } = require("../ActionType")

const User = {
    user: null,
    userCart:null
}

const UserReducer = (state = User, { type, payload }) => {
    switch (type) {
        case ActionType.USER:
            return { ...state, user:payload }

        case ActionType.USERCART:
            return { ...state, userCart:payload };

        default:
            return state;
    }
}


export default UserReducer;