import React from 'react';
import PropTypes from 'prop-types';

const Main = (props) => {
  const {rentCount} = props;

  return (
    <div>{rentCount}</div>
  );
};

Main.propTypes = {
  rentCount: PropTypes.number.isRequired,
};

export default Main;
