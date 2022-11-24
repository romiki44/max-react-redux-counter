//import { createStore } from 'redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = { counter: 0, showCounter: true };

//pouzitie redux/toolkit
//vytvori rez(slice) objektu state....
//tu je to abs. jednoduche, ale vo vacsich apkach je state zlozity
//a tym padom je dost komplikovane pracovat s celym state...preto slice/rez
const counterSlice = createSlice({
  name: 'counter', //nazov rezu
  initialState: initialState,
  //vsetky potrebne reducery pre tento slice..v podstate zodpovedaju reducerom nizsie
  //nie je potrebny type, lebo metoda zodpoveda type...cize nie je potrebny ani if{}
  //vsetky metody tiez autoamnticky dostanu posledny state
  //NAJDOLEZTEJSIE: TERAZ MOZEME MANIPULOVAT STATE!!!!
  //vraj sa vyuziva nejak kniznica, ktora na pozadi skopiruje state a prevedie zmeny tak, aby boli state priamo nemenil
  //TAKISTO AUTOMATICKY ZACHOVA VSETKY POLOZKY STATE
  //...cize netreba kopirovat cely objekt state, staci menit iba jednu polozku
  reducers: {
    increment(state) {
      state.counter++; //mutacia dovolena
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

//musia sa nasatvit vsetky polozky objektu, lebo redux nerobi merge state-objektu ale replacement!!!
//takisto nikdy sa nesmie priamo editovat state, napr. state.counter++ TOTO NIKDY NIE!!!!
/*const counterReducer = (state = initialState, action) => {
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
};*/

//const store = createStore(counterReducer);
//console.log(store.getState());

//da sa aj takto, ale potom problem s viacerymi slicami...pozor, store musi byt len jeden!
//problem s viacarymi sliceami sa da vyriesit cez combineReducer() ale lepesie uplne inak
//const store=createStore(counterSlice.reducer);

const store = configureStore({
  //ak viac slidov, takto sa daju namapovat
  //reducer: {counter: counterSlice.reducer }
  reducer: counterSlice.reducer, //ak iba jeden slice, potom takto
});

//toto je tiez zmena....netreba vymyslat nazvy actions, takto sa vztvoria automaticky
//pricom je zarucene ze budu jedinecne pre vsetky actions v slice!
export const counterActions = counterSlice.actions;

export default store;
