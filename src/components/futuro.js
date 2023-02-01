import ReactDOM from 'react-dom/client';
import Menu from './menu.js';

function hoje() {

    function menuPrincipal(){
        const rootElement = document.getElementById('content');

        if(ReactDOM.isValidContainer(rootElement)) {
            rootElement.render(<Menu />);
        }
        else {
            ReactDOM.createRoot(rootElement).render(<Menu />);
        }
    }

    return (
        <div style={{display: 'flex', justifyContent: 'space-around',flexDirection: 'column'}}>
        <div style={{fontSize: '1rem'}}>
            Previsão do tempo para 8 dias
        </div>
        <button className="btn btn-outline-info" onClick={menuPrincipal}>
            Voltar
        </button>
        </div>
    );
}

export default hoje;