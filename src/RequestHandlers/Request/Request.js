const url = 'http://localhost:5000';

const Request = {
    GET_PRODUCTS : url + '/product',
    PRODUCT_IMAGE : url + '/Images/',
    USER_LOGIN : url + '/user/login',
    USER_SIGNUP : url + '/user/signup',
    GET_USER_BY_ID : url + '/user/',
    ADD_TO_USER_CART : url + '/cart/',
    GET_USER_CART : url + '/cart/',
    ADD_CART_QUANTITY: url + '/cart/AddQuantity/',
    REMOVE_CART_QUANTITY: url + '/cart/RemoveQuantity/',
    DELETE_CART : url + '/cart/',
    PLACE_ORDER : url + '/order/',
    GET_ALL_ORDER : url + '/order/',
    DELIVERED_ORDER : url + '/order/',
    DELETE_ORDER : url + '/order/delete/'
}

export default Request;