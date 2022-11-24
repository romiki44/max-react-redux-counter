import { createStore } from 'redux';

const initialState = { counter: 0, showCounter: true };

//musia sa nasatvit vsetky polozky objektu, lebo redux nerobi merge state-objektu ale replacement!!!
//takisto nikdy sa nesmie priamo editovat state, napr. state.counter++ TOTO NIKDY NIE!!!!
const counterReducer = (state = initialState, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1, //NIE counter: state.counter++
      showCounter: state.showCounter,
    };
  }
  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1, //TAKISTO NIE counter: state.counter--
      showCounter: state.showCounter,
    };
  }
  if (action.type === 'increase') {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }
  if (action.type === 'toggle') {
    return {
      counter: state.counter,
      showCounter: !state.showCounter,
    };
  }
  return state;
};

const store = createStore(counterReducer);
//console.log(store.getState());

export default store;
