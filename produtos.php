<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Produtos</title>
    <link rel="stylesheet" href="estilo.css">
    <script src="script.js"></script>
</head>

<body>
    <?php
    include("connect.php");
    ?>

    <?php
    include('cabecalho.html');
    ?>
    <aside class="categorias">
        <h4>Categorias</h4>
        <ul>
            <li onclick="exibirTodos()">Todos (12)</li>
            <li onclick="exibirCategoria('geladeira')">Geladeiras (4)</li>
            <li onclick="exibirCategoria('lavalouca')">Lava louças (1)</li>
            <li onclick="exibirCategoria('maqlavar')">Maquinas de lavar (2)</li>
            <li onclick="exibirCategoria('micro')">Microondas (3)</li>
            <li onclick="exibirCategoria('fogao')">Fogao (2)</li>
        </ul>
    </aside>
    <section id="produtos" class="produtos">
        <?php

        $sql = "select * from tbl_produtos";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            while ($rows = $result->fetch_assoc()) {
        ?>

                <div class="subproduto" id="<?php echo $rows["categoria"]; ?>" style="display:block;">
                    <img src="<?php echo $rows["imagem"]; ?>" width="120px" onmousemove="destaque(this)">
                    <h3><?php echo $rows["nome"]; ?> <?php echo $rows["descr"]; ?></h3>
                    <hr>
                    <h3><strike><?php echo $rows["desconto"]; ?></strike></h3>
                    <h3><?php echo $rows["preco"]; ?></h3>
                </div>
        <?php
            }
        } else {
            echo "Nenhum produto cadastrado - tabela vazia! ";
        }
        ?>
    </section>
    <?php
    include('rodape.html');
    ?>
</body>

</html>