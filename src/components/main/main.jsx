import React from 'react';
import Footer from '../footer/footer';
import InfoPanel from '../info-panel/info-panel';
import Navigation from '../navigation/navigation';
import Card from '../card/card';

const Main = () => (
  <div className="page">
    <main className="main">
      <Navigation />
      <InfoPanel />
      <Card />
    </main>
    <Footer />
  </div>
);

export default Main;
