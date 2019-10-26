import React from 'react';
import Graph from '../components/Graph/Graph';

function App() {
  return (
    <div className="App">
      <Graph nodes={[
        {x: 50, y: 50, label: 'A'},
        {x: 100, y: 100, label: 'B'},
        {x: 50, y: 100, label: 'C'},
        {x: 100, y: 50, label: 'D'}
      ]} edges={[
       { labelNode1: 'A',
        labelNode2: 'B'},
        { labelNode1: 'B',
         labelNode2: 'C'},
         { labelNode1: 'C',
          labelNode2: 'D'}
      ]}>

      </Graph>
    </div>
  );
}

export default App;
