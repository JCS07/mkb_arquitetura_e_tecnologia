// Controle Sala
const switchSala = document.getElementById("switch-sala");
const imageSala = document.getElementById("image-sala");

// Controle BWC
const switchBWC = document.getElementById("switch-bwc");
const imageBWC = document.getElementById("image-bwc");

// Controle Geral
const switchGeral = document.getElementById("switch-geral");
const imageGeral = document.getElementById("image-geral"); // Imagem geral sobreposta

if (switchSala && imageSala) {
    switchSala.addEventListener("change", () => {
        const isChecked = switchSala.checked;
        imageSala.src = isChecked 
            ? "assets/portfolio_projetos/loft_tablet_sala_acesso.png" 
            : "assets/portfolio_projetos/loft_tablet_apagado.png";
        updateGeneralImage();
    });
}

if (switchBWC && imageBWC) {
    switchBWC.addEventListener("change", () => {
        const isChecked = switchBWC.checked;
        imageBWC.src = isChecked 
            ? "assets/portfolio_projetos/loft_tablet_bwc_acesso.png" 
            : "assets/portfolio_projetos/loft_tablet_apagado.png";
        updateGeneralImage();
    });
}

if (switchGeral) {
    switchGeral.addEventListener("change", () => {
        const isChecked = switchGeral.checked;
        imageGeral.src = isChecked 
            ? "assets/portfolio_projetos/loft_tablet_geral_acesso.png" 
            : "assets/portfolio_projetos/loft_tablet_apagado.png";
        updateGeneralImage();
    });
}