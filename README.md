
## 1. Core concept
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


## 2. Counter App
```javascript
const { createStore } = require("redux");

const INCREMENT = "INCREMENT";
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

store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(decrementCounter());
store.dispatch(resetCounter());
```

## 3 Payload
```javascript
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
```