import './App.css';
import React from 'react';
import ListOfInputs from './components/ListOfInputs';

function App() {
  const styles = {
    column: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    },
    greenButton: {
      padding: '15px',
      width: '100px',
      background: 'green',
      color: 'white',
      borderRadius: '10px',
    },
    redButton: {
      background: 'red',
      padding: '15px',
      width: '100px',
      color: 'white',
      borderRadius: '10px',
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

  const letters = {
    a : '01100001',
    b : '01100010',
  }
  
  let [result, setResult] = React.useState()

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
        if(v.id===e.id) {
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
      stringTitle === '' ? 
      setResult('Fields are empty')
      :
      setResult(`Nothing was found by: ${stringTitle}`)
    }
  }

  function clearAllFunc() {
    Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = "")
      );
    setValueOfInput(
      valueOfInput.map(v => {
        v.title=''
        return v
      })
    )
  }

  return (
    <div className="App">
      <header className="App-header" style={styles.rowMain}>
        <div style={styles.rowCenter}>
          <div>
            <p>Select zone</p>
            <ListOfInputs values={valueOfInput} onToggle={toggleValueOfInput}/>
          </div>
          <div style={styles.column}>
            <button style={styles.greenButton} onClick={sumValues}>Sum</button>
            <button style={styles.redButton} onClick={clearAllFunc}>Clear all</button>
          </div>
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
