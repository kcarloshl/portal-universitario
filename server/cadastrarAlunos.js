const conexao = require("./db");
const bcrypt = require("bcrypt");

const alunos = [
    {
        ra: "2026001",
        senha: "Carlos@123",
        nome: "Carlos Henrique",
        curso: "Sistemas de Informação",
        periodo: 6,
        email: "carloshenrique@email.com",
        situacao: "Matriculado"
    },
    {
        ra: "2026002",
        senha: "Ana@123",
        nome: "Ana Beatriz",
        curso: "Engenharia de Software",
        periodo: 4,
        email: "anabeatriz@email.com",
        situacao: "Matriculado"
    },
    {
        ra: "2026003",
        senha: "Pedro@123",
        nome: "Pedro Lucas",
        curso: "Ciência da Computação",
        periodo: 2,
        email: "pedrolucas@email.com",
        situacao: "Matriculado"
    }
];

async function cadastrarAlunos() {
    try {
        for (const aluno of alunos) {
            // Gera o hash da senha
            const senhaHash = await bcrypt.hash(aluno.senha, 10);

            // Insere o aluno no banco de dados
            await conexao.execute(
                `insert into alunos (ra, senha_hash, nome, curso, periodo, email, situacao) 
                values (?, ?, ?, ?, ?, ?, ?)`,
                [
                    aluno.ra,
                    senhaHash,
                    aluno.nome,
                    aluno.curso,
                    aluno.periodo,
                    aluno.email,
                    aluno.situacao
                ]
            );

            console.log(`Aluno(a) ${aluno.nome} cadastrado(a)!`);
        }

        console.log("Todos os alunos foram cadastrados!");
    } catch (erro) {
        console.error("Erro ao cadastrar alunos:", erro.message);
    } finally {
        await conexao.end();
    }
}

cadastrarAlunos();