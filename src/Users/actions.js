import {API} from './api';
import {
  FETCH_USERS, LOAD_USERS, LOAD_USER, FAILED_USERS
} from './constants';

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

function loadUser(payload) {
  return {
    type: LOAD_USER,
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
      let response = await API.getUsers('users');
      let users = await response.json();

      // This counter is only to show you a fancy loading )
      setTimeout(() => {
        dispatch(loadUsers(users));
      }, 7000);
    } catch (e) {
      dispatch(failUsers(e));
    }
  };
}

export function updateUser(id, userName) {
  return async dispatch => {
    try {
      let response = await API.updateUser(id, userName);
      let user = await response.json();
      dispatch(loadUser(user));
    } catch (e) {
      console.error('Error', e);
    }
  };
}

export function deleteUser(id) {
  return async dispatch => {
    try {
      API.deleteUser(id);
    } catch (e) {
      console.error('Error', e);
    }
  };
}

