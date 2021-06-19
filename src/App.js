import logo from './logo.svg';
import './App.css';

function App() {
  const prueba = () => {
    const a = document.getElementById('prueba')
    a.classList.toggle('color')
    console.log('DIste un click sobre un enlace')
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          id="prueba"
          className="App-link"
          rel="noopener noreferrer"
          onClick={prueba}
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
