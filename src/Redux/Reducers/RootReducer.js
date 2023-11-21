import { combineReducers } from "redux";
import UserReducer from "./UserReducer";
import ComponentReducer from "./ComponentReducer";
import ProductsReducer from "./ProductsReducer";
import OrderReducer from "./OrderReducer";

const RootReducer = combineReducers({
    User:UserReducer,
    Component:ComponentReducer,
    Product:ProductsReducer,
    Order:OrderReducer
})

export default RootReducer;