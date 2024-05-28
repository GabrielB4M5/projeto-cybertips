function openCard(audioElementId, newSource, templateName) {
    const card = document.getElementById('card');
    const cardContent = document.getElementById('card-content');
    cardContent.innerHTML = templateName;
    card.style.display = 'block';
    let audioElement = document.getElementById(audioElementId);
    if (audioElement) {
        let sourceElement = audioElement.getElementsByTagName('source')[0];
        if (sourceElement) {
            sourceElement.src = newSource;
            audioElement.load();
        }
    }
}

function closeCard(audioElementId) {
    let audioElement = document.getElementById(audioElementId);
    audioElement.pause();
    const card = document.getElementById('card');
    card.style.display = 'none';
}

document.getElementById('ok-button').addEventListener('click', function () {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('blur-background').style.display = 'none';
});