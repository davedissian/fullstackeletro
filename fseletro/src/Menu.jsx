import {Link} from 'react-router-dom';
import './Menu.css';
import './img/logo.png';

function Menu(){
    return(
        <nav>
            <ul className="navMenu">
            <Link className="menuItem" to="Home.js"><img src="/img/logo.png" width="220" /></Link>
            <Link className="menuItem" to="Produtos.js">Produtos</Link>
            <Link className="menuItem" to="Lojas.js">Lojas</Link>
            <Link className="menuItem" to="Contato.js">Fale conosco</Link>
            <Link className="menuItem" to="Pedido.js">Faça seu pedido</Link>
            </ul>
        </nav>

    );
}

export default Menu;