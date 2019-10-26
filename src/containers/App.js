import React from 'react';
import Node from '../components/Graph/Node/Node';

function App() {
  return (
    <div className="App">
      <Node size={500} id={0} x={200} y={200} label='A' color='red'/> 
      <Node size={10} id={1} x={60} y={60} label='B' color='blue'/>
      {/* <Node size={15} id={15} x={2} y={30} color='blue' /> */}

    </div>
  );
}

export default App;
