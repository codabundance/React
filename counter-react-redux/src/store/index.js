import { createStore } from "redux";

const initial_value = {
  counter: 0,
  privacy: false,
};

const reducer = (store = initial_value, action) => {
  if (action.type === "INCREMENT") {
    return { ...store, counter: store.counter + 1 };
  }
  if (action.type === "DECREMENT") {
    return { ...store, counter: store.counter - 1 };
  }
  if (action.type === "ADD") {
    return { ...store, counter: store.counter + Number(action.number) };
  }
  if (action.type === "PRIVACY_TOGGLE") {
    return { ...store, privacy: !store.privacy };
  }
  return store;
};

const AppStore = createStore(reducer);
export default AppStore;
