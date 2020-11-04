import {clearText} from '../../utils';
import sprite from '../../images/sprites.svg';
import {images} from '../../images';

import React, {useState} from 'react';
import PropTypes from 'prop-types';
import ProductList from '../product-list/product-list';

const Product = (props) => {
  const {data, onProductClick} = props;
  const {cat} = images;

  const [productState, setProductState] = useState({
    isSelectedHover: false,
  });

  const {
    cardCat1xPng,
    cardCat2xPng,
    cardCat1xWebp,
    cardCat2xWebp,
  } = cat;

  const {
    id,
    isSelected,
    isDisabled,
    title,
    mark,
    markWarning,
    weight,
    items,
  } = data;

  const handleClick = (evt) => {
    evt.preventDefault();

    // На случай если поставили фокус и кликнули на карточку
    if (isSelected && productState.isSelectedHover) {
      setProductState({
        isSelectedHover: false,
      });
    }

    onProductClick(evt);
  };

  const handleMouseEnter = (evt) => {
    evt.preventDefault();

    setProductState({
      isSelectedHover: false,
    });
  };

  const handleMouseLeave = (evt) => {
    evt.preventDefault();
    document.activeElement.blur();

    if (isSelected) {
      setProductState((prevState) => ({
        isSelectedHover: !prevState.isSelectedHover,
      }));
    } else {
      setProductState({
        isSelectedHover: false,
      });
    }
  };

  const getProductClassNames = () => {
    const classNames = [];

    if (isSelected) {
      classNames.push('product--selected');
    }

    if (isDisabled) {
      classNames.push('product--disabled');
    }

    return classNames.join(' ');
  };

  const getSelectedHoverClass = () => {
    return productState.isSelectedHover ? 'product--selected-hover' : '';
  };

  return (
    <a
      className={`product ${getProductClassNames()} ${getSelectedHoverClass()}`}
      data-product-id={id}
      href="/"
      aria-label={`${title.big} ${title.small}`}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      tabIndex={isDisabled ? -1 : 0}
    >
      <div className="product__bg-decor">
        <svg className="product__bg-svg">
          <use xlinkHref={sprite + "#card-back"}/>
        </svg>
      </div>
      <div className="product__content-border">
        <div className="product__content">
          <div className="product__content-info">
            <div className="product__mark-wrap">
              {productState.isSelectedHover
                ? (<p className="product__mark product__mark--warning">{clearText(markWarning)}</p>)
                : (<p className="product__mark product__mark--default">{clearText(mark)}</p>)
              }
            </div>
            <div className="product__title-wrap">
              <h3 className="product__title">
                <span className="product__title--big">{clearText(title.big)}</span>
                <span className="product__title--small">{clearText(title.small)}</span>
              </h3>
            </div>
            <div className="product__list-wrap">
              <ul className="product__list">
                <ProductList id={id} items={items}/>
              </ul>
            </div>
          </div>
          <div className="product__bg-img-wrap">
            <picture>
              <source
                type="image/webp"
                srcSet={`${cardCat1xWebp}, ${cardCat2xWebp} 2x`}
              />
              <img
                className="product__bg-img"
                src={cardCat1xPng}
                srcSet={`${cardCat2xPng} 2x`}
                alt="Cat"
                draggable="false"
              />
            </picture>
          </div>
          <div className="product__weight-wrap">
            <b className="product__weight">
              <span className="product__weight-value">{weight.value}</span>
              <span className="product__weight--type">{weight.type}</span>
            </b>
          </div>
        </div>
      </div>
    </a>
  );
};

Product.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    isSelected: PropTypes.bool.isRequired,
    title: PropTypes.shape({
      big: PropTypes.string.isRequired,
      small: PropTypes.string.isRequired,
    }).isRequired,
    mark: PropTypes.string.isRequired,
    markWarning: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    weight: PropTypes.shape({
      value: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Product;

