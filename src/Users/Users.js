// @flow
import React, {Component} from 'react';
import {VerticalSpinner} from '../VerticalSpinner';
import {User} from './User';
import './Users.scss';

class Users extends Component {

  componentDidMount() {
    const {initUsers} = this.props;
    initUsers();
  }

  render() {
    const { users, updateUser, deleteUser } = this.props;
    if(!users) return null;

    const { isFetching, isError, list } = users;

    return (
        <div className="Users">
          {isFetching && <VerticalSpinner/>}
          {isError && <p>Error =(</p>}
          {list && list.length && !isError && (
              <ul className="Users__list fadeIn">
                {list.map(user =>
                  <User
                    {...user}
                    updateUser={updateUser}
                    deleteUser={deleteUser}
                    key={`${user.id}-${user.name}`}
                  />
                )}
              </ul>
          )}
        </div>
    );
  }
}



export {Users};