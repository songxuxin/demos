import React from 'react';
import './App.css';

import Country from './components/country';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        US: ["state1", "state2", "state3"],
        China: ["state4", "state5", "state6"],
        Indian: ["state7", "state8", "state9"]
      }
    }
  }
  render() {
    const { data } = this.state;
    // console.log(data.US)
    return (
      <div className="container">
        <div>
          <Country passData={data}/>
        </div>
      </div>
    )
  }
}

export default App;
