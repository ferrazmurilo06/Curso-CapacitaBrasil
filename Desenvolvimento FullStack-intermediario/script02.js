//Funções 
function calcularArea(largura,altura) {
    return largura * altura;
}

function mostrarMensagem() {
    alert("Dados enviados com sucesso")
}

//Objetos e Métodos

let carro = {
    marca: "Renault",
    modelo: "Duster",
    ano: 2013,
    descrição: function(){
        return `Carro: ${this.marca} ${this.modelo}, Ano: ${this.ano}`
    }
};

//Array e iteração

let listaCompras = ["arroz", "carne", "batata"];

let numeroSorteio = [1,2,3,4];

let aleatorio = ["carro", true, 2, null];

for (i = 0; i < listaCompras.length; i++){
    console.log(listaCompras[i])
}

listaCompras.forEach(function(item){
    console.log(item)
})

// listaCompras.push("feijão");
// console.log(listaCompras)
listaCompras.pop();
console.log(listaCompras)

//Arrow function  e Template literal

const dobro = n => n * 2;

console.log(dobro(4))

let numeros = [1, 2, 3, 4]
let dobrados = numeros.map(n => n *2);
console.log(dobrados)

let nome3 = "Murilo"
let mensagem = `Olá ${nome3}! bem vindo à sua primeira aula.`
console.log(mensagem);