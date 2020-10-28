<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Full Stack Eletro</title>
    <link rel="stylesheet" href="estilo.css">
</head>

<body>
    <?php
    include('cabecalho.html');
    ?>
    <!-- Poderia utilizar o include_once tambem, sendo que se fosse inserido esse código novamente na página, ele iria rodar apenas o primeiro, ou o require, que faz com que a página não rode caso o arquivo não exista ou esteja errado. -->
    <main>
        <h1>Seja bem vindo(a)!</h1>
        <p>Aqui em nossa loja, programadores tem desconto nos produtos para sua casa!</p>
    </main>
    <br><br><br><br>
    <br><br><br><br>
    <br><br><br><br>
    <?php
    include('rodape.html');
    ?>
</body>

</html>