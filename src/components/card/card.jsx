import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {clearText} from '../../utils';
import Product from '../product/product';

const Card = (props) => {
  const {cardData} = props;
  const [cardState, setCardState] = useState({
    isSelected: cardData.isSelected,
  });

  const {
    id,
    isDisabled,
    description,
    disabledText,
  } = cardData;

  const {isSelected} = cardState;

  const handleClick = (evt) => {
    evt.preventDefault();

    if (isDisabled) {
      return;
    }

    // Изменяем сами данные
    cardData.isSelected = !cardData.isSelected;

    setCardState((prevState) => ({
      isSelected: !prevState.isSelected,
    }));
  };

  return (
    <article className={`card card--${id}`} data-card-id={id}>
      <div className="card__main-wrap">
        <Product data={cardData} onProductClick={handleClick}/>

        {(!isSelected && !isDisabled) && (
          <div className="card__sale-wrap">
            <p className="card__sale-text">Чего сидишь? Порадуй котэ,&nbsp;
              <a className="card__sale-link" href="/" onClick={handleClick}>
                <span className="card__sale-link--border">купи</span>.
              </a>
            </p>
          </div>
        )}

        {isSelected && (
          <div className="card__description-wrap">
            <p className="card__description">{clearText(description)}</p>
          </div>
        )}

        {isDisabled && (
          <div className="card__stock-wrap">
            <p className="card__stock-text">{clearText(disabledText)}</p>
          </div>
        )}
      </div>
    </article>
  );
};

Card.propTypes = {
  cardData: PropTypes.shape(
    {
      id: PropTypes.number.isRequired,
      isSelected: PropTypes.bool.isRequired,
      isDisabled: PropTypes.bool.isRequired,
      description: PropTypes.string.isRequired,
      disabledText: PropTypes.string.isRequired,
    }
  ).isRequired,
};

export default Card;
