async function carregarDadosAluno() {
    try {
        const resposta = await fetch("/api/aluno");

        if (!resposta.ok) {
            throw new Error("Não foi possível carregar os dados do aluno.");
        }

        const aluno = await resposta.json();

        document.getElementById("nome").textContent = aluno.nome;
        document.getElementById("ra").textContent = aluno.ra;
        document.getElementById("curso").textContent = aluno.curso;
        document.getElementById("periodo").textContent = aluno.periodo;
        document.getElementById("email").textContent = aluno.email;
        document.getElementById("situacao").textContent = aluno.situacao;
    } catch (erro) {
        console.log("Erro:", erro.message);
    }
}

async function sairDoSistema() {
    try {
        const resposta = await fetch("/logout", {
            method: "POST"
        });

        const dados = await resposta.json();

        if (resposta.ok) {
            window.location.href = "/";
        } else {
            alert(dados.mensagem);
        }
    } catch (erro) {
        console.log("Erro ao sair:", erro.message);
        alert("Não foi possível sair do sistema.");
    }
}

document.getElementById("btnSair").addEventListener("click", sairDoSistema);

carregarDadosAluno();