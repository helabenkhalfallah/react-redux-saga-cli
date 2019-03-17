
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// functional & stateless component
const UserDetailsForm = ({
  loading,
  error,
  data,
  onClick,
}) => {
  console.log('UserDetailsForm loading : ', loading);
  console.log('UserDetailsForm error : ', error);
  console.log('UserDetailsForm data : ', data);

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
      <div>UserDetailsForm</div>
      <button type="button" onClick={() => onClick()}>ClickMe</button>
    </Fragment>
  );
};

// prop types validation
UserDetailsForm.propTypes = {
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
UserDetailsForm.defaultProps = {
  data: null,
  error: null,
  loading: false,
  onClick: null,
};

export default UserDetailsForm;
