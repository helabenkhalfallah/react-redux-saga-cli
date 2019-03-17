
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import withRedux from '../../commons/redux/withRedux';
import PhotoListActionTypes from '../redux/actions/PhotoListActionTypes';


class PhotosListPage extends Component {
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
        <span>PhotosListPage</span>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  photos: (state && state[4]) ? state[4].photos : null,
  photosLoading: (state && state[4]) ? state[4].loading : false,
  photosError: (state && state[4]) ? state[4].error : null,
});


const mapDispatchToProps = dispatch => ({
  requestPhotoList: () => dispatch({ type: PhotoListActionTypes.PHOTOLIST_REQUEST }),
});

export default withRedux(
  mapStateToProps,
  mapDispatchToProps,
  PhotosListPage,
);
