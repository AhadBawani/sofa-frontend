import { combineReducers } from "redux";
import UserReducer from "./UserReducer";
import ComponentReducer from "./ComponentReducer";

const RootReducer = combineReducers({
    User:UserReducer,
    Component:ComponentReducer
})

export default RootReducer;