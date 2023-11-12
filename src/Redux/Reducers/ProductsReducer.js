import { useDispatch } from "react-redux";
import ActionType from "../ActionType";

const productState = {
    products: []
};

const ProductsReducer = (state = productState, { type, payload }) => {

    switch(type){
        case ActionType.PRODUCT:
            return { ...state, products:payload };

        default:
            return state;
    }
}

export default ProductsReducer;