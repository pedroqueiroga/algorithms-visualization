import React from 'react';
import classes from './Node.module.css';
import PropTypes from 'prop-types';

const DEFAULT_SIZE = 50;

const node = (props) => {
  let { id, color, size, x, y, selected, colorSelected, label, onClick } = props;

  if (!size) {
    size = DEFAULT_SIZE;
  }

  const dynamicStyle = {
    backgroundColor: color ? color : 'white',
    width: size,
    height: size,
    left: x - size / 2,
    top: y - size / 2
  };
  if (selected) {
    dynamicStyle.backgroundColor = colorSelected ? colorSelected : 'green';
  }
  return (
    <div className={classes.Node} style={dynamicStyle} key={id}
      onClick={props.onClick ? (event) => {
        event.stopPropagation();
        return onClick(label);
      } : null}>
      {label}
    </div>
  );
};

node.propTypes = {
  id: PropTypes.number.isRequired,
  color: PropTypes.string,
  size: PropTypes.number,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  label: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  onClick: PropTypes.func,
  selected: PropTypes.bool,
  colorSelected: PropTypes.string
};

export default node;
