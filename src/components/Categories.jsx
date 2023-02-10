import React from 'react';
import PropTypes from 'prop-types';

export default function Categories({ categories, onClickCat }) {
  return (
    <div>
      {categories?.map((category) => (
        <button
          type="button"
          key={ category.id }
          name={ category.name }
          data-testid="category"
          onClick={ () => onClickCat(category.id) }
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}

Categories.propTypes = {
  categories: PropTypes.arrayOf.isRequired,
  onClickCat: PropTypes.func.isRequired,
};
