import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function HeroItem({ name, imageUrl }) {
  return (
    <Link to="/donasi">
      <img
        src={imageUrl}
        alt={name}
        className="w-full sm:h-[300px] lg:h-[500px] object-center"
      />
    </Link>
  );
}

HeroItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
