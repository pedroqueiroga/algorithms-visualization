import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

class VariableSizeContainer extends Component {
	state = {
		width: null,
		height: null
	};

	handleDrag = (event) => {
		const { minheight, minwidth, maxheight, maxwidth } = this.props;
		const thisNode = ReactDOM.findDOMNode(this);
		let offsetTop = thisNode.offsetTop;
		let offsetLeft = thisNode.offsetLeft;
		let height = event.clientY - offsetTop, width = event.clientX - offsetLeft;
		if (minheight) height = Math.max(minheight, height);
		if (minwidth) width = Math.max(minwidth, width);
		if (maxheight) height = Math.min(maxheight, height);
		if (maxwidth) width = Math.min(maxwidth, width);
		this.setState({ width, height });
		if (this.button) {
			this.button.style.position = 'absolute';	
			this.button.style.top = `${offsetTop + height}px`;
			this.button.style.left = `${offsetLeft + width}px`;
			this.button.style.marginLeft = '0px';
		}
		return;
	}

	render() {
		const { width, height } = this.state;
		
		let style = {
			width: width || 600,
			height: height || 300,
			borderWidth: 1,
			borderColor: 'black',
			borderStyle: 'solid'
		}

		if (this.props.style) {
			Object.keys(this.props.style).forEach( key => {
				if (key === 'width' || key === 'height') return;
				style[key] = this.props.style[key];
			})
		}

		return (
			<div style={{ width: 'fit-content', height: 'fit-content'}}>
				<div className='VariableSizeContainer' {...this.props} style={style}>
					{this.props.children}
				</div>
				<div ref={button => this.button = button}
					draggable
					style={{
						width: 30, 
						height: 30, 
						alignItems: 'center', 
						justifyContent: 'center',
						display: 'flex',
						borderRadius: '50%', 
						borderWidth: 1,
						borderColor: 'black',
						borderStyle: 'solid',
						transform: 'rotate(45deg)',
						marginLeft: '95%'
					}}
					onDrag={this.handleDrag}
					onDragEnd={this.handleDrag}>
					<FontAwesomeIcon  icon={faAngleRight}></FontAwesomeIcon >
				</div>
			</div>
		)
	}
}

VariableSizeContainer.propTypes = {
	initialWidth: PropTypes.number,
	initialHeight: PropTypes.number,
	minheight: PropTypes.number,
	minwidth: PropTypes.number,
	maxheight: PropTypes.number,
	maxwidth: PropTypes.number
}

export default VariableSizeContainer;