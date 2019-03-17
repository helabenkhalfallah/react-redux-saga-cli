
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// functional & stateless component
const UserListRow = ({
  loading,
  error,
  data,
  onClick,
}) => {
  console.log('UserListRow loading : ', loading);
  console.log('UserListRow error : ', error);
  console.log('UserListRow data : ', data);

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
      <div>UserListRow</div>
      <button type="button" onClick={() => onClick()}>ClickMe</button>
    </Fragment>
  );
};

// prop types validation
UserListRow.propTypes = {
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
UserListRow.defaultProps = {
  data: null,
  error: null,
  loading: false,
  onClick: null,
};

export default UserListRow;
