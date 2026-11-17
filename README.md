# Portal Universitário

Sistema web acadêmico desenvolvido como projeto de estudo, com o objetivo de disponibilizar ao aluno acesso às suas informações acadêmicas.

## Funcionalidades

- Login do aluno utilizando RA e senha.
- Autenticação de usuários com senhas protegidas por hash (bcrypt).
- Controle de sessão.
- Área restrita do aluno.
- Consulta de informações acadêmicas.
- Encerramento de sessão (logout).
- Layout responsivo para diferentes tamanhos de tela.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- Node.js
- Express
- MySQL
- MySQL Workbench
- Git e GitHub

## Estrutura do projeto

```text
portal-universitario/
├── privado/
│   └── aluno.html
├── public/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   ├── aluno.js
│   │   └── login.js
│   └── index.html
├── server/
│   ├── cadastrarAlunos.js
│   ├── consultarAluno.js
│   ├── db.js
│   └── server.js
├── portal_universitario.sql
├── .gitignore
├── package.json
└── README.md
```

## Como executar o projeto

### 1. Pré-requisitos

- Node.js instalado.
- MySQL instalado.
- MySQL Workbench (opcional, para executar e visualizar o banco de dados).

### 2. Clonar o repositório

```bash
git clone https://github.com/kcarloshl/portal-universitario.git
```

### 3. Entrar na pasta do projeto

```bash
cd portal-universitario
```

### 4. Instalar as dependências

```bash
npm install
```

### 5. Configurar o banco de dados

Execute o script `portal_universitario.sql` no MySQL Workbench para criar o banco de dados e a tabela de alunos.

### 6. Configurar as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
DB_HOST=localhost
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=portal_universitario
DB_PORT=3306
SESSION_SECRET=sua_chave_de_sessao
```

Substitua os valores pelos dados da sua instalação do MySQL e utilize uma chave própria para a sessão.

### 7. Iniciar o servidor

```bash
node server/server.js
```

Depois, acesse no navegador:

```text
http://localhost:3000
```

## Observações

Este projeto está em desenvolvimento e poderá receber novas funcionalidades ao longo de sua implementação.