import ReactDOM from 'react-dom';
import Menu from './menu.js';

function hoje() {

    function menuPrincipal(){
        const rootElement = document.getElementById('content');
        ReactDOM.render(<Menu />, rootElement); 
    }

    return (
        <div style={{display: 'flex', justifyContent: 'space-around',flexDirection: 'column'}}>
        <div style={{fontSize: '1rem'}}>
            Previsão do tempo para hoje
        </div>
        <button class="btn btn-outline-info" onClick={menuPrincipal}>
            Voltar
        </button>
        </div>
    );
}

export default hoje;