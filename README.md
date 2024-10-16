

### Installation

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/your-username/redux-counter-example.git
    ```

2. Navigate to the project directory:

    ```bash
    cd redux-counter-example
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

### Running the Project

1. Run the application with Node.js:

    ```bash
    node index.js
    ```

2. You should see the initial state and state changes logged in the console as actions are dispatched.

## Project Structure

- **index.js**: Contains the core logic for the Redux counter, including action creators, reducer, and store setup.
- **State**: The initial state for the counter (`initialCounterState`) holds a count value starting at 0 and a name ("JavaScript").
- **Actions**: Defined actions for incrementing, decrementing, and adding a user.
- **Reducer**: The reducer handles the actions to modify the state based on the action type.
- **Store**: The Redux store is created using the reducer, and the application subscribes to state changes.

## Actions

The following actions are available in this project:

- `INCREMENT`: Increases the count value by 1.
- `DECREMENT`: Decreases the count value by 1.
- `ADD_USER`: Adds a user to the state (this action is defined but not implemented in the current reducer).

## Core concept
i. defining constants

```javascript
const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"
const ADD_USER = "Hossain"
```
ii.State define
```javascript
const initialCounterState = {
    count: 0,
    name: "JavaScript"
}

const initialUserState = {
    users: [{
        name: "Md. Omar Faruk"
    }]
}
```
iii.Action is a object-object may be two
    1.One is type
    2.payload
```javascript
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
```
iv.Create reducer for counter
```javascript
const counterReducer = (state = initialCounterState, action) => {
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
```
v. createStore method is create for hold out state. That are have three important method
    1. getState(): This method retrieves the current state of the store.
    2. dispatch(): This is used to send actions to the store. 
    3. subscribe(): This function allows you to listen for state changes. 
```javascript
const store = createStore(counterReducer)
store.subscribe(() => {
    console.log(store.getState())
  
})
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(decrementCounter())
```
