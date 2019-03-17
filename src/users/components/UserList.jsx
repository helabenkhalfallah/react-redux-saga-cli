
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// functional & stateless component
const UserList = ({
  loading,
  error,
  data,
  onClick,
}) => {
  console.log('UserList loading : ', loading);
  console.log('UserList error : ', error);
  console.log('UserList data : ', data);

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
      <div>UserList</div>
      <button type="button" onClick={() => onClick()}>ClickMe</button>
    </Fragment>
  );
};

// prop types validation
UserList.propTypes = {
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
UserList.defaultProps = {
  data: null,
  error: null,
  loading: false,
  onClick: null,
};

export default UserList;
