import React, {Component} from 'react';

class Users extends Component {

  componentDidMount() {
    const {initUsers} = this.props;
    initUsers();
  }

  render() {
    return (
        <div className="Users">
          Users
        </div>
    );
  }
}

export {Users};