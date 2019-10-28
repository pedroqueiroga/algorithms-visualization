import React from 'react';
import PropTypes from 'prop-types';

import classes from './Edge.module.css';

import Node from '../Node/Node';

const edge = props => {
  const { p1, p2 } = props;

  const edgeAbsolutePosition = () => {
    return { x: (p1.x + p2.x) / 2, y: (p1.y + p2.y) / 2 };
  };

  const dynamicStyle = () => {

    const edge = edgeAbsolutePosition();
    const width = Math.sqrt(Math.pow((p1.x - p2.x), 2) +
      Math.pow((p1.y - p2.y), 2));
    const angle = Math.atan2(p1.y - p2.y, p1.x - p2.x);

    return {
      width: width,
      height: 1,
      transform: `rotate(${angle}rad)`,
      backgroundColor: 'black',
      position: 'absolute',
      left: edge.x - width / 2,
      top: edge.y,
      zIndex: -1
    };
  };

  return (
		<div style={dynamicStyle()}>
		</div>
  );

};

edge.propTypes = {
  p1: PropTypes.shape({ x: PropTypes.number, y: PropTypes.number }).isRequired,
  p2: PropTypes.shape({ x: PropTypes.number, y: PropTypes.number }).isRequired,
  onClick: PropTypes.func
};

export default edge;
