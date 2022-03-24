import React, { useState } from 'react';
import Header from '../src/components/Header';
import '../src/App.css'
import InputBox from './components/InputBox';
import SelectTip from './components/SelectTip';
import OutputBox from './components/OutputBox';
//const iconImages = require.contex('../src/images')
function App() {
  const [enteredBill, setEnteredBill] = useState('');
  const [enteredNumberOfPeople, setEnteredNumberOfPeople] = useState('');
  
  const billChangeHandler = event =>{ 
    setEnteredBill(event.target.value);

  }
  const numberOfPeopleChange = event =>{
    setEnteredNumberOfPeople(event.target.value)
  }
  
  return (
    <div className="app">
        <Header></Header>
        <main className="splitter-container">
          <section  className="splitter-input">
           <InputBox name="Bill"
                     value={enteredBill} 
                     onChange={billChangeHandler}
            />
           <SelectTip/>
            <InputBox name = "Number of People"
                      value={enteredNumberOfPeople}
                      onChange={numberOfPeopleChange}
                      
            />
          </section>
          <section className="splitter-result">
            <OutputBox/>
          </section>
        </main>    
    </div>
  );
}

export default App;
