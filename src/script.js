function openCard(templateName) {
    const card = document.getElementById('card');
    const cardContent = document.getElementById('card-content');
    cardContent.textContent = templateName;
    card.style.display = 'block';
}

function closeCard() {
    const card = document.getElementById('card');
    card.style.display = 'none';
}
