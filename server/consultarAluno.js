const conexao = require("./db");

// biblioteca para ler dados do terminal
const readline = require("node:readline/promises");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function consultarAluno() {
    try {
        const ra = await rl.question("Digite o RA do aluno: ");
        const [alunos] = await conexao.execute(
            "select ra, nome, curso, periodo, email, situacao from alunos where ra = ?",
            [ra]
        );

        if (alunos.length === 0) {
            console.log("Aluno não encontrado!");
        } else {
            console.log("\nAluno encontrado!");
            console.table(alunos);
        }
    } catch (erro) {
        console.error("Erro ao consultar aluno:", erro.message);
    } finally {
        rl.close();
        await conexao.end();
    }
}

consultarAluno();