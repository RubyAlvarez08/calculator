import Header from '../src/components/Header';
import '../src/App.css'
import InputBox from './components/InputBox';
import SelectTip from './components/SelectTip';
import OutputBox from './components/OutputBox';
//const iconImages = require.contex('../src/images')
function App() {
 
  return (
    <div className="app">
        <Header></Header>
        <main className="splitter-container">
          <section className="splitter-input">
           <InputBox name="Bill"></InputBox>
           <SelectTip></SelectTip>
            <InputBox name = "Number of People"></InputBox>
          </section>
          <section className="splitter-result">
            <OutputBox></OutputBox>
          </section>
        </main>    
    </div>
  );
}

export default App;
