
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// functional & stateless component
const UserDetailsHeader = ({
  loading,
  error,
  data,
  onClick,
}) => {
  console.log('UserDetailsHeader loading : ', loading);
  console.log('UserDetailsHeader error : ', error);
  console.log('UserDetailsHeader data : ', data);

  // loading status
  if (loading) {
    // display loader
  }

  // error status
  if (error) {
    // display error notification
  }

  // render only if data
  return (
    <Fragment>
      <div>UserDetailsHeader</div>
      <button type="button" onClick={() => onClick()}>ClickMe</button>
    </Fragment>
  );
};

// prop types validation
UserDetailsHeader.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    // define data structure
  })),
  error: PropTypes.shape({
    // define error structure
  }),
  loading: PropTypes.bool,
  onClick: PropTypes.func,
};

// default props
UserDetailsHeader.defaultProps = {
  data: null,
  error: null,
  loading: false,
  onClick: null,
};

export default UserDetailsHeader;
