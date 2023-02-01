import ReactDOM from 'react-dom/client';
import Hoje from './hoje.js';
import Futuro from './futuro.js';

let root = null;

function menu() {

  function RenderizarHoje()
  {
    const rootElement = document.getElementById('content');
    root = ReactDOM.createRoot(rootElement); 

    root.render(<Hoje />);
  }

  function RenderizarFuturo()
  {
    const rootElement = document.getElementById('content');
    
    ReactDOM.createRoot(rootElement).render(<Futuro />); 
  }

  return (
    <div style={{display: 'flex', justifyContent: 'space-around', flexDirection: 'column', marginTop: '25px'}}>
      <button className="btn btn-outline-info" onClick={RenderizarHoje}>
          Previsão para hoje
      </button>
      <button className="btn btn-outline-info" onClick={RenderizarFuturo}>
          Previsão para 8 dias
      </button>
    </div>
  );
}

export default menu;//