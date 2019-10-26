import React from 'react';
import './Node.css';
import PropTypes from 'prop-types';

const node = (props) => {
	const { id, color, size, x, y } = props;
	const dynamicStyle = {
		backgroundColor: color ? color : 'black',
		width: size ? size : 50,
		height: size ? size : 50,
		left: x,
		top: y
	}
	return (
		<div className='Node' style={dynamicStyle} key={id}>

		</div>
	)
}

node.propTypes = {
	id: PropTypes.number.isRequired,
	color: PropTypes.string,
	size: PropTypes.number,
	x: PropTypes.number.isRequired,
	y: PropTypes.number.isRequired,
}

export default node;
