## Descrição
BookLog é uma aplicação web para gerenciar registros de leitura e autenticação de usuários. Com uma parte em Node.js para gerenciamento de usuários e autenticação e uma parte em Flask dedicada ao gerenciamento de livros.

## Funcionalidades do Sistema de Login (Node.js)

### Estrutura Básica
- **Servidor Express**: Configuração básica de um servidor Express com CORS.
- **Conexão com Banco de Dados**: Utilização do MongoDB.
- **Rotas**: Definição e uso de rotas através do módulo `routes/router`, prefixadas com `/api`.

### Gerenciamento de Usuários
- **Criação**: Adição de novos usuários ao sistema com armazenamento.
- **Consulta**: Funcionalidade para buscar todos os usuários ou um usuário específico por ID.
- **Atualização**: Atualização dos dados de um usuário existente.
- **Exclusãos**: Remoção de um usuário do sistema pelo ID.
- **Autenticação**: Processo de login que verifica e-mail e senha, retornando mensagem de sucesso ou erro baseada na validade das credenciais.

### Interface de Login (Front-end)
- **Formulário de Login**: Implementação de um formulário de login que captura e-mail e senha.
- **Comunicação com API**: Envio de solicitações POST para o backend para autenticação, tratamento de respostas e redirecionamento do usuário para outra página em caso de sucesso ou exibição de mensagem de erro.

## Funcionalidades do Sistema de Gerenciamento de Livros (Flask)

### Configuração Básica
- **Servidor Flask**: Configuração inicial de um servidor Flask com SQLAlchemy para ORM.
- **Configuração do Banco de Dados**: Uso do SQLite como banco de dados.
- **Blueprints**: Organização das rotas relacionadas aos livros através de Blueprints para melhor modularização do código.

### Gerenciamento de Livros
- **Adicionar**: Inclusão de novos livros no banco de dados com campos para título, autor, gênero e avaliação média.
- **Listar**: Visualização de todos os livros cadastrados.
- **Atualizar**: Modificação das informações de um livro existente.
- **Excluir**: Remoção de um livro do sistema utilizando seu ID.

### Interface Web
- **Página Principal**: Exibição da página inicial.
- **Adicionar Livro**: Formulário para adicionar um novo livro e redirecionamento após o cadastro.
- **Listar Livros**: Mostra todos os livros cadastrados com uso de template para renderização.
- **Editar Livro**: Permite a edição de um livro, com formulário preenchido com os dados existentes e atualização após submissão.
- **Excluir Livro**: Realiza a exclusão de um livro e redireciona para a lista de livros.

### Tecnologias Utilizadas
- **Node.js e Express** para a parte de autenticação e gerenciamento de usuários.
- **Flask** para o servidor web na parte de gerenciamento de livros.
- **SQLAlchemy** para ORM.
- **SQLite e MongoDB** para banco de dados.
- **Jinja2** para templates.


Vídeo demonstração:
https://www.loom.com/share/59b26782563e40b689afe3cf929ee0ea?sid=c59027c9-b537-421f-a540-5b2f39e64c4c
