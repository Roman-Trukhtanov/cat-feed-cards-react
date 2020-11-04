import React from 'react';
import PropTypes from 'prop-types';
import PageHeader from '../page-header/page-header';
import PageFooter from '../page-footer/page-footer';
import Cards from '../cards/cards';

function App(props) {
  const {cardsData} = props;

  return (
    <div className="app site-container">
      <PageHeader/>

      <main className="page-main">
        <div className="page-main__wrap">
          <Cards cardsData={cardsData}/>
        </div>
      </main>

      <PageFooter/>
    </div>
  );
}

App.propTypes = {
  cardsData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default App;
