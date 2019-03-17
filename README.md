# Project init with redux & saga
**project-init-with-redux-saga**

This script will install redux and saga dependencies and needed HOCs.

Script Execution : 
- go to project root folder
- chmod +x project-init-with-redux-saga.sh
- alias project-init-with-redux-saga='./project-init-with-redux-saga.sh'
- project-init-with-redux-saga


# Create feature
create-feature **feature-name**

This command will create a folder named : **feature-name**
The folder structure will be :
- pages
- components
- services
- commons

Script Execution : 
- go to project root folder
- chmod +x create-feature.sh
- alias create-feature='./create-feature.sh'
- create-feature **feature-name**

# Create Page
create-page -feature **feature** -page **page**

- Create page under feature.
- Add page to Routes.

Script Execution : 
- go to project root folder
- chmod +x create-page.sh
- alias create-page='./create-page.sh'

# Create Page With Components
create-page -feature **feature** -page **page** -components **CA CB**

- Create page under feature.
- Add page to Routes.
- Create page components and components tests files.
- Call components inside the page.

Script Execution : 
- go to project root folder
- chmod +x create-page.sh
- alias create-page='./create-page.sh'

**Example :**
create-page -feature users -page UserDetailsPage -components UserDetailsForm UserDetailsHeader

Routes.js :

```js
import UserDetailsPage from './users/pages/UserDetailsPage';
const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/UserDetailsPage" component={UserDetailsPage} />
      <Route exact path="/" component={App} />
    </Switch>
  </BrowserRouter>
);
```

UserDetailsPage.js: 

```js
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
```

UserDetailsForm.js :

```js
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
```

# Connect page to service
connect-page-to-service -feature **feature** -page **page** -service **service** -service-data **service-data** -query-type **post/get** -query-params **object-name**

connect-page-to-service -feature users -page UserListPage -service UserList -service-data users -query-type get

connect-page-to-service -feature users -page UserAddPage -service UserAdd -service-data user -query-type post -query-params user

Script Execution : 
- go to project root folder
- chmod +x connect-page-to-service.sh
- alias create-page='./connect-page-to-service.sh'

This script will create :

- redux actions :

```js
const USERLIST_REQUEST = 'USERLIST_REQUEST';
const USERLIST_SUCCESS = 'USERLIST_SUCCESS';
const USERLIST_FAILURE = 'USERLIST_FAILURE';

// export actions types
const UserListActionTypes = {
  USERLIST_REQUEST,
  USERLIST_SUCCESS,
  USERLIST_FAILURE,
};

export default UserListActionTypes;
```

- redux reducer :
```js
import UserListActionTypes from '../actions/UserListActionTypes';

// reducer with initial state
const initialState = {
  loading: false,
  users: null,
  error: null,
};

// UserList reducer
const UserListReducer = (state = initialState, action) => {
  console.log('UserListReducer action :', action);
  let newState = state;
  switch (action.type) {
    case UserListActionTypes.USERLIST_REQUEST:
      newState = {
        ...state,
        loading: true,
        error: null,
      };
      break;
    case UserListActionTypes.USERLIST_SUCCESS:
      newState = {
        ...state,
        loading: false,
        users: action.users,
      };
      break;
    case UserListActionTypes.USERLIST_FAILURE:
      newState = {
        ...state,
        loading: false,
        users: null,
        error: action.error,
      };
      break;
    default:
      newState = state;
  }

  console.log('UserListReducer newState :', newState);
  return newState;
};

export default UserListReducer;
```

- saga service & link reducer with yield and actionType :
```js
import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import UserListActionTypes from '../redux/actions/UserListActionTypes';

// change with your service Path
const USERLIST_SERVICE_PATH = 'service path';

// service query
const query = (baseUrl, params) => {
  // correct url
  const url = 'baseUrl/USERLIST_SERVICE_PATH';
  return axios.get(url, params);
};

// parse response
const parseResponse = response => {
  console.log('requestUserList parse response : ', response);
  return {
    error: null,
    data: null,
  };
};

// saga worker
export default function* requestUserList() {
  try {
    // get action payload
    // remove if not need
    const params = null;

    // get base url
    const baseUrl = '';

    // execute query
    const response = yield call(query, baseUrl, params);
    console.log('requestUserList response : ', response);

    // parse response
    const { error, data: users } = parseResponse(response);
    console.log('requestUserList error : ', error);
    console.log('requestUserList data : ', users);

    // update reducer with request status
    if (error) {
      yield put({ type: UserListActionTypes.USERLIST_FAILURE, error });
    } else {
      yield put({ type: UserListActionTypes.USERLIST_SUCCESS, users });
    }
  } catch (error) {
    // update reducer with request status
    console.log('requestUserList exception error : ', error);
    yield put({ type: UserListActionTypes.USERLIST_FAILURE, error });
  }
}
```

- add reducer to reducers root :
```js
import UserAddReducer from '../../users/redux/reducers/UserAddReducer';
import UserEditReducer from '../../users/redux/reducers/UserEditReducer';
import UserListReducer from '../../users/redux/reducers/UserListReducer';
import UserDeleteReducer from '../../users/redux/reducers/UserDeleteReducer';

const ReducerRoot = [
  UserAddReducer,
  UserEditReducer,
  UserListReducer,
  UserDeleteReducer,
];
```

- add service to saga root :
```js
import { all, takeEvery } from 'redux-saga/effects';
import UserAddService from '../../users/services/UserAddService';
import UserAddActionTypes from '../../users/redux/actions/UserAddActionTypes';
import UserEditService from '../../users/services/UserEditService';
import UserEditActionTypes from '../../users/redux/actions/UserEditActionTypes';
import UserListService from '../../users/services/UserListService';
import UserListActionTypes from '../../users/redux/actions/UserListActionTypes';
import UserDeleteService from '../../users/services/UserDeleteService';
import UserDeleteActionTypes from '../../users/redux/actions/UserDeleteActionTypes';

// add here all saga service root
export default function* rootSaga() {
  yield all([
    takeEvery(UserDeleteActionTypes.USERDELETE_REQUEST, UserDeleteService),
    takeEvery(UserListActionTypes.USERLIST_REQUEST, UserListService),
    takeEvery(UserEditActionTypes.USEREDIT_REQUEST, UserEditService),
    takeEvery(UserAddActionTypes.USERADD_REQUEST, UserAddService),

  ]);
}
```

- mapStateToProps & mapDispatchToProps in the page :
```js
const mapStateToProps = state => ({
  users: (state && state[2]) ? state[2].users : null,
  usersLoading: (state && state[2]) ? state[2].loading : false,
  usersError: (state && state[2]) ? state[2].error : null,
});

const mapDispatchToProps = dispatch => ({
  requestUserList: () => dispatch({ type: UserListActionTypes.USERLIST_REQUEST }),
});
```

- export page :
```js
export default withRedux(
  mapStateToProps,
  mapDispatchToProps,
  UserListPage,
);
```

# Issue (TODO)
When Page already contains mapStateToProps & mapDispatchToProps, it will create anothers mapStateToProps & mapDispatchToProps.

# Note
Each service has its own : reducer, action, service file.
