import {connect} from 'react-redux';
import {Users} from './Users';
import {initUsers} from './actions';

function mapStateToProps({ users }) {
  return { users } || {};
}

const mapDispatchToProps = dispatch => ({
  initUsers: () => dispatch(initUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);