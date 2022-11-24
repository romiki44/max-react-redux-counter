import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../store/index';

import classes from './Counter.module.css';

const Counter = () => {
  //useSelector vyberie konkretnu polozku zo storu
  //zaroven component prihlasi ako subscriber
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);
  //useDispatch() vrati funkciu dispach()
  const dispatch = useDispatch();

  const incrementHandler = () => {
    //dispatch({ type: 'increment' });
    dispatch(counterActions.increment()); //pozor, treba zavolat fc, cize dat zatvorky!!!
  };

  const decrementHandler = () => {
    //dispatch({ type: 'decrement' });
    dispatch(counterActions.decrement()); //zatvorky-()!!!
  };

  const increaseHandler = () => {
    //dispatch({ type: 'increase', amount: 5 });
    dispatch(counterActions.increase(5)); //vytvori objekt payload: 10 ...teraz cislo, ale inac objekt
  };

  const toggleCounterHandler = () => {
    //dispatch({ type: 'toggle' });
    dispatch(counterActions.toggle()); //zatvorky-()!!!
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
