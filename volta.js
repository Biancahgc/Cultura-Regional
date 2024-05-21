// Seleciona os botões das regiões
let botoesRegioes = document.querySelectorAll('.titulo');

// Adiciona um evento de clique para cada botão
botoesRegioes.forEach(botao => {
    botao.addEventListener('click', function() {
        // Obtém o texto do botão clicado para determinar a região
        // Redireciona para a página da região correspondente
        window.location.href = 'Project.html'; // Supondo que os arquivos HTML tenham nomes correspondentes às regiões (por exemplo, norte.html, sul.html, etc.)
    });
});
