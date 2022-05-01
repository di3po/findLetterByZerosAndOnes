import './App.css';
import React from 'react';
//import { useState } from 'react';
import ListOfInputs from './components/ListOfInputs';

function App() {
  const styles = {
    button: {
      padding: '15px',
      width: '100px',
      background: 'green',
      color: 'white',
      borderRadius: '10px'
    },
    hr: {
      height: '50vw'
    },
    justifyContentCenter: {
      justifyContent: 'center',
      width: '50%'
    },
    rowCenter: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '100px',
      width: '50%'
    },
    rowMain : {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'start',
    },
  }

  //let result = ''
  let [result, setResult] = React.useState('')

  const letters = {
    a : '01100001',
    b : '01100010',
  }

  let [valueOfInput, setValueOfInput] = React.useState([
    {id: 1, title: ''},
    {id: 2, title: ''},
    {id: 3, title: ''},
    {id: 4, title: ''},
    {id: 5, title: ''},
    {id: 6, title: ''},
    {id: 7, title: ''},
    {id: 8, title: ''},
  ])

  function toggleValueOfInput(e) {
    setValueOfInput(
      valueOfInput.map(v => {
        if(v.id==e.id) {
          v.title = e.title
        }
        return v
      })
    )
  }

  function sumValues() {
    let stringTitle = valueOfInput.map(a=>a.title).join('')
    console.log('stringTitle', stringTitle)
    console.log('valueOfInput', valueOfInput)
    if(Object.values(letters).find(l=>l===stringTitle)) {
      setResult(Object.keys(letters).find(key=>letters[key]===stringTitle))
      console.log('found', Object.keys(letters).find(key=>letters[key]===stringTitle));
    } 
    else {
      setResult('Sorry miss, nothing was found:(')
    }
  }

  return (
    <div className="App">
      <header className="App-header" style={styles.rowMain}>
        <div style={styles.rowCenter}>
          <div>
            <p>Select zone</p>
            <ListOfInputs values={valueOfInput} onToggle={toggleValueOfInput}/>
          </div>
          <button style={styles.button} onClick={sumValues}>Sum</button>
        </div>
        <hr style={styles.hr}/>
        <div style={styles.justifyContentCenter}>
          <p>Character</p>
          <h5>{result}</h5>
        </div>
      </header>
    </div>
  );
}

export default App;
