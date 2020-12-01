import React from 'react';

export default () =>
        <React.Fragment>
            <div class="container">
                    <br/>
                <div class="row">
                    <div class="col text-center">
                        <h4><img src="../img/email.png"/> contato@fullstackeletro.com.br</h4>
                    </div>
                    <div class="col text-center">
                        <h4><img src="../img/whats.png"/> (11)99999-0000</h4>
                    </div>
                </div>

                <center>
                    <form method="post" action="">
                        <h4>Nome: </h4>   
                        <input type="text" name="nome" style="width: 400px;"/>        
                        <h4>Email: </h4>  
                        <input type="email" name="email" style="width: 400px;"/>         
                        <h4>Mensagem: </h4>   
                        <textarea name="msg" style="width: 400px;"></textarea><br/>
                        <input type="submit" name="enviar" value="Enviar"/>
                    </form>
                </center>
            </div>
        </React.Fragment>

