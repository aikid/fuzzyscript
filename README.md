<h1 align="center">🔗fuzzyscript</h1>
<p align="center">Implementação do projeto de mestrado feito na universidade de campo limpo paulista, para poder realizar os testes descritos no artigo basta seguir as seguintes instruções:</p>

<h2 align="center">Preparando o Mongo DB</h1>
<p>✅ 1 - Faça o download do mongodb neste link: https://www.mongodb.com/try/download/community , após faça a instalação do mesmo.</p>
<p>✅ 2 - Faça o download do GUI do mongodb neste link: https://www.mongodb.com/pt-br/products/compass , após faça a instalçao do mesmo.</p>
<p>✅ 3 - Apos a instalação abra o terminal e digite o comando mongod no windows ou o comando necessário para iniciar o servidor do mongo no seu sistema operacional.</p>
<p>✅ 4 - Abra o programa MongoDB Compass Community e conecte-se pela string de conexão (por padrão ela vem configurada como: mongodb://localhost:27017).</p>
<p>✅ 5 - Após a conexão clique no botão verde escrito create database e crie uma database e uma collection. Por exemplo Database Name = fuzzyscript / Collection Name = users.</p>
<p>✅ 6 - Depois de criar database e a coleção, clique na coleção e dentro dela clique no botão Import Data e pegue o arquivo students.json localizado na raiz da pasta desse projeto, ele vai popular a coleção e com isso você poderá testar com o banco populado.</p>

<h2 align="center">Preparando a API</h1>
<p>✅ 1 - Faça o download do insomnia neste link: https://insomnia.rest/download , após faça a instalação do mesmo.</p>
<p>✅ 2 - Faça o download do node.JS neste link: https://nodejs.org/en/ , após faça a instalação do mesmo.</p>
<p>✅ 3 - Faça o download do yarn neste link: https://yarnpkg.com/getting-started/install , após faça a instalação do mesmo.</p>
<p>✅ 4 - Abra o terminal dentro da pasta da apie rode o comando yarn</p>
<p>✅ 5 - Apos instalar as dependências de o comando yarn dev</p>
<p>✅ 6 - Abra o insominia e teste as rotas existentes no arquivo de rotas e nos controlers</p>