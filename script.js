document.getElementById('generateCard').addEventListener('click', generateCard);

const dogFacts = {
    husky: [
        'Huskies are known for their thick fur coats and striking blue eyes.',
        'They were originally bred as sled dogs in Arctic regions.',
        'Huskies are very energetic and require lots of exercise.'
    ],
    labrador: [
        'Labradors are one of the most popular dog breeds in the world.',
        'They are known for their friendly and outgoing nature.',
        'Labradors are often used as guide dogs and in search and rescue missions.'
    ],
    // Add more breeds and facts here
    // ...
    default: [
        'Dogs are known as man’s best friend.',
        'They have been domesticated for thousands of years.',
        'Dogs have an incredible sense of smell.'
    ]
};

function getRandomFact(breed) {
    const facts = dogFacts[breed] || dogFacts['default'];
    return facts[Math.floor(Math.random() * facts.length)];
}

function generateCard() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            const cardContainer = document.getElementById('cardContainer');
            
            // Clear any existing card
            cardContainer.innerHTML = '';

            const imageUrl = data.message;
            const breed = imageUrl.split('/')[4];

            const card = document.createElement('div');
            card.className = 'card';

            const cardImage = document.createElement('img');
            cardImage.src = imageUrl;
            cardImage.alt = `Image of a ${breed}`;

            const cardContent = document.createElement('div');
            cardContent.className = 'card-content';

            const cardTitle = document.createElement('h3');
            cardTitle.innerText = breed.charAt(0).toUpperCase() + breed.slice(1);

            const cardDescription = document.createElement('p');
            cardDescription.innerText = getRandomFact(breed);

            cardContent.appendChild(cardTitle);
            cardContent.appendChild(cardDescription);
            card.appendChild(cardImage);
            card.appendChild(cardContent);

            cardContainer.appendChild(card);
        })
        .catch(error => console.error('Error fetching dog image:', error));
}
