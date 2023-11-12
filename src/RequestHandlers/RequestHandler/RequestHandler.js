import axios from "axios";
import Request from "../Request/Request";
import { GetProductAction } from "../../Redux/Actions/ProductsActions";
import { UserAction, UserCartAction } from "../../Redux/Actions/UsersAction";

const userId = localStorage.getItem('userId');

export const LoginHandler = async (dispatch, navigate, userData) => {
    axios.post(Request.USER_LOGIN, userData)
        .then((loginResponse) => {
            dispatch(UserAction(loginResponse.data));
            localStorage.setItem('userId', loginResponse.data?._id);
            navigate('/');
        })
        .catch((loginError) => {
            console.log('error in user login handler', loginError);
        })
}


export const GetProductHandler = async (dispatch) => {
    axios.get(Request.GET_PRODUCTS)
        .then((productResponse) => {
            dispatch(GetProductAction(productResponse.data));
        })
        .catch((productError) => {
            console.log('Error in get product handler', productError);
        })
}

export const UserSignupHandler = async (dispatch, navigate, userData) => {
    axios.post(Request.USER_SIGNUP, userData)
        .then((response) => {
            dispatch(UserAction(response.data?.user));
            localStorage.setItem('userId', response.data?._id);
            navigate('/');
        })
        .catch((error) => {
            console.log('Error in user sign up handler', error);
        })
}

export const GetUserByIdHandler = async (dispatch, navigate, id) => {
    axios.get(Request.GET_USER_BY_ID + id)
        .then((userResponse) => {
            dispatch(UserAction(userResponse.data));
            navigate('/');
        })
        .catch((userError) => {
            console.log('error in getting user by id handler', userError);
        })
}

export const AddToCartHandler = async (dispatch, data) => {
    axios.post(Request.ADD_TO_USER_CART, data)
        .then((addToCartResponse) => {
            if (addToCartResponse) {
                GetUserCartHandler(dispatch, data?.userId);
            }
        })
        .catch((addToCartError) => {
            console.log('error in add to cart handler ', addToCartError);
        })
}

export const GetUserCartHandler = async (dispatch, userId) => {
    axios.get(Request.GET_USER_CART + userId)
        .then((getUserCartResponse) => {
            dispatch(UserCartAction(getUserCartResponse.data));
        })
        .catch((error) => {
            console.log('error in getting user cart handler', error);
        })
}

export const AddCartQuantity = async (dispatch, cartId) => {
    axios.put(Request.ADD_CART_QUANTITY + cartId)
        .then((addCartResponse) => {
            GetUserCartHandler(dispatch, userId);
        })
        .catch((error) => {
            console.log('error in add cart quantity handler', error);
        })
}

export const RemoveCartQuantity = async (dispatch, cartId) => {
    axios.put(Request.REMOVE_CART_QUANTITY + cartId)
        .then((addCartResponse) => {
            GetUserCartHandler(dispatch, userId);
        })
        .catch((error) => {
            console.log('error in add cart quantity handler', error);
        })
}

export const DeleteCart = async (dispatch, cartId) => {
    axios.delete(Request.DELETE_CART + cartId)
    .then((deleteResponse) => {
        GetUserCartHandler(dispatch, userId);
    })
    .catch((error) => {
        console.log('error in delete cart handler', error);
    })
}