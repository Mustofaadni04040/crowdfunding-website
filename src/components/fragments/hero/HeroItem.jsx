import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function HeroItem({ _id, imageUrl }) {
  return (
    <Link to="/donations">
      <img
        src={imageUrl}
        alt={_id}
        className="w-full sm:h-[300px] lg:h-[500px] object-center"
      />
    </Link>
  );
}

HeroItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  _id: PropTypes.number.isRequired,
};
