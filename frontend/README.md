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

<h2 align="center">Frontend</h2>

<h3>Página de Formulário de Pedidos</h3>

<p>
    Nessa página existe um campo para preenchimento do nome do cliente, data da entrega do pedido e uma tabela que lista
    os produtos escolhidos pelo cliente, onde ele pode adicionar ou remover unidades de cada produto já adicionado. É
    também possível navegar diretamente para as páginas de Lista de Estoque e Lista de produtos através do menu,
    localizado na parte superior direita da página.
</p>

<h3>Página de Lista de Estoque</h3>

<p>
    Nessa página existe uma tabela que contem todos os produtos existentes, fornecendo nome, preço unitario e quantidade
    que ainda tem no estoque, e é possível ordernar a tabela de forma Crescente e Decrescente clicando em "Produto",
    "Preço" ou "Quantidade" no topo da tabela.
</p>

<h3>Página de Lista de Produtos</h3>

<p>
    Nessa página existe cards de todos os produtos existentes, um campo de busca do produto por nome e um botão que
    ordena os produtos pelo preço de forma Crescente e Decrescente, é possível adicionar e/ou remover os produtos
    através dessa página e ao chegar na quantidade máxima que existe no estoque o botão de adicionar não irá mais
    adicionar e mudará para "ESGOTADO".
</p>

<h2>Link do Deploy</h2>

<h3> Site </h3>
<a href="https://shopper-paulo.surge.sh/">
    https://shopper-paulo.surge.sh/
</a>

<h2>Tecnologias utilizadas</h2>

<ul>
    <li>ReactJS</li>
    <li>Styled Components</li>
    <li>Axios</li>
    <li>React Router Dom</li>
</ul>

<h2>Como visualizar o projeto</h2>

<p>Comece clonando o projeto pelo console/terminal:</p>

``` bash
$ git clone https://github.com/phcsilva056/teste-shopper.git
```
<p>Certifique-se de estar dentro da pasta frontend, caso não esteja utilize o comando:</p>

``` bash
$ cd frontend
```

<p>Instale as dependências:</p>

``` bash
$ npm install
```

<p>Agora basta rodar para testar:</p>

``` bash
$ npm run start
```

<strong>Caso queira adicionar seu deploy do backend ao projeto, insira o link base no arquivo baseURL.js que está localizado
    dentro de frontend/src/constants/baseURL.js e lá existe a constante Base_URL, basta substituir pelo seu link da
    deploy(deixe sem a "/" no final)</strong>

<p>Caso queira utilizar e modificar, fique à vontade!</p>

<h3 align="right"> Feito por: Paulo Henrique Correa da Silva </h3>
