import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from '../main/main';
import { AuthorizationStatus } from '../../const';

import { AuthActions, DataActions } from '../../redux/actions';

class App extends React.Component {
  componentDidMount() {
    const { checkAuth } = this.props;
    checkAuth();
  }

  componentDidUpdate(prevProps) {
    const { authorizationStatus, loadCompanyData } = this.props;

    if (prevProps.authorizationStatus !== authorizationStatus && authorizationStatus === AuthorizationStatus.AUTH) {
      loadCompanyData();
    }
  }

  render() {
    const { authorizationStatus } = this.props;

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
  }
}

App.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  loadCompanyData: PropTypes.func.isRequired,
};

export default connect(
  (state) => ({
    authorizationStatus: state.AuthReducer.authorizationStatus,
  }),
  (dispatch) => ({
    checkAuth: () => {
      dispatch(AuthActions.checkAuth());
    },
    loadCompanyData: () => {
      dispatch(DataActions.loadCompanyData());
    },
  }),
)(App);
