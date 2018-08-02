import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


import {incrementCounter} from "./actions";
import {makeSelectCounter} from "./selectors";

import CounterRoute from './CounterRoute';

const mapDispatchToProps = dispatch => ({
  onIncrementCounter: counter => dispatch(incrementCounter(counter)),
});

const mapStateToProps = createStructuredSelector({
  counter: makeSelectCounter(),
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterRoute);
