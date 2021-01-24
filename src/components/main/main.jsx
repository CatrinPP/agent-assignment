import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Footer from '../footer/footer';
import InfoPanel from '../info-panel/info-panel';
import Navigation from '../navigation/navigation';
import Card from '../card/card';

const Main = ({company, contact}) => (
  <div className="page">
    <main className="main">
      <Navigation />
      <InfoPanel />
      <Card company={company} contact={contact}/>
    </main>
    <Footer />
  </div>
);

Main.defaultProps = {
  company: {},
  contact: {},
};

Main.propTypes = {
  company: PropTypes.object,
  contact: PropTypes.object,
};

export default connect(
  (state) => ({
    company: state.DataReducer.company,
    contact: state.DataReducer.contact,
  }),
)(Main);
