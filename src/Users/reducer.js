// @flow
import {InitialStateType} from './types';
import {FETCH_USERS, LOAD_USERS} from './constants';

const INITIAL_STATE: InitialStateType = {
  isFetching: false,
  isError: false,
  list: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case FETCH_USERS:
      return {
        ...state,
        isFetching: true,
        isError: false,
        list: []
      };

    case LOAD_USERS:
      return {
        ...state,
        isFetching: false,
        isError: false,
        list: action.payload
      };

    default:
      return state;
  }
}