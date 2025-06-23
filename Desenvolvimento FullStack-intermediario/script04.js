async function carregarDados() {
    try {
        let resposta = await buscaDados;
        console.log(resposta);
    }
    catch (erro) {
        console.log(erro)
    }
}
carregarDados();

async function buscarUsuario() {
    try {
        let resposta = await fetch('https://jsonplaceholder.typicode.com/posts')
        let usuario = await resposta.json();
        console.log(usuario);
    } catch (erro) {
        console.log('Erro:', erro);
    }
}
buscarUsuario();