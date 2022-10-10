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

<h2>Link para Visualização do Projeto</h2>

<a href="https://shopper-paulo.surge.sh/">
    https://shopper-paulo.surge.sh/
</a>

<h2>Tecnologias utilizadas</h2>

<h3>Frontend</h3>
<ul>
    <li>ReactJS</li>
    <li>Styled Components</li>
    <li>Axios</li>
    <li>React Router Dom</li>
</ul>

<h3>Backend</h3>
<ul>
    <li>NodeJS</li>
    <li>Typescript</li>
    <li>Knex</li>
    <li>Express</li>
    <li>CSV Parser</li>
    <li>MySQL</li>
</ul>

<h2>O que tem no projeto?</h2>

<h3 align="center">Frontend</h3>

<h3>Página de Formulário de Pedidos</h3>

<p>
    Nessa página existe um campo para preenchimento do nome do cliente, data da entrega do pedido e uma tabela que lista
    os produtos escolhidos pelo cliente, onde ele pode adicionar ou remover unidades de cada produto já adicionado. É
    também possível navegar diretamente para as páginas de Lista de Estoque e Lista de produtos através do menu,
    localizado na parte superior direita da página.
</p>

<div align="center">
    <img width="70%"
        src="https://user-images.githubusercontent.com/104540624/194856868-694ff50e-1f1f-4e0d-82a0-1a4daabb8349.png" />
</div>

<h3>Página de Lista de Estoque</h3>

<p>
    Nessa página existe uma tabela que contem todos os produtos existentes, fornecendo nome, preço unitario e quantidade
    que ainda tem no estoque, e é possível ordernar a tabela de forma Crescente e Decrescente clicando em "Produto",
    "Preço" ou "Quantidade" no topo da tabela.
</p>

<div align="center">
    <img width="70%"
        src="https://user-images.githubusercontent.com/104540624/194858384-fab6ce52-323b-48b8-98ac-e351b5f918a2.png" />
</div>

<h3>Página de Lista de Produtos</h3>

<p>
    Nessa página existe cards de todos os produtos existentes, um campo de busca do produto por nome e um botão que
    ordena os produtos pelo preço de forma Crescente e Decrescente, é possível adicionar e/ou remover os produtos
    através dessa página e ao chegar na quantidade máxima que existe no estoque o botão de adicionar não irá mais
    adicionar e mudará para "ESGOTADO".
</p>

<div align="center">
    <img width="70%"
        src="https://user-images.githubusercontent.com/104540624/194868399-e379726f-1548-4011-b106-a73dd049ea0a.png" />
</div>

<h3 align="center">Backend</h3>

<p>Foi criado uma API na qual existe duas endpoints, sendo uma para buscar todos os produtos e uma para cadastrar um
    novo pedido, onde é feito validações para não receber valores que estejam faltando ou de produtos que não existem no
    estoque ou não tem quantidade informada.</p>

<h3 align="right"> Feito por: Paulo Henrique Correa da Silva </h3>
