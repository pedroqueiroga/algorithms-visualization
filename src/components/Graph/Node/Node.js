import React from 'react';
import classes from './Node.module.css';
import PropTypes from 'prop-types';

const DEFAULT_SIZE = 50;

const node = (props) => {
	let { id, color, size, x, y, label } = props;
	if (!size) size = DEFAULT_SIZE;
	const dynamicStyle = {
		backgroundColor: color ? color : 'white',
		width: size,
		height: size,
		left: x - size/2,
		top: y - size/2
	}
	return (
		<div className={classes.Node} style={dynamicStyle} key={id}>
			{label}
		</div>
	)
}

node.propTypes = {
	id: PropTypes.number.isRequired,
	color: PropTypes.string,
	size: PropTypes.number,
	x: PropTypes.number.isRequired,
	y: PropTypes.number.isRequired,
	label: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
}

export default node;
