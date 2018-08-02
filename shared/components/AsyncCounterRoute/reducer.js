import { fromJS } from 'immutable';

import { INCREMENT_COUNTER} from "./constants";

const InitialState = fromJS({
  counter: 0,
});

const counterReducer = (state = InitialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state.set('counter', (action.counter + 1));
    default:
      return state;
  }
};

export default counterReducer;