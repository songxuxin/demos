import React, { useState } from 'react';
import './App.css';

function App() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');

  const changesHandler = (e, name) => {
    let data = e.target.value;
    if (name === "user") {
      setUserName(data);
    }
    if (name === "password") {
      setPassword(data);
    }
  }

  const countUppercase = (str) => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (/[A-Z]/.test(str[i])) {
        count++;
      }
    }
    return count;
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (password.length != 8) {
      setErr('password should be 8 digits');
    }

    if (password.length === 8 && countUppercase(password)===3) {
      setErr('');
      console.log("logged in");
      console.log("user: ", userName, "password: ", password);
    } else {
      setErr('password should contain 3 uppercase');
    }

  }

  return (
    <div className="App">
      <form type='submit' onSubmit={(e) => submitHandler(e)}>
        user name:<input value={userName} onChange={(e) => changesHandler(e, "user")} />
        pasword: <input value={password} onChange={(e) => changesHandler(e, "password")} />
        <button type="submit">submit</button>
      </form>
      <div style={{ color: 'red', fontSize: '10px' }}>{err}</div>
    </div>

  );
}

export default App;
