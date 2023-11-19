const { createStore } = require("redux");
const { default: RootReducer } = require("../Reducers/RootReducer");

const store = createStore(RootReducer, {},
    window.window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;