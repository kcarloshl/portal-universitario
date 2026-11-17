const formLogin = document.getElementById("formLogin");
const campoRA = document.getElementById("ra");
const campoSenha = document.getElementById("senha");
const mensagem = document.getElementById("mensagem");

formLogin.addEventListener("submit", async (evento) => {
    evento.preventDefault(); // impede recarregamento

    const ra = campoRA.value;
    const senha = campoSenha.value;

    try {
        // envia os dados ao servidor
        const resposta = await fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                ra: ra,
                senha: senha
            })
        });

        const dados = await resposta.json();

        if (resposta.ok) {
            window.location.href = "/aluno";
        } else {
            mensagem.textContent = dados.mensagem;
            mensagem.style.color = "red";
        }
    } catch (erro) {
        mensagem.textContent = "Erro ao conectar com o servidor.";
        mensagem.style.color = "red";

        console.log("Erro", erro);
    }
});