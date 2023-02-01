import ReactDOM from 'react-dom/client';
import Menu from './menu.js';
import WheatherAPI from './wheatherAPI.js';

let root = null;

function hoje() {
    function menuPrincipal(){

        const rootElement = document.getElementById('content');
        root = ReactDOM.createRoot(rootElement);   
        
        root.render(<Menu />); 
    }

    return (
        <div style={{display: 'flex', justifyContent: 'space-around',flexDirection: 'column'}}>
        <div style={{fontSize: '1rem'}}>
            Previsão do tempo para hoje
        </div>
        {WheatherAPI()}
        <button className="btn btn-outline-info" onClick={menuPrincipal}>
            Voltar
        </button>
        </div>
    );
}

export default hoje;