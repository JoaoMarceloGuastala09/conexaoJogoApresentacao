const hollowKnightCard = document.getElementById('hollowKnight');
const littleNightmaresCard = document.getElementById('littleNightmares');
const overlay = document.getElementById('overlay');
const overlayContent = document.getElementById('overlayContent');
const closeBtn = document.getElementById('closeBtn');

const jogos = {
    hollowKnight: {
        title: "Hollow Knight",
        description: "Hollow Knight é um jogo de ação e aventura no estilo Metroidvania, desenvolvido pela Team Cherry. Explore cavernas, lute contra inimigos e descubra segredos."
    },
    littleNightmares: {
        title: "Little Nightmares",
        description: "Little Nightmares é um jogo de plataforma e suspense, desenvolvido pela Tarsier Studios. Ajude Six a escapar de um mundo sombrio e assustador."
    }
};

hollowKnightCard.addEventListener('click', () => {
    overlayContent.innerHTML = `<h2>${jogos.hollowKnight.title}</h2><p>${jogos.hollowKnight.description}</p>`;
    overlay.classList.add('active');
});

littleNightmaresCard.addEventListener('click', () => {
    overlayContent.innerHTML = `<h2>${jogos.littleNightmares.title}</h2><p>${jogos.littleNightmares.description}</p>`;
    overlay.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    overlay.classList.remove('active');
});
