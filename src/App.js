import logo from './logo.svg';
import './App.css';

async function App() {
  try {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;
    const url = 'https://172.105.66.77:5000/v1/api/portfolio/DU5001781/positions/0'
    const res = await fetch(url);
    const data = await res.json();//assuming data is json
    console.log(data)

  } catch (error) {

  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
