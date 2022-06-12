const respostaElemento = document.querySelector("#resposta")

const inputPergunta = document.querySelector()

const respostas = [
    'não',
    'provavelmente',
    'sim',
]

function fazerPergunta() {

    if(inputPergunta.value == ''){
        alert("Digite sua pergunta")
        return
    }

    const pergunta = '<div>' + inputPergunta.value + '</div>'

    const totalRespostas = respostas.length
    const numeroAleatorio = Math.floor(Math.random() * totalRespostas)
 // Math.random gera um número aleatório abaixo de 1;
 // Math.floor arredonda para o valor mais próximo, que será 0;

    respostaElemento.innerHTML = pergunta + respostas[numeroAleatorio]

    setTimeout(function() {
        respostaElemento.style.opacity = 0; 
    }, 2000)

    // A função acima faz com que o texto irá sumir

}
