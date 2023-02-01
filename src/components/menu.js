import ReactDOM from 'react-dom';
import Hoje from './hoje.js';
import Futuro from './futuro.js';

function menu() {

  function RenderizarHoje()
  {
    const rootElement = document.getElementById('content');
    ReactDOM.render(<Hoje />, rootElement);  
  }

  function RenderizarFuturo()
  {
    const rootElement = document.getElementById('content');
    ReactDOM.render(<Futuro />, rootElement);  
  }

  return (
    <div style={{display: 'flex', justifyContent: 'space-around', flexDirection: 'column', marginTop: '25px'}}>
      <button class="btn btn-outline-info" onClick={RenderizarHoje}>
          Previsão para hoje
      </button>
      <button class="btn btn-outline-info" onClick={RenderizarFuturo}>
          Previsão para 15 dias
      </button>
    </div>
  );
}

export default menu;//