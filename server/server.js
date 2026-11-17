require("dotenv").config();

const express = require("express");
const path = require("path");
const session = require("express-session");

const conexao = require("./db");
const bcrypt = require("bcrypt");

const app = express();
const PORT = 3000;

// configura as sessões
app.use(session({
    secret: process.env.SESSION_SECRET, //chave para assinar a sessão
    resave: false, // evita salvar novamente as sessões sem alterações
    saveUninitialized: false, // não cria sessões vazias

    cookie: {
        httpOnly: true, // impede o acesso ao cookie pelo JS do navegador
        secure: false, // permite cookie em HTTP durante o desenvolvimento local
        maxAge: 1000 * 60 * 30 // define duração do cookie em 30 minutos
    }
}));

// Disponibiliza os arquivos da pasta public
app.use(express.static(path.join(__dirname, "../public")));

app.use(express.json()); // permite receber dados json

//verifica se aluno está autenticado
function verificarAutenticacao(req, res, next) {
    if (!req.session.alunoRA) {
        return res.redirect("/");
    }

    next();
}

// rota inicial
app.get("/", (req, res) => {
    res.send("Servidor do Portal Universitario funcionando!");
});

// rota de login
app.post("/login", async (req, res) => {
    try {
        const { ra, senha } = req.body; // receber RA e senha

        if (!ra || !senha) {
            return res.status(400).json({
                mensagem: "Informe o RA e a senha."
            });
        }

        const [alunos] = await conexao.execute(
            "select * from alunos where ra = ?",
            [ra]
        );

        if (alunos.length === 0) {
            return res.status(401).json({
                mensagem: "RA ou senha incorreta."
            });
        }

        const aluno = alunos[0];

        // comparar senhas
        const senhaCorreta = await bcrypt.compare(
            senha,
            aluno.senha_hash
        );

        if (!senhaCorreta) {
            return res.status(401).json({
                mensagem: "RA ou senha incorretos."
            });
        }

        // armazena o RA na sessão
        req.session.alunoRA = aluno.ra;

        // retorna a configuração do login
        res.json({
            mensagem: "Login realizado com sucesso!"
        });
    } catch (erro) {
        console.log("Erro no login:", erro.message);

        res.status(500).json({
            mensagem: "Erro interno do servidor."
        });
    }
});

// area do aluno com acesso protegido
app.get("/aluno", verificarAutenticacao, (req, res) => {
    res.sendFile(path.join(__dirname, "../privado/aluno.html"));
});

app.get("/api/aluno", verificarAutenticacao, async (req, res) => {
    try {
        const [alunos] = await conexao.execute(
            "select ra, nome, curso, periodo, email, situacao from alunos where ra = ?",
            [req.session.alunoRA]
        );

        if (alunos.length === 0) {
            return res.status(404).json({
                mensagem: "Aluno não encontrado."
            });
        }

        res.json(alunos[0]);
    } catch (erro) {
        console.log("Erro ao consultar aluno:", erro.message);

        res.status(500).json({
            mensagem: "Erro interno do servidor."
        });
    }
});

// encerra a sessão do aluno
app.post("/logout", (req, res) => {
    req.session.destroy((erro) => {
        if(erro) {
            console.log("Erro ao encerrar sessão:", erro.message);

            return res.status(500).json({
                mensagem: "Erro ao sair do sistema."
            });
        }

        res.clearCookie("connect.sid");

        res.json({
            mensagem: "Logout realizado com sucesso!"
        });
    });
});

// inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});