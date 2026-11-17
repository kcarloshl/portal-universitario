# 🎓 Portal Universitário

Sistema web acadêmico desenvolvido como projeto de estudo, utilizando Node.js, Express e MySQL.

O objetivo é desenvolver um portal no qual estudantes possam realizar login e consultar suas informações acadêmicas de maneira simples e organizada.

## 📌 Funcionalidades implementadas

- [x] Login de alunos utilizando RA e senha.
- [x] Autenticação com senhas protegidas por hash utilizando bcrypt.
- [x] Gerenciamento de sessões com express-session.
- [x] Proteção de acesso à área do aluno.
- [x] Consulta de informações acadêmicas.
- [x] Exibição dos dados do aluno após o login.
- [x] Encerramento de sessão (logout).
- [x] Interface responsiva para dispositivos móveis.

## 🖥️ Tecnologias utilizadas

**Frontend**
- HTML5
- CSS3
- JavaScript

**Backend**
- Node.js
- Express.js
- Express Session
- Bcrypt

**Banco de dados**
- MySQL
- MySQL Workbench

**Ferramentas**
- Visual Studio Code
- Git
- GitHub

## 🗄️ Banco de dados

O projeto utiliza o banco de dados `portal_universitario`, com a tabela `alunos`.

| Campo | Descrição |
|---|---|
| ra | Registro acadêmico do aluno |
| senha_hash | Senha armazenada em formato de hash |
| nome | Nome do aluno |
| curso | Curso matriculado |
| periodo | Período atual do curso |
| email | E-mail do aluno |
| situacao | Situação da matrícula |

O script SQL para criação do banco de dados está disponível no arquivo `portal_universitario.sql`.

## 🔐 Segurança

O projeto utiliza alguns mecanismos básicos de segurança:

- Senhas armazenadas com hash utilizando bcrypt.
- Autenticação por sessão.
- Rotas protegidas para impedir o acesso não autenticado à área do aluno.
- Variáveis de ambiente para armazenar configurações sensíveis.
- Arquivo `.env` excluído do controle de versão pelo `.gitignore`.

## 📁 Estrutura do projeto

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
├── package-lock.json
└── README.md
```

## ⚙️ Como executar o projeto

### 1. Pré-requisitos

- Node.js instalado.
- MySQL instalado.
- Git instalado.

### 2. Clonar o repositório

```bash
git clone https://github.com/kcarloshl/portal-universitario.git
```

### 3. Entrar na pasta

```bash
cd portal-universitario
```

### 4. Instalar as dependências

```bash
npm install
```

### 5. Configurar o banco de dados

Execute o arquivo `portal_universitario.sql` no MySQL Workbench.

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

Preencha com as configurações da sua instalação do MySQL e uma chave própria para as sessões.

### 7. Iniciar o servidor

```bash
node server/server.js
```

### 8. Acessar o sistema

Abra o navegador e acesse:

http://localhost:3000

## 🚧 Melhorias futuras

Algumas funcionalidades que poderão ser implementadas posteriormente:

- Cadastro e gerenciamento de disciplinas.
- Consulta de notas e frequência.
- Visualização da grade curricular.
- Histórico acadêmico.
- Edição de informações cadastrais.

## 👨‍💻 Autor

Desenvolvido como projeto de estudo na área de desenvolvimento web.

**GitHub:** [@kcarloshl](https://github.com/kcarloshl)

## 📄 Licença

Projeto desenvolvido para fins educacionais.
