import React from 'react';

function State(props) {
  const states = props.passStates;
  return (
    <select>
      {
        states.map((state, index) => {
          return (
            <option key={index} value={state} >{state}</option>
          )
        })
      }
    </select>
  );
}

export default State;