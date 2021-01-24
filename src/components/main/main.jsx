import React from 'react';
// import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getCompany, getContact} from '../../reducer/data/selectors';
import Footer from '../footer/footer';
import InfoPanel from '../info-panel/info-panel';
import Navigation from '../navigation/navigation';
import Card from '../card/card';
import { AuthorizationStatus } from '../../const';

const Main = ({authorizationStatus, company, contact}) => {
  if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
    return <p>Требуется авторизация</p>;
  }

  return (
    <div className="page">
      <main className="main">
        <Navigation />
        <InfoPanel />
        <Card company={company} contact={contact}/>
      </main>
      <Footer />
    </div>
  );
};

// Main.defaultProps = {
//   company: {},
//   contact: {},
// };

// Main.propTypes = {
//   authorizationStatus: PropTypes.string.isRequired,
//   company: PropTypes.object,
//   contact: PropTypes.object,
// };

const mapStateToProps = (state) => ({
  company: getCompany(state),
  contact: getContact(state),
});

const mapDispatchToProps = () => ({});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
