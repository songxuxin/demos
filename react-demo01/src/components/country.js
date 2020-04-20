import React, {useState} from 'react';
import State from './state';

function Country(props) {
  const obj = props.passData;
  const [hasState, setCountryState] = useState([]);

  const clickHandler = (e) => {
    let country = e.target.value;
    let states = props.passData[country];
    setCountryState(states);
  }

  const state = hasState;
  return (
    <div >
      <select  onChange={(e) => clickHandler(e)}>
        <option value='null'> null </option>
        { Object.keys(obj).map((country, index) => {
          return (
            <option value={obj.country} key={index}>{country}</option>
          )
        })};
      </select>
      <State passStates={state}/>
    </div>
  );
}

export default Country;