<div align="center">
    <img width="60px"
        src="https://user-images.githubusercontent.com/104540624/194852937-649efe6e-b0ad-42c1-b87a-96b2d847cc3b.png" />
</div>

<h1 align="center">Teste técnico do Processo Seletivo da Shopper</h1>

<h2>Objetivo</h2>

<p>
    Projeto tinha o proposito de elaborar um sistema Fullstack que contenha uma página de formulário de cadastro de
    pedidos onde era necessário um campo com o nome do cliente, data da entrega e uma lista de produtos escolhidos, uma
    página que seja possível visualizar o estoque dos produtos e uma forma de adicinar ou remover os produtos da lista
    de pedido.
</p>

<h2 align="center">Backend</h2>

<p>Foi criado uma API na qual existe duas endpoints, sendo uma para buscar todos os produtos e uma para cadastrar um
    novo pedido, onde é feito validações para não receber valores que estejam faltando ou de produtos que não existem no
    estoque ou não tem quantidade informada.</p>

<h2>Link para Visualização do Projeto</h2>

<h3> API </h3>

<a href="https://shopper-teste.herokuapp.com/">
    https://shopper-teste.herokuapp.com/
</a>

<h2>Tecnologias utilizadas</h2>

<ul>
    <li>NodeJS</li>
    <li>Typescript</li>
    <li>Knex</li>
    <li>Express</li>
    <li>CSV Parser</li>
    <li>MySQL</li>
</ul>

<h2>Como visualizar o projeto</h2>

<p>Comece clonando o projeto pelo console/terminal:</p>

``` bash
$ git clone https://github.com/phcsilva056/teste-shopper.git
```

<p>Certifique-se de estar dentro da pasta backend, caso não esteja utilize o comando:</p>

``` bash
$ cd backend
```

<p>Instale as dependências:</p>

``` bash
$ npm install
```

<p>Dentro da pasta backend crie um arquivo .env com os valores de seu banco de dados (por padrão está definido com
    MySQL):</p>

``` bash
$ printf "DB_HOST = (edite aqui e coloque o endereço host do banco de dados)\nDB_USER = (edite aqui e coloque o nome de
usuário do banco de dados)\nDB_PASSWORD = (edite aqui e coloque a senha do banco de dados)\nDB_DATABASE = (edite aqui e
coloque o nome do banco de dados)" >> .env
```

<h3>OU</h3>

<p>Se preferir fazer manualmente, crie um arquivo chamado .env e insira os valores abaixo:</p>

```
DB_HOST = (edite aqui e coloque o endereço host do banco de dados)
DB_USER = (edite aqui e coloque o nome de usuário do banco de dados)
DB_PASSWORD = (edite aqui e coloque a senha do banco de dados)
DB_DATABASE = (edite aqui e coloque o nome do banco de dados)
```

<p>Agora basta rodar para testar:</p>

``` bash
$ npm run dev
```

<p>Caso seu banco de dados esteja pronto para ser usado e seu .env tenha os valores inseridos, é possível povoar seu
    banco de dados com alguns valores utilizando o migrations:</p>

``` bash
$ npm run migrations
```

<p>Caso queira utilizar e modificar, fique à vontade!</p>

<h3 align="right"> Feito por: Paulo Henrique Correa da Silva </h3>
