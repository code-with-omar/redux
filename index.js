const { createStore } = require("redux");

const ADD_USER = "ADD_USER"

const initialUser = {
    users: ["Omar"],
    count: 1,
};

const addUser = (user) => {
    return {
        type: ADD_USER,
        payload: user,
    };
};



const addUserReducer = (state = initialUser, action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                users: [...state.users, action.payload],
                count: state.count + 1,
            };
        default:
            state;
    }
};

const store = createStore(addUserReducer);

store.subscribe(() => {
    console.log(store.getState());
});


store.dispatch(addUser("faruk"));
store.dispatch(addUser("Motin"));
