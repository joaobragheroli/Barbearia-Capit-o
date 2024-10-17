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
        const weightedSum = Object.keys(ratings.stars).reduce((acc, star) => acc + (star * ratings.stars[star]), 0);
        return totalReviews > 0 ? (weightedSum / totalReviews).toFixed(1) : 0;
    }

    // Atualiza a UI com a média e a quantidade de avaliações
    function updateUI() {
        const averageRating = calculateAverageRating(ratings);
        document.getElementById('average-rating').textContent = averageRating;
        document.getElementById('total-reviews').textContent = ratings.totalReviews;

        // Atualiza o progresso das estrelas
        for (let i = 1; i <= 5; i++) {
            const bar = document.getElementById(`bar-${i}`);
            const percentage = (ratings.stars[i] / ratings.totalReviews) * 100 || 0;
            bar.style.width = `${percentage}%`;
            document.getElementById(`reviews-${i}`).textContent = ratings.stars[i];
        }
        document.getElementById('star-rating').textContent = '★'.repeat(Math.round(averageRating)) + '☆'.repeat(5 - Math.round(averageRating));
    }

    // Adiciona a avaliação ao Firestore
    async function submitRating(rating) {
        try {
            await db.collection('Avaliacao').add({
                rating: rating,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            });

            // Atualiza os dados locais
            ratings.totalReviews++;
            ratings.stars[rating]++;
            updateUI();
        } catch (error) {
            console.error('Erro ao enviar avaliação:', error);
        }
    }

    // Configura o evento de clique nas estrelas
    document.querySelectorAll('.star-input').forEach(star => {
        star.addEventListener('click', () => {
            const ratingValue = parseInt(star.getAttribute('data-value'));
            submitRating(ratingValue);
        });
    });

    // Recupera avaliações existentes do Firestore em tempo real
    function fetchRatings() {
        db.collection('Avaliacao').onSnapshot(snapshot => {
            ratings.totalReviews = 0;
            ratings.stars = {
                5: 0,
                4: 0,
                3: 0,
                2: 0,
                1: 0,
            };

            snapshot.forEach(doc => {
                const data = doc.data();
                if (data.rating) {
                    ratings.totalReviews++;
                    ratings.stars[data.rating]++;
                }
            });
            updateUI();
        }, error => {
            console.error('Erro ao buscar avaliações:', error);
        });
    }

    fetchRatings();
});
