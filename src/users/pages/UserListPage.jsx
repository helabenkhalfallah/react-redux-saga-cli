
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import UserList from '../components/UserList';
import UserListRow from '../components/UserListRow';
import UserData from '../components/UserData';

import withRedux from '../../commons/redux/withRedux';
import UserListActionTypes from '../redux/actions/UserListActionTypes';


class UserListPage extends Component {
  // propsType (validation)
  static propTypes = {};

  // default props
  static defaultProps = {};

  // initial state
  state = {};

  // did mount staff
  componentDidMount() { }

  // custom actions
  // on user click action
  customOnItemClick = item => {
    console.log('customOnItemClick item: ', item);
    if (item) {
      // staff when item clicked
    }
  };


  // render
  render() {
    // replace this part with
    // props destructing :
    // const { data, error, loading} = this.props
    const data = null;
    const error = null;
    const loading = false;
    return (
      <Fragment>
        <span>UserListPage</span>
        <UserList
          loading={loading}
          data={data}
          error={error}
          onClick={item => this.customOnItemClick(item)}
        />
        <UserListRow
          loading={loading}
          data={data}
          error={error}
          onClick={item => this.customOnItemClick(item)}
        />
        <UserData
          loading={loading}
          data={data}
          error={error}
          onClick={item => this.customOnItemClick(item)}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  users: (state && state[2]) ? state[2].users : null,
  usersLoading: (state && state[2]) ? state[2].loading : false,
  usersError: (state && state[2]) ? state[2].error : null,
});


const mapDispatchToProps = dispatch => ({
  requestUserList: () => dispatch({ type: UserListActionTypes.USERLIST_REQUEST }),
});

export default withRedux(
  mapStateToProps,
  mapDispatchToProps,
  UserListPage,
);
