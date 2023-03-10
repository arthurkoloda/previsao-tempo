import logo from './logo.svg';
import foreacast_icon from './img/forecast_icon.png';
import './App.css';
import Menu from './components/menu.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img id="logoImg" src={foreacast_icon} className="App-logo" alt="logo" />
          Previsão do tempo - Mallet/PR
        <div id="content">
            <Menu />
        </div>
      </header>
    </div>
  );
}

export default App;