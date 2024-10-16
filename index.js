// defining constants
const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"
const ADD_USER = "Hossain"
//State
const initialCounterState = {
    count: 0,
    name: "JavaScript"
}

const initialUserState = {
    users: [{
        name: "Md. Omar Faruk"
    }]
}
//action is a object-object may be two. One is type another is payload 
const incrementCounter = () => {
    return {
        type: INCREMENT
    }
}
const decrementCounter = () => {
    return {
        type: DECREMENT
    }
}

const addUser = (user) => {
    return {
        type: ADD_USER,
        payload: user
    }
}

// create reducer for counter

const counterReducer = (state = initialUserState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }
        default:
            state
            break;

    }
}
// 1. State
// 2. dispatch (action create korte hoy)
// 3. reducer (action er type er upor kaj kore)
// 4. store