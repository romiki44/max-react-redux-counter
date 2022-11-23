import { Component } from 'react';
import { connect } from 'react-redux';
import Counter from './Counter';
import classes from './Counter.module.css';

//pouzitie redux v class-komponentoch!!
class CCounter extends Component {
  incrementHandler() {
    this.props.increment();
  }

  decrementHandler() {
    this.props.decrement();
  }

  toggleCounterHandler() {}

  render() {
    //incrementHandler(), decrementHandler()...mne to funguje aj bez bind(this)!
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div>
          <button onClick={this.incrementHandler.bind(this)}>Increment</button>
          <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
        </div>
        <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
      </main>
    );
  }
}

//*****
//kedze sa neda pouzit hooks, treba pouzit nasledovny postup:
//*****

//namiesto useSelector() sa namapuje state-polozka na props componentu
const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

//ekvivalent useDispatch
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: 'increment' }),
    decrement: () => dispatch({ type: 'decrement' }),
  };
};

//a takto sa to cele namapuje na pouzitie v komponente + vytvori subscription!!
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
