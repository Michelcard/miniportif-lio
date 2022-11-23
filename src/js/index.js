
/* OBJETIVO - quando clicarmos na aba temos que mostrar o 
   conteúdo da aba que foi clicada pelo usuário
   e esconder o conteúdo da aba anterior
   
   - passo 1 - dar um jeito de pegar os elementos que
   representam as abas no HTML
   
   - passo 2 - dar um jeito de identificar o clique no
   elemento aba
   
   - passo 3 - quando o usuário clicar, desmarcar a aba
   selecionada
   
   - passo 4 - marcar a aba clicada como selecionada
   
   - passo 5 - esconder o conteudo anterior
   
   - passo 6 - mostrar o conteudo da aba selecionada
   
   */

// passo 1 - 
const abas = document.querySelectorAll(".aba");

// passo 2 - 
abas.forEach(aba => {
    aba.addEventListener("click", function () {
        console.log("cliclou na aba", aba);

        if (aba.classList.contains("selecionado")) {
            return;
        }
        
        selecionarAba(aba)
        mostraInformacoesDaAba(aba)
        

    });
});

function selecionarAba(aba){
    // passo 3 -
    const abaSelecionada = document.querySelector(".aba.selecionado")
    abaSelecionada.classList.remove("selecionado");

    // passo 4 -
    aba.classList.add("selecionado");
}

function mostraInformacoesDaAba(aba){
    // passo 5 -
    const informacaoSelecionada = document.querySelector(".informacao.selecionado");
    informacaoSelecionada.classList.remove
    ("selecionado");
   
    // passo 6 -
    const idDoelementoDeinformacoesDaAba = `informacao-${aba.id}`

    const informacaoASerMostrada = document.getElementById(idDoelementoDeinformacoesDaAba)
    informacaoASerMostrada.classList.add("selecionado")
    
}