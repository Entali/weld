import {API_URL} from '../constants';

class APIModel {

  constructor(url) {
    this.url = url;
  }

  getUsers(url) {
    return fetch(`${API_URL}/${url}`, { method: 'GET' });
  }

  getUser(id) {
    return fetch(`${API_URL}/users/${id}`, { method: 'GET' });
  }

  createUser(user) {
    return fetch(`${API_URL}/users`, { method: 'PUT', body: user });
  }

  updateUser(id) {
    return fetch(`${API_URL}/users/${id}`, { method: 'POST' });
  }

  deleteUser(id) {
    return fetch(`${API_URL}/users/${id}`, { method: 'DELETE' });
  }
}

const API = new APIModel();

export {API};