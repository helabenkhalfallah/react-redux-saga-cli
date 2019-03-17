
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import UserDetailsForm from '../components/UserDetailsForm';
import UserDetailsHeader from '../components/UserDetailsHeader';

class UserDetailsPage extends Component {
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
        <span>UserDetailsPage</span>
        <UserDetailsForm
          loading={loading}
          data={data}
          error={error}
          onClick={item => this.customOnItemClick(item)}
        />
        <UserDetailsHeader
          loading={loading}
          data={data}
          error={error}
          onClick={item => this.customOnItemClick(item)}
        />
      </Fragment>
    );
  }
}

export default UserDetailsPage;
