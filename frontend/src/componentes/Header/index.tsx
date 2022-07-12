import logo from '../../../src/assets/img/logo.svg';
import './styles.css';

function Hearder() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                <h1>DSMeta</h1>
                <p>
                    Desenvolvido por 
                    <a href="https://github.com/Vinicius-Vieira-95"> Vinicius Vieira</a>
                </p>
            </div>
        </header>
    );
}

export default Hearder;