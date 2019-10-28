import React from 'react';
import Graph from './Graph/Graph';
import VariableSizeContainer from '../components/UI/Containers/VariableSizeContainer';

function App() {

  return (
    <div className="App">
      <VariableSizeContainer minwidth={600}
        minheight={300}
        maxwidth={800}
        maxheight={800}>
        <Graph name="G1">
        </Graph>
      </VariableSizeContainer>
    </div>
  );
}

export default App;
