import logo from './logo.svg';
import './App.css';
import Pokemon from './components/Pokemon.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className='display-4'>Pokemon API</h1>
      </header>
      <Pokemon/>
    </div>
  );
}

export default App;
