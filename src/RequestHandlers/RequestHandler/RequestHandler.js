import axios from "axios";
import Request from "../Request/Request";
import { GetProductAction } from "../../Redux/Actions/ProductsActions";
import { UserAction, UserCartAction } from "../../Redux/Actions/UsersAction";
import { AlertAction } from "../../Redux/Actions/ComponentActions";
import { OrderConfirmationAction } from "../../Redux/Actions/OrderActions";

const userId = localStorage.getItem('userId');

export const LoginHandler = async (dispatch, navigate, userData) => {
    return new Promise((resolve, reject) => {
        axios.post(Request.USER_LOGIN, userData)
            .then((loginResponse) => {
                dispatch(UserAction(loginResponse.data));
                localStorage.setItem('userId', loginResponse.data?._id);
                navigate('/');
                resolve(null);
            })
            .catch((loginError) => {
                const errorMessage = loginError?.response?.data || 'An error occurred';
                reject(errorMessage); // Rejecting with the error message
            })
    })
}


export const UserSignupHandler = async (dispatch, navigate, userData) => {
    return new Promise((resolve, reject) => {
        axios.post(Request.USER_SIGNUP, userData)
            .then((response) => {
                localStorage.clear();                
                dispatch(UserAction(response.data?.user));
                localStorage.setItem('userId', response.data?.user?._id);
                navigate('/');
                resolve(null); // Resolving with null as there's no error
            })
            .catch((error) => {
                const errorMessage = error?.response?.data || 'An error occurred';
                reject(errorMessage); // Rejecting with the error message
            });
    });
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
            dispatch(AlertAction(true));
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

export const PlaceOrderHandler = async (dispatch, navigate, data) => {
    axios.post(Request.PLACE_ORDER, data)
        .then((orderResponse) => {
            dispatch(OrderConfirmationAction(orderResponse.data));
            navigate('/OrderConfirmation');
        })
        .catch((error) => {
            console.log('error in place order handler', error);
        })
}

export const GetAllOrderHandler = async (userId, dispatch) => {
    axios.get(Request.GET_ALL_ORDER + userId)
        .then((orderResponse) => {
            dispatch(OrderConfirmationAction(orderResponse.data))
        })
        .catch((error) => {
            console.log('error in getting all order handler', error);
        })
}

export const DeliveredOrderHandler = async (orderId, userId, dispatch, setOpen) => {
    await axios.put(Request.DELIVERED_ORDER + userId, { orderId: orderId })
        .then((response) => {
            if (response.data) {
                GetAllOrderHandler(userId, dispatch);
                setOpen(false);
            }
        })
        .catch((error) => {
            console.log('error in delivering order handler', error);
        })
}

export const DeleteOrderHandler = async (orderId, userId, dispatch, setOpen) => {
    await axios.put(Request.DELETE_ORDER + userId, { orderId: orderId })
        .then((response) => {
            if (response.data) {
                GetAllOrderHandler(userId, dispatch);
                setOpen(false);
            }
        })
        .catch((error) => {
            console.log('error in deleting order handler', error);
        })
}

export const GetUserOrderHandler = async (userId, setOrder) => {
    await axios.get(Request.GET_USER_ORDER + userId)
        .then((orderResponse) => {
            if (orderResponse.data) {
                setOrder(orderResponse.data);
                console.log(orderResponse.data);
            }
        })
        .catch((error) => {
            console.log('error in getting user order handler', error);
        })
}