const redux = require("redux");

const initial_value = {
  counter: 0,
};
// Create reducer
const reducer = (state = initial_value, action) => {
  let new_val = state;
  if (action.type === "INCREMENT") {
    new_val = { counter: state.counter + 1 };
  } else if (action.type === "DECREMENT") {
    new_val = { counter: state.counter - 1 };
  }
  return new_val;
};
//Create Store
const store = redux.createStore(reducer);

// Subscription flow
const subscriber = () => {
  const state = store.getState();
  console.log(state);
};

store.subscribe(subscriber);

// Dispatch flow
store.dispatch({ type: "DECREMENT" });
