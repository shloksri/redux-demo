const redux = require("redux");
const createStore = redux.createStore;

// implementing action
const BUY_CAKE = "BUY_CAKE";

// implementing action creator - a fn that returns an action

function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First Redux Action",
  };
}

//(previousState, action) => newState

const initialState = {
  numOfCakes: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      }; //here we are not changing the original object, we are returning a new object.

    default:
      return state;
  }
};

const store = createStore(reducer);
console.log("initial State: ", store.getState());
const unsubscribe = store.subscribe(() => console.log("Updated state: ", store.getState()));
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
unsubscribe();
