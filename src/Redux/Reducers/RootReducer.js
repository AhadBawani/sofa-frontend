import { combineReducers } from "redux";
import UserReducer from "./UserReducer";
import ComponentReducer from "./ComponentReducer";
import ProductsReducer from "./ProductsReducer";

const RootReducer = combineReducers({
    User:UserReducer,
    Component:ComponentReducer,
    Product:ProductsReducer
})

export default RootReducer;