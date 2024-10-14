//PASSO 1 - precisamos criar uma variavel no JS para trabalhar com a listagem de pokedevs
const listaSelecaoPokedevs = document.querySelectorAll('.pokedev');

//PASSO 2 - Identificar o evento de clique no elemento da listagem
listaSelecaoPokedevs.forEach(pokedev => {
    pokedev.addEventListener("click", () => {
        //PASSO - 3 remover a classe aberto so do cartao que ta aberto
        esconderCartaoPokedev();

        //PASSO - 4 ao clicar em um pokedev da listagem pegamso o ide desse pokedev para saber qual cartao abrir
        const idPokedevSelecionado = mostrarCartaoPokedev(pokedev);

        //PASSO - 5 - remover a classe ativo que marca o pokedev que esta aberto na listagem
        destivarPokedevNaListagem();

        //PASSO - 6 adicionar a classe ativo no pokedev selecionado na listagem
        ativarPokedevNaListagem(idPokedevSelecionado);

    })
})
function ativarPokedevNaListagem(idPokedevSelecionado) {
    const pokedevSelecionadoNaListagem = document.getElementById(idPokedevSelecionado);
    pokedevSelecionadoNaListagem.classList.add('ativo');
}

function destivarPokedevNaListagem() {
    const pokedevAtivoNaListagem = document.querySelector(".ativo");
    pokedevAtivoNaListagem.classList.remove('ativo');
}

function mostrarCartaoPokedev(pokedev) {
    const idPokedevSelecionado = pokedev.attributes.id.value;
    const idDoCartaoPokedevParaAbrir = "cartao-" + idPokedevSelecionado;

    const CartaoPokedevParaAbrir = document.getElementById(idDoCartaoPokedevParaAbrir);
    CartaoPokedevParaAbrir.classList.add('aberto');
    return idPokedevSelecionado;
}

function esconderCartaoPokedev() {
    const cartaoPokedevAberto = document.querySelector(".aberto");
    cartaoPokedevAberto.classList.remove("aberto");
}

