import {connect} from 'react-redux';
import {Users} from './Users';
import {initUsers, updateUser} from './actions';

function mapStateToProps({ users }) {
  return { users } || {};
}

const mapDispatchToProps = dispatch => ({
  initUsers: () => dispatch(initUsers()),
  updateUser: (id, userName) => dispatch(updateUser(id, userName)),
  deleteUser: id => dispatch(updateUser(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);