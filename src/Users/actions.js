import {API_URL} from '../constants';
import {FETCH_USERS, LOAD_USERS, FAILED_USERS} from './constants';

function fetchUsers() {
  return {
    type: FETCH_USERS
  }
}

function loadUsers(payload) {
  return {
    type: LOAD_USERS,
    payload
  }
}

function failUsers(error) {
  return {
    type: FAILED_USERS,
    error
  }
}

export function initUsers() {
  return async dispatch => {
    dispatch(fetchUsers());

    try {
      let response = await fetch(`${API_URL}/users`);
      let users = await response.json();
      dispatch(loadUsers(users));
    } catch (e) {
      dispatch(failUsers(e));
    }
  };
}

