import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card/card';

const Cards = (props) => {
  const {cardsData} = props;

  return (
    <section className="cards">
      <div className="cards__wrap container">
        <div className="cards__title-wrap">
          <h2 className="cards__title">Ты сегодня покормил кота?</h2>
        </div>

        <div className="cards__list-wrap">
          <ul className="cards__list">
            {cardsData.map((cardData, index) => (
              <li key={`card_${index}`} className="cards__item">
                <Card cardData={cardData}/>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

Cards.propTypes = {
  cardsData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Cards;
