document.getElementById('generateCard').addEventListener('click', generateCard);

const dogFacts = {
    husky: [
        'Huskies are known for their thick fur coats and striking blue eyes.',
        'They were originally bred as sled dogs in Arctic regions.',
        'Huskies are very energetic and require lots of exercise.',
        'Huskies have a unique howl and are known for being talkative.',
        'They are known for their endurance and ability to pull heavy loads over long distances.',
        'Huskies have a strong prey drive and may not get along well with smaller animals.',
        'They are known for being escape artists and require secure fencing.',
        'Huskies have almond-shaped eyes, which can be blue, brown, or even one of each color.',
        'They have a double coat that keeps them warm in cold climates but also sheds heavily.',
        'Huskies are independent and can be challenging to train, requiring an experienced owner.'
    ],
    labrador: [
        'Labradors are one of the most popular dog breeds in the world.',
        'They are known for their friendly and outgoing nature.',
        'Labradors are often used as guide dogs and in search and rescue missions.',
        'They have a "soft mouth," which allows them to carry things without damaging them.',
        'Labradors love water and are excellent swimmers.',
        'They have webbed toes that help them swim efficiently.',
        'Labradors are prone to obesity if not properly exercised.',
        'They are highly trainable and often excel in obedience training.',
        'Labradors have a short, dense coat that is water-resistant.',
        'They come in three colors: black, yellow, and chocolate.'
    ],
    germanShepherd: [
        'German Shepherds are highly intelligent and versatile working dogs.',
        'They are often used in police and military roles due to their trainability and loyalty.',
        'German Shepherds are known for their courage and protective instincts.',
        'They have a strong, muscular build and are capable of running at high speeds.',
        'German Shepherds are prone to hip dysplasia, a common joint problem in large breeds.',
        'They are very loyal to their families and can be aloof with strangers.',
        'German Shepherds have a thick double coat that sheds year-round.',
        'They are often used as service dogs for people with disabilities.',
        'German Shepherds require a lot of mental and physical stimulation to prevent boredom.',
        'They are known for their keen sense of smell and are often used in search and rescue missions.'
    ],
    beagle: [
        'Beagles are small, compact, and hardy dogs known for their excellent sense of smell.',
        'They were originally bred for hunting hare, known as "beagling."',
        'Beagles are known for their distinctive howls, barks, and baying.',
        'They are friendly and good with children, making them excellent family pets.',
        'Beagles are curious and love to explore, often following their noses to new scents.',
        'They have a short, easy-to-care-for coat that comes in a variety of colors.',
        'Beagles are pack animals and generally get along well with other dogs.',
        'They are prone to obesity if not properly exercised and monitored.',
        'Beagles are known for their determination and can be stubborn during training.',
        'They have a strong prey drive and may chase small animals if not properly trained.'
    ],
    bulldog: [
        'Bulldogs are known for their loose, wrinkled skin and distinctive pushed-in nose.',
        'They are a calm and courageous breed, originally used for bull-baiting.',
        'Bulldogs are prone to breathing problems due to their short muzzles.',
        'They are affectionate and good with children, making them excellent family pets.',
        'Bulldogs have a tendency to drool and snore due to their facial structure.',
        'They are not very active and require only moderate exercise.',
        'Bulldogs are sensitive to extreme temperatures, especially heat.',
        'They have a short coat that requires minimal grooming.',
        'Bulldogs are known for their stubbornness, which can make training challenging.',
        'They have a strong bond with their families and are known for being loyal companions.'
    ],
    poodle: [
        'Poodles are highly intelligent and easily trainable, often excelling in dog sports.',
        'They come in three sizes: standard, miniature, and toy.',
        'Poodles have a hypoallergenic coat that sheds minimally, making them good for allergy sufferers.',
        'They are known for their curly coats, which require regular grooming.',
        'Poodles were originally bred as water retrievers and are excellent swimmers.',
        'They are energetic and require regular mental and physical exercise.',
        'Poodles are known for their elegance and often compete in dog shows.',
        'They are good with children and other pets when properly socialized.',
        'Poodles are prone to health issues such as hip dysplasia and eye problems.',
        'They are known for their versatility and adaptability to various living situations.'
    ],
    goldenRetriever: [
        'Golden Retrievers are known for their friendly and tolerant attitudes.',
        'They are often used as therapy dogs due to their gentle nature.',
        'Golden Retrievers are excellent swimmers and were originally bred to retrieve game from water.',
        'They have a dense, water-repellent outer coat that requires regular grooming.',
        'Golden Retrievers are highly trainable and often excel in obedience competitions.',
        'They are prone to obesity if not given enough exercise.',
        'Golden Retrievers are known for their strong bond with their families and are great with children.',
        'They are prone to certain health issues, including hip dysplasia and cancer.',
        'Golden Retrievers have a natural instinct to carry things in their mouths.',
        'They are social dogs and do best in a home where they get plenty of attention.'
    ],
    dachshund: [
        'Dachshunds are small, long-bodied dogs with short legs, originally bred for hunting badgers.',
        'They are known for their courage and tenacity, often described as having a "big dog" attitude.',
        'Dachshunds come in three coat types: smooth, longhaired, and wirehaired.',
        'They are prone to back problems due to their long spine and short rib cage.',
        'Dachshunds are playful and love to dig, a trait from their hunting ancestry.',
        'They can be stubborn and challenging to train but are very loyal to their families.',
        'Dachshunds are prone to obesity, which can exacerbate their back problems.',
        'They are known for their distinctive bark, which is surprisingly loud for their size.',
        'Dachshunds are very affectionate and bond closely with their owners.',
        'They are good with children but may be wary of strangers and other animals.'
    ],
    boxer: [
        'Boxers are strong, muscular dogs known for their boundless energy and playful nature.',
        'They were originally bred for hunting large game and as guard dogs.',
        'Boxers are known for their distinctive square-shaped head and strong jaws.',
        'They are very loyal and protective of their families, making them excellent guard dogs.',
        'Boxers are intelligent but can be stubborn, requiring consistent training.',
        'They are prone to heart conditions, including cardiomyopathy and aortic stenosis.',
        'Boxers are highly social dogs and do not do well when left alone for long periods.',
        'They are known for their "boxing" behavior, where they use their front paws to play or defend.',
        'Boxers have a short coat that requires minimal grooming but does shed.',
        'They are very active and require plenty of exercise to keep them happy and healthy.'
    ],
    rottweiler: [
        'Rottweilers are strong and powerful dogs originally bred for herding livestock and pulling carts.',
        'They are known for their loyalty and protective instincts, often serving as guard dogs.',
        'Rottweilers are intelligent and confident, requiring consistent training and socialization.',
        'They have a short, dense coat that is black with distinct tan markings.',
        'Rottweilers are prone to joint problems, including hip and elbow dysplasia.',
        'They are known for their calm demeanor but can be aloof with strangers.',
        'Rottweilers are highly trainable and often excel in obedience and protection work.',
        'They require regular exercise to prevent boredom and destructive behavior.',
        'Rottweilers are good with children when properly socialized but may be too powerful for small children.',
        'They are prone to certain health issues, including heart problems and cancer.'
    ],
    shihTzu: [
        'Shih Tzus are small, sturdy dogs with a long, flowing coat, originally bred for companionship.',
        'They were favored by Chinese royalty and were often kept as lap dogs in the imperial court.',
        'Shih Tzus are known for their friendly and outgoing personality.',
        'They have a distinctive pushed-in face, which can lead to breathing problems.',
        'Shih Tzus require regular grooming to maintain their long coat and prevent matting.',
        'They are prone to dental problems due to their small mouths and crowded teeth.',
        'Shih Tzus are generally good with children and other pets when properly socialized.',
        'They are known for being affectionate and love to be around their owners.',
        'Shih Tzus have a strong sense of independence but are also eager to please.',
        'They are a relatively low-energy breed and do well in apartment living.'
    ],
    borderCollie: [
        'Border Collies are known for their intelligence and are often considered the smartest dog breed.',
        'They were originally bred for herding sheep and have a strong work ethic.',
        'Border Collies have a natural instinct to herd anything that moves, including children and other pets.',
        'They require a lot of mental and physical stimulation to prevent boredom.',
        'Border Collies are known for their intense stare, used to control livestock.',
        'They are highly trainable and often excel in dog sports such as agility and obedience.',
        'Border Collies have a thick double coat that can be either smooth or rough.',
        'They are prone to certain health issues, including hip dysplasia and epilepsy.',
        'Border Collies are very loyal to their families but can be reserved with strangers.',
        'They are best suited to active families who can provide plenty of exercise and mental challenges.'
    ],
    yorkshireTerrier: [
        'Yorkshire Terriers, or "Yorkies," are small but feisty dogs known for their long, silky coat.',
        'They were originally bred to catch rats in textile mills in England.',
        'Yorkies are known for their confident and sometimes bossy personality.',
        'They have a strong prey drive and may chase small animals if not properly trained.',
        'Yorkies require regular grooming to maintain their long coat and prevent matting.',
        'They are prone to dental issues due to their small mouths.',
        'Yorkies are very affectionate and bond closely with their owners.',
        'They are a relatively low-shedding breed, making them good for allergy sufferers.',
        'Yorkies are very alert and make excellent watchdogs despite their small size.',
        'They are known for being brave and may not realize how small they are, sometimes challenging much larger dogs.'
    ],
    pug: [
        'Pugs are small, sturdy dogs known for their wrinkled faces and curly tails.',
        'They have a distinctive pushed-in nose, which can lead to breathing problems.',
        'Pugs are known for their playful and affectionate nature, often described as "clowns."',
        'They are prone to obesity if not properly exercised and monitored.',
        'Pugs have a short coat that sheds year-round and requires regular brushing.',
        'They are prone to eye problems due to their prominent eyes and flat faces.',
        'Pugs are generally good with children and other pets when properly socialized.',
        'They are a relatively low-energy breed and do well in apartment living.',
        'Pugs are known for their loyalty and often form strong bonds with their owners.',
        'They are prone to heatstroke due to their brachycephalic (short-nosed) structure and should be kept cool in hot weather.'
    ],
    chihuahua: [
        'Chihuahuas are the smallest dog breed in the world, often weighing less than 6 pounds.',
        'They are known for their big personalities and can be quite bold and confident.',
        'Chihuahuas have a long lifespan, often living 15 years or more.',
        'They come in both long-haired and short-haired varieties.',
        'Chihuahuas are prone to dental problems due to their small mouths.',
        'They are very loyal to their owners but can be wary of strangers.',
        'Chihuahuas are prone to shivering, especially in cold weather or when they are excited.',
        'They are good watchdogs despite their small size, often barking at unfamiliar sounds.',
        'Chihuahuas require minimal exercise but enjoy short walks and playtime.',
        'They are known for being very affectionate and often form a strong bond with one person in the family.'
    ],
    australianShepherd: [
        'Australian Shepherds, or "Aussies," are highly intelligent and energetic dogs originally bred for herding.',
        'They are known for their striking merle coat pattern and bright blue or multi-colored eyes.',
        'Aussies have a strong work ethic and excel in dog sports such as agility and obedience.',
        'They require a lot of mental and physical stimulation to prevent boredom.',
        'Australian Shepherds are very loyal and protective of their families.',
        'They are prone to certain health issues, including hip dysplasia and eye problems.',
        'Aussies are known for their ability to learn quickly and often pick up new commands with ease.',
        'They have a double coat that sheds year-round and requires regular grooming.',
        'Australian Shepherds are generally good with children and other pets when properly socialized.',
        'They are best suited to active families who can provide plenty of exercise and mental challenges.'
    ],
    pomeranian: [
        'Pomeranians are small, fluffy dogs known for their thick double coat and fox-like face.',
        'They are very alert and make excellent watchdogs despite their small size.',
        'Pomeranians are known for their confident and outgoing personalities.',
        'They are prone to dental issues due to their small mouths.',
        'Pomeranians require regular grooming to maintain their thick coat and prevent matting.',
        'They are prone to certain health issues, including luxating patella and tracheal collapse.',
        'Pomeranians are very affectionate and often form a strong bond with their owners.',
        'They are relatively low-energy dogs but enjoy playtime and short walks.',
        'Pomeranians are known for their intelligence and can learn tricks quickly.',
        'They are good with children and other pets when properly socialized but can be wary of strangers.'
    ],
    // Default facts for general dogs
    default: [
        'Dogs are known as man’s best friend.',
        'They have been domesticated for thousands of years.',
        'Dogs have an incredible sense of smell.',
        'Dogs can understand up to 250 words and gestures.',
        'They are very social animals and thrive on interaction with humans and other dogs.',
        'Dogs have sweat glands only in their paws.',
        'The average dog is as intelligent as a two-year-old child.',
        'Dogs’ noses are unique, similar to human fingerprints.',
        'A dog’s sense of smell is 10,000 to 100,000 times more acute than humans.',
        'Dogs have been shown to reduce stress, anxiety, and depression in their owners.'
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
