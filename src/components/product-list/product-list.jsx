import React from 'react';
import PropTypes from 'prop-types';
import {clearText} from '../../utils';

const ProductList = (props) => {
  const {id, items} = props;

  const getProductListItems = () => {
    const getItemWithNum = (item) => (
      <p className="product__item-text">
        <span className="product__item-text--num">{item.num}</span>
        {clearText(item.text)}
      </p>
    );

    const getItemWithoutNum = (item) => (
      <p className="product__item-text">{clearText(item.text)}</p>
    );

    return items.map((item, index) => (
      <li key={`product-item_${id}_${index}`} className="product__item">
        {item.num ? getItemWithNum(item) : getItemWithoutNum(item)}
      </li>));
  };

  return (
    <ul className="product__list">
      {getProductListItems()}
    </ul>
  );
};

ProductList.propTypes = {
  id: PropTypes.number.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    num: PropTypes.number,
    text: PropTypes.string.isRequired,
  })).isRequired,
};

export default ProductList;
