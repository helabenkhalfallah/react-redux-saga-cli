
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import withRedux from '../../commons/redux/withRedux';
import UserAddActionTypes from '../redux/actions/UserAddActionTypes';

import UserEditActionTypes from '../redux/actions/UserEditActionTypes';

import UserDeleteActionTypes from '../redux/actions/UserDeleteActionTypes';


class UserAddPage extends Component {
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
        <span>UserAddPage</span>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  userAdd: (state && state[0]) ? state[0].userAdd : null,
  userAddLoading: (state && state[0]) ? state[0].loading : false,
  userAddError: (state && state[0]) ? state[0].error : null,
  userEdit: (state && state[1]) ? state[1].userEdit : null,
  userEditLoading: (state && state[1]) ? state[1].loading : false,
  userEditError: (state && state[1]) ? state[1].error : null,
  userDelete: (state && state[3]) ? state[3].userDelete : null,
  userDeleteLoading: (state && state[3]) ? state[3].loading : false,
  userDeleteError: (state && state[3]) ? state[3].error : null,
});

const mapDispatchToProps = dispatch => ({
  submitUserAdd: user => dispatch({ type: UserAddActionTypes.USERADD_REQUEST, payload: user }),
  submitUserEdit: user => dispatch({ type: UserEditActionTypes.USEREDIT_REQUEST, payload: user }),
  submitUserDelete: user => dispatch({ type: UserDeleteActionTypes.USERDELETE_REQUEST, payload: user }),
});

export default withRedux(
  mapStateToProps,
  mapDispatchToProps,
  UserAddPage,
);
