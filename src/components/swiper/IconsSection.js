/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const Icons = ({ title = '', thumbnailUrl = '', onIconClick }) => {
  const formatedTiltle = title.split(' ')[0];
  return (
    <div>
      <div onClick={onIconClick}>
        <img src={thumbnailUrl} alt={title} />
      </div>
      <p>{formatedTiltle}</p>
    </div>
  );
};

Icons.propTypes = {
  title: PropTypes.string,
  thumbnailUrl: PropTypes.string,
};

Icons.defaultProps = {
  title: '',
  thumbnailUrl: '',
};

export default Icons;
