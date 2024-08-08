document.getElementById('generateCard').addEventListener('click', generateCard);

function generateCard() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            const cardContainer = document.getElementById('cardContainer');
            const card = document.createElement('div');
            card.className = 'card';

            const cardImage = document.createElement('img');
            cardImage.src = data.message;
            cardImage.alt = 'Random Dog Image';

            const cardContent = document.createElement('div');
            cardContent.className = 'card-content';
            cardContent.innerText = 'Here is a random dog image for you!';

            card.appendChild(cardImage);
            card.appendChild(cardContent);

            cardContainer.appendChild(card);
        })
        .catch(error => console.error('Error fetching dog image:', error));
}
