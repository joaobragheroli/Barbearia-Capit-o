document.addEventListener('DOMContentLoaded', () => {
    // Dados de avaliação
    const ratings = {
    totalReviews: 0,
    stars: {
    5: 0,
    4: 0,
    3: 0,
    2: 0,
    1: 0,
    }
    };
    // Calcula a média
function calculateAverageRating(ratings) {
    const totalReviews = Object.values(ratings.stars).reduce((acc, value) => acc + value, 0);
    const weightedSum =
        5 * ratings.stars[5] +
        4 * ratings.stars[4] +
        3 * ratings.stars[3] +
        2 * ratings.stars[2] +
        1 * ratings.stars[1];
    return (totalReviews === 0) ? 0 : (weightedSum / totalReviews).toFixed(1);
}

// Atualiza as barras de progresso
function updateProgressBars(ratings) {
    const totalReviews = ratings.totalReviews;
    for (let star = 1; star <= 5; star++) {
        const percentage = totalReviews === 0 ? 0 : (ratings.stars[star] / totalReviews) * 100;
        document.getElementById(`bar-${star}`).style.width = `${percentage}%`;
        document.getElementById(`reviews-${star}`).textContent = ratings.stars[star].toLocaleString();
    }
}

// Atualiza a avaliação média e total de reviews
function updateAverageRating(ratings) {
    const averageRating = calculateAverageRating(ratings);
    document.getElementById('average-rating').textContent = averageRating;
    document.getElementById('total-reviews').textContent = ratings.totalReviews.toLocaleString();

    // Atualiza estrelas visuais
    const fullStars = Math.floor(averageRating);
    const starRatingElement = document.getElementById('star-rating');
    let starsHTML = '';
    for (let i = 0; i < 5; i++) {
        starsHTML += i < fullStars ? '★' : '☆';
    }
    starRatingElement.innerHTML = starsHTML;
}

// Inicialização
updateProgressBars(ratings);
updateAverageRating(ratings);

// Função para lidar com cliques de estrelas
function handleStarClick(value) {
    ratings.stars[value]++;
    ratings.totalReviews++;
    updateProgressBars(ratings);
    updateAverageRating(ratings);
}

// Eventos de clique nas estrelas
const starInputs = document.querySelectorAll('.star-input');
starInputs.forEach(star => {
    star.addEventListener('click', (e) => {
        const value = parseInt(e.target.getAttribute('data-value'));
        handleStarClick(value);
        // Marca a estrela selecionada
        starInputs.forEach(s => s.classList.remove('selected'));
        for (let i = 0; i < value; i++) {
            starInputs[i].classList.add('selected');
        }
    });
});
});