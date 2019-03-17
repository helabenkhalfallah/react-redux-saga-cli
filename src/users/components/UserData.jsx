
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// functional & stateless component
const UserData = ({
  loading,
  error,
  data,
  onClick,
}) => {
  console.log('UserData loading : ', loading);
  console.log('UserData error : ', error);
  console.log('UserData data : ', data);

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
      <div>UserData</div>
      <button type="button" onClick={() => onClick()}>ClickMe</button>
    </Fragment>
  );
};

// prop types validation
UserData.propTypes = {
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
UserData.defaultProps = {
  data: null,
  error: null,
  loading: false,
  onClick: null,
};

export default UserData;
