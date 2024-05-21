let botaoProximo = document.getElementById('depois');
let botaoAnterior = document.getElementById('antes');
let slider = document.querySelector('.slides');
let botoesRegioes = document.querySelectorAll('.regioes button');

// Adiciona um evento de clique para cada botão
botoesRegioes.forEach(botao => {
    botao.addEventListener('click', function() {
        // Obtém o texto do botão clicado para determinar a região
        let regiao = this.innerText.toLowerCase();
        
        // Redireciona para a página da região correspondente
        window.location.href = regiao + '.html'; // Supondo que os arquivos HTML tenham nomes correspondentes às regiões (por exemplo, norte.html, sul.html, etc.)
    });
});

let tempoExecucao = 3000;
let tempoProximoAutomatico = 7000;

function avancarProximoSlide() {
    botaoProximo.click();
    setTimeout(avancarProximoSlide, tempoProximoAutomatico);
}

setTimeout(avancarProximoSlide, tempoProximoAutomatico);

botaoProximo.onclick = function(){
    mostrarSlider('depois');    
}

botaoAnterior.onclick = function(){
    mostrarSlider('antes');    
}

let tempoExecucaoTimeout;

function mostrarSlider(tipo){
    let itensSlider = slider.querySelectorAll('.item');

    if(tipo === 'depois'){
        let primeiroItem = itensSlider[0];
        primeiroItem.classList.add('antes'); // Adiciona classe "antes" ao primeiro item antes de mover para o final
        slider.appendChild(primeiroItem);
    } else {
        let ultimoItem = itensSlider[itensSlider.length - 1];
        ultimoItem.classList.add('depois'); // Adiciona classe "depois" ao último item antes de mover para o início
        slider.prepend(ultimoItem);
    }

    clearTimeout(tempoExecucaoTimeout);
    tempoExecucaoTimeout = setTimeout(() => {
        resetarClasses();
    }, tempoExecucao);
}

function resetarClasses() {
    let itensSlider = slider.querySelectorAll('.item');
    itensSlider.forEach(item => {
        item.classList.remove('antes');
        item.classList.remove('depois');
    });
}