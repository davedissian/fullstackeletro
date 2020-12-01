import React from 'react';
import './img/formas.jpg';
import './footer.css';

function Footer() {
    return(
        
        <footer className="footer">
            <hr/>
            <p>Formas de pagamento</p>
            <img src="/img/formas.jpg" class="formas" />
            <p class="">&copy; Dacorporation 2020</p>
        </footer>
    );    
}

export default Footer;