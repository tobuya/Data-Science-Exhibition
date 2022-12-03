const container = document.querySelector('body');
const hamburger = document.querySelector('.menu');
const mobileMenu = document.querySelector('#hamburger');
const closeIcon = document.querySelector('#close-icon');
const featuredSpeakers = document.querySelector('#featured-speakers');

function displayMobileMenu() {
  container.id = 'menu-container';
  mobileMenu.id = 'show-menu';
}

hamburger.addEventListener('click', displayMobileMenu);

closeIcon.addEventListener('click', () => {
  window.location.reload(true);
});

const speakerArray = [
  {
    speakerImg: 'images/avone.jpg',
    speakerName: 'Jeffrey Scholars',
    speakerTitle: 'Head of Artificial Intelligence at Gud Engineering School',
    speakerDescription: 'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  },
  {
    speakerImg: 'images/avtwo.jpg',
    speakerName: 'Christine Angeline',
    speakerTitle: 'Pioneer of Big Data in Customer Loyalty Trust Company',
    speakerDescription: 'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  },
  {
    speakerImg: 'images/avthree.jpg',
    speakerName: 'Thomas O. Mboya',
    speakerTitle: 'Group Chief Data Scientist at Avivo AI & Data Limited',
    speakerDescription: 'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  },
  {
    speakerImg: 'images/avfour.jpg',
    speakerName: 'Charlotte Tikka',
    speakerTitle: 'Award Winning Technology and Educational Speaker',
    speakerDescription: 'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  },
  {
    speakerImg: 'images/avfive.jpg',
    speakerName: 'Rudy Van Persie',
    speakerTitle: 'Professor of Computer Science and Statistics at Utretch Engineering',
    speakerDescription: 'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  },
  {
    speakerImg: 'images/avsix.jpg',
    speakerName: 'Chee Lee Wong',
    speakerTitle: 'Advisory Council Member to state secretary for AI',
    speakerDescription: 'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  },
];

for (let i = 0; i < speakerArray.length; i += 1) {
  featuredSpeakers.innerHTML += `
    <article class="speaker">
      <img src="${speakerArray[i].speakerImg}" class="speaker-img" alt="Speaker Image">
      <div class="speaker-info">
        <h3>${speakerArray[i].speakerName}</h3>
        <p class="speaker-rank">${speakerArray[i].speakerTitle}</p>
        <hr>
        <p>${speakerArray[i].speakerDescription}</p>
      </div>
    </article>
  `;
}