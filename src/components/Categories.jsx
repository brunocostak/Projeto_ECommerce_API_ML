import React from 'react';
import PropTypes from 'prop-types';

export default class Categories extends React.Component {
  render() {
    const { categories } = this.props;
    return (
      <div>
        {categories.map((category) => (
          <button
            type="button"
            key={ category.id }
            data-testid="category"
            onClick={ () => onClick(category.id) }
          >
            {category.name}
          </button>
        ))}
      </div>
    );
  }
}
Categories.propTypes = {
  categories: PropTypes.arrayOf.isRequired,
};
