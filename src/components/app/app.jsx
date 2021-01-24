import React from 'react';
// import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Main} from '../main/main';
import {getAuthorizationStatus} from '../../reducer/user/selectors';
import { AuthorizationStatus } from '../../const';
import {Operation as DataOperation} from '../../reducer/data/data';

// import {Operation as UserOperation} from '../../reducer/user/user';
// import {Operation as DataOperation} from '../../reducer/data/data';
// import {getServerError} from '../../reducer/app/selectors';
// import {getLoadedState} from '../../reducer/data/selectors';

// const App = ({authorizationStatus, isLoaded, serverError}) => {
const App = ({authorizationStatus, loadCompanyData, loadContactData}) => {
  loadCompanyData();
  loadContactData();

  if (authorizationStatus === AuthorizationStatus.AUTH) {
    // DataOperation.loadCompany();
    // DataOperation.loadContact();
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path='/'
          render={() => (
            <Main authorizationStatus={authorizationStatus} />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

// if (!isLoaded && serverError) {
//   return (
//     <p>Ошибка</p>
//   );
// }

// if (!isLoaded) {
//   return (
//     <p>Пусто</p>
//   );
// }

//   return (
//     <BrowserRouter>
//       <Switch>
//         <Route
//           exact
//           path='/'
//           render={() => (
//             <Main authorizationStatus={authorizationStatus} />
//           )}
//         />
//       </Switch>
//     </BrowserRouter>
//   );
// };

App.propTypes = {
  // authorizationStatus: PropTypes.string.isRequired,
  // isLoaded: PropTypes.bool.isRequired,
  // serverError: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  // isLoaded: getLoadedState(state),
  // serverError: getServerError(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadCompanyData() {
    dispatch(DataOperation.loadCompany());
  },

  loadContactData() {
    dispatch(DataOperation.loadContact());
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
