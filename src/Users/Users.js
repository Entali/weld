import React, {Component} from 'react';
import {VerticalSpinner} from "../VerticalSpinner";
import './Users.scss';

class Users extends Component {

  componentDidMount() {
    const {initUsers} = this.props;
    initUsers();
  }

  render() {
    const { users: {isFetching, isError, list} } = this.props;

    return (
        <div className="Users">
          {isFetching ? <VerticalSpinner/> : <p>Users</p>}
        </div>
    );
  }
}

export {Users};