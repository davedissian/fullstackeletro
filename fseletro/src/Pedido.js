import React from 'react';

export default () =>
        <React.Fragment>
            <h2>Venda</h2>
            <form>
                Nome do cliente: <br/>
                <input type="text" name="nome"/><br/>
                Endereço: <br/>
                <input type="text" name="endereco"/><br/>
                Telefone: <br/>
                <input type="text" name="telefone"/><br/>
                Produto: <br/>
                <input type="text" name="produto"/><br/>
                Valor unitário: <br/>
                <input type="text" name="valor"/><br/>
                Quantidade: <br/>
                <input type="number" name="qtd"/><br/>
                <br/>
                <input type="submit" name="submit" value="Adicionar venda"/>
            </form>
        </React.Fragment>
    


