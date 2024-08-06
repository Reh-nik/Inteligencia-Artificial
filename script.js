const caixaPrincipal =document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    
    {
        enunciado: "Como você vê a Inteligência Artificial?",
        alternativas: [
            {
                texto: "É incrível",
                afirmacao: "pode fazer coisas incríveis mesmo,"
            },
            {
                texto: "É assustador",
                afirmacao: "pode ser assustador mesmo,"
            }
        ]
    },
    {
        enunciado: "O que você acredita que uma pessoa que trabalha em um meio artístico(Pintores, Dubladores, Designers, Desenhistas, etc.) pode se sentir ao ver a evolução da tecnologia(IA)",
        alternativas: [
            {
                texto:  "Pode se sentir frustada, pois perderá diversas oportunidades de demonstrar sua paixão.",
                afirmacao: "porém traz tanto coisas boas como coisas ruins,"
            },
            {
                texto: "Pode considerar a Inteligência Artificial como uma forma de facilitar seus trabalhos.",
                afirmacao: "traz diversas maneiras de facilitar nosso trabalho,"
            }
           
        ]
    },
    {
        enunciado: "Pelo que você percebe, a Inteligência Artificial é usada atualmente da maneira adequada?",
        alternativas: [
            {
                texto: "Sim e é uma ótima forma de percebermos a evolução tecnológica.",
                afirmacao: "muitas pessoas conseguem fazer bom uso,"
            },
            {
                texto: "Não, é usada na maioria das vezes apenas para facilitar, desvalorizando os valores pessoais.",
                afirmacao: "mas devemos ser cada vez mais responsáveis com o uso"
            }
            
        ]
    },
    {
        enunciado: "Em um futuro próximo como você imagina a Inteligência Artificial?",
        alternativas: [
            {
                texto: "Evoluindo cada vez mais para facilitar diversas funções importantes",
                afirmacao: "para conseguirmos aproveitar o melhor que ela nos oferece"
            },
            {
                texto: "Tirando a oportunidade de muitas pessoas",
                afirmacao: "precisamos sempre estar atualizados para poder fazer um bom uso da IA"
            }
        ]
    },
  
]; 


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Não podemos dizer com certeza como a Inteligência Artificial vai ser no futuro, atualmente traz muitas expectativas de como será, porém sempre devemos tomar cuidado";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = " ";
}

mostraPergunta();