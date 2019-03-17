import { connect } from 'react-redux';

const withRedux = (mapStateToProps, mapDispatchToprops, WrappedComponent) => connect(
  mapStateToProps,
  mapDispatchToprops,
)(WrappedComponent);

export default withRedux;
