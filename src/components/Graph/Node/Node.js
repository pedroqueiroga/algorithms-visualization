import React from 'react';
import './Node.css';
import PropTypes from 'prop-types';

const node = (props) => {
	let { id, color, size, x, y, label } = props;
	if (!size) size = 50;
	const dynamicStyle = {
		backgroundColor: color ? color : 'black',
		width: size,
		height: size,
		left: x - size/2,
		top: y - size/2
	}
	return (
		<div className='Node' style={dynamicStyle} key={id}>
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
