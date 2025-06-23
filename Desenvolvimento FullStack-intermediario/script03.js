//Promisses

let buscaDados = new Promise((resolve, reject) => {
    let sucesso = true;
    setTimeout(() => {
        if (sucesso) {
            resolve("Dados obtidos com sucesso!!!!");
        } else {
            reject("Erro ao carregar dados");
        }
    }, 2000);
});

buscaDados.then(mensagem => {
    console.log(mensagem);
}).catch(erro => {
    console.log(erro)
})

