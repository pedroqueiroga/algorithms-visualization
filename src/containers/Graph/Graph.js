import React, { Component } from 'react';
import PropTypes from 'prop-types';

import GraphComponent from '../../components/Graph/Graph';
import classes from './Graph.module.css';
import Vector from '../../lib/geometry/Vector';

/**
 * Um container para interagir com um grafo.
 */

const DEFAULT_NODE_RADIUS = 25;

class Graph extends Component {
	state = {
		nodes: [],
		edges: [],
		isBidirectional: true,
		controller: {
			nodeInput: '',
			edgeInput: ''
		}
	}

	isCircularAreaFree = ({x, y}, radius) => {
		// check if there arent any nodes around,
		const nodePoints = this.state.nodes.map( node => new Vector(node.x, node.y));
		const point = new Vector(x, y);
		let hasNodesAround = nodePoints.filter(node => node.subtract(point).len() < radius).length > 0;
		// check if its not on a edge
		let upOnEdge = false

		return !hasNodesAround && !upOnEdge;
	}

	addNode = ({ label, x, y }) => {
		// check if label is unique
		if (this.labelExists(label)) {
			console.warn("You can't have 2 nodes with the same label");
			return false;
		}
		// check if (x, y) has a node in there already (?)
		const freeAreaRequiredRadius = DEFAULT_NODE_RADIUS*2+15;
		if (!this.isCircularAreaFree({ x, y }, freeAreaRequiredRadius)) {
			console.warn("You can't put a node on that position");
			return false;
		}
		// push to "set" of nodes
		let nodes = [...this.state.nodes];
		nodes.push({label, x, y});
		this.setState({ nodes });
	} 

	labelExists = (label) => this.state.nodes.filter( node => node.label === label).length > 0

	addEdge = (labelFrom, labelTo) => {
		// check if "self-edge"(?) -- not supported
		if (labelFrom === labelTo) {
			console.warn("You can't have auto arestas for now");
			return false;
		}

		// check labels existence
		if (!this.labelExists(labelFrom) || !this.labelExists(labelTo)) {
			console.warn("You're edge refers to a node not found");
			return false;
		}
		// push to "set" of edges
		let edges = [...this.state.edges];
		edges.push({ labelNodeFrom: labelFrom, labelNodeTo: labelTo })
		this.setState({ edges });
	}

	handleAddNode = () => {
		const nodeInput = this.state.controller.nodeInput;
		let xYLabel = nodeInput.trim().split(' ');
		if (xYLabel.length < 3) {
			return;
		}
		
		const x = Number.parseFloat(xYLabel[0]), y = Number.parseFloat(xYLabel[1]), label = xYLabel[2];
		this.addNode({ label, x, y })
	}

	handleAddEdge = () => {
		let edgeInput = this.state.controller.edgeInput;
		edgeInput = edgeInput.split(' ');
		if (edgeInput.length < 2) {
			return false;
		}
		let labelfrom = edgeInput[0], labelTo = edgeInput[1];
		this.addEdge(labelfrom, labelTo);
	}


	handleNodeFormChange = (event) => {
		let input = event.target.value;
		// validate input;
		this.setState({ controller: { ...this.state.controller, nodeInput: input }})
	}
	handleEdgeFormChange = (event) => {
		let input = event.target.value;
		this.setState({ controller: { ...this.state.controller, edgeInput: input }})
	}

	render() {
		const { name } = this.props;
		return (
			<div>
				<h3>{name}</h3>
				<input type="text" placeholder="Digite >>x y label" onChange={this.handleNodeFormChange}></input>
				<button onClick={this.handleAddNode}>Adicionar Nó</button>
				<input type="text" placeholder="Digite >>labelFrom labelTo" onChange={this.handleEdgeFormChange}></input>
				<button onClick={this.handleAddEdge}>Adicionar Aresta</button>
				<div style={{ display: 'flex', flexDirection: 'row'}}>
					<div className={classes.display}>
						<GraphComponent nodes={this.state.nodes}
							edges={this.state.edges}></GraphComponent>
					</div>
				</div>
			</div>
		);
	}
}

Graph.propTypes = {
	name: PropTypes.string,
}

export default Graph;