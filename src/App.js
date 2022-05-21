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
    A : '01000001',
    b : '01100010',
    B : '01000010',
    c : '01100011',
    C : '01000011',
    d : '01100100',
    D : '01000100',
    e : '01100101',
    E : '01000101',
    f : '01100110',
    F : '01000110',
    g : '01100111',
    G : '01000111',
    h : '01101000',
    H : '01001000',
    i : '01101001',
    I : '01001001',
    j : '01101010',
    J : '01001010',
    k : '01101011',
    K : '01001011',
    l : '01101100',
    L : '01001100',
    m : '01101101',
    M : '01001101',
    n : '01101110',
    N : '01001110',
    o : '01101111',
    O : '01001111',
    p : '01110000',
    P : '01010000',
    q : '01110001',
    Q : '01010001',
    r : '01110010',
    R : '01010010',
    s : '01110011',
    S : '01010011',
    t : '01110100',
    T : '01010100',
    u : '01110101',
    U : '01010101',
    v : '01110110',
    V : '01010110',
    w : '01110111',
    W : '01010111',
    x : '01111000',
    X : '01011000',
    y : '01111001',
    Y : '01011001',
    z : '01111010',
    Z : '01011010',
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
