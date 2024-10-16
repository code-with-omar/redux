// defining constants
const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"
const ADD_USER = "Hossain"
//State
const initialCounterState = {
    count: 0,
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


// 1. State
// 2. dispatch (action create korte hoy)
// 3. reducer (action er type er upor kaj kore)
// 4. store