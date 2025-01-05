// Obter elementos
const cards = document.querySelectorAll('.card img'); // Todas as imagens dos cards
const modal = document.getElementById('modal'); // Modal
const modalContent = document.querySelector('.modal-content'); // Modal content
const modalVideo = document.getElementById('modalVideo'); // Video dentro do modal
const closeBtn = document.querySelector('.close'); // Botão de fechar o modal

// Abrir o modal quando a imagem for clicada
cards.forEach(card => {
    card.addEventListener('click', () => {
        const videoUrl = card.getAttribute('data-video'); // Obter o link do vídeo
        modal.style.display = 'flex'; // Exibe o modal
        modalVideo.src = videoUrl; // Coloca o link do vídeo no iframe
    });
});

// Fechar o modal quando o botão de fechar for clicado
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none'; // Esconde o modal
    modalVideo.src = ''; // Remove o vídeo (para parar a reprodução)
});

// Fechar o modal ao clicar fora do conteúdo
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none'; // Esconde o modal
        modalVideo.src = ''; // Remove o vídeo (para parar a reprodução)
    }
});

// Abrir o resumo dos cards dos sócios
function toggleSummary(card) {
    const summary = card.querySelector('.summary');
    const img = card.querySelector('img'); // Seleciona a imagem dentro do card

    // Fecha todos os outros resumos e remove a classe 'selected' das imagens
    const allSummaries = document.querySelectorAll('.summary');
    const allImages = document.querySelectorAll('.about_card img');
    
    allSummaries.forEach((sum) => {
        if (sum !== summary) {
            sum.classList.remove('visible');
        }
    });
    
    allImages.forEach((image) => {
        if (!image.closest('.about_card').isEqualNode(card)) {
            image.classList.remove('selected'); // Remove a seleção das imagens que não foram clicadas
        }
    });

    // Alterna a visibilidade do resumo clicado
    summary.classList.toggle('visible');

    // Alterna a classe "selected" na imagem
    if (summary.classList.contains('visible')) {
        img.classList.add('selected');
    } else {
        img.classList.remove('selected');
    }
}

// Adiciona um evento global para clicar fora da área das imagens
document.addEventListener('click', function(event) {
    const allCards = document.querySelectorAll('.about_card');
    const clickedOutside = !Array.from(allCards).some(card => card.contains(event.target));

    if (clickedOutside) {
        // Remove a classe "selected" de todas as imagens
        const allImages = document.querySelectorAll('.about_card img');
        allImages.forEach(image => image.classList.remove('selected'));

        // Também fecha todos os resumos
        const allSummaries = document.querySelectorAll('.summary');
        allSummaries.forEach(summary => summary.classList.remove('visible'));
    }
});
