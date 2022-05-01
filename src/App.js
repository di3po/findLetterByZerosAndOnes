import './App.css';
import React from 'react';
import ListOfInputs from './components/ListOfInputs';

function App() {
  const styles = {
    row : {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'start',
      paddingRight: '50px',
      paddingLeft: '50px'
    },
  }

  //let result = ''
  const[result, setResult] = React.useState('')

  const letters = {
    a : '01100001',
    b : '01100010',
  }

  const [valueOfInput, setValueOfInput] = React.useState([
    {id: 1, title: undefined},
    {id: 2, title: undefined},
    {id: 3, title: undefined},
    {id: 4, title: undefined},
    {id: 5, title: undefined},
    {id: 6, title: undefined},
    {id: 7, title: undefined},
    {id: 8, title: undefined},
  ])

  function toggleValueOfInput(e) {
    //setValueOfInput(e)
    //console.log('changed', title)  
  }

  function sumValues() {
    let stringTitle = valueOfInput.map(a=>a.title).join('')
    console.log('stringTitle', stringTitle)
    console.log('valueOfInput', valueOfInput)
    if(Object.values(letters).find(l=>l===stringTitle)) {
      //let resVal = stringTitle
      setResult(Object.keys(letters).find(key=>letters[key]===stringTitle))
      console.log('found', Object.keys(letters).find(key=>letters[key]===stringTitle));
    } else {
      setResult('Sorry miss, nothing was found:(')
    }

    /* return resVal !=null ? setResult(Object.keys(letters).find(key=>letters[key]===resVal)) : setResult('nothing found') */
  }

  return (
    <div className="App">
      <header className="App-header" style={styles.row}>
        <div>
          <p>Select zone</p>
          <ListOfInputs values={valueOfInput} onToggle={toggleValueOfInput}/>
          <button onClick={sumValues}>Sum</button>
        </div>

        <div>
          <p>Character</p>
          <h5>{result}</h5>
        </div>
      </header>
    </div>
  );
}

export default App;
