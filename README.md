# Redux Counter Example

This is a simple project that demonstrates the basic usage of Redux for state management in JavaScript. The project includes an example of a counter application where you can increment and decrement a count value. It also shows how to create actions, reducers, and a store using Redux.

## Features

- **Increment Counter**: Increase the count value by 1.
- **Decrement Counter**: Decrease the count value by 1.
- **Add User Action Example**: An action example that simulates adding a user to the state (though not implemented in the current reducer).

## Getting Started

### Prerequisites

To run this project, you'll need Node.js installed on your machine.

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

## Example Code

Here is an example of how to dispatch an action:

```javascript
store.dispatch(incrementCounter());
store.dispatch(decrementCounter());
