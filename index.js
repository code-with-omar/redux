const { createStore } = require("redux");

const INCREMENT = "INCREMENT";
const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

const initialCounterState = {
    count: 0,
};

const incrementCounter = () => {
    return {
        type: INCREMENT,
    };
};
const incrementCounterByValue = (value) => {
    return {
        type: INCREMENT_BY_VALUE,
        payload: value
    };
};
const decrementCounter = () => {
    return {
        type: DECREMENT,
    };
};
const resetCounter = () => {
    return {
        type: RESET,
    };
};

const counterReducer = (state = initialCounterState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1,
            };
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1,
            };
        case INCREMENT_BY_VALUE:
            return {
                ...state,
                count: state.count + action.payload
            };
        case RESET:
            return {
                ...state,
                count: 0,
            };

        default:
            state;
    }
};

const store = createStore(counterReducer);

store.subscribe(() => {
    console.log(store.getState());
});

// store.dispatch(incrementCounter());
// store.dispatch(incrementCounter());
store.dispatch(incrementCounterByValue(5));
store.dispatch(incrementCounterByValue(20));
// store.dispatch(decrementCounter());
// store.dispatch(resetCounter());