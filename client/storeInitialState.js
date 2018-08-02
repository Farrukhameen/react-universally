import { fromJS } from 'immutable';

const initialState = {
  route: {
    location: {
      pathname: '/',
      search: '',
      hash: '',
      state: null,
    },
  },
  counter: {
    counter: 0,
  },
};
export default fromJS(initialState);
