import React from 'react';
import PropTypes from 'prop-types';

import Node from './Node/Node';
import Edge from './Edge/Edge';

const graph = (props) => {
	const { nodes, edges } = props;

	let nodesHash = {};

	nodes.forEach(node => {
		nodesHash[node.label] = {...node};
	})

	return (
		<div onClick={props.onClick ? props.onClick: null}
      onDrag={props.onDrag ? props.onDrag : null}
      onDragOver={(event) => {
        if (props.onDragOver) {
          props.onDragOver(event);
        } else if (props.onDrag) {
          props.onDrag(event);
        }
      }}
      >
			{nodes.map((node, idx) => <Node key={idx} label={node.label} x={node.x} y={node.y} size={30} />)}
			{edges.map((edge, idx) => <Edge key={idx}
				p1={{ x: nodesHash[edge.labelNodeFrom].x, y: nodesHash[edge.labelNodeFrom].y }}
				p2={{ x: nodesHash[edge.labelNodeTo].x, y: nodesHash[edge.labelNodeTo].y }}/>)}
		</div>
	)
}

graph.propTypes = {
	nodes: PropTypes.arrayOf(
		PropTypes.shape({ x: PropTypes.number, y: PropTypes.number, label: PropTypes.oneOf([PropTypes.number, PropTypes.string]) })
	),
	edges: PropTypes.arrayOf(
		PropTypes.shape({
			labelNodeFrom: PropTypes.string,
			labelNodeTo: PropTypes.string
		})
	),
	onClick: PropTypes.func,
	onClickNode: PropTypes.func,
  onDrag: PropTypes.func,
  onDragOver: PropTypes.func,
	onClickEdge: PropTypes.func
}
export default graph;
